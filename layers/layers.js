var wms_layers = [];


        var lyr_OSM_0 = new ol.layer.Tile({
            'title': 'OSM',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var awody_polskie = new ol.layer.Tile({
            source: new ol.source.TileWMS(({
                url: "https://wody.isok.gov.pl/gpservices/KZGW/MZP20_Glebokosc_WysokiePrawdopodPowodzi/MapServer/WMSServer",
                attributions: ' ',
                params: {
                    "LAYERS": "4",
                    "TILED": "true",
                    "VERSION": "1.3.0"},
                })),
            title: 'Wody Polski ',
            opacity: 1.000000,
 
          });
        wms_layers.push([awody_polskie, 0]);
 


var format_Vmap2002_2 = new ol.format.GeoJSON();
var features_Vmap2002_2 = format_Vmap2002_2.readFeatures(json_Vmap2002_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Vmap2002_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Vmap2002_2.addFeatures(features_Vmap2002_2);
var lyr_Vmap2002_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Vmap2002_2, 
                style: style_Vmap2002_2,
                popuplayertitle: 'Vmap 2002',
                interactive: false,
                title: '<img src="styles/legend/Vmap2002_2.png" /> Vmap 2002'
            });
var format_Mapyhistoryczne1940_3 = new ol.format.GeoJSON();
var features_Mapyhistoryczne1940_3 = format_Mapyhistoryczne1940_3.readFeatures(json_Mapyhistoryczne1940_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Mapyhistoryczne1940_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mapyhistoryczne1940_3.addFeatures(features_Mapyhistoryczne1940_3);
var lyr_Mapyhistoryczne1940_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Mapyhistoryczne1940_3, 
                style: style_Mapyhistoryczne1940_3,
                popuplayertitle: 'Mapy historyczne 1940',
                interactive: false,
                title: '<img src="styles/legend/Mapyhistoryczne1940_3.png" /> Mapy historyczne 1940'
            });
var format_Sentinel2024_4 = new ol.format.GeoJSON();
var features_Sentinel2024_4 = format_Sentinel2024_4.readFeatures(json_Sentinel2024_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sentinel2024_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sentinel2024_4.addFeatures(features_Sentinel2024_4);
var lyr_Sentinel2024_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sentinel2024_4, 
                style: style_Sentinel2024_4,
                popuplayertitle: 'Sentinel 2024',
                interactive: false,
                title: '<img src="styles/legend/Sentinel2024_4.png" /> Sentinel 2024'
            });
var format_AnalizaheksagonyhistoryczneiVmap_5 = new ol.format.GeoJSON();
var features_AnalizaheksagonyhistoryczneiVmap_5 = format_AnalizaheksagonyhistoryczneiVmap_5.readFeatures(json_AnalizaheksagonyhistoryczneiVmap_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AnalizaheksagonyhistoryczneiVmap_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AnalizaheksagonyhistoryczneiVmap_5.addFeatures(features_AnalizaheksagonyhistoryczneiVmap_5);
var lyr_AnalizaheksagonyhistoryczneiVmap_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AnalizaheksagonyhistoryczneiVmap_5, 
                style: style_AnalizaheksagonyhistoryczneiVmap_5,
                popuplayertitle: 'Analiza heksagony historyczne i Vmap',
                interactive: false,
    title: 'Analiza heksagony historyczne i Vmap<br />\
    <img src="styles/legend/AnalizaheksagonyhistoryczneiVmap_5_0.png" /> -100 - -79<br />\
    <img src="styles/legend/AnalizaheksagonyhistoryczneiVmap_5_1.png" /> -79 - -52<br />\
    <img src="styles/legend/AnalizaheksagonyhistoryczneiVmap_5_2.png" /> -52 - -29<br />\
    <img src="styles/legend/AnalizaheksagonyhistoryczneiVmap_5_3.png" /> -29 - -9<br />\
    <img src="styles/legend/AnalizaheksagonyhistoryczneiVmap_5_4.png" /> -9 - 14<br />\
    <img src="styles/legend/AnalizaheksagonyhistoryczneiVmap_5_5.png" /> 14 - 42<br />\
    <img src="styles/legend/AnalizaheksagonyhistoryczneiVmap_5_6.png" /> 42 - 74<br />\
    <img src="styles/legend/AnalizaheksagonyhistoryczneiVmap_5_7.png" /> 74 - 100<br />'
        });

