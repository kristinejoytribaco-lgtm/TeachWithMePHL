import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { base44 } from "@/api/base44Client";
import { Button } from "@/components/ui/button";
import { Plus, BookOpen, Sparkles } from "lucide-react";
import StudentCard from "@/components/StudentCard";
import AddStudentDialog from "@/components/AddStudentDialog";

export default function Home() {
  const navigate = useNavigate();
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAdd, setShowAdd] = useState(false);
  const [user, setUser] = useState(null);
  const [welcomeMsg, setWelcomeMsg] = useState("Welcome to your literacy learning journey!");

  useEffect(() => {
    async function load() {
      const me = await base44.auth.me();
      setUser(me);
      const [studs, settings] = await Promise.all([
        base44.entities.Student.filter({ tutor_email: me.email }),
        base44.entities.AppSettings.list(),
      ]);
      setStudents(studs);
      if (settings.length > 0 && settings[0].welcome_message) {
        setWelcomeMsg(settings[0].welcome_message);
      }
      setLoading(false);
    }
    load();
  }, []);

  function handleStudentClick(student) {
    if (!student.placement_completed) {
      navigate(`/placement?studentId=${student.id}`);
    } else {
      navigate(`/dashboard?studentId=${student.id}`);
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="w-8 h-8 border-4 border-muted border-t-primary rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Hero */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/10 via-primary/5 to-secondary/10 p-8 sm:p-10">
        <div className="absolute top-4 right-4 text-6xl opacity-20">📚</div>
        <div className="relative">
          <div className="flex items-center gap-2 text-primary mb-2">
            <Sparkles className="w-4 h-4" />
            <span className="text-xs font-semibold uppercase tracking-wider">Literacy Tutor</span>
          </div>
          <h1 className="font-heading font-extrabold text-2xl sm:text-3xl text-foreground mb-2">
            Hello, {user?.full_name?.split(" ")[0] || "Tutor"}! 👋
          </h1>
          <p className="text-sm text-muted-foreground max-w-md">{welcomeMsg}</p>
        </div>
      </div>

      {/* Students section */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-heading font-bold text-lg text-foreground flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-primary" />
            Your Students
          </h2>
          <Button onClick={() => setShowAdd(true)} size="sm" className="gap-2 rounded-xl">
            <Plus className="w-4 h-4" />
            Add Student
          </Button>
        </div>

        {students.length === 0 ? (
          <div className="text-center py-16 bg-card rounded-2xl border border-dashed border-border">
            <div className="text-5xl mb-4">🌱</div>
            <h3 className="font-heading font-bold text-foreground mb-1">No students yet</h3>
            <p className="text-sm text-muted-foreground mb-4">Add your first student to get started!</p>
            <Button onClick={() => setShowAdd(true)} className="gap-2 rounded-xl">
              <Plus className="w-4 h-4" />
              Add Student
            </Button>
          </div>
        ) : (
          <div className="grid gap-3 sm:grid-cols-2">
            {students.map((s) => (
              <StudentCard key={s.id} student={s} onClick={() => handleStudentClick(s)} />
            ))}
          </div>
        )}
      </div>

      <AddStudentDialog
        open={showAdd}
        onOpenChange={setShowAdd}
        tutorEmail={user?.email}
        onStudentAdded={(s) => setStudents([...students, s])}
      />
    </div>
  );
}