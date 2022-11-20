async function procuraCep (){
    cep = await (await fetch(`https://brasilapi.com.br/api/cep/v2/${cep}`)).json()
   console.log(cep)
    
}
procuraCep()