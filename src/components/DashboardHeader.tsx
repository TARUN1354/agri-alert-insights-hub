import { Bell } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function DashboardHeader() {
  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-5xl font-bold tracking-tight bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-transparent">
          Agriculture Monitoring Dashboard
        </h1>
        <p className="text-lg text-white/60 max-w-3xl mx-auto">
          Real-time monitoring and analytics for optimal agricultural performance
        </p>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card className="bg-gradient-to-br from-white/10 via-white/5 to-transparent border-white/20 backdrop-blur-xl hover:scale-105 transition-all duration-500">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-white/60">Total Alerts</p>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">247</h2>
              </div>
              <div className="p-3 bg-white/5 rounded-xl">
                <Bell className="h-6 w-6 text-white/80" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">This Week</p>
                <h2 className="text-2xl font-bold">32</h2>
              </div>
              <Bell className="h-8 w-8 text-secondary" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Critical Alerts</p>
                <h2 className="text-2xl font-bold">5</h2>
              </div>
              <Bell className="h-8 w-8 text-destructive" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Alert Types</p>
                <h2 className="text-2xl font-bold">4</h2>
              </div>
              <Bell className="h-8 w-8 text-muted-foreground" />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
