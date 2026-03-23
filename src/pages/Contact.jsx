import Navbar from '../components/common/Navbar'
import Footer from '../components/common/Footer'
import ContactHero from '../components/contact/ContactHero'
import ContactForm from '../components/contact/ContactForm'
import ContactInfo from '../components/contact/ContactInfo'

export default function Contact() {
  return (
    <div className="bg-[#020617] text-white overflow-x-hidden">
      <Navbar />
      <main>
        <ContactHero />
        <section className="py-20 bg-[#020617]">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-start">
            <ContactForm />
            <ContactInfo />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
