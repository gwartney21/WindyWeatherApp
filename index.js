
let zipcode = "Coos Bay OR";
let locations; 

function getUserInput(){
	
 return; 
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

getLocation(zipcode)

.then(data=>{
 
 setLocation(data)

   .then(data=>{
   		
	})
})


