// ICONS
import { CgProfile } from "react-icons/cg";
import { FaBook } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="-SIDEBAR- w-[18em] h-full border-2 border-[#990000] rounded-md flex flex-col items-center gap-4 px-2">
      <h1 className="text-2xl font-bold mt-2">Dashboard</h1>
      <div className="-MENU- w-full flex flex-col gap-3">
        <div className="-PROFILE- flex gap-2 items-center rounded-md border-2 border-[#990000] px-3 bg-[#990000] text-white py-2 hover:cursor-pointer hover:text-[#990000] hover:bg-white transition-all duration-300">
          <CgProfile />
          <span>Profile</span>
        </div>
        <div className="-PROFILE- flex gap-2 items-center rounded-md border-2 border-[#990000] px-3 bg-[#990000] text-white py-2 hover:cursor-pointer hover:text-[#990000] hover:bg-white transition-all duration-300">
          <FaBook />
          <span>Journal</span>
        </div>
        `
      </div>
      `
    </div>
  );
};
export default Sidebar;
