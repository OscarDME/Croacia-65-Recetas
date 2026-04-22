// lib/copy.js — Cijeli vidljivi tekstualni sadržaj odredišne stranice (landing page). 
// Svaka promjena teksta vrši se ovdje.

export const copy = {
  metadata: {
    title: "365 zdravih recepata — Bez šećera i glutena",
    description:
      "1000 recepata bez šećera i glutena za 365 dana. Jedite bez osjećaja krivnje, bez komplikacija i bez ograničenja. Posebna ponuda: 8,90 € + 8 poklona.",
    lang: "hr",
  },

  hero: {
    banner: "PONUDA VRIJEDI SAMO DANAS!",
    timerLabels: { days: "Dani", hours: "Sati", minutes: "Min", seconds: "Sek" },
    headline:
      "365 dana ukusnih recepata bez šećera i glutena za obroke bez osjećaja krivnje!",
    bullets: [
      "Učinite svoje obroke zdravijima i ugodnijima, bez odricanja od okusa",
      "BEZ KOMPLIKACIJA",
      "BEZ OGRANIČENJA",
      "BEZ OSJEĆAJA KRIVNJE",
    ],
    cta: "ŽELIM JESTI BEZ KRIVNJE",
    kicker: "365 dana · 1000 recepata",
    imageAlt: "Knjiga recepata za 365 dana bez šećera i glutena",
    trustChips: [
      { icon: "⭐", text: "Više od 5000 obitelji" },
      { icon: "🎁", text: "8 bonus poklona" },
      { icon: "🛡️", text: "Više od 75% popusta danas" },
    ],
  },

  story: {
    headlinePre: "Šećer je tihi neprijatelj",
    headlineHighlight: "koji uništava vaše zdravlje",
    intro:
      "Prisutan je u hrani koju jedete svaki dan, skriven u proizvodima koji izgledaju potpuno bezopasno.",
    problemsLead:
      "Ovo su glavni problemi koje uzrokuje šećer i kako oni možda upravo sada utječu na vas:",
    problems: [
      "Stalni umor i neobjašnjiva iscrpljenost",
      "Debljanje i nakupljanje masnih naslaga na trbuhu",
      "Hormonska i metabolička neravnoteža",
      "Rizik od kroničnih bolesti (dijabetes, povišeni krvni tlak, pretilost, itd.)",
      "Nagle promene raspoloženja i tjeskoba",
      "Ubrzano starenje",
      "Ovisnost o hrani i napadi gladi",
    ],
    solutionHeadline:
      "Konačno, jednostavno i učinkovito rješenje da preobrazite svoju prehranu, a da se pritom ne odreknete hrane koju volite.",
    solutionBadge: "Rješenje",
  },

  benefits: {
    stepsHeadline: "Samo 3 koraka dovoljna su za vašu transformaciju",
    steps: [
      {
        number: "1",
        title: "Slijedite jelovnik bez krivnje",
        desc: "Dobivate pristup cjelovitom jelovniku s receptima za svaki dan u godini – sve bez šećera i glutena. Nema potrebe ništa planirati!",
      },
      {
        number: "2",
        title: "Pripremite jednostavna i ukusna jela",
        desc: "Slijedite jednostavne upute u receptima i pripremite nevjerojatna jela koja će preobraziti vašu prehranu.",
      },
      {
        number: "3",
        title: "Osjetite transformaciju",
        desc: "Slijedeći recepte, osjetit ćete razliku na svom tijelu i zdravlju: više energije, kontrola težine i manji rizik od bolesti.",
      },
    ],
    ctaMid: "ŽELIM JESTI BEZ KRIVNJE",
    headline: "POGLEDAJTE PREDNOSTI KOJE ĆE VAM PROMIJENITI ŽIVOT",
    items: [
      {
        icon: "HeartPulse",
        title: "Kontrola šećera u krvi",
        desc: "Poboljšajte razinu šećera u krvi i smanjite rizik od dijabetesa uz hranjive i ukusne recepte.",
      },
      {
        icon: "Utensils",
        title: "Prehrambena sloboda",
        desc: "Uživajte u neodoljivim jelima bez osjećaja krivnje, gradeći pozitivan odnos s hranom.",
      },
      {
        icon: "CalendarDays",
        title: "Svakodnevna raznolikost",
        desc: "S 1000 recepata imate novi izbor za svaki dan u godini.",
      },
      {
        icon: "Timer",
        title: "Praktičnost u kuhinji",
        desc: "Pripremite ukusna jela za 30 minuta ili manje, štedeći vrijeme i eliminirajući svakodnevni stres.",
      },
      {
        icon: "GraduationCap",
        title: "Kultura prehrane",
        desc: "Naučite svjesno birati hranu i izgradite zdrave navike za cijeli život.",
      },
      {
        icon: "Scale",
        title: "Kontrola tjelesne težine",
        desc: "Održavajte zdravu težinu uz recepte koji zasićuju i hrane, bez žrtvovanja okusa.",
      },
    ],
  },

  features: {
    headline: "Imate gotove jelovnike za 365 dana – po 1 za svaki dan u godini",
    subheadline: "Vodit ćemo vas kroz svaki korak prema zdravoj prehrani",
    categories: [
      {
        image: "/carousel/categoria-1.webp",
        title: "Doručci i međuobroci",
        desc: "Recepti za doručak kakve NIKADA prije niste vidjeli. Brze metode pripreme s praktičnim i dostupnim sastojcima!",
      },
      {
        image: "/carousel/categoria-2.webp",
        title: "Ručak i večera",
        desc: "Donesite na svoj stol razna ukusna jela za svaki dan, ali i za posebne prilike! Pripremljena od dostupnih namirnica koje već imate kod kuće.",
      },
      {
        image: "/carousel/categoria-3.webp",
        title: "Slastice i deserti",
        desc: "MNOŠTVO opcija za kolače i deserte bez glutena i šećera, kako biste mogli pripremati poslastice bez osjećaja krivnje.",
      },
      {
        image: "/carousel/categoria-4.webp",
        title: "Umaci i namazi",
        desc: "Umaci i kremasti namazi kako biste svojim jelima dali nevjerojatan okus – brzo i jednostavno!",
      },
      {
        image: "/carousel/categoria-5.webp",
        title: "Zdrave juhe i krem juhe",
        desc: "Juhe, krem juhe i temeljci – sve pripremljeno od hranjivih sastojaka i pažljivo odabranih začina.",
      },
      {
        image: "/carousel/categoria-6.webp",
        title: "Alternative za brašno",
        desc: "Sve je bez glutena i s niskim glikemijskim indeksom, tako da možete peći kolače, kruh i slastice bez brige.",
      },
    ],
    ctaMid: "ŽELIM JESTI BEZ KRIVNJE",
    badgesHeadline: "Najukusnija jela u raznim varijantama",
    badges: ["BEZ ŠEĆERA", "BEZ GLUTENA", "NISKOKALORIČNO", "BEZ LAKTOZE"],
    audienceHeadline: "„Hrana bez krivnje“ je baš za vas ako:",
    audience: [
      {
        title: "Imate prehrambena ograničenja:",
        desc: "Osobe koje iz zdravstvenih razloga, poput dijabetesa ili intolerancije, moraju izbjegavati šećer i gluten.",
      },
      {
        title: "Želite zdravu obitelj:",
        desc: "Roditelji koji žele svojoj djeci osigurati hranjivu i ukusnu hranu, potičući zdrave navike od najranije dobi.",
      },
      {
        title: "Vodite zdrav način života:",
        desc: "Osobe koje slijede određene načine prehrane – low-carb, paleo ili vegansku dijetu – i traže recepte koji se savršeno uklapaju u te pristupe.",
      },
      {
        title: "Želite kontrolirati svoju težinu:",
        desc: "Osobe koje žele smršavjeti ili održati težinu, te su im potrebni recepti koji zasićuju, a pritom pomažu u kontroli unosa kalorija.",
      },
    ],
  },

  testimonials: {
    headline: "Pogledajte iskustva ljudi koji već koriste naše recepte",
    cta: "ŽELIM JESTI BEZ KRIVNJE",
    wallpaper: "/wallpaper-whatsapp.webp",
    messages: [
      {
        text: "Samo vam želim reći da je ova knjiga recepata pravi blagoslov. S troje male djece uvijek mi nedostaje vremena, a to što imam toliko recepata na jednom mjestu sve je olakšalo. Sada kod kuće jedemo ukusno i zdravo 😊",
        time: "20:04",
        reactions: ["👌", "❤️"],
      },
      {
        text: "Kakva odlična knjiga recepata! Otkako mi je dijagnosticirana intolerancija na gluten, mislila sam da će mi biti nemoguće uživati u hrani, ali uz vaše recepte mogu jesti bez brige. Hvala vam što ste mi sve to olakšali! 🙏",
        time: "19:57",
      },
      {
        text: "Želim vam se od srca zahvaliti jer su mi ovi recepti promijenili život. Imam dijabetes i uvijek mi je bilo teško pronaći ukusne i zdrave opcije. Sada uživam u svakom obroku bez straha. Hvala vam! 🙏",
        time: "19:49",
      },
      {
        text: "Tisuću puta hvala na receptima! Obožavam slatko i uvijek sam imala problema sa šećerom, ali vaši recepti su mi dali ukusne i jednostavne alternative.",
        time: "18:55",
        reactions: ["❤️"],
      },
    ],
  },

  carouselSection: {
    prevLabel: "Prethodno",
    nextLabel: "Sljedeće",
    images: [
      { src: "/carousel/categoria-7.webp", alt: "Zdravi recept 1" },
      { src: "/carousel/categoria-8.webp", alt: "Zdravi recept 2" },
      { src: "/carousel/categoria-9.webp", alt: "Zdravi recept 3" },
      { src: "/carousel/categoria-10.webp", alt: "Zdravi recept 4" },
      { src: "/carousel/categoria-11.webp", alt: "Zdravi recept 5" },
      { src: "/carousel/categoria-1.webp", alt: "Zdravi recept 6" },
    ],
  },

  bonuses: {
    badge: "Posebno za vas, jer ste stigli do ovdje",
    headline: "AKO DANAS KUPITE 1000 RECEPATA, DOBIVATE 8 EKSKLUZIVNIH POKLONA 🎁",
    valueLabel: "Vrijednost:",
    freeLabel: "BESPLATNO",
    items: [
      { image: "/bonuses/bono-1.webp", tag: "POKLON 1", title: "Recepti za deserte bez šećera", value: "11,00 €" },
      { image: "/bonuses/bono-2.webp", tag: "POKLON 2", title: "Recepti za umake i namaze", value: "7,80 €" },
      { image: "/bonuses/bono-3.webp", tag: "POKLON 3", title: "Recepti za juhe i krem juhe", value: "6,20 €" },
      { image: "/bonuses/bono-4.webp", tag: "POKLON 4", title: "Recepti s bezglutenskim brašnima", value: "4,46 €" },
      { image: "/bonuses/bono-5.webp", tag: "POKLON 5", title: "Recepti za kruh bez glutena", value: "9,41 €" },
      { image: "/bonuses/bono-6.webp", tag: "POKLON 6", title: "Recepti za zdrave tortilje", value: "9,41 €" },
      { image: "/bonuses/bono-7.webp", tag: "POKLON 7", title: "Zdrave pizze", value: "9,41 €" },
      { image: "/bonuses/bono-8.webp", tag: "POKLON 8", title: "500 ukusnih recepata kreiranih za dijabetičare", value: "9,41 €" },
    ],
    totalLabel: "Sve što ćete dobiti vrijedi više od 40 €",
    footer: "Ali danas nećete platiti taj iznos... iako vrijedi svakog centa.",
  },

  finalCta: {
    preHeadline: "Vaša ukupna investicija za 1000 recepata i sve bonuse...",
    urgencyTop: "Vremenski ograničena ponuda!",
    subUrgency:
      "Ne propustite priliku da nabavite knjigu recepata uz više od 75% popusta. Preobrazite svoje zdravlje već sada uz naš cjeloviti jelovnik za 365 dana.",
    headline: "365 DANA S RECEPTIMA BEZ ŠEĆERA I GLUTENA + DODATNI BONUSI",
    bundleList: [
      "1000 recepata bez šećera i glutena",
      "Poklon 1: Recepti za deserte bez šećera",
      "Poklon 2: Recepti za umake i namaze",
      "Poklon 3: Recepti za juhe i krem juhe",
      "Poklon 4: Recepti s bezglutenskim brašnima",
      "Poklon 5: Recepti za kruh bez glutena",
      "Poklon 6: Recepti za zdrave tortilje",
      "Poklon 7: Zdrave pizze",
      "Poklon 8: 500 ukusnih recepata za dijabetičare",
    ],
    guaranteeText:
      "Pažnja: Ako ste osoba koja se zaista želi brinuti o svom zdravlju ili zdravlju svoje obitelji, naši recepti bez šećera i glutena sigurno vam mogu pomoći već sada. Ne propustite ovu priliku!",
    regularPriceLabel: "STARA CIJENA:",
    regularPrice: "40,00 €",
    urgencyText: "PONUDA VRIJEDI SAMO DANAS!",
    offerPrice: "8,90 €",
    bottomUrgency: "Posljednja slobodna mjesta",
    discountBadge: "VIŠE OD 75% POPUSTA",
    button: "DA, ŽELIM RECEPTE I BONUSE ODMAH",
    trustRow: "🔒 100% sigurno plaćanje • ⚡ Trenutni pristup • ✅ Doživotno jamstvo",
    imageAlt: "365 zdravih recepata + 8 Bonusa",
  },

  faq: {
    authorHeadline: "Tko je Jelena Horvat?",
    authorBio:
      "Jelena Horvat je stručnjakinja za zdravu prehranu koja mijenja navike svojim inovativnim jelovnikom „Hrana bez krivnje“. S bogatim iskustvom kao nutricionistica, Jelena dijeli 1000 jednostavnih i pristupačnih recepata stvorenih kako bi vas podržali u svakoj fazi vašeg puta prema zdravijem životu. S diplomom iz nutricionizma i dijetetike, Jelena spaja svoje stručno znanje s praktičnim pristupom, nudeći ukusne i uravnotežene recepte prilagođene različitim potrebama, zajedno s vrijednim savjetima koji će vam pomoći da uživate u hrani bez ograničenja ili grižnje savjesti.",
    authorRole: "Nutricionistica",
    authorImageAlt: "Jelena Horvat — Nutricionistica",
    worksHeadline: "ŠTO ZAPRAVO DJELUJE? ✅",
    doesntWorkHeadline: "ŠTO NE DJELUJE: ❌",
    doesntWork: [
      "❌ JESTI MALO I GLADOVATI",
      "❌ SLIJEDITI KOMPLICIRANE DIJETE",
      "❌ ODRICATI SE ONOGA ŠTO VOLITE",
    ],
    worksText:
      "Ono što zaista djeluje je planirana prehrana uz jednostavne i praktične recepte, bez šećera i glutena. S našim jelovnikom za 365 dana nećete se morati brinuti o frustrirajućim ili restriktivnim dijetama.",
    headline: "Često postavljana pitanja",
    subheadline: "Odgovori na najčešća pitanja",
    items: [
      { q: "KAKO ĆU DOBITI RECEPTE?", a: "Sav sadržaj dobit ćete na svoj e-mail odmah nakon uplate." },
      { q: "MOGU LI PRISTUPITI PREKO MOBITELA?", a: "Da, možete pristupiti receptima preko mobitela, tableta ili računala." },
      { q: "IMATE LI PITANJA?", a: "Da, tijekom cijelog procesa možete mi direktno postavljati sva svoja pitanja." },
      { q: "KOLIKO DUGO ĆU IMATI PRISTUP?", a: "Pristup cijelom sadržaju je doživotan." },
    ],
  },

  closing: {
    kicker: "POSLJEDNJA PRILIKA! ⚡ Ova ponuda uskoro istječe",
    headline:
      "Preobrazite svoje zdravlje već sada uz naš cjeloviti jelovnik za 365 dana.",
    subheadline:
      "1000 recepata bez šećera i glutena + 8 bonus poklona. Sve to po cijeni jednog obroka.",
    regularPrice: "40,00 €",
    offerPrice: "8,90 €",
    ctaLabel: "DA, ŽELIM RECEPTE I BONUSE ODMAH",
    trustRow:
      "🔒 100% sigurno plaćanje • ⚡ Trenutni i doživotni pristup • ✅ Poslednja slobodna mjesta",
  },

  footer: {
    brand: "Crearis",
    copyright: "2026 © Sva prava pridržana. Pročitajte našu Politiku privatnosti.",
  },
};