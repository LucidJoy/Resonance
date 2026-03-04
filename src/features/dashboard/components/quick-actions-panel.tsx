import { quickActions } from "../data/quick-actions";
import QuickActionCard from "./QuickActionCard";

const QuickActionsPanel = () => {
  console.log("->", quickActions);

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">Quick Actions</h2>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {quickActions.map((action) => (
          <QuickActionCard
            key={action.title}
            title={action.title}
            description={action.description}
            gradient={action.gradient}
            href={action.href}
          />
        ))}
      </div>
    </div>
  );
};

export default QuickActionsPanel;
