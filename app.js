(function () {
  "use strict";

  var P = window.PROFILE;
  var LANGS = ["no", "en", "hu"];

  var T = {
    no: {
      title: "Hei! Jeg heter {name}.",
      intro: "Hvis du har funnet meg, har jeg kanskje gått meg bort. Vær så snill å kontakte eierne mine – tusen takk! ❤️",
      contact: "Kontakt eierne mine",
      call: "Ring", sms: "SMS", whatsapp: "WhatsApp", email: "E-post",
      location: "Hvor fant du meg?",
      locHint: "Send posisjonen din til eierne mine med ett trykk.",
      locBtn: "Del posisjonen min",
      locWorking: "Finner posisjon…",
      locError: "Kunne ikke hente posisjonen. Ring eller send SMS i stedet.",
      locMsg: "Hei! Jeg har funnet {name}. Jeg er her: {url}",
      medical: "Viktig helseinformasjon",
      about: "Om meg",
      breed: "Rase", age: "Alder", sex: "Kjønn", color: "Farge", chip: "Mikrochip",
      male: "Hannhund", female: "Tispe",
      year: ["år", "år"], month: ["måned", "måneder"], and: " og ",
      address: "Adressen min",
      map: "Åpne i kart",
      thanks: "Takk for at du hjelper {name} hjem! 🐾",
    },
    en: {
      title: "Hi! My name is {name}.",
      intro: "If you found me, I might be lost. Please contact my owners – thank you so much! ❤️",
      contact: "Contact my owners",
      call: "Call", sms: "SMS", whatsapp: "WhatsApp", email: "Email",
      location: "Where did you find me?",
      locHint: "Send your location to my owners with one tap.",
      locBtn: "Share my location",
      locWorking: "Getting location…",
      locError: "Could not get your location. Please call or text instead.",
      locMsg: "Hi! I found {name}. I'm here: {url}",
      medical: "Important health info",
      about: "About me",
      breed: "Breed", age: "Age", sex: "Sex", color: "Colour", chip: "Microchip",
      male: "Male", female: "Female",
      year: ["year", "years"], month: ["month", "months"], and: " and ",
      address: "My home",
      map: "Open in maps",
      thanks: "Thank you for helping {name} get home! 🐾",
    },
    hu: {
      title: "Szia! {name} vagyok.",
      intro: "Ha megtaláltál, lehet, hogy elkóboroltam. Kérlek, értesítsd a gazdáimat – nagyon köszönöm! ❤️",
      contact: "Gazdáim elérhetősége",
      call: "Hívás", sms: "SMS", whatsapp: "WhatsApp", email: "E-mail",
      location: "Hol találtál meg?",
      locHint: "Küldd el a helyzeted a gazdáimnak egy gombnyomással.",
      locBtn: "Helyzetem megosztása",
      locWorking: "Helymeghatározás…",
      locError: "Nem sikerült lekérni a helyzeted. Kérlek, hívj vagy írj SMS-t.",
      locMsg: "Szia! Megtaláltam a kutyátokat ({name}). Itt vagyok: {url}",
      medical: "Fontos egészségügyi infó",
      about: "Rólam",
      breed: "Fajta", age: "Kor", sex: "Nem", color: "Szín", chip: "Mikrochip",
      male: "Kan", female: "Szuka",
      year: ["év", "év"], month: ["hónap", "hónap"], and: " ",
      address: "Otthonom",
      map: "Megnyitás térképen",
      thanks: "Köszönjük, hogy segítesz hazajutni! 🐾",
    },
  };

  var ICON = {
    phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z"/></svg>',
    sms: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>',
    wa: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.2-.4.7-1.4.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4c1.7.7 2.3.8 3.2.6.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.3-.2-.5-.3z"/></svg>',
    mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 6-10 7L2 6"/></svg>',
    pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/></svg>',
  };

  var lang = detectLang();
  var app = document.getElementById("app");

  function detectLang() {
    try {
      var saved = localStorage.getItem("lang");
      if (LANGS.indexOf(saved) !== -1) return saved;
    } catch (e) {}
    var list = navigator.languages || [navigator.language || "en"];
    for (var i = 0; i < list.length; i++) {
      var c = String(list[i]).toLowerCase().slice(0, 2);
      if (c === "nb" || c === "nn" || c === "no") return "no";
      if (c === "hu") return "hu";
      if (c === "en") return "en";
    }
    return "en";
  }

  function t(key, vars) {
    var s = T[lang][key];
    if (!vars) return s;
    return s.replace(/\{(\w+)\}/g, function (_, k) { return vars[k] != null ? vars[k] : ""; });
  }

  // Picks the current language from a { no, en, hu } object, or returns a plain string as-is.
  function tr(v) {
    if (v == null) return "";
    if (typeof v === "string") return v;
    return v[lang] || v.en || "";
  }

  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  }

  function btn(href, label, icon, cls) {
    var a = el("a", "btn " + (cls || ""));
    a.href = href;
    a.innerHTML = ICON[icon];
    a.appendChild(document.createTextNode(label));
    if (/^https?:/.test(href)) { a.target = "_blank"; a.rel = "noopener"; }
    return a;
  }

  function card(title, cls) {
    var c = el("section", "card " + (cls || ""));
    c.appendChild(el("h2", null, title));
    return c;
  }

  function telHref(num) { return num.replace(/[^\d+]/g, ""); }
  function waDigits(num) { return num.replace(/\D/g, ""); }

  function smsHref(num, body) {
    return "sms:" + telHref(num) + (body ? "?&body=" + encodeURIComponent(body) : "");
  }
  function waHref(num, body) {
    return "https://wa.me/" + waDigits(num) + (body ? "?text=" + encodeURIComponent(body) : "");
  }

  function ageText(born) {
    if (!born) return "";
    var b = new Date(born + "T00:00:00");
    if (isNaN(b)) return "";
    var now = new Date();
    var months = (now.getFullYear() - b.getFullYear()) * 12 + (now.getMonth() - b.getMonth());
    if (now.getDate() < b.getDate()) months--;
    if (months < 0) return "";
    var y = Math.floor(months / 12), m = months % 12;
    var parts = [];
    if (y) parts.push(y + " " + T[lang].year[y === 1 ? 0 : 1]);
    if (m || !y) parts.push(m + " " + T[lang].month[m === 1 ? 0 : 1]);
    return parts.join(T[lang].and);
  }

  function renderLangs() {
    var bar = el("div", "topbar");
    var group = el("div", "langs");
    group.setAttribute("role", "group");
    group.setAttribute("aria-label", "Language");
    LANGS.forEach(function (l) {
      var b = el("button", null, l.toUpperCase());
      b.type = "button";
      b.setAttribute("aria-pressed", String(l === lang));
      b.addEventListener("click", function () {
        lang = l;
        try { localStorage.setItem("lang", l); } catch (e) {}
        render();
      });
      group.appendChild(b);
    });
    bar.appendChild(group);
    return bar;
  }

  function renderHero(dog) {
    var h = el("header", "hero");
    var img = el("img", "photo");
    img.src = dog.photo || "img/placeholder.svg";
    img.alt = dog.name;
    img.onerror = function () { img.onerror = null; img.src = "img/placeholder.svg"; };
    h.appendChild(img);
    h.appendChild(el("h1", null, t("title", { name: dog.name })));
    h.appendChild(el("p", null, t("intro")));
    return h;
  }

  function renderOwners(owners) {
    var c = card(t("contact"));
    owners.forEach(function (o) {
      var box = el("div", "owner");
      box.appendChild(el("p", "owner-name", o.name));
      (o.phones || []).forEach(function (p) {
        if (!p.number) return;
        var row = el("div", "phone");
        var num = el("div", "phone-num");
        if (p.country) num.appendChild(el("span", "badge", p.country));
        num.appendChild(el("span", null, p.number));
        row.appendChild(num);
        var btns = el("div", "btns");
        btns.appendChild(btn("tel:" + telHref(p.number), t("call"), "phone", "primary"));
        btns.appendChild(btn(smsHref(p.number), t("sms"), "sms"));
        if (p.whatsapp) btns.appendChild(btn(waHref(p.number), t("whatsapp"), "wa", "wa"));
        row.appendChild(btns);
        box.appendChild(row);
      });
      if (o.email) {
        var er = el("div", "btns email-row");
        er.appendChild(btn("mailto:" + o.email, o.email, "mail", "wide"));
        box.appendChild(er);
      }
      c.appendChild(box);
    });
    return c;
  }

  function renderLocation(dog, owners) {
    var c = card(t("location"));
    c.appendChild(el("p", "hint", t("locHint")));
    var b = el("button", "btn primary wide");
    b.type = "button";
    b.innerHTML = ICON.pin;
    var label = document.createTextNode(t("locBtn"));
    b.appendChild(label);
    var result = el("div", "loc-result");
    var err = el("p", "loc-error");
    err.hidden = true;

    b.addEventListener("click", function () {
      if (!navigator.geolocation) { err.textContent = t("locError"); err.hidden = false; return; }
      b.disabled = true;
      label.textContent = t("locWorking");
      err.hidden = true;
      navigator.geolocation.getCurrentPosition(function (pos) {
        b.disabled = false;
        label.textContent = t("locBtn");
        var url = "https://maps.google.com/?q=" + pos.coords.latitude.toFixed(6) + "," + pos.coords.longitude.toFixed(6);
        var msg = t("locMsg", { name: dog.name, url: url });
        result.innerHTML = "";
        owners.forEach(function (o) {
          var phones = o.phones || [];
          var first = phones.filter(function (p) { return p.number; })[0];
          var wa = phones.filter(function (p) { return p.number && p.whatsapp; })[0];
          var row = el("div", "btns");
          if (first) row.appendChild(btn(smsHref(first.number, msg), t("sms") + " · " + o.name, "sms"));
          if (wa) row.appendChild(btn(waHref(wa.number, msg), t("whatsapp"), "wa", "wa"));
          if (row.children.length) result.appendChild(row);
        });
      }, function () {
        b.disabled = false;
        label.textContent = t("locBtn");
        err.textContent = t("locError");
        err.hidden = false;
      }, { enableHighAccuracy: true, timeout: 15000, maximumAge: 60000 });
    });

    c.appendChild(b);
    c.appendChild(err);
    c.appendChild(result);
    return c;
  }

  function renderMedical(dog) {
    var text = tr(dog.medical);
    if (!text) return null;
    var c = card("⚠️ " + t("medical"), "alert");
    c.appendChild(el("p", null, text));
    return c;
  }

  function renderAbout(dog) {
    var c = card(t("about"));
    var dl = el("dl", "facts");
    function fact(label, value, full) {
      if (!value) return;
      var f = el("div", "fact" + (full ? " full" : ""));
      f.appendChild(el("dt", null, label));
      f.appendChild(el("dd", null, value));
      dl.appendChild(f);
    }
    fact(t("breed"), tr(dog.breed));
    fact(t("age"), ageText(dog.born));
    fact(t("sex"), dog.sex === "male" ? t("male") : dog.sex === "female" ? t("female") : "");
    fact(t("color"), tr(dog.color));
    fact(t("chip"), dog.chip, true);
    if (dl.children.length) c.appendChild(dl);
    var about = tr(dog.about);
    if (about) c.appendChild(el("p", "about", about));
    return c;
  }

  function renderAddress(addr) {
    if (!addr || !addr.lines || !addr.lines.length) return null;
    var c = card(t("address"));
    var a = el("address", "address");
    addr.lines.forEach(function (line, i) {
      if (i) a.appendChild(document.createElement("br"));
      a.appendChild(document.createTextNode(line));
    });
    c.appendChild(a);
    if (addr.showMapLink) {
      var q = encodeURIComponent(addr.lines.join(", "));
      var row = el("div", "btns");
      row.appendChild(btn("https://www.google.com/maps/search/?api=1&query=" + q, t("map"), "pin", "wide"));
      c.appendChild(row);
    }
    return c;
  }

  function render() {
    var dog = P.dog, owners = P.owners || [];
    document.documentElement.lang = lang === "no" ? "nb" : lang;
    document.title = t("title", { name: dog.name });
    app.innerHTML = "";
    [
      renderLangs(),
      renderHero(dog),
      renderOwners(owners),
      renderMedical(dog),
      renderLocation(dog, owners),
      renderAbout(dog),
      renderAddress(P.address),
      el("footer", null, t("thanks", { name: dog.name })),
    ].forEach(function (n) { if (n) app.appendChild(n); });
  }

  render();
})();
