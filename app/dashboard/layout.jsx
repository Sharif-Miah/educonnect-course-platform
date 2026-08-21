import { Navbar } from "./_components/navbar";
import Sidebar from "./_components/sidebar";

const DashboardLayout = ({ children }) => {
  return (
    <div className="h-full bg-[#F8FAFC]">
      <div className="h-[80px] lg:pl-64 fixed inset-y-0 w-full z-50">
        <Navbar />
      </div>
      <div className="hidden lg:flex h-full w-64 flex-col fixed inset-y-0 z-50">
        <Sidebar />
      </div>
      <main className="lg:pl-64 pt-[80px] h-full min-h-screen bg-[#F8FAFC]">
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
