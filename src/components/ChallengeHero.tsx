import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Users, Trophy, Plane, Camera } from "lucide-react";
import thailandHero from "@/assets/thailand-hero.jpg";
import hungryHubLogo from "@/assets/hungryhub-logo.jpg";

export const ChallengeHero = () => {
  const scrollToLeaderboard = () => {
    document.getElementById('leaderboard')?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  const scrollToRules = () => {
    document.getElementById('rules')?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };
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
      <div className="relative z-10 container mx-auto px-4 py-20 animate-fade-in">
        <div className="max-w-4xl mx-auto text-center">
          {/* Brand Header */}
          <div className="flex items-center justify-center gap-4 mb-8 animate-slide-up">
            <div className="w-16 h-16 rounded-2xl overflow-hidden shadow-thailand hover:scale-105 transition-transform duration-300">
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
          <div className="mb-8 animate-bounce-in">
            <Badge variant="outline" className="mb-4 border-primary text-primary animate-glow-pulse">
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
            <div className="text-center animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3 hover:scale-110 transition-transform duration-300">
                <Trophy className="w-6 h-6 text-primary" />
              </div>
              <div className="text-2xl font-bold gradient-text">1</div>
              <div className="text-sm text-muted-foreground">Winner</div>
            </div>
            
            <div className="text-center animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <div className="mx-auto w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-3 hover:scale-110 transition-transform duration-300">
                <Calendar className="w-6 h-6 text-accent" />
              </div>
              <div className="text-2xl font-bold gradient-thailand">5</div>
              <div className="text-sm text-muted-foreground">Days in Thailand</div>
            </div>
            
            <div className="text-center animate-slide-up" style={{ animationDelay: '0.6s' }}>
              <div className="mx-auto w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mb-3 hover:scale-110 transition-transform duration-300">
                <Camera className="w-6 h-6 text-secondary" />
              </div>
              <div className="text-2xl font-bold text-secondary">∞</div>
              <div className="text-sm text-muted-foreground">Content Creation</div>
            </div>
            
            <div className="text-center animate-slide-up" style={{ animationDelay: '0.8s' }}>
              <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3 hover:scale-110 transition-transform duration-300">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div className="text-2xl font-bold gradient-text">🇹🇭</div>
              <div className="text-sm text-muted-foreground">Amazing Thailand</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in" style={{ animationDelay: '1s' }}>
            <Button 
              size="lg" 
              variant="hero" 
              className="text-lg px-8 py-4 hover:scale-105 transition-all duration-300"
              onClick={scrollToLeaderboard}
            >
              <Plane className="w-5 h-5 mr-2" />
              View Leaderboard
            </Button>
            <Button 
              size="lg" 
              variant="challenge" 
              className="text-lg px-8 py-4 hover:scale-105 transition-all duration-300"
              onClick={scrollToRules}
            >
              <Trophy className="w-5 h-5 mr-2" />
              Challenge Rules
            </Button>
          </div>

          {/* Prize Highlight */}
          <div className="max-w-2xl mx-auto animate-bounce-in" style={{ animationDelay: '1.2s' }}>
            <div className="p-6 rounded-2xl bg-gradient-thailand border border-accent/40 shadow-thailand hover:shadow-xl transition-all duration-500">
              <h3 className="text-xl font-bold text-accent-foreground mb-2">
                🏆 Grand Prize Worth $3,000 SGD
              </h3>
              <p className="text-accent-foreground/90">
                Luxury accommodation • Flights included • Food tours • Cultural experiences
              </p>
            </div>
          </div>

          {/* Competition Status */}
          <div className="mt-8 flex items-center justify-center gap-2 animate-fade-in" style={{ animationDelay: '1.4s' }}>
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