
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Calendar, Clock, MapPin, Users, ArrowLeft, Share2, Heart, ExternalLink } from "lucide-react";
import { events } from "../data/eventsData";

const EventDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [isSaved, setIsSaved] = useState(false);
  
  const event = events.find(e => e.id === id);
  
  if (!event) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <p>Event not found</p>
        <button 
          onClick={() => navigate('/')}
          className="mt-4 bg-localvibe-primary text-white px-4 py-2 rounded-lg"
        >
          Back to Home
        </button>
      </div>
    );
  }

  return (
    <div className="pb-24 animate-fade-in">
      {/* Header Image */}
      <div className="relative">
        <img 
          src={event.imageUrl} 
          alt={event.title} 
          className="w-full h-64 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        
        {/* Back button */}
        <button 
          onClick={() => navigate(-1)}
          className="absolute top-4 left-4 bg-black/30 p-2 rounded-full text-white"
        >
          <ArrowLeft size={24} />
        </button>
        
        {/* Action buttons */}
        <div className="absolute top-4 right-4 flex space-x-2">
          <button className="bg-black/30 p-2 rounded-full text-white">
            <Share2 size={24} />
          </button>
          <button 
            className={`p-2 rounded-full ${isSaved ? 'bg-localvibe-secondary text-white' : 'bg-black/30 text-white'}`}
            onClick={() => setIsSaved(!isSaved)}
          >
            <Heart size={24} />
          </button>
        </div>
      </div>

      {/* Event Info */}
      <div className="p-4 bg-white -mt-6 rounded-t-3xl relative z-10">
        <div className="bg-localvibe-primary text-white px-3 py-1 rounded-full text-xs inline-block mb-3">
          {event.category}
        </div>
        <h1 className="text-2xl font-bold mb-3">{event.title}</h1>
        
        {/* Event Details */}
        <div className="space-y-4 mb-6">
          <div className="flex">
            <Calendar className="text-localvibe-primary mr-3 mt-1" size={20} />
            <div>
              <h3 className="font-medium">Date</h3>
              <p className="text-sm text-gray-600">
                {new Date(event.date).toLocaleDateString('en-US', {
                  weekday: 'long',
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric'
                })}
              </p>
            </div>
          </div>
          
          <div className="flex">
            <Clock className="text-localvibe-primary mr-3 mt-1" size={20} />
            <div>
              <h3 className="font-medium">Time</h3>
              <p className="text-sm text-gray-600">{event.time}</p>
            </div>
          </div>
          
          <div className="flex">
            <MapPin className="text-localvibe-primary mr-3 mt-1" size={20} />
            <div>
              <h3 className="font-medium">Location</h3>
              <p className="text-sm text-gray-600">{event.location}</p>
              <a 
                href="#" 
                className="text-sm text-localvibe-primary flex items-center mt-1"
              >
                View on map
                <ExternalLink size={14} className="ml-1" />
              </a>
            </div>
          </div>
          
          <div className="flex">
            <Users className="text-localvibe-primary mr-3 mt-1" size={20} />
            <div>
              <h3 className="font-medium">Attendees</h3>
              <p className="text-sm text-gray-600">{event.attendees} people going</p>
            </div>
          </div>
        </div>
        
        {/* Description */}
        <div className="mb-8">
          <h2 className="text-lg font-bold mb-2">About this event</h2>
          <p className="text-gray-700">{event.description}</p>
        </div>
        
        {/* CTA Button */}
        <button className="w-full bg-localvibe-primary text-white py-3 rounded-lg font-medium">
          RSVP to this event
        </button>
      </div>
    </div>
  );
};

export default EventDetail;
