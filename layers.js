var wms_layers = [];

var lyr_dop_232450_2022_0 = new ol.layer.Image({
                            opacity: 1,
                            title: 'dop_2324-50_2022',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/dop_232450_2022_0.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [1255005.984741, 5980007.216546, 1256861.232660, 5981504.070593]
                            })
                        });
var lyr_dop_232449_2022_1 = new ol.layer.Image({
                            opacity: 1,
                            title: 'dop_2324-49_2022',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/dop_232449_2022_1.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [1253168.700039, 5980029.556824, 1255023.650506, 5981526.031847]
                            })
                        });
var lyr_Ortho_gesamt_2 = new ol.layer.Image({
                            opacity: 1,
                            title: 'Ortho_gesamt',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/Ortho_gesamt_2.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [1253186.054988, 5981481.719522, 1256915.214626, 5985951.093081]
                            })
                        });
var format_Siedlungserweiterungsgebiet_3 = new ol.format.GeoJSON();
var features_Siedlungserweiterungsgebiet_3 = format_Siedlungserweiterungsgebiet_3.readFeatures(json_Siedlungserweiterungsgebiet_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Siedlungserweiterungsgebiet_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Siedlungserweiterungsgebiet_3.addFeatures(features_Siedlungserweiterungsgebiet_3);
var lyr_Siedlungserweiterungsgebiet_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Siedlungserweiterungsgebiet_3, 
                style: style_Siedlungserweiterungsgebiet_3,
                popuplayertitle: 'Siedlungserweiterungsgebiet',
                interactive: true,
    title: 'Siedlungserweiterungsgebiet<br />\
    <img src="styles/legend/Siedlungserweiterungsgebiet_3_0.png" /> Mehrfamilienhaus<br />\
    <img src="styles/legend/Siedlungserweiterungsgebiet_3_1.png" /> Mehrfamilienhaus<br />\
    <img src="styles/legend/Siedlungserweiterungsgebiet_3_2.png" /> Mehrfamilienhaus<br />\
    <img src="styles/legend/Siedlungserweiterungsgebiet_3_3.png" /> Mehrfamilienhaus<br />\
    <img src="styles/legend/Siedlungserweiterungsgebiet_3_4.png" /> Mehrfamilienhaus<br />\
    <img src="styles/legend/Siedlungserweiterungsgebiet_3_5.png" /> Mehrfamilienhaus<br />\
    <img src="styles/legend/Siedlungserweiterungsgebiet_3_6.png" /> Mehrfamilienhaus<br />\
    <img src="styles/legend/Siedlungserweiterungsgebiet_3_7.png" /> Altersheim<br />\
    <img src="styles/legend/Siedlungserweiterungsgebiet_3_8.png" /> <br />'
        });
var format_HotspotshohePrioritt_4 = new ol.format.GeoJSON();
var features_HotspotshohePrioritt_4 = format_HotspotshohePrioritt_4.readFeatures(json_HotspotshohePrioritt_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotshohePrioritt_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotshohePrioritt_4.addFeatures(features_HotspotshohePrioritt_4);
var lyr_HotspotshohePrioritt_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotshohePrioritt_4, 
                style: style_HotspotshohePrioritt_4,
                popuplayertitle: 'Hotspots hohe Priorität',
                interactive: true,
    title: 'Hotspots hohe Priorität<br />\
    <img src="styles/legend/HotspotshohePrioritt_4_0.png" /> Axams<br />\
    <img src="styles/legend/HotspotshohePrioritt_4_1.png" /> Bahnhof<br />\
    <img src="styles/legend/HotspotshohePrioritt_4_2.png" /> Fritz-Arnold /Angerhuber Weg<br />\
    <img src="styles/legend/HotspotshohePrioritt_4_3.png" /> Mühlbachweg<br />\
    <img src="styles/legend/HotspotshohePrioritt_4_4.png" /> Schule<br />\
    <img src="styles/legend/HotspotshohePrioritt_4_5.png" /> Bahnhofstrasse<br />'
        });
var format_HotspotsniedererPrioritt_5 = new ol.format.GeoJSON();
var features_HotspotsniedererPrioritt_5 = format_HotspotsniedererPrioritt_5.readFeatures(json_HotspotsniedererPrioritt_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotspotsniedererPrioritt_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotspotsniedererPrioritt_5.addFeatures(features_HotspotsniedererPrioritt_5);
var lyr_HotspotsniedererPrioritt_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotspotsniedererPrioritt_5, 
                style: style_HotspotsniedererPrioritt_5,
                popuplayertitle: 'Hotspots niederer Priorität',
                interactive: true,
    title: 'Hotspots niederer Priorität<br />\
    <img src="styles/legend/HotspotsniedererPrioritt_5_0.png" /> Arzt<br />\
    <img src="styles/legend/HotspotsniedererPrioritt_5_1.png" /> Axamer Straße<br />\
    <img src="styles/legend/HotspotsniedererPrioritt_5_2.png" /> Hintere Gasse/Dorfmitte<br />\
    <img src="styles/legend/HotspotsniedererPrioritt_5_3.png" /> Messerschmittweg<br />\
    <img src="styles/legend/HotspotsniedererPrioritt_5_4.png" /> Ingrid-Zwerger-Weg<br />\
    <img src="styles/legend/HotspotsniedererPrioritt_5_5.png" /> Wohnsiedlung<br />\
    <img src="styles/legend/HotspotsniedererPrioritt_5_6.png" /> Huberangerweg<br />'
        });
