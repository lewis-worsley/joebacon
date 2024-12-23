import ContactForm from "@/components/ContactForm";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Intro from "@/components/Intro";
import Services from "@/components/Services";

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <Intro />
        <Services />
        <Experience />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
