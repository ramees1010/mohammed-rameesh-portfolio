import { motion } from "motion/react";

const fireflies = [
  { left: "5%", top: "15%", duration: 7 },
  { left: "12%", top: "65%", duration: 9 },
  { left: "20%", top: "35%", duration: 6 },
  { left: "28%", top: "80%", duration: 10 },
  { left: "36%", top: "20%", duration: 8 },
  { left: "45%", top: "55%", duration: 7 },
  { left: "53%", top: "30%", duration: 9 },
  { left: "61%", top: "75%", duration: 8 },
  { left: "69%", top: "15%", duration: 10 },
  { left: "76%", top: "48%", duration: 7 },
  { left: "84%", top: "25%", duration: 9 },
  { left: "91%", top: "70%", duration: 8 },
  { left: "16%", top: "90%", duration: 10 },
  { left: "57%", top: "90%", duration: 7 },
  { left: "96%", top: "40%", duration: 9 },
];

function GalaxyBackground() {
  return (
    <div className="galaxy-background">

      {/* Moving galaxy lights */}

      <div className="galaxy-glow glow-one"></div>

      <div className="galaxy-glow glow-two"></div>

      <div className="galaxy-glow glow-three"></div>


      {/* Fireflies */}

      {fireflies.map((firefly, index) => (
        <motion.span
          key={index}
          className="firefly"
          style={{
            left: firefly.left,
            top: firefly.top,
          }}
          animate={{
            x: [0, 20, -15, 15, 0],

            y: [0, -15, 10, -20, 0],

            opacity: [
              0,
              0,
              0.9,
              0.2,
              0
            ],

            scale: [
              0.5,
              0.5,
              1.3,
              0.8,
              0.5
            ],
          }}
          transition={{
            duration: firefly.duration,

            repeat: Infinity,

            ease: "easeInOut",

            delay: index * 0.7,
          }}
        />
      ))}

    </div>
  );
}

export default GalaxyBackground;