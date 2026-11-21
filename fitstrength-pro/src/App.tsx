import { useState } from "react";
import { Product3D } from "./components/Product3D";
import { ShoppingCart, CartItem } from "./components/ShoppingCart";
import { ExerciseDialog } from "./components/ExerciseDialog";
import { CelebrationAnimation } from "./components/CelebrationAnimation";
import { Dumbbell } from "lucide-react";
import { Card } from "./components/ui/card";
import { Toaster } from "./components/ui/sonner";
import { toast } from "sonner";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  ingredients?: string[];
  prescription?: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Premium Dumbbells Set",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1592494624782-b5bee232f156?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkdW1iYmVsbHMlMjB3ZWlnaHRzfGVufDF8fHx8MTc2MTk5MTUyMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    ingredients: ["Cast Iron", "Rubber Coating", "Steel Handle"],
    prescription: "Use with proper form. Start with lighter weights and progress gradually. Perfect for home workouts.",
  },
  {
    id: 2,
    name: "Whey Protein Powder",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1693996045404-d7cc056250e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm90ZWluJTIwcG93ZGVyJTIwc3VwcGxlbWVudHxlbnwxfHx8fDE3NjIwMjI2Njd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    ingredients: ["Whey Isolate", "BCAAs", "Digestive Enzymes", "Natural Flavors"],
    prescription: "Mix 1 scoop with 8-10oz of water or milk. Consume post-workout or between meals. 25g protein per serving.",
  },
  {
    id: 3,
    name: "Protein Shaker Bottle",
    price: 19.99,
    image: "https://images.unsplash.com/photo-1678875526436-fa7137a01413?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm90ZWluJTIwc2hha2UlMjBib3R0bGV8ZW58MXx8fHwxNzYyMDEzOTk3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    ingredients: ["BPA-Free Plastic", "Stainless Steel Ball", "Leak-Proof Seal"],
    prescription: "Add liquid first, then powder. Shake vigorously for 30 seconds. Dishwasher safe. 28oz capacity.",
  },
  {
    id: 4,
    name: "Creatine Monohydrate",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1724160167780-1aef4db75030?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGluZSUyMHN1cHBsZW1lbnR8ZW58MXx8fHwxNzYyMDIyNjY4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    ingredients: ["Pure Creatine Monohydrate", "Micronized Formula"],
    prescription: "Take 5g daily mixed with water or juice. Can be taken anytime. Supports muscle strength and power output.",
  },
  {
    id: 5,
    name: "Multivitamin Complex",
    price: 34.99,
    image: "https://images.unsplash.com/photo-1593181581874-361761582b9e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aXRhbWlucyUyMHN1cHBsZW1lbnRzfGVufDF8fHx8MTc2MjAyMTQ1NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    ingredients: ["Vitamins A-E", "Zinc", "Magnesium", "B-Complex", "Vitamin D3"],
    prescription: "Take 2 tablets daily with food. Supports overall health, immune function, and energy production.",
  },
  {
    id: 6,
    name: "Pre-Workout Formula",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1693996045404-d7cc056250e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm90ZWluJTIwcG93ZGVyJTIwc3VwcGxlbWVudHxlbnwxfHx8fDE3NjIwMjI2Njd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    ingredients: ["Caffeine", "Beta-Alanine", "Citrulline", "BCAAs", "B-Vitamins"],
    prescription: "Mix 1 scoop with 8oz water 20-30 minutes before workout. Provides energy, focus, and enhanced performance.",
  },
];

interface Exercise {
  name: string;
  sets: string;
  reps: string;
  rest: string;
  image: string;
  targetedMuscles: string[];
  description: string;
  tips: string[];
}

