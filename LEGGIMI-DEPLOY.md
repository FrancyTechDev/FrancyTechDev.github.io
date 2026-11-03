# Portfolio di Francesco Macrì — pronto per GitHub Pages

Questo pacchetto è un sito **statico**: non richiede build, Node.js, database o hosting a pagamento. Il contenuto è già stato predisposto per `https://francytechdev.github.io/`.

## 1. Pubblica su GitHub

1. Accedi con il tuo account **FrancyTechDev**.
2. Crea un **nuovo repository pubblico** chiamato **FrancyTechDev.github.io** (non confonderlo con `landing-page`, che è un progetto già esistente).
3. Carica nella **root** del repository tutti i contenuti di questa cartella: `index.html`, `assets/`, `robots.txt`, `sitemap.xml` e `.nojekyll`. Puoi caricare il file LEGGIMI, se vuoi.
4. Apri **Settings → Pages → Build and deployment → Deploy from a branch → main / (root)** e salva.
5. Il sito dovrebbe risultare accessibile da `https://francytechdev.github.io/` al termine della pubblicazione.

## 2. Controlla PRIMA di rendere pubblico

- Leggi tutti i testi. I riferimenti a FAST Milano, Nomedia Agency e Valora provengono dai dettagli da te comunicati: verificane accuratezza, ruolo e formulazioni.
- Controlla l'URL LinkedIn: inserito come profilo attribuito a Francesco Macrì nei contesti condivisi; conferma che punti al tuo account pubblico.
- Verifica che il link `https://usevalora.it` sia quello corretto e che tu desideri renderlo pubblico.
- Il sito **non contiene** numero telefonico, indirizzo, età, scuola o email personale.

## 3. Quando avrai il tuo dominio personale

Il dominio di esempio è `francescomacri.it`, solo come esempio: **non è stata verificata la disponibilità**. Puoi usare qualsiasi dominio acquistato.

### Configura GitHub Pages

1. Per sicurezza, verifica la proprietà del dominio nel tuo account GitHub (Settings del profilo → Pages), seguendo la verifica DNS TXT proposta da GitHub.
2. Vai nel repository → **Settings → Pages → Custom domain** e inserisci il dominio scelto, ad esempio `francescomacri.it`. Salva prima di configurare i DNS del dominio.
3. Nel pannello DNS del registrar crea questi **quattro record A**, tutti con host `@`:

| Tipo | Nome | Valore |
|---|---|---|
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |

4. Aggiungi record **CNAME** per host `www` con destinazione `francytechdev.github.io` (senza `https://`).
5. Aspetta la propagazione DNS, verifica che il sito si apra e attiva **Enforce HTTPS** in GitHub Pages quando disponibile.
6. Nel progetto, sostituisci tutte le occorrenze di `https://francytechdev.github.io/` con `https://IL-TUO-DOMINIO/` nei file `index.html`, `robots.txt` e `sitemap.xml`. Questo aggiorna canonical, dati strutturati, social preview e sitemap. Non modificare il link al profilo GitHub.

**Attenzione**: non modificare i record DNS di `usevalora.it`, che ospita un progetto diverso. Se non compri un nuovo dominio, puoi tenere il portfolio su GitHub Pages.

## 4. Indicizza su Google

1. Apri https://search.google.com/search-console/.
2. Aggiungi una **proprietà Dominio** per il tuo dominio personale e verifica il TXT nel DNS; in alternativa, per il solo indirizzo GitHub Pages, usa una **proprietà Prefisso URL** e la verifica proposta.
3. Una volta pubblicato, apri **Controllo URL**, inserisci la homepage finale e seleziona **Richiedi indicizzazione**.
4. Apri la sezione **Sitemap** e invia `sitemap.xml`.
5. Controlla in **Indicizzazione → Pagine** e in Controllo URL che non emergano blocchi tecnici.
6. Mantieni nome, descrizione professionale e URL del portfolio coerenti con GitHub e LinkedIn. Aggiungi collegamenti al sito dai profili che controlli.

Indicizzazione e posizione nei risultati **non sono garantite**. Google può impiegare giorni o settimane a scoprire e indicizzare il sito.

## 5. SEO già inclusa

- `title` contenente il nome con accento.
- H1 con il nome completo; testo di presentazione con ruolo e progetti.
- Meta description, canonical, Open Graph e Twitter Card.
- Schema.org `Person`, `WebSite` e `WebPage` in JSON-LD; include variante senza accento.
- `robots.txt` e `sitemap.xml`.
- HTML semantico, responsive, link interni, niente JavaScript necessario per visualizzare i contenuti.

### Verifica finale

- [ ] Il sito è disponibile con HTTPS.
- [ ] Gli URL in `canonical`, sitemap, robots e dati strutturati puntano tutti al **dominio finale**.
- [ ] La pagina è leggibile da smartphone.
- [ ] I link esterni corrispondono ai profili effettivi.
- [ ] Il contenuto su premi e collaborazioni è accurato.
- [ ] Search Console ha verificato la proprietà e ricevuto la sitemap.

Documentazione ufficiale:
- https://docs.github.com/en/pages/quickstart
- https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site
- https://support.google.com/webmasters/answer/9012289?hl=it
- https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap?hl=it
