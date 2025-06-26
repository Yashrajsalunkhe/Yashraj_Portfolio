import React from "react";
import GitHubCalendar from "react-github-calendar";

const GithubCalendar = () => {
  // Use the 'theme' prop for color customization (see react-github-calendar docs)
  const theme = {
    light: ["#ebedf0", "#c6e48b", "#7bc96f", "#239a3b", "#196127"],
    dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
  };
  return (
    <div className="flex flex-col items-center my-8">
      <h2 className="text-2xl font-bold mb-4">GitHub Contributions</h2>
      <GitHubCalendar
        username="Yashrajsalunkhe"
        blockSize={15}
        blockMargin={5}
        fontSize={16}
        theme={theme}
      />
    </div>
  );
};

export default GithubCalendar;
