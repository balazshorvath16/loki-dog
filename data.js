/*
 * ============================================================
 *  EZT A FÁJLT KELL SZERKESZTENI – minden adat itt van.
 *  A { no, en, hu } mezőknél: no = norvég, en = angol, hu = magyar.
 *  Ha egy mezőt üresen hagysz (""), az a sor nem jelenik meg az oldalon.
 * ============================================================
 */
window.PROFILE = {
  dog: {
    name: "Loki",
    photo: "img/dog.jpg",          // tedd a képet az img mappába ezen a néven
    born: "2026-09-04",            // születési dátum (ÉÉÉÉ-HH-NN) – a korát automatikusan számolja
    sex: "male",                 // "female" (szuka) vagy "male" (kan)
    chip: "578000000000000",       // mikrochip szám

    breed: { no: "Samoyed", en: "Samoyed", hu: "Samoyed" },
    color: { no: "Hvit", en: "White", hu: "Fehér" },

    about: {
      no: "Jeg er vennlig og litt sjenert. Jeg elsker godbiter!",
      en: "I'm friendly and a little shy. I love treats!",
      hu: "Barátságos vagyok, kicsit félénk. Imádom a jutalomfalatot!",
    },

    // Fontos egészségügyi infó (allergia, gyógyszer). Ha nincs, hagyd üresen: { no: "", en: "", hu: "" }
    medical: {
      no: "",
      en: "",
      hu: "",
    },
  },

  owners: [
    {
      name: "Réka Kőszegi",
      email: "koszegireka7@gmail.com",
      phones: [
        { number: "+47 45 91 32 87", country: "NO", whatsapp: false },
        { number: "+36 30 358 8806", country: "HU", whatsapp: false },
      ],
    },
    {
      name: "Balázs Horváth",
      email: "balazs.horvath1313@gmail.com",
      phones: [
        { number: "+47 40 63 33 34", country: "NO", whatsapp: false },
        { number: "+36 30 691 9242", country: "HU", whatsapp: true },
      ],
    },
  ],

  // Lakcím – ha nem akarod kiírni, hagyd üresen: lines: []
  address: {
    lines: ["Gaupefaret 2", "0773 Oslo", "Norge"],
    showMapLink: true,
  },
};
