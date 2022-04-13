document.querySelector('button').addEventListener('click', getData)

function getData() {
    let token = config.MY_API_TOKEN
    let START_DATE = document.querySelector('input').value
    const BASE_URL = `https://api.nasa.gov/planetary/apod?api_key=${token}&start_date=${START_DATE}`
    fetch(BASE_URL)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            let nasaData = data[0]
            if (nasaData.media_type === 'image') {
                document.querySelector('img').src = nasaData.hdurl
                document.querySelector('img').alt = nasaData.title
            } else if ( nasaData.media_type === 'video') {
                document.querySelector('iframe').src = nasaData.url
            }
            document.querySelector('h3').innerText = nasaData.explanation
        })


}