/* [id ja, id nee, "vraag"] */
const questions = [
	/*Hoofdvragen*/
		/*0*/[[0,0],0," "],
		/*1*/[[0,2],[2,1,2,3], "Is het een plantje met bladeren en zit het vast in de grond?"],
		/*2*/[[0,3],[0,8], "Heeft de plant bloemen?"],
		/*3*/[[0,18],[0,4], "Zijn de bloemen blauw of paars?"],
		/*4*/[[0,20], [0,5], "Zijn de bloemen helemaal geel?"],
		/*5*/[[0,29], [0,6], "Zijn de bloemen roze?"],
		/*6*/[[0,35], [0,7], "zijn de bloemen wit of wit met geel?"],
		/*7*/[[2,42,43,44],[0,43], "Bladeren in een rozet en bloeiwijze als een aar (kaarsje)?"],
		/*8*/[[1,5], [0,9], "Zijn de bladeren schubachtig afgeplat, eirond en vlezig en staan dze dicht op elkaar rondom de stengel?"],
		/*9*/[[0,46], [0,10], "Heeft de plant kruipende of liggende stengels die al of niet aan het einde omhoog buigen?"],
		/*10*/[[0,47], [0,11], "Heeft de plant wit of oranje melksap? (komt tevoorschijn bij afbreken stukje stengel of blad)"],
		/*11*/[[0,53], [0,12], "Heeft de plant een duidelijke bladrozet die min of meer op de grond ligt?"],
		/*12*/[[0,58], [0,13], "Heeft de plant lijnvormige bladeren?"],
		/*13*/[[2,10,11], [0,14], "Heeft de plant handvormige samengestelde bladeren?"],
		/*14*/[[0,60], [0,15], "Heeft de plant ronde bladeren?"],
		/*15*/[[1,12], [0,16], "Geven de bladeren een branderig gevoel bij het aanraken?"],
		/*16*/[[1,13], [0,17], "Zijn de bladeren driehoekig tot rond in omtrek, maar diep ingesneden en lijkt het alsof de bladstelen uit 'e'en punt in de grond komen?"],
		/*17*/[[2,45, 48], [3], "Is het een gras, d.w.z. stengels met knopen, bladeren met een bladschede en bladschijf?"],
	/*Subvragen*/
		/*3*/
			/*18-a*/[[1,2], [0,19], "Bloem met helpje (bolle 'bovenlip') en onderlip (lipbloemige), eerder paars dan blauw. Stengel vierkantig, vaak kruipend. Niervormige bladeren staan twee aan twee tegenover elkaar?"],
			/*19-b*/[[1,3], [1,4], "Bloemen piepklein (2-3 mm), verstopt tussen kleinee bladeren en helderblauw?"],
		/*4*/
			/*20-a*/[[1,5], [0,21], "Zijn de bladeren klein en schubachtig afgeplat, eirond en vlezig?"],
			/*21-b*/[[0,22], [0,25], "Heeft de stengel of het blad wit of oranje melksap? (komt tevoorschijn bij afbreken stukje stengel (of blad)"],
			/*22-c*/[[1,6], [0,23], "Is het melksap oranje?"],
			/*23-d*/[[1,7], [0,24], "Is het melksap wit en heeft de bloeistengel bladeren?"],
			/*24-e*/[[1,8], [0,25], "Wit melksap en alle bladeren in een rozet op de grond?"],
			/*25-f*/[[1,9], [0,26], "Lijkt het blad op een klavertje en is het roodbruin of rood aangelopen?"],
			/*26-g*/[[1,10], [0,27], "Is het blad handvormig samengesteld met 5-7 omgekeerde eironde deelblaadjes?"],
			/*27-h*/[[1,11], [0,28], "Hebben de bloemen 4 kroonbladen en staan de lijnvormige vruchtjes stijf tegen de stengel omhoog?"],
			/*28-i*/[[2, 26, 27, 28], [3], "Bloemen in een hoofdje bij elkaar (samengesteldbloemige)"],
		/*5*/
			/*29-a*/[[1,14], [0,30], "Bladeren groot en met stekels die prikken?"],
			/*30-b*/[[1,15], [0,31], "Hebben de bloemen een helm en een lip, en zijn de bladeren eirond en gekarteld, eventueel de bovenste bladen wat paars aangelopen?"],
			/*31-c*/[[1,16], [0,32], "Zijn de bladeren lijnvormig en twee aan twee tegenover elkaar staand, met een stekelige punt?"],
			/*32-d*/[[1,17], [0,33], "Is de stengel bebladerd, waarbij de bladeren tegenover elkaar staan en is het een rechtopstaande plant, vaak met zijtakken?"],
			/*33-e*/[[2, 0,9],[0,34], "Zijn de bladeren min of meer rond met kleine insnijding?"],
			/*34-f*/[[2, 13,18], [1,18], "Zijn de bladeren min of meer driehoekig van vorm met diepe insnijdingen, maar niet veervormig?"],
		/*6*/
			/*35-a*/[[1,19], [0,36], "Bloemen met 5 witte kroonbladeren en een geel hart, geen samengestelde bloem?"],
			/*36-b*/[[2,29,30,31], [0,37], "Bloemen met witte en in het midden gele bloemen (samengesteldbloemige)?"],
			/*37-c*/[[1,20], [0,38], "Plant is klein en rood aangelopen met verdikte kleine bladeren?"],
			/*38-d*/[[1,21], [0,39], "Zijn de bladeren lijnvormig en staan ze in kransen om de stengel?"],
			/*39-e*/[[2,23,32], [0,40], "Staan de bladeren twee aan twee tegenover elkaar en is heet plantje kleiner, lager dan 2cm?"],
			/*40-f*/[[2,33,34], [0,41], "Staan de bladeren twee aan twee tegenover elkaar en is de plant hoger dan 2 cm?"],
			/*41-g*/[[1,22], [0,42], "Vormen de bladen een soort schoteltje waar de bloemen in een boeketje boven uitsteken?"],
			/*42-h*/[[2,35,36,37,38,39], [2,40,41], "Zijn er goed herkenbare vruchtjes zichtbaar tijdens de bloei?"],
		/*7*/
			/*43-b*/[[0,12], [0,44], "Geven de bladeren een branderig gevoel bij het aanraken?"],
			/*44-c*/[[2,45,46,47,48], [0,45], " Is het een gras, d.w.z. stengels met knopen, bladeren met een bladsnede en een bladschijf?"],
			/*45-d*/[[1,23], [2,49,50,51, 27, 36], "Staan de bladeren twee aan twee tegenover elkaar en is het plantje lager dan 2cm?"],
		/*9*/
			/*46-a*/[[2,34,23,51,2], [0,47], "Zijn de bladeren gaaf, d.w.z. niet ingesnedenof gedeeld?"],
			/*47-b*/[[2,11,10], [0,48], "Zijn de bladeren handvormig samengesteld?"],
			/*48-c*/[[2,36,18], [3], "zijn de bladeren meervoudig gedeeld?"],
		/*10*/
			/*49-a*/[[1,6], [0,50], "Heeft de plant oranje melksap?"],
			/*50-b*/[[2,8,52], [0,51], "Heeft de plant wit melksap en een duidelijke bladrozet?"],
			/*51-c*/[[1,24], [0,52], "Heeft de plant wit melksap en omgekeerd eironde of cirkelronde blaadjes?"],
			/*52-d*/[[1,7], [3], "Heeft de plant wit melksap en langwerpige veerdelige bladeren?"],
		/*11*/
			/*53-a*/[[1,8], [0,54], "Heeft de plant een platte bladrozet en wit melksap?"],
			/*54-b*/[[2, 39, 37], [0,55], "Is het een kleine plant met een platte bladrozet en hebben de bladeren korte haartjes (loep)?"],
			/*55-c*/[[1,25], [0,56], "Is het een forse plant met een wat opstijgende bladrozet met grote prikkende bladeren?"],
			/*56-d*/[[2,42,43], [0,57], "Heeft de plant een bladrozet van duidelijk gaafrandige bladeren met doorlopende onvertakte nerven?"], 
			/*57-e*/[[2, 44, 38, 28], [3], "Plant met rozet van bladeren die niet gaafrandig zijn."],
		/*12*/
			/*58-a*/[[2, 21, 29], [0,59], "Staan de lijnvormige bladeren in kransen aan de stengel?"],
			/*59-b*/[[2,23,16], [3], "Lijnvormige bladeren staan twee aan twee tegenover elkaar."],
		/*14*/
			/*60-a*/[[2,2,4], [0,61], "Staan de bladeren langs de stengel en zijn ze klein en vlezig?"],
			/*61-b*/[[2, 0,9], [3], "Bladeren rond in omtrek en het lijkt of de bladstelen vanuit 1 punt in de grond komen."]	
]
export default questions;
