import { motion } from 'framer-motion';

interface SkillCardProps {
  title: string;
  level: number;
  description: string;
  icon: string;
}

const SkillCard = ({ title, level, description, icon }: SkillCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="glass-card p-6 rounded-lg"
    >
      <div className="flex items-center mb-4">
        <img src={icon} alt={title} className="w-8 h-8 mr-3" />
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-2.5 mb-4">
        <div
          className="bg-blue-500 h-2.5 rounded-full skill-progress"
          style={{ width: `${level}%` }}
        />
      </div>
      <p className="text-gray-400">{description}</p>
    </motion.div>
  );
};

export default SkillCard;