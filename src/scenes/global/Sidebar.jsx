import { createContext, useState, useContext } from "react";
import { BiLogOut } from "react-icons/bi";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { IoIosTimer } from "react-icons/io";
import { RiTeamFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const SidebarContext = createContext();

function AdminSidebar({ children }) {
  const [collapsed, setCollapsed] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  const sidebarItems = [
    {
      icon: <MdDashboard size={25} />,
      text: "Dashboard",
      route: '/admin-Dashboard',
      alert: false,
    },
    {
      icon: <IoIosTimer size={25} />,
      text: "Timesheet",
      route: '/admin-Timesheets',
      alert: true,
    },
    {
      icon: <RiTeamFill size={25} />,
      text: "Teams",
      route: '/admin-Teams',
      alert: true,
    },
    {
      icon: <BiLogOut size={25} />,
      text: "Logout",
      route: '/logout',
      alert: false,
    },
  ];

  return (
    <>
      <aside className="  relative">
        <nav className="h-full  flex flex-col b shadow-lg" style={{ top: '30px', boxShadow: '0 4px 6px black, 0 10px 20px black'}}>
          <div className="p-4 mt-9 pb-3 flex justify-between items-center">
            <h1
              className={`overflow-hidden transition-all ${
                collapsed ? "text-3xl flex justify-center" : "w-0"
              }`}
            >
              Softmania
            </h1>
            <button
              onClick={() => setCollapsed((col) => !col)}
              className="p-2 rounded-lg"
            >
              {collapsed ? <FaArrowLeft /> : <FaArrowRight />}
            </button>
          </div>
          <SidebarContext.Provider value={{ collapsed }}>
            <ul className="flex-1 mt-2 px-3">
              {sidebarItems.map((item, index) => (
                <li
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`relative flex items-center py-3 px-2 my-1 font-medium rounded-md cursor-pointer transition-colors group ${
                    activeIndex === index
                      ? "bg-gradient-to-tr from-green-200 to-green-100 text-black"
                      : "hover:bg-green-400/25 text-gray-300"
                  }`}
                >
                  <Link to={item.route} className="flex items-center w-full">
                  {item.icon}
                  <span
                    className={`overflow-hidden transition-all ${
                      collapsed ? "w-52 ml-3" : "w-0"
                    }`}
                  >
                    {item.text}
                  </span>
                  {item.alert && (
                    <div
                      className={`absolute right-2 w-2 h-2 rounded bg-green-700 ${
                        collapsed ? "" : "top-2"
                      }`}
                    ></div>
                  )}
                  </Link>

                  {!collapsed && (
                    <div
                      className={`absolute left-full rounded-md px-2 py-1 ml-6 bg-green-100 text-green-800 text-sm invisible opacity-20 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0`}
                    >
                      {item.text}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </SidebarContext.Provider>
        </nav>
      </aside>
      {children}
    </>
  );
}

export default AdminSidebar;
