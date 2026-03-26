import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { base44 } from "@/api/base44Client";
import { TOTAL_SESSIONS, PHASES, getPhaseInfo } from "@/lib/curriculum";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip } from "recharts";
import { ArrowLeft, TrendingUp } from "lucide-react";

export default function Progress() {
  const navigate = useNavigate();
  const [students, setStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [progressList, setProgressList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      const me = await base44.auth.me();
      const studs = await base44.entities.Student.filter({ tutor_email: me.email });
      setStudents(studs);
      if (studs.length > 0) {
        setSelectedStudent(studs[0].id);
      }
      setLoading(false);
    }
    load();
  }, []);

  useEffect(() => {
    async function loadProgress() {
      if (!selectedStudent) return;
      const progress = await base44.entities.SessionProgress.filter({ student_id: selectedStudent });
      setProgressList(progress);
    }
    loadProgress();
  }, [selectedStudent]);

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="w-8 h-8 border-4 border-muted border-t-primary rounded-full animate-spin" />
      </div>
    );
  }

  const student = students.find((s) => s.id === selectedStudent);
  const completedSessions = progressList.filter((p) => p.game_completed);
  const avgScore = completedSessions.length > 0
    ? Math.round(completedSessions.reduce((a, b) => a + (b.game_score || 0), 0) / completedSessions.length)
    : 0;
  const overallProgress = Math.round((completedSessions.length / TOTAL_SESSIONS) * 100);
  const masteryCount = completedSessions.filter((p) => p.mastery_achieved).length;

  // Chart data - scores per session
  const chartData = completedSessions
    .sort((a, b) => a.session_number - b.session_number)
    .map((p) => ({
      session: `S${p.session_number}`,
      score: p.game_score || 0,
    }));

  // Phase breakdown
  const phaseBreakdown = PHASES.map((phase) => {
    let start, end;
    if (phase.id === 1) { start = 1; end = 12; }
    else if (phase.id === 2) { start = 13; end = 24; }
    else { start = 25; end = 30; }
    
    const phaseSessions = completedSessions.filter(
      (p) => p.session_number >= start && p.session_number <= end
    );
    const phaseAvg = phaseSessions.length > 0
      ? Math.round(phaseSessions.reduce((a, b) => a + (b.game_score || 0), 0) / phaseSessions.length)
      : 0;
    return { ...phase, completed: phaseSessions.length, avg: phaseAvg };
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <h1 className="font-heading font-bold text-xl text-foreground flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-primary" />
          Progress Overview
        </h1>
      </div>

      {students.length === 0 ? (
        <div className="text-center py-16 bg-card rounded-2xl border border-border">
          <p className="text-muted-foreground">No students found. Add a student first!</p>
        </div>
      ) : (
        <>
          <Select value={selectedStudent} onValueChange={setSelectedStudent}>
            <SelectTrigger className="rounded-xl">
              <SelectValue placeholder="Select student" />
            </SelectTrigger>
            <SelectContent>
              {students.map((s) => (
                <SelectItem key={s.id} value={s.id}>{s.name}</SelectItem>
              ))}
            </SelectContent>
          </Select>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="bg-card rounded-xl border border-border p-4 text-center">
              <p className="text-2xl font-heading font-extrabold text-primary">{overallProgress}%</p>
              <p className="text-[10px] text-muted-foreground font-medium uppercase tracking-wider mt-1">Overall</p>
            </div>
            <div className="bg-card rounded-xl border border-border p-4 text-center">
              <p className="text-2xl font-heading font-extrabold text-secondary">{completedSessions.length}</p>
              <p className="text-[10px] text-muted-foreground font-medium uppercase tracking-wider mt-1">Sessions</p>
            </div>
            <div className="bg-card rounded-xl border border-border p-4 text-center">
              <p className="text-2xl font-heading font-extrabold text-accent">{avgScore}%</p>
              <p className="text-[10px] text-muted-foreground font-medium uppercase tracking-wider mt-1">Avg Score</p>
            </div>
            <div className="bg-card rounded-xl border border-border p-4 text-center">
              <p className="text-2xl font-heading font-extrabold text-foreground">{masteryCount}</p>
              <p className="text-[10px] text-muted-foreground font-medium uppercase tracking-wider mt-1">Mastered</p>
            </div>
          </div>

          {/* Chart */}
          {chartData.length > 0 && (
            <div className="bg-card rounded-2xl border border-border p-5">
              <h3 className="font-heading font-bold text-sm text-foreground mb-4">Score History</h3>
              <ResponsiveContainer width="100%" height={200}>
                <BarChart data={chartData}>
                  <XAxis dataKey="session" tick={{ fontSize: 10 }} />
                  <YAxis domain={[0, 100]} tick={{ fontSize: 10 }} />
                  <Tooltip formatter={(value) => [`${value}%`, "Score"]} />
                  <Bar dataKey="score" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          )}

          {/* Phase breakdown */}
          <div className="space-y-3">
            <h3 className="font-heading font-bold text-sm text-foreground">Phase Breakdown</h3>
            {phaseBreakdown.map((p) => (
              <div key={p.id} className="bg-card rounded-xl border border-border p-4 flex items-center gap-4">
                <span className="text-2xl">{p.emoji}</span>
                <div className="flex-1">
                  <p className="text-sm font-heading font-bold text-foreground">{p.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {p.completed}/{p.sessions} sessions · Avg: {p.avg}%
                  </p>
                </div>
                <div className="w-16 h-16 rounded-full border-4 border-muted flex items-center justify-center"
                  style={{ borderColor: p.completed > 0 ? 'hsl(var(--primary))' : undefined }}>
                  <span className="text-xs font-bold">{Math.round((p.completed / p.sessions) * 100)}%</span>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}