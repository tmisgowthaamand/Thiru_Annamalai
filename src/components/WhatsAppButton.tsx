import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const phoneNumber = "919894377407"; // Updated with actual number
  const message = encodeURIComponent("Hi! I'm interested in your agricultural machinery and spare parts.");

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="whatsapp-sticky group"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />
      <span className="absolute -top-2 -left-2 w-3 h-3 bg-red-500 rounded-full animate-pulse" />
    </button>
  );
};

export default WhatsAppButton;