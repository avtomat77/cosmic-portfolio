import { useEffect, useState } from 'react';

const MeteorShower = () => {
  const [meteors, setMeteors] = useState<Array<{ id: number; delay: number; duration: number; left: number }>>([]);

  useEffect(() => {
    const createMeteor = () => ({
      id: Math.random(),
      delay: Math.random() * 2,
      duration: 3 + Math.random() * 4,
      left: Math.random() * 100,
    });

    const initialMeteors = Array.from({ length: 20 }, createMeteor);
    setMeteors(initialMeteors);

    const interval = setInterval(() => {
      setMeteors(prev => [...prev.slice(1), createMeteor()]);
    }, 300);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {meteors.map(meteor => (
        <div
          key={meteor.id}
          className="meteor-effect"
          style={{
            left: `${meteor.left}%`,
            animationDelay: `${meteor.delay}s`,
            animationDuration: `${meteor.duration}s`,
          }}
        />
      ))}
    </div>
  );
};

export default MeteorShower;