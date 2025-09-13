import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Users, Trophy, Plane, Camera } from "lucide-react";
import thailandHero from "@/assets/thailand-hero.jpg";
import hungryHubLogo from "@/assets/hungryhub-logo.jpg";

export const ChallengeHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={thailandHero} 
          alt="Thailand destination" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Brand Header */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-16 h-16 rounded-2xl overflow-hidden shadow-thailand">
              <img 
                src={hungryHubLogo} 
                alt="HungryHub Singapore" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-left">
              <h3 className="text-lg font-semibold">HungryHub Singapore</h3>
              <p className="text-sm text-muted-foreground">Presents</p>
            </div>
          </div>

          {/* Main Title */}
          <div className="mb-8">
            <Badge variant="outline" className="mb-4 border-primary text-primary">
              <Users className="w-4 h-4 mr-2" />
              Invite Only Challenge
            </Badge>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="gradient-thailand">Thailand</span>
              <br />
              <span className="gradient-text">Challenge 2024</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Singapore's top food influencers compete for the ultimate prize: 
              a <span className="text-accent font-semibold">fully paid 5-day trip to Thailand</span>
            </p>
          </div>

          {/* Challenge Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="text-center">
              <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                <Trophy className="w-6 h-6 text-primary" />
              </div>
              <div className="text-2xl font-bold gradient-text">1</div>
              <div className="text-sm text-muted-foreground">Winner</div>
            </div>
            
            <div className="text-center">
              <div className="mx-auto w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-3">
                <Calendar className="w-6 h-6 text-accent" />
              </div>
              <div className="text-2xl font-bold gradient-thailand">5</div>
              <div className="text-sm text-muted-foreground">Days in Thailand</div>
            </div>
            
            <div className="text-center">
              <div className="mx-auto w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mb-3">
                <Camera className="w-6 h-6 text-secondary" />
              </div>
              <div className="text-2xl font-bold text-secondary">∞</div>
              <div className="text-sm text-muted-foreground">Content Creation</div>
            </div>
            
            <div className="text-center">
              <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div className="text-2xl font-bold gradient-text">🇹🇭</div>
              <div className="text-sm text-muted-foreground">Amazing Thailand</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" variant="hero" className="text-lg px-8 py-4">
              <Plane className="w-5 h-5 mr-2" />
              View Leaderboard
            </Button>
            <Button size="lg" variant="challenge" className="text-lg px-8 py-4">
              <Trophy className="w-5 h-5 mr-2" />
              Challenge Rules
            </Button>
          </div>

          {/* Prize Highlight */}
          <div className="max-w-2xl mx-auto">
            <div className="p-6 rounded-2xl bg-gradient-thailand border border-accent/40 shadow-thailand">
              <h3 className="text-xl font-bold text-accent-foreground mb-2">
                🏆 Grand Prize Worth $3,000 SGD
              </h3>
              <p className="text-accent-foreground/90">
                Luxury accommodation • Flights included • Food tours • Cultural experiences
              </p>
            </div>
          </div>

          {/* Competition Status */}
          <div className="mt-8 flex items-center justify-center gap-2">
            <div className="w-3 h-3 rounded-full bg-primary animate-glow-pulse" />
            <span className="text-sm font-medium text-primary">Challenge Live Now</span>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 rounded-full bg-primary/10 animate-float" />
      <div className="absolute bottom-32 right-16 w-16 h-16 rounded-full bg-accent/10 animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/3 right-8 w-12 h-12 rounded-full bg-secondary/10 animate-float" style={{ animationDelay: '2s' }} />
    </section>
  );
};