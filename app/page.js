import Hero from "./components/home/Hero";
import Intro from "./components/Home/Intro";
import Services from "./components/Home/Services";
import Booking from "./components/Home/Booking";
export default function Home() {
  return (
    <main>
      <Hero />
      <Intro />
      <Services />
      <Booking />
    </main>
  );
}