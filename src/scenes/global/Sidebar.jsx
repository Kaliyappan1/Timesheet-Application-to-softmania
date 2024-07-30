import { createContext, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { MdSpaceDashboard } from "react-icons/md";
import { IoMdLogOut, IoMdTime } from "react-icons/io";
import { Link } from "react-router-dom";
import { BsFillPeopleFill } from "react-icons/bs";

const SidebarContext = createContext();

function AdminSidebar({ children }) {
  const [collapsed, setCollapsed] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const [sidebarItems, setSidebarItems] = useState([
    {
      icon: <MdSpaceDashboard size={25} />,
      text: "Dashboard",
      route: "/admin-Dashboard",
      alert: false,
    },
    {
      icon: <IoMdTime size={25} />,
      text: "Timesheet",
      route: "/admin-Timesheets",
      alert: true,
    },
    {
      icon: <BsFillPeopleFill size={25} />,
      text: "Teams",
      route: "/admin-Teams",
      alert: true,
    },
    {
      icon: <IoMdLogOut size={25} />,
      text: "Logout",
      route: "/logout",
      alert: false,
    },
  ]);

  const handleItemClick = (index) => {
    setActiveIndex(index);
    setSidebarItems((prevItems) =>
      prevItems.map((item, i) =>
        i === index ? { ...item, alert: false } : item
      )
    );
  };

  return (
    <>
      <aside className="  relative">
        <nav
          className="h-full flex flex-col b shadow-lg"
          style={{
            top: "30px",
            boxShadow: "0 4px 6px black, 0 10px 20px black",
          }}
        >
          <div className="p-4 mt-9 pb-3 flex justify-between items-center">
            <h2
              className={`overflow-hidden first-letter:size-1 transition-all ${
                collapsed ? "text-3xl flex justify-center px-4" : "w-0 " 
              } transition-all duration-300`}
            >
              Soft Mania
            </h2>
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
                  onClick={() => handleItemClick(index)}
                  className={`relative flex items-center py-3 px-2 my-1 font-medium rounded-md cursor-pointer transition-colors group ${
                    activeIndex === index
                      ? "bg-gradient-to-tr from-green-400 to-green-6 text-white"
                      : "hover:bg-gradient-to-tr  from-green-400/20 to-green-1 text-gray-300"
                  } transition-all duration-300`}
                >
                  <Link to={item.route} className="flex items-center w-full text-white">
                    {item.icon}
                    <span
                      className={`overflow-hidden transition-all text-white ${
                        collapsed ? "w-52 ml-3" : "w-0"
                      }`}
                    >
                      {item.text}
                    </span>
                    {item.alert && (
                      <div
                        className={`absolute right-2 w-2 h-2 rounded bg-green-400 ${
                          collapsed ? "" : "top-2"
                        }`}
                      ></div>
                    )}
                  </Link>

                  {!collapsed && (
                    <div
                      className={`absolute left-full rounded-md px-2 py-1 ml-6 bg-green-100 text-black text-sm invisible opacity-20 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0`}
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
