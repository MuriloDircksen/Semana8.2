let anterior = '';
let proximo = '';
let url = `https://rickandmortyapi.com/api/character`
async function procuraVivo(url){
     const rick = await ( await fetch(url)).json()
    
    
    
    for(const key in rick.results){
        console.log(rick.results[key].status)
        if(rick.results[key].status=="Alive"){
        const status = rick.results[key].name
        const baseStatus = rick.results[key].status
        const p = document.createElement('p');
        p.innerHTML=`${status}:${baseStatus}`
        document.getElementById('informacao').appendChild(p)
        }
       
}
    anterior =rick.info.prev
    proximo =rick.info.next
    resultPage();
}

let button = document.getElementById('btn');
 button.addEventListener("click", () =>{
    
    procuraVivo(url)

 })

 const nextPage = () => {
    procuraVivo(proximo);
}
const prevPage = () => {
    procuraVivo(anterior);
}

 const resultPage = () => {     
    document.getElementById("anterior").style.display = 'block';
    document.getElementById("proxima").style.display = 'block';
    if (proximo == null) {
        document.getElementById("proxima").style.display = 'none';     
    }
    if (anterior == null) {        
        document.getElementById("anterior").style.display = 'none';
    }
}