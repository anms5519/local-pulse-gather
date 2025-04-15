
import { Calendar, MapPin, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { Event } from "../data/eventsData";

interface EventCardProps {
  event: Event;
  featured?: boolean;
}

export const EventCard = ({ event, featured = false }: EventCardProps) => {
  const { id, title, date, time, location, imageUrl, category, attendees } = event;
  
  return (
    <Link to={`/event/${id}`} className="block">
      <div 
        className={`rounded-xl overflow-hidden shadow-sm bg-white hover:shadow-md transition-shadow ${
          featured ? "w-full" : "w-full"
        }`}
      >
        <div className="relative">
          <img 
            src={imageUrl} 
            alt={title} 
            className={`w-full object-cover ${featured ? "h-48" : "h-40"}`}
          />
          <div className="absolute top-3 left-3 bg-localvibe-primary text-white px-2 py-1 rounded-full text-xs">
            {category}
          </div>
        </div>
        <div className="p-4">
          <h3 className={`font-semibold text-localvibe-text ${featured ? "text-xl" : "text-lg"} mb-2 line-clamp-1`}>
            {title}
          </h3>
          <div className="flex items-center text-localvibe-muted text-sm mb-2">
            <Calendar size={16} className="mr-1" />
            <span>{new Date(date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} · {time}</span>
          </div>
          <div className="flex items-center text-localvibe-muted text-sm mb-2">
            <MapPin size={16} className="mr-1" />
            <span className="line-clamp-1">{location}</span>
          </div>
          <div className="flex items-center text-localvibe-muted text-sm">
            <Users size={16} className="mr-1" />
            <span>{attendees} attending</span>
          </div>
        </div>
      </div>
    </Link>
  );
};
