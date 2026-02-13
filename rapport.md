# Rapport: Slutexamination Webbutveckling 1

**Namn:** David Alrefai  
**Datum:** 2026-02-13  
**Projekt:** Portfolio-webbplats

---

## 1. Syfte och målgrupp
### Syfte
Syftet med webbplatsen är att fungera som en professionell digital portfolio för att visa upp mina färdigheter som frontend-utvecklare och mina avslutade projekt. Webbplatsen ska förmedla en känsla av teknisk kompetens, modern estetik och användarvänlighet.

### Målgrupp
Målgruppen är primärt potentiella arbetsgivare, rekryterare och samarbetspartners inom IT-branschen som letar efter en utvecklare med öga för detaljer och prestanda.

---

## 2. UI-skisser och mockup
*Här bör du infoga dina ursprungliga skisser eller mockups (t.ex. från Figma eller handritade). Om du använde de genererade skisserna under utvecklingen kan du referera till dem.*

**Designval:**
- **Färgpalett**: Mörkblå/grå bakgrund (`#19202b`) med accentfärg i blått (`#58a6ff`) för att skapa en modern "Dark Mode"-look som är vilsam för ögonen och känns "techy".
- **Typografi**: 'Inter' valdes för dess goda läsbarhet på skärmar.
- **Layout**: En ren och luftig layout med fokus på stora bilder och tydliga sektioner.

---

## 3. Så här uppfyller min webbplats GDPRs kriterier
Webbplatsen hanterar personuppgifter på ett ansvarsfullt och minimalt sätt:
- **Minimal datainsamling**: Kontaktformuläret samlar endast in namn och e-postadress i syfte att kommunicera med besökaren. Ingen data lagras permanent på servern utan att besökaren informeras.
- **GDPR Policy**: En länk till GDPR-policy finns i sidfoten för att informera besökare om deras rättigheter.
- **Cookies**: Inga spårningscookies eller tredjepartscookies används, vilket minimerar integritetsrisker.

---

## 4. Tester och testresultat
### Tekniska Tester
- **Lighthouse-audit**: Sidan har testats med Google Lighthouse för att säkerställa högsta kvalitet. Målet var 90+ på alla områden.
    - **Performance**: Optimerad via WebP-bilder, minifierad CSS och asynkron laddning av fonter.
    - **Accessibility**: Kontrollerad för färgkontrast (WCAG AAA på knappar) och semantisk struktur för skärmläsare.
    - **Best Practices**: Säkerställt via säker laddning av resurser och borttagning av inline-styles (CSP).
- **Responsivitetstest**: Sidan har manuellt testats på olika skärmstorlekar (Desktop, Tablet, Mobile) för att säkerställa att layouten flyter korrekt tack vare CSS Grid och Flexbox.

### Resultat
- Sidan laddas på under 1 sekund på snabba anslutningar.
- Inga visuella fel eller "jank" vid scrollning tack vare GPU-accelererade animationer.

---

## 5. Analys av webbprojektet efter färdigställan
### Reflektion
Projektet har resulterat i en högpresterande och visuellt tilltalande webbplats som tekniskt uppfyller alla krav i kursen Webbutveckling 1. Genom att använda modern teknik som CSS Grid och WebP-format har jag kunnat skapa en layout som är både avancerad och snabb.

### Utmaningar och lösningar
En utmaning var att hantera asynkron laddning av ikoner och fonter utan att skapa layoutskift (CLS). Detta löstes genom att implementera `font-display: swap` och använda preconnect-hints för externa CDN:er.

### Framtida förbättringar
I en framtida version skulle jag vilja lägga till en dynamisk bloggsektion med ett CMS eller implementera ännu fler interaktiva element med ett ramverk som React.
