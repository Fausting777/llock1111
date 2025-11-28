import React, { useState, useEffect } from 'react';
import { Button } from './Button';

export const CookieBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 bg-zinc-900/95 backdrop-blur-md border-t border-zinc-800 shadow-2xl animate-in slide-in-from-bottom-4">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-6">
        <div className="text-sm text-zinc-400 max-w-3xl">
          <p className="font-semibold text-white mb-2 text-base">Datenschutz-Einstellungen</p>
          <p className="leading-relaxed">
            Wir nutzen Cookies und ähnliche Technologien, um Ihnen die bestmögliche Erfahrung auf unserer Website zu bieten. 
            Einige sind essenziell für den Betrieb der Seite, während andere uns helfen, diese Website und Ihre Erfahrung zu verbessern. 
            Es werden keine personenbezogenen Daten an Dritte ohne Ihre Zustimmung weitergegeben.
            Weitere Informationen finden Sie in unserer <button onClick={() => {window.location.hash = '#datenschutz'; window.location.reload()}} className="text-amber-500 hover:text-amber-400 underline decoration-amber-500/30 underline-offset-4">Datenschutzerklärung</button>.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto shrink-0">
          <Button variant="outline" onClick={handleDecline} className="text-sm py-2.5 w-full sm:w-auto">
            Nur Essenzielle
          </Button>
          <Button variant="primary" onClick={handleAccept} className="text-sm py-2.5 w-full sm:w-auto">
            Alle Akzeptieren
          </Button>
        </div>
      </div>
    </div>
  );
};