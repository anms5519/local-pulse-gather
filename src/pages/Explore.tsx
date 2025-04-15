
import { useState } from "react";
import { Search, Filter } from "lucide-react";
import { events, categories } from "../data/eventsData";
import { CategoryButton } from "../components/CategoryButton";

const Explore = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  
  const filteredEvents = activeCategory 
    ? events.filter(event => event.category === activeCategory) 
    : events;

  return (
    <div className="pb-20 animate-fade-in">
      {/* Header */}
      <div className="bg-localvibe-primary text-white p-4">
        <h1 className="text-2xl font-bold mb-1">Explore Events</h1>
        
        {/* Search Bar */}
        <div className="relative mt-4 flex">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-3 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search events near you"
              className="w-full bg-white text-black rounded-l-full py-2 pl-10 pr-4 text-sm"
            />
          </div>
          <button className="bg-white rounded-r-full px-4 flex items-center">
            <Filter size={18} className="text-localvibe-primary" />
          </button>
        </div>
      </div>

      {/* Categories Scroll */}
      <div className="py-4 px-4 overflow-x-auto">
        <div className="flex">
          <CategoryButton 
            category={{ id: "all", name: "All", icon: "✨" }}
            isActive={activeCategory === null}
            onClick={() => setActiveCategory(null)}
          />
          {categories.map((category) => (
            <CategoryButton
              key={category.id}
              category={category}
              isActive={activeCategory === category.id}
              onClick={() => setActiveCategory(category.id)}
            />
          ))}
        </div>
      </div>

      {/* Map View (Placeholder) */}
      <div className="px-4 mb-6">
        <div className="bg-gray-200 rounded-xl h-64 flex items-center justify-center">
          <p className="text-gray-500">Interactive Map View Coming Soon</p>
        </div>
      </div>

      {/* Nearby Events */}
      <div className="px-4">
        <h2 className="text-xl font-bold mb-3">
          {activeCategory 
            ? `${categories.find(c => c.id === activeCategory)?.name} Events Nearby` 
            : "Events Nearby"}
        </h2>
        <div className="space-y-4">
          {filteredEvents.map((event) => (
            <div key={event.id} className="flex bg-white rounded-lg shadow-sm overflow-hidden">
              <img 
                src={event.imageUrl} 
                alt={event.title} 
                className="w-24 h-24 object-cover"
              />
              <div className="p-3 flex-1">
                <h3 className="font-semibold mb-1 line-clamp-1">{event.title}</h3>
                <p className="text-sm text-gray-500 mb-1 line-clamp-1">{event.location}</p>
                <p className="text-xs text-gray-500">
                  {new Date(event.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} · {event.time}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Explore;
