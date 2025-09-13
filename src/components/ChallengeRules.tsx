import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  CheckCircle, 
  Calendar, 
  Target, 
  Award, 
  Users, 
  Camera, 
  TrendingUp,
  AlertCircle,
  Clock,
  MapPin
} from "lucide-react";

export const ChallengeRules = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const rules = [
    {
      icon: <Users className="w-5 h-5" />,
      title: "Eligibility",
      description: "Singapore-based food influencers with 10K+ followers",
      details: "Must have active social media presence and food-focused content"
    },
    {
      icon: <Camera className="w-5 h-5" />,
      title: "Content Requirements",
      description: "Create videos featuring HungryHub partner restaurants",
      details: "Minimum 30 seconds, must include #HungryHubThailand #ThailandChallenge2024"
    },
    {
      icon: <TrendingUp className="w-5 h-5" />,
      title: "Scoring System",
      description: "Winner determined by total video views across all platforms",
      details: "Instagram Reels, TikTok, YouTube Shorts all count towards final score"
    },
    {
      icon: <Clock className="w-5 h-5" />,
      title: "Timeline",
      description: "Challenge runs for 30 days from launch",
      details: "Final winner announced 48 hours after challenge ends"
    }
  ];

  const prizes = [
    {
      place: "1st Place",
      prize: "5-Day Thailand Trip",
      value: "$3,000 SGD",
      details: "Flights, luxury hotel, food tours, cultural experiences",
      color: "gradient-thailand"
    },
    {
      place: "2nd Place", 
      prize: "HungryHub Credits",
      value: "$500 SGD",
      details: "Food delivery credits valid for 6 months",
      color: "gradient-primary"
    },
    {
      place: "3rd Place",
      prize: "Restaurant Vouchers",
      value: "$200 SGD",
      details: "Premium dining experiences at partner restaurants",
      color: "text-secondary"
    }
  ];

  return (
    <section id="rules" className="py-16">
      <div className="container mx-auto px-4 animate-fade-in">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 border-primary text-primary animate-glow-pulse">
            <Target className="w-4 h-4 mr-2" />
            Challenge Guidelines
          </Badge>
          <h2 className="text-4xl font-bold gradient-text mb-4 animate-slide-up">
            Rules & Prizes
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Everything you need to know to compete in Singapore's most exciting food influencer challenge
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Rules Section */}
          <div className="animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <CheckCircle className="w-6 h-6 text-primary" />
              Challenge Rules
            </h3>
            
            <div className="space-y-4">
              {rules.map((rule, index) => (
                <Card 
                  key={index} 
                  className="p-6 bg-gradient-card border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-[1.02] animate-slide-up" 
                  style={{ animationDelay: `${0.5 + index * 0.1}s` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0 hover:scale-110 transition-transform duration-300">
                      {rule.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-lg mb-2">{rule.title}</h4>
                      <p className="text-foreground mb-2">{rule.description}</p>
                      <p className="text-sm text-muted-foreground">{rule.details}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Important Notes */}
            <Card className="mt-6 p-4 bg-secondary/10 border-secondary/40 animate-bounce-in" style={{ animationDelay: '1s' }}>
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-secondary mb-1">Important Notes</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Videos must comply with platform community guidelines</li>
                    <li>• HungryHub reserves the right to verify view counts</li>
                    <li>• Winner must be available for Thailand trip within 3 months</li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>

          {/* Prizes Section */}
          <div className="animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Award className="w-6 h-6 text-accent" />
              Prize Structure
            </h3>

            <div className="space-y-4">
              {prizes.map((prize, index) => (
                <Card 
                  key={index} 
                  className={`p-6 transition-all duration-300 hover:scale-[1.02] animate-bounce-in ${
                    index === 0 
                      ? 'bg-gradient-thailand border-accent/40 shadow-thailand hover:shadow-xl' 
                      : 'bg-gradient-card border-primary/20 hover:border-primary/40'
                  }`}
                  style={{ animationDelay: `${0.6 + index * 0.15}s` }}
                >
                  <div className="text-center">
                    <div className="mb-4">
                      <Badge 
                        variant="outline" 
                        className={`${index === 0 ? 'border-accent text-accent-foreground bg-accent/20' : 'border-primary text-primary'} animate-glow-pulse`}
                      >
                        {prize.place}
                      </Badge>
                    </div>
                    
                    <h4 className={`text-xl font-bold mb-2 ${
                      index === 0 ? 'text-accent-foreground' : ''
                    }`}>
                      {prize.prize}
                    </h4>
                    
                    <div className={`text-2xl font-bold mb-3 ${
                      index === 0 ? 'text-accent-foreground' : 'gradient-text'
                    }`}>
                      {prize.value}
                    </div>
                    
                    <p className={`text-sm ${
                      index === 0 ? 'text-accent-foreground/90' : 'text-muted-foreground'
                    }`}>
                      {prize.details}
                    </p>

                    {index === 0 && (
                      <div className="mt-4 pt-4 border-t border-accent/20">
                        <div className="flex items-center justify-center gap-2 text-accent-foreground/90">
                          <MapPin className="w-4 h-4" />
                          <span className="text-sm font-medium">Bangkok • Phuket • Chiang Mai</span>
                        </div>
                      </div>
                    )}
                  </div>
                </Card>
              ))}
            </div>

            {/* Challenge Timeline */}
            <Card className="mt-6 p-6 bg-gradient-card border-primary/20 animate-slide-up" style={{ animationDelay: '1.2s' }}>
              <h4 className="font-semibold text-lg mb-4 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-primary" />
                Challenge Timeline
              </h4>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Challenge Launch:</span>
                  <span className="font-medium">December 1, 2024</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Submission Deadline:</span>
                  <span className="font-medium">December 31, 2024</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Winner Announcement:</span>
                  <span className="font-medium text-primary">January 2, 2025</span>
                </div>
              </div>
            </Card>

            {/* CTA */}
            <div className="mt-6 text-center animate-bounce-in" style={{ animationDelay: '1.4s' }}>
              <Button 
                variant="thailand" 
                size="lg" 
                className="w-full hover:scale-105 transition-all duration-300"
                onClick={scrollToTop}
              >
                <TrendingUp className="w-5 h-5 mr-2" />
                Start Creating Content
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};