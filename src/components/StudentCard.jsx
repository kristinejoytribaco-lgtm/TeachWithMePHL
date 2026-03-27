import { getPhaseInfo, TOTAL_SESSIONS } from "@/lib/curriculum";
import { User, ChevronRight } from "lucide-react";

export default function StudentCard({ student, onClick }) {
  const phase = getPhaseInfo(student.current_phase || 1);
  const progress = Math.round(((student.current_session - 1) / TOTAL_SESSIONS) * 100);

  return (
    <button
      onClick={onClick}
      className="w-full text-left bg-card rounded-2xl border border-border p-5 hover:shadow-lg hover:border-primary/30 transition-all duration-300 group"
    >
      <div className="flex items-center gap-4">
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-heading font-bold text-lg shrink-0"
          style={{ backgroundColor: student.avatar_color || "#10b981" }}
        >
          {student.name?.charAt(0)?.toUpperCase() || "S"}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between">
            <h3 className="font-heading font-bold text-foreground truncate">{student.name}</h3>
            <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
          </div>
          <div className="flex items-center gap-2 mt-1">
            <span className="text-sm">{phase?.emoji}</span>
            <span className="text-xs font-medium text-muted-foreground">
              Phase {student.current_phase || 1}: {phase?.name}
            </span>
            {student.graduated && (
              <span className="text-xs bg-secondary/20 text-secondary-foreground px-2 py-0.5 rounded-full font-medium">
                🎓 Graduated
              </span>
            )}
          </div>
          <div className="mt-2">
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs text-muted-foreground">Session {student.current_session || 1} of {TOTAL_SESSIONS}</span>
              <span className="text-xs font-semibold text-primary">{progress}%</span>
            </div>
            <div className="h-1.5 bg-muted rounded-full overflow-hidden">
              <div
                className="h-full bg-primary rounded-full transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>
      </div>
    </button>
  );
}