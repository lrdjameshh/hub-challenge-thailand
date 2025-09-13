import { useState } from "react";
import { InviteGate } from "@/components/InviteGate";
import { ChallengeHero } from "@/components/ChallengeHero";
import { Leaderboard } from "@/components/Leaderboard";
import { ChallengeRules } from "@/components/ChallengeRules";
import { FoodShowcase } from "@/components/FoodShowcase";

const Index = () => {
  const [isVerified, setIsVerified] = useState(false);

  // Show invite gate if not verified
  if (!isVerified) {
    return <InviteGate onVerified={() => setIsVerified(true)} />;
  }

  // Show main challenge content after verification
  return (
    <div className="min-h-screen">
      <ChallengeHero />
      <FoodShowcase />
      <Leaderboard />
      <ChallengeRules />
      
      {/* Footer */}
      <footer className="py-12 border-t border-border/50 animate-fade-in">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            © 2024 HungryHub Singapore. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground/70 mt-2">
            Challenge terms and conditions apply. Winner selection is final.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
