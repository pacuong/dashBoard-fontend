import {
  LayoutDashboard,
  Monitor,
  BarChart3,
  Globe,
  Layers,
  Heart,
  Settings,
  FileText,
  Files,
  FileSpreadsheet,
} from "lucide-react";
import NavItem from "../Nav";
import KriptonLogo from "../KriptonLogo";
import ChipLogo from "../ChipLogo";

interface SidebarProps {
  isSidebarOpen: boolean;
}

const Sidebar = ({ isSidebarOpen }: SidebarProps) => {
  const menuItems = [
    { icon: LayoutDashboard, label: "Dashboard" },
    { icon: Monitor, label: "Apps" },
    { icon: BarChart3, label: "Charts" },
    { icon: Globe, label: "Bootstrap" },
    { icon: Layers, label: "Material" },
    { icon: Heart, label: "Plugins" },
    { icon: Settings, label: "Widget" },
    { icon: FileText, label: "Forms" },
    {
      icon: Files,
      label: "Pages",
      children: [
        {
          label: "Quản lý Excel",
          path: "/excel",
          icon: FileSpreadsheet,
        },
      ],
    },
  ];

  return (
    <div
      className={`${
        isSidebarOpen ? "w-72" : "w-24"
      } bg-white-100 shadow-md transition-all duration-300 flex flex-col h-screen `}
    >
      {/* Logo */}
      <div
        className={`flex items-center h-20 px-4 ${
          isSidebarOpen ? "justify-start" : "justify-center"
        }`}
      >
        {isSidebarOpen ? (
          <KriptonLogo isSidebarOpen={true} />
        ) : (
          <div className="p-2 rounded-md cursor-pointer">
            <ChipLogo size={40} fillColor="#343C6A" text="B" />
          </div>
        )}
      </div>

      {/* Nav Items */}
      <nav className="flex-1 mt-4 px-2 space-y-1">
        {menuItems.map((item, index) => (
          <NavItem
            key={index}
            icon={item.icon}
            label={item.label}
            isSidebarOpen={isSidebarOpen}
            children={item.children}
          />
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
