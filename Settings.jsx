import { useState, useEffect } from "react";
import { base44 } from "@/api/base44Client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Settings as SettingsIcon, Save, Check } from "lucide-react";

export default function Settings() {
  const [appName, setAppName] = useState("TeachWithMe");
  const [welcomeMsg, setWelcomeMsg] = useState("Welcome to your literacy learning journey!");
  const [settingsId, setSettingsId] = useState(null);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      const me = await base44.auth.me();
      const settings = await base44.entities.AppSettings.list();
      if (settings.length > 0) {
        setSettingsId(settings[0].id);
        setAppName(settings[0].app_name || "TeachWithMe");
        setWelcomeMsg(settings[0].welcome_message || "Welcome to your literacy learning journey!");
      } else {
        // Create default settings
        const created = await base44.entities.AppSettings.create({
          app_name: "TeachWithMe",
          welcome_message: "Welcome to your literacy learning journey!",
          owner_email: me.email,
        });
        setSettingsId(created.id);
      }
      setLoading(false);
    }
    load();
  }, []);

  async function handleSave() {
    setSaving(true);
    await base44.entities.AppSettings.update(settingsId, {
      app_name: appName,
      welcome_message: welcomeMsg,
    });
    setSaving(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="w-8 h-8 border-4 border-muted border-t-primary rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="max-w-lg mx-auto space-y-6">
      <h1 className="font-heading font-bold text-xl text-foreground flex items-center gap-2">
        <SettingsIcon className="w-5 h-5 text-primary" />
        Settings
      </h1>

      <div className="bg-card rounded-2xl border border-border p-6 space-y-5">
        <div>
          <Label className="text-sm font-medium">App Name</Label>
          <Input
            value={appName}
            onChange={(e) => setAppName(e.target.value)}
            className="mt-1.5"
            placeholder="TeachWithMe"
          />
          <p className="text-xs text-muted-foreground mt-1">Displayed in the navigation bar</p>
        </div>

        <div>
          <Label className="text-sm font-medium">Welcome Message</Label>
          <Textarea
            value={welcomeMsg}
            onChange={(e) => setWelcomeMsg(e.target.value)}
            className="mt-1.5"
            rows={3}
            placeholder="Welcome message for the home page"
          />
          <p className="text-xs text-muted-foreground mt-1">Shown on the home page hero section</p>
        </div>

        <Button onClick={handleSave} disabled={saving} className="w-full gap-2 rounded-xl">
          {saved ? <Check className="w-4 h-4" /> : <Save className="w-4 h-4" />}
          {saving ? "Saving..." : saved ? "Saved!" : "Save Changes"}
        </Button>
      </div>
    </div>
  );
}