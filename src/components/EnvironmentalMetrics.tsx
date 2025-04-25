
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Thermometer, Droplets, Gauge, Leaf } from "lucide-react";

export function EnvironmentalMetrics() {
  return (
    <div className="rounded-xl overflow-hidden backdrop-blur-md bg-gradient-to-br from-white/5 via-white/10 to-white/5 border border-white/10">
      <div className="p-6 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Environmental Metrics
            </h2>
            <p className="text-sm text-white/60 mt-2">
              Real-time monitoring of critical agricultural parameters
            </p>
          </div>
          <div className="text-sm text-white/60 bg-white/5 px-4 py-2 rounded-full border border-white/10">
            Last updated: {new Date().toLocaleTimeString()}
          </div>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card className="group hover:scale-105 transition-all duration-300 bg-gradient-to-br from-green-500/10 to-green-500/5 border-green-500/20 backdrop-blur-sm">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-white/90">Soil Moisture</CardTitle>
              <div className="p-2 bg-green-500/20 rounded-full group-hover:bg-green-500/30 transition-colors">
                <Leaf className="h-4 w-4 text-green-400" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-400">45%</div>
              <div className="flex items-center gap-2 mt-2">
                <div className="h-2 w-2 rounded-full bg-green-400 animate-pulse"></div>
                <p className="text-xs text-white/60">Optimal Range: 40-60%</p>
              </div>
              <div className="flex items-center gap-2 mt-3">
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-yellow-500/20 text-yellow-400 border border-yellow-500/20">
                  3 alerts
                </span>
                <span className="text-xs text-white/60 flex items-center gap-1">
                  <span className="text-green-400">↑</span>12% from last week
                </span>
              </div>
            </CardContent>
          </Card>

          <Card className="group hover:scale-105 transition-all duration-300 bg-gradient-to-br from-blue-500/10 to-blue-500/5 border-blue-500/20 backdrop-blur-sm">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-white/90">Water Level</CardTitle>
              <div className="p-2 bg-blue-500/20 rounded-full group-hover:bg-blue-500/30 transition-colors">
                <Gauge className="h-4 w-4 text-blue-400" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-400">78%</div>
              <div className="flex items-center gap-2 mt-2">
                <div className="h-2 w-2 rounded-full bg-blue-400 animate-pulse"></div>
                <p className="text-xs text-white/60">Tank Capacity: 5000L</p>
              </div>
              <div className="flex items-center gap-2 mt-3">
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-green-500/20 text-green-400 border border-green-500/20">
                  2 alerts
                </span>
                <span className="text-xs text-white/60 flex items-center gap-1">
                  <span className="text-red-400">↓</span>8% from last week
                </span>
              </div>
            </CardContent>
          </Card>

          <Card className="group hover:scale-105 transition-all duration-300 bg-gradient-to-br from-orange-500/10 to-orange-500/5 border-orange-500/20 backdrop-blur-sm">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-white/90">Temperature</CardTitle>
              <div className="p-2 bg-orange-500/20 rounded-full group-hover:bg-orange-500/30 transition-colors">
                <Thermometer className="h-4 w-4 text-orange-400" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-orange-400">24°C</div>
              <div className="flex items-center gap-2 mt-2">
                <div className="h-2 w-2 rounded-full bg-orange-400 animate-pulse"></div>
                <p className="text-xs text-white/60">Optimal Range: 20-26°C</p>
              </div>
              <div className="flex items-center gap-2 mt-3">
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-green-500/20 text-green-400 border border-green-500/20">
                  1 alert
                </span>
                <span className="text-xs text-white/60 flex items-center gap-1">
                  <span className="text-red-400">↓</span>15% from last week
                </span>
              </div>
            </CardContent>
          </Card>

          <Card className="group hover:scale-105 transition-all duration-300 bg-gradient-to-br from-sky-500/10 to-sky-500/5 border-sky-500/20 backdrop-blur-sm">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-white/90">Humidity</CardTitle>
              <div className="p-2 bg-sky-500/20 rounded-full group-hover:bg-sky-500/30 transition-colors">
                <Droplets className="h-4 w-4 text-sky-400" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-sky-400">65%</div>
              <div className="flex items-center gap-2 mt-2">
                <div className="h-2 w-2 rounded-full bg-sky-400 animate-pulse"></div>
                <p className="text-xs text-white/60">Optimal Range: 60-70%</p>
              </div>
              <div className="flex items-center gap-2 mt-3">
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-yellow-500/20 text-yellow-400 border border-yellow-500/20">
                  2 alerts
                </span>
                <span className="text-xs text-white/60 flex items-center gap-1">
                  <span className="text-green-400">↑</span>5% from last week
                </span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
