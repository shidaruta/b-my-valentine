import { useEffect } from "react";


const Loading = ({onFinish}) => {
    
    useEffect(() => {
        const timer = setTimeout(() => {
          if (onFinish) onFinish(); // Notify parent to finish loading
        }, 4500); // Time to wait before the loading ends
    
        return () => clearTimeout(timer); // Clean up timer if the component unmounts
      }, [onFinish]);

      return (
        <div className="loading-container">
         <h3 className="welcome-text">KuzuZangpo, Namgay❤️</h3>

          <video 
            src="/assets/loading.mp4"
            autoPlay
            muted
            playsInline
            onEnded={() => onFinish(false)}
            className="video-loading"
          />

        </div>
      );
    };
 
export default Loading;