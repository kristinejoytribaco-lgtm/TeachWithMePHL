import { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { base44 } from "@/api/base44Client";
import { getSessionByNumber, getPhaseInfo, getPhaseForSession, MASTERY_THRESHOLD, TOTAL_SESSIONS } from "@/lib/curriculum";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, ArrowRight, CheckCircle2, XCircle, RotateCcw, Trophy } from "lucide-react";
import confetti from "canvas-confetti";

export default function Game() {
  const navigate = useNavigate();
  const urlParams = new URLSearchParams(window.location.search);
  const studentId = urlParams.get("studentId");
  const sessionNum = parseInt(urlParams.get("session"));

  const [student, setStudent] = useState(null);
  const [currentQ, setCurrentQ] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [finished, setFinished] = useState(false);
  const [loading, setLoading] = useState(true);

  const session = getSessionByNumber(sessionNum);
  const phase = session ? getPhaseInfo(session.phase) : null;

  // Shuffle options once per question
  const shuffledQuestions = useMemo(() => {
    if (!session) return [];
    return session.game.questions.map((q) => ({
      ...q,
      shuffledOptions: [...q.options].sort(() => Math.random() - 0.5),
    }));
  }, [sessionNum]);

  useEffect(() => {
    async function load() {
      if (!studentId || !sessionNum) return navigate("/");
      const students = await base44.entities.Student.filter({ id: studentId });
      if (students.length === 0) return navigate("/");
      setStudent(students[0]);
      setLoading(false);
    }
    load();
  }, [studentId, sessionNum]);

  function handleSelect(option) {
    if (showResult) return;
    setSelected(option);
    const isCorrect = option === shuffledQuestions[currentQ].answer;
    if (isCorrect) {
      setScore((s) => s + 1);
    }
    setShowResult(true);
  }

  async function handleNext() {
    if (currentQ < shuffledQuestions.length - 1) {
      setCurrentQ((q) => q + 1);
      setSelected(null);
      setShowResult(false);
    } else {
      await completeGame();
    }
  }

  async function completeGame() {
    const finalScore = score;
    const totalQuestions = shuffledQuestions.length;
    const percentage = Math.round((finalScore / totalQuestions) * 100);
    const mastery = percentage >= MASTERY_THRESHOLD;
    const today = new Date().toISOString().split("T")[0];

    // Save progress
    await base44.entities.SessionProgress.create({
      student_id: studentId,
      session_number: sessionNum,
      phase: session.phase,
      lesson_completed: true,
      game_completed: true,
      game_score: percentage,
      mastery_achieved: mastery,
      completed_date: today,
    });

    // Advance student if mastery achieved
    if (mastery) {
      const nextSession = sessionNum + 1;
      if (nextSession > TOTAL_SESSIONS) {
        await base44.entities.Student.update(studentId, {
          graduated: true,
          last_session_date: today,
        });
      } else {
        const nextPhase = getPhaseForSession(nextSession);
        await base44.entities.Student.update(studentId, {
          current_session: nextSession,
          current_phase: nextPhase,
          last_session_date: today,
        });
      }
      confetti({ particleCount: 150, spread: 80, origin: { y: 0.6 } });
    } else {
      await base44.entities.Student.update(studentId, {
        last_session_date: today,
      });
    }

    setFinished(true);
  }

  function handleRetry() {
    setCurrentQ(0);
    setScore(0);
    setSelected(null);
    setShowResult(false);
    setFinished(false);
  }

  if (loading || !session) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="w-8 h-8 border-4 border-muted border-t-primary rounded-full animate-spin" />
      </div>
    );
  }

  if (finished) {
    const percentage = Math.round((score / shuffledQuestions.length) * 100);
    const mastery = percentage >= MASTERY_THRESHOLD;
    const isGraduation = mastery && sessionNum >= TOTAL_SESSIONS;

    if (isGraduation) {
      return (
        <div className="max-w-lg mx-auto text-center py-10 space-y-6">
          <div className="text-7xl">🎓</div>
          <h1 className="font-heading font-extrabold text-3xl text-foreground">
            Graduation Day!
          </h1>
          <p className="text-muted-foreground">
            {student?.name} has completed all {TOTAL_SESSIONS} sessions! What an incredible achievement!
          </p>
          <div className="flex justify-center gap-4 text-4xl">
            <span>🎉</span><span>🌟</span><span>📚</span><span>🏆</span>
          </div>
          <Button onClick={() => navigate(`/dashboard?studentId=${studentId}`)} className="gap-2 rounded-xl" size="lg">
            Back to Dashboard <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      );
    }

    return (
      <div className="max-w-lg mx-auto text-center py-10 space-y-6">
        <div className="text-6xl">{mastery ? "🎉" : "💪"}</div>
        <h1 className="font-heading font-extrabold text-2xl text-foreground">
          {mastery ? "Amazing Work!" : "Keep Practicing!"}
        </h1>
        <div className="bg-card rounded-2xl border border-border p-6">
          <p className="text-4xl font-heading font-extrabold mb-1" style={{ color: mastery ? "hsl(var(--primary))" : "hsl(var(--destructive))" }}>
            {percentage}%
          </p>
          <p className="text-sm text-muted-foreground">
            {score} of {shuffledQuestions.length} correct
          </p>
          {mastery ? (
            <div className="flex items-center justify-center gap-2 mt-3 text-primary">
              <Trophy className="w-4 h-4" />
              <span className="text-sm font-semibold">Mastery Achieved!</span>
            </div>
          ) : (
            <p className="text-xs text-muted-foreground mt-3">
              Need {MASTERY_THRESHOLD}% to advance. Try again!
            </p>
          )}
        </div>

        <div className="flex gap-3">
          {!mastery && (
            <Button onClick={handleRetry} variant="outline" className="flex-1 gap-2 rounded-xl" size="lg">
              <RotateCcw className="w-4 h-4" /> Retry
            </Button>
          )}
          <Button
            onClick={() => navigate(`/dashboard?studentId=${studentId}`)}
            className="flex-1 gap-2 rounded-xl"
            size="lg"
          >
            Dashboard <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    );
  }

  const q = shuffledQuestions[currentQ];
  const progressVal = ((currentQ + 1) / shuffledQuestions.length) * 100;

  return (
    <div className="max-w-lg mx-auto space-y-6">
      {/* Header */}
      <div className="flex items-center gap-3">
        <Button variant="ghost" size="icon" onClick={() => navigate(-1)} className="rounded-xl">
          <ArrowLeft className="w-5 h-5" />
        </Button>
        <div className="flex-1">
          <p className="text-xs font-medium text-muted-foreground">
            {phase?.emoji} Practice Game · Session {sessionNum}
          </p>
          <h1 className="font-heading font-bold text-foreground">{session.title}</h1>
        </div>
        <span className="text-xs font-semibold bg-primary/10 text-primary px-2.5 py-1 rounded-full">
          {currentQ + 1}/{shuffledQuestions.length}
        </span>
      </div>

      <Progress value={progressVal} className="h-2" />

      {/* Question */}
      <div className="bg-card rounded-2xl border border-border p-6 space-y-5">
        <p className="font-heading font-bold text-lg text-foreground text-center">
          {q.question}
        </p>

        <div className="grid gap-3">
          {q.shuffledOptions.map((opt) => {
            const isCorrect = opt === q.answer;
            const isSelected = opt === selected;
            let style = "bg-muted/50 border-border hover:border-primary/50 hover:bg-primary/5";
            if (showResult) {
              if (isCorrect) style = "bg-primary/10 border-primary";
              else if (isSelected && !isCorrect) style = "bg-destructive/10 border-destructive";
              else style = "bg-muted/30 border-border opacity-60";
            }

            return (
              <button
                key={opt}
                onClick={() => handleSelect(opt)}
                disabled={showResult}
                className={`w-full text-left px-4 py-3.5 rounded-xl border text-sm font-medium transition-all ${style}`}
              >
                <div className="flex items-center justify-between">
                  <span>{opt}</span>
                  {showResult && isCorrect && <CheckCircle2 className="w-4 h-4 text-primary" />}
                  {showResult && isSelected && !isCorrect && <XCircle className="w-4 h-4 text-destructive" />}
                </div>
              </button>
            );
          })}
        </div>

        {showResult && (
          <Button onClick={handleNext} className="w-full gap-2 rounded-xl">
            {currentQ < shuffledQuestions.length - 1 ? "Next Question" : "See Results"}
            <ArrowRight className="w-4 h-4" />
          </Button>
        )}
      </div>

      {/* Score tracker */}
      <div className="flex items-center justify-center gap-4 text-sm">
        <span className="text-primary font-semibold">✓ {score} correct</span>
        <span className="text-muted-foreground">·</span>
        <span className="text-muted-foreground">{shuffledQuestions.length - currentQ - 1} remaining</span>
      </div>
    </div>
  );
}