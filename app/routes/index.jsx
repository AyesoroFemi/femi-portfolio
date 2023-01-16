import Experience from "~/components/Experience";
import Hero from "~/components/Hero";
import Nav from "~/components/Nav";
import Project from "~/components/project";
import Video from "~/components/Video";
import Footer from "~/components/Footer";

export default function Index() {
  return (
    <div className="font-['Chivo']">
      <Nav />
      <Hero />
      <Experience />
      <Project />
      <Video/>
      <Footer />
    </div>
  );
}
