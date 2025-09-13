import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Lock, Shield, Sparkles } from "lucide-react";
import hungryHubLogo from "@/assets/hungryhub-logo.jpg";

interface InviteGateProps {
  onVerified: () => void;
}

export const InviteGate = ({ onVerified }: InviteGateProps) => {
  const [inviteCode, setInviteCode] = useState("");
  const [isVerifying, setIsVerifying] = useState(false);
  const [error, setError] = useState("");

  // Demo invite codes for the challenge
  const validCodes = ["HUNGRY2024", "THAILAND", "SINGAPORE", "INFLUENCE"];

  const handleVerify = async () => {
    setIsVerifying(true);
    setError("");
    
    // Simulate verification delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    if (validCodes.includes(inviteCode.toUpperCase())) {
      onVerified();
    } else {
      setError("Invalid invite code. Contact HungryHub for access.");
    }
    
    setIsVerifying(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-md w-full space-y-8">
        {/* Logo and Branding */}
        <div className="text-center">
          <div className="mx-auto w-20 h-20 rounded-2xl overflow-hidden mb-6 shadow-thailand">
            <img 
              src={hungryHubLogo} 
              alt="HungryHub Singapore" 
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-3xl font-bold gradient-text mb-2">
            Thailand Challenge 2024
          </h1>
          <p className="text-muted-foreground">
            Exclusive influencer competition by HungryHub Singapore
          </p>
        </div>

        {/* Invite Card */}
        <Card className="p-8 bg-gradient-card border-primary/20 shadow-card">
          <div className="text-center mb-6">
            <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <Lock className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-xl font-semibold mb-2">Invite Only Access</h2>
            <p className="text-sm text-muted-foreground">
              Enter your exclusive invitation code to join the challenge
            </p>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <Input
                type="text"
                placeholder="Enter invite code"
                value={inviteCode}
                onChange={(e) => setInviteCode(e.target.value)}
                className="text-center text-lg tracking-wider uppercase"
                onKeyPress={(e) => e.key === 'Enter' && handleVerify()}
              />
              {error && (
                <p className="text-destructive text-sm text-center">{error}</p>
              )}
            </div>

            <Button 
              onClick={handleVerify}
              disabled={!inviteCode.trim() || isVerifying}
              className="w-full"
              variant="hero"
              size="lg"
            >
              {isVerifying ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-primary-foreground" />
                  Verifying...
                </>
              ) : (
                <>
                  <Shield className="w-4 h-4" />
                  Verify Access
                </>
              )}
            </Button>
          </div>

          {/* Demo Codes Hint */}
          <div className="mt-6 p-3 bg-muted/50 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium">Demo Codes</span>
            </div>
            <p className="text-xs text-muted-foreground">
              Try: HUNGRY2024, THAILAND, SINGAPORE, or INFLUENCE
            </p>
          </div>
        </Card>

        {/* Footer */}
        <div className="text-center text-xs text-muted-foreground">
          <p>By accessing this challenge, you agree to HungryHub's terms.</p>
        </div>
      </div>
    </div>
  );
};