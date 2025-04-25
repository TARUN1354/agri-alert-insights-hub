
import { DashboardHeader } from "@/components/DashboardHeader";
import { AlertsOverview } from "@/components/AlertsOverview";
import { EnvironmentalMetrics } from "@/components/EnvironmentalMetrics";

const Index = () => {
  return (
    <div className="min-h-screen bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-indigo-900 via-purple-900 to-pink-900">
      <div className="min-h-screen backdrop-blur-sm bg-black/20">
        <div className="container mx-auto py-12 px-4 space-y-12">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-sky-500/10 blur-3xl -z-10" />
            <DashboardHeader />
          </div>
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 blur-3xl -z-10" />
              <AlertsOverview />
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 blur-3xl -z-10" />
              <EnvironmentalMetrics />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
