import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useQueryClient } from "@tanstack/react-query";

import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const Route = createFileRoute("/_authenticated/dashboard")({
  head: () => ({
    meta: [
      { title: "Tableau de bord — MamStockaV3" },
      {
        name: "description",
        content: "Vue d'ensemble de votre stock, de vos produits et de vos mouvements.",
      },
      { property: "og:title", content: "Tableau de bord — MamStockaV3" },
      {
        property: "og:description",
        content: "Vue d'ensemble de votre stock dans MamStockaV3.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Dashboard,
});

function Dashboard() {
  const { user } = Route.useRouteContext();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  async function handleSignOut() {
    await queryClient.cancelQueries();
    queryClient.clear();
    await supabase.auth.signOut();
    navigate({ to: "/auth", replace: true });
  }

  return (
    <main className="min-h-screen bg-background">
      <header className="flex items-center justify-between border-b px-6 py-4">
        <div>
          <h1 className="text-lg font-semibold text-foreground">MamStockaV3</h1>
          <p className="text-xs text-muted-foreground">{user.email}</p>
        </div>
        <Button variant="outline" size="sm" onClick={handleSignOut}>
          Se déconnecter
        </Button>
      </header>

      <section className="px-6 py-10">
        <Card className="max-w-xl">
          <CardHeader>
            <CardTitle>Bienvenue</CardTitle>
            <CardDescription>
              Votre espace est prêt. Les modules de gestion de stock seront ajoutés ici.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            Prochaines étapes possibles : produits, catégories, entrées/sorties de stock,
            fournisseurs.
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
