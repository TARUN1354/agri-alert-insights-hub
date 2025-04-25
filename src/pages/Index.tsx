
import { DashboardHeader } from "@/components/DashboardHeader";
import { AlertsOverview } from "@/components/AlertsOverview";
import { EnvironmentalMetrics } from "@/components/EnvironmentalMetrics";

const Index = () => {
  return (
    <div className="container mx-auto py-8">
      <DashboardHeader />
      <AlertsOverview />
      <EnvironmentalMetrics />
    </div>
  );
};

export default Index;
