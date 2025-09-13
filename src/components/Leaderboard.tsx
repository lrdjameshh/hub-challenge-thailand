import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Crown, Trophy, Medal, TrendingUp, Eye, Heart, Share2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface Influencer {
  id: number;
  name: string;
  handle: string;
  avatar: string;
  views: number;
  likes: number;
  shares: number;
  growth: number;
  verified: boolean;
}

// Mock leaderboard data
const leaderboardData: Influencer[] = [
  {
    id: 1,
    name: "Sarah Chen",
    handle: "@sarahfoodie",
    avatar: "SC",
    views: 2450000,
    likes: 156000,
    shares: 12400,
    growth: 15.3,
    verified: true,
  },
  {
    id: 2,
    name: "Marcus Tan",
    handle: "@marcuseats",
    avatar: "MT",
    views: 2100000,
    likes: 134000,
    shares: 9800,
    growth: 12.1,
    verified: true,
  },
  {
    id: 3,
    name: "Priya Kumar",
    handle: "@priyaflavors",
    avatar: "PK",
    views: 1850000,
    likes: 98000,
    shares: 7600,
    growth: 8.7,
    verified: true,
  },
  {
    id: 4,
    name: "Alex Wong",
    handle: "@alexbites",
    avatar: "AW",
    views: 1420000,
    likes: 78000,
    shares: 5900,
    growth: 6.2,
    verified: false,
  },
  {
    id: 5,
    name: "Maya Singh",
    handle: "@mayacooks",
    avatar: "MS",
    views: 1180000,
    likes: 65000,
    shares: 4800,
    growth: 4.1,
    verified: true,
  },
];

const getRankIcon = (position: number) => {
  switch (position) {
    case 1:
      return <Crown className="w-5 h-5 text-accent animate-float" />;
    case 2:
      return <Trophy className="w-5 h-5 text-secondary" />;
    case 3:
      return <Medal className="w-5 h-5 text-primary" />;
    default:
      return <span className="text-lg font-bold text-muted-foreground">#{position}</span>;
  }
};

const formatNumber = (num: number) => {
  if (num >= 1000000) {
    return `${(num / 1000000).toFixed(1)}M`;
  }
  if (num >= 1000) {
    return `${(num / 1000).toFixed(1)}K`;
  }
  return num.toString();
};

export const Leaderboard = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold gradient-text mb-4">
            Live Leaderboard
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Track the competition as influencers battle for the ultimate Thailand getaway. 
            Rankings update in real-time based on total video views.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {leaderboardData.map((influencer, index) => {
            const position = index + 1;
            const isTop3 = position <= 3;
            
            return (
              <Card 
                key={influencer.id}
                className={cn(
                  "p-6 bg-gradient-card border transition-all duration-300 hover:scale-[1.02]",
                  isTop3 && "border-primary/40 shadow-glow",
                  position === 1 && "bg-gradient-thailand border-accent/60 shadow-thailand"
                )}
              >
                <div className="flex items-center gap-6">
                  {/* Rank */}
                  <div className="flex items-center justify-center w-12 h-12">
                    {getRankIcon(position)}
                  </div>

                  {/* Avatar */}
                  <div className="relative">
                    <div className={cn(
                      "w-14 h-14 rounded-full flex items-center justify-center text-lg font-bold",
                      position === 1 ? "bg-gradient-thailand text-accent-foreground" :
                      position === 2 ? "bg-gradient-to-r from-secondary to-secondary/80 text-secondary-foreground" :
                      position === 3 ? "bg-gradient-primary text-primary-foreground" :
                      "bg-muted text-muted-foreground"
                    )}>
                      {influencer.avatar}
                    </div>
                    {influencer.verified && (
                      <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-primary flex items-center justify-center">
                        <Crown className="w-3 h-3 text-primary-foreground" />
                      </div>
                    )}
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold text-lg">{influencer.name}</h3>
                      {isTop3 && (
                        <Badge variant="outline" className="border-primary text-primary">
                          Top {position}
                        </Badge>
                      )}
                    </div>
                    <p className="text-muted-foreground">{influencer.handle}</p>
                  </div>

                  {/* Stats */}
                  <div className="hidden md:flex items-center gap-8">
                    <div className="text-center">
                      <div className="flex items-center gap-1 text-sm text-muted-foreground mb-1">
                        <Eye className="w-4 h-4" />
                        Views
                      </div>
                      <div className="font-bold text-lg">{formatNumber(influencer.views)}</div>
                    </div>
                    
                    <div className="text-center">
                      <div className="flex items-center gap-1 text-sm text-muted-foreground mb-1">
                        <Heart className="w-4 h-4" />
                        Likes
                      </div>
                      <div className="font-semibold">{formatNumber(influencer.likes)}</div>
                    </div>
                    
                    <div className="text-center">
                      <div className="flex items-center gap-1 text-sm text-muted-foreground mb-1">
                        <Share2 className="w-4 h-4" />
                        Shares
                      </div>
                      <div className="font-semibold">{formatNumber(influencer.shares)}</div>
                    </div>
                  </div>

                  {/* Growth */}
                  <div className="text-center">
                    <div className="flex items-center gap-1 text-sm text-muted-foreground mb-1">
                      <TrendingUp className="w-4 h-4" />
                      Growth
                    </div>
                    <div className="font-bold text-primary">+{influencer.growth}%</div>
                  </div>
                </div>

                {/* Mobile Stats */}
                <div className="md:hidden mt-4 pt-4 border-t border-border/50">
                  <div className="flex justify-between text-sm">
                    <div className="text-center">
                      <div className="text-muted-foreground">Views</div>
                      <div className="font-bold">{formatNumber(influencer.views)}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-muted-foreground">Likes</div>
                      <div className="font-semibold">{formatNumber(influencer.likes)}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-muted-foreground">Shares</div>
                      <div className="font-semibold">{formatNumber(influencer.shares)}</div>
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Prize Reminder */}
        <div className="mt-12 text-center">
          <Card className="p-6 bg-gradient-thailand border-accent/40 shadow-thailand max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-accent-foreground mb-2">
              🏆 Winner Takes All
            </h3>
            <p className="text-accent-foreground/90">
              The influencer with the highest total views wins a fully paid 5-day trip to Thailand!
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};