mapboxgl.accessToken = 'pk.eyJ1IjoiY29keXN1bGxpdmFuIiwiYSI6ImNrczZmeHNtNzBjNHYydXBsMTNmdGsxZTQifQ.rS6UpwVA-FZ0bqU3sC5LlA';

navigator.geolocation.getCurrentPosition(successLoaction, errorLoaction, { enableHighAccuracy: true })

function successLoaction(position) {
    setupMap([position.coords.longitude, position.coords.latitude])
}

function errorLoaction() {
    setupMap([139.691706, 35.689487])
}

function setupMap(center) {
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: center,
        zoom: 14
    })

    const nav = new mapboxgl.NavigationControl()
    map.addControl(nav)

    var directions = new MapboxDirections({
        accessToken: mapboxgl.accessToken,
    })
    
    map.addControl(directions, 'top-left')
}

