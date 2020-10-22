'use strict'

var katalogas = [
	{
		grozine:[
			
				{
					ISBN : "GR1236K",
					LeidimoMetai: "2020",
					Pavadinimas: "Mano mintys debesyse",
					PuslapiuSkaicius: 300
				},
			
				{
					ISBN : "GR1236K",
					LeidimoMetai: "2018",
					Pavadinimas: "Mano mintys debesyse",
					PuslapiuSkaicius: 300
				},
			
				{
					ISBN : "GR1236K",
					LeidimoMetai: "2018",
					Pavadinimas: "Mano mintys debesyse",
					PuslapiuSkaicius: 300
				},

			
				{
					IISBN : "GR1236K",
					LeidimoMetai: "2018",
					Pavadinimas: "Mano mintys debesyse",
					PuslapiuSkaicius: 300
				}
		]
	},
	{
		detektyvas: [

			
				{
					ISBN : "GR1236K",
					LeidimoMetai: "2018",
					Pavadinimas: "Mano mintys debesyse",
					PuslapiuSkaicius: 300
				},
			
				{
					ISBN : "GR1236K",
					LeidimoMetai: "2018",
					Pavadinimas: "Mano mintys debesyse",
					PuslapiuSkaicius: 300
				},
			
				{
					ISBN : "GR1236K",
					LeidimoMetai: "2020",
					Pavadinimas: "Mano mintys debesyse",
					PuslapiuSkaicius: 300
				},
		
				{
					IISBN : "GR1236K",
					LeidimoMetai: "2018",
					Pavadinimas: "Mano mintys debesyse",
					PuslapiuSkaicius: 300
				}
		]
	},
	{
		fantastika: [

			
				{
					ISBN : "GR1236K",
					LeidimoMetai: "2017",
					Pavadinimas: "Mano mintys debesyse",
					PuslapiuSkaicius: 300
				},
			
				{
					ISBN : "GR1236K",
					LeidimoMetai: "2016",
					Pavadinimas: "Mano mintys debesyse",
					PuslapiuSkaicius: 300
				},
			
				{
					ISBN : "GR1236K",
					LeidimoMetai: "2020",
					Pavadinimas: "Mano mintys debesyse",
					PuslapiuSkaicius: 300
				},
			
				{
					IISBN : "GR1236K",
					LeidimoMetai: "2010",
					Pavadinimas: "Mano mintys debesyse",
					PuslapiuSkaicius: 300
				}
		]
	}

]


for (var i=0; i<katalogas.length; i++) {			
	

	for (var item in katalogas[i]) {
    	
    	var no=0;

    	console.log(item + " - " + katalogas[i][item].length + " knygos:");

		for (var j=0; j<katalogas[i][item].length; j++) {


			for (let item2 in katalogas[i][item][j]) {

				if (katalogas[i][item][j][item2]==2020) {

				  	katalogas[i][item][j][item2]+=" <= Nauja knyga!";
				}

			    console.log("__" + item2 + ": " + katalogas[i][item][j][item2]);

			}
  		}	
	}
}




