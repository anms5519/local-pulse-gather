
import { Home, Map, Calendar, User } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export const BottomNavigation = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const navItems = [
    { name: "Home", icon: Home, path: "/" },
    { name: "Explore", icon: Map, path: "/explore" },
    { name: "Events", icon: Calendar, path: "/events" },
    { name: "Profile", icon: User, path: "/profile" }
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-2 py-3 flex justify-around items-center z-10">
      {navItems.map((item) => {
        const isActive = currentPath === item.path;
        return (
          <Link 
            to={item.path} 
            key={item.name}
            className={`flex flex-col items-center ${
              isActive ? "text-localvibe-primary" : "text-gray-500"
            }`}
          >
            <item.icon size={22} />
            <span className="text-xs mt-1">{item.name}</span>
          </Link>
        );
      })}
    </div>
  );
};