const exercises: Exercise[] = [
  {
    name: "Barbell Bench Press",
    sets: "4",
    reps: "8-10",
    rest: "90s",
    image: "https://images.unsplash.com/photo-1649820938432-97e9ae9c2973?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXJiZWxsJTIwYmVuY2glMjBwcmVzc3xlbnwxfHx8fDE3NjIwNDAwMTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    targetedMuscles: ["chest", "shoulders", "triceps"],
    description: "A compound exercise that primarily targets the chest muscles while also engaging shoulders and triceps.",
    tips: [
      "Keep your feet flat on the floor throughout the movement",
      "Lower the bar to mid-chest level with control",
      "Press explosively while maintaining control",
      "Keep your shoulder blades retracted and core tight"
    ]
  },
  {
    name: "Squats",
    sets: "4",
    reps: "8-10",
    rest: "90s",
    image: "https://images.unsplash.com/photo-1761839258420-5c3e2f2e2a74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXJiZWxsJTIwc3F1YXQlMjBleGVyY2lzZXxlbnwxfHx8fDE3NjIwNDAwMTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    targetedMuscles: ["quadriceps", "glutes", "hamstrings", "core"],
    description: "The king of lower body exercises, working multiple muscle groups simultaneously.",
    tips: [
      "Keep your chest up and core engaged",
      "Descend until thighs are parallel to the ground",
      "Drive through your heels to return to standing",
      "Keep knees tracking over toes"
    ]
  },
  {
    name: "Deadlifts",
    sets: "3",
    reps: "6-8",
    rest: "120s",
    image: "https://images.unsplash.com/photo-1706029831405-619b27e3260c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZWFkbGlmdCUyMGJhcmJlbGx8ZW58MXx8fHwxNzYyMDQwMDExfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    targetedMuscles: ["back", "hamstrings", "glutes", "core"],
    description: "A fundamental compound movement that builds total body strength and power.",
    tips: [
      "Start with the bar over mid-foot",
      "Keep your back straight and chest up",
      "Drive through your heels and extend hips",
      "Lock out at the top by squeezing glutes"
    ]
  },
  {
    name: "Overhead Press",
    sets: "3",
    reps: "8-10",
    rest: "90s",
    image: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvdmVyaGVhZCUyMHByZXNzJTIwYmFyYmVsbHxlbnwxfHx8fDE3NjIwNDAwMTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    targetedMuscles: ["shoulders", "triceps", "core"],
    description: "A vertical pressing movement that builds strong, stable shoulders.",
    tips: [
      "Start with the bar at shoulder height",
      "Press straight up, moving head back slightly",
      "Lock out arms fully at the top",
      "Engage core to prevent excessive back arch"
    ]
  },
  {
    name: "Bent Over Rows",
    sets: "4",
    reps: "8-10",
    rest: "90s",
    image: "https://images.unsplash.com/photo-1566196954824-97134ed79a3a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZW50JTIwb3ZlciUyMHJvd3xlbnwxfHx8fDE3NjIwNDAwMTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    targetedMuscles: ["back", "biceps"],
    description: "An excellent exercise for building a thick, strong back and improving posture.",
    tips: [
      "Hinge at the hips with a neutral spine",
      "Pull the bar to your lower chest/upper abs",
      "Squeeze shoulder blades together at the top",
      "Control the weight on the way down"
    ]
  },
  {
    name: "Pull-ups",
    sets: "3",
    reps: "8-12",
    rest: "90s",
    image: "https://images.unsplash.com/photo-1683760682579-68e590fa54d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwdWxsJTIwdXAlMjBleGVyY2lzZXxlbnwxfHx8fDE3NjIwNDAwMTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    targetedMuscles: ["back", "biceps"],
    description: "A bodyweight exercise that's unmatched for building upper body pulling strength.",
    tips: [
      "Use a full range of motion from dead hang",
      "Pull with your elbows, not just arms",
      "Bring your chin over the bar",
      "Lower with control to full extension"
    ]
  },
  {
    name: "Dumbbell Lunges",
    sets: "3",
    reps: "10-12",
    rest: "60s",
    image: "https://images.unsplash.com/photo-1675910518330-1843b4d03de1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkdW1iYmVsbCUyMGx1bmdlcyUyMHdvcmtvdXR8ZW58MXx8fHwxNzYyMDQwMDEyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    targetedMuscles: ["quadriceps", "glutes", "hamstrings"],
    description: "A unilateral leg exercise that improves balance and corrects muscle imbalances.",
    tips: [
      "Step forward with a long stride",
      "Lower until back knee nearly touches ground",
      "Keep front knee aligned over ankle",
      "Push through front heel to return"
    ]
  },
  {
    name: "Plank",
    sets: "3",
    reps: "60s",
    rest: "60s",
    image: "https://images.unsplash.com/photo-1758599878908-596c2042f563?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwbGFuayUyMGV4ZXJjaXNlJTIwY29yZXxlbnwxfHx8fDE3NjIwNDAwMTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    targetedMuscles: ["core"],
    description: "An isometric core exercise that builds stability and endurance throughout the midsection.",
    tips: [
      "Keep body in a straight line from head to heels",
      "Engage core by pulling belly button to spine",
      "Don't let hips sag or pike up",
      "Breathe steadily throughout the hold"
    ]
  },
];

