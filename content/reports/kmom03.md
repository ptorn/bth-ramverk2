Kmom03
====================

### Berätta vilka tekniker/verktyg du valde för enhetstester och kodtäckning och varför?
Jag valde att följa artikeln om testning som följde med kursmomentet eftersom den var tydlig och Mocha verkar vara en av de stora testramverken där ute. Valet stod mellan Jest och Mocha, men för att inte komplicera för mycket så kändes Mocha som ett bra val. Mocha har varit med längre. Så jag använder mig utav Mocha som testramverk för enhetstester och nyc för att se över min kodtäckning. På min redovisningssida så hade jag inte så mycket att testa så jag valde att testa mina routes. Det gjorde jag genom att använda mig utav Supertest. Det var väldigt enkelt att följa deras guide på hemsidan för att testa mina routes.

### Berätta om cin CI-kedja och reflektera över de valen du gjorde?
Min CI-kedja består utav travis som håller koll på att min applikation kan byggas utan fel.
För kodanalys och kodtäckning så valde jag Scrutinizer som jag tycker gör ett bra jobb och ger bra feedback. Scrutinizer kollar även så att min applikation kan byggas utan problem. Tycker Scrutinizer sköter det mesta och känns väldigt användbar. För detta kursmoment så la jag även till kodtäckning med codecov.io
Jag har även kopplat mitt GitHub till Docker Store för min redovisningssida där mina images byggs vid varje commit som en del i kedjan. För min app så har jag ännu inte kopplat den till Docker Store.

### Reflektera över hur det gick att integrera enhetstesterna i olika Docker-kontainerns och om du ser någon nytta med detta.
Det gick utan problem att få till testerna med mina Docker containers. Man kan köra testerna med npm istället för med Make eftersom jag använder mig helt utav npm. Så npm run test1, npm run test2 och npm run test3. Jag skapade 3 st images i min docker-compose.yml för att köra testerna.

Nyttan är ju att man kan testa sin kod i olika miljöer på ett snabbt och enkelt sätt på samma dator i isolerade miljöer med de versioner som man vill testa mot oavsett vad datorn själv har för version installerad. Och på så sätt försäkra sig om att ens kod fortfarande validerar och kan byggas för de miljöerna som man bygger för.

### Hur väl lyckades du utvärdera TDD-konceptet och vilka är dina reflektioner?
I min app som jag började med i detta kursmoment så försökte jag verkligen att skriva ett testfall först och sen koden efter det. Nu har jag bara börjat med min applikation så den är väldigt enkel. Det gick bra men kändes lite ovant och avigt. Med min testmiljö uppsatt så var det ganska enkelt att jobba mot Mocha och börja skriva testfall som inte gick igenom och då börja skriva min kod efter det. Spontant så ville jag bara börja skriva min kod direkt som jag har planerat den och gå ifrån TDD, men jag ser fördelar med att skriva testfallen först så jag ger inte upp. Kanske behöver man bara smälta det lite. Fördelarna är ju att testerna verkligen blir skrivna och att man kan känna sig trygg med koden att den gör det som man tänkt sig. Förutsatt att man täcker upp de tänkta fallen i sina testfall.

### Berätta om tankarna kring din klient/server applikation och nämn de tekniker du använder.
Jag funderade ett tag på vad jag skulle göra och det som det föll på var en Chattapplikation. Tidigare under kursen så togs det upp att skriva en Chattklient och en server till den så jag tänkte att jag kör på det.
För detta så har jag kört på samma upplägg som min redovisningssida. Jag har en express server och en klient som jag bygger med React.
Till detta så har jag en CI-kedja som är redo för att programmera enligt TDD. Nu ska jag bara bli lite varm i kläderna och börja jobba lite mer så jag får känna på det lite mer.  

Jag började även att skriva min kod med att använda klasser fast valde att tänka lite mer JavaScript och gjorde om min klass till en factory som jag skapar mina objekt med.
