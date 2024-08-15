import { useSettingsContext } from "../context/SettingsProvider";
import clsx from "clsx";

export default function Settings() {
  const { setTheme, theme: currentTheme } = useSettingsContext();

  const toggleTheme = () => {
    setTheme(currentTheme === 'light' ? 'dark' : 'light');
  };

  // Function to get system information
  const getSystemInfo = () => {
    return {
      platform: navigator.platform,
      userAgent: navigator.userAgent,
      language: navigator.language,
      online: navigator.onLine,
    };
  };

  const systemInfo = getSystemInfo();

  return (
    <div className="flex flex-col h-full w-full p-6">
      <div className="flex flex-col">
        <h2>System Information</h2>
        <ul className="w-3/5">
          <li>Platform: {systemInfo.platform}</li>
          <li>User Agent: {systemInfo.userAgent}</li>
          <li>Language: {systemInfo.language}</li>
          <li>Online: {systemInfo.online ? 'Yes' : 'No'}</li>
        </ul>
      </div>
      {/* Future items can be added here */}
    </div>
  );
}