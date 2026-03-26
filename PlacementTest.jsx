import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { base44 } from "@/api/base44Client";
import { PLACEMENT_QUESTIONS } from "@/lib/curriculum";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import confetti from "canvas-confetti";
import PlacementCertificate from "@/components/PlacementCertificate";

export default function PlacementTest() {
  const navigate = useNavigate();
  const urlParams = new URLSearchParams(window.location.search);
  const studentId = urlParams.get("studentId");

  const [student, setStudent] = useState(null);
  const [currentQ, setCurrentQ] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [finished, setFinished] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      if (!studentId) return navigate("/");
      const students = await base44.entities.Student.filter({ id: studentId });
      if (students.length === 0) return navigate("/");
      setStudent(students[0]);
      setLoading(false);
    }
    load();
  }, [studentId]);

  function shuffleOptions(options) {
    return [...options].sort(() => Math.random() - 0.5);
  }

  function handleSelect(option) {
    if (showResult) return;
    setSelected(option);
    const isCorrect = option === PLACEMENT_QUESTIONS[currentQ].answer;
    if (isCorrect) setScore((s) => s + 1);
    setShowResult(true);
  }

  async function handleNext() {
    if (currentQ < PLACEMENT_QUESTIONS.length - 1) {
      setCurrentQ((q) => q + 1);
      setSelected(null);
      setShowResult(false);
    } else {
      // Calculate starting position
      const finalScore = score;
      const percentage = Math.round((finalScore / PLACEMENT_QUESTIONS.length) * 100);
      let startSession = 1;
      let startPhase = 1;

      if (percentage >= 80) {
        startSession = 25;
        startPhase = 3;
      } else if (percentage >= 50) {
        startSession = 13;
        startPhase = 2;
      }

      await base44.entities.Student.update(studentId, {
        placement_completed: true,
        placement_score: percentage,
        current_session: startSession,
        current_phase: startPhase,
      });

      confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
      setFinished(true);
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="w-8 h-8 border-4 border-muted border-t-primary rounded-full animate-spin" />
      </div>
    );
  }

  if (finished) {
    const percentage = Math.round((score / PLACEMENT_QUESTIONS.length) * 100);
    let startPhase = percentage >= 80 ? 3 : percentage >= 50 ? 2 : 1;
    const phaseEmojis = { 1: "🌱", 2: "🌿", 3: "🌳" };
    const phaseNames = { 1: "Seed", 2: "Sprout", 3: "Tree" };

    return (
      <div className="max-w-lg mx-auto py-10 space-y-6">
        <div className="text-center">
          <div className="text-6xl mb-3">🎉</div>
          <h1 className="font-heading font-extrabold text-2xl text-foreground">
            Assessment Complete!
          </h1>
          <p className="text-muted-foreground mt-1">
            {student?.name} scored <span className="font-bold text-foreground">{percentage}%</span>
          </p>
        </div>

        <PlacementCertificate studentName={student?.name} score={percentage} startPhase={startPhase} />

        <Button
          onClick={() => navigate(`/dashboard?studentId=${studentId}`)}
          className="gap-2 rounded-xl w-full"
          size="lg"
        >
          Start Learning <ArrowRight className="w-4 h-4" />
        </Button>
      </div>
    );
  }

  const q = PLACEMENT_QUESTIONS[currentQ];
  const shuffled = shuffleOptions(q.options);
  const progress = ((currentQ + 1) / PLACEMENT_QUESTIONS.length) * 100;

  return (
    <div className="max-w-lg mx-auto space-y-6">
      <div>
        <div className="flex items-center justify-between mb-2">
          <h2 className="font-heading font-bold text-foreground">Placement Assessment</h2>
          <span className="text-xs font-medium text-muted-foreground">
            {currentQ + 1} of {PLACEMENT_QUESTIONS.length}
          </span>
        </div>
        <Progress value={progress} className="h-2" />
      </div>

      <div className="bg-card rounded-2xl border border-border p-6 space-y-5">
        <p className="font-heading font-bold text-lg text-foreground text-center">
          {q.question}
        </p>

        <div className="grid gap-3">
          {shuffled.map((opt) => {
            const isCorrect = opt === q.answer;
            const isSelected = opt === selected;
            let style = "bg-muted/50 border-border hover:border-primary/50 hover:bg-primary/5";
            if (showResult) {
              if (isCorrect) style = "bg-primary/10 border-primary text-primary";
              else if (isSelected && !isCorrect) style = "bg-destructive/10 border-destructive text-destructive";
              else style = "bg-muted/30 border-border opacity-60";
            }

            return (
              <button
                key={opt}
                onClick={() => handleSelect(opt)}
                disabled={showResult}
                className={`w-full text-left px-4 py-3 rounded-xl border text-sm font-medium transition-all ${style}`}
              >
                <div className="flex items-center justify-between">
                  <span>{opt}</span>
                  {showResult && isCorrect && <CheckCircle2 className="w-4 h-4 text-primary" />}
                </div>
              </button>
            );
          })}
        </div>

        {showResult && (
          <Button onClick={handleNext} className="w-full gap-2 rounded-xl">
            {currentQ < PLACEMENT_QUESTIONS.length - 1 ? "Next Question" : "See Results"}
            <ArrowRight className="w-4 h-4" />
          </Button>
        )}
      </div>
    </div>
  );
}