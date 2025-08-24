function letraMaiscula(texto) {
  return texto.split(" ")
              .map(p => p.charAt(0).toUpperCase() + p.slice(1))
              .join(" ");
}


async function getWeather() {
    var cidade = document.getElementById('city').value

    var resposta = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&units=metric&lang=pt_br&appid=64ed82577ced7f69cb1687f0ce536131`)

    var tempCelsius = resposta.data.main.temp
    var descricao = resposta.data.weather[0].description;
    var umidade = resposta.data.main.humidity;
    var vento = resposta.data.wind.speed;

document.getElementById('cidade').innerHTML = `🌍 ${cidade}`;
document.getElementById('temperatura').innerHTML = `🌡️ ${tempCelsius.toFixed(0)} °C`;
document.getElementById('descricao').innerHTML = `☁️ ${letraMaiscula(descricao)}`;
document.getElementById('umidade').innerHTML = `💧 Umidade: ${umidade}%`;
document.getElementById('vento').innerHTML = `💨 Vento: ${vento} km/h`;
}; 

getWeather();