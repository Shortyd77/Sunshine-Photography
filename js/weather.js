async function getLiveWeather() {
  const apiKey = "4a9462f4369e9652c4161b17b203a3d5"; // OpenWeather API Key
  const city = "Oak Harbor"; 
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`;

  try {
    const response = await fetch(url); 
    if (!response.ok) throw new Error("Weather data not found");
    
    const data = await response.json(); 

    // FIXED: Changed 'temp' to 'temp-display' and added the degree symbol!
    document.getElementById('temp-display').innerText = Math.round(data.main.temp) + "°";
    document.getElementById('condition').innerText = data.weather[0].description;
    
  } catch (error) {
    console.error("Error fetching weather:", error);
    document.getElementById('home-weather').style.display = 'none'; 
  }
}

getLiveWeather();
