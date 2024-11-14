import { ChevronUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-6 px-6 mt-20">
      <div className="container mx-auto glass-card rounded-lg px-6 py-4">
        <div className="flex items-center justify-between">
          <span className="text-gray-300">@2024 Avtomat</span>
          <button
            onClick={scrollToTop}
            className="text-gray-300 hover:text-white transition-colors flex items-center space-x-2"
          >
            <span>Back to Top</span>
            <ChevronUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;