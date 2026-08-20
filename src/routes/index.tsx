import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MamStockaV3" },
      { name: "description", content: "MamStockaV3 — application de gestion de stock." },
      { property: "og:title", content: "MamStockaV3" },
      { property: "og:description", content: "MamStockaV3 — application de gestion de stock." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          MamStockaV3
        </h1>
        <p className="mt-3 text-sm text-muted-foreground">
          Projet vide — prêt à être développé.
        </p>
      </div>
    </main>
  );
}
