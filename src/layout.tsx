import { Outlet, Link, useLocation } from "react-router-dom";
import { AiOutlineSetting, AiOutlineHome, AiOutlineBulb } from "react-icons/ai";
import clsx from "clsx";
import { useSettingsContext } from "../src/context/SettingsProvider";

export default function Layout() {
  const location = useLocation();
  const { setTheme, theme: currentTheme } = useSettingsContext();

  const selectedClass = currentTheme === 'light' ? "text-primary-light" : "text-primary-dark";
  const defaultClass = currentTheme === 'light' ? "w-10 h-7 text-default-light" : "w-10 h-7 text-default-dark";
  const linkClass = "w-10 h-10"; // Removed hover:text-primary

  const toggleTheme = () => {
    setTheme(currentTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="flex flex-row min-w-screen min-h-screen overflow-hidden">
      <div className="w-14 bg-base-200 flex flex-col gap-3 px-2 pt-3">
        <Link className={linkClass} to="/">
          <AiOutlineHome
            className={clsx(defaultClass, {
              [selectedClass]: location.pathname === "/",
            })}
          />
        </Link>
        <div className="flex-grow" />
        <button className={linkClass} onClick={toggleTheme}>
          <AiOutlineBulb
            className={clsx(defaultClass, {
              [selectedClass]: location.pathname === "/settings",
            })}
          />
        </button>
        <Link className={linkClass} to="/settings">
          <AiOutlineSetting
            className={clsx(defaultClass, {
              [selectedClass]: location.pathname === "/settings",
            })}
          />
        </Link>
      </div>
      <div className="w-screen h-screen">
        <Outlet />
      </div>
    </div>
  );
}