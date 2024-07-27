import BlogSections from "@/components/BlogSections";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />

      <BlogSections />

      <ContactForm />

      <Footer />
    </div>
  );
}
