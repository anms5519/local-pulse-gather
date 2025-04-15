
import { useState } from "react";
import { Calendar as CalendarIcon, List, Grid } from "lucide-react";
import { events } from "../data/eventsData";
import { EventCard } from "../components/EventCard";

const Events = () => {
  const [viewMode, setViewMode] = useState<'list' | 'grid'>('list');
  
  // Group events by date
  const eventsByDate = events.reduce((acc, event) => {
    const date = new Date(event.date).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });
    if (!acc[date]) {
      acc[date] = [];
    }
    acc[date].push(event);
    return acc;
  }, {} as Record<string, typeof events>);

  return (
    <div className="pb-20 animate-fade-in">
      {/* Header */}
      <div className="bg-localvibe-primary text-white p-4">
        <div className="flex justify-between items-center mb-2">
          <h1 className="text-2xl font-bold">My Events</h1>
          <div className="flex bg-white/20 rounded-lg p-1">
            <button 
              className={`p-1 rounded ${viewMode === 'list' ? 'bg-white text-localvibe-primary' : 'text-white'}`} 
              onClick={() => setViewMode('list')}
            >
              <List size={20} />
            </button>
            <button 
              className={`p-1 rounded ${viewMode === 'grid' ? 'bg-white text-localvibe-primary' : 'text-white'}`} 
              onClick={() => setViewMode('grid')}
            >
              <Grid size={20} />
            </button>
          </div>
        </div>
        <p className="text-sm opacity-90">Browse upcoming events</p>
      </div>

      {/* Calendar View (Basic Preview) */}
      <div className="p-4 bg-white shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-semibold flex items-center">
            <CalendarIcon size={20} className="mr-2 text-localvibe-primary" />
            April 2025
          </h2>
          <div className="flex">
            <button className="px-2 py-1 rounded bg-gray-100 text-sm">Today</button>
          </div>
        </div>
        <div className="flex justify-between text-center text-xs text-gray-500 mb-2">
          {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, i) => (
            <div key={i} className="w-9">{day}</div>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-1 text-sm">
          {Array.from({ length: 30 }, (_, i) => {
            const day = i + 1;
            const hasEvent = events.some(event => new Date(event.date).getDate() === day);
            return (
              <div 
                key={i} 
                className={`h-9 w-9 flex items-center justify-center rounded-full ${
                  hasEvent ? 'bg-localvibe-primary text-white' : 
                  day === 15 ? 'border border-localvibe-primary text-localvibe-primary' : ''
                }`}
              >
                {day}
              </div>
            );
          })}
        </div>
      </div>

      {/* Events List */}
      <div className="px-4 mt-4">
        {Object.entries(eventsByDate).map(([date, dateEvents]) => (
          <div key={date} className="mb-6">
            <h3 className="text-lg font-semibold mb-3">{date}</h3>
            <div className={viewMode === 'grid' ? "grid grid-cols-2 gap-3" : "space-y-4"}>
              {dateEvents.map(event => (
                viewMode === 'list' ? (
                  <EventCard key={event.id} event={event} />
                ) : (
                  <div key={event.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
                    <img 
                      src={event.imageUrl} 
                      alt={event.title} 
                      className="w-full h-24 object-cover"
                    />
                    <div className="p-3">
                      <h4 className="font-medium text-sm line-clamp-1">{event.title}</h4>
                      <p className="text-xs text-gray-500 mt-1">{event.time}</p>
                    </div>
                  </div>
                )
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
