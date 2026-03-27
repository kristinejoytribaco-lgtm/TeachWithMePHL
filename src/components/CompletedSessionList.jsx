import { getSessionByNumber, getPhaseInfo } from "@/lib/curriculum";
import { CheckCircle2, Star } from "lucide-react";

export default function CompletedSessionsList({ progressList }) {
  const completed = progressList
    .filter((p) => p.game_completed)
    .sort((a, b) => b.session_number - a.session_number);

  if (completed.length === 0) {
    return (
      <div className="text-center py-12 bg-card rounded-2xl border border-border">
        <p className="text-4xl mb-2">📝</p>
        <p className="text-sm text-muted-foreground">No completed sessions yet.</p>
        <p className="text-xs text-muted-foreground mt-1">Start your first lesson!</p>
      </div>
    );
  }

  return (
    <div className="space-y-2">
      {completed.map((p) => {
        const session = getSessionByNumber(p.session_number);
        const phase = getPhaseInfo(p.phase);
        return (
          <div key={p.id} className="bg-card rounded-xl border border-border p-4 flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-4 h-4 text-primary" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-foreground truncate">{session?.title || `Session ${p.session_number}`}</p>
              <p className="text-xs text-muted-foreground">
                {phase?.emoji} Phase {p.phase} · Session {p.session_number}
              </p>
            </div>
            <div className="text-right shrink-0">
              <div className="flex items-center gap-1">
                <Star className="w-3 h-3 text-secondary" />
                <span className="text-sm font-bold text-foreground">{p.game_score}%</span>
              </div>
              {p.mastery_achieved && (
                <span className="text-[10px] text-primary font-medium">Mastered</span>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}