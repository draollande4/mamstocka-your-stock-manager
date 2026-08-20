import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MamStockaV3 — Gestion de stock" },
      { name: "description", content: "Application de gestion de stock MamStockaV3." },
      { property: "og:title", content: "MamStockaV3 — Gestion de stock" },
      { property: "og:description", content: "Application de gestion de stock MamStockaV3." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 px-4">
      <h1 className="text-4xl font-bold tracking-tight text-foreground">
        MamStockaV3
      </h1>
      <p className="text-muted-foreground">
        Application de gestion de stock — prête à recevoir ton code.
      </p>
    </main>
  );
}
