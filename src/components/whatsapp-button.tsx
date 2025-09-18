
import Link from 'next/link';

const WhatsAppIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16.75 13.96c-.25.13-1.47.72-1.69.81-.23.08-.39.13-.56-.13-.16-.26-.68-1.64-.68-1.64s-.2-.26-.39-.42c-.19-.16-.39-.26-.59-.26-.2 0-.39.13-.52.26l-.26.39-.39.52c-.13.13-.26.26-.39.26s-.26-.07-.39-.2c-.13-.13-.26-.26-.39-.39-.13-.13-.65-.65-.91-1.04-.26-.39-.52-1.04-.65-1.3-.13-.26-.13-.39 0-.52.13-.13.26-.26.39-.39.13-.13.13-.26.2-.39.07-.13.07-.26 0-.39-.13-.13-1.69-1.69-1.69-1.69s-.26-.26-.52-.26c-.26 0-.52.13-.52.13s-.52.26-.52.91.52 2.08.65 2.21c.13.13 1.04 1.82 2.6 2.6.39.2.65.26.91.39.26.13.52.13.65.13.26 0 .91-.39 1.04-.78.13-.39.13-1.04.07-1.17-.07-.13-.13-.2-.26-.26z" />
      <path d="M12.04 2a10.13 10.13 0 0 0-7.15 3 10.13 10.13 0 0 0-3 7.15 10.13 10.13 0 0 0 3 7.15 10.13 10.13 0 0 0 7.15 3h.01a10.13 10.13 0 0 0 7.15-3 10.13 10.13 0 0 0 3-7.15 10.13 10.13 0 0 0-3-7.15 10.13 10.13 0 0 0-7.15-3h-.01zm0 1.63a8.5 8.5 0 0 1 6 2.5 8.5 8.5 0 0 1 2.5 6 8.5 8.5 0 0 1-2.5 6 8.5 8.5 0 0 1-6 2.5h-.01a8.5 8.5 0 0 1-6-2.5 8.5 8.5 0 0 1-2.5-6 8.5 8.5 0 0 1 2.5-6 8.5 8.5 0 0 1 6-2.5h.01z" />
    </svg>
);

export default function WhatsappButton() {
  return (
    <Link 
        href="https://api.whatsapp.com/send/?phone=6592713514&text&type=phone_number&app_absent=0"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-3 rounded-full shadow-lg hover:bg-[#1DA851] transition-all duration-300 transform hover:scale-110"
        aria-label="Chat on WhatsApp"
    >
      <WhatsAppIcon />
    </Link>
  );
}
