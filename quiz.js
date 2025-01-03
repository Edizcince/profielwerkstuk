
let questions = [];
let Header1 = document.getElementById("h1");
if (Header1.innerHTML == "Duitsland in Europa (1918–1991)"){
    questions = [
        {
            question: "Wat was de eerste agressieve actie van Duitsland in 1938?",
            answers: [
                { text: "De aanval op Polen", correct: false },
                { text: "De annexatie van Oostenrijk", correct: true },
                { text: "De inval in Frankrijk", correct: false },
                { text: "De aanval op Tsjecho-Slowakije", correct: false }
            ]
        },
        {
            question: "Waarom stemden Engeland en Frankrijk in met het weggeven van Sudetenland?",
            answers: [
                { text: "Ze wilden oorlog voorkomen", correct: true },
                { text: "Ze hoopten op samenwerking met Duitsland", correct: false },
                { text: "Ze waren militair zwak", correct: false },
                { text: "Ze stonden achter Hitlers ideeën", correct: false }
            ]
        },
        {
            question: "Wat markeerde het begin van de Tweede Wereldoorlog?",
            answers: [
                { text: "De overname van Oostenrijk", correct: false },
                { text: "De aanval op Frankrijk", correct: false },
                { text: "De Duitse inval in Polen", correct: true },
                { text: "De aanval op de Sovjet-Unie", correct: false }
            ]
        },
        {
            question: "Wat gebeurde er in juni 1941?",
            answers: [
                { text: "Duitsland viel de Sovjet-Unie aan", correct: true },
                { text: "De Holocaust begon", correct: false },
                { text: "De geallieerden vielen Frankrijk binnen", correct: false },
                { text: "Duitsland capituleerde", correct: false }
            ]
        },
        {
            question: "Wat hield de dolkstootlegende in?",
            answers: [
                { text: "Dat Duitsland verraden werd door communisten", correct: false },
                { text: "Dat Duitsland verraden werd door democratische leiders", correct: true },
                { text: "Dat Duitsland economisch kapot werd gemaakt door de geallieerden", correct: false },
                { text: "Dat Duitsland verraden werd door joden", correct: false }
            ]
        },
        {
            question: "Wat waren de gevolgen van de geallieerde afspraken in 1945?",
            answers: [
                { text: "Duitsland werd in zones verdeeld", correct: true },
                { text: "Duitsland werd economisch gestraft", correct: false },
                { text: "Duitsland mocht zich herbewapenen", correct: false },
                { text: "Duitsland kreeg het Marshallplan aangeboden", correct: false }
            ]
        },
        {
            question: "Waarom voerden de West-Duitse zones in 1948 de D-mark in?",
            answers: [
                { text: "Om de economie te versterken", correct: true },
                { text: "Om de Sovjet-Unie te irriteren", correct: false },
                { text: "Om de Duitse eenheid te herstellen", correct: false },
                { text: "Om de DDR te verzwakken", correct: false }
            ]
        },
        {
            question: "Hoe reageerde Stalin op de invoering van de D-mark?",
            answers: [
                { text: "Hij sloot Berlijn af", correct: true },
                { text: "Hij versterkte de DDR-economie", correct: false },
                { text: "Hij liet West-Duitsland gewoon zijn eigen ding doen", correct: false },
                { text: "Hij sloot een overeenkomst met de VS", correct: false }
            ]
        },
        {
            question: "Wat was het doel van de Berlijnse luchtbrug in 1948-1949?",
            answers: [
                { text: "Wapens te leveren aan de geallieerden", correct: false },
                { text: "Voedsel en goederen aan West-Berlijn te leveren", correct: true },
                { text: "Communisten uit Berlijn weg te jagen", correct: false },
                { text: "Duitsland economisch te ondersteunen", correct: false }
            ]
        },
        {
            question: "Wanneer werden de BRD en DDR opgericht?",
            answers: [
                { text: "1945 en 1946", correct: false },
                { text: "1949 en 1950", correct: false },
                { text: "1948 en 1949", correct: false },
                { text: "1949", correct: true }
            ]
        },
        {
            question: "Wie was de eerste bondskanselier van West-Duitsland?",
            answers: [
                { text: "Konrad Adenauer", correct: true },
                { text: "Walter Ulbricht", correct: false },
                { text: "Willy Brandt", correct: false },
                { text: "Erich Honecker", correct: false }
            ]
        },
        
        {
            question: "Wat was een belangrijk kenmerk van de DDR-economie?",
            answers: [
                { text: "Een planneneconomie zoals de Sovjet-Unie", correct: true },
                { text: "Een vrije markteconomie", correct: false },
                { text: "Sterke buitenlandse handel", correct: false },
                { text: "Privatisering van staatsbedrijven", correct: false }
            ]
        },
        {
            question: "Wat was het Warschaupact?",
            answers: [
                { text: "Een militaire samenwerking van communistische landen", correct: true },
                { text: "Een economisch verdrag tussen Duitsland en de Sovjet-Unie", correct: false },
                { text: "Een handelsverdrag binnen Europa", correct: false },
                { text: "Een samenwerkingsverband tussen de DDR en BRD", correct: false }
            ]
        },
        {
            question: "Wat was de Stasi?",
            answers: [
                { text: "De geheime politie van de DDR", correct: true },
                { text: "De grensbewaking bij de Berlijnse muur", correct: false },
                { text: "Een propagandadienst", correct: false },
                { text: "De partijleiding van de communistische partij", correct: false }
            ]
        },
        {
            question: "Hoeveel mensen vluchtten tussen 1949 en 1961 van de DDR naar het westen?",
            answers: [
                { text: "1 miljoen", correct: false },
                { text: "2 miljoen", correct: false },
                { text: "3 miljoen", correct: true },
                { text: "5 miljoen", correct: false }
            ]
        },
        {
            question: "Welke Sovjetleider kondigde glasnost en perestrojka aan?",
            answers: [
                { text: "Stalin", correct: false },
                { text: "Brezjnev", correct: false },
                { text: "Chroesjtsjov", correct: false },
                { text: "Gorbatsjov", correct: true }
            ]
        },
        {
            question: "Wat zorgde uiteindelijk voor een gat in het IJzeren Gordijn?",
            answers: [
                { text: "De opstand in Oost-Duitsland", correct: false },
                { text: "De opening van de grens door Hongarije", correct: true },
                { text: "De demonstraties in Leipzig", correct: false },
                { text: "De val van de Berlijnse muur", correct: false }
            ]
        },
        {
            question: "Op welke datum viel de Berlijnse muur?",
            answers: [
                { text: "9 november 1989", correct: true },
                { text: "11 februari 1990", correct: false },
                { text: "13 augustus 1986", correct: false },
                { text: "3 oktober 1987", correct: false }
            ]
        },
        {
            question: "Wat was een directe oorzaak van de val van de Berlijnse muur?",
            answers: [
                { text: "Massale protesten", correct: true },
                { text: "Een economische crisis", correct: false },
                { text: "De Brezjnev-doctrine", correct: false },
                { text: "De steun van Frankrijk", correct: false }
            ]
        },
        {
            question: "Wat gebeurde er op 3 oktober 1990?",
            answers: [
                { text: "Duitsland werd herenigd", correct: true },
                { text: "De muur werd volledig gesloopt", correct: false },
                { text: "De DDR bleef onafhankelijk", correct: false },
                { text: "De Sovjet-Unie accepteerde communisme in Duitsland", correct: false }
            ]
        }    
    ]
}
else if(Header1.innerHTML == "Nederland (1928-2008)"){
    questions = [
        {
            question: "Welke vier zuilen waren er in Nederland voor de Tweede Wereldoorlog?",
            answers: [
                { text: "Katholieken, protestanten, liberalen, communisten", correct: false },
                { text: "Katholieken, protestanten, socialisten, liberalen", correct: true },
                { text: "Katholieken, protestanten, socialisten, nationalisten", correct: false },
                { text: "Katholieken, liberalen, communisten, anarchisten", correct: false }
            ]
        },
        {
            question: "Wat was de (voornaamste) reden voor Nederland om zich na de Tweede Wereldoorlog aan te sluiten bij de NAVO?",
            answers: [
                { text: "Het versterken van de economie", correct: false },
                { text: "Bescherming tegen de communisten", correct: true },
                { text: "Toegang tot de Amerikaanse markt", correct: false },
                { text: "Vermijden van een nieuwe oorlog met Duitsland", correct: false }
            ]
        },
        {
            question: "Wat hield de geleide loonpolitiek van Willem Drees in?",
            answers: [
                { text: "Het beperken van werkloosheid door werk te garanderen", correct: false },
                { text: "Het beperken van lonen door de regering", correct: true },
                { text: "Het verhogen van minimumlonen om armoede te bestrijden", correct: false },
                { text: "Het toestaan van loonsverhogingen om consumptie te stimuleren", correct: false }
            ]
        },
        {
            question: "Waarom was de ontdekking van aardgas in 1959 zo belangrijk voor Nederland?",
            answers: [
                { text: "Het verlaagde de kosten van elektriciteit", correct: false },
                { text: "Het versterkte de exportpositie van Nederland", correct: false },
                { text: "Het maakte Nederland een van de rijkste landen in Europa", correct: true },
                { text: "Het hielp bij de wederopbouw na de oorlog", correct: false }
            ]
        },
        {
            question: "Welke uitkering werd in 1957 ingevoerd als onderdeel van de verzorgingsstaat?",
            answers: [
                { text: "AOW", correct: true },
                { text: "WAO", correct: false },
                { text: "Bijstand", correct: false },
                { text: "Kinderbijslag", correct: false }
            ]
        },
        {
            question: "Welke maatschappelijke verandering droeg het meest bij aan de ontzuiling?",
            answers: [
                { text: "De introductie van reclame op televisie", correct: false },
                { text: "De groei van de auto-industrie", correct: false },
                { text: "Het wonen in nieuwe gemengde wijken", correct: true },
                { text: "Het stijgen van lonen", correct: false }
            ]
        },
        {
            question: "Wat was een kenmerk van de Nozems in de jaren 50?",
            answers: [
                { text: "Ze gingen veel naar feestjes, en deden veel drugs", correct: false },
                { text: "Ze droegen nette kleding en waren erg politiek", correct: false },
                { text: "Ze waren opstandig, droegen leren jassen en reden brommers", correct: true },
                { text: "Ze richtten zich op klassieke muziek en kunst", correct: false }
            ]
        },
        {
            question: "Welke technologische verandering droeg bij aan de toename van consumptie in de jaren 60?",
            answers: [
                { text: "De uitvinding van de computer", correct: false },
                { text: "De introductie van zelfbedieningswinkels", correct: true },
                { text: "De groei van de advertenties", correct: false },
                { text: "De ontwikkeling van kernenergie", correct: false }
            ]
        },
        {
            question: "Wat was een belangrijke reden voor de komst van Surinamers naar Nederland in 1975?",
            answers: [
                { text: "De onafhankelijkheid van Suriname", correct: true },
                { text: "De groeiende economie in Nederland", correct: false },
                { text: "De arbeid in Nederland", correct: false },
                { text: "De politieke onrust in Suriname", correct: false }
            ]
        },
        {
            question: "Waarom werd het poldermodel in de jaren 80 als succesvol beschouwd?",
            answers: [
                { text: "Het zorgde voor meer sociale gelijkheid", correct: false },
                { text: "Het leidde tot overleg tussen werkgevers, vakbonden en overheid", correct: true },
                { text: "Het stimuleerde internationale handel", correct: false },
                { text: "Het verminderde de uitgaven aan de verzorgingsstaat", correct: false }
            ]
        },
        {
            question: "Welke maatregel zorgde voor een groeiende individualisering in Nederland?",
            answers: [
                { text: "De invoering van de anticonceptiepil", correct: false },
                { text: "Het legaliseren van het homohuwelijk", correct: false },
                { text: "Het verlagen van lonen", correct: false },
                { text: "De opkomst van het internet", correct: true }
            ]
        },
        {
            question: "Waarom werden de kruisraketten in Nederland uiteindelijk niet geplaatst?",
            answers: [
                { text: "Massaal protest", correct: false },
                { text: "Internationale afspraken tussen de VS en de Sovjet-Unie", correct: true },
                { text: "Een beslissing van de Verenigde Naties", correct: false },
                { text: "Een tekort aan financiële middelen", correct: false }
            ]
        },
        {
            question: "Wat was een gevolg van de economische crisis in de jaren 80?",
            answers: [
                { text: "Een daling in werkloosheid", correct: false },
                { text: "Strengere regels voor de WAO-uitkering", correct: true },
                { text: "De uitbreiding van de verzorgingsstaat", correct: false },
                { text: "Een stijging in de lonen", correct: false }
            ]
        },
        {
            question: "Wat was een kenmerk van de punkbeweging in Nederland?",
            answers: [
                { text: "Optimisme en vreugde over de toekomst", correct: false },
                { text: "Afkeer van gezag en een “no future”-mentaliteit", correct: true },
                { text: "Focus op muziek en kunst zonder politieke boodschap", correct: false },
                { text: "Traditionele kledingstijlen en normen", correct: false }
            ]
        },
        {
            question: "Wat was een van de (belangrijkste) oorzaken van de woningnood in de jaren 80?",
            answers: [
                { text: "De groei van de bevolking", correct: true },
                { text: "De vernietiging van woningen tijdens de oorlog", correct: false },
                { text: "De opkomst van de kraakbeweging", correct: false },
                { text: "De stijgende immigratie", correct: false }
            ]
        },
        {
            question: "Wat maakte Nederland in 2001 uniek op het gebied van wetgeving?",
            answers: [
                { text: "Het toestaan van euthanasie", correct: true },
                { text: "Het invoeren van een universeel basisinkomen", correct: false },
                { text: "Het beperken van immigratie", correct: false },
                { text: "Het verhogen van de minimumlonen", correct: false }
            ]
        },
        {
            question: "Welke gebeurtenis vergrootte de polarisatie in Nederland in 2001?",
            answers: [
                { text: "De moord op Pim Fortuyn", correct: false },
                { text: "De aanslagen van 11 september in Amerika", correct: true },
                { text: "De uitbreiding van de EU", correct: false },
                { text: "De economische crisis", correct: false }
            ]
        },
        {
            question: "Wat was een kenmerk van de gabbercultuur in Nederland?",
            answers: [
                { text: "Protest tegen racisme", correct: false },
                { text: "Elektronische muziek en feesten", correct: true },
                { text: "Vredelievende idealen", correct: false },
                { text: "Verzet tegen woningnood", correct: false }
            ]
        },
        {
            question: "Waarom was de invoering van de euro belangrijk voor Nederland?",
            answers: [
                { text: "Het maakte handel beter binnen Europa", correct: true },
                { text: "Het verlaagde de nationale schuld", correct: false },
                { text: "Het verhoogde de koopkracht van de Nederlanders", correct: false },
                { text: "Het maakte Nederland onafhankelijker van de EU", correct: false }
            ]
        },
        {
            question: "Welke partij had in de jaren 90 een sterk liberalistische visie?",
            answers: [
                { text: "CDA", correct: false },
                { text: "VVD", correct: true },
                { text: "PvdA", correct: false },
                { text: "D66", correct: false }
            ]
        },
        {
            question: "Welke rol speelde Nederland in de val van Srebrenica tijdens de burgeroorlog in Bosnië?",
            answers: [
                { text: "Nederland hielp bij het evacueren van alle inwoners van de stad", correct: false },
                { text: "Dutchbat-soldaten faalden in het beschermen van een VN-veilige zone", correct: true },
                { text: "Nederland steunde de Bosnische Serviërs actief", correct: false },
                { text: "Het Nederlandse leger weigerde deel te nemen aan de VN-missie", correct: false }
            ]
        },
        {
            question: "Wat was een belangrijk gevolg van het Verdrag van Maastricht in 1992?",
            answers: [
                { text: "Nederland kreeg een leidende rol in de NAVO", correct: false },
                { text: "De oprichting van de EU en de invoering van de euro", correct: true },
                { text: "Nederland trad uit de Europese Gemeenschap", correct: false },
                { text: "Het Schengenverdrag werd geannuleerd", correct: false }
            ]
        },
        {
            question: "Wat was een belangrijk kenmerk van de punkbeweging in Nederland?",
            answers: [
                { text: "Hun haat tegen communistische politieke partijen", correct: false },
                { text: "Hun vreedzame protesten tegen woningnood", correct: false },
                { text: "Hun harde muziek en protest tegen gezag", correct: true },
                { text: "Hun strikte naleving van traditionele normen en waarden", correct: false }
            ]
        },
        {
            question: "Waarom werd de kraakbeweging in Nederland opgericht?",
            answers: [
                { text: "Om meer aandacht te vragen voor milieuproblemen", correct: false },
                { text: "Om leegstaande panden te bezetten vanwege woningnood", correct: true },
                { text: "Om de Nederlandse monarchie te versterken", correct: false },
                { text: "Om te protesteren tegen de toename van immigranten", correct: false }
            ]
        },
        {
            question: "Wat veroorzaakte de multiculturele samenleving in Nederland na 1990?",
            answers: [
                { text: "Het verlaat van Nederlanders naar andere landen", correct: false },
                { text: "Een stijging van het aantal migranten, asielzoekers en arbeidsmigranten", correct: true },
                { text: "Een verbod op grenscontroles binnen Europa", correct: false },
                { text: "De afschaffing van alle religieuze scholen in Nederland", correct: false }
            ]
        },
        {
            question: "Wat was de directe aanleiding voor de moord op Pim Fortuyn in 2002?",
            answers: [
                { text: "Zijn felle kritiek op het Nederlandse onderwijssysteem", correct: false },
                { text: "Zijn radicale standpunten over klimaatverandering", correct: false },
                { text: "Zijn uitspraken over de islam als 'achterlijke cultuur'", correct: true },
                { text: "Zijn steun aan de NAVO en de VS in conflicten", correct: false }
            ]
        },
        {
            question: "Wat veroorzaakte de economische crisis van 2008 in Nederland?",
            answers: [
                { text: "Een sterke toename van de werkgelegenheid", correct: false },
                { text: "Problemen in de financiële sector en dalende huizenprijzen", correct: true },
                { text: "De afname van immigranten uit Oost-Europa", correct: false },
                { text: "Het instorten van de olieprijzen", correct: false }
            ]
        },
        {
            question: "Welke verandering onderging Nederland in 1985 door het Schengenverdrag?",
            answers: [
                { text: "Het aantal immigranten nam drastisch af door strengere grenscontroles", correct: false },
                { text: "Onderlinge grenscontroles werden afgeschaft, wat vrij reizen mogelijk maakte", correct: true },
                { text: "Nederland sloot zijn grenzen tijdelijk vanwege economische onzekerheid", correct: false },
                { text: "Het Schengenverdrag zorgde ervoor dat Nederland uit de EU stapte", correct: false }
            ]
        },
        {
            question: "Wat was de rol van Nederland in de vorming van de Europese Unie?",
            answers: [
                { text: "Nederland tekende het Verdrag van Maastricht, dat leidde tot de oprichting van de EU", correct: true },
                { text: "Nederland weigerde de euro in te voeren tijdens de onderhandelingen", correct: false },
                { text: "Nederland gaf leiding aan het verdrag van Schengen maar sloot zich niet aan bij de EU", correct: false },
                { text: "Nederland richtte de EU samen met alleen Frankrijk op", correct: false }
            ]
        },
        {
            question: "Waarom werd Nederland internationaal gezien als tolerant na 2000?",
            answers: [
                { text: "Door de invoering van wetten zoals het homohuwelijk en de euthanasiewet", correct: true },
                { text: "Door het afschaffen van het verdrag van Schengen", correct: false },
                { text: "Door zijn rol als leider in het Europese milieubeleid", correct: false },
                { text: "Door een verbod op discriminatie in alle publieke sectoren", correct: false }
            ]
        }
        
    ]
}
else if( Header1.innerHTML == "Het Britse rijk (1585-1900)"){
    questions = [
        {
            question: "Wat was de eerste blijvende Engelse kolonie in Amerika?",
            answers: [
                { text: "New York", correct: false },
                { text: "Virginia", correct: true },
                { text: "Massachusetts", correct: false },
                { text: "Pennsylvania", correct: false }
            ]
        },
        {
            question: "Wanneer arriveerden de Engelsen in Nieuw Nederland?",
            answers: [
                { text: "1585", correct: false },
                { text: "1607", correct: false },
                { text: "1664", correct: true },
                { text: "1700", correct: false }
            ]
        },
        {
            question: "Wie was de koning die bijna de hele oostkust van Noord-Amerika in bezit nam?",
            answers: [
                { text: "Hendrik VIII", correct: false },
                { text: "Karel II", correct: true },
                { text: "Jacobus I", correct: false },
                { text: "Elizabeth I", correct: false }
            ]
        },
        {
            question: "Wat was het belangrijkste gevolg voor de inheemse bevolking van de kolonisatie van Amerika?",
            answers: [
                { text: "Ze stierf massaal door Europese ziektes", correct: true },
                { text: "Ze kregen meer rechten", correct: false },
                { text: "Ze profiteerden van de handel met de kolonisten", correct: false },
                { text: "Ze werden geassimileerd in de Engelse cultuur", correct: false }
            ]
        },
        {
            question: "Waarom koloniseerde de Engelsen Barbados in 1627?",
            answers: [
                { text: "Voor nieuw grondgebied", correct: false },
                { text: "Voor de teelt van tabak", correct: true },
                { text: "Voor de handel in specerijen", correct: false },
                { text: "In de zoektocht naar goud", correct: false }
            ]
        },
        {
            question: "Wat werd de belangrijkste teelt op de suikerplantages van het Caribisch gebied?",
            answers: [
                { text: "Katoen", correct: false },
                { text: "Suiker", correct: true },
                { text: "Tabak", correct: false },
                { text: "Mais", correct: false }
            ]
        },
        {
            question: "Vanaf welk jaar werd de Engelse trans-Atlantische driehoekshandel gereguleerd door de Royal African Company?",
            answers: [
                { text: "1600", correct: false },
                { text: "1672", correct: true },
                { text: "1750", correct: false },
                { text: "1800", correct: false }
            ]
        },
        {
            question: "Welke activiteit was het belangrijkste voor de Engelse koloniën in het zuiden van Amerika?",
            answers: [
                { text: "Slavenhandel", correct: false },
                { text: "Oorlogen tegen de Fransen", correct: false },
                { text: "Plantages en export van goederen", correct: true },
                { text: "Visserij en scheepsbouw", correct: false }
            ]
        },
        {
            question: "Wat leidde in 1773 tot de Boston Tea Party?",
            answers: [
                { text: "Het verlies van de Amerikaanse onafhankelijkheid", correct: false },
                { text: "De oorlog tegen de Fransen", correct: false },
                { text: "Het protest tegen de slavenhandel", correct: false },
                { text: "De belasting op thee door de Engelse overheid", correct: true }
            ]
        },
        {
            question: "Welke ideologie was belangrijk voor de Amerikaanse Revolutie?",
            answers: [
                { text: "Absolutisme", correct: false },
                { text: "Liberalisme", correct: true },
                { text: "Communisme", correct: false },
                { text: "Feodalisme", correct: false }
            ]
        },
        {
            question: "Wat was het belangrijkste argument tegen de belastingheffing door Groot-Brittannië in de Amerikaanse koloniën?",
            answers: [
                { text: "Er was te veel belasting op suiker", correct: false },
                { text: "De koloniën wilden geen belastingen betalen voor de oorlog", correct: false },
                { text: "De koloniën hadden geen vertegenwoordiging in het Britse parlement", correct: true },
                { text: "De belasting was alleen gericht op de rijke kolonisten", correct: false }
            ]
        },
        {
            question: "In welk jaar werd de Amerikaanse onafhankelijkheid officieel uitgeroepen?",
            answers: [
                { text: "1776", correct: true },
                { text: "1775", correct: false },
                { text: "1781", correct: false },
                { text: "1783", correct: false }
            ]
        },
        {
            question: "In welk jaar werd slavernij in Groot-Brittannië afgeschaft?",
            answers: [
                { text: "1776", correct: false },
                { text: "1807", correct: false },
                { text: "1833", correct: true },
                { text: "1865", correct: false }
            ]
        },
        {
            question: "Wat was de belangrijkste reden voor de afschaffing van de slavenhandel in Groot-Brittannië in 1807?",
            answers: [
                { text: "De opstanden in de Cariben", correct: false },
                { text: "De invloed van abolitionistische bewegingen", correct: true },
                { text: "De afname van de vraag naar katoen", correct: false },
                { text: "De verlies van de Slaven in Amerika", correct: false }
            ]
        },
        {
            question: "In welk jaar werd slavernij verboden in het Britse rijk?",
            answers: [
                { text: "1776", correct: false },
                { text: "1807", correct: false },
                { text: "1833", correct: true },
                { text: "1865", correct: false }
            ]
        },
        {
            question: "Wat was het belangrijkste gevolg van de Britse kolonisatie van India?",
            answers: [
                { text: "Het versterkte de macht van de lokale vorsten", correct: false },
                { text: "Groot-Brittannië kreeg toegang tot waardevolle grondstoffen", correct: true },
                { text: "India werd onafhankelijk in de 19e eeuw", correct: false },
                { text: "De cultuur van India werd volledig vernietigd", correct: false }
            ]
        },
        {
            question: "Welke organisatie richtte Groot-Brittannië op voor de handel in India?",
            answers: [
                { text: "De West-Indische Compagnie", correct: false },
                { text: "De British India Company", correct: false },
                { text: "De Royal African Company", correct: false },
                { text: "De East India Company", correct: true }
            ]
        },
        {
            question: "Wat was het Verdrag van Allahabad (1765)?",
            answers: [
                { text: "Het legde de grenzen van India vast", correct: false },
                { text: "Het was een handelsakkoord tussen Groot-Brittannië en Frankrijk", correct: false },
                { text: "Het gaf Groot-Brittannië de macht over Bengalen", correct: true },
                { text: "Het gaf India onafhankelijkheid van Groot-Brittannië", correct: false }
            ]
        },
        {
            question: "Welke gebeurtenis leidde tot het directe Britse gezag over India in 1858?",
            answers: [
                { text: "De Slag bij Plassey", correct: false },
                { text: "De opstand van 1857", correct: true },
                { text: "De aanleg van het spoorwegnet", correct: false },
                { text: "De afschaffing van de slavernij", correct: false }
            ]
        },
        {
            question: "Wie werd keizer van India na de opstand van 1857?",
            answers: [
                { text: "Koningin Victoria", correct: true },
                { text: "Mahatma Gandhi", correct: false },
                { text: "Albert Edward", correct: false },
                { text: "James Watt", correct: false }
            ]
        },
        {
            question: "Wat was een belangrijke oorzaak van de Indiase opstand van 1857?",
            answers: [
                { text: "De invoering van Engelse wetten en belastingtarieven", correct: false },
                { text: "De aanwezigheid van Britse soldaten in India", correct: false },
                { text: "Het beleid van het forceren van westerse religie en cultuur", correct: true },
                { text: "De strijd om de controle over de theeplantages", correct: false }
            ]
        },
        {
            question: "Welke technologie werd in India aangelegd in 1857 en hielp de Britse controle te versterken?",
            answers: [
                { text: "Het elektriciteitsnetwerk", correct: false },
                { text: "Het spoorwegnet", correct: true },
                { text: "De telegraaflijnen", correct: false },
                { text: "Het waterdistributiesysteem", correct: false }
            ]
        },
        {
            question: "Wat was de belangrijkste industrie die Groot-Brittannië ontwikkelde in India in de 19e eeuw?",
            answers: [
                { text: "Katoen", correct: false },
                { text: "Jute", correct: false },
                { text: "Textiel", correct: true },
                { text: "Thee", correct: false }
            ]
        },
        {
            question: "Wat was een belangrijk gevolg van de Britse industrialisatie voor India?",
            answers: [
                { text: "India werd een rijke natie", correct: false },
                { text: "India verloor zijn industriële capaciteiten", correct: true },
                { text: "India profiteerde van Europese fabrieken", correct: false },
                { text: "India ontwikkelde zijn eigen textielindustrie", correct: false }
            ]
        },
        {
            question: "Wat was het doel van de Reformatie van 1832 in Groot-Brittannië?",
            answers: [
                { text: "Meer rechten voor de arbeidersklasse", correct: false },
                { text: "Verbetering van het kiesrecht voor industriële steden", correct: true },
                { text: "Afschaffing van de slavernij", correct: false },
                { text: "Verhogen van de belastingtarieven", correct: false }
            ]
        },
        {
            question: "Wat was een belangrijke uitvinding van James Watt in de industriële revolutie?",
            answers: [
                { text: "De Spinning Jenny", correct: false },
                { text: "De stoommachine", correct: true },
                { text: "De telegraaf", correct: false },
                { text: "De loep", correct: false }
            ]
        },
        {
            question: "Hoeveel mensen woonden er in Groot-Brittannië in 1900?",
            answers: [
                { text: "10 miljoen", correct: false },
                { text: "30 miljoen", correct: true },
                { text: "6 miljoen", correct: false },
                { text: "30 miljoen", correct: true }
            ]
        },
        {
            question: "Wat was een belangrijke economische factor die Groot-Brittannië ondersteunde tijdens de industriële revolutie?",
            answers: [
                { text: "Het monopolie op katoen", correct: true },
                { text: "De afname van de bevolkingsomvang", correct: false },
                { text: "De invoer van goedkope arbeidskrachten", correct: false },
                { text: "De lage belastingen voor fabrikanten", correct: false }
            ]
        },
        {
            question: "Welke rol speelde de Royal Navy in het Britse imperialisme?",
            answers: [
                { text: "Ze beschermden de grenzen van Groot-Brittannië", correct: false },
                { text: "Ze bewaakten de zeehandel en het koloniale bezit", correct: true },
                { text: "Ze voerden de handel uit tussen de koloniën", correct: false },
                { text: "Ze veroverden nieuwe landen voor Groot-Brittannië", correct: false }
            ]
        },
        {
            question: "Wat was een belangrijk gevolg van de industriële revolutie voor de Britse samenleving?",
            answers: [
                { text: "De afname van de stedelijke bevolking", correct: false },
                { text: "Een toename van de werkloosheid", correct: false },
                { text: "De groei van de arbeidersklasse en verstedelijking", correct: true },
                { text: "De afname van de productie in de landbouw", correct: false }
            ]
        }   
    ]
}
else{
    questions = [
        {
            question: "Wat was de eerste agressieve actie van Duitsland in 1938?",
            answers: [
                { text: "De aanval op Polen", correct: false },
                { text: "De annexatie van Oostenrijk", correct: true },
                { text: "De inval in Frankrijk", correct: false },
                { text: "De aanval op Tsjecho-Slowakije", correct: false }
            ]
        },
        {
            question: "Waarom stemden Engeland en Frankrijk in met het weggeven van Sudetenland?",
            answers: [
                { text: "Ze wilden oorlog voorkomen", correct: true },
                { text: "Ze hoopten op samenwerking met Duitsland", correct: false },
                { text: "Ze waren militair zwak", correct: false },
                { text: "Ze stonden achter Hitlers ideeën", correct: false }
            ]
        },
        {
            question: "Wat markeerde het begin van de Tweede Wereldoorlog?",
            answers: [
                { text: "De overname van Oostenrijk", correct: false },
                { text: "De aanval op Frankrijk", correct: false },
                { text: "De Duitse inval in Polen", correct: true },
                { text: "De aanval op de Sovjet-Unie", correct: false }
            ]
        },
        {
            question: "Wat gebeurde er in juni 1941?",
            answers: [
                { text: "Duitsland viel de Sovjet-Unie aan", correct: true },
                { text: "De Holocaust begon", correct: false },
                { text: "De geallieerden vielen Frankrijk binnen", correct: false },
                { text: "Duitsland capituleerde", correct: false }
            ]
        },
        {
            question: "Wat hield de dolkstootlegende in?",
            answers: [
                { text: "Dat Duitsland verraden werd door communisten", correct: false },
                { text: "Dat Duitsland verraden werd door democratische leiders", correct: true },
                { text: "Dat Duitsland economisch kapot werd gemaakt door de geallieerden", correct: false },
                { text: "Dat Duitsland verraden werd door joden", correct: false }
            ]
        },
        {
            question: "Wat waren de gevolgen van de geallieerde afspraken in 1945?",
            answers: [
                { text: "Duitsland werd in zones verdeeld", correct: true },
                { text: "Duitsland werd economisch gestraft", correct: false },
                { text: "Duitsland mocht zich herbewapenen", correct: false },
                { text: "Duitsland kreeg het Marshallplan aangeboden", correct: false }
            ]
        },
        {
            question: "Waarom voerden de West-Duitse zones in 1948 de D-mark in?",
            answers: [
                { text: "Om de economie te versterken", correct: true },
                { text: "Om de Sovjet-Unie te irriteren", correct: false },
                { text: "Om de Duitse eenheid te herstellen", correct: false },
                { text: "Om de DDR te verzwakken", correct: false }
            ]
        },
        {
            question: "Hoe reageerde Stalin op de invoering van de D-mark?",
            answers: [
                { text: "Hij sloot Berlijn af", correct: true },
                { text: "Hij versterkte de DDR-economie", correct: false },
                { text: "Hij liet West-Duitsland gewoon zijn eigen ding doen", correct: false },
                { text: "Hij sloot een overeenkomst met de VS", correct: false }
            ]
        },
        {
            question: "Wat was het doel van de Berlijnse luchtbrug in 1948-1949?",
            answers: [
                { text: "Wapens te leveren aan de geallieerden", correct: false },
                { text: "Voedsel en goederen aan West-Berlijn te leveren", correct: true },
                { text: "Communisten uit Berlijn weg te jagen", correct: false },
                { text: "Duitsland economisch te ondersteunen", correct: false }
            ]
        },
        {
            question: "Wanneer werden de BRD en DDR opgericht?",
            answers: [
                { text: "1945 en 1946", correct: false },
                { text: "1949 en 1950", correct: false },
                { text: "1948 en 1949", correct: false },
                { text: "1949", correct: true }
            ]
        },
        {
            question: "Wie was de eerste bondskanselier van West-Duitsland?",
            answers: [
                { text: "Konrad Adenauer", correct: true },
                { text: "Walter Ulbricht", correct: false },
                { text: "Willy Brandt", correct: false },
                { text: "Erich Honecker", correct: false }
            ]
        },
        
        {
            question: "Wat was een belangrijk kenmerk van de DDR-economie?",
            answers: [
                { text: "Een planneneconomie zoals de Sovjet-Unie", correct: true },
                { text: "Een vrije markteconomie", correct: false },
                { text: "Sterke buitenlandse handel", correct: false },
                { text: "Privatisering van staatsbedrijven", correct: false }
            ]
        },
        {
            question: "Wat was het Warschaupact?",
            answers: [
                { text: "Een militaire samenwerking van communistische landen", correct: true },
                { text: "Een economisch verdrag tussen Duitsland en de Sovjet-Unie", correct: false },
                { text: "Een handelsverdrag binnen Europa", correct: false },
                { text: "Een samenwerkingsverband tussen de DDR en BRD", correct: false }
            ]
        },
        {
            question: "Wat was de Stasi?",
            answers: [
                { text: "De geheime politie van de DDR", correct: true },
                { text: "De grensbewaking bij de Berlijnse muur", correct: false },
                { text: "Een propagandadienst", correct: false },
                { text: "De partijleiding van de communistische partij", correct: false }
            ]
        },
        {
            question: "Hoeveel mensen vluchtten tussen 1949 en 1961 van de DDR naar het westen?",
            answers: [
                { text: "1 miljoen", correct: false },
                { text: "2 miljoen", correct: false },
                { text: "3 miljoen", correct: true },
                { text: "5 miljoen", correct: false }
            ]
        },
        {
            question: "Welke Sovjetleider kondigde glasnost en perestrojka aan?",
            answers: [
                { text: "Stalin", correct: false },
                { text: "Brezjnev", correct: false },
                { text: "Chroesjtsjov", correct: false },
                { text: "Gorbatsjov", correct: true }
            ]
        },
        {
            question: "Wat zorgde uiteindelijk voor een gat in het IJzeren Gordijn?",
            answers: [
                { text: "De opstand in Oost-Duitsland", correct: false },
                { text: "De opening van de grens door Hongarije", correct: true },
                { text: "De demonstraties in Leipzig", correct: false },
                { text: "De val van de Berlijnse muur", correct: false }
            ]
        },
        {
            question: "Op welke datum viel de Berlijnse muur?",
            answers: [
                { text: "9 november 1989", correct: true },
                { text: "11 februari 1990", correct: false },
                { text: "13 augustus 1986", correct: false },
                { text: "3 oktober 1987", correct: false }
            ]
        },
        {
            question: "Wat was een directe oorzaak van de val van de Berlijnse muur?",
            answers: [
                { text: "Massale protesten", correct: true },
                { text: "Een economische crisis", correct: false },
                { text: "De Brezjnev-doctrine", correct: false },
                { text: "De steun van Frankrijk", correct: false }
            ]
        },
        {
            question: "Wat gebeurde er op 3 oktober 1990?",
            answers: [
                { text: "Duitsland werd herenigd", correct: true },
                { text: "De muur werd volledig gesloopt", correct: false },
                { text: "De DDR bleef onafhankelijk", correct: false },
                { text: "De Sovjet-Unie accepteerde communisme in Duitsland", correct: false }
            ]
        },
        {
            question: "Welke vier zuilen waren er in Nederland voor de Tweede Wereldoorlog?",
            answers: [
                { text: "Katholieken, protestanten, liberalen, communisten", correct: false },
                { text: "Katholieken, protestanten, socialisten, liberalen", correct: true },
                { text: "Katholieken, protestanten, socialisten, nationalisten", correct: false },
                { text: "Katholieken, liberalen, communisten, anarchisten", correct: false }
            ]
        },
        {
            question: "Wat was de (voornaamste) reden voor Nederland om zich na de Tweede Wereldoorlog aan te sluiten bij de NAVO?",
            answers: [
                { text: "Het versterken van de economie", correct: false },
                { text: "Bescherming tegen de communisten", correct: true },
                { text: "Toegang tot de Amerikaanse markt", correct: false },
                { text: "Vermijden van een nieuwe oorlog met Duitsland", correct: false }
            ]
        },
        {
            question: "Wat hield de geleide loonpolitiek van Willem Drees in?",
            answers: [
                { text: "Het beperken van werkloosheid door werk te garanderen", correct: false },
                { text: "Het beperken van lonen door de regering", correct: true },
                { text: "Het verhogen van minimumlonen om armoede te bestrijden", correct: false },
                { text: "Het toestaan van loonsverhogingen om consumptie te stimuleren", correct: false }
            ]
        },
        {
            question: "Waarom was de ontdekking van aardgas in 1959 zo belangrijk voor Nederland?",
            answers: [
                { text: "Het verlaagde de kosten van elektriciteit", correct: false },
                { text: "Het versterkte de exportpositie van Nederland", correct: false },
                { text: "Het maakte Nederland een van de rijkste landen in Europa", correct: true },
                { text: "Het hielp bij de wederopbouw na de oorlog", correct: false }
            ]
        },
        {
            question: "Welke uitkering werd in 1957 ingevoerd als onderdeel van de verzorgingsstaat?",
            answers: [
                { text: "AOW", correct: true },
                { text: "WAO", correct: false },
                { text: "Bijstand", correct: false },
                { text: "Kinderbijslag", correct: false }
            ]
        },
        {
            question: "Welke maatschappelijke verandering droeg het meest bij aan de ontzuiling?",
            answers: [
                { text: "De introductie van reclame op televisie", correct: false },
                { text: "De groei van de auto-industrie", correct: false },
                { text: "Het wonen in nieuwe gemengde wijken", correct: true },
                { text: "Het stijgen van lonen", correct: false }
            ]
        },
        {
            question: "Wat was een kenmerk van de Nozems in de jaren 50?",
            answers: [
                { text: "Ze gingen veel naar feestjes, en deden veel drugs", correct: false },
                { text: "Ze droegen nette kleding en waren erg politiek", correct: false },
                { text: "Ze waren opstandig, droegen leren jassen en reden brommers", correct: true },
                { text: "Ze richtten zich op klassieke muziek en kunst", correct: false }
            ]
        },
        {
            question: "Welke technologische verandering droeg bij aan de toename van consumptie in de jaren 60?",
            answers: [
                { text: "De uitvinding van de computer", correct: false },
                { text: "De introductie van zelfbedieningswinkels", correct: true },
                { text: "De groei van de advertenties", correct: false },
                { text: "De ontwikkeling van kernenergie", correct: false }
            ]
        },
        {
            question: "Wat was een belangrijke reden voor de komst van Surinamers naar Nederland in 1975?",
            answers: [
                { text: "De onafhankelijkheid van Suriname", correct: true },
                { text: "De groeiende economie in Nederland", correct: false },
                { text: "De arbeid in Nederland", correct: false },
                { text: "De politieke onrust in Suriname", correct: false }
            ]
        },
        {
            question: "Waarom werd het poldermodel in de jaren 80 als succesvol beschouwd?",
            answers: [
                { text: "Het zorgde voor meer sociale gelijkheid", correct: false },
                { text: "Het leidde tot overleg tussen werkgevers, vakbonden en overheid", correct: true },
                { text: "Het stimuleerde internationale handel", correct: false },
                { text: "Het verminderde de uitgaven aan de verzorgingsstaat", correct: false }
            ]
        },
        {
            question: "Welke maatregel zorgde voor een groeiende individualisering in Nederland?",
            answers: [
                { text: "De invoering van de anticonceptiepil", correct: false },
                { text: "Het legaliseren van het homohuwelijk", correct: false },
                { text: "Het verlagen van lonen", correct: false },
                { text: "De opkomst van het internet", correct: true }
            ]
        },
        {
            question: "Waarom werden de kruisraketten in Nederland uiteindelijk niet geplaatst?",
            answers: [
                { text: "Massaal protest", correct: false },
                { text: "Internationale afspraken tussen de VS en de Sovjet-Unie", correct: true },
                { text: "Een beslissing van de Verenigde Naties", correct: false },
                { text: "Een tekort aan financiële middelen", correct: false }
            ]
        },
        {
            question: "Wat was een gevolg van de economische crisis in de jaren 80?",
            answers: [
                { text: "Een daling in werkloosheid", correct: false },
                { text: "Strengere regels voor de WAO-uitkering", correct: true },
                { text: "De uitbreiding van de verzorgingsstaat", correct: false },
                { text: "Een stijging in de lonen", correct: false }
            ]
        },
        {
            question: "Wat was een kenmerk van de punkbeweging in Nederland?",
            answers: [
                { text: "Optimisme en vreugde over de toekomst", correct: false },
                { text: "Afkeer van gezag en een “no future”-mentaliteit", correct: true },
                { text: "Focus op muziek en kunst zonder politieke boodschap", correct: false },
                { text: "Traditionele kledingstijlen en normen", correct: false }
            ]
        },
        {
            question: "Wat was een van de (belangrijkste) oorzaken van de woningnood in de jaren 80?",
            answers: [
                { text: "De groei van de bevolking", correct: true },
                { text: "De vernietiging van woningen tijdens de oorlog", correct: false },
                { text: "De opkomst van de kraakbeweging", correct: false },
                { text: "De stijgende immigratie", correct: false }
            ]
        },
        {
            question: "Wat maakte Nederland in 2001 uniek op het gebied van wetgeving?",
            answers: [
                { text: "Het toestaan van euthanasie", correct: true },
                { text: "Het invoeren van een universeel basisinkomen", correct: false },
                { text: "Het beperken van immigratie", correct: false },
                { text: "Het verhogen van de minimumlonen", correct: false }
            ]
        },
        {
            question: "Welke gebeurtenis vergrootte de polarisatie in Nederland in 2001?",
            answers: [
                { text: "De moord op Pim Fortuyn", correct: false },
                { text: "De aanslagen van 11 september in Amerika", correct: true },
                { text: "De uitbreiding van de EU", correct: false },
                { text: "De economische crisis", correct: false }
            ]
        },
        {
            question: "Wat was een kenmerk van de gabbercultuur in Nederland?",
            answers: [
                { text: "Protest tegen racisme", correct: false },
                { text: "Elektronische muziek en feesten", correct: true },
                { text: "Vredelievende idealen", correct: false },
                { text: "Verzet tegen woningnood", correct: false }
            ]
        },
        {
            question: "Waarom was de invoering van de euro belangrijk voor Nederland?",
            answers: [
                { text: "Het maakte handel beter binnen Europa", correct: true },
                { text: "Het verlaagde de nationale schuld", correct: false },
                { text: "Het verhoogde de koopkracht van de Nederlanders", correct: false },
                { text: "Het maakte Nederland onafhankelijker van de EU", correct: false }
            ]
        },
        {
            question: "Welke partij had in de jaren 90 een sterk liberalistische visie?",
            answers: [
                { text: "CDA", correct: false },
                { text: "VVD", correct: true },
                { text: "PvdA", correct: false },
                { text: "D66", correct: false }
            ]
        },
        {
            question: "Welke rol speelde Nederland in de val van Srebrenica tijdens de burgeroorlog in Bosnië?",
            answers: [
                { text: "Nederland hielp bij het evacueren van alle inwoners van de stad", correct: false },
                { text: "Dutchbat-soldaten faalden in het beschermen van een VN-veilige zone", correct: true },
                { text: "Nederland steunde de Bosnische Serviërs actief", correct: false },
                { text: "Het Nederlandse leger weigerde deel te nemen aan de VN-missie", correct: false }
            ]
        },
        {
            question: "Wat was een belangrijk gevolg van het Verdrag van Maastricht in 1992?",
            answers: [
                { text: "Nederland kreeg een leidende rol in de NAVO", correct: false },
                { text: "De oprichting van de EU en de invoering van de euro", correct: true },
                { text: "Nederland trad uit de Europese Gemeenschap", correct: false },
                { text: "Het Schengenverdrag werd geannuleerd", correct: false }
            ]
        },
        {
            question: "Wat was een belangrijk kenmerk van de punkbeweging in Nederland?",
            answers: [
                { text: "Hun haat tegen communistische politieke partijen", correct: false },
                { text: "Hun vreedzame protesten tegen woningnood", correct: false },
                { text: "Hun harde muziek en protest tegen gezag", correct: true },
                { text: "Hun strikte naleving van traditionele normen en waarden", correct: false }
            ]
        },
        {
            question: "Waarom werd de kraakbeweging in Nederland opgericht?",
            answers: [
                { text: "Om meer aandacht te vragen voor milieuproblemen", correct: false },
                { text: "Om leegstaande panden te bezetten vanwege woningnood", correct: true },
                { text: "Om de Nederlandse monarchie te versterken", correct: false },
                { text: "Om te protesteren tegen de toename van immigranten", correct: false }
            ]
        },
        {
            question: "Wat veroorzaakte de multiculturele samenleving in Nederland na 1990?",
            answers: [
                { text: "Het verlaat van Nederlanders naar andere landen", correct: false },
                { text: "Een stijging van het aantal migranten, asielzoekers en arbeidsmigranten", correct: true },
                { text: "Een verbod op grenscontroles binnen Europa", correct: false },
                { text: "De afschaffing van alle religieuze scholen in Nederland", correct: false }
            ]
        },
        {
            question: "Wat was de directe aanleiding voor de moord op Pim Fortuyn in 2002?",
            answers: [
                { text: "Zijn felle kritiek op het Nederlandse onderwijssysteem", correct: false },
                { text: "Zijn radicale standpunten over klimaatverandering", correct: false },
                { text: "Zijn uitspraken over de islam als 'achterlijke cultuur'", correct: true },
                { text: "Zijn steun aan de NAVO en de VS in conflicten", correct: false }
            ]
        },
        {
            question: "Wat veroorzaakte de economische crisis van 2008 in Nederland?",
            answers: [
                { text: "Een sterke toename van de werkgelegenheid", correct: false },
                { text: "Problemen in de financiële sector en dalende huizenprijzen", correct: true },
                { text: "De afname van immigranten uit Oost-Europa", correct: false },
                { text: "Het instorten van de olieprijzen", correct: false }
            ]
        },
        {
            question: "Welke verandering onderging Nederland in 1985 door het Schengenverdrag?",
            answers: [
                { text: "Het aantal immigranten nam drastisch af door strengere grenscontroles", correct: false },
                { text: "Onderlinge grenscontroles werden afgeschaft, wat vrij reizen mogelijk maakte", correct: true },
                { text: "Nederland sloot zijn grenzen tijdelijk vanwege economische onzekerheid", correct: false },
                { text: "Het Schengenverdrag zorgde ervoor dat Nederland uit de EU stapte", correct: false }
            ]
        },
        {
            question: "Wat was de rol van Nederland in de vorming van de Europese Unie?",
            answers: [
                { text: "Nederland tekende het Verdrag van Maastricht, dat leidde tot de oprichting van de EU", correct: true },
                { text: "Nederland weigerde de euro in te voeren tijdens de onderhandelingen", correct: false },
                { text: "Nederland gaf leiding aan het verdrag van Schengen maar sloot zich niet aan bij de EU", correct: false },
                { text: "Nederland richtte de EU samen met alleen Frankrijk op", correct: false }
            ]
        },
        {
            question: "Waarom werd Nederland internationaal gezien als tolerant na 2000?",
            answers: [
                { text: "Door de invoering van wetten zoals het homohuwelijk en de euthanasiewet", correct: true },
                { text: "Door het afschaffen van het verdrag van Schengen", correct: false },
                { text: "Door zijn rol als leider in het Europese milieubeleid", correct: false },
                { text: "Door een verbod op discriminatie in alle publieke sectoren", correct: false }
            ]
        },
        {
            question: "Wat was de eerste blijvende Engelse kolonie in Amerika?",
            answers: [
                { text: "New York", correct: false },
                { text: "Virginia", correct: true },
                { text: "Massachusetts", correct: false },
                { text: "Pennsylvania", correct: false }
            ]
        },
        {
            question: "Wanneer arriveerden de Engelsen in Nieuw Nederland?",
            answers: [
                { text: "1585", correct: false },
                { text: "1607", correct: false },
                { text: "1664", correct: true },
                { text: "1700", correct: false }
            ]
        },
        {
            question: "Wie was de koning die bijna de hele oostkust van Noord-Amerika in bezit nam?",
            answers: [
                { text: "Hendrik VIII", correct: false },
                { text: "Karel II", correct: true },
                { text: "Jacobus I", correct: false },
                { text: "Elizabeth I", correct: false }
            ]
        },
        {
            question: "Wat was het belangrijkste gevolg voor de inheemse bevolking van de kolonisatie van Amerika?",
            answers: [
                { text: "Ze stierf massaal door Europese ziektes", correct: true },
                { text: "Ze kregen meer rechten", correct: false },
                { text: "Ze profiteerden van de handel met de kolonisten", correct: false },
                { text: "Ze werden geassimileerd in de Engelse cultuur", correct: false }
            ]
        },
        {
            question: "Waarom koloniseerde de Engelsen Barbados in 1627?",
            answers: [
                { text: "Voor nieuw grondgebied", correct: false },
                { text: "Voor de teelt van tabak", correct: true },
                { text: "Voor de handel in specerijen", correct: false },
                { text: "In de zoektocht naar goud", correct: false }
            ]
        },
        {
            question: "Wat werd de belangrijkste teelt op de suikerplantages van het Caribisch gebied?",
            answers: [
                { text: "Katoen", correct: false },
                { text: "Suiker", correct: true },
                { text: "Tabak", correct: false },
                { text: "Mais", correct: false }
            ]
        },
        {
            question: "Vanaf welk jaar werd de Engelse trans-Atlantische driehoekshandel gereguleerd door de Royal African Company?",
            answers: [
                { text: "1600", correct: false },
                { text: "1672", correct: true },
                { text: "1750", correct: false },
                { text: "1800", correct: false }
            ]
        },
        {
            question: "Welke activiteit was het belangrijkste voor de Engelse koloniën in het zuiden van Amerika?",
            answers: [
                { text: "Slavenhandel", correct: false },
                { text: "Oorlogen tegen de Fransen", correct: false },
                { text: "Plantages en export van goederen", correct: true },
                { text: "Visserij en scheepsbouw", correct: false }
            ]
        },
        {
            question: "Wat leidde in 1773 tot de Boston Tea Party?",
            answers: [
                { text: "Het verlies van de Amerikaanse onafhankelijkheid", correct: false },
                { text: "De oorlog tegen de Fransen", correct: false },
                { text: "Het protest tegen de slavenhandel", correct: false },
                { text: "De belasting op thee door de Engelse overheid", correct: true }
            ]
        },
        {
            question: "Welke ideologie was belangrijk voor de Amerikaanse Revolutie?",
            answers: [
                { text: "Absolutisme", correct: false },
                { text: "Liberalisme", correct: true },
                { text: "Communisme", correct: false },
                { text: "Feodalisme", correct: false }
            ]
        },
        {
            question: "Wat was het belangrijkste argument tegen de belastingheffing door Groot-Brittannië in de Amerikaanse koloniën?",
            answers: [
                { text: "Er was te veel belasting op suiker", correct: false },
                { text: "De koloniën wilden geen belastingen betalen voor de oorlog", correct: false },
                { text: "De koloniën hadden geen vertegenwoordiging in het Britse parlement", correct: true },
                { text: "De belasting was alleen gericht op de rijke kolonisten", correct: false }
            ]
        },
        {
            question: "In welk jaar werd de Amerikaanse onafhankelijkheid officieel uitgeroepen?",
            answers: [
                { text: "1776", correct: true },
                { text: "1775", correct: false },
                { text: "1781", correct: false },
                { text: "1783", correct: false }
            ]
        },
        {
            question: "In welk jaar werd slavernij in Groot-Brittannië afgeschaft?",
            answers: [
                { text: "1776", correct: false },
                { text: "1807", correct: false },
                { text: "1833", correct: true },
                { text: "1865", correct: false }
            ]
        },
        {
            question: "Wat was de belangrijkste reden voor de afschaffing van de slavenhandel in Groot-Brittannië in 1807?",
            answers: [
                { text: "De opstanden in de Cariben", correct: false },
                { text: "De invloed van abolitionistische bewegingen", correct: true },
                { text: "De afname van de vraag naar katoen", correct: false },
                { text: "De verlies van de Slaven in Amerika", correct: false }
            ]
        },
        {
            question: "In welk jaar werd slavernij verboden in het Britse rijk?",
            answers: [
                { text: "1776", correct: false },
                { text: "1807", correct: false },
                { text: "1833", correct: true },
                { text: "1865", correct: false }
            ]
        },
        {
            question: "Wat was het belangrijkste gevolg van de Britse kolonisatie van India?",
            answers: [
                { text: "Het versterkte de macht van de lokale vorsten", correct: false },
                { text: "Groot-Brittannië kreeg toegang tot waardevolle grondstoffen", correct: true },
                { text: "India werd onafhankelijk in de 19e eeuw", correct: false },
                { text: "De cultuur van India werd volledig vernietigd", correct: false }
            ]
        },
        {
            question: "Welke organisatie richtte Groot-Brittannië op voor de handel in India?",
            answers: [
                { text: "De West-Indische Compagnie", correct: false },
                { text: "De British India Company", correct: false },
                { text: "De Royal African Company", correct: false },
                { text: "De East India Company", correct: true }
            ]
        },
        {
            question: "Wat was het Verdrag van Allahabad (1765)?",
            answers: [
                { text: "Het legde de grenzen van India vast", correct: false },
                { text: "Het was een handelsakkoord tussen Groot-Brittannië en Frankrijk", correct: false },
                { text: "Het gaf Groot-Brittannië de macht over Bengalen", correct: true },
                { text: "Het gaf India onafhankelijkheid van Groot-Brittannië", correct: false }
            ]
        },
        {
            question: "Welke gebeurtenis leidde tot het directe Britse gezag over India in 1858?",
            answers: [
                { text: "De Slag bij Plassey", correct: false },
                { text: "De opstand van 1857", correct: true },
                { text: "De aanleg van het spoorwegnet", correct: false },
                { text: "De afschaffing van de slavernij", correct: false }
            ]
        },
        {
            question: "Wie werd keizer van India na de opstand van 1857?",
            answers: [
                { text: "Koningin Victoria", correct: true },
                { text: "Mahatma Gandhi", correct: false },
                { text: "Albert Edward", correct: false },
                { text: "James Watt", correct: false }
            ]
        },
        {
            question: "Wat was een belangrijke oorzaak van de Indiase opstand van 1857?",
            answers: [
                { text: "De invoering van Engelse wetten en belastingtarieven", correct: false },
                { text: "De aanwezigheid van Britse soldaten in India", correct: false },
                { text: "Het beleid van het forceren van westerse religie en cultuur", correct: true },
                { text: "De strijd om de controle over de theeplantages", correct: false }
            ]
        },
        {
            question: "Welke technologie werd in India aangelegd in 1857 en hielp de Britse controle te versterken?",
            answers: [
                { text: "Het elektriciteitsnetwerk", correct: false },
                { text: "Het spoorwegnet", correct: true },
                { text: "De telegraaflijnen", correct: false },
                { text: "Het waterdistributiesysteem", correct: false }
            ]
        },
        {
            question: "Wat was de belangrijkste industrie die Groot-Brittannië ontwikkelde in India in de 19e eeuw?",
            answers: [
                { text: "Katoen", correct: false },
                { text: "Jute", correct: false },
                { text: "Textiel", correct: true },
                { text: "Thee", correct: false }
            ]
        },
        {
            question: "Wat was een belangrijk gevolg van de Britse industrialisatie voor India?",
            answers: [
                { text: "India werd een rijke natie", correct: false },
                { text: "India verloor zijn industriële capaciteiten", correct: true },
                { text: "India profiteerde van Europese fabrieken", correct: false },
                { text: "India ontwikkelde zijn eigen textielindustrie", correct: false }
            ]
        },
        {
            question: "Wat was het doel van de Reformatie van 1832 in Groot-Brittannië?",
            answers: [
                { text: "Meer rechten voor de arbeidersklasse", correct: false },
                { text: "Verbetering van het kiesrecht voor industriële steden", correct: true },
                { text: "Afschaffing van de slavernij", correct: false },
                { text: "Verhogen van de belastingtarieven", correct: false }
            ]
        },
        {
            question: "Wat was een belangrijke uitvinding van James Watt in de industriële revolutie?",
            answers: [
                { text: "De Spinning Jenny", correct: false },
                { text: "De stoommachine", correct: true },
                { text: "De telegraaf", correct: false },
                { text: "De loep", correct: false }
            ]
        },
        {
            question: "Hoeveel mensen woonden er in Groot-Brittannië in 1900?",
            answers: [
                { text: "10 miljoen", correct: false },
                { text: "30 miljoen", correct: true },
                { text: "6 miljoen", correct: false },
                { text: "30 miljoen", correct: true }
            ]
        },
        {
            question: "Wat was een belangrijke economische factor die Groot-Brittannië ondersteunde tijdens de industriële revolutie?",
            answers: [
                { text: "Het monopolie op katoen", correct: true },
                { text: "De afname van de bevolkingsomvang", correct: false },
                { text: "De invoer van goedkope arbeidskrachten", correct: false },
                { text: "De lage belastingen voor fabrikanten", correct: false }
            ]
        },
        {
            question: "Welke rol speelde de Royal Navy in het Britse imperialisme?",
            answers: [
                { text: "Ze beschermden de grenzen van Groot-Brittannië", correct: false },
                { text: "Ze bewaakten de zeehandel en het koloniale bezit", correct: true },
                { text: "Ze voerden de handel uit tussen de koloniën", correct: false },
                { text: "Ze veroverden nieuwe landen voor Groot-Brittannië", correct: false }
            ]
        },
        {
            question: "Wat was een belangrijk gevolg van de industriële revolutie voor de Britse samenleving?",
            answers: [
                { text: "De afname van de stedelijke bevolking", correct: false },
                { text: "Een toename van de werkloosheid", correct: false },
                { text: "De groei van de arbeidersklasse en verstedelijking", correct: true },
                { text: "De afname van de productie in de landbouw", correct: false }
            ]
        }
    ]
}
Object.prototype.removeItem = function (key) {
    if (!this.hasOwnProperty(key))
       return
    if (isNaN(parseInt(key)) || !(this instanceof Array))
       delete this[key]
    else
       this.splice(key, 1)
};
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
let bttId;
let rightAnswers = 0;
let randomNum = 0;
let questionNumber = 1;
let questionNumberElement = document.getElementById("qNum");
let questionShow;
function randomQuestion(){
    randomNum = Math.random() * questions.length;
    randomNum = Math.floor(randomNum);
    questionShow = document.getElementById("question");
    questionShow.innerHTML = questions[randomNum].question
    answersShow = document.getElementsByClassName("btt");
    for (let i = 0; i < answersShow.length; i++){
        answersShow[i].innerHTML = questions[randomNum].answers[i].text
        document.body.style.pointerEvents = "all";
    }
};

randomQuestion();

function nextQuestion(){
    if(questionNumber < 20){
        questionNumber+=1;
        questionNumberElement.innerHTML = questionNumber;
        randomQuestion();
    }
    else{
        localStorage.setItem("score", rightAnswers.toString());
        location.replace("result.html");
    }
}
function checkAnswer(clickedAnswer){
    document.body.style.pointerEvents = "none";
    bttString = "btt" + clickedAnswer.toString();
    bttId = document.getElementById(bttString);
    if(questions[randomNum].answers[clickedAnswer].correct == true){
        bttId.style.backgroundColor = "green";
        bttId.style.color = "white";
        rightAnswers+=1;
    }
    else{
        bttId.style.backgroundColor = "red";
        bttId.style.color = "white";
    }
    questions.removeItem(randomNum)
    sleep(2000).then(() => { 
        bttId.style.backgroundColor = "aliceblue";
        bttId.style.color = "blue";
        nextQuestion();
    });
}
