import Sidebar from "../components/sidebar";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-row sm:flex-row h-[100dvh]">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-auto bg-neutral-800 text-white p-4">
        {children}
      </div>
    </div>
  );
};

export default Layout;
