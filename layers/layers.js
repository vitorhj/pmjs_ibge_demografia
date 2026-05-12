var wms_layers = [];

var format_ibge_demografiajgs_2022_0 = new ol.format.GeoJSON();
var features_ibge_demografiajgs_2022_0 = format_ibge_demografiajgs_2022_0.readFeatures(json_ibge_demografiajgs_2022_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ibge_demografiajgs_2022_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ibge_demografiajgs_2022_0.addFeatures(features_ibge_demografiajgs_2022_0);
var lyr_ibge_demografiajgs_2022_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ibge_demografiajgs_2022_0, 
                style: style_ibge_demografiajgs_2022_0,
                popuplayertitle: 'ibge_demografia-jgs_2022',
                interactive: true,
    title: 'ibge_demografia-jgs_2022<br />\
    <img src="styles/legend/ibge_demografiajgs_2022_0_0.png" /> 0.0 - 0.0<br />\
    <img src="styles/legend/ibge_demografiajgs_2022_0_1.png" /> 50 - 294<br />\
    <img src="styles/legend/ibge_demografiajgs_2022_0_2.png" /> 294 - 496<br />\
    <img src="styles/legend/ibge_demografiajgs_2022_0_3.png" /> 496 - 701<br />\
    <img src="styles/legend/ibge_demografiajgs_2022_0_4.png" /> 701 - 1224<br />' });
var format_lim_bairros_1 = new ol.format.GeoJSON();
var features_lim_bairros_1 = format_lim_bairros_1.readFeatures(json_lim_bairros_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_lim_bairros_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_lim_bairros_1.addFeatures(features_lim_bairros_1);
var lyr_lim_bairros_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_lim_bairros_1, 
                style: style_lim_bairros_1,
                popuplayertitle: 'lim_bairros',
                interactive: true,
                title: '<img src="styles/legend/lim_bairros_1.png" /> lim_bairros'
            });
var format_lim_urbano_2 = new ol.format.GeoJSON();
var features_lim_urbano_2 = format_lim_urbano_2.readFeatures(json_lim_urbano_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_lim_urbano_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_lim_urbano_2.addFeatures(features_lim_urbano_2);
var lyr_lim_urbano_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_lim_urbano_2, 
                style: style_lim_urbano_2,
                popuplayertitle: 'lim_urbano',
                interactive: true,
                title: '<img src="styles/legend/lim_urbano_2.png" /> lim_urbano'
            });
var format_eixo_ruas_com_nomes_oficial_3 = new ol.format.GeoJSON();
var features_eixo_ruas_com_nomes_oficial_3 = format_eixo_ruas_com_nomes_oficial_3.readFeatures(json_eixo_ruas_com_nomes_oficial_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_eixo_ruas_com_nomes_oficial_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_eixo_ruas_com_nomes_oficial_3.addFeatures(features_eixo_ruas_com_nomes_oficial_3);
var lyr_eixo_ruas_com_nomes_oficial_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_eixo_ruas_com_nomes_oficial_3,
maxResolution:5.600893230452393,
 
                style: style_eixo_ruas_com_nomes_oficial_3,
                popuplayertitle: 'eixo_ruas_com_nomes_oficial',
                interactive: true,
                title: '<img src="styles/legend/eixo_ruas_com_nomes_oficial_3.png" /> eixo_ruas_com_nomes_oficial'
            });

