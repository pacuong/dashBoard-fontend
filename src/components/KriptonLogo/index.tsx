import ChipLogo from "../ChipLogo";

const KriptonLogo = ({ isSidebarOpen }: { isSidebarOpen: boolean }) => {
  return (
    <div className="flex items-center gap-2">
      <div className="p-2 rounded-md">
        <ChipLogo size={40} fillColor="#363062" text="B" />
      </div>
      {isSidebarOpen && (
        <h1 className="text-3xl font-bold text-blue-55 cursor-pointer">kripton</h1>
      )}
    </div>
  );
};

export default KriptonLogo;
