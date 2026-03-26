import { Clock } from "lucide-react";

export default function DailyLimitBanner() {
  const now = new Date();
  const midnight = new Date(now);
  midnight.setHours(24, 0, 0, 0);
  const hoursLeft = Math.ceil((midnight - now) / (1000 * 60 * 60));

  return (
    <div className="bg-secondary/10 border border-secondary/30 rounded-2xl p-5 text-center">
      <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-3">
        <Clock className="w-6 h-6 text-secondary" />
      </div>
      <h3 className="font-heading font-bold text-foreground mb-1">
        Great work today! 🌟
      </h3>
      <p className="text-sm text-muted-foreground">
        You've completed today's session. Come back tomorrow for more learning!
      </p>
      <p className="text-xs text-muted-foreground mt-2">
        Resets in ~{hoursLeft} hour{hoursLeft !== 1 ? "s" : ""}
      </p>
    </div>
  );
}