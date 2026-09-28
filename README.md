# Kutyus QR-oldal

Egyszerű, statikus weboldal a nyakörvön lévő QR-kódhoz. Három nyelven (norvég / angol / magyar) működik, és a látogató böngészőjének nyelve alapján automatikusan választ.

## Fájlok

| Fájl | Mire való |
|---|---|
| `data.js` | **Csak ezt kell szerkeszteni.** A kutya adatai, a gazdik és a lakcím. |
| `img/dog.jpg` | A kutyáról készült kép. Ide másold be pontosan ezen a néven. Négyzetes, kb. 800×800 px-es kép a legjobb. |
| `index.html`, `style.css`, `app.js` | Maga az oldal, ezekhez nem kell nyúlni. |

Helyben is megnézheted: nyisd meg az `index.html`-t duplakattintással.

## Publikálás GitHub Pages-re

1. Jelentkezz be a GitHubon, és hozz létre egy új, **Public** repót, pl. `kutya` néven.
2. Töltsd fel ennek a mappának a tartalmát. Böngészőből ez az **Add file → Upload files** menüpont; itt húzd be az összes fájlt, az `img` mappával együtt.
3. A repóban nyisd meg a **Settings → Pages** oldalt, majd állítsd be: Source: *Deploy from a branch*, Branch: `main` / `(root)`, és kattints a **Save** gombra.
4. 1–2 perc múlva az oldal elérhető lesz itt: `https://FELHASZNALONEV.github.io/kutya/`

Ha később frissíteni szeretnéd az adatokat: szerkeszd a `data.js`-t a GitHubon (ceruza ikon), majd kattints a Commit gombra. **A QR-kód ugyanaz marad.**

## QR-kód

- A QR-kódba a fenti végleges URL-t tedd. A repó nevét utána már ne változtasd meg, különben a QR-kód nem fog működni!
- Használj magas hibajavítási szintet (**H**), mert a nyakörvön kopni fog.
- Nyomtatás/gravírozás előtt teszteld több telefonnal is.
