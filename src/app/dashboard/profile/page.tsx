import Sidebar from "@/components/dashboard/sidebar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "dashboard - profile",
  description: "dashboard profile page, it's just for admin",
};

const ProfilePage = () => {
  return (
    <div className="--SIDEBAR-- w-full h-screen">
      <Sidebar />
    </div>
  );
};
export default ProfilePage;
