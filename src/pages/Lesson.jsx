import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { base44 } from "@/api/base44Client";
import { getSessionByNumber, getPhaseInfo } from "@/lib/curriculum";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowLeft, ArrowRight, BookOpen, Lightbulb } from "lucide-react";
import ReactMarkdown from "react-markdown";

export default function Lesson() {
  const navigate = useNavigate();
  const urlParams = new URLSearchParams(window.location.search);
  const studentId = urlParams.get("studentId");
  const sessionNum = parseInt(urlParams.get("session"));
  const isReview = urlParams.get("review") === "true";

  const [student, setStudent] = useState(null);
  const [checklist, setChecklist] = useState([]);
  const [loading, setLoading] = useState(true);

  const session = getSessionByNumber(sessionNum);
  const phase = session ? getPhaseInfo(session.phase) : null;

  useEffect(() => {
    async function load() {
      if (!studentId || !sessionNum) return navigate("/");
      const students = await base44.entities.Student.filter({ id: studentId });
      if (students.length === 0) return navigate("/");
      setStudent(students[0]);
      if (session) {
        setChecklist(session.lesson.checklist.map(() => false));
      }
      setLoading(false);
    }
    load();
  }, [studentId, sessionNum]);

  function toggleCheck(idx) {
    setChecklist((prev) => prev.map((v, i) => (i === idx ? !v : v)));
  }

  function handleContinueToGame() {
    navigate(`/game?studentId=${studentId}&session=${sessionNum}`);
  }

  if (loading || !session) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="w-8 h-8 border-4 border-muted border-t-primary rounded-full animate-spin" />
      </div>
    );
  }

  const allChecked = checklist.every(Boolean);

  return (
    <div className="max-w-lg mx-auto space-y-6">
      {/* Header */}
      <div className="flex items-center gap-3">
        <Button variant="ghost" size="icon" onClick={() => navigate(-1)} className="rounded-xl">
          <ArrowLeft className="w-5 h-5" />
        </Button>
        <div>
          <div className="flex items-center gap-2">
            <span className="text-sm">{phase?.emoji}</span>
            <span className="text-xs font-medium text-muted-foreground">
              Session {sessionNum} {isReview ? "(Review)" : ""}
            </span>
          </div>
          <h1 className="font-heading font-bold text-foreground">{session.title}</h1>
        </div>
      </div>

      {/* Lesson content */}
      <div className="bg-card rounded-2xl border border-border p-6 space-y-4">
        <div className="flex items-center gap-2 text-primary">
          <BookOpen className="w-4 h-4" />
          <span className="text-xs font-semibold uppercase tracking-wider">Lesson Content</span>
        </div>
        <div className="prose prose-sm max-w-none text-foreground">
          <ReactMarkdown>{session.lesson.content}</ReactMarkdown>
        </div>
      </div>

      {/* Tutor tips */}
      <div className="bg-secondary/10 rounded-2xl border border-secondary/20 p-5">
        <div className="flex items-center gap-2 text-secondary-foreground mb-2">
          <Lightbulb className="w-4 h-4 text-secondary" />
          <span className="text-xs font-semibold uppercase tracking-wider">Tutor Tip</span>
        </div>
        <p className="text-sm text-secondary-foreground/80">{session.lesson.tips}</p>
      </div>

      {/* Checklist */}
      <div className="bg-card rounded-2xl border border-border p-6 space-y-4">
        <h3 className="font-heading font-bold text-sm text-foreground">Readiness Checklist</h3>
        <div className="space-y-3">
          {session.lesson.checklist.map((item, idx) => (
            <label key={idx} className="flex items-start gap-3 cursor-pointer group">
              <Checkbox
                checked={checklist[idx]}
                onCheckedChange={() => toggleCheck(idx)}
                className="mt-0.5"
              />
              <span className={`text-sm transition-colors ${checklist[idx] ? "text-primary line-through" : "text-foreground"}`}>
                {item}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Continue button */}
      {!isReview && (
        <Button
          onClick={handleContinueToGame}
          disabled={!allChecked}
          className="w-full gap-2 rounded-xl"
          size="lg"
        >
          Continue to Practice Game <ArrowRight className="w-4 h-4" />
        </Button>
      )}

      {isReview && (
        <Button
          onClick={() => navigate(-1)}
          variant="outline"
          className="w-full gap-2 rounded-xl"
          size="lg"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Dashboard
        </Button>
      )}
    </div>
  );
}