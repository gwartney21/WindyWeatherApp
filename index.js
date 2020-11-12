
async function getLocation(){
  const response = await fetch("https://api.opencagedata.com/geocode/v1/json?q=97459&key=96284b3b928a4567aed3c32ec2e0ab41")
  const location = await response.json();
  return location;
}

function setLocation(lat){
  let latitude = lat;

  console.log(latitude);
}

getLocation()
.then(res=>{
  let userInfo = res.results;
  userInfo.map(user => {
    let userLat = user.geometry.lat
    setLocation(userLat);
  })
})
