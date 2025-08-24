fetch(`https://economia.awesomeapi.com.br/json/last/USD-BRL`).then(resposta => {
    return resposta.json()
}).then(economia =>{
    console.log(economia)
    document.getElementById("valordolar").innerHTML = "R$ " + parseFloat(economia.USDBRL.bid).toFixed(2)
    document.getElementById("highdolar").innerHTML = "R$ " + parseFloat(economia.USDBRL.high).toFixed(3)
    document.getElementById("lowdolar").innerHTML = "R$ " + parseFloat(economia.USDBRL.low).toFixed(3)
})