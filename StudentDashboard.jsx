import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { base44 } from "@/api/base44Client";
import { getSessionByNumber, getPhaseInfo, TOTAL_SESSIONS } from "@/lib/curriculum";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, PlayCircle, RotateCcw, Trophy, BookOpen, CheckCircle2 } from "lucide-react";
import PhaseProgressBar from "@/components/PhaseProgressBar";
import DailyLimitBanner from "@/components/DailyLimitBanner";
import CompletedSessionsList from "@/components/CompletedSessionsList";

export default function StudentDashboard() {
  const navigate = useNavigate();
  const urlParams = new URLSearchParams(window.location.search);
  const studentId = urlParams.get("studentId");

  const [student, setStudent] = useState(null);
  const [progressList, setProgressList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [dailyDone, setDailyDone] = useState(false);

  useEffect(() => {
    async function load() {
      if (!studentId) return navigate("/");
      const [students, progress] = await Promise.all([
        base44.entities.Student.filter({ id: studentId }),
        base44.entities.SessionProgress.filter({ student_id: studentId }),
      ]);
      if (students.length === 0) return navigate("/");
      setStudent(students[0]);
      setProgressList(progress);

      // Check daily limit
      const today = new Date().toISOString().split("T")[0];
      const doneToday = progress.some((p) => p.completed_date?.startsWith(today));
      setDailyDone(doneToday);
      setLoading(false);
    }
    load();
  }, [studentId]);

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="w-8 h-8 border-4 border-muted border-t-primary rounded-full animate-spin" />
      </div>
    );
  }

  const currentSession = getSessionByNumber(student.current_session);
  const phase = getPhaseInfo(student.current_phase || 1);
  const completedSessions = progressList.filter((p) => p.game_completed).map((p) => p.session_number);
  const overallProgress = Math.round((completedSessions.length / TOTAL_SESSIONS) * 100);
  const avgScore = progressList.length > 0
    ? Math.round(progressList.filter(p => p.game_score != null).reduce((a, b) => a + b.game_score, 0) / progressList.filter(p => p.game_score != null).length)
    : 0;

  // Check if previous session can be reviewed
  const prevSession = student.current_session > 1 ? getSessionByNumber(student.current_session - 1) : null;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-3">
        <Button variant="ghost" size="icon" onClick={() => navigate("/")} className="rounded-xl">
          <ArrowLeft className="w-5 h-5" />
        </Button>
        <div className="flex items-center gap-3 flex-1">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-heading font-bold"
            style={{ backgroundColor: student.avatar_color || "#10b981" }}
          >
            {student.name?.charAt(0)?.toUpperCase()}
          </div>
          <div>
            <h1 className="font-heading font-bold text-lg text-foreground">{student.name}</h1>
            <p className="text-xs text-muted-foreground">
              {phase?.emoji} Phase {student.current_phase}: {phase?.name}
            </p>
          </div>
        </div>
      </div>

      {/* Stats cards */}
      <div className="grid grid-cols-3 gap-3">
        <div className="bg-card rounded-xl border border-border p-3 text-center">
          <p className="text-2xl font-heading font-extrabold text-primary">{overallProgress}%</p>
          <p className="text-[10px] text-muted-foreground font-medium uppercase tracking-wider mt-0.5">Progress</p>
        </div>
        <div className="bg-card rounded-xl border border-border p-3 text-center">
          <p className="text-2xl font-heading font-extrabold text-secondary">{completedSessions.length}</p>
          <p className="text-[10px] text-muted-foreground font-medium uppercase tracking-wider mt-0.5">Sessions</p>
        </div>
        <div className="bg-card rounded-xl border border-border p-3 text-center">
          <p className="text-2xl font-heading font-extrabold text-accent">{avgScore}%</p>
          <p className="text-[10px] text-muted-foreground font-medium uppercase tracking-wider mt-0.5">Avg Score</p>
        </div>
      </div>

      <Tabs defaultValue="session" className="space-y-4">
        <TabsList className="w-full grid grid-cols-3 bg-muted rounded-xl p-1 h-auto">
          <TabsTrigger value="session" className="rounded-lg text-xs py-2 font-medium">Session</TabsTrigger>
          <TabsTrigger value="completed" className="rounded-lg text-xs py-2 font-medium">Completed</TabsTrigger>
          <TabsTrigger value="progress" className="rounded-lg text-xs py-2 font-medium">Progress</TabsTrigger>
        </TabsList>

        <TabsContent value="session" className="space-y-4">
          {student.graduated ? (
            <div className="bg-gradient-to-br from-secondary/10 to-accent/10 rounded-2xl border border-secondary/30 p-8 text-center">
              <div className="text-5xl mb-3">🎓</div>
              <h3 className="font-heading font-bold text-xl text-foreground mb-1">Congratulations!</h3>
              <p className="text-sm text-muted-foreground">{student.name} has graduated from the program!</p>
            </div>
          ) : dailyDone ? (
            <DailyLimitBanner />
          ) : currentSession ? (
            <div className="bg-card rounded-2xl border border-border p-6 space-y-4">
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-sm">{phase?.emoji}</span>
                    <span className="text-xs font-medium text-muted-foreground">
                      Session {student.current_session}
                    </span>
                  </div>
                  <h3 className="font-heading font-bold text-lg text-foreground">
                    {currentSession.title}
                  </h3>
                </div>
                {student.current_session === TOTAL_SESSIONS && (
                  <Trophy className="w-6 h-6 text-secondary" />
                )}
              </div>

              <div className="flex gap-3">
                <Button
                  onClick={() => navigate(`/lesson?studentId=${studentId}&session=${student.current_session}`)}
                  className="flex-1 gap-2 rounded-xl"
                >
                  <PlayCircle className="w-4 h-4" />
                  Start Lesson
                </Button>
              </div>
            </div>
          ) : null}

          {/* Previous lesson review */}
          {prevSession && !student.graduated && (
            <button
              onClick={() => navigate(`/lesson?studentId=${studentId}&session=${student.current_session - 1}&review=true`)}
              className="w-full text-left bg-muted/50 rounded-xl border border-border p-4 hover:bg-muted transition-colors"
            >
              <div className="flex items-center gap-3">
                <RotateCcw className="w-4 h-4 text-muted-foreground" />
                <div>
                  <p className="text-xs text-muted-foreground">Review previous lesson</p>
                  <p className="text-sm font-medium text-foreground">{prevSession.title}</p>
                </div>
              </div>
            </button>
          )}
        </TabsContent>

        <TabsContent value="completed">
          <CompletedSessionsList progressList={progressList} />
        </TabsContent>

        <TabsContent value="progress">
          <PhaseProgressBar currentSession={student.current_session} completedSessions={completedSessions} />
        </TabsContent>
      </Tabs>
    </div>
  );
}