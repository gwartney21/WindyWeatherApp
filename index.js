

let locations; 

function getUserInput(){
	locations = document.getElementById("zipcode").value;
	console.log(locations)
	return locations;
}

function generateHtml(condition){
	document.getElementById("Conditions").innerHTML = condition;
}


async function getLocation(userlocation){

    let userInput = getUserInput();
	let response = await fetch(`https://api.opencagedata.com/geocode/v1/json?q=${userInput}&key=96284b3b928a4567aed3c32ec2e0ab41`);
	let data =  await response.json();
	return data;
}

async function setLocation(data){

  let latatitude = data.results[0].geometry.lat;
  let longaitude = data.results[0].geometry.lng;
  
  let userLocation = await fetch(`https://weather-proxy.freecodecamp.rocks/api/current?lat=${latatitude}&lon=${longaitude}`)

  let jsonresponse = await userLocation.json();
  
  return jsonresponse;
}

function displayWeather(){

	document.getElementById("search").addEventListener("click",()=>{
   		getLocation(zipcode)

			.then(data=>{
			 
			 setLocation(data)

			   .then(data=>{
			   		console.log(data)
			   		generateHtml(data.name);
				})
			})

   });


}

displayWeather();


