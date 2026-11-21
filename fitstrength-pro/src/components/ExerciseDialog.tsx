import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { MuscleVisualization } from "./MuscleVisualization";
import { Badge } from "./ui/badge";

interface Exercise {
  name: string;
  sets: string;
  reps: string;
  rest: string;
  targetedMuscles: string[];
  description: string;
  tips: string[];
}

interface ExerciseDialogProps {
  exercise: Exercise | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ExerciseDialog({
  exercise,
  open,
  onOpenChange,
}: ExerciseDialogProps) {
  if (!exercise) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{exercise.name}</DialogTitle>
          <DialogDescription>{exercise.description}</DialogDescription>
        </DialogHeader>

        <div className="grid md:grid-cols-2 gap-6 mt-4">
          {/* Left side - Muscle visualization */}
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-4">
            <h4 className="text-center mb-4">Targeted Muscles</h4>
            <MuscleVisualization targetedMuscles={exercise.targetedMuscles} />
            <div className="flex flex-wrap gap-2 justify-center mt-4">
              {exercise.targetedMuscles.map((muscle) => (
                <Badge key={muscle} variant="destructive">
                  {muscle.charAt(0).toUpperCase() + muscle.slice(1)}
                </Badge>
              ))}
            </div>
          </div>

          {/* Right side - Exercise details */}
          <div className="space-y-6">
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg text-center">
                <p className="text-muted-foreground mb-1">Sets</p>
                <p>{exercise.sets}</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg text-center">
                <p className="text-muted-foreground mb-1">Reps</p>
                <p>{exercise.reps}</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg text-center">
                <p className="text-muted-foreground mb-1">Rest</p>
                <p>{exercise.rest}</p>
              </div>
            </div>

            <div>
              <h4 className="mb-3">Exercise Tips</h4>
              <ul className="space-y-2">
                {exercise.tips.map((tip, index) => (
                  <li key={index} className="flex gap-2 text-muted-foreground">
                    <span className="text-blue-600 flex-shrink-0">•</span>
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
