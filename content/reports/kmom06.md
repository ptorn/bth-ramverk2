Kmom06
====================

### Reflektera över vikten av infrastruktur för moduler för ett programmeringsspråk.
Det är viktigt om språket ska utvecklas och användas utav den stora massan. Vilket i sin tur bidrar till att ökningen sker så exponentiellt. Varför ska man uppfinna hjulet två gånger när man kan spara tid genom att återanvända moduler. På ett snabbt och enkelt sätt kan man få till en bra struktur att utgå ifrån när man påbörjar ett nytt projekt.

Likaså är det väldigt smidigt när man kanske återanvänder sin kod i många olika projekt och vill kunna uppdatera alla projekten på ett enkelt och smidigt sätt där vi har full koll på versionerna utav vår kod. Med några få kommandon så kan man få ut sin uppdaterade kod snabbt och enkelt i många olika projekt.

### Vill du ge dig på att förklara att just npm är den tjänsten som växt snabbast av de modulerkataloger som presenteras på webbplatsen “Module Counts”?
Jag tror det har att göra med att JavaScript har utvecklats en hel del och ökat i sin popularitet. Nu kan man köra med JavaScript fullt ut både på klienten och serversidan vilket bidrar till att JavaScript är så populärt. Communityt runt JavaScript är levande och väldigt populärt.

Just varför man väljer npm över andra för JavaScript  vet jag inte. Tror bara att det har blivit en standard som helt enkelt fungerar och man kanske inte har skäl nog för att byta. NPM fungerar fullgott för det som jag har kommit i kontakt med.

### Reflektera över hur arbetet gick att välja, separera, publisera och sedan åter integrera module i din applikation.
Jag hade redan från början modulariserat min kod i en struktur som man kan se likheter med från Ramverk1 kursen. Så det var ganska enkelt att lyfta ut en del och packa ihop den med lite tester för att sen publicera den på NPM. Modulen som jag valde att publicera är en liten och enkel modul för att hantera CRUD metoder mot en MongoDB databas. Jag har lagt ett litet lager på klienten för att jag ska kunna jobba lite enklare med MongoDB under projektet.

Dock stötte jag på lite problem när jag jobbade med min modul. Jag hade missat att det råkat komma in en annan version av MongoDB än den som jag hade skrivit min modul för från början. Så där tappade jag lite tid eftersom jag fick felsöka min kod om och om igen och kunde inte hitta felet med att några metoder inte var definierade, men sen slog det mig att kolla MongoDB modulen och då fick man ett ”duh moment”. Jag hade startat från scratch med min package.json och inte märkt att det var en annan version på MongoDB.

Sen när jag installerade min modul på min redovisa-sida så hittades inte min modul och jag trodde det var fel på namngivning, men det var bara att jag missade att bygga om mina images för Docker containrarna. Skyller på vintermörkret och trötthet. Känns rimligt.

Annars så gick det smidigt att sätta upp CI-kedjan och publicera på NPM.

### Sista uppgiften om att dokumentera och färdigställa redovisa-sidan, tog det mycket tid eller hade du allt klart? 
Jag hade ordnat det mesta i kmom05 eftersom det fanns utvecklingspotential där. Jag delade upp mina Docker containrar i en egen fil som jag använder för att kunna testa sidan i olika node versioner. Jag la även upp lite mer om vilka tekniker som jag använder på min redovisningssida.
