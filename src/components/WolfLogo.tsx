import { motion } from 'framer-motion';

const WolfLogo = () => {
  return (
    <motion.div
      initial={{ scale: 0.5, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1 }}
      className="mb-8"
    >
      <svg
        width="120"
        height="120"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-white opacity-80"
      >
        <path
          d="M12 2L3 9L4.5 20H19.5L21 9L12 2ZM12 4L18.5 9L17.5 18H6.5L5.5 9L12 4ZM9 11C8.44772 11 8 11.4477 8 12C8 12.5523 8.44772 13 9 13C9.55228 13 10 12.5523 10 12C10 11.4477 9.55228 11 9 11ZM15 11C14.4477 11 14 11.4477 14 12C14 12.5523 14.4477 13 15 13C15.5523 13 16 12.5523 16 12C16 11.4477 15.5523 11 15 11Z"
          fill="currentColor"
        />
      </svg>
    </motion.div>
  );
};

export default WolfLogo;