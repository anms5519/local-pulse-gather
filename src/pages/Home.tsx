
import { useState } from "react";
import { Search } from "lucide-react";
import { events, categories } from "../data/eventsData";
import { EventCard } from "../components/EventCard";
import { CategoryButton } from "../components/CategoryButton";

const Home = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  
  const featuredEvents = events.filter(event => event.isFeatured);
  const filteredEvents = activeCategory 
    ? events.filter(event => event.category === activeCategory) 
    : events;

  return (
    <div className="pb-20 animate-fade-in">
      {/* Header */}
      <div className="bg-localvibe-primary text-white p-4">
        <h1 className="text-2xl font-bold mb-1">LocalVibe Connect</h1>
        <p className="text-sm opacity-90">Discover events in your community</p>
        
        {/* Search Bar */}
        <div className="relative mt-4">
          <Search className="absolute left-3 top-3 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search events"
            className="w-full bg-white text-black rounded-full py-2 pl-10 pr-4 text-sm"
          />
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

      {/* Featured Events */}
      {featuredEvents.length > 0 && !activeCategory && (
        <div className="px-4 mb-6">
          <h2 className="text-xl font-bold mb-3">Featured Events</h2>
          <div className="space-y-4">
            {featuredEvents.slice(0, 2).map((event) => (
              <EventCard key={event.id} event={event} featured />
            ))}
          </div>
        </div>
      )}

      {/* Upcoming Events */}
      <div className="px-4">
        <h2 className="text-xl font-bold mb-3">
          {activeCategory ? `${categories.find(c => c.id === activeCategory)?.name} Events` : "Upcoming Events"}
        </h2>
        <div className="grid grid-cols-1 gap-4">
          {filteredEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
