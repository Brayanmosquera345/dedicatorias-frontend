// components/Notification.jsx
import { useEffect } from "react";

export default function Notification({ title, message, onClose }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 5000); // se cierra a los 3s
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
      <div className="fixed top-5 right-5 bg-background shadow-lg rounded-xl p-4 border-l-4 z-20 border-primary animate-slideIn">
        <h4 className="font-semibold text-title">{title}</h4>
        <p className="text-paragraph text-sm">{message}</p>
      </div>
  );
}
