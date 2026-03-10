import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import PrivaLexLogo from "@/components/PrivaLexLogo";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Placeholder — will use Supabase auth when Cloud is enabled
    setTimeout(() => {
      localStorage.setItem("privalex_admin", "true");
      navigate("/admin");
      setLoading(false);
    }, 500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-light-grey">
      <div className="w-full max-w-md bg-card border border-border rounded-lg p-8 shadow-sm">
        <div className="flex justify-center mb-8">
          <PrivaLexLogo />
        </div>
        <h1 className="text-2xl font-bold text-foreground text-center mb-2">Admin Login</h1>
        <p className="text-muted-foreground text-center text-sm mb-8">Sign in to manage your content.</p>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="text-sm font-medium text-foreground block mb-1">Email</label>
            <Input type="email" required value={email} onChange={e => setEmail(e.target.value)} placeholder="admin@privalexadvisory.com" />
          </div>
          <div>
            <label className="text-sm font-medium text-foreground block mb-1">Password</label>
            <Input type="password" required value={password} onChange={e => setPassword(e.target.value)} />
          </div>
          <Button variant="teal" className="w-full" type="submit" disabled={loading}>
            {loading ? "Signing in..." : "Sign In"}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
