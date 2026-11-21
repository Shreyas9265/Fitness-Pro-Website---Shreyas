import { motion } from "motion/react";

interface MuscleVisualizationProps {
  targetedMuscles: string[];
}

export function MuscleVisualization({ targetedMuscles }: MuscleVisualizationProps) {
  const isTargeted = (muscle: string) => targetedMuscles.includes(muscle);

  return (
    <div className="flex justify-center items-center py-8">
      <svg
        width="300"
        height="500"
        viewBox="0 0 300 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Head */}
        <ellipse cx="150" cy="40" rx="25" ry="30" fill="#e0e0e0" />

        {/* Neck */}
        <rect x="140" y="65" width="20" height="20" fill="#e0e0e0" />

        {/* Shoulders (Deltoids) */}
        <motion.ellipse
          cx="110"
          cy="95"
          rx="25"
          ry="20"
          fill={isTargeted("shoulders") ? "#ef4444" : "#d1d5db"}
          animate={
            isTargeted("shoulders")
              ? {
                  fill: ["#ef4444", "#dc2626", "#ef4444"],
                  scale: [1, 1.1, 1],
                }
              : {}
          }
          transition={{ duration: 1.5, repeat: Infinity }}
        />
        <motion.ellipse
          cx="190"
          cy="95"
          rx="25"
          ry="20"
          fill={isTargeted("shoulders") ? "#ef4444" : "#d1d5db"}
          animate={
            isTargeted("shoulders")
              ? {
                  fill: ["#ef4444", "#dc2626", "#ef4444"],
                  scale: [1, 1.1, 1],
                }
              : {}
          }
          transition={{ duration: 1.5, repeat: Infinity }}
        />

        {/* Chest (Pectorals) */}
        <motion.path
          d="M 130 105 Q 150 95 170 105 L 165 135 Q 150 130 135 135 Z"
          fill={isTargeted("chest") ? "#ef4444" : "#d1d5db"}
          animate={
            isTargeted("chest")
              ? {
                  fill: ["#ef4444", "#dc2626", "#ef4444"],
                  scale: [1, 1.05, 1],
                }
              : {}
          }
          transition={{ duration: 1.5, repeat: Infinity }}
          style={{ transformOrigin: "150px 120px" }}
        />

        {/* Arms (Biceps) */}
        <motion.rect
          x="85"
          y="105"
          width="20"
          height="60"
          rx="10"
          fill={isTargeted("biceps") ? "#ef4444" : "#d1d5db"}
          animate={
            isTargeted("biceps")
              ? {
                  fill: ["#ef4444", "#dc2626", "#ef4444"],
                  scale: [1, 1.1, 1],
                }
              : {}
          }
          transition={{ duration: 1.5, repeat: Infinity }}
          style={{ transformOrigin: "95px 135px" }}
        />
        <motion.rect
          x="195"
          y="105"
          width="20"
          height="60"
          rx="10"
          fill={isTargeted("biceps") ? "#ef4444" : "#d1d5db"}
          animate={
            isTargeted("biceps")
              ? {
                  fill: ["#ef4444", "#dc2626", "#ef4444"],
                  scale: [1, 1.1, 1],
                }
              : {}
          }
          transition={{ duration: 1.5, repeat: Infinity }}
          style={{ transformOrigin: "205px 135px" }}
        />

        {/* Forearms */}
        <rect x="85" y="165" width="15" height="50" rx="7" fill="#d1d5db" />
        <rect x="200" y="165" width="15" height="50" rx="7" fill="#d1d5db" />

        {/* Core/Abs */}
        <motion.rect
          x="130"
          y="135"
          width="40"
          height="60"
          rx="5"
          fill={isTargeted("core") ? "#ef4444" : "#d1d5db"}
          animate={
            isTargeted("core")
              ? {
                  fill: ["#ef4444", "#dc2626", "#ef4444"],
                  scale: [1, 1.05, 1],
                }
              : {}
          }
          transition={{ duration: 1.5, repeat: Infinity }}
          style={{ transformOrigin: "150px 165px" }}
        />

        {/* Back */}
        <motion.path
          d="M 125 85 L 175 85 L 170 140 L 130 140 Z"
          fill={isTargeted("back") ? "#ef4444" : "#d1d5db"}
          opacity="0.3"
          animate={
            isTargeted("back")
              ? {
                  fill: ["#ef4444", "#dc2626", "#ef4444"],
                  opacity: [0.3, 0.5, 0.3],
                }
              : {}
          }
          transition={{ duration: 1.5, repeat: Infinity }}
        />

        {/* Lats (part of back) */}
        <motion.path
          d="M 120 100 Q 105 120 110 140 L 130 135 Z"
          fill={isTargeted("back") ? "#ef4444" : "#d1d5db"}
          animate={
            isTargeted("back")
              ? {
                  fill: ["#ef4444", "#dc2626", "#ef4444"],
                  scale: [1, 1.05, 1],
                }
              : {}
          }
          transition={{ duration: 1.5, repeat: Infinity }}
          style={{ transformOrigin: "120px 120px" }}
        />
        <motion.path
          d="M 180 100 Q 195 120 190 140 L 170 135 Z"
          fill={isTargeted("back") ? "#ef4444" : "#d1d5db"}
          animate={
            isTargeted("back")
              ? {
                  fill: ["#ef4444", "#dc2626", "#ef4444"],
                  scale: [1, 1.05, 1],
                }
              : {}
          }
          transition={{ duration: 1.5, repeat: Infinity }}
          style={{ transformOrigin: "180px 120px" }}
        />

        {/* Lower Back/Glutes */}
        <motion.rect
          x="130"
          y="195"
          width="40"
          height="40"
          rx="8"
          fill={isTargeted("glutes") ? "#ef4444" : "#d1d5db"}
          animate={
            isTargeted("glutes")
              ? {
                  fill: ["#ef4444", "#dc2626", "#ef4444"],
                  scale: [1, 1.05, 1],
                }
              : {}
          }
          transition={{ duration: 1.5, repeat: Infinity }}
          style={{ transformOrigin: "150px 215px" }}
        />

        {/* Quadriceps */}
        <motion.rect
          x="115"
          y="235"
          width="25"
          height="90"
          rx="12"
          fill={isTargeted("quadriceps") ? "#ef4444" : "#d1d5db"}
          animate={
            isTargeted("quadriceps")
              ? {
                  fill: ["#ef4444", "#dc2626", "#ef4444"],
                  scale: [1, 1.08, 1],
                }
              : {}
          }
          transition={{ duration: 1.5, repeat: Infinity }}
          style={{ transformOrigin: "127px 280px" }}
        />
        <motion.rect
          x="160"
          y="235"
          width="25"
          height="90"
          rx="12"
          fill={isTargeted("quadriceps") ? "#ef4444" : "#d1d5db"}
          animate={
            isTargeted("quadriceps")
              ? {
                  fill: ["#ef4444", "#dc2626", "#ef4444"],
                  scale: [1, 1.08, 1],
                }
              : {}
          }
          transition={{ duration: 1.5, repeat: Infinity }}
          style={{ transformOrigin: "172px 280px" }}
        />

        {/* Hamstrings (back of leg, shown with opacity) */}
        <motion.rect
          x="118"
          y="240"
          width="20"
          height="80"
          rx="10"
          fill={isTargeted("hamstrings") ? "#ef4444" : "#d1d5db"}
          opacity="0.4"
          animate={
            isTargeted("hamstrings")
              ? {
                  fill: ["#ef4444", "#dc2626", "#ef4444"],
                  opacity: [0.4, 0.6, 0.4],
                }
              : {}
          }
          transition={{ duration: 1.5, repeat: Infinity }}
        />
        <motion.rect
          x="162"
          y="240"
          width="20"
          height="80"
          rx="10"
          fill={isTargeted("hamstrings") ? "#ef4444" : "#d1d5db"}
          opacity="0.4"
          animate={
            isTargeted("hamstrings")
              ? {
                  fill: ["#ef4444", "#dc2626", "#ef4444"],
                  opacity: [0.4, 0.6, 0.4],
                }
              : {}
          }
          transition={{ duration: 1.5, repeat: Infinity }}
        />

        {/* Calves */}
        <motion.ellipse
          cx="127"
          cy="360"
          rx="12"
          ry="35"
          fill={isTargeted("calves") ? "#ef4444" : "#d1d5db"}
          animate={
            isTargeted("calves")
              ? {
                  fill: ["#ef4444", "#dc2626", "#ef4444"],
                  scale: [1, 1.1, 1],
                }
              : {}
          }
          transition={{ duration: 1.5, repeat: Infinity }}
          style={{ transformOrigin: "127px 360px" }}
        />
        <motion.ellipse
          cx="173"
          cy="360"
          rx="12"
          ry="35"
          fill={isTargeted("calves") ? "#ef4444" : "#d1d5db"}
          animate={
            isTargeted("calves")
              ? {
                  fill: ["#ef4444", "#dc2626", "#ef4444"],
                  scale: [1, 1.1, 1],
                }
              : {}
          }
          transition={{ duration: 1.5, repeat: Infinity }}
          style={{ transformOrigin: "173px 360px" }}
        />

        {/* Triceps (back of arms, shown with opacity) */}
        <motion.rect
          x="88"
          y="115"
          width="15"
          height="45"
          rx="7"
          fill={isTargeted("triceps") ? "#ef4444" : "#d1d5db"}
          opacity="0.4"
          animate={
            isTargeted("triceps")
              ? {
                  fill: ["#ef4444", "#dc2626", "#ef4444"],
                  opacity: [0.4, 0.6, 0.4],
                }
              : {}
          }
          transition={{ duration: 1.5, repeat: Infinity }}
        />
        <motion.rect
          x="197"
          y="115"
          width="15"
          height="45"
          rx="7"
          fill={isTargeted("triceps") ? "#ef4444" : "#d1d5db"}
          opacity="0.4"
          animate={
            isTargeted("triceps")
              ? {
                  fill: ["#ef4444", "#dc2626", "#ef4444"],
                  opacity: [0.4, 0.6, 0.4],
                }
              : {}
          }
          transition={{ duration: 1.5, repeat: Infinity }}
        />

        {/* Feet */}
        <ellipse cx="127" cy="405" rx="15" ry="8" fill="#d1d5db" />
        <ellipse cx="173" cy="405" rx="15" ry="8" fill="#d1d5db" />
      </svg>
    </div>
  );
}
