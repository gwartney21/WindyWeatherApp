
let locations; 

function getUserInput(){
	locations = document.getElementById("input").value;
	console.log(locations)
	return locations;
}

function generateHtml(condition,icon,location){

	document.getElementById("location").innerHTML = "The weather in " + location + " " + "is:";
	document.getElementById("Conditions").innerHTML = condition;
	document.getElementById("icon").src = icon;
}

function ClearHtml(){
	document.getElementById("input")
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




function ReturnWeatherinfo(){
	   		getLocation(locations)

			.then(data=>{
			 
			 setLocation(data)

			   .then(data=>{
			   		console.log(data)
			   		generateHtml(data.weather[0].description,data.weather[0].icon,data.name);

				})
			   .catch(error => console.log('Oops something went wrong', error))

			})
}

function displayWeather(){

	document.getElementById("search").addEventListener("click",(event)=>{
		ReturnWeatherinfo();
		 document.getElementById("input").value = "" ;
   });
   
}

displayWeather();


