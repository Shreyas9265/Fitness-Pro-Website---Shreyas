import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Button } from "./ui/button";
import { Plus } from "lucide-react";
import { Badge } from "./ui/badge";

interface Product3DProps {
  name: string;
  price: number;
  image: string;
  ingredients?: string[];
  prescription?: string;
  onAddToCart: () => void;
}

export function Product3D({ name, price, image, ingredients, prescription, onAddToCart }: Product3DProps) {
  return (
    <div className="product-card group">
      <div className="product-image-container">
        <ImageWithFallback
          src={image}
          alt={name}
          className="w-full h-full object-contain"
        />
      </div>
      <div className="p-6">
        <h3 className="mb-2">{name}</h3>
        <p className="text-muted-foreground mb-4">${price.toFixed(2)}</p>
        
        {/* Details shown on hover */}
        <div className="product-details mb-4">
          {ingredients && ingredients.length > 0 && (
            <div className="mb-3">
              <h4 className="mb-2">Key Ingredients:</h4>
              <div className="flex flex-wrap gap-1">
                {ingredients.map((ingredient, index) => (
                  <Badge key={index} variant="secondary" className="text-xs">
                    {ingredient}
                  </Badge>
                ))}
              </div>
            </div>
          )}
          {prescription && (
            <div className="mb-3">
              <h4 className="mb-1">Usage:</h4>
              <p className="text-sm text-muted-foreground">{prescription}</p>
            </div>
          )}
        </div>
        
        <Button onClick={onAddToCart} className="w-full">
          <Plus className="w-4 h-4 mr-2" />
          Add to Cart
        </Button>
      </div>
    </div>
  );
}
