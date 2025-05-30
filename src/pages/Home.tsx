import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Line,
  LineChart,
  Pie,
  PieChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { barData, COLORS, lineData, pieData } from "@/utils/datas";
import { renderCustomLabel } from "@/utils/custom-label";

export default function Home() {
  return (
    <div className="flex flex-col">
      <h1 className="font-bold mb-2">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className=" flex flex-col items-center justify-center bg-white p-4 rounded shadow">
          <h2 className="text-lg font-bold mb-2">Interações Mensais</h2>
          <LineChart width={400} height={200} data={lineData}>
            <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="value" stroke="#8884d8" />
          </LineChart>
        </div>

        <div className="bg-white p-4 rounded shadow flex flex-col items-center justify-center">
          <h2 className="text-lg font-bold mb-2">Percentual de Faixa Etária</h2>
          <PieChart width={200} height={200}>
            <Pie
              data={pieData}
              dataKey="value"
              cx="50%"
              cy="50%"
              outerRadius={70}
              label={renderCustomLabel}
            >
              {pieData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </div>

        <div className=" flex flex-col items-center justify-center bg-white p-4 rounded shadow">
          <h2 className="text-lg font-bold mb-2">Peso Descartado Mensal</h2>
          <BarChart width={400} height={200} data={barData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" fill="#82ca9d" />
          </BarChart>
        </div>

        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-lg font-bold mb-2">
            Assista o Último Vídeo Registrado
          </h2>
          <div className="aspect-video w-full">
            <iframe
              className="w-full h-full rounded"
              src="https://www.youtube.com/embed/SfkmJ9h7clM"
              title="YouTube video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
