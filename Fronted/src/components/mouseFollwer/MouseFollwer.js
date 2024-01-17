import React,{useState,useEffect} from 'react'
import '../mouseFollwer/MouseFollwer.css'
const MouseFollwer = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (event) => {
      setMousePosition({
        x: event.clientX + window.pageXOffset,
      y: event.clientY + window.pageYOffset,
         });
    };
  
    useEffect(() => {
      window.addEventListener('mousemove', handleMouseMove);
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
      };
    }, []);
  return (
    <div>
         <div
        className="pink-circle"
        style={{
          left: mousePosition.x + 'px',
          top: mousePosition.y + 'px',
        }}
      ></div>
    </div>
  )
}

export default MouseFollwer
