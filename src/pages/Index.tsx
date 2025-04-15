
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CircleCheck } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading process
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        const newProgress = Math.min(oldProgress + 20, 100);
        
        if (newProgress === 100) {
          clearInterval(timer);
          
          // Navigate to home after a short delay to show the completed state
          setTimeout(() => {
            setLoading(false);
            navigate("/");
          }, 800);
        }
        
        return newProgress;
      });
    }, 500);

    return () => clearInterval(timer);
  }, [navigate]);

  return (
    <div className="h-screen bg-gradient-to-b from-localvibe-primary to-localvibe-primary/80 flex flex-col items-center justify-center px-8 animate-fade-in">
      <div className="text-center text-white mb-12">
        <h1 className="text-4xl font-bold mb-2">LocalVibe Connect</h1>
        <p className="text-lg opacity-90">Discover your community</p>
      </div>
      
      {loading ? (
        <div className="w-full max-w-xs">
          <div className="h-2 bg-white/30 rounded-full mb-2 overflow-hidden">
            <div 
              className="h-full bg-white rounded-full transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-white text-sm text-center">{progress === 100 ? 'Ready!' : 'Loading...'}</p>
        </div>
      ) : (
        <div className="flex items-center justify-center text-white">
          <CircleCheck className="animate-scale-in" size={48} />
        </div>
      )}
    </div>
  );
};

export default Index;
