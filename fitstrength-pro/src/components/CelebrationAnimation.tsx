import { useEffect } from "react";

interface CelebrationAnimationProps {
  trigger: boolean;
}

export function CelebrationAnimation({ trigger }: CelebrationAnimationProps) {
  useEffect(() => {
    if (!trigger) return;

    const dumbbells = ["🏋️", "💪", "🏋️‍♀️", "🏋️‍♂️"];
    const numberOfDumbbells = 20;

    const createFallingDumbbell = (index: number) => {
      const dumbbell = document.createElement("div");
      dumbbell.className = "falling-dumbbell";
      dumbbell.textContent = dumbbells[Math.floor(Math.random() * dumbbells.length)];
      dumbbell.style.left = `${Math.random() * 100}%`;
      dumbbell.style.animationDuration = `${2 + Math.random() * 2}s`;
      dumbbell.style.animationDelay = `${index * 0.1}s`;
      document.body.appendChild(dumbbell);

      setTimeout(() => {
        dumbbell.remove();
      }, 4000 + index * 100);
    };

    for (let i = 0; i < numberOfDumbbells; i++) {
      createFallingDumbbell(i);
    }
  }, [trigger]);

  return null;
}
