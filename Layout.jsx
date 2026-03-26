import { Outlet, Link, useLocation } from "react-router-dom";
import { Home, BookOpen, BarChart3, Settings, GraduationCap } from "lucide-react";
import { useState, useEffect } from "react";
import { base44 } from "@/api/base44Client";

const NAV_ITEMS = [
  { path: "/", icon: Home, label: "Home" },
  { path: "/progress", icon: BarChart3, label: "Progress" },
  { path: "/settings", icon: Settings, label: "Settings" },
];

export default function Layout() {
  const location = useLocation();
  const [appName, setAppName] = useState("TeachWithMe");

  useEffect(() => {
    async function loadSettings() {
      const settings = await base44.entities.AppSettings.list();
      if (settings.length > 0 && settings[0].app_name) {
        setAppName(settings[0].app_name);
      }
    }
    loadSettings();
  }, []);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Top bar */}
      <header className="sticky top-0 z-50 bg-card/80 backdrop-blur-xl border-b border-border">
        <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <GraduationCap className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-heading font-bold text-lg text-foreground">{appName}</span>
          </Link>
          <nav className="flex items-center gap-1">
            {NAV_ITEMS.map(({ path, icon: Icon, label }) => {
              const isActive = location.pathname === path;
              return (
                <Link
                  key={path}
                  to={path}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                    isActive
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="hidden sm:inline">{label}</span>
                </Link>
              );
            })}
          </nav>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1">
        <div className="max-w-5xl mx-auto px-4 py-6">
          <Outlet />
        </div>
      </main>
    </div>
  );
}