Kmom04
====================

### Allmänt ###
En mycket bra övning som öppnade dörren till en helt ny värld.
Detta var ett kursmoment där jag fick jobba mycket med React och WebSocket. Nu efter att jag gjort detta så känner jag att jag börjar få lite bättre koll på hur React och WebSocket fungerar.

### Är du ny på realtidsprogrammering eller har du gjort liknande tidigare? ###
Detta var nytt för mig att jobba med realtid på detta sätt. Tidigare så det närmsta som jag har kommit realtid är att göra lite AJAX anrop för att slippa ladda om sidan när man bara vill skicka lite data till servern. Så det var mycket nytt att ta till sig under detta kursmoment.

### Hur gick det att jobba med konceptet realtidsprogrammering i webben, några reflektioner? ###
Överlag så gick det bra. Jag började med att först i min React-klient testa att ansluta mot en befintlig WebSocket server för att testa lite. Det var mycket fram och tillbaka i början och försöka consol.log() ut och se vad som sker på servern och klienten. Det var väldigt smidigt att utveckla med Express och React som automatiskt laddade om klienten och servern under tiden som jag utvecklade. Det jag gjorde var att i min chattserver bygga upp ett lager för att kommunicera mellan klienterna och servern. Försöka arbeta fram ett API som klienterna och servern kan jobba med.

Rent spontant så kändes det som en helt ny värld öppnades och man började se möjligheterna som uppenbarar sig.

Allt blir lättare när man kan öppna upp en anslutning mellan klienten och servern och på så sätt skicka information fram och tillbaka i realtid.

### Berätta om din chatt som du integrerade i redovisa-sidan. ###
Min chatt består utav en server som jag har delat upp i en /src/chat/wsServer som är själva websocket-servern. Sen skapade jag en /src/chat/chatServer som är lagret som bygger upp själva chatten. ChatServern använder sig utav wsServern. Jag ville dela på det som var för chatten och det som var för själva kommunikationen mellan servern och klienten, websocket.

När man loggar in första gången så presenteras användaren med ett välkomstmeddelande i chatten.
Servern skickar ut information till de anslutna klienterna när en ny användare loggar in och även när en användare loggar ut. Detta illustreras i chatten med meddelanden i chattfönstret. Data skickas som JSON-objekt för att göra det enkelt att hantera och jobba med. Jag sparar användarna i en lista samt att jag till varje socket anslutning lägger till ”nick” för att kunna stänga ner anslutningen när en användare lämnar eller dör. Då plockas användarens namn också bort från listan som skickas till klienterna med uppdaterade användare. Jag kollar så att användare fortfarande är anslutna genom att skicka pong meddelanden och får man ett svar så är anslutningen aktiv. Det görs med en setTimeout som kör med ett intervall på varje anslutning.

I klienten(React) så blandade jag ihop props och state lite i början och fastnade lite i felsökningen, men det var ett nyttigt kursmoment för jag fick jobba på med React och lärde mig mycket om React. När man väl börjar få koll på React så känns det väldigt smidigt och roligt att jobba med.

Jag har delat upp chatten i olika komponenter som ärver ifrån en huvudkomponent som håller koll på informationen från servern och lagrar den i komponentens this.state. Barnkomponenterna ärver  props från förälderns state vilket innebär att om förälderns this.state ändras vid en uppdatering, kanske ett meddelande skickas, så renderas endast de komponenterna som berörs med data från förälderns this.state.

Det är väldigt smidigt att jobba med realtidsprogrammering och React.
Jag löste alla extrauppgifterna utom att kunna skicka meddelande till en användare direkt.

Jag lärde mig att React sanerar sin output själv så den extrauppgiften gick fort att lösa.
Extrauppgift nr1 löste jag genom att upprätta en setTimeout för varje anslutning som med ett jämt intervall skickar pong meddelanden för att kolla om klienten skickar något svar tillbaka. Gör den inte det så stängs anslutning.

I chatten så ser man också alla användare som just nu är anslutna till chatten.

### Berätta om den realtidsfunktionalitet du väljer att integrera i din klient/server applikation.###
Först hade jag tänkt att bygga en chatt, men det var innan jag visste att vi skulle göra det i ett kursmoment så det känns lite magert som projekt. Jag tänkte att göra ett realtidsspel där 2 spelare kan spela Gomoku och samtidigt chatta med varandra under tiden som dom spelar. Så jag kommer att bygga vidare på min chatserver och skapa en till för spelet som också kommer att använda sig utav wsServer.
