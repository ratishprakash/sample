catchjson();
async function catchjson () {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const myJson = await response.json();
    const name=JSON.parse(myJson);
    document.getElementById("demo").innerHTML ="hello"
  }
document.getElementById("demo").innerHTML ="hello"