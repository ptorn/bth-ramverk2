Kmom05
====================

### Allmänt
Det var ett roligt kursmoment där man fick jobba med MongoDB som var nytt, men även att få jobba lite mer med React och olika komponenter med dess state.
Jag började med att sätta upp mina containrar och sedan så började jag bygga på mina routes för att få igång servern så den kunde kommunicera med MongoDB.
Jag skrev en egen databas modul som hanterar kommunikationen mot MongoDB som ger mig ett verktyg att jobba med ifrån min controller som routern kallar på.
Efter det så kunde jag jobba vidare med min klient när jag väl ordnat ett API som man kunde jobba mot.

### Hur gick det att komma igång med databasen MongoDB?
Detta var första gången som jag har kommit i kontakt med MongoDB, men det gick bra att komma igång.
Jag började med att sätta upp en container och sen gick jag igenom manualen för att ta reda på det som jag behövde för att fixa CRUD-delen.
Sen började jag med att fixa en reset funktion som tömmer databasen och läser in några objekt så jag kunde börja testa och jobba med databasen.
Hade inga problem med att få containrarna att prata med varandra. 

### Vilken syn har du på databaser inom konceptet NoSQL?
Det är lite annorlunda, men det känns som ett smidigt sätt att spara och hämta sina objekt. Väldigt enkelt att jobba med JSON-objekt hela vägen.
Man arbetar på ett friare och mer dynamiskt sätt. Det finns både fördelar och nackdelar.
Om man jämför med en relations databas som har tydliga tabeller så där vet man exakt vad som man kan förvänta sig och inte medans i NoSQL så kan man spara lite som man vill.
Vilket ger mer frihet, men samtidigt så är det inte så strukturerat. Det är ungefär det som jag sett under uppgiften.

### Reflektera över skillnader och likheter mellan relationsdatabaser och databaser inom NoSQL.
Man kan dra likheter mellan de olika databaserna. Om vi jämför MySQL med MongoDB så kan man se följande.
MySQL > Tabell > Rad > Kolumn
MongoDB > Kollektion > Document > Nyckel(Key/value)
Rent spontant så känns det enklare att skala upp och ändra strukturen på vad som sparas i objekten kontra strukturera en tabell och utöka den.
Nu har jag inte testat hur MongoDB hanterar JOINS när man vill länka ihop objekt så jag vet inte riktigt hur det fungerar ännu.

### Vilka är dina tankar om asynkron programmering med JavaScript?
Tycker att det gick bra. Känns mycket enklare och tydligare att jobba med async/await jämfört med then. Tycker koden känns lättare och tydligare att läsa.
Har man tungan rätt i mun och tänker efter lite med vad man jobbar med och om det returnerar ett promis eller ej så går det rätt smidigt att jobba med asynkron programmering.

### Hur känner du för Docker och det sättet vi jobbar med tjänster i kontainrar?
Docker har redan fått en plats i mitt hjärta. Tidigare jobbade jag med virtuella maskiner, men har helt gått ifrån det.
Istället så skapar jag en container för det projekt som jag jobbar med. Det gör det enklare att skifta mellan olika projekt och snabbt få upp en utvecklingsmiljö.

Jag använder även docker för min redovisningssida på min ”produktionsserver” på digital ocean. Så det är väldigt enkelt och smidigt att sätta me-sidan i produktion.
Att dela upp våra tjänster i olika containrar känns väldigt smidigt. Det gör det enklare för oss att lokalt jobba med olika versioner och testa samma kod i olika miljöer.
Det gör att vi får på ett snabbt och enkelt sätt full kontroll på vad vi gör och våran miljö.
