import React from 'react';
import { Link } from 'react-router-dom';
import Dashboard, { DashboardItem } from './Dashboard';
import { User, Home, SquarePen, LogOut, Calendar, LifeBuoy, Settings } from "lucide-react";

const DashboardWriterProfile = () => {
  return (
    <>
      {/* Dashboard */}
      <div className="flex">
        <Dashboard>
          <DashboardItem icon={<Home size={20} />} text="Home" />
          <DashboardItem icon={<SquarePen size={20} />} text="Write Article" />
          <DashboardItem icon={<Calendar size={20} />} text="Consultations" active />
          <DashboardItem icon={<User size={20} />} text="Your Profile" />
          <hr className="my-3 border-gray-600" />
          <DashboardItem icon={<Settings size={20} />} text="Settings" />
          <DashboardItem icon={<LifeBuoy size={20} />} text="Help" />
          <DashboardItem icon={<LogOut size={20} />} text="Log Out" />
        </Dashboard>
        <div className="flex-1 p-8">
          <h1 className="text-2xl font-bold">Coming Soon...</h1>
          <p>This feature is in the works.</p>
        </div>
      </div>
    </>
  );
};

export default DashboardWriterProfile;
