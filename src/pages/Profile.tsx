
import { Settings, Bell, Heart, LogOut, MapPin } from "lucide-react";
import { categories } from "../data/eventsData";

const Profile = () => {
  // Mocked user data
  const user = {
    name: "Alex Johnson",
    location: "New York, NY",
    joinedDate: "March 2025",
    bio: "Food enthusiast and concert lover. Always looking for new experiences in the city!",
    interests: ["music", "food", "arts", "tech"]
  };

  return (
    <div className="pb-20 animate-fade-in">
      {/* Header */}
      <div className="bg-localvibe-primary text-white p-4 relative">
        <div className="flex justify-end">
          <button className="p-2">
            <Settings size={22} />
          </button>
        </div>
        
        <div className="flex flex-col items-center -mt-2">
          <div className="w-20 h-20 bg-gray-300 rounded-full mb-3 border-2 border-white">
            {/* User avatar placeholder */}
            <div className="w-full h-full rounded-full flex items-center justify-center text-xl font-bold text-white bg-localvibe-secondary">
              {user.name.split(' ').map(name => name[0]).join('')}
            </div>
          </div>
          <h1 className="text-xl font-bold">{user.name}</h1>
          <p className="text-sm flex items-center mt-1">
            <MapPin size={14} className="mr-1" />
            {user.location}
          </p>
        </div>
      </div>

      {/* Bio */}
      <div className="p-4 bg-white mb-4">
        <h2 className="font-semibold mb-2">About</h2>
        <p className="text-sm text-gray-700">{user.bio}</p>
        <p className="text-xs text-gray-500 mt-3">Joined {user.joinedDate}</p>
      </div>

      {/* Interests */}
      <div className="p-4 bg-white mb-4">
        <h2 className="font-semibold mb-3">My Interests</h2>
        <div className="flex flex-wrap gap-2">
          {categories
            .filter(category => user.interests.includes(category.id))
            .map(category => (
              <div key={category.id} className="bg-gray-100 rounded-full px-3 py-1 text-sm flex items-center">
                <span className="mr-1">{category.icon}</span>
                {category.name}
              </div>
            ))}
          <button className="bg-gray-100 rounded-full px-3 py-1 text-sm border border-dashed border-gray-300 text-gray-500">
            + Add more
          </button>
        </div>
      </div>

      {/* Action Menu */}
      <div className="p-4 bg-white">
        <div className="divide-y">
          <button className="flex items-center w-full py-3 px-1">
            <Heart size={20} className="mr-3 text-localvibe-secondary" />
            <span className="font-medium">Saved Events</span>
          </button>
          <button className="flex items-center w-full py-3 px-1">
            <Bell size={20} className="mr-3 text-localvibe-secondary" />
            <span className="font-medium">Notifications</span>
          </button>
          <button className="flex items-center w-full py-3 px-1 text-red-500">
            <LogOut size={20} className="mr-3" />
            <span className="font-medium">Logout</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
