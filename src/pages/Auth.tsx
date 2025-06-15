
import React, { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import { Loader2 } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  React.useEffect(() => {
    // Redirige automatiquement après login
    if (!loading && user) navigate("/");
  }, [user, loading, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    let error = null;
    if (isLogin) {
      const { error: err } = await supabase.auth.signInWithPassword({ email, password });
      error = err;
    } else {
      const { error: err } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: window.location.origin + "/",
        }
      });
      if (!err) {
        toast({ title: "Vérifie ta boîte mail", description: "Clique sur le lien pour finaliser l'inscription." });
      }
      error = err;
    }

    if (error) {
      toast({ title: "Erreur", description: error.message, variant: "destructive" });
    }

    setSubmitting(false);
  };

  return (
    <div className="flex min-h-[60vh] items-center justify-center px-3">
      <form onSubmit={handleSubmit} className="rounded-xl shadow bg-white p-10 max-w-md w-full animate-fade-in">
        <h2 className="text-2xl font-bold mb-3">{isLogin ? "Connexion technicien" : "Créer un compte technicien"}</h2>
        <div className="space-y-3">
          <Input
            placeholder="Adresse email"
            autoComplete="email"
            required
            disabled={submitting}
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <Input
            placeholder="Mot de passe"
            autoComplete="current-password"
            required
            disabled={submitting}
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <Button type="submit" disabled={submitting} className="w-full">
            {submitting && <Loader2 className="animate-spin mr-2" />}
            {isLogin ? "Connexion" : "Créer le compte"}
          </Button>
        </div>
        <div className="mt-5 text-center text-sm">
          {isLogin ? (
            <>
              Pas encore de compte ?{" "}
              <button type="button" className="underline" onClick={() => setIsLogin(false)}>
                Créer un compte
              </button>
            </>
          ) : (
            <>
              Déjà un compte ?{" "}
              <button type="button" className="underline" onClick={() => setIsLogin(true)}>
                Se connecter
              </button>
            </>
          )}
        </div>
      </form>
    </div>
  );
};

export default AuthPage;
