import Experience from "~/components/Experience";
import Hero from "~/components/Hero";
import Nav from "~/components/Nav";
import Project from "~/components/project";

export default function Index() {
  return (
    <div className="font-['Chivo']">
      <Nav />
      <Hero />
      <Experience />
      <Project />
    </div>
  );
}
