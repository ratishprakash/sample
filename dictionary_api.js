// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Host': 'twinword-word-graph-dictionary.p.rapidapi.com',
// 		'X-RapidAPI-Key': 'a2b3696b06msh3643087001677ecp1a5298jsnc61e31b57145'
// 	}
// };
var uni_count=0
async function get_meaning(query){
const api_url="https://www.googleapis.com/books/v1/volumes?q="+query
const response = await fetch(api_url+"&maxResults=40")
// const response2= await fetch(api_url+"&startIndex=10")
const myJson= await response.json()
// const myJson2= await response2.json()
// console.log(myJson.items[9])
console.log(myJson)
// console.log(myJson2)
for(var i=0;i<40;i++){
    const tit=document.createElement("SPAN")
    tit.setAttribute("id","title"+i)
    document.body.appendChild(tit)
    const var1 = document.createElement("br")
    document.body.appendChild(var1)


    const aut=document.createElement("SPAN")
    aut.setAttribute("id","author"+i)
    document.body.appendChild(aut)
    const var2=document.createElement("br")
    document.body.appendChild(var2)

    const pub=document.createElement("SPAN")
    pub.setAttribute("id","pub_date"+i)
    document.body.appendChild(pub)
    const var3=document.createElement("br")
    document.body.appendChild(var3)

    const title=myJson.items[i].volumeInfo.title
    const author=myJson.items[i].volumeInfo.authors
    const pub_date=myJson.items[i].volumeInfo.publishedDate
    // const author=myJson.items
    document.getElementById("title"+i).textContent="Title= "+title
    document.getElementById("author"+i).textContent="Author= "+author
    document.getElementById("pub_date"+i).textContent="Published Date= "+pub_date
    const line=document.createElement("hr")
    uni_count+=1
    if(uni_count<40){
        document.body.appendChild(line)
    }
    }
}

function getname(){
    const query=textbox.value
    get_meaning(query).catch(error =>{
        console.log("error")
        console.error(error)
    })
}


// .catch(err => console.error(err));