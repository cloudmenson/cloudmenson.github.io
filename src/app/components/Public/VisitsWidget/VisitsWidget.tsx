// src/app/components/Public/VisitsWidget/VisitsWidget.tsx
"use client";

import React, { useEffect, useState } from "react";
import {
  doc,
  getDoc,
  collection,
  query,
  orderBy,
  limit,
  getDocs,
} from "firebase/firestore";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { db } from "@/app/lib/firebase";

// Реєструємо модулі Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface DailyVisit {
  date: string; // документ названий у форматі YYYY-MM-DD
  count: number;
}

const VisitsWidget: React.FC = () => {
  const [totalVisits, setTotalVisits] = useState<number>(0);
  const [dailyVisits, setDailyVisits] = useState<DailyVisit[]>([]);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        // Загальна кількість відвідувань
        const totalDoc = await getDoc(doc(db, "stats", "visits"));
        if (totalDoc.exists()) {
          setTotalVisits(totalDoc.data().count as number);
        }

        // Останні 7 днів у підколекції stats/visits/daily
        const dailyCol = collection(db, "stats", "visits", "daily");
        const dailyQ = query(dailyCol, orderBy("date", "desc"), limit(7));
        const snap = await getDocs(dailyQ);
        const visits = snap.docs.map((d) => ({
          date: d.id,
          count: (d.data().count as number) || 0,
        }));
        setDailyVisits(visits.reverse()); // від найстаршого до найновішого
      } catch (err) {
        console.error("Error loading visits:", err);
      }
    };
    fetchStats();
  }, []);

  const data = {
    labels: dailyVisits.map((v) => v.date),
    datasets: [
      {
        label: "Visits",
        data: dailyVisits.map((v) => v.count),
        backgroundColor: "rgba(79,70,229,0.7)",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
      title: {
        display: true,
        text: "Last 7 Days Visits",
        font: { size: 16 },
      },
    },
    scales: {
      x: { title: { display: true, text: "Date" } },
      y: { title: { display: true, text: "Visits" }, beginAtZero: true },
    },
  };

  return (
    <div className="bg-white rounded-lg shadow p-6 mb-8">
      <div className="mb-6">
        <span className="text-sm text-gray-500 uppercase block">
          Total Visits
        </span>
        <span className="text-3xl font-bold">
          {totalVisits.toLocaleString()}
        </span>
      </div>
      <Bar data={data} options={options} />
    </div>
  );
};

export default VisitsWidget;
