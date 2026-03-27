import { PHASES, TOTAL_SESSIONS } from "@/lib/curriculum";

export default function PhaseProgressBar({ currentSession, completedSessions = [] }) {
  let sessionCount = 0;

  return (
    <div className="space-y-3">
      {PHASES.map((phase) => {
        const phaseStart = sessionCount + 1;
        const phaseEnd = sessionCount + phase.sessions;
        sessionCount += phase.sessions;

        const completedInPhase = completedSessions.filter(
          (s) => s >= phaseStart && s <= phaseEnd
        ).length;
        const phaseProgress = Math.round((completedInPhase / phase.sessions) * 100);
        const isActive = currentSession >= phaseStart && currentSession <= phaseEnd;

        return (
          <div
            key={phase.id}
            className={`p-3 rounded-xl border transition-all ${
              isActive ? "border-primary/40 bg-primary/5" : "border-border bg-card"
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <span className="text-lg">{phase.emoji}</span>
                <span className="text-sm font-heading font-bold text-foreground">{phase.name}</span>
                {isActive && (
                  <span className="text-[10px] bg-primary/10 text-primary px-2 py-0.5 rounded-full font-semibold uppercase tracking-wider">
                    Current
                  </span>
                )}
              </div>
              <span className="text-xs font-medium text-muted-foreground">
                {completedInPhase}/{phase.sessions}
              </span>
            </div>
            <div className="h-2 bg-muted rounded-full overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-700"
                style={{
                  width: `${phaseProgress}%`,
                  backgroundColor:
                    phase.id === 1
                      ? "hsl(var(--primary))"
                      : phase.id === 2
                      ? "hsl(var(--secondary))"
                      : "hsl(var(--accent))",
                }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}