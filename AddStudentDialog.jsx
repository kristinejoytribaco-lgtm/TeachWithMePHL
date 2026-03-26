import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { base44 } from "@/api/base44Client";
import { UserPlus } from "lucide-react";

const COLORS = ["#10b981", "#f59e0b", "#8b5cf6", "#ec4899", "#3b82f6", "#ef4444", "#14b8a6", "#f97316"];

export default function AddStudentDialog({ open, onOpenChange, tutorEmail, onStudentAdded }) {
  const [name, setName] = useState("");
  const [color, setColor] = useState(COLORS[0]);
  const [saving, setSaving] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    if (!name.trim()) return;
    setSaving(true);
    const student = await base44.entities.Student.create({
      name: name.trim(),
      tutor_email: tutorEmail,
      current_phase: 1,
      current_session: 1,
      placement_completed: false,
      graduated: false,
      avatar_color: color,
    });
    setSaving(false);
    setName("");
    onStudentAdded(student);
    onOpenChange(false);
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="font-heading">Add a Student</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <Label className="text-sm font-medium">Student Name</Label>
            <Input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter student's name"
              className="mt-1.5"
              autoFocus
            />
          </div>
          <div>
            <Label className="text-sm font-medium">Avatar Color</Label>
            <div className="flex gap-2 mt-2 flex-wrap">
              {COLORS.map((c) => (
                <button
                  key={c}
                  type="button"
                  onClick={() => setColor(c)}
                  className={`w-9 h-9 rounded-xl transition-all ${
                    color === c ? "ring-2 ring-offset-2 ring-primary scale-110" : "hover:scale-105"
                  }`}
                  style={{ backgroundColor: c }}
                />
              ))}
            </div>
          </div>
          <Button type="submit" disabled={!name.trim() || saving} className="w-full gap-2">
            <UserPlus className="w-4 h-4" />
            {saving ? "Adding..." : "Add Student"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}