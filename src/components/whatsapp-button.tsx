
'use client';
import Image from 'next/image';
import Link from 'next/link';

export default function WhatsappButton() {
  return (
    <Link 
        href="https://api.whatsapp.com/send/?phone=6592713514&text&type=phone_number&app_absent=0"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-3 rounded-full shadow-lg hover:bg-[#1DA851] transition-all duration-300 transform hover:scale-110"
        aria-label="Chat on WhatsApp"
    >
      <div className="relative h-7 w-7">
        <Image 
          src="https://raw.githubusercontent.com/swathitom1207/image1/refs/heads/main/wp%204.png" 
          alt="WhatsApp Icon" 
          fill
          className="object-contain rounded-full"
        />
      </div>
    </Link>
  );
}