export default function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [selectedExercise, setSelectedExercise] = useState<Exercise | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [celebrationTrigger, setCelebrationTrigger] = useState(false);

  const handleAddToCart = (product: Product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [
        ...prevItems,
        { ...product, quantity: 1 },
      ];
    });

    // Show celebration and toast
    setCelebrationTrigger(prev => !prev);
    toast.success("Added to Cart! 🎉", {
      description: `${product.name} has been added to your cart.`,
      duration: 3000,
    });
  };

  const handleUpdateQuantity = (id: number, quantity: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
      )
    );
  };

  const handleRemoveItem = (id: number) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const handleExerciseClick = (exercise: Exercise) => {
    setSelectedExercise(exercise);
    setDialogOpen(true);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Celebration Animation */}
      <CelebrationAnimation trigger={celebrationTrigger} />
      
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Dumbbell className="w-8 h-8" />
              <h1 className="text-white">FitStrength Pro</h1>
            </div>
            <ShoppingCart
              items={cartItems}
              onUpdateQuantity={handleUpdateQuantity}
              onRemoveItem={handleRemoveItem}
            />
          </div>
        </div>
      </header>

      {/* Full Body Strength Workout Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <h2 className="mb-4">Full Body Strength Workout</h2>
          <p className="text-muted-foreground">
            A comprehensive workout program designed to build strength across all major muscle groups.
            Perfect for intermediate to advanced fitness enthusiasts.
          </p>
        </div>

        <Card className="p-6">
          <p className="text-sm text-muted-foreground mb-4">Click on any exercise to view targeted muscles and detailed instructions</p>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4">Exercise</th>
                  <th className="text-left py-3 px-4">Sets</th>
                  <th className="text-left py-3 px-4">Reps</th>
                  <th className="text-left py-3 px-4">Rest</th>
                </tr>
              </thead>
              <tbody>
                {exercises.map((exercise, index) => (
                  <tr
                    key={index}
                    onClick={() => handleExerciseClick(exercise)}
                    className="border-b hover:bg-muted/50 transition-colors cursor-pointer"
                  >
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-4">
                        <img
                          src={exercise.image}
                          alt={exercise.name}
                          className="w-16 h-16 object-cover rounded-lg"
                        />
                        <span>{exercise.name}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4">{exercise.sets}</td>
                    <td className="py-4 px-4">{exercise.reps}</td>
                    <td className="py-4 px-4">{exercise.rest}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        <ExerciseDialog
          exercise={selectedExercise}
          open={dialogOpen}
          onOpenChange={setDialogOpen}
        />

        <div className="mt-6 p-4 bg-blue-50 rounded-lg">
          <h4 className="mb-2">Workout Notes:</h4>
          <ul className="space-y-2 text-muted-foreground">
            <li>• Warm up for 5-10 minutes before starting</li>
            <li>• Focus on proper form over heavy weight</li>
            <li>• Perform this workout 3 times per week with rest days in between</li>
            <li>• Stay hydrated throughout your workout</li>
          </ul>
        </div>
      </section>

      {/* 3D Animated Products Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="mb-4">Supplements & Equipment</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Premium fitness supplements and equipment to support your strength training journey.
              Hover over products to see ingredients and usage instructions!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Product3D
                key={product.id}
                name={product.name}
                price={product.price}
                image={product.image}
                ingredients={product.ingredients}
                prescription={product.prescription}
                onAddToCart={() => handleAddToCart(product)}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Toast Notifications */}
      <Toaster />
    </div>
  );
}
