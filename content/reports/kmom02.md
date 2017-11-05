Kmom02
====================

### Allmänt
Det var ett snabbt kursmoment som gick igenom väldigt nyttig teknik med Docker som gör oss väldigt effektiva som programmerare och eliminerar risken med olika versioner och vi kan på så sätt få bättre kontroll på vår kod.
Var kul att skapa ett eget repo på Docker Store och komma igång med den delen utav Docker.

Jag gjorde även extrauppgifterna för detta kursmoment.

### Har du jobbat med Docker eller andra virtualiseringstekniker innan?
Ja, jag har tidigare använt mig utav VMware, VirtualBox och Docker. Nu på senare tid så använder jag mig mest utav Docker då det är enklare, smidigare och kräver inte lika mycket resurser som att dra igång en hel virtuell maskin.

Nu använder jag mig utav Docker containrar till de olika projekt som jag jobbar i och det gör det väldigt smidigt när man vill byta mellan olika projekt och snabbt komma in i sin arbetsmiljö för att testa och utveckla. Ska man snabbt felsöka något så kan man på väldigt kort tid sätta upp en miljö på sin dator som är like den som ligger i produktion för att kunna testa och arbeta mot.

### Hur ser du på möjligheterna att använda dig av Docker för att jobba med tester av ditt repo?
Det ser bra ut. Jag har skapat ett eget repo för kursen där jag har containrar för olika node versioner så man enklet kan testa mot de olika versionerna. Med docker-compose så är det rena drömmen att sätta upp och arbeta med många containrar.

Fördelen med Docker är ju också att alla som vill köra och utveckla vidare på samma projekt arbetar med just samma version och miljö. Det eliminerar problemet med att folk i teamet kanske sitter med olika versioner och sen så kanske produktionsservern har en annan. Där eliminerar man den problematiken. Vare sig du sitter på Linux, Mac eller Windows så kan du snabbt komma igång och jobba i samma miljö.

### Gick allt smidigt eller stötte du på problem?
Det var inga problem. Jag hade Docker redan installerat. Det som jag inte hade gjort tidigare så var det att lägga upp mina images på Docker Store. Så det gjorde jag. Det var väldigt smidigt hur Docker Store har koll på GitHub repot och image filerna byggs om direkt vid en ny commit till repot. Gör det enkelt när man vill skicka sin Docker container till produktionsservern. Det jag fick luska ut lite var när jag skulle ha flera Dockerfiler och bygga efter filerna, men det gick bra efter att ha testat mig fram lite.

### Skapade du din egen image, berätta om den?
Ja det gjorde jag. Efter att ha skannat igenom hur man skapar egna Docker images så började jag bygga upp mina dockerfiler. Jag sökte och hittade nodejs repot docker-node som utförligt går igenom hur man skapar egna Docker images. Sen försökte jag strukturera mig genom att lägga mina dockerfiler i en egen mapp. Jag skapade lite olika images för att testa lite. peder/bth-ramverk2:latest, peder/bth-ramverk2:node9, peder/bth-ramverk2:node8, peder/bth-ramverk2:node6. Strukturen som jag använde mig utav var att jag la alla mina dockerfiler i mappen ”dockerfiles”. I min docker-compose.yml så skrev jag in de olika kontainrarna som jag vill ska starta och satte de nödvändiga parametrarna som behövs och sedan drar jag igång min nodeserver. Jag gjorde först att jag byggde containrarna själv från filerna i dockerfiles. Sen kommenterade jag bort de för att istället använda mig utav de docker store repot som bygger mina images vid varje commit till min master branch på GitHub repot för kursen.
Repot ”peder/bth-ramverk2” har olika taggar för olika versioner utav node vilket bestäms utifrån dockerfilerna som hanterar hur image containrarna ska byggas.
