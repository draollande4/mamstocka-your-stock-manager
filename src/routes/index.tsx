import { createFileRoute, Link } from "@tanstack/react-router";
import { Boxes, ShoppingCart, FileText, PiggyBank } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MamStockaV3 — Gestion de stocks du sac au kilo" },
      {
        name: "description",
        content:
          "Entrées, sorties, ventes en détail et en gros, factures, dépenses, salaires, manques & pertes, comptes d'épargne — tout est enregistré et exportable en PDF.",
      },
      { property: "og:title", content: "MamStockaV3 — Gestion de stocks du sac au kilo" },
      {
        property: "og:description",
        content:
          "La gestion de stocks, du sac de 50 Kg jusqu'au dernier kilo vendu. Ventes, factures, dépenses et épargne en un seul outil.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Landing,
});

const features = [
  {
    icon: Boxes,
    title: "Détail & Gros",
    description: "Un sac de 50 Kg entre en stock, se vend au Kg ou au sac.",
  },
  {
    icon: ShoppingCart,
    title: "Vente au panier",
    description: "Plusieurs produits, une seule facture au nom du client.",
  },
  {
    icon: FileText,
    title: "Factures & bons",
    description: "Numérotation automatique, impression et export PDF.",
  },
  {
    icon: PiggyBank,
    title: "Salaires & épargne",
    description: "Pertes déduites, primes, retraits validés par un admin.",
  },
];

function Landing() {
  return (
    <main className="min-h-screen bg-background">
      <section className="mx-auto max-w-5xl px-6 py-20 md:py-28">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
          MamStocka
        </p>

        <h1 className="mt-6 max-w-3xl text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl">
          La gestion de stocks, du sac de 50 Kg jusqu'au dernier kilo vendu.
        </h1>

        <p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
          Entrées, sorties, ventes en détail et en gros, factures, dépenses, salaires, manques &
          pertes, comptes d'épargne — tout est enregistré et exportable en PDF.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            to="/auth"
            className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Se connecter
          </Link>
          <Link
            to="/dashboard"
            className="inline-flex items-center justify-center rounded-md border border-border bg-card px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
          >
            Accéder à l'application
          </Link>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2">
          {features.map(({ icon: Icon, title, description }) => (
            <article key={title} className="rounded-xl border border-border bg-card p-5">
              <Icon className="h-5 w-5 text-primary" aria-hidden="true" />
              <h2 className="mt-3 text-sm font-semibold text-card-foreground">{title}</h2>
              <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">{description}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