lyr_OSM_0.setVisible(false);

awody_polskie.setVisible(true); //dodanie warstwy WM Wody Polskie

lyr_GoogleSatellite_1.setVisible(false);
lyr_Vmap2002_2.setVisible(true);
lyr_Mapyhistoryczne1940_3.setVisible(true);
lyr_Sentinel2024_4.setVisible(true);
lyr_AnalizaheksagonyhistoryczneiVmap_5.setVisible(true);
var layersList = [awody_polskie, //dodanie warstwy WM Wody Polskie
    lyr_OSM_0,
    lyr_GoogleSatellite_1,
    lyr_Vmap2002_2,
    lyr_Mapyhistoryczne1940_3,
    lyr_Sentinel2024_4,
    lyr_AnalizaheksagonyhistoryczneiVmap_5];


lyr_Vmap2002_2.set('fieldAliases', {'DLUG_BRZEG': 'DLUG_BRZEG', 'DLUGOSC': 'DLUGOSC', 'DOKLADNOSC': 'DOKLADNOSC', 'DOSTEPNOSC': 'DOSTEPNOSC', 'GLEBOKOSC': 'GLEBOKOSC', 'ISTNIENIE': 'ISTNIENIE', 'KAT_HYDRO': 'KAT_HYDRO', 'KAT_PLYWU': 'KAT_PLYWU', 'KAT_POJEMN': 'KAT_POJEMN', 'KAT_POLOZ': 'KAT_POLOZ', 'KAT_WODY': 'KAT_WODY', 'NAJW_WYS': 'NAJW_WYS', 'NAZWA': 'NAZWA', 'OBIEKT': 'OBIEKT', 'OPR_UPUST': 'OPR_UPUST', 'OPR_ZBURZ': 'OPR_ZBURZ', 'POCH_HYDRO': 'POCH_HYDRO', 'PRED_PRZEP': 'PRED_PRZEP', 'SREDNIA_GL': 'SREDNIA_GL', 'STAT_EKSPL': 'STAT_EKSPL', 'SZEROKOSC': 'SZEROKOSC', 'TAJNOSC': 'TAJNOSC', 'TYP_AKWED': 'TYP_AKWED', 'TYP_WYBRZ': 'TYP_WYBRZ', 'ZN_ORIENT': 'ZN_ORIENT', 'POWIERZCHN': 'POWIERZCHN', 'ID': 'ID', 'obwód': 'obwód', 'powierzc_1': 'powierzc_1', 'wsp': 'wsp', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Mapyhistoryczne1940_3.set('fieldAliases', {'Id': 'Id', 'Shape_Leng': 'Shape_Leng', 'obwod': 'obwod', 'powierzchn': 'powierzchn', 'wsp_zwarto': 'wsp_zwarto', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Area': 'Shape_Area', });
lyr_Sentinel2024_4.set('fieldAliases', {'Id': 'Id', 'gridcode': 'gridcode', 'Shape_Leng': 'Shape_Leng', 'obwód': 'obwód', 'powierzch': 'powierzch', 'wsp': 'wsp', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Area': 'Shape_Area', });
lyr_AnalizaheksagonyhistoryczneiVmap_5.set('fieldAliases', {'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'GRID_ID': 'GRID_ID', 'proc_a': 'proc_a', 'proc_b': 'proc_b', 'proc_c': 'proc_c', 'a_b': 'a_b', 'b_c': 'b_c', });
lyr_Vmap2002_2.set('fieldImages', {'DLUG_BRZEG': 'TextEdit', 'DLUGOSC': 'TextEdit', 'DOKLADNOSC': 'TextEdit', 'DOSTEPNOSC': 'TextEdit', 'GLEBOKOSC': 'TextEdit', 'ISTNIENIE': 'TextEdit', 'KAT_HYDRO': 'TextEdit', 'KAT_PLYWU': 'TextEdit', 'KAT_POJEMN': 'TextEdit', 'KAT_POLOZ': 'TextEdit', 'KAT_WODY': 'TextEdit', 'NAJW_WYS': 'TextEdit', 'NAZWA': 'TextEdit', 'OBIEKT': 'TextEdit', 'OPR_UPUST': 'TextEdit', 'OPR_ZBURZ': 'TextEdit', 'POCH_HYDRO': 'TextEdit', 'PRED_PRZEP': 'TextEdit', 'SREDNIA_GL': 'TextEdit', 'STAT_EKSPL': 'TextEdit', 'SZEROKOSC': 'TextEdit', 'TAJNOSC': 'TextEdit', 'TYP_AKWED': 'TextEdit', 'TYP_WYBRZ': 'TextEdit', 'ZN_ORIENT': 'TextEdit', 'POWIERZCHN': 'TextEdit', 'ID': 'TextEdit', 'obwód': 'TextEdit', 'powierzc_1': 'TextEdit', 'wsp': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Mapyhistoryczne1940_3.set('fieldImages', {'Id': 'TextEdit', 'Shape_Leng': 'TextEdit', 'obwod': 'TextEdit', 'powierzchn': 'TextEdit', 'wsp_zwarto': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Sentinel2024_4.set('fieldImages', {'Id': 'TextEdit', 'gridcode': 'TextEdit', 'Shape_Leng': 'TextEdit', 'obwód': 'TextEdit', 'powierzch': 'TextEdit', 'wsp': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_AnalizaheksagonyhistoryczneiVmap_5.set('fieldImages', {'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'GRID_ID': 'TextEdit', 'proc_a': 'TextEdit', 'proc_b': 'TextEdit', 'proc_c': 'TextEdit', 'a_b': 'TextEdit', 'b_c': 'TextEdit', });
lyr_Vmap2002_2.set('fieldLabels', {'DLUG_BRZEG': 'no label', 'DLUGOSC': 'no label', 'DOKLADNOSC': 'no label', 'DOSTEPNOSC': 'no label', 'GLEBOKOSC': 'no label', 'ISTNIENIE': 'no label', 'KAT_HYDRO': 'no label', 'KAT_PLYWU': 'no label', 'KAT_POJEMN': 'no label', 'KAT_POLOZ': 'no label', 'KAT_WODY': 'no label', 'NAJW_WYS': 'no label', 'NAZWA': 'no label', 'OBIEKT': 'no label', 'OPR_UPUST': 'no label', 'OPR_ZBURZ': 'no label', 'POCH_HYDRO': 'no label', 'PRED_PRZEP': 'no label', 'SREDNIA_GL': 'no label', 'STAT_EKSPL': 'no label', 'SZEROKOSC': 'no label', 'TAJNOSC': 'no label', 'TYP_AKWED': 'no label', 'TYP_WYBRZ': 'no label', 'ZN_ORIENT': 'no label', 'POWIERZCHN': 'no label', 'ID': 'no label', 'obwód': 'no label', 'powierzc_1': 'no label', 'wsp': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Mapyhistoryczne1940_3.set('fieldLabels', {'Id': 'no label', 'Shape_Leng': 'no label', 'obwod': 'no label', 'powierzchn': 'no label', 'wsp_zwarto': 'no label', 'Shape_Le_1': 'no label', 'Shape_Area': 'no label', });
lyr_Sentinel2024_4.set('fieldLabels', {'Id': 'no label', 'gridcode': 'no label', 'Shape_Leng': 'no label', 'obwód': 'no label', 'powierzch': 'no label', 'wsp': 'no label', 'Shape_Le_1': 'no label', 'Shape_Area': 'no label', });
lyr_AnalizaheksagonyhistoryczneiVmap_5.set('fieldLabels', {'Shape_Leng': 'hidden field', 'Shape_Area': 'no label', 'GRID_ID': 'no label', 'proc_a': 'no label', 'proc_b': 'no label', 'proc_c': 'no label', 'a_b': 'hidden field', 'b_c': 'hidden field', });
lyr_AnalizaheksagonyhistoryczneiVmap_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});