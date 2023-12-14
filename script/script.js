let map;
let markers = [];
let travelStories = [
    // Sample story with coordinates
    {
        title: "My Trip to Paris",
        location: "Paris, France",
        lat: 48.8566,
        lon: 2.3522,
        date: "2023-04-15",
        description: "A beautiful journey through Paris...",
        photo: "path_to_photo.jpg",
        moreInfoUrl: "path_to_more_info.html"
    },
    // More stories...
];

function initMap() {
    map = new google.maps.Map(document.getElementById('mapid'), {
        center: { lat: 40.6114, lng: -73.9332 }, 
        zoom: 13
    });

    addStoryMarkersToMap();
}

function addStoryMarkersToMap() {
    travelStories.forEach(story => {
        let marker = new google.maps.Marker({
            position: { lat: story.lat, lng: story.lon },
            map: map,
            title: story.title
        });

        let infoWindow = new google.maps.InfoWindow({
            content: `<h3>${story.location}</h3><p>${story.title}</p>`
        });

        marker.addListener('click', function() {
            infoWindow.open(map, marker);
        });

        markers.push(marker);
    });
}

document.addEventListener('DOMContentLoaded', () => {
});

