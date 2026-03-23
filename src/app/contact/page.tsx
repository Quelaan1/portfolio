import ContactForm from "@/components/contact/ContactForm";
import Dossier from "@/components/contact/Dossier";
import MapSection from "@/components/contact/MapSection";

export const metadata = {
  title: "Contact | Tilak Kumar",
  description: "Let's build the next generation — get in touch.",
};

export default function ContactPage() {
  return (
    <main className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
      <header className="mb-20">
        <h1 className="font-[family-name:var(--font-headline)] text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
          Let&apos;s Build the{" "}
          <span className="text-primary">Next Generation</span>
        </h1>
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
          <span className="text-secondary text-sm tracking-widest uppercase font-medium">
            System Status: Accepting New Ventures
          </span>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        <Dossier />
        <ContactForm />
      </div>

      <MapSection />
    </main>
  );
}
