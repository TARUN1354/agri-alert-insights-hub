
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const weeklyData = [
  { name: 'Mon', alerts: 4 },
  { name: 'Tue', alerts: 7 },
  { name: 'Wed', alerts: 5 },
  { name: 'Thu', alerts: 8 },
  { name: 'Fri', alerts: 6 },
  { name: 'Sat', alerts: 4 },
  { name: 'Sun', alerts: 3 },
];

const alertTypes = [
  { name: 'Soil Level', value: 35, color: '#8D6E63' },
  { name: 'Water Level', value: 25, color: '#64B5F6' },
  { name: 'Temperature', value: 20, color: '#FFA726' },
  { name: 'Humidity', value: 20, color: '#4CAF50' },
];

export function AlertsOverview() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Weekly Alert Trends</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={weeklyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="alerts" stroke="#4CAF50" fill="#4CAF50" fillOpacity={0.2} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Alert Distribution</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={alertTypes}
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {alertTypes.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-4">
            {alertTypes.map((type) => (
              <div key={type.name} className="flex items-center">
                <div className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: type.color }} />
                <span className="text-sm">{type.name}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
