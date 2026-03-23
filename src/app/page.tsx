import Hero from "@/components/home/Hero";
import BentoGrid from "@/components/home/BentoGrid";
import StatusBar from "@/components/StatusBar";

export default function Home() {
  return (
    <main className="pt-32 pb-24">
      <Hero />
      <BentoGrid />
      <StatusBar />
    </main>
  );
}
