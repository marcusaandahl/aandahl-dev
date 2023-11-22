// https://rapidapi.com/MeteosourceWeather/api/ai-weather-by-meteosource

export async function fetchWeatherData() {
    const lat: number = 0.0
    const lon: number = 0.0
    const units: "auto"|"metric"|"us"|"uk"|"ca" = "auto"

    const url = `https://ai-weather-by-meteosource.p.rapidapi.com/current?lat=${lat}&lon=${lon}&timezone=auto&language=en&units=${units}`
    const options = {
        // method: 'GET',
        headers: {
            'X-RapidAPI-Key': process.env.RAPID_API_KEY,
            'X-RapidAPI-Host': 'ai-weather-by-meteosource.p.rapidapi.com'
        }
    };
}