lyr_ibge_demografiajgs_2022_0.setVisible(true);lyr_lim_bairros_1.setVisible(false);lyr_lim_urbano_2.setVisible(true);lyr_eixo_ruas_com_nomes_oficial_3.setVisible(false);
var layersList = [lyr_ibge_demografiajgs_2022_0,lyr_lim_bairros_1,lyr_lim_urbano_2,lyr_eixo_ruas_com_nomes_oficial_3];
lyr_ibge_demografiajgs_2022_0.set('fieldAliases', {'CD_SETOR': 'CD_SETOR', 'SITUACAO': 'SITUACAO', 'CD_SIT': 'CD_SIT', 'CD_TIPO': 'CD_TIPO', 'AREA_KM2': 'AREA_KM2', 'CD_REGIAO': 'CD_REGIAO', 'NM_REGIAO': 'NM_REGIAO', 'CD_UF': 'CD_UF', 'NM_UF': 'NM_UF', 'CD_MUN': 'CD_MUN', 'NM_MUN': 'NM_MUN', 'CD_DIST': 'CD_DIST', 'NM_DIST': 'NM_DIST', 'CD_SUBDIST': 'CD_SUBDIST', 'NM_SUBDIST': 'NM_SUBDIST', 'CD_BAIRRO': 'CD_BAIRRO', 'NM_BAIRRO': 'NM_BAIRRO', 'CD_NU': 'CD_NU', 'NM_NU': 'NM_NU', 'CD_FCU': 'CD_FCU', 'NM_FCU': 'NM_FCU', 'CD_AGLOM': 'CD_AGLOM', 'NM_AGLOM': 'NM_AGLOM', 'CD_RGINT': 'CD_RGINT', 'NM_RGINT': 'NM_RGINT', 'CD_RGI': 'CD_RGI', 'NM_RGI': 'NM_RGI', 'CD_CONCURB': 'CD_CONCURB', 'NM_CONCURB': 'NM_CONCURB', 'V01006': 'V01006', 'V01007': 'V01007', 'V01008': 'V01008', 'V01009': 'V01009', 'V01010': 'V01010', 'V01011': 'V01011', 'V01012': 'V01012', 'V01013': 'V01013', 'V01014': 'V01014', 'V01015': 'V01015', 'V01016': 'V01016', 'V01017': 'V01017', 'V01018': 'V01018', 'V01019': 'V01019', 'V01020': 'V01020', 'V01021': 'V01021', 'V01022': 'V01022', 'V01023': 'V01023', 'V01024': 'V01024', 'V01025': 'V01025', 'V01026': 'V01026', 'V01027': 'V01027', 'V01028': 'V01028', 'V01029': 'V01029', 'V01030': 'V01030', 'V01031': 'V01031', 'V01032': 'V01032', 'V01033': 'V01033', 'V01034': 'V01034', 'V01035': 'V01035', 'V01036': 'V01036', 'V01037': 'V01037', 'V01038': 'V01038', 'V01039': 'V01039', 'V01040': 'V01040', 'V01041': 'V01041', });
lyr_lim_bairros_1.set('fieldAliases', {'gid': 'gid', 'chave': 'chave', 'rotulo': 'rotulo', 'área': 'área', 'área km²': 'área km²', });
lyr_lim_urbano_2.set('fieldAliases', {'id': 'id', 'CHAVE': 'CHAVE', });
lyr_eixo_ruas_com_nomes_oficial_3.set('fieldAliases', {'id': 'id', 'chave': 'chave', 'i_ruas': 'i_ruas', 'rotulo': 'rotulo', 'extensao': 'extensao', 'pavimentacao': 'pavimentacao', 'tipo': 'tipo', 'transporte_coletivo': 'transporte_coletivo', 'hierarquia': 'hierarquia', });
lyr_ibge_demografiajgs_2022_0.set('fieldImages', {'CD_SETOR': 'TextEdit', 'SITUACAO': 'TextEdit', 'CD_SIT': 'TextEdit', 'CD_TIPO': 'TextEdit', 'AREA_KM2': 'TextEdit', 'CD_REGIAO': 'TextEdit', 'NM_REGIAO': 'TextEdit', 'CD_UF': 'TextEdit', 'NM_UF': 'TextEdit', 'CD_MUN': 'TextEdit', 'NM_MUN': 'TextEdit', 'CD_DIST': 'TextEdit', 'NM_DIST': 'TextEdit', 'CD_SUBDIST': 'TextEdit', 'NM_SUBDIST': 'TextEdit', 'CD_BAIRRO': 'TextEdit', 'NM_BAIRRO': 'TextEdit', 'CD_NU': 'TextEdit', 'NM_NU': 'TextEdit', 'CD_FCU': 'TextEdit', 'NM_FCU': 'TextEdit', 'CD_AGLOM': 'TextEdit', 'NM_AGLOM': 'TextEdit', 'CD_RGINT': 'TextEdit', 'NM_RGINT': 'TextEdit', 'CD_RGI': 'TextEdit', 'NM_RGI': 'TextEdit', 'CD_CONCURB': 'TextEdit', 'NM_CONCURB': 'TextEdit', 'V01006': 'Range', 'V01007': 'Range', 'V01008': 'Range', 'V01009': 'Range', 'V01010': 'Range', 'V01011': 'Range', 'V01012': 'Range', 'V01013': 'Range', 'V01014': 'Range', 'V01015': 'Range', 'V01016': 'Range', 'V01017': 'Range', 'V01018': 'Range', 'V01019': 'Range', 'V01020': 'Range', 'V01021': 'Range', 'V01022': 'Range', 'V01023': 'Range', 'V01024': 'Range', 'V01025': 'Range', 'V01026': 'Range', 'V01027': 'Range', 'V01028': 'Range', 'V01029': 'Range', 'V01030': 'Range', 'V01031': 'Range', 'V01032': 'Range', 'V01033': 'Range', 'V01034': 'Range', 'V01035': 'Range', 'V01036': 'Range', 'V01037': 'Range', 'V01038': 'Range', 'V01039': 'Range', 'V01040': 'Range', 'V01041': 'Range', });
lyr_lim_bairros_1.set('fieldImages', {'gid': 'TextEdit', 'chave': 'TextEdit', 'rotulo': 'TextEdit', 'área': 'TextEdit', 'área km²': 'TextEdit', });
lyr_lim_urbano_2.set('fieldImages', {'id': 'TextEdit', 'CHAVE': 'TextEdit', });
lyr_eixo_ruas_com_nomes_oficial_3.set('fieldImages', {'id': 'TextEdit', 'chave': 'TextEdit', 'i_ruas': 'TextEdit', 'rotulo': 'TextEdit', 'extensao': 'Range', 'pavimentacao': 'TextEdit', 'tipo': 'TextEdit', 'transporte_coletivo': 'TextEdit', 'hierarquia': 'TextEdit', });
lyr_ibge_demografiajgs_2022_0.set('fieldLabels', {'CD_SETOR': 'inline label - visible with data', 'SITUACAO': 'inline label - visible with data', 'CD_SIT': 'hidden field', 'CD_TIPO': 'hidden field', 'AREA_KM2': 'header label - visible with data', 'CD_REGIAO': 'hidden field', 'NM_REGIAO': 'hidden field', 'CD_UF': 'hidden field', 'NM_UF': 'hidden field', 'CD_MUN': 'hidden field', 'NM_MUN': 'hidden field', 'CD_DIST': 'hidden field', 'NM_DIST': 'hidden field', 'CD_SUBDIST': 'hidden field', 'NM_SUBDIST': 'hidden field', 'CD_BAIRRO': 'hidden field', 'NM_BAIRRO': 'inline label - visible with data', 'CD_NU': 'hidden field', 'NM_NU': 'hidden field', 'CD_FCU': 'hidden field', 'NM_FCU': 'hidden field', 'CD_AGLOM': 'hidden field', 'NM_AGLOM': 'hidden field', 'CD_RGINT': 'hidden field', 'NM_RGINT': 'hidden field', 'CD_RGI': 'hidden field', 'NM_RGI': 'hidden field', 'CD_CONCURB': 'hidden field', 'NM_CONCURB': 'hidden field', 'V01006': 'hidden field', 'V01007': 'hidden field', 'V01008': 'hidden field', 'V01009': 'hidden field', 'V01010': 'hidden field', 'V01011': 'hidden field', 'V01012': 'hidden field', 'V01013': 'hidden field', 'V01014': 'hidden field', 'V01015': 'hidden field', 'V01016': 'hidden field', 'V01017': 'hidden field', 'V01018': 'hidden field', 'V01019': 'hidden field', 'V01020': 'hidden field', 'V01021': 'hidden field', 'V01022': 'hidden field', 'V01023': 'hidden field', 'V01024': 'hidden field', 'V01025': 'hidden field', 'V01026': 'hidden field', 'V01027': 'hidden field', 'V01028': 'hidden field', 'V01029': 'hidden field', 'V01030': 'hidden field', 'V01031': 'hidden field', 'V01032': 'hidden field', 'V01033': 'hidden field', 'V01034': 'hidden field', 'V01035': 'hidden field', 'V01036': 'hidden field', 'V01037': 'hidden field', 'V01038': 'hidden field', 'V01039': 'hidden field', 'V01040': 'hidden field', 'V01041': 'hidden field', });
lyr_lim_bairros_1.set('fieldLabels', {'gid': 'no label', 'chave': 'no label', 'rotulo': 'no label', 'área': 'no label', 'área km²': 'no label', });
lyr_lim_urbano_2.set('fieldLabels', {'id': 'no label', 'CHAVE': 'no label', });
lyr_eixo_ruas_com_nomes_oficial_3.set('fieldLabels', {'id': 'no label', 'chave': 'no label', 'i_ruas': 'no label', 'rotulo': 'no label', 'extensao': 'no label', 'pavimentacao': 'no label', 'tipo': 'no label', 'transporte_coletivo': 'no label', 'hierarquia': 'no label', });
lyr_eixo_ruas_com_nomes_oficial_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});