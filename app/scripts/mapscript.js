//<!-- map code here -->
{
	"use strict";
		 
	// base maps
	    var tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
						maxZoom: 20,
						attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
						crossOrigin: 'anonymous'
					});
     
		
	var uk10_1949_1972 = L.tileLayer('https://geo.nls.uk/mapdata3/os/britain10knationalgridnew/{z}/{x}/{y}.png', {
		maxZoom: 20,
		opacity: 0.85,
		crossOrigin: 'anonymous',
		attribution: 'Reproduced with the permission of the National Library of Scotland \
		               <a href="https://creativecommons.org/licenses/by/4.0/">CC-BY</a>'
	});

	var uk10_1830_1880 = L.tileLayer('https://mapseries-tilesets.s3.amazonaws.com/os/six-inch-cambridgeshire/{z}/{x}/{y}.png',{
		maxZoom: 20,
		opacity: 0.85,
		crossOrigin: 'anonymous',
		attribution: 'Reproduced with the permission of the National Library of Scotland \
		               <a href="https://creativecommons.org/licenses/by/4.0/">CC-BY</a>'
	});


	const key = 'pRA400aOhw0IeiIEAtBt';

	uk1880_1913 = L.tileLayer('https://api.maptiler.com/tiles/uk-osgb10k1888/{z}/{x}/{y}.jpg?key=' + key, {
		maxZoom: 17,
		opacity: 0.85,
		crossOrigin: 'anonymous',
		attribution: '\u003ca href=\"https://www.maptiler.com/copyright/\" target=\"_blank\  \
					Reproduced with the permission of the National Library of Scotland \
		               <a href="https://creativecommons.org/licenses/by/4.0/">CC-BY</a>'
	});

	var pondsLayer = L.geoJSON(ponds,{
			attribution: 'Ponds data owned on behalf of the community by \
			<a href="https://www.higreenspaces.org/about-us">Histon and Impington Green Spaces</a>'
		});

};


		// set up map
		var HisImp = [52.253815589039775, 0.10777473100461067];
		var map = L.map('map', {
			center: HisImp,
			zoom: 14,
			// layers which are on by default
			layers: [tiles]
			});		
		// add Layer Control
		var baseMaps = { 
						"OpenStreetMap" : tiles,
						"OS 1:10,000/1:10,560, Great Britain, 1949-1972": uk10_1949_1972,
						"OS six-Inch 1880-1915": uk1880_1913,
						"OS six-Inch 1830-1880": uk10_1830_1880
  					}
		// available layers
		var overLays = { "ponds" : pondsLayer
						}
	
        var layerControl = L.control.layers(baseMaps, overLays).addTo(map);


