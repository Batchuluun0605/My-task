import React from "react";
import UseSidebar, { SidebarItem } from "./UseSidebar";
import { LuLayoutDashboard } from "react-icons/lu";
import { BiBarChart, BiPackage, BiUserCircle } from "react-icons/bi";
import { BsBoxes, BsReceipt } from "react-icons/bs";

const Sidebar = () => {
  return (
    <div>
      <UseSidebar>
        <SidebarItem
          icon={<LuLayoutDashboard size={20} />}
          text={"Dashboard"}
          active
        />
        <SidebarItem
          icon={<BiBarChart size={20} />}
          text={"Statics"}
          alert={true}
        />
        <SidebarItem icon={<BiUserCircle size={20} />} text={"Users"} />
        <SidebarItem icon={<BsBoxes size={20} />} text={"Inventory"} />
        <SidebarItem icon={<BiPackage size={20} />} text={"Orders"} />
        <SidebarItem icon={<BsReceipt size={20} />} text={"Billings"} />
      </UseSidebar>
    </div>
  );
};

export default Sidebar;
