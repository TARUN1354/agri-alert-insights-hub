
import { DashboardHeader } from "@/components/DashboardHeader";
import { AlertsOverview } from "@/components/AlertsOverview";
import { EnvironmentalMetrics } from "@/components/EnvironmentalMetrics";

const Index = () => {
  return (
    <div className="min-h-screen bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-slate-900 via-purple-900 to-slate-900">
      <div className="min-h-screen backdrop-blur-[2px] bg-black/10">
        <div className="container mx-auto py-8 px-4 space-y-8">
          <DashboardHeader />
          <div className="grid gap-8 lg:grid-cols-2">
            <AlertsOverview />
            <EnvironmentalMetrics />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
