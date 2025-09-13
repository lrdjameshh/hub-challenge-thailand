import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Camera, Heart, Share2, Users, ChefHat, MapPin } from "lucide-react";
import foodHero from "@/assets/food-hero.jpg";
import contentCreation from "@/assets/content-creation.jpg";
import kitchenAction from "@/assets/kitchen-action.jpg";

export const FoodShowcase = () => {
  const featuredRestaurants = [
    {
      name: "Hawker Heritage",
      location: "Singapore",
      specialty: "Laksa & Char Kway Teow",
      image: foodHero,
      views: "2.3M",
      featured: true
    },
    {
      name: "Thai Street Kitchen", 
      location: "Thailand Partner",
      specialty: "Pad Thai & Green Curry",
      image: kitchenAction,
      views: "1.8M",
      featured: true
    },
    {
      name: "Content Creator Hub",
      location: "Studio Setup",
      specialty: "Food Photography Tips",
      image: contentCreation,
      views: "950K",
      featured: false
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-background to-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <Badge variant="outline" className="mb-4 border-secondary text-secondary animate-glow-pulse">
            <ChefHat className="w-4 h-4 mr-2" />
            Featured Content
          </Badge>
          <h2 className="text-4xl font-bold gradient-text mb-4 animate-slide-up">
            Food Creator Ecosystem
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Discover amazing restaurants, learn content creation tips, and see what other influencers are creating
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {featuredRestaurants.map((restaurant, index) => (
            <Card 
              key={index}
              className="overflow-hidden bg-gradient-card border-primary/20 hover:border-primary/40 transition-all duration-500 hover:scale-[1.02] animate-slide-up group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={restaurant.image} 
                  alt={restaurant.name}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                
                {restaurant.featured && (
                  <Badge className="absolute top-3 left-3 bg-gradient-thailand text-accent-foreground border-accent/40">
                    Featured
                  </Badge>
                )}
                
                <div className="absolute bottom-3 right-3 flex items-center gap-2 text-white/90">
                  <Camera className="w-4 h-4" />
                  <span className="text-sm font-medium">{restaurant.views} views</span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">{restaurant.location}</span>
                </div>
                
                <h3 className="text-xl font-bold mb-2 group-hover:gradient-text transition-all duration-300">
                  {restaurant.name}
                </h3>
                
                <p className="text-muted-foreground mb-4">{restaurant.specialty}</p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1 hover:text-primary transition-colors cursor-pointer">
                      <Heart className="w-4 h-4" />
                      <span>Like</span>
                    </div>
                    <div className="flex items-center gap-1 hover:text-primary transition-colors cursor-pointer">
                      <Share2 className="w-4 h-4" />
                      <span>Share</span>
                    </div>
                  </div>
                  
                  <Button 
                    size="sm" 
                    variant={restaurant.featured ? "thailand" : "outline"}
                    className="hover:scale-105 transition-transform duration-300"
                  >
                    {restaurant.featured ? "Visit" : "Learn More"}
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 animate-bounce-in" style={{ animationDelay: '1s' }}>
          <Card className="p-8 bg-gradient-thailand border-accent/40 shadow-thailand max-w-3xl mx-auto hover:shadow-xl transition-all duration-500">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Users className="w-6 h-6 text-accent-foreground" />
              <h3 className="text-2xl font-bold text-accent-foreground">Join the Creator Community</h3>
            </div>
            <p className="text-accent-foreground/90 mb-6 text-lg">
              Connect with fellow food influencers, share tips, and discover new restaurant partnerships
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="outline" 
                size="lg"
                className="bg-white/10 text-accent-foreground border-accent-foreground/30 hover:bg-white/20 hover:scale-105 transition-all duration-300"
              >
                <Camera className="w-5 h-5 mr-2" />
                Content Tips
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="bg-white/10 text-accent-foreground border-accent-foreground/30 hover:bg-white/20 hover:scale-105 transition-all duration-300"
              >
                <ChefHat className="w-5 h-5 mr-2" />
                Restaurant Partners
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};