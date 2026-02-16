# Rapport: Slutexamination Webbutveckling 1

**Namn:** David Alrefai
**Webbplats:** https://david-refai.github.io/Slutexamination/
**Datum:** 2026-02-13  
**Projekt:** Portfolio-webbplats
**Kurs:** Webbutveckling 1


---

## 1. Syfte och målgrupp
### Syfte
Huvudsyftet med detta projekt har varit att skapa en modern, högpresterande digital portfolio som i sig själv fungerar som ett bevis på mina tekniska färdigheter inom frontend-utveckling. Webbplatsen är designad för att inte bara visa upp tidigare arbeten, utan också för att demonstrera god kodkvalitet, tillgänglighet och förståelse för användarupplevelse (UX). Ambitionen har varit att skapa en plattform som känns tekniskt sofistikerad men samtidigt enkel att navigera.

### Målgrupp
Den primära målgruppen är rekryterare och potentiella arbetsgivare inom IT-sektorn. Sekundär målgrupp är andra utvecklare och samarbetspartners som söker inspiration eller teknisk expertis. Webbplatsen ska kommunicera pålitlighet, kreativitet och en strävan efter teknisk excellens.

---

## 2. UI-skisser och mockup
Utvecklingsprocessen inleddes med skisser och digitala mockup-bilder (finns i mappen `mockup/`) för att fastställa layout och visuell hierarki. Dessa skisser (`mockup1.jpg`, `mockup2.jpg`, `mockup3.jpg`) visar hur sidan var tänkt att se ut från början och hur den har anpassats för olika sektioner. Fokus låg på en "mobile-first"-approach där innehållet flyter sömlöst mellan olika skärmstorlekar. Implementerade ett bildspel med Splide.js för projektsektionen för att visa upp flera bilder interaktivt.

### Designval och Rationale
- **Färgval**: Grunden utgörs av en djupt mörk färgskala (`#0d1117` och `#161b22`) för att skapa en modern "Dark Mode"-estetik. Detta valdes för att minimera ansträngning för ögonen och för att låta projektbilderna och accentfärgerna poppa.
- **Accentfärg**: En klar blå nyans (`#58a6ff`) används för interaktiva element som knappar och länkar. Denna färg associeras ofta med teknik och tillförlitlighet.
- **Typografi**: Typsnittet 'Inter' valdes för dess exceptionella läsbarhet på digitala skärmar, särskilt i mindre textstorlekar. Det ger ett rent och professionellt intryck.
- **Layoutsystem**: CSS Grid användes för de större sektionerna (som färdighets-gridet) medan Flexbox valdes för navigation och mer linjära element. Detta skapade en robust och flexibel struktur.

---

## 3. Så här uppfyller min webbplats GDPRs kriterier
Datasekretess och användarens integritet har varit en hörnsten i projektet. Webbplatsen följer principen om dataminimering:
- **Dataminimering**: Kontaktformuläret efterfrågar endast den information som krävs för att besvara ett ärende (namn och e-post). Inga känsliga personuppgifter samlas in.
- **Säkerhet**: Webbplatsen är förberedd för HTTPS och använder en strikt Content Security Policy (CSP) för att förhindra skadlig kodinjektion (XSS).
- **Transparens**: En tydlig informationstext (GDPR-policy) finns tillgänglig i sidfoten där användaren informeras om hur deras uppgifter hanteras.
- **Ingen spårning**: Inga externa analysverktyg eller spårningscookies (som Google Analytics) används, vilket innebär att användarens beteende inte säljs vidare eller kartläggs av tredje part.

---

## 4. Tester och testresultat
### Tekniska Tester (Lighthouse)
Webbplatsen har genomgått omfattande tester med Google Lighthouse. Resultatet visar 90-100 poäng inom samtliga kategorier:
- **Performance**: Genom att konvertera alla bilder till WebP-format och implementera asynkron laddning av CSS (preload) har laddningstiderna minimerats dramatiskt. Den största bildfilen (Hero-bilden) optimerades från 172KB till endast 3.3KB.
- **Accessibility**: Alla interaktiva element har korrekta `aria-labels` eller beskrivande text. Kontrastförhållanden har kontrollerats för att följa WCAG-standard.
- **Best Practices**: Alla externa bibliotek (Splide.js, Font Awesome) laddas säkert via pålitliga CDN:er.

### Manuella Tester
- **Responsivitet**: Sidan har verifierats i Chrome DevTools på enheter från iPhone SE till 4K-skärmar. Navigationen växlar automatiskt till en hamburgermeny på mindre skärmar.
- **Webbläsarkompetens**: Verifierad i Chrome, Safari och Firefox för att säkerställa att CSS-filter och animationer fungerar enhetligt.

---

## 5. Analys av webbprojektet efter färdigställan
### Reflektion
Arbetet med portfolion har varit en lärorik resa i att balansera visuell design med teknisk prestanda. Den största insikten var vikten av bildoptimering; att se hur en enkel formatändring till WebP kan påverka LCP-värdet så enormt var en "ögonöppnare".

### Utmaningar och lösningar
En av de största utmaningarna var att implementera en asynkron laddning av Font Awesome (för att förbättra FCP) utan att det resulterade i att ikoner "blinkade" fram efter att texten laddats. Lösningen blev att implementera en lokal, optimerad CSS-fil med `font-display: swap` och använda preconnect för att korta ner tiden för typsnittshämtning.
En annan utmaning var att säkra sidan mot CSP-varningar. Genom att flytta alla inline-skript (som används för CSS-laddning) till en extern JavaScript-fil lyckades jag eliminera varningar om "unsafe-eval".

### Slutsats
Webbplatsen uppfyller inte bara kursmålen för Webbutveckling 1, utan representerar också modern "best practice" inom webbutveckling år 2026. Den är snabb, säker, tillgänglig och visuellt sammanhängande – precis som en modern portfolio bör vara.
