webpackJsonp([2],{"15VZ":function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,"h1[data-v-57509004]{font-weight:200;font-size:48px;font-size:3rem;margin-bottom:30px;margin-top:0;text-align:center}h2[data-v-57509004]{text-align:center;margin:20px 0;font-weight:600}h3[data-v-57509004]{font-size:17.6px;font-size:1.1rem;text-align:center}p[data-v-57509004]{text-align:center}.map-insert[data-v-57509004]{height:300px;min-width:150px}.selector[data-v-57509004]{margin-top:100px}",""])},"2NXm":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=a("ac6P"),n=a("XwSl"),r=!1;var i=function(t){r||a("KzKA")},l=a("VU/8")(o.a,n.a,!1,i,"data-v-57509004",null);l.options.__file="src/pages/index.vue",e.default=l.exports},KzKA:function(t,e,a){var o=a("15VZ");"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);a("rjj0")("7137affa",o,!1,{sourceMap:!1})},XwSl:function(t,e,a){"use strict";var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mainContentArea"},[a("h1",[t._v("Welcome to Turf.js")]),a("Row",[a("Col",{attrs:{span:"7",offset:"3"}},[a("div",{staticClass:"map-insert leaflet-container leaflet-touch leaflet-retina leaflet-fade-anim leaflet-grab leaflet-touch-drag leaflet-touch-zoom",attrs:{id:"inMap"}})]),a("Col",{staticClass:"selector",attrs:{span:"2",offset:"1"}},[a("Select",{on:{"on-change":t.changeOperation},model:{value:t.operation,callback:function(e){t.operation=e},expression:"operation"}},t._l(t.turfOperations,function(e){return a("Option",{key:e,attrs:{value:e}},[t._v(t._s(e))])}))],1),a("Col",{attrs:{span:"7",offset:"1"}},[a("div",{staticClass:"map-insert leaflet-container leaflet-touch leaflet-retina leaflet-fade-anim leaflet-grab leaflet-touch-drag leaflet-touch-zoom",attrs:{id:"outMap"}})])],1),a("h2",[t._v("Advanced geospatial analysis for browsers and Node.js")]),a("Row",[a("Col",{attrs:{span:"7"}},[a("h3",[t._v("Simple")]),a("p",[t._v("Modular, simple-to-understand JavaScript functions that speak GeoJSON")])]),a("Col",{attrs:{span:"7",offset:"1"}},[a("h3",[t._v("Modular")]),a("p",[t._v("Turf is a collection of small modules, you only need to take what you want to use")])]),a("Col",{attrs:{span:"7",offset:"1"}},[a("h3",[t._v("Fast")]),a("p",[t._v("Takes advantage of the newest algorithms and doesn't require you to send data to a server")])])],1)],1)};o._withStripped=!0;var n={render:o,staticRenderFns:[]};e.a=n},ac6P:function(t,e,a){"use strict";var o=null,n=null,r=null,i=null;e.a={name:"Home",data:function(){return{operation:"tin",turfOperations:["tin","buffer","centroid","voronoi"]}},methods:{changeOperation:function(t){r.clearLayers();var e=null;"tin"===t?e=turf.tin(i,"price"):"buffer"===t?e=turf.buffer(i,200,{units:"meters"}):"centroid"===t?e=turf.centroid(i):"voronoi"===t&&(e=turf.voronoi(i,{bbox:turf.bbox(i)})),r=L.geoJson(e,l).addTo(n)}},mounted:function(){i=turf.featureCollection([turf.point([-74,40.739],{price:8}),turf.point([-73.992,40.742],{price:12}),turf.point([-73.997,40.732],{price:7}),turf.point([-73.994,40.737],{price:13}),turf.point([-73.989,40.741],{price:21}),turf.point([-73.993,40.734],{price:14}),turf.point([-73.988,40.739],{price:9})]),L.mapbox.accessToken="pk.eyJ1IjoidHVyZmpzIiwiYSI6ImNrZWp2ODRvNzFqMHoyeHJ6b3Jpc29iczQifQ.YdYb6a6rA5aCtkmDZ5wn_g";var t={zoomControl:!1};o=L.mapbox.map("inMap",null,t).addLayer(L.mapbox.styleLayer("mapbox://styles/mapbox/light-v10")),n=L.mapbox.map("outMap",null,t).addLayer(L.mapbox.styleLayer("mapbox://styles/mapbox/light-v10"));var e=L.geoJson(i,l).addTo(o);r=L.geoJson(turf.tin(i,"price"),l).addTo(n),o.fitBounds(e.getBounds()),n.fitBounds(r.getBounds())}};var l={pointToLayer:function(t,e){return L.circleMarker(e,{color:"#0C3952",fillOpacity:.8})},style:function(t){return"Polygon"===t.geometry.type?{weight:1,fillOpacity:.3*Math.random()+.2,color:"#0C3952"}:{radius:6,stroke:!1,color:"#0C3952",fillOpacity:1}}}}});