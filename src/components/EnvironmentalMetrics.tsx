
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Thermometer, Droplets, Gauge, Leaf } from "lucide-react";

export function EnvironmentalMetrics() {
  return (
    <div className="mt-8">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Environmental Metrics</h2>
          <p className="text-sm text-muted-foreground mt-1">Real-time monitoring of critical agricultural parameters</p>
        </div>
        <div className="text-sm text-muted-foreground">Last updated: {new Date().toLocaleTimeString()}</div>
      </div>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Soil Moisture</CardTitle>
            <Leaf className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">45%</div>
            <p className="text-xs text-muted-foreground mt-1">Optimal Range: 40-60%</p>
            <div className="flex items-center gap-2 mt-2">
              <span className="text-xs font-medium text-yellow-600">3 alerts this week</span>
              <span className="text-xs text-muted-foreground">↑ 12% from last week</span>
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Water Level</CardTitle>
            <Gauge className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">78%</div>
            <p className="text-xs text-muted-foreground mt-1">Tank Capacity: 5000L</p>
            <div className="flex items-center gap-2 mt-2">
              <span className="text-xs font-medium text-green-600">2 alerts this week</span>
              <span className="text-xs text-muted-foreground">↓ 8% from last week</span>
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Temperature</CardTitle>
            <Thermometer className="h-4 w-4 text-orange-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-orange-600">24°C</div>
            <p className="text-xs text-muted-foreground mt-1">Optimal Range: 20-26°C</p>
            <div className="flex items-center gap-2 mt-2">
              <span className="text-xs font-medium text-green-600">1 alert this week</span>
              <span className="text-xs text-muted-foreground">↓ 15% from last week</span>
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Humidity</CardTitle>
            <Droplets className="h-4 w-4 text-sky-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-sky-600">65%</div>
            <p className="text-xs text-muted-foreground mt-1">Optimal Range: 60-70%</p>
            <div className="flex items-center gap-2 mt-2">
              <span className="text-xs font-medium text-yellow-600">2 alerts this week</span>
              <span className="text-xs text-muted-foreground">↑ 5% from last week</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
