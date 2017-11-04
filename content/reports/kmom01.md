Kmom01
====================

### Allmänt
Roligt att få jobba lite med JavaScript igen. Det var en liten uppförsbacke med att ta till sig React och försöka greppa så mycket som möjligt, men som med det mesta så känns det bättre när man börjat greppa det. Mycket sökande av information och läsa på hur React fungerar etc.

Jag valde att köra med npm istället för Makefilerna eftersom vi redan har npm så det kändes lite onödigt. Så via npm kan man köra npm install, npm run install-client, npm run build-client, npm test. Eftersom jag valde att köra med Bootstrap och LESS så har jag lagt till att när man bygger klienten så kompileras LESS-koden ner till en minimerad CSS fil. Vid npm test så valideras även LESS filerna när övrig kod valideras.


### Berätta utförligt om din syn på Express och Pug och hur de samverkar. Relatera till andra ramverk du jobbat med. Lyft fram de fördelar och eventuellt nackdelar du finner, eller bara notera skillnader och likheter.
Jag valde att göra min sida med Express och React. Min syn på det är att jag låter Express agera backend/server som via ett api levererar den data som min klient skriven med React ska presentera.

Man kan säga att i detta fallet så är Express M och C i begreppet MVC (Model View Controller) medans React klienten representerar V:et.

Det är likt andra ramverk på det sätt att vi jobbar med MVC och delar upp så att var sak finns på sin plats. Det jag gillar med detta är att vi separerar klienten från den data som ska presenteras och all logik som ligger bakom för att ta fram informationen. Det gör att klienten som jag byggt är helt separerad från backend/REST api:et. Så innehållet som ska visas i mina vyer i React-klienten hämtas in som variabler som visas i mina komponenter. En annan fördel är att man kan ha servern på ett ställe och klienten på en annan för att avlasta och fördela belastningen.

En annan fördel med React är att man behöver inte ladda om hela DOM-trädet och hämta om all data utan när vi navigerar runt på sidan så laddas endast det om som uppdateras och den data som ska visas hämtas direkt från servern utan att ladda om hela sidan. Vi får då en bättre användarupplevelse och vi belastar servern mindre.

Andra fördelar är att jag nu har ett REST api där jag nu kan hämta information ifrån och använda i andra sammanhang från andra klienter.

### Berätta om din katalogstruktur och hur du organiserade din kod, hur tänkte du?
Jag delade upp det i en server och en klient. På servern så har jag en src mapp där jag har mina controller och modeller. Det följer lite strukturen som vi jobbade med i ramverk1. Jag har även en router mapp där jag delat upp mina routes i egna filer. Jag ville få en tydlig struktur och på så sätt dela upp min kod och förhoppningsvis göra den mer testbar.

I klienten så har jag delat upp min kod i komponenter för att dels få en bra struktur och även för att göra enklare komponenter som kan återanvändas i olika sammanhang.


### Använde du någon form av scaffolding som Express erbjuder?
Ja. Jag använde express-generator och create-react-app för att scaffolda fram min grund för uppgiften. Fick snabbt upp en struktur som jag kunde jobba med samtidigt som jag lärde mig mer om React så var det smidigt för jag fick upp en fungerande installation direkt. Efter det så kunde jag börja gå igenom de olika delarna och experimentera lite. Det var ett tag sedan man skrev JavaScript så det var rätt skönt att få gå igenom lite.


### Jobbar du med Markdown för innehållet, eller annat liknande?
Ja. Jag har valt att använda mig utav markdown. Mitt api levererar innehållet i markdown och min react-klient omvandlar innehållet från markdown till HTML med hjälp utav react-markdown. Det fungerar väldigt smidigt och var enkelt att installera och använda.
