<!-- map code here -->
{
	 "use strict";
		 
	// base maps
	    var tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
						maxZoom: 20,
						attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
					});
       const key = 'pRA400aOhw0IeiIEAtBt';
		 
		var maps1888 = L.tileLayer(`https://api.maptiler.com/tiles/uk-osgb10k1888/{z}/{x}/{y}.jpg?key=pRA400aOhw0IeiIEAtBt`,
		{ //style URL
        tileSize: 512,
        zoomOffset: -1,
        minZoom: 1,
        attribution: "\u003ca href=\"https://www.maptiler.com/copyright/\" target=\"_blank\"\u003e\u0026copy; MapTiler\u003c/a\u003e \u003ca href=\"https://www.openstreetmap.org/copyright\" target=\"_blank\"\u003e\u0026copy; OpenStreetMap contributors\u003c/a\u003e",
        crossOrigin: true}
		);
		
		var maps1900 = L.tileLayer(`https://api.maptiler.com/tiles/uk-osgb1888/{z}/{x}/{y}?key=pRA400aOhw0IeiIEAtBt`,
		{ //style URL
        tileSize: 512,
        zoomOffset: -1,
        minZoom: 1,
        attribution: "\u003ca href=\"https://www.maptiler.com/copyright/\" target=\"_blank\"\u003e\u0026copy; MapTiler\u003c/a\u003e \u003ca href=\"https://www.openstreetmap.org/copyright\" target=\"_blank\"\u003e\u0026copy; OpenStreetMap contributors\u003c/a\u003e",
        crossOrigin: true}
		);
		
		var maps1950= L.tileLayer(`https://api.maptiler.com/tiles/uk-osgb25k1937/{z}/{x}/{y}.jpg?key=pRA400aOhw0IeiIEAtBt`,
		{ //style URL
        tileSize: 512,
        zoomOffset: -1,
        minZoom: 1,
        attribution: "\u003ca href=\"https://www.maptiler.com/copyright/\" target=\"_blank\"\u003e\u0026copy; MapTiler\u003c/a\u003e \u003ca href=\"https://www.openstreetmap.org/copyright\" target=\"_blank\"\u003e\u0026copy; OpenStreetMap contributors\u003c/a\u003e",
        crossOrigin: true}
		);
		
		var landranger = L.tileLayer(`https://api.maptiler.com/tiles/uk-osgb63k1955/{z}/{x}/{y}.jpg?key=pRA400aOhw0IeiIEAtBt`,
		{ //style URL
        tileSize: 512,
        zoomOffset: -1,
        minZoom: 1,
        attribution: "\u003ca href=\"https://www.maptiler.com/copyright/\" target=\"_blank\"\u003e\u0026copy; MapTiler\u003c/a\u003e \u003ca href=\"https://www.openstreetmap.org/copyright\" target=\"_blank\"\u003e\u0026copy; OpenStreetMap contributors\u003c/a\u003e",
        crossOrigin: true}
		);
};


		// set up map
		var HisImp = [52.2500, 0.1042];
		var map = L.map('map', {
			center: HisImp,
			zoom: 15,
			// layers which are on by default
			layers: [tiles]
			});		
		// add Layer Control
		var baseMaps = { 
						"OpenStreetMap" : tiles,
						"1888 OS" : maps1888,
						"1900 OS": maps1900,
						"1950 OS" : maps1950,
						"Landranger 7 1955" : landranger
  					}
		// available layers
		var overLays = { "ponds : ponds
						}
	
        var layerControl = L.control.layers(baseMaps, overLays).addTo(map);


