import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Button } from './components/Button';
import { CookieBanner } from './components/CookieBanner';
import { Impressum, Datenschutz } from './components/LegalContent';
import { PageView } from './types';
import { 
  Phone, 
  Clock, 
  MapPin, 
  CheckCircle2, 
  Shield, 
  Key, 
  Euro, 
  AlertTriangle,
  Star,
  Lock
} from 'lucide-react';

function App() {
  const [currentView, setCurrentView] = useState<PageView>('home');

  // Handle hash changes for legal pages direct linking
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#impressum') setCurrentView('impressum');
      else if (hash === '#datenschutz') setCurrentView('datenschutz');
      else setCurrentView('home');
      window.scrollTo(0, 0);
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Check on mount

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (view: PageView) => {
    setCurrentView(view);
    if (view === 'home') {
      window.history.pushState(null, '', ' ');
    } else {
      window.location.hash = view;
    }
  };

  return (
    <div className="min-h-screen bg-background text-text font-sans selection:bg-amber-500/30 selection:text-amber-200">
      <Header onNavigate={navigateTo} currentView={currentView} />

      <main>
        {currentView === 'home' ? (
          <>
            {/* HERO SECTION */}
            <section id="home" className="relative pt-24 pb-32 lg:pt-32 lg:pb-40 overflow-hidden">
              {/* Background Elements */}
              <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950 opacity-95 z-10"></div>
                {/* Abstract subtle background pattern */}
                <div className="absolute inset-0 opacity-10" style={{ 
                  backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)',
                  backgroundSize: '40px 40px' 
                }}></div>
                <div className="absolute top-0 right-0 -mr-40 -mt-40 w-96 h-96 bg-amber-500/10 rounded-full blur-[100px] z-0"></div>
              </div>
              
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-center">
                <div className="inline-flex items-center gap-2 bg-zinc-800/50 border border-zinc-700/50 rounded-full px-4 py-1.5 text-amber-500 font-medium text-sm mb-8 backdrop-blur-sm animate-fade-in-up">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
                  </span>
                  In 20-30 Min. vor Ort
                </div>
                
                <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-[1.1]">
                  Schlüsseldienst <br className="hidden md:block" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-500">
                    RETTER Berlin
                  </span>
                </h1>
                
                <p className="max-w-2xl mx-auto text-xl text-zinc-400 mb-10 leading-relaxed font-light">
                  Ausgesperrt? Wir helfen sofort & seriös. <br/>
                  <span className="text-white font-medium">Garantiert zum Festpreis ohne versteckte Kosten.</span>
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
                  <a href="tel:03012345678" className="w-full sm:w-auto">
                    <Button variant="primary" fullWidth className="text-lg py-4 px-10 shadow-xl shadow-amber-500/10 hover:shadow-amber-500/20">
                      <Phone className="mr-2 h-5 w-5" />
                      Jetzt anrufen
                    </Button>
                  </a>
                  <Button 
                    variant="secondary" 
                    className="w-full sm:w-auto text-zinc-300 border-zinc-700 hover:bg-zinc-800 py-4 px-10"
                    onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Preise ansehen
                  </Button>
                </div>

                {/* Trust Badges */}
                <div className="flex flex-wrap justify-center gap-8 md:gap-16 border-t border-zinc-800/50 pt-10 max-w-4xl mx-auto">
                  <div className="flex flex-col items-center gap-2">
                    <div className="p-3 bg-zinc-900 rounded-full text-amber-500 mb-1">
                      <Clock className="h-6 w-6" />
                    </div>
                    <span className="font-semibold text-white">24/7 Notdienst</span>
                    <span className="text-xs text-zinc-500 uppercase tracking-wider">Immer erreichbar</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <div className="p-3 bg-zinc-900 rounded-full text-amber-500 mb-1">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <span className="font-semibold text-white">Ganz Berlin</span>
                    <span className="text-xs text-zinc-500 uppercase tracking-wider">Alle Bezirke</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <div className="p-3 bg-zinc-900 rounded-full text-amber-500 mb-1">
                      <Euro className="h-6 w-6" />
                    </div>
                    <span className="font-semibold text-white">Festpreis</span>
                    <span className="text-xs text-zinc-500 uppercase tracking-wider">Keine Abzocke</span>
                  </div>
                </div>
              </div>
            </section>

            {/* PRICING SECTION */}
            <section id="pricing" className="py-24 bg-zinc-900 relative">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Transparente Festpreise</h2>
                  <p className="text-zinc-400 max-w-2xl mx-auto">
                    Fairness ist unser oberstes Gebot. Sie zahlen genau das, was hier steht.
                    Inklusive Anfahrt und MwSt.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                  {/* Day Rate */}
                  <div className="relative bg-zinc-950 rounded-2xl border border-zinc-800 p-8 hover:border-zinc-600 transition-colors group">
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                      <Key className="w-24 h-24 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-2">Tagtarif</h3>
                    <div className="flex items-center gap-2 text-zinc-400 mb-8 bg-zinc-900/50 w-fit px-3 py-1 rounded-full text-sm">
                      <Clock className="w-4 h-4 text-amber-500" />
                      <span>08:00 - 20:00 Uhr</span>
                    </div>

                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="text-6xl font-bold text-white">90</span>
                      <span className="text-2xl font-bold text-zinc-500">€</span>
                    </div>
                    <p className="text-zinc-500 mb-8 text-sm">Festpreis inkl. Anfahrt & MwSt.</p>

                    <div className="space-y-4 mb-8">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                        <span className="text-zinc-300">Türöffnung (zugefallen)</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                        <span className="text-zinc-300">Inklusive Anfahrt in ganz Berlin</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                        <span className="text-zinc-300">Beschädigungsfreie Öffnung (99%)</span>
                      </div>
                    </div>

                    <a href="tel:03012345678" className="block">
                      <Button variant="outline" fullWidth className="border-zinc-700 hover:border-amber-500 hover:text-amber-500">
                        Jetzt beauftragen
                      </Button>
                    </a>
                  </div>

                  {/* Night Rate */}
                  <div className="relative bg-gradient-to-b from-zinc-800 to-zinc-900 rounded-2xl border border-amber-500/30 p-8 shadow-2xl shadow-amber-900/10 group">
                     <div className="absolute top-0 inset-x-0 h-1 bg-amber-500 rounded-t-2xl shadow-[0_0_20px_rgba(245,158,11,0.5)]"></div>
                     <div className="absolute top-4 right-4">
                       <span className="bg-amber-500 text-zinc-950 text-xs font-bold px-2 py-1 rounded uppercase tracking-wider">Notdienst</span>
                     </div>

                    <h3 className="text-2xl font-bold text-white mb-2">Nacht & Wochenende</h3>
                    <div className="flex items-center gap-2 text-zinc-300 mb-8 bg-zinc-950/50 w-fit px-3 py-1 rounded-full text-sm border border-zinc-700">
                      <Clock className="w-4 h-4 text-amber-500" />
                      <span>20:00 - 08:00 Uhr</span>
                    </div>

                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="text-6xl font-bold text-white">150</span>
                      <span className="text-2xl font-bold text-zinc-500">€</span>
                    </div>
                    <p className="text-zinc-400 mb-8 text-sm">Festpreis inkl. Nachtzuschlag</p>

                    <div className="space-y-4 mb-8">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                        <span className="text-white">Türöffnung (zugefallen)</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                        <span className="text-white">Sofortige Notdienst-Anfahrt</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                        <span className="text-white">Sonn- und Feiertage inklusive</span>
                      </div>
                    </div>

                    <a href="tel:03012345678" className="block">
                      <Button variant="primary" fullWidth className="font-bold">
                        <Phone className="w-4 h-4 mr-2" />
                        Notdienst rufen
                      </Button>
                    </a>
                  </div>
                </div>
                
                <p className="text-center text-zinc-500 text-xs mt-8 max-w-2xl mx-auto">
                  * Preise gelten für standardmäßige zugefallene Türen. Bei abgeschlossenen Türen, Riegelbrüchen oder notwendigem Materialaustausch (z.B. Zylinder) wird der Preis vor Arbeitsbeginn verbindlich kommuniziert.
                </p>
              </div>
            </section>

            {/* TRUST/ABOUT SECTION */}
            <section id="about" className="py-24 bg-zinc-950 border-t border-zinc-900">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                  <div>
                    <h2 className="text-3xl font-bold text-white mb-6">Warum Sie uns vertrauen können</h2>
                    <div className="space-y-8">
                      <div className="flex gap-4">
                        <div className="bg-zinc-900 p-3 rounded-lg h-fit border border-zinc-800">
                          <Shield className="w-6 h-6 text-amber-500" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-white mb-2">Lokales Unternehmen</h3>
                          <p className="text-zinc-400 leading-relaxed">
                            Wir sind keine Vermittlungszentrale. Wir sind ein echtes Berliner Unternehmen mit Sitz in der Hauptstadt. Das spart Ihnen unnötige Vermittlungsgebühren.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex gap-4">
                        <div className="bg-zinc-900 p-3 rounded-lg h-fit border border-zinc-800">
                          <Lock className="w-6 h-6 text-amber-500" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-white mb-2">Schonende Öffnung</h3>
                          <p className="text-zinc-400 leading-relaxed">
                            Unsere Monteure sind geschult, Türen möglichst ohne Beschädigung zu öffnen. Bei zugefallenen Türen liegt unsere Erfolgsquote bei über 99%.
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-4">
                        <div className="bg-zinc-900 p-3 rounded-lg h-fit border border-zinc-800">
                          <Star className="w-6 h-6 text-amber-500" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-white mb-2">Kundenzufriedenheit</h3>
                          <p className="text-zinc-400 leading-relaxed">
                            Hunderte zufriedene Kunden in Berlin schätzen unsere Transparenz und Schnelligkeit.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <div className="absolute inset-0 bg-amber-500 rounded-2xl transform rotate-3 blur-lg opacity-20"></div>
                    <div className="relative bg-zinc-900 p-8 rounded-2xl border border-zinc-800">
                      <div className="flex items-center gap-2 mb-6 text-amber-500">
                        <Star className="w-5 h-5 fill-current" />
                        <Star className="w-5 h-5 fill-current" />
                        <Star className="w-5 h-5 fill-current" />
                        <Star className="w-5 h-5 fill-current" />
                        <Star className="w-5 h-5 fill-current" />
                      </div>
                      <blockquote className="text-xl text-zinc-300 italic mb-6">
                        "Endlich ein Schlüsseldienst, der hält was er verspricht. 90 Euro bezahlt, wie am Telefon besprochen. Der Monteur war in 20 Minuten in Friedrichshain."
                      </blockquote>
                      <cite className="not-italic text-sm font-semibold text-zinc-500 block">
                        — Thomas M., Berlin-Friedrichshain
                      </cite>
                    </div>
                    
                    <div className="relative bg-zinc-900 p-8 rounded-2xl border border-zinc-800 mt-6 md:ml-12">
                      <div className="flex items-center gap-2 mb-6 text-amber-500">
                        <Star className="w-5 h-5 fill-current" />
                        <Star className="w-5 h-5 fill-current" />
                        <Star className="w-5 h-5 fill-current" />
                        <Star className="w-5 h-5 fill-current" />
                        <Star className="w-5 h-5 fill-current" />
                      </div>
                      <blockquote className="text-xl text-zinc-300 italic mb-6">
                        "Nachts um 3 Uhr ausgesperrt. Sehr netter Kontakt und fairer Nachtzuschlag. Danke für die schnelle Rettung!"
                      </blockquote>
                      <cite className="not-italic text-sm font-semibold text-zinc-500 block">
                        — Sarah K., Berlin-Mitte
                      </cite>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* EMERGENCY CONTACT CTA */}
            <section id="contact" className="py-20 bg-zinc-900 border-t border-zinc-800">
              <div className="max-w-4xl mx-auto px-4 text-center">
                <div className="inline-flex items-center justify-center p-4 bg-red-500/10 rounded-full mb-6">
                  <AlertTriangle className="h-8 w-8 text-red-500" />
                </div>
                <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Notsituation?</h2>
                <p className="text-zinc-400 mb-10 text-lg max-w-2xl mx-auto">
                  Unsere Monteure sind in Bereitschaft. Rufen Sie uns jetzt an. Wir sind in durchschnittlich 20-30 Minuten bei Ihnen.
                </p>
                <div className="flex flex-col items-center gap-6">
                  <a href="tel:03012345678" className="w-full sm:w-auto">
                     <Button variant="urgent" className="text-2xl py-6 px-12 rounded-xl w-full sm:w-auto flex items-center justify-center gap-4">
                        <Phone className="w-8 h-8 animate-pulse" />
                        030 123 456 78
                     </Button>
                  </a>
                  <div className="flex items-center gap-2 text-green-500 font-medium">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                    </span>
                    Jetzt erreichbar
                  </div>
                </div>
              </div>
            </section>
          </>
        ) : currentView === 'impressum' ? (
          <Impressum />
        ) : (
          <Datenschutz />
        )}
      </main>

      {/* FOOTER */}
      <footer className="bg-black text-zinc-500 py-16 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-2">
              <span className="text-2xl font-bold text-white block mb-6">RETTER BERLIN</span>
              <p className="text-sm leading-relaxed max-w-sm">
                Ihr vertrauenswürdiger Schlüsseldienst in Berlin. 
                Wir stehen für faire Preise, Transparenz und schnelle Hilfe in Notsituationen.
                Rund um die Uhr für Sie im Einsatz.
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-6">Leistungen</h4>
              <ul className="space-y-3 text-sm">
                <li>Türöffnungen</li>
                <li>Schlosswechsel</li>
                <li>Sicherheitsberatung</li>
                <li>Einbruchschutz</li>
                <li>24h Notdienst</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-6">Rechtliches</h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <button onClick={() => navigateTo('impressum')} className="hover:text-amber-500 transition-colors text-left">
                    Impressum
                  </button>
                </li>
                <li>
                  <button onClick={() => navigateTo('datenschutz')} className="hover:text-amber-500 transition-colors text-left">
                    Datenschutz
                  </button>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-zinc-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
            <div>
              &copy; {new Date().getFullYear()} Schlüsseldienst Retter Berlin. Alle Rechte vorbehalten.
            </div>
            <div className="flex gap-4">
              <span>Berlin</span>
              <span>•</span>
              <span>Made with ❤️ in Germany</span>
            </div>
          </div>
        </div>
      </footer>

      <CookieBanner />
    </div>
  );
}

export default App;