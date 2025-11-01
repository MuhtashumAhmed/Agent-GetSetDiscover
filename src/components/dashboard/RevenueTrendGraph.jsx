import Select from "react-select";

import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  Area,
  AreaChart,
} from "recharts";

const productSales = [
  { name: "Jan", product1: 120, product2: 95 },
  { name: "Feb", product1: 150, product2: 110 },
  { name: "Mar", product1: 180, product2: 130 },
  { name: "Apr", product1: 160, product2: 140 },
  { name: "May", product1: 200, product2: 170 },
  { name: "Jun", product1: 175, product2: 155 },
  { name: "Jul", product1: 220, product2: 190 },
  { name: "Aug", product1: 210, product2: 185 },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white shadow-lg rounded-md p-3 text-sm">
        <p className="text-gray-500">{label} 2028</p>
        <p className="font-bold text-black">
          Amount: Pkr. {payload[0].value.toLocaleString()}
        </p>
        <p className="text-gray-600">Booking: 18</p>
      </div>
    );
  }
  return null;
};

export default function RevenueTrend() {
  return (
    <div className="w-full  max-w-[584px] md:max-w-[100%] h-[225px] ">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={productSales}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="name"
            tick={{
              fontSize: 11,
              fontWeight: 500,
              fill: "#4C596A",
              fontFamily: "Poppins, sans-serif",
            }}
          />
          <YAxis
            width="auto"
            tick={{
              fontSize: 10,
              fontWeight: 500,
              fill: "#4C596A",
              fontFamily: "Poppins, sans-serif",
            }}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend
            align="left" //  Left align
            verticalAlign="bottom"
            content={({ payload }) => (
              <div className="flex gap-4 ml-4 ">
                {payload.map((entry, index) => (
                  <div
                    key={`item-${index}`}
                    className="flex items-center gap-2  "
                  >
                    {/*  Custom small rounded box */}
                    <span
                      className="w-3 h-3 rounded-[5px]"
                      style={{ backgroundColor: entry.color }}
                    ></span>
                    <span className="text-[12.3px] text-[#0A0A0A] font-manrope ">
                      {entry.value}
                    </span>
                  </div>
                ))}
              </div>
            )}
          />
          <Area
            type="monotone"
            dataKey="product1"
            stroke="#FF6600"
            fill="#FF6600"
          />
          <Area
            type="monotone"
            dataKey="product2"
            stroke="#007DFC"
            fill="#007DFC"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
