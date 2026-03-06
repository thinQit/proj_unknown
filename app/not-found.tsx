import Container from "@/components/Container";
import PrimaryButton from "@/components/PrimaryButton";

export default function NotFound() {
  return (
    <main className="py-20 md:py-28">
      <Container>
        <div className="max-w-xl space-y-4">
          <h1 className="font-serif text-4xl text-foreground">
            Page not found
          </h1>
          <p className="text-muted-foreground">
            The page you’re looking for doesn’t exist. Let’s get you back on track.
          </p>
          <PrimaryButton label="Return Home" href="/" />
        </div>
      </Container>
    </main>
  );
}
