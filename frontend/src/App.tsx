import Hero from './components/Hero';
import ForgivenessPage from './components/ForgivenessPage';
import LetterSection from './components/LetterSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Hero />
      <ForgivenessPage />
      <LetterSection />
      <Footer />
    </main>
  );
}
