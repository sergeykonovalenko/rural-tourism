function initMap() {

    let myMap;
    let element = document.querySelector('.location__map');

    if (element) {

        let options = {
            zoom: 17,
            center: {lat:46.569443, lng:30.791400},
            scrollwheel: false
        };

        // maps initialization
        myMap = new google.maps.Map(element, options);

        // marker and info-window
        let marker = new google.maps.Marker({
            position: {lat:46.569443, lng:30.791400},
            map: myMap,
            icon: '../img/base/marker.svg',
            animation: google.maps.Animation.DROP,
        });

        let InfoWindow = new google.maps.InfoWindow({
            content: `<div class="info-window">
                          <img class="info-window__img" src="img/base/object.jpg" alt="">
                          <p class="info-window__title">Условное название объекта</p>
                          <p class="info-window__subtitle">Условное название региона</p>
                      </div>`
        });

        marker.addListener('click', function () {
            InfoWindow.open(myMap, marker);
        });
    }
}
