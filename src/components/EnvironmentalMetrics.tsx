
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Thermometer, Droplets, Gauge, Leaf } from "lucide-react";

export function EnvironmentalMetrics() {
  return (
    <div className="mt-8 p-6 rounded-xl bg-gradient-to-br from-white/5 via-white/10 to-white/5 backdrop-blur-sm border border-white/10">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Environmental Metrics
          </h2>
          <p className="text-sm text-muted-foreground mt-2">
            Real-time monitoring of critical agricultural parameters
          </p>
        </div>
        <div className="text-sm text-muted-foreground bg-background/50 px-4 py-2 rounded-full">
          Last updated: {new Date().toLocaleTimeString()}
        </div>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card className="hover:shadow-xl transition-all duration-300 hover:scale-105 border border-border/50 bg-card/50 backdrop-blur-sm">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Soil Moisture</CardTitle>
            <div className="p-2 bg-green-100 rounded-full">
              <Leaf className="h-4 w-4 text-green-600" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">45%</div>
            <div className="flex items-center gap-2 mt-2">
              <div className="h-2 w-2 rounded-full bg-green-500"></div>
              <p className="text-xs text-muted-foreground">Optimal Range: 40-60%</p>
            </div>
            <div className="flex items-center gap-2 mt-3 text-xs">
              <span className="font-medium px-2 py-1 rounded-full bg-yellow-100 text-yellow-700">3 alerts</span>
              <span className="text-muted-foreground flex items-center gap-1">
                <span className="text-green-500">↑</span> 12% from last week
              </span>
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-xl transition-all duration-300 hover:scale-105 border border-border/50 bg-card/50 backdrop-blur-sm">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Water Level</CardTitle>
            <div className="p-2 bg-blue-100 rounded-full">
              <Gauge className="h-4 w-4 text-blue-600" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">78%</div>
            <div className="flex items-center gap-2 mt-2">
              <div className="h-2 w-2 rounded-full bg-blue-500"></div>
              <p className="text-xs text-muted-foreground">Tank Capacity: 5000L</p>
            </div>
            <div className="flex items-center gap-2 mt-3 text-xs">
              <span className="font-medium px-2 py-1 rounded-full bg-green-100 text-green-700">2 alerts</span>
              <span className="text-muted-foreground flex items-center gap-1">
                <span className="text-red-500">↓</span> 8% from last week
              </span>
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-xl transition-all duration-300 hover:scale-105 border border-border/50 bg-card/50 backdrop-blur-sm">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Temperature</CardTitle>
            <div className="p-2 bg-orange-100 rounded-full">
              <Thermometer className="h-4 w-4 text-orange-600" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-orange-600">24°C</div>
            <div className="flex items-center gap-2 mt-2">
              <div className="h-2 w-2 rounded-full bg-orange-500"></div>
              <p className="text-xs text-muted-foreground">Optimal Range: 20-26°C</p>
            </div>
            <div className="flex items-center gap-2 mt-3 text-xs">
              <span className="font-medium px-2 py-1 rounded-full bg-green-100 text-green-700">1 alert</span>
              <span className="text-muted-foreground flex items-center gap-1">
                <span className="text-red-500">↓</span> 15% from last week
              </span>
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-xl transition-all duration-300 hover:scale-105 border border-border/50 bg-card/50 backdrop-blur-sm">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Humidity</CardTitle>
            <div className="p-2 bg-sky-100 rounded-full">
              <Droplets className="h-4 w-4 text-sky-600" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-sky-600">65%</div>
            <div className="flex items-center gap-2 mt-2">
              <div className="h-2 w-2 rounded-full bg-sky-500"></div>
              <p className="text-xs text-muted-foreground">Optimal Range: 60-70%</p>
            </div>
            <div className="flex items-center gap-2 mt-3 text-xs">
              <span className="font-medium px-2 py-1 rounded-full bg-yellow-100 text-yellow-700">2 alerts</span>
              <span className="text-muted-foreground flex items-center gap-1">
                <span className="text-green-500">↑</span> 5% from last week
              </span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
