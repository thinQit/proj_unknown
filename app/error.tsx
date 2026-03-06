"use client";

import Container from "@/components/Container";
import { Button } from "@/components/ui/button";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <main className="py-20 md:py-28">
      <Container>
        <div className="max-w-xl space-y-4">
          <h1 className="font-serif text-3xl text-foreground">
            Something went wrong.
          </h1>
          <p className="text-muted-foreground">{error.message}</p>
          <Button onClick={reset}>Try again</Button>
        </div>
      </Container>
    </main>
  );
}
