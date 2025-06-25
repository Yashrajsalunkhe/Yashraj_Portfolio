import React from "react";
import VisitorWidget from "../admin/VisitorWidget";
import GeoLocationWidget from "../admin/GeoLocationWidget";
import DevicePieChart from "../admin/DevicePieChart";
import SessionDurationWidget from "../admin/SessionDurationWidget";
import ResumeDownloadWidget from "../admin/ResumeDownloadWidget";
import ErrorLogWidget from "../admin/ErrorLogWidget";
import ContactTable from "../admin/ContactTable";

const AdminAnalyticsSection: React.FC = () => (
  <div className="w-full max-w-6xl mx-auto px-4">
    <div className="flex flex-col items-center justify-center mb-12 mt-20">
      <h1 className="text-5xl font-extrabold text-center bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent tracking-tight drop-shadow-xl mb-2">
        Analytics Overview
      </h1>
      <p className="text-lg text-zinc-500 dark:text-zinc-400 text-center max-w-2xl">
        Get real-time insights into your portfolio's performance, user engagement, and system health. All analytics are updated live for your convenience.
      </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 md:col-span-2">
      <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-lg p-10 flex flex-col items-center justify-center min-h-[340px] max-h-[420px] h-full w-full">
        <h2 className="text-2xl font-bold mb-6 text-center">Real-Time Visitor Stats</h2>
        <div className="w-full flex-1 flex items-center justify-center">
          <VisitorWidget />
        </div>
      </div>
      <div className="bg-white dark:bg-zinc-900 rounded-xl shadow p-6">
        <h2 className="text-xl font-bold mb-4">Geo Location Analytics</h2>
        <GeoLocationWidget />
      </div>
      <div className="bg-white dark:bg-zinc-900 rounded-xl shadow p-6 md:col-span-2">
        <h2 className="text-xl font-bold mb-4">Device & Browser Analytics</h2>
        <DevicePieChart />
      </div>
      <div className="bg-white dark:bg-zinc-900 rounded-xl shadow p-6">
        <h2 className="text-xl font-bold mb-4">Session Duration</h2>
        <SessionDurationWidget />
      </div>
      <div className="bg-white dark:bg-zinc-900 rounded-xl shadow p-6">
        <h2 className="text-xl font-bold mb-4">Resume Downloads</h2>
        <ResumeDownloadWidget />
      </div>
      <div className="bg-white dark:bg-zinc-900 rounded-xl shadow p-6 md:col-span-2">
        <h2 className="text-xl font-bold mb-4">Error Logs</h2>
        <ErrorLogWidget />
      </div>
      <div className="bg-white dark:bg-zinc-900 rounded-xl shadow p-6 md:col-span-2">
        <h2 className="text-xl font-bold mb-4">Contact Form Submissions</h2>
        <ContactTable />
      </div>
    </div>
    
  </div>
);

export default AdminAnalyticsSection;
