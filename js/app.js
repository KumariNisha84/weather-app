document.getElementById('search-btn').addEventListener('click',function(){
    const city  = document.getElementById('city').value;

    document.getElementById('city-name').textContent="City:"+city;
    document.getElementById('temperature').textContent = "Temperature: 28C";
    document.getElementById('weather-description').textContent="Condition: Sunny";
});