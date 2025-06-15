
const SectionPartnership = () => (
  <section className="bg-white/90 rounded-2xl shadow px-7 py-8 mt-10 max-w-3xl mx-auto animate-fade-in border border-emerald-100">
    <h2 className="section-title">Partenariats &amp; Collaborations</h2>
    <p className="mb-4 text-lg">
      Rejoignez-nous pour préserver la nature, soutenir l'innovation, ou impulser des actions sociales avec BASIA !
    </p>
    <ul className="mb-5 space-y-2 list-disc list-inside pl-2">
      <li>
        <span className="font-semibold text-emerald-900">Scientifiques &amp; Recherche</span> : Laboratoires, universités, et entreprises engagés dans la recherche collaborative ou le transfert de connaissances sur les plantes médicinales.
      </li>
      <li>
        <span className="font-semibold text-emerald-900">Investissement</span> : Investissez dans les projets à impact social, solidaire et économique pilotés par BASIA.
      </li>
      <li>
        <span className="font-semibold text-emerald-900">Humanitaire &amp; Dons</span> : Soutenez nos actions humanitaires sous forme de dons financiers, logistiques ou en nature.
      </li>
    </ul>
    <a href="mailto:partenariat@basia.org" className="inline-flex px-5 py-3 mt-2 bg-emerald-500 text-white rounded-lg shadow hover:bg-emerald-900 transition font-semibold">
      Proposer un partenariat
    </a>
  </section>
);

export default SectionPartnership;
