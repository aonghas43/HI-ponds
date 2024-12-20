//<!-- map code here -->
{
	"use strict";
		 
	// base maps
	    var tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
						maxZoom: 20,
						attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> : &copy; OpenStreetMap contributors',
						crossOrigin: 'anonymous',
						referrerPolicy: 'same-origin'
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

	function pondPopupContent(feature) {
		props = feature.properties

		//Location
		//w3w
		//Location : Garden / Public space/ Other
		// Size 1. Mini, e.g. washing up bowl, bucket or old sink / 2. Small, maximum dimension 1m / 
		// 3. Medium, maximum dimension 3m / 4. Large, maximum dimension 6m
		// 5. Very Large, larger than most garden ponds
		// type formal / natural
		// surrounds : i. Paved or other hard surface / ii. Short Mowed Grass / iii. Long Grass and/or other planting
		// using Fish / Newt / Birds / Bird Nesting / Frog / Frog Spawn / Toad / Dragonflies/Damsonflies / Grass snake
//
		//return ''
		content = props["Location"]
		var long = feature.geometry.coordinates[1];
		var lat = feature.geometry.coordinates[0];
		var Streetview = '<br/><a target="_blank" alt="Google streetview in separate tab" href="http://maps.google.com/maps?q=' 
				+ long + ',' +  lat + '">Google Streetview &copy;' + '</a>';
		content = content  + Streetview
		return content

	}

	// On our map we can use different symbols to show wildlife ponds, 
	// formal ponds, large ponds, mini ponds and then show ponds with frog spawn

	// makeOptions
	function makeOptions(feature) {
		sizemap = {
			"Mini": 0.5,
			"Small" : 1,
			"Medium": 3,
			"Large" : 6,
			"Very Large" : 10
		}
		try {
		rad = sizemap[feature.properties["pond_size"] ]
		} catch(err) {
			rad = 1
		}
		 var geojsonMarkerOptions = {
				radius: rad,
				color: "#000",
				weight: 1,
				opacity: 0.9,
				fillOpacity: 0.8,
				riseOnHover: true,
				riseOffset: 500,
				alt: feature.properties.location,
				title: feature.properties.location
				};
		return  geojsonMarkerOptions
	}
	function pondMarker(feature, latlng)
	     { 

			geojsonMarkerOptions = makeOptions(feature)
			geojsonMarkerOptions["fillColor"] = "#84c823";

			return L.circleMarker(latlng, geojsonMarkerOptions);
	         
	     };

		var pondsLayer = L.geoJSON(ponds,{
		pointToLayer: pondMarker,
		attribution: 'Ponds data owned on behalf of the community by \
			<a href="https://www.higreenspaces.org/about-us">Histon and Impington Green Spaces</a>'
		}).bindPopup(function (layer) {
			var contents = pondPopupContent(layer.feature)
		 return contents;
});

		function frogpondsMarker(feature,latlng) {
			geojsonMarkerOptions = makeOptions(feature)
			geojsonMarkerOptions["color"]="#222222";
			geojsonMarkerOptions["fill"] = false
			geojsonMarkerOptions["radius"] *= 1.4
			return L.circleMarker(latlng, geojsonMarkerOptions);
	
		}
		var frogpondsLayer =  L.geoJSON(ponds,{
			pointToLayer: frogpondsMarker,
			attribution: 'Ponds data owned on behalf of the community by \
			<a href="https://www.higreenspaces.org/about-us">Histon and Impington Green Spaces</a>',
			filter: function(feature, layer) {
				return (feature.properties["Frog"] == "Y")
			}
		})

	
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
						"OpenStreetMap" : tiles
						,"OS 1:10,000/1:10,560, Great Britain, 1949-1972": uk10_1949_1972
						, "OS six-Inch 1830-1880": uk10_1830_1880
  					}
		// available layers
		var overLays = { "ponds" : pondsLayer,
						 "frogs": frogpondsLayer
						}
	
        var layerControl = L.control.layers(baseMaps, overLays).addTo(map);


