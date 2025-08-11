import React, { useEffect, useState } from "react";
import {
  CircularProgressbarWithChildren,
  buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

interface LeetCodeStatsType {
  totalSolved: number;
  totalQuestions: number;
  easySolved: number;
  mediumSolved: number;
  hardSolved: number;
  totalEasy: number;
  totalMedium: number;
  totalHard: number;
}

const LeetCodeStats: React.FC = () => {
  const [data, setData] = useState<LeetCodeStatsType | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("https://leetcode-stats-api.herokuapp.com/RishiGuptha45")
      .then((res) => res.json())
      .then((json) => {
        if (json.status !== "success") throw new Error("Invalid data");
        setData(json);
      })
      .catch(() => setError("Couldn't load LeetCode stats"));
  }, []);

  const solvedPercent = data
    ? Math.round((data.totalSolved / data.totalQuestions) * 100)
    : 0;

  return (
    <section className="relative py-20 px-6 text-white overflow-hidden bg-gradient-to-r from-cyan-500 via-purple-700 to-indigo-800 animate-gradient-x bg-[length:400%_400%]">
      {/* Background Blobs */}
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-yellow-400 rounded-full mix-blend-overlay blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-orange-500 rounded-full mix-blend-overlay blur-3xl opacity-20 animate-blob delay-1000"></div>

      {/* Floating Icons */}
        <img src="/react.png" className="w-10 absolute top-10 left-10 opacity-20 float-1 z-0" />
  <img src="/figma.png" className="w-10 absolute top-16 left-24 opacity-20 float-2 z-0" />
  <img src="/numpy.png" className="w-12 absolute top-20 left-[30%] opacity-20 float-3 z-0" />
  <img src="/supabase.png" className="w-12 absolute bottom-10 right-20 opacity-20 float-4 z-0" />
  <img src="/kotlin.png" className="w-10 absolute top-[40%] right-[10%] opacity-20 float-5 z-0" />
      <img src="/leetcode.png" className="w-10 absolute top-10 left-[10%] opacity-10 animate-float-slow" />
        <img src="/numpy.png" className="w-10 absolute bottom-10 left-[20%] opacity-10 animate-float-medium" />
      <img src="/python.png" className="w-10 absolute bottom-10 right-[10%] opacity-10 animate-float-medium" />
      <img src="/pandas.png" className="w-10 absolute top-[30%] left-[70%] opacity-10 animate-float-fast" />
        <img src="/javascript.png" className="w-10 absolute bottom-[30%] right-[70%] opacity-10 animate-float-slow" />
        <img src="/codechef.png" className="w-10 absolute top-[50%] left-[30%] opacity-10 animate-float-medium" />
        <img src="/java.svg" className="w-10 absolute bottom-[50%] right-[30%] opacity-10 animate-float-fast" />
        <img src="/python.png" className="w-10 absolute top-[70%] left-[50%] opacity-10 animate-float-slow" />
        <img src="/sql.svg" className="w-10 absolute bottom-[70%] right-[50%] opacity-10 animate-float-medium" />
            <img src="/figma.png" className="w-10 absolute bottom-[10%] left-[20%] opacity-10 animate-float-medium" />
      <img src="/n8n.png" className="w-10 absolute bottom-[12%] left-[40%] opacity-10 animate-float-medium" />
      <img src="/html5.png" className="w-10 absolute bottom-[10%] right-[5%] opacity-10 animate-float-slow" />
      <img src="/python.png" className="w-10 absolute bottom-[8%] left-[60%] opacity-10 animate-float-fast" />
      <img src="/github.png" className="w-10 absolute bottom-[12%] right-[20%] opacity-10 animate-float-medium" />
        <img src="/kotlin.png" className="w-10 absolute top-[40%] right-[10%] opacity-20 float-5 z-0" />
  <img src="/github.png" className="w-10 absolute bottom-20 left-[30%] opacity-20 float-2 z-0" />
  <img src="/n8n.png" className="w-10 absolute top-32 left-[50%] opacity-20 float-1 z-0" />
  <img src="/typescript.png" className="w-10 absolute top-20 right-[40%] opacity-20 float-3 z-0" />
  <img src="/tailwindcss.png" className="w-10 absolute bottom-32 left-[20%] opacity-20 float-5 z-0" />
  <img src="/python.png" className="w-10 absolute top-16 right-[30%] opacity-20 float-4 z-0" />
  <img src="/postman.png" className="w-10 absolute bottom-10 left-[40%] opacity-20 float-1 z-0" />
    
        {/* Content */}

      <div className="max-w-5xl mx-auto text-center animate-fade-in-up">
        <h2 className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
          My Code Quest on LeetCode
        </h2>
        <p className="text-lg text-gray-300 italic mb-4">A Trail of Grit, Growth & Algorithms</p>
        <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 mx-auto mb-8"></div>
        <p className="text-xl text-gray-200 max-w-3xl mx-auto">
          Explore my milestones, badges, and the consistent discipline shaping my coding journey.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 items-center text-center animate-fade-in-up mt-12">
        {/* Left: Stat Summary */}
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-yellow-300 mb-4">Problems Breakdown</h3>
          <StatBox label="Easy" color="text-emerald-300" value={data?.easySolved} total={data?.totalEasy} />
          <StatBox label="Medium" color="text-yellow-300" value={data?.mediumSolved} total={data?.totalMedium} />
          <StatBox label="Hard" color="text-rose-400" value={data?.hardSolved} total={data?.totalHard} />
          <p className="text-white mt-4">
            <span className="text-xl font-bold text-cyan-300">{data?.totalSolved}</span> solved out of {data?.totalQuestions}
          </p>
        </div>

        {/* Middle: Circular Chart */}
        <div className="w-60 h-60 mx-auto animate-float-medium">
          <CircularProgressbarWithChildren
            value={solvedPercent}
            strokeWidth={10}
            styles={buildStyles({
              pathColor: "#fbbf24",
              trailColor: "#1e293b",
            })}
          >
            <div className="text-white text-center">
              <p className="text-3xl font-bold">{data?.totalSolved}</p>
              <p className="text-sm text-gray-300">
                / {data?.totalQuestions} Solved
              </p>
              <p className="text-yellow-400 text-xs mt-1">✔ Completion</p>
            </div>
          </CircularProgressbarWithChildren>
          <a
            href="https://leetcode.com/u/RishiGuptha45/"
            target="_blank"
            rel="noopener noreferrer"
            className="block mt-4 text-sm text-yellow-400 hover:underline text-center"
          >
            View Full Profile →
          </a>
        </div>

        {/* Right: Badge Showcase */}
        <div className="text-center animate-fade-in-up delay-500">
          <h3 className="text-2xl font-semibold mb-6 text-yellow-300">Badge Collection</h3>
          <div className="flex flex-wrap justify-center gap-6">
            <img src="/50days 2025.gif" alt="Badge" className="w-24 h-24" />
            <img src="/100badge2025.gif" alt="Badge" className="w-24 h-24" />
            <img src="/200p2025.gif" alt="Badge" className="w-24 h-24" />
            <img src="/50badge2024.gif" alt="Badge" className="w-24 h-24" />
            <img src="/100badge2024.gif" alt="Badge" className="w-24 h-24" />
            <img src="/pandas.gif" alt="Badge" className="w-24 h-24" />
            <img src="/sql50.gif" alt="Badge" className="w-24 h-24" />
          </div>
        </div>
      </div>
    </section>
  );
};

const StatBox = ({
  label,
  color,
  value,
  total
}: {
  label: string;
  color: string;
  value?: number;
  total?: number;
}) => (
  <div
    className={`px-4 py-2 rounded-lg bg-white/10 border border-white/10 backdrop-blur-sm w-48 mx-auto transition-all duration-300 transform hover:scale-105 hover:shadow-xl`}
  >
    <p className={`font-semibold ${color}`}>{label}</p>
    <p className="text-white text-sm">
      {value ?? "--"} / {total ?? "--"}
    </p>
  </div>
);

export default LeetCodeStats;
