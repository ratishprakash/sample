
const api_url='https://api.wheretheiss.at/v1/satellites/25544'
async function catchjson () {
  const api_url='https://api.wheretheiss.at/v1/satellites/25544'
  const response = await fetch(api_url);
  const myJson = await response.json();
  console.log(myJson.latitude)
  const {latitude,longitude}= myJson;  
  document.getElementById("lat").textContent=latitude
  // document.getElementById("lon").textContent=myJson.longitude
  // const name=JSON.parse(myJson);
  // document.getElementById("demo").innerHTML =myJson[1].address.street;
  // for (int)
}
catchjson().catch(error =>{
  console.log('error');
  console.error(error);
});
document.getElementById("demo").innerHTML ="hello";