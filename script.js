function getWeather() {
    const apiKey = '30cdc1c59b352087baa97f27597ebcfa';
    const city = document.getElementById('city').value;
    const weatherInfo = document.getElementById('weather-info');

    
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            const temperature = data.main.temp - 273.15; 
            const description = data.weather[0].description;
            const humidity = data.main.humidity;
            const windSpeed = data.wind.speed;
            const pressure = data.main.pressure;

            weatherInfo.innerHTML = `En ${city}, la temperatura es de ${temperature.toFixed(2)}°C y el clima es ${description}.<br>
                Humedad: ${humidity}%<br>
                Velocidad del viento: ${windSpeed} m/s<br>
                Presión atmosférica: ${pressure} hPa`;
        })
        .catch(error => {
            console.error('Hubo un error:', error);
            weatherInfo.innerHTML = 'No se pudo obtener la información meteorológica.';
        });
}
