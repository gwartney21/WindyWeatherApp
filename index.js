
let zipcode = 97420;

fetch(`https://api.opencagedata.com/geocode/v1/json?q=${zipcode}&key=96284b3b928a4567aed3c32ec2e0ab41`)
.then(response=>{
  return response.json();
}).then(data=>{

  let latatitude = data.results[0].geometry.lat;
  let longaitude = data.results[0].geometry.lng;

  return fetch(`https://weather-proxy.freecodecamp.rocks/api/current?lat=${latatitude}&lon=${longaitude}`)

}).then(response =>{
  return response.json();
}).then(data=>{
  console.log(data);
})
