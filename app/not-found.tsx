import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-20 text-center">
      <h1 className="text-3xl font-semibold text-foreground">
        Page not found
      </h1>
      <p className="mt-4 text-muted-foreground">
        The page you’re looking for doesn’t exist. Let’s get you back to CalmWave.
      </p>
      <div className="mt-8 flex justify-center">
        <Button asChild>
          <Link href="/">Go to home</Link>
        </Button>
      </div>
    </div>
  );
}
