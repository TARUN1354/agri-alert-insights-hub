
import { DashboardHeader } from "@/components/DashboardHeader";
import { AlertsOverview } from "@/components/AlertsOverview";
import { EnvironmentalMetrics } from "@/components/EnvironmentalMetrics";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto py-8 px-4">
        <DashboardHeader />
        <AlertsOverview />
        <EnvironmentalMetrics />
      </div>
    </div>
  );
};

export default Index;
