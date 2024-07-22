import BlogSections from "@/components/BlogSections";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="p-4 max-w-3xl mx-auto">
      {/* Your Data Analysis Projects */}

      {/* Your Header or " About Me " Section : */}

      {/* Your Data Analysis Projects */}

      {/* Your Data Analysis Projects */}

      {/* Your Data Analysis Projects */}
      <BlogSections />

      {/* " Your Get in touch " / " Connect with Me " Section : */}
      <h1 className="text-3xl font-bold">Contact Us</h1>
      <p>Please fill in the form below</p>
      <ContactForm />

      {/* Your Footer Section :  */}
      <Footer />
    </div>
  );
}
