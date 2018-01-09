Kmom10
====================

## 1. Applikationen

Från början så tänkte jag bygga en chatt, men efter att vi gjort det i ett kursmoment så tänkte jag om. Jag valde att göra spelet Gomoku där 2 spelare möts. Flera användare kan logga in och se på när två spelare möts. Inne i spelrummet så finns det även en chatt där användarna kan kommunicera med varandra. Databasen används för att lagra de senaste spelade spelen.

Mitt mål är att utmana mig själv och kämpa för att utveckla mig själv så jag satsade på högsta betyget och gjorde alla kraven.

Applikationen bygger på samma tekniker som jag använde mig utav för redovisningssidan. Express, React och em CI-kedja med Travis, Scrutinizer och Codecov.
Applikationen finns här på [GitHub](https://github.com/ptorn/bth-ramverk2-gomoku).

### Krav 4:

Jag har försökt att strukturera min README.md och göra den så lätt navigerad och tydlig som möjligt. Har försökt att göra stegen så enkla som möjligt, men samtidigt visa hur omfattande applikationen är och hur man hanterar den.

### Krav 5:

Jag publicerade min applikation på Docker Store. [Docker Image](https://store.docker.com/community/images/ptorn/bth-ramverk2-gomoku).
Det kändes som en given pusselbit i hela flödet från min CI-kedja. Efter att vid upprepade tillfällen fått problem med timeout på servern, för att npm tagit för lång tid så kändes en färdig byggd Docker-image som en självklar del.

Inga händer i mellan utan endast en commit och applikationen är redo att köras.

### Krav 6:

Jag skrev en artikel om [React](https://github.com/ptorn/bth-ramverk2-gomoku/blob/master/React.md).
Artikeln går igenom fördelarna som jag upplever att React tillför och resonerar lite varför man ska välja just React. Det finns givetvis andra alternativ, men jag tar upp det som jag stött på med React.

Visar även med några enkla exempel.

## 2. Allmänt om projektet

Tycker det gick bra att genomföra. Försökte mig på TDD när jag skrev logiken till Gomoku och tyckte det fungerade bra. Genom att köra npm test –watch så kunde jag börja med att skriva ett felande test och spara. Varje gång jag sparade så kördes testerna. Så först skrev jag ett felande test och sparade. Då blev det rött. Sen skrev jag kod som löste testfallet och då blev det grönt. Tycker det var faktiskt rätt smidigt att jobba så. Det jag kände som begränsade en lite med TDD var ju att man inte riktigt hade koll på testsuiten och vilka delar man kunde använda. Men när man blev lite varmare i kläderna så flöt det på rätt bra.

Jag stötte på lite problem med Docker när jag skulle produktionssätta den och det var att kommandot –bind_ip_all inte fungerade i denna versionen utav mongodb utan den svarade med att inte känna igen kommandot så istället fick jag använda –bind_ip 0.0.0.0 och sen var det igång.

Tycker det var en bra nivå på projektet där man själv kunde sätta ribban lite så man kände att man han med det som man hade tänkt göra. Tycker att man fick med mycket i projektet som täckte upp kursen bra.

Tiden är svår att uppskatta eftersom jag har suttit med det lite då och då mån av tid. Det gick bra inom tidsramen och jag känner att jag hade tillräckligt med tid för att göra det jag hade tänkt.

Mycket fokus på readme filen vilket var rätt intressant. För att kunna förklara för andra hur man ska göra så gäller det att man själv förstår vad som sker så det har varit en intressant vinkel på projektet där man fått reflektera mer över hur man lagt upp sin applikation.
Inget som var

## 3. Tankar om kursen och feedback

Har varit en bra kurs även om det var mycket att ta in. Jag valde att gå på React spåret och fick söka upp mycket information på egen hand eftersom det var inget som kursmaterialet tog upp. Dock så var det inget hinder i sig. Det tog bara lite mer tid att söka upp och ta till sig React. Fast samtidigt så fick man chansen att visa att man kan ta till sig ny information snabbt och på egen hand. När man väl kom upp för backen med React så kände jag att det verkligen var ett smidigt sätt att jobba. Det kändes som det perfekta upplägget för det som vi gjorde i kursen. Bygga en ren och skär klient som jobbade mot en server del med websockets. Materialet som kursen tog upp i övrigt var bra och tydlig vilket underlättade för att komma igång.

Var bra att det även fanns en väg igenom kursen om man inte hade valt något eget.

Kursen kändes ganska bra med att man ställdes inför olika val och fick välja fritt. Det kändes lite som att här ta facklan och spring. Man fick chansen att pressa sig lite mer och på egen hand fortsätta växa i sin roll som programmerare.

Kommer absolut att rekomendera kursen för alla som kan tänkas vara intresserade. Kan inte hitta något som jag saknade eftersom jag gick min egna väg och jag kände att kursen gav mig det utrymme som jag behövde.
Jag ger kursen **10 av 10**
