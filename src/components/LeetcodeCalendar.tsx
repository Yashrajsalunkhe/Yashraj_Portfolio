import React from "react";

const LeetcodeCalendar = () => {
  return (
    <div className="flex flex-col items-center my-8">
      <h2 className="text-3xl font-extrabold mb-2 text-[#FFA116] tracking-tight">LeetCode Contributions</h2>
      <img
        src="https://leetcard.jacoblin.cool/yashraj_salunkhe?theme=light&ext=heatmap"
        alt="LeetCode Streak and Stats"
        style={{ width: '100%', maxWidth: 700, borderRadius: 12, boxShadow: '0 2px 16px rgba(0,0,0,0.08)' }}
      />
      <p className="text-gray-400 text-sm mt-2">Live stats and streak from your LeetCode profile.</p>
    </div>
  );
};

export default LeetcodeCalendar;
