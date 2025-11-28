import React from 'react';

export const Impressum: React.FC = () => (
  <div className="max-w-3xl mx-auto px-4 py-20 text-zinc-300">
    <h1 className="text-3xl font-bold text-white mb-8 border-b border-zinc-800 pb-4">Impressum</h1>
    
    <section className="space-y-4 mb-10">
      <h2 className="text-xl font-semibold text-amber-500">Angaben gemäß § 5 TMG</h2>
      <p className="leading-relaxed">
        <strong>Schlüsseldienst RETTER BERLIN</strong><br />
        Inhaber: Max Mustermann<br />
        Musterstraße 123<br />
        10115 Berlin<br />
        Deutschland
      </p>
    </section>

    <section className="space-y-4 mb-10">
      <h2 className="text-xl font-semibold text-amber-500">Kontakt</h2>
      <p className="leading-relaxed">
        Telefon: <a href="tel:03012345678" className="hover:text-white transition-colors">030 123 456 78</a><br />
        E-Mail: kontakt@retter-berlin.de
      </p>
    </section>

    <section className="space-y-4 mb-10">
      <h2 className="text-xl font-semibold text-amber-500">Umsatzsteuer-ID</h2>
      <p className="leading-relaxed">
        Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
        DE 123 456 789
      </p>
    </section>
    
    <section className="space-y-4 mb-10">
        <h2 className="text-xl font-semibold text-amber-500">EU-Streitschlichtung</h2>
        <p className="leading-relaxed">Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-amber-500/80 hover:text-amber-500 underline">https://ec.europa.eu/consumers/odr/</a>.<br/> Unsere E-Mail-Adresse finden Sie oben im Impressum.</p>
    </section>

    <section className="space-y-4 mb-10">
        <h2 className="text-xl font-semibold text-amber-500">Verbraucherstreitbeilegung / Universalschlichtungsstelle</h2>
        <p className="leading-relaxed">Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
    </section>
  </div>
);

export const Datenschutz: React.FC = () => (
  <div className="max-w-3xl mx-auto px-4 py-20 text-zinc-300">
    <h1 className="text-3xl font-bold text-white mb-8 border-b border-zinc-800 pb-4">Datenschutzerklärung</h1>
    
    <section className="space-y-4 mb-10">
      <h2 className="text-xl font-semibold text-amber-500">1. Datenschutz auf einen Blick</h2>
      <h3 className="font-semibold text-white">Allgemeine Hinweise</h3>
      <p className="leading-relaxed">
        Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, 
        wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
      </p>
    </section>

    <section className="space-y-4 mb-10">
      <h2 className="text-xl font-semibold text-amber-500">2. Hosting</h2>
      <p className="leading-relaxed">
        Wir hosten die Inhalte unserer Website bei einem externen Anbieter (Hoster). 
        Die personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf den Servern des Hosters gespeichert. 
        Hierbei kann es sich v. a. um IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen, Webseitenzugriffe und sonstige Daten, die über eine Website generiert werden, handeln.
      </p>
    </section>

    <section className="space-y-4 mb-10">
      <h2 className="text-xl font-semibold text-amber-500">3. Datenerfassung auf dieser Website</h2>
      <h3 className="font-semibold text-white">Cookies</h3>
      <p className="leading-relaxed">
        Unsere Internetseiten verwenden so genannte „Cookies“. Cookies sind kleine Textdateien und richten auf Ihrem Endgerät keinen Schaden an. 
        Sie dienen dazu, unser Angebot nutzerfreundlicher, effektiver und sicherer zu machen.
      </p>
      
      <h3 className="font-semibold text-white mt-6">Kontaktformular / Telefon</h3>
      <p className="leading-relaxed">
        Wenn Sie uns per Kontaktformular Anfragen zukommen lassen oder uns anrufen, werden Ihre Angaben zwecks Bearbeitung der Anfrage 
        und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
      </p>

      <h3 className="font-semibold text-white mt-6">Server-Log-Dateien</h3>
      <p className="leading-relaxed">
        Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt.
      </p>
    </section>
  </div>
);