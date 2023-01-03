import Experience from "~/components/Experience";
import Hero from "~/components/Hero";
import Nav from "~/components/Nav";

export default function Index() {
  return (
    <div className="font-['Chivo']">
      <Nav />
      <Hero />
      <Experience/>
    </div>
  );
}