var format_Parkzonen_6 = new ol.format.GeoJSON();
var features_Parkzonen_6 = format_Parkzonen_6.readFeatures(json_Parkzonen_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Parkzonen_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Parkzonen_6.addFeatures(features_Parkzonen_6);
var lyr_Parkzonen_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Parkzonen_6, 
                style: style_Parkzonen_6,
                popuplayertitle: 'Parkzonen',
                interactive: true,
                title: '<img src="styles/legend/Parkzonen_6.png" /> Parkzonen'
            });
var group_Ortho = new ol.layer.Group({
                                layers: [lyr_dop_232450_2022_0,lyr_dop_232449_2022_1,lyr_Ortho_gesamt_2,],
                                fold: "open",
                                title: 'Ortho'});

lyr_dop_232450_2022_0.setVisible(true);lyr_dop_232449_2022_1.setVisible(true);lyr_Ortho_gesamt_2.setVisible(true);lyr_Siedlungserweiterungsgebiet_3.setVisible(true);lyr_HotspotshohePrioritt_4.setVisible(true);lyr_HotspotsniedererPrioritt_5.setVisible(true);lyr_Parkzonen_6.setVisible(true);
var layersList = [group_Ortho,lyr_Siedlungserweiterungsgebiet_3,lyr_HotspotshohePrioritt_4,lyr_HotspotsniedererPrioritt_5,lyr_Parkzonen_6];
lyr_Siedlungserweiterungsgebiet_3.set('fieldAliases', {'id': 'id', 'Art': 'Art', 'Name': 'Name', 'Flaeche_m2': 'Flaeche_m2', 'Strasse': 'Strasse', 'GS_Nummer': 'GS_Nummer', });
lyr_HotspotshohePrioritt_4.set('fieldAliases', {'id': 'id', 'Text': 'Text', 'Name': 'Name', });
lyr_HotspotsniedererPrioritt_5.set('fieldAliases', {'id': 'id', 'Name': 'Name', });
lyr_Parkzonen_6.set('fieldAliases', {'id': 'id', 'Strasse': 'Strasse', 'Art': 'Art', 'Zweck': 'Zweck', 'Foto': 'Foto', 'Gemeinde': 'Gemeinde', 'E-Ladest': 'E-Ladest', 'E-Ladest-A': 'E-Ladest-A', 'Hotspot': 'Hotspot', 'Hotspot_N': 'Hotspot_N', 'Verort_HN': 'Verort_HN', 'Anzahl': 'Anzahl', 'Flaeche_m2': 'Flaeche_m2', });
lyr_Siedlungserweiterungsgebiet_3.set('fieldImages', {'id': 'TextEdit', 'Art': 'TextEdit', 'Name': 'TextEdit', 'Flaeche_m2': 'TextEdit', 'Strasse': 'TextEdit', 'GS_Nummer': 'TextEdit', });
lyr_HotspotshohePrioritt_4.set('fieldImages', {'id': 'TextEdit', 'Text': 'TextEdit', 'Name': 'TextEdit', });
lyr_HotspotsniedererPrioritt_5.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', });
lyr_Parkzonen_6.set('fieldImages', {'id': 'TextEdit', 'Strasse': 'TextEdit', 'Art': 'TextEdit', 'Zweck': 'TextEdit', 'Foto': 'TextEdit', 'Gemeinde': 'TextEdit', 'E-Ladest': 'TextEdit', 'E-Ladest-A': 'TextEdit', 'Hotspot': 'TextEdit', 'Hotspot_N': 'TextEdit', 'Verort_HN': 'TextEdit', 'Anzahl': 'TextEdit', 'Flaeche_m2': 'TextEdit', });
lyr_Siedlungserweiterungsgebiet_3.set('fieldLabels', {'id': 'no label', 'Art': 'no label', 'Name': 'no label', 'Flaeche_m2': 'no label', 'Strasse': 'no label', 'GS_Nummer': 'no label', });
lyr_HotspotshohePrioritt_4.set('fieldLabels', {'id': 'no label', 'Text': 'no label', 'Name': 'no label', });
lyr_HotspotsniedererPrioritt_5.set('fieldLabels', {'id': 'no label', 'Name': 'no label', });
lyr_Parkzonen_6.set('fieldLabels', {'id': 'no label', 'Strasse': 'no label', 'Art': 'no label', 'Zweck': 'no label', 'Foto': 'no label', 'Gemeinde': 'no label', 'E-Ladest': 'no label', 'E-Ladest-A': 'no label', 'Hotspot': 'no label', 'Hotspot_N': 'no label', 'Verort_HN': 'no label', 'Anzahl': 'no label', 'Flaeche_m2': 'no label', });
lyr_Parkzonen_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});