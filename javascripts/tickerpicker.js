(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["ticker"] = factory();
	else
		root["ticker"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "dist/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.setStockData = setStockData;
	exports.symbol = symbol;
	exports.suggest = suggest;

	var _stocks = __webpack_require__(2);

	var _stocks2 = _interopRequireDefault(_stocks);

	var _lodash = __webpack_require__(3);

	var _lodash2 = _interopRequireDefault(_lodash);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var stockData = _stocks2.default;

	function setStockData(data) {
	  stockData = data;
	};

	function lookup(partial, prop) {
	  return _lodash2.default.filter(stockData, function (company) {
	    return company && prop in company && company[prop].toUpperCase().indexOf(partial.toUpperCase()) !== -1;
	  });
	};

	function symbol(companyPartial) {
	  return lookup(companyPartial, 'name');
	};

	function suggest(symbolPartial) {
	  return lookup(symbolPartial, 'symbol');
	};

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.default = [{"name":"22nd Century Group, Inc","symbol":"XXII"},{"name":"Aberdeen Asia-Pacific Income Fund Inc","symbol":"FAX"},{"name":"Aberdeen Australia Equity Fund Inc","symbol":"IAF"},{"name":"Aberdeen Chile Fund, Inc.","symbol":"CH"},{"name":"Aberdeen Emerging Markets Smaller Company Opportunities Fund I","symbol":"ABE"},{"name":"Aberdeen Global Income Fund, Inc.","symbol":"FCO"},{"name":"Aberdeen Indonesia Fund, Inc.","symbol":"IF"},{"name":"Aberdeen Israel Fund, Inc.","symbol":"ISL"},{"name":"Acme United Corporation.","symbol":"ACU"},{"name":"ACRE Realty Investors, Inc.","symbol":"AIII"},{"name":"Actinium Pharmaceuticals, Inc.","symbol":"ATNM"},{"name":"Adams Resources & Energy, Inc.","symbol":"AE"},{"name":"Adcare Health Systems Inc","symbol":"ADK"},{"name":"Adcare Health Systems Inc","symbol":"ADK^A"},{"name":"AeroCentury Corp.","symbol":"ACY"},{"name":"AG&E Holdings, Inc.","symbol":"WGA"},{"name":"Air Industries Group","symbol":"AIRI"},{"name":"Alcoa Inc.","symbol":"AA^"},{"name":"Alexco Resource Corp","symbol":"AXU"},{"name":"Almaden Minerals, Ltd.","symbol":"AAU"},{"name":"Alpha Pro Tech, Ltd.","symbol":"APT"},{"name":"Alteva (D/B/A)","symbol":"ALTV"},{"name":"Altisource Asset Management Corp","symbol":"AAMC"},{"name":"AMCON Distributing Company","symbol":"DIT"},{"name":"American DG Energy Inc.","symbol":"ADGE"},{"name":"American Farmland Company","symbol":"AFCO"},{"name":"American Lorain Corporation","symbol":"ALN"},{"name":"American Shared Hospital Services","symbol":"AMS"},{"name":"Ampio Pharmaceuticals, Inc.","symbol":"AMPE"},{"name":"AmpliPhi Biosciences Corporation","symbol":"APHB"},{"name":"Aoxing Pharmaceutical Company, Inc.","symbol":"AXN"},{"name":"Armco Metals Holdings, Inc.","symbol":"AMCO"},{"name":"Arrhythmia Research Technology Inc.","symbol":"HRT"},{"name":"Asanko Gold Inc.","symbol":"AKG"},{"name":"Ashford Inc.","symbol":"AINC"},{"name":"Associated Banc-Corp","symbol":"ASB.WS"},{"name":"Asterias Biotherapeutics, Inc.","symbol":"AST"},{"name":"Avalon Holdings Corporation","symbol":"AWX"},{"name":"Avalon Rare Metals, Inc.","symbol":"AVL"},{"name":"Avino Silver","symbol":"ASM"},{"name":"B2Gold Corp","symbol":"BTG"},{"name":"Ballantyne Strong, Inc","symbol":"BTN"},{"name":"Bancorp of New Jersey, Inc","symbol":"BKJ"},{"name":"Bancroft Fund Limited","symbol":"BCV"},{"name":"BANRO CORPORATION","symbol":"BAA"},{"name":"Bar Harbor Bankshares, Inc.","symbol":"BHB"},{"name":"Barnwell Industries, Inc.","symbol":"BRN"},{"name":"BG Staffing Inc","symbol":"BGSF"},{"name":"BioPharmX Corporation","symbol":"BPMX"},{"name":"BioTime, Inc.","symbol":"BTX"},{"name":"BioTime, Inc.","symbol":"BTX.WS"},{"name":"Birks Group Inc.","symbol":"BGI"},{"name":"BlackRock Maryland Municipal Bond Trust","symbol":"BZM"},{"name":"BlackRock Massachusetts Tax-Exempt Trust","symbol":"MHE"},{"name":"BlackRock Municipal Income Trust II","symbol":"BLE"},{"name":"Blackrock New Jersey Municipal Bond Trust","symbol":"BLJ"},{"name":"BlackRock New York Municipal Income Trust II","symbol":"BFY"},{"name":"BlackRock Virginia Municipal Bond Trust","symbol":"BHV"},{"name":"Blonder Tongue Laboratories, Inc.","symbol":"BDR"},{"name":"Bluerock Residential Growth REIT, Inc.","symbol":"BRG"},{"name":"Bluerock Residential Growth REIT, Inc.","symbol":"BRG^A"},{"name":"Bovie Medical Corporation","symbol":"BVX"},{"name":"Bowl America, Inc.","symbol":"BWL.A"},{"name":"Breeze-Eastern Corporation","symbol":"BZC"},{"name":"British American Tobacco p.l.c.","symbol":"BTI"},{"name":"Can-Fite Biopharma Ltd","symbol":"CANF"},{"name":"Castle Brands, Inc.","symbol":"ROX"},{"name":"CCA Industries, Inc.","symbol":"CAW"},{"name":"Cel-Sci Corporation","symbol":"CVM"},{"name":"Cel-Sci Corporation","symbol":"CVM.WS"},{"name":"Central Fund of Canada Limited","symbol":"CEF"},{"name":"Central Gold Trust","symbol":"GTU"},{"name":"Central Securities Corporation","symbol":"CET"},{"name":"Centrus Energy Corp.","symbol":"LEU"},{"name":"Chase Corporation","symbol":"CCF"},{"name":"Cheniere Energy Partners LP Holdings, LLC","symbol":"CQH"},{"name":"Cheniere Energy Partners, LP","symbol":"CQP"},{"name":"Cheniere Energy, Inc.","symbol":"LNG"},{"name":"Chicago Rivet & Machine Co.","symbol":"CVR"},{"name":"China Metro-Rural Holdings Limited","symbol":"CNR"},{"name":"China Pharma Holdings, Inc.","symbol":"CPHI"},{"name":"CKX Lands, Inc.","symbol":"CKX"},{"name":"Clough Global Allocation Fund","symbol":"GLV"},{"name":"Clough Global Equity Fund","symbol":"GLQ"},{"name":"Clough Global Opportunities Fund","symbol":"GLO"},{"name":"Command Security Corporation","symbol":"MOC"},{"name":"CompX International Inc.","symbol":"CIX"},{"name":"Comstock Mining, Inc.","symbol":"LODE"},{"name":"Consolidated-Tomoka Land Co.","symbol":"CTO"},{"name":"Contango Oil & Gas Company","symbol":"MCF"},{"name":"Continental Materials Corporation","symbol":"CUO"},{"name":"Core Molding Technologies Inc","symbol":"CMT"},{"name":"Corindus Vascular Robotics, Inc.","symbol":"CVRS"},{"name":"CorMedix Inc","symbol":"CRMD"},{"name":"Cornerstone Strategic Return Fund, Inc. (The)","symbol":"CRF"},{"name":"Cornerstone Strategic Value Fund, Inc.","symbol":"CLM"},{"name":"CPI Aerostructures, Inc.","symbol":"CVU"},{"name":"Credit Suisse Asset Management Income Fund, Inc.","symbol":"CIK"},{"name":"Credit Suisse High Yield Bond Fund","symbol":"DHY"},{"name":"CRH Medical Corporation","symbol":"CRHM"},{"name":"Crystal Rock Holdings, Inc.","symbol":"CRVP"},{"name":"CVSL Inc.","symbol":"CVSL"},{"name":"Dakota Plains Holdings, Inc.","symbol":"DAKP"},{"name":"Daxor Corporation","symbol":"DXR"},{"name":"Delaware Investments Colorado Municipal Income Fund, Inc","symbol":"VCF"},{"name":"Delaware Investments Florida Insured Municipal Income Fund","symbol":"VFL"},{"name":"Delaware Investments Minnesota Municipal Income Fund II, Inc.","symbol":"VMM"},{"name":"Delta Apparel, Inc.","symbol":"DLA"},{"name":"Denison Mine Corp","symbol":"DNN"},{"name":"DGSE Companies, Inc.","symbol":"DGSE"},{"name":"Digital Power Corporation","symbol":"DPW"},{"name":"Document Security Systems, Inc.","symbol":"DSS"},{"name":"Dreyfus Municipal Income, Inc.","symbol":"DMF"},{"name":"DXI Energy Inc.","symbol":"DXI"},{"name":"Eagle Capital Growth Fund, Inc.","symbol":"GRF"},{"name":"Earthstone Energy, Inc.","symbol":"ESTE"},{"name":"Eaton Vance California Municipal Bond Fund","symbol":"EVM"},{"name":"Eaton Vance California Municipal Bond Fund II","symbol":"EIA"},{"name":"Eaton Vance California Municipal Income Trust","symbol":"CEV"},{"name":"Eaton Vance Limited Duration Income Fund","symbol":"EVV"},{"name":"Eaton Vance Massachusetts Municipal Bond Fund","symbol":"MAB"},{"name":"Eaton Vance Massachusetts Municipal Income Trust","symbol":"MMV"},{"name":"Eaton Vance Michigan Municipal Bond Fund","symbol":"MIW"},{"name":"Eaton Vance Michigan Municipal Income Trust","symbol":"EMI"},{"name":"Eaton Vance Municipal Bond Fund","symbol":"EIM"},{"name":"Eaton Vance Municipal Bond Fund II","symbol":"EIV"},{"name":"Eaton Vance New Jersey Municipal Bond Fund","symbol":"EMJ"},{"name":"Eaton Vance New Jersey Municipal Income Trust","symbol":"EVJ"},{"name":"Eaton Vance New York Municipal Bond Fund","symbol":"ENX"},{"name":"Eaton Vance New York Municipal Bond Fund II","symbol":"NYH"},{"name":"Eaton Vance New York Municipal Income Trust","symbol":"EVY"},{"name":"Eaton Vance Ohio Municipal Bond Fund","symbol":"EIO"},{"name":"Eaton Vance Ohio Municipal Income Trust","symbol":"EVO"},{"name":"Eaton Vance Pennsylvania Municipal Bond Fund","symbol":"EIP"},{"name":"Eaton Vance Pennsylvania Municipal Income Trust","symbol":"EVP"},{"name":"Electromed, Inc.","symbol":"ELMD"},{"name":"Elephant Talk Communications Corp.","symbol":"ETAK"},{"name":"Ellomay Capital Ltd.","symbol":"ELLO"},{"name":"Ellsworth Growth and Income Fund Ltd.","symbol":"ECF"},{"name":"eMagin Corporation","symbol":"EMAN"},{"name":"Emerald Oil, Inc.","symbol":"EOX"},{"name":"Emerson Radio Corporation","symbol":"MSN"},{"name":"Energy Fuels Inc","symbol":"UUUU"},{"name":"EnerJex Resources, Inc.","symbol":"ENRJ"},{"name":"EnerJex Resources, Inc.","symbol":"ENRJ^"},{"name":"ENSERVCO Corporation","symbol":"ENSV"},{"name":"EnSync, Inc.","symbol":"ESNC"},{"name":"Entree Gold Inc","symbol":"EGI"},{"name":"EnviroStarm, Inc.","symbol":"EVI"},{"name":"ERBA Diagnostics, Inc.","symbol":"ERB"},{"name":"Erin Energy Corp.","symbol":"ERN"},{"name":"Espey Mfg. & Electronics Corp.","symbol":"ESP"},{"name":"Eurasian Minerals Inc.","symbol":"EMXX"},{"name":"Evans Bancorp, Inc.","symbol":"EVBN"},{"name":"Evolution Petroleum Corporation, Inc.","symbol":"EPM"},{"name":"Evolution Petroleum Corporation, Inc.","symbol":"EPM^A"},{"name":"Exeter Resource Corporation","symbol":"XRA"},{"name":"FieldPoint Petroleum Corporation","symbol":"FPP"},{"name":"FieldPoint Petroleum Corporation","symbol":"FPP.WS"},{"name":"First Trust Energy Income and Growth Fund","symbol":"FEN"},{"name":"Flanigan&#39;s Enterprises, Inc.","symbol":"BDL"},{"name":"Flexible Solutions International Inc.","symbol":"FSI"},{"name":"Franklin Limited Duration Income Trust","symbol":"FTF"},{"name":"Franklin Street Properties Corp.","symbol":"FSP"},{"name":"Friedman Industries Inc.","symbol":"FRD"},{"name":"GAMCO Global Gold, Natural Reources & Income Trust","symbol":"GGN"},{"name":"GAMCO Global Gold, Natural Reources & Income Trust","symbol":"GGN^B"},{"name":"Gas Natural Inc.","symbol":"EGAS"},{"name":"Gastar Exploration Inc.","symbol":"GST"},{"name":"Gastar Exploration Inc.","symbol":"GST^A"},{"name":"Gastar Exploration Inc.","symbol":"GST^B"},{"name":"General Employment Enterprises, Inc.","symbol":"JOB"},{"name":"General Moly, Inc","symbol":"GMO"},{"name":"GigOptix, Inc.","symbol":"GIG"},{"name":"GlobalSCAPE, Inc.","symbol":"GSB"},{"name":"Globalstar, Inc.","symbol":"GSAT"},{"name":"Glowpoint, Inc.","symbol":"GLOW"},{"name":"Gold Resource Corporation","symbol":"GORO"},{"name":"Gold Standard Ventures Corporation","symbol":"GSV"},{"name":"Golden Minerals Company","symbol":"AUMN"},{"name":"Golden Star Resources, Ltd","symbol":"GSS"},{"name":"Goldfield Corporation (The)","symbol":"GV"},{"name":"Gorman-Rupp Company (The)","symbol":"GRC"},{"name":"Gran Tierra Energy Inc.","symbol":"GTE"},{"name":"Great Panther Silver Limited","symbol":"GPL"},{"name":"GreenHunter Resources, Inc.","symbol":"GRH"},{"name":"GreenHunter Resources, Inc.","symbol":"GRH^C"},{"name":"Grupo Simec, S.A. de C.V.","symbol":"SIM"},{"name":"GSE Systems, Inc.","symbol":"GVP"},{"name":"HC2 Holdings, Inc.","symbol":"HCHC"},{"name":"Hemispherx BioPharma, Inc.","symbol":"HEB"},{"name":"Hillman Group Capital Trust","symbol":"HLM^"},{"name":"HMG/Courtland Properties, Inc.","symbol":"HMG"},{"name":"Hooper Holmes, Inc.","symbol":"HH"},{"name":"Houston American Energy Corporation","symbol":"HUSA"},{"name":"iBio, Inc.","symbol":"IBIO"},{"name":"IBO (Listing Market - NYSE Amex Network B F)","symbol":"IBO"},{"name":"IDI, Inc.","symbol":"IDI"},{"name":"IEC Electronics Corp.","symbol":"IEC"},{"name":"ImmunoCellular Therapeutics, Ltd.","symbol":"IMUC"},{"name":"Impac Mortgage Holdings, Inc.","symbol":"IMH"},{"name":"Imperial Oil Limited","symbol":"IMO"},{"name":"Income Opportunity Realty Investors, Inc.","symbol":"IOT"},{"name":"Independence Realty Trust, Inc.","symbol":"IRT"},{"name":"India Globalization Capital Inc.","symbol":"IGC"},{"name":"India Globalization Capital Inc.","symbol":"IGC.WS"},{"name":"InfuSystems Holdings, Inc.","symbol":"INFU"},{"name":"InnSuites Hospitality Trust","symbol":"IHT"},{"name":"InspireMD, Inc.","symbol":"NSPR"},{"name":"Institutional Financial Markets, Inc.","symbol":"IFMI"},{"name":"Intellicheck Mobilisa, Inc.","symbol":"IDN"},{"name":"Intelligent Systems Corporation","symbol":"INS"},{"name":"International Tower Hill Mines Ltd","symbol":"THM"},{"name":"inTest Corporation","symbol":"INTT"},{"name":"Inuvo, Inc","symbol":"INUV"},{"name":"Invesco Advantage Municipal Income Trust II","symbol":"VKI"},{"name":"IsoRay, Inc.","symbol":"ISR"},{"name":"Issuer Direct Corporation","symbol":"ISDR"},{"name":"Iteris, Inc.","symbol":"ITI"},{"name":"Kelso Technologies Inc","symbol":"KIQ"},{"name":"Klondex Mines Ltd.","symbol":"KLDX"},{"name":"Ladenburg Thalmann Financial Services Inc","symbol":"LTS"},{"name":"Ladenburg Thalmann Financial Services Inc","symbol":"LTS^A"},{"name":"Lake Shore Gold Corp","symbol":"LSG"},{"name":"Latin America Equity Fund, Inc. (The)","symbol":"LAQ"},{"name":"LGL Group, Inc. (The)","symbol":"LGL"},{"name":"LGL Group, Inc. (The)","symbol":"LGL.WS"},{"name":"Libbey, Inc.","symbol":"LBY"},{"name":"Liberator Medical Holdings, Inc.","symbol":"LBMH"},{"name":"LiqTech International, Inc.","symbol":"LIQT"},{"name":"Lucas Energy, Inc.","symbol":"LEI"},{"name":"Mad Catz Interactive Inc","symbol":"MCZ"},{"name":"Mag Silver Corporation","symbol":"MVG"},{"name":"Majesco","symbol":"MJCO"},{"name":"Mast Therapeutics, Inc.","symbol":"MSTX"},{"name":"Mastech Holdings, Inc","symbol":"MHH"},{"name":"Medgenics, Inc.","symbol":"MDGN"},{"name":"Medgenics, Inc.","symbol":"MDGN.WS"},{"name":"Merrill Lynch & Co., Inc.","symbol":"IPB"},{"name":"Mexco Energy Corporation","symbol":"MXC"},{"name":"MFS California Insured Municipal Trust","symbol":"CCA"},{"name":"MGT Capital Investments Inc","symbol":"MGT"},{"name":"Milestone Scientific, Inc.","symbol":"MLSS"},{"name":"Minco Gold Corporation","symbol":"MGH"},{"name":"Mines Management, Inc.","symbol":"MGN"},{"name":"MuniVest Fund, Inc.","symbol":"MVF"},{"name":"MuniYield Arizona Fund, Inc.","symbol":"MZA"},{"name":"NanoViricides, Inc.","symbol":"NNVC"},{"name":"National HealthCare Corporation","symbol":"NHC"},{"name":"Navidea Biopharmaceuticals, Inc.","symbol":"NAVB"},{"name":"Network-1 Technologies, Inc.","symbol":"NTIP"},{"name":"Neuberger Berman California Intermediate Municipal Fund Inc.","symbol":"NBW"},{"name":"Neuberger Berman High Yield Strategies Fund","symbol":"NHS"},{"name":"Neuberger Berman Intermediate Municipal Fund Inc.","symbol":"NBH"},{"name":"Neuberger Berman MLP Income Fund Inc.","symbol":"NML"},{"name":"Neuberger Berman New York Intermediate Municipal Fund Inc.","symbol":"NBO"},{"name":"Neuberger Berman Real Estate Securities Income Fund, Inc.","symbol":"NRO"},{"name":"Nevada Gold & Casinos, Inc.","symbol":"UWN"},{"name":"Nevsun Resources Ltd","symbol":"NSU"},{"name":"New Concept Energy, Inc","symbol":"GBR"},{"name":"New England Realty Associates Limited Partnership","symbol":"NEN"},{"name":"NEW GOLD INC.","symbol":"NGD"},{"name":"Nobilis Health Corp.","symbol":"HLTH"},{"name":"Norsat International Inc.","symbol":"NSAT"},{"name":"Northern Dynasty Minerals, Ltd.","symbol":"NAK"},{"name":"Northern Oil and Gas, Inc.","symbol":"NOG"},{"name":"NovaBay Pharmaceuticals, Inc.","symbol":"NBY"},{"name":"NovaCopper Inc.","symbol":"NCQ"},{"name":"Novagold Resources Inc.","symbol":"NG"},{"name":"NTN Buzztime, Inc.","symbol":"NTN"},{"name":"Nuveen California Dividend Advantage Municipal Fund 2","symbol":"NVX"},{"name":"Nuveen California Dividend Advantage Municipal Fund 3","symbol":"NZH"},{"name":"Nuveen California Municipal Value Fund 2","symbol":"NCB"},{"name":"Nuveen Diversified Commodity Fund","symbol":"CFD"},{"name":"Nuveen Dividend Advantage Municipal Fund 2","symbol":"NXZ"},{"name":"Nuveen Dividend Advantage Municipal Fund 3","symbol":"NZF"},{"name":"Nuveen Dividend Advantage Municipal Income Fund","symbol":"NVG"},{"name":"Nuveen Long/Short Commodity Total Return Fund","symbol":"CTF"},{"name":"Nuveen Missouri Premium Income Municipal Fund","symbol":"NOM"},{"name":"Nuveen Municipal High Income Opportunity Fund","symbol":"NMZ"},{"name":"Nuveen New Jersey Municipal Value Fund","symbol":"NJV"},{"name":"Nuveen New York Municipal Value Fund 2","symbol":"NYV"},{"name":"Nuveen Pennsylvania Municipal Value Fund","symbol":"NPN"},{"name":"Nuveen Real Estate Fund","symbol":"JRS"},{"name":"Oragenics, Inc.","symbol":"OGEN"},{"name":"Orchids Paper Products Company","symbol":"TIS"},{"name":"Organovo Holdings, Inc.","symbol":"ONVO"},{"name":"Orient Paper, Inc.","symbol":"ONP"},{"name":"Overseas Shipholding Group, Inc.","symbol":"OSGB"},{"name":"Owens Realty Mortgage, Inc.","symbol":"ORM"},{"name":"Pacholder High Yield Fund, Inc.","symbol":"PHF"},{"name":"Pacific Booker Minerals Inc","symbol":"PBM"},{"name":"Pacific Gas & Electric Co.","symbol":"PCG^A"},{"name":"Pacific Gas & Electric Co.","symbol":"PCG^B"},{"name":"Pacific Gas & Electric Co.","symbol":"PCG^C"},{"name":"Pacific Gas & Electric Co.","symbol":"PCG^D"},{"name":"Pacific Gas & Electric Co.","symbol":"PCG^E"},{"name":"Pacific Gas & Electric Co.","symbol":"PCG^G"},{"name":"Pacific Gas & Electric Co.","symbol":"PCG^H"},{"name":"Pacific Gas & Electric Co.","symbol":"PCG^I"},{"name":"Palatin Technologies, Inc.","symbol":"PTN"},{"name":"Par Pacific Holdings, Inc.","symbol":"PARR"},{"name":"Paramount Gold Nevada Corp.","symbol":"PZG"},{"name":"Park National Corporation","symbol":"PRK"},{"name":"Pedevco Corp.","symbol":"PED"},{"name":"Pfenex Inc.","symbol":"PFNX"},{"name":"PharmAthene, Inc","symbol":"PIP"},{"name":"Pioneer Diversified High Income Trust","symbol":"HNW"},{"name":"Platinum Group Metals Ltd.","symbol":"PLG"},{"name":"Polymet Mining Corp.","symbol":"PLM"},{"name":"Power REIT","symbol":"PW"},{"name":"Power REIT","symbol":"PW^A"},{"name":"Protalix BioTherapeutics, Inc.","symbol":"PLX"},{"name":"Provectus Biopharmaceuticals, Inc.","symbol":"PVCT"},{"name":"Provectus Biopharmaceuticals, Inc.","symbol":"PVCT.WS"},{"name":"Radiant Logistics, Inc.","symbol":"RLGT"},{"name":"Radiant Logistics, Inc.","symbol":"RLGT^A"},{"name":"Rare Element Resources Ltd.","symbol":"REE"},{"name":"Reaves Utility Income Fund","symbol":"UTG"},{"name":"Reaves Utility Income Fund","symbol":"UTG~"},{"name":"Reeds, Inc.","symbol":"REED"},{"name":"RELM Wireless Corporation","symbol":"RWC"},{"name":"RENN Fund, Inc.","symbol":"RCG"},{"name":"Retractable Technologies, Inc.","symbol":"RVP"},{"name":"Rexahn Pharmaceuticals, Inc.","symbol":"RNN"},{"name":"Richmont Mines, Inc.","symbol":"RIC"},{"name":"Ring Energy, Inc.","symbol":"REI"},{"name":"RMR Real Estate Income Fund.","symbol":"RIF"},{"name":"Rubicon Minerals Corp","symbol":"RBY"},{"name":"Saga Communications, Inc.","symbol":"SGA"},{"name":"Samson Oil & Gas Limited","symbol":"SSN"},{"name":"Sanchez Production Partners LP","symbol":"SPP"},{"name":"Sandstorm Gold Ltd","symbol":"SAND"},{"name":"Seaboard Corporation","symbol":"SEB"},{"name":"Servotronics, Inc.","symbol":"SVT"},{"name":"SIFCO Industries, Inc.","symbol":"SIF"},{"name":"Skyline Corporation","symbol":"SKY"},{"name":"SL Industries, Inc.","symbol":"SLI"},{"name":"Solitario Exploration & Royalty Corp","symbol":"XPL"},{"name":"Southern California Edison Company","symbol":"SCE^B"},{"name":"Southern California Edison Company","symbol":"SCE^C"},{"name":"Southern California Edison Company","symbol":"SCE^D"},{"name":"Southern California Edison Company","symbol":"SCE^E"},{"name":"Southwest Georgia Financial Corporation","symbol":"SGB"},{"name":"Spark Networks, Inc.","symbol":"LOV"},{"name":"Straight Path Communications Inc.","symbol":"STRP"},{"name":"SunLink Health Systems, Inc.","symbol":"SSY"},{"name":"Superior Drilling Products, Inc.","symbol":"SDPI"},{"name":"Supreme Industries, Inc.","symbol":"STS"},{"name":"Synergy Resources Corporation","symbol":"SYRG"},{"name":"Synthetic Biologics, Inc","symbol":"SYN"},{"name":"Tanzanian Royalty Exploration Corporation","symbol":"TRX"},{"name":"Taseko Mines Limited","symbol":"TGB"},{"name":"Tasman Metals Ltd","symbol":"TAS"},{"name":"Tejon Ranch Co","symbol":"TRC.WS"},{"name":"Tel-Instrument Electronics Corp.","symbol":"TIK"},{"name":"Tengasco, Inc.","symbol":"TGC"},{"name":"The Gabelli Global Utility and Income Trust","symbol":"GLU"},{"name":"The Gabelli Global Utility and Income Trust","symbol":"GLU^A"},{"name":"TherapeuticsMD, Inc.","symbol":"TXMD"},{"name":"Tianyin Pharmaceutical Co., Inc.","symbol":"TPI"},{"name":"Timberline Resources Corporation","symbol":"TLR"},{"name":"Timmons Gold Corp","symbol":"TGD"},{"name":"Tofutti Brands Inc.","symbol":"TOF"},{"name":"Tompkins Financial Corporation","symbol":"TMP"},{"name":"Transatlantic Petroleum Ltd","symbol":"TAT"},{"name":"TransEnterix, Inc.","symbol":"TRXC"},{"name":"Triangle Petroleum Corporation","symbol":"TPLM"},{"name":"Trio-Tech International","symbol":"TRT"},{"name":"U.S. Geothermal Inc.","symbol":"HTM"},{"name":"Unique Fabricating, Inc.","symbol":"UFAB"},{"name":"United States Antimony Corporation","symbol":"UAMY"},{"name":"Universal Security Instruments, Inc.","symbol":"UUU"},{"name":"UQM TECHNOLOGIES INC","symbol":"UQM"},{"name":"Ur Energy Inc","symbol":"URG"},{"name":"Uranium Energy Corp.","symbol":"UEC"},{"name":"Versar, Inc.","symbol":"VSR"},{"name":"Vicon Industries, Inc.","symbol":"VII"},{"name":"VirnetX Holding Corp","symbol":"VHC"},{"name":"Vista Gold Corporation","symbol":"VGZ"},{"name":"VolitionRX Limited","symbol":"VNRX"},{"name":"Volt Information Sciences, Inc.","symbol":"VISI"},{"name":"Wells Fargo Advantage Income Opportunities Fund","symbol":"EAD"},{"name":"Wells Fargo Advantage Multi-Sector Income Fund","symbol":"ERC"},{"name":"Wells Fargo Advantage Utilities and High Income Fund","symbol":"ERH"},{"name":"Western Asset Intermediate Muni Fund Inc","symbol":"SBI"},{"name":"Western Copper and Gold Corporation","symbol":"WRN"},{"name":"WidePoint Corporation","symbol":"WYY"},{"name":"Wireless Telecom Group,  Inc.","symbol":"WTT"},{"name":"Xtant Medical Holdings, Inc.","symbol":"XTNT"},{"name":"Yuma Energy, Inc.","symbol":"YUMA"},{"name":"Yuma Energy, Inc.","symbol":"YUMA^A"},{"name":"1347 Capital Corp.","symbol":"TFSC"},{"name":"1347 Capital Corp.","symbol":"TFSCR"},{"name":"1347 Capital Corp.","symbol":"TFSCU"},{"name":"1347 Capital Corp.","symbol":"TFSCW"},{"name":"1347 Property Insurance Holdings, Inc.","symbol":"PIH"},{"name":"1-800 FLOWERS.COM, Inc.","symbol":"FLWS"},{"name":"1st Century Bancshares, Inc","symbol":"FCTY"},{"name":"1st Constitution Bancorp (NJ)","symbol":"FCCY"},{"name":"1st Source Corporation","symbol":"SRCE"},{"name":"21Vianet Group, Inc.","symbol":"VNET"},{"name":"2U, Inc.","symbol":"TWOU"},{"name":"3X Inverse Gold ETN Velocityshares","symbol":"DGLD"},{"name":"3X Inverse Silver ETN Velocityshares","symbol":"DSLV"},{"name":"3X Long Gold ETN Velocityshares","symbol":"UGLD"},{"name":"3X Long Silver ETN Velocityshares","symbol":"USLV"},{"name":"51job, Inc.","symbol":"JOBS"},{"name":"6D Global Technologies, Inc.","symbol":"SIXD"},{"name":"8point3 Energy Partners LP","symbol":"CAFD"},{"name":"8x8 Inc","symbol":"EGHT"},{"name":"A V Homes, Inc.","symbol":"AVHI"},{"name":"A. Schulman, Inc.","symbol":"SHLM"},{"name":"AAON, Inc.","symbol":"AAON"},{"name":"ABAXIS, Inc.","symbol":"ABAX"},{"name":"Abengoa Yield plc","symbol":"ABY"},{"name":"Abengoa, S.A.","symbol":"ABGB"},{"name":"Abeona Therapeutics Inc.","symbol":"ABEO"},{"name":"Abeona Therapeutics Inc.","symbol":"ABEOW"},{"name":"ABIOMED, Inc.","symbol":"ABMD"},{"name":"Abraxas Petroleum Corporation","symbol":"AXAS"},{"name":"Acacia Research Corporation","symbol":"ACTG"},{"name":"Acadia Healthcare Company, Inc.","symbol":"ACHC"},{"name":"ACADIA Pharmaceuticals Inc.","symbol":"ACAD"},{"name":"Acasti Pharma, Inc.","symbol":"ACST"},{"name":"Accelerate Diagnostics, Inc.","symbol":"AXDX"},{"name":"Acceleron Pharma Inc.","symbol":"XLRN"},{"name":"Access National Corporation","symbol":"ANCX"},{"name":"Accuray Incorporated","symbol":"ARAY"},{"name":"AccuShares Spot CBOE VIX Down Shares","symbol":"VXDN"},{"name":"AccuShares Spot CBOE VIX Up Shares","symbol":"VXUP"},{"name":"AcelRx Pharmaceuticals, Inc.","symbol":"ACRX"},{"name":"Aceto Corporation","symbol":"ACET"},{"name":"Achaogen, Inc.","symbol":"AKAO"},{"name":"Achillion Pharmaceuticals, Inc.","symbol":"ACHN"},{"name":"ACI Worldwide, Inc.","symbol":"ACIW"},{"name":"Aclaris Therapeutics, Inc.","symbol":"ACRS"},{"name":"ACNB Corporation","symbol":"ACNB"},{"name":"Acorda Therapeutics, Inc.","symbol":"ACOR"},{"name":"Actions Semiconductor Co., Ltd.","symbol":"ACTS"},{"name":"Active Power, Inc.","symbol":"ACPW"},{"name":"Activision Blizzard, Inc","symbol":"ATVI"},{"name":"Actua Corporation","symbol":"ACTA"},{"name":"Acura Pharmaceuticals, Inc.","symbol":"ACUR"},{"name":"Acxiom Corporation","symbol":"ACXM"},{"name":"Adamas Pharmaceuticals, Inc.","symbol":"ADMS"},{"name":"Adamis Pharmaceuticals Corporation","symbol":"ADMP"},{"name":"Adaptimmune Therapeutics plc","symbol":"ADAP"},{"name":"Addus HomeCare Corporation","symbol":"ADUS"},{"name":"ADDvantage Technologies Group, Inc.","symbol":"AEY"},{"name":"Adesto Technologies Corporation","symbol":"IOTS"},{"name":"ADMA Biologics Inc","symbol":"ADMA"},{"name":"Adobe Systems Incorporated","symbol":"ADBE"},{"name":"ADTRAN, Inc.","symbol":"ADTN"},{"name":"Aduro Biotech, Inc.","symbol":"ADRO"},{"name":"Advanced Accelerator Applications S.A.","symbol":"AAAP"},{"name":"Advanced Energy Industries, Inc.","symbol":"AEIS"},{"name":"Advanced Micro Devices, Inc.","symbol":"AMD"},{"name":"Advaxis, Inc.","symbol":"ADXS"},{"name":"Advaxis, Inc.","symbol":"ADXSW"},{"name":"AdvisorShares Market Adaptive Unconstrained Income ETF","symbol":"MAUI"},{"name":"AdvisorShares YieldPro ETF","symbol":"YPRO"},{"name":"Aegerion Pharmaceuticals, Inc.","symbol":"AEGR"},{"name":"Aegion Corp","symbol":"AEGN"},{"name":"Aehr Test Systems","symbol":"AEHR"},{"name":"Aemetis, Inc","symbol":"AMTX"},{"name":"AEP Industries Inc.","symbol":"AEPI"},{"name":"Aerie Pharmaceuticals, Inc.","symbol":"AERI"},{"name":"AeroVironment, Inc.","symbol":"AVAV"},{"name":"AEterna Zentaris Inc.","symbol":"AEZS"},{"name":"Aethlon Medical, Inc.","symbol":"AEMD"},{"name":"Affimed N.V.","symbol":"AFMD"},{"name":"Affymetrix, Inc.","symbol":"AFFX"},{"name":"Agenus Inc.","symbol":"AGEN"},{"name":"Agile Therapeutics, Inc.","symbol":"AGRX"},{"name":"Agilysys, Inc.","symbol":"AGYS"},{"name":"Agios Pharmaceuticals, Inc.","symbol":"AGIO"},{"name":"AgroFresh Solutions, Inc.","symbol":"AGFS"},{"name":"AgroFresh Solutions, Inc.","symbol":"AGFSW"},{"name":"Aimmune Therapeutics, Inc.","symbol":"AIMT"},{"name":"Air Methods Corporation","symbol":"AIRM"},{"name":"Air T, Inc.","symbol":"AIRT"},{"name":"Air Transport Services Group, Inc","symbol":"ATSG"},{"name":"AirMedia Group Inc","symbol":"AMCN"},{"name":"Aixtron SE","symbol":"AIXG"},{"name":"Akamai Technologies, Inc.","symbol":"AKAM"},{"name":"Akari Therapeutics Plc","symbol":"AKTX"},{"name":"Akebia Therapeutics, Inc.","symbol":"AKBA"},{"name":"Akers Biosciences Inc","symbol":"AKER"},{"name":"Akorn, Inc.","symbol":"AKRX"},{"name":"Alarm.com Holdings, Inc.","symbol":"ALRM"},{"name":"Alaska Communications Systems Group, Inc.","symbol":"ALSK"},{"name":"Albany Molecular Research, Inc.","symbol":"AMRI"},{"name":"Alcentra Capital Corp.","symbol":"ABDC"},{"name":"Alcobra Ltd.","symbol":"ADHD"},{"name":"Alder BioPharmaceuticals, Inc.","symbol":"ALDR"},{"name":"Aldeyra Therapeutics, Inc.","symbol":"ALDX"},{"name":"Alexion Pharmaceuticals, Inc.","symbol":"ALXN"},{"name":"Alexza Pharmaceuticals, Inc.","symbol":"ALXA"},{"name":"Alico, Inc.","symbol":"ALCO"},{"name":"Align Technology, Inc.","symbol":"ALGN"},{"name":"Alimera Sciences, Inc.","symbol":"ALIM"},{"name":"Alkermes plc","symbol":"ALKS"},{"name":"Allegiance Bancshares, Inc.","symbol":"ABTX"},{"name":"Allegiant Travel Company","symbol":"ALGT"},{"name":"Alliance Fiber Optic Products, Inc.","symbol":"AFOP"},{"name":"Alliance HealthCare Services, Inc.","symbol":"AIQ"},{"name":"Alliance Holdings GP, L.P.","symbol":"AHGP"},{"name":"Alliance Resource Partners, L.P.","symbol":"ARLP"},{"name":"Allied Healthcare Products, Inc.","symbol":"AHPI"},{"name":"Allied Motion Technologies, Inc.","symbol":"AMOT"},{"name":"Alliqua BioMedical, Inc.","symbol":"ALQA"},{"name":"Allot Communications Ltd.","symbol":"ALLT"},{"name":"Allscripts Healthcare Solutions, Inc.","symbol":"MDRX"},{"name":"Almost Family Inc","symbol":"AFAM"},{"name":"Alnylam Pharmaceuticals, Inc.","symbol":"ALNY"},{"name":"Alpha and Omega Semiconductor Limited","symbol":"AOSL"},{"name":"Alphabet Inc.","symbol":"GOOG"},{"name":"Alphabet Inc.","symbol":"GOOGL"},{"name":"AlphaMark Actively Managed Small Cap ETF","symbol":"SMCP"},{"name":"Alphatec Holdings, Inc.","symbol":"ATEC"},{"name":"Altera Corporation","symbol":"ALTR"},{"name":"Altisource Portfolio Solutions S.A.","symbol":"ASPS"},{"name":"Altra Industrial Motion Corp.","symbol":"AIMC"},{"name":"AMAG Pharmaceuticals, Inc.","symbol":"AMAG"},{"name":"Amarin Corporation PLC","symbol":"AMRN"},{"name":"A-Mark Precious Metals, Inc.","symbol":"AMRK"},{"name":"Amaya Inc.","symbol":"AYA"},{"name":"Amazon.com, Inc.","symbol":"AMZN"},{"name":"Ambac Financial Group, Inc.","symbol":"AMBC"},{"name":"Ambac Financial Group, Inc.","symbol":"AMBCW"},{"name":"Ambarella, Inc.","symbol":"AMBA"},{"name":"AMC Networks Inc.","symbol":"AMCX"},{"name":"Amdocs Limited","symbol":"DOX"},{"name":"Amedica Corporation","symbol":"AMDA"},{"name":"Amedisys Inc","symbol":"AMED"},{"name":"Amerco","symbol":"UHAL"},{"name":"Ameriana Bancorp","symbol":"ASBI"},{"name":"America First Multifamily Investors, L.P.","symbol":"ATAX"},{"name":"America Movil, S.A.B. de C.V.","symbol":"AMOV"},{"name":"American Airlines Group, Inc.","symbol":"AAL"},{"name":"American Capital Agency Corp.","symbol":"AGNC"},{"name":"American Capital Agency Corp.","symbol":"AGNCB"},{"name":"American Capital Agency Corp.","symbol":"AGNCP"},{"name":"American Capital Mortgage Investment Corp.","symbol":"MTGE"},{"name":"American Capital Mortgage Investment Corp.","symbol":"MTGEP"},{"name":"American Capital Senior Floating, Ltd.","symbol":"ACSF"},{"name":"American Capital, Ltd.","symbol":"ACAS"},{"name":"American Caresource Holdings Inc","symbol":"GNOW"},{"name":"American Electric Technologies, Inc.","symbol":"AETI"},{"name":"American Independence Corp.","symbol":"AMIC"},{"name":"American National Bankshares, Inc.","symbol":"AMNB"},{"name":"American National Insurance Company","symbol":"ANAT"},{"name":"American Public Education, Inc.","symbol":"APEI"},{"name":"American Railcar Industries, Inc.","symbol":"ARII"},{"name":"American River Bankshares","symbol":"AMRB"},{"name":"American Science and Engineering, Inc.","symbol":"ASEI"},{"name":"American Software, Inc.","symbol":"AMSWA"},{"name":"American Superconductor Corporation","symbol":"AMSC"},{"name":"American Woodmark Corporation","symbol":"AMWD"},{"name":"America&#39;s Car-Mart, Inc.","symbol":"CRMT"},{"name":"Ameris Bancorp","symbol":"ABCB"},{"name":"AMERISAFE, Inc.","symbol":"AMSF"},{"name":"AmeriServ Financial Inc.","symbol":"ASRV"},{"name":"AmeriServ Financial Inc.","symbol":"ASRVP"},{"name":"Ames National Corporation","symbol":"ATLO"},{"name":"Amgen Inc.","symbol":"AMGN"},{"name":"Amicus Therapeutics, Inc.","symbol":"FOLD"},{"name":"Amkor Technology, Inc.","symbol":"AMKR"},{"name":"Amphastar Pharmaceuticals, Inc.","symbol":"AMPH"},{"name":"Amsurg Corp.","symbol":"AMSG"},{"name":"Amsurg Corp.","symbol":"AMSGP"},{"name":"Amtech Systems, Inc.","symbol":"ASYS"},{"name":"AmTrust Financial Services, Inc.","symbol":"AFSI"},{"name":"Amyris, Inc.","symbol":"AMRS"},{"name":"Anacor Pharmaceuticals, Inc.","symbol":"ANAC"},{"name":"ANADIGICS, Inc.","symbol":"ANAD"},{"name":"Analog Devices, Inc.","symbol":"ADI"},{"name":"Analogic Corporation","symbol":"ALOG"},{"name":"Anavex Life Sciences Corp.","symbol":"AVXL"},{"name":"Anchor Bancorp","symbol":"ANCB"},{"name":"Anchor BanCorp Wisconsin Inc.","symbol":"ABCW"},{"name":"Andina Acquisition Corp. II","symbol":"ANDAU"},{"name":"Angie&#39;s List, Inc.","symbol":"ANGI"},{"name":"AngioDynamics, Inc.","symbol":"ANGO"},{"name":"ANI Pharmaceuticals, Inc.","symbol":"ANIP"},{"name":"Anika Therapeutics Inc.","symbol":"ANIK"},{"name":"ANSYS, Inc.","symbol":"ANSS"},{"name":"Antares Pharma, Inc.","symbol":"ATRS"},{"name":"Anterios, Inc.","symbol":"ANTE"},{"name":"Anthera Pharmaceuticals, Inc.","symbol":"ANTH"},{"name":"Aoxin Tianli Group, Inc.","symbol":"ABAC"},{"name":"API Technologies Corp.","symbol":"ATNY"},{"name":"Apigee Corporation","symbol":"APIC"},{"name":"Apogee Enterprises, Inc.","symbol":"APOG"},{"name":"Apollo Education Group, Inc.","symbol":"APOL"},{"name":"Apollo Investment Corporation","symbol":"AINV"},{"name":"Apollo Medical Holdings, Inc.","symbol":"AMEH"},{"name":"AppFolio, Inc.","symbol":"APPF"},{"name":"Apple Inc.","symbol":"AAPL"},{"name":"Appliance Recycling Centers of America, Inc.","symbol":"ARCI"},{"name":"Applied DNA Sciences Inc","symbol":"APDN"},{"name":"Applied DNA Sciences Inc","symbol":"APDNW"},{"name":"Applied Genetic Technologies Corporation","symbol":"AGTC"},{"name":"Applied Materials, Inc.","symbol":"AMAT"},{"name":"Applied Micro Circuits Corporation","symbol":"AMCC"},{"name":"Applied Optoelectronics, Inc.","symbol":"AAOI"},{"name":"Approach Resources Inc.","symbol":"AREX"},{"name":"Apricus Biosciences, Inc","symbol":"APRI"},{"name":"Aptose Biosciences, Inc.","symbol":"APTO"},{"name":"Aqua Metals, Inc.","symbol":"AQMS"},{"name":"Aquinox Pharmaceuticals, Inc.","symbol":"AQXP"},{"name":"AR Capital Acquisition Corp.","symbol":"AUMA"},{"name":"AR Capital Acquisition Corp.","symbol":"AUMAU"},{"name":"AR Capital Acquisition Corp.","symbol":"AUMAW"},{"name":"Aradigm Corporation","symbol":"ARDM"},{"name":"Aratana Therapeutics, Inc.","symbol":"PETX"},{"name":"ArborGen Inc.","symbol":"ARBR"},{"name":"Arbutus Biopharma Corporation","symbol":"ABUS"},{"name":"ARC Group Worldwide, Inc.","symbol":"ARCW"},{"name":"ARCA biopharma, Inc.","symbol":"ABIO"},{"name":"Arcadia Biosciences, Inc.","symbol":"RKDA"},{"name":"ArcBest Corporation","symbol":"ARCB"},{"name":"Arch Capital Group Ltd.","symbol":"ACGL"},{"name":"Archrock Partners, L.P.","symbol":"APLP"},{"name":"Arctic Cat Inc.","symbol":"ACAT"},{"name":"Ardelyx, Inc.","symbol":"ARDX"},{"name":"Arena Pharmaceuticals, Inc.","symbol":"ARNA"},{"name":"Ares Capital Corporation","symbol":"ARCC"},{"name":"Argo Group International Holdings, Ltd.","symbol":"AGII"},{"name":"Argo Group International Holdings, Ltd.","symbol":"AGIIL"},{"name":"Argos Therapeutics, Inc.","symbol":"ARGS"},{"name":"ARI Network Services, Inc.","symbol":"ARIS"},{"name":"ARIAD Pharmaceuticals, Inc.","symbol":"ARIA"},{"name":"Ark Restaurants Corp.","symbol":"ARKR"},{"name":"ARM Holdings plc","symbol":"ARMH"},{"name":"Arotech Corporation","symbol":"ARTX"},{"name":"Arowana Inc.","symbol":"ARWA"},{"name":"Arowana Inc.","symbol":"ARWAR"},{"name":"Arowana Inc.","symbol":"ARWAU"},{"name":"Arowana Inc.","symbol":"ARWAW"},{"name":"ArQule, Inc.","symbol":"ARQL"},{"name":"Array BioPharma Inc.","symbol":"ARRY"},{"name":"ARRIS Group, Inc.","symbol":"ARRS"},{"name":"Arrow DWA Tactical ETF","symbol":"DWAT"},{"name":"Arrow Financial Corporation","symbol":"AROW"},{"name":"Arrowhead Research Corporation","symbol":"ARWR"},{"name":"Artesian Resources Corporation","symbol":"ARTNA"},{"name":"Art&#39;s-Way Manufacturing Co., Inc.","symbol":"ARTW"},{"name":"Asante Solutions, Inc.","symbol":"PUMP"},{"name":"ASB Bancorp, Inc.","symbol":"ASBB"},{"name":"Ascena Retail Group, Inc.","symbol":"ASNA"},{"name":"Ascendis Pharma A/S","symbol":"ASND"},{"name":"Ascent Capital Group, Inc.","symbol":"ASCMA"},{"name":"Ascent Solar Technologies, Inc.","symbol":"ASTI"},{"name":"Asia Pacific Wire & Cable Corporation Limited","symbol":"APWC"},{"name":"ASML Holding N.V.","symbol":"ASML"},{"name":"Aspen Technology, Inc.","symbol":"AZPN"},{"name":"Assembly Biosciences, Inc.","symbol":"ASMB"},{"name":"Asta Funding, Inc.","symbol":"ASFI"},{"name":"Astec Industries, Inc.","symbol":"ASTE"},{"name":"Astro-Med, Inc.","symbol":"ALOT"},{"name":"Astronics Corporation","symbol":"ATRO"},{"name":"Astrotech Corporation","symbol":"ASTC"},{"name":"Asure Software Inc","symbol":"ASUR"},{"name":"ATA Inc.","symbol":"ATAI"},{"name":"Atara Biotherapeutics, Inc.","symbol":"ATRA"},{"name":"athenahealth, Inc.","symbol":"ATHN"},{"name":"Athens Bancshares Corporation","symbol":"AFCB"},{"name":"Athersys, Inc.","symbol":"ATHX"},{"name":"Atlantic Alliance Partnership Corp.","symbol":"AAPC"},{"name":"Atlantic American Corporation","symbol":"AAME"},{"name":"Atlantic Capital Bancshares, Inc.","symbol":"ACBI"},{"name":"Atlantic Coast Financial Corporation","symbol":"ACFC"},{"name":"Atlantic Tele-Network, Inc.","symbol":"ATNI"},{"name":"Atlanticus Holdings Corporation","symbol":"ATLC"},{"name":"Atlas Air Worldwide Holdings","symbol":"AAWW"},{"name":"Atlas Financial Holdings, Inc.","symbol":"AFH"},{"name":"Atmel Corporation","symbol":"ATML"},{"name":"Atossa Genetics Inc.","symbol":"ATOS"},{"name":"AtriCure, Inc.","symbol":"ATRC"},{"name":"ATRION Corporation","symbol":"ATRI"},{"name":"Attunity Ltd.","symbol":"ATTU"},{"name":"aTyr Pharma, Inc.","symbol":"LIFE"},{"name":"Auburn National Bancorporation, Inc.","symbol":"AUBN"},{"name":"AudioCodes Ltd.","symbol":"AUDC"},{"name":"Aurinia Pharmaceuticals Inc","symbol":"AUPH"},{"name":"Auris Medical Holding AG","symbol":"EARS"},{"name":"Authentidate Holding Corp.","symbol":"ADAT"},{"name":"Autobytel Inc.","symbol":"ABTL"},{"name":"Autodesk, Inc.","symbol":"ADSK"},{"name":"AutoGenomics, Inc.","symbol":"AGMX"},{"name":"Automatic Data Processing, Inc.","symbol":"ADP"},{"name":"Avago Technologies Limited","symbol":"AVGO"},{"name":"Avalanche Biotechnologies, Inc.","symbol":"AAVL"},{"name":"Avenue Financial Holdings, Inc.","symbol":"AVNU"},{"name":"AVEO Pharmaceuticals, Inc.","symbol":"AVEO"},{"name":"Aviat Networks, Inc.","symbol":"AVNW"},{"name":"Avid Technology, Inc.","symbol":"AVID"},{"name":"Avinger, Inc.","symbol":"AVGR"},{"name":"Avis Budget Group, Inc.","symbol":"CAR"},{"name":"Aware, Inc.","symbol":"AWRE"},{"name":"Axcelis Technologies, Inc.","symbol":"ACLS"},{"name":"Axion Power International, Inc.","symbol":"AXPW"},{"name":"Axion Power International, Inc.","symbol":"AXPWW"},{"name":"AxoGen, Inc.","symbol":"AXGN"},{"name":"Axsome Therapeutics, Inc.","symbol":"AXSM"},{"name":"AXT Inc","symbol":"AXTI"},{"name":"B Communications Ltd.","symbol":"BCOM"},{"name":"B. Riley Financial, Inc.","symbol":"RILY"},{"name":"B.O.S. Better Online Solutions","symbol":"BOSC"},{"name":"B/E Aerospace, Inc.","symbol":"BEAV"},{"name":"Baidu, Inc.","symbol":"BIDU"},{"name":"Balchem Corporation","symbol":"BCPC"},{"name":"Baldwin & Lyons, Inc.","symbol":"BWINA"},{"name":"Baldwin & Lyons, Inc.","symbol":"BWINB"},{"name":"Ballard Power Systems, Inc.","symbol":"BLDP"},{"name":"BancFirst Corporation","symbol":"BANF"},{"name":"BancFirst Corporation","symbol":"BANFP"},{"name":"Bank Mutual Corporation","symbol":"BKMU"},{"name":"Bank of Commerce Holdings (CA)","symbol":"BOCH"},{"name":"Bank of Marin Bancorp","symbol":"BMRC"},{"name":"Bank of South Carolina Corp.","symbol":"BKSC"},{"name":"Bank of the James Financial Group, Inc.","symbol":"BOTJ"},{"name":"Bank of the Ozarks","symbol":"OZRK"},{"name":"BankFinancial Corporation","symbol":"BFIN"},{"name":"Bankwell Financial Group, Inc.","symbol":"BWFG"},{"name":"Banner Corporation","symbol":"BANR"},{"name":"Baozun Inc.","symbol":"BZUN"},{"name":"Barclays Plc","symbol":"TAPR"},{"name":"Barington/Hilco Acquisition Corp.","symbol":"BHAC"},{"name":"Barington/Hilco Acquisition Corp.","symbol":"BHACR"},{"name":"Barington/Hilco Acquisition Corp.","symbol":"BHACU"},{"name":"Barington/Hilco Acquisition Corp.","symbol":"BHACW"},{"name":"Barrett Business Services, Inc.","symbol":"BBSI"},{"name":"Bassett Furniture Industries, Incorporated","symbol":"BSET"},{"name":"Bay Bancorp, Inc.","symbol":"BYBK"},{"name":"Baylake Corp","symbol":"BYLK"},{"name":"Bazaarvoice, Inc.","symbol":"BV"},{"name":"BBCN Bancorp, Inc.","symbol":"BBCN"},{"name":"BCB Bancorp, Inc. (NJ)","symbol":"BCBP"},{"name":"BDCA Venture, Inc.","symbol":"BDCV"},{"name":"Beacon Roofing Supply, Inc.","symbol":"BECN"},{"name":"Bear State Financial, Inc.","symbol":"BSF"},{"name":"Beasley Broadcast Group, Inc.","symbol":"BBGI"},{"name":"bebe stores, inc.","symbol":"BEBE"},{"name":"Bed Bath & Beyond Inc.","symbol":"BBBY"},{"name":"Bel Fuse Inc.","symbol":"BELFA"},{"name":"Bel Fuse Inc.","symbol":"BELFB"},{"name":"Bellerophon Therapeutics, Inc.","symbol":"BLPH"},{"name":"Bellicum Pharmaceuticals, Inc.","symbol":"BLCM"},{"name":"Beneficial Bancorp, Inc.","symbol":"BNCL"},{"name":"Benefitfocus, Inc.","symbol":"BNFT"},{"name":"Benitec Biopharma Limited","symbol":"BNTC"},{"name":"Benitec Biopharma Limited","symbol":"BNTCW"},{"name":"BGC Partners, Inc.","symbol":"BGCP"},{"name":"Big 5 Sporting Goods Corporation","symbol":"BGFV"},{"name":"BIND Therapeutics, Inc.","symbol":"BIND"},{"name":"Bio Blast Pharma Ltd.","symbol":"ORPN"},{"name":"Bioanalytical Systems, Inc.","symbol":"BASI"},{"name":"BioCardia, Inc.","symbol":"BCDA"},{"name":"Biocept, Inc.","symbol":"BIOC"},{"name":"BioCryst Pharmaceuticals, Inc.","symbol":"BCRX"},{"name":"Biodel Inc.","symbol":"BIOD"},{"name":"BioDelivery Sciences International, Inc.","symbol":"BDSI"},{"name":"Biogen Inc.","symbol":"BIIB"},{"name":"Biolase, Inc.","symbol":"BIOL"},{"name":"BioLife Solutions, Inc.","symbol":"BLFS"},{"name":"BioLineRx Ltd.","symbol":"BLRX"},{"name":"BioMarin Pharmaceutical Inc.","symbol":"BMRN"},{"name":"BiondVax Pharmaceuticals Ltd.","symbol":"BVXV"},{"name":"BiondVax Pharmaceuticals Ltd.","symbol":"BVXVW"},{"name":"Bio-Path Holdings, Inc.","symbol":"BPTH"},{"name":"BioScrip, Inc.","symbol":"BIOS"},{"name":"BioShares Biotechnology Clinical Trials Fund","symbol":"BBC"},{"name":"BioShares Biotechnology Products Fund","symbol":"BBP"},{"name":"BioSpecifics Technologies Corp","symbol":"BSTC"},{"name":"Biostar Pharmaceuticals, Inc.","symbol":"BSPM"},{"name":"Biota Pharmaceuticals, Inc.","symbol":"BOTA"},{"name":"Bio-Techne Corp","symbol":"TECH"},{"name":"BioTelemetry, Inc.","symbol":"BEAT"},{"name":"Biotie Therapies Corp.","symbol":"BITI"},{"name":"Birner Dental Management Services, Inc.","symbol":"BDMS"},{"name":"BJ&#39;s Restaurants, Inc.","symbol":"BJRI"},{"name":"Black Box Corporation","symbol":"BBOX"},{"name":"Black Diamond, Inc.","symbol":"BDE"},{"name":"Blackbaud, Inc.","symbol":"BLKB"},{"name":"BlackBerry Limited","symbol":"BBRY"},{"name":"Blackhawk Network Holdings, Inc.","symbol":"HAWK"},{"name":"BlackRock Capital Investment Corporation","symbol":"BKCC"},{"name":"BLDRS Asia 50 ADR Index Fund","symbol":"ADRA"},{"name":"BLDRS Developed Markets 100 ADR Index Fund","symbol":"ADRD"},{"name":"BLDRS Emerging Markets 50 ADR Index Fund","symbol":"ADRE"},{"name":"BLDRS Europe 100 ADR Index Fund","symbol":"ADRU"},{"name":"Bloomin&#39; Brands, Inc.","symbol":"BLMN"},{"name":"Blucora, Inc.","symbol":"BCOR"},{"name":"Blue Bird Corporation","symbol":"BLBD"},{"name":"Blue Buffalo Pet Products, Inc.","symbol":"BUFF"},{"name":"Blue Earth, Inc.","symbol":"BBLU"},{"name":"Blue Hills Bancorp, Inc.","symbol":"BHBK"},{"name":"Blue Nile, Inc.","symbol":"NILE"},{"name":"bluebird bio, Inc.","symbol":"BLUE"},{"name":"Blueknight Energy Partners L.P., L.L.C.","symbol":"BKEP"},{"name":"Blueknight Energy Partners L.P., L.L.C.","symbol":"BKEPP"},{"name":"Blueprint Medicines Corporation","symbol":"BPMC"},{"name":"BlueStar TA-BIGITech Israel Technology ETF","symbol":"ITEQ"},{"name":"BNC Bancorp","symbol":"BNCN"},{"name":"Bob Evans Farms, Inc.","symbol":"BOBE"},{"name":"BofI Holding, Inc.","symbol":"BOFI"},{"name":"Boingo Wireless, Inc.","symbol":"WIFI"},{"name":"Bojangles&#39;, Inc.","symbol":"BOJA"},{"name":"BOK Financial Corporation","symbol":"BOKF"},{"name":"Bona Film Group Limited","symbol":"BONA"},{"name":"Bonso Electronics International, Inc.","symbol":"BNSO"},{"name":"Books-A-Million, Inc.","symbol":"BAMM"},{"name":"Boston Private Financial Holdings, Inc.","symbol":"BPFH"},{"name":"Boston Private Financial Holdings, Inc.","symbol":"BPFHP"},{"name":"Boston Private Financial Holdings, Inc.","symbol":"BPFHW"},{"name":"Bottomline Technologies, Inc.","symbol":"EPAY"},{"name":"Boulder Brands, Inc.","symbol":"BDBD"},{"name":"Boulevard Acquisition Corp. II","symbol":"BLVD"},{"name":"Boulevard Acquisition Corp. II","symbol":"BLVDU"},{"name":"Boulevard Acquisition Corp. II","symbol":"BLVDW"},{"name":"Boxlight Corporation","symbol":"BOXL"},{"name":"Brainstorm Cell Therapeutics Inc.","symbol":"BCLI"},{"name":"Bravo Brio Restaurant Group, Inc.","symbol":"BBRG"},{"name":"Breitburn Energy Partners LP","symbol":"BBEP"},{"name":"Breitburn Energy Partners LP","symbol":"BBEPP"},{"name":"Bridge Bancorp, Inc.","symbol":"BDGE"},{"name":"Bridgeline Digital, Inc.","symbol":"BLIN"},{"name":"Bridgford Foods Corporation","symbol":"BRID"},{"name":"Brightcove Inc.","symbol":"BCOV"},{"name":"Broadcom Corporation","symbol":"BRCM"},{"name":"BroadSoft, Inc.","symbol":"BSFT"},{"name":"BroadVision, Inc.","symbol":"BVSN"},{"name":"Broadway Financial Corporation","symbol":"BYFC"},{"name":"Broadwind Energy, Inc.","symbol":"BWEN"},{"name":"Brocade Communications Systems, Inc.","symbol":"BRCD"},{"name":"Brookline Bancorp, Inc.","symbol":"BRKL"},{"name":"Brooks Automation, Inc.","symbol":"BRKS"},{"name":"Bruker Corporation","symbol":"BRKR"},{"name":"Bryn Mawr Bank Corporation","symbol":"BMTC"},{"name":"BSB Bancorp, Inc.","symbol":"BLMT"},{"name":"BSQUARE Corporation","symbol":"BSQR"},{"name":"Buffalo Wild Wings, Inc.","symbol":"BWLD"},{"name":"Builders FirstSource, Inc.","symbol":"BLDR"},{"name":"Burcon Nutrascience Corp","symbol":"BUR"},{"name":"C&F Financial Corporation","symbol":"CFFI"},{"name":"C.H. Robinson Worldwide, Inc.","symbol":"CHRW"},{"name":"CA Inc.","symbol":"CA"},{"name":"Cabot Microelectronics Corporation","symbol":"CCMP"},{"name":"Cadence Design Systems, Inc.","symbol":"CDNS"},{"name":"Cadiz, Inc.","symbol":"CDZI"},{"name":"Caesars Acquisition Company","symbol":"CACQ"},{"name":"Caesars Entertainment Corporation","symbol":"CZR"},{"name":"CaesarStone Sdot-Yam Ltd.","symbol":"CSTE"},{"name":"CafePress Inc.","symbol":"PRSS"},{"name":"Caladrius Biosciences, Inc.","symbol":"CLBS"},{"name":"Calamos Asset Management, Inc.","symbol":"CLMS"},{"name":"Calamos Convertible and High Income Fund","symbol":"CHY"},{"name":"Calamos Convertible Opportunities and Income Fund","symbol":"CHI"},{"name":"Calamos Dynamic Convertible & Income Fund","symbol":"CCD"},{"name":"Calamos Focus Growth ETF","symbol":"CFGE"},{"name":"Calamos Global Dynamic Income Fund","symbol":"CHW"},{"name":"Calamos Global Total Return Fund","symbol":"CGO"},{"name":"Calamos Strategic Total Return Fund","symbol":"CSQ"},{"name":"CalAmp Corp.","symbol":"CAMP"},{"name":"Calavo Growers, Inc.","symbol":"CVGW"},{"name":"California First National Bancorp","symbol":"CFNB"},{"name":"Calithera Biosciences, Inc.","symbol":"CALA"},{"name":"Callidus Software, Inc.","symbol":"CALD"},{"name":"Cal-Maine Foods, Inc.","symbol":"CALM"},{"name":"Calumet Specialty Products Partners, L.P.","symbol":"CLMT"},{"name":"Cambium Learning Group, Inc.","symbol":"ABCD"},{"name":"CAMBRIDGE CAPITAL ACQUISITION CORPORATION","symbol":"CAMB"},{"name":"CAMBRIDGE CAPITAL ACQUISITION CORPORATION","symbol":"CAMBU"},{"name":"CAMBRIDGE CAPITAL ACQUISITION CORPORATION","symbol":"CAMBW"},{"name":"Camden National Corporation","symbol":"CAC"},{"name":"Camtek Ltd.","symbol":"CAMT"},{"name":"Canadian Solar Inc.","symbol":"CSIQ"},{"name":"Cancer Genetics, Inc.","symbol":"CGIX"},{"name":"Canterbury Park Holding Corporation","symbol":"CPHC"},{"name":"Cape Bancorp, Inc.","symbol":"CBNJ"},{"name":"Capella Education Company","symbol":"CPLA"},{"name":"Capital Bank Financial Corp.","symbol":"CBF"},{"name":"Capital City Bank Group","symbol":"CCBG"},{"name":"Capital Product Partners L.P.","symbol":"CPLP"},{"name":"Capital Southwest Corporation","symbol":"CSWC"},{"name":"Capitala Finance Corp.","symbol":"CPTA"},{"name":"Capitol Acquisition Corp. III","symbol":"CLACU"},{"name":"Capitol Federal Financial, Inc.","symbol":"CFFN"},{"name":"Capnia, Inc.","symbol":"CAPN"},{"name":"Capnia, Inc.","symbol":"CAPNW"},{"name":"Capricor Therapeutics, Inc.","symbol":"CAPR"},{"name":"Capstone Turbine Corporation","symbol":"CPST"},{"name":"Cara Therapeutics, Inc.","symbol":"CARA"},{"name":"Carbonite, Inc.","symbol":"CARB"},{"name":"Carbylan Therapeutics, Inc.","symbol":"CBYL"},{"name":"Cardica, Inc.","symbol":"CRDC"},{"name":"Cardinal Financial Corporation","symbol":"CFNL"},{"name":"Cardiome Pharma Corporation","symbol":"CRME"},{"name":"Cardiovascular Systems, Inc.","symbol":"CSII"},{"name":"Cardtronics, Inc.","symbol":"CATM"},{"name":"CareDx, Inc.","symbol":"CDNA"},{"name":"Career Education Corporation","symbol":"CECO"},{"name":"CareTrust REIT, Inc.","symbol":"CTRE"},{"name":"Carmike Cinemas, Inc.","symbol":"CKEC"},{"name":"Carolina Bank Holdings Inc.","symbol":"CLBH"},{"name":"Carolina Financial Corporation","symbol":"CARO"},{"name":"Carolina Trust Bank","symbol":"CART"},{"name":"Carrizo Oil & Gas, Inc.","symbol":"CRZO"},{"name":"Carrols Restaurant Group, Inc.","symbol":"TAST"},{"name":"Cartesian, Inc.","symbol":"CRTN"},{"name":"Carver Bancorp, Inc.","symbol":"CARV"},{"name":"CAS Medical Systems, Inc.","symbol":"CASM"},{"name":"Cascade Bancorp","symbol":"CACB"},{"name":"Cascade Microtech, Inc.","symbol":"CSCD"},{"name":"Casella Waste Systems, Inc.","symbol":"CWST"},{"name":"Caseys General Stores, Inc.","symbol":"CASY"},{"name":"CASI Pharmaceuticals, Inc.","symbol":"CASI"},{"name":"Cass Information Systems, Inc","symbol":"CASS"},{"name":"Catabasis Pharmaceuticals, Inc.","symbol":"CATB"},{"name":"Catalyst Biosciences, Inc.","symbol":"CBIO"},{"name":"Catalyst Pharmaceuticals, Inc.","symbol":"CPRX"},{"name":"Cathay General Bancorp","symbol":"CATY"},{"name":"Cathay General Bancorp","symbol":"CATYW"},{"name":"Cavco Industries, Inc.","symbol":"CVCO"},{"name":"Cavium, Inc.","symbol":"CAVM"},{"name":"CB Financial Services, Inc.","symbol":"CBFV"},{"name":"CB Pharma Acquisition Corp.","symbol":"CNLM"},{"name":"CB Pharma Acquisition Corp.","symbol":"CNLMR"},{"name":"CB Pharma Acquisition Corp.","symbol":"CNLMU"},{"name":"CB Pharma Acquisition Corp.","symbol":"CNLMW"},{"name":"CBOE Holdings, Inc.","symbol":"CBOE"},{"name":"CDK Global, Inc.","symbol":"CDK"},{"name":"CDW Corporation","symbol":"CDW"},{"name":"CECO Environmental Corp.","symbol":"CECE"},{"name":"Celator Pharmaceuticals Inc.","symbol":"CPXX"},{"name":"Celgene Corporation","symbol":"CELG"},{"name":"Celgene Corporation","symbol":"CELGZ"},{"name":"Celladon Corporation","symbol":"CLDN"},{"name":"Celldex Therapeutics, Inc.","symbol":"CLDX"},{"name":"Cellectar Biosciences, Inc.","symbol":"CLRB"},{"name":"Cellectar Biosciences, Inc.","symbol":"CLRBW"},{"name":"Cellectis S.A.","symbol":"CLLS"},{"name":"Cellular Biomedicine Group, Inc.","symbol":"CBMG"},{"name":"Celsion Corporation","symbol":"CLSN"},{"name":"Celyad SA","symbol":"CYAD"},{"name":"Cempra, Inc.","symbol":"CEMP"},{"name":"Cemtrex Inc.","symbol":"CETX"},{"name":"CenterState Banks, Inc.","symbol":"CSFL"},{"name":"Central European Media Enterprises Ltd.","symbol":"CETV"},{"name":"Central Federal Corporation","symbol":"CFBK"},{"name":"Central Garden & Pet Company","symbol":"CENT"},{"name":"Central Garden & Pet Company","symbol":"CENTA"},{"name":"Central Valley Community Bancorp","symbol":"CVCY"},{"name":"Centrue Financial Corporation","symbol":"CFCB"},{"name":"Century Aluminum Company","symbol":"CENX"},{"name":"Century Bancorp, Inc.","symbol":"CNBKA"},{"name":"Century Casinos, Inc.","symbol":"CNTY"},{"name":"CEPHEID","symbol":"CPHD"},{"name":"Ceragon Networks Ltd.","symbol":"CRNT"},{"name":"Cerecor Inc.","symbol":"CERC"},{"name":"Cerecor Inc.","symbol":"CERCW"},{"name":"Cerecor Inc.","symbol":"CERCZ"},{"name":"Ceres, Inc.","symbol":"CERE"},{"name":"Cerner Corporation","symbol":"CERN"},{"name":"Cerulean Pharma Inc.","symbol":"CERU"},{"name":"Cerus Corporation","symbol":"CERS"},{"name":"Cesca Therapeutics Inc.","symbol":"KOOL"},{"name":"CEVA, Inc.","symbol":"CEVA"},{"name":"Champions Oncology, Inc.","symbol":"CSBR"},{"name":"Changyou.com Limited","symbol":"CYOU"},{"name":"Chanticleer Holdings, Inc.","symbol":"HOTR"},{"name":"Chanticleer Holdings, Inc.","symbol":"HOTRW"},{"name":"Charles & Colvard Ltd","symbol":"CTHR"},{"name":"Chart Industries, Inc.","symbol":"GTLS"},{"name":"Charter Communications, Inc.","symbol":"CHTR"},{"name":"Charter Financial Corp.","symbol":"CHFN"},{"name":"Check Point Software Technologies Ltd.","symbol":"CHKP"},{"name":"Check-Cap Ltd.","symbol":"CHEK"},{"name":"Check-Cap Ltd.","symbol":"CHEKW"},{"name":"Chembio Diagnostics, Inc.","symbol":"CEMI"},{"name":"Chemical Financial Corporation","symbol":"CHFC"},{"name":"ChemoCentryx, Inc.","symbol":"CCXI"},{"name":"Chemung Financial Corp","symbol":"CHMG"},{"name":"Cherokee Inc.","symbol":"CHKE"},{"name":"Cheviot Financial Corp","symbol":"CHEV"},{"name":"Chiasma, Inc.","symbol":"CHMA"},{"name":"Chicopee Bancorp, Inc.","symbol":"CBNK"},{"name":"Children&#39;s Place, Inc. (The)","symbol":"PLCE"},{"name":"Chimerix, Inc.","symbol":"CMRX"},{"name":"China Advanced Construction Materials Group, Inc.","symbol":"CADC"},{"name":"China Auto Logistics Inc.","symbol":"CALI"},{"name":"China Automotive Systems, Inc.","symbol":"CAAS"},{"name":"China BAK Battery, Inc.","symbol":"CBAK"},{"name":"China Biologic Products, Inc.","symbol":"CBPO"},{"name":"China Ceramics Co., Ltd.","symbol":"CCCL"},{"name":"China Commercial Credit, Inc.","symbol":"CCCR"},{"name":"China Finance Online Co. Limited","symbol":"JRJC"},{"name":"China HGS Real Estate, Inc.","symbol":"HGSH"},{"name":"China Housing & Land Development, Inc.","symbol":"CHLN"},{"name":"China Information Technology, Inc.","symbol":"CNIT"},{"name":"China Jo-Jo Drugstores, Inc.","symbol":"CJJD"},{"name":"China Lodging Group, Limited","symbol":"HTHT"},{"name":"China Natural Resources, Inc.","symbol":"CHNR"},{"name":"China Recycling Energy Corporation","symbol":"CREG"},{"name":"China Resources Development Inc.","symbol":"CRDI"},{"name":"China Sunergy Co., Ltd.","symbol":"CSUN"},{"name":"China TechFaith Wireless Communication Technology Limited","symbol":"CNTF"},{"name":"China XD Plastics Company Limited","symbol":"CXDC"},{"name":"China Yida Holding, Co.","symbol":"CNYD"},{"name":"ChinaCache International Holdings Ltd.","symbol":"CCIH"},{"name":"ChinaNet Online Holdings, Inc.","symbol":"CNET"},{"name":"ChipMOS TECHNOLOGIES (Bermuda) LTD.","symbol":"IMOS"},{"name":"CHS Inc","symbol":"CHSCL"},{"name":"CHS Inc","symbol":"CHSCM"},{"name":"CHS Inc","symbol":"CHSCN"},{"name":"CHS Inc","symbol":"CHSCO"},{"name":"CHS Inc","symbol":"CHSCP"},{"name":"Churchill Downs, Incorporated","symbol":"CHDN"},{"name":"Chuy&#39;s Holdings, Inc.","symbol":"CHUY"},{"name":"Cidara Therapeutics, Inc.","symbol":"CDTX"},{"name":"CIFC Corp.","symbol":"CIFC"},{"name":"CIM Commercial Trust Corporation","symbol":"CMCT"},{"name":"Cimpress N.V","symbol":"CMPR"},{"name":"Cincinnati Financial Corporation","symbol":"CINF"},{"name":"Cinedigm Corp","symbol":"CIDM"},{"name":"Cintas Corporation","symbol":"CTAS"},{"name":"Cipher Pharmaceuticals Inc.","symbol":"CPHR"},{"name":"Cirrus Logic, Inc.","symbol":"CRUS"},{"name":"Cisco Systems, Inc.","symbol":"CSCO"},{"name":"Citi Trends, Inc.","symbol":"CTRN"},{"name":"Citizens & Northern Corp","symbol":"CZNC"},{"name":"Citizens Community Bancorp, Inc.","symbol":"CZWI"},{"name":"Citizens First Corporation","symbol":"CZFC"},{"name":"Citizens Holding Company","symbol":"CIZN"},{"name":"Citrix Systems, Inc.","symbol":"CTXS"},{"name":"City Holding Company","symbol":"CHCO"},{"name":"Civista Bancshares, Inc.","symbol":"CIVB"},{"name":"Civista Bancshares, Inc.","symbol":"CIVBP"},{"name":"Clean Diesel Technologies, Inc.","symbol":"CDTI"},{"name":"Clean Energy Fuels Corp.","symbol":"CLNE"},{"name":"Cleantech Solutions International, Inc.","symbol":"CLNT"},{"name":"Clearfield, Inc.","symbol":"CLFD"},{"name":"ClearOne, Inc.","symbol":"CLRO"},{"name":"ClearSign Combustion Corporation","symbol":"CLIR"},{"name":"Cleveland BioLabs, Inc.","symbol":"CBLI"},{"name":"Clifton Bancorp Inc.","symbol":"CSBK"},{"name":"Clovis Oncology, Inc.","symbol":"CLVS"},{"name":"CM Finance Inc","symbol":"CMFN"},{"name":"CME Group Inc.","symbol":"CME"},{"name":"CNB Financial Corporation","symbol":"CCNE"},{"name":"CNinsure Inc.","symbol":"CISG"},{"name":"Cnova N.V.","symbol":"CNV"},{"name":"Coastway Bancorp, Inc.","symbol":"CWAY"},{"name":"CoBiz Financial Inc.","symbol":"COBZ"},{"name":"Coca-Cola Bottling Co. Consolidated","symbol":"COKE"},{"name":"Code Rebel Corporation","symbol":"CDRB"},{"name":"Codexis, Inc.","symbol":"CDXS"},{"name":"Codorus Valley Bancorp, Inc","symbol":"CVLY"},{"name":"Coffee Holding Co., Inc.","symbol":"JVA"},{"name":"Cogent Communications Holdings, Inc.","symbol":"CCOI"},{"name":"Cogentix Medical, Inc.","symbol":"CGNT"},{"name":"Cognex Corporation","symbol":"CGNX"},{"name":"Cognizant Technology Solutions Corporation","symbol":"CTSH"},{"name":"Coherent, Inc.","symbol":"COHR"},{"name":"Coherus BioSciences, Inc.","symbol":"CHRS"},{"name":"Cohu, Inc.","symbol":"COHU"},{"name":"Collectors Universe, Inc.","symbol":"CLCT"},{"name":"Collegium Pharmaceutical, Inc.","symbol":"COLL"},{"name":"Colliers International Group Inc.","symbol":"CIGI"},{"name":"Colony Bankcorp, Inc.","symbol":"CBAN"},{"name":"CoLucid Pharmaceuticals, Inc.","symbol":"CLCD"},{"name":"Columbia Banking System, Inc.","symbol":"COLB"},{"name":"Columbia Sportswear Company","symbol":"COLM"},{"name":"Columbus McKinnon Corporation","symbol":"CMCO"},{"name":"CombiMatrix Corporation","symbol":"CBMX"},{"name":"Comcast Corporation","symbol":"CMCSA"},{"name":"Comcast Corporation","symbol":"CMCSK"},{"name":"Commerce Bancshares, Inc.","symbol":"CBSH"},{"name":"Commerce Bancshares, Inc.","symbol":"CBSHP"},{"name":"Commerce Union Bancshares, Inc.","symbol":"CUBN"},{"name":"Commercial Vehicle Group, Inc.","symbol":"CVGI"},{"name":"CommScope Holding Company, Inc.","symbol":"COMM"},{"name":"Communications Sales & Leasing,Inc.","symbol":"CSAL"},{"name":"Communications Systems, Inc.","symbol":"JCS"},{"name":"Community Bankers Trust Corporation.","symbol":"ESXB"},{"name":"Community Choice Financial Inc.","symbol":"CCFI"},{"name":"Community Health Systems, Inc.","symbol":"CYHHZ"},{"name":"Community Trust Bancorp, Inc.","symbol":"CTBI"},{"name":"Community West Bancshares","symbol":"CWBC"},{"name":"CommunityOne Bancorp","symbol":"COB"},{"name":"CommVault Systems, Inc.","symbol":"CVLT"},{"name":"Compugen Ltd.","symbol":"CGEN"},{"name":"Computer Programs and Systems, Inc.","symbol":"CPSI"},{"name":"Computer Task Group, Incorporated","symbol":"CTG"},{"name":"comScore, Inc.","symbol":"SCOR"},{"name":"Comstock Holding Companies, Inc.","symbol":"CHCI"},{"name":"Comtech Telecommunications Corp.","symbol":"CMTL"},{"name":"Conatus Pharmaceuticals Inc.","symbol":"CNAT"},{"name":"Concert Pharmaceuticals, Inc.","symbol":"CNCE"},{"name":"Concordia Healthcare Corp.","symbol":"CXRX"},{"name":"Concurrent Computer Corporation","symbol":"CCUR"},{"name":"Condor Hospitality Trust, Inc.","symbol":"CDOR"},{"name":"Condor Hospitality Trust, Inc.","symbol":"CDORO"},{"name":"Condor Hospitality Trust, Inc.","symbol":"CDORP"},{"name":"ConforMIS, Inc.","symbol":"CFMS"},{"name":"congatec Holding AG","symbol":"CONG"},{"name":"Conifer Holdings, Inc.","symbol":"CNFR"},{"name":"CONMED Corporation","symbol":"CNMD"},{"name":"Connecticut Water Service, Inc.","symbol":"CTWS"},{"name":"ConnectOne Bancorp, Inc.","symbol":"CNOB"},{"name":"Connecture, Inc.","symbol":"CNXR"},{"name":"Conn&#39;s, Inc.","symbol":"CONN"},{"name":"Consolidated Communications Holdings, Inc.","symbol":"CNSL"},{"name":"Consolidated Water Co. Ltd.","symbol":"CWCO"},{"name":"Constant Contact, Inc.","symbol":"CTCT"},{"name":"Consumer Portfolio Services, Inc.","symbol":"CPSS"},{"name":"ContraFect Corporation","symbol":"CFRX"},{"name":"ContraFect Corporation","symbol":"CFRXW"},{"name":"ContraVir Pharmaceuticals Inc","symbol":"CTRV"},{"name":"Control4 Corporation","symbol":"CTRL"},{"name":"Copart, Inc.","symbol":"CPRT"},{"name":"COPsync, Inc.","symbol":"COYN"},{"name":"COPsync, Inc.","symbol":"COYNW"},{"name":"Corbus Pharmaceuticals Holdings, Inc.","symbol":"CRBP"},{"name":"Corcept Therapeutics Incorporated","symbol":"CORT"},{"name":"Cordia Bancorp Inc.","symbol":"BVA"},{"name":"Core-Mark Holding Company, Inc.","symbol":"CORE"},{"name":"Corium International, Inc.","symbol":"CORI"},{"name":"Cornerstone OnDemand, Inc.","symbol":"CSOD"},{"name":"CorVel Corp.","symbol":"CRVL"},{"name":"Cosi, Inc.","symbol":"COSI"},{"name":"CoStar Group, Inc.","symbol":"CSGP"},{"name":"Costco Wholesale Corporation","symbol":"COST"},{"name":"CounterPath Corporation","symbol":"CPAH"},{"name":"County Bancorp, Inc.","symbol":"ICBK"},{"name":"Covenant Transportation Group, Inc.","symbol":"CVTI"},{"name":"Covisint Corporation","symbol":"COVS"},{"name":"Cowen Group, Inc.","symbol":"COWN"},{"name":"Cowen Group, Inc.","symbol":"COWNL"},{"name":"CPI Card Group Inc.","symbol":"PMTS"},{"name":"CPS Technologies Corp.","symbol":"CPSH"},{"name":"CRA International,Inc.","symbol":"CRAI"},{"name":"Cracker Barrel Old Country Store, Inc.","symbol":"CBRL"},{"name":"Craft Brew Alliance, Inc.","symbol":"BREW"},{"name":"Cray Inc","symbol":"CRAY"},{"name":"Credit Acceptance Corporation","symbol":"CACC"},{"name":"Credit Suisse AG","symbol":"GLDI"},{"name":"Credit Suisse Ag","symbol":"SLVO"},{"name":"Cree, Inc.","symbol":"CREE"},{"name":"Cresud S.A.C.I.F. y A.","symbol":"CRESY"},{"name":"Criteo S.A.","symbol":"CRTO"},{"name":"Crocs, Inc.","symbol":"CROX"},{"name":"Cross Country Healthcare, Inc.","symbol":"CCRN"},{"name":"Crossroads Systems, Inc.","symbol":"CRDS"},{"name":"Crown Crafts, Inc.","symbol":"CRWS"},{"name":"Crown Media Holdings, Inc.","symbol":"CRWN"},{"name":"CryoPort, Inc.","symbol":"CYRX"},{"name":"CryoPort, Inc.","symbol":"CYRXW"},{"name":"CSG Systems International, Inc.","symbol":"CSGS"},{"name":"CSI Compressco LP","symbol":"CCLP"},{"name":"CSP Inc.","symbol":"CSPI"},{"name":"CSW Industrials, Inc.","symbol":"CSWI"},{"name":"CTC Media, Inc.","symbol":"CTCM"},{"name":"CTI BioPharma Corp.","symbol":"CTIC"},{"name":"CTI Industries Corporation","symbol":"CTIB"},{"name":"Ctrip.com International, Ltd.","symbol":"CTRP"},{"name":"CU Bancorp (CA)","symbol":"CUNB"},{"name":"CUI Global, Inc.","symbol":"CUI"},{"name":"Cumberland Pharmaceuticals Inc.","symbol":"CPIX"},{"name":"Cumulus Media Inc.","symbol":"CMLS"},{"name":"Curis, Inc.","symbol":"CRIS"},{"name":"Cutera, Inc.","symbol":"CUTR"},{"name":"CVB Financial Corporation","symbol":"CVBF"},{"name":"CVD Equipment Corporation","symbol":"CVV"},{"name":"Cyanotech Corporation","symbol":"CYAN"},{"name":"CyberArk Software Ltd.","symbol":"CYBR"},{"name":"CyberOptics Corporation","symbol":"CYBE"},{"name":"Cyclacel Pharmaceuticals, Inc.","symbol":"CYCC"},{"name":"Cyclacel Pharmaceuticals, Inc.","symbol":"CYCCP"},{"name":"Cymabay Therapeutics Inc.","symbol":"CBAY"},{"name":"Cynapsus Therapeutics Inc.","symbol":"CYNA"},{"name":"Cynosure, Inc.","symbol":"CYNO"},{"name":"Cypress Semiconductor Corporation","symbol":"CY"},{"name":"CYREN Ltd.","symbol":"CYRN"},{"name":"CyrusOne Inc","symbol":"CONE"},{"name":"Cytokinetics, Incorporated","symbol":"CYTK"},{"name":"CytomX Therapeutics, Inc.","symbol":"CTMX"},{"name":"Cytori Therapeutics Inc","symbol":"CYTX"},{"name":"Cytosorbents Corporation","symbol":"CTSO"},{"name":"CytRx Corporation","symbol":"CYTR"},{"name":"Daily 2X VIX Med-Term ETN Velocityshares","symbol":"TVIZ"},{"name":"Daily 2X VIX ST ETN Velocityshares","symbol":"TVIX"},{"name":"Daily Inverse VIX Mt ETN Velocityshares","symbol":"ZIV"},{"name":"Daily Inverse VIX ST ETN Velocityshares","symbol":"XIV"},{"name":"Daily Journal Corp. (S.C.)","symbol":"DJCO"},{"name":"Daktronics, Inc.","symbol":"DAKT"},{"name":"DARA Biosciences, Inc.","symbol":"DARA"},{"name":"Data I/O Corporation","symbol":"DAIO"},{"name":"Datalink Corporation","symbol":"DTLK"},{"name":"Dataram Corporation","symbol":"DRAM"},{"name":"Datawatch Corporation","symbol":"DWCH"},{"name":"Dave & Buster&#39;s Entertainment, Inc.","symbol":"PLAY"},{"name":"DAVIDsTEA Inc.","symbol":"DTEA"},{"name":"Dawson Geophysical Company","symbol":"DWSN"},{"name":"DBV Technologies S.A.","symbol":"DBVT"},{"name":"Dehaier Medical Systems Limited","symbol":"DHRM"},{"name":"Del Frisco&#39;s Restaurant Group, Inc.","symbol":"DFRG"},{"name":"Del Taco Restaurants, Inc.","symbol":"TACO"},{"name":"Del Taco Restaurants, Inc.","symbol":"TACOW"},{"name":"Delcath Systems, Inc.","symbol":"DCTH"},{"name":"Delta Natural Gas Company, Inc.","symbol":"DGAS"},{"name":"Delta Technology Holdings Limited","symbol":"DELT"},{"name":"Delta Technology Holdings Limited","symbol":"DELTW"},{"name":"Denny&#39;s Corporation","symbol":"DENN"},{"name":"DENTSPLY International Inc.","symbol":"XRAY"},{"name":"Depomed, Inc.","symbol":"DEPO"},{"name":"Derma Sciences, Inc.","symbol":"DSCI"},{"name":"Dermira, Inc.","symbol":"DERM"},{"name":"Destination Maternity Corporation","symbol":"DEST"},{"name":"Destination XL Group, Inc.","symbol":"DXLG"},{"name":"Deswell Industries, Inc.","symbol":"DSWL"},{"name":"Determine, Inc.","symbol":"DTRM"},{"name":"Dex Media, Inc.","symbol":"DXM"},{"name":"DexCom, Inc.","symbol":"DXCM"},{"name":"DHX Media Ltd.","symbol":"DHXM"},{"name":"Diamond Foods, Inc.","symbol":"DMND"},{"name":"Diamond Hill Investment Group, Inc.","symbol":"DHIL"},{"name":"Diamondback Energy, Inc.","symbol":"FANG"},{"name":"Diana Containerships Inc.","symbol":"DCIX"},{"name":"Dicerna Pharmaceuticals, Inc.","symbol":"DRNA"},{"name":"Digi International Inc.","symbol":"DGII"},{"name":"Digimarc Corporation","symbol":"DMRC"},{"name":"Digirad Corporation","symbol":"DRAD"},{"name":"Digital Ally, Inc.","symbol":"DGLY"},{"name":"Digital Turbine, Inc.","symbol":"APPS"},{"name":"Dime Community Bancshares, Inc.","symbol":"DCOM"},{"name":"Dimension Therapeutics, Inc.","symbol":"DMTX"},{"name":"Diodes Incorporated","symbol":"DIOD"},{"name":"Dipexium Pharmaceuticals, Inc.","symbol":"DPRX"},{"name":"Discovery Communications, Inc.","symbol":"DISCA"},{"name":"Discovery Communications, Inc.","symbol":"DISCB"},{"name":"Discovery Communications, Inc.","symbol":"DISCK"},{"name":"Discovery Laboratories, Inc.","symbol":"DSCO"},{"name":"DISH Network Corporation","symbol":"DISH"},{"name":"Diversicare Healthcare Services Inc.","symbol":"DVCR"},{"name":"Diversified Restaurant Holdings, Inc.","symbol":"SAUC"},{"name":"DLH Holdings Corp.","symbol":"DLHC"},{"name":"DNB Financial Corp","symbol":"DNBF"},{"name":"Dollar Tree, Inc.","symbol":"DLTR"},{"name":"Donegal Group, Inc.","symbol":"DGICA"},{"name":"Donegal Group, Inc.","symbol":"DGICB"},{"name":"Dorchester Minerals, L.P.","symbol":"DMLP"},{"name":"Dorman Products, Inc.","symbol":"DORM"},{"name":"Double Eagle Acquisition Corp.","symbol":"EAGL"},{"name":"Double Eagle Acquisition Corp.","symbol":"EAGLU"},{"name":"Double Eagle Acquisition Corp.","symbol":"EAGLW"},{"name":"DragonWave Inc","symbol":"DRWI"},{"name":"DragonWave Inc","symbol":"DRWIW"},{"name":"Dreamworks Animation SKG, Inc.","symbol":"DWA"},{"name":"DryShips Inc.","symbol":"DRYS"},{"name":"DS Healthcare Group, Inc.","symbol":"DSKX"},{"name":"DSP Group, Inc.","symbol":"DSPG"},{"name":"DT Asia Investments Limited","symbol":"CADT"},{"name":"DT Asia Investments Limited","symbol":"CADTR"},{"name":"DT Asia Investments Limited","symbol":"CADTU"},{"name":"DT Asia Investments Limited","symbol":"CADTW"},{"name":"DTS, Inc.","symbol":"DTSI"},{"name":"Duluth Holdings Inc.","symbol":"DLTH"},{"name":"Dunkin&#39; Brands Group, Inc.","symbol":"DNKN"},{"name":"Durect Corporation","symbol":"DRRX"},{"name":"DXP Enterprises, Inc.","symbol":"DXPE"},{"name":"Dyax Corp.","symbol":"DYAX"},{"name":"Dynamic Materials Corporation","symbol":"BOOM"},{"name":"Dynasil Corporation of America","symbol":"DYSL"},{"name":"Dynatronics Corporation","symbol":"DYNT"},{"name":"Dynavax Technologies Corporation","symbol":"DVAX"},{"name":"E*TRADE Financial Corporation","symbol":"ETFC"},{"name":"Eagle Bancorp Montana, Inc.","symbol":"EBMT"},{"name":"Eagle Bancorp, Inc.","symbol":"EGBN"},{"name":"Eagle Bulk Shipping Inc.","symbol":"EGLE"},{"name":"Eagle Pharmaceuticals, Inc.","symbol":"EGRX"},{"name":"EarthLink Holdings Corp.","symbol":"ELNK"},{"name":"East West Bancorp, Inc.","symbol":"EWBC"},{"name":"Easterly Acquisition Corp.","symbol":"EACQ"},{"name":"Easterly Acquisition Corp.","symbol":"EACQU"},{"name":"Easterly Acquisition Corp.","symbol":"EACQW"},{"name":"Eastern Company (The)","symbol":"EML"},{"name":"Eastern Virginia Bankshares, Inc.","symbol":"EVBS"},{"name":"eBay Inc.","symbol":"EBAY"},{"name":"Ebix, Inc.","symbol":"EBIX"},{"name":"Echelon Corporation","symbol":"ELON"},{"name":"Echo Global Logistics, Inc.","symbol":"ECHO"},{"name":"Echo Therapeutics, Inc.","symbol":"ECTE"},{"name":"EchoStar Corporation","symbol":"SATS"},{"name":"Ecology and Environment, Inc.","symbol":"EEI"},{"name":"E-compass Acquisition Corp.","symbol":"ECAC"},{"name":"E-compass Acquisition Corp.","symbol":"ECACR"},{"name":"E-compass Acquisition Corp.","symbol":"ECACU"},{"name":"Eco-Stim Energy Solutions, Inc.","symbol":"ESES"},{"name":"EDAP TMS S.A.","symbol":"EDAP"},{"name":"Edge Therapeutics, Inc.","symbol":"EDGE"},{"name":"Edgewater Technology, Inc.","symbol":"EDGW"},{"name":"Educational Development Corporation","symbol":"EDUC"},{"name":"eFuture Information Technology Inc.","symbol":"EFUT"},{"name":"eGain Corporation","symbol":"EGAN"},{"name":"Egalet Corporation","symbol":"EGLT"},{"name":"eHealth, Inc.","symbol":"EHTH"},{"name":"El Pollo Loco Holdings, Inc.","symbol":"LOCO"},{"name":"Elbit Imaging Ltd.","symbol":"EMITF"},{"name":"Elbit Systems Ltd.","symbol":"ESLT"},{"name":"Eldorado Resorts, Inc.","symbol":"ERI"},{"name":"Electro Rent Corporation","symbol":"ELRC"},{"name":"Electro Scientific Industries, Inc.","symbol":"ESIO"},{"name":"Electronic Arts Inc.","symbol":"EA"},{"name":"Electronics for Imaging, Inc.","symbol":"EFII"},{"name":"Electro-Sensors, Inc.","symbol":"ELSE"},{"name":"Electrum Special Acquisition Corporation","symbol":"ELEC"},{"name":"Electrum Special Acquisition Corporation","symbol":"ELECU"},{"name":"Electrum Special Acquisition Corporation","symbol":"ELECW"},{"name":"Eleven Biotherapeutics, Inc.","symbol":"EBIO"},{"name":"Elizabeth Arden, Inc.","symbol":"RDEN"},{"name":"Elkhorn S&P 500 Capital Expenditures Portfolio","symbol":"CAPX"},{"name":"Elmira Savings Bank NY (The)","symbol":"ESBK"},{"name":"eLong, Inc.","symbol":"LONG"},{"name":"Eltek Ltd.","symbol":"ELTK"},{"name":"EMC Insurance Group Inc.","symbol":"EMCI"},{"name":"Emclaire Financial Corp","symbol":"EMCF"},{"name":"EMCORE Corporation","symbol":"EMKR"},{"name":"Emmis Communications Corporation","symbol":"EMMS"},{"name":"Emmis Communications Corporation","symbol":"EMMSP"},{"name":"Empire Resorts, Inc.","symbol":"NYNY"},{"name":"Empire Resources, Inc.","symbol":"ERS"},{"name":"Enanta Pharmaceuticals, Inc.","symbol":"ENTA"},{"name":"Encore Capital Group Inc","symbol":"ECPG"},{"name":"Encore Wire Corporation","symbol":"WIRE"},{"name":"Endo International plc","symbol":"ENDP"},{"name":"Endocyte, Inc.","symbol":"ECYT"},{"name":"Endologix, Inc.","symbol":"ELGX"},{"name":"EndoStim, Inc.","symbol":"STIM"},{"name":"Endurance International Group Holdings, Inc.","symbol":"EIGI"},{"name":"Energous Corporation","symbol":"WATT"},{"name":"Energy Focus, Inc.","symbol":"EFOI"},{"name":"Energy Recovery, Inc.","symbol":"ERII"},{"name":"Energy XXI Ltd.","symbol":"EXXI"},{"name":"EnerNOC, Inc.","symbol":"ENOC"},{"name":"ENGlobal Corporation","symbol":"ENG"},{"name":"Enphase Energy, Inc.","symbol":"ENPH"},{"name":"Enstar Group Limited","symbol":"ESGR"},{"name":"Entegra Financial Corp.","symbol":"ENFC"},{"name":"Entegris, Inc.","symbol":"ENTG"},{"name":"Entellus Medical, Inc.","symbol":"ENTL"},{"name":"EnteroMedics Inc.","symbol":"ETRM"},{"name":"Enterprise Bancorp Inc","symbol":"EBTC"},{"name":"Enterprise Financial Services Corporation","symbol":"EFSC"},{"name":"Entertainment Gaming Asia Incorporated","symbol":"EGT"},{"name":"Enzon Pharmaceuticals, Inc.","symbol":"ENZN"},{"name":"Enzymotec Ltd.","symbol":"ENZY"},{"name":"EPIQ Systems, Inc.","symbol":"EPIQ"},{"name":"EPIRUS Biopharmaceuticals, Inc.","symbol":"EPRS"},{"name":"Epizyme, Inc.","symbol":"EPZM"},{"name":"ePlus inc.","symbol":"PLUS"},{"name":"Equinix, Inc.","symbol":"EQIX"},{"name":"Equitable Financial Corp.","symbol":"EQFN"},{"name":"Equity Bancshares, Inc.","symbol":"EQBK"},{"name":"Erickson Incorporated","symbol":"EAC"},{"name":"Ericsson","symbol":"ERIC"},{"name":"Erie Indemnity Company","symbol":"ERIE"},{"name":"Escalade, Incorporated","symbol":"ESCA"},{"name":"Escalon Medical Corp.","symbol":"ESMC"},{"name":"Esperion Therapeutics, Inc.","symbol":"ESPR"},{"name":"ESSA Bancorp, Inc.","symbol":"ESSA"},{"name":"ESSA Pharma Inc.","symbol":"EPIX"},{"name":"Essendant Inc.","symbol":"ESND"},{"name":"Essex Rental Corporation","symbol":"ESSX"},{"name":"ETRE REIT, LLC","symbol":"ESSF"},{"name":"Etsy, Inc.","symbol":"ETSY"},{"name":"Euro Tech Holdings Company Limited","symbol":"CLWT"},{"name":"Euronet Worldwide, Inc.","symbol":"EEFT"},{"name":"Euroseas Ltd.","symbol":"ESEA"},{"name":"EV Energy Partners, L.P.","symbol":"EVEP"},{"name":"Ever-Glory International Group, Inc.","symbol":"EVK"},{"name":"EVINE Live Inc.","symbol":"EVLV"},{"name":"Evoke Pharma, Inc.","symbol":"EVOK"},{"name":"Evolving Systems, Inc.","symbol":"EVOL"},{"name":"Exa Corporation","symbol":"EXA"},{"name":"EXACT Sciences Corporation","symbol":"EXAS"},{"name":"Exactech, Inc.","symbol":"EXAC"},{"name":"Exelixis, Inc.","symbol":"EXEL"},{"name":"EXFO Inc","symbol":"EXFO"},{"name":"ExlService Holdings, Inc.","symbol":"EXLS"},{"name":"Expedia, Inc.","symbol":"EXPE"},{"name":"Expeditors International of Washington, Inc.","symbol":"EXPD"},{"name":"Exponent, Inc.","symbol":"EXPO"},{"name":"Express Scripts Holding Company","symbol":"ESRX"},{"name":"Extreme Networks, Inc.","symbol":"EXTR"},{"name":"Eyegate Pharmaceuticals, Inc.","symbol":"EYEG"},{"name":"Eyegate Pharmaceuticals, Inc.","symbol":"EYEGW"},{"name":"EZchip Semiconductor Limited","symbol":"EZCH"},{"name":"EZCORP, Inc.","symbol":"EZPW"},{"name":"F5 Networks, Inc.","symbol":"FFIV"},{"name":"Facebook, Inc.","symbol":"FB"},{"name":"Fairchild Semiconductor International, Inc.","symbol":"FCS"},{"name":"FairPoint Communications, Inc.","symbol":"FRP"},{"name":"Fairway Group Holdings Corp.","symbol":"FWM"},{"name":"FalconStor Software, Inc.","symbol":"FALC"},{"name":"Famous Dave&#39;s of America, Inc.","symbol":"DAVE"},{"name":"Farmer Brothers Company","symbol":"FARM"},{"name":"Farmers Capital Bank Corporation","symbol":"FFKT"},{"name":"Farmers National Banc Corp.","symbol":"FMNB"},{"name":"FARO Technologies, Inc.","symbol":"FARO"},{"name":"Fastenal Company","symbol":"FAST"},{"name":"Fate Therapeutics, Inc.","symbol":"FATE"},{"name":"Fauquier Bankshares, Inc.","symbol":"FBSS"},{"name":"FBR & Co","symbol":"FBRC"},{"name":"Federal-Mogul Holdings Corporation","symbol":"FDML"},{"name":"Federated National Holding Company","symbol":"FNHC"},{"name":"FEI Company","symbol":"FEIC"},{"name":"Female Health Company (The)","symbol":"FHCO"},{"name":"Fenix Parts, Inc.","symbol":"FENX"},{"name":"Fibrocell Science Inc","symbol":"FCSC"},{"name":"FibroGen, Inc","symbol":"FGEN"},{"name":"Fidelity Nasdaq Composite Index Tracking Stock","symbol":"ONEQ"},{"name":"Fidelity Southern Corporation","symbol":"LION"},{"name":"Fidus Investment Corporation","symbol":"FDUS"},{"name":"Fiesta Restaurant Group, Inc.","symbol":"FRGI"},{"name":"Fifth Street Asset Management Inc.","symbol":"FSAM"},{"name":"Fifth Street Finance Corp.","symbol":"FSC"},{"name":"Fifth Street Finance Corp.","symbol":"FSCFL"},{"name":"Fifth Street Senior Floating Rate Corp.","symbol":"FSFR"},{"name":"Fifth Third Bancorp","symbol":"FITB"},{"name":"Fifth Third Bancorp","symbol":"FITBI"},{"name":"Financial Engines, Inc.","symbol":"FNGN"},{"name":"Financial Institutions, Inc.","symbol":"FISI"},{"name":"Finisar Corporation","symbol":"FNSR"},{"name":"Finjan Holdings, Inc.","symbol":"FNJN"},{"name":"FinTech Acquisition Corp.","symbol":"FNTC"},{"name":"FinTech Acquisition Corp.","symbol":"FNTCU"},{"name":"FinTech Acquisition Corp.","symbol":"FNTCW"},{"name":"FireEye, Inc.","symbol":"FEYE"},{"name":"First Bancorp","symbol":"FBNC"},{"name":"First Bancorp, Inc (ME)","symbol":"FNLC"},{"name":"First Bank","symbol":"FRBA"},{"name":"First Busey Corporation","symbol":"BUSE"},{"name":"First Business Financial Services, Inc.","symbol":"FBIZ"},{"name":"First Capital Bancorp, Inc. (VA)","symbol":"FCVA"},{"name":"First Capital, Inc.","symbol":"FCAP"},{"name":"First Cash Financial Services, Inc.","symbol":"FCFS"},{"name":"First Citizens BancShares, Inc.","symbol":"FCNCA"},{"name":"First Clover Leaf Financial Corp.","symbol":"FCLF"},{"name":"First Community Bancshares, Inc.","symbol":"FCBC"},{"name":"First Community Corporation","symbol":"FCCO"},{"name":"First Community Financial Partners, Inc.","symbol":"FCFP"},{"name":"First Connecticut Bancorp, Inc.","symbol":"FBNK"},{"name":"First Defiance Financial Corp.","symbol":"FDEF"},{"name":"First Federal of Northern Michigan Bancorp, Inc.","symbol":"FFNM"},{"name":"First Financial Bancorp.","symbol":"FFBC"},{"name":"First Financial Bancorp.","symbol":"FFBCW"},{"name":"First Financial Bankshares, Inc.","symbol":"FFIN"},{"name":"First Financial Corporation Indiana","symbol":"THFF"},{"name":"First Financial Northwest, Inc.","symbol":"FFNW"},{"name":"First Foundation Inc.","symbol":"FFWM"},{"name":"First Guaranty Bancshares, Inc.","symbol":"FGBI"},{"name":"First Internet Bancorp","symbol":"INBK"},{"name":"First Interstate BancSystem, Inc.","symbol":"FIBK"},{"name":"First Merchants Corporation","symbol":"FRME"},{"name":"First Mid-Illinois Bancshares, Inc.","symbol":"FMBH"},{"name":"First Midwest Bancorp, Inc.","symbol":"FMBI"},{"name":"First NBC Bank Holding Company","symbol":"FNBC"},{"name":"First Niagara Financial Group Inc.","symbol":"FNFG"},{"name":"First Northwest Bancorp","symbol":"FNWB"},{"name":"First Savings Financial Group, Inc.","symbol":"FSFG"},{"name":"First Solar, Inc.","symbol":"FSLR"},{"name":"First South Bancorp Inc","symbol":"FSBK"},{"name":"First Trust Asia Pacific Ex-Japan AlphaDEX Fund","symbol":"FPA"},{"name":"First Trust BICK Index Fund","symbol":"BICK"},{"name":"First Trust Brazil AlphaDEX Fund","symbol":"FBZ"},{"name":"First Trust Canada AlphaDEX Fund","symbol":"FCAN"},{"name":"First Trust Capital Strength ETF","symbol":"FTCS"},{"name":"First Trust China AlphaDEX Fund","symbol":"FCA"},{"name":"First Trust Developed Markets Ex-US AlphaDEX Fund","symbol":"FDT"},{"name":"First Trust Developed Markets ex-US Small Cap AlphaDEX Fund","symbol":"FDTS"},{"name":"First Trust Dorsey Wright Focus 5 ETF","symbol":"FV"},{"name":"First Trust Dorsey Wright International Focus 5 ETF","symbol":"IFV"},{"name":"First Trust Emerging Markets AlphaDEX Fund","symbol":"FEM"},{"name":"First Trust Emerging Markets Local Currency Bond ETF","symbol":"FEMB"},{"name":"First Trust Emerging Markets Small Cap AlphaDEX Fund","symbol":"FEMS"},{"name":"First Trust Enhanced Short Maturity ETF","symbol":"FTSM"},{"name":"First Trust Europe AlphaDEX Fund","symbol":"FEP"},{"name":"First Trust Eurozone AlphaDEX ETF","symbol":"FEUZ"},{"name":"First Trust Germany AlphaDEX Fund","symbol":"FGM"},{"name":"First Trust Global Tactical Commodity Strategy Fund","symbol":"FTGC"},{"name":"First Trust High Income ETF","symbol":"FTHI"},{"name":"First Trust High Yield Long/Short ETF","symbol":"HYLS"},{"name":"First Trust Hong Kong AlphaDEX Fund","symbol":"FHK"},{"name":"First Trust International IPO ETF","symbol":"FPXI"},{"name":"First Trust International Multi-Asset Diversified Income Index","symbol":"YDIV"},{"name":"First Trust ISE Cloud Computing Index Fund","symbol":"SKYY"},{"name":"First Trust ISE Global Copper Index Fund","symbol":"CU"},{"name":"First Trust ISE Global Platinum Index Fund","symbol":"PLTM"},{"name":"First Trust Japan AlphaDEX Fund","symbol":"FJP"},{"name":"First Trust Latin America AlphaDEX Fund","symbol":"FLN"},{"name":"First Trust Low Beta Income ETF","symbol":"FTLB"},{"name":"First Trust Low Duration Mortgage Opportunities ETF","symbol":"LMBS"},{"name":"First Trust Managed Municipal ETF","symbol":"FMB"},{"name":"First Trust NASDAQ ABA Community Bank Index Fund","symbol":"QABA"},{"name":"First Trust NASDAQ CEA Cybersecurity ETF","symbol":"CIBR"},{"name":"First Trust NASDAQ CEA Smartphone Index Fund","symbol":"FONE"},{"name":"First Trust NASDAQ Clean Edge Green Energy Index Fund","symbol":"QCLN"},{"name":"First Trust NASDAQ Clean Edge Smart Grid Infrastructure Index","symbol":"GRID"},{"name":"First Trust NASDAQ Global Auto Index Fund","symbol":"CARZ"},{"name":"First Trust NASDAQ Rising Dividend Achievers ETF","symbol":"RDVY"},{"name":"First Trust NASDAQ Technology Dividend Index Fund","symbol":"TDIV"},{"name":"First Trust NASDAQ-100 Equal Weighted Index Fund","symbol":"QQEW"},{"name":"First Trust NASDAQ-100 Ex-Technology Sector Index Fund","symbol":"QQXT"},{"name":"First Trust NASDAQ-100- Technology Index Fund","symbol":"QTEC"},{"name":"First Trust RBA American Industrial Renaissance ETF","symbol":"AIRR"},{"name":"First Trust RBA Quality Income ETF","symbol":"QINC"},{"name":"First Trust Senior Loan Fund ETF","symbol":"FTSL"},{"name":"First Trust South Korea AlphaDEX Fund","symbol":"FKO"},{"name":"First Trust SSI Strategic Convertible Securities ETF","symbol":"FCVT"},{"name":"First Trust Strategic Income ETF","symbol":"FDIV"},{"name":"First Trust Switzerland AlphaDEX Fund","symbol":"FSZ"},{"name":"First Trust Taiwan AlphaDEX Fund","symbol":"FTW"},{"name":"First Trust Total US Market AlphaDEX ETF","symbol":"TUSA"},{"name":"First Trust United Kingdom AlphaDEX Fund","symbol":"FKU"},{"name":"First United Corporation","symbol":"FUNC"},{"name":"Firsthand Technology Value Fund, Inc.","symbol":"SVVC"},{"name":"FirstMerit Corporation","symbol":"FMER"},{"name":"FirstService Corporation","symbol":"FSV"},{"name":"Fiserv, Inc.","symbol":"FISV"},{"name":"Five Below, Inc.","symbol":"FIVE"},{"name":"Five Prime Therapeutics, Inc.","symbol":"FPRX"},{"name":"Five9, Inc.","symbol":"FIVN"},{"name":"Flamel Technologies S.A.","symbol":"FLML"},{"name":"Flex Pharma, Inc.","symbol":"FLKS"},{"name":"Flexion Therapeutics, Inc.","symbol":"FLXN"},{"name":"FlexShares Credit-Scored US Corporate Bond Index Fund","symbol":"SKOR"},{"name":"FlexShares Credit-Scored US Long Corporate Bond Index Fund","symbol":"LKOR"},{"name":"FlexShares Disciplined Duration MBS Index Fund","symbol":"MBSD"},{"name":"FlexShares Real Assets Allocation Index Fund","symbol":"ASET"},{"name":"FlexShares US Quality Large Cap Index Fund","symbol":"QLC"},{"name":"Flexsteel Industries, Inc.","symbol":"FLXS"},{"name":"Flextronics International Ltd.","symbol":"FLEX"},{"name":"FLIR Systems, Inc.","symbol":"FLIR"},{"name":"Fluidigm Corporation","symbol":"FLDM"},{"name":"Flushing Financial Corporation","symbol":"FFIC"},{"name":"Foamix Pharmaceuticals Ltd.","symbol":"FOMX"},{"name":"Fogo de Chao, Inc.","symbol":"FOGO"},{"name":"Fonar Corporation","symbol":"FONR"},{"name":"Forbes Energy Services Ltd","symbol":"FES"},{"name":"FormFactor, Inc.","symbol":"FORM"},{"name":"Formula Systems (1985) Ltd.","symbol":"FORTY"},{"name":"Forrester Research, Inc.","symbol":"FORR"},{"name":"Fortinet, Inc.","symbol":"FTNT"},{"name":"Fortress Biotech, Inc.","symbol":"FBIO"},{"name":"Forward Air Corporation","symbol":"FWRD"},{"name":"Forward Industries, Inc.","symbol":"FORD"},{"name":"Forward Pharma A/S","symbol":"FWP"},{"name":"Fossil Group, Inc.","symbol":"FOSL"},{"name":"Foundation Medicine, Inc.","symbol":"FMI"},{"name":"Fox Chase Bancorp, Inc.","symbol":"FXCB"},{"name":"Fox Factory Holding Corp.","symbol":"FOXF"},{"name":"Francesca&#39;s Holdings Corporation","symbol":"FRAN"},{"name":"Franklin Electric Co., Inc.","symbol":"FELE"},{"name":"Fred&#39;s, Inc.","symbol":"FRED"},{"name":"FreeSeas Inc.","symbol":"FREE"},{"name":"Freightcar America, Inc.","symbol":"RAIL"},{"name":"Frequency Electronics, Inc.","symbol":"FEIM"},{"name":"Freshpet, Inc.","symbol":"FRPT"},{"name":"Frontier Communications Corporation","symbol":"FTR"},{"name":"Frontier Communications Corporation","symbol":"FTRPR"},{"name":"FRP Holdings, Inc.","symbol":"FRPH"},{"name":"FS Bancorp, Inc.","symbol":"FSBW"},{"name":"FTD Companies, Inc.","symbol":"FTD"},{"name":"Fuel Systems Solutions, Inc.","symbol":"FSYS"},{"name":"Fuel Tech, Inc.","symbol":"FTEK"},{"name":"FuelCell Energy, Inc.","symbol":"FCEL"},{"name":"Fuling Global Inc.","symbol":"FORK"},{"name":"Full Circle Capital Corporation","symbol":"FULL"},{"name":"Full Circle Capital Corporation","symbol":"FULLL"},{"name":"Full House Resorts, Inc.","symbol":"FLL"},{"name":"Fulton Financial Corporation","symbol":"FULT"},{"name":"Fusion Telecommunications International, Inc.","symbol":"FSNN"},{"name":"Fuwei Films (Holdings) Co., Ltd.","symbol":"FFHL"},{"name":"FX Energy, Inc.","symbol":"FXEN"},{"name":"FX Energy, Inc.","symbol":"FXENP"},{"name":"G&K Services, Inc.","symbol":"GK"},{"name":"G. Willi-Food International,  Ltd.","symbol":"WILC"},{"name":"Gaiam, Inc.","symbol":"GAIA"},{"name":"Galapagos NV","symbol":"GLPG"},{"name":"Galectin Therapeutics Inc.","symbol":"GALT"},{"name":"Galectin Therapeutics Inc.","symbol":"GALTU"},{"name":"Galectin Therapeutics Inc.","symbol":"GALTW"},{"name":"Galena Biopharma, Inc.","symbol":"GALE"},{"name":"Galmed Pharmaceuticals Ltd.","symbol":"GLMD"},{"name":"Gaming and Leisure Properties, Inc.","symbol":"GLPI"},{"name":"Gaming Partners International Corporation","symbol":"GPIC"},{"name":"Garmin Ltd.","symbol":"GRMN"},{"name":"Garnero Group Acquisition Company","symbol":"GGAC"},{"name":"Garnero Group Acquisition Company","symbol":"GGACR"},{"name":"Garnero Group Acquisition Company","symbol":"GGACU"},{"name":"Garnero Group Acquisition Company","symbol":"GGACW"},{"name":"Garrison Capital Inc.","symbol":"GARS"},{"name":"GCT Semiconductor, Inc.","symbol":"GCTS"},{"name":"Gelesis, Inc.","symbol":"GLSS"},{"name":"Gencor Industries Inc.","symbol":"GENC"},{"name":"General Communication, Inc.","symbol":"GNCMA"},{"name":"General Finance Corporation","symbol":"GFN"},{"name":"General Finance Corporation","symbol":"GFNCP"},{"name":"General Finance Corporation","symbol":"GFNSL"},{"name":"Genetic Technologies Ltd","symbol":"GENE"},{"name":"GenMark Diagnostics, Inc.","symbol":"GNMK"},{"name":"Genocea Biosciences, Inc.","symbol":"GNCA"},{"name":"Genomic Health, Inc.","symbol":"GHDX"},{"name":"GenSight Biologics S.A.","symbol":"GNST"},{"name":"Gentex Corporation","symbol":"GNTX"},{"name":"Gentherm Inc","symbol":"THRM"},{"name":"GenVec, Inc.","symbol":"GNVC"},{"name":"Georgetown Bancorp, Inc.","symbol":"GTWN"},{"name":"Geospace Technologies Corporation","symbol":"GEOS"},{"name":"German American Bancorp, Inc.","symbol":"GABC"},{"name":"Geron Corporation","symbol":"GERN"},{"name":"Gevo, Inc.","symbol":"GEVO"},{"name":"Gibraltar Industries, Inc.","symbol":"ROCK"},{"name":"GigaMedia Limited","symbol":"GIGM"},{"name":"Giga-tronics Incorporated","symbol":"GIGA"},{"name":"G-III Apparel Group, LTD.","symbol":"GIII"},{"name":"Gilat Satellite Networks Ltd.","symbol":"GILT"},{"name":"Gilead Sciences, Inc.","symbol":"GILD"},{"name":"Glacier Bancorp, Inc.","symbol":"GBCI"},{"name":"Gladstone Capital Corporation","symbol":"GLAD"},{"name":"Gladstone Capital Corporation","symbol":"GLADO"},{"name":"Gladstone Commercial Corporation","symbol":"GOOD"},{"name":"Gladstone Commercial Corporation","symbol":"GOODN"},{"name":"Gladstone Commercial Corporation","symbol":"GOODO"},{"name":"Gladstone Commercial Corporation","symbol":"GOODP"},{"name":"Gladstone Investment Corporation","symbol":"GAIN"},{"name":"Gladstone Investment Corporation","symbol":"GAINN"},{"name":"Gladstone Investment Corporation","symbol":"GAINO"},{"name":"Gladstone Investment Corporation","symbol":"GAINP"},{"name":"Gladstone Land Corporation","symbol":"LAND"},{"name":"Glen Burnie Bancorp","symbol":"GLBZ"},{"name":"GLOBAL BLOOD THERAPEUTICS, INC.","symbol":"GBT"},{"name":"Global Eagle Entertainment Inc.","symbol":"ENT"},{"name":"Global Indemnity plc","symbol":"GBLI"},{"name":"Global Indemnity plc","symbol":"GBLIZ"},{"name":"Global Partner Acquisition Corp.","symbol":"GPAC"},{"name":"Global Partner Acquisition Corp.","symbol":"GPACU"},{"name":"Global Partner Acquisition Corp.","symbol":"GPACW"},{"name":"Global Sources Ltd.","symbol":"GSOL"},{"name":"Global X Guru Activist ETF","symbol":"ACTX"},{"name":"Global X NASDAQ China Technology ETF","symbol":"QQQC"},{"name":"Global X Social Media Index ETF","symbol":"SOCL"},{"name":"Global X SuperDividend Alternatives ETF","symbol":"ALTY"},{"name":"Global X SuperDividend REIT ETF","symbol":"SRET"},{"name":"Global X Yieldco Index ETF","symbol":"YLCO"},{"name":"Global-Tech Advanced Innovations Inc.","symbol":"GAI"},{"name":"Globe Specialty Metals Inc.","symbol":"GSM"},{"name":"GlobeImmune, Inc.","symbol":"GBIM"},{"name":"Globus Maritime Limited","symbol":"GLBS"},{"name":"Glori Energy Inc","symbol":"GLRI"},{"name":"Glu Mobile Inc.","symbol":"GLUU"},{"name":"GlycoMimetics, Inc.","symbol":"GLYC"},{"name":"Gogo Inc.","symbol":"GOGO"},{"name":"Golar LNG Limited","symbol":"GLNG"},{"name":"Golar LNG Partners LP","symbol":"GMLP"},{"name":"Golden Enterprises, Inc.","symbol":"GLDC"},{"name":"Golden Entertainment, Inc.","symbol":"GDEN"},{"name":"Golden Ocean Group Limited","symbol":"GOGL"},{"name":"Golub Capital BDC, Inc.","symbol":"GBDC"},{"name":"Good Times Restaurants Inc.","symbol":"GTIM"},{"name":"GoPro, Inc.","symbol":"GPRO"},{"name":"Gordmans Stores, Inc.","symbol":"GMAN"},{"name":"Gores Holdings, Inc.","symbol":"GRSH"},{"name":"Gores Holdings, Inc.","symbol":"GRSHU"},{"name":"Gores Holdings, Inc.","symbol":"GRSHW"},{"name":"GP Investments Acquisition Corp.","symbol":"GPIA"},{"name":"GP Investments Acquisition Corp.","symbol":"GPIAU"},{"name":"GP Investments Acquisition Corp.","symbol":"GPIAW"},{"name":"Grand Canyon Education, Inc.","symbol":"LOPE"},{"name":"GRAVITY Co., Ltd.","symbol":"GRVY"},{"name":"Great Basin Scientific, Inc.","symbol":"GBSN"},{"name":"Great Lakes Dredge & Dock Corporation","symbol":"GLDD"},{"name":"Great Southern Bancorp, Inc.","symbol":"GSBC"},{"name":"Green Bancorp, Inc.","symbol":"GNBC"},{"name":"Green Brick Partners, Inc.","symbol":"GRBK"},{"name":"Green Plains Partners LP","symbol":"GPP"},{"name":"Green Plains, Inc.","symbol":"GPRE"},{"name":"Greene County Bancorp, Inc.","symbol":"GCBC"},{"name":"Greenlight Reinsurance, Ltd.","symbol":"GLRE"},{"name":"Griffin Industrial Realty, Inc.","symbol":"GRIF"},{"name":"Grifols, S.A.","symbol":"GRFS"},{"name":"Groupon, Inc.","symbol":"GRPN"},{"name":"Grupo Aeroportuario del Centro Norte S.A.B. de C.V.","symbol":"OMAB"},{"name":"Grupo Financiero Galicia S.A.","symbol":"GGAL"},{"name":"GSI Group, Inc.","symbol":"GSIG"},{"name":"GSI Technology, Inc.","symbol":"GSIT"},{"name":"GSV Capital Corp","symbol":"GSVC"},{"name":"GTx, Inc.","symbol":"GTXI"},{"name":"Guaranty Bancorp","symbol":"GBNK"},{"name":"Guaranty Federal Bancshares, Inc.","symbol":"GFED"},{"name":"Guidance Software, Inc.","symbol":"GUID"},{"name":"Gulf Island Fabrication, Inc.","symbol":"GIFI"},{"name":"Gulf Resources, Inc.","symbol":"GURE"},{"name":"Gulfport Energy Corporation","symbol":"GPOR"},{"name":"GW Pharmaceuticals Plc","symbol":"GWPH"},{"name":"GWG Holdings, Inc","symbol":"GWGH"},{"name":"Gyrodyne , LLC","symbol":"GYRO"},{"name":"H&E Equipment Services, Inc.","symbol":"HEES"},{"name":"Hailiang Education Group Inc.","symbol":"HLG"},{"name":"Hallador Energy Company","symbol":"HNRG"},{"name":"Hallmark Financial Services, Inc.","symbol":"HALL"},{"name":"Halozyme Therapeutics, Inc.","symbol":"HALO"},{"name":"Hamilton Bancorp, Inc.","symbol":"HBK"},{"name":"Hampton Roads Bankshares Inc","symbol":"HMPR"},{"name":"Hancock Holding Company","symbol":"HBHC"},{"name":"Hancock Holding Company","symbol":"HBHCL"},{"name":"Handy & Harman Ltd.","symbol":"HNH"},{"name":"Hanmi Financial Corporation","symbol":"HAFC"},{"name":"Hansen Medical, Inc.","symbol":"HNSN"},{"name":"Hanwha Q CELLS Co., Ltd.","symbol":"HQCL"},{"name":"Hardinge, Inc.","symbol":"HDNG"},{"name":"Harmonic Inc.","symbol":"HLIT"},{"name":"Harmony Merger Corp.","symbol":"HRMN"},{"name":"Harmony Merger Corp.","symbol":"HRMNU"},{"name":"Harmony Merger Corp.","symbol":"HRMNW"},{"name":"Harris & Harris Group, Inc.","symbol":"TINY"},{"name":"Harvard Apparatus Regenerative Technology, Inc.","symbol":"HART"},{"name":"Harvard Bioscience, Inc.","symbol":"HBIO"},{"name":"Harvest Capital Credit Corporation","symbol":"HCAP"},{"name":"Harvest Capital Credit Corporation","symbol":"HCAPL"},{"name":"Hasbro, Inc.","symbol":"HAS"},{"name":"Hawaiian Holdings, Inc.","symbol":"HA"},{"name":"Hawaiian Telcom Holdco, Inc.","symbol":"HCOM"},{"name":"Hawkins, Inc.","symbol":"HWKN"},{"name":"Hawthorn Bancshares, Inc.","symbol":"HWBK"},{"name":"Haynes International, Inc.","symbol":"HAYN"},{"name":"HD Supply Holdings, Inc.","symbol":"HDS"},{"name":"Health Insurance Innovations, Inc.","symbol":"HIIQ"},{"name":"Healthcare Services Group, Inc.","symbol":"HCSG"},{"name":"HealthEquity, Inc.","symbol":"HQY"},{"name":"HealthStream, Inc.","symbol":"HSTM"},{"name":"Healthways, Inc.","symbol":"HWAY"},{"name":"Heartland Express, Inc.","symbol":"HTLD"},{"name":"Heartland Financial USA, Inc.","symbol":"HTLF"},{"name":"Heartware International, Inc.","symbol":"HTWR"},{"name":"Heat Biologics, Inc.","symbol":"HTBX"},{"name":"Heidrick & Struggles International, Inc.","symbol":"HSII"},{"name":"Helen of Troy Limited","symbol":"HELE"},{"name":"Helios and Matheson Analytics Inc","symbol":"HMNY"},{"name":"Hemisphere Media Group, Inc.","symbol":"HMTV"},{"name":"Hennessy Advisors, Inc.","symbol":"HNNA"},{"name":"Hennessy Capital Acquisition Corp. II","symbol":"HCAC"},{"name":"Hennessy Capital Acquisition Corp. II","symbol":"HCACU"},{"name":"Hennessy Capital Acquisition Corp. II","symbol":"HCACW"},{"name":"Henry Schein, Inc.","symbol":"HSIC"},{"name":"Hercules Offshore, Inc.","symbol":"HERO"},{"name":"Heritage Commerce Corp","symbol":"HTBK"},{"name":"Heritage Financial Corporation","symbol":"HFWA"},{"name":"Heritage Oaks Bancorp","symbol":"HEOP"},{"name":"Heritage-Crystal Clean, Inc.","symbol":"HCCI"},{"name":"Herman Miller, Inc.","symbol":"MLHR"},{"name":"Heron Therapeutics, Inc.","symbol":"HRTX"},{"name":"Heska Corporation","symbol":"HSKA"},{"name":"HF Financial Corp.","symbol":"HFFC"},{"name":"Hibbett Sports, Inc.","symbol":"HIBB"},{"name":"Highpower International Inc","symbol":"HPJ"},{"name":"Highway Holdings Limited","symbol":"HIHO"},{"name":"Himax Technologies, Inc.","symbol":"HIMX"},{"name":"Hingham Institution for Savings","symbol":"HIFS"},{"name":"Histogenics Corporation","symbol":"HSGX"},{"name":"HMN Financial, Inc.","symbol":"HMNF"},{"name":"HMS Holdings Corp","symbol":"HMSY"},{"name":"Hollysys Automation Technologies, Ltd.","symbol":"HOLI"},{"name":"Hologic, Inc.","symbol":"HOLX"},{"name":"Home Bancorp, Inc.","symbol":"HBCP"},{"name":"Home BancShares, Inc.","symbol":"HOMB"},{"name":"Home Federal Bancorp, Inc. of Louisiana","symbol":"HFBL"},{"name":"HomeAway, Inc.","symbol":"AWAY"},{"name":"Homeinns Hotel Group","symbol":"HMIN"},{"name":"HomeStreet, Inc.","symbol":"HMST"},{"name":"HomeTrust Bancshares, Inc.","symbol":"HTBI"},{"name":"Hong Kong Television Network Limited","symbol":"HKTV"},{"name":"Hongli Clean Energy Technologies Corp.","symbol":"CETC"},{"name":"Hooker Furniture Corporation","symbol":"HOFT"},{"name":"HopFed Bancorp, Inc.","symbol":"HFBC"},{"name":"Horizon Bancorp (IN)","symbol":"HBNC"},{"name":"Horizon Pharma plc","symbol":"HZNP"},{"name":"Horizon Technology Finance Corporation","symbol":"HRZN"},{"name":"Horsehead Holding Corp.","symbol":"ZINC"},{"name":"Hortonworks, Inc.","symbol":"HDP"},{"name":"Houghton Mifflin Harcourt Company","symbol":"HMHC"},{"name":"Houston Wire & Cable Company","symbol":"HWCC"},{"name":"Hovnanian Enterprises Inc","symbol":"HOVNP"},{"name":"Howard Bancorp, Inc.","symbol":"HBMD"},{"name":"HSN, Inc.","symbol":"HSNI"},{"name":"HTG Molecular Diagnostics, Inc.","symbol":"HTGM"},{"name":"Hub Group, Inc.","symbol":"HUBG"},{"name":"Hudson Global, Inc.","symbol":"HSON"},{"name":"Hudson Technologies, Inc.","symbol":"HDSN"},{"name":"Huntington Bancshares Incorporated","symbol":"HBAN"},{"name":"Huntington Bancshares Incorporated","symbol":"HBANP"},{"name":"Hurco Companies, Inc.","symbol":"HURC"},{"name":"Huron Consulting Group Inc.","symbol":"HURN"},{"name":"Hutchinson Technology Incorporated","symbol":"HTCH"},{"name":"Huttig Building Products, Inc.","symbol":"HBP"},{"name":"Hydra Industries Acquisition Corp.","symbol":"HDRA"},{"name":"Hydra Industries Acquisition Corp.","symbol":"HDRAR"},{"name":"Hydra Industries Acquisition Corp.","symbol":"HDRAU"},{"name":"Hydra Industries Acquisition Corp.","symbol":"HDRAW"},{"name":"Hydrogenics Corporation","symbol":"HYGS"},{"name":"I.D. Systems, Inc.","symbol":"IDSY"},{"name":"IAC/InterActiveCorp","symbol":"IACI"},{"name":"Iao Kun Group Holding Company Limited","symbol":"IKGH"},{"name":"IBERIABANK Corporation","symbol":"IBKC"},{"name":"IBERIABANK Corporation","symbol":"IBKCP"},{"name":"icad inc.","symbol":"ICAD"},{"name":"Icahn Enterprises L.P.","symbol":"IEP"},{"name":"ICF International, Inc.","symbol":"ICFI"},{"name":"ICON plc","symbol":"ICLR"},{"name":"Iconix Brand Group, Inc.","symbol":"ICON"},{"name":"ICU Medical, Inc.","symbol":"ICUI"},{"name":"Ideal Power Inc.","symbol":"IPWR"},{"name":"Identiv, Inc.","symbol":"INVE"},{"name":"Idera Pharmaceuticals, Inc.","symbol":"IDRA"},{"name":"IDEXX Laboratories, Inc.","symbol":"IDXX"},{"name":"iDreamSky Technology Limited","symbol":"DSKY"},{"name":"IF Bancorp, Inc.","symbol":"IROQ"},{"name":"Ignite Restaurant Group, Inc.","symbol":"IRG"},{"name":"Ignyta, Inc.","symbol":"RXDX"},{"name":"II-VI Incorporated","symbol":"IIVI"},{"name":"iKang Healthcare Group, Inc.","symbol":"KANG"},{"name":"Ikonics Corporation","symbol":"IKNX"},{"name":"Illumina, Inc.","symbol":"ILMN"},{"name":"Image Sensing Systems, Inc.","symbol":"ISNS"},{"name":"Immersion Corporation","symbol":"IMMR"},{"name":"ImmuCell Corporation","symbol":"ICCC"},{"name":"Immune Design Corp.","symbol":"IMDZ"},{"name":"Immune Pharmaceuticals Inc.","symbol":"IMNP"},{"name":"ImmunoGen, Inc.","symbol":"IMGN"},{"name":"Immunomedics, Inc.","symbol":"IMMU"},{"name":"Impax Laboratories, Inc.","symbol":"IPXL"},{"name":"Imprimis Pharmaceuticals, Inc.","symbol":"IMMY"},{"name":"INC Research Holdings, Inc.","symbol":"INCR"},{"name":"inContact, Inc.","symbol":"SAAS"},{"name":"Incyte Corporation","symbol":"INCY"},{"name":"Independent Bank Corp.","symbol":"INDB"},{"name":"Independent Bank Corporation","symbol":"IBCP"},{"name":"Independent Bank Group, Inc","symbol":"IBTX"},{"name":"Industrial Services of America, Inc.","symbol":"IDSA"},{"name":"Infinera Corporation","symbol":"INFN"},{"name":"Infinity Pharmaceuticals, Inc.","symbol":"INFI"},{"name":"Infinity Property and Casualty Corporation","symbol":"IPCC"},{"name":"Information Services Group, Inc.","symbol":"III"},{"name":"InfoSonics Corp","symbol":"IFON"},{"name":"Ingles Markets, Incorporated","symbol":"IMKTA"},{"name":"InnerWorkings, Inc.","symbol":"INWK"},{"name":"Innocoll AG","symbol":"INNL"},{"name":"Innodata Inc.","symbol":"INOD"},{"name":"Innophos Holdings, Inc.","symbol":"IPHS"},{"name":"Innospec Inc.","symbol":"IOSP"},{"name":"Innovative Solutions and Support, Inc.","symbol":"ISSC"},{"name":"Inogen, Inc","symbol":"INGN"},{"name":"Inotek Pharmaceuticals Corporation","symbol":"ITEK"},{"name":"Inovalon Holdings, Inc.","symbol":"INOV"},{"name":"Inovio Pharmaceuticals, Inc.","symbol":"INO"},{"name":"Insight Enterprises, Inc.","symbol":"NSIT"},{"name":"Insignia Systems, Inc.","symbol":"ISIG"},{"name":"Insmed, Inc.","symbol":"INSM"},{"name":"Insteel Industries, Inc.","symbol":"IIIN"},{"name":"Insulet Corporation","symbol":"PODD"},{"name":"Insys Therapeutics, Inc.","symbol":"INSY"},{"name":"Intec Pharma Ltd.","symbol":"NTEC"},{"name":"Integra LifeSciences Holdings Corporation","symbol":"IART"},{"name":"Integrated Device Technology, Inc.","symbol":"IDTI"},{"name":"Integrated Electrical Services, Inc.","symbol":"IESC"},{"name":"Integrated Silicon Solution, Inc.","symbol":"ISSI"},{"name":"Intel Corporation","symbol":"INTC"},{"name":"Inteliquent, Inc.","symbol":"IQNT"},{"name":"Intellipharmaceutics International Inc.","symbol":"IPCI"},{"name":"Inter Parfums, Inc.","symbol":"IPAR"},{"name":"Interactive Brokers Group, Inc.","symbol":"IBKR"},{"name":"Interactive Intelligence Group, Inc.","symbol":"ININ"},{"name":"Intercept Pharmaceuticals, Inc.","symbol":"ICPT"},{"name":"InterCloud Systems, Inc","symbol":"ICLD"},{"name":"InterCloud Systems, Inc","symbol":"ICLDW"},{"name":"InterDigital, Inc.","symbol":"IDCC"},{"name":"Interface, Inc.","symbol":"TILE"},{"name":"Intermolecular, Inc.","symbol":"IMI"},{"name":"Internap Corporation","symbol":"INAP"},{"name":"International Bancshares Corporation","symbol":"IBOC"},{"name":"International Speedway Corporation","symbol":"ISCA"},{"name":"Internet Gold Golden Lines Ltd.","symbol":"IGLD"},{"name":"Internet Initiative Japan, Inc.","symbol":"IIJI"},{"name":"Intersect ENT, Inc.","symbol":"XENT"},{"name":"Intersections, Inc.","symbol":"INTX"},{"name":"Intersil Corporation","symbol":"ISIL"},{"name":"Interval Leisure Group, Inc.","symbol":"IILG"},{"name":"Intevac, Inc.","symbol":"IVAC"},{"name":"INTL FCStone Inc.","symbol":"INTL"},{"name":"INTL FCStone Inc.","symbol":"INTLL"},{"name":"Intra-Cellular Therapies Inc.","symbol":"ITCI"},{"name":"IntriCon Corporation","symbol":"IIN"},{"name":"Intuit Inc.","symbol":"INTU"},{"name":"Intuitive Surgical, Inc.","symbol":"ISRG"},{"name":"Inventergy Global, Inc.","symbol":"INVT"},{"name":"Inventure Foods, Inc.","symbol":"SNAK"},{"name":"Investar Holding Corporation","symbol":"ISTR"},{"name":"Investors Bancorp, Inc.","symbol":"ISBC"},{"name":"Investors Title Company","symbol":"ITIC"},{"name":"InVivo Therapeutics Holdings Corp.","symbol":"NVIV"},{"name":"Invuity, Inc.","symbol":"IVTY"},{"name":"iPass Inc.","symbol":"IPAS"},{"name":"Ipath US Treasury 2 Yr Bull ETN","symbol":"DTUL"},{"name":"Ipath US Treasury 5 Year Bull E","symbol":"DFVL"},{"name":"IPG Photonics Corporation","symbol":"IPGP"},{"name":"iRadimed Corporation","symbol":"IRMD"},{"name":"IRIDEX Corporation","symbol":"IRIX"},{"name":"Iridium Communications Inc","symbol":"IRDM"},{"name":"Iridium Communications Inc","symbol":"IRDMB"},{"name":"iRobot Corporation","symbol":"IRBT"},{"name":"Ironwood Pharmaceuticals, Inc.","symbol":"IRWD"},{"name":"IRSA Propiedades Comerciales S.A.","symbol":"IRCP"},{"name":"iShares Commodities Select Strategy ETF","symbol":"COMT"},{"name":"iShares FTSE EPRA/NAREIT Europe Index Fund","symbol":"IFEU"},{"name":"iShares FTSE EPRA/NAREIT Global Real Estate ex-U.S. Index Fund","symbol":"IFGL"},{"name":"iShares GNMA Bond ETF","symbol":"GNMA"},{"name":"iShares MSCI ACWI ex US Index Fund","symbol":"ACWX"},{"name":"iShares MSCI ACWI Index Fund","symbol":"ACWI"},{"name":"iShares MSCI All Country Asia ex Japan Index Fund","symbol":"AAXJ"},{"name":"iShares MSCI Emerging Markets Asia Index Fund","symbol":"EEMA"},{"name":"iShares MSCI Emerging Markets Latin America Index Fund","symbol":"EEML"},{"name":"iShares MSCI Europe Financials Sector Index Fund","symbol":"EUFN"},{"name":"iShares MSCI Europe Small-Cap ETF","symbol":"IEUS"},{"name":"iShares MSCI Qatar Capped ETF","symbol":"QAT"},{"name":"iShares MSCI UAE Capped ETF","symbol":"UAE"},{"name":"iShares Nasdaq Biotechnology Index Fund","symbol":"IBB"},{"name":"iShares PHLX SOX Semiconductor Sector Index Fund","symbol":"SOXX"},{"name":"iShares S&P Emerging Markets Infrastructure Index Fund","symbol":"EMIF"},{"name":"iShares S&P Global Clean Energy Index Fund","symbol":"ICLN"},{"name":"iShares S&P Global Timber & Forestry Index Fund","symbol":"WOOD"},{"name":"iShares S&P India Nifty 50 Index Fund","symbol":"INDY"},{"name":"iShares S&P/Citigroup 1-3 Year International Treasury Bond Fun","symbol":"ISHG"},{"name":"iShares S&P/Citigroup International Treasury Bond Fund","symbol":"IGOV"},{"name":"Isis Pharmaceuticals, Inc.","symbol":"ISIS"},{"name":"Isle of Capri Casinos, Inc.","symbol":"ISLE"},{"name":"Isramco, Inc.","symbol":"ISRL"},{"name":"Itron, Inc.","symbol":"ITRI"},{"name":"Ituran Location and Control Ltd.","symbol":"ITRN"},{"name":"ITUS Corporation","symbol":"ITUS"},{"name":"Ixia","symbol":"XXIA"},{"name":"IXYS Corporation","symbol":"IXYS"},{"name":"J & J Snack Foods Corp.","symbol":"JJSF"},{"name":"J. W. Mays, Inc.","symbol":"MAYS"},{"name":"J.B. Hunt Transport Services, Inc.","symbol":"JBHT"},{"name":"j2 Global, Inc.","symbol":"JCOM"},{"name":"JA Solar Holdings, Co., Ltd.","symbol":"JASO"},{"name":"Jack Henry & Associates, Inc.","symbol":"JKHY"},{"name":"Jack In The Box Inc.","symbol":"JACK"},{"name":"Jacksonville Bancorp Inc.","symbol":"JXSB"},{"name":"Jacksonville Bancorp, Inc.","symbol":"JAXB"},{"name":"Jaguar Animal Health, Inc.","symbol":"JAGX"},{"name":"JAKKS Pacific, Inc.","symbol":"JAKK"},{"name":"Jamba, Inc.","symbol":"JMBA"},{"name":"James River Group Holdings, Ltd.","symbol":"JRVR"},{"name":"Janus Equal Risk Weighted Large Cap ETF","symbol":"ERW"},{"name":"Jason Industries, Inc.","symbol":"JASN"},{"name":"Jason Industries, Inc.","symbol":"JASNW"},{"name":"Jazz Pharmaceuticals plc","symbol":"JAZZ"},{"name":"JD.com, Inc.","symbol":"JD"},{"name":"JetBlue Airways Corporation","symbol":"JBLU"},{"name":"JetPay Corporation","symbol":"JTPY"},{"name":"Jewett-Cameron Trading Company","symbol":"JCTCF"},{"name":"Jiayuan.com International Ltd.","symbol":"DATE"},{"name":"Jinpan International Limited","symbol":"JST"},{"name":"Jive Software, Inc.","symbol":"JIVE"},{"name":"JM Global Holding Company","symbol":"WYIG"},{"name":"JM Global Holding Company","symbol":"WYIGU"},{"name":"JM Global Holding Company","symbol":"WYIGW"},{"name":"Joe&#39;s Jeans Inc.","symbol":"JOEZ"},{"name":"John B. Sanfilippo & Son, Inc.","symbol":"JBSS"},{"name":"Johnson Outdoors Inc.","symbol":"JOUT"},{"name":"Juniper Pharmaceuticals, Inc.","symbol":"JNP"},{"name":"Juno Therapeutics, Inc.","symbol":"JUNO"},{"name":"K2M Group Holdings, Inc.","symbol":"KTWO"},{"name":"Kaiser Aluminum Corporation","symbol":"KALU"},{"name":"KaloBios Pharmaceuticals, Inc.","symbol":"KBIO"},{"name":"Kamada Ltd.","symbol":"KMDA"},{"name":"Kandi Technologies Group, Inc.","symbol":"KNDI"},{"name":"Kansas City Life Insurance Company","symbol":"KCLI"},{"name":"Karyopharm Therapeutics Inc.","symbol":"KPTI"},{"name":"KBS Fashion Group Limited","symbol":"KBSF"},{"name":"KCAP Financial, Inc.","symbol":"KCAP"},{"name":"Kearny Financial","symbol":"KRNY"},{"name":"Kelly Services, Inc.","symbol":"KELYA"},{"name":"Kelly Services, Inc.","symbol":"KELYB"},{"name":"KemPharm, Inc.","symbol":"KMPH"},{"name":"Kentucky First Federal Bancorp","symbol":"KFFB"},{"name":"Keryx Biopharmaceuticals, Inc.","symbol":"KERX"},{"name":"Keurig Green Mountain, Inc.","symbol":"GMCR"},{"name":"Kewaunee Scientific Corporation","symbol":"KEQU"},{"name":"Key Technology, Inc.","symbol":"KTEC"},{"name":"Key Tronic Corporation","symbol":"KTCC"},{"name":"Kforce, Inc.","symbol":"KFRC"},{"name":"Kimball Electronics, Inc.","symbol":"KE"},{"name":"Kimball International, Inc.","symbol":"KBAL"},{"name":"Kindred Biosciences, Inc.","symbol":"KIN"},{"name":"KineMed, Inc.","symbol":"KNMD"},{"name":"Kingold Jewelry Inc.","symbol":"KGJI"},{"name":"Kingstone Companies, Inc","symbol":"KINS"},{"name":"Kingtone Wirelessinfo Solution Holding Ltd","symbol":"KONE"},{"name":"Kirkland&#39;s, Inc.","symbol":"KIRK"},{"name":"Kite Pharma, Inc.","symbol":"KITE"},{"name":"Kitov Pharamceuticals Holdings Ltd.","symbol":"KTOV"},{"name":"Kitov Pharamceuticals Holdings Ltd.","symbol":"KTOVW"},{"name":"KLA-Tencor Corporation","symbol":"KLAC"},{"name":"Klox Technologies Inc.","symbol":"KLOX"},{"name":"KLX Inc.","symbol":"KLXI"},{"name":"Kona Grill, Inc.","symbol":"KONA"},{"name":"KongZhong Corporation","symbol":"KZ"},{"name":"Kopin Corporation","symbol":"KOPN"},{"name":"Kornit Digital Ltd.","symbol":"KRNT"},{"name":"Koss Corporation","symbol":"KOSS"},{"name":"KraneShares CSI China Internet ETF","symbol":"KWEB"},{"name":"Kratos Defense & Security Solutions, Inc.","symbol":"KTOS"},{"name":"Ku6 Media Co., Ltd.","symbol":"KUTV"},{"name":"Kulicke and Soffa Industries, Inc.","symbol":"KLIC"},{"name":"Kura Oncology, Inc.","symbol":"KURA"},{"name":"KVH Industries, Inc.","symbol":"KVHI"},{"name":"L.B. Foster Company","symbol":"FSTR"},{"name":"La Jolla Pharmaceutical Company","symbol":"LJPC"},{"name":"Lake Shore Bancorp, Inc.","symbol":"LSBK"},{"name":"Lake Sunapee Bank Group","symbol":"LSBG"},{"name":"Lakeland Bancorp, Inc.","symbol":"LBAI"},{"name":"Lakeland Financial Corporation","symbol":"LKFN"},{"name":"Lakeland Industries, Inc.","symbol":"LAKE"},{"name":"Lam Research Corporation","symbol":"LRCX"},{"name":"Lamar Advertising Company","symbol":"LAMR"},{"name":"Lancaster Colony Corporation","symbol":"LANC"},{"name":"Landec Corporation","symbol":"LNDC"},{"name":"Landmark Bancorp Inc.","symbol":"LARK"},{"name":"Landmark Infrastructure Partners LP","symbol":"LMRK"},{"name":"Lands&#39; End, Inc.","symbol":"LE"},{"name":"Landstar System, Inc.","symbol":"LSTR"},{"name":"Lantheus Holdings, Inc.","symbol":"LNTH"},{"name":"Lantronix, Inc.","symbol":"LTRX"},{"name":"LaPorte Bancorp, Inc.","symbol":"LPSB"},{"name":"Lattice Semiconductor Corporation","symbol":"LSCC"},{"name":"Lawson Products, Inc.","symbol":"LAWS"},{"name":"Layne Christensen Company","symbol":"LAYN"},{"name":"LCNB Corporation","symbol":"LCNB"},{"name":"LDR Holding Corporation","symbol":"LDRH"},{"name":"Leading Brands Inc","symbol":"LBIX"},{"name":"Legacy Reserves LP","symbol":"LGCY"},{"name":"Legacy Reserves LP","symbol":"LGCYO"},{"name":"Legacy Reserves LP","symbol":"LGCYP"},{"name":"LegacyTexas Financial Group, Inc.","symbol":"LTXB"},{"name":"LeMaitre Vascular, Inc.","symbol":"LMAT"},{"name":"LendingTree, Inc.","symbol":"TREE"},{"name":"Lexicon Pharmaceuticals, Inc.","symbol":"LXRX"},{"name":"LGI Homes, Inc.","symbol":"LGIH"},{"name":"LHC Group","symbol":"LHCG"},{"name":"Liberty Broadband Corporation","symbol":"LBRDA"},{"name":"Liberty Broadband Corporation","symbol":"LBRDK"},{"name":"Liberty Global plc","symbol":"LBTYA"},{"name":"Liberty Global plc","symbol":"LBTYB"},{"name":"Liberty Global plc","symbol":"LBTYK"},{"name":"Liberty Global plc","symbol":"LILA"},{"name":"Liberty Global plc","symbol":"LILAK"},{"name":"Liberty Interactive Corporation","symbol":"LVNTA"},{"name":"Liberty Interactive Corporation","symbol":"LVNTB"},{"name":"Liberty Interactive Corporation","symbol":"QVCA"},{"name":"Liberty Interactive Corporation","symbol":"QVCB"},{"name":"Liberty Media Corporation","symbol":"LMCA"},{"name":"Liberty Media Corporation","symbol":"LMCB"},{"name":"Liberty Media Corporation","symbol":"LMCK"},{"name":"Liberty Tax, Inc.","symbol":"TAX"},{"name":"Liberty TripAdvisor Holdings, Inc.","symbol":"LTRPA"},{"name":"Liberty TripAdvisor Holdings, Inc.","symbol":"LTRPB"},{"name":"LifePoint Health, Inc.","symbol":"LPNT"},{"name":"Lifetime Brands, Inc.","symbol":"LCUT"},{"name":"Lifevantage Corporation","symbol":"LFVN"},{"name":"Lifeway Foods, Inc.","symbol":"LWAY"},{"name":"Ligand Pharmaceuticals Incorporated","symbol":"LGND"},{"name":"Lightbridge Corporation","symbol":"LTBR"},{"name":"LightPath Technologies, Inc.","symbol":"LPTH"},{"name":"Lilis Energy, Inc.","symbol":"LLEX"},{"name":"Lime Energy Co.","symbol":"LIME"},{"name":"Limelight Networks, Inc.","symbol":"LLNW"},{"name":"Limoneira Co","symbol":"LMNR"},{"name":"Lincoln Educational Services Corporation","symbol":"LINC"},{"name":"Lincoln Electric Holdings, Inc.","symbol":"LECO"},{"name":"Lindblad Expeditions Holdings Inc.","symbol":"LIND"},{"name":"Lindblad Expeditions Holdings Inc.","symbol":"LINDW"},{"name":"Linear Technology Corporation","symbol":"LLTC"},{"name":"Linn Co, LLC","symbol":"LNCO"},{"name":"Linn Energy, LLC","symbol":"LINE"},{"name":"Lion Biotechnologies, Inc.","symbol":"LBIO"},{"name":"Lionbridge Technologies, Inc.","symbol":"LIOX"},{"name":"Lipocine Inc.","symbol":"LPCN"},{"name":"Liquidity Services, Inc.","symbol":"LQDT"},{"name":"Littelfuse, Inc.","symbol":"LFUS"},{"name":"LivaNova PLC","symbol":"LIVN"},{"name":"Live Oak Bancshares, Inc.","symbol":"LOB"},{"name":"Live Ventures Incorporated","symbol":"LIVE"},{"name":"LivePerson, Inc.","symbol":"LPSN"},{"name":"LKQ Corporation","symbol":"LKQ"},{"name":"LM Funding America, Inc.","symbol":"LMFAU"},{"name":"LMI Aerospace, Inc.","symbol":"LMIA"},{"name":"Logitech International S.A.","symbol":"LOGI"},{"name":"LogMein, Inc.","symbol":"LOGM"},{"name":"LoJack Corporation","symbol":"LOJN"},{"name":"Lombard Medical, Inc.","symbol":"EVAR"},{"name":"Loncar Cancer Immunotherapy ETF","symbol":"CNCR"},{"name":"Loral Space and Communications, Inc.","symbol":"LORL"},{"name":"Loxo Oncology, Inc.","symbol":"LOXO"},{"name":"Lpath, Inc.","symbol":"LPTN"},{"name":"LPL Financial Holdings Inc.","symbol":"LPLA"},{"name":"LRAD Corporation","symbol":"LRAD"},{"name":"LSI Industries Inc.","symbol":"LYTS"},{"name":"lululemon athletica inc.","symbol":"LULU"},{"name":"Lumentum Holdings Inc.","symbol":"LITE"},{"name":"Luminex Corporation","symbol":"LMNX"},{"name":"Lumos Networks Corp.","symbol":"LMOS"},{"name":"Luna Innovations Incorporated","symbol":"LUNA"},{"name":"M B T Financial Corp","symbol":"MBTF"},{"name":"M/A-COM Technology Solutions Holdings, Inc.","symbol":"MTSI"},{"name":"Macatawa Bank Corporation","symbol":"MCBC"},{"name":"Mackinac Financial Corporation","symbol":"MFNC"},{"name":"MACROCURE LTD.","symbol":"MCUR"},{"name":"MacroGenics, Inc.","symbol":"MGNX"},{"name":"Magal Security Systems Ltd.","symbol":"MAGS"},{"name":"Magellan Health, Inc.","symbol":"MGLN"},{"name":"Magellan Petroleum Corporation","symbol":"MPET"},{"name":"Magic Software Enterprises Ltd.","symbol":"MGIC"},{"name":"magicJack VocalTec Ltd","symbol":"CALL"},{"name":"MagneGas Corporation","symbol":"MNGA"},{"name":"Magyar Bancorp, Inc.","symbol":"MGYR"},{"name":"Maiden Holdings, Ltd.","symbol":"MHLD"},{"name":"Maiden Holdings, Ltd.","symbol":"MHLDO"},{"name":"MainSource Financial Group, Inc.","symbol":"MSFG"},{"name":"Majesco Entertainment Company","symbol":"COOL"},{"name":"MakeMyTrip Limited","symbol":"MMYT"},{"name":"Malibu Boats, Inc.","symbol":"MBUU"},{"name":"Malvern Bancorp, Inc.","symbol":"MLVF"},{"name":"MAM Software Group, Inc.","symbol":"MAMS"},{"name":"Manhattan Associates, Inc.","symbol":"MANH"},{"name":"Manhattan Bridge Capital, Inc","symbol":"LOAN"},{"name":"Manitex International, Inc.","symbol":"MNTX"},{"name":"Mannatech, Incorporated","symbol":"MTEX"},{"name":"MannKind Corporation","symbol":"MNKD"},{"name":"ManTech International Corporation","symbol":"MANT"},{"name":"Mapi - Pharma Ltd.","symbol":"MAPI"},{"name":"Marathon Patent Group, Inc.","symbol":"MARA"},{"name":"Marchex, Inc.","symbol":"MCHX"},{"name":"Marine Petroleum Trust","symbol":"MARPS"},{"name":"Marinus Pharmaceuticals, Inc.","symbol":"MRNS"},{"name":"MarketAxess Holdings, Inc.","symbol":"MKTX"},{"name":"Marketo, Inc.","symbol":"MKTO"},{"name":"Markit Ltd.","symbol":"MRKT"},{"name":"Marlin Business Services Corp.","symbol":"MRLN"},{"name":"Marriott International","symbol":"MAR"},{"name":"Marrone Bio Innovations, Inc.","symbol":"MBII"},{"name":"Marten Transport, Ltd.","symbol":"MRTN"},{"name":"Martin Midstream Partners L.P.","symbol":"MMLP"},{"name":"Marvell Technology Group Ltd.","symbol":"MRVL"},{"name":"Masimo Corporation","symbol":"MASI"},{"name":"Match Group, Inc.","symbol":"MTCH"},{"name":"Materialise NV","symbol":"MTLS"},{"name":"Matrix Service Company","symbol":"MTRX"},{"name":"Mattel, Inc.","symbol":"MAT"},{"name":"Mattersight Corporation","symbol":"MATR"},{"name":"Matthews International Corporation","symbol":"MATW"},{"name":"Mattress Firm Holding Corp.","symbol":"MFRM"},{"name":"Mattson Technology, Inc.","symbol":"MTSN"},{"name":"Maxim Integrated Products, Inc.","symbol":"MXIM"},{"name":"Maxwell Technologies, Inc.","symbol":"MXWL"},{"name":"Mazor Robotics Ltd.","symbol":"MZOR"},{"name":"MB Financial Inc.","symbol":"MBFI"},{"name":"MB Financial Inc.","symbol":"MBFIP"},{"name":"MCBC Holdings, Inc.","symbol":"MCFT"},{"name":"McGrath RentCorp","symbol":"MGRC"},{"name":"MDC Partners Inc.","symbol":"MDCA"},{"name":"Mecox Lane Limited","symbol":"MCOX"},{"name":"Medallion Financial Corp.","symbol":"TAXI"},{"name":"MedAssets, Inc.","symbol":"MDAS"},{"name":"Medical Transcription Billing, Corp.","symbol":"MTBC"},{"name":"Medical Transcription Billing, Corp.","symbol":"MTBCP"},{"name":"MediciNova, Inc.","symbol":"MNOV"},{"name":"Medidata Solutions, Inc.","symbol":"MDSO"},{"name":"Medigus Ltd.","symbol":"MDGS"},{"name":"Medivation, Inc.","symbol":"MDVN"},{"name":"MediWound Ltd.","symbol":"MDWD"},{"name":"Medovex Corp.","symbol":"MDVX"},{"name":"Medovex Corp.","symbol":"MDVXW"},{"name":"MeetMe, Inc.","symbol":"MEET"},{"name":"MEI Pharma, Inc.","symbol":"MEIP"},{"name":"MELA Sciences, Inc","symbol":"MELA"},{"name":"Melco Crown Entertainment Limited","symbol":"MPEL"},{"name":"Mellanox Technologies, Ltd.","symbol":"MLNX"},{"name":"Melrose Bancorp, Inc.","symbol":"MELR"},{"name":"Memorial Production Partners LP","symbol":"MEMP"},{"name":"Memorial Resource Development Corp.","symbol":"MRD"},{"name":"Mentor Graphics Corporation","symbol":"MENT"},{"name":"MER Telemanagement Solutions Ltd.","symbol":"MTSL"},{"name":"MercadoLibre, Inc.","symbol":"MELI"},{"name":"Mercantile Bank Corporation","symbol":"MBWM"},{"name":"Mercer International Inc.","symbol":"MERC"},{"name":"Merchants Bancshares, Inc.","symbol":"MBVT"},{"name":"Mercury Systems Inc","symbol":"MRCY"},{"name":"Meridian Bancorp, Inc.","symbol":"EBSB"},{"name":"Meridian Bioscience Inc.","symbol":"VIVO"},{"name":"Merit Medical Systems, Inc.","symbol":"MMSI"},{"name":"Merrimack Pharmaceuticals, Inc.","symbol":"MACK"},{"name":"Merus Labs International Inc.","symbol":"MSLI"},{"name":"Mesa Laboratories, Inc.","symbol":"MLAB"},{"name":"Mesoblast Limited","symbol":"MESO"},{"name":"Meta Financial Group, Inc.","symbol":"CASH"},{"name":"Metabolix, Inc.","symbol":"MBLX"},{"name":"Methanex Corporation","symbol":"MEOH"},{"name":"METHES ENERGIES INTERNATIONAL LTD","symbol":"MEIL"},{"name":"METHES ENERGIES INTERNATIONAL LTD","symbol":"MEILW"},{"name":"METHES ENERGIES INTERNATIONAL LTD","symbol":"MEILZ"},{"name":"Metro Bancorp, Inc","symbol":"METR"},{"name":"MFRI, Inc.","symbol":"MFRI"},{"name":"MGC Diagnostics Corporation","symbol":"MGCD"},{"name":"MGE Energy Inc.","symbol":"MGEE"},{"name":"MGP Ingredients, Inc.","symbol":"MGPI"},{"name":"Microchip Technology Incorporated","symbol":"MCHP"},{"name":"Micron Technology, Inc.","symbol":"MU"},{"name":"Micronet Enertec Technologies, Inc.","symbol":"MICT"},{"name":"Micronet Enertec Technologies, Inc.","symbol":"MICTW"},{"name":"Microsemi Corporation","symbol":"MSCC"},{"name":"Microsoft Corporation","symbol":"MSFT"},{"name":"MicroStrategy Incorporated","symbol":"MSTR"},{"name":"Microvision, Inc.","symbol":"MVIS"},{"name":"Mid Penn Bancorp","symbol":"MPB"},{"name":"Mid-Con Energy Partners, LP","symbol":"MCEP"},{"name":"Middleburg Financial Corporation","symbol":"MBRG"},{"name":"Middlefield Banc Corp.","symbol":"MBCN"},{"name":"Middlesex Water Company","symbol":"MSEX"},{"name":"MidWestOne Financial Group, Inc.","symbol":"MOFG"},{"name":"Mimecast Limited","symbol":"MIME"},{"name":"MiMedx Group, Inc","symbol":"MDXG"},{"name":"MIND C.T.I. Ltd.","symbol":"MNDO"},{"name":"MINDBODY, Inc.","symbol":"MB"},{"name":"Minerva Neurosciences, Inc","symbol":"NERV"},{"name":"Mirati Therapeutics, Inc.","symbol":"MRTX"},{"name":"Mirna Therapeutics, Inc.","symbol":"MIRN"},{"name":"MISONIX, Inc.","symbol":"MSON"},{"name":"Mitcham Industries, Inc.","symbol":"MIND"},{"name":"Mitek Systems, Inc.","symbol":"MITK"},{"name":"Mitel Networks Corporation","symbol":"MITL"},{"name":"MKS Instruments, Inc.","symbol":"MKSI"},{"name":"MMA Capital Management, LLC","symbol":"MMAC"},{"name":"Mobile Mini, Inc.","symbol":"MINI"},{"name":"MobileIron, Inc.","symbol":"MOBL"},{"name":"MOCON, Inc.","symbol":"MOCO"},{"name":"ModSys International Ltd.","symbol":"MDSY"},{"name":"ModusLink Global Solutions, Inc","symbol":"MLNK"},{"name":"Moko Social Media Ltd.","symbol":"MOKO"},{"name":"MOL Global, Inc.","symbol":"MOLG"},{"name":"Momenta Pharmaceuticals, Inc.","symbol":"MNTA"},{"name":"Momo Inc.","symbol":"MOMO"},{"name":"Monarch Casino & Resort, Inc.","symbol":"MCRI"},{"name":"Monarch Financial Holdings, Inc.","symbol":"MNRK"},{"name":"Mondelez International, Inc.","symbol":"MDLZ"},{"name":"Moneygram International, Inc.","symbol":"MGI"},{"name":"Monolithic Power Systems, Inc.","symbol":"MPWR"},{"name":"Monotype Imaging Holdings Inc.","symbol":"TYPE"},{"name":"Monro Muffler Brake, Inc.","symbol":"MNRO"},{"name":"Monroe Capital Corporation","symbol":"MRCC"},{"name":"Monster Beverage Corporation","symbol":"MNST"},{"name":"Morgans Hotel Group Co.","symbol":"MHGC"},{"name":"Morningstar, Inc.","symbol":"MORN"},{"name":"MoSys, Inc.","symbol":"MOSY"},{"name":"Motorcar Parts of America, Inc.","symbol":"MPAA"},{"name":"Mountain Province Diamonds Inc.","symbol":"MDM"},{"name":"MRV Communications, Inc.","symbol":"MRVC"},{"name":"MSB Financial Corp.","symbol":"MSBF"},{"name":"MSG Networks Inc.","symbol":"MSG"},{"name":"MTS Systems Corporation","symbol":"MTSC"},{"name":"Multi-Asset Diversified Income Index Fund","symbol":"MDIV"},{"name":"Multi-Color Corporation","symbol":"LABL"},{"name":"Multi-Fineline Electronix, Inc.","symbol":"MFLX"},{"name":"MutualFirst Financial Inc.","symbol":"MFSF"},{"name":"Mylan N.V.","symbol":"MYL"},{"name":"MyoKardia, Inc.","symbol":"MYOK"},{"name":"MYOS Corporation","symbol":"MYOS"},{"name":"MYR Group, Inc.","symbol":"MYRG"},{"name":"Myriad Genetics, Inc.","symbol":"MYGN"},{"name":"Nabriva Therapeutics AG","symbol":"NBRV"},{"name":"Nanometrics Incorporated","symbol":"NANO"},{"name":"Nanosphere, Inc.","symbol":"NSPH"},{"name":"NanoString Technologies, Inc.","symbol":"NSTG"},{"name":"NantKwest, Inc.","symbol":"NK"},{"name":"NAPCO Security Technologies, Inc.","symbol":"NSSC"},{"name":"Nasdaq, Inc.","symbol":"NDAQ"},{"name":"Natera, Inc.","symbol":"NTRA"},{"name":"Nathan&#39;s Famous, Inc.","symbol":"NATH"},{"name":"National American University Holdings, Inc.","symbol":"NAUH"},{"name":"National Bankshares, Inc.","symbol":"NKSH"},{"name":"National Beverage Corp.","symbol":"FIZZ"},{"name":"National CineMedia, Inc.","symbol":"NCMI"},{"name":"National Commerce Corporation","symbol":"NCOM"},{"name":"National General Holdings Corp","symbol":"NGHC"},{"name":"National General Holdings Corp","symbol":"NGHCO"},{"name":"National General Holdings Corp","symbol":"NGHCP"},{"name":"National General Holdings Corp","symbol":"NGHCZ"},{"name":"National Holdings Corporation","symbol":"NHLD"},{"name":"National Instruments Corporation","symbol":"NATI"},{"name":"National Interstate Corporation","symbol":"NATL"},{"name":"National Penn Bancshares, Inc.","symbol":"NPBC"},{"name":"National Research Corporation","symbol":"NRCIA"},{"name":"National Research Corporation","symbol":"NRCIB"},{"name":"National Security Group, Inc.","symbol":"NSEC"},{"name":"National Western Life Group, Inc.","symbol":"NWLI"},{"name":"Natural Alternatives International, Inc.","symbol":"NAII"},{"name":"Natural Health Trends Corp.","symbol":"NHTC"},{"name":"Nature&#39;s Sunshine Products, Inc.","symbol":"NATR"},{"name":"Natus Medical Incorporated","symbol":"BABY"},{"name":"Naugatuck Valley Financial Corporation","symbol":"NVSL"},{"name":"Navient Corporation","symbol":"NAVI"},{"name":"NB Capital Acquisition Corp.","symbol":"NBCP"},{"name":"NBT Bancorp Inc.","symbol":"NBTB"},{"name":"NCI, Inc.","symbol":"NCIT"},{"name":"Nektar Therapeutics","symbol":"NKTR"},{"name":"Neogen Corporation","symbol":"NEOG"},{"name":"NeoGenomics, Inc.","symbol":"NEO"},{"name":"Neonode Inc.","symbol":"NEON"},{"name":"Neos Therapeutics, Inc.","symbol":"NEOS"},{"name":"Neothetics, Inc.","symbol":"NEOT"},{"name":"Neovasc Inc.","symbol":"NVCN"},{"name":"NephroGenex, Inc.","symbol":"NRX"},{"name":"Neptune Technologies & Bioresources Inc","symbol":"NEPT"},{"name":"Net 1 UEPS Technologies, Inc.","symbol":"UEPS"},{"name":"Net Element, Inc.","symbol":"NETE"},{"name":"NetApp, Inc.","symbol":"NTAP"},{"name":"NetEase, Inc.","symbol":"NTES"},{"name":"Netflix, Inc.","symbol":"NFLX"},{"name":"NETGEAR, Inc.","symbol":"NTGR"},{"name":"Netlist, Inc.","symbol":"NLST"},{"name":"NetScout Systems, Inc.","symbol":"NTCT"},{"name":"NetSol Technologies Inc.","symbol":"NTWK"},{"name":"Neuralstem, Inc.","symbol":"CUR"},{"name":"Neurocrine Biosciences, Inc.","symbol":"NBIX"},{"name":"NeuroDerm Ltd.","symbol":"NDRM"},{"name":"NeuroMetrix, Inc.","symbol":"NURO"},{"name":"NeuroMetrix, Inc.","symbol":"NUROW"},{"name":"NeuroSigma, Inc.","symbol":"NSIG"},{"name":"New York Mortgage Trust, Inc.","symbol":"NYMT"},{"name":"New York Mortgage Trust, Inc.","symbol":"NYMTO"},{"name":"New York Mortgage Trust, Inc.","symbol":"NYMTP"},{"name":"NewBridge Bancorp","symbol":"NBBC"},{"name":"NewLink Genetics Corporation","symbol":"NLNK"},{"name":"Newport Corporation","symbol":"NEWP"},{"name":"News Corporation","symbol":"NWS"},{"name":"News Corporation","symbol":"NWSA"},{"name":"NewStar Financial, Inc.","symbol":"NEWS"},{"name":"Newtek Business Services Corp.","symbol":"NEWT"},{"name":"Newtek Business Services Corp.","symbol":"NEWTZ"},{"name":"Nexstar Broadcasting Group, Inc.","symbol":"NXST"},{"name":"Nexvet Biopharma plc","symbol":"NVET"},{"name":"NF Energy Saving Corporation","symbol":"NFEC"},{"name":"NIC Inc.","symbol":"EGOV"},{"name":"NICE-Systems Limited","symbol":"NICE"},{"name":"Nicholas Financial, Inc.","symbol":"NICK"},{"name":"NII Holdings, Inc.","symbol":"NIHD"},{"name":"Nivalis Therapeutics, Inc.","symbol":"NVLS"},{"name":"NMI Holdings Inc","symbol":"NMIH"},{"name":"NN, Inc.","symbol":"NNBR"},{"name":"Noodles & Company","symbol":"NDLS"},{"name":"Nordson Corporation","symbol":"NDSN"},{"name":"Nortech Systems Incorporated","symbol":"NSYS"},{"name":"Nortek Inc.","symbol":"NTK"},{"name":"Northeast Bancorp","symbol":"NBN"},{"name":"Northeast Community Bancorp, Inc.","symbol":"NECB"},{"name":"Northern Technologies International Corporation","symbol":"NTIC"},{"name":"Northern Trust Corporation","symbol":"NTRS"},{"name":"Northern Trust Corporation","symbol":"NTRSP"},{"name":"Northfield Bancorp, Inc.","symbol":"NFBK"},{"name":"Northrim BanCorp Inc","symbol":"NRIM"},{"name":"Northwest Bancshares, Inc.","symbol":"NWBI"},{"name":"Northwest Biotherapeutics, Inc.","symbol":"NWBO"},{"name":"Northwest Biotherapeutics, Inc.","symbol":"NWBOW"},{"name":"Northwest Pipe Company","symbol":"NWPX"},{"name":"Norwegian Cruise Line Holdings Ltd.","symbol":"NCLH"},{"name":"Norwood Financial Corp.","symbol":"NWFL"},{"name":"Nova Lifestyle, Inc","symbol":"NVFY"},{"name":"Nova Measuring Instruments Ltd.","symbol":"NVMI"},{"name":"Novadaq Technologies Inc","symbol":"NVDQ"},{"name":"Novatel Wireless, Inc.","symbol":"MIFI"},{"name":"Novavax, Inc.","symbol":"NVAX"},{"name":"NovoCure Limited","symbol":"NVCR"},{"name":"Novogen Limited","symbol":"NVGN"},{"name":"NTELOS Holdings Corp.","symbol":"NTLS"},{"name":"Nuance Communications, Inc.","symbol":"NUAN"},{"name":"Numerex Corp.","symbol":"NMRX"},{"name":"Nutraceutical International Corporation","symbol":"NUTR"},{"name":"NutriSystem Inc","symbol":"NTRI"},{"name":"NuVasive, Inc.","symbol":"NUVA"},{"name":"Nuveen NASDAQ 100 Dynamic Overwrite Fund","symbol":"QQQX"},{"name":"NV5 Holdings, Inc.","symbol":"NVEE"},{"name":"NVE Corporation","symbol":"NVEC"},{"name":"NVIDIA Corporation","symbol":"NVDA"},{"name":"NXP Semiconductors N.V.","symbol":"NXPI"},{"name":"NxStage Medical, Inc.","symbol":"NXTM"},{"name":"NXT-ID Inc.","symbol":"NXTD"},{"name":"NXT-ID Inc.","symbol":"NXTDW"},{"name":"Nymox Pharmaceutical Corporation","symbol":"NYMX"},{"name":"O2Micro International Limited","symbol":"OIIM"},{"name":"Oak Valley Bancorp (CA)","symbol":"OVLY"},{"name":"Oasmia Pharmaceutical AB","symbol":"OASM"},{"name":"Ocata Therapeutics, Inc.","symbol":"OCAT"},{"name":"Ocean Bio-Chem, Inc.","symbol":"OBCI"},{"name":"Ocean Power Technologies, Inc.","symbol":"OPTT"},{"name":"Ocean Rig UDW Inc.","symbol":"ORIG"},{"name":"Ocean Shore Holding Co.","symbol":"OSHC"},{"name":"OceanFirst Financial Corp.","symbol":"OCFC"},{"name":"Ocera Therapeutics, Inc.","symbol":"OCRX"},{"name":"Oclaro, Inc.","symbol":"OCLR"},{"name":"Oconee Federal Financial Corp.","symbol":"OFED"},{"name":"Ocular Therapeutix, Inc.","symbol":"OCUL"},{"name":"Oculus Innovative Sciences, Inc.","symbol":"OCLS"},{"name":"Oculus Innovative Sciences, Inc.","symbol":"OCLSW"},{"name":"Odyssey Marine Exploration, Inc.","symbol":"OMEX"},{"name":"Office Depot, Inc.","symbol":"ODP"},{"name":"OFS Capital Corporation","symbol":"OFS"},{"name":"OHA Investment Corporation","symbol":"OHAI"},{"name":"Ohio Valley Banc Corp.","symbol":"OVBC"},{"name":"Ohr Pharmaceuticals, Inc.","symbol":"OHRP"},{"name":"Old Dominion Freight Line, Inc.","symbol":"ODFL"},{"name":"Old Line Bancshares, Inc.","symbol":"OLBK"},{"name":"Old National Bancorp","symbol":"ONB"},{"name":"Old Point Financial Corporation","symbol":"OPOF"},{"name":"Old Second Bancorp, Inc.","symbol":"OSBC"},{"name":"Old Second Bancorp, Inc.","symbol":"OSBCP"},{"name":"Ollie&#39;s Bargain Outlet Holdings, Inc.","symbol":"OLLI"},{"name":"Olympic Steel, Inc.","symbol":"ZEUS"},{"name":"Omega Flex, Inc.","symbol":"OFLX"},{"name":"Omeros Corporation","symbol":"OMER"},{"name":"Omnicell, Inc.","symbol":"OMCL"},{"name":"OmniVision Technologies, Inc.","symbol":"OVTI"},{"name":"ON Semiconductor Corporation","symbol":"ON"},{"name":"On Track Innovations Ltd","symbol":"OTIV"},{"name":"OncoGenex Pharmaceuticals Inc.","symbol":"OGXI"},{"name":"OncoMed Pharmaceuticals, Inc.","symbol":"OMED"},{"name":"Onconova Therapeutics, Inc.","symbol":"ONTX"},{"name":"OncoSec Medical Incorporated","symbol":"ONCS"},{"name":"Oncothyreon Inc.","symbol":"ONTY"},{"name":"One Horizon Group, Inc.","symbol":"OHGI"},{"name":"Oneida Financial Corp.","symbol":"ONFC"},{"name":"Onvia, Inc.","symbol":"ONVI"},{"name":"Open Text Corporation","symbol":"OTEX"},{"name":"Opexa Therapeutics, Inc.","symbol":"OPXA"},{"name":"Opexa Therapeutics, Inc.","symbol":"OPXAW"},{"name":"OpGen, Inc.","symbol":"OPGN"},{"name":"OpGen, Inc.","symbol":"OPGNW"},{"name":"Ophthotech Corporation","symbol":"OPHT"},{"name":"Optibase Ltd.","symbol":"OBAS"},{"name":"Optical Cable Corporation","symbol":"OCC"},{"name":"OptimumBank Holdings, Inc.","symbol":"OPHC"},{"name":"Opus Bank","symbol":"OPB"},{"name":"Oramed Pharmaceuticals Inc.","symbol":"ORMP"},{"name":"OraSure Technologies, Inc.","symbol":"OSUR"},{"name":"ORBCOMM Inc.","symbol":"ORBC"},{"name":"Orbotech Ltd.","symbol":"ORBK"},{"name":"O&#39;Reilly Automotive, Inc.","symbol":"ORLY"},{"name":"Orexigen Therapeutics, Inc.","symbol":"OREX"},{"name":"Origin Agritech Limited","symbol":"SEED"},{"name":"Orion Energy Systems, Inc.","symbol":"OESX"},{"name":"Oritani Financial Corp.","symbol":"ORIT"},{"name":"Orrstown Financial Services Inc","symbol":"ORRF"},{"name":"Orthofix International N.V.","symbol":"OFIX"},{"name":"OSI Systems, Inc.","symbol":"OSIS"},{"name":"Osiris Therapeutics, Inc.","symbol":"OSIR"},{"name":"Ossen Innovation Co., Ltd.","symbol":"OSN"},{"name":"Otelco Inc.","symbol":"OTEL"},{"name":"Otonomy, Inc.","symbol":"OTIC"},{"name":"Otter Tail Corporation","symbol":"OTTR"},{"name":"Outerwall Inc.","symbol":"OUTR"},{"name":"Ovascience Inc.","symbol":"OVAS"},{"name":"Overstock.com, Inc.","symbol":"OSTK"},{"name":"Oxbridge Re Holdings Limited","symbol":"OXBR"},{"name":"Oxbridge Re Holdings Limited","symbol":"OXBRW"},{"name":"Oxford Immunotec Global PLC","symbol":"OXFD"},{"name":"Oxford Lane Capital Corp.","symbol":"OXLC"},{"name":"Oxford Lane Capital Corp.","symbol":"OXLCN"},{"name":"Oxford Lane Capital Corp.","symbol":"OXLCO"},{"name":"OXiGENE, Inc.","symbol":"OXGN"},{"name":"P & F Industries, Inc.","symbol":"PFIN"},{"name":"P.A.M. Transportation Services, Inc.","symbol":"PTSI"},{"name":"PACCAR Inc.","symbol":"PCAR"},{"name":"Pace Holdings Corp.","symbol":"PACE"},{"name":"Pace Holdings Corp.","symbol":"PACEU"},{"name":"Pace Holdings Corp.","symbol":"PACEW"},{"name":"Pacific Biosciences of California, Inc.","symbol":"PACB"},{"name":"Pacific Continental Corporation (Ore)","symbol":"PCBK"},{"name":"Pacific Ethanol, Inc.","symbol":"PEIX"},{"name":"Pacific Mercantile Bancorp","symbol":"PMBC"},{"name":"Pacific Premier Bancorp Inc","symbol":"PPBI"},{"name":"Pacific Special Acquisition Corp.","symbol":"PAAC"},{"name":"Pacific Special Acquisition Corp.","symbol":"PAACR"},{"name":"Pacific Special Acquisition Corp.","symbol":"PAACU"},{"name":"Pacific Special Acquisition Corp.","symbol":"PAACW"},{"name":"Pacific Sunwear of California, Inc.","symbol":"PSUN"},{"name":"Pacira Pharmaceuticals, Inc.","symbol":"PCRX"},{"name":"PacWest Bancorp","symbol":"PACW"},{"name":"Pain Therapeutics","symbol":"PTIE"},{"name":"Pan American Silver Corp.","symbol":"PAAS"},{"name":"Panera Bread Company","symbol":"PNRA"},{"name":"Pangaea Logistics Solutions Ltd.","symbol":"PANL"},{"name":"Papa John&#39;S International, Inc.","symbol":"PZZA"},{"name":"Papa Murphy&#39;s Holdings, Inc.","symbol":"FRSH"},{"name":"Paragon Shipping Inc.","symbol":"PRGN"},{"name":"Paragon Shipping Inc.","symbol":"PRGNL"},{"name":"Paratek Pharmaceuticals, Inc.","symbol":"PRTK"},{"name":"PAREXEL International Corporation","symbol":"PRXL"},{"name":"Park City Group, Inc.","symbol":"PCYG"},{"name":"Park Sterling Corporation","symbol":"PSTB"},{"name":"Parke Bancorp, Inc.","symbol":"PKBK"},{"name":"ParkerVision, Inc.","symbol":"PRKR"},{"name":"Park-Ohio Holdings Corp.","symbol":"PKOH"},{"name":"Parnell Pharmaceuticals Holdings Ltd","symbol":"PARN"},{"name":"Partner Communications Company Ltd.","symbol":"PTNR"},{"name":"Pathfinder Bancorp, Inc.","symbol":"PBHC"},{"name":"Patrick Industries, Inc.","symbol":"PATK"},{"name":"Patriot National Bancorp Inc.","symbol":"PNBK"},{"name":"Patriot Transportation Holding, Inc.","symbol":"PATI"},{"name":"Pattern Energy Group Inc.","symbol":"PEGI"},{"name":"Patterson Companies, Inc.","symbol":"PDCO"},{"name":"Patterson-UTI Energy, Inc.","symbol":"PTEN"},{"name":"Paychex, Inc.","symbol":"PAYX"},{"name":"Paylocity Holding Corporation","symbol":"PCTY"},{"name":"Payment Data Systems, Inc.","symbol":"PYDS"},{"name":"PayPal Holdings, Inc.","symbol":"PYPL"},{"name":"PC Connection, Inc.","symbol":"PCCC"},{"name":"PCM, Inc.","symbol":"PCMI"},{"name":"PC-Tel, Inc.","symbol":"PCTI"},{"name":"PDC Energy, Inc.","symbol":"PDCE"},{"name":"PDF Solutions, Inc.","symbol":"PDFS"},{"name":"PDI, Inc.","symbol":"PDII"},{"name":"PDL BioPharma, Inc.","symbol":"PDLI"},{"name":"pdvWireless, Inc.","symbol":"PDVW"},{"name":"Peak Resorts, Inc.","symbol":"SKIS"},{"name":"Peapack-Gladstone Financial Corporation","symbol":"PGC"},{"name":"Pegasystems Inc.","symbol":"PEGA"},{"name":"Pendrell Corporation","symbol":"PCO"},{"name":"Penn National Gaming, Inc.","symbol":"PENN"},{"name":"PennantPark Floating Rate Capital Ltd.","symbol":"PFLT"},{"name":"PennantPark Investment Corporation","symbol":"PNNT"},{"name":"Penns Woods Bancorp, Inc.","symbol":"PWOD"},{"name":"PennTex Midstream Partners, LP","symbol":"PTXP"},{"name":"Peoples Bancorp Inc.","symbol":"PEBO"},{"name":"Peoples Bancorp of North Carolina, Inc.","symbol":"PEBK"},{"name":"Peoples Financial Corporation","symbol":"PFBX"},{"name":"Peoples Financial Services Corp.","symbol":"PFIS"},{"name":"People&#39;s United Financial, Inc.","symbol":"PBCT"},{"name":"People&#39;s Utah Bancorp","symbol":"PUB"},{"name":"Perceptron, Inc.","symbol":"PRCP"},{"name":"Peregrine Pharmaceuticals Inc.","symbol":"PPHM"},{"name":"Peregrine Pharmaceuticals Inc.","symbol":"PPHMP"},{"name":"Perficient, Inc.","symbol":"PRFT"},{"name":"Performant Financial Corporation","symbol":"PFMT"},{"name":"Perfumania Holdings, Inc","symbol":"PERF"},{"name":"Perion Network Ltd","symbol":"PERI"},{"name":"Perma-Fix Environmental Services, Inc.","symbol":"PESI"},{"name":"Pernix Therapeutics Holdings, Inc.","symbol":"PTX"},{"name":"Perry Ellis International Inc.","symbol":"PERY"},{"name":"Perseon Corporation","symbol":"PRSN"},{"name":"Perseon Corporation","symbol":"PRSNW"},{"name":"Pershing Gold Corporation","symbol":"PGLC"},{"name":"PetMed Express, Inc.","symbol":"PETS"},{"name":"PFSweb, Inc.","symbol":"PFSW"},{"name":"PGT, Inc.","symbol":"PGTI"},{"name":"PHI, Inc.","symbol":"PHII"},{"name":"PHI, Inc.","symbol":"PHIIK"},{"name":"Phibro Animal Health Corporation","symbol":"PAHC"},{"name":"PhotoMedex, Inc.","symbol":"PHMD"},{"name":"Photronics, Inc.","symbol":"PLAB"},{"name":"PICO Holdings Inc.","symbol":"PICO"},{"name":"Pieris Pharmaceuticals, Inc.","symbol":"PIRS"},{"name":"Pilgrim&#39;s Pride Corporation","symbol":"PPC"},{"name":"Pingtan Marine Enterprise Ltd.","symbol":"PME"},{"name":"Pinnacle Entertainment, Inc.","symbol":"PNK"},{"name":"Pinnacle Financial Partners, Inc.","symbol":"PNFP"},{"name":"Pioneer Power Solutions, Inc.","symbol":"PPSI"},{"name":"Pixelworks, Inc.","symbol":"PXLW"},{"name":"Planet Payment, Inc.","symbol":"PLPM"},{"name":"Plexus Corp.","symbol":"PLXS"},{"name":"Plug Power, Inc.","symbol":"PLUG"},{"name":"Plumas Bancorp","symbol":"PLBC"},{"name":"Pluristem Therapeutics, Inc.","symbol":"PSTI"},{"name":"PMC - Sierra, Inc.","symbol":"PMCS"},{"name":"PMV Acquisition Corp.","symbol":"PMV"},{"name":"Poage Bankshares, Inc.","symbol":"PBSK"},{"name":"Pointer Telocation Ltd.","symbol":"PNTR"},{"name":"Points International, Ltd.","symbol":"PCOM"},{"name":"Polonia Bancorp, Inc.","symbol":"PBCP"},{"name":"Polycom, Inc.","symbol":"PLCM"},{"name":"Pool Corporation","symbol":"POOL"},{"name":"Pope Resources","symbol":"POPE"},{"name":"Popeyes Louisiana Kitchen, Inc.","symbol":"PLKI"},{"name":"Popular, Inc.","symbol":"BPOP"},{"name":"Popular, Inc.","symbol":"BPOPM"},{"name":"Popular, Inc.","symbol":"BPOPN"},{"name":"Porter Bancorp, Inc.","symbol":"PBIB"},{"name":"Portola Pharmaceuticals, Inc.","symbol":"PTLA"},{"name":"Potbelly Corporation","symbol":"PBPB"},{"name":"Potlatch Corporation","symbol":"PCH"},{"name":"Powell Industries, Inc.","symbol":"POWL"},{"name":"Power Integrations, Inc.","symbol":"POWI"},{"name":"Power Solutions International, Inc.","symbol":"PSIX"},{"name":"PowerShares DB Optimum Yield Diversified Commodity Strategy Po","symbol":"PDBC"},{"name":"PowerShares DWA Tactical Sector Rotation Portfolio","symbol":"DWTR"},{"name":"PowerShares FTSE International Low Beta Equal Weight Portfolio","symbol":"IDLB"},{"name":"PowerShares FTSE RAFI US 1500 Small-Mid Portfolio","symbol":"PRFZ"},{"name":"PowerShares Global Agriculture Portfolio","symbol":"PAGG"},{"name":"PowerShares Global Gold & Precious Metals Portfolio","symbol":"PSAU"},{"name":"PowerShares International BuyBack Achievers Portfolio","symbol":"IPKW"},{"name":"PowerShares LadderRite 0-5 Year Corporate Bond Portfolio","symbol":"LDRI"},{"name":"PowerShares Multi-Strategy Alternative Portfolio","symbol":"LALT"},{"name":"PowerShares Nasdaq Internet Portfolio","symbol":"PNQI"},{"name":"PowerShares QQQ Trust, Series 1","symbol":"QQQ"},{"name":"PowerShares Russell 1000 Low Beta Equal Weight Portfolio","symbol":"USLB"},{"name":"PowerShares S&P SmallCap Consumer Discretionary Portfolio","symbol":"PSCD"},{"name":"PowerShares S&P SmallCap Consumer Staples Portfolio","symbol":"PSCC"},{"name":"PowerShares S&P SmallCap Energy Portfolio","symbol":"PSCE"},{"name":"PowerShares S&P SmallCap Financials Portfolio","symbol":"PSCF"},{"name":"PowerShares S&P SmallCap Health Care Portfolio","symbol":"PSCH"},{"name":"PowerShares S&P SmallCap Industrials Portfolio","symbol":"PSCI"},{"name":"PowerShares S&P SmallCap Information Technology Portfolio","symbol":"PSCT"},{"name":"PowerShares S&P SmallCap Materials Portfolio","symbol":"PSCM"},{"name":"PowerShares S&P SmallCap Utilities Portfolio","symbol":"PSCU"},{"name":"Pozen, Inc.","symbol":"POZN"},{"name":"PRA Group, Inc.","symbol":"PRAA"},{"name":"PRA Health Sciences, Inc.","symbol":"PRAH"},{"name":"Prana Biotechnology Ltd","symbol":"PRAN"},{"name":"Preferred Bank","symbol":"PFBC"},{"name":"Preformed Line Products Company","symbol":"PLPC"},{"name":"Premier Exhibitions, Inc.","symbol":"PRXI"},{"name":"Premier Financial Bancorp, Inc.","symbol":"PFBI"},{"name":"Premier, Inc.","symbol":"PINC"},{"name":"Presbia PLC","symbol":"LENS"},{"name":"PRGX Global, Inc.","symbol":"PRGX"},{"name":"PriceSmart, Inc.","symbol":"PSMT"},{"name":"Prima BioMed Ltd","symbol":"PBMD"},{"name":"PrimeEnergy Corporation","symbol":"PNRG"},{"name":"Primo Water Corporation","symbol":"PRMW"},{"name":"Primoris Services Corporation","symbol":"PRIM"},{"name":"Prism Technologies Group, Inc.","symbol":"PRZM"},{"name":"PrivateBancorp, Inc.","symbol":"PVTB"},{"name":"PrivateBancorp, Inc.","symbol":"PVTBP"},{"name":"Pro-Dex, Inc.","symbol":"PDEX"},{"name":"Professional Diversity Network, Inc.","symbol":"IPDN"},{"name":"Profire Energy, Inc.","symbol":"PFIE"},{"name":"Progenics Pharmaceuticals Inc.","symbol":"PGNX"},{"name":"Progress Software Corporation","symbol":"PRGS"},{"name":"ProNAi Therapeutics, Inc.","symbol":"DNAI"},{"name":"Proofpoint, Inc.","symbol":"PFPT"},{"name":"ProPhase Labs, Inc.","symbol":"PRPH"},{"name":"ProQR Therapeutics N.V.","symbol":"PRQR"},{"name":"ProShares Ultra Nasdaq Biotechnology","symbol":"BIB"},{"name":"Proshares UltraPro Nasdaq Biotechnology","symbol":"UBIO"},{"name":"ProShares UltraPro QQQ","symbol":"TQQQ"},{"name":"ProShares UltraPro Short NASDAQ Biotechnology","symbol":"ZBIO"},{"name":"ProShares UltraPro Short QQQ","symbol":"SQQQ"},{"name":"ProShares UltraShort Nasdaq Biotechnology","symbol":"BIS"},{"name":"Prospect Capital Corporation","symbol":"PSEC"},{"name":"Proteon Therapeutics, Inc.","symbol":"PRTO"},{"name":"Prothena Corporation plc","symbol":"PRTA"},{"name":"Providence and Worcester Railroad Company","symbol":"PWX"},{"name":"Provident Bancorp, Inc.","symbol":"PVBC"},{"name":"Provident Financial Holdings, Inc.","symbol":"PROV"},{"name":"Prudential Bancorp, Inc.","symbol":"PBIP"},{"name":"PSB Holdings, Inc.","symbol":"PSBH"},{"name":"pSivida Corp.","symbol":"PSDV"},{"name":"Psychemedics Corporation","symbol":"PMD"},{"name":"PTC Inc.","symbol":"PTC"},{"name":"PTC Therapeutics, Inc.","symbol":"PTCT"},{"name":"Pulaski Financial Corp.","symbol":"PULB"},{"name":"Pulmatrix, Inc.","symbol":"PULM"},{"name":"Pure Cycle Corporation","symbol":"PCYO"},{"name":"Pyxis Tankers Inc.","symbol":"PXS"},{"name":"QAD Inc.","symbol":"QADA"},{"name":"QAD Inc.","symbol":"QADB"},{"name":"QC Holdings, Inc.","symbol":"QCCO"},{"name":"QCR Holdings, Inc.","symbol":"QCRH"},{"name":"Qiagen N.V.","symbol":"QGEN"},{"name":"QIWI plc","symbol":"QIWI"},{"name":"QKL Stores, Inc.","symbol":"QKLS"},{"name":"Qlik Technologies Inc.","symbol":"QLIK"},{"name":"QLogic Corporation","symbol":"QLGC"},{"name":"QLT Inc.","symbol":"QLTI"},{"name":"Qorvo, Inc.","symbol":"QRVO"},{"name":"QUALCOMM Incorporated","symbol":"QCOM"},{"name":"Quality Systems, Inc.","symbol":"QSII"},{"name":"Qualstar Corporation","symbol":"QBAK"},{"name":"Qualys, Inc.","symbol":"QLYS"},{"name":"Quantum Fuel Systems Technologies Worldwide, Inc.","symbol":"QTWW"},{"name":"Quest Resource Holding Corporation.","symbol":"QRHC"},{"name":"QuickLogic Corporation","symbol":"QUIK"},{"name":"Quidel Corporation","symbol":"QDEL"},{"name":"Quinpario Acquisition Corp. 2","symbol":"QPAC"},{"name":"Quinpario Acquisition Corp. 2","symbol":"QPACU"},{"name":"Quinpario Acquisition Corp. 2","symbol":"QPACW"},{"name":"QuinStreet, Inc.","symbol":"QNST"},{"name":"Qumu Corporation","symbol":"QUMU"},{"name":"Qunar Cayman Islands Limited","symbol":"QUNR"},{"name":"Quotient Limited","symbol":"QTNT"},{"name":"R.R. Donnelley & Sons Company","symbol":"RRD"},{"name":"Rada Electronics Industries Limited","symbol":"RADA"},{"name":"Radcom Ltd.","symbol":"RDCM"},{"name":"Radio One, Inc.","symbol":"ROIA"},{"name":"Radio One, Inc.","symbol":"ROIAK"},{"name":"RadiSys Corporation","symbol":"RSYS"},{"name":"Radius Health, Inc.","symbol":"RDUS"},{"name":"RadNet, Inc.","symbol":"RDNT"},{"name":"Radware Ltd.","symbol":"RDWR"},{"name":"Rambus, Inc.","symbol":"RMBS"},{"name":"Rand Capital Corporation","symbol":"RAND"},{"name":"Rand Logistics, Inc.","symbol":"RLOG"},{"name":"Randgold Resources Limited","symbol":"GOLD"},{"name":"Rapid7, Inc.","symbol":"RPD"},{"name":"Raptor Pharmaceutical Corp.","symbol":"RPTP"},{"name":"Rave Restaurant Group, Inc.","symbol":"RAVE"},{"name":"Raven Industries, Inc.","symbol":"RAVN"},{"name":"RBC Bearings Incorporated","symbol":"ROLL"},{"name":"RCI Hospitality Holdings, Inc.","symbol":"RICK"},{"name":"RCM Technologies, Inc.","symbol":"RCMT"},{"name":"ReachLocal, Inc.","symbol":"RLOC"},{"name":"Reading International Inc","symbol":"RDI"},{"name":"Reading International Inc","symbol":"RDIB"},{"name":"Real Goods Solar, Inc.","symbol":"RGSE"},{"name":"Real Industry, Inc.","symbol":"RELY"},{"name":"RealNetworks, Inc.","symbol":"RNWK"},{"name":"RealPage, Inc.","symbol":"RP"},{"name":"Reaves Utilities ETF","symbol":"UTES"},{"name":"Recon Capital DAX Germany ETF","symbol":"DAX"},{"name":"Recon Capital FTSE 100 ETF","symbol":"UK"},{"name":"Recon Capital NASDAQ-100 Covered Call ETF","symbol":"QYLD"},{"name":"Recon Technology, Ltd.","symbol":"RCON"},{"name":"Recro Pharma, Inc.","symbol":"REPH"},{"name":"Red Robin Gourmet Burgers, Inc.","symbol":"RRGB"},{"name":"Redhill Biopharma Ltd.","symbol":"RDHL"},{"name":"Rediff.com India Limited","symbol":"REDF"},{"name":"Regeneron Pharmaceuticals, Inc.","symbol":"REGN"},{"name":"REGENXBIO Inc.","symbol":"RGNX"},{"name":"Regulus Therapeutics Inc.","symbol":"RGLS"},{"name":"Reis, Inc","symbol":"REIS"},{"name":"Reliv&#39; International, Inc.","symbol":"RELV"},{"name":"Relypsa, Inc.","symbol":"RLYP"},{"name":"Remark Media, Inc.","symbol":"MARK"},{"name":"Renasant Corporation","symbol":"RNST"},{"name":"Renewable Energy Group, Inc.","symbol":"REGI"},{"name":"Rennova Health, Inc.","symbol":"RNVA"},{"name":"Rent-A-Center Inc.","symbol":"RCII"},{"name":"Rentech, Inc.","symbol":"RTK"},{"name":"Rentrak Corporation","symbol":"RENT"},{"name":"Repligen Corporation","symbol":"RGEN"},{"name":"Repros Therapeutics Inc.","symbol":"RPRX"},{"name":"Repros Therapeutics Inc.","symbol":"RPRXW"},{"name":"Repros Therapeutics Inc.","symbol":"RPRXZ"},{"name":"Republic Airways Holdings, Inc.","symbol":"RJET"},{"name":"Republic Bancorp, Inc.","symbol":"RBCAA"},{"name":"Republic First Bancorp, Inc.","symbol":"FRBK"},{"name":"RESAAS Services Inc.","symbol":"RSAS"},{"name":"Research Frontiers Incorporated","symbol":"REFR"},{"name":"Resonant Inc.","symbol":"RESN"},{"name":"Resource America, Inc.","symbol":"REXI"},{"name":"Resources Connection, Inc.","symbol":"RECN"},{"name":"Retail Opportunity Investments Corp.","symbol":"ROIC"},{"name":"RetailMeNot, Inc.","symbol":"SALE"},{"name":"Retrophin, Inc.","symbol":"RTRX"},{"name":"Revance Therapeutics, Inc.","symbol":"RVNC"},{"name":"rEVO Biologics, Inc.","symbol":"RBIO"},{"name":"Revolution Lighting Technologies, Inc.","symbol":"RVLT"},{"name":"ReWalk Robotics Ltd","symbol":"RWLK"},{"name":"Rex Energy Corporation","symbol":"REXX"},{"name":"RF Industries, Ltd.","symbol":"RFIL"},{"name":"RGC Resources Inc.","symbol":"RGCO"},{"name":"RiceBran Technologies","symbol":"RIBT"},{"name":"RiceBran Technologies","symbol":"RIBTW"},{"name":"Richardson Electronics, Ltd.","symbol":"RELL"},{"name":"Rigel Pharmaceuticals, Inc.","symbol":"RIGL"},{"name":"Rightside Group, Ltd.","symbol":"NAME"},{"name":"RigNet, Inc.","symbol":"RNET"},{"name":"RIT Technologies Ltd.","symbol":"RITT"},{"name":"RIT Technologies Ltd.","symbol":"RITTW"},{"name":"Ritter Pharmaceuticals, Inc.","symbol":"RTTR"},{"name":"River Valley Bancorp.","symbol":"RIVR"},{"name":"RiverBanc Multifamily Investors, Inc.","symbol":"RMI"},{"name":"Riverview Bancorp Inc","symbol":"RVSB"},{"name":"RLJ Entertainment, Inc.","symbol":"RLJE"},{"name":"RMG Networks Holding Corporation","symbol":"RMGN"},{"name":"Robo-Stox Global Robotics and Automation Index ETF","symbol":"ROBO"},{"name":"Rocket Fuel Inc.","symbol":"FUEL"},{"name":"Rockwell Medical, Inc.","symbol":"RMTI"},{"name":"Rocky Brands, Inc.","symbol":"RCKY"},{"name":"Rocky Mountain Chocolate Factory, Inc.","symbol":"RMCF"},{"name":"Rofin-Sinar Technologies, Inc.","symbol":"RSTI"},{"name":"Roka Bioscience, Inc.","symbol":"ROKA"},{"name":"Rosetta Genomics Ltd.","symbol":"ROSG"},{"name":"Ross Stores, Inc.","symbol":"ROST"},{"name":"Rovi Corporation","symbol":"ROVI"},{"name":"Royal Bancshares of Pennsylvania, Inc.","symbol":"RBPAA"},{"name":"Royal Gold, Inc.","symbol":"RGLD"},{"name":"Royale Energy, Inc.","symbol":"ROYL"},{"name":"RPX Corporation","symbol":"RPXC"},{"name":"RR Media Ltd.","symbol":"RRM"},{"name":"RTI Surgical, Inc.","symbol":"RTIX"},{"name":"Rubicon Technology, Inc.","symbol":"RBCN"},{"name":"Rush Enterprises, Inc.","symbol":"RUSHA"},{"name":"Rush Enterprises, Inc.","symbol":"RUSHB"},{"name":"Ruth&#39;s Hospitality Group, Inc.","symbol":"RUTH"},{"name":"RXI Pharmaceuticals Corporation","symbol":"RXII"},{"name":"Ryanair Holdings plc","symbol":"RYAAY"},{"name":"S&T Bancorp, Inc.","symbol":"STBA"},{"name":"S&W Seed Company","symbol":"SANW"},{"name":"Sabra Healthcare REIT, Inc.","symbol":"SBRA"},{"name":"Sabra Healthcare REIT, Inc.","symbol":"SBRAP"},{"name":"Sabre Corporation","symbol":"SABR"},{"name":"SAExploration Holdings, Inc.","symbol":"SAEX"},{"name":"Safety Insurance Group, Inc.","symbol":"SAFT"},{"name":"Sage Therapeutics, Inc.","symbol":"SAGE"},{"name":"Sagent Pharmaceuticals, Inc.","symbol":"SGNT"},{"name":"Saia, Inc.","symbol":"SAIA"},{"name":"Sajan, Inc.","symbol":"SAJA"},{"name":"Salem Media Group, Inc.","symbol":"SALM"},{"name":"Salisbury Bancorp, Inc.","symbol":"SAL"},{"name":"Sanderson Farms, Inc.","symbol":"SAFM"},{"name":"SanDisk Corporation","symbol":"SNDK"},{"name":"Sandy Spring Bancorp, Inc.","symbol":"SASR"},{"name":"Sangamo BioSciences, Inc.","symbol":"SGMO"},{"name":"Sanmina Corporation","symbol":"SANM"},{"name":"Sanofi","symbol":"GCVRZ"},{"name":"Sapiens International Corporation N.V.","symbol":"SPNS"},{"name":"Sarepta Therapeutics, Inc.","symbol":"SRPT"},{"name":"SB Financial Group, Inc.","symbol":"SBFG"},{"name":"SB Financial Group, Inc.","symbol":"SBFGP"},{"name":"SBA Communications Corporation","symbol":"SBAC"},{"name":"ScanSource, Inc.","symbol":"SCSC"},{"name":"Schmitt Industries, Inc.","symbol":"SMIT"},{"name":"Schnitzer Steel Industries, Inc.","symbol":"SCHN"},{"name":"Scholastic Corporation","symbol":"SCHL"},{"name":"SciClone Pharmaceuticals, Inc.","symbol":"SCLN"},{"name":"Scientific Games Corp","symbol":"SGMS"},{"name":"SciQuest, Inc.","symbol":"SQI"},{"name":"SCYNEXIS, Inc.","symbol":"SCYX"},{"name":"SeaChange International, Inc.","symbol":"SEAC"},{"name":"Seacoast Banking Corporation of Florida","symbol":"SBCF"},{"name":"Seagate Technology.","symbol":"STX"},{"name":"Seanergy Maritime Holdings Corp","symbol":"SHIP"},{"name":"Sears Canada Inc.","symbol":"SRSC"},{"name":"Sears Holdings Corporation","symbol":"SHLD"},{"name":"Sears Holdings Corporation","symbol":"SHLDW"},{"name":"Sears Hometown and Outlet Stores, Inc.","symbol":"SHOS"},{"name":"SeaSpine Holdings Corporation","symbol":"SPNE"},{"name":"Seattle Genetics, Inc.","symbol":"SGEN"},{"name":"Second Sight Medical Products, Inc.","symbol":"EYES"},{"name":"Security National Financial Corporation","symbol":"SNFCA"},{"name":"SEI Investments Company","symbol":"SEIC"},{"name":"Select Bancorp, Inc.","symbol":"SLCT"},{"name":"Select Comfort Corporation","symbol":"SCSS"},{"name":"Selective Insurance Group, Inc.","symbol":"SIGI"},{"name":"SemiLEDS Corporation","symbol":"LEDS"},{"name":"Semler Scientific, Inc.","symbol":"SMLR"},{"name":"Semtech Corporation","symbol":"SMTC"},{"name":"Seneca Foods Corp.","symbol":"SENEA"},{"name":"Seneca Foods Corp.","symbol":"SENEB"},{"name":"Senomyx, Inc.","symbol":"SNMX"},{"name":"Sequenom, Inc.","symbol":"SQNM"},{"name":"Sequential Brands Group, Inc.","symbol":"SQBG"},{"name":"Seres Therapeutics, Inc.","symbol":"MCRB"},{"name":"ServiceSource International, Inc.","symbol":"SREV"},{"name":"ServisFirst Bancshares, Inc.","symbol":"SFBS"},{"name":"Sevcon, Inc.","symbol":"SEV"},{"name":"Severn Bancorp Inc","symbol":"SVBI"},{"name":"SFX Entertainment, Inc.","symbol":"SFXE"},{"name":"SGOCO Group, Ltd","symbol":"SGOC"},{"name":"Sharps Compliance Corp","symbol":"SMED"},{"name":"Shenandoah Telecommunications Co","symbol":"SHEN"},{"name":"Shiloh Industries, Inc.","symbol":"SHLO"},{"name":"Shire plc","symbol":"SHPG"},{"name":"Shoe Carnival, Inc.","symbol":"SCVL"},{"name":"Shore Bancshares Inc","symbol":"SHBI"},{"name":"ShoreTel, Inc.","symbol":"SHOR"},{"name":"Shutterfly, Inc.","symbol":"SFLY"},{"name":"SI Financial Group, Inc.","symbol":"SIFI"},{"name":"Siebert Financial Corp.","symbol":"SIEB"},{"name":"Sientra, Inc.","symbol":"SIEN"},{"name":"Sierra Bancorp","symbol":"BSRR"},{"name":"Sierra Wireless, Inc.","symbol":"SWIR"},{"name":"Sify Technologies Limited","symbol":"SIFY"},{"name":"Sigma Designs, Inc.","symbol":"SIGM"},{"name":"SigmaTron International, Inc.","symbol":"SGMA"},{"name":"Signal Genetics, Inc.","symbol":"SGNL"},{"name":"Signature Bank","symbol":"SBNY"},{"name":"Signature Bank","symbol":"SBNYW"},{"name":"Silgan Holdings Inc.","symbol":"SLGN"},{"name":"Silicom Ltd","symbol":"SILC"},{"name":"Silicon Graphics International Corp","symbol":"SGI"},{"name":"Silicon Laboratories, Inc.","symbol":"SLAB"},{"name":"Silicon Motion Technology Corporation","symbol":"SIMO"},{"name":"Siliconware Precision Industries Company, Ltd.","symbol":"SPIL"},{"name":"Silver Standard Resources Inc.","symbol":"SSRI"},{"name":"Silvercrest Asset Management Group Inc.","symbol":"SAMG"},{"name":"Simmons First National Corporation","symbol":"SFNC"},{"name":"Simulations Plus, Inc.","symbol":"SLP"},{"name":"Sina Corporation","symbol":"SINA"},{"name":"Sinclair Broadcast Group, Inc.","symbol":"SBGI"},{"name":"Sino-Global Shipping America, Ltd.","symbol":"SINO"},{"name":"Sinovac Biotech, Ltd.","symbol":"SVA"},{"name":"Sirius XM Holdings Inc.","symbol":"SIRI"},{"name":"Sirona Dental Systems, Inc.","symbol":"SIRO"},{"name":"SIRVA, Inc.","symbol":"SRVA"},{"name":"SITO Mobile, Ltd.","symbol":"SITO"},{"name":"Sizmek Inc.","symbol":"SZMK"},{"name":"Skullcandy, Inc.","symbol":"SKUL"},{"name":"Sky Solar Holdings, Ltd.","symbol":"SKYS"},{"name":"Skyline Medical Inc.","symbol":"SKLN"},{"name":"Skyline Medical Inc.","symbol":"SKLNU"},{"name":"Sky-mobi Limited","symbol":"MOBI"},{"name":"SkyPeople Fruit Juice, Inc.","symbol":"SPU"},{"name":"Skystar Bio-Pharmaceutical Company","symbol":"SKBI"},{"name":"SkyWest, Inc.","symbol":"SKYW"},{"name":"Skyworks Solutions, Inc.","symbol":"SWKS"},{"name":"SLM Corporation","symbol":"ISM"},{"name":"SLM Corporation","symbol":"JSM"},{"name":"SLM Corporation","symbol":"OSM"},{"name":"SLM Corporation","symbol":"SLM"},{"name":"SLM Corporation","symbol":"SLMAP"},{"name":"SLM Corporation","symbol":"SLMBP"},{"name":"SMART Technologies Inc.","symbol":"SMT"},{"name":"SmartPros Ltd.","symbol":"SPRO"},{"name":"Smith & Wesson Holding Corporation","symbol":"SWHC"},{"name":"Smith Micro Software, Inc.","symbol":"SMSI"},{"name":"SMTC Corporation","symbol":"SMTX"},{"name":"SMTP, Inc.","symbol":"SMTP"},{"name":"Snyder&#39;s-Lance, Inc.","symbol":"LNCE"},{"name":"SodaStream International Ltd.","symbol":"SODA"},{"name":"Sohu.com Inc.","symbol":"SOHU"},{"name":"Solar Capital Ltd.","symbol":"SLRC"},{"name":"Solar Senior Capital Ltd.","symbol":"SUNS"},{"name":"Solar3D, Inc.","symbol":"SLTD"},{"name":"SolarCity Corporation","symbol":"SCTY"},{"name":"SolarEdge Technologies, Inc.","symbol":"SEDG"},{"name":"Solazyme, Inc.","symbol":"SZYM"},{"name":"Sonic Corp.","symbol":"SONC"},{"name":"Sonic Foundry, Inc.","symbol":"SOFO"},{"name":"Sonus Networks, Inc.","symbol":"SONS"},{"name":"Sophiris Bio, Inc.","symbol":"SPHS"},{"name":"SORL Auto Parts, Inc.","symbol":"SORL"},{"name":"Sorrento Therapeutics, Inc.","symbol":"SRNE"},{"name":"Sotherly Hotels Inc.","symbol":"SOHO"},{"name":"Sotherly Hotels LP","symbol":"SOHOL"},{"name":"Sotherly Hotels LP","symbol":"SOHOM"},{"name":"Sound Financial Bancorp, Inc.","symbol":"SFBC"},{"name":"South State Corporation","symbol":"SSB"},{"name":"Southcoast Financial Corporation","symbol":"SOCB"},{"name":"Southern First Bancshares, Inc.","symbol":"SFST"},{"name":"Southern Missouri Bancorp, Inc.","symbol":"SMBC"},{"name":"Southern National Bancorp of Virginia, Inc.","symbol":"SONA"},{"name":"Southside Bancshares, Inc.","symbol":"SBSI"},{"name":"Southwest Bancorp, Inc.","symbol":"OKSB"},{"name":"SP Plus Corporation","symbol":"SP"},{"name":"Span-America Medical Systems, Inc.","symbol":"SPAN"},{"name":"Spanish Broadcasting System, Inc.","symbol":"SBSA"},{"name":"SPAR Group, Inc.","symbol":"SGRP"},{"name":"Spark Energy, Inc.","symbol":"SPKE"},{"name":"Spark Therapeutics, Inc.","symbol":"ONCE"},{"name":"Spartan Motors, Inc.","symbol":"SPAR"},{"name":"SpartanNash Company","symbol":"SPTN"},{"name":"Spectrum Pharmaceuticals, Inc.","symbol":"SPPI"},{"name":"Speed Commerce, Inc.","symbol":"SPDC"},{"name":"Sphere 3D Corp.","symbol":"ANY"},{"name":"Spherix Incorporated","symbol":"SPEX"},{"name":"Spirit Airlines, Inc.","symbol":"SAVE"},{"name":"Splunk Inc.","symbol":"SPLK"},{"name":"Spok Holdings, Inc.","symbol":"SPOK"},{"name":"Sportsman&#39;s Warehouse Holdings, Inc.","symbol":"SPWH"},{"name":"Sprott Focus Trust, Inc.","symbol":"FUND"},{"name":"Sprouts Farmers Market, Inc.","symbol":"SFM"},{"name":"SPS Commerce, Inc.","symbol":"SPSC"},{"name":"SS&C Technologies Holdings, Inc.","symbol":"SSNC"},{"name":"STAAR Surgical Company","symbol":"STAA"},{"name":"Staffing 360 Solutions, Inc.","symbol":"STAF"},{"name":"Stamps.com Inc.","symbol":"STMP"},{"name":"Stanley Furniture Company, Inc.","symbol":"STLY"},{"name":"Staples, Inc.","symbol":"SPLS"},{"name":"Star Bulk Carriers Corp.","symbol":"SBLK"},{"name":"Star Bulk Carriers Corp.","symbol":"SBLKL"},{"name":"Starbucks Corporation","symbol":"SBUX"},{"name":"Starz","symbol":"STRZA"},{"name":"Starz","symbol":"STRZB"},{"name":"State Auto Financial Corporation","symbol":"STFC"},{"name":"State Bank Financial Corporation.","symbol":"STBZ"},{"name":"State Investors Bancorp, Inc.","symbol":"SIBC"},{"name":"State National Companies, Inc.","symbol":"SNC"},{"name":"SteadyMed Ltd.","symbol":"STDY"},{"name":"StealthGas, Inc.","symbol":"GASS"},{"name":"Steel Dynamics, Inc.","symbol":"STLD"},{"name":"Steel Excel Inc.","symbol":"SXCL"},{"name":"Stein Mart, Inc.","symbol":"SMRT"},{"name":"Steiner Leisure Limited","symbol":"STNR"},{"name":"Stellar Biotechnologies, Inc.","symbol":"SBOT"},{"name":"StemCells, Inc.","symbol":"STEM"},{"name":"Stemline Therapeutics, Inc.","symbol":"STML"},{"name":"Stereotaxis, Inc.","symbol":"STXS"},{"name":"Stericycle, Inc.","symbol":"SRCL"},{"name":"Stericycle, Inc.","symbol":"SRCLP"},{"name":"Sterling Construction Company Inc","symbol":"STRL"},{"name":"Steven Madden, Ltd.","symbol":"SHOO"},{"name":"Stewardship Financial Corp","symbol":"SSFN"},{"name":"Stock Building Supply Holdings, Inc.","symbol":"STCK"},{"name":"Stock Yards Bancorp, Inc.","symbol":"SYBT"},{"name":"StoneCastle Financial Corp","symbol":"BANX"},{"name":"Stonegate Bank","symbol":"SGBK"},{"name":"Stratasys, Ltd.","symbol":"SSYS"},{"name":"Strattec Security Corporation","symbol":"STRT"},{"name":"Stratus Properties, Inc.","symbol":"STRS"},{"name":"Strayer Education, Inc.","symbol":"STRA"},{"name":"Streamline Health Solutions, Inc.","symbol":"STRM"},{"name":"Strongbridge Biopharma plc","symbol":"SBBP"},{"name":"Student Transportation Inc","symbol":"STB"},{"name":"Sucampo Pharmaceuticals, Inc.","symbol":"SCMP"},{"name":"Suffolk Bancorp","symbol":"SUBK"},{"name":"Summer Infant, Inc.","symbol":"SUMR"},{"name":"Summit Financial Group, Inc.","symbol":"SMMF"},{"name":"Summit State Bank","symbol":"SSBI"},{"name":"Summit Therapeutics plc","symbol":"SMMT"},{"name":"Sun Bancorp, Inc.","symbol":"SNBC"},{"name":"Sun Hydraulics Corporation","symbol":"SNHY"},{"name":"Sundance Energy Australia Limited","symbol":"SNDE"},{"name":"SunEdison Semiconductor Limited","symbol":"SEMI"},{"name":"Sunesis Pharmaceuticals, Inc.","symbol":"SNSS"},{"name":"SunOpta, Inc.","symbol":"STKL"},{"name":"SunPower Corporation","symbol":"SPWR"},{"name":"Sunrun Inc.","symbol":"RUN"},{"name":"Sunshine Bancorp, Inc.","symbol":"SBCP"},{"name":"Sunshine Heart Inc","symbol":"SSH"},{"name":"Super Micro Computer, Inc.","symbol":"SMCI"},{"name":"SuperCom, Ltd.","symbol":"SPCB"},{"name":"Superconductor Technologies Inc.","symbol":"SCON"},{"name":"Superior Uniform Group, Inc.","symbol":"SGC"},{"name":"Supernus Pharmaceuticals, Inc.","symbol":"SUPN"},{"name":"support.com, Inc.","symbol":"SPRT"},{"name":"Surgery Partners, Inc.","symbol":"SGRY"},{"name":"Surgical Care Affiliates, Inc.","symbol":"SCAI"},{"name":"SurModics, Inc.","symbol":"SRDX"},{"name":"Sussex Bancorp","symbol":"SBBX"},{"name":"Sutor Technology Group Limited","symbol":"TOR"},{"name":"SVB Financial Group","symbol":"SIVB"},{"name":"SVB Financial Group","symbol":"SIVBO"},{"name":"Swisher Hygiene, Inc.","symbol":"SWSH"},{"name":"Sykes Enterprises, Incorporated","symbol":"SYKE"},{"name":"Symantec Corporation","symbol":"SYMC"},{"name":"Symmetry Surgical Inc.","symbol":"SSRG"},{"name":"Synacor, Inc.","symbol":"SYNC"},{"name":"Synalloy Corporation","symbol":"SYNL"},{"name":"Synaptics Incorporated","symbol":"SYNA"},{"name":"Synchronoss Technologies, Inc.","symbol":"SNCR"},{"name":"Syndax Pharmaceuticals, Inc.","symbol":"SNDX"},{"name":"Synergy Pharmaceuticals, Inc.","symbol":"SGYP"},{"name":"Synergy Pharmaceuticals, Inc.","symbol":"SGYPU"},{"name":"Synergy Pharmaceuticals, Inc.","symbol":"SGYPW"},{"name":"Syneron Medical Ltd.","symbol":"ELOS"},{"name":"Synopsys, Inc.","symbol":"SNPS"},{"name":"Synta Pharmaceuticals Corp.","symbol":"SNTA"},{"name":"Syntel, Inc.","symbol":"SYNT"},{"name":"Synthesis Energy Systems, Inc.","symbol":"SYMX"},{"name":"Synutra International, Inc.","symbol":"SYUT"},{"name":"Sypris Solutions, Inc.","symbol":"SYPR"},{"name":"Sysorex Global Holding Corp.","symbol":"SYRX"},{"name":"T. Rowe Price Group, Inc.","symbol":"TROW"},{"name":"T2 Biosystems, Inc.","symbol":"TTOO"},{"name":"Taitron Components Incorporated","symbol":"TAIT"},{"name":"Take-Two Interactive Software, Inc.","symbol":"TTWO"},{"name":"Talmer Bancorp, Inc.","symbol":"TLMR"},{"name":"Tandem Diabetes Care, Inc.","symbol":"TNDM"},{"name":"Tandy Leather Factory, Inc.","symbol":"TLF"},{"name":"Tangoe, Inc.","symbol":"TNGO"},{"name":"Tantech Holdings Ltd.","symbol":"TANH"},{"name":"Tarena International, Inc.","symbol":"TEDU"},{"name":"TASER International, Inc.","symbol":"TASR"},{"name":"TAT Technologies Ltd.","symbol":"TATT"},{"name":"Taylor Devices, Inc.","symbol":"TAYD"},{"name":"TCP Capital Corp.","symbol":"TCPC"},{"name":"TearLab Corporation","symbol":"TEAR"},{"name":"Tech Data Corporation","symbol":"TECD"},{"name":"Technical Communications Corporation","symbol":"TCCO"},{"name":"TechTarget, Inc.","symbol":"TTGT"},{"name":"Tecnoglass Inc.","symbol":"TGLS"},{"name":"Tecogen Inc.","symbol":"TGEN"},{"name":"TeleCommunication Systems, Inc.","symbol":"TSYS"},{"name":"TeleNav, Inc.","symbol":"TNAV"},{"name":"TeleTech Holdings, Inc.","symbol":"TTEC"},{"name":"Teligent, Inc.","symbol":"TLGT"},{"name":"Tenax Therapeutics, Inc.","symbol":"TENX"},{"name":"TerraForm Global, Inc.","symbol":"GLBL"},{"name":"TerraForm Power, Inc.","symbol":"TERP"},{"name":"Terrapin 3 Acquisition Corporation","symbol":"TRTL"},{"name":"Terrapin 3 Acquisition Corporation","symbol":"TRTLU"},{"name":"Terrapin 3 Acquisition Corporation","symbol":"TRTLW"},{"name":"Territorial Bancorp Inc.","symbol":"TBNK"},{"name":"TESARO, Inc.","symbol":"TSRO"},{"name":"Tesco Corporation","symbol":"TESO"},{"name":"Tesla Motors, Inc.","symbol":"TSLA"},{"name":"TESSCO Technologies Incorporated","symbol":"TESS"},{"name":"Tessera Technologies, Inc.","symbol":"TSRA"},{"name":"Tetra Tech, Inc.","symbol":"TTEK"},{"name":"TetraLogic Pharmaceuticals Corporation","symbol":"TLOG"},{"name":"Tetraphase Pharmaceuticals, Inc.","symbol":"TTPH"},{"name":"Texas Capital Bancshares, Inc.","symbol":"TCBI"},{"name":"Texas Capital Bancshares, Inc.","symbol":"TCBIL"},{"name":"Texas Capital Bancshares, Inc.","symbol":"TCBIP"},{"name":"Texas Capital Bancshares, Inc.","symbol":"TCBIW"},{"name":"Texas Instruments Incorporated","symbol":"TXN"},{"name":"Texas Roadhouse, Inc.","symbol":"TXRH"},{"name":"TFS Financial Corporation","symbol":"TFSL"},{"name":"TG Therapeutics, Inc.","symbol":"TGTX"},{"name":"The Advisory Board Company","symbol":"ABCO"},{"name":"The Andersons, Inc.","symbol":"ANDE"},{"name":"The Bancorp, Inc.","symbol":"TBBK"},{"name":"The Bon-Ton Stores, Inc.","symbol":"BONT"},{"name":"The Carlyle Group L.P.","symbol":"CG"},{"name":"The Cheesecake Factory Incorporated","symbol":"CAKE"},{"name":"The Chefs&#39; Warehouse, Inc.","symbol":"CHEF"},{"name":"The Community Financial Corporation","symbol":"TCFC"},{"name":"The Descartes Systems Group Inc.","symbol":"DSGX"},{"name":"The Dixie Group, Inc.","symbol":"DXYN"},{"name":"The Ensign Group, Inc.","symbol":"ENSG"},{"name":"The ExOne Company","symbol":"XONE"},{"name":"The Finish Line, Inc.","symbol":"FINL"},{"name":"The First Bancshares, Inc.","symbol":"FBMS"},{"name":"The First of Long Island Corporation","symbol":"FLIC"},{"name":"The Fresh Market, Inc.","symbol":"TFM"},{"name":"The Goodyear Tire & Rubber Company","symbol":"GT"},{"name":"The Habit Restaurants, Inc.","symbol":"HABT"},{"name":"The Hackett Group, Inc.","symbol":"HCKT"},{"name":"The Hain Celestial Group, Inc.","symbol":"HAIN"},{"name":"The Herzfeld Caribbean Basin Fund, Inc.","symbol":"CUBA"},{"name":"The Intergroup Corporation","symbol":"INTG"},{"name":"The Joint Corp.","symbol":"JYNT"},{"name":"The KEYW Holding Corporation","symbol":"KEYW"},{"name":"The Kraft Heinz Company","symbol":"KHC"},{"name":"The Medicines Company","symbol":"MDCO"},{"name":"The Michaels Companies, Inc.","symbol":"MIK"},{"name":"The Middleby Corporation","symbol":"MIDD"},{"name":"The Navigators Group, Inc.","symbol":"NAVG"},{"name":"The ONE Group Hospitality, Inc.","symbol":"STKS"},{"name":"The Priceline Group Inc.","symbol":"PCLN"},{"name":"The Providence Service Corporation","symbol":"PRSC"},{"name":"The Restaurant ETF","symbol":"BITE"},{"name":"The RMR Group Inc.","symbol":"RMRAV"},{"name":"The Spectranetics Corporation","symbol":"SPNC"},{"name":"The Ultimate Software Group, Inc.","symbol":"ULTI"},{"name":"The York Water Company","symbol":"YORW"},{"name":"The9 Limited","symbol":"NCTY"},{"name":"Theravance Biopharma, Inc.","symbol":"TBPH"},{"name":"Theravance, Inc.","symbol":"THRX"},{"name":"TheStreet, Inc.","symbol":"TST"},{"name":"THL Credit, Inc.","symbol":"TCRD"},{"name":"Threshold Pharmaceuticals, Inc.","symbol":"THLD"},{"name":"THT Heat Transfer Technology, Inc.","symbol":"THTI"},{"name":"TICC Capital Corp.","symbol":"TICC"},{"name":"Tile Shop Hldgs, Inc.","symbol":"TTS"},{"name":"Till Capital Ltd.","symbol":"TIL"},{"name":"Timberland Bancorp, Inc.","symbol":"TSBK"},{"name":"Tiptree Financial Inc.","symbol":"TIPT"},{"name":"Titan Machinery Inc.","symbol":"TITN"},{"name":"Titan Pharmaceuticals, Inc.","symbol":"TTNP"},{"name":"TiVo Inc.","symbol":"TIVO"},{"name":"T-Mobile US, Inc.","symbol":"TMUS"},{"name":"T-Mobile US, Inc.","symbol":"TMUSP"},{"name":"Tobira Therapeutics, Inc.","symbol":"TBRA"},{"name":"Tokai Pharmaceuticals, Inc.","symbol":"TKAI"},{"name":"Tonix Pharmaceuticals Holding Corp.","symbol":"TNXP"},{"name":"Top Image Systems, Ltd.","symbol":"TISA"},{"name":"TOP Ships Inc.","symbol":"TOPS"},{"name":"TOR Minerals International Inc","symbol":"TORM"},{"name":"Torchlight Energy Resources, Inc.","symbol":"TRCH"},{"name":"Tower Semiconductor Ltd.","symbol":"TSEM"},{"name":"Towers Watson & Co.","symbol":"TW"},{"name":"Towerstream Corporation","symbol":"TWER"},{"name":"Town Sports International Holdings, Inc.","symbol":"CLUB"},{"name":"Towne Bank","symbol":"TOWN"},{"name":"TRACON Pharmaceuticals, Inc.","symbol":"TCON"},{"name":"Tractor Supply Company","symbol":"TSCO"},{"name":"Trans World Entertainment Corp.","symbol":"TWMC"},{"name":"TransAct Technologies Incorporated","symbol":"TACT"},{"name":"Transcat, Inc.","symbol":"TRNS"},{"name":"Transgenomic, Inc.","symbol":"TBIO"},{"name":"Transglobe Energy Corp","symbol":"TGA"},{"name":"Transition Therapeutics, Inc.","symbol":"TTHI"},{"name":"Travelzoo Inc.","symbol":"TZOO"},{"name":"Trevena, Inc.","symbol":"TRVN"},{"name":"TriCo Bancshares","symbol":"TCBK"},{"name":"Trillium Therapeutics Inc.","symbol":"TRIL"},{"name":"TriMas Corporation","symbol":"TRS"},{"name":"Trimble Navigation Limited","symbol":"TRMB"},{"name":"Trinity Biotech plc","symbol":"TRIB"},{"name":"TripAdvisor, Inc.","symbol":"TRIP"},{"name":"TriState Capital Holdings, Inc.","symbol":"TSC"},{"name":"Triumph Bancorp, Inc.","symbol":"TBK"},{"name":"TriVascular Technologies, Inc.","symbol":"TRIV"},{"name":"TrovaGene, Inc.","symbol":"TROV"},{"name":"TrovaGene, Inc.","symbol":"TROVU"},{"name":"TrovaGene, Inc.","symbol":"TROVW"},{"name":"TrueCar, Inc.","symbol":"TRUE"},{"name":"Truett-Hurst, Inc.","symbol":"THST"},{"name":"TrustCo Bank Corp NY","symbol":"TRST"},{"name":"Trustmark Corporation","symbol":"TRMK"},{"name":"TSR, Inc.","symbol":"TSRI"},{"name":"TTM Technologies, Inc.","symbol":"TTMI"},{"name":"TubeMogul, Inc.","symbol":"TUBE"},{"name":"Tucows Inc.","symbol":"TCX"},{"name":"Tuesday Morning Corp.","symbol":"TUES"},{"name":"Tuniu Corporation","symbol":"TOUR"},{"name":"Turtle Beach Corporation","symbol":"HEAR"},{"name":"Tuttle Tactical Management Multi-Strategy Income ETF","symbol":"TUTI"},{"name":"Tuttle Tactical Management U.S. Core ETF","symbol":"TUTT"},{"name":"Twenty-First Century Fox, Inc.","symbol":"FOX"},{"name":"Twenty-First Century Fox, Inc.","symbol":"FOXA"},{"name":"Twin Disc, Incorporated","symbol":"TWIN"},{"name":"Two River Bancorp","symbol":"TRCB"},{"name":"U S Concrete, Inc.","symbol":"USCR"},{"name":"U.S. Auto Parts Network, Inc.","symbol":"PRTS"},{"name":"U.S. Energy Corp.","symbol":"USEG"},{"name":"U.S. Global Investors, Inc.","symbol":"GROW"},{"name":"U.S. Rare Earths, Inc.","symbol":"UREE"},{"name":"UBIC, Inc.","symbol":"UBIC"},{"name":"Ubiquiti Networks, Inc.","symbol":"UBNT"},{"name":"UFP Technologies, Inc.","symbol":"UFPT"},{"name":"Ulta Salon, Cosmetics & Fragrance, Inc.","symbol":"ULTA"},{"name":"Ultra Clean Holdings, Inc.","symbol":"UCTT"},{"name":"Ultragenyx Pharmaceutical Inc.","symbol":"RARE"},{"name":"Ultralife Corporation","symbol":"ULBI"},{"name":"Ultrapetrol (Bahamas) Limited","symbol":"ULTR"},{"name":"Ultratech, Inc.","symbol":"UTEK"},{"name":"UMB Financial Corporation","symbol":"UMBF"},{"name":"Umpqua Holdings Corporation","symbol":"UMPQ"},{"name":"Unico American Corporation","symbol":"UNAM"},{"name":"Unilife Corporation","symbol":"UNIS"},{"name":"Union Bankshares Corporation","symbol":"UBSH"},{"name":"Union Bankshares, Inc.","symbol":"UNB"},{"name":"Uni-Pixel, Inc.","symbol":"UNXL"},{"name":"uniQure N.V.","symbol":"QURE"},{"name":"United Bancorp, Inc.","symbol":"UBCP"},{"name":"United Bancshares, Inc.","symbol":"UBOH"},{"name":"United Bankshares, Inc.","symbol":"UBSI"},{"name":"United Community Bancorp","symbol":"UCBA"},{"name":"United Community Banks, Inc.","symbol":"UCBI"},{"name":"United Community Financial Corp.","symbol":"UCFC"},{"name":"United Development Funding IV","symbol":"UDF"},{"name":"United Financial Bancorp, Inc.","symbol":"UBNK"},{"name":"United Fire Group, Inc","symbol":"UFCS"},{"name":"United Insurance Holdings Corp.","symbol":"UIHC"},{"name":"United Natural Foods, Inc.","symbol":"UNFI"},{"name":"United Online, Inc.","symbol":"UNTD"},{"name":"United Security Bancshares","symbol":"UBFO"},{"name":"United Security Bancshares, Inc.","symbol":"USBI"},{"name":"United States Lime & Minerals, Inc.","symbol":"USLM"},{"name":"United Therapeutics Corporation","symbol":"UTHR"},{"name":"United-Guardian, Inc.","symbol":"UG"},{"name":"Unity Bancorp, Inc.","symbol":"UNTY"},{"name":"Universal Display Corporation","symbol":"OLED"},{"name":"Universal Electronics Inc.","symbol":"UEIC"},{"name":"Universal Forest Products, Inc.","symbol":"UFPI"},{"name":"Universal Stainless & Alloy Products, Inc.","symbol":"USAP"},{"name":"Universal Truckload Services, Inc.","symbol":"UACL"},{"name":"Univest Corporation of Pennsylvania","symbol":"UVSP"},{"name":"Unwired Planet, Inc.","symbol":"UPIP"},{"name":"Upland Software, Inc.","symbol":"UPLD"},{"name":"Uranium Resources, Inc.","symbol":"URRE"},{"name":"Urban Outfitters, Inc.","symbol":"URBN"},{"name":"US Ecology, Inc.","symbol":"ECOL"},{"name":"US Trsy 10-Year Bear ETN Ipath","symbol":"DTYS"},{"name":"US Trsy 10-Year Bull ETN Ipath","symbol":"DTYL"},{"name":"US Trsy 2-Year Bear ETN Ipath","symbol":"DTUS"},{"name":"US Trsy 5-Year Bear ETN Ipath","symbol":"DFVS"},{"name":"US Trsy Flattener ETN Ipath","symbol":"FLAT"},{"name":"US Trsy Long Bond Bear ETN Ipath","symbol":"DLBS"},{"name":"US Trsy Long Bond Bull ETN Ipath","symbol":"DLBL"},{"name":"US Trsy Steepener ETN Ipath","symbol":"STPP"},{"name":"USA Technologies, Inc.","symbol":"USAT"},{"name":"USA Technologies, Inc.","symbol":"USATP"},{"name":"USA Truck, Inc.","symbol":"USAK"},{"name":"USMD Holdings, Inc.","symbol":"USMD"},{"name":"Utah Medical Products, Inc.","symbol":"UTMD"},{"name":"UTi Worldwide Inc.","symbol":"UTIW"},{"name":"UTStarcom Holdings Corp","symbol":"UTSI"},{"name":"Valeritas, Inc.","symbol":"VLRX"},{"name":"Validea Market Legends ETF","symbol":"VALX"},{"name":"Value Line, Inc.","symbol":"VALU"},{"name":"Vanda Pharmaceuticals Inc.","symbol":"VNDA"},{"name":"Vanguard Emerging Markets Government Bond ETF","symbol":"VWOB"},{"name":"Vanguard Global ex-U.S. Real Estate ETF","symbol":"VNQI"},{"name":"Vanguard Intermediate -Term Government Bond ETF","symbol":"VGIT"},{"name":"Vanguard Intermediate-Term Corporate Bond ETF","symbol":"VCIT"},{"name":"Vanguard Long-Term Corporate Bond ETF","symbol":"VCLT"},{"name":"Vanguard Long-Term Government Bond ETF","symbol":"VGLT"},{"name":"Vanguard Mortgage-Backed Securities ETF","symbol":"VMBS"},{"name":"Vanguard Natural Resources LLC","symbol":"VNR"},{"name":"Vanguard Natural Resources LLC","symbol":"VNRAP"},{"name":"Vanguard Natural Resources LLC","symbol":"VNRBP"},{"name":"Vanguard Natural Resources LLC","symbol":"VNRCP"},{"name":"Vanguard Russell 1000 ETF","symbol":"VONE"},{"name":"Vanguard Russell 1000 Growth ETF","symbol":"VONG"},{"name":"Vanguard Russell 1000 Value ETF","symbol":"VONV"},{"name":"Vanguard Russell 2000 ETF","symbol":"VTWO"},{"name":"Vanguard Russell 2000 Growth ETF","symbol":"VTWG"},{"name":"Vanguard Russell 2000 Value ETF","symbol":"VTWV"},{"name":"Vanguard Russell 3000 ETF","symbol":"VTHR"},{"name":"Vanguard Short-Term Corporate Bond ETF","symbol":"VCSH"},{"name":"Vanguard Short-Term Government ETF","symbol":"VGSH"},{"name":"Vanguard Short-Term Inflation-Protected Securities Index Fund","symbol":"VTIP"},{"name":"Vanguard Total International Bond ETF","symbol":"BNDX"},{"name":"Vanguard Total International Stock ETF","symbol":"VXUS"},{"name":"Vapor Corp.","symbol":"VPCO"},{"name":"Vapor Corp.","symbol":"VPCOU"},{"name":"Varonis Systems, Inc.","symbol":"VRNS"},{"name":"VASCO Data Security International, Inc.","symbol":"VDSI"},{"name":"Vascular Biogenics Ltd.","symbol":"VBLT"},{"name":"Vascular Solutions, Inc.","symbol":"VASC"},{"name":"VBI Vaccines Inc.","symbol":"VBIV"},{"name":"VCA Inc.","symbol":"WOOF"},{"name":"Veeco Instruments Inc.","symbol":"VECO"},{"name":"Venaxis, Inc.","symbol":"APPY"},{"name":"Vera Bradley, Inc.","symbol":"VRA"},{"name":"Veracyte, Inc.","symbol":"VCYT"},{"name":"Verastem, Inc.","symbol":"VSTM"},{"name":"Vericel Corporation","symbol":"VCEL"},{"name":"Verint Systems Inc.","symbol":"VRNT"},{"name":"VeriSign, Inc.","symbol":"VRSN"},{"name":"Verisk Analytics, Inc.","symbol":"VRSK"},{"name":"Veritex Holdings, Inc.","symbol":"VBTX"},{"name":"Vermillion, Inc.","symbol":"VRML"},{"name":"Versartis, Inc.","symbol":"VSAR"},{"name":"Vertex Energy, Inc","symbol":"VTNR"},{"name":"Vertex Pharmaceuticals Incorporated","symbol":"VRTX"},{"name":"Vestin Realty Mortgage I, Inc.","symbol":"VRTA"},{"name":"Vestin Realty Mortgage II, Inc.","symbol":"VRTB"},{"name":"Viacom Inc.","symbol":"VIA"},{"name":"Viacom Inc.","symbol":"VIAB"},{"name":"ViaSat, Inc.","symbol":"VSAT"},{"name":"Viavi Solutions Inc.","symbol":"VIAV"},{"name":"Vical Incorporated","symbol":"VICL"},{"name":"Vicor Corporation","symbol":"VICR"},{"name":"Victory CEMP Developed Enhanced Volatility Wtd Index ETF","symbol":"CIZ"},{"name":"Victory CEMP International High Div Volatility Wtd Index ETF","symbol":"CID"},{"name":"Victory CEMP International Volatility Wtd Index ETF","symbol":"CIL"},{"name":"Victory CEMP US 500 Enhanced Volatility Wtd Index ETF","symbol":"CFO"},{"name":"Victory CEMP US 500 Volatility Wtd Index ETF","symbol":"CFA"},{"name":"Victory CEMP US Discovery Enhanced Volatility Wtd Index ETF","symbol":"CSF"},{"name":"Victory CEMP US EQ Income Enhanced Volatility Wtd Index ETF","symbol":"CDC"},{"name":"Victory CEMP US Large Cap High Div Volatility Wtd Index ETF","symbol":"CDL"},{"name":"Victory CEMP US Small Cap High Div Volatility Wtd Index ETF","symbol":"CSB"},{"name":"Victory CEMP US Small Cap Volatility Wtd Index ETF","symbol":"CSA"},{"name":"Vident Core U.S. Bond Strategy Fund","symbol":"VBND"},{"name":"Vident Core US Equity ETF","symbol":"VUSE"},{"name":"Vident International Equity Fund","symbol":"VIDI"},{"name":"Videocon d2h Limited","symbol":"VDTH"},{"name":"Viggle Inc.","symbol":"VGGL"},{"name":"Viking Therapeutics, Inc.","symbol":"VKTX"},{"name":"Village Bank and Trust Financial Corp.","symbol":"VBFC"},{"name":"Village Super Market, Inc.","symbol":"VLGEA"},{"name":"Vimicro International Corporation","symbol":"VIMC"},{"name":"VimpelCom Ltd.","symbol":"VIP"},{"name":"Viper Energy Partners LP","symbol":"VNOM"},{"name":"Virco Manufacturing Corporation","symbol":"VIRC"},{"name":"Virgin America Inc.","symbol":"VA"},{"name":"Virtu Financial, Inc.","symbol":"VIRT"},{"name":"VirtualScopics, Inc.","symbol":"VSCP"},{"name":"Virtus Investment Partners, Inc.","symbol":"VRTS"},{"name":"Virtusa Corporation","symbol":"VRTU"},{"name":"VisionChina Media, Inc.","symbol":"VISN"},{"name":"Vitae Pharmaceuticals, Inc.","symbol":"VTAE"},{"name":"Vital Therapies, Inc.","symbol":"VTL"},{"name":"VIVUS, Inc.","symbol":"VVUS"},{"name":"VIX Med-Term ETN Velocityshares","symbol":"VIIZ"},{"name":"VIX Short-Term ETN Velocityshares","symbol":"VIIX"},{"name":"Vodafone Group Plc","symbol":"VOD"},{"name":"Voltari Corporation","symbol":"VLTC"},{"name":"VOXX International Corporation","symbol":"VOXX"},{"name":"Voyager Therapeutics, Inc.","symbol":"VYGR"},{"name":"Vringo, Inc.","symbol":"VRNG"},{"name":"VSE Corporation","symbol":"VSEC"},{"name":"vTv Therapeutics Inc.","symbol":"VTVT"},{"name":"Vuzix Corporation","symbol":"VUZI"},{"name":"VWR Corporation","symbol":"VWR"},{"name":"WaferGen Bio-systems, Inc.","symbol":"WGBS"},{"name":"Walgreens Boots Alliance, Inc.","symbol":"WBA"},{"name":"Warren Resources, Inc.","symbol":"WRES"},{"name":"Washington Federal, Inc.","symbol":"WAFD"},{"name":"Washington Federal, Inc.","symbol":"WAFDW"},{"name":"Washington Trust Bancorp, Inc.","symbol":"WASH"},{"name":"WashingtonFirst Bankshares Inc","symbol":"WFBI"},{"name":"Waterstone Financial, Inc.","symbol":"WSBF"},{"name":"WAVE Life Sciences Ltd.","symbol":"WVE"},{"name":"Wave Systems Corp.","symbol":"WAVX"},{"name":"Wayne Farms, Inc.","symbol":"WNFM"},{"name":"Wayne Savings Bancshares Inc.","symbol":"WAYN"},{"name":"Wayside Technology Group, Inc.","symbol":"WSTG"},{"name":"WD-40 Company","symbol":"WDFC"},{"name":"WeatherStorm Forensic Accounting Long Short ETF","symbol":"FLAG"},{"name":"Web.com Group, Inc.","symbol":"WEB"},{"name":"WebMD Health Corp","symbol":"WBMD"},{"name":"Weibo Corporation","symbol":"WB"},{"name":"Wellesley Bancorp, Inc.","symbol":"WEBK"},{"name":"Wendy&#39;s Company (The)","symbol":"WEN"},{"name":"Werner Enterprises, Inc.","symbol":"WERN"},{"name":"WesBanco, Inc.","symbol":"WSBC"},{"name":"West Bancorporation","symbol":"WTBA"},{"name":"West Corporation","symbol":"WSTC"},{"name":"West Marine, Inc.","symbol":"WMAR"},{"name":"Westamerica Bancorporation","symbol":"WABC"},{"name":"Westbury Bancorp, Inc.","symbol":"WBB"},{"name":"Westell Technologies, Inc.","symbol":"WSTL"},{"name":"Western Digital Corporation","symbol":"WDC"},{"name":"Westfield Financial, Inc.","symbol":"WFD"},{"name":"Westmoreland Coal Company","symbol":"WLB"},{"name":"Westport Innovations Inc","symbol":"WPRT"},{"name":"Weyco Group, Inc.","symbol":"WEYS"},{"name":"Wheeler Real Estate Investment Trust, Inc.","symbol":"WHLR"},{"name":"Wheeler Real Estate Investment Trust, Inc.","symbol":"WHLRP"},{"name":"Wheeler Real Estate Investment Trust, Inc.","symbol":"WHLRW"},{"name":"WhiteHorse Finance, Inc.","symbol":"WHF"},{"name":"WhiteHorse Finance, Inc.","symbol":"WHFBL"},{"name":"Whole Foods Market, Inc.","symbol":"WFM"},{"name":"Wi-Lan Inc","symbol":"WILN"},{"name":"Wilhelmina International, Inc.","symbol":"WHLM"},{"name":"Willamette Valley Vineyards, Inc.","symbol":"WVVI"},{"name":"Willamette Valley Vineyards, Inc.","symbol":"WVVIP"},{"name":"Willdan Group, Inc.","symbol":"WLDN"},{"name":"Willis Lease Finance Corporation","symbol":"WLFC"},{"name":"Wilshire Bancorp, Inc.","symbol":"WIBC"},{"name":"Windstream Holdings, Inc.","symbol":"WIN"},{"name":"Wingstop Inc.","symbol":"WING"},{"name":"Winmark Corporation","symbol":"WINA"},{"name":"Wins Finance Holdings Inc.","symbol":"WINS"},{"name":"Wintrust Financial Corporation","symbol":"WTFC"},{"name":"Wintrust Financial Corporation","symbol":"WTFCM"},{"name":"Wintrust Financial Corporation","symbol":"WTFCW"},{"name":"WisdomTree Barclays U.S. Aggregate Bond Negative Duration Fund","symbol":"AGND"},{"name":"WisdomTree Barclays U.S. Aggregate Bond Zero Duration Fund","symbol":"AGZD"},{"name":"WisdomTree BofA Merrill Lynch High Yield Bond Negative Duratio","symbol":"HYND"},{"name":"WisdomTree BofA Merrill Lynch High Yield Bond Zero Duration Fu","symbol":"HYZD"},{"name":"WisdomTree China ex-State-Owned Enterprises Fund","symbol":"CXSE"},{"name":"WisdomTree Emerging Markets Consumer Growth Fund","symbol":"EMCG"},{"name":"WisdomTree Emerging Markets Corporate Bond Fund","symbol":"EMCB"},{"name":"WisdomTree Emerging Markets Quality Dividend Growth Fund","symbol":"DGRE"},{"name":"WisdomTree Germany Hedged Equity Fund","symbol":"DXGE"},{"name":"WisdomTree Investments, Inc.","symbol":"WETF"},{"name":"WisdomTree Japan Hedged SmallCap Equity Fund","symbol":"DXJS"},{"name":"WisdomTree Japan Interest Rate Strategy Fund","symbol":"JGBB"},{"name":"WisdomTree Korea Hedged Equity Fund","symbol":"DXKW"},{"name":"WisdomTree Middle East Dividend Fund","symbol":"GULF"},{"name":"WisdomTree Strategic Corporate Bond Fund","symbol":"CRDT"},{"name":"WisdomTree U.S. Quality Dividend Growth Fund","symbol":"DGRW"},{"name":"WisdomTree U.S. SmallCap Quality Dividend Growth Fund","symbol":"DGRS"},{"name":"WisdomTree United Kingdom Hedged Equity Fund","symbol":"DXPS"},{"name":"WisdomTree Western Asset Unconstrained Bond Fund","symbol":"UBND"},{"name":"Wix.com Ltd.","symbol":"WIX"},{"name":"WL Ross Holding Corp.","symbol":"WLRH"},{"name":"WL Ross Holding Corp.","symbol":"WLRHU"},{"name":"WL Ross Holding Corp.","symbol":"WLRHW"},{"name":"WMIH Corp.","symbol":"WMIH"},{"name":"Wolverine Bancorp, Inc.","symbol":"WBKC"},{"name":"Woodward, Inc.","symbol":"WWD"},{"name":"World Acceptance Corporation","symbol":"WRLD"},{"name":"Wowo Limited","symbol":"WOWO"},{"name":"WPCS International Incorporated","symbol":"WPCS"},{"name":"WPP plc","symbol":"WPPGY"},{"name":"Wright Medical Group N.V.","symbol":"WMGI"},{"name":"Wright Medical Group N.V.","symbol":"WMGIZ"},{"name":"WSFS Financial Corporation","symbol":"WSFS"},{"name":"WSFS Financial Corporation","symbol":"WSFSL"},{"name":"WSI Industries Inc.","symbol":"WSCI"},{"name":"WVS Financial Corp.","symbol":"WVFC"},{"name":"Wynn Resorts, Limited","symbol":"WYNN"},{"name":"XBiotech Inc.","symbol":"XBIT"},{"name":"Xcel Brands, Inc","symbol":"XELB"},{"name":"Xcerra Corporation","symbol":"XCRA"},{"name":"Xencor, Inc.","symbol":"XNCR"},{"name":"Xenith Bankshares, Inc.","symbol":"XBKS"},{"name":"Xenon Pharmaceuticals Inc.","symbol":"XENE"},{"name":"XenoPort, Inc.","symbol":"XNPT"},{"name":"XG Technology, Inc","symbol":"XGTI"},{"name":"XG Technology, Inc","symbol":"XGTIW"},{"name":"Xilinx, Inc.","symbol":"XLNX"},{"name":"XOMA Corporation","symbol":"XOMA"},{"name":"Xplore Technologies Corp","symbol":"XPLR"},{"name":"Xtera Communications, Inc.","symbol":"XCOM"},{"name":"XTL Biopharmaceuticals Ltd.","symbol":"XTLB"},{"name":"Xunlei Limited","symbol":"XNET"},{"name":"Xura, Inc.","symbol":"MESG"},{"name":"Yahoo! Inc.","symbol":"YHOO"},{"name":"Yandex N.V.","symbol":"YNDX"},{"name":"You On Demand Holdings, Inc.","symbol":"YOD"},{"name":"Your Community Bankshares, Inc.","symbol":"YCB"},{"name":"YRC Worldwide, Inc.","symbol":"YRCW"},{"name":"Yulong Eco-Materials Limited","symbol":"YECO"},{"name":"YY Inc.","symbol":"YY"},{"name":"Zafgen, Inc.","symbol":"ZFGN"},{"name":"ZAGG Inc","symbol":"ZAGG"},{"name":"ZAIS Group Holdings, Inc.","symbol":"ZAIS"},{"name":"Zebra Technologies Corporation","symbol":"ZBRA"},{"name":"ZELTIQ Aesthetics, Inc.","symbol":"ZLTQ"},{"name":"Zhone Technologies, Inc.","symbol":"ZHNE"},{"name":"Zillow Group, Inc.","symbol":"Z"},{"name":"Zillow Group, Inc.","symbol":"ZG"},{"name":"Zion Oil & Gas Inc","symbol":"ZN"},{"name":"Zion Oil & Gas Inc","symbol":"ZNWAA"},{"name":"Zions Bancorporation","symbol":"ZION"},{"name":"Zions Bancorporation","symbol":"ZIONW"},{"name":"Zions Bancorporation","symbol":"ZIONZ"},{"name":"ZIOPHARM Oncology Inc","symbol":"ZIOP"},{"name":"Zix Corporation","symbol":"ZIXI"},{"name":"Zogenix, Inc.","symbol":"ZGNX"},{"name":"Zosano Pharma Corporation","symbol":"ZSAN"},{"name":"ZS Pharma, Inc.","symbol":"ZSPH"},{"name":"Zumiez Inc.","symbol":"ZUMZ"},{"name":"Zynerba Pharmaceuticals, Inc.","symbol":"ZYNE"},{"name":"Zynga Inc.","symbol":"ZNGA"},{"name":"3D Systems Corporation","symbol":"DDD"},{"name":"3M Company","symbol":"MMM"},{"name":"500.com Limited","symbol":"WBAI"},{"name":"58.com Inc.","symbol":"WUBA"},{"name":"A.H. Belo Corporation","symbol":"AHC"},{"name":"A10 Networks, Inc.","symbol":"ATEN"},{"name":"AAC Holdings, Inc.","symbol":"AAC"},{"name":"AAR Corp.","symbol":"AIR"},{"name":"Aaron&#39;s,  Inc.","symbol":"AAN"},{"name":"ABB Ltd","symbol":"ABB"},{"name":"Abbott Laboratories","symbol":"ABT"},{"name":"AbbVie Inc.","symbol":"ABBV"},{"name":"Abercrombie & Fitch Company","symbol":"ANF"},{"name":"Aberdeen Greater China Fund, Inc.","symbol":"GCH"},{"name":"Aberdeen Japan Equity Fund, Inc.","symbol":"JEQ"},{"name":"Aberdeen Singapore Fund, Inc.","symbol":"SGF"},{"name":"ABM Industries Incorporated","symbol":"ABM"},{"name":"Acadia Realty Trust","symbol":"AKR"},{"name":"Accenture plc.","symbol":"ACN"},{"name":"Acco Brands Corporation","symbol":"ACCO"},{"name":"Accuride Corporation New","symbol":"ACW"},{"name":"Ace Limited","symbol":"ACE"},{"name":"Acorn International, Inc.","symbol":"ATV"},{"name":"Actuant Corporation","symbol":"ATU"},{"name":"Acuity Brands Inc","symbol":"AYI"},{"name":"Adams Diversified Equity Fund, Inc.","symbol":"ADX"},{"name":"Adams Natural Resources Fund, Inc.","symbol":"PEO"},{"name":"Adecoagro S.A.","symbol":"AGRO"},{"name":"Adeptus Health Inc.","symbol":"ADPT"},{"name":"ADT Corporation","symbol":"ADT"},{"name":"Advance Auto Parts Inc","symbol":"AAP"},{"name":"Advanced Drainage Systems, Inc.","symbol":"WMS"},{"name":"Advanced Semiconductor Engineering, Inc.","symbol":"ASX"},{"name":"Advantage Oil & Gas Ltd","symbol":"AAV"},{"name":"Advantest Corporation (Kabushiki Kaisha Advantest) ADS","symbol":"ATE"},{"name":"Advent Claymore Convertible Securities and Income Fund","symbol":"AVK"},{"name":"Advent Claymore Convertible Securities and Income Fund II","symbol":"AGC"},{"name":"Advent/Claymore Enhanced Growth & Income Fund","symbol":"LCM"},{"name":"AECOM","symbol":"ACM"},{"name":"Aegean Marine Petroleum Network Inc.","symbol":"ANW"},{"name":"Aegon NV","symbol":"AEB"},{"name":"Aegon NV","symbol":"AED"},{"name":"Aegon NV","symbol":"AEG"},{"name":"Aegon NV","symbol":"AEH"},{"name":"Aegon NV","symbol":"AEK"},{"name":"Aercap Holdings N.V.","symbol":"AER"},{"name":"Aerohive Networks, Inc.","symbol":"HIVE"},{"name":"Aerojet Rocketdyne Holdings, Inc.","symbol":"AJRD"},{"name":"Aeropostale Inc","symbol":"ARO"},{"name":"Aetna Inc.","symbol":"AET"},{"name":"Affiliated Managers Group, Inc.","symbol":"AMG"},{"name":"Affiliated Managers Group, Inc.","symbol":"MGR"},{"name":"Aflac Incorporated","symbol":"AFL"},{"name":"Aflac Incorporated","symbol":"AFSD"},{"name":"AG Mortgage Investment Trust, Inc.","symbol":"MITT"},{"name":"AG Mortgage Investment Trust, Inc.","symbol":"MITT^A"},{"name":"AG Mortgage Investment Trust, Inc.","symbol":"MITT^B"},{"name":"AGCO Corporation","symbol":"AGCO"},{"name":"Agilent Technologies, Inc.","symbol":"A"},{"name":"AGL Resources, Inc.","symbol":"GAS"},{"name":"Agnico Eagle Mines Limited","symbol":"AEM"},{"name":"Agree Realty Corporation","symbol":"ADC"},{"name":"Agria Corporation","symbol":"GRO"},{"name":"Agrium Inc.","symbol":"AGU"},{"name":"Air Lease Corporation","symbol":"AL"},{"name":"Air Products and Chemicals, Inc.","symbol":"APD"},{"name":"Aircastle Limited","symbol":"AYR"},{"name":"Airgas, Inc.","symbol":"ARG"},{"name":"AK Steel Holding Corporation","symbol":"AKS"},{"name":"Alabama Power Company","symbol":"ALP^O"},{"name":"Alamo Group, Inc.","symbol":"ALG"},{"name":"Alamos Gold Inc.","symbol":"AGI"},{"name":"Alaska Air Group, Inc.","symbol":"ALK"},{"name":"Albany International Corporation","symbol":"AIN"},{"name":"Albemarle Corporation","symbol":"ALB"},{"name":"Alcatel Lucent","symbol":"ALU"},{"name":"Alcoa Inc.","symbol":"AA"},{"name":"Alcoa Inc.","symbol":"AA^B"},{"name":"Alere Inc.","symbol":"ALR"},{"name":"Alere Inc.","symbol":"ALR^B"},{"name":"Alexander & Baldwin Holdings, Inc.","symbol":"ALEX"},{"name":"Alexander&#39;s, Inc.","symbol":"ALX"},{"name":"Alexandria Real Estate Equities, Inc.","symbol":"ARE"},{"name":"Alexandria Real Estate Equities, Inc.","symbol":"ARE^E"},{"name":"Alibaba Group Holding Limited","symbol":"BABA"},{"name":"Alleghany Corporation","symbol":"Y"},{"name":"Allegheny Technologies Incorporated","symbol":"ATI"},{"name":"Allegion plc","symbol":"ALLE"},{"name":"Allergan plc.","symbol":"AGN"},{"name":"Allergan plc.","symbol":"AGN^A"},{"name":"Allete, Inc.","symbol":"ALE"},{"name":"Alliance California Municipal Income Fund Inc","symbol":"AKP"},{"name":"Alliance Data Systems Corporation","symbol":"ADS"},{"name":"Alliance National Municipal Income Fund Inc","symbol":"AFB"},{"name":"Alliance One International, Inc.","symbol":"AOI"},{"name":"Alliance World Dollar Government Fund II","symbol":"AWF"},{"name":"AllianceBernstein Holding L.P.","symbol":"AB"},{"name":"ALLIANCEBERNSTEIN INCOME FUND INC","symbol":"ACG"},{"name":"Alliant Energy Corporation","symbol":"LNT"},{"name":"AllianzGI Convertible & Income Fund","symbol":"NCV"},{"name":"AllianzGI Convertible & Income Fund II","symbol":"NCZ"},{"name":"AllianzGI Diversified Income & Convertible Fund","symbol":"ACV"},{"name":"AllianzGI Equity & Convertible Income Fund","symbol":"NIE"},{"name":"AllianzGI NFJ Dividend, Interest & Premium Strategy Fund","symbol":"NFJ"},{"name":"Allied World Assurance Company Holdings, AG","symbol":"AWH"},{"name":"Allison Transmission Holdings, Inc.","symbol":"ALSN"},{"name":"Allstate Corporation (The)","symbol":"ALL"},{"name":"Allstate Corporation (The)","symbol":"ALL^A"},{"name":"Allstate Corporation (The)","symbol":"ALL^B"},{"name":"Allstate Corporation (The)","symbol":"ALL^C"},{"name":"Allstate Corporation (The)","symbol":"ALL^D"},{"name":"Allstate Corporation (The)","symbol":"ALL^E"},{"name":"Allstate Corporation (The)","symbol":"ALL^F"},{"name":"Ally Financial Inc.","symbol":"ALLY"},{"name":"Ally Financial Inc.","symbol":"ALLY^A"},{"name":"Ally Financial Inc.","symbol":"ALLY^B"},{"name":"Alon Blue Square Israel Ltd.","symbol":"BSI"},{"name":"Alon USA Energy, Inc.","symbol":"ALJ"},{"name":"Alon USA Partners, LP","symbol":"ALDW"},{"name":"Alpine Global Dynamic Dividend Fund","symbol":"AGD"},{"name":"Alpine Global Premier Properties Fund","symbol":"AWP"},{"name":"Alpine Total Dynamic Dividend Fund","symbol":"AOD"},{"name":"Altisource Residential Corporation","symbol":"RESI"},{"name":"Altria Group","symbol":"MO"},{"name":"Aluminum Corporation of China Limited","symbol":"ACH"},{"name":"Amber Road, Inc.","symbol":"AMBR"},{"name":"Ambev S.A.","symbol":"ABEV"},{"name":"AMC Entertainment Holdings, Inc.","symbol":"AMC"},{"name":"Amec Plc Ord","symbol":"AMFW"},{"name":"Ameren Corporation","symbol":"AEE"},{"name":"Ameresco, Inc.","symbol":"AMRC"},{"name":"America Movil, S.A.B. de C.V.","symbol":"AMX"},{"name":"American Assets Trust, Inc.","symbol":"AAT"},{"name":"American Axle & Manufacturing Holdings, Inc.","symbol":"AXL"},{"name":"American Campus Communities Inc","symbol":"ACC"},{"name":"American Eagle Outfitters, Inc.","symbol":"AEO"},{"name":"American Electric Power Company, Inc.","symbol":"AEP"},{"name":"American Equity Investment Life Holding Company","symbol":"AEL"},{"name":"American Express Company","symbol":"AXP"},{"name":"American Financial Group, Inc.","symbol":"AFA"},{"name":"American Financial Group, Inc.","symbol":"AFG"},{"name":"American Financial Group, Inc.","symbol":"AFGE"},{"name":"American Financial Group, Inc.","symbol":"AFGH"},{"name":"American Financial Group, Inc.","symbol":"AFW"},{"name":"American Homes 4 Rent","symbol":"AMH"},{"name":"American Homes 4 Rent","symbol":"AMH^A"},{"name":"American Homes 4 Rent","symbol":"AMH^B"},{"name":"American Homes 4 Rent","symbol":"AMH^C"},{"name":"American International Group, Inc.","symbol":"AIG"},{"name":"American International Group, Inc.","symbol":"AIG.WS"},{"name":"American Midstream Partners, LP","symbol":"AMID"},{"name":"American Realty Investors, Inc.","symbol":"ARL"},{"name":"American Residential Properties, Inc.","symbol":"ARPI"},{"name":"American States Water Company","symbol":"AWR"},{"name":"American Tower Corporation (REIT)","symbol":"AMT"},{"name":"American Tower Corporation (REIT)","symbol":"AMT^A"},{"name":"American Tower Corporation (REIT)","symbol":"AMT^B"},{"name":"American Vanguard Corporation","symbol":"AVD"},{"name":"American Water Works","symbol":"AWK"},{"name":"AmeriGas Partners, L.P.","symbol":"APU"},{"name":"AMERIPRISE FINANCIAL SERVICES, INC.","symbol":"AMP"},{"name":"AmerisourceBergen Corporation (Holding Co)","symbol":"ABC"},{"name":"Amira Nature Foods Ltd","symbol":"ANFI"},{"name":"AMN Healthcare Services Inc","symbol":"AHS"},{"name":"Ampco-Pittsburgh Corporation","symbol":"AP"},{"name":"Amphenol Corporation","symbol":"APH"},{"name":"Amplify Snack Brands, inc.","symbol":"BETR"},{"name":"AMREP Corporation","symbol":"AXR"},{"name":"AMTEK, Inc.","symbol":"AME"},{"name":"AmTrust Financial Services, Inc.","symbol":"AFSI^A"},{"name":"AmTrust Financial Services, Inc.","symbol":"AFSI^B"},{"name":"AmTrust Financial Services, Inc.","symbol":"AFSI^C"},{"name":"AmTrust Financial Services, Inc.","symbol":"AFSI^D"},{"name":"AmTrust Financial Services, Inc.","symbol":"AFSS"},{"name":"AmTrust Financial Services, Inc.","symbol":"AFST"},{"name":"Anadarko Petroleum Corporation","symbol":"AEUA"},{"name":"Anadarko Petroleum Corporation","symbol":"APC"},{"name":"AngloGold Ashanti Limited","symbol":"AU"},{"name":"Anheuser-Busch Inbev SA","symbol":"BUD"},{"name":"Anixter International Inc.","symbol":"AXE"},{"name":"Annaly Capital Management Inc","symbol":"NLY"},{"name":"Annaly Capital Management Inc","symbol":"NLY^A"},{"name":"Annaly Capital Management Inc","symbol":"NLY^C"},{"name":"Annaly Capital Management Inc","symbol":"NLY^D"},{"name":"Antero Midstream Partners LP","symbol":"AM"},{"name":"Antero Resources Corporation","symbol":"AR"},{"name":"Anthem, Inc.","symbol":"ANTM"},{"name":"Anthem, Inc.","symbol":"ANTX"},{"name":"Anworth Mortgage Asset  Corporation","symbol":"ANH"},{"name":"Anworth Mortgage Asset  Corporation","symbol":"ANH^A"},{"name":"Anworth Mortgage Asset  Corporation","symbol":"ANH^B"},{"name":"Anworth Mortgage Asset  Corporation","symbol":"ANH^C"},{"name":"Aon plc","symbol":"AON"},{"name":"Apache Corporation","symbol":"APA"},{"name":"Apartment Investment and Management Company","symbol":"AIV"},{"name":"Apartment Investment and Management Company","symbol":"AIV^A"},{"name":"Apartment Investment and Management Company","symbol":"AIV^Z"},{"name":"Apollo Commercial Real Estate Finance","symbol":"ARI"},{"name":"Apollo Commercial Real Estate Finance","symbol":"ARI^A"},{"name":"Apollo Global Management, LLC","symbol":"APO"},{"name":"Apollo Investment Corporation","symbol":"AIB"},{"name":"Apollo Investment Corporation","symbol":"AIY"},{"name":"Apollo Residential Mortgage, Inc.","symbol":"AMTG"},{"name":"Apollo Residential Mortgage, Inc.","symbol":"AMTG^A"},{"name":"Apollo Senior Floating Rate Fund Inc.","symbol":"AFT"},{"name":"Apollo Tactical Income Fund Inc.","symbol":"AIF"},{"name":"Apple Hospitality REIT, Inc.","symbol":"APLE"},{"name":"Applied Industrial Technologies, Inc.","symbol":"AIT"},{"name":"AptarGroup, Inc.","symbol":"ATR"},{"name":"Aqua America, Inc.","symbol":"WTR"},{"name":"Aramark","symbol":"ARMK"},{"name":"Arbor Realty Trust","symbol":"ABR"},{"name":"Arbor Realty Trust","symbol":"ABR^A"},{"name":"Arbor Realty Trust","symbol":"ABR^B"},{"name":"Arbor Realty Trust","symbol":"ABR^C"},{"name":"Arbor Realty Trust","symbol":"ABRN"},{"name":"ARC Document Solutions, Inc.","symbol":"ARC"},{"name":"Arc Logistic Partners LP","symbol":"ARCX"},{"name":"ArcelorMittal","symbol":"MT"},{"name":"ArcelorMittal","symbol":"MTCN"},{"name":"Arch Capital Group Ltd.","symbol":"ARH^C"},{"name":"Arch Coal, Inc.","symbol":"ACI"},{"name":"Archer-Daniels-Midland Company","symbol":"ADM"},{"name":"Archrock, Inc.","symbol":"AROC"},{"name":"Arcos Dorados Holdings Inc.","symbol":"ARCO"},{"name":"Ardmore Shipping Corporation","symbol":"ASC"},{"name":"Ares Capital Corporation","symbol":"AFC"},{"name":"Ares Capital Corporation","symbol":"ARU"},{"name":"Ares Commercial Real Estate Corporation","symbol":"ACRE"},{"name":"Ares Dynamic Credit Allocation Fund, Inc.","symbol":"ARDC"},{"name":"Ares Management L.P.","symbol":"ARES"},{"name":"Argan, Inc.","symbol":"AGX"},{"name":"Arista Networks, Inc.","symbol":"ANET"},{"name":"Arlington Asset Investment Corp","symbol":"AI"},{"name":"Arlington Asset Investment Corp","symbol":"AIC"},{"name":"Arlington Asset Investment Corp","symbol":"AIW"},{"name":"Armada Hoffler Properties, Inc.","symbol":"AHH"},{"name":"ARMOUR Residential REIT, Inc.","symbol":"ARR"},{"name":"ARMOUR Residential REIT, Inc.","symbol":"ARR^A"},{"name":"ARMOUR Residential REIT, Inc.","symbol":"ARR^B"},{"name":"Armstrong World Industries Inc","symbol":"AWI"},{"name":"Arrow Electronics, Inc.","symbol":"ARW"},{"name":"Arthur J. Gallagher & Co.","symbol":"AJG"},{"name":"Artisan Partners Asset Management Inc.","symbol":"APAM"},{"name":"ASA Gold and Precious Metals Limited","symbol":"ASA"},{"name":"Asbury Automotive Group Inc","symbol":"ABG"},{"name":"Ashford Hospitality Prime, Inc.","symbol":"AHP"},{"name":"Ashford Hospitality Trust Inc","symbol":"AHT"},{"name":"Ashford Hospitality Trust Inc","symbol":"AHT^A"},{"name":"Ashford Hospitality Trust Inc","symbol":"AHT^D"},{"name":"Ashford Hospitality Trust Inc","symbol":"AHT^E"},{"name":"Ashland Inc.","symbol":"ASH"},{"name":"Asia Pacific Fund, Inc. (The)","symbol":"APB"},{"name":"Asia Tigers Fund, Inc. (The)","symbol":"GRR"},{"name":"Aspen Aerogels, Inc.","symbol":"ASPN"},{"name":"Aspen Insurance Holdings Limited","symbol":"AHL"},{"name":"Aspen Insurance Holdings Limited","symbol":"AHL^A"},{"name":"Aspen Insurance Holdings Limited","symbol":"AHL^B"},{"name":"Aspen Insurance Holdings Limited","symbol":"AHL^C"},{"name":"Associated Banc-Corp","symbol":"ASB"},{"name":"Associated Banc-Corp","symbol":"ASB^B"},{"name":"Associated Banc-Corp","symbol":"ASB^C"},{"name":"Associated Capital Group, Inc.","symbol":"AC.WD"},{"name":"Assurant, Inc.","symbol":"AIZ"},{"name":"Assured Guaranty Ltd.","symbol":"AGO"},{"name":"Assured Guaranty Ltd.","symbol":"AGO^B"},{"name":"Assured Guaranty Ltd.","symbol":"AGO^E"},{"name":"Assured Guaranty Ltd.","symbol":"AGO^F"},{"name":"Astoria Financial Corporation","symbol":"AF"},{"name":"Astoria Financial Corporation","symbol":"AF^C"},{"name":"Astrazeneca PLC","symbol":"AZN"},{"name":"AT&T Inc.","symbol":"T"},{"name":"Atento S.A.","symbol":"ATTO"},{"name":"Atlantic Power Corporation","symbol":"AT"},{"name":"Atlas Energy, L.P.","symbol":"ATLS"},{"name":"Atlas Resource Partners, L.P.","symbol":"ARP"},{"name":"Atlas Resource Partners, L.P.","symbol":"ARP^D"},{"name":"Atlas Resource Partners, L.P.","symbol":"ARP^E"},{"name":"Atmos Energy Corporation","symbol":"ATO"},{"name":"Atwood Oceanics, Inc.","symbol":"ATW"},{"name":"AU Optronics Corp","symbol":"AUO"},{"name":"Autohome Inc.","symbol":"ATHM"},{"name":"Autoliv, Inc.","symbol":"ALV"},{"name":"AutoNation, Inc.","symbol":"AN"},{"name":"AutoZone, Inc.","symbol":"AZO"},{"name":"AvalonBay Communities, Inc.","symbol":"AVB"},{"name":"Avenue Income Credit Strategies Fund","symbol":"ACP"},{"name":"Avery Dennison Corporation","symbol":"AVY"},{"name":"AVG Technologies N.V.","symbol":"AVG"},{"name":"Avianca Holdings S.A.","symbol":"AVH"},{"name":"Avista Corporation","symbol":"AVA"},{"name":"Aviva plc","symbol":"AV"},{"name":"Aviva plc","symbol":"AVV"},{"name":"Avnet, Inc.","symbol":"AVT"},{"name":"Avolon Holdings Limited","symbol":"AVOL"},{"name":"Avon Products, Inc.","symbol":"AVP"},{"name":"AVX Corporation","symbol":"AVX"},{"name":"Axalta Coating Systems Ltd.","symbol":"AXTA"},{"name":"Axiall Corporation","symbol":"AXLL"},{"name":"Axis Capital Holdings Limited","symbol":"AXS"},{"name":"Axis Capital Holdings Limited","symbol":"AXS^C"},{"name":"Axis Capital Holdings Limited","symbol":"AXS^D"},{"name":"Azure Midstream Partners, LP","symbol":"AZUR"},{"name":"AZZ Inc.","symbol":"AZZ"},{"name":"B&G Foods, Inc.","symbol":"BGS"},{"name":"Babcock","symbol":"BW"},{"name":"Babson Capital Corporate Investors","symbol":"MCI"},{"name":"Babson Capital Global Short Duration High Yield Fund","symbol":"BGH"},{"name":"Babson Capital Participation Investors","symbol":"MPV"},{"name":"Badger Meter, Inc.","symbol":"BMI"},{"name":"Baker Hughes Incorporated","symbol":"BHI"},{"name":"BalckRock Taxable Municipal Bond Trust","symbol":"BBN"},{"name":"Ball Corporation","symbol":"BLL"},{"name":"Baltimore Gas & Electric Company","symbol":"BGE^B"},{"name":"Banc of California, Inc.","symbol":"BANC"},{"name":"Banc of California, Inc.","symbol":"BANC^C"},{"name":"Banc of California, Inc.","symbol":"BANC^D"},{"name":"Banc of California, Inc.","symbol":"BOCA"},{"name":"Banco Bilbao Viscaya Argentaria S.A.","symbol":"BBVA"},{"name":"Banco Bradesco Sa","symbol":"BBD"},{"name":"Banco Bradesco Sa","symbol":"BBDO"},{"name":"Banco De Chile","symbol":"BCH"},{"name":"Banco Latinoamericano de Comercio Exterior, S.A.","symbol":"BLX"},{"name":"Banco Santander Brasil SA","symbol":"BSBR"},{"name":"Banco Santander Chile","symbol":"BSAC"},{"name":"Banco Santander, S.A.","symbol":"SAN"},{"name":"Banco Santander, S.A.","symbol":"SAN^A"},{"name":"Banco Santander, S.A.","symbol":"SAN^B"},{"name":"Banco Santander, S.A.","symbol":"SAN^C"},{"name":"Banco Santander, S.A.","symbol":"SAN^I"},{"name":"BanColombia S.A.","symbol":"CIB"},{"name":"BancorpSouth, Inc.","symbol":"BXS"},{"name":"Bank of America Corporation","symbol":"BAC"},{"name":"Bank of America Corporation","symbol":"BAC.WS.A"},{"name":"Bank of America Corporation","symbol":"BAC.WS.B"},{"name":"Bank of America Corporation","symbol":"BAC^D"},{"name":"Bank of America Corporation","symbol":"BAC^E"},{"name":"Bank of America Corporation","symbol":"BAC^I"},{"name":"Bank of America Corporation","symbol":"BAC^L"},{"name":"Bank of America Corporation","symbol":"BAC^W"},{"name":"Bank of America Corporation","symbol":"BAC^Y"},{"name":"Bank of America Corporation","symbol":"BAC^Z"},{"name":"Bank of America Corporation","symbol":"BML^G"},{"name":"Bank of America Corporation","symbol":"BML^H"},{"name":"Bank of America Corporation","symbol":"BML^I"},{"name":"Bank of America Corporation","symbol":"BML^J"},{"name":"Bank of America Corporation","symbol":"BML^L"},{"name":"Bank of Hawaii Corporation","symbol":"BOH"},{"name":"Bank Of Montreal","symbol":"BMO"},{"name":"Bank Of New York Mellon Corporation (The)","symbol":"BK"},{"name":"Bank Of New York Mellon Corporation (The)","symbol":"BK^C"},{"name":"Bank of Nova Scotia (The)","symbol":"BNS"},{"name":"Bankrate, Inc.","symbol":"RATE"},{"name":"BankUnited, Inc.","symbol":"BKU"},{"name":"Barclays PLC","symbol":"BCS"},{"name":"Barclays PLC","symbol":"BCS^"},{"name":"Barclays PLC","symbol":"BCS^A"},{"name":"Barclays PLC","symbol":"BCS^C"},{"name":"Barclays PLC","symbol":"BCS^D"},{"name":"Barnes & Noble Education, Inc","symbol":"BNED"},{"name":"Barnes & Noble, Inc.","symbol":"BKS"},{"name":"Barnes Group, Inc.","symbol":"B"},{"name":"Barracuda Networks, Inc.","symbol":"CUDA"},{"name":"Barrick Gold Corporation","symbol":"ABX"},{"name":"Basic Energy Services, Inc.","symbol":"BAS"},{"name":"Baxalta Incorporated","symbol":"BXLT"},{"name":"Baxter International Inc.","symbol":"BAX"},{"name":"Baytex Energy Corp","symbol":"BTE"},{"name":"BB&T Corporation","symbol":"BBT"},{"name":"BB&T Corporation","symbol":"BBT^D"},{"name":"BB&T Corporation","symbol":"BBT^E"},{"name":"BB&T Corporation","symbol":"BBT^F"},{"name":"BB&T Corporation","symbol":"BBT^G"},{"name":"BBVA Banco Frances S.A.","symbol":"BFR"},{"name":"BBX Capital Corporation","symbol":"BBX"},{"name":"BCE, Inc.","symbol":"BCE"},{"name":"Bear Stearns Depositor, Inc.","symbol":"TZF"},{"name":"Beazer Homes USA, Inc.","symbol":"BZH"},{"name":"Becton, Dickinson and Company","symbol":"BDX"},{"name":"Belden Inc","symbol":"BDC"},{"name":"Bellatrix Exploration Ltd","symbol":"BXE"},{"name":"Belmond Ltd.","symbol":"BEL"},{"name":"Bemis Company, Inc.","symbol":"BMS"},{"name":"Benchmark Electronics, Inc.","symbol":"BHE"},{"name":"Berkshire Hathaway Inc.","symbol":"BRK.A"},{"name":"Berkshire Hathaway Inc.","symbol":"BRK.B"},{"name":"Berkshire Hills Bancorp, Inc.","symbol":"BHLB"},{"name":"Best Buy Co., Inc.","symbol":"BBY"},{"name":"BGC Partners, Inc.","symbol":"BGCA"},{"name":"BHP Billiton Limited","symbol":"BHP"},{"name":"BHP Billiton plc","symbol":"BBL"},{"name":"Big Lots, Inc.","symbol":"BIG"},{"name":"Biglari Holdings Inc.","symbol":"BH"},{"name":"Bill Barrett Corporation","symbol":"BBG"},{"name":"BioAmber Inc.","symbol":"BIOA"},{"name":"BioAmber Inc.","symbol":"BIOA.WS"},{"name":"Biomed Realty Trust","symbol":"BMR"},{"name":"Bio-Rad Laboratories, Inc.","symbol":"BIO"},{"name":"Bio-Rad Laboratories, Inc.","symbol":"BIO.B"},{"name":"Bitauto Holdings Limited","symbol":"BITA"},{"name":"Black Hills Corporation","symbol":"BKH"},{"name":"Black Knight Financial Services, Inc.","symbol":"BKFS"},{"name":"Black Stone Minerals, L.P.","symbol":"BSM"},{"name":"Blackrock California Municipal 2018 Term Trust","symbol":"BJZ"},{"name":"BlackRock California Municipal Income Trust","symbol":"BFZ"},{"name":"Blackrock Capital and Income Strategies Fund Inc","symbol":"CII"},{"name":"Blackrock Core Bond Trust","symbol":"BHK"},{"name":"Blackrock Corporate High Yield Fund, Inc.","symbol":"HYT"},{"name":"BlackRock Credit Allocation Income Trust","symbol":"BTZ"},{"name":"Blackrock Debt Strategies Fund, Inc.","symbol":"DSU"},{"name":"Blackrock Defined Opportunity Credit Trust","symbol":"BHL"},{"name":"BlackRock Energy and Resources Trust","symbol":"BGR"},{"name":"Blackrock Enhanced Equity Dividend Trust","symbol":"BDJ"},{"name":"Blackrock Enhanced Government Fund, Inc","symbol":"EGF"},{"name":"Blackrock Floating Rate Income Strategies Fund Inc","symbol":"FRA"},{"name":"Blackrock Florida Municipal 2020 Term Trust","symbol":"BFO"},{"name":"Blackrock Global","symbol":"BGT"},{"name":"Blackrock Global","symbol":"BOE"},{"name":"Blackrock Health Sciences Trust","symbol":"BME"},{"name":"BlackRock Income Investment Quality Trust","symbol":"BAF"},{"name":"BlackRock Income Trust Inc. (The)","symbol":"BKT"},{"name":"BLACKROCK INTERNATIONAL, LTD.","symbol":"BGY"},{"name":"BlackRock Investment Quality Municipal Trust Inc. (The)","symbol":"BKN"},{"name":"BlackRock Long-Term Municipal Advantage Trust","symbol":"BTA"},{"name":"BlackRock Multi-Sector Income Trust","symbol":"BIT"},{"name":"Blackrock Muni Intermediate Duration Fund Inc","symbol":"MUI"},{"name":"Blackrock Muni New York Intermediate Duration Fund Inc","symbol":"MNE"},{"name":"Blackrock MuniAssets Fund, Inc.","symbol":"MUA"},{"name":"Blackrock Municipal 2018 Term Trust","symbol":"BPK"},{"name":"Blackrock Municipal 2020 Term Trust","symbol":"BKK"},{"name":"Blackrock Municipal Bond Investment Trust","symbol":"BIE"},{"name":"Blackrock Municipal Bond Trust","symbol":"BBK"},{"name":"BlackRock Municipal Income Investment Trust","symbol":"BBF"},{"name":"Blackrock Municipal Income Quality Trust","symbol":"BYM"},{"name":"BlackRock Municipal Income Trust","symbol":"BFK"},{"name":"BlackRock Municipal Target Term Trust Inc. (The)","symbol":"BTT"},{"name":"Blackrock MuniEnhanced Fund, Inc.","symbol":"MEN"},{"name":"Blackrock MuniHoldings California Quality Fund,  Inc.","symbol":"MUC"},{"name":"Blackrock MuniHoldings Fund II, Inc.","symbol":"MUH"},{"name":"Blackrock MuniHoldings Fund, Inc.","symbol":"MHD"},{"name":"Blackrock MuniHoldings Investment Quality Fund","symbol":"MFL"},{"name":"Blackrock MuniHoldings New Jersey Insured Fund, Inc.","symbol":"MUJ"},{"name":"Blackrock MuniHoldings New York Quality Fund, Inc.","symbol":"MHN"},{"name":"Blackrock MuniHoldings Quality Fund II, Inc.","symbol":"MUE"},{"name":"Blackrock MuniHoldings Quality Fund, Inc.","symbol":"MUS"},{"name":"Blackrock MuniVest Fund II, Inc.","symbol":"MVT"},{"name":"Blackrock MuniYield California Fund, Inc.","symbol":"MYC"},{"name":"Blackrock MuniYield California Insured Fund, Inc.","symbol":"MCA"},{"name":"Blackrock MuniYield Fund, Inc.","symbol":"MYD"},{"name":"Blackrock MuniYield Investment Fund","symbol":"MYF"},{"name":"Blackrock MuniYield Investment QualityFund","symbol":"MFT"},{"name":"Blackrock MuniYield Michigan Quality Fund, Inc.","symbol":"MIY"},{"name":"Blackrock MuniYield New Jersey Fund, Inc.","symbol":"MYJ"},{"name":"Blackrock MuniYield New York Quality Fund, Inc.","symbol":"MYN"},{"name":"Blackrock MuniYield Pennsylvania Quality Fund","symbol":"MPA"},{"name":"Blackrock MuniYield Quality Fund II, Inc.","symbol":"MQT"},{"name":"Blackrock MuniYield Quality Fund III, Inc.","symbol":"MYI"},{"name":"Blackrock MuniYield Quality Fund, Inc.","symbol":"MQY"},{"name":"BlackRock New Jersey Municipal Income Trust","symbol":"BNJ"},{"name":"BlackRock New York Investment Quality Municipal Trust Inc. (Th","symbol":"BNY"},{"name":"Blackrock New York Municipal 2018 Term Trust","symbol":"BLH"},{"name":"Blackrock New York Municipal Bond Trust","symbol":"BQH"},{"name":"Blackrock New York Municipal Income Quality Trust","symbol":"BSE"},{"name":"BlackRock Resources","symbol":"BCX"},{"name":"BlackRock Science and Technology Trust","symbol":"BST"},{"name":"BlackRock Strategic Municipal Trust Inc. (The)","symbol":"BSD"},{"name":"BlackRock Utility and Infrastructure Trust","symbol":"BUI"},{"name":"BlackRock, Inc.","symbol":"BLK"},{"name":"Blackstone / GSO Strategic Credit Fund","symbol":"BGB"},{"name":"Blackstone GSO Long Short Credit Income Fund","symbol":"BGX"},{"name":"Blackstone GSO Senior Floating Rate Term Fund","symbol":"BSL"},{"name":"Blount International, Inc.","symbol":"BLT"},{"name":"Blue Capital Reinsurance Holdings Ltd.","symbol":"BCRH"},{"name":"BlueLinx Holdings Inc.","symbol":"BXC"},{"name":"Boardwalk Pipeline Partners L.P.","symbol":"BWP"},{"name":"Boeing Company (The)","symbol":"BA"},{"name":"Boise Cascade, L.L.C.","symbol":"BCC"},{"name":"Bonanza Creek Energy, Inc.","symbol":"BCEI"},{"name":"Boot Barn Holdings, Inc.","symbol":"BOOT"},{"name":"Booz Allen Hamilton Holding Corporation","symbol":"BAH"},{"name":"BorgWarner Inc.","symbol":"BWA"},{"name":"Boston Beer Company, Inc. (The)","symbol":"SAM"},{"name":"Boston Properties, Inc.","symbol":"BXP"},{"name":"Boston Properties, Inc.","symbol":"BXP^B"},{"name":"Boston Scientific Corporation","symbol":"BSX"},{"name":"Box, Inc.","symbol":"BOX"},{"name":"Boyd Gaming Corporation","symbol":"BYD"},{"name":"BP p.l.c.","symbol":"BP"},{"name":"BP Prudhoe Bay Royalty Trust","symbol":"BPT"},{"name":"BPC Acquisition Corp","symbol":"BERY"},{"name":"Brady Corporation","symbol":"BRC"},{"name":"Brandywine Realty Tr","symbol":"BDN^E"},{"name":"Brandywine Realty Trust","symbol":"BDN"},{"name":"Brasilagro Cia Brasileira De Propriedades Agricolas","symbol":"LND"},{"name":"Braskem S.A.","symbol":"BAK"},{"name":"BRF S.A.","symbol":"BRFS"},{"name":"Bridgepoint Education, Inc.","symbol":"BPI"},{"name":"Briggs & Stratton Corporation","symbol":"BGG"},{"name":"Bright Horizons Family Solutions Inc.","symbol":"BFAM"},{"name":"Brinker International, Inc.","symbol":"EAT"},{"name":"Brink&#39;s Company (The)","symbol":"BCO"},{"name":"Bristol-Myers Squibb Company","symbol":"BMY"},{"name":"Bristow Group Inc","symbol":"BRS"},{"name":"Brixmor Property Group Inc.","symbol":"BRX"},{"name":"Broadridge Financial Solutions, Inc.","symbol":"BR"},{"name":"Brookdale Senior Living Inc.","symbol":"BKD"},{"name":"Brookfield Asset Management Inc","symbol":"BAM"},{"name":"Brookfield Canada Office Properties","symbol":"BOXC"},{"name":"Brookfield DTLA Inc.","symbol":"DTLA^"},{"name":"Brookfield Global Listed Infrastructure Income Fund","symbol":"INF"},{"name":"Brookfield High Income Fund Inc.","symbol":"HHY"},{"name":"Brookfield Infrastructure Partners LP","symbol":"BIP"},{"name":"Brookfield Mortgage Opportunity Income Fund Inc.","symbol":"BOI"},{"name":"Brookfield Property Partners L.P.","symbol":"BPY"},{"name":"Brookfield Renewable Powerr Fund","symbol":"BEP"},{"name":"Brookfield Total Return Fund Inc.","symbol":"HTR"},{"name":"Brown & Brown, Inc.","symbol":"BRO"},{"name":"Brown Forman Corporation","symbol":"BF.A"},{"name":"Brown Forman Corporation","symbol":"BF.B"},{"name":"BRT Realty Trust","symbol":"BRT"},{"name":"Brunswick Corporation","symbol":"BC"},{"name":"BT Group plc","symbol":"BT"},{"name":"Buckeye Partners L.P.","symbol":"BPL"},{"name":"Buckle, Inc. (The)","symbol":"BKE"},{"name":"Buenaventura Mining Company Inc.","symbol":"BVN"},{"name":"Build-A-Bear Workshop, Inc.","symbol":"BBW"},{"name":"Bunge Limited","symbol":"BG"},{"name":"Burlington Stores, Inc.","symbol":"BURL"},{"name":"BWX Technologies, Inc.","symbol":"BWXT"},{"name":"C&J Energy Services, Ltd.","symbol":"CJES"},{"name":"C.R. Bard, Inc.","symbol":"BCR"},{"name":"C1 Financial, Inc.","symbol":"BNK"},{"name":"CABCO Series 2004-101 Trust","symbol":"GYB"},{"name":"CABCO Series 2004-101 Trust","symbol":"PFH"},{"name":"Cabela&#39;s Inc","symbol":"CAB"},{"name":"Cable One, Inc.","symbol":"CABO"},{"name":"Cablevision Systems Corporation","symbol":"CVC"},{"name":"Cabot Corporation","symbol":"CBT"},{"name":"Cabot Oil & Gas Corporation","symbol":"COG"},{"name":"CACI International, Inc.","symbol":"CACI"},{"name":"CAE Inc","symbol":"CAE"},{"name":"CAI International, Inc.","symbol":"CAI"},{"name":"CalAtlantic Group, Inc.","symbol":"CAA"},{"name":"Caleres, Inc.","symbol":"CAL"},{"name":"Calgon Carbon Corporation","symbol":"CCC"},{"name":"California Resources Corporation","symbol":"CRC"},{"name":"California Water  Service Group Holding","symbol":"CWT"},{"name":"Calix, Inc","symbol":"CALX"},{"name":"Callaway Golf Company","symbol":"ELY"},{"name":"Callon Petroleum Company","symbol":"CPE"},{"name":"Callon Petroleum Company","symbol":"CPE^A"},{"name":"Calpine Corporation","symbol":"CPN"},{"name":"Cambrex Corporation","symbol":"CBM"},{"name":"Camden Property Trust","symbol":"CPT"},{"name":"Cameco Corporation","symbol":"CCJ"},{"name":"Cameron International Corporation","symbol":"CAM"},{"name":"Campbell Soup Company","symbol":"CPB"},{"name":"Campus Crest Communities, Inc.","symbol":"CCG"},{"name":"Campus Crest Communities, Inc.","symbol":"CCG^A"},{"name":"Canadian Imperial Bank of Commerce","symbol":"CM"},{"name":"Canadian National Railway Company","symbol":"CNI"},{"name":"Canadian Natural Resources Limited","symbol":"CNQ"},{"name":"Canadian Pacific Railway Limited","symbol":"CP"},{"name":"Canon, Inc.","symbol":"CAJ"},{"name":"Cantel Medical Corp.","symbol":"CMN"},{"name":"Capital One Financial Corporation","symbol":"COF"},{"name":"Capital One Financial Corporation","symbol":"COF.WS"},{"name":"Capital One Financial Corporation","symbol":"COF^C"},{"name":"Capital One Financial Corporation","symbol":"COF^D"},{"name":"Capital One Financial Corporation","symbol":"COF^F"},{"name":"Capital One Financial Corporation","symbol":"COF^P"},{"name":"Capital Senior Living Corporation","symbol":"CSU"},{"name":"Capital Trust, Inc.","symbol":"BXMT"},{"name":"Capitala Finance Corp.","symbol":"CLA"},{"name":"Capstead Mortgage Corporation","symbol":"CMO"},{"name":"Capstead Mortgage Corporation","symbol":"CMO^E"},{"name":"Carbo Ceramics, Inc.","symbol":"CRR"},{"name":"Cardinal Health, Inc.","symbol":"CAH"},{"name":"Care Capital Properties, Inc.","symbol":"CCP"},{"name":"Care.com, Inc.","symbol":"CRCM"},{"name":"Carlisle Companies Incorporated","symbol":"CSL"},{"name":"CarMax Inc","symbol":"KMX"},{"name":"Carnival Corporation","symbol":"CCL"},{"name":"Carnival Corporation","symbol":"CUK"},{"name":"Carpenter Technology Corporation","symbol":"CRS"},{"name":"Carriage Services, Inc.","symbol":"CSV"},{"name":"Carter&#39;s, Inc.","symbol":"CRI"},{"name":"Cash America International, Inc.","symbol":"CSH"},{"name":"Castle (A.M.) & Co.","symbol":"CAS"},{"name":"Castlight Health, inc.","symbol":"CSLT"},{"name":"Catalent, Inc.","symbol":"CTLT"},{"name":"CatchMark Timber Trust, Inc.","symbol":"CTT"},{"name":"Caterpillar, Inc.","symbol":"CAT"},{"name":"Cato Corporation (The)","symbol":"CATO"},{"name":"CBIZ, Inc.","symbol":"CBZ"},{"name":"CBL & Associates Properties, Inc.","symbol":"CBL"},{"name":"CBL & Associates Properties, Inc.","symbol":"CBL^D"},{"name":"CBL & Associates Properties, Inc.","symbol":"CBL^E"},{"name":"CBO (Listing Market - NYSE - Networks A/E)","symbol":"CBO"},{"name":"CBRE Clarion Global Real Estate Income Fund","symbol":"IGR"},{"name":"CBRE Group, Inc.","symbol":"CBG"},{"name":"CBS Corporation","symbol":"CBS"},{"name":"CBS Corporation","symbol":"CBS.A"},{"name":"CBX (Listing Market NYSE Networks AE","symbol":"CBX"},{"name":"CDI Corporation","symbol":"CDI"},{"name":"CEB Inc.","symbol":"CEB"},{"name":"Cedar Fair, L.P.","symbol":"FUN"},{"name":"Cedar Realty Trust, Inc.","symbol":"CDR"},{"name":"Cedar Realty Trust, Inc.","symbol":"CDR^B"},{"name":"Celadon Group, Inc.","symbol":"CGI"},{"name":"Celanese Corporation","symbol":"CE"},{"name":"Celestica, Inc.","symbol":"CLS"},{"name":"Cellcom Israel, Ltd.","symbol":"CEL"},{"name":"Cementos Pacasmayo S.A.A.","symbol":"CPAC"},{"name":"Cemex S.A.B. de C.V.","symbol":"CX"},{"name":"Cencosud S.A.","symbol":"CNCO"},{"name":"Cenovus Energy Inc","symbol":"CVE"},{"name":"Centene Corporation","symbol":"CNC"},{"name":"Center Coast MLP & Infrastructure Fund","symbol":"CEN"},{"name":"CenterPoint Energy, Inc.","symbol":"CNP"},{"name":"Centrais Electricas Brasileiras SA","symbol":"EBR"},{"name":"Centrais Electricas Brasileiras SA","symbol":"EBR.B"},{"name":"Central Europe, Russia and Turkey Fund, Inc. (The)","symbol":"CEE"},{"name":"Century Communities, Inc.","symbol":"CCS"},{"name":"CenturyLink, Inc.","symbol":"CTL"},{"name":"Cenveo Inc","symbol":"CVO"},{"name":"CF Industries Holdings, Inc.","symbol":"CF"},{"name":"CGG","symbol":"CGG"},{"name":"CGI Group, Inc.","symbol":"GIB"},{"name":"Chambers Street Properties","symbol":"CSG"},{"name":"ChannelAdvisor Corporation","symbol":"ECOM"},{"name":"Charles River Laboratories International, Inc.","symbol":"CRL"},{"name":"Chatham Lodging Trust (REIT)","symbol":"CLDT"},{"name":"CHC Group Ltd.","symbol":"HELI"},{"name":"Checkpoint Systms, Inc.","symbol":"CKP"},{"name":"Cheetah Mobile Inc.","symbol":"CMCM"},{"name":"Chegg, Inc.","symbol":"CHGG"},{"name":"Chemed Corp.","symbol":"CHE"},{"name":"Chemours Company (The)","symbol":"CC"},{"name":"Chemtura Corp.","symbol":"CHMT"},{"name":"Cherry Hill Mortgage Investment Corporation","symbol":"CHMI"},{"name":"Chesapeake Energy Corporation","symbol":"CHK"},{"name":"Chesapeake Energy Corporation","symbol":"CHK^D"},{"name":"Chesapeake Granite Wash Trust","symbol":"CHKR"},{"name":"Chesapeake Lodging Trust","symbol":"CHSP"},{"name":"Chesapeake Lodging Trust","symbol":"CHSP^A"},{"name":"Chesapeake Utilities Corporation","symbol":"CPK"},{"name":"Chevron Corporation","symbol":"CVX"},{"name":"Chicago Bridge & Iron Company N.V.","symbol":"CBI"},{"name":"Chico&#39;s FAS, Inc.","symbol":"CHS"},{"name":"Chimera Investment Corporation","symbol":"CIM"},{"name":"China Cord Blood Corporation","symbol":"CO"},{"name":"China Digital TV Holding Co., Ltd.","symbol":"STV"},{"name":"China Distance Education Holdings Limited","symbol":"DL"},{"name":"China Eastern Airlines Corporation Ltd.","symbol":"CEA"},{"name":"China Fund, Inc. (The)","symbol":"CHN"},{"name":"China Green Agriculture, Inc.","symbol":"CGA"},{"name":"China Life Insurance Company Limited","symbol":"LFC"},{"name":"China Ming Yang Wind Power Group Limited","symbol":"MY"},{"name":"China Mobile (Hong Kong) Ltd.","symbol":"CHL"},{"name":"China Nepstar Chain Drugstore Ltd","symbol":"NPD"},{"name":"China New Borun Corporation","symbol":"BORN"},{"name":"China Petroleum & Chemical Corporation","symbol":"SNP"},{"name":"China Southern Airlines Company Limited","symbol":"ZNH"},{"name":"China Telecom Corp Ltd","symbol":"CHA"},{"name":"China Unicom (Hong Kong) Ltd","symbol":"CHU"},{"name":"China Xiniya Fashion Limited","symbol":"XNY"},{"name":"China Yuchai International Limited","symbol":"CYD"},{"name":"China Zenix Auto International Limited","symbol":"ZX"},{"name":"Chipotle Mexican Grill, Inc.","symbol":"CMG"},{"name":"Choice Hotels International, Inc.","symbol":"CHH"},{"name":"Christopher & Banks Corporation","symbol":"CBK"},{"name":"Chubb Corporation (The)","symbol":"CB"},{"name":"Chunghwa Telecom Co., Ltd.","symbol":"CHT"},{"name":"Church & Dwight Company, Inc.","symbol":"CHD"},{"name":"Ciber, Inc.","symbol":"CBR"},{"name":"Ciena Corporation","symbol":"CIEN"},{"name":"Cigna Corporation","symbol":"CI"},{"name":"Cimarex Energy Co","symbol":"XEC"},{"name":"Cincinnati Bell Inc","symbol":"CBB"},{"name":"Cincinnati Bell Inc","symbol":"CBB^B"},{"name":"Cinemark Holdings Inc","symbol":"CNK"},{"name":"Ciner Resources LP","symbol":"CINR"},{"name":"CIRCOR International, Inc.","symbol":"CIR"},{"name":"CIT Group Inc (DEL)","symbol":"CIT"},{"name":"Citigroup Inc.","symbol":"BLW"},{"name":"Citigroup Inc.","symbol":"C"},{"name":"Citigroup Inc.","symbol":"C.WS.A"},{"name":"Citigroup Inc.","symbol":"C.WS.B"},{"name":"Citigroup Inc.","symbol":"C^C"},{"name":"Citigroup Inc.","symbol":"C^J"},{"name":"Citigroup Inc.","symbol":"C^K"},{"name":"Citigroup Inc.","symbol":"C^L"},{"name":"Citigroup Inc.","symbol":"C^N"},{"name":"Citigroup Inc.","symbol":"C^P"},{"name":"Citizens Financial Group, Inc.","symbol":"CFG"},{"name":"Citizens, Inc.","symbol":"CIA"},{"name":"City Office REIT, Inc.","symbol":"CIO"},{"name":"Civeo Corporation","symbol":"CVEO"},{"name":"Civitas Solutions, Inc.","symbol":"CIVI"},{"name":"CLARCOR Inc.","symbol":"CLC"},{"name":"Clayton Williams Energy, Inc.","symbol":"CWEI"},{"name":"Clean Harbors, Inc.","symbol":"CLH"},{"name":"Clear Channel Outdoor Holdings, Inc.","symbol":"CCO"},{"name":"ClearBridge American Energy MLP Fund Inc.","symbol":"CBA"},{"name":"ClearBridge Energy MLP Fund Inc.","symbol":"CEM"},{"name":"ClearBridge Energy MLP Opportunity Fund Inc.","symbol":"EMO"},{"name":"ClearBridge Energy MLP Total Return Fund Inc.","symbol":"CTR"},{"name":"Clearwater Paper Corporation","symbol":"CLW"},{"name":"Cleco Corporation","symbol":"CNL"},{"name":"Cliffs Natural Resources Inc.","symbol":"CLF"},{"name":"Cliffs Natural Resources Inc.","symbol":"CLV"},{"name":"Clorox Company (The)","symbol":"CLX"},{"name":"Cloud Peak Energy Inc","symbol":"CLD"},{"name":"ClubCorp Holdings, Inc.","symbol":"MYCC"},{"name":"CMS Energy Corporation","symbol":"CMS"},{"name":"CMS Energy Corporation","symbol":"CMS^B"},{"name":"CNA Financial Corporation","symbol":"CNA"},{"name":"CNH Industrial N.V.","symbol":"CNHI"},{"name":"CNO Financial Group, Inc.","symbol":"CNO"},{"name":"CNOOC Limited","symbol":"CEO"},{"name":"CNX Coal Resources LP","symbol":"CNXC"},{"name":"Coach, Inc.","symbol":"COH"},{"name":"Cobalt International Energy, Inc.","symbol":"CIE"},{"name":"Coca Cola Femsa S.A.B. de C.V.","symbol":"KOF"},{"name":"Coca-Cola Company (The)","symbol":"KO"},{"name":"Coca-Cola Enterprises, Inc.","symbol":"CCE"},{"name":"Coeur Mining, Inc.","symbol":"CDE"},{"name":"Cohen & Steers Closed-End Opportunity Fund, Inc.","symbol":"FOF"},{"name":"Cohen & Steers Global Income Builder, Inc.","symbol":"INB"},{"name":"Cohen & Steers Infrastructure Fund, Inc","symbol":"UTF"},{"name":"Cohen & Steers Limited Duration Preferred and Income Fund, Inc","symbol":"LDP"},{"name":"Cohen & Steers MLP Income and Energy Opportunity Fund, Inc.","symbol":"MIE"},{"name":"Cohen & Steers Quality Income Realty Fund Inc","symbol":"RQI"},{"name":"Cohen & Steers Reit and Preferred Income Fund Inc","symbol":"RNP"},{"name":"Cohen & Steers Select Preferred and Income Fund, Inc.","symbol":"PSF"},{"name":"Cohen & Steers Total Return Realty Fund, Inc.","symbol":"RFI"},{"name":"Cohn & Steers Inc","symbol":"CNS"},{"name":"Colfax Corporation","symbol":"CFX"},{"name":"Colgate-Palmolive Company","symbol":"CL"},{"name":"Colonial High Income Municipal Trust","symbol":"CXE"},{"name":"Colonial Intermediate High Income Fund","symbol":"CIF"},{"name":"Colonial Investment Grade Municipal Trust","symbol":"CXH"},{"name":"Colonial Municipal Income Trust","symbol":"CMU"},{"name":"Colony Capital, Inc","symbol":"CLNY"},{"name":"Colony Capital, Inc","symbol":"CLNY^A"},{"name":"Colony Capital, Inc","symbol":"CLNY^B"},{"name":"Colony Capital, Inc","symbol":"CLNY^C"},{"name":"Columbia Pipeline Group, Inc.","symbol":"CPGX"},{"name":"Columbia Pipeline Partners LP","symbol":"CPPL"},{"name":"Columbia Property Trust, Inc.","symbol":"CXP"},{"name":"Columbia Seligman Premium Technology Growth Fund, Inc","symbol":"STK"},{"name":"Comcast Corporation","symbol":"CCV"},{"name":"Comcast Corporation","symbol":"CCZ"},{"name":"Comerica Incorporated","symbol":"CMA"},{"name":"Comerica Incorporated","symbol":"CMA.WS"},{"name":"Comfort Systems USA, Inc.","symbol":"FIX"},{"name":"Commercial Metals Company","symbol":"CMC"},{"name":"Community Bank System, Inc.","symbol":"CBU"},{"name":"Community Health Systems, Inc.","symbol":"CYH"},{"name":"Community Healthcare Trust Incorporated","symbol":"CHCT"},{"name":"Comp En De Mn Cemig ADS","symbol":"CIG"},{"name":"Comp En De Mn Cemig ADS","symbol":"CIG.C"},{"name":"Companhia Brasileira de Distribuicao","symbol":"CBD"},{"name":"Companhia de saneamento Basico Do Estado De Sao Paulo - Sabesp","symbol":"SBS"},{"name":"Companhia Paranaense de Energia (COPEL)","symbol":"ELP"},{"name":"Compania Cervecerias Unidas, S.A.","symbol":"CCU"},{"name":"Compass Diversified Holdings","symbol":"CODI"},{"name":"Compass Minerals International, Inc.","symbol":"CMP"},{"name":"Computer Sciences Corporation","symbol":"CSC"},{"name":"Comstock Resources, Inc.","symbol":"CRK"},{"name":"ConAgra Foods, Inc.","symbol":"CAG"},{"name":"Concho Resources Inc.","symbol":"CXO"},{"name":"Concord Medical Services Holdings Limited","symbol":"CCM"},{"name":"Cone Midstream Partners LP","symbol":"CNNX"},{"name":"ConocoPhillips","symbol":"COP"},{"name":"CONSOL Energy Inc.","symbol":"CNX"},{"name":"Consolidated Edison Inc","symbol":"ED"},{"name":"Constellation Brands Inc","symbol":"STZ"},{"name":"Constellation Brands Inc","symbol":"STZ.B"},{"name":"Constellium N.V.","symbol":"CSTM"},{"name":"Container Store (The)","symbol":"TCS"},{"name":"Continental Building Products, Inc.","symbol":"CBPX"},{"name":"Continental Resources, Inc.","symbol":"CLR"},{"name":"Controladora Vuela Compania de Aviacion, S.A.B. de C.V.","symbol":"VLRS"},{"name":"Convergys Corporation","symbol":"CVG"},{"name":"Cooper Companies, Inc. (The)","symbol":"COO"},{"name":"Cooper Tire & Rubber Company","symbol":"CTB"},{"name":"Cooper-Standard Holdings Inc.","symbol":"CPS"},{"name":"Copa Holdings, S.A.","symbol":"CPA"},{"name":"Core Laboratories N.V.","symbol":"CLB"},{"name":"CoreLogic, Inc.","symbol":"CLGX"},{"name":"CorEnergy Infrastructure Trust, Inc.","symbol":"CORR"},{"name":"CorEnergy Infrastructure Trust, Inc.","symbol":"CORR^A"},{"name":"CoreSite Realty Corporation","symbol":"COR"},{"name":"CoreSite Realty Corporation","symbol":"COR^A"},{"name":"Corning Incorporated","symbol":"GLW"},{"name":"Corpbanca","symbol":"BCA"},{"name":"Corporate Asset Backed Corp CABCO","symbol":"GYC"},{"name":"Corporate Office Properties Trust","symbol":"OFC"},{"name":"Corporate Office Properties Trust","symbol":"OFC^L"},{"name":"Corrections Corporation of America","symbol":"CXW"},{"name":"Cosan Limited","symbol":"CZZ"},{"name":"Costamare Inc.","symbol":"CMRE"},{"name":"Costamare Inc.","symbol":"CMRE^B"},{"name":"Costamare Inc.","symbol":"CMRE^C"},{"name":"Costamare Inc.","symbol":"CMRE^D"},{"name":"Cott Corporation","symbol":"COT"},{"name":"Coty Inc.","symbol":"COTY"},{"name":"Country Style Cooking Restaurant Chain Co., Ltd.","symbol":"CCSC"},{"name":"Countrywide Financial Corporation","symbol":"CFC^A"},{"name":"Countrywide Financial Corporation","symbol":"CFC^B"},{"name":"Cousins Properties Incorporated","symbol":"CUZ"},{"name":"Covanta Holding Corporation","symbol":"CVA"},{"name":"CPB Inc.","symbol":"CPF"},{"name":"CPFL Energia S.A.","symbol":"CPL"},{"name":"Crane Company","symbol":"CR"},{"name":"Crawford & Company","symbol":"CRD.A"},{"name":"Crawford & Company","symbol":"CRD.B"},{"name":"Credicorp Ltd.","symbol":"BAP"},{"name":"Credit Suisse Group","symbol":"CS"},{"name":"Crescent Point Energy Corporation","symbol":"CPG"},{"name":"Crestwood Equity Partners LP","symbol":"CEQP"},{"name":"CRH PLC","symbol":"CRH"},{"name":"Cross Timbers Royalty Trust","symbol":"CRT"},{"name":"CrossAmerica Partners LP","symbol":"CAPL"},{"name":"Crown Castle International Corporation","symbol":"CCI"},{"name":"Crown Castle International Corporation","symbol":"CCI^A"},{"name":"Crown Holdings, Inc.","symbol":"CCK"},{"name":"CryoLife, Inc.","symbol":"CRY"},{"name":"CSS Industries, Inc.","symbol":"CSS"},{"name":"CST Brands, Inc.","symbol":"CST"},{"name":"CSX Corporation","symbol":"CSX"},{"name":"CTS Corporation","symbol":"CTS"},{"name":"CubeSmart","symbol":"CUBE"},{"name":"CubeSmart","symbol":"CUBE^A"},{"name":"Cubic Corporation","symbol":"CUB"},{"name":"Cullen/Frost Bankers, Inc.","symbol":"CFR"},{"name":"Cullen/Frost Bankers, Inc.","symbol":"CFR^A"},{"name":"Culp, Inc.","symbol":"CFI"},{"name":"Cummins Inc.","symbol":"CMI"},{"name":"Curtiss-Wright Corporation","symbol":"CW"},{"name":"Cushing Energy Income Fund (The)","symbol":"SRF"},{"name":"Cushing Renaissance Fund (The)","symbol":"SZC"},{"name":"Customers Bancorp, Inc","symbol":"CUBI"},{"name":"Customers Bancorp, Inc","symbol":"CUBI^C"},{"name":"Customers Bancorp, Inc","symbol":"CUBS"},{"name":"Cutwater Select Income Fund","symbol":"CSI"},{"name":"CVENT, INC.","symbol":"CVT"},{"name":"CVR Energy Inc.","symbol":"CVI"},{"name":"CVR Partners, LP","symbol":"UAN"},{"name":"CVR Refining, LP","symbol":"CVRR"},{"name":"CVS Health Corporation","symbol":"CVS"},{"name":"Cypress Energy Partners, L.P.","symbol":"CELP"},{"name":"CYS Investments, Inc.","symbol":"CYS"},{"name":"CYS Investments, Inc.","symbol":"CYS^A"},{"name":"CYS Investments, Inc.","symbol":"CYS^B"},{"name":"Cytec Industries Inc.","symbol":"CYT"},{"name":"D.R. Horton, Inc.","symbol":"DHI"},{"name":"Dana Holding Corporation","symbol":"DAN"},{"name":"Danaher Corporation","symbol":"DHR"},{"name":"Danaos Corporation","symbol":"DAC"},{"name":"DAQO New Energy Corp.","symbol":"DQ"},{"name":"Darden Restaurants, Inc.","symbol":"DRI"},{"name":"Darling Ingredients Inc.","symbol":"DAR"},{"name":"DaVita healthCare Partners Inc.","symbol":"DVA"},{"name":"DCP Midstream Partners, LP","symbol":"DPM"},{"name":"DCT Industrial Trust Inc","symbol":"DCT"},{"name":"DDR Corp.","symbol":"DDR"},{"name":"DDR Corp.","symbol":"DDR^J"},{"name":"DDR Corp.","symbol":"DDR^K"},{"name":"Dean Foods Company","symbol":"DF"},{"name":"Deckers Outdoor Corporation","symbol":"DECK"},{"name":"Deere & Company","symbol":"DE"},{"name":"Delaware Enhanced Global Dividend","symbol":"DEX"},{"name":"Delaware Investments Dividend & Income Fund, Inc.","symbol":"DDF"},{"name":"Delek Logistics Partners, L.P.","symbol":"DKL"},{"name":"Delek US Holdings, Inc.","symbol":"DK"},{"name":"Delphi Automotive plc","symbol":"DLPH"},{"name":"Delta Air Lines, Inc.","symbol":"DAL"},{"name":"Deltic Timber Corporation","symbol":"DEL"},{"name":"Deluxe Corporation","symbol":"DLX"},{"name":"Demand Media Inc.","symbol":"DMD"},{"name":"DEMANDWARE, INC.","symbol":"DWRE"},{"name":"Denbury Resources Inc.","symbol":"DNR"},{"name":"Deutsch Bk Contingent Cap Tr V","symbol":"DKT"},{"name":"Deutsche Bank AG","symbol":"DB"},{"name":"Deutsche Bank AG","symbol":"DTK"},{"name":"Deutsche Bank AG","symbol":"DXB"},{"name":"Devon Energy Corporation","symbol":"DVN"},{"name":"DeVry Education Group Inc.","symbol":"DV"},{"name":"DHI Group, Inc.","symbol":"DHX"},{"name":"DHT Holdings, Inc.","symbol":"DHT"},{"name":"Diageo plc","symbol":"DEO"},{"name":"Diamond Offshore Drilling, Inc.","symbol":"DO"},{"name":"Diamond Resorts International, Inc.","symbol":"DRII"},{"name":"Diamondrock Hospitality Company","symbol":"DRH"},{"name":"Diana Shipping inc.","symbol":"DSX"},{"name":"Diana Shipping inc.","symbol":"DSX^B"},{"name":"Diana Shipping inc.","symbol":"DSXN"},{"name":"Dick&#39;s Sporting Goods Inc","symbol":"DKS"},{"name":"Diebold, Incorporated","symbol":"DBD"},{"name":"Digital Realty Trust, Inc.","symbol":"DLR"},{"name":"Digital Realty Trust, Inc.","symbol":"DLR^E"},{"name":"Digital Realty Trust, Inc.","symbol":"DLR^F"},{"name":"Digital Realty Trust, Inc.","symbol":"DLR^G"},{"name":"Digital Realty Trust, Inc.","symbol":"DLR^H"},{"name":"Digital Realty Trust, Inc.","symbol":"DLR^I"},{"name":"DigitalGlobe, Inc","symbol":"DGI"},{"name":"Dillard&#39;s, Inc.","symbol":"DDS"},{"name":"Dillard&#39;s, Inc.","symbol":"DDT"},{"name":"DineEquity, Inc","symbol":"DIN"},{"name":"Diplomat Pharmacy, Inc.","symbol":"DPLO"},{"name":"Discover Financial Services","symbol":"DFS"},{"name":"Discover Financial Services","symbol":"DFS^B"},{"name":"Diversified Real Asset Income Fund","symbol":"DRA"},{"name":"Dividend and Income Fund","symbol":"DNI"},{"name":"Dolby Laboratories","symbol":"DLB"},{"name":"Dollar General Corporation","symbol":"DG"},{"name":"Dominion Diamond Corporation","symbol":"DDC"},{"name":"Dominion Midstream Partners, LP","symbol":"DM"},{"name":"Dominion Resources Black Warrior Trust","symbol":"DOM"},{"name":"Dominion Resources, Inc.","symbol":"D"},{"name":"Dominion Resources, Inc.","symbol":"DCUA"},{"name":"Dominion Resources, Inc.","symbol":"DCUB"},{"name":"Dominion Resources, Inc.","symbol":"DCUC"},{"name":"Domino&#39;s Pizza Inc","symbol":"DPZ"},{"name":"Domtar Corporation","symbol":"UFS"},{"name":"Donaldson Company, Inc.","symbol":"DCI"},{"name":"Dorian LPG Ltd.","symbol":"LPG"},{"name":"DoubleLine Income Solutions Fund","symbol":"DSL"},{"name":"DoubleLine Opportunistic Credit Fund","symbol":"DBL"},{"name":"Douglas Dynamics, Inc.","symbol":"PLOW"},{"name":"Douglas Emmett, Inc.","symbol":"DEI"},{"name":"Dover Corporation","symbol":"DOV"},{"name":"Dover Downs Gaming & Entertainment Inc","symbol":"DDE"},{"name":"Dover Motorsports, Inc.","symbol":"DVD"},{"name":"Dow Chemical Company (The)","symbol":"DOW"},{"name":"Dr Pepper Snapple Group, Inc","symbol":"DPS"},{"name":"Dr. Reddy&#39;s Laboratories Ltd","symbol":"RDY"},{"name":"DRDGOLD Limited","symbol":"DRD"},{"name":"Drew Industries Incorporated","symbol":"DW"},{"name":"Dreyfus High Yield Strategies Fund","symbol":"DHF"},{"name":"Dreyfus Municipal Bond Infrastructure Fund, Inc.","symbol":"DMB"},{"name":"Dreyfus Strategic Municipal Bond Fund, Inc.","symbol":"DSM"},{"name":"Dreyfus Strategic Municipals, Inc.","symbol":"LEO"},{"name":"Dril-Quip, Inc.","symbol":"DRQ"},{"name":"DST Systems, Inc.","symbol":"DST"},{"name":"DSW Inc.","symbol":"DSW"},{"name":"DTE Energy Company","symbol":"DTE"},{"name":"DTE Energy Company","symbol":"DTQ"},{"name":"DTE Energy Company","symbol":"DTZ"},{"name":"Ducommun Incorporated","symbol":"DCO"},{"name":"Duff & Phelps Global Utility Income Fund Inc.","symbol":"DPG"},{"name":"Duff & Phelps Select Energy MLP Fund Inc.","symbol":"DSE"},{"name":"Duff & Phelps Utilities Income, Inc.","symbol":"DNP"},{"name":"Duff & Phelps Utilities Tax-Free Income, Inc.","symbol":"DTF"},{"name":"Duff & Phelps Utility & Corporate Bond Trust, Inc.","symbol":"DUC"},{"name":"Duke Energy Corporation","symbol":"DUK"},{"name":"Duke Energy Corporation","symbol":"DUKH"},{"name":"Duke Realty Corporation","symbol":"DRE"},{"name":"Dun & Bradstreet Corporation (The)","symbol":"DNB"},{"name":"Dupont Fabros Technology, Inc.","symbol":"DFT"},{"name":"Dupont Fabros Technology, Inc.","symbol":"DFT^A"},{"name":"Dupont Fabros Technology, Inc.","symbol":"DFT^B"},{"name":"DWS High Income Opportunities Fund, Inc.","symbol":"DHG"},{"name":"Dycom Industries, Inc.","symbol":"DY"},{"name":"Dynagas LNG Partners LP","symbol":"DLNG"},{"name":"Dynagas LNG Partners LP","symbol":"DLNG^A"},{"name":"Dynegy Inc.","symbol":"DYN"},{"name":"Dynegy Inc.","symbol":"DYN.WS"},{"name":"Dynegy Inc.","symbol":"DYN^A"},{"name":"Dynex Capital, Inc.","symbol":"DX"},{"name":"Dynex Capital, Inc.","symbol":"DX^A"},{"name":"Dynex Capital, Inc.","symbol":"DX^B"},{"name":"E.I. du Pont de Nemours and Company","symbol":"DD"},{"name":"E.I. du Pont de Nemours and Company","symbol":"DD^A"},{"name":"E.I. du Pont de Nemours and Company","symbol":"DD^B"},{"name":"E.W. Scripps Company (The)","symbol":"SSP"},{"name":"Eagle Growth and Income Opportunities Fund","symbol":"EGIF"},{"name":"Eagle Materials Inc","symbol":"EXP"},{"name":"Eagle Point Credit Company Inc.","symbol":"ECC"},{"name":"Eagle Point Credit Company Inc.","symbol":"ECCA"},{"name":"Easterly Government Properties, Inc.","symbol":"DEA"},{"name":"EastGroup Properties, Inc.","symbol":"EGP"},{"name":"Eastman Chemical Company","symbol":"EMN"},{"name":"Eastman Kodak Company","symbol":"KODK"},{"name":"Eastman Kodak Company","symbol":"KODK.WS"},{"name":"Eastman Kodak Company","symbol":"KODK.WS.A"},{"name":"Eaton Corporation, PLC","symbol":"ETN"},{"name":"Eaton Vance Corporation","symbol":"ETV"},{"name":"Eaton Vance Corporation","symbol":"ETW"},{"name":"Eaton Vance Corporation","symbol":"EV"},{"name":"Eaton Vance Enhance Equity Income Fund","symbol":"EOI"},{"name":"Eaton Vance Enhanced Equity Income Fund II","symbol":"EOS"},{"name":"Eaton Vance Floating Rate Income Trust","symbol":"EFT"},{"name":"Eaton vance Floating-Rate Income Plus Fund","symbol":"EFF"},{"name":"Eaton Vance Municipal Income 2028 Term Trust","symbol":"ETX"},{"name":"Eaton Vance Municipal Income Trust","symbol":"EOT"},{"name":"Eaton Vance Municipal Income Trust","symbol":"EVN"},{"name":"Eaton Vance Risk-Managed Diversified Equity Income Fund","symbol":"ETJ"},{"name":"Eaton Vance Senior Floating-Rate Fund","symbol":"EFR"},{"name":"Eaton Vance Senior Income Trust","symbol":"EVF"},{"name":"Eaton Vance Short Diversified Income Fund","symbol":"EVG"},{"name":"Eaton Vance Tax Advantaged Dividend Income Fund","symbol":"EVT"},{"name":"Eaton Vance Tax-Advantage Global Dividend Opp","symbol":"ETO"},{"name":"Eaton Vance Tax-Advantaged Bond","symbol":"EXD"},{"name":"Eaton Vance Tax-Advantaged Global Dividend Income Fund","symbol":"ETG"},{"name":"Eaton Vance Tax-Managed Buy-Write Income Fund","symbol":"ETB"},{"name":"Eaton Vance Tax-Managed Diversified Equity Income Fund","symbol":"ETY"},{"name":"Eaton Vance Tax-Managed Global Diversified Equity Income Fund","symbol":"EXG"},{"name":"ECA Marcellus Trust I","symbol":"ECT"},{"name":"Eclipse Resources Corporation","symbol":"ECR"},{"name":"Ecolab Inc.","symbol":"ECL"},{"name":"E-Commerce China Dangdang Inc.","symbol":"DANG"},{"name":"Ecopetrol S.A.","symbol":"EC"},{"name":"Edison International","symbol":"EIX"},{"name":"Education Realty Trust Inc.","symbol":"EDR"},{"name":"Edwards Lifesciences Corporation","symbol":"EW"},{"name":"eHi Car Services Limited","symbol":"EHIC"},{"name":"E-House (China) Holdings Limited","symbol":"EJ"},{"name":"El Paso Corporation","symbol":"EP^C"},{"name":"El Paso Electric Company","symbol":"EE"},{"name":"Eldorado Gold Corporation","symbol":"EGO"},{"name":"Eli Lilly and Company","symbol":"LLY"},{"name":"Ellie Mae, Inc.","symbol":"ELLI"},{"name":"Ellington Financial LLC","symbol":"EFC"},{"name":"Ellington Residential Mortgage REIT","symbol":"EARN"},{"name":"Embotelladora Andina S.A.","symbol":"AKO.A"},{"name":"Embotelladora Andina S.A.","symbol":"AKO.B"},{"name":"Embraer-Empresa Brasileira de Aeronautica","symbol":"ERJ"},{"name":"EMC Corporation","symbol":"EMC"},{"name":"EMCOR Group, Inc.","symbol":"EME"},{"name":"Emerge Energy Services LP","symbol":"EMES"},{"name":"Emergent Biosolutions, Inc.","symbol":"EBS"},{"name":"Emergent Capital, Inc.","symbol":"EMG"},{"name":"Emerson Electric Company","symbol":"EMR"},{"name":"Empire District Electric Company (The)","symbol":"EDE"},{"name":"Empire State Realty Trust, Inc.","symbol":"ESRT"},{"name":"Employers Holdings Inc","symbol":"EIG"},{"name":"Empresa Distribuidora Y Comercializadora Norte S.A. (Edenor)","symbol":"EDN"},{"name":"Empresa Nacional de Electricidad S.A.","symbol":"EOC"},{"name":"Empresas Ica Soc Contrladora","symbol":"ICA"},{"name":"Enable Midstream Partners, LP","symbol":"ENBL"},{"name":"Enbridge Energy Management LLC","symbol":"EEQ"},{"name":"Enbridge Energy, L.P.","symbol":"EEP"},{"name":"Enbridge Inc","symbol":"ENB"},{"name":"Encana Corporation","symbol":"ECA"},{"name":"Endeavour Silver Corporation","symbol":"EXK"},{"name":"EndoChoice Holdings, Inc.","symbol":"GI"},{"name":"Endurance Specialty Holdings Ltd","symbol":"ENH"},{"name":"Endurance Specialty Holdings Ltd","symbol":"ENH^A.CL"},{"name":"Endurance Specialty Holdings Ltd","symbol":"ENH^B"},{"name":"Endurance Specialty Holdings Ltd","symbol":"ENH^C"},{"name":"Enduro Royalty Trust","symbol":"NDRO"},{"name":"Energen Corporation","symbol":"EGN"},{"name":"Energizer Holdings, Inc.","symbol":"ENR"},{"name":"Energizer Holdings, Inc.","symbol":"EPC"},{"name":"Energy Transfer Equity, L.P.","symbol":"ETE"},{"name":"ENERGY TRANSFER PARTNERS","symbol":"ETP"},{"name":"Enerplus Corporation","symbol":"ERF"},{"name":"Enersis S A","symbol":"ENI"},{"name":"Enersys","symbol":"ENS"},{"name":"Engility Holdings, Inc.","symbol":"EGL"},{"name":"ENI S.p.A.","symbol":"E"},{"name":"EnLink Midstream Partners, LP","symbol":"ENLK"},{"name":"EnLink Midstream, LLC","symbol":"ENLC"},{"name":"Ennis, Inc.","symbol":"EBF"},{"name":"Enova International, Inc.","symbol":"ENVA"},{"name":"Enpro Industries","symbol":"NPO"},{"name":"ENSCO plc","symbol":"ESV"},{"name":"Entercom Communications Corporation","symbol":"ETM"},{"name":"Entergy Arkansas, Inc.","symbol":"EAA"},{"name":"Entergy Arkansas, Inc.","symbol":"EAB"},{"name":"Entergy Arkansas, Inc.","symbol":"EAE"},{"name":"Entergy Corporation","symbol":"ETR"},{"name":"Entergy Louisiana, Inc.","symbol":"ELA"},{"name":"Entergy Louisiana, Inc.","symbol":"ELB"},{"name":"Entergy Louisiana, Inc.","symbol":"ELJ"},{"name":"Entergy Louisiana, Inc.","symbol":"ELU"},{"name":"Entergy Mississippi, Inc.","symbol":"EFM"},{"name":"Entergy Mississippi, Inc.","symbol":"EMQ"},{"name":"Entergy Mississippi, Inc.","symbol":"EMZ"},{"name":"Entergy New Orleans, Inc.","symbol":"ENJ"},{"name":"Entergy Texas Inc","symbol":"EZT"},{"name":"Enterprise Products Partners L.P.","symbol":"EPD"},{"name":"Entravision Communications Corporation","symbol":"EVC"},{"name":"Envestnet, Inc","symbol":"ENV"},{"name":"Envision Healthcare Holdings, Inc.","symbol":"EVHC"},{"name":"Enviva Partners, LP","symbol":"EVA"},{"name":"Enzo Biochem, Inc.","symbol":"ENZ"},{"name":"EOG Resources, Inc.","symbol":"EOG"},{"name":"EP Energy Corporation","symbol":"EPE"},{"name":"EPAM Systems, Inc.","symbol":"EPAM"},{"name":"EPR Properties","symbol":"EPR"},{"name":"EPR Properties","symbol":"EPR^C"},{"name":"EPR Properties","symbol":"EPR^E"},{"name":"EPR Properties","symbol":"EPR^F"},{"name":"EQT Corporation","symbol":"EQT"},{"name":"EQT GP Holdings, LP","symbol":"EQGP"},{"name":"EQT Midstream Partners, LP","symbol":"EQM"},{"name":"Equifax, Inc.","symbol":"EFX"},{"name":"Equity Commonwealth","symbol":"EQC"},{"name":"Equity Commonwealth","symbol":"EQC^D"},{"name":"Equity Commonwealth","symbol":"EQC^E"},{"name":"Equity Commonwealth","symbol":"EQCO"},{"name":"Equity Lifestyle Properties, Inc.","symbol":"ELS"},{"name":"Equity Lifestyle Properties, Inc.","symbol":"ELS^C"},{"name":"Equity One, Inc.","symbol":"EQY"},{"name":"Equity Residential","symbol":"EQR"},{"name":"Equus Total Return, Inc.","symbol":"EQS"},{"name":"Era Group, Inc.","symbol":"ERA"},{"name":"Eros International PLC","symbol":"EROS"},{"name":"ESCO Technologies Inc.","symbol":"ESE"},{"name":"Essent Group Ltd.","symbol":"ESNT"},{"name":"Essex Property Trust, Inc.","symbol":"ESS"},{"name":"Essex Property Trust, Inc.","symbol":"ESS^H"},{"name":"Estee Lauder Companies, Inc. (The)","symbol":"EL"},{"name":"Esterline Technologies Corporation","symbol":"ESL"},{"name":"Etablissements Delhaize Freres et Cie &quot;Le Lion&quot; S.A.","symbol":"DEG"},{"name":"Ethan Allen Interiors Inc.","symbol":"ETH"},{"name":"Euronav NV","symbol":"EURN"},{"name":"European Equity Fund, Inc. (The)","symbol":"EEA"},{"name":"EverBank Financial Corp.","symbol":"EVER"},{"name":"EverBank Financial Corp.","symbol":"EVER^A"},{"name":"Evercore Partners Inc","symbol":"EVR"},{"name":"Everest Re Group, Ltd.","symbol":"RE"},{"name":"Everi Holdings Inc.","symbol":"EVRI"},{"name":"Eversource Energy","symbol":"ES"},{"name":"Evertec, Inc.","symbol":"EVTC"},{"name":"Everyday Health, Inc.","symbol":"EVDY"},{"name":"Evogene Ltd.","symbol":"EVGN"},{"name":"Evolent Health, Inc","symbol":"EVH"},{"name":"ExamWorks Group, Inc.","symbol":"EXAM"},{"name":"Exar Corporation","symbol":"EXAR"},{"name":"EXCO Resources NL","symbol":"XCO"},{"name":"Exelon Corporation","symbol":"EXC"},{"name":"Exelon Corporation","symbol":"EXCU"},{"name":"Express, Inc.","symbol":"EXPR"},{"name":"Extended Stay America, Inc.","symbol":"STAY"},{"name":"Exterran Corporation","symbol":"EXTN"},{"name":"Extra Space Storage Inc","symbol":"EXR"},{"name":"Exxon Mobil Corporation","symbol":"XOM"},{"name":"F.N.B. Corporation","symbol":"FNB"},{"name":"F.N.B. Corporation","symbol":"FNB^E"},{"name":"Fabrinet","symbol":"FN"},{"name":"FactSet Research Systems Inc.","symbol":"FDS"},{"name":"Fair Isaac Corporation","symbol":"FICO"},{"name":"Fairmount Santrol Holdings Inc.","symbol":"FMSA"},{"name":"Farmland Partners Inc.","symbol":"FPI"},{"name":"FBL Financial Group, Inc.","symbol":"FFG"},{"name":"FCB Financial Holdings, Inc.","symbol":"FCB"},{"name":"Federal Agricultural Mortgage Corporation","symbol":"AGM"},{"name":"Federal Agricultural Mortgage Corporation","symbol":"AGM.A"},{"name":"Federal Agricultural Mortgage Corporation","symbol":"AGM^A"},{"name":"Federal Agricultural Mortgage Corporation","symbol":"AGM^B"},{"name":"Federal Agricultural Mortgage Corporation","symbol":"AGM^C"},{"name":"Federal Realty Investment Trust","symbol":"FRT"},{"name":"Federal Signal Corporation","symbol":"FSS"},{"name":"Federated Investors, Inc.","symbol":"FII"},{"name":"Federated Premier Intermediate Municipal Income Fund","symbol":"FPT"},{"name":"Federated Premier Municipal Income Fund","symbol":"FMN"},{"name":"FedEx Corporation","symbol":"FDX"},{"name":"FelCor Lodging Trust Incorporated","symbol":"FCH"},{"name":"FelCor Lodging Trust Incorporated","symbol":"FCH^A"},{"name":"Ferrari N.V.","symbol":"RACE"},{"name":"Ferrellgas Partners, L.P.","symbol":"FGP"},{"name":"Ferro Corporation","symbol":"FOE"},{"name":"Fiat Chrysler Automobiles N.V.","symbol":"FCAM"},{"name":"Fiat Chrysler Automobiles N.V.","symbol":"FCAU"},{"name":"Fibria Celulose S.A.","symbol":"FBR"},{"name":"Fidelity and Guaranty Life","symbol":"FGL"},{"name":"Fidelity National Financial, Inc.","symbol":"FNF"},{"name":"Fidelity National Financial, Inc.","symbol":"FNFV"},{"name":"Fidelity National Information Services, Inc.","symbol":"FIS"},{"name":"Fiduciary/Claymore MLP Opportunity Fund","symbol":"FMO"},{"name":"Fifth Street Finance Corp.","symbol":"FSCE"},{"name":"First Acceptance Corporation","symbol":"FAC"},{"name":"First American Corporation (The)","symbol":"FAF"},{"name":"First BanCorp.","symbol":"FBP"},{"name":"First Banks, Inc.","symbol":"FBS^A.CL"},{"name":"First Commonwealth Financial Corporation","symbol":"FCF"},{"name":"First Data Corporation","symbol":"FDC"},{"name":"First Horizon National Corporation","symbol":"FHN"},{"name":"First Horizon National Corporation","symbol":"FHN^A"},{"name":"First Industrial Realty Trust, Inc.","symbol":"FR"},{"name":"First Majestic Silver Corp.","symbol":"AG"},{"name":"First Marblehead Corporation (The)","symbol":"FMD"},{"name":"First Niagara Financial Group Inc.","symbol":"FNFG^B"},{"name":"First Potomac Realty Trust","symbol":"FPO"},{"name":"First Potomac Realty Trust","symbol":"FPO^A"},{"name":"FIRST REPUBLIC BANK","symbol":"FRC"},{"name":"FIRST REPUBLIC BANK","symbol":"FRC^A"},{"name":"FIRST REPUBLIC BANK","symbol":"FRC^B"},{"name":"FIRST REPUBLIC BANK","symbol":"FRC^C"},{"name":"FIRST REPUBLIC BANK","symbol":"FRC^D"},{"name":"FIRST REPUBLIC BANK","symbol":"FRC^E"},{"name":"FIRST REPUBLIC BANK","symbol":"FRC^F"},{"name":"First Trust","symbol":"FFA"},{"name":"First Trust","symbol":"FMY"},{"name":"First Trust Dividend and Income Fund","symbol":"FAV"},{"name":"First Trust Dynamic Europe Equity Income Fund","symbol":"FDEU"},{"name":"First Trust Energy Infrastructure Fund","symbol":"FIF"},{"name":"First Trust High Income Long Short Fund","symbol":"FSD"},{"name":"First Trust Intermediate Duration Preferred & Income Fund","symbol":"FPF"},{"name":"First Trust MLP and Energy Income Fund","symbol":"FEI"},{"name":"First Trust New Opportunities MLP & Energy Fund","symbol":"FPL"},{"name":"First Trust Senior Floating Rate Income Fund II","symbol":"FCT"},{"name":"First Trust Specialty Finance and Financial Opportunities Fund","symbol":"FGB"},{"name":"First Trust Strategic High Income Fund II","symbol":"FHY"},{"name":"First Trust/Aberdeen Emerging Opportunity Fund","symbol":"FEO"},{"name":"First Trust/Aberdeen Global Opportunity Income Fund","symbol":"FAM"},{"name":"FirstEnergy Corporation","symbol":"FE"},{"name":"FirstMerit Corporation","symbol":"FMER^A"},{"name":"Fitbit, Inc.","symbol":"FIT"},{"name":"Five Oaks Investment Corp.","symbol":"OAKS"},{"name":"Five Oaks Investment Corp.","symbol":"OAKS^A"},{"name":"Five Star Quality Care, Inc.","symbol":"FVE"},{"name":"Flagstar Bancorp, Inc.","symbol":"FBC"},{"name":"Flaherty & Crumrine Dynamic Preferred and Income Fund Inc.","symbol":"DFP"},{"name":"Flaherty & Crumrine Preferred Income Fund Incorporated","symbol":"PFD"},{"name":"Flaherty & Crumrine Preferred Income Opportunity Fund Inc","symbol":"PFO"},{"name":"Flaherty & Crumrine Preferred Securities Income Fund Inc","symbol":"FFC"},{"name":"Flaherty & Crumrine Total Return Fund Inc","symbol":"FLC"},{"name":"FleetCor Technologies, Inc.","symbol":"FLT"},{"name":"Fleetmatics Group PLC","symbol":"FLTX"},{"name":"Flotek Industries, Inc.","symbol":"FTK"},{"name":"Flowers Foods, Inc.","symbol":"FLO"},{"name":"Flowserve Corporation","symbol":"FLS"},{"name":"Fluor Corporation","symbol":"FLR"},{"name":"Fly Leasing Limited","symbol":"FLY"},{"name":"FMC Corporation","symbol":"FMC"},{"name":"FMC Technologies, Inc.","symbol":"FTI"},{"name":"Fomento Economico Mexicano S.A.B. de C.V.","symbol":"FMX"},{"name":"Foot Locker, Inc.","symbol":"FL"},{"name":"Ford Motor Company","symbol":"F"},{"name":"Foresight Energy LP","symbol":"FELP"},{"name":"Forest City Enterprises Inc","symbol":"FCE.A"},{"name":"Forest City Enterprises Inc","symbol":"FCE.B"},{"name":"Forestar Group Inc","symbol":"FOR"},{"name":"Fort Dearborn Income Securities, Inc.","symbol":"FDI"},{"name":"Fortress Investment Group LLC","symbol":"FIG"},{"name":"Fortress Transportation and Infrastructure Investors LLC","symbol":"FTAI"},{"name":"Fortuna Silver Mines Inc.","symbol":"FSM"},{"name":"Fortune Brands Home & Security, Inc.","symbol":"FBHS"},{"name":"Forum Energy Technologies, Inc.","symbol":"FET"},{"name":"Four Corners Property Trust, Inc.","symbol":"FCPT"},{"name":"Franco-Nevada Corporation","symbol":"FNV"},{"name":"Franklin Covey Company","symbol":"FC"},{"name":"Franklin Financial Network, Inc.","symbol":"FSB"},{"name":"Franklin Resources, Inc.","symbol":"BEN"},{"name":"Franklin Universal Trust","symbol":"FT"},{"name":"Frank&#39;s International N.V.","symbol":"FI"},{"name":"Freeport-McMoran, Inc.","symbol":"FCX"},{"name":"Freescale Semiconductor, Ltd.","symbol":"FSL"},{"name":"Fresenius Medical Care Corporation","symbol":"FMS"},{"name":"Fresh Del Monte Produce, Inc.","symbol":"FDP"},{"name":"Frontline Ltd.","symbol":"FRO"},{"name":"FS Investment Corporation","symbol":"FSIC"},{"name":"FTI Consulting, Inc.","symbol":"FCN"},{"name":"Furmanite Corporation","symbol":"FRM"},{"name":"FutureFuel Corp.","symbol":"FF"},{"name":"FXCM Inc.","symbol":"FXCM"},{"name":"Gabelli Convertible and Income Securities Fund, Inc. (The)","symbol":"GCV"},{"name":"Gabelli Convertible and Income Securities Fund, Inc. (The)","symbol":"GCV^B"},{"name":"Gabelli Dividend","symbol":"GDV"},{"name":"Gabelli Dividend","symbol":"GDV^A"},{"name":"Gabelli Dividend","symbol":"GDV^D"},{"name":"Gabelli Equity Trust, Inc. (The)","symbol":"GAB"},{"name":"Gabelli Equity Trust, Inc. (The)","symbol":"GAB^D"},{"name":"Gabelli Equity Trust, Inc. (The)","symbol":"GAB^G"},{"name":"Gabelli Equity Trust, Inc. (The)","symbol":"GAB^H"},{"name":"Gabelli Global Small and Mid Cap Value Trust (The)","symbol":"GGZ"},{"name":"Gabelli Multi-Media Trust Inc. (The)","symbol":"GGT"},{"name":"Gabelli Multi-Media Trust Inc. (The)","symbol":"GGT^B"},{"name":"Gabelli Utility Trust (The)","symbol":"GUT"},{"name":"Gabelli Utility Trust (The)","symbol":"GUT^A"},{"name":"Gafisa SA","symbol":"GFA"},{"name":"GAIN Capital Holdings, Inc.","symbol":"GCAP"},{"name":"Gamco Investors, Inc.","symbol":"GBL"},{"name":"Gamco Investors, Inc.","symbol":"GBL$"},{"name":"GAMCO Natural Resources, Gold & Income Tust","symbol":"GNT"},{"name":"Gamestop Corporation","symbol":"GME"},{"name":"Gap, Inc. (The)","symbol":"GPS"},{"name":"Gartner, Inc.","symbol":"IT"},{"name":"GasLog LP.","symbol":"GLOG"},{"name":"GasLog LP.","symbol":"GLOG^A"},{"name":"GasLog Partners LP","symbol":"GLOP"},{"name":"GATX Corporation","symbol":"GMT"},{"name":"Gazit-Globe Ltd.","symbol":"GZT"},{"name":"Genco Shipping & Trading Limited Warrants Expiring 12/31/2021","symbol":"GNK"},{"name":"Gener8 Maritime, Inc.","symbol":"GNRT"},{"name":"Generac Holdlings Inc.","symbol":"GNRC"},{"name":"General American Investors, Inc.","symbol":"GAM"},{"name":"General American Investors, Inc.","symbol":"GAM^B"},{"name":"General Cable Corporation","symbol":"BGC"},{"name":"General Dynamics Corporation","symbol":"GD"},{"name":"General Electric Capital Corporation","symbol":"GEH"},{"name":"General Electric Capital Corporation","symbol":"GEK"},{"name":"General Electric Company","symbol":"GE"},{"name":"General Electric Company","symbol":"GEB"},{"name":"General Growth Properties, Inc.","symbol":"GGP"},{"name":"General Growth Properties, Inc.","symbol":"GGP^A"},{"name":"General Mills, Inc.","symbol":"GIS"},{"name":"General Motors Company","symbol":"GM"},{"name":"General Motors Company","symbol":"GM.WS.A"},{"name":"General Motors Company","symbol":"GM.WS.B"},{"name":"General Motors Company","symbol":"GM.WS.C"},{"name":"General Steel Holdings, Inc.","symbol":"GSI"},{"name":"Genesco Inc.","symbol":"GCO"},{"name":"Genesee & Wyoming, Inc.","symbol":"GWR"},{"name":"Genesis Energy, L.P.","symbol":"GEL"},{"name":"Genesis Healthcare, Inc.","symbol":"GEN"},{"name":"Genie Energy Ltd.","symbol":"GNE"},{"name":"Genie Energy Ltd.","symbol":"GNE^A"},{"name":"Genpact Limited","symbol":"G"},{"name":"Genuine Parts Company","symbol":"GPC"},{"name":"Genworth Financial Inc","symbol":"GNW"},{"name":"Geo Group Inc (The)","symbol":"GEO"},{"name":"Geopark Ltd","symbol":"GPRK"},{"name":"Georgia Power Company","symbol":"GPE^A"},{"name":"Gerdau S.A.","symbol":"GGB"},{"name":"Getty Realty Corporation","symbol":"GTY"},{"name":"Gigamon Inc.","symbol":"GIMO"},{"name":"Gildan Activewear, Inc.","symbol":"GIL"},{"name":"Glatfelter","symbol":"GLT"},{"name":"Glaukos Corporation","symbol":"GKOS"},{"name":"GlaxoSmithKline PLC","symbol":"GSK"},{"name":"Global Brass and Copper Holdings, Inc.","symbol":"BRSS"},{"name":"Global High Income Dollar Fund, Inc.","symbol":"GHI"},{"name":"Global Net Lease, Inc.","symbol":"GNL"},{"name":"Global Partners LP","symbol":"GLP"},{"name":"Global Payments Inc.","symbol":"GPN"},{"name":"Global Power Equipment Group Inc","symbol":"GLPW"},{"name":"Global Ship Lease, Inc.","symbol":"GSL"},{"name":"Global Ship Lease, Inc.","symbol":"GSL^B"},{"name":"Globant S.A.","symbol":"GLOB"},{"name":"Globus Medical, Inc.","symbol":"GMED"},{"name":"GNC Holdings, Inc.","symbol":"GNC"},{"name":"GoDaddy Inc.","symbol":"GDDY"},{"name":"Gol Linhas Aereas Inteligentes S.A.","symbol":"GOL"},{"name":"Gold Fields Limited","symbol":"GFI"},{"name":"Goldcorp Inc.","symbol":"GG"},{"name":"Goldman Sachs BDC, Inc.","symbol":"GSBD"},{"name":"Goldman Sachs Group, Inc. (The)","symbol":"GS"},{"name":"Goldman Sachs Group, Inc. (The)","symbol":"GS^A"},{"name":"Goldman Sachs Group, Inc. (The)","symbol":"GS^B"},{"name":"Goldman Sachs Group, Inc. (The)","symbol":"GS^C"},{"name":"Goldman Sachs Group, Inc. (The)","symbol":"GS^D"},{"name":"Goldman Sachs Group, Inc. (The)","symbol":"GS^I"},{"name":"Goldman Sachs Group, Inc. (The)","symbol":"GS^J"},{"name":"Goldman Sachs Group, Inc. (The)","symbol":"GS^K"},{"name":"Goldman Sachs Group, Inc. (The)","symbol":"GSJ"},{"name":"Goldman Sachs Group, Inc. (The)","symbol":"TFG"},{"name":"Goldman Sachs MLP Energy Renaissance Fund","symbol":"GER"},{"name":"Goldman Sachs MLP Income Opportunities Fund","symbol":"GMZ"},{"name":"Goodrich Petroleum Corporation","symbol":"GDP"},{"name":"Goodrich Petroleum Corporation","symbol":"GDP^C"},{"name":"Goodrich Petroleum Corporation","symbol":"GDP^D"},{"name":"Government Properties Income Trust","symbol":"GOV"},{"name":"GP Strategies Corporation","symbol":"GPX"},{"name":"Graco Inc.","symbol":"GGG"},{"name":"Graham Corporation","symbol":"GHM"},{"name":"Graham Holdings Company","symbol":"GHC"},{"name":"Gramercy Property Trust Inc.","symbol":"GPT"},{"name":"Gramercy Property Trust Inc.","symbol":"GPT^B"},{"name":"Grana y Montero S.A.A.","symbol":"GRAM"},{"name":"Granite Construction Incorporated","symbol":"GVA"},{"name":"Granite Real Estate Inc.","symbol":"GRP.U"},{"name":"Graphic Packaging Holding Company","symbol":"GPK"},{"name":"Gray Television, Inc.","symbol":"GTN"},{"name":"Gray Television, Inc.","symbol":"GTN.A"},{"name":"Great Ajax Corp.","symbol":"AJX"},{"name":"Great Plains Energy Inc","symbol":"GXP"},{"name":"Great Plains Energy Inc","symbol":"GXP^A"},{"name":"Great Plains Energy Inc","symbol":"GXP^D"},{"name":"Great Plains Energy Inc","symbol":"GXP^E"},{"name":"Great Western Bancorp, Inc.","symbol":"GWB"},{"name":"Greatbatch, Inc.","symbol":"GB"},{"name":"Green Dot Corporation","symbol":"GDOT"},{"name":"Greenbrier Companies, Inc. (The)","symbol":"GBX"},{"name":"Greenhill & Co., Inc.","symbol":"GHL"},{"name":"Greif Bros. Corporation","symbol":"GEF"},{"name":"Greif Bros. Corporation","symbol":"GEF.B"},{"name":"Griffon Corporation","symbol":"GFF"},{"name":"Group 1 Automotive, Inc.","symbol":"GPI"},{"name":"GrubHub Inc.","symbol":"GRUB"},{"name":"Grupo Aeroportuario Del Pacifico, S.A. de C.V.","symbol":"PAC"},{"name":"Grupo Aeroportuario del Sureste, S.A. de C.V.","symbol":"ASR"},{"name":"Grupo Aval Acciones y Valores S.A.","symbol":"AVAL"},{"name":"Grupo Financiero Santander Mexico S.A. B. de C.V.","symbol":"BSMX"},{"name":"Grupo Televisa S.A.","symbol":"TV"},{"name":"GTT Communications, Inc.","symbol":"GTT"},{"name":"Guangshen Railway Company Limited","symbol":"GSH"},{"name":"Guess?, Inc.","symbol":"GES"},{"name":"Guggenheim Build America Bonds Managed Duration Trust","symbol":"GBAB"},{"name":"Guggenheim Credit Allocation Fund","symbol":"GGM"},{"name":"Guggenheim Enhanced Equity Income Fund","symbol":"GPM"},{"name":"Guggenheim Enhanced Equity Strategy Fund","symbol":"GGE"},{"name":"Guggenheim Equal Weight Enhanced Equity Income Fund","symbol":"GEQ"},{"name":"Guggenheim Strategic Opportunities Fund","symbol":"GOF"},{"name":"Guidewire Software, Inc.","symbol":"GWRE"},{"name":"Gulf Power Company","symbol":"GUA"},{"name":"GulfMark Offshore, Inc.","symbol":"GLF"},{"name":"H&R Block, Inc.","symbol":"HRB"},{"name":"H. B. Fuller Company","symbol":"FUL"},{"name":"Haemonetics Corporation","symbol":"HAE"},{"name":"Halcon Resources Corporation","symbol":"HK"},{"name":"Halliburton Company","symbol":"HAL"},{"name":"Halyard Health, Inc.","symbol":"HYH"},{"name":"Hanesbrands Inc.","symbol":"HBI"},{"name":"Hanger, Inc.","symbol":"HGR"},{"name":"Hannon Armstrong Sustainable Infrastructure Capital, Inc.","symbol":"HASI"},{"name":"Harley-Davidson, Inc.","symbol":"HOG"},{"name":"Harman International Industries, Incorporated","symbol":"HAR"},{"name":"Harmony Gold Mining Company Limited","symbol":"HMY"},{"name":"Harris Corporation","symbol":"HRS"},{"name":"Harsco Corporation","symbol":"HSC"},{"name":"Harte-Hanks, Inc.","symbol":"HHS"},{"name":"Hartford Financial Services Group, Inc. (The)","symbol":"HGH"},{"name":"Hartford Financial Services Group, Inc. (The)","symbol":"HIG"},{"name":"Hartford Financial Services Group, Inc. (The)","symbol":"HIG.WS"},{"name":"Harvest Natural Resources Inc","symbol":"HNR"},{"name":"Hatteras Financial Corp","symbol":"HTS"},{"name":"Hatteras Financial Corp","symbol":"HTS^A"},{"name":"Haverty Furniture Companies, Inc.","symbol":"HVT"},{"name":"Haverty Furniture Companies, Inc.","symbol":"HVT.A"},{"name":"Hawaiian Electric Industries, Inc.","symbol":"HE"},{"name":"Hawaiian Electric Industries, Inc.","symbol":"HE^U"},{"name":"HCA Holdings, Inc.","symbol":"HCA"},{"name":"HCI Group, Inc.","symbol":"HCI"},{"name":"HCI Group, Inc.","symbol":"HCJ"},{"name":"HCP, Inc.","symbol":"HCP"},{"name":"HDFC Bank Limited","symbol":"HDB"},{"name":"Headwaters Incorporated","symbol":"HW"},{"name":"Health Net Inc.","symbol":"HNT"},{"name":"Healthcare Realty Trust Incorporated","symbol":"HR"},{"name":"Healthcare Trust of America, Inc.","symbol":"HTA"},{"name":"HealthSouth Corporation","symbol":"HLS"},{"name":"Heartland Payment Systems, Inc.","symbol":"HPY"},{"name":"Hecla Mining Company","symbol":"HL"},{"name":"Hecla Mining Company","symbol":"HL^B"},{"name":"Heico Corporation","symbol":"HEI"},{"name":"Heico Corporation","symbol":"HEI.A"},{"name":"Helix Energy Solutions Group, Inc.","symbol":"HLX"},{"name":"Helmerich & Payne, Inc.","symbol":"HP"},{"name":"Herbalife LTD.","symbol":"HLF"},{"name":"Hercules Technology Growth Capital, Inc.","symbol":"HTGC"},{"name":"Hercules Technology Growth Capital, Inc.","symbol":"HTGX"},{"name":"Hercules Technology Growth Capital, Inc.","symbol":"HTGY"},{"name":"Hercules Technology Growth Capital, Inc.","symbol":"HTGZ"},{"name":"Heritage Insurance Holdings, Inc.","symbol":"HRTG"},{"name":"Hersha Hospitality Trust","symbol":"HT"},{"name":"Hersha Hospitality Trust","symbol":"HT^B"},{"name":"Hersha Hospitality Trust","symbol":"HT^C"},{"name":"Hershey Company (The)","symbol":"HSY"},{"name":"Hertz Global Holdings, Inc","symbol":"HTZ"},{"name":"Hess Corporation","symbol":"HES"},{"name":"Hewlett Packard Enterprise Company","symbol":"HPE"},{"name":"Hexcel Corporation","symbol":"HXL"},{"name":"HFF, Inc.","symbol":"HF"},{"name":"HHGregg, Inc.","symbol":"HGG"},{"name":"Hi-Crush Partners LP","symbol":"HCLP"},{"name":"Higher One Holdings, Inc.","symbol":"ONE"},{"name":"Highwoods Properties, Inc.","symbol":"HIW"},{"name":"Hill International, Inc.","symbol":"HIL"},{"name":"Hillenbrand Inc","symbol":"HI"},{"name":"Hill-Rom Holdings Inc","symbol":"HRC"},{"name":"Hilltop Holdings Inc.","symbol":"HTH"},{"name":"Hilton Worldwide Holdings Inc.","symbol":"HLT"},{"name":"HNI Corporation","symbol":"HNI"},{"name":"Hoegh LNG Partners LP","symbol":"HMLP"},{"name":"Holly Energy Partners, L.P.","symbol":"HEP"},{"name":"HollyFrontier Corporation","symbol":"HFC"},{"name":"Home Depot, Inc. (The)","symbol":"HD"},{"name":"Honda Motor Company, Ltd.","symbol":"HMC"},{"name":"Honeywell International Inc.","symbol":"HON"},{"name":"Horace Mann Educators Corporation","symbol":"HMN"},{"name":"Horizon Global Corporation","symbol":"HZN"},{"name":"Horizon Technology Finance Corporation","symbol":"HTF"},{"name":"Hormel Foods Corporation","symbol":"HRL"},{"name":"Hornbeck Offshore Services","symbol":"HOS"},{"name":"Hospitality Properites Trust","symbol":"HPT"},{"name":"Hospitality Properites Trust","symbol":"HPT^D"},{"name":"Host Hotels & Resorts, Inc.","symbol":"HST"},{"name":"Houlihan Lokey, Inc.","symbol":"HLI"},{"name":"Household Finance Corp","symbol":"HSFC^B"},{"name":"Hovnanian Enterprises Inc","symbol":"HOV"},{"name":"Howard Hughes Corporation (The)","symbol":"HHC"},{"name":"HP Inc.","symbol":"HPQ"},{"name":"HRG Group, Inc.","symbol":"HRG"},{"name":"HSBC Holdings plc","symbol":"HSBC"},{"name":"HSBC Holdings plc","symbol":"HSBC^A"},{"name":"HSBC Holdings plc","symbol":"HSEA"},{"name":"HSBC Holdings plc","symbol":"HSEB"},{"name":"HSBC USA, Inc.","symbol":"HUSI^F"},{"name":"HSBC USA, Inc.","symbol":"HUSI^G"},{"name":"HSBC USA, Inc.","symbol":"HUSI^H"},{"name":"Huaneng Power International, Inc.","symbol":"HNP"},{"name":"Hubbell Inc","symbol":"HUB.A"},{"name":"Hubbell Inc","symbol":"HUB.B"},{"name":"HubSpot, Inc.","symbol":"HUBS"},{"name":"HudBay Minerals Inc","symbol":"HBM"},{"name":"HudBay Minerals Inc","symbol":"HBM.WS"},{"name":"Hudson Pacific Properties, Inc.","symbol":"HPP"},{"name":"Hudson Pacific Properties, Inc.","symbol":"HPP^B.CL"},{"name":"Hugoton Royalty Trust","symbol":"HGT"},{"name":"Humana Inc.","symbol":"HUM"},{"name":"Huntington Ingalls Industries, Inc.","symbol":"HII"},{"name":"Huntsman Corporation","symbol":"HUN"},{"name":"Hyatt Hotels Corporation","symbol":"H"},{"name":"Hyster-Yale Materials Handling, Inc.","symbol":"HY"},{"name":"Iamgold Corporation","symbol":"IAG"},{"name":"ICICI Bank Limited","symbol":"IBN"},{"name":"IDACORP, Inc.","symbol":"IDA"},{"name":"IDEX Corporation","symbol":"IEX"},{"name":"IDT Corporation","symbol":"IDT"},{"name":"IHS Inc.","symbol":"IHS"},{"name":"Illinois Tool Works Inc.","symbol":"ITW"},{"name":"Imation Corporation","symbol":"IMN"},{"name":"Imax Corporation","symbol":"IMAX"},{"name":"Imperva, Inc.","symbol":"IMPV"},{"name":"Imprivata, Inc.","symbol":"IMPR"},{"name":"IMS Health Holdings, Inc.","symbol":"IMS"},{"name":"Independence Contract Drilling, Inc.","symbol":"ICD"},{"name":"Independence Holding Company","symbol":"IHC"},{"name":"India Fund, Inc. (The)","symbol":"IFN"},{"name":"Industrias Bachoco, S.A. de C.V.","symbol":"IBA"},{"name":"Infoblox Inc.","symbol":"BLOX"},{"name":"Infosys Limited","symbol":"INFY"},{"name":"InfraREIT, Inc.","symbol":"HIFR"},{"name":"ING Group, N.V.","symbol":"IND"},{"name":"ING Group, N.V.","symbol":"ING"},{"name":"ING Group, N.V.","symbol":"INZ"},{"name":"ING Group, N.V.","symbol":"ISF"},{"name":"ING Group, N.V.","symbol":"ISG"},{"name":"ING Group, N.V.","symbol":"ISP"},{"name":"Ingersoll-Rand plc (Ireland)","symbol":"IR"},{"name":"Ingram Micro Inc.","symbol":"IM"},{"name":"Ingredion Incorporated","symbol":"INGR"},{"name":"Inland Real Estate Corporation","symbol":"IRC"},{"name":"Inland Real Estate Corporation","symbol":"IRC^A"},{"name":"Inland Real Estate Corporation","symbol":"IRC^B"},{"name":"Inphi Corporation","symbol":"IPHI"},{"name":"Insperity, Inc.","symbol":"NSP"},{"name":"Installed Building Products, Inc.","symbol":"IBP"},{"name":"Instructure, Inc.","symbol":"INST"},{"name":"Intelsat S.A.","symbol":"I"},{"name":"Intelsat S.A.","symbol":"I^A"},{"name":"Intercontinental Exchange Inc.","symbol":"ICE"},{"name":"Intercontinental Hotels Group","symbol":"IHG"},{"name":"Internationa Flavors & Fragrances, Inc.","symbol":"IFF"},{"name":"International Business Machines Corporation","symbol":"IBM"},{"name":"International Game Technology","symbol":"IGT"},{"name":"International Paper Company","symbol":"IP"},{"name":"International Shipholding Corporation","symbol":"ISH"},{"name":"International Shipholding Corporation","symbol":"ISH^A"},{"name":"International Shipholding Corporation","symbol":"ISH^B"},{"name":"InterOil Corporation","symbol":"IOC"},{"name":"Interpublic Group of Companies, Inc. (The)","symbol":"IPG"},{"name":"Interstate Power and Light Company","symbol":"IPL^D"},{"name":"InterXion Holding N.V.","symbol":"INXN"},{"name":"IntraLinks Holdings, Inc.","symbol":"IL"},{"name":"Intrawest Resorts Holdings, Inc.","symbol":"SNOW"},{"name":"Intrepid Potash, Inc","symbol":"IPI"},{"name":"Intrexon Corporation","symbol":"XON"},{"name":"Invacare Corporation","symbol":"IVC"},{"name":"InvenSense, Inc.","symbol":"INVN"},{"name":"Invesco Bond Fund","symbol":"VBF"},{"name":"Invesco California Value Municipal Income Trust","symbol":"VCV"},{"name":"Invesco Credit Opportunities Fund","symbol":"VTA"},{"name":"Invesco High Income Trust II","symbol":"VLT"},{"name":"INVESCO MORTGAGE CAPITAL INC","symbol":"IVR"},{"name":"INVESCO MORTGAGE CAPITAL INC","symbol":"IVR^B"},{"name":"Invesco Mortgage Capital Inc.","symbol":"IVR^A"},{"name":"Invesco Municipal Income Opportunities Trust","symbol":"OIA"},{"name":"Invesco Municipal Opportunity Trust","symbol":"VMO"},{"name":"Invesco Municipal Trust","symbol":"VKQ"},{"name":"Invesco Pennsylvania Value Municipal Income Trust","symbol":"VPV"},{"name":"Invesco Plc","symbol":"IVZ"},{"name":"Invesco Quality Municipal Income Trust","symbol":"IQI"},{"name":"Invesco Senior Income Trust","symbol":"VVR"},{"name":"Invesco Trust  for Investment Grade New York Municipal","symbol":"VTN"},{"name":"Invesco Trust for Investment Grade Municipals","symbol":"VGM"},{"name":"Invesco Value Municipal Income Trust","symbol":"IIM"},{"name":"Investment Technology Group, Inc.","symbol":"ITG"},{"name":"Investors Real Estate Trust","symbol":"IRET"},{"name":"Investors Real Estate Trust","symbol":"IRET^"},{"name":"Investors Real Estate Trust","symbol":"IRET^B"},{"name":"Invitae Corporation","symbol":"NVTA"},{"name":"Ion Geophysical Corporation","symbol":"IO"},{"name":"Iron Mountain Incorporated","symbol":"IRM"},{"name":"IRSA Inversiones Y Representaciones S.A.","symbol":"IRS"},{"name":"Israel Chemicals Shs","symbol":"ICL"},{"name":"iStar Financial Inc.","symbol":"STAR"},{"name":"iStar Financial Inc.","symbol":"STAR^D"},{"name":"iStar Financial Inc.","symbol":"STAR^E"},{"name":"iStar Financial Inc.","symbol":"STAR^F"},{"name":"iStar Financial Inc.","symbol":"STAR^G"},{"name":"iStar Financial Inc.","symbol":"STAR^I"},{"name":"Itau Unibanco Banco Holding SA","symbol":"ITUB"},{"name":"ITC Holdings Corp.","symbol":"ITC"},{"name":"ITT Corporation","symbol":"ITT"},{"name":"ITT Educational Services, Inc.","symbol":"ESI"},{"name":"Ivy High Income Opportunities Fund","symbol":"IVH"},{"name":"J P Morgan Chase & Co","symbol":"JPM"},{"name":"J P Morgan Chase & Co","symbol":"JPM.WS"},{"name":"J P Morgan Chase & Co","symbol":"JPM^A"},{"name":"J P Morgan Chase & Co","symbol":"JPM^B"},{"name":"J P Morgan Chase & Co","symbol":"JPM^D"},{"name":"J P Morgan Chase & Co","symbol":"JPM^E"},{"name":"J P Morgan Chase & Co","symbol":"JPM^F"},{"name":"J P Morgan Chase & Co","symbol":"JPM^G"},{"name":"J P Morgan Chase & Co","symbol":"JPM^H"},{"name":"J. Alexander&#39;s Holdings, Inc.","symbol":"JAX"},{"name":"J.C. Penney Company, Inc. Holding Company","symbol":"JCP"},{"name":"J.G. Wentworth Company (The)","symbol":"JGW"},{"name":"J.M. Smucker Company (The)","symbol":"SJM"},{"name":"Jabil Circuit, Inc.","symbol":"JBL"},{"name":"Jacobs Engineering Group Inc.","symbol":"JEC"},{"name":"James Hardie Industries plc.","symbol":"JHX"},{"name":"Janus Capital Group, Inc","symbol":"JNS"},{"name":"Japan Smaller Capitalization Fund Inc","symbol":"JOF"},{"name":"Jarden Corporation","symbol":"JAH"},{"name":"Javelin Mortgage Investment Corp.","symbol":"JMI"},{"name":"Jernigan Capital, Inc.","symbol":"JCAP"},{"name":"JinkoSolar Holding Company Limited","symbol":"JKS"},{"name":"JMP Group LLC","symbol":"JMP"},{"name":"JMP Group LLC","symbol":"JMPB"},{"name":"JMP Group LLC","symbol":"JMPC"},{"name":"John Bean Technologies Corporation","symbol":"JBT"},{"name":"John Hancock Financial Opportunities Fund","symbol":"BTO"},{"name":"John Hancock Hedged Equity & Income Fund","symbol":"HEQ"},{"name":"John Hancock Income Securities Trust","symbol":"JHS"},{"name":"John Hancock Investors Trust","symbol":"JHI"},{"name":"John Hancock Pfd Income Fund II","symbol":"HPF"},{"name":"John Hancock Preferred Income Fund","symbol":"HPI"},{"name":"John Hancock Preferred Income Fund III","symbol":"HPS"},{"name":"John Hancock Premium Dividend Fund","symbol":"PDT"},{"name":"John Hancock Tax Advantaged Dividend Income Fund","symbol":"HTD"},{"name":"John Hancock Tax-Advantaged Global Shareholder Yield Fund","symbol":"HTY"},{"name":"John Wiley & Sons, Inc.","symbol":"JW.A"},{"name":"John Wiley & Sons, Inc.","symbol":"JW.B"},{"name":"Johnson & Johnson","symbol":"JNJ"},{"name":"Johnson Controls, Inc.","symbol":"JCI"},{"name":"Jones Energy, Inc.","symbol":"JONE"},{"name":"Jones Lang LaSalle Incorporated","symbol":"JLL"},{"name":"Journal Media Group, Inc.","symbol":"JMG"},{"name":"Joy Global Inc.","symbol":"JOY"},{"name":"JP Energy Partners LP","symbol":"JPEP"},{"name":"JPMorgan China Region Fund, Inc.","symbol":"JFC"},{"name":"Jumei International Holding Limited","symbol":"JMEI"},{"name":"Juniper Networks, Inc.","symbol":"JNPR"},{"name":"Jupai Holdings Limited","symbol":"JP"},{"name":"Just Energy Group, Inc.","symbol":"JE"},{"name":"K12 Inc","symbol":"LRN"},{"name":"Kadant Inc","symbol":"KAI"},{"name":"Kaman Corporation","symbol":"KAMN"},{"name":"Kansas City Southern","symbol":"KSU"},{"name":"Kansas City Southern","symbol":"KSU^"},{"name":"KapStone Paper and Packaging Corporation","symbol":"KS"},{"name":"KAR Auction Services, Inc","symbol":"KAR"},{"name":"Kate Spade & Company","symbol":"KATE"},{"name":"Kayne Anderson Energy Development Company","symbol":"KED"},{"name":"Kayne Anderson Energy Total Return Fund, Inc.","symbol":"KYE"},{"name":"Kayne Anderson Midstream Energy Fund, Inc","symbol":"KMF"},{"name":"Kayne Anderson MLP Investment Company","symbol":"KYN"},{"name":"Kayne Anderson MLP Investment Company","symbol":"KYN^E"},{"name":"Kayne Anderson MLP Investment Company","symbol":"KYN^F"},{"name":"Kayne Anderson MLP Investment Company","symbol":"KYN^G"},{"name":"KB Financial Group Inc","symbol":"KB"},{"name":"KB Home","symbol":"KBH"},{"name":"KBR, Inc.","symbol":"KBR"},{"name":"KCAP Financial, Inc.","symbol":"KAP"},{"name":"KCG Holdings, Inc.","symbol":"KCG"},{"name":"Kellogg Company","symbol":"K"},{"name":"Kemet Corporation","symbol":"KEM"},{"name":"Kemper Corporation","symbol":"KMPA"},{"name":"Kemper Corporation","symbol":"KMPR"},{"name":"Kennametal Inc.","symbol":"KMT"},{"name":"Kennedy-Wilson Holdings Inc.","symbol":"KW"},{"name":"Kennedy-Wilson Holdings Inc.","symbol":"KWN"},{"name":"Kenon Holdings Ltd.","symbol":"KEN"},{"name":"Key Energy Services, Inc.","symbol":"KEG"},{"name":"KeyCorp","symbol":"KEY"},{"name":"KeyCorp","symbol":"KEY^G"},{"name":"Keysight Technologies Inc.","symbol":"KEYS"},{"name":"Kilroy Realty Corporation","symbol":"KRC"},{"name":"Kilroy Realty Corporation","symbol":"KRC^G"},{"name":"Kilroy Realty Corporation","symbol":"KRC^H"},{"name":"Kimberly-Clark Corporation","symbol":"KMB"},{"name":"Kimco Realty Corporation","symbol":"KIM"},{"name":"Kimco Realty Corporation","symbol":"KIM^I"},{"name":"Kimco Realty Corporation","symbol":"KIM^J"},{"name":"Kimco Realty Corporation","symbol":"KIM^K"},{"name":"Kinder Morgan, Inc.","symbol":"KMI"},{"name":"Kinder Morgan, Inc.","symbol":"KMI.WS"},{"name":"Kinder Morgan, Inc.","symbol":"KMI^A"},{"name":"Kindred Healthcare, Inc.","symbol":"KND"},{"name":"King Digital Entertainment plc","symbol":"KING"},{"name":"Kingsway Financial Services, Inc.","symbol":"KFS"},{"name":"Kinross Gold Corporation","symbol":"KGC"},{"name":"Kirby Corporation","symbol":"KEX"},{"name":"Kite Realty Group Trust","symbol":"KRG"},{"name":"Kite Realty Group Trust","symbol":"KRG^A.CL"},{"name":"KKR & Co. L.P.","symbol":"KKR"},{"name":"KKR Financial Holdings LLC","symbol":"KFH"},{"name":"KKR Financial Holdings LLC","symbol":"KFI"},{"name":"KKR Financial Holdings LLC","symbol":"KFN^"},{"name":"KKR Income Opportunities Fund","symbol":"KIO"},{"name":"KMG Chemicals, Inc.","symbol":"KMG"},{"name":"Knight Transportation, Inc.","symbol":"KNX"},{"name":"Knoll, Inc.","symbol":"KNL"},{"name":"KNOT Offshore Partners LP","symbol":"KNOP"},{"name":"Knowles Corporation","symbol":"KN"},{"name":"Kohl&#39;s Corporation","symbol":"KSS"},{"name":"Koninklijke Philips N.V.","symbol":"PHG"},{"name":"Koppers Holdings Inc.","symbol":"KOP"},{"name":"Korea Electric Power Corporation","symbol":"KEP"},{"name":"Korea Equity Fund, Inc.","symbol":"KEF"},{"name":"Korea Fund, Inc. (The)","symbol":"KF"},{"name":"Korn/Ferry International","symbol":"KFY"},{"name":"Kosmos Energy Ltd.","symbol":"KOS"},{"name":"Kraton Performance Polymers, Inc","symbol":"KRA"},{"name":"Krispy Kreme Doughnuts, Inc.","symbol":"KKD"},{"name":"Kroger Company (The)","symbol":"KR"},{"name":"Kronos Worldwide Inc","symbol":"KRO"},{"name":"KT Corporation","symbol":"KT"},{"name":"Kyocera Corporation","symbol":"KYO"},{"name":"L Brands, Inc.","symbol":"LB"},{"name":"L.S. Starrett Company (The)","symbol":"SCX"},{"name":"L-3 Communications Holdings, Inc.","symbol":"LLL"},{"name":"La Quinta Holdings Inc.","symbol":"LQ"},{"name":"Laboratory Corporation of America Holdings","symbol":"LH"},{"name":"Laclede Group, Inc.","symbol":"LG"},{"name":"Ladder Capital Corp","symbol":"LADR"},{"name":"Landauer, Inc.","symbol":"LDR"},{"name":"Lannett Co Inc","symbol":"LCI"},{"name":"Laredo Petroleum, Inc.","symbol":"LPI"},{"name":"Las Vegas Sands Corp.","symbol":"LVS"},{"name":"LaSalle Hotel Properties","symbol":"LHO"},{"name":"LaSalle Hotel Properties","symbol":"LHO^H"},{"name":"LaSalle Hotel Properties","symbol":"LHO^I"},{"name":"LATAM Airlines Group S.A.","symbol":"LFL"},{"name":"Latin American Discovery Fund, Inc. (The)","symbol":"LDF"},{"name":"Lazard Global Total Return and Income Fund","symbol":"LGI"},{"name":"Lazard Ltd.","symbol":"LAZ"},{"name":"Lazard World Dividend & Income Fund, Inc.","symbol":"LOR"},{"name":"La-Z-Boy Incorporated","symbol":"LZB"},{"name":"Leapfrog Enterprises Inc","symbol":"LF"},{"name":"Lear Corporation","symbol":"LEA"},{"name":"Lee Enterprises, Incorporated","symbol":"LEE"},{"name":"Legg Mason BW Global Income Opportunities Fund Inc.","symbol":"BWG"},{"name":"Legg Mason, Inc.","symbol":"LM"},{"name":"Leggett & Platt, Incorporated","symbol":"LEG"},{"name":"Lehman ABS Corporation","symbol":"CVB"},{"name":"Lehman ABS Corporation","symbol":"JBK"},{"name":"Lehman ABS Corporation","symbol":"KCC"},{"name":"Lehman ABS Corporation","symbol":"KTH"},{"name":"Lehman ABS Corporation","symbol":"KTN"},{"name":"Lehman ABS Corporation","symbol":"KTP"},{"name":"Lehman ABS Corporation","symbol":"XKE"},{"name":"Leidos Holdings, Inc.","symbol":"LDOS"},{"name":"Leju Holdings Limited","symbol":"LEJU"},{"name":"LendingClub Corporation","symbol":"LC"},{"name":"Lennar Corporation","symbol":"LEN"},{"name":"Lennar Corporation","symbol":"LEN.B"},{"name":"Lennox International, Inc.","symbol":"LII"},{"name":"Leucadia National Corporation","symbol":"LUK"},{"name":"Level 3 Communications, Inc.","symbol":"LVLT"},{"name":"Lexington Realty Trust","symbol":"LXP"},{"name":"Lexington Realty Trust","symbol":"LXP^C"},{"name":"Lexmark International, Inc.","symbol":"LXK"},{"name":"LG Display Co., Ltd.","symbol":"LPL"},{"name":"Liberty All-Star Equity Fund","symbol":"USA"},{"name":"Liberty All-Star Growth Fund, Inc.","symbol":"ASG"},{"name":"Liberty Property Trust","symbol":"LPT"},{"name":"LifeLock, Inc.","symbol":"LOCK"},{"name":"LightInTheBox Holding Co., Ltd.","symbol":"LITB"},{"name":"Lincoln National Corporation","symbol":"LNC"},{"name":"Lincoln National Corporation","symbol":"LNC.WS"},{"name":"Lindsay Corporation","symbol":"LNN"},{"name":"LinkedIn Corporation","symbol":"LNKD"},{"name":"Lions Gate Entertainment Corporation","symbol":"LGF"},{"name":"Lithia Motors, Inc.","symbol":"LAD"},{"name":"Live Nation Entertainment, Inc.","symbol":"LYV"},{"name":"Lloyds Banking Group Plc","symbol":"LYG"},{"name":"LMP Capital and Income Fund Inc.","symbol":"SCD"},{"name":"LMP Corporate Loan Fund Inc","symbol":"TLI"},{"name":"LMP Real Estate Income Fund Inc","symbol":"RIT"},{"name":"Lockheed Martin Corporation","symbol":"LMT"},{"name":"Loews Corporation","symbol":"L"},{"name":"Louisiana-Pacific Corporation","symbol":"LPX"},{"name":"Lowe&#39;s Companies, Inc.","symbol":"LOW"},{"name":"Lsb Industries Inc.","symbol":"LXU"},{"name":"LTC Properties, Inc.","symbol":"LTC"},{"name":"Luby&#39;s, Inc.","symbol":"LUB"},{"name":"Lumber Liquidators Holdings, Inc","symbol":"LL"},{"name":"Luxfer Holdings PLC","symbol":"LXFR"},{"name":"Luxoft Holding, Inc.","symbol":"LXFT"},{"name":"Luxottica Group, S.p.A.","symbol":"LUX"},{"name":"Lydall, Inc.","symbol":"LDL"},{"name":"Lyon William Homes","symbol":"WLH"},{"name":"LyondellBasell Industries NV","symbol":"LYB"},{"name":"M&T Bank Corporation","symbol":"MTB"},{"name":"M&T Bank Corporation","symbol":"MTB.WS"},{"name":"M&T Bank Corporation","symbol":"MTB^"},{"name":"M&T Bank Corporation","symbol":"MTB^C"},{"name":"M.D.C. Holdings, Inc.","symbol":"MDC"},{"name":"M/I Homes, Inc.","symbol":"MHO"},{"name":"M/I Homes, Inc.","symbol":"MHO^A"},{"name":"Macerich Company (The)","symbol":"MAC"},{"name":"Mack-Cali Realty Corporation","symbol":"CLI"},{"name":"Macquarie Global Infrastructure Total Return Fund Inc.","symbol":"MGU"},{"name":"Macquarie Infrastructure Company","symbol":"MIC"},{"name":"Macquarie/First Trust Global","symbol":"MFD"},{"name":"Macro Bank Inc.","symbol":"BMA"},{"name":"Macy&#39;s Inc","symbol":"M"},{"name":"Madison Covered Call & Equity Strategy Fund","symbol":"MCN"},{"name":"Madison Strategic Sector Premium Fund","symbol":"MSP"},{"name":"Magellan Midstream Partners L.P.","symbol":"MMP"},{"name":"Magna International, Inc.","symbol":"MGA"},{"name":"MagnaChip Semiconductor Corporation","symbol":"MX"},{"name":"Maiden Holdings, Ltd.","symbol":"MH^A"},{"name":"Maiden Holdings, Ltd.","symbol":"MH^C"},{"name":"Maiden Holdings, Ltd.","symbol":"MHNA"},{"name":"Maiden Holdings, Ltd.","symbol":"MHNB"},{"name":"Maiden Holdings, Ltd.","symbol":"MHNC"},{"name":"Main Street Capital Corporation","symbol":"MAIN"},{"name":"Main Street Capital Corporation","symbol":"MSCA"},{"name":"MainStay DefinedTerm Municipal Opportunities Fund","symbol":"MMD"},{"name":"Mallinckrodt plc","symbol":"MNK"},{"name":"Managed Duration Investment Grade Municipal Fund","symbol":"MZF"},{"name":"Managed High Yield Plus Fund, Inc.","symbol":"HYF"},{"name":"Manchester United Ltd.","symbol":"MANU"},{"name":"Manitowoc Company, Inc. (The)","symbol":"MTW"},{"name":"Manning & Napier, Inc.","symbol":"MN"},{"name":"ManpowerGroup","symbol":"MAN"},{"name":"Manulife Financial Corp","symbol":"MFC"},{"name":"Marathon Oil Corporation","symbol":"MRO"},{"name":"Marathon Petroleum Corporation","symbol":"MPC"},{"name":"Marcus & Millichap, Inc.","symbol":"MMI"},{"name":"Marcus Corporation (The)","symbol":"MCS"},{"name":"Marin Software Incorporated","symbol":"MRIN"},{"name":"Marine Harvest ASA","symbol":"MHG"},{"name":"Marine Products Corporation","symbol":"MPX"},{"name":"MarineMax, Inc.","symbol":"HZO"},{"name":"Markel Corporation","symbol":"MKL"},{"name":"MarkWest Energy Partners, LP","symbol":"MWE"},{"name":"Marriot Vacations Worldwide Corporation","symbol":"VAC"},{"name":"Marsh & McLennan Companies, Inc.","symbol":"MMC"},{"name":"Martha Stewart Living Omnimedia, Inc.","symbol":"MSO"},{"name":"Martin Marietta Materials, Inc.","symbol":"MLM"},{"name":"Masco Corporation","symbol":"MAS"},{"name":"Masonite International Corporation","symbol":"DOOR"},{"name":"MasTec, Inc.","symbol":"MTZ"},{"name":"Mastercard Incorporated","symbol":"MA"},{"name":"Matador Resources Company","symbol":"MTDR"},{"name":"Materion Corporation","symbol":"MTRN"},{"name":"Matson, Inc.","symbol":"MATX"},{"name":"Maui Land & Pineapple Company, Inc.","symbol":"MLP"},{"name":"Maximus, Inc.","symbol":"MMS"},{"name":"MaxLinear, Inc","symbol":"MXL"},{"name":"MaxPoint Interactive, Inc.","symbol":"MXPT"},{"name":"MBIA, Inc.","symbol":"MBI"},{"name":"McClatchy Company (The)","symbol":"MNI"},{"name":"McCormick & Company, Incorporated","symbol":"MKC"},{"name":"McCormick & Company, Incorporated","symbol":"MKC.V"},{"name":"McDermott International, Inc.","symbol":"MDR"},{"name":"McDonald&#39;s Corporation","symbol":"MCD"},{"name":"McEwen Mining Inc.","symbol":"MUX"},{"name":"McGraw Hill Financial, Inc.","symbol":"MHFI"},{"name":"McKesson Corporation","symbol":"MCK"},{"name":"MDU Resources Group, Inc.","symbol":"MDU"},{"name":"Mead Johnson Nutrition Company","symbol":"MJN"},{"name":"Mechel OAO","symbol":"MTL"},{"name":"Mechel OAO","symbol":"MTL^"},{"name":"Media General, Inc.","symbol":"MEG"},{"name":"Medical Properties Trust, Inc.","symbol":"MPW"},{"name":"MEDIFAST INC","symbol":"MED"},{"name":"Medley Capital Corporation","symbol":"MCC"},{"name":"Medley Capital Corporation","symbol":"MCQ"},{"name":"Medley Capital Corporation","symbol":"MCV"},{"name":"Medley Management Inc.","symbol":"MDLY"},{"name":"Mednax, Inc","symbol":"MD"},{"name":"Medtronic plc","symbol":"MDT"},{"name":"Men&#39;s Wearhouse, Inc. (The)","symbol":"MW"},{"name":"Merck & Company, Inc.","symbol":"MRK"},{"name":"Mercury General Corporation","symbol":"MCY"},{"name":"Meredith Corporation","symbol":"MDP"},{"name":"Meritage Corporation","symbol":"MTH"},{"name":"Meritor, Inc.","symbol":"MTOR"},{"name":"Merrill Lynch & Co., Inc.","symbol":"MER^D"},{"name":"Merrill Lynch & Co., Inc.","symbol":"MER^E"},{"name":"Merrill Lynch & Co., Inc.","symbol":"MER^F"},{"name":"Merrill Lynch & Co., Inc.","symbol":"MER^K"},{"name":"Merrill Lynch & Co., Inc.","symbol":"MER^M"},{"name":"Merrill Lynch & Co., Inc.","symbol":"MER^P"},{"name":"Merrill Lynch Depositor, Inc.","symbol":"PIY"},{"name":"Mesa Royalty Trust","symbol":"MTR"},{"name":"Mesabi Trust","symbol":"MSB"},{"name":"Metaldyne Performance Group Inc.","symbol":"MPG"},{"name":"Methode Electronics, Inc.","symbol":"MEI"},{"name":"MetLife, Inc.","symbol":"MET"},{"name":"MetLife, Inc.","symbol":"MET^A"},{"name":"Mettler-Toledo International, Inc.","symbol":"MTD"},{"name":"Mexico Equity and Income Fund, Inc. (The)","symbol":"MXE"},{"name":"Mexico Fund, Inc. (The)","symbol":"MXF"},{"name":"MFA Financial, Inc.","symbol":"MFA"},{"name":"MFA Financial, Inc.","symbol":"MFA^B"},{"name":"MFA Financial, Inc.","symbol":"MFO"},{"name":"MFC Industrial Ltd.","symbol":"MIL"},{"name":"MFS Charter Income Trust","symbol":"MCR"},{"name":"MFS Government Markets Income Trust","symbol":"MGF"},{"name":"MFS Intermediate Income Trust","symbol":"MIN"},{"name":"MFS Multimarket Income Trust","symbol":"MMT"},{"name":"MFS Municipal Income Trust","symbol":"MFM"},{"name":"MFS Special Value Trust","symbol":"MFV"},{"name":"MGIC Investment Corporation","symbol":"MTG"},{"name":"MGM Resorts International","symbol":"MGM"},{"name":"Michael Kors Holdings Limited","symbol":"KORS"},{"name":"Mid-America Apartment Communities, Inc.","symbol":"MAA"},{"name":"Midcoast Energy Partners, L.P.","symbol":"MEP"},{"name":"MidSouth Bancorp","symbol":"MSL"},{"name":"Midstates Petroleum Company, Inc.","symbol":"MPO"},{"name":"Milacron Holdings Corp.","symbol":"MCRN"},{"name":"Miller Industries, Inc.","symbol":"MLR"},{"name":"Miller/Howard High Income Equity Fund","symbol":"HIE"},{"name":"Mindray Medical International Limited","symbol":"MR"},{"name":"Minerals Technologies Inc.","symbol":"MTX"},{"name":"Mississippi Power Company","symbol":"MP^D"},{"name":"Mistras Group Inc","symbol":"MG"},{"name":"Mitsubishi UFJ Financial Group Inc","symbol":"MTU"},{"name":"MiX Telematics Limited","symbol":"MIXT"},{"name":"Mizuho Financial Group, Inc.","symbol":"MFG"},{"name":"Mobile TeleSystems OJSC","symbol":"MBT"},{"name":"Mobileye N.V.","symbol":"MBLY"},{"name":"Model N, Inc.","symbol":"MODN"},{"name":"Modine Manufacturing Company","symbol":"MOD"},{"name":"Moelis & Company","symbol":"MC"},{"name":"Mohawk Industries, Inc.","symbol":"MHK"},{"name":"Molina Healthcare Inc","symbol":"MOH"},{"name":"Molson Coors Brewing  Company","symbol":"TAP"},{"name":"Molson Coors Brewing  Company","symbol":"TAP.A"},{"name":"Monmouth Real Estate Investment Corporation","symbol":"MNR"},{"name":"Monmouth Real Estate Investment Corporation","symbol":"MNR^A"},{"name":"Monmouth Real Estate Investment Corporation","symbol":"MNR^B"},{"name":"Monogram Residential Trust, Inc.","symbol":"MORE"},{"name":"Monsanto Company","symbol":"MON"},{"name":"Monster Worldwide, Inc.","symbol":"MWW"},{"name":"Montgomery Street Income Securities, Inc.","symbol":"MTS"},{"name":"Moody&#39;s Corporation","symbol":"MCO"},{"name":"Moog Inc.","symbol":"MOG.A"},{"name":"Moog Inc.","symbol":"MOG.B"},{"name":"Morgan Stanley","symbol":"MS"},{"name":"Morgan Stanley","symbol":"MS^A"},{"name":"Morgan Stanley","symbol":"MS^E"},{"name":"Morgan Stanley","symbol":"MS^F"},{"name":"Morgan Stanley","symbol":"MS^G"},{"name":"Morgan Stanley","symbol":"MS^I"},{"name":"Morgan Stanley","symbol":"MSK"},{"name":"Morgan Stanley","symbol":"MWG"},{"name":"Morgan Stanley","symbol":"MWO"},{"name":"Morgan Stanley","symbol":"MWR"},{"name":"Morgan Stanley Asia-Pacific Fund, Inc.","symbol":"APF"},{"name":"Morgan Stanley China A Share Fund Inc.","symbol":"CAF"},{"name":"Morgan Stanley Emerging Markets Debt Fund, Inc.","symbol":"MSD"},{"name":"Morgan Stanley Emerging Markets Domestic Debt Fund, Inc.","symbol":"EDD"},{"name":"Morgan Stanley Emerging Markets Fund, Inc.","symbol":"MSF"},{"name":"Morgan Stanley India Investment Fund, Inc.","symbol":"IIF"},{"name":"Mosaic Company (The)","symbol":"MOS"},{"name":"Motorola Solutions, Inc.","symbol":"MSI"},{"name":"Movado Group Inc.","symbol":"MOV"},{"name":"MPLX LP","symbol":"MPLX"},{"name":"MRC Global Inc.","symbol":"MRC"},{"name":"MS Income Securities, Inc.","symbol":"ICB"},{"name":"MS Structured Asset Corp Saturns GE Cap Corp Series 2002-14","symbol":"HJV"},{"name":"MSA Safety Incorporporated","symbol":"MSA"},{"name":"MSC Industrial Direct Company, Inc.","symbol":"MSM"},{"name":"MSCI Inc","symbol":"MSCI"},{"name":"MSG Networks Inc.","symbol":"MSG"},{"name":"MSG Networks Inc.","symbol":"MSGN"},{"name":"Mueller Industries, Inc.","symbol":"MLI"},{"name":"MUELLER WATER PRODUCTS","symbol":"MWA"},{"name":"Multi Packaging Solutions International Limited","symbol":"MPSX"},{"name":"Murphy Oil Corporation","symbol":"MUR"},{"name":"Murphy USA Inc.","symbol":"MUSA"},{"name":"MV Oil Trust","symbol":"MVO"},{"name":"MVC Capital, Inc.","symbol":"MVC"},{"name":"MVC Capital, Inc.","symbol":"MVCB"},{"name":"Myers Industries, Inc.","symbol":"MYE"},{"name":"Nabors Industries Ltd.","symbol":"NBR"},{"name":"NACCO Industries, Inc.","symbol":"NC"},{"name":"Nam Tai Property Inc.","symbol":"NTP"},{"name":"National Bank Holdings Corporation","symbol":"NBHC"},{"name":"National Fuel Gas Company","symbol":"NFG"},{"name":"National Grid Transco, PLC","symbol":"NGG"},{"name":"National Health Investors, Inc.","symbol":"NHI"},{"name":"National Oilwell Varco, Inc.","symbol":"NOV"},{"name":"National Presto Industries, Inc.","symbol":"NPK"},{"name":"National Retail Properties","symbol":"NNN"},{"name":"National Retail Properties","symbol":"NNN^D"},{"name":"National Retail Properties","symbol":"NNN^E"},{"name":"National Steel Company","symbol":"SID"},{"name":"National Storage Affiliates Trust","symbol":"NSA"},{"name":"Nationstar Mortgage Holdings Inc.","symbol":"NSM"},{"name":"Natl Westminster Pfd","symbol":"NW^C"},{"name":"Natural Gas Services Group, Inc.","symbol":"NGS"},{"name":"Natural Grocers by Vitamin Cottage, Inc.","symbol":"NGVC"},{"name":"Natural Resource Partners LP","symbol":"NRP"},{"name":"Natuzzi, S.p.A.","symbol":"NTZ"},{"name":"Nautilus Group, Inc. (The)","symbol":"NLS"},{"name":"Navigant Consulting, Inc.","symbol":"NCI"},{"name":"Navigator Holdings Ltd.","symbol":"NVGS"},{"name":"Navios Maritime Acquisition Corporation","symbol":"NNA"},{"name":"Navios Maritime Holdings Inc.","symbol":"NM"},{"name":"Navios Maritime Holdings Inc.","symbol":"NM^G"},{"name":"Navios Maritime Holdings Inc.","symbol":"NM^H"},{"name":"Navios Maritime Midstream Partners LP","symbol":"NAP"},{"name":"Navios Maritime Partners LP","symbol":"NMM"},{"name":"Navistar International Corporation","symbol":"NAV"},{"name":"Navistar International Corporation","symbol":"NAV^D"},{"name":"NCI Building Systems, Inc.","symbol":"NCS"},{"name":"NCR Corporation","symbol":"NCR"},{"name":"Neenah Paper, Inc.","symbol":"NP"},{"name":"Neff Corporation","symbol":"NEFF"},{"name":"Nelnet, Inc.","symbol":"NNI"},{"name":"NeoPhotonics Corporation","symbol":"NPTN"},{"name":"Netsuite Inc","symbol":"N"},{"name":"Neustar, Inc.","symbol":"NSR"},{"name":"Nevro Corp.","symbol":"NVRO"},{"name":"New America High Income Fund, Inc. (The)","symbol":"HYB"},{"name":"New Germany Fund, Inc. (The)","symbol":"GF"},{"name":"New Home Company Inc. (The)","symbol":"NWHM"},{"name":"New Ireland Fund, Inc. (The)","symbol":"IRL"},{"name":"New Media Investment Group Inc.","symbol":"NEWM"},{"name":"New Mountain Finance Corporation","symbol":"NMFC"},{"name":"New Oriental Education & Technology Group, Inc.","symbol":"EDU"},{"name":"New Relic, Inc.","symbol":"NEWR"},{"name":"New Residential Investment Corp.","symbol":"NRZ"},{"name":"New Senior Investment Group Inc.","symbol":"SNR"},{"name":"New Source Energy Partners L.P.","symbol":"NSLP^A"},{"name":"New York & Company, Inc.","symbol":"NWY"},{"name":"New York Community Bancorp, Inc.","symbol":"NYCB"},{"name":"New York Community Bancorp, Inc.","symbol":"NYCB^U"},{"name":"New York REIT, Inc.","symbol":"NYRT"},{"name":"New York Times Company (The)","symbol":"NYT"},{"name":"Newcastle Investment Corporation","symbol":"NCT"},{"name":"Newcastle Investment Corporation","symbol":"NCT^B"},{"name":"Newcastle Investment Corporation","symbol":"NCT^C"},{"name":"Newcastle Investment Corporation","symbol":"NCT^D"},{"name":"Newell Rubbermaid Inc.","symbol":"NWL"},{"name":"Newfield Exploration Company","symbol":"NFX"},{"name":"NewJersey Resources Corporation","symbol":"NJR"},{"name":"NewMarket Corporation","symbol":"NEU"},{"name":"Newmont Mining Corporation","symbol":"NEM"},{"name":"Newpark Resources, Inc.","symbol":"NR"},{"name":"NexPoint Credit Stategies Fund","symbol":"NHF"},{"name":"NexPoint Residential Trust, Inc.","symbol":"NXRT"},{"name":"NextEra Energy Partners, LP","symbol":"NEP"},{"name":"NextEra Energy, Inc.","symbol":"NEE"},{"name":"NextEra Energy, Inc.","symbol":"NEE^C"},{"name":"NextEra Energy, Inc.","symbol":"NEE^G"},{"name":"NextEra Energy, Inc.","symbol":"NEE^H"},{"name":"NextEra Energy, Inc.","symbol":"NEE^I"},{"name":"NextEra Energy, Inc.","symbol":"NEE^J"},{"name":"NextEra Energy, Inc.","symbol":"NEE^P"},{"name":"NextEra Energy, Inc.","symbol":"NEE^Q"},{"name":"NGL ENERGY PARTNERS LP","symbol":"NGL"},{"name":"Niagara Mohawk Holdings, Inc.","symbol":"NMK^B"},{"name":"Niagara Mohawk Holdings, Inc.","symbol":"NMK^C"},{"name":"Nidec Corporation (Nihon Densan Kabushiki Kaisha)","symbol":"NJ"},{"name":"Nielsen N.V.","symbol":"NLSN"},{"name":"Nike, Inc.","symbol":"NKE"},{"name":"Nimble Storage, Inc.","symbol":"NMBL"},{"name":"Nippon Telegraph and Telephone Corporation","symbol":"NTT"},{"name":"Niska Gas Storage Partners LLC","symbol":"NKA"},{"name":"NiSource, Inc","symbol":"NI"},{"name":"NL Industries, Inc.","symbol":"NL"},{"name":"Noah Holdings Ltd.","symbol":"NOAH"},{"name":"Noble Corporation","symbol":"NE"},{"name":"Noble Energy Inc.","symbol":"NBL"},{"name":"Nokia Corporation","symbol":"NOK"},{"name":"Nomura Holdings Inc ADR","symbol":"NMR"},{"name":"Nord Anglia Education, Inc.","symbol":"NORD"},{"name":"Nordic American Offshore Ltd","symbol":"NAO"},{"name":"Nordic American Tankers Limited","symbol":"NAT"},{"name":"Nordstrom, Inc.","symbol":"JWN"},{"name":"Norfolk Souther Corporation","symbol":"NSC"},{"name":"Nortel Inversora SA","symbol":"NTL"},{"name":"North American Energy Partners, Inc.","symbol":"NOA"},{"name":"North Atlantic Drilling Ltd.","symbol":"NADL"},{"name":"North European Oil Royality Trust","symbol":"NRT"},{"name":"Northern Tier Energy LP","symbol":"NTI"},{"name":"Northrop Grumman Corporation","symbol":"NOC"},{"name":"NorthStar Asset Management Group, Inc.","symbol":"NSAM"},{"name":"NorthStar Realty Europe Corp.","symbol":"NRE"},{"name":"Northstar Realty Finance Corp.","symbol":"NRF"},{"name":"Northstar Realty Finance Corp.","symbol":"NRF^A"},{"name":"Northstar Realty Finance Corp.","symbol":"NRF^B"},{"name":"Northstar Realty Finance Corp.","symbol":"NRF^C"},{"name":"Northstar Realty Finance Corp.","symbol":"NRF^D"},{"name":"Northstar Realty Finance Corp.","symbol":"NRF^E"},{"name":"Northwest Natural Gas Company","symbol":"NWN"},{"name":"NorthWestern Corporation","symbol":"NWE"},{"name":"Novartis AG","symbol":"NVS"},{"name":"Novo Nordisk A/S","symbol":"NVO"},{"name":"NOW Inc.","symbol":"DNOW"},{"name":"NQ Mobile Inc.","symbol":"NQ"},{"name":"NRG Energy, Inc.","symbol":"NRG"},{"name":"NRG Yield, Inc.","symbol":"NYLD"},{"name":"NRG Yield, Inc.","symbol":"NYLD.A"},{"name":"NTT DOCOMO, Inc","symbol":"DCM"},{"name":"Nu Skin Enterprises, Inc.","symbol":"NUS"},{"name":"Nucor Corporation","symbol":"NUE"},{"name":"Nustar Energy L.P.","symbol":"NS"},{"name":"Nustar GP Holdings, LLC","symbol":"NSH"},{"name":"NuStar Logistics, L.P.","symbol":"NSS"},{"name":"Nuveen All Cap Energy MLP Opportunities Fund","symbol":"JMLP"},{"name":"Nuveen AMT-Free Municipal Income Fund","symbol":"NEA"},{"name":"Nuveen AMT-Free Municipal Value Fund","symbol":"NUV"},{"name":"Nuveen AMT-Free Municipal Value Fund","symbol":"NUW"},{"name":"Nuveen Arizona Premium Income Municipal Fund","symbol":"NAZ"},{"name":"Nuveen Build America Bond Fund","symbol":"NBB"},{"name":"Nuveen Build America Bond Opportunity Fund","symbol":"NBD"},{"name":"Nuveen California AMT-Free Municipal Income Fund","symbol":"NKX"},{"name":"Nuveen California Dividend Advantage Municipal Fund","symbol":"NAC"},{"name":"Nuveen California Municipal Value Fund, Inc.","symbol":"NCA"},{"name":"Nuveen Connecticut Premium Income Municipal Fund","symbol":"NTC"},{"name":"Nuveen Core Equity Alpha Fund","symbol":"JCE"},{"name":"Nuveen Credit Strategies Income Fund","symbol":"JQC"},{"name":"Nuveen Diversified Dividend and Income Fund","symbol":"JDD"},{"name":"Nuveen Dividend Advantage Municipal Fund","symbol":"NAD"},{"name":"Nuveen Dow 30SM Dynamic Overwrite Fund","symbol":"DIAX"},{"name":"Nuveen Energy MLP Total Return Fund","symbol":"JMF"},{"name":"Nuveen Enhanced Municipal Value Fund","symbol":"NEV"},{"name":"Nuveen Flexible Investment Income Fund","symbol":"JPW"},{"name":"Nuveen Floating Rate Income Fund","symbol":"JFR"},{"name":"Nuveen Floating Rate Income Opportuntiy Fund","symbol":"JRO"},{"name":"Nuveen Georgia Dividend Advantage Municipal Fund 2","symbol":"NKG"},{"name":"Nuveen Global Equity Income Fund","symbol":"JGV"},{"name":"Nuveen Global High Income Fund","symbol":"JGH"},{"name":"Nuveen High Income 2020 Target Term Fund","symbol":"JHA"},{"name":"Nuveen High Income 2020 Target Term Fund","symbol":"JHY"},{"name":"Nuveen Insured California Select Tax-Free Income Portfolio","symbol":"NXC"},{"name":"Nuveen Insured New York Select Tax-Free Income Portfolio","symbol":"NXN"},{"name":"Nuveen Intermediate Duration Municipal Term Fund","symbol":"NID"},{"name":"Nuveen Investment Quality Municipal Fund, Inc.","symbol":"NQM"},{"name":"Nuveen Maryland Premium Income Municipal Fund","symbol":"NMY"},{"name":"Nuveen Massachusetts Premium Income Municipal Fund","symbol":"NMT"},{"name":"Nuveen Michigan Quality Income Municipal Fund","symbol":"NUM"},{"name":"Nuveen Minnesota Municipal Income Fund","symbol":"NMS"},{"name":"Nuveen Mortgage Opportunity Term Fund","symbol":"JLS"},{"name":"Nuveen Multi-Market Income Fund","symbol":"JMM"},{"name":"Nuveen Municipal Advantage Fund, Inc.","symbol":"NMA"},{"name":"Nuveen Municipal Income Fund, Inc.","symbol":"NMI"},{"name":"Nuveen Municipal Market Opportunity Fund, Inc.","symbol":"NMO"},{"name":"Nuveen Municipal Opportunity Fund, Inc.","symbol":"NIO"},{"name":"Nuveen New Jersey Dividend Advantage Municipal Fund","symbol":"NXJ"},{"name":"Nuveen New York AMT-Free Municipal Income Fund","symbol":"NRK"},{"name":"Nuveen New York Dividend Advantage Municipal Fund","symbol":"NAN"},{"name":"Nuveen New York Municipal Value Fund, Inc.","symbol":"NNY"},{"name":"Nuveen North Carolina Premium Income Municipal Fund","symbol":"NNC"},{"name":"Nuveen Ohio Quality Income Municipal Fund","symbol":"NUO"},{"name":"Nuveen Pennsylvania Investment Quality Municipal Fund, Inc.","symbol":"NQP"},{"name":"Nuveen Performance Plus Municipal Fund, Inc.","symbol":"NPP"},{"name":"Nuveen Preferred and Income Term Fund","symbol":"JPI"},{"name":"Nuveen Preferred Income Opportunites Fund","symbol":"JPC"},{"name":"Nuveen Premier Municipal Income Fund, Inc.","symbol":"NPF"},{"name":"Nuveen Premium Income Municipal Fund II, Inc.","symbol":"NPM"},{"name":"Nuveen Premium Income Municipal Fund IV, Inc.","symbol":"NPT"},{"name":"Nuveen Premium Income Municipal Fund, Inc.","symbol":"NPI"},{"name":"Nuveen Quality Income Municipal Fund, Inc.","symbol":"NQU"},{"name":"Nuveen Quality Municipal Fund, Inc.","symbol":"NQI"},{"name":"Nuveen Quality Preferred Income Fund","symbol":"JTP"},{"name":"Nuveen Quality Preferred Income Fund 2","symbol":"JPS"},{"name":"Nuveen Quality Preferred Income Fund 3","symbol":"JHP"},{"name":"Nuveen Real Asset Income and Growth Fund","symbol":"JRI"},{"name":"Nuveen S&P 500 Buy-Write Income Fund","symbol":"BXMX"},{"name":"Nuveen S&P 500 Dynamic Overwrite Fund","symbol":"SPXX"},{"name":"Nuveen Select Maturities Municipal Fund","symbol":"NIM"},{"name":"Nuveen Select Quality Municipal Fund, Inc.","symbol":"NQS"},{"name":"Nuveen Select Tax Free Income Portfolio","symbol":"NXP"},{"name":"Nuveen Select Tax Free Income Portfolio II","symbol":"NXQ"},{"name":"Nuveen Select Tax Free Income Portfolio III","symbol":"NXR"},{"name":"Nuveen Senior Income Fund","symbol":"NSL"},{"name":"Nuveen Short Duration Credit Opportunities Fund","symbol":"JSD"},{"name":"Nuveen Tax-Advantaged Dividend Growth Fund","symbol":"JTD"},{"name":"Nuveen Tax-Advantaged Total Return Strategy Fund","symbol":"JTA"},{"name":"Nuveen Texas Quality Income Municipal Fund","symbol":"NTX"},{"name":"Nuveen Virginia Premium Income Municipal Fund","symbol":"NPV"},{"name":"Nuveenn Intermediate Duration Quality Municipal Term Fund","symbol":"NIQ"},{"name":"Nuven Mortgage Opportunity Term Fund 2","symbol":"JMT"},{"name":"Nuverra Environmental Solutions, Inc.","symbol":"NES"},{"name":"NVR, Inc.","symbol":"NVR"},{"name":"Oaktree Capital Group, LLC","symbol":"OAK"},{"name":"Oasis Petroleum Inc.","symbol":"OAS"},{"name":"Occidental Petroleum Corporation","symbol":"OXY"},{"name":"Oceaneering International, Inc.","symbol":"OII"},{"name":"Och-Ziff Capital Management Group LLC","symbol":"OZM"},{"name":"OCI Partners LP","symbol":"OCIP"},{"name":"Ocwen Financial Corporation","symbol":"OCN"},{"name":"OFG Bancorp","symbol":"OFG"},{"name":"OFG Bancorp","symbol":"OFG^A"},{"name":"OFG Bancorp","symbol":"OFG^B"},{"name":"OFG Bancorp","symbol":"OFG^D"},{"name":"OGE Energy Corporation","symbol":"OGE"},{"name":"Oi S.A.","symbol":"OIBR"},{"name":"Oi S.A.","symbol":"OIBR.C"},{"name":"Oil States International, Inc.","symbol":"OIS"},{"name":"Oil-Dri Corporation Of America","symbol":"ODC"},{"name":"Old Republic International Corporation","symbol":"ORI"},{"name":"Olin Corporation","symbol":"OLN"},{"name":"OM Asset Management plc","symbol":"OMAM"},{"name":"Omega Healthcare Investors, Inc.","symbol":"OHI"},{"name":"Omega Protein Corporation","symbol":"OME"},{"name":"Omnicom Group Inc.","symbol":"OMC"},{"name":"OMNOVA Solutions Inc.","symbol":"OMN"},{"name":"On Assignment, Inc.","symbol":"ASGN"},{"name":"On Deck Capital, Inc.","symbol":"ONDK"},{"name":"ONE Gas, Inc.","symbol":"OGS"},{"name":"One Liberty Properties, Inc.","symbol":"OLP"},{"name":"OneBeacon Insurance Group, Ltd.","symbol":"OB"},{"name":"OneMain Holdings, Inc.","symbol":"OMF"},{"name":"ONEOK Partners, L.P.","symbol":"OKS"},{"name":"ONEOK, Inc.","symbol":"OKE"},{"name":"Ooma, Inc.","symbol":"OOMA"},{"name":"Opko Health Inc","symbol":"OPK"},{"name":"Opower, Inc.","symbol":"OPWR"},{"name":"Oppenheimer Holdings, Inc.","symbol":"OPY"},{"name":"Oracle Corporation","symbol":"ORCL"},{"name":"Orange","symbol":"ORAN"},{"name":"Orbital ATK, Inc.","symbol":"OA"},{"name":"Orchid Island Capital, Inc.","symbol":"ORC"},{"name":"Orion Engineered Carbons S.A","symbol":"OEC"},{"name":"Orion Marine Group Inc","symbol":"ORN"},{"name":"Orix Corp Ads","symbol":"IX"},{"name":"Ormat Technologies, Inc.","symbol":"ORA"},{"name":"Oshkosh Corporation","symbol":"OSK"},{"name":"OUTFRONT Media Inc.","symbol":"OUT"},{"name":"Owens & Minor, Inc.","symbol":"OMI"},{"name":"Owens Corning Inc","symbol":"OC"},{"name":"Owens-Illinois, Inc.","symbol":"OI"},{"name":"Oxford Industries, Inc.","symbol":"OXM"},{"name":"Pacific American Income Shares, Inc.","symbol":"PAI"},{"name":"Pacific Coast Oil Trust","symbol":"ROYT"},{"name":"Pacific Drilling S.A.","symbol":"PACD"},{"name":"Pacific Gas & Electric Co.","symbol":"PCG"},{"name":"Packaging Corporation of America","symbol":"PKG"},{"name":"Palo Alto Networks, Inc.","symbol":"PANW"},{"name":"Pampa Energia S.A.","symbol":"PAM"},{"name":"Pandora Media, Inc.","symbol":"P"},{"name":"Panhandle Royalty Company","symbol":"PHX"},{"name":"PAR Technology Corporation","symbol":"PAR"},{"name":"Paragon Offshore plc","symbol":"PGN"},{"name":"Paramount Group, Inc.","symbol":"PGRE"},{"name":"Park Electrochemical Corporation","symbol":"PKE"},{"name":"Parker Drilling Company","symbol":"PKD"},{"name":"Parker-Hannifin Corporation","symbol":"PH"},{"name":"Parkway Properties, Inc.","symbol":"PKY"},{"name":"Parsley Energy, Inc.","symbol":"PE"},{"name":"PartnerRe Ltd.","symbol":"PRE"},{"name":"PartnerRe Ltd.","symbol":"PRE^D"},{"name":"PartnerRe Ltd.","symbol":"PRE^E"},{"name":"PartnerRe Ltd.","symbol":"PRE^F"},{"name":"Party City Holdco Inc.","symbol":"PRTY"},{"name":"Patriot National, Inc.","symbol":"PN"},{"name":"Paycom Software, Inc.","symbol":"PAYC"},{"name":"PBF Energy Inc.","symbol":"PBF"},{"name":"PBF Logistics LP","symbol":"PBFX"},{"name":"Peabody Energy Corporation","symbol":"BTU"},{"name":"Pearson, Plc","symbol":"PSO"},{"name":"Pebblebrook Hotel Trust","symbol":"PEB"},{"name":"Pebblebrook Hotel Trust","symbol":"PEB^A"},{"name":"Pebblebrook Hotel Trust","symbol":"PEB^B"},{"name":"Pebblebrook Hotel Trust","symbol":"PEB^C"},{"name":"Pembina Pipeline Corp.","symbol":"PBA"},{"name":"Pengrowth Energy Corporation","symbol":"PGH"},{"name":"Penn Virginia Corporation","symbol":"PVA"},{"name":"Penn West Petroleum Ltd","symbol":"PWE"},{"name":"PennantPark Investment Corporation","symbol":"PNTA"},{"name":"Pennsylvania Real Estate Investment Trust","symbol":"PEI"},{"name":"Pennsylvania Real Estate Investment Trust","symbol":"PEI^A"},{"name":"Pennsylvania Real Estate Investment Trust","symbol":"PEI^B"},{"name":"PennyMac Financial Services, Inc.","symbol":"PFSI"},{"name":"PennyMac Mortgage Investment Trust","symbol":"PMT"},{"name":"Penske Automotive Group, Inc.","symbol":"PAG"},{"name":"Pentair plc.","symbol":"PNR"},{"name":"Penumbra, Inc.","symbol":"PEN"},{"name":"Pep Boys-Manny, Moe & Jack (The)","symbol":"PBY"},{"name":"PEPCO Holdings, Inc.","symbol":"POM"},{"name":"Pepsico, Inc.","symbol":"PEP"},{"name":"Performance Food Group Company","symbol":"PFGC"},{"name":"Performance Sports Group Ltd","symbol":"PSG"},{"name":"PerkinElmer, Inc.","symbol":"PKI"},{"name":"Permian Basin Royalty Trust","symbol":"PBT"},{"name":"Perrigo Company","symbol":"PRGO"},{"name":"Petrobras Argentina S.A.","symbol":"PZE"},{"name":"PetroChina Company Limited","symbol":"PTR"},{"name":"Petroleo Brasileiro S.A.- Petrobras","symbol":"PBR"},{"name":"Petroleo Brasileiro S.A.- Petrobras","symbol":"PBR.A"},{"name":"Petroquest Energy Inc","symbol":"PQ"},{"name":"Pfizer, Inc.","symbol":"PFE"},{"name":"Pharmerica Corporation","symbol":"PMC"},{"name":"PHH Corp","symbol":"PHH"},{"name":"Philip Morris International Inc","symbol":"PM"},{"name":"Philippine Long Distance Telephone Company","symbol":"PHI"},{"name":"Phillips 66","symbol":"PSX"},{"name":"Phillips 66 Partners LP","symbol":"PSXP"},{"name":"Phoenix Companies, Inc. (The)","symbol":"PFX"},{"name":"Phoenix Companies, Inc. (The)","symbol":"PNX"},{"name":"Phoenix New Media Limited","symbol":"FENG"},{"name":"Physicians Realty Trust","symbol":"DOC"},{"name":"Piedmont Natural Gas Company, Inc.","symbol":"PNY"},{"name":"Piedmont Office Realty Trust, Inc.","symbol":"PDM"},{"name":"Pier 1 Imports, Inc.","symbol":"PIR"},{"name":"PIMCO California Municipal Income Fund","symbol":"PCQ"},{"name":"Pimco California Municipal Income Fund II","symbol":"PCK"},{"name":"PIMCO California Municipal Income Fund III","symbol":"PZC"},{"name":"PIMCO Commercial Mortgage Securities Trust, Inc.","symbol":"PCM"},{"name":"Pimco Corporate & Income Opportunity Fund","symbol":"PTY"},{"name":"Pimco Corporate & Income Stategy Fund","symbol":"PCN"},{"name":"PIMCO Dynamic Credit Income Fund","symbol":"PCI"},{"name":"PIMCO Dynamic Income Fund","symbol":"PDI"},{"name":"Pimco Global Stocksplus & Income Fund","symbol":"PGP"},{"name":"Pimco High Income Fund","symbol":"PHK"},{"name":"Pimco Income Opportunity Fund","symbol":"PKO"},{"name":"PIMCO Income Strategy Fund","symbol":"PFL"},{"name":"PIMCO Income Strategy Fund II","symbol":"PFN"},{"name":"PIMCO Municipal Income Fund","symbol":"PMF"},{"name":"Pimco Municipal Income Fund II","symbol":"PML"},{"name":"PIMCO Municipal Income Fund III","symbol":"PMX"},{"name":"PIMCO New York Municipal Income Fund","symbol":"PNF"},{"name":"Pimco New York Municipal Income Fund II","symbol":"PNI"},{"name":"PIMCO New York Municipal Income Fund III","symbol":"PYN"},{"name":"PIMCO Strategic Income Fund, Inc.","symbol":"RCS"},{"name":"Pinnacle Foods, Inc.","symbol":"PF"},{"name":"Pinnacle West Capital Corporation","symbol":"PNW"},{"name":"Pioneer Energy Services Corp.","symbol":"PES"},{"name":"Pioneer Floating Rate Trust","symbol":"PHD"},{"name":"Pioneer High Income Trust","symbol":"PHT"},{"name":"Pioneer Municipal High Income Advantage Trust","symbol":"MAV"},{"name":"Pioneer Municipal High Income Trust","symbol":"MHI"},{"name":"Pioneer Natural Resources Company","symbol":"PXD"},{"name":"Piper Jaffray Companies","symbol":"PJC"},{"name":"Pitney Bowes Inc.","symbol":"PBI"},{"name":"Pitney Bowes Inc.","symbol":"PBI^B"},{"name":"PJT Partners Inc.","symbol":"PJT"},{"name":"Plains All American Pipeline, L.P.","symbol":"PAA"},{"name":"Plains Group Holdings, L.P.","symbol":"PAGP"},{"name":"Planet Fitness, Inc.","symbol":"PLNT"},{"name":"Plantronics, Inc.","symbol":"PLT"},{"name":"Platform Specialty Products Corporation","symbol":"PAH"},{"name":"Plum Creek Timber Company, Inc.","symbol":"PCL"},{"name":"Ply Gem Holdings, Inc.","symbol":"PGEM"},{"name":"PNC Financial Services Group, Inc. (The)","symbol":"PNC"},{"name":"PNC Financial Services Group, Inc. (The)","symbol":"PNC.WS"},{"name":"PNC Financial Services Group, Inc. (The)","symbol":"PNC^P"},{"name":"PNC Financial Services Group, Inc. (The)","symbol":"PNC^Q"},{"name":"PNM Resources, Inc. (Holding Co.)","symbol":"PNM"},{"name":"Polaris Industries Inc.","symbol":"PII"},{"name":"PolyOne Corporation","symbol":"POL"},{"name":"Portland General Electric Company","symbol":"POR"},{"name":"POSCO","symbol":"PKX"},{"name":"Post Holdings, Inc.","symbol":"POST"},{"name":"Post Properties, Inc.","symbol":"PPS"},{"name":"Post Properties, Inc.","symbol":"PPS^A"},{"name":"Potash Corporation of Saskatchewan Inc.","symbol":"POT"},{"name":"PowerSecure International, Inc","symbol":"POWR"},{"name":"PPG Industries, Inc.","symbol":"PPG"},{"name":"PPL Capital Funding, Inc.","symbol":"PPX"},{"name":"PPL Corporation","symbol":"PPL"},{"name":"PPlus Trust","symbol":"PYS"},{"name":"PPlus Trust","symbol":"PYT"},{"name":"Praxair, Inc.","symbol":"PX"},{"name":"Precision Castparts Corporation","symbol":"PCP"},{"name":"Precision Drilling Corporation","symbol":"PDS"},{"name":"Preferred Apartment Communities, Inc.","symbol":"APTS"},{"name":"Preferred Plus Trust Ser QWS 2 Tr Ctf","symbol":"PJS"},{"name":"Premiere Global Services, Inc.","symbol":"PGI"},{"name":"Press Ganey Holdings, Inc.","symbol":"PGND"},{"name":"Prestige Brand Holdings, Inc.","symbol":"PBH"},{"name":"Pretium Resources, Inc.","symbol":"PVG"},{"name":"Primerica, Inc.","symbol":"PRI"},{"name":"Primero Mining Corp","symbol":"PPP"},{"name":"Principal Financial Group Inc","symbol":"PFG"},{"name":"Principal Real Estate Income Fund","symbol":"PGZ"},{"name":"PrivateBancorp, Inc.","symbol":"PVTD"},{"name":"ProAssurance Corporation","symbol":"PRA"},{"name":"Procter & Gamble Company (The)","symbol":"PG"},{"name":"Progressive Corporation (The)","symbol":"PGR"},{"name":"Progressive Waste Solutions Ltd.","symbol":"BIN"},{"name":"ProLogis, Inc.","symbol":"PLD"},{"name":"PROS Holdings, Inc.","symbol":"PRO"},{"name":"Prosperity Bancshares, Inc.","symbol":"PB"},{"name":"Protective Life Corporation","symbol":"PL^C"},{"name":"Protective Life Corporation","symbol":"PL^E"},{"name":"Proto Labs, Inc.","symbol":"PRLB"},{"name":"PROTOSTAR I LTD","symbol":"PSTG"},{"name":"Provident Financial Services, Inc","symbol":"PFS"},{"name":"Prudential Financial, Inc.","symbol":"PFK"},{"name":"Prudential Financial, Inc.","symbol":"PJH"},{"name":"Prudential Financial, Inc.","symbol":"PRH"},{"name":"Prudential Financial, Inc.","symbol":"PRU"},{"name":"Prudential Global Short Duration High Yield Fund, Inc.","symbol":"GHY"},{"name":"Prudential Public Limited Company","symbol":"PUK"},{"name":"Prudential Public Limited Company","symbol":"PUK^"},{"name":"Prudential Public Limited Company","symbol":"PUK^A"},{"name":"Prudential Short Duration High Yield Fund, Inc.","symbol":"ISD"},{"name":"PS Business Parks, Inc.","symbol":"PSB"},{"name":"PS Business Parks, Inc.","symbol":"PSB^S"},{"name":"PS Business Parks, Inc.","symbol":"PSB^T"},{"name":"PS Business Parks, Inc.","symbol":"PSB^U"},{"name":"PS Business Parks, Inc.","symbol":"PSB^V"},{"name":"PT Telekomunikasi Indonesia, Tbk","symbol":"TLK"},{"name":"Public Service Enterprise Group Incorporated","symbol":"PEG"},{"name":"Public Storage","symbol":"PSA"},{"name":"Public Storage","symbol":"PSA^A"},{"name":"Public Storage","symbol":"PSA^Q"},{"name":"Public Storage","symbol":"PSA^R"},{"name":"Public Storage","symbol":"PSA^S"},{"name":"Public Storage","symbol":"PSA^T"},{"name":"Public Storage","symbol":"PSA^U"},{"name":"Public Storage","symbol":"PSA^V"},{"name":"Public Storage","symbol":"PSA^W"},{"name":"Public Storage","symbol":"PSA^X"},{"name":"Public Storage","symbol":"PSA^Y"},{"name":"Public Storage","symbol":"PSA^Z"},{"name":"PulteGroup, Inc.","symbol":"PHM"},{"name":"Puma Biotechnology Inc","symbol":"PBYI"},{"name":"Putnam High Income Bond Fund","symbol":"PCF"},{"name":"Putnam Managed Municipal Income Trust","symbol":"PMM"},{"name":"Putnam Master Intermediate Income Trust","symbol":"PIM"},{"name":"Putnam Municipal Opportunities Trust","symbol":"PMO"},{"name":"Putnam Premier Income Trust","symbol":"PPT"},{"name":"PVH Corp.","symbol":"PVH"},{"name":"Pzena Investment Management Inc","symbol":"PZN"},{"name":"Q2 Holdings, Inc.","symbol":"QTWO"},{"name":"QEP Resources, Inc.","symbol":"QEP"},{"name":"Qihoo 360 Technology Co. Ltd.","symbol":"QIHU"},{"name":"QTS Realty Trust, Inc.","symbol":"QTS"},{"name":"Quad Graphics, Inc","symbol":"QUAD"},{"name":"Quaker Chemical Corporation","symbol":"KWR"},{"name":"Quanex Building Products Corporation","symbol":"NX"},{"name":"Quanta Services, Inc.","symbol":"PWR"},{"name":"Quantum Corporation","symbol":"QTM"},{"name":"Quest Diagnostics Incorporated","symbol":"DGX"},{"name":"Questar Corporation","symbol":"STR"},{"name":"Quintiles Transitional Holdings Inc.","symbol":"Q"},{"name":"Quotient Technology Inc.","symbol":"QUOT"},{"name":"Qwest Corporation","symbol":"CTQ"},{"name":"Qwest Corporation","symbol":"CTU"},{"name":"Qwest Corporation","symbol":"CTV"},{"name":"Qwest Corporation","symbol":"CTW"},{"name":"Qwest Corporation","symbol":"CTX"},{"name":"Qwest Corporation","symbol":"CTY"},{"name":"Qwest Corporation","symbol":"CTZ"},{"name":"Rackspace Hosting, Inc","symbol":"RAX"},{"name":"Radian Group Inc.","symbol":"RDN"},{"name":"RAIT Financial Trust","symbol":"RAS"},{"name":"RAIT Financial Trust","symbol":"RAS^A"},{"name":"RAIT Financial Trust","symbol":"RAS^B"},{"name":"RAIT Financial Trust","symbol":"RAS^C"},{"name":"RAIT Financial Trust","symbol":"RFT"},{"name":"RAIT Financial Trust","symbol":"RFTA"},{"name":"Ralph Lauren Corporation","symbol":"RL"},{"name":"Ramco-Gershenson Properties Trust","symbol":"RPT"},{"name":"Ramco-Gershenson Properties Trust","symbol":"RPT^D"},{"name":"Range Resources Corporation","symbol":"RRC"},{"name":"Raymond James Financial, Inc.","symbol":"RJD"},{"name":"Raymond James Financial, Inc.","symbol":"RJF"},{"name":"Rayonier Advanced Materials Inc.","symbol":"RYAM"},{"name":"Rayonier Inc.","symbol":"RYN"},{"name":"Raytheon Company","symbol":"RTN"},{"name":"RCS CAPITAL CORPORATION","symbol":"RCAP"},{"name":"RE/MAX Holdings, Inc.","symbol":"RMAX"},{"name":"RealD Inc","symbol":"RLD"},{"name":"Realogy Holdings Corp.","symbol":"RLGY"},{"name":"Realty Income Corporation","symbol":"O"},{"name":"Realty Income Corporation","symbol":"O^F"},{"name":"Red Hat, Inc.","symbol":"RHT"},{"name":"Red Lion Hotels Corporation","symbol":"RLH"},{"name":"Red Lion Hotels Corporation","symbol":"RLH^A.CL"},{"name":"Redwood Trust, Inc.","symbol":"RWT"},{"name":"Regal Beloit Corporation","symbol":"RBC"},{"name":"Regal Entertainment Group","symbol":"RGC"},{"name":"Regency Centers Corporation","symbol":"REG"},{"name":"Regency Centers Corporation","symbol":"REG^F"},{"name":"Regency Centers Corporation","symbol":"REG^G"},{"name":"Regional Management Corp.","symbol":"RM"},{"name":"Regions Financial Corporation","symbol":"RF"},{"name":"Regions Financial Corporation","symbol":"RF^A"},{"name":"Regions Financial Corporation","symbol":"RF^B"},{"name":"Regis Corporation","symbol":"RGS"},{"name":"Reinsurance Group of America, Incorporated","symbol":"RGA"},{"name":"Reinsurance Group of America, Incorporated","symbol":"RZA"},{"name":"Reliance Steel & Aluminum Co.","symbol":"RS"},{"name":"RELX N.V.","symbol":"RENX"},{"name":"RELX PLC","symbol":"RELX"},{"name":"RenaissanceRe Holdings Ltd.","symbol":"RNR"},{"name":"RenaissanceRe Holdings Ltd.","symbol":"RNR^C"},{"name":"RenaissanceRe Holdings Ltd.","symbol":"RNR^E"},{"name":"Renesola Ltd.","symbol":"SOL"},{"name":"Renren Inc.","symbol":"RENN"},{"name":"Rentech Nitrogen Partners, L.P.","symbol":"RNF"},{"name":"Republic Services, Inc.","symbol":"RSG"},{"name":"ResMed Inc.","symbol":"RMD"},{"name":"Resolute Energy Corporation","symbol":"REN"},{"name":"Resolute Forest Products Inc.","symbol":"RFP"},{"name":"Resource Capital Corp.","symbol":"RSO"},{"name":"Resource Capital Corp.","symbol":"RSO^A"},{"name":"Resource Capital Corp.","symbol":"RSO^B"},{"name":"Resource Capital Corp.","symbol":"RSO^C"},{"name":"Restaurant Brands International Inc.","symbol":"QSR"},{"name":"Restoration Hardware Holdings Inc.","symbol":"RH"},{"name":"Retail Properties of America, Inc.","symbol":"RPAI"},{"name":"Retail Properties of America, Inc.","symbol":"RPAI^A"},{"name":"Revlon, Inc.","symbol":"REV"},{"name":"REX American Resources Corporation","symbol":"REX"},{"name":"Rexford Industrial Realty, Inc.","symbol":"REXR"},{"name":"Rexnord Corporation","symbol":"RXN"},{"name":"Reynolds American Inc","symbol":"RAI"},{"name":"Rhino Resource Partners LP","symbol":"RNO"},{"name":"Rice Energy Inc.","symbol":"RICE"},{"name":"Rice Midstream Partners LP","symbol":"RMP"},{"name":"Ringcentral, Inc.","symbol":"RNG"},{"name":"Rio Tinto Plc","symbol":"RIO"},{"name":"Ritchie Bros. Auctioneers Incorporated","symbol":"RBA"},{"name":"Rite Aid Corporation","symbol":"RAD"},{"name":"RLI Corp.","symbol":"RLI"},{"name":"RLJ Lodging Trust","symbol":"RLJ"},{"name":"Roadrunner Transportation Systems, Inc","symbol":"RRTS"},{"name":"Robert Half International Inc.","symbol":"RHI"},{"name":"Rockwell Automation, Inc.","symbol":"ROK"},{"name":"Rockwell Collins, Inc.","symbol":"COL"},{"name":"Rogers Communication, Inc.","symbol":"RCI"},{"name":"Rogers Corporation","symbol":"ROG"},{"name":"Rollins, Inc.","symbol":"ROL"},{"name":"Roper Technologies, Inc.","symbol":"ROP"},{"name":"Rose Rock Midstream, L.P.","symbol":"RRMS"},{"name":"Rosetta Stone","symbol":"RST"},{"name":"Roundy&#39;s, Inc.","symbol":"RNDY"},{"name":"Rouse Properties, Inc.","symbol":"RSE"},{"name":"Rowan Companies plc","symbol":"RDC"},{"name":"Royal Bank Of Canada","symbol":"RY"},{"name":"Royal Bank Of Canada","symbol":"RY^S"},{"name":"Royal Bank Of Canada","symbol":"RY^T"},{"name":"Royal Bank Scotland plc (The)","symbol":"RBS"},{"name":"Royal Bank Scotland plc (The)","symbol":"RBS^E"},{"name":"Royal Bank Scotland plc (The)","symbol":"RBS^F"},{"name":"Royal Bank Scotland plc (The)","symbol":"RBS^G"},{"name":"Royal Bank Scotland plc (The)","symbol":"RBS^H"},{"name":"Royal Bank Scotland plc (The)","symbol":"RBS^I"},{"name":"Royal Bank Scotland plc (The)","symbol":"RBS^L"},{"name":"Royal Bank Scotland plc (The)","symbol":"RBS^R"},{"name":"Royal Bank Scotland plc (The)","symbol":"RBS^S"},{"name":"Royal Bank Scotland plc (The)","symbol":"RBS^T"},{"name":"Royal Caribbean Cruises Ltd.","symbol":"RCL"},{"name":"Royal Dutch Shell PLC","symbol":"RDS.A"},{"name":"Royal Dutch Shell PLC","symbol":"RDS.B"},{"name":"Royce Global Value Trust, Inc.","symbol":"RGT"},{"name":"Royce Micro-Cap Trust, Inc.","symbol":"RMT"},{"name":"Royce Value Trust, Inc.","symbol":"RVT"},{"name":"RPC, Inc.","symbol":"RES"},{"name":"RPM International Inc.","symbol":"RPM"},{"name":"RSP Permian, Inc.","symbol":"RSPP"},{"name":"Ruby Tuesday, Inc.","symbol":"RT"},{"name":"Ruckus Wireless, Inc.","symbol":"RKUS"},{"name":"Rudolph Technologies, Inc.","symbol":"RTEC"},{"name":"Ryder System, Inc.","symbol":"R"},{"name":"Ryerson Holding Corporation","symbol":"RYI"},{"name":"Ryman Hospitality Properties, Inc.","symbol":"RHP"},{"name":"Sabine Royalty Trust","symbol":"SBR"},{"name":"Safe Bulkers, Inc","symbol":"SB"},{"name":"Safe Bulkers, Inc","symbol":"SB^B"},{"name":"Safe Bulkers, Inc","symbol":"SB^C"},{"name":"Safe Bulkers, Inc","symbol":"SB^D"},{"name":"Safeguard Scientifics, Inc.","symbol":"SFE"},{"name":"Salesforce.com Inc","symbol":"CRM"},{"name":"Salient Midstream & MLP Fund","symbol":"SMM"},{"name":"Sally Beauty Holdings, Inc.","symbol":"SBH"},{"name":"San Juan Basin Royalty Trust","symbol":"SJT"},{"name":"Sanchez Energy Corporation","symbol":"SN"},{"name":"Sandridge Energy Inc.","symbol":"SD"},{"name":"SandRidge Mississippian Trust I","symbol":"SDT"},{"name":"SandRidge Mississippian Trust II","symbol":"SDR"},{"name":"SandRidge Permian Trust","symbol":"PER"},{"name":"Sanofi","symbol":"SNY"},{"name":"Santander Consumer USA Holdings Inc.","symbol":"SC"},{"name":"Santander Holdings USA, Inc.","symbol":"SOV^C"},{"name":"SAP SE","symbol":"SAP"},{"name":"Saratoga Investment Corp","symbol":"SAQ"},{"name":"Saratoga Investment Corp","symbol":"SAR"},{"name":"Sasol Ltd.","symbol":"SSL"},{"name":"Saul Centers, Inc.","symbol":"BFS"},{"name":"Saul Centers, Inc.","symbol":"BFS^C"},{"name":"Scana Corporation","symbol":"SCG"},{"name":"Schlumberger N.V.","symbol":"SLB"},{"name":"Schweitzer-Mauduit International, Inc.","symbol":"SWM"},{"name":"SCIENCE APPLICATIONS INTERNATIONAL CORPORATION","symbol":"SAIC"},{"name":"Scorpio Bulkers Inc.","symbol":"SALT"},{"name":"Scorpio Bulkers Inc.","symbol":"SLTB"},{"name":"Scorpio Tankers Inc.","symbol":"SBNA"},{"name":"Scorpio Tankers Inc.","symbol":"SBNB"},{"name":"Scorpio Tankers Inc.","symbol":"STNG"},{"name":"Scotts Miracle-Gro Company (The)","symbol":"SMG"},{"name":"Scripps Networks Interactive, Inc","symbol":"SNI"},{"name":"Scudder Global High Income Fund, Inc.","symbol":"LBF"},{"name":"Scudder High Income Trust","symbol":"KHI"},{"name":"Scudder Multi-Market Income Trust","symbol":"KMM"},{"name":"Scudder Municiple Income Trust","symbol":"KTF"},{"name":"Scudder Strategic Income Trust","symbol":"KST"},{"name":"Scudder Strategic Municiple Income Trust","symbol":"KSM"},{"name":"Seabridge Gold, Inc.","symbol":"SA"},{"name":"SEACOR Holdings, Inc.","symbol":"CKH"},{"name":"Seadrill Limited","symbol":"SDRL"},{"name":"Seadrill Partners LLC","symbol":"SDLP"},{"name":"Sealed Air Corporation","symbol":"SEE"},{"name":"Seaspan Corporation","symbol":"SSW"},{"name":"Seaspan Corporation","symbol":"SSW^C"},{"name":"Seaspan Corporation","symbol":"SSW^D"},{"name":"Seaspan Corporation","symbol":"SSW^E"},{"name":"Seaspan Corporation","symbol":"SSWN"},{"name":"SeaWorld Entertainment, Inc.","symbol":"SEAS"},{"name":"Select Asset Inc.","symbol":"JBN"},{"name":"Select Asset Inc.","symbol":"JBR"},{"name":"Select Income REIT","symbol":"SIR"},{"name":"Select Medical Holdings Corporation","symbol":"SEM"},{"name":"Selective Insurance Group, Inc.","symbol":"SGZA"},{"name":"Semgroup Corporation","symbol":"SEMG"},{"name":"Semiconductor  Manufacturing International Corporation","symbol":"SMI"},{"name":"Sempra Energy","symbol":"SRE"},{"name":"Senior Housing Properties Trust","symbol":"SNH"},{"name":"Senior Housing Properties Trust","symbol":"SNHN"},{"name":"Sensata Technologies Holding N.V.","symbol":"ST"},{"name":"Sensient Technologies Corporation","symbol":"SXT"},{"name":"Sequans Communications S.A.","symbol":"SQNS"},{"name":"Seritage Growth Properties","symbol":"SRG"},{"name":"Service Corporation International","symbol":"SCI"},{"name":"ServiceMaster Global Holdings, Inc.","symbol":"SERV"},{"name":"ServiceNow, Inc.","symbol":"NOW"},{"name":"Seventy Seven Energy Inc.","symbol":"SSE"},{"name":"Shake Shack, Inc.","symbol":"SHAK"},{"name":"Shaw Communications Inc.","symbol":"SJR"},{"name":"Shell Midstream Partners, L.P.","symbol":"SHLX"},{"name":"Sherwin-Williams Company (The)","symbol":"SHW"},{"name":"Shinhan Financial Group Co Ltd","symbol":"SHG"},{"name":"Ship Finance International Limited","symbol":"SFL"},{"name":"Shopify Inc.","symbol":"SHOP"},{"name":"Shutterstock, Inc.","symbol":"SSTK"},{"name":"Sibanye Gold Limited","symbol":"SBGL"},{"name":"Signet Jewelers Limited","symbol":"SIG"},{"name":"Silver Bay Realty Trust Corp.","symbol":"SBY"},{"name":"Silver Spring Networks, Inc.","symbol":"SSNI"},{"name":"Silver Wheaton Corp","symbol":"SLW"},{"name":"Simon Property Group, Inc.","symbol":"SPG"},{"name":"Simon Property Group, Inc.","symbol":"SPG^J"},{"name":"Simpson Manufacturing Company, Inc.","symbol":"SSD"},{"name":"SINOPEC Shangai Petrochemical Company, Ltd.","symbol":"SHI"},{"name":"Six Flags Entertainment Corporation New","symbol":"SIX"},{"name":"SJW Corporation","symbol":"SJW"},{"name":"SK Telecom Co., Ltd.","symbol":"SKM"},{"name":"Skechers U.S.A., Inc.","symbol":"SKX"},{"name":"SL Green Realty Corporation","symbol":"SLG"},{"name":"SL Green Realty Corporation","symbol":"SLG^I"},{"name":"SM Energy Company","symbol":"SM"},{"name":"Smart","symbol":"SFS"},{"name":"Smith & Nephew SNATS, Inc.","symbol":"SNN"},{"name":"Smith (A.O.) Corporation","symbol":"AOS"},{"name":"Snap-On Incorporated","symbol":"SNA"},{"name":"Sociedad Quimica y Minera S.A.","symbol":"SQM"},{"name":"Solar Capital Ltd.","symbol":"SLRA"},{"name":"Solarwinds, Inc.","symbol":"SWI"},{"name":"Solera Holdings, Inc.","symbol":"SLH"},{"name":"Sonic Automotive, Inc.","symbol":"SAH"},{"name":"Sonoco Products Company","symbol":"SON"},{"name":"Sony Corp Ord","symbol":"SNE"},{"name":"Sotheby&#39;s","symbol":"BID"},{"name":"SouFun Holdings Limited","symbol":"SFUN"},{"name":"Source Capital, Inc.","symbol":"SOR"},{"name":"South Jersey Industries, Inc.","symbol":"SJI"},{"name":"Southcross Energy Partners, L.P.","symbol":"SXE"},{"name":"Southern California Edison Company","symbol":"SCE^F"},{"name":"Southern California Edison Company","symbol":"SCE^G"},{"name":"Southern California Edison Company","symbol":"SCE^H"},{"name":"Southern California Edison Company","symbol":"SCE^J"},{"name":"Southern Company (The)","symbol":"SO"},{"name":"Southern Company (The)","symbol":"SOJA"},{"name":"Southern Copper Corporation","symbol":"SCCO"},{"name":"Southwest Airlines Company","symbol":"LUV"},{"name":"Southwest Gas Corporation","symbol":"SWX"},{"name":"Southwestern Energy Company","symbol":"SWN"},{"name":"Southwestern Energy Company","symbol":"SWNC"},{"name":"Sovran Self Storage, Inc.","symbol":"SSS"},{"name":"Sparton Corporation","symbol":"SPA"},{"name":"Special Opportunities Fund Inc.","symbol":"SPE"},{"name":"Spectra Energy Corp","symbol":"SE"},{"name":"Spectra Energy Partners, LP","symbol":"SEP"},{"name":"Spectrum Brands Holdings, Inc.","symbol":"SPB"},{"name":"Speedway Motorsports, Inc.","symbol":"TRK"},{"name":"Spirit Aerosystems Holdings, Inc.","symbol":"SPR"},{"name":"Spirit Realty Capital, Inc.","symbol":"SRC"},{"name":"Sprague Resources LP","symbol":"SRLP"},{"name":"Sprint Corporation","symbol":"S"},{"name":"SPX Corporation","symbol":"SPXC"},{"name":"SPX FLOW, Inc.","symbol":"FLOW"},{"name":"Square, Inc.","symbol":"SQ"},{"name":"St. Joe Company (The)","symbol":"JOE"},{"name":"St. Jude Medical, Inc.","symbol":"STJ"},{"name":"Stag Industrial, Inc.","symbol":"STAG"},{"name":"Stag Industrial, Inc.","symbol":"STAG^A"},{"name":"Stag Industrial, Inc.","symbol":"STAG^B"},{"name":"Stage Stores, Inc.","symbol":"SSI"},{"name":"StanCorp Financial Group, Inc.","symbol":"SFG"},{"name":"Standard Motor Products, Inc.","symbol":"SMP"},{"name":"Standex International Corporation","symbol":"SXI"},{"name":"Stanley Black & Decker, Inc.","symbol":"SWH"},{"name":"Stanley Black & Decker, Inc.","symbol":"SWJ"},{"name":"Stanley Black & Decker, Inc.","symbol":"SWK"},{"name":"Stantec Inc","symbol":"STN"},{"name":"Star Gas Partners, L.P.","symbol":"SGU"},{"name":"StarTek, Inc.","symbol":"SRT"},{"name":"Starwood Hotels & Resorts Worldwide, Inc.","symbol":"HOT"},{"name":"STARWOOD PROPERTY TRUST, INC.","symbol":"STWD"},{"name":"Starwood Waypoint Residential Trust","symbol":"SWAY"},{"name":"State Street Corporation","symbol":"STT"},{"name":"State Street Corporation","symbol":"STT^C"},{"name":"State Street Corporation","symbol":"STT^D"},{"name":"State Street Corporation","symbol":"STT^E"},{"name":"Statoil ASA","symbol":"STO"},{"name":"Steel Partners Holdings LP","symbol":"SPLP"},{"name":"Steelcase Inc.","symbol":"SCS"},{"name":"Stellus Capital Investment Corporation","symbol":"SCM"},{"name":"Stellus Capital Investment Corporation","symbol":"SCQ"},{"name":"Stepan Company","symbol":"SCL"},{"name":"STERIS plc","symbol":"STE"},{"name":"Sterling Bancorp","symbol":"STL"},{"name":"Stewart Information Services Corporation","symbol":"STC"},{"name":"Stifel Financial Corporation","symbol":"SF"},{"name":"Stifel Financial Corporation","symbol":"SFN"},{"name":"Stillwater Mining Company","symbol":"SWC"},{"name":"STMicroelectronics N.V.","symbol":"STM"},{"name":"Stone Energy Corporation","symbol":"SGY"},{"name":"Stone Harbor Emerging Markets Income Fund","symbol":"EDF"},{"name":"Stone Harbor Emerging Markets Total Income Fund","symbol":"EDI"},{"name":"Stonegate Mortgage Corporation","symbol":"SGM"},{"name":"StoneMor Partners L.P.","symbol":"STON"},{"name":"Stoneridge, Inc.","symbol":"SRI"},{"name":"STORE Capital Corporation","symbol":"STOR"},{"name":"Strategic Global Income Fund, Inc.","symbol":"SGL"},{"name":"Strategic Hotels & Resorts Inc","symbol":"BEE"},{"name":"Stryker Corporation","symbol":"SYK"},{"name":"Sturm, Ruger & Company, Inc.","symbol":"RGR"},{"name":"Suburban Propane Partners, L.P.","symbol":"SPH"},{"name":"Sumitomo Mitsui Financial Group Inc","symbol":"SMFG"},{"name":"Summit Hotel Properties, Inc.","symbol":"INN"},{"name":"Summit Hotel Properties, Inc.","symbol":"INN^A"},{"name":"Summit Hotel Properties, Inc.","symbol":"INN^B"},{"name":"Summit Hotel Properties, Inc.","symbol":"INN^C"},{"name":"Summit Materials, Inc.","symbol":"SUM"},{"name":"Summit Midstream Partners, LP","symbol":"SMLP"},{"name":"Sun Communities, Inc.","symbol":"SUI"},{"name":"Sun Communities, Inc.","symbol":"SUI^A"},{"name":"Sun Life Financial Inc.","symbol":"SLF"},{"name":"SunCoke Energy Partners, L.P.","symbol":"SXCP"},{"name":"SunCoke Energy, Inc.","symbol":"SXC"},{"name":"Suncor Energy  Inc.","symbol":"SU"},{"name":"SunEdison, Inc.","symbol":"SUNE"},{"name":"Sunoco Logistics Partners LP","symbol":"SXL"},{"name":"Sunoco LP","symbol":"SUN"},{"name":"Sunstone Hotel Investors, Inc.","symbol":"SHO"},{"name":"Sunstone Hotel Investors, Inc.","symbol":"SHO^D"},{"name":"SunTrust Banks, Inc.","symbol":"STI"},{"name":"SunTrust Banks, Inc.","symbol":"STI.WS.A"},{"name":"SunTrust Banks, Inc.","symbol":"STI.WS.B"},{"name":"SunTrust Banks, Inc.","symbol":"STI^A"},{"name":"SunTrust Banks, Inc.","symbol":"STI^E"},{"name":"Superior Energy Services, Inc.","symbol":"SPN"},{"name":"Superior Industries International, Inc.","symbol":"SUP"},{"name":"SuperValu Inc.","symbol":"SVU"},{"name":"Swift Energy Company","symbol":"SFY"},{"name":"Swift Transportation Company","symbol":"SWFT"},{"name":"Swiss Helvetia Fund, Inc. (The)","symbol":"SWZ"},{"name":"Symetra Financial Corporation","symbol":"SYA"},{"name":"Synchrony Financial","symbol":"SYF"},{"name":"Syngenta AG","symbol":"SYT"},{"name":"Synnex Corporation","symbol":"SNX"},{"name":"Synovus Financial Corp.","symbol":"SNV"},{"name":"Synovus Financial Corp.","symbol":"SNV^C"},{"name":"SYNTHETIC FIXED INCOME SECURITIES INC","symbol":"GJH"},{"name":"SYNTHETIC FIXED INCOME SECURITIES INC","symbol":"GJO"},{"name":"SYNTHETIC FIXED INCOME SECURITIES INC","symbol":"GJS"},{"name":"Synthetic Fixed-Income Securities, Inc.","symbol":"GJP"},{"name":"Synthetic Fixed-Income Securities, Inc.","symbol":"GJR"},{"name":"Synthetic Fixed-Income Securities, Inc.","symbol":"GJT"},{"name":"Synthetic Fixed-Income Securities, Inc.","symbol":"GJV"},{"name":"Sysco Corporation","symbol":"SYY"},{"name":"Systemax Inc.","symbol":"SYX"},{"name":"Tableau Software, Inc.","symbol":"DATA"},{"name":"Tahoe Resources, Inc.","symbol":"TAHO"},{"name":"Taiwan Fund, Inc. (The)","symbol":"TWN"},{"name":"Taiwan Semiconductor Manufacturing Company Ltd.","symbol":"TSM"},{"name":"TAL Education Group","symbol":"XRS"},{"name":"TAL International Group, Inc.","symbol":"TAL"},{"name":"Talen Energy Corporation","symbol":"TLN"},{"name":"Tallgrass Energy GP, LP","symbol":"TEGP"},{"name":"Tallgrass Energy Partners, LP","symbol":"TEP"},{"name":"Tanger Factory Outlet Centers, Inc.","symbol":"SKT"},{"name":"Taomee Holdings Limited","symbol":"TAOM"},{"name":"Targa Resources Partners LP","symbol":"NGLS"},{"name":"Targa Resources Partners LP","symbol":"NGLS^A"},{"name":"Targa Resources, Inc.","symbol":"TRGP"},{"name":"Target Corporation","symbol":"TGT"},{"name":"Taro Pharmaceutical Industries Ltd.","symbol":"TARO"},{"name":"Tata Motors Ltd","symbol":"TTM"},{"name":"Taubman Centers, Inc.","symbol":"TCO"},{"name":"Taubman Centers, Inc.","symbol":"TCO^J"},{"name":"Taubman Centers, Inc.","symbol":"TCO^K"},{"name":"Taylor Morrison Home Corporation","symbol":"TMHC"},{"name":"TC PipeLines, LP","symbol":"TCP"},{"name":"TCF Financial Corporation","symbol":"TCB"},{"name":"TCF Financial Corporation","symbol":"TCB.WS"},{"name":"TCF Financial Corporation","symbol":"TCB^B"},{"name":"TCF Financial Corporation","symbol":"TCB^C"},{"name":"TCP International Holdings Ltd.","symbol":"TCPI"},{"name":"TCW Strategic Income Fund, Inc.","symbol":"TSI"},{"name":"TD Ameritrade Holding Corporation","symbol":"AMTD"},{"name":"TE Connectivity Ltd.","symbol":"TEL"},{"name":"Team Health Holdings, Inc.","symbol":"TMH"},{"name":"Team, Inc.","symbol":"TISI"},{"name":"Teck Resources Ltd","symbol":"TCK"},{"name":"TECO Energy, Inc.","symbol":"TE"},{"name":"Teekay Corporation","symbol":"TK"},{"name":"Teekay LNG Partners L.P.","symbol":"TGP"},{"name":"Teekay Offshore Partners L.P.","symbol":"TOO"},{"name":"Teekay Offshore Partners L.P.","symbol":"TOO^A"},{"name":"Teekay Offshore Partners L.P.","symbol":"TOO^B"},{"name":"Teekay Tankers Ltd.","symbol":"TNK"},{"name":"TEGNA Inc.","symbol":"GCI"},{"name":"TEGNA Inc.","symbol":"TGNA"},{"name":"Tejon Ranch Co","symbol":"TRC"},{"name":"Tekla Healthcare Investors","symbol":"HQH"},{"name":"Tekla Healthcare Opportunies Fund","symbol":"THQ"},{"name":"Tekla Life Sciences Investors","symbol":"HQL"},{"name":"Tekla World Healthcare Fund","symbol":"THW"},{"name":"Teladoc, Inc.","symbol":"TDOC"},{"name":"Telecom Argentina Stet - France Telecom S.A.","symbol":"TEO"},{"name":"Telecom Italia S.P.A.","symbol":"TI"},{"name":"Telecom Italia S.P.A.","symbol":"TI.A"},{"name":"Teledyne Technologies Incorporated","symbol":"TDY"},{"name":"Teleflex Incorporated","symbol":"TFX"},{"name":"Telefonica Brasil S.A.","symbol":"VIV"},{"name":"Telefonica SA","symbol":"TEF"},{"name":"Telephone and Data Systems, Inc.","symbol":"TDA"},{"name":"Telephone and Data Systems, Inc.","symbol":"TDE"},{"name":"Telephone and Data Systems, Inc.","symbol":"TDI"},{"name":"Telephone and Data Systems, Inc.","symbol":"TDJ"},{"name":"Telephone and Data Systems, Inc.","symbol":"TDS"},{"name":"TELUS Corporation","symbol":"TU"},{"name":"Templeton Dragon Fund, Inc.","symbol":"TDF"},{"name":"Templeton Emerging Markets Fund","symbol":"EMF"},{"name":"Templeton Emerging Markets Income Fund, Inc.","symbol":"TEI"},{"name":"Templeton Global Income Fund, Inc.","symbol":"GIM"},{"name":"Tempur Sealy International, Inc.","symbol":"TPX"},{"name":"Tenaris S.A.","symbol":"TS"},{"name":"Tenet Healthcare Corporation","symbol":"THC"},{"name":"Tennant Company","symbol":"TNC"},{"name":"Tenneco Inc.","symbol":"TEN"},{"name":"Tennessee Valley Authority","symbol":"TVC"},{"name":"Tennessee Valley Authority","symbol":"TVE"},{"name":"Teradata Corporation","symbol":"TDC"},{"name":"Teradyne, Inc.","symbol":"TER"},{"name":"Terex Corporation","symbol":"TEX"},{"name":"Ternium S.A.","symbol":"TX"},{"name":"Terra Nitrogen Company, L.P.","symbol":"TNH"},{"name":"Terreno Realty Corporation","symbol":"TRNO"},{"name":"Terreno Realty Corporation","symbol":"TRNO^A"},{"name":"Tesoro Corporation","symbol":"TSO"},{"name":"Tesoro Logistics LP","symbol":"TLLP"},{"name":"Tetra Technologies, Inc.","symbol":"TTI"},{"name":"Teva Pharmaceutical Industries Limited","symbol":"TEVA"},{"name":"Texas Pacific Land Trust","symbol":"TPL"},{"name":"Textainer Group Holdings Limited","symbol":"TGH"},{"name":"Textron Inc.","symbol":"TXT"},{"name":"Textura Corporation","symbol":"TXTR"},{"name":"Thai Fund, Inc. (The)","symbol":"TTF"},{"name":"The AES Corporation","symbol":"AES"},{"name":"The AES Corporation","symbol":"AES^C"},{"name":"The Blackstone Group L.P.","symbol":"BX"},{"name":"The Charles Schwab Corporation","symbol":"SCHW"},{"name":"The Charles Schwab Corporation","symbol":"SCHW^B"},{"name":"The Charles Schwab Corporation","symbol":"SCHW^C"},{"name":"The Cushing MLP Total Return Fund","symbol":"SRV"},{"name":"The Gabelli Healthcare & Wellness Trust","symbol":"GRX"},{"name":"The Gabelli Healthcare & Wellness Trust","symbol":"GRX^A"},{"name":"The Gabelli Healthcare & Wellness Trust","symbol":"GRX^B"},{"name":"The GDL Fund","symbol":"GDL"},{"name":"The GDL Fund","symbol":"GDL^B"},{"name":"The Hanover Insurance Group, Inc.","symbol":"THG"},{"name":"The Hanover Insurance Group, Inc.","symbol":"THGA"},{"name":"The Rubicon Project, Inc.","symbol":"RUBI"},{"name":"The Travelers Companies, Inc.","symbol":"TRV"},{"name":"Thermo Fisher Scientific Inc","symbol":"TMO"},{"name":"Thermon Group Holdings, Inc.","symbol":"THR"},{"name":"Third Point Reinsurance Ltd.","symbol":"TPRE"},{"name":"THL Credit Senior Loan Fund","symbol":"TSLF"},{"name":"THL Credit, Inc.","symbol":"TCRX"},{"name":"Thompson Creek Metals Company Inc.","symbol":"TC"},{"name":"Thomson Reuters Corp","symbol":"TRI"},{"name":"Thor Industries, Inc.","symbol":"THO"},{"name":"Tidewater Inc.","symbol":"TDW"},{"name":"TIER REIT, Inc.","symbol":"TIER"},{"name":"Tiffany & Co.","symbol":"TIF"},{"name":"Tilly&#39;s, Inc.","symbol":"TLYS"},{"name":"TIM Participacoes S.A.","symbol":"TSU"},{"name":"Time Inc.","symbol":"TIME"},{"name":"Time Warner Cable Inc","symbol":"TWC"},{"name":"Time Warner Inc.","symbol":"TWX"},{"name":"Timken Company (The)","symbol":"TKR"},{"name":"Timken Steel Corporation","symbol":"TMST"},{"name":"Titan International, Inc.","symbol":"TWI"},{"name":"TJX Companies, Inc. (The)","symbol":"TJX"},{"name":"Toll Brothers Inc.","symbol":"TOL"},{"name":"Tootsie Roll Industries, Inc.","symbol":"TR"},{"name":"TopBuild Corp.","symbol":"BLD"},{"name":"Torchmark Corporation","symbol":"TMK"},{"name":"Torchmark Corporation","symbol":"TMK^B"},{"name":"Toro Company (The)","symbol":"TTC"},{"name":"Toronto Dominion Bank (The)","symbol":"TD"},{"name":"Tortoise Energy Independence Fund, Inc.","symbol":"NDP"},{"name":"Tortoise Energy Infrastructure Corporation","symbol":"TYG"},{"name":"Tortoise Energy Infrastructure Corporation","symbol":"TYG^B"},{"name":"Tortoise Energy Infrastructure Corporation","symbol":"TYG^C"},{"name":"Tortoise MLP Fund, Inc.","symbol":"NTG"},{"name":"Tortoise Pipeline & Energy Fund, Inc.","symbol":"TTP"},{"name":"Tortoise Power and Energy Infrastructure Fund, Inc","symbol":"TPZ"},{"name":"Total System Services, Inc.","symbol":"TSS"},{"name":"TotalFinaElf, S.A.","symbol":"TOT"},{"name":"Tower International, Inc.","symbol":"TOWR"},{"name":"Townsquare Media, Inc.","symbol":"TSQ"},{"name":"Toyota Motor Corp Ltd Ord","symbol":"TM"},{"name":"TPG Specialty Lending, Inc.","symbol":"TSLX"},{"name":"TransAlta Corporation","symbol":"TAC"},{"name":"TransCanada Corporation","symbol":"TRP"},{"name":"Transcontinental Realty Investors, Inc.","symbol":"TCI"},{"name":"Transdigm Group Incorporated","symbol":"TDG"},{"name":"Transmontaigne Partners L.P.","symbol":"TLP"},{"name":"Transocean Ltd.","symbol":"RIG"},{"name":"Transocean Partners LLC","symbol":"RIGP"},{"name":"Transportadora De Gas Sa Ord B","symbol":"TGS"},{"name":"TransUnion","symbol":"TRU"},{"name":"TravelCenters of America LLC","symbol":"TA"},{"name":"TravelCenters of America LLC","symbol":"TANN"},{"name":"TravelCenters of America LLC","symbol":"TANO"},{"name":"TravelCenters of America LLC","symbol":"TANP"},{"name":"Travelport Worldwide Limited","symbol":"TVPT"},{"name":"TRC Companies, Inc.","symbol":"TRR"},{"name":"Trecora Resources","symbol":"TREC"},{"name":"Tredegar Corporation","symbol":"TG"},{"name":"Treehouse Foods, Inc.","symbol":"THS"},{"name":"Tremor Video, Inc.","symbol":"TRMR"},{"name":"Trex Company, Inc.","symbol":"TREX"},{"name":"Tri Continental Corporation","symbol":"TY"},{"name":"Tri Continental Corporation","symbol":"TY^"},{"name":"TRI Pointe Group, Inc.","symbol":"TPH"},{"name":"Triangle Capital Corporation","symbol":"TCAP"},{"name":"Triangle Capital Corporation","symbol":"TCCA"},{"name":"Triangle Capital Corporation","symbol":"TCCB"},{"name":"Tribune Media Company","symbol":"TRCO"},{"name":"Tribune Publishing Company","symbol":"TPUB"},{"name":"Trina Solar Limited","symbol":"TSL"},{"name":"TriNet Group, Inc.","symbol":"TNET"},{"name":"Trinity Industries, Inc.","symbol":"TRN"},{"name":"Trinseo S.A.","symbol":"TSE"},{"name":"TriplePoint Venture Growth BDC Corp.","symbol":"TPVG"},{"name":"TriplePoint Venture Growth BDC Corp.","symbol":"TPVZ"},{"name":"Triple-S Management Corporation","symbol":"GTS"},{"name":"Triumph Group, Inc.","symbol":"TGI"},{"name":"Tronox Limited","symbol":"TROX"},{"name":"TrueBlue, Inc.","symbol":"TBI"},{"name":"Trupanion, Inc.","symbol":"TRUP"},{"name":"Tsakos Energy Navigation Ltd","symbol":"TNP"},{"name":"Tsakos Energy Navigation Ltd","symbol":"TNP^B"},{"name":"Tsakos Energy Navigation Ltd","symbol":"TNP^C"},{"name":"Tsakos Energy Navigation Ltd","symbol":"TNP^D"},{"name":"Tumi Holdings, Inc.","symbol":"TUMI"},{"name":"Tupperware Brands Corporation","symbol":"TUP"},{"name":"Turkcell Iletisim Hizmetleri AS","symbol":"TKC"},{"name":"Turkish Investment Fund, Inc. (The)","symbol":"TKF"},{"name":"Turquoise Hill Resources Ltd.","symbol":"TRQ"},{"name":"Tutor Perini Corporation","symbol":"TPC"},{"name":"Twitter, Inc.","symbol":"TWTR"},{"name":"Two Harbors Investments Corp","symbol":"TWO"},{"name":"Tyco International plc","symbol":"TYC"},{"name":"Tyler Technologies, Inc.","symbol":"TYL"},{"name":"Tyson Foods, Inc.","symbol":"TSN"},{"name":"Tyson Foods, Inc.","symbol":"TSNU"},{"name":"U.S. Bancorp","symbol":"USB"},{"name":"U.S. Bancorp","symbol":"USB^A"},{"name":"U.S. Bancorp","symbol":"USB^H"},{"name":"U.S. Bancorp","symbol":"USB^M"},{"name":"U.S. Bancorp","symbol":"USB^N"},{"name":"U.S. Bancorp","symbol":"USB^O"},{"name":"U.S. Physical Therapy, Inc.","symbol":"USPH"},{"name":"U.S. Silica Holdings, Inc.","symbol":"SLCA"},{"name":"UBS AG","symbol":"UBS"},{"name":"UBS AG","symbol":"UBS^D"},{"name":"UCP, Inc.","symbol":"UCP"},{"name":"UGI Corporation","symbol":"UGI"},{"name":"UIL Holdings Corporation","symbol":"UIL"},{"name":"Ultra Petroleum Corp.","symbol":"UPL"},{"name":"Ultrapar Participacoes S.A.","symbol":"UGP"},{"name":"UMH Properties, Inc.","symbol":"UMH"},{"name":"UMH Properties, Inc.","symbol":"UMH^A"},{"name":"UMH Properties, Inc.","symbol":"UMH^B"},{"name":"Under Armour, Inc.","symbol":"UA"},{"name":"Unifi, Inc.","symbol":"UFI"},{"name":"Unifirst Corporation","symbol":"UNF"},{"name":"Unilever NV","symbol":"UN"},{"name":"Unilever PLC","symbol":"UL"},{"name":"Union Pacific Corporation","symbol":"UNP"},{"name":"Unisys Corporation","symbol":"UIS"},{"name":"Unit Corporation","symbol":"UNT"},{"name":"United Continental Holdings, Inc.","symbol":"UAL"},{"name":"United Dominion Realty Trust, Inc.","symbol":"UDR"},{"name":"United Microelectronics Corporation","symbol":"UMC"},{"name":"United Parcel Service, Inc.","symbol":"UPS"},{"name":"United Rentals, Inc.","symbol":"URI"},{"name":"United States Cellular Corporation","symbol":"USM"},{"name":"United States Cellular Corporation","symbol":"UZA"},{"name":"United States Cellular Corporation","symbol":"UZB"},{"name":"United States Cellular Corporation","symbol":"UZC"},{"name":"United States Steel Corporation","symbol":"X"},{"name":"United Technologies Corporation","symbol":"UTX"},{"name":"UnitedHealth Group Incorporated","symbol":"UNH"},{"name":"UNITIL Corporation","symbol":"UTL"},{"name":"Univar Inc.","symbol":"UNVR"},{"name":"Universal American Corp.","symbol":"UAM"},{"name":"Universal Corporation","symbol":"UVV"},{"name":"Universal Health Realty Income Trust","symbol":"UHT"},{"name":"Universal Health Services, Inc.","symbol":"UHS"},{"name":"UNIVERSAL INSURANCE HOLDINGS INC","symbol":"UVE"},{"name":"Universal Technical Institute Inc","symbol":"UTI"},{"name":"Unum Group","symbol":"UNM"},{"name":"Urban Edge Properties","symbol":"UE"},{"name":"Urstadt Biddle Properties Inc.","symbol":"UBA"},{"name":"Urstadt Biddle Properties Inc.","symbol":"UBP"},{"name":"Urstadt Biddle Properties Inc.","symbol":"UBP^F"},{"name":"Urstadt Biddle Properties Inc.","symbol":"UBP^G"},{"name":"USA Compression Partners, LP","symbol":"USAC"},{"name":"USANA Health Sciences, Inc.","symbol":"USNA"},{"name":"USD Partners LP","symbol":"USDP"},{"name":"USG Corporation","symbol":"USG"},{"name":"USLIFE Income Fund, Inc.","symbol":"BIF"},{"name":"V.F. Corporation","symbol":"VFC"},{"name":"Vaalco Energy Inc","symbol":"EGY"},{"name":"Vail Resorts, Inc.","symbol":"MTN"},{"name":"VALE S.A.","symbol":"VALE"},{"name":"VALE S.A.","symbol":"VALE.P"},{"name":"Valeant Pharmaceuticals International, Inc.","symbol":"VRX"},{"name":"Valero Energy Corporation","symbol":"VLO"},{"name":"Valero Energy Partners LP","symbol":"VLP"},{"name":"Valhi, Inc.","symbol":"VHI"},{"name":"Validus Holdings, Ltd.","symbol":"VR"},{"name":"Valley National Bancorp","symbol":"VLY"},{"name":"Valley National Bancorp","symbol":"VLY.WS"},{"name":"Valley National Bancorp","symbol":"VLY^A"},{"name":"Valmont Industries, Inc.","symbol":"VMI"},{"name":"Valspar Corporation (The)","symbol":"VAL"},{"name":"Vantiv, Inc.","symbol":"VNTV"},{"name":"Varian Medical Systems, Inc.","symbol":"VAR"},{"name":"Vector Group Ltd.","symbol":"VGR"},{"name":"Vectren Corporation","symbol":"VVC"},{"name":"Vectrus, Inc.","symbol":"VEC"},{"name":"Vedanta  Limited","symbol":"VEDL"},{"name":"Veeva Systems Inc.","symbol":"VEEV"},{"name":"Ventas Realty, Limited Partnership // Ventas Capital Corporati","symbol":"VTRB"},{"name":"Ventas, Inc.","symbol":"VTR"},{"name":"VEREIT Inc.","symbol":"VER"},{"name":"VEREIT Inc.","symbol":"VER^F"},{"name":"Verifone Systems, Inc.","symbol":"PAY"},{"name":"Veritiv Corporation","symbol":"VRTV"},{"name":"Verizon Communications Inc.","symbol":"VZ"},{"name":"Verizon Communications Inc.","symbol":"VZA"},{"name":"Vermilion Energy Inc.","symbol":"VET"},{"name":"Viad Corp","symbol":"VVI"},{"name":"Vina Concha Y Toro","symbol":"VCO"},{"name":"Vince Holding Corp.","symbol":"VNCE"},{"name":"Violin Memory, Inc.","symbol":"VMEM"},{"name":"Vipshop Holdings Limited","symbol":"VIPS"},{"name":"Virtus Global Multi-Sector Income Fund","symbol":"VGI"},{"name":"Virtus Total Return Fund","symbol":"DCA"},{"name":"Visa Inc.","symbol":"V"},{"name":"Vishay Intertechnology, Inc.","symbol":"VSH"},{"name":"Vishay Precision Group, Inc.","symbol":"VPG"},{"name":"Vista Outdoor Inc.","symbol":"VSTO"},{"name":"Visteon Corporation","symbol":"VC"},{"name":"Vitamin Shoppe, Inc","symbol":"VSI"},{"name":"Vivint Solar, Inc.","symbol":"VSLR"},{"name":"Vmware, Inc.","symbol":"VMW"},{"name":"VOC Energy Trust","symbol":"VOC"},{"name":"Vocera Communications, Inc.","symbol":"VCRA"},{"name":"Vonage Holdings Corp.","symbol":"VG"},{"name":"Vornado Realty Trust","symbol":"VNO"},{"name":"Vornado Realty Trust","symbol":"VNO^G"},{"name":"Vornado Realty Trust","symbol":"VNO^I"},{"name":"Vornado Realty Trust","symbol":"VNO^J"},{"name":"Vornado Realty Trust","symbol":"VNO^K"},{"name":"Vornado Realty Trust","symbol":"VNO^L"},{"name":"voxeljet AG","symbol":"VJET"},{"name":"Voya Asia Pacific High Dividend Equity Income Fund","symbol":"IAE"},{"name":"Voya Emerging Markets High Income Dividend Equity Fund","symbol":"IHD"},{"name":"Voya Financial, Inc.","symbol":"VOYA"},{"name":"Voya Global Advantage and Premium Opportunity Fund","symbol":"IGA"},{"name":"Voya Global Equity Dividend and Premium Opportunity Fund","symbol":"IGD"},{"name":"Voya Infrastructure, Industrials and Materials Fund","symbol":"IDE"},{"name":"Voya International High Dividend Equity Income Fund","symbol":"IID"},{"name":"Voya Natural Resources Equity Income Fund","symbol":"IRR"},{"name":"Voya Prime Rate Trust","symbol":"PPR"},{"name":"VTTI Energy Partners LP","symbol":"VTTI"},{"name":"Vulcan Materials Company","symbol":"VMC"},{"name":"W&T Offshore, Inc.","symbol":"WTI"},{"name":"W.P. Carey Inc.","symbol":"WPC"},{"name":"W.R. Berkley Corporation","symbol":"WRB"},{"name":"W.R. Berkley Corporation","symbol":"WRB^B"},{"name":"W.R. Grace & Co.","symbol":"GRA"},{"name":"W.W. Grainger, Inc.","symbol":"GWW"},{"name":"Wabash National Corporation","symbol":"WNC"},{"name":"Wabco Holdings Inc.","symbol":"WBC"},{"name":"Waddell & Reed Financial, Inc.","symbol":"WDR"},{"name":"WageWorks, Inc.","symbol":"WAGE"},{"name":"Walker & Dunlop, Inc.","symbol":"WD"},{"name":"Wal-Mart Stores, Inc.","symbol":"WMT"},{"name":"Walt Disney Company (The)","symbol":"DIS"},{"name":"Walter Investment Management Corp.","symbol":"WAC"},{"name":"Washington Real Estate Investment Trust","symbol":"WRE"},{"name":"Waste Connections, Inc.","symbol":"WCN"},{"name":"Waste Management, Inc.","symbol":"WM"},{"name":"Waters Corporation","symbol":"WAT"},{"name":"Watsco, Inc.","symbol":"WSO"},{"name":"Watsco, Inc.","symbol":"WSO.B"},{"name":"Watts Water Technologies, Inc.","symbol":"WTS"},{"name":"Wausau Paper Corp.","symbol":"WPP"},{"name":"Wayfair Inc.","symbol":"W"},{"name":"WCI Communities, Inc.","symbol":"WCIC"},{"name":"Weatherford International plc","symbol":"WFT"},{"name":"Webster Financial Corporation","symbol":"WBS"},{"name":"Webster Financial Corporation","symbol":"WBS.WS"},{"name":"Webster Financial Corporation","symbol":"WBS^E"},{"name":"WEC Energy Group, Inc.","symbol":"WEC"},{"name":"Weight Watchers International Inc","symbol":"WTW"},{"name":"Weingarten Realty Investors","symbol":"WRI"},{"name":"Weis Markets, Inc.","symbol":"WMK"},{"name":"WellCare Health Plans, Inc.","symbol":"WCG"},{"name":"Wells Fargo & Company","symbol":"WFC"},{"name":"Wells Fargo & Company","symbol":"WFC.WS"},{"name":"Wells Fargo & Company","symbol":"WFC^J"},{"name":"Wells Fargo & Company","symbol":"WFC^L"},{"name":"Wells Fargo & Company","symbol":"WFC^N"},{"name":"Wells Fargo & Company","symbol":"WFC^O"},{"name":"Wells Fargo & Company","symbol":"WFC^P"},{"name":"Wells Fargo & Company","symbol":"WFC^Q"},{"name":"Wells Fargo & Company","symbol":"WFC^R"},{"name":"Wells Fargo & Company","symbol":"WFC^T"},{"name":"Wells Fargo & Company","symbol":"WFC^V"},{"name":"Wells Fargo & Company","symbol":"WFE^A"},{"name":"Wells Fargo Advantage Global Dividend Opportunity Fund","symbol":"EOD"},{"name":"Welltower Inc.","symbol":"HCN"},{"name":"Welltower Inc.","symbol":"HCN^I"},{"name":"Welltower Inc.","symbol":"HCN^J"},{"name":"Wesco Aircraft Holdings, Inc.","symbol":"WAIR"},{"name":"WESCO International, Inc.","symbol":"WCC"},{"name":"West Pharmaceutical Services, Inc.","symbol":"WST"},{"name":"Westar Energy, Inc.","symbol":"WR"},{"name":"Western Alliance Bancorporation","symbol":"WAL"},{"name":"Western Asset Bond Fund","symbol":"WEA"},{"name":"Western Asset Emerging Markets Debt Fund Inc","symbol":"ESD"},{"name":"Western Asset Emerging Markets Income Fund, Inc","symbol":"EMD"},{"name":"Western Asset Global Corporate Defined Opportunity Fund Inc.","symbol":"GDO"},{"name":"Western Asset Global High Income Fund Inc","symbol":"EHI"},{"name":"Western Asset Global Partners Income Fund, Inc.","symbol":"GDF"},{"name":"Western Asset High Income Fund II Inc.","symbol":"HIX"},{"name":"Western Asset High Income Opportunity Fund, Inc.","symbol":"HIO"},{"name":"Western Asset High Yield Defined Opportunity Fund Inc.","symbol":"HYI"},{"name":"Western Asset Investment Grade Defined Opportunity Trust Inc.","symbol":"IGI"},{"name":"Western Asset Managed High Income Fund, Inc.","symbol":"MHY"},{"name":"Western Asset Managed Municipals Fund, Inc.","symbol":"MMU"},{"name":"Western Asset Mortgage Capital Corporation","symbol":"WMC"},{"name":"Western Asset Mortgage Defined Opportunity Fund Inc","symbol":"DMO"},{"name":"Western Asset Municipal Defined Opportunity Trust Inc","symbol":"MTT"},{"name":"Western Asset Municipal High Income Fund, Inc.","symbol":"MHF"},{"name":"Western Asset Municipal Partners Fund, Inc.","symbol":"MNP"},{"name":"Western Asset Variable Rate Strategic Fund Inc.","symbol":"GFY"},{"name":"Western Asset Worldwide Income Fund Inc.","symbol":"SBW"},{"name":"Western Asset/Claymore U.S Treasury Inflation Prot Secs Fd 2","symbol":"WIW"},{"name":"Western Asset/Claymore U.S. Treasury Inflation Prot Secs Fd","symbol":"WIA"},{"name":"Western Gas Equity Partners, LP","symbol":"WGP"},{"name":"Western Gas Partners, LP","symbol":"WES"},{"name":"Western Refining Logistics, LP","symbol":"WNRL"},{"name":"Western Refining, Inc.","symbol":"WNR"},{"name":"Western Union Company (The)","symbol":"WU"},{"name":"Westinghouse Air Brake Technologies Corporation","symbol":"WAB"},{"name":"Westlake Chemical Corporation","symbol":"WLK"},{"name":"Westlake Chemical Partners LP","symbol":"WLKP"},{"name":"Westmoreland Resource Partners, LP","symbol":"WMLP"},{"name":"Westpac Banking Corporation","symbol":"WBK"},{"name":"Westrock Company","symbol":"WRK"},{"name":"Westwood Holdings Group Inc","symbol":"WHG"},{"name":"WEX Inc.","symbol":"WEX"},{"name":"Weyerhaeuser Company","symbol":"WY"},{"name":"Weyerhaeuser Company","symbol":"WY^A"},{"name":"WGL Holdings Inc","symbol":"WGL"},{"name":"Whirlpool Corporation","symbol":"WHR"},{"name":"White Mountains Insurance Group, Ltd.","symbol":"WTM"},{"name":"Whitestone REIT","symbol":"WSR"},{"name":"Whitewave Foods Company (The)","symbol":"WWAV"},{"name":"Whiting Petroleum Corporation","symbol":"WLL"},{"name":"Whiting USA Trust II","symbol":"WHZ"},{"name":"Willbros Group, Inc.","symbol":"WG"},{"name":"Williams Companies, Inc. (The)","symbol":"WMB"},{"name":"Williams Partners LP","symbol":"WPZ"},{"name":"Williams-Sonoma, Inc.","symbol":"WSM"},{"name":"Willis Group Holdings Limited","symbol":"WSH"},{"name":"Winnebago Industries, Inc.","symbol":"WGO"},{"name":"Winthrop Realty Trust","symbol":"FUR"},{"name":"Wipro Limited","symbol":"WIT"},{"name":"WNS (Holdings) Limited","symbol":"WNS"},{"name":"Wolverine World Wide, Inc.","symbol":"WWW"},{"name":"Woori Bank","symbol":"WF"},{"name":"Workday, Inc.","symbol":"WDAY"},{"name":"Workiva Inc.","symbol":"WK"},{"name":"World Fuel Services Corporation","symbol":"INT"},{"name":"World Point Terminals, LP","symbol":"WPT"},{"name":"World Wrestling Entertainment, Inc.","symbol":"WWE"},{"name":"Worthington Industries, Inc.","symbol":"WOR"},{"name":"WP Glimcher Inc.","symbol":"WPG"},{"name":"WP Glimcher Inc.","symbol":"WPG^H"},{"name":"WP Glimcher Inc.","symbol":"WPG^I"},{"name":"WPX Energy, Inc.","symbol":"WPX"},{"name":"WPX Energy, Inc.","symbol":"WPXP"},{"name":"Wuxi Pharmatech (Cayman) Inc.","symbol":"WX"},{"name":"Wyndham Worldwide Corp","symbol":"WYN"},{"name":"Xactly Corporation","symbol":"XTLY"},{"name":"Xcel Energy Inc.","symbol":"XEL"},{"name":"Xenia Hotels & Resorts, Inc.","symbol":"XHR"},{"name":"Xerium Technologies, Inc.","symbol":"XRM"},{"name":"Xerox Corporation","symbol":"XRX"},{"name":"Xinyuan Real Estate Co Ltd","symbol":"XIN"},{"name":"XL Group plc","symbol":"XL"},{"name":"XO Group, Inc.","symbol":"XOXO"},{"name":"XPO Logistics, Inc.","symbol":"XPO"},{"name":"Xueda Education Group","symbol":"XUE"},{"name":"Xylem Inc.","symbol":"XYL"},{"name":"Yadkin Financial Corporation","symbol":"YDKN"},{"name":"Yamana Gold Inc.","symbol":"AUY"},{"name":"Yanzhou Coal Mining Company Limited","symbol":"YZC"},{"name":"Yelp Inc.","symbol":"YELP"},{"name":"Yingli Green Energy Holding Company Limited","symbol":"YGE"},{"name":"Youku Tudou Inc.","symbol":"YOKU"},{"name":"YPF Sociedad Anonima","symbol":"YPF"},{"name":"Yum! Brands, Inc.","symbol":"YUM"},{"name":"YuMe, Inc.","symbol":"YUME"},{"name":"ZAIS Financial Corp.","symbol":"ZFC"},{"name":"Zayo Group Holdings, Inc.","symbol":"ZAYO"},{"name":"Zendesk, Inc.","symbol":"ZEN"},{"name":"Zhaopin Limited","symbol":"ZPIN"},{"name":"Zimmer Biomet Holdings, Inc.","symbol":"ZBH"},{"name":"Zions Bancorporation","symbol":"ZB^A"},{"name":"Zions Bancorporation","symbol":"ZB^F"},{"name":"Zions Bancorporation","symbol":"ZB^G"},{"name":"Zions Bancorporation","symbol":"ZB^H"},{"name":"Zions Bancorporation","symbol":"ZBK"},{"name":"Zoe&#39;s Kitchen, Inc.","symbol":"ZOES"},{"name":"Zoetis Inc.","symbol":"ZTS"},{"name":"Zweig Fund, Inc. (The)","symbol":"ZF"},{"name":"Zweig Total Return Fund, Inc. (The)","symbol":"ZTR"}];

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module, global) {/**
	 * @license
	 * lodash 3.10.1 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modern -d -o ./index.js`
	 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */
	;(function() {

	  /** Used as a safe reference for `undefined` in pre-ES5 environments. */
	  var undefined;

	  /** Used as the semantic version number. */
	  var VERSION = '3.10.1';

	  /** Used to compose bitmasks for wrapper metadata. */
	  var BIND_FLAG = 1,
	      BIND_KEY_FLAG = 2,
	      CURRY_BOUND_FLAG = 4,
	      CURRY_FLAG = 8,
	      CURRY_RIGHT_FLAG = 16,
	      PARTIAL_FLAG = 32,
	      PARTIAL_RIGHT_FLAG = 64,
	      ARY_FLAG = 128,
	      REARG_FLAG = 256;

	  /** Used as default options for `_.trunc`. */
	  var DEFAULT_TRUNC_LENGTH = 30,
	      DEFAULT_TRUNC_OMISSION = '...';

	  /** Used to detect when a function becomes hot. */
	  var HOT_COUNT = 150,
	      HOT_SPAN = 16;

	  /** Used as the size to enable large array optimizations. */
	  var LARGE_ARRAY_SIZE = 200;

	  /** Used to indicate the type of lazy iteratees. */
	  var LAZY_FILTER_FLAG = 1,
	      LAZY_MAP_FLAG = 2;

	  /** Used as the `TypeError` message for "Functions" methods. */
	  var FUNC_ERROR_TEXT = 'Expected a function';

	  /** Used as the internal argument placeholder. */
	  var PLACEHOLDER = '__lodash_placeholder__';

	  /** `Object#toString` result references. */
	  var argsTag = '[object Arguments]',
	      arrayTag = '[object Array]',
	      boolTag = '[object Boolean]',
	      dateTag = '[object Date]',
	      errorTag = '[object Error]',
	      funcTag = '[object Function]',
	      mapTag = '[object Map]',
	      numberTag = '[object Number]',
	      objectTag = '[object Object]',
	      regexpTag = '[object RegExp]',
	      setTag = '[object Set]',
	      stringTag = '[object String]',
	      weakMapTag = '[object WeakMap]';

	  var arrayBufferTag = '[object ArrayBuffer]',
	      float32Tag = '[object Float32Array]',
	      float64Tag = '[object Float64Array]',
	      int8Tag = '[object Int8Array]',
	      int16Tag = '[object Int16Array]',
	      int32Tag = '[object Int32Array]',
	      uint8Tag = '[object Uint8Array]',
	      uint8ClampedTag = '[object Uint8ClampedArray]',
	      uint16Tag = '[object Uint16Array]',
	      uint32Tag = '[object Uint32Array]';

	  /** Used to match empty string literals in compiled template source. */
	  var reEmptyStringLeading = /\b__p \+= '';/g,
	      reEmptyStringMiddle = /\b(__p \+=) '' \+/g,
	      reEmptyStringTrailing = /(__e\(.*?\)|\b__t\)) \+\n'';/g;

	  /** Used to match HTML entities and HTML characters. */
	  var reEscapedHtml = /&(?:amp|lt|gt|quot|#39|#96);/g,
	      reUnescapedHtml = /[&<>"'`]/g,
	      reHasEscapedHtml = RegExp(reEscapedHtml.source),
	      reHasUnescapedHtml = RegExp(reUnescapedHtml.source);

	  /** Used to match template delimiters. */
	  var reEscape = /<%-([\s\S]+?)%>/g,
	      reEvaluate = /<%([\s\S]+?)%>/g,
	      reInterpolate = /<%=([\s\S]+?)%>/g;

	  /** Used to match property names within property paths. */
	  var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\n\\]|\\.)*?\1)\]/,
	      reIsPlainProp = /^\w*$/,
	      rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\n\\]|\\.)*?)\2)\]/g;

	  /**
	   * Used to match `RegExp` [syntax characters](http://ecma-international.org/ecma-262/6.0/#sec-patterns)
	   * and those outlined by [`EscapeRegExpPattern`](http://ecma-international.org/ecma-262/6.0/#sec-escaperegexppattern).
	   */
	  var reRegExpChars = /^[:!,]|[\\^$.*+?()[\]{}|\/]|(^[0-9a-fA-Fnrtuvx])|([\n\r\u2028\u2029])/g,
	      reHasRegExpChars = RegExp(reRegExpChars.source);

	  /** Used to match [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks). */
	  var reComboMark = /[\u0300-\u036f\ufe20-\ufe23]/g;

	  /** Used to match backslashes in property paths. */
	  var reEscapeChar = /\\(\\)?/g;

	  /** Used to match [ES template delimiters](http://ecma-international.org/ecma-262/6.0/#sec-template-literal-lexical-components). */
	  var reEsTemplate = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g;

	  /** Used to match `RegExp` flags from their coerced string values. */
	  var reFlags = /\w*$/;

	  /** Used to detect hexadecimal string values. */
	  var reHasHexPrefix = /^0[xX]/;

	  /** Used to detect host constructors (Safari > 5). */
	  var reIsHostCtor = /^\[object .+?Constructor\]$/;

	  /** Used to detect unsigned integer values. */
	  var reIsUint = /^\d+$/;

	  /** Used to match latin-1 supplementary letters (excluding mathematical operators). */
	  var reLatin1 = /[\xc0-\xd6\xd8-\xde\xdf-\xf6\xf8-\xff]/g;

	  /** Used to ensure capturing order of template delimiters. */
	  var reNoMatch = /($^)/;

	  /** Used to match unescaped characters in compiled string literals. */
	  var reUnescapedString = /['\n\r\u2028\u2029\\]/g;

	  /** Used to match words to create compound words. */
	  var reWords = (function() {
	    var upper = '[A-Z\\xc0-\\xd6\\xd8-\\xde]',
	        lower = '[a-z\\xdf-\\xf6\\xf8-\\xff]+';

	    return RegExp(upper + '+(?=' + upper + lower + ')|' + upper + '?' + lower + '|' + upper + '+|[0-9]+', 'g');
	  }());

	  /** Used to assign default `context` object properties. */
	  var contextProps = [
	    'Array', 'ArrayBuffer', 'Date', 'Error', 'Float32Array', 'Float64Array',
	    'Function', 'Int8Array', 'Int16Array', 'Int32Array', 'Math', 'Number',
	    'Object', 'RegExp', 'Set', 'String', '_', 'clearTimeout', 'isFinite',
	    'parseFloat', 'parseInt', 'setTimeout', 'TypeError', 'Uint8Array',
	    'Uint8ClampedArray', 'Uint16Array', 'Uint32Array', 'WeakMap'
	  ];

	  /** Used to make template sourceURLs easier to identify. */
	  var templateCounter = -1;

	  /** Used to identify `toStringTag` values of typed arrays. */
	  var typedArrayTags = {};
	  typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
	  typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
	  typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
	  typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
	  typedArrayTags[uint32Tag] = true;
	  typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
	  typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
	  typedArrayTags[dateTag] = typedArrayTags[errorTag] =
	  typedArrayTags[funcTag] = typedArrayTags[mapTag] =
	  typedArrayTags[numberTag] = typedArrayTags[objectTag] =
	  typedArrayTags[regexpTag] = typedArrayTags[setTag] =
	  typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;

	  /** Used to identify `toStringTag` values supported by `_.clone`. */
	  var cloneableTags = {};
	  cloneableTags[argsTag] = cloneableTags[arrayTag] =
	  cloneableTags[arrayBufferTag] = cloneableTags[boolTag] =
	  cloneableTags[dateTag] = cloneableTags[float32Tag] =
	  cloneableTags[float64Tag] = cloneableTags[int8Tag] =
	  cloneableTags[int16Tag] = cloneableTags[int32Tag] =
	  cloneableTags[numberTag] = cloneableTags[objectTag] =
	  cloneableTags[regexpTag] = cloneableTags[stringTag] =
	  cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
	  cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
	  cloneableTags[errorTag] = cloneableTags[funcTag] =
	  cloneableTags[mapTag] = cloneableTags[setTag] =
	  cloneableTags[weakMapTag] = false;

	  /** Used to map latin-1 supplementary letters to basic latin letters. */
	  var deburredLetters = {
	    '\xc0': 'A',  '\xc1': 'A', '\xc2': 'A', '\xc3': 'A', '\xc4': 'A', '\xc5': 'A',
	    '\xe0': 'a',  '\xe1': 'a', '\xe2': 'a', '\xe3': 'a', '\xe4': 'a', '\xe5': 'a',
	    '\xc7': 'C',  '\xe7': 'c',
	    '\xd0': 'D',  '\xf0': 'd',
	    '\xc8': 'E',  '\xc9': 'E', '\xca': 'E', '\xcb': 'E',
	    '\xe8': 'e',  '\xe9': 'e', '\xea': 'e', '\xeb': 'e',
	    '\xcC': 'I',  '\xcd': 'I', '\xce': 'I', '\xcf': 'I',
	    '\xeC': 'i',  '\xed': 'i', '\xee': 'i', '\xef': 'i',
	    '\xd1': 'N',  '\xf1': 'n',
	    '\xd2': 'O',  '\xd3': 'O', '\xd4': 'O', '\xd5': 'O', '\xd6': 'O', '\xd8': 'O',
	    '\xf2': 'o',  '\xf3': 'o', '\xf4': 'o', '\xf5': 'o', '\xf6': 'o', '\xf8': 'o',
	    '\xd9': 'U',  '\xda': 'U', '\xdb': 'U', '\xdc': 'U',
	    '\xf9': 'u',  '\xfa': 'u', '\xfb': 'u', '\xfc': 'u',
	    '\xdd': 'Y',  '\xfd': 'y', '\xff': 'y',
	    '\xc6': 'Ae', '\xe6': 'ae',
	    '\xde': 'Th', '\xfe': 'th',
	    '\xdf': 'ss'
	  };

	  /** Used to map characters to HTML entities. */
	  var htmlEscapes = {
	    '&': '&amp;',
	    '<': '&lt;',
	    '>': '&gt;',
	    '"': '&quot;',
	    "'": '&#39;',
	    '`': '&#96;'
	  };

	  /** Used to map HTML entities to characters. */
	  var htmlUnescapes = {
	    '&amp;': '&',
	    '&lt;': '<',
	    '&gt;': '>',
	    '&quot;': '"',
	    '&#39;': "'",
	    '&#96;': '`'
	  };

	  /** Used to determine if values are of the language type `Object`. */
	  var objectTypes = {
	    'function': true,
	    'object': true
	  };

	  /** Used to escape characters for inclusion in compiled regexes. */
	  var regexpEscapes = {
	    '0': 'x30', '1': 'x31', '2': 'x32', '3': 'x33', '4': 'x34',
	    '5': 'x35', '6': 'x36', '7': 'x37', '8': 'x38', '9': 'x39',
	    'A': 'x41', 'B': 'x42', 'C': 'x43', 'D': 'x44', 'E': 'x45', 'F': 'x46',
	    'a': 'x61', 'b': 'x62', 'c': 'x63', 'd': 'x64', 'e': 'x65', 'f': 'x66',
	    'n': 'x6e', 'r': 'x72', 't': 'x74', 'u': 'x75', 'v': 'x76', 'x': 'x78'
	  };

	  /** Used to escape characters for inclusion in compiled string literals. */
	  var stringEscapes = {
	    '\\': '\\',
	    "'": "'",
	    '\n': 'n',
	    '\r': 'r',
	    '\u2028': 'u2028',
	    '\u2029': 'u2029'
	  };

	  /** Detect free variable `exports`. */
	  var freeExports = objectTypes[typeof exports] && exports && !exports.nodeType && exports;

	  /** Detect free variable `module`. */
	  var freeModule = objectTypes[typeof module] && module && !module.nodeType && module;

	  /** Detect free variable `global` from Node.js. */
	  var freeGlobal = freeExports && freeModule && typeof global == 'object' && global && global.Object && global;

	  /** Detect free variable `self`. */
	  var freeSelf = objectTypes[typeof self] && self && self.Object && self;

	  /** Detect free variable `window`. */
	  var freeWindow = objectTypes[typeof window] && window && window.Object && window;

	  /** Detect the popular CommonJS extension `module.exports`. */
	  var moduleExports = freeModule && freeModule.exports === freeExports && freeExports;

	  /**
	   * Used as a reference to the global object.
	   *
	   * The `this` value is used if it's the global object to avoid Greasemonkey's
	   * restricted `window` object, otherwise the `window` object is used.
	   */
	  var root = freeGlobal || ((freeWindow !== (this && this.window)) && freeWindow) || freeSelf || this;

	  /*--------------------------------------------------------------------------*/

	  /**
	   * The base implementation of `compareAscending` which compares values and
	   * sorts them in ascending order without guaranteeing a stable sort.
	   *
	   * @private
	   * @param {*} value The value to compare.
	   * @param {*} other The other value to compare.
	   * @returns {number} Returns the sort order indicator for `value`.
	   */
	  function baseCompareAscending(value, other) {
	    if (value !== other) {
	      var valIsNull = value === null,
	          valIsUndef = value === undefined,
	          valIsReflexive = value === value;

	      var othIsNull = other === null,
	          othIsUndef = other === undefined,
	          othIsReflexive = other === other;

	      if ((value > other && !othIsNull) || !valIsReflexive ||
	          (valIsNull && !othIsUndef && othIsReflexive) ||
	          (valIsUndef && othIsReflexive)) {
	        return 1;
	      }
	      if ((value < other && !valIsNull) || !othIsReflexive ||
	          (othIsNull && !valIsUndef && valIsReflexive) ||
	          (othIsUndef && valIsReflexive)) {
	        return -1;
	      }
	    }
	    return 0;
	  }

	  /**
	   * The base implementation of `_.findIndex` and `_.findLastIndex` without
	   * support for callback shorthands and `this` binding.
	   *
	   * @private
	   * @param {Array} array The array to search.
	   * @param {Function} predicate The function invoked per iteration.
	   * @param {boolean} [fromRight] Specify iterating from right to left.
	   * @returns {number} Returns the index of the matched value, else `-1`.
	   */
	  function baseFindIndex(array, predicate, fromRight) {
	    var length = array.length,
	        index = fromRight ? length : -1;

	    while ((fromRight ? index-- : ++index < length)) {
	      if (predicate(array[index], index, array)) {
	        return index;
	      }
	    }
	    return -1;
	  }

	  /**
	   * The base implementation of `_.indexOf` without support for binary searches.
	   *
	   * @private
	   * @param {Array} array The array to search.
	   * @param {*} value The value to search for.
	   * @param {number} fromIndex The index to search from.
	   * @returns {number} Returns the index of the matched value, else `-1`.
	   */
	  function baseIndexOf(array, value, fromIndex) {
	    if (value !== value) {
	      return indexOfNaN(array, fromIndex);
	    }
	    var index = fromIndex - 1,
	        length = array.length;

	    while (++index < length) {
	      if (array[index] === value) {
	        return index;
	      }
	    }
	    return -1;
	  }

	  /**
	   * The base implementation of `_.isFunction` without support for environments
	   * with incorrect `typeof` results.
	   *
	   * @private
	   * @param {*} value The value to check.
	   * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	   */
	  function baseIsFunction(value) {
	    // Avoid a Chakra JIT bug in compatibility modes of IE 11.
	    // See https://github.com/jashkenas/underscore/issues/1621 for more details.
	    return typeof value == 'function' || false;
	  }

	  /**
	   * Converts `value` to a string if it's not one. An empty string is returned
	   * for `null` or `undefined` values.
	   *
	   * @private
	   * @param {*} value The value to process.
	   * @returns {string} Returns the string.
	   */
	  function baseToString(value) {
	    return value == null ? '' : (value + '');
	  }

	  /**
	   * Used by `_.trim` and `_.trimLeft` to get the index of the first character
	   * of `string` that is not found in `chars`.
	   *
	   * @private
	   * @param {string} string The string to inspect.
	   * @param {string} chars The characters to find.
	   * @returns {number} Returns the index of the first character not found in `chars`.
	   */
	  function charsLeftIndex(string, chars) {
	    var index = -1,
	        length = string.length;

	    while (++index < length && chars.indexOf(string.charAt(index)) > -1) {}
	    return index;
	  }

	  /**
	   * Used by `_.trim` and `_.trimRight` to get the index of the last character
	   * of `string` that is not found in `chars`.
	   *
	   * @private
	   * @param {string} string The string to inspect.
	   * @param {string} chars The characters to find.
	   * @returns {number} Returns the index of the last character not found in `chars`.
	   */
	  function charsRightIndex(string, chars) {
	    var index = string.length;

	    while (index-- && chars.indexOf(string.charAt(index)) > -1) {}
	    return index;
	  }

	  /**
	   * Used by `_.sortBy` to compare transformed elements of a collection and stable
	   * sort them in ascending order.
	   *
	   * @private
	   * @param {Object} object The object to compare.
	   * @param {Object} other The other object to compare.
	   * @returns {number} Returns the sort order indicator for `object`.
	   */
	  function compareAscending(object, other) {
	    return baseCompareAscending(object.criteria, other.criteria) || (object.index - other.index);
	  }

	  /**
	   * Used by `_.sortByOrder` to compare multiple properties of a value to another
	   * and stable sort them.
	   *
	   * If `orders` is unspecified, all valuess are sorted in ascending order. Otherwise,
	   * a value is sorted in ascending order if its corresponding order is "asc", and
	   * descending if "desc".
	   *
	   * @private
	   * @param {Object} object The object to compare.
	   * @param {Object} other The other object to compare.
	   * @param {boolean[]} orders The order to sort by for each property.
	   * @returns {number} Returns the sort order indicator for `object`.
	   */
	  function compareMultiple(object, other, orders) {
	    var index = -1,
	        objCriteria = object.criteria,
	        othCriteria = other.criteria,
	        length = objCriteria.length,
	        ordersLength = orders.length;

	    while (++index < length) {
	      var result = baseCompareAscending(objCriteria[index], othCriteria[index]);
	      if (result) {
	        if (index >= ordersLength) {
	          return result;
	        }
	        var order = orders[index];
	        return result * ((order === 'asc' || order === true) ? 1 : -1);
	      }
	    }
	    // Fixes an `Array#sort` bug in the JS engine embedded in Adobe applications
	    // that causes it, under certain circumstances, to provide the same value for
	    // `object` and `other`. See https://github.com/jashkenas/underscore/pull/1247
	    // for more details.
	    //
	    // This also ensures a stable sort in V8 and other engines.
	    // See https://code.google.com/p/v8/issues/detail?id=90 for more details.
	    return object.index - other.index;
	  }

	  /**
	   * Used by `_.deburr` to convert latin-1 supplementary letters to basic latin letters.
	   *
	   * @private
	   * @param {string} letter The matched letter to deburr.
	   * @returns {string} Returns the deburred letter.
	   */
	  function deburrLetter(letter) {
	    return deburredLetters[letter];
	  }

	  /**
	   * Used by `_.escape` to convert characters to HTML entities.
	   *
	   * @private
	   * @param {string} chr The matched character to escape.
	   * @returns {string} Returns the escaped character.
	   */
	  function escapeHtmlChar(chr) {
	    return htmlEscapes[chr];
	  }

	  /**
	   * Used by `_.escapeRegExp` to escape characters for inclusion in compiled regexes.
	   *
	   * @private
	   * @param {string} chr The matched character to escape.
	   * @param {string} leadingChar The capture group for a leading character.
	   * @param {string} whitespaceChar The capture group for a whitespace character.
	   * @returns {string} Returns the escaped character.
	   */
	  function escapeRegExpChar(chr, leadingChar, whitespaceChar) {
	    if (leadingChar) {
	      chr = regexpEscapes[chr];
	    } else if (whitespaceChar) {
	      chr = stringEscapes[chr];
	    }
	    return '\\' + chr;
	  }

	  /**
	   * Used by `_.template` to escape characters for inclusion in compiled string literals.
	   *
	   * @private
	   * @param {string} chr The matched character to escape.
	   * @returns {string} Returns the escaped character.
	   */
	  function escapeStringChar(chr) {
	    return '\\' + stringEscapes[chr];
	  }

	  /**
	   * Gets the index at which the first occurrence of `NaN` is found in `array`.
	   *
	   * @private
	   * @param {Array} array The array to search.
	   * @param {number} fromIndex The index to search from.
	   * @param {boolean} [fromRight] Specify iterating from right to left.
	   * @returns {number} Returns the index of the matched `NaN`, else `-1`.
	   */
	  function indexOfNaN(array, fromIndex, fromRight) {
	    var length = array.length,
	        index = fromIndex + (fromRight ? 0 : -1);

	    while ((fromRight ? index-- : ++index < length)) {
	      var other = array[index];
	      if (other !== other) {
	        return index;
	      }
	    }
	    return -1;
	  }

	  /**
	   * Checks if `value` is object-like.
	   *
	   * @private
	   * @param {*} value The value to check.
	   * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	   */
	  function isObjectLike(value) {
	    return !!value && typeof value == 'object';
	  }

	  /**
	   * Used by `trimmedLeftIndex` and `trimmedRightIndex` to determine if a
	   * character code is whitespace.
	   *
	   * @private
	   * @param {number} charCode The character code to inspect.
	   * @returns {boolean} Returns `true` if `charCode` is whitespace, else `false`.
	   */
	  function isSpace(charCode) {
	    return ((charCode <= 160 && (charCode >= 9 && charCode <= 13) || charCode == 32 || charCode == 160) || charCode == 5760 || charCode == 6158 ||
	      (charCode >= 8192 && (charCode <= 8202 || charCode == 8232 || charCode == 8233 || charCode == 8239 || charCode == 8287 || charCode == 12288 || charCode == 65279)));
	  }

	  /**
	   * Replaces all `placeholder` elements in `array` with an internal placeholder
	   * and returns an array of their indexes.
	   *
	   * @private
	   * @param {Array} array The array to modify.
	   * @param {*} placeholder The placeholder to replace.
	   * @returns {Array} Returns the new array of placeholder indexes.
	   */
	  function replaceHolders(array, placeholder) {
	    var index = -1,
	        length = array.length,
	        resIndex = -1,
	        result = [];

	    while (++index < length) {
	      if (array[index] === placeholder) {
	        array[index] = PLACEHOLDER;
	        result[++resIndex] = index;
	      }
	    }
	    return result;
	  }

	  /**
	   * An implementation of `_.uniq` optimized for sorted arrays without support
	   * for callback shorthands and `this` binding.
	   *
	   * @private
	   * @param {Array} array The array to inspect.
	   * @param {Function} [iteratee] The function invoked per iteration.
	   * @returns {Array} Returns the new duplicate-value-free array.
	   */
	  function sortedUniq(array, iteratee) {
	    var seen,
	        index = -1,
	        length = array.length,
	        resIndex = -1,
	        result = [];

	    while (++index < length) {
	      var value = array[index],
	          computed = iteratee ? iteratee(value, index, array) : value;

	      if (!index || seen !== computed) {
	        seen = computed;
	        result[++resIndex] = value;
	      }
	    }
	    return result;
	  }

	  /**
	   * Used by `_.trim` and `_.trimLeft` to get the index of the first non-whitespace
	   * character of `string`.
	   *
	   * @private
	   * @param {string} string The string to inspect.
	   * @returns {number} Returns the index of the first non-whitespace character.
	   */
	  function trimmedLeftIndex(string) {
	    var index = -1,
	        length = string.length;

	    while (++index < length && isSpace(string.charCodeAt(index))) {}
	    return index;
	  }

	  /**
	   * Used by `_.trim` and `_.trimRight` to get the index of the last non-whitespace
	   * character of `string`.
	   *
	   * @private
	   * @param {string} string The string to inspect.
	   * @returns {number} Returns the index of the last non-whitespace character.
	   */
	  function trimmedRightIndex(string) {
	    var index = string.length;

	    while (index-- && isSpace(string.charCodeAt(index))) {}
	    return index;
	  }

	  /**
	   * Used by `_.unescape` to convert HTML entities to characters.
	   *
	   * @private
	   * @param {string} chr The matched character to unescape.
	   * @returns {string} Returns the unescaped character.
	   */
	  function unescapeHtmlChar(chr) {
	    return htmlUnescapes[chr];
	  }

	  /*--------------------------------------------------------------------------*/

	  /**
	   * Create a new pristine `lodash` function using the given `context` object.
	   *
	   * @static
	   * @memberOf _
	   * @category Utility
	   * @param {Object} [context=root] The context object.
	   * @returns {Function} Returns a new `lodash` function.
	   * @example
	   *
	   * _.mixin({ 'foo': _.constant('foo') });
	   *
	   * var lodash = _.runInContext();
	   * lodash.mixin({ 'bar': lodash.constant('bar') });
	   *
	   * _.isFunction(_.foo);
	   * // => true
	   * _.isFunction(_.bar);
	   * // => false
	   *
	   * lodash.isFunction(lodash.foo);
	   * // => false
	   * lodash.isFunction(lodash.bar);
	   * // => true
	   *
	   * // using `context` to mock `Date#getTime` use in `_.now`
	   * var mock = _.runInContext({
	   *   'Date': function() {
	   *     return { 'getTime': getTimeMock };
	   *   }
	   * });
	   *
	   * // or creating a suped-up `defer` in Node.js
	   * var defer = _.runInContext({ 'setTimeout': setImmediate }).defer;
	   */
	  function runInContext(context) {
	    // Avoid issues with some ES3 environments that attempt to use values, named
	    // after built-in constructors like `Object`, for the creation of literals.
	    // ES5 clears this up by stating that literals must use built-in constructors.
	    // See https://es5.github.io/#x11.1.5 for more details.
	    context = context ? _.defaults(root.Object(), context, _.pick(root, contextProps)) : root;

	    /** Native constructor references. */
	    var Array = context.Array,
	        Date = context.Date,
	        Error = context.Error,
	        Function = context.Function,
	        Math = context.Math,
	        Number = context.Number,
	        Object = context.Object,
	        RegExp = context.RegExp,
	        String = context.String,
	        TypeError = context.TypeError;

	    /** Used for native method references. */
	    var arrayProto = Array.prototype,
	        objectProto = Object.prototype,
	        stringProto = String.prototype;

	    /** Used to resolve the decompiled source of functions. */
	    var fnToString = Function.prototype.toString;

	    /** Used to check objects for own properties. */
	    var hasOwnProperty = objectProto.hasOwnProperty;

	    /** Used to generate unique IDs. */
	    var idCounter = 0;

	    /**
	     * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	     * of values.
	     */
	    var objToString = objectProto.toString;

	    /** Used to restore the original `_` reference in `_.noConflict`. */
	    var oldDash = root._;

	    /** Used to detect if a method is native. */
	    var reIsNative = RegExp('^' +
	      fnToString.call(hasOwnProperty).replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
	      .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
	    );

	    /** Native method references. */
	    var ArrayBuffer = context.ArrayBuffer,
	        clearTimeout = context.clearTimeout,
	        parseFloat = context.parseFloat,
	        pow = Math.pow,
	        propertyIsEnumerable = objectProto.propertyIsEnumerable,
	        Set = getNative(context, 'Set'),
	        setTimeout = context.setTimeout,
	        splice = arrayProto.splice,
	        Uint8Array = context.Uint8Array,
	        WeakMap = getNative(context, 'WeakMap');

	    /* Native method references for those with the same name as other `lodash` methods. */
	    var nativeCeil = Math.ceil,
	        nativeCreate = getNative(Object, 'create'),
	        nativeFloor = Math.floor,
	        nativeIsArray = getNative(Array, 'isArray'),
	        nativeIsFinite = context.isFinite,
	        nativeKeys = getNative(Object, 'keys'),
	        nativeMax = Math.max,
	        nativeMin = Math.min,
	        nativeNow = getNative(Date, 'now'),
	        nativeParseInt = context.parseInt,
	        nativeRandom = Math.random;

	    /** Used as references for `-Infinity` and `Infinity`. */
	    var NEGATIVE_INFINITY = Number.NEGATIVE_INFINITY,
	        POSITIVE_INFINITY = Number.POSITIVE_INFINITY;

	    /** Used as references for the maximum length and index of an array. */
	    var MAX_ARRAY_LENGTH = 4294967295,
	        MAX_ARRAY_INDEX = MAX_ARRAY_LENGTH - 1,
	        HALF_MAX_ARRAY_LENGTH = MAX_ARRAY_LENGTH >>> 1;

	    /**
	     * Used as the [maximum length](http://ecma-international.org/ecma-262/6.0/#sec-number.max_safe_integer)
	     * of an array-like value.
	     */
	    var MAX_SAFE_INTEGER = 9007199254740991;

	    /** Used to store function metadata. */
	    var metaMap = WeakMap && new WeakMap;

	    /** Used to lookup unminified function names. */
	    var realNames = {};

	    /*------------------------------------------------------------------------*/

	    /**
	     * Creates a `lodash` object which wraps `value` to enable implicit chaining.
	     * Methods that operate on and return arrays, collections, and functions can
	     * be chained together. Methods that retrieve a single value or may return a
	     * primitive value will automatically end the chain returning the unwrapped
	     * value. Explicit chaining may be enabled using `_.chain`. The execution of
	     * chained methods is lazy, that is, execution is deferred until `_#value`
	     * is implicitly or explicitly called.
	     *
	     * Lazy evaluation allows several methods to support shortcut fusion. Shortcut
	     * fusion is an optimization strategy which merge iteratee calls; this can help
	     * to avoid the creation of intermediate data structures and greatly reduce the
	     * number of iteratee executions.
	     *
	     * Chaining is supported in custom builds as long as the `_#value` method is
	     * directly or indirectly included in the build.
	     *
	     * In addition to lodash methods, wrappers have `Array` and `String` methods.
	     *
	     * The wrapper `Array` methods are:
	     * `concat`, `join`, `pop`, `push`, `reverse`, `shift`, `slice`, `sort`,
	     * `splice`, and `unshift`
	     *
	     * The wrapper `String` methods are:
	     * `replace` and `split`
	     *
	     * The wrapper methods that support shortcut fusion are:
	     * `compact`, `drop`, `dropRight`, `dropRightWhile`, `dropWhile`, `filter`,
	     * `first`, `initial`, `last`, `map`, `pluck`, `reject`, `rest`, `reverse`,
	     * `slice`, `take`, `takeRight`, `takeRightWhile`, `takeWhile`, `toArray`,
	     * and `where`
	     *
	     * The chainable wrapper methods are:
	     * `after`, `ary`, `assign`, `at`, `before`, `bind`, `bindAll`, `bindKey`,
	     * `callback`, `chain`, `chunk`, `commit`, `compact`, `concat`, `constant`,
	     * `countBy`, `create`, `curry`, `debounce`, `defaults`, `defaultsDeep`,
	     * `defer`, `delay`, `difference`, `drop`, `dropRight`, `dropRightWhile`,
	     * `dropWhile`, `fill`, `filter`, `flatten`, `flattenDeep`, `flow`, `flowRight`,
	     * `forEach`, `forEachRight`, `forIn`, `forInRight`, `forOwn`, `forOwnRight`,
	     * `functions`, `groupBy`, `indexBy`, `initial`, `intersection`, `invert`,
	     * `invoke`, `keys`, `keysIn`, `map`, `mapKeys`, `mapValues`, `matches`,
	     * `matchesProperty`, `memoize`, `merge`, `method`, `methodOf`, `mixin`,
	     * `modArgs`, `negate`, `omit`, `once`, `pairs`, `partial`, `partialRight`,
	     * `partition`, `pick`, `plant`, `pluck`, `property`, `propertyOf`, `pull`,
	     * `pullAt`, `push`, `range`, `rearg`, `reject`, `remove`, `rest`, `restParam`,
	     * `reverse`, `set`, `shuffle`, `slice`, `sort`, `sortBy`, `sortByAll`,
	     * `sortByOrder`, `splice`, `spread`, `take`, `takeRight`, `takeRightWhile`,
	     * `takeWhile`, `tap`, `throttle`, `thru`, `times`, `toArray`, `toPlainObject`,
	     * `transform`, `union`, `uniq`, `unshift`, `unzip`, `unzipWith`, `values`,
	     * `valuesIn`, `where`, `without`, `wrap`, `xor`, `zip`, `zipObject`, `zipWith`
	     *
	     * The wrapper methods that are **not** chainable by default are:
	     * `add`, `attempt`, `camelCase`, `capitalize`, `ceil`, `clone`, `cloneDeep`,
	     * `deburr`, `endsWith`, `escape`, `escapeRegExp`, `every`, `find`, `findIndex`,
	     * `findKey`, `findLast`, `findLastIndex`, `findLastKey`, `findWhere`, `first`,
	     * `floor`, `get`, `gt`, `gte`, `has`, `identity`, `includes`, `indexOf`,
	     * `inRange`, `isArguments`, `isArray`, `isBoolean`, `isDate`, `isElement`,
	     * `isEmpty`, `isEqual`, `isError`, `isFinite` `isFunction`, `isMatch`,
	     * `isNative`, `isNaN`, `isNull`, `isNumber`, `isObject`, `isPlainObject`,
	     * `isRegExp`, `isString`, `isUndefined`, `isTypedArray`, `join`, `kebabCase`,
	     * `last`, `lastIndexOf`, `lt`, `lte`, `max`, `min`, `noConflict`, `noop`,
	     * `now`, `pad`, `padLeft`, `padRight`, `parseInt`, `pop`, `random`, `reduce`,
	     * `reduceRight`, `repeat`, `result`, `round`, `runInContext`, `shift`, `size`,
	     * `snakeCase`, `some`, `sortedIndex`, `sortedLastIndex`, `startCase`,
	     * `startsWith`, `sum`, `template`, `trim`, `trimLeft`, `trimRight`, `trunc`,
	     * `unescape`, `uniqueId`, `value`, and `words`
	     *
	     * The wrapper method `sample` will return a wrapped value when `n` is provided,
	     * otherwise an unwrapped value is returned.
	     *
	     * @name _
	     * @constructor
	     * @category Chain
	     * @param {*} value The value to wrap in a `lodash` instance.
	     * @returns {Object} Returns the new `lodash` wrapper instance.
	     * @example
	     *
	     * var wrapped = _([1, 2, 3]);
	     *
	     * // returns an unwrapped value
	     * wrapped.reduce(function(total, n) {
	     *   return total + n;
	     * });
	     * // => 6
	     *
	     * // returns a wrapped value
	     * var squares = wrapped.map(function(n) {
	     *   return n * n;
	     * });
	     *
	     * _.isArray(squares);
	     * // => false
	     *
	     * _.isArray(squares.value());
	     * // => true
	     */
	    function lodash(value) {
	      if (isObjectLike(value) && !isArray(value) && !(value instanceof LazyWrapper)) {
	        if (value instanceof LodashWrapper) {
	          return value;
	        }
	        if (hasOwnProperty.call(value, '__chain__') && hasOwnProperty.call(value, '__wrapped__')) {
	          return wrapperClone(value);
	        }
	      }
	      return new LodashWrapper(value);
	    }

	    /**
	     * The function whose prototype all chaining wrappers inherit from.
	     *
	     * @private
	     */
	    function baseLodash() {
	      // No operation performed.
	    }

	    /**
	     * The base constructor for creating `lodash` wrapper objects.
	     *
	     * @private
	     * @param {*} value The value to wrap.
	     * @param {boolean} [chainAll] Enable chaining for all wrapper methods.
	     * @param {Array} [actions=[]] Actions to peform to resolve the unwrapped value.
	     */
	    function LodashWrapper(value, chainAll, actions) {
	      this.__wrapped__ = value;
	      this.__actions__ = actions || [];
	      this.__chain__ = !!chainAll;
	    }

	    /**
	     * An object environment feature flags.
	     *
	     * @static
	     * @memberOf _
	     * @type Object
	     */
	    var support = lodash.support = {};

	    /**
	     * By default, the template delimiters used by lodash are like those in
	     * embedded Ruby (ERB). Change the following template settings to use
	     * alternative delimiters.
	     *
	     * @static
	     * @memberOf _
	     * @type Object
	     */
	    lodash.templateSettings = {

	      /**
	       * Used to detect `data` property values to be HTML-escaped.
	       *
	       * @memberOf _.templateSettings
	       * @type RegExp
	       */
	      'escape': reEscape,

	      /**
	       * Used to detect code to be evaluated.
	       *
	       * @memberOf _.templateSettings
	       * @type RegExp
	       */
	      'evaluate': reEvaluate,

	      /**
	       * Used to detect `data` property values to inject.
	       *
	       * @memberOf _.templateSettings
	       * @type RegExp
	       */
	      'interpolate': reInterpolate,

	      /**
	       * Used to reference the data object in the template text.
	       *
	       * @memberOf _.templateSettings
	       * @type string
	       */
	      'variable': '',

	      /**
	       * Used to import variables into the compiled template.
	       *
	       * @memberOf _.templateSettings
	       * @type Object
	       */
	      'imports': {

	        /**
	         * A reference to the `lodash` function.
	         *
	         * @memberOf _.templateSettings.imports
	         * @type Function
	         */
	        '_': lodash
	      }
	    };

	    /*------------------------------------------------------------------------*/

	    /**
	     * Creates a lazy wrapper object which wraps `value` to enable lazy evaluation.
	     *
	     * @private
	     * @param {*} value The value to wrap.
	     */
	    function LazyWrapper(value) {
	      this.__wrapped__ = value;
	      this.__actions__ = [];
	      this.__dir__ = 1;
	      this.__filtered__ = false;
	      this.__iteratees__ = [];
	      this.__takeCount__ = POSITIVE_INFINITY;
	      this.__views__ = [];
	    }

	    /**
	     * Creates a clone of the lazy wrapper object.
	     *
	     * @private
	     * @name clone
	     * @memberOf LazyWrapper
	     * @returns {Object} Returns the cloned `LazyWrapper` object.
	     */
	    function lazyClone() {
	      var result = new LazyWrapper(this.__wrapped__);
	      result.__actions__ = arrayCopy(this.__actions__);
	      result.__dir__ = this.__dir__;
	      result.__filtered__ = this.__filtered__;
	      result.__iteratees__ = arrayCopy(this.__iteratees__);
	      result.__takeCount__ = this.__takeCount__;
	      result.__views__ = arrayCopy(this.__views__);
	      return result;
	    }

	    /**
	     * Reverses the direction of lazy iteration.
	     *
	     * @private
	     * @name reverse
	     * @memberOf LazyWrapper
	     * @returns {Object} Returns the new reversed `LazyWrapper` object.
	     */
	    function lazyReverse() {
	      if (this.__filtered__) {
	        var result = new LazyWrapper(this);
	        result.__dir__ = -1;
	        result.__filtered__ = true;
	      } else {
	        result = this.clone();
	        result.__dir__ *= -1;
	      }
	      return result;
	    }

	    /**
	     * Extracts the unwrapped value from its lazy wrapper.
	     *
	     * @private
	     * @name value
	     * @memberOf LazyWrapper
	     * @returns {*} Returns the unwrapped value.
	     */
	    function lazyValue() {
	      var array = this.__wrapped__.value(),
	          dir = this.__dir__,
	          isArr = isArray(array),
	          isRight = dir < 0,
	          arrLength = isArr ? array.length : 0,
	          view = getView(0, arrLength, this.__views__),
	          start = view.start,
	          end = view.end,
	          length = end - start,
	          index = isRight ? end : (start - 1),
	          iteratees = this.__iteratees__,
	          iterLength = iteratees.length,
	          resIndex = 0,
	          takeCount = nativeMin(length, this.__takeCount__);

	      if (!isArr || arrLength < LARGE_ARRAY_SIZE || (arrLength == length && takeCount == length)) {
	        return baseWrapperValue((isRight && isArr) ? array.reverse() : array, this.__actions__);
	      }
	      var result = [];

	      outer:
	      while (length-- && resIndex < takeCount) {
	        index += dir;

	        var iterIndex = -1,
	            value = array[index];

	        while (++iterIndex < iterLength) {
	          var data = iteratees[iterIndex],
	              iteratee = data.iteratee,
	              type = data.type,
	              computed = iteratee(value);

	          if (type == LAZY_MAP_FLAG) {
	            value = computed;
	          } else if (!computed) {
	            if (type == LAZY_FILTER_FLAG) {
	              continue outer;
	            } else {
	              break outer;
	            }
	          }
	        }
	        result[resIndex++] = value;
	      }
	      return result;
	    }

	    /*------------------------------------------------------------------------*/

	    /**
	     * Creates a cache object to store key/value pairs.
	     *
	     * @private
	     * @static
	     * @name Cache
	     * @memberOf _.memoize
	     */
	    function MapCache() {
	      this.__data__ = {};
	    }

	    /**
	     * Removes `key` and its value from the cache.
	     *
	     * @private
	     * @name delete
	     * @memberOf _.memoize.Cache
	     * @param {string} key The key of the value to remove.
	     * @returns {boolean} Returns `true` if the entry was removed successfully, else `false`.
	     */
	    function mapDelete(key) {
	      return this.has(key) && delete this.__data__[key];
	    }

	    /**
	     * Gets the cached value for `key`.
	     *
	     * @private
	     * @name get
	     * @memberOf _.memoize.Cache
	     * @param {string} key The key of the value to get.
	     * @returns {*} Returns the cached value.
	     */
	    function mapGet(key) {
	      return key == '__proto__' ? undefined : this.__data__[key];
	    }

	    /**
	     * Checks if a cached value for `key` exists.
	     *
	     * @private
	     * @name has
	     * @memberOf _.memoize.Cache
	     * @param {string} key The key of the entry to check.
	     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	     */
	    function mapHas(key) {
	      return key != '__proto__' && hasOwnProperty.call(this.__data__, key);
	    }

	    /**
	     * Sets `value` to `key` of the cache.
	     *
	     * @private
	     * @name set
	     * @memberOf _.memoize.Cache
	     * @param {string} key The key of the value to cache.
	     * @param {*} value The value to cache.
	     * @returns {Object} Returns the cache object.
	     */
	    function mapSet(key, value) {
	      if (key != '__proto__') {
	        this.__data__[key] = value;
	      }
	      return this;
	    }

	    /*------------------------------------------------------------------------*/

	    /**
	     *
	     * Creates a cache object to store unique values.
	     *
	     * @private
	     * @param {Array} [values] The values to cache.
	     */
	    function SetCache(values) {
	      var length = values ? values.length : 0;

	      this.data = { 'hash': nativeCreate(null), 'set': new Set };
	      while (length--) {
	        this.push(values[length]);
	      }
	    }

	    /**
	     * Checks if `value` is in `cache` mimicking the return signature of
	     * `_.indexOf` by returning `0` if the value is found, else `-1`.
	     *
	     * @private
	     * @param {Object} cache The cache to search.
	     * @param {*} value The value to search for.
	     * @returns {number} Returns `0` if `value` is found, else `-1`.
	     */
	    function cacheIndexOf(cache, value) {
	      var data = cache.data,
	          result = (typeof value == 'string' || isObject(value)) ? data.set.has(value) : data.hash[value];

	      return result ? 0 : -1;
	    }

	    /**
	     * Adds `value` to the cache.
	     *
	     * @private
	     * @name push
	     * @memberOf SetCache
	     * @param {*} value The value to cache.
	     */
	    function cachePush(value) {
	      var data = this.data;
	      if (typeof value == 'string' || isObject(value)) {
	        data.set.add(value);
	      } else {
	        data.hash[value] = true;
	      }
	    }

	    /*------------------------------------------------------------------------*/

	    /**
	     * Creates a new array joining `array` with `other`.
	     *
	     * @private
	     * @param {Array} array The array to join.
	     * @param {Array} other The other array to join.
	     * @returns {Array} Returns the new concatenated array.
	     */
	    function arrayConcat(array, other) {
	      var index = -1,
	          length = array.length,
	          othIndex = -1,
	          othLength = other.length,
	          result = Array(length + othLength);

	      while (++index < length) {
	        result[index] = array[index];
	      }
	      while (++othIndex < othLength) {
	        result[index++] = other[othIndex];
	      }
	      return result;
	    }

	    /**
	     * Copies the values of `source` to `array`.
	     *
	     * @private
	     * @param {Array} source The array to copy values from.
	     * @param {Array} [array=[]] The array to copy values to.
	     * @returns {Array} Returns `array`.
	     */
	    function arrayCopy(source, array) {
	      var index = -1,
	          length = source.length;

	      array || (array = Array(length));
	      while (++index < length) {
	        array[index] = source[index];
	      }
	      return array;
	    }

	    /**
	     * A specialized version of `_.forEach` for arrays without support for callback
	     * shorthands and `this` binding.
	     *
	     * @private
	     * @param {Array} array The array to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @returns {Array} Returns `array`.
	     */
	    function arrayEach(array, iteratee) {
	      var index = -1,
	          length = array.length;

	      while (++index < length) {
	        if (iteratee(array[index], index, array) === false) {
	          break;
	        }
	      }
	      return array;
	    }

	    /**
	     * A specialized version of `_.forEachRight` for arrays without support for
	     * callback shorthands and `this` binding.
	     *
	     * @private
	     * @param {Array} array The array to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @returns {Array} Returns `array`.
	     */
	    function arrayEachRight(array, iteratee) {
	      var length = array.length;

	      while (length--) {
	        if (iteratee(array[length], length, array) === false) {
	          break;
	        }
	      }
	      return array;
	    }

	    /**
	     * A specialized version of `_.every` for arrays without support for callback
	     * shorthands and `this` binding.
	     *
	     * @private
	     * @param {Array} array The array to iterate over.
	     * @param {Function} predicate The function invoked per iteration.
	     * @returns {boolean} Returns `true` if all elements pass the predicate check,
	     *  else `false`.
	     */
	    function arrayEvery(array, predicate) {
	      var index = -1,
	          length = array.length;

	      while (++index < length) {
	        if (!predicate(array[index], index, array)) {
	          return false;
	        }
	      }
	      return true;
	    }

	    /**
	     * A specialized version of `baseExtremum` for arrays which invokes `iteratee`
	     * with one argument: (value).
	     *
	     * @private
	     * @param {Array} array The array to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @param {Function} comparator The function used to compare values.
	     * @param {*} exValue The initial extremum value.
	     * @returns {*} Returns the extremum value.
	     */
	    function arrayExtremum(array, iteratee, comparator, exValue) {
	      var index = -1,
	          length = array.length,
	          computed = exValue,
	          result = computed;

	      while (++index < length) {
	        var value = array[index],
	            current = +iteratee(value);

	        if (comparator(current, computed)) {
	          computed = current;
	          result = value;
	        }
	      }
	      return result;
	    }

	    /**
	     * A specialized version of `_.filter` for arrays without support for callback
	     * shorthands and `this` binding.
	     *
	     * @private
	     * @param {Array} array The array to iterate over.
	     * @param {Function} predicate The function invoked per iteration.
	     * @returns {Array} Returns the new filtered array.
	     */
	    function arrayFilter(array, predicate) {
	      var index = -1,
	          length = array.length,
	          resIndex = -1,
	          result = [];

	      while (++index < length) {
	        var value = array[index];
	        if (predicate(value, index, array)) {
	          result[++resIndex] = value;
	        }
	      }
	      return result;
	    }

	    /**
	     * A specialized version of `_.map` for arrays without support for callback
	     * shorthands and `this` binding.
	     *
	     * @private
	     * @param {Array} array The array to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @returns {Array} Returns the new mapped array.
	     */
	    function arrayMap(array, iteratee) {
	      var index = -1,
	          length = array.length,
	          result = Array(length);

	      while (++index < length) {
	        result[index] = iteratee(array[index], index, array);
	      }
	      return result;
	    }

	    /**
	     * Appends the elements of `values` to `array`.
	     *
	     * @private
	     * @param {Array} array The array to modify.
	     * @param {Array} values The values to append.
	     * @returns {Array} Returns `array`.
	     */
	    function arrayPush(array, values) {
	      var index = -1,
	          length = values.length,
	          offset = array.length;

	      while (++index < length) {
	        array[offset + index] = values[index];
	      }
	      return array;
	    }

	    /**
	     * A specialized version of `_.reduce` for arrays without support for callback
	     * shorthands and `this` binding.
	     *
	     * @private
	     * @param {Array} array The array to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @param {*} [accumulator] The initial value.
	     * @param {boolean} [initFromArray] Specify using the first element of `array`
	     *  as the initial value.
	     * @returns {*} Returns the accumulated value.
	     */
	    function arrayReduce(array, iteratee, accumulator, initFromArray) {
	      var index = -1,
	          length = array.length;

	      if (initFromArray && length) {
	        accumulator = array[++index];
	      }
	      while (++index < length) {
	        accumulator = iteratee(accumulator, array[index], index, array);
	      }
	      return accumulator;
	    }

	    /**
	     * A specialized version of `_.reduceRight` for arrays without support for
	     * callback shorthands and `this` binding.
	     *
	     * @private
	     * @param {Array} array The array to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @param {*} [accumulator] The initial value.
	     * @param {boolean} [initFromArray] Specify using the last element of `array`
	     *  as the initial value.
	     * @returns {*} Returns the accumulated value.
	     */
	    function arrayReduceRight(array, iteratee, accumulator, initFromArray) {
	      var length = array.length;
	      if (initFromArray && length) {
	        accumulator = array[--length];
	      }
	      while (length--) {
	        accumulator = iteratee(accumulator, array[length], length, array);
	      }
	      return accumulator;
	    }

	    /**
	     * A specialized version of `_.some` for arrays without support for callback
	     * shorthands and `this` binding.
	     *
	     * @private
	     * @param {Array} array The array to iterate over.
	     * @param {Function} predicate The function invoked per iteration.
	     * @returns {boolean} Returns `true` if any element passes the predicate check,
	     *  else `false`.
	     */
	    function arraySome(array, predicate) {
	      var index = -1,
	          length = array.length;

	      while (++index < length) {
	        if (predicate(array[index], index, array)) {
	          return true;
	        }
	      }
	      return false;
	    }

	    /**
	     * A specialized version of `_.sum` for arrays without support for callback
	     * shorthands and `this` binding..
	     *
	     * @private
	     * @param {Array} array The array to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @returns {number} Returns the sum.
	     */
	    function arraySum(array, iteratee) {
	      var length = array.length,
	          result = 0;

	      while (length--) {
	        result += +iteratee(array[length]) || 0;
	      }
	      return result;
	    }

	    /**
	     * Used by `_.defaults` to customize its `_.assign` use.
	     *
	     * @private
	     * @param {*} objectValue The destination object property value.
	     * @param {*} sourceValue The source object property value.
	     * @returns {*} Returns the value to assign to the destination object.
	     */
	    function assignDefaults(objectValue, sourceValue) {
	      return objectValue === undefined ? sourceValue : objectValue;
	    }

	    /**
	     * Used by `_.template` to customize its `_.assign` use.
	     *
	     * **Note:** This function is like `assignDefaults` except that it ignores
	     * inherited property values when checking if a property is `undefined`.
	     *
	     * @private
	     * @param {*} objectValue The destination object property value.
	     * @param {*} sourceValue The source object property value.
	     * @param {string} key The key associated with the object and source values.
	     * @param {Object} object The destination object.
	     * @returns {*} Returns the value to assign to the destination object.
	     */
	    function assignOwnDefaults(objectValue, sourceValue, key, object) {
	      return (objectValue === undefined || !hasOwnProperty.call(object, key))
	        ? sourceValue
	        : objectValue;
	    }

	    /**
	     * A specialized version of `_.assign` for customizing assigned values without
	     * support for argument juggling, multiple sources, and `this` binding `customizer`
	     * functions.
	     *
	     * @private
	     * @param {Object} object The destination object.
	     * @param {Object} source The source object.
	     * @param {Function} customizer The function to customize assigned values.
	     * @returns {Object} Returns `object`.
	     */
	    function assignWith(object, source, customizer) {
	      var index = -1,
	          props = keys(source),
	          length = props.length;

	      while (++index < length) {
	        var key = props[index],
	            value = object[key],
	            result = customizer(value, source[key], key, object, source);

	        if ((result === result ? (result !== value) : (value === value)) ||
	            (value === undefined && !(key in object))) {
	          object[key] = result;
	        }
	      }
	      return object;
	    }

	    /**
	     * The base implementation of `_.assign` without support for argument juggling,
	     * multiple sources, and `customizer` functions.
	     *
	     * @private
	     * @param {Object} object The destination object.
	     * @param {Object} source The source object.
	     * @returns {Object} Returns `object`.
	     */
	    function baseAssign(object, source) {
	      return source == null
	        ? object
	        : baseCopy(source, keys(source), object);
	    }

	    /**
	     * The base implementation of `_.at` without support for string collections
	     * and individual key arguments.
	     *
	     * @private
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {number[]|string[]} props The property names or indexes of elements to pick.
	     * @returns {Array} Returns the new array of picked elements.
	     */
	    function baseAt(collection, props) {
	      var index = -1,
	          isNil = collection == null,
	          isArr = !isNil && isArrayLike(collection),
	          length = isArr ? collection.length : 0,
	          propsLength = props.length,
	          result = Array(propsLength);

	      while(++index < propsLength) {
	        var key = props[index];
	        if (isArr) {
	          result[index] = isIndex(key, length) ? collection[key] : undefined;
	        } else {
	          result[index] = isNil ? undefined : collection[key];
	        }
	      }
	      return result;
	    }

	    /**
	     * Copies properties of `source` to `object`.
	     *
	     * @private
	     * @param {Object} source The object to copy properties from.
	     * @param {Array} props The property names to copy.
	     * @param {Object} [object={}] The object to copy properties to.
	     * @returns {Object} Returns `object`.
	     */
	    function baseCopy(source, props, object) {
	      object || (object = {});

	      var index = -1,
	          length = props.length;

	      while (++index < length) {
	        var key = props[index];
	        object[key] = source[key];
	      }
	      return object;
	    }

	    /**
	     * The base implementation of `_.callback` which supports specifying the
	     * number of arguments to provide to `func`.
	     *
	     * @private
	     * @param {*} [func=_.identity] The value to convert to a callback.
	     * @param {*} [thisArg] The `this` binding of `func`.
	     * @param {number} [argCount] The number of arguments to provide to `func`.
	     * @returns {Function} Returns the callback.
	     */
	    function baseCallback(func, thisArg, argCount) {
	      var type = typeof func;
	      if (type == 'function') {
	        return thisArg === undefined
	          ? func
	          : bindCallback(func, thisArg, argCount);
	      }
	      if (func == null) {
	        return identity;
	      }
	      if (type == 'object') {
	        return baseMatches(func);
	      }
	      return thisArg === undefined
	        ? property(func)
	        : baseMatchesProperty(func, thisArg);
	    }

	    /**
	     * The base implementation of `_.clone` without support for argument juggling
	     * and `this` binding `customizer` functions.
	     *
	     * @private
	     * @param {*} value The value to clone.
	     * @param {boolean} [isDeep] Specify a deep clone.
	     * @param {Function} [customizer] The function to customize cloning values.
	     * @param {string} [key] The key of `value`.
	     * @param {Object} [object] The object `value` belongs to.
	     * @param {Array} [stackA=[]] Tracks traversed source objects.
	     * @param {Array} [stackB=[]] Associates clones with source counterparts.
	     * @returns {*} Returns the cloned value.
	     */
	    function baseClone(value, isDeep, customizer, key, object, stackA, stackB) {
	      var result;
	      if (customizer) {
	        result = object ? customizer(value, key, object) : customizer(value);
	      }
	      if (result !== undefined) {
	        return result;
	      }
	      if (!isObject(value)) {
	        return value;
	      }
	      var isArr = isArray(value);
	      if (isArr) {
	        result = initCloneArray(value);
	        if (!isDeep) {
	          return arrayCopy(value, result);
	        }
	      } else {
	        var tag = objToString.call(value),
	            isFunc = tag == funcTag;

	        if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
	          result = initCloneObject(isFunc ? {} : value);
	          if (!isDeep) {
	            return baseAssign(result, value);
	          }
	        } else {
	          return cloneableTags[tag]
	            ? initCloneByTag(value, tag, isDeep)
	            : (object ? value : {});
	        }
	      }
	      // Check for circular references and return its corresponding clone.
	      stackA || (stackA = []);
	      stackB || (stackB = []);

	      var length = stackA.length;
	      while (length--) {
	        if (stackA[length] == value) {
	          return stackB[length];
	        }
	      }
	      // Add the source value to the stack of traversed objects and associate it with its clone.
	      stackA.push(value);
	      stackB.push(result);

	      // Recursively populate clone (susceptible to call stack limits).
	      (isArr ? arrayEach : baseForOwn)(value, function(subValue, key) {
	        result[key] = baseClone(subValue, isDeep, customizer, key, value, stackA, stackB);
	      });
	      return result;
	    }

	    /**
	     * The base implementation of `_.create` without support for assigning
	     * properties to the created object.
	     *
	     * @private
	     * @param {Object} prototype The object to inherit from.
	     * @returns {Object} Returns the new object.
	     */
	    var baseCreate = (function() {
	      function object() {}
	      return function(prototype) {
	        if (isObject(prototype)) {
	          object.prototype = prototype;
	          var result = new object;
	          object.prototype = undefined;
	        }
	        return result || {};
	      };
	    }());

	    /**
	     * The base implementation of `_.delay` and `_.defer` which accepts an index
	     * of where to slice the arguments to provide to `func`.
	     *
	     * @private
	     * @param {Function} func The function to delay.
	     * @param {number} wait The number of milliseconds to delay invocation.
	     * @param {Object} args The arguments provide to `func`.
	     * @returns {number} Returns the timer id.
	     */
	    function baseDelay(func, wait, args) {
	      if (typeof func != 'function') {
	        throw new TypeError(FUNC_ERROR_TEXT);
	      }
	      return setTimeout(function() { func.apply(undefined, args); }, wait);
	    }

	    /**
	     * The base implementation of `_.difference` which accepts a single array
	     * of values to exclude.
	     *
	     * @private
	     * @param {Array} array The array to inspect.
	     * @param {Array} values The values to exclude.
	     * @returns {Array} Returns the new array of filtered values.
	     */
	    function baseDifference(array, values) {
	      var length = array ? array.length : 0,
	          result = [];

	      if (!length) {
	        return result;
	      }
	      var index = -1,
	          indexOf = getIndexOf(),
	          isCommon = indexOf == baseIndexOf,
	          cache = (isCommon && values.length >= LARGE_ARRAY_SIZE) ? createCache(values) : null,
	          valuesLength = values.length;

	      if (cache) {
	        indexOf = cacheIndexOf;
	        isCommon = false;
	        values = cache;
	      }
	      outer:
	      while (++index < length) {
	        var value = array[index];

	        if (isCommon && value === value) {
	          var valuesIndex = valuesLength;
	          while (valuesIndex--) {
	            if (values[valuesIndex] === value) {
	              continue outer;
	            }
	          }
	          result.push(value);
	        }
	        else if (indexOf(values, value, 0) < 0) {
	          result.push(value);
	        }
	      }
	      return result;
	    }

	    /**
	     * The base implementation of `_.forEach` without support for callback
	     * shorthands and `this` binding.
	     *
	     * @private
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @returns {Array|Object|string} Returns `collection`.
	     */
	    var baseEach = createBaseEach(baseForOwn);

	    /**
	     * The base implementation of `_.forEachRight` without support for callback
	     * shorthands and `this` binding.
	     *
	     * @private
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @returns {Array|Object|string} Returns `collection`.
	     */
	    var baseEachRight = createBaseEach(baseForOwnRight, true);

	    /**
	     * The base implementation of `_.every` without support for callback
	     * shorthands and `this` binding.
	     *
	     * @private
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function} predicate The function invoked per iteration.
	     * @returns {boolean} Returns `true` if all elements pass the predicate check,
	     *  else `false`
	     */
	    function baseEvery(collection, predicate) {
	      var result = true;
	      baseEach(collection, function(value, index, collection) {
	        result = !!predicate(value, index, collection);
	        return result;
	      });
	      return result;
	    }

	    /**
	     * Gets the extremum value of `collection` invoking `iteratee` for each value
	     * in `collection` to generate the criterion by which the value is ranked.
	     * The `iteratee` is invoked with three arguments: (value, index|key, collection).
	     *
	     * @private
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @param {Function} comparator The function used to compare values.
	     * @param {*} exValue The initial extremum value.
	     * @returns {*} Returns the extremum value.
	     */
	    function baseExtremum(collection, iteratee, comparator, exValue) {
	      var computed = exValue,
	          result = computed;

	      baseEach(collection, function(value, index, collection) {
	        var current = +iteratee(value, index, collection);
	        if (comparator(current, computed) || (current === exValue && current === result)) {
	          computed = current;
	          result = value;
	        }
	      });
	      return result;
	    }

	    /**
	     * The base implementation of `_.fill` without an iteratee call guard.
	     *
	     * @private
	     * @param {Array} array The array to fill.
	     * @param {*} value The value to fill `array` with.
	     * @param {number} [start=0] The start position.
	     * @param {number} [end=array.length] The end position.
	     * @returns {Array} Returns `array`.
	     */
	    function baseFill(array, value, start, end) {
	      var length = array.length;

	      start = start == null ? 0 : (+start || 0);
	      if (start < 0) {
	        start = -start > length ? 0 : (length + start);
	      }
	      end = (end === undefined || end > length) ? length : (+end || 0);
	      if (end < 0) {
	        end += length;
	      }
	      length = start > end ? 0 : (end >>> 0);
	      start >>>= 0;

	      while (start < length) {
	        array[start++] = value;
	      }
	      return array;
	    }

	    /**
	     * The base implementation of `_.filter` without support for callback
	     * shorthands and `this` binding.
	     *
	     * @private
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function} predicate The function invoked per iteration.
	     * @returns {Array} Returns the new filtered array.
	     */
	    function baseFilter(collection, predicate) {
	      var result = [];
	      baseEach(collection, function(value, index, collection) {
	        if (predicate(value, index, collection)) {
	          result.push(value);
	        }
	      });
	      return result;
	    }

	    /**
	     * The base implementation of `_.find`, `_.findLast`, `_.findKey`, and `_.findLastKey`,
	     * without support for callback shorthands and `this` binding, which iterates
	     * over `collection` using the provided `eachFunc`.
	     *
	     * @private
	     * @param {Array|Object|string} collection The collection to search.
	     * @param {Function} predicate The function invoked per iteration.
	     * @param {Function} eachFunc The function to iterate over `collection`.
	     * @param {boolean} [retKey] Specify returning the key of the found element
	     *  instead of the element itself.
	     * @returns {*} Returns the found element or its key, else `undefined`.
	     */
	    function baseFind(collection, predicate, eachFunc, retKey) {
	      var result;
	      eachFunc(collection, function(value, key, collection) {
	        if (predicate(value, key, collection)) {
	          result = retKey ? key : value;
	          return false;
	        }
	      });
	      return result;
	    }

	    /**
	     * The base implementation of `_.flatten` with added support for restricting
	     * flattening and specifying the start index.
	     *
	     * @private
	     * @param {Array} array The array to flatten.
	     * @param {boolean} [isDeep] Specify a deep flatten.
	     * @param {boolean} [isStrict] Restrict flattening to arrays-like objects.
	     * @param {Array} [result=[]] The initial result value.
	     * @returns {Array} Returns the new flattened array.
	     */
	    function baseFlatten(array, isDeep, isStrict, result) {
	      result || (result = []);

	      var index = -1,
	          length = array.length;

	      while (++index < length) {
	        var value = array[index];
	        if (isObjectLike(value) && isArrayLike(value) &&
	            (isStrict || isArray(value) || isArguments(value))) {
	          if (isDeep) {
	            // Recursively flatten arrays (susceptible to call stack limits).
	            baseFlatten(value, isDeep, isStrict, result);
	          } else {
	            arrayPush(result, value);
	          }
	        } else if (!isStrict) {
	          result[result.length] = value;
	        }
	      }
	      return result;
	    }

	    /**
	     * The base implementation of `baseForIn` and `baseForOwn` which iterates
	     * over `object` properties returned by `keysFunc` invoking `iteratee` for
	     * each property. Iteratee functions may exit iteration early by explicitly
	     * returning `false`.
	     *
	     * @private
	     * @param {Object} object The object to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @param {Function} keysFunc The function to get the keys of `object`.
	     * @returns {Object} Returns `object`.
	     */
	    var baseFor = createBaseFor();

	    /**
	     * This function is like `baseFor` except that it iterates over properties
	     * in the opposite order.
	     *
	     * @private
	     * @param {Object} object The object to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @param {Function} keysFunc The function to get the keys of `object`.
	     * @returns {Object} Returns `object`.
	     */
	    var baseForRight = createBaseFor(true);

	    /**
	     * The base implementation of `_.forIn` without support for callback
	     * shorthands and `this` binding.
	     *
	     * @private
	     * @param {Object} object The object to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @returns {Object} Returns `object`.
	     */
	    function baseForIn(object, iteratee) {
	      return baseFor(object, iteratee, keysIn);
	    }

	    /**
	     * The base implementation of `_.forOwn` without support for callback
	     * shorthands and `this` binding.
	     *
	     * @private
	     * @param {Object} object The object to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @returns {Object} Returns `object`.
	     */
	    function baseForOwn(object, iteratee) {
	      return baseFor(object, iteratee, keys);
	    }

	    /**
	     * The base implementation of `_.forOwnRight` without support for callback
	     * shorthands and `this` binding.
	     *
	     * @private
	     * @param {Object} object The object to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @returns {Object} Returns `object`.
	     */
	    function baseForOwnRight(object, iteratee) {
	      return baseForRight(object, iteratee, keys);
	    }

	    /**
	     * The base implementation of `_.functions` which creates an array of
	     * `object` function property names filtered from those provided.
	     *
	     * @private
	     * @param {Object} object The object to inspect.
	     * @param {Array} props The property names to filter.
	     * @returns {Array} Returns the new array of filtered property names.
	     */
	    function baseFunctions(object, props) {
	      var index = -1,
	          length = props.length,
	          resIndex = -1,
	          result = [];

	      while (++index < length) {
	        var key = props[index];
	        if (isFunction(object[key])) {
	          result[++resIndex] = key;
	        }
	      }
	      return result;
	    }

	    /**
	     * The base implementation of `get` without support for string paths
	     * and default values.
	     *
	     * @private
	     * @param {Object} object The object to query.
	     * @param {Array} path The path of the property to get.
	     * @param {string} [pathKey] The key representation of path.
	     * @returns {*} Returns the resolved value.
	     */
	    function baseGet(object, path, pathKey) {
	      if (object == null) {
	        return;
	      }
	      if (pathKey !== undefined && pathKey in toObject(object)) {
	        path = [pathKey];
	      }
	      var index = 0,
	          length = path.length;

	      while (object != null && index < length) {
	        object = object[path[index++]];
	      }
	      return (index && index == length) ? object : undefined;
	    }

	    /**
	     * The base implementation of `_.isEqual` without support for `this` binding
	     * `customizer` functions.
	     *
	     * @private
	     * @param {*} value The value to compare.
	     * @param {*} other The other value to compare.
	     * @param {Function} [customizer] The function to customize comparing values.
	     * @param {boolean} [isLoose] Specify performing partial comparisons.
	     * @param {Array} [stackA] Tracks traversed `value` objects.
	     * @param {Array} [stackB] Tracks traversed `other` objects.
	     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	     */
	    function baseIsEqual(value, other, customizer, isLoose, stackA, stackB) {
	      if (value === other) {
	        return true;
	      }
	      if (value == null || other == null || (!isObject(value) && !isObjectLike(other))) {
	        return value !== value && other !== other;
	      }
	      return baseIsEqualDeep(value, other, baseIsEqual, customizer, isLoose, stackA, stackB);
	    }

	    /**
	     * A specialized version of `baseIsEqual` for arrays and objects which performs
	     * deep comparisons and tracks traversed objects enabling objects with circular
	     * references to be compared.
	     *
	     * @private
	     * @param {Object} object The object to compare.
	     * @param {Object} other The other object to compare.
	     * @param {Function} equalFunc The function to determine equivalents of values.
	     * @param {Function} [customizer] The function to customize comparing objects.
	     * @param {boolean} [isLoose] Specify performing partial comparisons.
	     * @param {Array} [stackA=[]] Tracks traversed `value` objects.
	     * @param {Array} [stackB=[]] Tracks traversed `other` objects.
	     * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	     */
	    function baseIsEqualDeep(object, other, equalFunc, customizer, isLoose, stackA, stackB) {
	      var objIsArr = isArray(object),
	          othIsArr = isArray(other),
	          objTag = arrayTag,
	          othTag = arrayTag;

	      if (!objIsArr) {
	        objTag = objToString.call(object);
	        if (objTag == argsTag) {
	          objTag = objectTag;
	        } else if (objTag != objectTag) {
	          objIsArr = isTypedArray(object);
	        }
	      }
	      if (!othIsArr) {
	        othTag = objToString.call(other);
	        if (othTag == argsTag) {
	          othTag = objectTag;
	        } else if (othTag != objectTag) {
	          othIsArr = isTypedArray(other);
	        }
	      }
	      var objIsObj = objTag == objectTag,
	          othIsObj = othTag == objectTag,
	          isSameTag = objTag == othTag;

	      if (isSameTag && !(objIsArr || objIsObj)) {
	        return equalByTag(object, other, objTag);
	      }
	      if (!isLoose) {
	        var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
	            othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

	        if (objIsWrapped || othIsWrapped) {
	          return equalFunc(objIsWrapped ? object.value() : object, othIsWrapped ? other.value() : other, customizer, isLoose, stackA, stackB);
	        }
	      }
	      if (!isSameTag) {
	        return false;
	      }
	      // Assume cyclic values are equal.
	      // For more information on detecting circular references see https://es5.github.io/#JO.
	      stackA || (stackA = []);
	      stackB || (stackB = []);

	      var length = stackA.length;
	      while (length--) {
	        if (stackA[length] == object) {
	          return stackB[length] == other;
	        }
	      }
	      // Add `object` and `other` to the stack of traversed objects.
	      stackA.push(object);
	      stackB.push(other);

	      var result = (objIsArr ? equalArrays : equalObjects)(object, other, equalFunc, customizer, isLoose, stackA, stackB);

	      stackA.pop();
	      stackB.pop();

	      return result;
	    }

	    /**
	     * The base implementation of `_.isMatch` without support for callback
	     * shorthands and `this` binding.
	     *
	     * @private
	     * @param {Object} object The object to inspect.
	     * @param {Array} matchData The propery names, values, and compare flags to match.
	     * @param {Function} [customizer] The function to customize comparing objects.
	     * @returns {boolean} Returns `true` if `object` is a match, else `false`.
	     */
	    function baseIsMatch(object, matchData, customizer) {
	      var index = matchData.length,
	          length = index,
	          noCustomizer = !customizer;

	      if (object == null) {
	        return !length;
	      }
	      object = toObject(object);
	      while (index--) {
	        var data = matchData[index];
	        if ((noCustomizer && data[2])
	              ? data[1] !== object[data[0]]
	              : !(data[0] in object)
	            ) {
	          return false;
	        }
	      }
	      while (++index < length) {
	        data = matchData[index];
	        var key = data[0],
	            objValue = object[key],
	            srcValue = data[1];

	        if (noCustomizer && data[2]) {
	          if (objValue === undefined && !(key in object)) {
	            return false;
	          }
	        } else {
	          var result = customizer ? customizer(objValue, srcValue, key) : undefined;
	          if (!(result === undefined ? baseIsEqual(srcValue, objValue, customizer, true) : result)) {
	            return false;
	          }
	        }
	      }
	      return true;
	    }

	    /**
	     * The base implementation of `_.map` without support for callback shorthands
	     * and `this` binding.
	     *
	     * @private
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @returns {Array} Returns the new mapped array.
	     */
	    function baseMap(collection, iteratee) {
	      var index = -1,
	          result = isArrayLike(collection) ? Array(collection.length) : [];

	      baseEach(collection, function(value, key, collection) {
	        result[++index] = iteratee(value, key, collection);
	      });
	      return result;
	    }

	    /**
	     * The base implementation of `_.matches` which does not clone `source`.
	     *
	     * @private
	     * @param {Object} source The object of property values to match.
	     * @returns {Function} Returns the new function.
	     */
	    function baseMatches(source) {
	      var matchData = getMatchData(source);
	      if (matchData.length == 1 && matchData[0][2]) {
	        var key = matchData[0][0],
	            value = matchData[0][1];

	        return function(object) {
	          if (object == null) {
	            return false;
	          }
	          return object[key] === value && (value !== undefined || (key in toObject(object)));
	        };
	      }
	      return function(object) {
	        return baseIsMatch(object, matchData);
	      };
	    }

	    /**
	     * The base implementation of `_.matchesProperty` which does not clone `srcValue`.
	     *
	     * @private
	     * @param {string} path The path of the property to get.
	     * @param {*} srcValue The value to compare.
	     * @returns {Function} Returns the new function.
	     */
	    function baseMatchesProperty(path, srcValue) {
	      var isArr = isArray(path),
	          isCommon = isKey(path) && isStrictComparable(srcValue),
	          pathKey = (path + '');

	      path = toPath(path);
	      return function(object) {
	        if (object == null) {
	          return false;
	        }
	        var key = pathKey;
	        object = toObject(object);
	        if ((isArr || !isCommon) && !(key in object)) {
	          object = path.length == 1 ? object : baseGet(object, baseSlice(path, 0, -1));
	          if (object == null) {
	            return false;
	          }
	          key = last(path);
	          object = toObject(object);
	        }
	        return object[key] === srcValue
	          ? (srcValue !== undefined || (key in object))
	          : baseIsEqual(srcValue, object[key], undefined, true);
	      };
	    }

	    /**
	     * The base implementation of `_.merge` without support for argument juggling,
	     * multiple sources, and `this` binding `customizer` functions.
	     *
	     * @private
	     * @param {Object} object The destination object.
	     * @param {Object} source The source object.
	     * @param {Function} [customizer] The function to customize merged values.
	     * @param {Array} [stackA=[]] Tracks traversed source objects.
	     * @param {Array} [stackB=[]] Associates values with source counterparts.
	     * @returns {Object} Returns `object`.
	     */
	    function baseMerge(object, source, customizer, stackA, stackB) {
	      if (!isObject(object)) {
	        return object;
	      }
	      var isSrcArr = isArrayLike(source) && (isArray(source) || isTypedArray(source)),
	          props = isSrcArr ? undefined : keys(source);

	      arrayEach(props || source, function(srcValue, key) {
	        if (props) {
	          key = srcValue;
	          srcValue = source[key];
	        }
	        if (isObjectLike(srcValue)) {
	          stackA || (stackA = []);
	          stackB || (stackB = []);
	          baseMergeDeep(object, source, key, baseMerge, customizer, stackA, stackB);
	        }
	        else {
	          var value = object[key],
	              result = customizer ? customizer(value, srcValue, key, object, source) : undefined,
	              isCommon = result === undefined;

	          if (isCommon) {
	            result = srcValue;
	          }
	          if ((result !== undefined || (isSrcArr && !(key in object))) &&
	              (isCommon || (result === result ? (result !== value) : (value === value)))) {
	            object[key] = result;
	          }
	        }
	      });
	      return object;
	    }

	    /**
	     * A specialized version of `baseMerge` for arrays and objects which performs
	     * deep merges and tracks traversed objects enabling objects with circular
	     * references to be merged.
	     *
	     * @private
	     * @param {Object} object The destination object.
	     * @param {Object} source The source object.
	     * @param {string} key The key of the value to merge.
	     * @param {Function} mergeFunc The function to merge values.
	     * @param {Function} [customizer] The function to customize merged values.
	     * @param {Array} [stackA=[]] Tracks traversed source objects.
	     * @param {Array} [stackB=[]] Associates values with source counterparts.
	     * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	     */
	    function baseMergeDeep(object, source, key, mergeFunc, customizer, stackA, stackB) {
	      var length = stackA.length,
	          srcValue = source[key];

	      while (length--) {
	        if (stackA[length] == srcValue) {
	          object[key] = stackB[length];
	          return;
	        }
	      }
	      var value = object[key],
	          result = customizer ? customizer(value, srcValue, key, object, source) : undefined,
	          isCommon = result === undefined;

	      if (isCommon) {
	        result = srcValue;
	        if (isArrayLike(srcValue) && (isArray(srcValue) || isTypedArray(srcValue))) {
	          result = isArray(value)
	            ? value
	            : (isArrayLike(value) ? arrayCopy(value) : []);
	        }
	        else if (isPlainObject(srcValue) || isArguments(srcValue)) {
	          result = isArguments(value)
	            ? toPlainObject(value)
	            : (isPlainObject(value) ? value : {});
	        }
	        else {
	          isCommon = false;
	        }
	      }
	      // Add the source value to the stack of traversed objects and associate
	      // it with its merged value.
	      stackA.push(srcValue);
	      stackB.push(result);

	      if (isCommon) {
	        // Recursively merge objects and arrays (susceptible to call stack limits).
	        object[key] = mergeFunc(result, srcValue, customizer, stackA, stackB);
	      } else if (result === result ? (result !== value) : (value === value)) {
	        object[key] = result;
	      }
	    }

	    /**
	     * The base implementation of `_.property` without support for deep paths.
	     *
	     * @private
	     * @param {string} key The key of the property to get.
	     * @returns {Function} Returns the new function.
	     */
	    function baseProperty(key) {
	      return function(object) {
	        return object == null ? undefined : object[key];
	      };
	    }

	    /**
	     * A specialized version of `baseProperty` which supports deep paths.
	     *
	     * @private
	     * @param {Array|string} path The path of the property to get.
	     * @returns {Function} Returns the new function.
	     */
	    function basePropertyDeep(path) {
	      var pathKey = (path + '');
	      path = toPath(path);
	      return function(object) {
	        return baseGet(object, path, pathKey);
	      };
	    }

	    /**
	     * The base implementation of `_.pullAt` without support for individual
	     * index arguments and capturing the removed elements.
	     *
	     * @private
	     * @param {Array} array The array to modify.
	     * @param {number[]} indexes The indexes of elements to remove.
	     * @returns {Array} Returns `array`.
	     */
	    function basePullAt(array, indexes) {
	      var length = array ? indexes.length : 0;
	      while (length--) {
	        var index = indexes[length];
	        if (index != previous && isIndex(index)) {
	          var previous = index;
	          splice.call(array, index, 1);
	        }
	      }
	      return array;
	    }

	    /**
	     * The base implementation of `_.random` without support for argument juggling
	     * and returning floating-point numbers.
	     *
	     * @private
	     * @param {number} min The minimum possible value.
	     * @param {number} max The maximum possible value.
	     * @returns {number} Returns the random number.
	     */
	    function baseRandom(min, max) {
	      return min + nativeFloor(nativeRandom() * (max - min + 1));
	    }

	    /**
	     * The base implementation of `_.reduce` and `_.reduceRight` without support
	     * for callback shorthands and `this` binding, which iterates over `collection`
	     * using the provided `eachFunc`.
	     *
	     * @private
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @param {*} accumulator The initial value.
	     * @param {boolean} initFromCollection Specify using the first or last element
	     *  of `collection` as the initial value.
	     * @param {Function} eachFunc The function to iterate over `collection`.
	     * @returns {*} Returns the accumulated value.
	     */
	    function baseReduce(collection, iteratee, accumulator, initFromCollection, eachFunc) {
	      eachFunc(collection, function(value, index, collection) {
	        accumulator = initFromCollection
	          ? (initFromCollection = false, value)
	          : iteratee(accumulator, value, index, collection);
	      });
	      return accumulator;
	    }

	    /**
	     * The base implementation of `setData` without support for hot loop detection.
	     *
	     * @private
	     * @param {Function} func The function to associate metadata with.
	     * @param {*} data The metadata.
	     * @returns {Function} Returns `func`.
	     */
	    var baseSetData = !metaMap ? identity : function(func, data) {
	      metaMap.set(func, data);
	      return func;
	    };

	    /**
	     * The base implementation of `_.slice` without an iteratee call guard.
	     *
	     * @private
	     * @param {Array} array The array to slice.
	     * @param {number} [start=0] The start position.
	     * @param {number} [end=array.length] The end position.
	     * @returns {Array} Returns the slice of `array`.
	     */
	    function baseSlice(array, start, end) {
	      var index = -1,
	          length = array.length;

	      start = start == null ? 0 : (+start || 0);
	      if (start < 0) {
	        start = -start > length ? 0 : (length + start);
	      }
	      end = (end === undefined || end > length) ? length : (+end || 0);
	      if (end < 0) {
	        end += length;
	      }
	      length = start > end ? 0 : ((end - start) >>> 0);
	      start >>>= 0;

	      var result = Array(length);
	      while (++index < length) {
	        result[index] = array[index + start];
	      }
	      return result;
	    }

	    /**
	     * The base implementation of `_.some` without support for callback shorthands
	     * and `this` binding.
	     *
	     * @private
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function} predicate The function invoked per iteration.
	     * @returns {boolean} Returns `true` if any element passes the predicate check,
	     *  else `false`.
	     */
	    function baseSome(collection, predicate) {
	      var result;

	      baseEach(collection, function(value, index, collection) {
	        result = predicate(value, index, collection);
	        return !result;
	      });
	      return !!result;
	    }

	    /**
	     * The base implementation of `_.sortBy` which uses `comparer` to define
	     * the sort order of `array` and replaces criteria objects with their
	     * corresponding values.
	     *
	     * @private
	     * @param {Array} array The array to sort.
	     * @param {Function} comparer The function to define sort order.
	     * @returns {Array} Returns `array`.
	     */
	    function baseSortBy(array, comparer) {
	      var length = array.length;

	      array.sort(comparer);
	      while (length--) {
	        array[length] = array[length].value;
	      }
	      return array;
	    }

	    /**
	     * The base implementation of `_.sortByOrder` without param guards.
	     *
	     * @private
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function[]|Object[]|string[]} iteratees The iteratees to sort by.
	     * @param {boolean[]} orders The sort orders of `iteratees`.
	     * @returns {Array} Returns the new sorted array.
	     */
	    function baseSortByOrder(collection, iteratees, orders) {
	      var callback = getCallback(),
	          index = -1;

	      iteratees = arrayMap(iteratees, function(iteratee) { return callback(iteratee); });

	      var result = baseMap(collection, function(value) {
	        var criteria = arrayMap(iteratees, function(iteratee) { return iteratee(value); });
	        return { 'criteria': criteria, 'index': ++index, 'value': value };
	      });

	      return baseSortBy(result, function(object, other) {
	        return compareMultiple(object, other, orders);
	      });
	    }

	    /**
	     * The base implementation of `_.sum` without support for callback shorthands
	     * and `this` binding.
	     *
	     * @private
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @returns {number} Returns the sum.
	     */
	    function baseSum(collection, iteratee) {
	      var result = 0;
	      baseEach(collection, function(value, index, collection) {
	        result += +iteratee(value, index, collection) || 0;
	      });
	      return result;
	    }

	    /**
	     * The base implementation of `_.uniq` without support for callback shorthands
	     * and `this` binding.
	     *
	     * @private
	     * @param {Array} array The array to inspect.
	     * @param {Function} [iteratee] The function invoked per iteration.
	     * @returns {Array} Returns the new duplicate-value-free array.
	     */
	    function baseUniq(array, iteratee) {
	      var index = -1,
	          indexOf = getIndexOf(),
	          length = array.length,
	          isCommon = indexOf == baseIndexOf,
	          isLarge = isCommon && length >= LARGE_ARRAY_SIZE,
	          seen = isLarge ? createCache() : null,
	          result = [];

	      if (seen) {
	        indexOf = cacheIndexOf;
	        isCommon = false;
	      } else {
	        isLarge = false;
	        seen = iteratee ? [] : result;
	      }
	      outer:
	      while (++index < length) {
	        var value = array[index],
	            computed = iteratee ? iteratee(value, index, array) : value;

	        if (isCommon && value === value) {
	          var seenIndex = seen.length;
	          while (seenIndex--) {
	            if (seen[seenIndex] === computed) {
	              continue outer;
	            }
	          }
	          if (iteratee) {
	            seen.push(computed);
	          }
	          result.push(value);
	        }
	        else if (indexOf(seen, computed, 0) < 0) {
	          if (iteratee || isLarge) {
	            seen.push(computed);
	          }
	          result.push(value);
	        }
	      }
	      return result;
	    }

	    /**
	     * The base implementation of `_.values` and `_.valuesIn` which creates an
	     * array of `object` property values corresponding to the property names
	     * of `props`.
	     *
	     * @private
	     * @param {Object} object The object to query.
	     * @param {Array} props The property names to get values for.
	     * @returns {Object} Returns the array of property values.
	     */
	    function baseValues(object, props) {
	      var index = -1,
	          length = props.length,
	          result = Array(length);

	      while (++index < length) {
	        result[index] = object[props[index]];
	      }
	      return result;
	    }

	    /**
	     * The base implementation of `_.dropRightWhile`, `_.dropWhile`, `_.takeRightWhile`,
	     * and `_.takeWhile` without support for callback shorthands and `this` binding.
	     *
	     * @private
	     * @param {Array} array The array to query.
	     * @param {Function} predicate The function invoked per iteration.
	     * @param {boolean} [isDrop] Specify dropping elements instead of taking them.
	     * @param {boolean} [fromRight] Specify iterating from right to left.
	     * @returns {Array} Returns the slice of `array`.
	     */
	    function baseWhile(array, predicate, isDrop, fromRight) {
	      var length = array.length,
	          index = fromRight ? length : -1;

	      while ((fromRight ? index-- : ++index < length) && predicate(array[index], index, array)) {}
	      return isDrop
	        ? baseSlice(array, (fromRight ? 0 : index), (fromRight ? index + 1 : length))
	        : baseSlice(array, (fromRight ? index + 1 : 0), (fromRight ? length : index));
	    }

	    /**
	     * The base implementation of `wrapperValue` which returns the result of
	     * performing a sequence of actions on the unwrapped `value`, where each
	     * successive action is supplied the return value of the previous.
	     *
	     * @private
	     * @param {*} value The unwrapped value.
	     * @param {Array} actions Actions to peform to resolve the unwrapped value.
	     * @returns {*} Returns the resolved value.
	     */
	    function baseWrapperValue(value, actions) {
	      var result = value;
	      if (result instanceof LazyWrapper) {
	        result = result.value();
	      }
	      var index = -1,
	          length = actions.length;

	      while (++index < length) {
	        var action = actions[index];
	        result = action.func.apply(action.thisArg, arrayPush([result], action.args));
	      }
	      return result;
	    }

	    /**
	     * Performs a binary search of `array` to determine the index at which `value`
	     * should be inserted into `array` in order to maintain its sort order.
	     *
	     * @private
	     * @param {Array} array The sorted array to inspect.
	     * @param {*} value The value to evaluate.
	     * @param {boolean} [retHighest] Specify returning the highest qualified index.
	     * @returns {number} Returns the index at which `value` should be inserted
	     *  into `array`.
	     */
	    function binaryIndex(array, value, retHighest) {
	      var low = 0,
	          high = array ? array.length : low;

	      if (typeof value == 'number' && value === value && high <= HALF_MAX_ARRAY_LENGTH) {
	        while (low < high) {
	          var mid = (low + high) >>> 1,
	              computed = array[mid];

	          if ((retHighest ? (computed <= value) : (computed < value)) && computed !== null) {
	            low = mid + 1;
	          } else {
	            high = mid;
	          }
	        }
	        return high;
	      }
	      return binaryIndexBy(array, value, identity, retHighest);
	    }

	    /**
	     * This function is like `binaryIndex` except that it invokes `iteratee` for
	     * `value` and each element of `array` to compute their sort ranking. The
	     * iteratee is invoked with one argument; (value).
	     *
	     * @private
	     * @param {Array} array The sorted array to inspect.
	     * @param {*} value The value to evaluate.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @param {boolean} [retHighest] Specify returning the highest qualified index.
	     * @returns {number} Returns the index at which `value` should be inserted
	     *  into `array`.
	     */
	    function binaryIndexBy(array, value, iteratee, retHighest) {
	      value = iteratee(value);

	      var low = 0,
	          high = array ? array.length : 0,
	          valIsNaN = value !== value,
	          valIsNull = value === null,
	          valIsUndef = value === undefined;

	      while (low < high) {
	        var mid = nativeFloor((low + high) / 2),
	            computed = iteratee(array[mid]),
	            isDef = computed !== undefined,
	            isReflexive = computed === computed;

	        if (valIsNaN) {
	          var setLow = isReflexive || retHighest;
	        } else if (valIsNull) {
	          setLow = isReflexive && isDef && (retHighest || computed != null);
	        } else if (valIsUndef) {
	          setLow = isReflexive && (retHighest || isDef);
	        } else if (computed == null) {
	          setLow = false;
	        } else {
	          setLow = retHighest ? (computed <= value) : (computed < value);
	        }
	        if (setLow) {
	          low = mid + 1;
	        } else {
	          high = mid;
	        }
	      }
	      return nativeMin(high, MAX_ARRAY_INDEX);
	    }

	    /**
	     * A specialized version of `baseCallback` which only supports `this` binding
	     * and specifying the number of arguments to provide to `func`.
	     *
	     * @private
	     * @param {Function} func The function to bind.
	     * @param {*} thisArg The `this` binding of `func`.
	     * @param {number} [argCount] The number of arguments to provide to `func`.
	     * @returns {Function} Returns the callback.
	     */
	    function bindCallback(func, thisArg, argCount) {
	      if (typeof func != 'function') {
	        return identity;
	      }
	      if (thisArg === undefined) {
	        return func;
	      }
	      switch (argCount) {
	        case 1: return function(value) {
	          return func.call(thisArg, value);
	        };
	        case 3: return function(value, index, collection) {
	          return func.call(thisArg, value, index, collection);
	        };
	        case 4: return function(accumulator, value, index, collection) {
	          return func.call(thisArg, accumulator, value, index, collection);
	        };
	        case 5: return function(value, other, key, object, source) {
	          return func.call(thisArg, value, other, key, object, source);
	        };
	      }
	      return function() {
	        return func.apply(thisArg, arguments);
	      };
	    }

	    /**
	     * Creates a clone of the given array buffer.
	     *
	     * @private
	     * @param {ArrayBuffer} buffer The array buffer to clone.
	     * @returns {ArrayBuffer} Returns the cloned array buffer.
	     */
	    function bufferClone(buffer) {
	      var result = new ArrayBuffer(buffer.byteLength),
	          view = new Uint8Array(result);

	      view.set(new Uint8Array(buffer));
	      return result;
	    }

	    /**
	     * Creates an array that is the composition of partially applied arguments,
	     * placeholders, and provided arguments into a single array of arguments.
	     *
	     * @private
	     * @param {Array|Object} args The provided arguments.
	     * @param {Array} partials The arguments to prepend to those provided.
	     * @param {Array} holders The `partials` placeholder indexes.
	     * @returns {Array} Returns the new array of composed arguments.
	     */
	    function composeArgs(args, partials, holders) {
	      var holdersLength = holders.length,
	          argsIndex = -1,
	          argsLength = nativeMax(args.length - holdersLength, 0),
	          leftIndex = -1,
	          leftLength = partials.length,
	          result = Array(leftLength + argsLength);

	      while (++leftIndex < leftLength) {
	        result[leftIndex] = partials[leftIndex];
	      }
	      while (++argsIndex < holdersLength) {
	        result[holders[argsIndex]] = args[argsIndex];
	      }
	      while (argsLength--) {
	        result[leftIndex++] = args[argsIndex++];
	      }
	      return result;
	    }

	    /**
	     * This function is like `composeArgs` except that the arguments composition
	     * is tailored for `_.partialRight`.
	     *
	     * @private
	     * @param {Array|Object} args The provided arguments.
	     * @param {Array} partials The arguments to append to those provided.
	     * @param {Array} holders The `partials` placeholder indexes.
	     * @returns {Array} Returns the new array of composed arguments.
	     */
	    function composeArgsRight(args, partials, holders) {
	      var holdersIndex = -1,
	          holdersLength = holders.length,
	          argsIndex = -1,
	          argsLength = nativeMax(args.length - holdersLength, 0),
	          rightIndex = -1,
	          rightLength = partials.length,
	          result = Array(argsLength + rightLength);

	      while (++argsIndex < argsLength) {
	        result[argsIndex] = args[argsIndex];
	      }
	      var offset = argsIndex;
	      while (++rightIndex < rightLength) {
	        result[offset + rightIndex] = partials[rightIndex];
	      }
	      while (++holdersIndex < holdersLength) {
	        result[offset + holders[holdersIndex]] = args[argsIndex++];
	      }
	      return result;
	    }

	    /**
	     * Creates a `_.countBy`, `_.groupBy`, `_.indexBy`, or `_.partition` function.
	     *
	     * @private
	     * @param {Function} setter The function to set keys and values of the accumulator object.
	     * @param {Function} [initializer] The function to initialize the accumulator object.
	     * @returns {Function} Returns the new aggregator function.
	     */
	    function createAggregator(setter, initializer) {
	      return function(collection, iteratee, thisArg) {
	        var result = initializer ? initializer() : {};
	        iteratee = getCallback(iteratee, thisArg, 3);

	        if (isArray(collection)) {
	          var index = -1,
	              length = collection.length;

	          while (++index < length) {
	            var value = collection[index];
	            setter(result, value, iteratee(value, index, collection), collection);
	          }
	        } else {
	          baseEach(collection, function(value, key, collection) {
	            setter(result, value, iteratee(value, key, collection), collection);
	          });
	        }
	        return result;
	      };
	    }

	    /**
	     * Creates a `_.assign`, `_.defaults`, or `_.merge` function.
	     *
	     * @private
	     * @param {Function} assigner The function to assign values.
	     * @returns {Function} Returns the new assigner function.
	     */
	    function createAssigner(assigner) {
	      return restParam(function(object, sources) {
	        var index = -1,
	            length = object == null ? 0 : sources.length,
	            customizer = length > 2 ? sources[length - 2] : undefined,
	            guard = length > 2 ? sources[2] : undefined,
	            thisArg = length > 1 ? sources[length - 1] : undefined;

	        if (typeof customizer == 'function') {
	          customizer = bindCallback(customizer, thisArg, 5);
	          length -= 2;
	        } else {
	          customizer = typeof thisArg == 'function' ? thisArg : undefined;
	          length -= (customizer ? 1 : 0);
	        }
	        if (guard && isIterateeCall(sources[0], sources[1], guard)) {
	          customizer = length < 3 ? undefined : customizer;
	          length = 1;
	        }
	        while (++index < length) {
	          var source = sources[index];
	          if (source) {
	            assigner(object, source, customizer);
	          }
	        }
	        return object;
	      });
	    }

	    /**
	     * Creates a `baseEach` or `baseEachRight` function.
	     *
	     * @private
	     * @param {Function} eachFunc The function to iterate over a collection.
	     * @param {boolean} [fromRight] Specify iterating from right to left.
	     * @returns {Function} Returns the new base function.
	     */
	    function createBaseEach(eachFunc, fromRight) {
	      return function(collection, iteratee) {
	        var length = collection ? getLength(collection) : 0;
	        if (!isLength(length)) {
	          return eachFunc(collection, iteratee);
	        }
	        var index = fromRight ? length : -1,
	            iterable = toObject(collection);

	        while ((fromRight ? index-- : ++index < length)) {
	          if (iteratee(iterable[index], index, iterable) === false) {
	            break;
	          }
	        }
	        return collection;
	      };
	    }

	    /**
	     * Creates a base function for `_.forIn` or `_.forInRight`.
	     *
	     * @private
	     * @param {boolean} [fromRight] Specify iterating from right to left.
	     * @returns {Function} Returns the new base function.
	     */
	    function createBaseFor(fromRight) {
	      return function(object, iteratee, keysFunc) {
	        var iterable = toObject(object),
	            props = keysFunc(object),
	            length = props.length,
	            index = fromRight ? length : -1;

	        while ((fromRight ? index-- : ++index < length)) {
	          var key = props[index];
	          if (iteratee(iterable[key], key, iterable) === false) {
	            break;
	          }
	        }
	        return object;
	      };
	    }

	    /**
	     * Creates a function that wraps `func` and invokes it with the `this`
	     * binding of `thisArg`.
	     *
	     * @private
	     * @param {Function} func The function to bind.
	     * @param {*} [thisArg] The `this` binding of `func`.
	     * @returns {Function} Returns the new bound function.
	     */
	    function createBindWrapper(func, thisArg) {
	      var Ctor = createCtorWrapper(func);

	      function wrapper() {
	        var fn = (this && this !== root && this instanceof wrapper) ? Ctor : func;
	        return fn.apply(thisArg, arguments);
	      }
	      return wrapper;
	    }

	    /**
	     * Creates a `Set` cache object to optimize linear searches of large arrays.
	     *
	     * @private
	     * @param {Array} [values] The values to cache.
	     * @returns {null|Object} Returns the new cache object if `Set` is supported, else `null`.
	     */
	    function createCache(values) {
	      return (nativeCreate && Set) ? new SetCache(values) : null;
	    }

	    /**
	     * Creates a function that produces compound words out of the words in a
	     * given string.
	     *
	     * @private
	     * @param {Function} callback The function to combine each word.
	     * @returns {Function} Returns the new compounder function.
	     */
	    function createCompounder(callback) {
	      return function(string) {
	        var index = -1,
	            array = words(deburr(string)),
	            length = array.length,
	            result = '';

	        while (++index < length) {
	          result = callback(result, array[index], index);
	        }
	        return result;
	      };
	    }

	    /**
	     * Creates a function that produces an instance of `Ctor` regardless of
	     * whether it was invoked as part of a `new` expression or by `call` or `apply`.
	     *
	     * @private
	     * @param {Function} Ctor The constructor to wrap.
	     * @returns {Function} Returns the new wrapped function.
	     */
	    function createCtorWrapper(Ctor) {
	      return function() {
	        // Use a `switch` statement to work with class constructors.
	        // See http://ecma-international.org/ecma-262/6.0/#sec-ecmascript-function-objects-call-thisargument-argumentslist
	        // for more details.
	        var args = arguments;
	        switch (args.length) {
	          case 0: return new Ctor;
	          case 1: return new Ctor(args[0]);
	          case 2: return new Ctor(args[0], args[1]);
	          case 3: return new Ctor(args[0], args[1], args[2]);
	          case 4: return new Ctor(args[0], args[1], args[2], args[3]);
	          case 5: return new Ctor(args[0], args[1], args[2], args[3], args[4]);
	          case 6: return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5]);
	          case 7: return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5], args[6]);
	        }
	        var thisBinding = baseCreate(Ctor.prototype),
	            result = Ctor.apply(thisBinding, args);

	        // Mimic the constructor's `return` behavior.
	        // See https://es5.github.io/#x13.2.2 for more details.
	        return isObject(result) ? result : thisBinding;
	      };
	    }

	    /**
	     * Creates a `_.curry` or `_.curryRight` function.
	     *
	     * @private
	     * @param {boolean} flag The curry bit flag.
	     * @returns {Function} Returns the new curry function.
	     */
	    function createCurry(flag) {
	      function curryFunc(func, arity, guard) {
	        if (guard && isIterateeCall(func, arity, guard)) {
	          arity = undefined;
	        }
	        var result = createWrapper(func, flag, undefined, undefined, undefined, undefined, undefined, arity);
	        result.placeholder = curryFunc.placeholder;
	        return result;
	      }
	      return curryFunc;
	    }

	    /**
	     * Creates a `_.defaults` or `_.defaultsDeep` function.
	     *
	     * @private
	     * @param {Function} assigner The function to assign values.
	     * @param {Function} customizer The function to customize assigned values.
	     * @returns {Function} Returns the new defaults function.
	     */
	    function createDefaults(assigner, customizer) {
	      return restParam(function(args) {
	        var object = args[0];
	        if (object == null) {
	          return object;
	        }
	        args.push(customizer);
	        return assigner.apply(undefined, args);
	      });
	    }

	    /**
	     * Creates a `_.max` or `_.min` function.
	     *
	     * @private
	     * @param {Function} comparator The function used to compare values.
	     * @param {*} exValue The initial extremum value.
	     * @returns {Function} Returns the new extremum function.
	     */
	    function createExtremum(comparator, exValue) {
	      return function(collection, iteratee, thisArg) {
	        if (thisArg && isIterateeCall(collection, iteratee, thisArg)) {
	          iteratee = undefined;
	        }
	        iteratee = getCallback(iteratee, thisArg, 3);
	        if (iteratee.length == 1) {
	          collection = isArray(collection) ? collection : toIterable(collection);
	          var result = arrayExtremum(collection, iteratee, comparator, exValue);
	          if (!(collection.length && result === exValue)) {
	            return result;
	          }
	        }
	        return baseExtremum(collection, iteratee, comparator, exValue);
	      };
	    }

	    /**
	     * Creates a `_.find` or `_.findLast` function.
	     *
	     * @private
	     * @param {Function} eachFunc The function to iterate over a collection.
	     * @param {boolean} [fromRight] Specify iterating from right to left.
	     * @returns {Function} Returns the new find function.
	     */
	    function createFind(eachFunc, fromRight) {
	      return function(collection, predicate, thisArg) {
	        predicate = getCallback(predicate, thisArg, 3);
	        if (isArray(collection)) {
	          var index = baseFindIndex(collection, predicate, fromRight);
	          return index > -1 ? collection[index] : undefined;
	        }
	        return baseFind(collection, predicate, eachFunc);
	      };
	    }

	    /**
	     * Creates a `_.findIndex` or `_.findLastIndex` function.
	     *
	     * @private
	     * @param {boolean} [fromRight] Specify iterating from right to left.
	     * @returns {Function} Returns the new find function.
	     */
	    function createFindIndex(fromRight) {
	      return function(array, predicate, thisArg) {
	        if (!(array && array.length)) {
	          return -1;
	        }
	        predicate = getCallback(predicate, thisArg, 3);
	        return baseFindIndex(array, predicate, fromRight);
	      };
	    }

	    /**
	     * Creates a `_.findKey` or `_.findLastKey` function.
	     *
	     * @private
	     * @param {Function} objectFunc The function to iterate over an object.
	     * @returns {Function} Returns the new find function.
	     */
	    function createFindKey(objectFunc) {
	      return function(object, predicate, thisArg) {
	        predicate = getCallback(predicate, thisArg, 3);
	        return baseFind(object, predicate, objectFunc, true);
	      };
	    }

	    /**
	     * Creates a `_.flow` or `_.flowRight` function.
	     *
	     * @private
	     * @param {boolean} [fromRight] Specify iterating from right to left.
	     * @returns {Function} Returns the new flow function.
	     */
	    function createFlow(fromRight) {
	      return function() {
	        var wrapper,
	            length = arguments.length,
	            index = fromRight ? length : -1,
	            leftIndex = 0,
	            funcs = Array(length);

	        while ((fromRight ? index-- : ++index < length)) {
	          var func = funcs[leftIndex++] = arguments[index];
	          if (typeof func != 'function') {
	            throw new TypeError(FUNC_ERROR_TEXT);
	          }
	          if (!wrapper && LodashWrapper.prototype.thru && getFuncName(func) == 'wrapper') {
	            wrapper = new LodashWrapper([], true);
	          }
	        }
	        index = wrapper ? -1 : length;
	        while (++index < length) {
	          func = funcs[index];

	          var funcName = getFuncName(func),
	              data = funcName == 'wrapper' ? getData(func) : undefined;

	          if (data && isLaziable(data[0]) && data[1] == (ARY_FLAG | CURRY_FLAG | PARTIAL_FLAG | REARG_FLAG) && !data[4].length && data[9] == 1) {
	            wrapper = wrapper[getFuncName(data[0])].apply(wrapper, data[3]);
	          } else {
	            wrapper = (func.length == 1 && isLaziable(func)) ? wrapper[funcName]() : wrapper.thru(func);
	          }
	        }
	        return function() {
	          var args = arguments,
	              value = args[0];

	          if (wrapper && args.length == 1 && isArray(value) && value.length >= LARGE_ARRAY_SIZE) {
	            return wrapper.plant(value).value();
	          }
	          var index = 0,
	              result = length ? funcs[index].apply(this, args) : value;

	          while (++index < length) {
	            result = funcs[index].call(this, result);
	          }
	          return result;
	        };
	      };
	    }

	    /**
	     * Creates a function for `_.forEach` or `_.forEachRight`.
	     *
	     * @private
	     * @param {Function} arrayFunc The function to iterate over an array.
	     * @param {Function} eachFunc The function to iterate over a collection.
	     * @returns {Function} Returns the new each function.
	     */
	    function createForEach(arrayFunc, eachFunc) {
	      return function(collection, iteratee, thisArg) {
	        return (typeof iteratee == 'function' && thisArg === undefined && isArray(collection))
	          ? arrayFunc(collection, iteratee)
	          : eachFunc(collection, bindCallback(iteratee, thisArg, 3));
	      };
	    }

	    /**
	     * Creates a function for `_.forIn` or `_.forInRight`.
	     *
	     * @private
	     * @param {Function} objectFunc The function to iterate over an object.
	     * @returns {Function} Returns the new each function.
	     */
	    function createForIn(objectFunc) {
	      return function(object, iteratee, thisArg) {
	        if (typeof iteratee != 'function' || thisArg !== undefined) {
	          iteratee = bindCallback(iteratee, thisArg, 3);
	        }
	        return objectFunc(object, iteratee, keysIn);
	      };
	    }

	    /**
	     * Creates a function for `_.forOwn` or `_.forOwnRight`.
	     *
	     * @private
	     * @param {Function} objectFunc The function to iterate over an object.
	     * @returns {Function} Returns the new each function.
	     */
	    function createForOwn(objectFunc) {
	      return function(object, iteratee, thisArg) {
	        if (typeof iteratee != 'function' || thisArg !== undefined) {
	          iteratee = bindCallback(iteratee, thisArg, 3);
	        }
	        return objectFunc(object, iteratee);
	      };
	    }

	    /**
	     * Creates a function for `_.mapKeys` or `_.mapValues`.
	     *
	     * @private
	     * @param {boolean} [isMapKeys] Specify mapping keys instead of values.
	     * @returns {Function} Returns the new map function.
	     */
	    function createObjectMapper(isMapKeys) {
	      return function(object, iteratee, thisArg) {
	        var result = {};
	        iteratee = getCallback(iteratee, thisArg, 3);

	        baseForOwn(object, function(value, key, object) {
	          var mapped = iteratee(value, key, object);
	          key = isMapKeys ? mapped : key;
	          value = isMapKeys ? value : mapped;
	          result[key] = value;
	        });
	        return result;
	      };
	    }

	    /**
	     * Creates a function for `_.padLeft` or `_.padRight`.
	     *
	     * @private
	     * @param {boolean} [fromRight] Specify padding from the right.
	     * @returns {Function} Returns the new pad function.
	     */
	    function createPadDir(fromRight) {
	      return function(string, length, chars) {
	        string = baseToString(string);
	        return (fromRight ? string : '') + createPadding(string, length, chars) + (fromRight ? '' : string);
	      };
	    }

	    /**
	     * Creates a `_.partial` or `_.partialRight` function.
	     *
	     * @private
	     * @param {boolean} flag The partial bit flag.
	     * @returns {Function} Returns the new partial function.
	     */
	    function createPartial(flag) {
	      var partialFunc = restParam(function(func, partials) {
	        var holders = replaceHolders(partials, partialFunc.placeholder);
	        return createWrapper(func, flag, undefined, partials, holders);
	      });
	      return partialFunc;
	    }

	    /**
	     * Creates a function for `_.reduce` or `_.reduceRight`.
	     *
	     * @private
	     * @param {Function} arrayFunc The function to iterate over an array.
	     * @param {Function} eachFunc The function to iterate over a collection.
	     * @returns {Function} Returns the new each function.
	     */
	    function createReduce(arrayFunc, eachFunc) {
	      return function(collection, iteratee, accumulator, thisArg) {
	        var initFromArray = arguments.length < 3;
	        return (typeof iteratee == 'function' && thisArg === undefined && isArray(collection))
	          ? arrayFunc(collection, iteratee, accumulator, initFromArray)
	          : baseReduce(collection, getCallback(iteratee, thisArg, 4), accumulator, initFromArray, eachFunc);
	      };
	    }

	    /**
	     * Creates a function that wraps `func` and invokes it with optional `this`
	     * binding of, partial application, and currying.
	     *
	     * @private
	     * @param {Function|string} func The function or method name to reference.
	     * @param {number} bitmask The bitmask of flags. See `createWrapper` for more details.
	     * @param {*} [thisArg] The `this` binding of `func`.
	     * @param {Array} [partials] The arguments to prepend to those provided to the new function.
	     * @param {Array} [holders] The `partials` placeholder indexes.
	     * @param {Array} [partialsRight] The arguments to append to those provided to the new function.
	     * @param {Array} [holdersRight] The `partialsRight` placeholder indexes.
	     * @param {Array} [argPos] The argument positions of the new function.
	     * @param {number} [ary] The arity cap of `func`.
	     * @param {number} [arity] The arity of `func`.
	     * @returns {Function} Returns the new wrapped function.
	     */
	    function createHybridWrapper(func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary, arity) {
	      var isAry = bitmask & ARY_FLAG,
	          isBind = bitmask & BIND_FLAG,
	          isBindKey = bitmask & BIND_KEY_FLAG,
	          isCurry = bitmask & CURRY_FLAG,
	          isCurryBound = bitmask & CURRY_BOUND_FLAG,
	          isCurryRight = bitmask & CURRY_RIGHT_FLAG,
	          Ctor = isBindKey ? undefined : createCtorWrapper(func);

	      function wrapper() {
	        // Avoid `arguments` object use disqualifying optimizations by
	        // converting it to an array before providing it to other functions.
	        var length = arguments.length,
	            index = length,
	            args = Array(length);

	        while (index--) {
	          args[index] = arguments[index];
	        }
	        if (partials) {
	          args = composeArgs(args, partials, holders);
	        }
	        if (partialsRight) {
	          args = composeArgsRight(args, partialsRight, holdersRight);
	        }
	        if (isCurry || isCurryRight) {
	          var placeholder = wrapper.placeholder,
	              argsHolders = replaceHolders(args, placeholder);

	          length -= argsHolders.length;
	          if (length < arity) {
	            var newArgPos = argPos ? arrayCopy(argPos) : undefined,
	                newArity = nativeMax(arity - length, 0),
	                newsHolders = isCurry ? argsHolders : undefined,
	                newHoldersRight = isCurry ? undefined : argsHolders,
	                newPartials = isCurry ? args : undefined,
	                newPartialsRight = isCurry ? undefined : args;

	            bitmask |= (isCurry ? PARTIAL_FLAG : PARTIAL_RIGHT_FLAG);
	            bitmask &= ~(isCurry ? PARTIAL_RIGHT_FLAG : PARTIAL_FLAG);

	            if (!isCurryBound) {
	              bitmask &= ~(BIND_FLAG | BIND_KEY_FLAG);
	            }
	            var newData = [func, bitmask, thisArg, newPartials, newsHolders, newPartialsRight, newHoldersRight, newArgPos, ary, newArity],
	                result = createHybridWrapper.apply(undefined, newData);

	            if (isLaziable(func)) {
	              setData(result, newData);
	            }
	            result.placeholder = placeholder;
	            return result;
	          }
	        }
	        var thisBinding = isBind ? thisArg : this,
	            fn = isBindKey ? thisBinding[func] : func;

	        if (argPos) {
	          args = reorder(args, argPos);
	        }
	        if (isAry && ary < args.length) {
	          args.length = ary;
	        }
	        if (this && this !== root && this instanceof wrapper) {
	          fn = Ctor || createCtorWrapper(func);
	        }
	        return fn.apply(thisBinding, args);
	      }
	      return wrapper;
	    }

	    /**
	     * Creates the padding required for `string` based on the given `length`.
	     * The `chars` string is truncated if the number of characters exceeds `length`.
	     *
	     * @private
	     * @param {string} string The string to create padding for.
	     * @param {number} [length=0] The padding length.
	     * @param {string} [chars=' '] The string used as padding.
	     * @returns {string} Returns the pad for `string`.
	     */
	    function createPadding(string, length, chars) {
	      var strLength = string.length;
	      length = +length;

	      if (strLength >= length || !nativeIsFinite(length)) {
	        return '';
	      }
	      var padLength = length - strLength;
	      chars = chars == null ? ' ' : (chars + '');
	      return repeat(chars, nativeCeil(padLength / chars.length)).slice(0, padLength);
	    }

	    /**
	     * Creates a function that wraps `func` and invokes it with the optional `this`
	     * binding of `thisArg` and the `partials` prepended to those provided to
	     * the wrapper.
	     *
	     * @private
	     * @param {Function} func The function to partially apply arguments to.
	     * @param {number} bitmask The bitmask of flags. See `createWrapper` for more details.
	     * @param {*} thisArg The `this` binding of `func`.
	     * @param {Array} partials The arguments to prepend to those provided to the new function.
	     * @returns {Function} Returns the new bound function.
	     */
	    function createPartialWrapper(func, bitmask, thisArg, partials) {
	      var isBind = bitmask & BIND_FLAG,
	          Ctor = createCtorWrapper(func);

	      function wrapper() {
	        // Avoid `arguments` object use disqualifying optimizations by
	        // converting it to an array before providing it `func`.
	        var argsIndex = -1,
	            argsLength = arguments.length,
	            leftIndex = -1,
	            leftLength = partials.length,
	            args = Array(leftLength + argsLength);

	        while (++leftIndex < leftLength) {
	          args[leftIndex] = partials[leftIndex];
	        }
	        while (argsLength--) {
	          args[leftIndex++] = arguments[++argsIndex];
	        }
	        var fn = (this && this !== root && this instanceof wrapper) ? Ctor : func;
	        return fn.apply(isBind ? thisArg : this, args);
	      }
	      return wrapper;
	    }

	    /**
	     * Creates a `_.ceil`, `_.floor`, or `_.round` function.
	     *
	     * @private
	     * @param {string} methodName The name of the `Math` method to use when rounding.
	     * @returns {Function} Returns the new round function.
	     */
	    function createRound(methodName) {
	      var func = Math[methodName];
	      return function(number, precision) {
	        precision = precision === undefined ? 0 : (+precision || 0);
	        if (precision) {
	          precision = pow(10, precision);
	          return func(number * precision) / precision;
	        }
	        return func(number);
	      };
	    }

	    /**
	     * Creates a `_.sortedIndex` or `_.sortedLastIndex` function.
	     *
	     * @private
	     * @param {boolean} [retHighest] Specify returning the highest qualified index.
	     * @returns {Function} Returns the new index function.
	     */
	    function createSortedIndex(retHighest) {
	      return function(array, value, iteratee, thisArg) {
	        var callback = getCallback(iteratee);
	        return (iteratee == null && callback === baseCallback)
	          ? binaryIndex(array, value, retHighest)
	          : binaryIndexBy(array, value, callback(iteratee, thisArg, 1), retHighest);
	      };
	    }

	    /**
	     * Creates a function that either curries or invokes `func` with optional
	     * `this` binding and partially applied arguments.
	     *
	     * @private
	     * @param {Function|string} func The function or method name to reference.
	     * @param {number} bitmask The bitmask of flags.
	     *  The bitmask may be composed of the following flags:
	     *     1 - `_.bind`
	     *     2 - `_.bindKey`
	     *     4 - `_.curry` or `_.curryRight` of a bound function
	     *     8 - `_.curry`
	     *    16 - `_.curryRight`
	     *    32 - `_.partial`
	     *    64 - `_.partialRight`
	     *   128 - `_.rearg`
	     *   256 - `_.ary`
	     * @param {*} [thisArg] The `this` binding of `func`.
	     * @param {Array} [partials] The arguments to be partially applied.
	     * @param {Array} [holders] The `partials` placeholder indexes.
	     * @param {Array} [argPos] The argument positions of the new function.
	     * @param {number} [ary] The arity cap of `func`.
	     * @param {number} [arity] The arity of `func`.
	     * @returns {Function} Returns the new wrapped function.
	     */
	    function createWrapper(func, bitmask, thisArg, partials, holders, argPos, ary, arity) {
	      var isBindKey = bitmask & BIND_KEY_FLAG;
	      if (!isBindKey && typeof func != 'function') {
	        throw new TypeError(FUNC_ERROR_TEXT);
	      }
	      var length = partials ? partials.length : 0;
	      if (!length) {
	        bitmask &= ~(PARTIAL_FLAG | PARTIAL_RIGHT_FLAG);
	        partials = holders = undefined;
	      }
	      length -= (holders ? holders.length : 0);
	      if (bitmask & PARTIAL_RIGHT_FLAG) {
	        var partialsRight = partials,
	            holdersRight = holders;

	        partials = holders = undefined;
	      }
	      var data = isBindKey ? undefined : getData(func),
	          newData = [func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary, arity];

	      if (data) {
	        mergeData(newData, data);
	        bitmask = newData[1];
	        arity = newData[9];
	      }
	      newData[9] = arity == null
	        ? (isBindKey ? 0 : func.length)
	        : (nativeMax(arity - length, 0) || 0);

	      if (bitmask == BIND_FLAG) {
	        var result = createBindWrapper(newData[0], newData[2]);
	      } else if ((bitmask == PARTIAL_FLAG || bitmask == (BIND_FLAG | PARTIAL_FLAG)) && !newData[4].length) {
	        result = createPartialWrapper.apply(undefined, newData);
	      } else {
	        result = createHybridWrapper.apply(undefined, newData);
	      }
	      var setter = data ? baseSetData : setData;
	      return setter(result, newData);
	    }

	    /**
	     * A specialized version of `baseIsEqualDeep` for arrays with support for
	     * partial deep comparisons.
	     *
	     * @private
	     * @param {Array} array The array to compare.
	     * @param {Array} other The other array to compare.
	     * @param {Function} equalFunc The function to determine equivalents of values.
	     * @param {Function} [customizer] The function to customize comparing arrays.
	     * @param {boolean} [isLoose] Specify performing partial comparisons.
	     * @param {Array} [stackA] Tracks traversed `value` objects.
	     * @param {Array} [stackB] Tracks traversed `other` objects.
	     * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
	     */
	    function equalArrays(array, other, equalFunc, customizer, isLoose, stackA, stackB) {
	      var index = -1,
	          arrLength = array.length,
	          othLength = other.length;

	      if (arrLength != othLength && !(isLoose && othLength > arrLength)) {
	        return false;
	      }
	      // Ignore non-index properties.
	      while (++index < arrLength) {
	        var arrValue = array[index],
	            othValue = other[index],
	            result = customizer ? customizer(isLoose ? othValue : arrValue, isLoose ? arrValue : othValue, index) : undefined;

	        if (result !== undefined) {
	          if (result) {
	            continue;
	          }
	          return false;
	        }
	        // Recursively compare arrays (susceptible to call stack limits).
	        if (isLoose) {
	          if (!arraySome(other, function(othValue) {
	                return arrValue === othValue || equalFunc(arrValue, othValue, customizer, isLoose, stackA, stackB);
	              })) {
	            return false;
	          }
	        } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, customizer, isLoose, stackA, stackB))) {
	          return false;
	        }
	      }
	      return true;
	    }

	    /**
	     * A specialized version of `baseIsEqualDeep` for comparing objects of
	     * the same `toStringTag`.
	     *
	     * **Note:** This function only supports comparing values with tags of
	     * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
	     *
	     * @private
	     * @param {Object} object The object to compare.
	     * @param {Object} other The other object to compare.
	     * @param {string} tag The `toStringTag` of the objects to compare.
	     * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	     */
	    function equalByTag(object, other, tag) {
	      switch (tag) {
	        case boolTag:
	        case dateTag:
	          // Coerce dates and booleans to numbers, dates to milliseconds and booleans
	          // to `1` or `0` treating invalid dates coerced to `NaN` as not equal.
	          return +object == +other;

	        case errorTag:
	          return object.name == other.name && object.message == other.message;

	        case numberTag:
	          // Treat `NaN` vs. `NaN` as equal.
	          return (object != +object)
	            ? other != +other
	            : object == +other;

	        case regexpTag:
	        case stringTag:
	          // Coerce regexes to strings and treat strings primitives and string
	          // objects as equal. See https://es5.github.io/#x15.10.6.4 for more details.
	          return object == (other + '');
	      }
	      return false;
	    }

	    /**
	     * A specialized version of `baseIsEqualDeep` for objects with support for
	     * partial deep comparisons.
	     *
	     * @private
	     * @param {Object} object The object to compare.
	     * @param {Object} other The other object to compare.
	     * @param {Function} equalFunc The function to determine equivalents of values.
	     * @param {Function} [customizer] The function to customize comparing values.
	     * @param {boolean} [isLoose] Specify performing partial comparisons.
	     * @param {Array} [stackA] Tracks traversed `value` objects.
	     * @param {Array} [stackB] Tracks traversed `other` objects.
	     * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	     */
	    function equalObjects(object, other, equalFunc, customizer, isLoose, stackA, stackB) {
	      var objProps = keys(object),
	          objLength = objProps.length,
	          othProps = keys(other),
	          othLength = othProps.length;

	      if (objLength != othLength && !isLoose) {
	        return false;
	      }
	      var index = objLength;
	      while (index--) {
	        var key = objProps[index];
	        if (!(isLoose ? key in other : hasOwnProperty.call(other, key))) {
	          return false;
	        }
	      }
	      var skipCtor = isLoose;
	      while (++index < objLength) {
	        key = objProps[index];
	        var objValue = object[key],
	            othValue = other[key],
	            result = customizer ? customizer(isLoose ? othValue : objValue, isLoose? objValue : othValue, key) : undefined;

	        // Recursively compare objects (susceptible to call stack limits).
	        if (!(result === undefined ? equalFunc(objValue, othValue, customizer, isLoose, stackA, stackB) : result)) {
	          return false;
	        }
	        skipCtor || (skipCtor = key == 'constructor');
	      }
	      if (!skipCtor) {
	        var objCtor = object.constructor,
	            othCtor = other.constructor;

	        // Non `Object` object instances with different constructors are not equal.
	        if (objCtor != othCtor &&
	            ('constructor' in object && 'constructor' in other) &&
	            !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
	              typeof othCtor == 'function' && othCtor instanceof othCtor)) {
	          return false;
	        }
	      }
	      return true;
	    }

	    /**
	     * Gets the appropriate "callback" function. If the `_.callback` method is
	     * customized this function returns the custom method, otherwise it returns
	     * the `baseCallback` function. If arguments are provided the chosen function
	     * is invoked with them and its result is returned.
	     *
	     * @private
	     * @returns {Function} Returns the chosen function or its result.
	     */
	    function getCallback(func, thisArg, argCount) {
	      var result = lodash.callback || callback;
	      result = result === callback ? baseCallback : result;
	      return argCount ? result(func, thisArg, argCount) : result;
	    }

	    /**
	     * Gets metadata for `func`.
	     *
	     * @private
	     * @param {Function} func The function to query.
	     * @returns {*} Returns the metadata for `func`.
	     */
	    var getData = !metaMap ? noop : function(func) {
	      return metaMap.get(func);
	    };

	    /**
	     * Gets the name of `func`.
	     *
	     * @private
	     * @param {Function} func The function to query.
	     * @returns {string} Returns the function name.
	     */
	    function getFuncName(func) {
	      var result = func.name,
	          array = realNames[result],
	          length = array ? array.length : 0;

	      while (length--) {
	        var data = array[length],
	            otherFunc = data.func;
	        if (otherFunc == null || otherFunc == func) {
	          return data.name;
	        }
	      }
	      return result;
	    }

	    /**
	     * Gets the appropriate "indexOf" function. If the `_.indexOf` method is
	     * customized this function returns the custom method, otherwise it returns
	     * the `baseIndexOf` function. If arguments are provided the chosen function
	     * is invoked with them and its result is returned.
	     *
	     * @private
	     * @returns {Function|number} Returns the chosen function or its result.
	     */
	    function getIndexOf(collection, target, fromIndex) {
	      var result = lodash.indexOf || indexOf;
	      result = result === indexOf ? baseIndexOf : result;
	      return collection ? result(collection, target, fromIndex) : result;
	    }

	    /**
	     * Gets the "length" property value of `object`.
	     *
	     * **Note:** This function is used to avoid a [JIT bug](https://bugs.webkit.org/show_bug.cgi?id=142792)
	     * that affects Safari on at least iOS 8.1-8.3 ARM64.
	     *
	     * @private
	     * @param {Object} object The object to query.
	     * @returns {*} Returns the "length" value.
	     */
	    var getLength = baseProperty('length');

	    /**
	     * Gets the propery names, values, and compare flags of `object`.
	     *
	     * @private
	     * @param {Object} object The object to query.
	     * @returns {Array} Returns the match data of `object`.
	     */
	    function getMatchData(object) {
	      var result = pairs(object),
	          length = result.length;

	      while (length--) {
	        result[length][2] = isStrictComparable(result[length][1]);
	      }
	      return result;
	    }

	    /**
	     * Gets the native function at `key` of `object`.
	     *
	     * @private
	     * @param {Object} object The object to query.
	     * @param {string} key The key of the method to get.
	     * @returns {*} Returns the function if it's native, else `undefined`.
	     */
	    function getNative(object, key) {
	      var value = object == null ? undefined : object[key];
	      return isNative(value) ? value : undefined;
	    }

	    /**
	     * Gets the view, applying any `transforms` to the `start` and `end` positions.
	     *
	     * @private
	     * @param {number} start The start of the view.
	     * @param {number} end The end of the view.
	     * @param {Array} transforms The transformations to apply to the view.
	     * @returns {Object} Returns an object containing the `start` and `end`
	     *  positions of the view.
	     */
	    function getView(start, end, transforms) {
	      var index = -1,
	          length = transforms.length;

	      while (++index < length) {
	        var data = transforms[index],
	            size = data.size;

	        switch (data.type) {
	          case 'drop':      start += size; break;
	          case 'dropRight': end -= size; break;
	          case 'take':      end = nativeMin(end, start + size); break;
	          case 'takeRight': start = nativeMax(start, end - size); break;
	        }
	      }
	      return { 'start': start, 'end': end };
	    }

	    /**
	     * Initializes an array clone.
	     *
	     * @private
	     * @param {Array} array The array to clone.
	     * @returns {Array} Returns the initialized clone.
	     */
	    function initCloneArray(array) {
	      var length = array.length,
	          result = new array.constructor(length);

	      // Add array properties assigned by `RegExp#exec`.
	      if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
	        result.index = array.index;
	        result.input = array.input;
	      }
	      return result;
	    }

	    /**
	     * Initializes an object clone.
	     *
	     * @private
	     * @param {Object} object The object to clone.
	     * @returns {Object} Returns the initialized clone.
	     */
	    function initCloneObject(object) {
	      var Ctor = object.constructor;
	      if (!(typeof Ctor == 'function' && Ctor instanceof Ctor)) {
	        Ctor = Object;
	      }
	      return new Ctor;
	    }

	    /**
	     * Initializes an object clone based on its `toStringTag`.
	     *
	     * **Note:** This function only supports cloning values with tags of
	     * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
	     *
	     * @private
	     * @param {Object} object The object to clone.
	     * @param {string} tag The `toStringTag` of the object to clone.
	     * @param {boolean} [isDeep] Specify a deep clone.
	     * @returns {Object} Returns the initialized clone.
	     */
	    function initCloneByTag(object, tag, isDeep) {
	      var Ctor = object.constructor;
	      switch (tag) {
	        case arrayBufferTag:
	          return bufferClone(object);

	        case boolTag:
	        case dateTag:
	          return new Ctor(+object);

	        case float32Tag: case float64Tag:
	        case int8Tag: case int16Tag: case int32Tag:
	        case uint8Tag: case uint8ClampedTag: case uint16Tag: case uint32Tag:
	          var buffer = object.buffer;
	          return new Ctor(isDeep ? bufferClone(buffer) : buffer, object.byteOffset, object.length);

	        case numberTag:
	        case stringTag:
	          return new Ctor(object);

	        case regexpTag:
	          var result = new Ctor(object.source, reFlags.exec(object));
	          result.lastIndex = object.lastIndex;
	      }
	      return result;
	    }

	    /**
	     * Invokes the method at `path` on `object`.
	     *
	     * @private
	     * @param {Object} object The object to query.
	     * @param {Array|string} path The path of the method to invoke.
	     * @param {Array} args The arguments to invoke the method with.
	     * @returns {*} Returns the result of the invoked method.
	     */
	    function invokePath(object, path, args) {
	      if (object != null && !isKey(path, object)) {
	        path = toPath(path);
	        object = path.length == 1 ? object : baseGet(object, baseSlice(path, 0, -1));
	        path = last(path);
	      }
	      var func = object == null ? object : object[path];
	      return func == null ? undefined : func.apply(object, args);
	    }

	    /**
	     * Checks if `value` is array-like.
	     *
	     * @private
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	     */
	    function isArrayLike(value) {
	      return value != null && isLength(getLength(value));
	    }

	    /**
	     * Checks if `value` is a valid array-like index.
	     *
	     * @private
	     * @param {*} value The value to check.
	     * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	     * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	     */
	    function isIndex(value, length) {
	      value = (typeof value == 'number' || reIsUint.test(value)) ? +value : -1;
	      length = length == null ? MAX_SAFE_INTEGER : length;
	      return value > -1 && value % 1 == 0 && value < length;
	    }

	    /**
	     * Checks if the provided arguments are from an iteratee call.
	     *
	     * @private
	     * @param {*} value The potential iteratee value argument.
	     * @param {*} index The potential iteratee index or key argument.
	     * @param {*} object The potential iteratee object argument.
	     * @returns {boolean} Returns `true` if the arguments are from an iteratee call, else `false`.
	     */
	    function isIterateeCall(value, index, object) {
	      if (!isObject(object)) {
	        return false;
	      }
	      var type = typeof index;
	      if (type == 'number'
	          ? (isArrayLike(object) && isIndex(index, object.length))
	          : (type == 'string' && index in object)) {
	        var other = object[index];
	        return value === value ? (value === other) : (other !== other);
	      }
	      return false;
	    }

	    /**
	     * Checks if `value` is a property name and not a property path.
	     *
	     * @private
	     * @param {*} value The value to check.
	     * @param {Object} [object] The object to query keys on.
	     * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
	     */
	    function isKey(value, object) {
	      var type = typeof value;
	      if ((type == 'string' && reIsPlainProp.test(value)) || type == 'number') {
	        return true;
	      }
	      if (isArray(value)) {
	        return false;
	      }
	      var result = !reIsDeepProp.test(value);
	      return result || (object != null && value in toObject(object));
	    }

	    /**
	     * Checks if `func` has a lazy counterpart.
	     *
	     * @private
	     * @param {Function} func The function to check.
	     * @returns {boolean} Returns `true` if `func` has a lazy counterpart, else `false`.
	     */
	    function isLaziable(func) {
	      var funcName = getFuncName(func);
	      if (!(funcName in LazyWrapper.prototype)) {
	        return false;
	      }
	      var other = lodash[funcName];
	      if (func === other) {
	        return true;
	      }
	      var data = getData(other);
	      return !!data && func === data[0];
	    }

	    /**
	     * Checks if `value` is a valid array-like length.
	     *
	     * **Note:** This function is based on [`ToLength`](http://ecma-international.org/ecma-262/6.0/#sec-tolength).
	     *
	     * @private
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	     */
	    function isLength(value) {
	      return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	    }

	    /**
	     * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
	     *
	     * @private
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` if suitable for strict
	     *  equality comparisons, else `false`.
	     */
	    function isStrictComparable(value) {
	      return value === value && !isObject(value);
	    }

	    /**
	     * Merges the function metadata of `source` into `data`.
	     *
	     * Merging metadata reduces the number of wrappers required to invoke a function.
	     * This is possible because methods like `_.bind`, `_.curry`, and `_.partial`
	     * may be applied regardless of execution order. Methods like `_.ary` and `_.rearg`
	     * augment function arguments, making the order in which they are executed important,
	     * preventing the merging of metadata. However, we make an exception for a safe
	     * common case where curried functions have `_.ary` and or `_.rearg` applied.
	     *
	     * @private
	     * @param {Array} data The destination metadata.
	     * @param {Array} source The source metadata.
	     * @returns {Array} Returns `data`.
	     */
	    function mergeData(data, source) {
	      var bitmask = data[1],
	          srcBitmask = source[1],
	          newBitmask = bitmask | srcBitmask,
	          isCommon = newBitmask < ARY_FLAG;

	      var isCombo =
	        (srcBitmask == ARY_FLAG && bitmask == CURRY_FLAG) ||
	        (srcBitmask == ARY_FLAG && bitmask == REARG_FLAG && data[7].length <= source[8]) ||
	        (srcBitmask == (ARY_FLAG | REARG_FLAG) && bitmask == CURRY_FLAG);

	      // Exit early if metadata can't be merged.
	      if (!(isCommon || isCombo)) {
	        return data;
	      }
	      // Use source `thisArg` if available.
	      if (srcBitmask & BIND_FLAG) {
	        data[2] = source[2];
	        // Set when currying a bound function.
	        newBitmask |= (bitmask & BIND_FLAG) ? 0 : CURRY_BOUND_FLAG;
	      }
	      // Compose partial arguments.
	      var value = source[3];
	      if (value) {
	        var partials = data[3];
	        data[3] = partials ? composeArgs(partials, value, source[4]) : arrayCopy(value);
	        data[4] = partials ? replaceHolders(data[3], PLACEHOLDER) : arrayCopy(source[4]);
	      }
	      // Compose partial right arguments.
	      value = source[5];
	      if (value) {
	        partials = data[5];
	        data[5] = partials ? composeArgsRight(partials, value, source[6]) : arrayCopy(value);
	        data[6] = partials ? replaceHolders(data[5], PLACEHOLDER) : arrayCopy(source[6]);
	      }
	      // Use source `argPos` if available.
	      value = source[7];
	      if (value) {
	        data[7] = arrayCopy(value);
	      }
	      // Use source `ary` if it's smaller.
	      if (srcBitmask & ARY_FLAG) {
	        data[8] = data[8] == null ? source[8] : nativeMin(data[8], source[8]);
	      }
	      // Use source `arity` if one is not provided.
	      if (data[9] == null) {
	        data[9] = source[9];
	      }
	      // Use source `func` and merge bitmasks.
	      data[0] = source[0];
	      data[1] = newBitmask;

	      return data;
	    }

	    /**
	     * Used by `_.defaultsDeep` to customize its `_.merge` use.
	     *
	     * @private
	     * @param {*} objectValue The destination object property value.
	     * @param {*} sourceValue The source object property value.
	     * @returns {*} Returns the value to assign to the destination object.
	     */
	    function mergeDefaults(objectValue, sourceValue) {
	      return objectValue === undefined ? sourceValue : merge(objectValue, sourceValue, mergeDefaults);
	    }

	    /**
	     * A specialized version of `_.pick` which picks `object` properties specified
	     * by `props`.
	     *
	     * @private
	     * @param {Object} object The source object.
	     * @param {string[]} props The property names to pick.
	     * @returns {Object} Returns the new object.
	     */
	    function pickByArray(object, props) {
	      object = toObject(object);

	      var index = -1,
	          length = props.length,
	          result = {};

	      while (++index < length) {
	        var key = props[index];
	        if (key in object) {
	          result[key] = object[key];
	        }
	      }
	      return result;
	    }

	    /**
	     * A specialized version of `_.pick` which picks `object` properties `predicate`
	     * returns truthy for.
	     *
	     * @private
	     * @param {Object} object The source object.
	     * @param {Function} predicate The function invoked per iteration.
	     * @returns {Object} Returns the new object.
	     */
	    function pickByCallback(object, predicate) {
	      var result = {};
	      baseForIn(object, function(value, key, object) {
	        if (predicate(value, key, object)) {
	          result[key] = value;
	        }
	      });
	      return result;
	    }

	    /**
	     * Reorder `array` according to the specified indexes where the element at
	     * the first index is assigned as the first element, the element at
	     * the second index is assigned as the second element, and so on.
	     *
	     * @private
	     * @param {Array} array The array to reorder.
	     * @param {Array} indexes The arranged array indexes.
	     * @returns {Array} Returns `array`.
	     */
	    function reorder(array, indexes) {
	      var arrLength = array.length,
	          length = nativeMin(indexes.length, arrLength),
	          oldArray = arrayCopy(array);

	      while (length--) {
	        var index = indexes[length];
	        array[length] = isIndex(index, arrLength) ? oldArray[index] : undefined;
	      }
	      return array;
	    }

	    /**
	     * Sets metadata for `func`.
	     *
	     * **Note:** If this function becomes hot, i.e. is invoked a lot in a short
	     * period of time, it will trip its breaker and transition to an identity function
	     * to avoid garbage collection pauses in V8. See [V8 issue 2070](https://code.google.com/p/v8/issues/detail?id=2070)
	     * for more details.
	     *
	     * @private
	     * @param {Function} func The function to associate metadata with.
	     * @param {*} data The metadata.
	     * @returns {Function} Returns `func`.
	     */
	    var setData = (function() {
	      var count = 0,
	          lastCalled = 0;

	      return function(key, value) {
	        var stamp = now(),
	            remaining = HOT_SPAN - (stamp - lastCalled);

	        lastCalled = stamp;
	        if (remaining > 0) {
	          if (++count >= HOT_COUNT) {
	            return key;
	          }
	        } else {
	          count = 0;
	        }
	        return baseSetData(key, value);
	      };
	    }());

	    /**
	     * A fallback implementation of `Object.keys` which creates an array of the
	     * own enumerable property names of `object`.
	     *
	     * @private
	     * @param {Object} object The object to query.
	     * @returns {Array} Returns the array of property names.
	     */
	    function shimKeys(object) {
	      var props = keysIn(object),
	          propsLength = props.length,
	          length = propsLength && object.length;

	      var allowIndexes = !!length && isLength(length) &&
	        (isArray(object) || isArguments(object));

	      var index = -1,
	          result = [];

	      while (++index < propsLength) {
	        var key = props[index];
	        if ((allowIndexes && isIndex(key, length)) || hasOwnProperty.call(object, key)) {
	          result.push(key);
	        }
	      }
	      return result;
	    }

	    /**
	     * Converts `value` to an array-like object if it's not one.
	     *
	     * @private
	     * @param {*} value The value to process.
	     * @returns {Array|Object} Returns the array-like object.
	     */
	    function toIterable(value) {
	      if (value == null) {
	        return [];
	      }
	      if (!isArrayLike(value)) {
	        return values(value);
	      }
	      return isObject(value) ? value : Object(value);
	    }

	    /**
	     * Converts `value` to an object if it's not one.
	     *
	     * @private
	     * @param {*} value The value to process.
	     * @returns {Object} Returns the object.
	     */
	    function toObject(value) {
	      return isObject(value) ? value : Object(value);
	    }

	    /**
	     * Converts `value` to property path array if it's not one.
	     *
	     * @private
	     * @param {*} value The value to process.
	     * @returns {Array} Returns the property path array.
	     */
	    function toPath(value) {
	      if (isArray(value)) {
	        return value;
	      }
	      var result = [];
	      baseToString(value).replace(rePropName, function(match, number, quote, string) {
	        result.push(quote ? string.replace(reEscapeChar, '$1') : (number || match));
	      });
	      return result;
	    }

	    /**
	     * Creates a clone of `wrapper`.
	     *
	     * @private
	     * @param {Object} wrapper The wrapper to clone.
	     * @returns {Object} Returns the cloned wrapper.
	     */
	    function wrapperClone(wrapper) {
	      return wrapper instanceof LazyWrapper
	        ? wrapper.clone()
	        : new LodashWrapper(wrapper.__wrapped__, wrapper.__chain__, arrayCopy(wrapper.__actions__));
	    }

	    /*------------------------------------------------------------------------*/

	    /**
	     * Creates an array of elements split into groups the length of `size`.
	     * If `collection` can't be split evenly, the final chunk will be the remaining
	     * elements.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to process.
	     * @param {number} [size=1] The length of each chunk.
	     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
	     * @returns {Array} Returns the new array containing chunks.
	     * @example
	     *
	     * _.chunk(['a', 'b', 'c', 'd'], 2);
	     * // => [['a', 'b'], ['c', 'd']]
	     *
	     * _.chunk(['a', 'b', 'c', 'd'], 3);
	     * // => [['a', 'b', 'c'], ['d']]
	     */
	    function chunk(array, size, guard) {
	      if (guard ? isIterateeCall(array, size, guard) : size == null) {
	        size = 1;
	      } else {
	        size = nativeMax(nativeFloor(size) || 1, 1);
	      }
	      var index = 0,
	          length = array ? array.length : 0,
	          resIndex = -1,
	          result = Array(nativeCeil(length / size));

	      while (index < length) {
	        result[++resIndex] = baseSlice(array, index, (index += size));
	      }
	      return result;
	    }

	    /**
	     * Creates an array with all falsey values removed. The values `false`, `null`,
	     * `0`, `""`, `undefined`, and `NaN` are falsey.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to compact.
	     * @returns {Array} Returns the new array of filtered values.
	     * @example
	     *
	     * _.compact([0, 1, false, 2, '', 3]);
	     * // => [1, 2, 3]
	     */
	    function compact(array) {
	      var index = -1,
	          length = array ? array.length : 0,
	          resIndex = -1,
	          result = [];

	      while (++index < length) {
	        var value = array[index];
	        if (value) {
	          result[++resIndex] = value;
	        }
	      }
	      return result;
	    }

	    /**
	     * Creates an array of unique `array` values not included in the other
	     * provided arrays using [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
	     * for equality comparisons.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to inspect.
	     * @param {...Array} [values] The arrays of values to exclude.
	     * @returns {Array} Returns the new array of filtered values.
	     * @example
	     *
	     * _.difference([1, 2, 3], [4, 2]);
	     * // => [1, 3]
	     */
	    var difference = restParam(function(array, values) {
	      return (isObjectLike(array) && isArrayLike(array))
	        ? baseDifference(array, baseFlatten(values, false, true))
	        : [];
	    });

	    /**
	     * Creates a slice of `array` with `n` elements dropped from the beginning.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to query.
	     * @param {number} [n=1] The number of elements to drop.
	     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
	     * @returns {Array} Returns the slice of `array`.
	     * @example
	     *
	     * _.drop([1, 2, 3]);
	     * // => [2, 3]
	     *
	     * _.drop([1, 2, 3], 2);
	     * // => [3]
	     *
	     * _.drop([1, 2, 3], 5);
	     * // => []
	     *
	     * _.drop([1, 2, 3], 0);
	     * // => [1, 2, 3]
	     */
	    function drop(array, n, guard) {
	      var length = array ? array.length : 0;
	      if (!length) {
	        return [];
	      }
	      if (guard ? isIterateeCall(array, n, guard) : n == null) {
	        n = 1;
	      }
	      return baseSlice(array, n < 0 ? 0 : n);
	    }

	    /**
	     * Creates a slice of `array` with `n` elements dropped from the end.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to query.
	     * @param {number} [n=1] The number of elements to drop.
	     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
	     * @returns {Array} Returns the slice of `array`.
	     * @example
	     *
	     * _.dropRight([1, 2, 3]);
	     * // => [1, 2]
	     *
	     * _.dropRight([1, 2, 3], 2);
	     * // => [1]
	     *
	     * _.dropRight([1, 2, 3], 5);
	     * // => []
	     *
	     * _.dropRight([1, 2, 3], 0);
	     * // => [1, 2, 3]
	     */
	    function dropRight(array, n, guard) {
	      var length = array ? array.length : 0;
	      if (!length) {
	        return [];
	      }
	      if (guard ? isIterateeCall(array, n, guard) : n == null) {
	        n = 1;
	      }
	      n = length - (+n || 0);
	      return baseSlice(array, 0, n < 0 ? 0 : n);
	    }

	    /**
	     * Creates a slice of `array` excluding elements dropped from the end.
	     * Elements are dropped until `predicate` returns falsey. The predicate is
	     * bound to `thisArg` and invoked with three arguments: (value, index, array).
	     *
	     * If a property name is provided for `predicate` the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If a value is also provided for `thisArg` the created `_.matchesProperty`
	     * style callback returns `true` for elements that have a matching property
	     * value, else `false`.
	     *
	     * If an object is provided for `predicate` the created `_.matches` style
	     * callback returns `true` for elements that match the properties of the given
	     * object, else `false`.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to query.
	     * @param {Function|Object|string} [predicate=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `predicate`.
	     * @returns {Array} Returns the slice of `array`.
	     * @example
	     *
	     * _.dropRightWhile([1, 2, 3], function(n) {
	     *   return n > 1;
	     * });
	     * // => [1]
	     *
	     * var users = [
	     *   { 'user': 'barney',  'active': true },
	     *   { 'user': 'fred',    'active': false },
	     *   { 'user': 'pebbles', 'active': false }
	     * ];
	     *
	     * // using the `_.matches` callback shorthand
	     * _.pluck(_.dropRightWhile(users, { 'user': 'pebbles', 'active': false }), 'user');
	     * // => ['barney', 'fred']
	     *
	     * // using the `_.matchesProperty` callback shorthand
	     * _.pluck(_.dropRightWhile(users, 'active', false), 'user');
	     * // => ['barney']
	     *
	     * // using the `_.property` callback shorthand
	     * _.pluck(_.dropRightWhile(users, 'active'), 'user');
	     * // => ['barney', 'fred', 'pebbles']
	     */
	    function dropRightWhile(array, predicate, thisArg) {
	      return (array && array.length)
	        ? baseWhile(array, getCallback(predicate, thisArg, 3), true, true)
	        : [];
	    }

	    /**
	     * Creates a slice of `array` excluding elements dropped from the beginning.
	     * Elements are dropped until `predicate` returns falsey. The predicate is
	     * bound to `thisArg` and invoked with three arguments: (value, index, array).
	     *
	     * If a property name is provided for `predicate` the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If a value is also provided for `thisArg` the created `_.matchesProperty`
	     * style callback returns `true` for elements that have a matching property
	     * value, else `false`.
	     *
	     * If an object is provided for `predicate` the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to query.
	     * @param {Function|Object|string} [predicate=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `predicate`.
	     * @returns {Array} Returns the slice of `array`.
	     * @example
	     *
	     * _.dropWhile([1, 2, 3], function(n) {
	     *   return n < 3;
	     * });
	     * // => [3]
	     *
	     * var users = [
	     *   { 'user': 'barney',  'active': false },
	     *   { 'user': 'fred',    'active': false },
	     *   { 'user': 'pebbles', 'active': true }
	     * ];
	     *
	     * // using the `_.matches` callback shorthand
	     * _.pluck(_.dropWhile(users, { 'user': 'barney', 'active': false }), 'user');
	     * // => ['fred', 'pebbles']
	     *
	     * // using the `_.matchesProperty` callback shorthand
	     * _.pluck(_.dropWhile(users, 'active', false), 'user');
	     * // => ['pebbles']
	     *
	     * // using the `_.property` callback shorthand
	     * _.pluck(_.dropWhile(users, 'active'), 'user');
	     * // => ['barney', 'fred', 'pebbles']
	     */
	    function dropWhile(array, predicate, thisArg) {
	      return (array && array.length)
	        ? baseWhile(array, getCallback(predicate, thisArg, 3), true)
	        : [];
	    }

	    /**
	     * Fills elements of `array` with `value` from `start` up to, but not
	     * including, `end`.
	     *
	     * **Note:** This method mutates `array`.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to fill.
	     * @param {*} value The value to fill `array` with.
	     * @param {number} [start=0] The start position.
	     * @param {number} [end=array.length] The end position.
	     * @returns {Array} Returns `array`.
	     * @example
	     *
	     * var array = [1, 2, 3];
	     *
	     * _.fill(array, 'a');
	     * console.log(array);
	     * // => ['a', 'a', 'a']
	     *
	     * _.fill(Array(3), 2);
	     * // => [2, 2, 2]
	     *
	     * _.fill([4, 6, 8], '*', 1, 2);
	     * // => [4, '*', 8]
	     */
	    function fill(array, value, start, end) {
	      var length = array ? array.length : 0;
	      if (!length) {
	        return [];
	      }
	      if (start && typeof start != 'number' && isIterateeCall(array, value, start)) {
	        start = 0;
	        end = length;
	      }
	      return baseFill(array, value, start, end);
	    }

	    /**
	     * This method is like `_.find` except that it returns the index of the first
	     * element `predicate` returns truthy for instead of the element itself.
	     *
	     * If a property name is provided for `predicate` the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If a value is also provided for `thisArg` the created `_.matchesProperty`
	     * style callback returns `true` for elements that have a matching property
	     * value, else `false`.
	     *
	     * If an object is provided for `predicate` the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to search.
	     * @param {Function|Object|string} [predicate=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `predicate`.
	     * @returns {number} Returns the index of the found element, else `-1`.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney',  'active': false },
	     *   { 'user': 'fred',    'active': false },
	     *   { 'user': 'pebbles', 'active': true }
	     * ];
	     *
	     * _.findIndex(users, function(chr) {
	     *   return chr.user == 'barney';
	     * });
	     * // => 0
	     *
	     * // using the `_.matches` callback shorthand
	     * _.findIndex(users, { 'user': 'fred', 'active': false });
	     * // => 1
	     *
	     * // using the `_.matchesProperty` callback shorthand
	     * _.findIndex(users, 'active', false);
	     * // => 0
	     *
	     * // using the `_.property` callback shorthand
	     * _.findIndex(users, 'active');
	     * // => 2
	     */
	    var findIndex = createFindIndex();

	    /**
	     * This method is like `_.findIndex` except that it iterates over elements
	     * of `collection` from right to left.
	     *
	     * If a property name is provided for `predicate` the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If a value is also provided for `thisArg` the created `_.matchesProperty`
	     * style callback returns `true` for elements that have a matching property
	     * value, else `false`.
	     *
	     * If an object is provided for `predicate` the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to search.
	     * @param {Function|Object|string} [predicate=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `predicate`.
	     * @returns {number} Returns the index of the found element, else `-1`.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney',  'active': true },
	     *   { 'user': 'fred',    'active': false },
	     *   { 'user': 'pebbles', 'active': false }
	     * ];
	     *
	     * _.findLastIndex(users, function(chr) {
	     *   return chr.user == 'pebbles';
	     * });
	     * // => 2
	     *
	     * // using the `_.matches` callback shorthand
	     * _.findLastIndex(users, { 'user': 'barney', 'active': true });
	     * // => 0
	     *
	     * // using the `_.matchesProperty` callback shorthand
	     * _.findLastIndex(users, 'active', false);
	     * // => 2
	     *
	     * // using the `_.property` callback shorthand
	     * _.findLastIndex(users, 'active');
	     * // => 0
	     */
	    var findLastIndex = createFindIndex(true);

	    /**
	     * Gets the first element of `array`.
	     *
	     * @static
	     * @memberOf _
	     * @alias head
	     * @category Array
	     * @param {Array} array The array to query.
	     * @returns {*} Returns the first element of `array`.
	     * @example
	     *
	     * _.first([1, 2, 3]);
	     * // => 1
	     *
	     * _.first([]);
	     * // => undefined
	     */
	    function first(array) {
	      return array ? array[0] : undefined;
	    }

	    /**
	     * Flattens a nested array. If `isDeep` is `true` the array is recursively
	     * flattened, otherwise it is only flattened a single level.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to flatten.
	     * @param {boolean} [isDeep] Specify a deep flatten.
	     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
	     * @returns {Array} Returns the new flattened array.
	     * @example
	     *
	     * _.flatten([1, [2, 3, [4]]]);
	     * // => [1, 2, 3, [4]]
	     *
	     * // using `isDeep`
	     * _.flatten([1, [2, 3, [4]]], true);
	     * // => [1, 2, 3, 4]
	     */
	    function flatten(array, isDeep, guard) {
	      var length = array ? array.length : 0;
	      if (guard && isIterateeCall(array, isDeep, guard)) {
	        isDeep = false;
	      }
	      return length ? baseFlatten(array, isDeep) : [];
	    }

	    /**
	     * Recursively flattens a nested array.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to recursively flatten.
	     * @returns {Array} Returns the new flattened array.
	     * @example
	     *
	     * _.flattenDeep([1, [2, 3, [4]]]);
	     * // => [1, 2, 3, 4]
	     */
	    function flattenDeep(array) {
	      var length = array ? array.length : 0;
	      return length ? baseFlatten(array, true) : [];
	    }

	    /**
	     * Gets the index at which the first occurrence of `value` is found in `array`
	     * using [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
	     * for equality comparisons. If `fromIndex` is negative, it is used as the offset
	     * from the end of `array`. If `array` is sorted providing `true` for `fromIndex`
	     * performs a faster binary search.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to search.
	     * @param {*} value The value to search for.
	     * @param {boolean|number} [fromIndex=0] The index to search from or `true`
	     *  to perform a binary search on a sorted array.
	     * @returns {number} Returns the index of the matched value, else `-1`.
	     * @example
	     *
	     * _.indexOf([1, 2, 1, 2], 2);
	     * // => 1
	     *
	     * // using `fromIndex`
	     * _.indexOf([1, 2, 1, 2], 2, 2);
	     * // => 3
	     *
	     * // performing a binary search
	     * _.indexOf([1, 1, 2, 2], 2, true);
	     * // => 2
	     */
	    function indexOf(array, value, fromIndex) {
	      var length = array ? array.length : 0;
	      if (!length) {
	        return -1;
	      }
	      if (typeof fromIndex == 'number') {
	        fromIndex = fromIndex < 0 ? nativeMax(length + fromIndex, 0) : fromIndex;
	      } else if (fromIndex) {
	        var index = binaryIndex(array, value);
	        if (index < length &&
	            (value === value ? (value === array[index]) : (array[index] !== array[index]))) {
	          return index;
	        }
	        return -1;
	      }
	      return baseIndexOf(array, value, fromIndex || 0);
	    }

	    /**
	     * Gets all but the last element of `array`.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to query.
	     * @returns {Array} Returns the slice of `array`.
	     * @example
	     *
	     * _.initial([1, 2, 3]);
	     * // => [1, 2]
	     */
	    function initial(array) {
	      return dropRight(array, 1);
	    }

	    /**
	     * Creates an array of unique values that are included in all of the provided
	     * arrays using [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
	     * for equality comparisons.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {...Array} [arrays] The arrays to inspect.
	     * @returns {Array} Returns the new array of shared values.
	     * @example
	     * _.intersection([1, 2], [4, 2], [2, 1]);
	     * // => [2]
	     */
	    var intersection = restParam(function(arrays) {
	      var othLength = arrays.length,
	          othIndex = othLength,
	          caches = Array(length),
	          indexOf = getIndexOf(),
	          isCommon = indexOf == baseIndexOf,
	          result = [];

	      while (othIndex--) {
	        var value = arrays[othIndex] = isArrayLike(value = arrays[othIndex]) ? value : [];
	        caches[othIndex] = (isCommon && value.length >= 120) ? createCache(othIndex && value) : null;
	      }
	      var array = arrays[0],
	          index = -1,
	          length = array ? array.length : 0,
	          seen = caches[0];

	      outer:
	      while (++index < length) {
	        value = array[index];
	        if ((seen ? cacheIndexOf(seen, value) : indexOf(result, value, 0)) < 0) {
	          var othIndex = othLength;
	          while (--othIndex) {
	            var cache = caches[othIndex];
	            if ((cache ? cacheIndexOf(cache, value) : indexOf(arrays[othIndex], value, 0)) < 0) {
	              continue outer;
	            }
	          }
	          if (seen) {
	            seen.push(value);
	          }
	          result.push(value);
	        }
	      }
	      return result;
	    });

	    /**
	     * Gets the last element of `array`.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to query.
	     * @returns {*} Returns the last element of `array`.
	     * @example
	     *
	     * _.last([1, 2, 3]);
	     * // => 3
	     */
	    function last(array) {
	      var length = array ? array.length : 0;
	      return length ? array[length - 1] : undefined;
	    }

	    /**
	     * This method is like `_.indexOf` except that it iterates over elements of
	     * `array` from right to left.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to search.
	     * @param {*} value The value to search for.
	     * @param {boolean|number} [fromIndex=array.length-1] The index to search from
	     *  or `true` to perform a binary search on a sorted array.
	     * @returns {number} Returns the index of the matched value, else `-1`.
	     * @example
	     *
	     * _.lastIndexOf([1, 2, 1, 2], 2);
	     * // => 3
	     *
	     * // using `fromIndex`
	     * _.lastIndexOf([1, 2, 1, 2], 2, 2);
	     * // => 1
	     *
	     * // performing a binary search
	     * _.lastIndexOf([1, 1, 2, 2], 2, true);
	     * // => 3
	     */
	    function lastIndexOf(array, value, fromIndex) {
	      var length = array ? array.length : 0;
	      if (!length) {
	        return -1;
	      }
	      var index = length;
	      if (typeof fromIndex == 'number') {
	        index = (fromIndex < 0 ? nativeMax(length + fromIndex, 0) : nativeMin(fromIndex || 0, length - 1)) + 1;
	      } else if (fromIndex) {
	        index = binaryIndex(array, value, true) - 1;
	        var other = array[index];
	        if (value === value ? (value === other) : (other !== other)) {
	          return index;
	        }
	        return -1;
	      }
	      if (value !== value) {
	        return indexOfNaN(array, index, true);
	      }
	      while (index--) {
	        if (array[index] === value) {
	          return index;
	        }
	      }
	      return -1;
	    }

	    /**
	     * Removes all provided values from `array` using
	     * [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
	     * for equality comparisons.
	     *
	     * **Note:** Unlike `_.without`, this method mutates `array`.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to modify.
	     * @param {...*} [values] The values to remove.
	     * @returns {Array} Returns `array`.
	     * @example
	     *
	     * var array = [1, 2, 3, 1, 2, 3];
	     *
	     * _.pull(array, 2, 3);
	     * console.log(array);
	     * // => [1, 1]
	     */
	    function pull() {
	      var args = arguments,
	          array = args[0];

	      if (!(array && array.length)) {
	        return array;
	      }
	      var index = 0,
	          indexOf = getIndexOf(),
	          length = args.length;

	      while (++index < length) {
	        var fromIndex = 0,
	            value = args[index];

	        while ((fromIndex = indexOf(array, value, fromIndex)) > -1) {
	          splice.call(array, fromIndex, 1);
	        }
	      }
	      return array;
	    }

	    /**
	     * Removes elements from `array` corresponding to the given indexes and returns
	     * an array of the removed elements. Indexes may be specified as an array of
	     * indexes or as individual arguments.
	     *
	     * **Note:** Unlike `_.at`, this method mutates `array`.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to modify.
	     * @param {...(number|number[])} [indexes] The indexes of elements to remove,
	     *  specified as individual indexes or arrays of indexes.
	     * @returns {Array} Returns the new array of removed elements.
	     * @example
	     *
	     * var array = [5, 10, 15, 20];
	     * var evens = _.pullAt(array, 1, 3);
	     *
	     * console.log(array);
	     * // => [5, 15]
	     *
	     * console.log(evens);
	     * // => [10, 20]
	     */
	    var pullAt = restParam(function(array, indexes) {
	      indexes = baseFlatten(indexes);

	      var result = baseAt(array, indexes);
	      basePullAt(array, indexes.sort(baseCompareAscending));
	      return result;
	    });

	    /**
	     * Removes all elements from `array` that `predicate` returns truthy for
	     * and returns an array of the removed elements. The predicate is bound to
	     * `thisArg` and invoked with three arguments: (value, index, array).
	     *
	     * If a property name is provided for `predicate` the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If a value is also provided for `thisArg` the created `_.matchesProperty`
	     * style callback returns `true` for elements that have a matching property
	     * value, else `false`.
	     *
	     * If an object is provided for `predicate` the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * **Note:** Unlike `_.filter`, this method mutates `array`.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to modify.
	     * @param {Function|Object|string} [predicate=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `predicate`.
	     * @returns {Array} Returns the new array of removed elements.
	     * @example
	     *
	     * var array = [1, 2, 3, 4];
	     * var evens = _.remove(array, function(n) {
	     *   return n % 2 == 0;
	     * });
	     *
	     * console.log(array);
	     * // => [1, 3]
	     *
	     * console.log(evens);
	     * // => [2, 4]
	     */
	    function remove(array, predicate, thisArg) {
	      var result = [];
	      if (!(array && array.length)) {
	        return result;
	      }
	      var index = -1,
	          indexes = [],
	          length = array.length;

	      predicate = getCallback(predicate, thisArg, 3);
	      while (++index < length) {
	        var value = array[index];
	        if (predicate(value, index, array)) {
	          result.push(value);
	          indexes.push(index);
	        }
	      }
	      basePullAt(array, indexes);
	      return result;
	    }

	    /**
	     * Gets all but the first element of `array`.
	     *
	     * @static
	     * @memberOf _
	     * @alias tail
	     * @category Array
	     * @param {Array} array The array to query.
	     * @returns {Array} Returns the slice of `array`.
	     * @example
	     *
	     * _.rest([1, 2, 3]);
	     * // => [2, 3]
	     */
	    function rest(array) {
	      return drop(array, 1);
	    }

	    /**
	     * Creates a slice of `array` from `start` up to, but not including, `end`.
	     *
	     * **Note:** This method is used instead of `Array#slice` to support node
	     * lists in IE < 9 and to ensure dense arrays are returned.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to slice.
	     * @param {number} [start=0] The start position.
	     * @param {number} [end=array.length] The end position.
	     * @returns {Array} Returns the slice of `array`.
	     */
	    function slice(array, start, end) {
	      var length = array ? array.length : 0;
	      if (!length) {
	        return [];
	      }
	      if (end && typeof end != 'number' && isIterateeCall(array, start, end)) {
	        start = 0;
	        end = length;
	      }
	      return baseSlice(array, start, end);
	    }

	    /**
	     * Uses a binary search to determine the lowest index at which `value` should
	     * be inserted into `array` in order to maintain its sort order. If an iteratee
	     * function is provided it is invoked for `value` and each element of `array`
	     * to compute their sort ranking. The iteratee is bound to `thisArg` and
	     * invoked with one argument; (value).
	     *
	     * If a property name is provided for `iteratee` the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If a value is also provided for `thisArg` the created `_.matchesProperty`
	     * style callback returns `true` for elements that have a matching property
	     * value, else `false`.
	     *
	     * If an object is provided for `iteratee` the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The sorted array to inspect.
	     * @param {*} value The value to evaluate.
	     * @param {Function|Object|string} [iteratee=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {number} Returns the index at which `value` should be inserted
	     *  into `array`.
	     * @example
	     *
	     * _.sortedIndex([30, 50], 40);
	     * // => 1
	     *
	     * _.sortedIndex([4, 4, 5, 5], 5);
	     * // => 2
	     *
	     * var dict = { 'data': { 'thirty': 30, 'forty': 40, 'fifty': 50 } };
	     *
	     * // using an iteratee function
	     * _.sortedIndex(['thirty', 'fifty'], 'forty', function(word) {
	     *   return this.data[word];
	     * }, dict);
	     * // => 1
	     *
	     * // using the `_.property` callback shorthand
	     * _.sortedIndex([{ 'x': 30 }, { 'x': 50 }], { 'x': 40 }, 'x');
	     * // => 1
	     */
	    var sortedIndex = createSortedIndex();

	    /**
	     * This method is like `_.sortedIndex` except that it returns the highest
	     * index at which `value` should be inserted into `array` in order to
	     * maintain its sort order.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The sorted array to inspect.
	     * @param {*} value The value to evaluate.
	     * @param {Function|Object|string} [iteratee=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {number} Returns the index at which `value` should be inserted
	     *  into `array`.
	     * @example
	     *
	     * _.sortedLastIndex([4, 4, 5, 5], 5);
	     * // => 4
	     */
	    var sortedLastIndex = createSortedIndex(true);

	    /**
	     * Creates a slice of `array` with `n` elements taken from the beginning.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to query.
	     * @param {number} [n=1] The number of elements to take.
	     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
	     * @returns {Array} Returns the slice of `array`.
	     * @example
	     *
	     * _.take([1, 2, 3]);
	     * // => [1]
	     *
	     * _.take([1, 2, 3], 2);
	     * // => [1, 2]
	     *
	     * _.take([1, 2, 3], 5);
	     * // => [1, 2, 3]
	     *
	     * _.take([1, 2, 3], 0);
	     * // => []
	     */
	    function take(array, n, guard) {
	      var length = array ? array.length : 0;
	      if (!length) {
	        return [];
	      }
	      if (guard ? isIterateeCall(array, n, guard) : n == null) {
	        n = 1;
	      }
	      return baseSlice(array, 0, n < 0 ? 0 : n);
	    }

	    /**
	     * Creates a slice of `array` with `n` elements taken from the end.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to query.
	     * @param {number} [n=1] The number of elements to take.
	     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
	     * @returns {Array} Returns the slice of `array`.
	     * @example
	     *
	     * _.takeRight([1, 2, 3]);
	     * // => [3]
	     *
	     * _.takeRight([1, 2, 3], 2);
	     * // => [2, 3]
	     *
	     * _.takeRight([1, 2, 3], 5);
	     * // => [1, 2, 3]
	     *
	     * _.takeRight([1, 2, 3], 0);
	     * // => []
	     */
	    function takeRight(array, n, guard) {
	      var length = array ? array.length : 0;
	      if (!length) {
	        return [];
	      }
	      if (guard ? isIterateeCall(array, n, guard) : n == null) {
	        n = 1;
	      }
	      n = length - (+n || 0);
	      return baseSlice(array, n < 0 ? 0 : n);
	    }

	    /**
	     * Creates a slice of `array` with elements taken from the end. Elements are
	     * taken until `predicate` returns falsey. The predicate is bound to `thisArg`
	     * and invoked with three arguments: (value, index, array).
	     *
	     * If a property name is provided for `predicate` the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If a value is also provided for `thisArg` the created `_.matchesProperty`
	     * style callback returns `true` for elements that have a matching property
	     * value, else `false`.
	     *
	     * If an object is provided for `predicate` the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to query.
	     * @param {Function|Object|string} [predicate=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `predicate`.
	     * @returns {Array} Returns the slice of `array`.
	     * @example
	     *
	     * _.takeRightWhile([1, 2, 3], function(n) {
	     *   return n > 1;
	     * });
	     * // => [2, 3]
	     *
	     * var users = [
	     *   { 'user': 'barney',  'active': true },
	     *   { 'user': 'fred',    'active': false },
	     *   { 'user': 'pebbles', 'active': false }
	     * ];
	     *
	     * // using the `_.matches` callback shorthand
	     * _.pluck(_.takeRightWhile(users, { 'user': 'pebbles', 'active': false }), 'user');
	     * // => ['pebbles']
	     *
	     * // using the `_.matchesProperty` callback shorthand
	     * _.pluck(_.takeRightWhile(users, 'active', false), 'user');
	     * // => ['fred', 'pebbles']
	     *
	     * // using the `_.property` callback shorthand
	     * _.pluck(_.takeRightWhile(users, 'active'), 'user');
	     * // => []
	     */
	    function takeRightWhile(array, predicate, thisArg) {
	      return (array && array.length)
	        ? baseWhile(array, getCallback(predicate, thisArg, 3), false, true)
	        : [];
	    }

	    /**
	     * Creates a slice of `array` with elements taken from the beginning. Elements
	     * are taken until `predicate` returns falsey. The predicate is bound to
	     * `thisArg` and invoked with three arguments: (value, index, array).
	     *
	     * If a property name is provided for `predicate` the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If a value is also provided for `thisArg` the created `_.matchesProperty`
	     * style callback returns `true` for elements that have a matching property
	     * value, else `false`.
	     *
	     * If an object is provided for `predicate` the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to query.
	     * @param {Function|Object|string} [predicate=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `predicate`.
	     * @returns {Array} Returns the slice of `array`.
	     * @example
	     *
	     * _.takeWhile([1, 2, 3], function(n) {
	     *   return n < 3;
	     * });
	     * // => [1, 2]
	     *
	     * var users = [
	     *   { 'user': 'barney',  'active': false },
	     *   { 'user': 'fred',    'active': false},
	     *   { 'user': 'pebbles', 'active': true }
	     * ];
	     *
	     * // using the `_.matches` callback shorthand
	     * _.pluck(_.takeWhile(users, { 'user': 'barney', 'active': false }), 'user');
	     * // => ['barney']
	     *
	     * // using the `_.matchesProperty` callback shorthand
	     * _.pluck(_.takeWhile(users, 'active', false), 'user');
	     * // => ['barney', 'fred']
	     *
	     * // using the `_.property` callback shorthand
	     * _.pluck(_.takeWhile(users, 'active'), 'user');
	     * // => []
	     */
	    function takeWhile(array, predicate, thisArg) {
	      return (array && array.length)
	        ? baseWhile(array, getCallback(predicate, thisArg, 3))
	        : [];
	    }

	    /**
	     * Creates an array of unique values, in order, from all of the provided arrays
	     * using [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
	     * for equality comparisons.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {...Array} [arrays] The arrays to inspect.
	     * @returns {Array} Returns the new array of combined values.
	     * @example
	     *
	     * _.union([1, 2], [4, 2], [2, 1]);
	     * // => [1, 2, 4]
	     */
	    var union = restParam(function(arrays) {
	      return baseUniq(baseFlatten(arrays, false, true));
	    });

	    /**
	     * Creates a duplicate-free version of an array, using
	     * [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
	     * for equality comparisons, in which only the first occurence of each element
	     * is kept. Providing `true` for `isSorted` performs a faster search algorithm
	     * for sorted arrays. If an iteratee function is provided it is invoked for
	     * each element in the array to generate the criterion by which uniqueness
	     * is computed. The `iteratee` is bound to `thisArg` and invoked with three
	     * arguments: (value, index, array).
	     *
	     * If a property name is provided for `iteratee` the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If a value is also provided for `thisArg` the created `_.matchesProperty`
	     * style callback returns `true` for elements that have a matching property
	     * value, else `false`.
	     *
	     * If an object is provided for `iteratee` the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * @static
	     * @memberOf _
	     * @alias unique
	     * @category Array
	     * @param {Array} array The array to inspect.
	     * @param {boolean} [isSorted] Specify the array is sorted.
	     * @param {Function|Object|string} [iteratee] The function invoked per iteration.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {Array} Returns the new duplicate-value-free array.
	     * @example
	     *
	     * _.uniq([2, 1, 2]);
	     * // => [2, 1]
	     *
	     * // using `isSorted`
	     * _.uniq([1, 1, 2], true);
	     * // => [1, 2]
	     *
	     * // using an iteratee function
	     * _.uniq([1, 2.5, 1.5, 2], function(n) {
	     *   return this.floor(n);
	     * }, Math);
	     * // => [1, 2.5]
	     *
	     * // using the `_.property` callback shorthand
	     * _.uniq([{ 'x': 1 }, { 'x': 2 }, { 'x': 1 }], 'x');
	     * // => [{ 'x': 1 }, { 'x': 2 }]
	     */
	    function uniq(array, isSorted, iteratee, thisArg) {
	      var length = array ? array.length : 0;
	      if (!length) {
	        return [];
	      }
	      if (isSorted != null && typeof isSorted != 'boolean') {
	        thisArg = iteratee;
	        iteratee = isIterateeCall(array, isSorted, thisArg) ? undefined : isSorted;
	        isSorted = false;
	      }
	      var callback = getCallback();
	      if (!(iteratee == null && callback === baseCallback)) {
	        iteratee = callback(iteratee, thisArg, 3);
	      }
	      return (isSorted && getIndexOf() == baseIndexOf)
	        ? sortedUniq(array, iteratee)
	        : baseUniq(array, iteratee);
	    }

	    /**
	     * This method is like `_.zip` except that it accepts an array of grouped
	     * elements and creates an array regrouping the elements to their pre-zip
	     * configuration.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array of grouped elements to process.
	     * @returns {Array} Returns the new array of regrouped elements.
	     * @example
	     *
	     * var zipped = _.zip(['fred', 'barney'], [30, 40], [true, false]);
	     * // => [['fred', 30, true], ['barney', 40, false]]
	     *
	     * _.unzip(zipped);
	     * // => [['fred', 'barney'], [30, 40], [true, false]]
	     */
	    function unzip(array) {
	      if (!(array && array.length)) {
	        return [];
	      }
	      var index = -1,
	          length = 0;

	      array = arrayFilter(array, function(group) {
	        if (isArrayLike(group)) {
	          length = nativeMax(group.length, length);
	          return true;
	        }
	      });
	      var result = Array(length);
	      while (++index < length) {
	        result[index] = arrayMap(array, baseProperty(index));
	      }
	      return result;
	    }

	    /**
	     * This method is like `_.unzip` except that it accepts an iteratee to specify
	     * how regrouped values should be combined. The `iteratee` is bound to `thisArg`
	     * and invoked with four arguments: (accumulator, value, index, group).
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array of grouped elements to process.
	     * @param {Function} [iteratee] The function to combine regrouped values.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {Array} Returns the new array of regrouped elements.
	     * @example
	     *
	     * var zipped = _.zip([1, 2], [10, 20], [100, 200]);
	     * // => [[1, 10, 100], [2, 20, 200]]
	     *
	     * _.unzipWith(zipped, _.add);
	     * // => [3, 30, 300]
	     */
	    function unzipWith(array, iteratee, thisArg) {
	      var length = array ? array.length : 0;
	      if (!length) {
	        return [];
	      }
	      var result = unzip(array);
	      if (iteratee == null) {
	        return result;
	      }
	      iteratee = bindCallback(iteratee, thisArg, 4);
	      return arrayMap(result, function(group) {
	        return arrayReduce(group, iteratee, undefined, true);
	      });
	    }

	    /**
	     * Creates an array excluding all provided values using
	     * [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
	     * for equality comparisons.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to filter.
	     * @param {...*} [values] The values to exclude.
	     * @returns {Array} Returns the new array of filtered values.
	     * @example
	     *
	     * _.without([1, 2, 1, 3], 1, 2);
	     * // => [3]
	     */
	    var without = restParam(function(array, values) {
	      return isArrayLike(array)
	        ? baseDifference(array, values)
	        : [];
	    });

	    /**
	     * Creates an array of unique values that is the [symmetric difference](https://en.wikipedia.org/wiki/Symmetric_difference)
	     * of the provided arrays.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {...Array} [arrays] The arrays to inspect.
	     * @returns {Array} Returns the new array of values.
	     * @example
	     *
	     * _.xor([1, 2], [4, 2]);
	     * // => [1, 4]
	     */
	    function xor() {
	      var index = -1,
	          length = arguments.length;

	      while (++index < length) {
	        var array = arguments[index];
	        if (isArrayLike(array)) {
	          var result = result
	            ? arrayPush(baseDifference(result, array), baseDifference(array, result))
	            : array;
	        }
	      }
	      return result ? baseUniq(result) : [];
	    }

	    /**
	     * Creates an array of grouped elements, the first of which contains the first
	     * elements of the given arrays, the second of which contains the second elements
	     * of the given arrays, and so on.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {...Array} [arrays] The arrays to process.
	     * @returns {Array} Returns the new array of grouped elements.
	     * @example
	     *
	     * _.zip(['fred', 'barney'], [30, 40], [true, false]);
	     * // => [['fred', 30, true], ['barney', 40, false]]
	     */
	    var zip = restParam(unzip);

	    /**
	     * The inverse of `_.pairs`; this method returns an object composed from arrays
	     * of property names and values. Provide either a single two dimensional array,
	     * e.g. `[[key1, value1], [key2, value2]]` or two arrays, one of property names
	     * and one of corresponding values.
	     *
	     * @static
	     * @memberOf _
	     * @alias object
	     * @category Array
	     * @param {Array} props The property names.
	     * @param {Array} [values=[]] The property values.
	     * @returns {Object} Returns the new object.
	     * @example
	     *
	     * _.zipObject([['fred', 30], ['barney', 40]]);
	     * // => { 'fred': 30, 'barney': 40 }
	     *
	     * _.zipObject(['fred', 'barney'], [30, 40]);
	     * // => { 'fred': 30, 'barney': 40 }
	     */
	    function zipObject(props, values) {
	      var index = -1,
	          length = props ? props.length : 0,
	          result = {};

	      if (length && !values && !isArray(props[0])) {
	        values = [];
	      }
	      while (++index < length) {
	        var key = props[index];
	        if (values) {
	          result[key] = values[index];
	        } else if (key) {
	          result[key[0]] = key[1];
	        }
	      }
	      return result;
	    }

	    /**
	     * This method is like `_.zip` except that it accepts an iteratee to specify
	     * how grouped values should be combined. The `iteratee` is bound to `thisArg`
	     * and invoked with four arguments: (accumulator, value, index, group).
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {...Array} [arrays] The arrays to process.
	     * @param {Function} [iteratee] The function to combine grouped values.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {Array} Returns the new array of grouped elements.
	     * @example
	     *
	     * _.zipWith([1, 2], [10, 20], [100, 200], _.add);
	     * // => [111, 222]
	     */
	    var zipWith = restParam(function(arrays) {
	      var length = arrays.length,
	          iteratee = length > 2 ? arrays[length - 2] : undefined,
	          thisArg = length > 1 ? arrays[length - 1] : undefined;

	      if (length > 2 && typeof iteratee == 'function') {
	        length -= 2;
	      } else {
	        iteratee = (length > 1 && typeof thisArg == 'function') ? (--length, thisArg) : undefined;
	        thisArg = undefined;
	      }
	      arrays.length = length;
	      return unzipWith(arrays, iteratee, thisArg);
	    });

	    /*------------------------------------------------------------------------*/

	    /**
	     * Creates a `lodash` object that wraps `value` with explicit method
	     * chaining enabled.
	     *
	     * @static
	     * @memberOf _
	     * @category Chain
	     * @param {*} value The value to wrap.
	     * @returns {Object} Returns the new `lodash` wrapper instance.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney',  'age': 36 },
	     *   { 'user': 'fred',    'age': 40 },
	     *   { 'user': 'pebbles', 'age': 1 }
	     * ];
	     *
	     * var youngest = _.chain(users)
	     *   .sortBy('age')
	     *   .map(function(chr) {
	     *     return chr.user + ' is ' + chr.age;
	     *   })
	     *   .first()
	     *   .value();
	     * // => 'pebbles is 1'
	     */
	    function chain(value) {
	      var result = lodash(value);
	      result.__chain__ = true;
	      return result;
	    }

	    /**
	     * This method invokes `interceptor` and returns `value`. The interceptor is
	     * bound to `thisArg` and invoked with one argument; (value). The purpose of
	     * this method is to "tap into" a method chain in order to perform operations
	     * on intermediate results within the chain.
	     *
	     * @static
	     * @memberOf _
	     * @category Chain
	     * @param {*} value The value to provide to `interceptor`.
	     * @param {Function} interceptor The function to invoke.
	     * @param {*} [thisArg] The `this` binding of `interceptor`.
	     * @returns {*} Returns `value`.
	     * @example
	     *
	     * _([1, 2, 3])
	     *  .tap(function(array) {
	     *    array.pop();
	     *  })
	     *  .reverse()
	     *  .value();
	     * // => [2, 1]
	     */
	    function tap(value, interceptor, thisArg) {
	      interceptor.call(thisArg, value);
	      return value;
	    }

	    /**
	     * This method is like `_.tap` except that it returns the result of `interceptor`.
	     *
	     * @static
	     * @memberOf _
	     * @category Chain
	     * @param {*} value The value to provide to `interceptor`.
	     * @param {Function} interceptor The function to invoke.
	     * @param {*} [thisArg] The `this` binding of `interceptor`.
	     * @returns {*} Returns the result of `interceptor`.
	     * @example
	     *
	     * _('  abc  ')
	     *  .chain()
	     *  .trim()
	     *  .thru(function(value) {
	     *    return [value];
	     *  })
	     *  .value();
	     * // => ['abc']
	     */
	    function thru(value, interceptor, thisArg) {
	      return interceptor.call(thisArg, value);
	    }

	    /**
	     * Enables explicit method chaining on the wrapper object.
	     *
	     * @name chain
	     * @memberOf _
	     * @category Chain
	     * @returns {Object} Returns the new `lodash` wrapper instance.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney', 'age': 36 },
	     *   { 'user': 'fred',   'age': 40 }
	     * ];
	     *
	     * // without explicit chaining
	     * _(users).first();
	     * // => { 'user': 'barney', 'age': 36 }
	     *
	     * // with explicit chaining
	     * _(users).chain()
	     *   .first()
	     *   .pick('user')
	     *   .value();
	     * // => { 'user': 'barney' }
	     */
	    function wrapperChain() {
	      return chain(this);
	    }

	    /**
	     * Executes the chained sequence and returns the wrapped result.
	     *
	     * @name commit
	     * @memberOf _
	     * @category Chain
	     * @returns {Object} Returns the new `lodash` wrapper instance.
	     * @example
	     *
	     * var array = [1, 2];
	     * var wrapped = _(array).push(3);
	     *
	     * console.log(array);
	     * // => [1, 2]
	     *
	     * wrapped = wrapped.commit();
	     * console.log(array);
	     * // => [1, 2, 3]
	     *
	     * wrapped.last();
	     * // => 3
	     *
	     * console.log(array);
	     * // => [1, 2, 3]
	     */
	    function wrapperCommit() {
	      return new LodashWrapper(this.value(), this.__chain__);
	    }

	    /**
	     * Creates a new array joining a wrapped array with any additional arrays
	     * and/or values.
	     *
	     * @name concat
	     * @memberOf _
	     * @category Chain
	     * @param {...*} [values] The values to concatenate.
	     * @returns {Array} Returns the new concatenated array.
	     * @example
	     *
	     * var array = [1];
	     * var wrapped = _(array).concat(2, [3], [[4]]);
	     *
	     * console.log(wrapped.value());
	     * // => [1, 2, 3, [4]]
	     *
	     * console.log(array);
	     * // => [1]
	     */
	    var wrapperConcat = restParam(function(values) {
	      values = baseFlatten(values);
	      return this.thru(function(array) {
	        return arrayConcat(isArray(array) ? array : [toObject(array)], values);
	      });
	    });

	    /**
	     * Creates a clone of the chained sequence planting `value` as the wrapped value.
	     *
	     * @name plant
	     * @memberOf _
	     * @category Chain
	     * @returns {Object} Returns the new `lodash` wrapper instance.
	     * @example
	     *
	     * var array = [1, 2];
	     * var wrapped = _(array).map(function(value) {
	     *   return Math.pow(value, 2);
	     * });
	     *
	     * var other = [3, 4];
	     * var otherWrapped = wrapped.plant(other);
	     *
	     * otherWrapped.value();
	     * // => [9, 16]
	     *
	     * wrapped.value();
	     * // => [1, 4]
	     */
	    function wrapperPlant(value) {
	      var result,
	          parent = this;

	      while (parent instanceof baseLodash) {
	        var clone = wrapperClone(parent);
	        if (result) {
	          previous.__wrapped__ = clone;
	        } else {
	          result = clone;
	        }
	        var previous = clone;
	        parent = parent.__wrapped__;
	      }
	      previous.__wrapped__ = value;
	      return result;
	    }

	    /**
	     * Reverses the wrapped array so the first element becomes the last, the
	     * second element becomes the second to last, and so on.
	     *
	     * **Note:** This method mutates the wrapped array.
	     *
	     * @name reverse
	     * @memberOf _
	     * @category Chain
	     * @returns {Object} Returns the new reversed `lodash` wrapper instance.
	     * @example
	     *
	     * var array = [1, 2, 3];
	     *
	     * _(array).reverse().value()
	     * // => [3, 2, 1]
	     *
	     * console.log(array);
	     * // => [3, 2, 1]
	     */
	    function wrapperReverse() {
	      var value = this.__wrapped__;

	      var interceptor = function(value) {
	        return (wrapped && wrapped.__dir__ < 0) ? value : value.reverse();
	      };
	      if (value instanceof LazyWrapper) {
	        var wrapped = value;
	        if (this.__actions__.length) {
	          wrapped = new LazyWrapper(this);
	        }
	        wrapped = wrapped.reverse();
	        wrapped.__actions__.push({ 'func': thru, 'args': [interceptor], 'thisArg': undefined });
	        return new LodashWrapper(wrapped, this.__chain__);
	      }
	      return this.thru(interceptor);
	    }

	    /**
	     * Produces the result of coercing the unwrapped value to a string.
	     *
	     * @name toString
	     * @memberOf _
	     * @category Chain
	     * @returns {string} Returns the coerced string value.
	     * @example
	     *
	     * _([1, 2, 3]).toString();
	     * // => '1,2,3'
	     */
	    function wrapperToString() {
	      return (this.value() + '');
	    }

	    /**
	     * Executes the chained sequence to extract the unwrapped value.
	     *
	     * @name value
	     * @memberOf _
	     * @alias run, toJSON, valueOf
	     * @category Chain
	     * @returns {*} Returns the resolved unwrapped value.
	     * @example
	     *
	     * _([1, 2, 3]).value();
	     * // => [1, 2, 3]
	     */
	    function wrapperValue() {
	      return baseWrapperValue(this.__wrapped__, this.__actions__);
	    }

	    /*------------------------------------------------------------------------*/

	    /**
	     * Creates an array of elements corresponding to the given keys, or indexes,
	     * of `collection`. Keys may be specified as individual arguments or as arrays
	     * of keys.
	     *
	     * @static
	     * @memberOf _
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {...(number|number[]|string|string[])} [props] The property names
	     *  or indexes of elements to pick, specified individually or in arrays.
	     * @returns {Array} Returns the new array of picked elements.
	     * @example
	     *
	     * _.at(['a', 'b', 'c'], [0, 2]);
	     * // => ['a', 'c']
	     *
	     * _.at(['barney', 'fred', 'pebbles'], 0, 2);
	     * // => ['barney', 'pebbles']
	     */
	    var at = restParam(function(collection, props) {
	      return baseAt(collection, baseFlatten(props));
	    });

	    /**
	     * Creates an object composed of keys generated from the results of running
	     * each element of `collection` through `iteratee`. The corresponding value
	     * of each key is the number of times the key was returned by `iteratee`.
	     * The `iteratee` is bound to `thisArg` and invoked with three arguments:
	     * (value, index|key, collection).
	     *
	     * If a property name is provided for `iteratee` the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If a value is also provided for `thisArg` the created `_.matchesProperty`
	     * style callback returns `true` for elements that have a matching property
	     * value, else `false`.
	     *
	     * If an object is provided for `iteratee` the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * @static
	     * @memberOf _
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function|Object|string} [iteratee=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {Object} Returns the composed aggregate object.
	     * @example
	     *
	     * _.countBy([4.3, 6.1, 6.4], function(n) {
	     *   return Math.floor(n);
	     * });
	     * // => { '4': 1, '6': 2 }
	     *
	     * _.countBy([4.3, 6.1, 6.4], function(n) {
	     *   return this.floor(n);
	     * }, Math);
	     * // => { '4': 1, '6': 2 }
	     *
	     * _.countBy(['one', 'two', 'three'], 'length');
	     * // => { '3': 2, '5': 1 }
	     */
	    var countBy = createAggregator(function(result, value, key) {
	      hasOwnProperty.call(result, key) ? ++result[key] : (result[key] = 1);
	    });

	    /**
	     * Checks if `predicate` returns truthy for **all** elements of `collection`.
	     * The predicate is bound to `thisArg` and invoked with three arguments:
	     * (value, index|key, collection).
	     *
	     * If a property name is provided for `predicate` the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If a value is also provided for `thisArg` the created `_.matchesProperty`
	     * style callback returns `true` for elements that have a matching property
	     * value, else `false`.
	     *
	     * If an object is provided for `predicate` the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * @static
	     * @memberOf _
	     * @alias all
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function|Object|string} [predicate=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `predicate`.
	     * @returns {boolean} Returns `true` if all elements pass the predicate check,
	     *  else `false`.
	     * @example
	     *
	     * _.every([true, 1, null, 'yes'], Boolean);
	     * // => false
	     *
	     * var users = [
	     *   { 'user': 'barney', 'active': false },
	     *   { 'user': 'fred',   'active': false }
	     * ];
	     *
	     * // using the `_.matches` callback shorthand
	     * _.every(users, { 'user': 'barney', 'active': false });
	     * // => false
	     *
	     * // using the `_.matchesProperty` callback shorthand
	     * _.every(users, 'active', false);
	     * // => true
	     *
	     * // using the `_.property` callback shorthand
	     * _.every(users, 'active');
	     * // => false
	     */
	    function every(collection, predicate, thisArg) {
	      var func = isArray(collection) ? arrayEvery : baseEvery;
	      if (thisArg && isIterateeCall(collection, predicate, thisArg)) {
	        predicate = undefined;
	      }
	      if (typeof predicate != 'function' || thisArg !== undefined) {
	        predicate = getCallback(predicate, thisArg, 3);
	      }
	      return func(collection, predicate);
	    }

	    /**
	     * Iterates over elements of `collection`, returning an array of all elements
	     * `predicate` returns truthy for. The predicate is bound to `thisArg` and
	     * invoked with three arguments: (value, index|key, collection).
	     *
	     * If a property name is provided for `predicate` the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If a value is also provided for `thisArg` the created `_.matchesProperty`
	     * style callback returns `true` for elements that have a matching property
	     * value, else `false`.
	     *
	     * If an object is provided for `predicate` the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * @static
	     * @memberOf _
	     * @alias select
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function|Object|string} [predicate=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `predicate`.
	     * @returns {Array} Returns the new filtered array.
	     * @example
	     *
	     * _.filter([4, 5, 6], function(n) {
	     *   return n % 2 == 0;
	     * });
	     * // => [4, 6]
	     *
	     * var users = [
	     *   { 'user': 'barney', 'age': 36, 'active': true },
	     *   { 'user': 'fred',   'age': 40, 'active': false }
	     * ];
	     *
	     * // using the `_.matches` callback shorthand
	     * _.pluck(_.filter(users, { 'age': 36, 'active': true }), 'user');
	     * // => ['barney']
	     *
	     * // using the `_.matchesProperty` callback shorthand
	     * _.pluck(_.filter(users, 'active', false), 'user');
	     * // => ['fred']
	     *
	     * // using the `_.property` callback shorthand
	     * _.pluck(_.filter(users, 'active'), 'user');
	     * // => ['barney']
	     */
	    function filter(collection, predicate, thisArg) {
	      var func = isArray(collection) ? arrayFilter : baseFilter;
	      predicate = getCallback(predicate, thisArg, 3);
	      return func(collection, predicate);
	    }

	    /**
	     * Iterates over elements of `collection`, returning the first element
	     * `predicate` returns truthy for. The predicate is bound to `thisArg` and
	     * invoked with three arguments: (value, index|key, collection).
	     *
	     * If a property name is provided for `predicate` the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If a value is also provided for `thisArg` the created `_.matchesProperty`
	     * style callback returns `true` for elements that have a matching property
	     * value, else `false`.
	     *
	     * If an object is provided for `predicate` the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * @static
	     * @memberOf _
	     * @alias detect
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to search.
	     * @param {Function|Object|string} [predicate=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `predicate`.
	     * @returns {*} Returns the matched element, else `undefined`.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney',  'age': 36, 'active': true },
	     *   { 'user': 'fred',    'age': 40, 'active': false },
	     *   { 'user': 'pebbles', 'age': 1,  'active': true }
	     * ];
	     *
	     * _.result(_.find(users, function(chr) {
	     *   return chr.age < 40;
	     * }), 'user');
	     * // => 'barney'
	     *
	     * // using the `_.matches` callback shorthand
	     * _.result(_.find(users, { 'age': 1, 'active': true }), 'user');
	     * // => 'pebbles'
	     *
	     * // using the `_.matchesProperty` callback shorthand
	     * _.result(_.find(users, 'active', false), 'user');
	     * // => 'fred'
	     *
	     * // using the `_.property` callback shorthand
	     * _.result(_.find(users, 'active'), 'user');
	     * // => 'barney'
	     */
	    var find = createFind(baseEach);

	    /**
	     * This method is like `_.find` except that it iterates over elements of
	     * `collection` from right to left.
	     *
	     * @static
	     * @memberOf _
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to search.
	     * @param {Function|Object|string} [predicate=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `predicate`.
	     * @returns {*} Returns the matched element, else `undefined`.
	     * @example
	     *
	     * _.findLast([1, 2, 3, 4], function(n) {
	     *   return n % 2 == 1;
	     * });
	     * // => 3
	     */
	    var findLast = createFind(baseEachRight, true);

	    /**
	     * Performs a deep comparison between each element in `collection` and the
	     * source object, returning the first element that has equivalent property
	     * values.
	     *
	     * **Note:** This method supports comparing arrays, booleans, `Date` objects,
	     * numbers, `Object` objects, regexes, and strings. Objects are compared by
	     * their own, not inherited, enumerable properties. For comparing a single
	     * own or inherited property value see `_.matchesProperty`.
	     *
	     * @static
	     * @memberOf _
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to search.
	     * @param {Object} source The object of property values to match.
	     * @returns {*} Returns the matched element, else `undefined`.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney', 'age': 36, 'active': true },
	     *   { 'user': 'fred',   'age': 40, 'active': false }
	     * ];
	     *
	     * _.result(_.findWhere(users, { 'age': 36, 'active': true }), 'user');
	     * // => 'barney'
	     *
	     * _.result(_.findWhere(users, { 'age': 40, 'active': false }), 'user');
	     * // => 'fred'
	     */
	    function findWhere(collection, source) {
	      return find(collection, baseMatches(source));
	    }

	    /**
	     * Iterates over elements of `collection` invoking `iteratee` for each element.
	     * The `iteratee` is bound to `thisArg` and invoked with three arguments:
	     * (value, index|key, collection). Iteratee functions may exit iteration early
	     * by explicitly returning `false`.
	     *
	     * **Note:** As with other "Collections" methods, objects with a "length" property
	     * are iterated like arrays. To avoid this behavior `_.forIn` or `_.forOwn`
	     * may be used for object iteration.
	     *
	     * @static
	     * @memberOf _
	     * @alias each
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {Array|Object|string} Returns `collection`.
	     * @example
	     *
	     * _([1, 2]).forEach(function(n) {
	     *   console.log(n);
	     * }).value();
	     * // => logs each value from left to right and returns the array
	     *
	     * _.forEach({ 'a': 1, 'b': 2 }, function(n, key) {
	     *   console.log(n, key);
	     * });
	     * // => logs each value-key pair and returns the object (iteration order is not guaranteed)
	     */
	    var forEach = createForEach(arrayEach, baseEach);

	    /**
	     * This method is like `_.forEach` except that it iterates over elements of
	     * `collection` from right to left.
	     *
	     * @static
	     * @memberOf _
	     * @alias eachRight
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {Array|Object|string} Returns `collection`.
	     * @example
	     *
	     * _([1, 2]).forEachRight(function(n) {
	     *   console.log(n);
	     * }).value();
	     * // => logs each value from right to left and returns the array
	     */
	    var forEachRight = createForEach(arrayEachRight, baseEachRight);

	    /**
	     * Creates an object composed of keys generated from the results of running
	     * each element of `collection` through `iteratee`. The corresponding value
	     * of each key is an array of the elements responsible for generating the key.
	     * The `iteratee` is bound to `thisArg` and invoked with three arguments:
	     * (value, index|key, collection).
	     *
	     * If a property name is provided for `iteratee` the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If a value is also provided for `thisArg` the created `_.matchesProperty`
	     * style callback returns `true` for elements that have a matching property
	     * value, else `false`.
	     *
	     * If an object is provided for `iteratee` the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * @static
	     * @memberOf _
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function|Object|string} [iteratee=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {Object} Returns the composed aggregate object.
	     * @example
	     *
	     * _.groupBy([4.2, 6.1, 6.4], function(n) {
	     *   return Math.floor(n);
	     * });
	     * // => { '4': [4.2], '6': [6.1, 6.4] }
	     *
	     * _.groupBy([4.2, 6.1, 6.4], function(n) {
	     *   return this.floor(n);
	     * }, Math);
	     * // => { '4': [4.2], '6': [6.1, 6.4] }
	     *
	     * // using the `_.property` callback shorthand
	     * _.groupBy(['one', 'two', 'three'], 'length');
	     * // => { '3': ['one', 'two'], '5': ['three'] }
	     */
	    var groupBy = createAggregator(function(result, value, key) {
	      if (hasOwnProperty.call(result, key)) {
	        result[key].push(value);
	      } else {
	        result[key] = [value];
	      }
	    });

	    /**
	     * Checks if `value` is in `collection` using
	     * [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
	     * for equality comparisons. If `fromIndex` is negative, it is used as the offset
	     * from the end of `collection`.
	     *
	     * @static
	     * @memberOf _
	     * @alias contains, include
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to search.
	     * @param {*} target The value to search for.
	     * @param {number} [fromIndex=0] The index to search from.
	     * @param- {Object} [guard] Enables use as a callback for functions like `_.reduce`.
	     * @returns {boolean} Returns `true` if a matching element is found, else `false`.
	     * @example
	     *
	     * _.includes([1, 2, 3], 1);
	     * // => true
	     *
	     * _.includes([1, 2, 3], 1, 2);
	     * // => false
	     *
	     * _.includes({ 'user': 'fred', 'age': 40 }, 'fred');
	     * // => true
	     *
	     * _.includes('pebbles', 'eb');
	     * // => true
	     */
	    function includes(collection, target, fromIndex, guard) {
	      var length = collection ? getLength(collection) : 0;
	      if (!isLength(length)) {
	        collection = values(collection);
	        length = collection.length;
	      }
	      if (typeof fromIndex != 'number' || (guard && isIterateeCall(target, fromIndex, guard))) {
	        fromIndex = 0;
	      } else {
	        fromIndex = fromIndex < 0 ? nativeMax(length + fromIndex, 0) : (fromIndex || 0);
	      }
	      return (typeof collection == 'string' || !isArray(collection) && isString(collection))
	        ? (fromIndex <= length && collection.indexOf(target, fromIndex) > -1)
	        : (!!length && getIndexOf(collection, target, fromIndex) > -1);
	    }

	    /**
	     * Creates an object composed of keys generated from the results of running
	     * each element of `collection` through `iteratee`. The corresponding value
	     * of each key is the last element responsible for generating the key. The
	     * iteratee function is bound to `thisArg` and invoked with three arguments:
	     * (value, index|key, collection).
	     *
	     * If a property name is provided for `iteratee` the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If a value is also provided for `thisArg` the created `_.matchesProperty`
	     * style callback returns `true` for elements that have a matching property
	     * value, else `false`.
	     *
	     * If an object is provided for `iteratee` the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * @static
	     * @memberOf _
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function|Object|string} [iteratee=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {Object} Returns the composed aggregate object.
	     * @example
	     *
	     * var keyData = [
	     *   { 'dir': 'left', 'code': 97 },
	     *   { 'dir': 'right', 'code': 100 }
	     * ];
	     *
	     * _.indexBy(keyData, 'dir');
	     * // => { 'left': { 'dir': 'left', 'code': 97 }, 'right': { 'dir': 'right', 'code': 100 } }
	     *
	     * _.indexBy(keyData, function(object) {
	     *   return String.fromCharCode(object.code);
	     * });
	     * // => { 'a': { 'dir': 'left', 'code': 97 }, 'd': { 'dir': 'right', 'code': 100 } }
	     *
	     * _.indexBy(keyData, function(object) {
	     *   return this.fromCharCode(object.code);
	     * }, String);
	     * // => { 'a': { 'dir': 'left', 'code': 97 }, 'd': { 'dir': 'right', 'code': 100 } }
	     */
	    var indexBy = createAggregator(function(result, value, key) {
	      result[key] = value;
	    });

	    /**
	     * Invokes the method at `path` of each element in `collection`, returning
	     * an array of the results of each invoked method. Any additional arguments
	     * are provided to each invoked method. If `methodName` is a function it is
	     * invoked for, and `this` bound to, each element in `collection`.
	     *
	     * @static
	     * @memberOf _
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Array|Function|string} path The path of the method to invoke or
	     *  the function invoked per iteration.
	     * @param {...*} [args] The arguments to invoke the method with.
	     * @returns {Array} Returns the array of results.
	     * @example
	     *
	     * _.invoke([[5, 1, 7], [3, 2, 1]], 'sort');
	     * // => [[1, 5, 7], [1, 2, 3]]
	     *
	     * _.invoke([123, 456], String.prototype.split, '');
	     * // => [['1', '2', '3'], ['4', '5', '6']]
	     */
	    var invoke = restParam(function(collection, path, args) {
	      var index = -1,
	          isFunc = typeof path == 'function',
	          isProp = isKey(path),
	          result = isArrayLike(collection) ? Array(collection.length) : [];

	      baseEach(collection, function(value) {
	        var func = isFunc ? path : ((isProp && value != null) ? value[path] : undefined);
	        result[++index] = func ? func.apply(value, args) : invokePath(value, path, args);
	      });
	      return result;
	    });

	    /**
	     * Creates an array of values by running each element in `collection` through
	     * `iteratee`. The `iteratee` is bound to `thisArg` and invoked with three
	     * arguments: (value, index|key, collection).
	     *
	     * If a property name is provided for `iteratee` the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If a value is also provided for `thisArg` the created `_.matchesProperty`
	     * style callback returns `true` for elements that have a matching property
	     * value, else `false`.
	     *
	     * If an object is provided for `iteratee` the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * Many lodash methods are guarded to work as iteratees for methods like
	     * `_.every`, `_.filter`, `_.map`, `_.mapValues`, `_.reject`, and `_.some`.
	     *
	     * The guarded methods are:
	     * `ary`, `callback`, `chunk`, `clone`, `create`, `curry`, `curryRight`,
	     * `drop`, `dropRight`, `every`, `fill`, `flatten`, `invert`, `max`, `min`,
	     * `parseInt`, `slice`, `sortBy`, `take`, `takeRight`, `template`, `trim`,
	     * `trimLeft`, `trimRight`, `trunc`, `random`, `range`, `sample`, `some`,
	     * `sum`, `uniq`, and `words`
	     *
	     * @static
	     * @memberOf _
	     * @alias collect
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function|Object|string} [iteratee=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {Array} Returns the new mapped array.
	     * @example
	     *
	     * function timesThree(n) {
	     *   return n * 3;
	     * }
	     *
	     * _.map([1, 2], timesThree);
	     * // => [3, 6]
	     *
	     * _.map({ 'a': 1, 'b': 2 }, timesThree);
	     * // => [3, 6] (iteration order is not guaranteed)
	     *
	     * var users = [
	     *   { 'user': 'barney' },
	     *   { 'user': 'fred' }
	     * ];
	     *
	     * // using the `_.property` callback shorthand
	     * _.map(users, 'user');
	     * // => ['barney', 'fred']
	     */
	    function map(collection, iteratee, thisArg) {
	      var func = isArray(collection) ? arrayMap : baseMap;
	      iteratee = getCallback(iteratee, thisArg, 3);
	      return func(collection, iteratee);
	    }

	    /**
	     * Creates an array of elements split into two groups, the first of which
	     * contains elements `predicate` returns truthy for, while the second of which
	     * contains elements `predicate` returns falsey for. The predicate is bound
	     * to `thisArg` and invoked with three arguments: (value, index|key, collection).
	     *
	     * If a property name is provided for `predicate` the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If a value is also provided for `thisArg` the created `_.matchesProperty`
	     * style callback returns `true` for elements that have a matching property
	     * value, else `false`.
	     *
	     * If an object is provided for `predicate` the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * @static
	     * @memberOf _
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function|Object|string} [predicate=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `predicate`.
	     * @returns {Array} Returns the array of grouped elements.
	     * @example
	     *
	     * _.partition([1, 2, 3], function(n) {
	     *   return n % 2;
	     * });
	     * // => [[1, 3], [2]]
	     *
	     * _.partition([1.2, 2.3, 3.4], function(n) {
	     *   return this.floor(n) % 2;
	     * }, Math);
	     * // => [[1.2, 3.4], [2.3]]
	     *
	     * var users = [
	     *   { 'user': 'barney',  'age': 36, 'active': false },
	     *   { 'user': 'fred',    'age': 40, 'active': true },
	     *   { 'user': 'pebbles', 'age': 1,  'active': false }
	     * ];
	     *
	     * var mapper = function(array) {
	     *   return _.pluck(array, 'user');
	     * };
	     *
	     * // using the `_.matches` callback shorthand
	     * _.map(_.partition(users, { 'age': 1, 'active': false }), mapper);
	     * // => [['pebbles'], ['barney', 'fred']]
	     *
	     * // using the `_.matchesProperty` callback shorthand
	     * _.map(_.partition(users, 'active', false), mapper);
	     * // => [['barney', 'pebbles'], ['fred']]
	     *
	     * // using the `_.property` callback shorthand
	     * _.map(_.partition(users, 'active'), mapper);
	     * // => [['fred'], ['barney', 'pebbles']]
	     */
	    var partition = createAggregator(function(result, value, key) {
	      result[key ? 0 : 1].push(value);
	    }, function() { return [[], []]; });

	    /**
	     * Gets the property value of `path` from all elements in `collection`.
	     *
	     * @static
	     * @memberOf _
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Array|string} path The path of the property to pluck.
	     * @returns {Array} Returns the property values.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney', 'age': 36 },
	     *   { 'user': 'fred',   'age': 40 }
	     * ];
	     *
	     * _.pluck(users, 'user');
	     * // => ['barney', 'fred']
	     *
	     * var userIndex = _.indexBy(users, 'user');
	     * _.pluck(userIndex, 'age');
	     * // => [36, 40] (iteration order is not guaranteed)
	     */
	    function pluck(collection, path) {
	      return map(collection, property(path));
	    }

	    /**
	     * Reduces `collection` to a value which is the accumulated result of running
	     * each element in `collection` through `iteratee`, where each successive
	     * invocation is supplied the return value of the previous. If `accumulator`
	     * is not provided the first element of `collection` is used as the initial
	     * value. The `iteratee` is bound to `thisArg` and invoked with four arguments:
	     * (accumulator, value, index|key, collection).
	     *
	     * Many lodash methods are guarded to work as iteratees for methods like
	     * `_.reduce`, `_.reduceRight`, and `_.transform`.
	     *
	     * The guarded methods are:
	     * `assign`, `defaults`, `defaultsDeep`, `includes`, `merge`, `sortByAll`,
	     * and `sortByOrder`
	     *
	     * @static
	     * @memberOf _
	     * @alias foldl, inject
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	     * @param {*} [accumulator] The initial value.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {*} Returns the accumulated value.
	     * @example
	     *
	     * _.reduce([1, 2], function(total, n) {
	     *   return total + n;
	     * });
	     * // => 3
	     *
	     * _.reduce({ 'a': 1, 'b': 2 }, function(result, n, key) {
	     *   result[key] = n * 3;
	     *   return result;
	     * }, {});
	     * // => { 'a': 3, 'b': 6 } (iteration order is not guaranteed)
	     */
	    var reduce = createReduce(arrayReduce, baseEach);

	    /**
	     * This method is like `_.reduce` except that it iterates over elements of
	     * `collection` from right to left.
	     *
	     * @static
	     * @memberOf _
	     * @alias foldr
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	     * @param {*} [accumulator] The initial value.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {*} Returns the accumulated value.
	     * @example
	     *
	     * var array = [[0, 1], [2, 3], [4, 5]];
	     *
	     * _.reduceRight(array, function(flattened, other) {
	     *   return flattened.concat(other);
	     * }, []);
	     * // => [4, 5, 2, 3, 0, 1]
	     */
	    var reduceRight = createReduce(arrayReduceRight, baseEachRight);

	    /**
	     * The opposite of `_.filter`; this method returns the elements of `collection`
	     * that `predicate` does **not** return truthy for.
	     *
	     * @static
	     * @memberOf _
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function|Object|string} [predicate=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `predicate`.
	     * @returns {Array} Returns the new filtered array.
	     * @example
	     *
	     * _.reject([1, 2, 3, 4], function(n) {
	     *   return n % 2 == 0;
	     * });
	     * // => [1, 3]
	     *
	     * var users = [
	     *   { 'user': 'barney', 'age': 36, 'active': false },
	     *   { 'user': 'fred',   'age': 40, 'active': true }
	     * ];
	     *
	     * // using the `_.matches` callback shorthand
	     * _.pluck(_.reject(users, { 'age': 40, 'active': true }), 'user');
	     * // => ['barney']
	     *
	     * // using the `_.matchesProperty` callback shorthand
	     * _.pluck(_.reject(users, 'active', false), 'user');
	     * // => ['fred']
	     *
	     * // using the `_.property` callback shorthand
	     * _.pluck(_.reject(users, 'active'), 'user');
	     * // => ['barney']
	     */
	    function reject(collection, predicate, thisArg) {
	      var func = isArray(collection) ? arrayFilter : baseFilter;
	      predicate = getCallback(predicate, thisArg, 3);
	      return func(collection, function(value, index, collection) {
	        return !predicate(value, index, collection);
	      });
	    }

	    /**
	     * Gets a random element or `n` random elements from a collection.
	     *
	     * @static
	     * @memberOf _
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to sample.
	     * @param {number} [n] The number of elements to sample.
	     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
	     * @returns {*} Returns the random sample(s).
	     * @example
	     *
	     * _.sample([1, 2, 3, 4]);
	     * // => 2
	     *
	     * _.sample([1, 2, 3, 4], 2);
	     * // => [3, 1]
	     */
	    function sample(collection, n, guard) {
	      if (guard ? isIterateeCall(collection, n, guard) : n == null) {
	        collection = toIterable(collection);
	        var length = collection.length;
	        return length > 0 ? collection[baseRandom(0, length - 1)] : undefined;
	      }
	      var index = -1,
	          result = toArray(collection),
	          length = result.length,
	          lastIndex = length - 1;

	      n = nativeMin(n < 0 ? 0 : (+n || 0), length);
	      while (++index < n) {
	        var rand = baseRandom(index, lastIndex),
	            value = result[rand];

	        result[rand] = result[index];
	        result[index] = value;
	      }
	      result.length = n;
	      return result;
	    }

	    /**
	     * Creates an array of shuffled values, using a version of the
	     * [Fisher-Yates shuffle](https://en.wikipedia.org/wiki/Fisher-Yates_shuffle).
	     *
	     * @static
	     * @memberOf _
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to shuffle.
	     * @returns {Array} Returns the new shuffled array.
	     * @example
	     *
	     * _.shuffle([1, 2, 3, 4]);
	     * // => [4, 1, 3, 2]
	     */
	    function shuffle(collection) {
	      return sample(collection, POSITIVE_INFINITY);
	    }

	    /**
	     * Gets the size of `collection` by returning its length for array-like
	     * values or the number of own enumerable properties for objects.
	     *
	     * @static
	     * @memberOf _
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to inspect.
	     * @returns {number} Returns the size of `collection`.
	     * @example
	     *
	     * _.size([1, 2, 3]);
	     * // => 3
	     *
	     * _.size({ 'a': 1, 'b': 2 });
	     * // => 2
	     *
	     * _.size('pebbles');
	     * // => 7
	     */
	    function size(collection) {
	      var length = collection ? getLength(collection) : 0;
	      return isLength(length) ? length : keys(collection).length;
	    }

	    /**
	     * Checks if `predicate` returns truthy for **any** element of `collection`.
	     * The function returns as soon as it finds a passing value and does not iterate
	     * over the entire collection. The predicate is bound to `thisArg` and invoked
	     * with three arguments: (value, index|key, collection).
	     *
	     * If a property name is provided for `predicate` the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If a value is also provided for `thisArg` the created `_.matchesProperty`
	     * style callback returns `true` for elements that have a matching property
	     * value, else `false`.
	     *
	     * If an object is provided for `predicate` the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * @static
	     * @memberOf _
	     * @alias any
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function|Object|string} [predicate=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `predicate`.
	     * @returns {boolean} Returns `true` if any element passes the predicate check,
	     *  else `false`.
	     * @example
	     *
	     * _.some([null, 0, 'yes', false], Boolean);
	     * // => true
	     *
	     * var users = [
	     *   { 'user': 'barney', 'active': true },
	     *   { 'user': 'fred',   'active': false }
	     * ];
	     *
	     * // using the `_.matches` callback shorthand
	     * _.some(users, { 'user': 'barney', 'active': false });
	     * // => false
	     *
	     * // using the `_.matchesProperty` callback shorthand
	     * _.some(users, 'active', false);
	     * // => true
	     *
	     * // using the `_.property` callback shorthand
	     * _.some(users, 'active');
	     * // => true
	     */
	    function some(collection, predicate, thisArg) {
	      var func = isArray(collection) ? arraySome : baseSome;
	      if (thisArg && isIterateeCall(collection, predicate, thisArg)) {
	        predicate = undefined;
	      }
	      if (typeof predicate != 'function' || thisArg !== undefined) {
	        predicate = getCallback(predicate, thisArg, 3);
	      }
	      return func(collection, predicate);
	    }

	    /**
	     * Creates an array of elements, sorted in ascending order by the results of
	     * running each element in a collection through `iteratee`. This method performs
	     * a stable sort, that is, it preserves the original sort order of equal elements.
	     * The `iteratee` is bound to `thisArg` and invoked with three arguments:
	     * (value, index|key, collection).
	     *
	     * If a property name is provided for `iteratee` the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If a value is also provided for `thisArg` the created `_.matchesProperty`
	     * style callback returns `true` for elements that have a matching property
	     * value, else `false`.
	     *
	     * If an object is provided for `iteratee` the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * @static
	     * @memberOf _
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function|Object|string} [iteratee=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {Array} Returns the new sorted array.
	     * @example
	     *
	     * _.sortBy([1, 2, 3], function(n) {
	     *   return Math.sin(n);
	     * });
	     * // => [3, 1, 2]
	     *
	     * _.sortBy([1, 2, 3], function(n) {
	     *   return this.sin(n);
	     * }, Math);
	     * // => [3, 1, 2]
	     *
	     * var users = [
	     *   { 'user': 'fred' },
	     *   { 'user': 'pebbles' },
	     *   { 'user': 'barney' }
	     * ];
	     *
	     * // using the `_.property` callback shorthand
	     * _.pluck(_.sortBy(users, 'user'), 'user');
	     * // => ['barney', 'fred', 'pebbles']
	     */
	    function sortBy(collection, iteratee, thisArg) {
	      if (collection == null) {
	        return [];
	      }
	      if (thisArg && isIterateeCall(collection, iteratee, thisArg)) {
	        iteratee = undefined;
	      }
	      var index = -1;
	      iteratee = getCallback(iteratee, thisArg, 3);

	      var result = baseMap(collection, function(value, key, collection) {
	        return { 'criteria': iteratee(value, key, collection), 'index': ++index, 'value': value };
	      });
	      return baseSortBy(result, compareAscending);
	    }

	    /**
	     * This method is like `_.sortBy` except that it can sort by multiple iteratees
	     * or property names.
	     *
	     * If a property name is provided for an iteratee the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If an object is provided for an iteratee the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * @static
	     * @memberOf _
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {...(Function|Function[]|Object|Object[]|string|string[])} iteratees
	     *  The iteratees to sort by, specified as individual values or arrays of values.
	     * @returns {Array} Returns the new sorted array.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'fred',   'age': 48 },
	     *   { 'user': 'barney', 'age': 36 },
	     *   { 'user': 'fred',   'age': 42 },
	     *   { 'user': 'barney', 'age': 34 }
	     * ];
	     *
	     * _.map(_.sortByAll(users, ['user', 'age']), _.values);
	     * // => [['barney', 34], ['barney', 36], ['fred', 42], ['fred', 48]]
	     *
	     * _.map(_.sortByAll(users, 'user', function(chr) {
	     *   return Math.floor(chr.age / 10);
	     * }), _.values);
	     * // => [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 42]]
	     */
	    var sortByAll = restParam(function(collection, iteratees) {
	      if (collection == null) {
	        return [];
	      }
	      var guard = iteratees[2];
	      if (guard && isIterateeCall(iteratees[0], iteratees[1], guard)) {
	        iteratees.length = 1;
	      }
	      return baseSortByOrder(collection, baseFlatten(iteratees), []);
	    });

	    /**
	     * This method is like `_.sortByAll` except that it allows specifying the
	     * sort orders of the iteratees to sort by. If `orders` is unspecified, all
	     * values are sorted in ascending order. Otherwise, a value is sorted in
	     * ascending order if its corresponding order is "asc", and descending if "desc".
	     *
	     * If a property name is provided for an iteratee the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If an object is provided for an iteratee the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * @static
	     * @memberOf _
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function[]|Object[]|string[]} iteratees The iteratees to sort by.
	     * @param {boolean[]} [orders] The sort orders of `iteratees`.
	     * @param- {Object} [guard] Enables use as a callback for functions like `_.reduce`.
	     * @returns {Array} Returns the new sorted array.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'fred',   'age': 48 },
	     *   { 'user': 'barney', 'age': 34 },
	     *   { 'user': 'fred',   'age': 42 },
	     *   { 'user': 'barney', 'age': 36 }
	     * ];
	     *
	     * // sort by `user` in ascending order and by `age` in descending order
	     * _.map(_.sortByOrder(users, ['user', 'age'], ['asc', 'desc']), _.values);
	     * // => [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 42]]
	     */
	    function sortByOrder(collection, iteratees, orders, guard) {
	      if (collection == null) {
	        return [];
	      }
	      if (guard && isIterateeCall(iteratees, orders, guard)) {
	        orders = undefined;
	      }
	      if (!isArray(iteratees)) {
	        iteratees = iteratees == null ? [] : [iteratees];
	      }
	      if (!isArray(orders)) {
	        orders = orders == null ? [] : [orders];
	      }
	      return baseSortByOrder(collection, iteratees, orders);
	    }

	    /**
	     * Performs a deep comparison between each element in `collection` and the
	     * source object, returning an array of all elements that have equivalent
	     * property values.
	     *
	     * **Note:** This method supports comparing arrays, booleans, `Date` objects,
	     * numbers, `Object` objects, regexes, and strings. Objects are compared by
	     * their own, not inherited, enumerable properties. For comparing a single
	     * own or inherited property value see `_.matchesProperty`.
	     *
	     * @static
	     * @memberOf _
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to search.
	     * @param {Object} source The object of property values to match.
	     * @returns {Array} Returns the new filtered array.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney', 'age': 36, 'active': false, 'pets': ['hoppy'] },
	     *   { 'user': 'fred',   'age': 40, 'active': true, 'pets': ['baby puss', 'dino'] }
	     * ];
	     *
	     * _.pluck(_.where(users, { 'age': 36, 'active': false }), 'user');
	     * // => ['barney']
	     *
	     * _.pluck(_.where(users, { 'pets': ['dino'] }), 'user');
	     * // => ['fred']
	     */
	    function where(collection, source) {
	      return filter(collection, baseMatches(source));
	    }

	    /*------------------------------------------------------------------------*/

	    /**
	     * Gets the number of milliseconds that have elapsed since the Unix epoch
	     * (1 January 1970 00:00:00 UTC).
	     *
	     * @static
	     * @memberOf _
	     * @category Date
	     * @example
	     *
	     * _.defer(function(stamp) {
	     *   console.log(_.now() - stamp);
	     * }, _.now());
	     * // => logs the number of milliseconds it took for the deferred function to be invoked
	     */
	    var now = nativeNow || function() {
	      return new Date().getTime();
	    };

	    /*------------------------------------------------------------------------*/

	    /**
	     * The opposite of `_.before`; this method creates a function that invokes
	     * `func` once it is called `n` or more times.
	     *
	     * @static
	     * @memberOf _
	     * @category Function
	     * @param {number} n The number of calls before `func` is invoked.
	     * @param {Function} func The function to restrict.
	     * @returns {Function} Returns the new restricted function.
	     * @example
	     *
	     * var saves = ['profile', 'settings'];
	     *
	     * var done = _.after(saves.length, function() {
	     *   console.log('done saving!');
	     * });
	     *
	     * _.forEach(saves, function(type) {
	     *   asyncSave({ 'type': type, 'complete': done });
	     * });
	     * // => logs 'done saving!' after the two async saves have completed
	     */
	    function after(n, func) {
	      if (typeof func != 'function') {
	        if (typeof n == 'function') {
	          var temp = n;
	          n = func;
	          func = temp;
	        } else {
	          throw new TypeError(FUNC_ERROR_TEXT);
	        }
	      }
	      n = nativeIsFinite(n = +n) ? n : 0;
	      return function() {
	        if (--n < 1) {
	          return func.apply(this, arguments);
	        }
	      };
	    }

	    /**
	     * Creates a function that accepts up to `n` arguments ignoring any
	     * additional arguments.
	     *
	     * @static
	     * @memberOf _
	     * @category Function
	     * @param {Function} func The function to cap arguments for.
	     * @param {number} [n=func.length] The arity cap.
	     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
	     * @returns {Function} Returns the new function.
	     * @example
	     *
	     * _.map(['6', '8', '10'], _.ary(parseInt, 1));
	     * // => [6, 8, 10]
	     */
	    function ary(func, n, guard) {
	      if (guard && isIterateeCall(func, n, guard)) {
	        n = undefined;
	      }
	      n = (func && n == null) ? func.length : nativeMax(+n || 0, 0);
	      return createWrapper(func, ARY_FLAG, undefined, undefined, undefined, undefined, n);
	    }

	    /**
	     * Creates a function that invokes `func`, with the `this` binding and arguments
	     * of the created function, while it is called less than `n` times. Subsequent
	     * calls to the created function return the result of the last `func` invocation.
	     *
	     * @static
	     * @memberOf _
	     * @category Function
	     * @param {number} n The number of calls at which `func` is no longer invoked.
	     * @param {Function} func The function to restrict.
	     * @returns {Function} Returns the new restricted function.
	     * @example
	     *
	     * jQuery('#add').on('click', _.before(5, addContactToList));
	     * // => allows adding up to 4 contacts to the list
	     */
	    function before(n, func) {
	      var result;
	      if (typeof func != 'function') {
	        if (typeof n == 'function') {
	          var temp = n;
	          n = func;
	          func = temp;
	        } else {
	          throw new TypeError(FUNC_ERROR_TEXT);
	        }
	      }
	      return function() {
	        if (--n > 0) {
	          result = func.apply(this, arguments);
	        }
	        if (n <= 1) {
	          func = undefined;
	        }
	        return result;
	      };
	    }

	    /**
	     * Creates a function that invokes `func` with the `this` binding of `thisArg`
	     * and prepends any additional `_.bind` arguments to those provided to the
	     * bound function.
	     *
	     * The `_.bind.placeholder` value, which defaults to `_` in monolithic builds,
	     * may be used as a placeholder for partially applied arguments.
	     *
	     * **Note:** Unlike native `Function#bind` this method does not set the "length"
	     * property of bound functions.
	     *
	     * @static
	     * @memberOf _
	     * @category Function
	     * @param {Function} func The function to bind.
	     * @param {*} thisArg The `this` binding of `func`.
	     * @param {...*} [partials] The arguments to be partially applied.
	     * @returns {Function} Returns the new bound function.
	     * @example
	     *
	     * var greet = function(greeting, punctuation) {
	     *   return greeting + ' ' + this.user + punctuation;
	     * };
	     *
	     * var object = { 'user': 'fred' };
	     *
	     * var bound = _.bind(greet, object, 'hi');
	     * bound('!');
	     * // => 'hi fred!'
	     *
	     * // using placeholders
	     * var bound = _.bind(greet, object, _, '!');
	     * bound('hi');
	     * // => 'hi fred!'
	     */
	    var bind = restParam(function(func, thisArg, partials) {
	      var bitmask = BIND_FLAG;
	      if (partials.length) {
	        var holders = replaceHolders(partials, bind.placeholder);
	        bitmask |= PARTIAL_FLAG;
	      }
	      return createWrapper(func, bitmask, thisArg, partials, holders);
	    });

	    /**
	     * Binds methods of an object to the object itself, overwriting the existing
	     * method. Method names may be specified as individual arguments or as arrays
	     * of method names. If no method names are provided all enumerable function
	     * properties, own and inherited, of `object` are bound.
	     *
	     * **Note:** This method does not set the "length" property of bound functions.
	     *
	     * @static
	     * @memberOf _
	     * @category Function
	     * @param {Object} object The object to bind and assign the bound methods to.
	     * @param {...(string|string[])} [methodNames] The object method names to bind,
	     *  specified as individual method names or arrays of method names.
	     * @returns {Object} Returns `object`.
	     * @example
	     *
	     * var view = {
	     *   'label': 'docs',
	     *   'onClick': function() {
	     *     console.log('clicked ' + this.label);
	     *   }
	     * };
	     *
	     * _.bindAll(view);
	     * jQuery('#docs').on('click', view.onClick);
	     * // => logs 'clicked docs' when the element is clicked
	     */
	    var bindAll = restParam(function(object, methodNames) {
	      methodNames = methodNames.length ? baseFlatten(methodNames) : functions(object);

	      var index = -1,
	          length = methodNames.length;

	      while (++index < length) {
	        var key = methodNames[index];
	        object[key] = createWrapper(object[key], BIND_FLAG, object);
	      }
	      return object;
	    });

	    /**
	     * Creates a function that invokes the method at `object[key]` and prepends
	     * any additional `_.bindKey` arguments to those provided to the bound function.
	     *
	     * This method differs from `_.bind` by allowing bound functions to reference
	     * methods that may be redefined or don't yet exist.
	     * See [Peter Michaux's article](http://peter.michaux.ca/articles/lazy-function-definition-pattern)
	     * for more details.
	     *
	     * The `_.bindKey.placeholder` value, which defaults to `_` in monolithic
	     * builds, may be used as a placeholder for partially applied arguments.
	     *
	     * @static
	     * @memberOf _
	     * @category Function
	     * @param {Object} object The object the method belongs to.
	     * @param {string} key The key of the method.
	     * @param {...*} [partials] The arguments to be partially applied.
	     * @returns {Function} Returns the new bound function.
	     * @example
	     *
	     * var object = {
	     *   'user': 'fred',
	     *   'greet': function(greeting, punctuation) {
	     *     return greeting + ' ' + this.user + punctuation;
	     *   }
	     * };
	     *
	     * var bound = _.bindKey(object, 'greet', 'hi');
	     * bound('!');
	     * // => 'hi fred!'
	     *
	     * object.greet = function(greeting, punctuation) {
	     *   return greeting + 'ya ' + this.user + punctuation;
	     * };
	     *
	     * bound('!');
	     * // => 'hiya fred!'
	     *
	     * // using placeholders
	     * var bound = _.bindKey(object, 'greet', _, '!');
	     * bound('hi');
	     * // => 'hiya fred!'
	     */
	    var bindKey = restParam(function(object, key, partials) {
	      var bitmask = BIND_FLAG | BIND_KEY_FLAG;
	      if (partials.length) {
	        var holders = replaceHolders(partials, bindKey.placeholder);
	        bitmask |= PARTIAL_FLAG;
	      }
	      return createWrapper(key, bitmask, object, partials, holders);
	    });

	    /**
	     * Creates a function that accepts one or more arguments of `func` that when
	     * called either invokes `func` returning its result, if all `func` arguments
	     * have been provided, or returns a function that accepts one or more of the
	     * remaining `func` arguments, and so on. The arity of `func` may be specified
	     * if `func.length` is not sufficient.
	     *
	     * The `_.curry.placeholder` value, which defaults to `_` in monolithic builds,
	     * may be used as a placeholder for provided arguments.
	     *
	     * **Note:** This method does not set the "length" property of curried functions.
	     *
	     * @static
	     * @memberOf _
	     * @category Function
	     * @param {Function} func The function to curry.
	     * @param {number} [arity=func.length] The arity of `func`.
	     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
	     * @returns {Function} Returns the new curried function.
	     * @example
	     *
	     * var abc = function(a, b, c) {
	     *   return [a, b, c];
	     * };
	     *
	     * var curried = _.curry(abc);
	     *
	     * curried(1)(2)(3);
	     * // => [1, 2, 3]
	     *
	     * curried(1, 2)(3);
	     * // => [1, 2, 3]
	     *
	     * curried(1, 2, 3);
	     * // => [1, 2, 3]
	     *
	     * // using placeholders
	     * curried(1)(_, 3)(2);
	     * // => [1, 2, 3]
	     */
	    var curry = createCurry(CURRY_FLAG);

	    /**
	     * This method is like `_.curry` except that arguments are applied to `func`
	     * in the manner of `_.partialRight` instead of `_.partial`.
	     *
	     * The `_.curryRight.placeholder` value, which defaults to `_` in monolithic
	     * builds, may be used as a placeholder for provided arguments.
	     *
	     * **Note:** This method does not set the "length" property of curried functions.
	     *
	     * @static
	     * @memberOf _
	     * @category Function
	     * @param {Function} func The function to curry.
	     * @param {number} [arity=func.length] The arity of `func`.
	     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
	     * @returns {Function} Returns the new curried function.
	     * @example
	     *
	     * var abc = function(a, b, c) {
	     *   return [a, b, c];
	     * };
	     *
	     * var curried = _.curryRight(abc);
	     *
	     * curried(3)(2)(1);
	     * // => [1, 2, 3]
	     *
	     * curried(2, 3)(1);
	     * // => [1, 2, 3]
	     *
	     * curried(1, 2, 3);
	     * // => [1, 2, 3]
	     *
	     * // using placeholders
	     * curried(3)(1, _)(2);
	     * // => [1, 2, 3]
	     */
	    var curryRight = createCurry(CURRY_RIGHT_FLAG);

	    /**
	     * Creates a debounced function that delays invoking `func` until after `wait`
	     * milliseconds have elapsed since the last time the debounced function was
	     * invoked. The debounced function comes with a `cancel` method to cancel
	     * delayed invocations. Provide an options object to indicate that `func`
	     * should be invoked on the leading and/or trailing edge of the `wait` timeout.
	     * Subsequent calls to the debounced function return the result of the last
	     * `func` invocation.
	     *
	     * **Note:** If `leading` and `trailing` options are `true`, `func` is invoked
	     * on the trailing edge of the timeout only if the the debounced function is
	     * invoked more than once during the `wait` timeout.
	     *
	     * See [David Corbacho's article](http://drupalmotion.com/article/debounce-and-throttle-visual-explanation)
	     * for details over the differences between `_.debounce` and `_.throttle`.
	     *
	     * @static
	     * @memberOf _
	     * @category Function
	     * @param {Function} func The function to debounce.
	     * @param {number} [wait=0] The number of milliseconds to delay.
	     * @param {Object} [options] The options object.
	     * @param {boolean} [options.leading=false] Specify invoking on the leading
	     *  edge of the timeout.
	     * @param {number} [options.maxWait] The maximum time `func` is allowed to be
	     *  delayed before it is invoked.
	     * @param {boolean} [options.trailing=true] Specify invoking on the trailing
	     *  edge of the timeout.
	     * @returns {Function} Returns the new debounced function.
	     * @example
	     *
	     * // avoid costly calculations while the window size is in flux
	     * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
	     *
	     * // invoke `sendMail` when the click event is fired, debouncing subsequent calls
	     * jQuery('#postbox').on('click', _.debounce(sendMail, 300, {
	     *   'leading': true,
	     *   'trailing': false
	     * }));
	     *
	     * // ensure `batchLog` is invoked once after 1 second of debounced calls
	     * var source = new EventSource('/stream');
	     * jQuery(source).on('message', _.debounce(batchLog, 250, {
	     *   'maxWait': 1000
	     * }));
	     *
	     * // cancel a debounced call
	     * var todoChanges = _.debounce(batchLog, 1000);
	     * Object.observe(models.todo, todoChanges);
	     *
	     * Object.observe(models, function(changes) {
	     *   if (_.find(changes, { 'user': 'todo', 'type': 'delete'})) {
	     *     todoChanges.cancel();
	     *   }
	     * }, ['delete']);
	     *
	     * // ...at some point `models.todo` is changed
	     * models.todo.completed = true;
	     *
	     * // ...before 1 second has passed `models.todo` is deleted
	     * // which cancels the debounced `todoChanges` call
	     * delete models.todo;
	     */
	    function debounce(func, wait, options) {
	      var args,
	          maxTimeoutId,
	          result,
	          stamp,
	          thisArg,
	          timeoutId,
	          trailingCall,
	          lastCalled = 0,
	          maxWait = false,
	          trailing = true;

	      if (typeof func != 'function') {
	        throw new TypeError(FUNC_ERROR_TEXT);
	      }
	      wait = wait < 0 ? 0 : (+wait || 0);
	      if (options === true) {
	        var leading = true;
	        trailing = false;
	      } else if (isObject(options)) {
	        leading = !!options.leading;
	        maxWait = 'maxWait' in options && nativeMax(+options.maxWait || 0, wait);
	        trailing = 'trailing' in options ? !!options.trailing : trailing;
	      }

	      function cancel() {
	        if (timeoutId) {
	          clearTimeout(timeoutId);
	        }
	        if (maxTimeoutId) {
	          clearTimeout(maxTimeoutId);
	        }
	        lastCalled = 0;
	        maxTimeoutId = timeoutId = trailingCall = undefined;
	      }

	      function complete(isCalled, id) {
	        if (id) {
	          clearTimeout(id);
	        }
	        maxTimeoutId = timeoutId = trailingCall = undefined;
	        if (isCalled) {
	          lastCalled = now();
	          result = func.apply(thisArg, args);
	          if (!timeoutId && !maxTimeoutId) {
	            args = thisArg = undefined;
	          }
	        }
	      }

	      function delayed() {
	        var remaining = wait - (now() - stamp);
	        if (remaining <= 0 || remaining > wait) {
	          complete(trailingCall, maxTimeoutId);
	        } else {
	          timeoutId = setTimeout(delayed, remaining);
	        }
	      }

	      function maxDelayed() {
	        complete(trailing, timeoutId);
	      }

	      function debounced() {
	        args = arguments;
	        stamp = now();
	        thisArg = this;
	        trailingCall = trailing && (timeoutId || !leading);

	        if (maxWait === false) {
	          var leadingCall = leading && !timeoutId;
	        } else {
	          if (!maxTimeoutId && !leading) {
	            lastCalled = stamp;
	          }
	          var remaining = maxWait - (stamp - lastCalled),
	              isCalled = remaining <= 0 || remaining > maxWait;

	          if (isCalled) {
	            if (maxTimeoutId) {
	              maxTimeoutId = clearTimeout(maxTimeoutId);
	            }
	            lastCalled = stamp;
	            result = func.apply(thisArg, args);
	          }
	          else if (!maxTimeoutId) {
	            maxTimeoutId = setTimeout(maxDelayed, remaining);
	          }
	        }
	        if (isCalled && timeoutId) {
	          timeoutId = clearTimeout(timeoutId);
	        }
	        else if (!timeoutId && wait !== maxWait) {
	          timeoutId = setTimeout(delayed, wait);
	        }
	        if (leadingCall) {
	          isCalled = true;
	          result = func.apply(thisArg, args);
	        }
	        if (isCalled && !timeoutId && !maxTimeoutId) {
	          args = thisArg = undefined;
	        }
	        return result;
	      }
	      debounced.cancel = cancel;
	      return debounced;
	    }

	    /**
	     * Defers invoking the `func` until the current call stack has cleared. Any
	     * additional arguments are provided to `func` when it is invoked.
	     *
	     * @static
	     * @memberOf _
	     * @category Function
	     * @param {Function} func The function to defer.
	     * @param {...*} [args] The arguments to invoke the function with.
	     * @returns {number} Returns the timer id.
	     * @example
	     *
	     * _.defer(function(text) {
	     *   console.log(text);
	     * }, 'deferred');
	     * // logs 'deferred' after one or more milliseconds
	     */
	    var defer = restParam(function(func, args) {
	      return baseDelay(func, 1, args);
	    });

	    /**
	     * Invokes `func` after `wait` milliseconds. Any additional arguments are
	     * provided to `func` when it is invoked.
	     *
	     * @static
	     * @memberOf _
	     * @category Function
	     * @param {Function} func The function to delay.
	     * @param {number} wait The number of milliseconds to delay invocation.
	     * @param {...*} [args] The arguments to invoke the function with.
	     * @returns {number} Returns the timer id.
	     * @example
	     *
	     * _.delay(function(text) {
	     *   console.log(text);
	     * }, 1000, 'later');
	     * // => logs 'later' after one second
	     */
	    var delay = restParam(function(func, wait, args) {
	      return baseDelay(func, wait, args);
	    });

	    /**
	     * Creates a function that returns the result of invoking the provided
	     * functions with the `this` binding of the created function, where each
	     * successive invocation is supplied the return value of the previous.
	     *
	     * @static
	     * @memberOf _
	     * @category Function
	     * @param {...Function} [funcs] Functions to invoke.
	     * @returns {Function} Returns the new function.
	     * @example
	     *
	     * function square(n) {
	     *   return n * n;
	     * }
	     *
	     * var addSquare = _.flow(_.add, square);
	     * addSquare(1, 2);
	     * // => 9
	     */
	    var flow = createFlow();

	    /**
	     * This method is like `_.flow` except that it creates a function that
	     * invokes the provided functions from right to left.
	     *
	     * @static
	     * @memberOf _
	     * @alias backflow, compose
	     * @category Function
	     * @param {...Function} [funcs] Functions to invoke.
	     * @returns {Function} Returns the new function.
	     * @example
	     *
	     * function square(n) {
	     *   return n * n;
	     * }
	     *
	     * var addSquare = _.flowRight(square, _.add);
	     * addSquare(1, 2);
	     * // => 9
	     */
	    var flowRight = createFlow(true);

	    /**
	     * Creates a function that memoizes the result of `func`. If `resolver` is
	     * provided it determines the cache key for storing the result based on the
	     * arguments provided to the memoized function. By default, the first argument
	     * provided to the memoized function is coerced to a string and used as the
	     * cache key. The `func` is invoked with the `this` binding of the memoized
	     * function.
	     *
	     * **Note:** The cache is exposed as the `cache` property on the memoized
	     * function. Its creation may be customized by replacing the `_.memoize.Cache`
	     * constructor with one whose instances implement the [`Map`](http://ecma-international.org/ecma-262/6.0/#sec-properties-of-the-map-prototype-object)
	     * method interface of `get`, `has`, and `set`.
	     *
	     * @static
	     * @memberOf _
	     * @category Function
	     * @param {Function} func The function to have its output memoized.
	     * @param {Function} [resolver] The function to resolve the cache key.
	     * @returns {Function} Returns the new memoizing function.
	     * @example
	     *
	     * var upperCase = _.memoize(function(string) {
	     *   return string.toUpperCase();
	     * });
	     *
	     * upperCase('fred');
	     * // => 'FRED'
	     *
	     * // modifying the result cache
	     * upperCase.cache.set('fred', 'BARNEY');
	     * upperCase('fred');
	     * // => 'BARNEY'
	     *
	     * // replacing `_.memoize.Cache`
	     * var object = { 'user': 'fred' };
	     * var other = { 'user': 'barney' };
	     * var identity = _.memoize(_.identity);
	     *
	     * identity(object);
	     * // => { 'user': 'fred' }
	     * identity(other);
	     * // => { 'user': 'fred' }
	     *
	     * _.memoize.Cache = WeakMap;
	     * var identity = _.memoize(_.identity);
	     *
	     * identity(object);
	     * // => { 'user': 'fred' }
	     * identity(other);
	     * // => { 'user': 'barney' }
	     */
	    function memoize(func, resolver) {
	      if (typeof func != 'function' || (resolver && typeof resolver != 'function')) {
	        throw new TypeError(FUNC_ERROR_TEXT);
	      }
	      var memoized = function() {
	        var args = arguments,
	            key = resolver ? resolver.apply(this, args) : args[0],
	            cache = memoized.cache;

	        if (cache.has(key)) {
	          return cache.get(key);
	        }
	        var result = func.apply(this, args);
	        memoized.cache = cache.set(key, result);
	        return result;
	      };
	      memoized.cache = new memoize.Cache;
	      return memoized;
	    }

	    /**
	     * Creates a function that runs each argument through a corresponding
	     * transform function.
	     *
	     * @static
	     * @memberOf _
	     * @category Function
	     * @param {Function} func The function to wrap.
	     * @param {...(Function|Function[])} [transforms] The functions to transform
	     * arguments, specified as individual functions or arrays of functions.
	     * @returns {Function} Returns the new function.
	     * @example
	     *
	     * function doubled(n) {
	     *   return n * 2;
	     * }
	     *
	     * function square(n) {
	     *   return n * n;
	     * }
	     *
	     * var modded = _.modArgs(function(x, y) {
	     *   return [x, y];
	     * }, square, doubled);
	     *
	     * modded(1, 2);
	     * // => [1, 4]
	     *
	     * modded(5, 10);
	     * // => [25, 20]
	     */
	    var modArgs = restParam(function(func, transforms) {
	      transforms = baseFlatten(transforms);
	      if (typeof func != 'function' || !arrayEvery(transforms, baseIsFunction)) {
	        throw new TypeError(FUNC_ERROR_TEXT);
	      }
	      var length = transforms.length;
	      return restParam(function(args) {
	        var index = nativeMin(args.length, length);
	        while (index--) {
	          args[index] = transforms[index](args[index]);
	        }
	        return func.apply(this, args);
	      });
	    });

	    /**
	     * Creates a function that negates the result of the predicate `func`. The
	     * `func` predicate is invoked with the `this` binding and arguments of the
	     * created function.
	     *
	     * @static
	     * @memberOf _
	     * @category Function
	     * @param {Function} predicate The predicate to negate.
	     * @returns {Function} Returns the new function.
	     * @example
	     *
	     * function isEven(n) {
	     *   return n % 2 == 0;
	     * }
	     *
	     * _.filter([1, 2, 3, 4, 5, 6], _.negate(isEven));
	     * // => [1, 3, 5]
	     */
	    function negate(predicate) {
	      if (typeof predicate != 'function') {
	        throw new TypeError(FUNC_ERROR_TEXT);
	      }
	      return function() {
	        return !predicate.apply(this, arguments);
	      };
	    }

	    /**
	     * Creates a function that is restricted to invoking `func` once. Repeat calls
	     * to the function return the value of the first call. The `func` is invoked
	     * with the `this` binding and arguments of the created function.
	     *
	     * @static
	     * @memberOf _
	     * @category Function
	     * @param {Function} func The function to restrict.
	     * @returns {Function} Returns the new restricted function.
	     * @example
	     *
	     * var initialize = _.once(createApplication);
	     * initialize();
	     * initialize();
	     * // `initialize` invokes `createApplication` once
	     */
	    function once(func) {
	      return before(2, func);
	    }

	    /**
	     * Creates a function that invokes `func` with `partial` arguments prepended
	     * to those provided to the new function. This method is like `_.bind` except
	     * it does **not** alter the `this` binding.
	     *
	     * The `_.partial.placeholder` value, which defaults to `_` in monolithic
	     * builds, may be used as a placeholder for partially applied arguments.
	     *
	     * **Note:** This method does not set the "length" property of partially
	     * applied functions.
	     *
	     * @static
	     * @memberOf _
	     * @category Function
	     * @param {Function} func The function to partially apply arguments to.
	     * @param {...*} [partials] The arguments to be partially applied.
	     * @returns {Function} Returns the new partially applied function.
	     * @example
	     *
	     * var greet = function(greeting, name) {
	     *   return greeting + ' ' + name;
	     * };
	     *
	     * var sayHelloTo = _.partial(greet, 'hello');
	     * sayHelloTo('fred');
	     * // => 'hello fred'
	     *
	     * // using placeholders
	     * var greetFred = _.partial(greet, _, 'fred');
	     * greetFred('hi');
	     * // => 'hi fred'
	     */
	    var partial = createPartial(PARTIAL_FLAG);

	    /**
	     * This method is like `_.partial` except that partially applied arguments
	     * are appended to those provided to the new function.
	     *
	     * The `_.partialRight.placeholder` value, which defaults to `_` in monolithic
	     * builds, may be used as a placeholder for partially applied arguments.
	     *
	     * **Note:** This method does not set the "length" property of partially
	     * applied functions.
	     *
	     * @static
	     * @memberOf _
	     * @category Function
	     * @param {Function} func The function to partially apply arguments to.
	     * @param {...*} [partials] The arguments to be partially applied.
	     * @returns {Function} Returns the new partially applied function.
	     * @example
	     *
	     * var greet = function(greeting, name) {
	     *   return greeting + ' ' + name;
	     * };
	     *
	     * var greetFred = _.partialRight(greet, 'fred');
	     * greetFred('hi');
	     * // => 'hi fred'
	     *
	     * // using placeholders
	     * var sayHelloTo = _.partialRight(greet, 'hello', _);
	     * sayHelloTo('fred');
	     * // => 'hello fred'
	     */
	    var partialRight = createPartial(PARTIAL_RIGHT_FLAG);

	    /**
	     * Creates a function that invokes `func` with arguments arranged according
	     * to the specified indexes where the argument value at the first index is
	     * provided as the first argument, the argument value at the second index is
	     * provided as the second argument, and so on.
	     *
	     * @static
	     * @memberOf _
	     * @category Function
	     * @param {Function} func The function to rearrange arguments for.
	     * @param {...(number|number[])} indexes The arranged argument indexes,
	     *  specified as individual indexes or arrays of indexes.
	     * @returns {Function} Returns the new function.
	     * @example
	     *
	     * var rearged = _.rearg(function(a, b, c) {
	     *   return [a, b, c];
	     * }, 2, 0, 1);
	     *
	     * rearged('b', 'c', 'a')
	     * // => ['a', 'b', 'c']
	     *
	     * var map = _.rearg(_.map, [1, 0]);
	     * map(function(n) {
	     *   return n * 3;
	     * }, [1, 2, 3]);
	     * // => [3, 6, 9]
	     */
	    var rearg = restParam(function(func, indexes) {
	      return createWrapper(func, REARG_FLAG, undefined, undefined, undefined, baseFlatten(indexes));
	    });

	    /**
	     * Creates a function that invokes `func` with the `this` binding of the
	     * created function and arguments from `start` and beyond provided as an array.
	     *
	     * **Note:** This method is based on the [rest parameter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters).
	     *
	     * @static
	     * @memberOf _
	     * @category Function
	     * @param {Function} func The function to apply a rest parameter to.
	     * @param {number} [start=func.length-1] The start position of the rest parameter.
	     * @returns {Function} Returns the new function.
	     * @example
	     *
	     * var say = _.restParam(function(what, names) {
	     *   return what + ' ' + _.initial(names).join(', ') +
	     *     (_.size(names) > 1 ? ', & ' : '') + _.last(names);
	     * });
	     *
	     * say('hello', 'fred', 'barney', 'pebbles');
	     * // => 'hello fred, barney, & pebbles'
	     */
	    function restParam(func, start) {
	      if (typeof func != 'function') {
	        throw new TypeError(FUNC_ERROR_TEXT);
	      }
	      start = nativeMax(start === undefined ? (func.length - 1) : (+start || 0), 0);
	      return function() {
	        var args = arguments,
	            index = -1,
	            length = nativeMax(args.length - start, 0),
	            rest = Array(length);

	        while (++index < length) {
	          rest[index] = args[start + index];
	        }
	        switch (start) {
	          case 0: return func.call(this, rest);
	          case 1: return func.call(this, args[0], rest);
	          case 2: return func.call(this, args[0], args[1], rest);
	        }
	        var otherArgs = Array(start + 1);
	        index = -1;
	        while (++index < start) {
	          otherArgs[index] = args[index];
	        }
	        otherArgs[start] = rest;
	        return func.apply(this, otherArgs);
	      };
	    }

	    /**
	     * Creates a function that invokes `func` with the `this` binding of the created
	     * function and an array of arguments much like [`Function#apply`](https://es5.github.io/#x15.3.4.3).
	     *
	     * **Note:** This method is based on the [spread operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator).
	     *
	     * @static
	     * @memberOf _
	     * @category Function
	     * @param {Function} func The function to spread arguments over.
	     * @returns {Function} Returns the new function.
	     * @example
	     *
	     * var say = _.spread(function(who, what) {
	     *   return who + ' says ' + what;
	     * });
	     *
	     * say(['fred', 'hello']);
	     * // => 'fred says hello'
	     *
	     * // with a Promise
	     * var numbers = Promise.all([
	     *   Promise.resolve(40),
	     *   Promise.resolve(36)
	     * ]);
	     *
	     * numbers.then(_.spread(function(x, y) {
	     *   return x + y;
	     * }));
	     * // => a Promise of 76
	     */
	    function spread(func) {
	      if (typeof func != 'function') {
	        throw new TypeError(FUNC_ERROR_TEXT);
	      }
	      return function(array) {
	        return func.apply(this, array);
	      };
	    }

	    /**
	     * Creates a throttled function that only invokes `func` at most once per
	     * every `wait` milliseconds. The throttled function comes with a `cancel`
	     * method to cancel delayed invocations. Provide an options object to indicate
	     * that `func` should be invoked on the leading and/or trailing edge of the
	     * `wait` timeout. Subsequent calls to the throttled function return the
	     * result of the last `func` call.
	     *
	     * **Note:** If `leading` and `trailing` options are `true`, `func` is invoked
	     * on the trailing edge of the timeout only if the the throttled function is
	     * invoked more than once during the `wait` timeout.
	     *
	     * See [David Corbacho's article](http://drupalmotion.com/article/debounce-and-throttle-visual-explanation)
	     * for details over the differences between `_.throttle` and `_.debounce`.
	     *
	     * @static
	     * @memberOf _
	     * @category Function
	     * @param {Function} func The function to throttle.
	     * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
	     * @param {Object} [options] The options object.
	     * @param {boolean} [options.leading=true] Specify invoking on the leading
	     *  edge of the timeout.
	     * @param {boolean} [options.trailing=true] Specify invoking on the trailing
	     *  edge of the timeout.
	     * @returns {Function} Returns the new throttled function.
	     * @example
	     *
	     * // avoid excessively updating the position while scrolling
	     * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
	     *
	     * // invoke `renewToken` when the click event is fired, but not more than once every 5 minutes
	     * jQuery('.interactive').on('click', _.throttle(renewToken, 300000, {
	     *   'trailing': false
	     * }));
	     *
	     * // cancel a trailing throttled call
	     * jQuery(window).on('popstate', throttled.cancel);
	     */
	    function throttle(func, wait, options) {
	      var leading = true,
	          trailing = true;

	      if (typeof func != 'function') {
	        throw new TypeError(FUNC_ERROR_TEXT);
	      }
	      if (options === false) {
	        leading = false;
	      } else if (isObject(options)) {
	        leading = 'leading' in options ? !!options.leading : leading;
	        trailing = 'trailing' in options ? !!options.trailing : trailing;
	      }
	      return debounce(func, wait, { 'leading': leading, 'maxWait': +wait, 'trailing': trailing });
	    }

	    /**
	     * Creates a function that provides `value` to the wrapper function as its
	     * first argument. Any additional arguments provided to the function are
	     * appended to those provided to the wrapper function. The wrapper is invoked
	     * with the `this` binding of the created function.
	     *
	     * @static
	     * @memberOf _
	     * @category Function
	     * @param {*} value The value to wrap.
	     * @param {Function} wrapper The wrapper function.
	     * @returns {Function} Returns the new function.
	     * @example
	     *
	     * var p = _.wrap(_.escape, function(func, text) {
	     *   return '<p>' + func(text) + '</p>';
	     * });
	     *
	     * p('fred, barney, & pebbles');
	     * // => '<p>fred, barney, &amp; pebbles</p>'
	     */
	    function wrap(value, wrapper) {
	      wrapper = wrapper == null ? identity : wrapper;
	      return createWrapper(wrapper, PARTIAL_FLAG, undefined, [value], []);
	    }

	    /*------------------------------------------------------------------------*/

	    /**
	     * Creates a clone of `value`. If `isDeep` is `true` nested objects are cloned,
	     * otherwise they are assigned by reference. If `customizer` is provided it is
	     * invoked to produce the cloned values. If `customizer` returns `undefined`
	     * cloning is handled by the method instead. The `customizer` is bound to
	     * `thisArg` and invoked with two argument; (value [, index|key, object]).
	     *
	     * **Note:** This method is loosely based on the
	     * [structured clone algorithm](http://www.w3.org/TR/html5/infrastructure.html#internal-structured-cloning-algorithm).
	     * The enumerable properties of `arguments` objects and objects created by
	     * constructors other than `Object` are cloned to plain `Object` objects. An
	     * empty object is returned for uncloneable values such as functions, DOM nodes,
	     * Maps, Sets, and WeakMaps.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to clone.
	     * @param {boolean} [isDeep] Specify a deep clone.
	     * @param {Function} [customizer] The function to customize cloning values.
	     * @param {*} [thisArg] The `this` binding of `customizer`.
	     * @returns {*} Returns the cloned value.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney' },
	     *   { 'user': 'fred' }
	     * ];
	     *
	     * var shallow = _.clone(users);
	     * shallow[0] === users[0];
	     * // => true
	     *
	     * var deep = _.clone(users, true);
	     * deep[0] === users[0];
	     * // => false
	     *
	     * // using a customizer callback
	     * var el = _.clone(document.body, function(value) {
	     *   if (_.isElement(value)) {
	     *     return value.cloneNode(false);
	     *   }
	     * });
	     *
	     * el === document.body
	     * // => false
	     * el.nodeName
	     * // => BODY
	     * el.childNodes.length;
	     * // => 0
	     */
	    function clone(value, isDeep, customizer, thisArg) {
	      if (isDeep && typeof isDeep != 'boolean' && isIterateeCall(value, isDeep, customizer)) {
	        isDeep = false;
	      }
	      else if (typeof isDeep == 'function') {
	        thisArg = customizer;
	        customizer = isDeep;
	        isDeep = false;
	      }
	      return typeof customizer == 'function'
	        ? baseClone(value, isDeep, bindCallback(customizer, thisArg, 1))
	        : baseClone(value, isDeep);
	    }

	    /**
	     * Creates a deep clone of `value`. If `customizer` is provided it is invoked
	     * to produce the cloned values. If `customizer` returns `undefined` cloning
	     * is handled by the method instead. The `customizer` is bound to `thisArg`
	     * and invoked with two argument; (value [, index|key, object]).
	     *
	     * **Note:** This method is loosely based on the
	     * [structured clone algorithm](http://www.w3.org/TR/html5/infrastructure.html#internal-structured-cloning-algorithm).
	     * The enumerable properties of `arguments` objects and objects created by
	     * constructors other than `Object` are cloned to plain `Object` objects. An
	     * empty object is returned for uncloneable values such as functions, DOM nodes,
	     * Maps, Sets, and WeakMaps.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to deep clone.
	     * @param {Function} [customizer] The function to customize cloning values.
	     * @param {*} [thisArg] The `this` binding of `customizer`.
	     * @returns {*} Returns the deep cloned value.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney' },
	     *   { 'user': 'fred' }
	     * ];
	     *
	     * var deep = _.cloneDeep(users);
	     * deep[0] === users[0];
	     * // => false
	     *
	     * // using a customizer callback
	     * var el = _.cloneDeep(document.body, function(value) {
	     *   if (_.isElement(value)) {
	     *     return value.cloneNode(true);
	     *   }
	     * });
	     *
	     * el === document.body
	     * // => false
	     * el.nodeName
	     * // => BODY
	     * el.childNodes.length;
	     * // => 20
	     */
	    function cloneDeep(value, customizer, thisArg) {
	      return typeof customizer == 'function'
	        ? baseClone(value, true, bindCallback(customizer, thisArg, 1))
	        : baseClone(value, true);
	    }

	    /**
	     * Checks if `value` is greater than `other`.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to compare.
	     * @param {*} other The other value to compare.
	     * @returns {boolean} Returns `true` if `value` is greater than `other`, else `false`.
	     * @example
	     *
	     * _.gt(3, 1);
	     * // => true
	     *
	     * _.gt(3, 3);
	     * // => false
	     *
	     * _.gt(1, 3);
	     * // => false
	     */
	    function gt(value, other) {
	      return value > other;
	    }

	    /**
	     * Checks if `value` is greater than or equal to `other`.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to compare.
	     * @param {*} other The other value to compare.
	     * @returns {boolean} Returns `true` if `value` is greater than or equal to `other`, else `false`.
	     * @example
	     *
	     * _.gte(3, 1);
	     * // => true
	     *
	     * _.gte(3, 3);
	     * // => true
	     *
	     * _.gte(1, 3);
	     * // => false
	     */
	    function gte(value, other) {
	      return value >= other;
	    }

	    /**
	     * Checks if `value` is classified as an `arguments` object.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	     * @example
	     *
	     * _.isArguments(function() { return arguments; }());
	     * // => true
	     *
	     * _.isArguments([1, 2, 3]);
	     * // => false
	     */
	    function isArguments(value) {
	      return isObjectLike(value) && isArrayLike(value) &&
	        hasOwnProperty.call(value, 'callee') && !propertyIsEnumerable.call(value, 'callee');
	    }

	    /**
	     * Checks if `value` is classified as an `Array` object.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	     * @example
	     *
	     * _.isArray([1, 2, 3]);
	     * // => true
	     *
	     * _.isArray(function() { return arguments; }());
	     * // => false
	     */
	    var isArray = nativeIsArray || function(value) {
	      return isObjectLike(value) && isLength(value.length) && objToString.call(value) == arrayTag;
	    };

	    /**
	     * Checks if `value` is classified as a boolean primitive or object.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	     * @example
	     *
	     * _.isBoolean(false);
	     * // => true
	     *
	     * _.isBoolean(null);
	     * // => false
	     */
	    function isBoolean(value) {
	      return value === true || value === false || (isObjectLike(value) && objToString.call(value) == boolTag);
	    }

	    /**
	     * Checks if `value` is classified as a `Date` object.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	     * @example
	     *
	     * _.isDate(new Date);
	     * // => true
	     *
	     * _.isDate('Mon April 23 2012');
	     * // => false
	     */
	    function isDate(value) {
	      return isObjectLike(value) && objToString.call(value) == dateTag;
	    }

	    /**
	     * Checks if `value` is a DOM element.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a DOM element, else `false`.
	     * @example
	     *
	     * _.isElement(document.body);
	     * // => true
	     *
	     * _.isElement('<body>');
	     * // => false
	     */
	    function isElement(value) {
	      return !!value && value.nodeType === 1 && isObjectLike(value) && !isPlainObject(value);
	    }

	    /**
	     * Checks if `value` is empty. A value is considered empty unless it is an
	     * `arguments` object, array, string, or jQuery-like collection with a length
	     * greater than `0` or an object with own enumerable properties.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {Array|Object|string} value The value to inspect.
	     * @returns {boolean} Returns `true` if `value` is empty, else `false`.
	     * @example
	     *
	     * _.isEmpty(null);
	     * // => true
	     *
	     * _.isEmpty(true);
	     * // => true
	     *
	     * _.isEmpty(1);
	     * // => true
	     *
	     * _.isEmpty([1, 2, 3]);
	     * // => false
	     *
	     * _.isEmpty({ 'a': 1 });
	     * // => false
	     */
	    function isEmpty(value) {
	      if (value == null) {
	        return true;
	      }
	      if (isArrayLike(value) && (isArray(value) || isString(value) || isArguments(value) ||
	          (isObjectLike(value) && isFunction(value.splice)))) {
	        return !value.length;
	      }
	      return !keys(value).length;
	    }

	    /**
	     * Performs a deep comparison between two values to determine if they are
	     * equivalent. If `customizer` is provided it is invoked to compare values.
	     * If `customizer` returns `undefined` comparisons are handled by the method
	     * instead. The `customizer` is bound to `thisArg` and invoked with three
	     * arguments: (value, other [, index|key]).
	     *
	     * **Note:** This method supports comparing arrays, booleans, `Date` objects,
	     * numbers, `Object` objects, regexes, and strings. Objects are compared by
	     * their own, not inherited, enumerable properties. Functions and DOM nodes
	     * are **not** supported. Provide a customizer function to extend support
	     * for comparing other values.
	     *
	     * @static
	     * @memberOf _
	     * @alias eq
	     * @category Lang
	     * @param {*} value The value to compare.
	     * @param {*} other The other value to compare.
	     * @param {Function} [customizer] The function to customize value comparisons.
	     * @param {*} [thisArg] The `this` binding of `customizer`.
	     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	     * @example
	     *
	     * var object = { 'user': 'fred' };
	     * var other = { 'user': 'fred' };
	     *
	     * object == other;
	     * // => false
	     *
	     * _.isEqual(object, other);
	     * // => true
	     *
	     * // using a customizer callback
	     * var array = ['hello', 'goodbye'];
	     * var other = ['hi', 'goodbye'];
	     *
	     * _.isEqual(array, other, function(value, other) {
	     *   if (_.every([value, other], RegExp.prototype.test, /^h(?:i|ello)$/)) {
	     *     return true;
	     *   }
	     * });
	     * // => true
	     */
	    function isEqual(value, other, customizer, thisArg) {
	      customizer = typeof customizer == 'function' ? bindCallback(customizer, thisArg, 3) : undefined;
	      var result = customizer ? customizer(value, other) : undefined;
	      return  result === undefined ? baseIsEqual(value, other, customizer) : !!result;
	    }

	    /**
	     * Checks if `value` is an `Error`, `EvalError`, `RangeError`, `ReferenceError`,
	     * `SyntaxError`, `TypeError`, or `URIError` object.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is an error object, else `false`.
	     * @example
	     *
	     * _.isError(new Error);
	     * // => true
	     *
	     * _.isError(Error);
	     * // => false
	     */
	    function isError(value) {
	      return isObjectLike(value) && typeof value.message == 'string' && objToString.call(value) == errorTag;
	    }

	    /**
	     * Checks if `value` is a finite primitive number.
	     *
	     * **Note:** This method is based on [`Number.isFinite`](http://ecma-international.org/ecma-262/6.0/#sec-number.isfinite).
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a finite number, else `false`.
	     * @example
	     *
	     * _.isFinite(10);
	     * // => true
	     *
	     * _.isFinite('10');
	     * // => false
	     *
	     * _.isFinite(true);
	     * // => false
	     *
	     * _.isFinite(Object(10));
	     * // => false
	     *
	     * _.isFinite(Infinity);
	     * // => false
	     */
	    function isFinite(value) {
	      return typeof value == 'number' && nativeIsFinite(value);
	    }

	    /**
	     * Checks if `value` is classified as a `Function` object.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	     * @example
	     *
	     * _.isFunction(_);
	     * // => true
	     *
	     * _.isFunction(/abc/);
	     * // => false
	     */
	    function isFunction(value) {
	      // The use of `Object#toString` avoids issues with the `typeof` operator
	      // in older versions of Chrome and Safari which return 'function' for regexes
	      // and Safari 8 equivalents which return 'object' for typed array constructors.
	      return isObject(value) && objToString.call(value) == funcTag;
	    }

	    /**
	     * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
	     * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	     * @example
	     *
	     * _.isObject({});
	     * // => true
	     *
	     * _.isObject([1, 2, 3]);
	     * // => true
	     *
	     * _.isObject(1);
	     * // => false
	     */
	    function isObject(value) {
	      // Avoid a V8 JIT bug in Chrome 19-20.
	      // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
	      var type = typeof value;
	      return !!value && (type == 'object' || type == 'function');
	    }

	    /**
	     * Performs a deep comparison between `object` and `source` to determine if
	     * `object` contains equivalent property values. If `customizer` is provided
	     * it is invoked to compare values. If `customizer` returns `undefined`
	     * comparisons are handled by the method instead. The `customizer` is bound
	     * to `thisArg` and invoked with three arguments: (value, other, index|key).
	     *
	     * **Note:** This method supports comparing properties of arrays, booleans,
	     * `Date` objects, numbers, `Object` objects, regexes, and strings. Functions
	     * and DOM nodes are **not** supported. Provide a customizer function to extend
	     * support for comparing other values.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {Object} object The object to inspect.
	     * @param {Object} source The object of property values to match.
	     * @param {Function} [customizer] The function to customize value comparisons.
	     * @param {*} [thisArg] The `this` binding of `customizer`.
	     * @returns {boolean} Returns `true` if `object` is a match, else `false`.
	     * @example
	     *
	     * var object = { 'user': 'fred', 'age': 40 };
	     *
	     * _.isMatch(object, { 'age': 40 });
	     * // => true
	     *
	     * _.isMatch(object, { 'age': 36 });
	     * // => false
	     *
	     * // using a customizer callback
	     * var object = { 'greeting': 'hello' };
	     * var source = { 'greeting': 'hi' };
	     *
	     * _.isMatch(object, source, function(value, other) {
	     *   return _.every([value, other], RegExp.prototype.test, /^h(?:i|ello)$/) || undefined;
	     * });
	     * // => true
	     */
	    function isMatch(object, source, customizer, thisArg) {
	      customizer = typeof customizer == 'function' ? bindCallback(customizer, thisArg, 3) : undefined;
	      return baseIsMatch(object, getMatchData(source), customizer);
	    }

	    /**
	     * Checks if `value` is `NaN`.
	     *
	     * **Note:** This method is not the same as [`isNaN`](https://es5.github.io/#x15.1.2.4)
	     * which returns `true` for `undefined` and other non-numeric values.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
	     * @example
	     *
	     * _.isNaN(NaN);
	     * // => true
	     *
	     * _.isNaN(new Number(NaN));
	     * // => true
	     *
	     * isNaN(undefined);
	     * // => true
	     *
	     * _.isNaN(undefined);
	     * // => false
	     */
	    function isNaN(value) {
	      // An `NaN` primitive is the only value that is not equal to itself.
	      // Perform the `toStringTag` check first to avoid errors with some host objects in IE.
	      return isNumber(value) && value != +value;
	    }

	    /**
	     * Checks if `value` is a native function.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a native function, else `false`.
	     * @example
	     *
	     * _.isNative(Array.prototype.push);
	     * // => true
	     *
	     * _.isNative(_);
	     * // => false
	     */
	    function isNative(value) {
	      if (value == null) {
	        return false;
	      }
	      if (isFunction(value)) {
	        return reIsNative.test(fnToString.call(value));
	      }
	      return isObjectLike(value) && reIsHostCtor.test(value);
	    }

	    /**
	     * Checks if `value` is `null`.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is `null`, else `false`.
	     * @example
	     *
	     * _.isNull(null);
	     * // => true
	     *
	     * _.isNull(void 0);
	     * // => false
	     */
	    function isNull(value) {
	      return value === null;
	    }

	    /**
	     * Checks if `value` is classified as a `Number` primitive or object.
	     *
	     * **Note:** To exclude `Infinity`, `-Infinity`, and `NaN`, which are classified
	     * as numbers, use the `_.isFinite` method.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	     * @example
	     *
	     * _.isNumber(8.4);
	     * // => true
	     *
	     * _.isNumber(NaN);
	     * // => true
	     *
	     * _.isNumber('8.4');
	     * // => false
	     */
	    function isNumber(value) {
	      return typeof value == 'number' || (isObjectLike(value) && objToString.call(value) == numberTag);
	    }

	    /**
	     * Checks if `value` is a plain object, that is, an object created by the
	     * `Object` constructor or one with a `[[Prototype]]` of `null`.
	     *
	     * **Note:** This method assumes objects created by the `Object` constructor
	     * have no inherited enumerable properties.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
	     * @example
	     *
	     * function Foo() {
	     *   this.a = 1;
	     * }
	     *
	     * _.isPlainObject(new Foo);
	     * // => false
	     *
	     * _.isPlainObject([1, 2, 3]);
	     * // => false
	     *
	     * _.isPlainObject({ 'x': 0, 'y': 0 });
	     * // => true
	     *
	     * _.isPlainObject(Object.create(null));
	     * // => true
	     */
	    function isPlainObject(value) {
	      var Ctor;

	      // Exit early for non `Object` objects.
	      if (!(isObjectLike(value) && objToString.call(value) == objectTag && !isArguments(value)) ||
	          (!hasOwnProperty.call(value, 'constructor') && (Ctor = value.constructor, typeof Ctor == 'function' && !(Ctor instanceof Ctor)))) {
	        return false;
	      }
	      // IE < 9 iterates inherited properties before own properties. If the first
	      // iterated property is an object's own property then there are no inherited
	      // enumerable properties.
	      var result;
	      // In most environments an object's own properties are iterated before
	      // its inherited properties. If the last iterated property is an object's
	      // own property then there are no inherited enumerable properties.
	      baseForIn(value, function(subValue, key) {
	        result = key;
	      });
	      return result === undefined || hasOwnProperty.call(value, result);
	    }

	    /**
	     * Checks if `value` is classified as a `RegExp` object.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	     * @example
	     *
	     * _.isRegExp(/abc/);
	     * // => true
	     *
	     * _.isRegExp('/abc/');
	     * // => false
	     */
	    function isRegExp(value) {
	      return isObject(value) && objToString.call(value) == regexpTag;
	    }

	    /**
	     * Checks if `value` is classified as a `String` primitive or object.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	     * @example
	     *
	     * _.isString('abc');
	     * // => true
	     *
	     * _.isString(1);
	     * // => false
	     */
	    function isString(value) {
	      return typeof value == 'string' || (isObjectLike(value) && objToString.call(value) == stringTag);
	    }

	    /**
	     * Checks if `value` is classified as a typed array.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	     * @example
	     *
	     * _.isTypedArray(new Uint8Array);
	     * // => true
	     *
	     * _.isTypedArray([]);
	     * // => false
	     */
	    function isTypedArray(value) {
	      return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[objToString.call(value)];
	    }

	    /**
	     * Checks if `value` is `undefined`.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is `undefined`, else `false`.
	     * @example
	     *
	     * _.isUndefined(void 0);
	     * // => true
	     *
	     * _.isUndefined(null);
	     * // => false
	     */
	    function isUndefined(value) {
	      return value === undefined;
	    }

	    /**
	     * Checks if `value` is less than `other`.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to compare.
	     * @param {*} other The other value to compare.
	     * @returns {boolean} Returns `true` if `value` is less than `other`, else `false`.
	     * @example
	     *
	     * _.lt(1, 3);
	     * // => true
	     *
	     * _.lt(3, 3);
	     * // => false
	     *
	     * _.lt(3, 1);
	     * // => false
	     */
	    function lt(value, other) {
	      return value < other;
	    }

	    /**
	     * Checks if `value` is less than or equal to `other`.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to compare.
	     * @param {*} other The other value to compare.
	     * @returns {boolean} Returns `true` if `value` is less than or equal to `other`, else `false`.
	     * @example
	     *
	     * _.lte(1, 3);
	     * // => true
	     *
	     * _.lte(3, 3);
	     * // => true
	     *
	     * _.lte(3, 1);
	     * // => false
	     */
	    function lte(value, other) {
	      return value <= other;
	    }

	    /**
	     * Converts `value` to an array.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to convert.
	     * @returns {Array} Returns the converted array.
	     * @example
	     *
	     * (function() {
	     *   return _.toArray(arguments).slice(1);
	     * }(1, 2, 3));
	     * // => [2, 3]
	     */
	    function toArray(value) {
	      var length = value ? getLength(value) : 0;
	      if (!isLength(length)) {
	        return values(value);
	      }
	      if (!length) {
	        return [];
	      }
	      return arrayCopy(value);
	    }

	    /**
	     * Converts `value` to a plain object flattening inherited enumerable
	     * properties of `value` to own properties of the plain object.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to convert.
	     * @returns {Object} Returns the converted plain object.
	     * @example
	     *
	     * function Foo() {
	     *   this.b = 2;
	     * }
	     *
	     * Foo.prototype.c = 3;
	     *
	     * _.assign({ 'a': 1 }, new Foo);
	     * // => { 'a': 1, 'b': 2 }
	     *
	     * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
	     * // => { 'a': 1, 'b': 2, 'c': 3 }
	     */
	    function toPlainObject(value) {
	      return baseCopy(value, keysIn(value));
	    }

	    /*------------------------------------------------------------------------*/

	    /**
	     * Recursively merges own enumerable properties of the source object(s), that
	     * don't resolve to `undefined` into the destination object. Subsequent sources
	     * overwrite property assignments of previous sources. If `customizer` is
	     * provided it is invoked to produce the merged values of the destination and
	     * source properties. If `customizer` returns `undefined` merging is handled
	     * by the method instead. The `customizer` is bound to `thisArg` and invoked
	     * with five arguments: (objectValue, sourceValue, key, object, source).
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The destination object.
	     * @param {...Object} [sources] The source objects.
	     * @param {Function} [customizer] The function to customize assigned values.
	     * @param {*} [thisArg] The `this` binding of `customizer`.
	     * @returns {Object} Returns `object`.
	     * @example
	     *
	     * var users = {
	     *   'data': [{ 'user': 'barney' }, { 'user': 'fred' }]
	     * };
	     *
	     * var ages = {
	     *   'data': [{ 'age': 36 }, { 'age': 40 }]
	     * };
	     *
	     * _.merge(users, ages);
	     * // => { 'data': [{ 'user': 'barney', 'age': 36 }, { 'user': 'fred', 'age': 40 }] }
	     *
	     * // using a customizer callback
	     * var object = {
	     *   'fruits': ['apple'],
	     *   'vegetables': ['beet']
	     * };
	     *
	     * var other = {
	     *   'fruits': ['banana'],
	     *   'vegetables': ['carrot']
	     * };
	     *
	     * _.merge(object, other, function(a, b) {
	     *   if (_.isArray(a)) {
	     *     return a.concat(b);
	     *   }
	     * });
	     * // => { 'fruits': ['apple', 'banana'], 'vegetables': ['beet', 'carrot'] }
	     */
	    var merge = createAssigner(baseMerge);

	    /**
	     * Assigns own enumerable properties of source object(s) to the destination
	     * object. Subsequent sources overwrite property assignments of previous sources.
	     * If `customizer` is provided it is invoked to produce the assigned values.
	     * The `customizer` is bound to `thisArg` and invoked with five arguments:
	     * (objectValue, sourceValue, key, object, source).
	     *
	     * **Note:** This method mutates `object` and is based on
	     * [`Object.assign`](http://ecma-international.org/ecma-262/6.0/#sec-object.assign).
	     *
	     * @static
	     * @memberOf _
	     * @alias extend
	     * @category Object
	     * @param {Object} object The destination object.
	     * @param {...Object} [sources] The source objects.
	     * @param {Function} [customizer] The function to customize assigned values.
	     * @param {*} [thisArg] The `this` binding of `customizer`.
	     * @returns {Object} Returns `object`.
	     * @example
	     *
	     * _.assign({ 'user': 'barney' }, { 'age': 40 }, { 'user': 'fred' });
	     * // => { 'user': 'fred', 'age': 40 }
	     *
	     * // using a customizer callback
	     * var defaults = _.partialRight(_.assign, function(value, other) {
	     *   return _.isUndefined(value) ? other : value;
	     * });
	     *
	     * defaults({ 'user': 'barney' }, { 'age': 36 }, { 'user': 'fred' });
	     * // => { 'user': 'barney', 'age': 36 }
	     */
	    var assign = createAssigner(function(object, source, customizer) {
	      return customizer
	        ? assignWith(object, source, customizer)
	        : baseAssign(object, source);
	    });

	    /**
	     * Creates an object that inherits from the given `prototype` object. If a
	     * `properties` object is provided its own enumerable properties are assigned
	     * to the created object.
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Object} prototype The object to inherit from.
	     * @param {Object} [properties] The properties to assign to the object.
	     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
	     * @returns {Object} Returns the new object.
	     * @example
	     *
	     * function Shape() {
	     *   this.x = 0;
	     *   this.y = 0;
	     * }
	     *
	     * function Circle() {
	     *   Shape.call(this);
	     * }
	     *
	     * Circle.prototype = _.create(Shape.prototype, {
	     *   'constructor': Circle
	     * });
	     *
	     * var circle = new Circle;
	     * circle instanceof Circle;
	     * // => true
	     *
	     * circle instanceof Shape;
	     * // => true
	     */
	    function create(prototype, properties, guard) {
	      var result = baseCreate(prototype);
	      if (guard && isIterateeCall(prototype, properties, guard)) {
	        properties = undefined;
	      }
	      return properties ? baseAssign(result, properties) : result;
	    }

	    /**
	     * Assigns own enumerable properties of source object(s) to the destination
	     * object for all destination properties that resolve to `undefined`. Once a
	     * property is set, additional values of the same property are ignored.
	     *
	     * **Note:** This method mutates `object`.
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The destination object.
	     * @param {...Object} [sources] The source objects.
	     * @returns {Object} Returns `object`.
	     * @example
	     *
	     * _.defaults({ 'user': 'barney' }, { 'age': 36 }, { 'user': 'fred' });
	     * // => { 'user': 'barney', 'age': 36 }
	     */
	    var defaults = createDefaults(assign, assignDefaults);

	    /**
	     * This method is like `_.defaults` except that it recursively assigns
	     * default properties.
	     *
	     * **Note:** This method mutates `object`.
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The destination object.
	     * @param {...Object} [sources] The source objects.
	     * @returns {Object} Returns `object`.
	     * @example
	     *
	     * _.defaultsDeep({ 'user': { 'name': 'barney' } }, { 'user': { 'name': 'fred', 'age': 36 } });
	     * // => { 'user': { 'name': 'barney', 'age': 36 } }
	     *
	     */
	    var defaultsDeep = createDefaults(merge, mergeDefaults);

	    /**
	     * This method is like `_.find` except that it returns the key of the first
	     * element `predicate` returns truthy for instead of the element itself.
	     *
	     * If a property name is provided for `predicate` the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If a value is also provided for `thisArg` the created `_.matchesProperty`
	     * style callback returns `true` for elements that have a matching property
	     * value, else `false`.
	     *
	     * If an object is provided for `predicate` the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The object to search.
	     * @param {Function|Object|string} [predicate=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `predicate`.
	     * @returns {string|undefined} Returns the key of the matched element, else `undefined`.
	     * @example
	     *
	     * var users = {
	     *   'barney':  { 'age': 36, 'active': true },
	     *   'fred':    { 'age': 40, 'active': false },
	     *   'pebbles': { 'age': 1,  'active': true }
	     * };
	     *
	     * _.findKey(users, function(chr) {
	     *   return chr.age < 40;
	     * });
	     * // => 'barney' (iteration order is not guaranteed)
	     *
	     * // using the `_.matches` callback shorthand
	     * _.findKey(users, { 'age': 1, 'active': true });
	     * // => 'pebbles'
	     *
	     * // using the `_.matchesProperty` callback shorthand
	     * _.findKey(users, 'active', false);
	     * // => 'fred'
	     *
	     * // using the `_.property` callback shorthand
	     * _.findKey(users, 'active');
	     * // => 'barney'
	     */
	    var findKey = createFindKey(baseForOwn);

	    /**
	     * This method is like `_.findKey` except that it iterates over elements of
	     * a collection in the opposite order.
	     *
	     * If a property name is provided for `predicate` the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If a value is also provided for `thisArg` the created `_.matchesProperty`
	     * style callback returns `true` for elements that have a matching property
	     * value, else `false`.
	     *
	     * If an object is provided for `predicate` the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The object to search.
	     * @param {Function|Object|string} [predicate=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `predicate`.
	     * @returns {string|undefined} Returns the key of the matched element, else `undefined`.
	     * @example
	     *
	     * var users = {
	     *   'barney':  { 'age': 36, 'active': true },
	     *   'fred':    { 'age': 40, 'active': false },
	     *   'pebbles': { 'age': 1,  'active': true }
	     * };
	     *
	     * _.findLastKey(users, function(chr) {
	     *   return chr.age < 40;
	     * });
	     * // => returns `pebbles` assuming `_.findKey` returns `barney`
	     *
	     * // using the `_.matches` callback shorthand
	     * _.findLastKey(users, { 'age': 36, 'active': true });
	     * // => 'barney'
	     *
	     * // using the `_.matchesProperty` callback shorthand
	     * _.findLastKey(users, 'active', false);
	     * // => 'fred'
	     *
	     * // using the `_.property` callback shorthand
	     * _.findLastKey(users, 'active');
	     * // => 'pebbles'
	     */
	    var findLastKey = createFindKey(baseForOwnRight);

	    /**
	     * Iterates over own and inherited enumerable properties of an object invoking
	     * `iteratee` for each property. The `iteratee` is bound to `thisArg` and invoked
	     * with three arguments: (value, key, object). Iteratee functions may exit
	     * iteration early by explicitly returning `false`.
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The object to iterate over.
	     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {Object} Returns `object`.
	     * @example
	     *
	     * function Foo() {
	     *   this.a = 1;
	     *   this.b = 2;
	     * }
	     *
	     * Foo.prototype.c = 3;
	     *
	     * _.forIn(new Foo, function(value, key) {
	     *   console.log(key);
	     * });
	     * // => logs 'a', 'b', and 'c' (iteration order is not guaranteed)
	     */
	    var forIn = createForIn(baseFor);

	    /**
	     * This method is like `_.forIn` except that it iterates over properties of
	     * `object` in the opposite order.
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The object to iterate over.
	     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {Object} Returns `object`.
	     * @example
	     *
	     * function Foo() {
	     *   this.a = 1;
	     *   this.b = 2;
	     * }
	     *
	     * Foo.prototype.c = 3;
	     *
	     * _.forInRight(new Foo, function(value, key) {
	     *   console.log(key);
	     * });
	     * // => logs 'c', 'b', and 'a' assuming `_.forIn ` logs 'a', 'b', and 'c'
	     */
	    var forInRight = createForIn(baseForRight);

	    /**
	     * Iterates over own enumerable properties of an object invoking `iteratee`
	     * for each property. The `iteratee` is bound to `thisArg` and invoked with
	     * three arguments: (value, key, object). Iteratee functions may exit iteration
	     * early by explicitly returning `false`.
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The object to iterate over.
	     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {Object} Returns `object`.
	     * @example
	     *
	     * function Foo() {
	     *   this.a = 1;
	     *   this.b = 2;
	     * }
	     *
	     * Foo.prototype.c = 3;
	     *
	     * _.forOwn(new Foo, function(value, key) {
	     *   console.log(key);
	     * });
	     * // => logs 'a' and 'b' (iteration order is not guaranteed)
	     */
	    var forOwn = createForOwn(baseForOwn);

	    /**
	     * This method is like `_.forOwn` except that it iterates over properties of
	     * `object` in the opposite order.
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The object to iterate over.
	     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {Object} Returns `object`.
	     * @example
	     *
	     * function Foo() {
	     *   this.a = 1;
	     *   this.b = 2;
	     * }
	     *
	     * Foo.prototype.c = 3;
	     *
	     * _.forOwnRight(new Foo, function(value, key) {
	     *   console.log(key);
	     * });
	     * // => logs 'b' and 'a' assuming `_.forOwn` logs 'a' and 'b'
	     */
	    var forOwnRight = createForOwn(baseForOwnRight);

	    /**
	     * Creates an array of function property names from all enumerable properties,
	     * own and inherited, of `object`.
	     *
	     * @static
	     * @memberOf _
	     * @alias methods
	     * @category Object
	     * @param {Object} object The object to inspect.
	     * @returns {Array} Returns the new array of property names.
	     * @example
	     *
	     * _.functions(_);
	     * // => ['after', 'ary', 'assign', ...]
	     */
	    function functions(object) {
	      return baseFunctions(object, keysIn(object));
	    }

	    /**
	     * Gets the property value at `path` of `object`. If the resolved value is
	     * `undefined` the `defaultValue` is used in its place.
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The object to query.
	     * @param {Array|string} path The path of the property to get.
	     * @param {*} [defaultValue] The value returned if the resolved value is `undefined`.
	     * @returns {*} Returns the resolved value.
	     * @example
	     *
	     * var object = { 'a': [{ 'b': { 'c': 3 } }] };
	     *
	     * _.get(object, 'a[0].b.c');
	     * // => 3
	     *
	     * _.get(object, ['a', '0', 'b', 'c']);
	     * // => 3
	     *
	     * _.get(object, 'a.b.c', 'default');
	     * // => 'default'
	     */
	    function get(object, path, defaultValue) {
	      var result = object == null ? undefined : baseGet(object, toPath(path), path + '');
	      return result === undefined ? defaultValue : result;
	    }

	    /**
	     * Checks if `path` is a direct property.
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The object to query.
	     * @param {Array|string} path The path to check.
	     * @returns {boolean} Returns `true` if `path` is a direct property, else `false`.
	     * @example
	     *
	     * var object = { 'a': { 'b': { 'c': 3 } } };
	     *
	     * _.has(object, 'a');
	     * // => true
	     *
	     * _.has(object, 'a.b.c');
	     * // => true
	     *
	     * _.has(object, ['a', 'b', 'c']);
	     * // => true
	     */
	    function has(object, path) {
	      if (object == null) {
	        return false;
	      }
	      var result = hasOwnProperty.call(object, path);
	      if (!result && !isKey(path)) {
	        path = toPath(path);
	        object = path.length == 1 ? object : baseGet(object, baseSlice(path, 0, -1));
	        if (object == null) {
	          return false;
	        }
	        path = last(path);
	        result = hasOwnProperty.call(object, path);
	      }
	      return result || (isLength(object.length) && isIndex(path, object.length) &&
	        (isArray(object) || isArguments(object)));
	    }

	    /**
	     * Creates an object composed of the inverted keys and values of `object`.
	     * If `object` contains duplicate values, subsequent values overwrite property
	     * assignments of previous values unless `multiValue` is `true`.
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The object to invert.
	     * @param {boolean} [multiValue] Allow multiple values per key.
	     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
	     * @returns {Object} Returns the new inverted object.
	     * @example
	     *
	     * var object = { 'a': 1, 'b': 2, 'c': 1 };
	     *
	     * _.invert(object);
	     * // => { '1': 'c', '2': 'b' }
	     *
	     * // with `multiValue`
	     * _.invert(object, true);
	     * // => { '1': ['a', 'c'], '2': ['b'] }
	     */
	    function invert(object, multiValue, guard) {
	      if (guard && isIterateeCall(object, multiValue, guard)) {
	        multiValue = undefined;
	      }
	      var index = -1,
	          props = keys(object),
	          length = props.length,
	          result = {};

	      while (++index < length) {
	        var key = props[index],
	            value = object[key];

	        if (multiValue) {
	          if (hasOwnProperty.call(result, value)) {
	            result[value].push(key);
	          } else {
	            result[value] = [key];
	          }
	        }
	        else {
	          result[value] = key;
	        }
	      }
	      return result;
	    }

	    /**
	     * Creates an array of the own enumerable property names of `object`.
	     *
	     * **Note:** Non-object values are coerced to objects. See the
	     * [ES spec](http://ecma-international.org/ecma-262/6.0/#sec-object.keys)
	     * for more details.
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The object to query.
	     * @returns {Array} Returns the array of property names.
	     * @example
	     *
	     * function Foo() {
	     *   this.a = 1;
	     *   this.b = 2;
	     * }
	     *
	     * Foo.prototype.c = 3;
	     *
	     * _.keys(new Foo);
	     * // => ['a', 'b'] (iteration order is not guaranteed)
	     *
	     * _.keys('hi');
	     * // => ['0', '1']
	     */
	    var keys = !nativeKeys ? shimKeys : function(object) {
	      var Ctor = object == null ? undefined : object.constructor;
	      if ((typeof Ctor == 'function' && Ctor.prototype === object) ||
	          (typeof object != 'function' && isArrayLike(object))) {
	        return shimKeys(object);
	      }
	      return isObject(object) ? nativeKeys(object) : [];
	    };

	    /**
	     * Creates an array of the own and inherited enumerable property names of `object`.
	     *
	     * **Note:** Non-object values are coerced to objects.
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The object to query.
	     * @returns {Array} Returns the array of property names.
	     * @example
	     *
	     * function Foo() {
	     *   this.a = 1;
	     *   this.b = 2;
	     * }
	     *
	     * Foo.prototype.c = 3;
	     *
	     * _.keysIn(new Foo);
	     * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
	     */
	    function keysIn(object) {
	      if (object == null) {
	        return [];
	      }
	      if (!isObject(object)) {
	        object = Object(object);
	      }
	      var length = object.length;
	      length = (length && isLength(length) &&
	        (isArray(object) || isArguments(object)) && length) || 0;

	      var Ctor = object.constructor,
	          index = -1,
	          isProto = typeof Ctor == 'function' && Ctor.prototype === object,
	          result = Array(length),
	          skipIndexes = length > 0;

	      while (++index < length) {
	        result[index] = (index + '');
	      }
	      for (var key in object) {
	        if (!(skipIndexes && isIndex(key, length)) &&
	            !(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
	          result.push(key);
	        }
	      }
	      return result;
	    }

	    /**
	     * The opposite of `_.mapValues`; this method creates an object with the
	     * same values as `object` and keys generated by running each own enumerable
	     * property of `object` through `iteratee`.
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The object to iterate over.
	     * @param {Function|Object|string} [iteratee=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {Object} Returns the new mapped object.
	     * @example
	     *
	     * _.mapKeys({ 'a': 1, 'b': 2 }, function(value, key) {
	     *   return key + value;
	     * });
	     * // => { 'a1': 1, 'b2': 2 }
	     */
	    var mapKeys = createObjectMapper(true);

	    /**
	     * Creates an object with the same keys as `object` and values generated by
	     * running each own enumerable property of `object` through `iteratee`. The
	     * iteratee function is bound to `thisArg` and invoked with three arguments:
	     * (value, key, object).
	     *
	     * If a property name is provided for `iteratee` the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If a value is also provided for `thisArg` the created `_.matchesProperty`
	     * style callback returns `true` for elements that have a matching property
	     * value, else `false`.
	     *
	     * If an object is provided for `iteratee` the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The object to iterate over.
	     * @param {Function|Object|string} [iteratee=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {Object} Returns the new mapped object.
	     * @example
	     *
	     * _.mapValues({ 'a': 1, 'b': 2 }, function(n) {
	     *   return n * 3;
	     * });
	     * // => { 'a': 3, 'b': 6 }
	     *
	     * var users = {
	     *   'fred':    { 'user': 'fred',    'age': 40 },
	     *   'pebbles': { 'user': 'pebbles', 'age': 1 }
	     * };
	     *
	     * // using the `_.property` callback shorthand
	     * _.mapValues(users, 'age');
	     * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
	     */
	    var mapValues = createObjectMapper();

	    /**
	     * The opposite of `_.pick`; this method creates an object composed of the
	     * own and inherited enumerable properties of `object` that are not omitted.
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The source object.
	     * @param {Function|...(string|string[])} [predicate] The function invoked per
	     *  iteration or property names to omit, specified as individual property
	     *  names or arrays of property names.
	     * @param {*} [thisArg] The `this` binding of `predicate`.
	     * @returns {Object} Returns the new object.
	     * @example
	     *
	     * var object = { 'user': 'fred', 'age': 40 };
	     *
	     * _.omit(object, 'age');
	     * // => { 'user': 'fred' }
	     *
	     * _.omit(object, _.isNumber);
	     * // => { 'user': 'fred' }
	     */
	    var omit = restParam(function(object, props) {
	      if (object == null) {
	        return {};
	      }
	      if (typeof props[0] != 'function') {
	        var props = arrayMap(baseFlatten(props), String);
	        return pickByArray(object, baseDifference(keysIn(object), props));
	      }
	      var predicate = bindCallback(props[0], props[1], 3);
	      return pickByCallback(object, function(value, key, object) {
	        return !predicate(value, key, object);
	      });
	    });

	    /**
	     * Creates a two dimensional array of the key-value pairs for `object`,
	     * e.g. `[[key1, value1], [key2, value2]]`.
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The object to query.
	     * @returns {Array} Returns the new array of key-value pairs.
	     * @example
	     *
	     * _.pairs({ 'barney': 36, 'fred': 40 });
	     * // => [['barney', 36], ['fred', 40]] (iteration order is not guaranteed)
	     */
	    function pairs(object) {
	      object = toObject(object);

	      var index = -1,
	          props = keys(object),
	          length = props.length,
	          result = Array(length);

	      while (++index < length) {
	        var key = props[index];
	        result[index] = [key, object[key]];
	      }
	      return result;
	    }

	    /**
	     * Creates an object composed of the picked `object` properties. Property
	     * names may be specified as individual arguments or as arrays of property
	     * names. If `predicate` is provided it is invoked for each property of `object`
	     * picking the properties `predicate` returns truthy for. The predicate is
	     * bound to `thisArg` and invoked with three arguments: (value, key, object).
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The source object.
	     * @param {Function|...(string|string[])} [predicate] The function invoked per
	     *  iteration or property names to pick, specified as individual property
	     *  names or arrays of property names.
	     * @param {*} [thisArg] The `this` binding of `predicate`.
	     * @returns {Object} Returns the new object.
	     * @example
	     *
	     * var object = { 'user': 'fred', 'age': 40 };
	     *
	     * _.pick(object, 'user');
	     * // => { 'user': 'fred' }
	     *
	     * _.pick(object, _.isString);
	     * // => { 'user': 'fred' }
	     */
	    var pick = restParam(function(object, props) {
	      if (object == null) {
	        return {};
	      }
	      return typeof props[0] == 'function'
	        ? pickByCallback(object, bindCallback(props[0], props[1], 3))
	        : pickByArray(object, baseFlatten(props));
	    });

	    /**
	     * This method is like `_.get` except that if the resolved value is a function
	     * it is invoked with the `this` binding of its parent object and its result
	     * is returned.
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The object to query.
	     * @param {Array|string} path The path of the property to resolve.
	     * @param {*} [defaultValue] The value returned if the resolved value is `undefined`.
	     * @returns {*} Returns the resolved value.
	     * @example
	     *
	     * var object = { 'a': [{ 'b': { 'c1': 3, 'c2': _.constant(4) } }] };
	     *
	     * _.result(object, 'a[0].b.c1');
	     * // => 3
	     *
	     * _.result(object, 'a[0].b.c2');
	     * // => 4
	     *
	     * _.result(object, 'a.b.c', 'default');
	     * // => 'default'
	     *
	     * _.result(object, 'a.b.c', _.constant('default'));
	     * // => 'default'
	     */
	    function result(object, path, defaultValue) {
	      var result = object == null ? undefined : object[path];
	      if (result === undefined) {
	        if (object != null && !isKey(path, object)) {
	          path = toPath(path);
	          object = path.length == 1 ? object : baseGet(object, baseSlice(path, 0, -1));
	          result = object == null ? undefined : object[last(path)];
	        }
	        result = result === undefined ? defaultValue : result;
	      }
	      return isFunction(result) ? result.call(object) : result;
	    }

	    /**
	     * Sets the property value of `path` on `object`. If a portion of `path`
	     * does not exist it is created.
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The object to augment.
	     * @param {Array|string} path The path of the property to set.
	     * @param {*} value The value to set.
	     * @returns {Object} Returns `object`.
	     * @example
	     *
	     * var object = { 'a': [{ 'b': { 'c': 3 } }] };
	     *
	     * _.set(object, 'a[0].b.c', 4);
	     * console.log(object.a[0].b.c);
	     * // => 4
	     *
	     * _.set(object, 'x[0].y.z', 5);
	     * console.log(object.x[0].y.z);
	     * // => 5
	     */
	    function set(object, path, value) {
	      if (object == null) {
	        return object;
	      }
	      var pathKey = (path + '');
	      path = (object[pathKey] != null || isKey(path, object)) ? [pathKey] : toPath(path);

	      var index = -1,
	          length = path.length,
	          lastIndex = length - 1,
	          nested = object;

	      while (nested != null && ++index < length) {
	        var key = path[index];
	        if (isObject(nested)) {
	          if (index == lastIndex) {
	            nested[key] = value;
	          } else if (nested[key] == null) {
	            nested[key] = isIndex(path[index + 1]) ? [] : {};
	          }
	        }
	        nested = nested[key];
	      }
	      return object;
	    }

	    /**
	     * An alternative to `_.reduce`; this method transforms `object` to a new
	     * `accumulator` object which is the result of running each of its own enumerable
	     * properties through `iteratee`, with each invocation potentially mutating
	     * the `accumulator` object. The `iteratee` is bound to `thisArg` and invoked
	     * with four arguments: (accumulator, value, key, object). Iteratee functions
	     * may exit iteration early by explicitly returning `false`.
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Array|Object} object The object to iterate over.
	     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	     * @param {*} [accumulator] The custom accumulator value.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {*} Returns the accumulated value.
	     * @example
	     *
	     * _.transform([2, 3, 4], function(result, n) {
	     *   result.push(n *= n);
	     *   return n % 2 == 0;
	     * });
	     * // => [4, 9]
	     *
	     * _.transform({ 'a': 1, 'b': 2 }, function(result, n, key) {
	     *   result[key] = n * 3;
	     * });
	     * // => { 'a': 3, 'b': 6 }
	     */
	    function transform(object, iteratee, accumulator, thisArg) {
	      var isArr = isArray(object) || isTypedArray(object);
	      iteratee = getCallback(iteratee, thisArg, 4);

	      if (accumulator == null) {
	        if (isArr || isObject(object)) {
	          var Ctor = object.constructor;
	          if (isArr) {
	            accumulator = isArray(object) ? new Ctor : [];
	          } else {
	            accumulator = baseCreate(isFunction(Ctor) ? Ctor.prototype : undefined);
	          }
	        } else {
	          accumulator = {};
	        }
	      }
	      (isArr ? arrayEach : baseForOwn)(object, function(value, index, object) {
	        return iteratee(accumulator, value, index, object);
	      });
	      return accumulator;
	    }

	    /**
	     * Creates an array of the own enumerable property values of `object`.
	     *
	     * **Note:** Non-object values are coerced to objects.
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The object to query.
	     * @returns {Array} Returns the array of property values.
	     * @example
	     *
	     * function Foo() {
	     *   this.a = 1;
	     *   this.b = 2;
	     * }
	     *
	     * Foo.prototype.c = 3;
	     *
	     * _.values(new Foo);
	     * // => [1, 2] (iteration order is not guaranteed)
	     *
	     * _.values('hi');
	     * // => ['h', 'i']
	     */
	    function values(object) {
	      return baseValues(object, keys(object));
	    }

	    /**
	     * Creates an array of the own and inherited enumerable property values
	     * of `object`.
	     *
	     * **Note:** Non-object values are coerced to objects.
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The object to query.
	     * @returns {Array} Returns the array of property values.
	     * @example
	     *
	     * function Foo() {
	     *   this.a = 1;
	     *   this.b = 2;
	     * }
	     *
	     * Foo.prototype.c = 3;
	     *
	     * _.valuesIn(new Foo);
	     * // => [1, 2, 3] (iteration order is not guaranteed)
	     */
	    function valuesIn(object) {
	      return baseValues(object, keysIn(object));
	    }

	    /*------------------------------------------------------------------------*/

	    /**
	     * Checks if `n` is between `start` and up to but not including, `end`. If
	     * `end` is not specified it is set to `start` with `start` then set to `0`.
	     *
	     * @static
	     * @memberOf _
	     * @category Number
	     * @param {number} n The number to check.
	     * @param {number} [start=0] The start of the range.
	     * @param {number} end The end of the range.
	     * @returns {boolean} Returns `true` if `n` is in the range, else `false`.
	     * @example
	     *
	     * _.inRange(3, 2, 4);
	     * // => true
	     *
	     * _.inRange(4, 8);
	     * // => true
	     *
	     * _.inRange(4, 2);
	     * // => false
	     *
	     * _.inRange(2, 2);
	     * // => false
	     *
	     * _.inRange(1.2, 2);
	     * // => true
	     *
	     * _.inRange(5.2, 4);
	     * // => false
	     */
	    function inRange(value, start, end) {
	      start = +start || 0;
	      if (end === undefined) {
	        end = start;
	        start = 0;
	      } else {
	        end = +end || 0;
	      }
	      return value >= nativeMin(start, end) && value < nativeMax(start, end);
	    }

	    /**
	     * Produces a random number between `min` and `max` (inclusive). If only one
	     * argument is provided a number between `0` and the given number is returned.
	     * If `floating` is `true`, or either `min` or `max` are floats, a floating-point
	     * number is returned instead of an integer.
	     *
	     * @static
	     * @memberOf _
	     * @category Number
	     * @param {number} [min=0] The minimum possible value.
	     * @param {number} [max=1] The maximum possible value.
	     * @param {boolean} [floating] Specify returning a floating-point number.
	     * @returns {number} Returns the random number.
	     * @example
	     *
	     * _.random(0, 5);
	     * // => an integer between 0 and 5
	     *
	     * _.random(5);
	     * // => also an integer between 0 and 5
	     *
	     * _.random(5, true);
	     * // => a floating-point number between 0 and 5
	     *
	     * _.random(1.2, 5.2);
	     * // => a floating-point number between 1.2 and 5.2
	     */
	    function random(min, max, floating) {
	      if (floating && isIterateeCall(min, max, floating)) {
	        max = floating = undefined;
	      }
	      var noMin = min == null,
	          noMax = max == null;

	      if (floating == null) {
	        if (noMax && typeof min == 'boolean') {
	          floating = min;
	          min = 1;
	        }
	        else if (typeof max == 'boolean') {
	          floating = max;
	          noMax = true;
	        }
	      }
	      if (noMin && noMax) {
	        max = 1;
	        noMax = false;
	      }
	      min = +min || 0;
	      if (noMax) {
	        max = min;
	        min = 0;
	      } else {
	        max = +max || 0;
	      }
	      if (floating || min % 1 || max % 1) {
	        var rand = nativeRandom();
	        return nativeMin(min + (rand * (max - min + parseFloat('1e-' + ((rand + '').length - 1)))), max);
	      }
	      return baseRandom(min, max);
	    }

	    /*------------------------------------------------------------------------*/

	    /**
	     * Converts `string` to [camel case](https://en.wikipedia.org/wiki/CamelCase).
	     *
	     * @static
	     * @memberOf _
	     * @category String
	     * @param {string} [string=''] The string to convert.
	     * @returns {string} Returns the camel cased string.
	     * @example
	     *
	     * _.camelCase('Foo Bar');
	     * // => 'fooBar'
	     *
	     * _.camelCase('--foo-bar');
	     * // => 'fooBar'
	     *
	     * _.camelCase('__foo_bar__');
	     * // => 'fooBar'
	     */
	    var camelCase = createCompounder(function(result, word, index) {
	      word = word.toLowerCase();
	      return result + (index ? (word.charAt(0).toUpperCase() + word.slice(1)) : word);
	    });

	    /**
	     * Capitalizes the first character of `string`.
	     *
	     * @static
	     * @memberOf _
	     * @category String
	     * @param {string} [string=''] The string to capitalize.
	     * @returns {string} Returns the capitalized string.
	     * @example
	     *
	     * _.capitalize('fred');
	     * // => 'Fred'
	     */
	    function capitalize(string) {
	      string = baseToString(string);
	      return string && (string.charAt(0).toUpperCase() + string.slice(1));
	    }

	    /**
	     * Deburrs `string` by converting [latin-1 supplementary letters](https://en.wikipedia.org/wiki/Latin-1_Supplement_(Unicode_block)#Character_table)
	     * to basic latin letters and removing [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks).
	     *
	     * @static
	     * @memberOf _
	     * @category String
	     * @param {string} [string=''] The string to deburr.
	     * @returns {string} Returns the deburred string.
	     * @example
	     *
	     * _.deburr('déjà vu');
	     * // => 'deja vu'
	     */
	    function deburr(string) {
	      string = baseToString(string);
	      return string && string.replace(reLatin1, deburrLetter).replace(reComboMark, '');
	    }

	    /**
	     * Checks if `string` ends with the given target string.
	     *
	     * @static
	     * @memberOf _
	     * @category String
	     * @param {string} [string=''] The string to search.
	     * @param {string} [target] The string to search for.
	     * @param {number} [position=string.length] The position to search from.
	     * @returns {boolean} Returns `true` if `string` ends with `target`, else `false`.
	     * @example
	     *
	     * _.endsWith('abc', 'c');
	     * // => true
	     *
	     * _.endsWith('abc', 'b');
	     * // => false
	     *
	     * _.endsWith('abc', 'b', 2);
	     * // => true
	     */
	    function endsWith(string, target, position) {
	      string = baseToString(string);
	      target = (target + '');

	      var length = string.length;
	      position = position === undefined
	        ? length
	        : nativeMin(position < 0 ? 0 : (+position || 0), length);

	      position -= target.length;
	      return position >= 0 && string.indexOf(target, position) == position;
	    }

	    /**
	     * Converts the characters "&", "<", ">", '"', "'", and "\`", in `string` to
	     * their corresponding HTML entities.
	     *
	     * **Note:** No other characters are escaped. To escape additional characters
	     * use a third-party library like [_he_](https://mths.be/he).
	     *
	     * Though the ">" character is escaped for symmetry, characters like
	     * ">" and "/" don't need escaping in HTML and have no special meaning
	     * unless they're part of a tag or unquoted attribute value.
	     * See [Mathias Bynens's article](https://mathiasbynens.be/notes/ambiguous-ampersands)
	     * (under "semi-related fun fact") for more details.
	     *
	     * Backticks are escaped because in Internet Explorer < 9, they can break out
	     * of attribute values or HTML comments. See [#59](https://html5sec.org/#59),
	     * [#102](https://html5sec.org/#102), [#108](https://html5sec.org/#108), and
	     * [#133](https://html5sec.org/#133) of the [HTML5 Security Cheatsheet](https://html5sec.org/)
	     * for more details.
	     *
	     * When working with HTML you should always [quote attribute values](http://wonko.com/post/html-escaping)
	     * to reduce XSS vectors.
	     *
	     * @static
	     * @memberOf _
	     * @category String
	     * @param {string} [string=''] The string to escape.
	     * @returns {string} Returns the escaped string.
	     * @example
	     *
	     * _.escape('fred, barney, & pebbles');
	     * // => 'fred, barney, &amp; pebbles'
	     */
	    function escape(string) {
	      // Reset `lastIndex` because in IE < 9 `String#replace` does not.
	      string = baseToString(string);
	      return (string && reHasUnescapedHtml.test(string))
	        ? string.replace(reUnescapedHtml, escapeHtmlChar)
	        : string;
	    }

	    /**
	     * Escapes the `RegExp` special characters "\", "/", "^", "$", ".", "|", "?",
	     * "*", "+", "(", ")", "[", "]", "{" and "}" in `string`.
	     *
	     * @static
	     * @memberOf _
	     * @category String
	     * @param {string} [string=''] The string to escape.
	     * @returns {string} Returns the escaped string.
	     * @example
	     *
	     * _.escapeRegExp('[lodash](https://lodash.com/)');
	     * // => '\[lodash\]\(https:\/\/lodash\.com\/\)'
	     */
	    function escapeRegExp(string) {
	      string = baseToString(string);
	      return (string && reHasRegExpChars.test(string))
	        ? string.replace(reRegExpChars, escapeRegExpChar)
	        : (string || '(?:)');
	    }

	    /**
	     * Converts `string` to [kebab case](https://en.wikipedia.org/wiki/Letter_case#Special_case_styles).
	     *
	     * @static
	     * @memberOf _
	     * @category String
	     * @param {string} [string=''] The string to convert.
	     * @returns {string} Returns the kebab cased string.
	     * @example
	     *
	     * _.kebabCase('Foo Bar');
	     * // => 'foo-bar'
	     *
	     * _.kebabCase('fooBar');
	     * // => 'foo-bar'
	     *
	     * _.kebabCase('__foo_bar__');
	     * // => 'foo-bar'
	     */
	    var kebabCase = createCompounder(function(result, word, index) {
	      return result + (index ? '-' : '') + word.toLowerCase();
	    });

	    /**
	     * Pads `string` on the left and right sides if it's shorter than `length`.
	     * Padding characters are truncated if they can't be evenly divided by `length`.
	     *
	     * @static
	     * @memberOf _
	     * @category String
	     * @param {string} [string=''] The string to pad.
	     * @param {number} [length=0] The padding length.
	     * @param {string} [chars=' '] The string used as padding.
	     * @returns {string} Returns the padded string.
	     * @example
	     *
	     * _.pad('abc', 8);
	     * // => '  abc   '
	     *
	     * _.pad('abc', 8, '_-');
	     * // => '_-abc_-_'
	     *
	     * _.pad('abc', 3);
	     * // => 'abc'
	     */
	    function pad(string, length, chars) {
	      string = baseToString(string);
	      length = +length;

	      var strLength = string.length;
	      if (strLength >= length || !nativeIsFinite(length)) {
	        return string;
	      }
	      var mid = (length - strLength) / 2,
	          leftLength = nativeFloor(mid),
	          rightLength = nativeCeil(mid);

	      chars = createPadding('', rightLength, chars);
	      return chars.slice(0, leftLength) + string + chars;
	    }

	    /**
	     * Pads `string` on the left side if it's shorter than `length`. Padding
	     * characters are truncated if they exceed `length`.
	     *
	     * @static
	     * @memberOf _
	     * @category String
	     * @param {string} [string=''] The string to pad.
	     * @param {number} [length=0] The padding length.
	     * @param {string} [chars=' '] The string used as padding.
	     * @returns {string} Returns the padded string.
	     * @example
	     *
	     * _.padLeft('abc', 6);
	     * // => '   abc'
	     *
	     * _.padLeft('abc', 6, '_-');
	     * // => '_-_abc'
	     *
	     * _.padLeft('abc', 3);
	     * // => 'abc'
	     */
	    var padLeft = createPadDir();

	    /**
	     * Pads `string` on the right side if it's shorter than `length`. Padding
	     * characters are truncated if they exceed `length`.
	     *
	     * @static
	     * @memberOf _
	     * @category String
	     * @param {string} [string=''] The string to pad.
	     * @param {number} [length=0] The padding length.
	     * @param {string} [chars=' '] The string used as padding.
	     * @returns {string} Returns the padded string.
	     * @example
	     *
	     * _.padRight('abc', 6);
	     * // => 'abc   '
	     *
	     * _.padRight('abc', 6, '_-');
	     * // => 'abc_-_'
	     *
	     * _.padRight('abc', 3);
	     * // => 'abc'
	     */
	    var padRight = createPadDir(true);

	    /**
	     * Converts `string` to an integer of the specified radix. If `radix` is
	     * `undefined` or `0`, a `radix` of `10` is used unless `value` is a hexadecimal,
	     * in which case a `radix` of `16` is used.
	     *
	     * **Note:** This method aligns with the [ES5 implementation](https://es5.github.io/#E)
	     * of `parseInt`.
	     *
	     * @static
	     * @memberOf _
	     * @category String
	     * @param {string} string The string to convert.
	     * @param {number} [radix] The radix to interpret `value` by.
	     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
	     * @returns {number} Returns the converted integer.
	     * @example
	     *
	     * _.parseInt('08');
	     * // => 8
	     *
	     * _.map(['6', '08', '10'], _.parseInt);
	     * // => [6, 8, 10]
	     */
	    function parseInt(string, radix, guard) {
	      // Firefox < 21 and Opera < 15 follow ES3 for `parseInt`.
	      // Chrome fails to trim leading <BOM> whitespace characters.
	      // See https://code.google.com/p/v8/issues/detail?id=3109 for more details.
	      if (guard ? isIterateeCall(string, radix, guard) : radix == null) {
	        radix = 0;
	      } else if (radix) {
	        radix = +radix;
	      }
	      string = trim(string);
	      return nativeParseInt(string, radix || (reHasHexPrefix.test(string) ? 16 : 10));
	    }

	    /**
	     * Repeats the given string `n` times.
	     *
	     * @static
	     * @memberOf _
	     * @category String
	     * @param {string} [string=''] The string to repeat.
	     * @param {number} [n=0] The number of times to repeat the string.
	     * @returns {string} Returns the repeated string.
	     * @example
	     *
	     * _.repeat('*', 3);
	     * // => '***'
	     *
	     * _.repeat('abc', 2);
	     * // => 'abcabc'
	     *
	     * _.repeat('abc', 0);
	     * // => ''
	     */
	    function repeat(string, n) {
	      var result = '';
	      string = baseToString(string);
	      n = +n;
	      if (n < 1 || !string || !nativeIsFinite(n)) {
	        return result;
	      }
	      // Leverage the exponentiation by squaring algorithm for a faster repeat.
	      // See https://en.wikipedia.org/wiki/Exponentiation_by_squaring for more details.
	      do {
	        if (n % 2) {
	          result += string;
	        }
	        n = nativeFloor(n / 2);
	        string += string;
	      } while (n);

	      return result;
	    }

	    /**
	     * Converts `string` to [snake case](https://en.wikipedia.org/wiki/Snake_case).
	     *
	     * @static
	     * @memberOf _
	     * @category String
	     * @param {string} [string=''] The string to convert.
	     * @returns {string} Returns the snake cased string.
	     * @example
	     *
	     * _.snakeCase('Foo Bar');
	     * // => 'foo_bar'
	     *
	     * _.snakeCase('fooBar');
	     * // => 'foo_bar'
	     *
	     * _.snakeCase('--foo-bar');
	     * // => 'foo_bar'
	     */
	    var snakeCase = createCompounder(function(result, word, index) {
	      return result + (index ? '_' : '') + word.toLowerCase();
	    });

	    /**
	     * Converts `string` to [start case](https://en.wikipedia.org/wiki/Letter_case#Stylistic_or_specialised_usage).
	     *
	     * @static
	     * @memberOf _
	     * @category String
	     * @param {string} [string=''] The string to convert.
	     * @returns {string} Returns the start cased string.
	     * @example
	     *
	     * _.startCase('--foo-bar');
	     * // => 'Foo Bar'
	     *
	     * _.startCase('fooBar');
	     * // => 'Foo Bar'
	     *
	     * _.startCase('__foo_bar__');
	     * // => 'Foo Bar'
	     */
	    var startCase = createCompounder(function(result, word, index) {
	      return result + (index ? ' ' : '') + (word.charAt(0).toUpperCase() + word.slice(1));
	    });

	    /**
	     * Checks if `string` starts with the given target string.
	     *
	     * @static
	     * @memberOf _
	     * @category String
	     * @param {string} [string=''] The string to search.
	     * @param {string} [target] The string to search for.
	     * @param {number} [position=0] The position to search from.
	     * @returns {boolean} Returns `true` if `string` starts with `target`, else `false`.
	     * @example
	     *
	     * _.startsWith('abc', 'a');
	     * // => true
	     *
	     * _.startsWith('abc', 'b');
	     * // => false
	     *
	     * _.startsWith('abc', 'b', 1);
	     * // => true
	     */
	    function startsWith(string, target, position) {
	      string = baseToString(string);
	      position = position == null
	        ? 0
	        : nativeMin(position < 0 ? 0 : (+position || 0), string.length);

	      return string.lastIndexOf(target, position) == position;
	    }

	    /**
	     * Creates a compiled template function that can interpolate data properties
	     * in "interpolate" delimiters, HTML-escape interpolated data properties in
	     * "escape" delimiters, and execute JavaScript in "evaluate" delimiters. Data
	     * properties may be accessed as free variables in the template. If a setting
	     * object is provided it takes precedence over `_.templateSettings` values.
	     *
	     * **Note:** In the development build `_.template` utilizes
	     * [sourceURLs](http://www.html5rocks.com/en/tutorials/developertools/sourcemaps/#toc-sourceurl)
	     * for easier debugging.
	     *
	     * For more information on precompiling templates see
	     * [lodash's custom builds documentation](https://lodash.com/custom-builds).
	     *
	     * For more information on Chrome extension sandboxes see
	     * [Chrome's extensions documentation](https://developer.chrome.com/extensions/sandboxingEval).
	     *
	     * @static
	     * @memberOf _
	     * @category String
	     * @param {string} [string=''] The template string.
	     * @param {Object} [options] The options object.
	     * @param {RegExp} [options.escape] The HTML "escape" delimiter.
	     * @param {RegExp} [options.evaluate] The "evaluate" delimiter.
	     * @param {Object} [options.imports] An object to import into the template as free variables.
	     * @param {RegExp} [options.interpolate] The "interpolate" delimiter.
	     * @param {string} [options.sourceURL] The sourceURL of the template's compiled source.
	     * @param {string} [options.variable] The data object variable name.
	     * @param- {Object} [otherOptions] Enables the legacy `options` param signature.
	     * @returns {Function} Returns the compiled template function.
	     * @example
	     *
	     * // using the "interpolate" delimiter to create a compiled template
	     * var compiled = _.template('hello <%= user %>!');
	     * compiled({ 'user': 'fred' });
	     * // => 'hello fred!'
	     *
	     * // using the HTML "escape" delimiter to escape data property values
	     * var compiled = _.template('<b><%- value %></b>');
	     * compiled({ 'value': '<script>' });
	     * // => '<b>&lt;script&gt;</b>'
	     *
	     * // using the "evaluate" delimiter to execute JavaScript and generate HTML
	     * var compiled = _.template('<% _.forEach(users, function(user) { %><li><%- user %></li><% }); %>');
	     * compiled({ 'users': ['fred', 'barney'] });
	     * // => '<li>fred</li><li>barney</li>'
	     *
	     * // using the internal `print` function in "evaluate" delimiters
	     * var compiled = _.template('<% print("hello " + user); %>!');
	     * compiled({ 'user': 'barney' });
	     * // => 'hello barney!'
	     *
	     * // using the ES delimiter as an alternative to the default "interpolate" delimiter
	     * var compiled = _.template('hello ${ user }!');
	     * compiled({ 'user': 'pebbles' });
	     * // => 'hello pebbles!'
	     *
	     * // using custom template delimiters
	     * _.templateSettings.interpolate = /{{([\s\S]+?)}}/g;
	     * var compiled = _.template('hello {{ user }}!');
	     * compiled({ 'user': 'mustache' });
	     * // => 'hello mustache!'
	     *
	     * // using backslashes to treat delimiters as plain text
	     * var compiled = _.template('<%= "\\<%- value %\\>" %>');
	     * compiled({ 'value': 'ignored' });
	     * // => '<%- value %>'
	     *
	     * // using the `imports` option to import `jQuery` as `jq`
	     * var text = '<% jq.each(users, function(user) { %><li><%- user %></li><% }); %>';
	     * var compiled = _.template(text, { 'imports': { 'jq': jQuery } });
	     * compiled({ 'users': ['fred', 'barney'] });
	     * // => '<li>fred</li><li>barney</li>'
	     *
	     * // using the `sourceURL` option to specify a custom sourceURL for the template
	     * var compiled = _.template('hello <%= user %>!', { 'sourceURL': '/basic/greeting.jst' });
	     * compiled(data);
	     * // => find the source of "greeting.jst" under the Sources tab or Resources panel of the web inspector
	     *
	     * // using the `variable` option to ensure a with-statement isn't used in the compiled template
	     * var compiled = _.template('hi <%= data.user %>!', { 'variable': 'data' });
	     * compiled.source;
	     * // => function(data) {
	     * //   var __t, __p = '';
	     * //   __p += 'hi ' + ((__t = ( data.user )) == null ? '' : __t) + '!';
	     * //   return __p;
	     * // }
	     *
	     * // using the `source` property to inline compiled templates for meaningful
	     * // line numbers in error messages and a stack trace
	     * fs.writeFileSync(path.join(cwd, 'jst.js'), '\
	     *   var JST = {\
	     *     "main": ' + _.template(mainText).source + '\
	     *   };\
	     * ');
	     */
	    function template(string, options, otherOptions) {
	      // Based on John Resig's `tmpl` implementation (http://ejohn.org/blog/javascript-micro-templating/)
	      // and Laura Doktorova's doT.js (https://github.com/olado/doT).
	      var settings = lodash.templateSettings;

	      if (otherOptions && isIterateeCall(string, options, otherOptions)) {
	        options = otherOptions = undefined;
	      }
	      string = baseToString(string);
	      options = assignWith(baseAssign({}, otherOptions || options), settings, assignOwnDefaults);

	      var imports = assignWith(baseAssign({}, options.imports), settings.imports, assignOwnDefaults),
	          importsKeys = keys(imports),
	          importsValues = baseValues(imports, importsKeys);

	      var isEscaping,
	          isEvaluating,
	          index = 0,
	          interpolate = options.interpolate || reNoMatch,
	          source = "__p += '";

	      // Compile the regexp to match each delimiter.
	      var reDelimiters = RegExp(
	        (options.escape || reNoMatch).source + '|' +
	        interpolate.source + '|' +
	        (interpolate === reInterpolate ? reEsTemplate : reNoMatch).source + '|' +
	        (options.evaluate || reNoMatch).source + '|$'
	      , 'g');

	      // Use a sourceURL for easier debugging.
	      var sourceURL = '//# sourceURL=' +
	        ('sourceURL' in options
	          ? options.sourceURL
	          : ('lodash.templateSources[' + (++templateCounter) + ']')
	        ) + '\n';

	      string.replace(reDelimiters, function(match, escapeValue, interpolateValue, esTemplateValue, evaluateValue, offset) {
	        interpolateValue || (interpolateValue = esTemplateValue);

	        // Escape characters that can't be included in string literals.
	        source += string.slice(index, offset).replace(reUnescapedString, escapeStringChar);

	        // Replace delimiters with snippets.
	        if (escapeValue) {
	          isEscaping = true;
	          source += "' +\n__e(" + escapeValue + ") +\n'";
	        }
	        if (evaluateValue) {
	          isEvaluating = true;
	          source += "';\n" + evaluateValue + ";\n__p += '";
	        }
	        if (interpolateValue) {
	          source += "' +\n((__t = (" + interpolateValue + ")) == null ? '' : __t) +\n'";
	        }
	        index = offset + match.length;

	        // The JS engine embedded in Adobe products requires returning the `match`
	        // string in order to produce the correct `offset` value.
	        return match;
	      });

	      source += "';\n";

	      // If `variable` is not specified wrap a with-statement around the generated
	      // code to add the data object to the top of the scope chain.
	      var variable = options.variable;
	      if (!variable) {
	        source = 'with (obj) {\n' + source + '\n}\n';
	      }
	      // Cleanup code by stripping empty strings.
	      source = (isEvaluating ? source.replace(reEmptyStringLeading, '') : source)
	        .replace(reEmptyStringMiddle, '$1')
	        .replace(reEmptyStringTrailing, '$1;');

	      // Frame code as the function body.
	      source = 'function(' + (variable || 'obj') + ') {\n' +
	        (variable
	          ? ''
	          : 'obj || (obj = {});\n'
	        ) +
	        "var __t, __p = ''" +
	        (isEscaping
	           ? ', __e = _.escape'
	           : ''
	        ) +
	        (isEvaluating
	          ? ', __j = Array.prototype.join;\n' +
	            "function print() { __p += __j.call(arguments, '') }\n"
	          : ';\n'
	        ) +
	        source +
	        'return __p\n}';

	      var result = attempt(function() {
	        return Function(importsKeys, sourceURL + 'return ' + source).apply(undefined, importsValues);
	      });

	      // Provide the compiled function's source by its `toString` method or
	      // the `source` property as a convenience for inlining compiled templates.
	      result.source = source;
	      if (isError(result)) {
	        throw result;
	      }
	      return result;
	    }

	    /**
	     * Removes leading and trailing whitespace or specified characters from `string`.
	     *
	     * @static
	     * @memberOf _
	     * @category String
	     * @param {string} [string=''] The string to trim.
	     * @param {string} [chars=whitespace] The characters to trim.
	     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
	     * @returns {string} Returns the trimmed string.
	     * @example
	     *
	     * _.trim('  abc  ');
	     * // => 'abc'
	     *
	     * _.trim('-_-abc-_-', '_-');
	     * // => 'abc'
	     *
	     * _.map(['  foo  ', '  bar  '], _.trim);
	     * // => ['foo', 'bar']
	     */
	    function trim(string, chars, guard) {
	      var value = string;
	      string = baseToString(string);
	      if (!string) {
	        return string;
	      }
	      if (guard ? isIterateeCall(value, chars, guard) : chars == null) {
	        return string.slice(trimmedLeftIndex(string), trimmedRightIndex(string) + 1);
	      }
	      chars = (chars + '');
	      return string.slice(charsLeftIndex(string, chars), charsRightIndex(string, chars) + 1);
	    }

	    /**
	     * Removes leading whitespace or specified characters from `string`.
	     *
	     * @static
	     * @memberOf _
	     * @category String
	     * @param {string} [string=''] The string to trim.
	     * @param {string} [chars=whitespace] The characters to trim.
	     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
	     * @returns {string} Returns the trimmed string.
	     * @example
	     *
	     * _.trimLeft('  abc  ');
	     * // => 'abc  '
	     *
	     * _.trimLeft('-_-abc-_-', '_-');
	     * // => 'abc-_-'
	     */
	    function trimLeft(string, chars, guard) {
	      var value = string;
	      string = baseToString(string);
	      if (!string) {
	        return string;
	      }
	      if (guard ? isIterateeCall(value, chars, guard) : chars == null) {
	        return string.slice(trimmedLeftIndex(string));
	      }
	      return string.slice(charsLeftIndex(string, (chars + '')));
	    }

	    /**
	     * Removes trailing whitespace or specified characters from `string`.
	     *
	     * @static
	     * @memberOf _
	     * @category String
	     * @param {string} [string=''] The string to trim.
	     * @param {string} [chars=whitespace] The characters to trim.
	     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
	     * @returns {string} Returns the trimmed string.
	     * @example
	     *
	     * _.trimRight('  abc  ');
	     * // => '  abc'
	     *
	     * _.trimRight('-_-abc-_-', '_-');
	     * // => '-_-abc'
	     */
	    function trimRight(string, chars, guard) {
	      var value = string;
	      string = baseToString(string);
	      if (!string) {
	        return string;
	      }
	      if (guard ? isIterateeCall(value, chars, guard) : chars == null) {
	        return string.slice(0, trimmedRightIndex(string) + 1);
	      }
	      return string.slice(0, charsRightIndex(string, (chars + '')) + 1);
	    }

	    /**
	     * Truncates `string` if it's longer than the given maximum string length.
	     * The last characters of the truncated string are replaced with the omission
	     * string which defaults to "...".
	     *
	     * @static
	     * @memberOf _
	     * @category String
	     * @param {string} [string=''] The string to truncate.
	     * @param {Object|number} [options] The options object or maximum string length.
	     * @param {number} [options.length=30] The maximum string length.
	     * @param {string} [options.omission='...'] The string to indicate text is omitted.
	     * @param {RegExp|string} [options.separator] The separator pattern to truncate to.
	     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
	     * @returns {string} Returns the truncated string.
	     * @example
	     *
	     * _.trunc('hi-diddly-ho there, neighborino');
	     * // => 'hi-diddly-ho there, neighbo...'
	     *
	     * _.trunc('hi-diddly-ho there, neighborino', 24);
	     * // => 'hi-diddly-ho there, n...'
	     *
	     * _.trunc('hi-diddly-ho there, neighborino', {
	     *   'length': 24,
	     *   'separator': ' '
	     * });
	     * // => 'hi-diddly-ho there,...'
	     *
	     * _.trunc('hi-diddly-ho there, neighborino', {
	     *   'length': 24,
	     *   'separator': /,? +/
	     * });
	     * // => 'hi-diddly-ho there...'
	     *
	     * _.trunc('hi-diddly-ho there, neighborino', {
	     *   'omission': ' [...]'
	     * });
	     * // => 'hi-diddly-ho there, neig [...]'
	     */
	    function trunc(string, options, guard) {
	      if (guard && isIterateeCall(string, options, guard)) {
	        options = undefined;
	      }
	      var length = DEFAULT_TRUNC_LENGTH,
	          omission = DEFAULT_TRUNC_OMISSION;

	      if (options != null) {
	        if (isObject(options)) {
	          var separator = 'separator' in options ? options.separator : separator;
	          length = 'length' in options ? (+options.length || 0) : length;
	          omission = 'omission' in options ? baseToString(options.omission) : omission;
	        } else {
	          length = +options || 0;
	        }
	      }
	      string = baseToString(string);
	      if (length >= string.length) {
	        return string;
	      }
	      var end = length - omission.length;
	      if (end < 1) {
	        return omission;
	      }
	      var result = string.slice(0, end);
	      if (separator == null) {
	        return result + omission;
	      }
	      if (isRegExp(separator)) {
	        if (string.slice(end).search(separator)) {
	          var match,
	              newEnd,
	              substring = string.slice(0, end);

	          if (!separator.global) {
	            separator = RegExp(separator.source, (reFlags.exec(separator) || '') + 'g');
	          }
	          separator.lastIndex = 0;
	          while ((match = separator.exec(substring))) {
	            newEnd = match.index;
	          }
	          result = result.slice(0, newEnd == null ? end : newEnd);
	        }
	      } else if (string.indexOf(separator, end) != end) {
	        var index = result.lastIndexOf(separator);
	        if (index > -1) {
	          result = result.slice(0, index);
	        }
	      }
	      return result + omission;
	    }

	    /**
	     * The inverse of `_.escape`; this method converts the HTML entities
	     * `&amp;`, `&lt;`, `&gt;`, `&quot;`, `&#39;`, and `&#96;` in `string` to their
	     * corresponding characters.
	     *
	     * **Note:** No other HTML entities are unescaped. To unescape additional HTML
	     * entities use a third-party library like [_he_](https://mths.be/he).
	     *
	     * @static
	     * @memberOf _
	     * @category String
	     * @param {string} [string=''] The string to unescape.
	     * @returns {string} Returns the unescaped string.
	     * @example
	     *
	     * _.unescape('fred, barney, &amp; pebbles');
	     * // => 'fred, barney, & pebbles'
	     */
	    function unescape(string) {
	      string = baseToString(string);
	      return (string && reHasEscapedHtml.test(string))
	        ? string.replace(reEscapedHtml, unescapeHtmlChar)
	        : string;
	    }

	    /**
	     * Splits `string` into an array of its words.
	     *
	     * @static
	     * @memberOf _
	     * @category String
	     * @param {string} [string=''] The string to inspect.
	     * @param {RegExp|string} [pattern] The pattern to match words.
	     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
	     * @returns {Array} Returns the words of `string`.
	     * @example
	     *
	     * _.words('fred, barney, & pebbles');
	     * // => ['fred', 'barney', 'pebbles']
	     *
	     * _.words('fred, barney, & pebbles', /[^, ]+/g);
	     * // => ['fred', 'barney', '&', 'pebbles']
	     */
	    function words(string, pattern, guard) {
	      if (guard && isIterateeCall(string, pattern, guard)) {
	        pattern = undefined;
	      }
	      string = baseToString(string);
	      return string.match(pattern || reWords) || [];
	    }

	    /*------------------------------------------------------------------------*/

	    /**
	     * Attempts to invoke `func`, returning either the result or the caught error
	     * object. Any additional arguments are provided to `func` when it is invoked.
	     *
	     * @static
	     * @memberOf _
	     * @category Utility
	     * @param {Function} func The function to attempt.
	     * @returns {*} Returns the `func` result or error object.
	     * @example
	     *
	     * // avoid throwing errors for invalid selectors
	     * var elements = _.attempt(function(selector) {
	     *   return document.querySelectorAll(selector);
	     * }, '>_>');
	     *
	     * if (_.isError(elements)) {
	     *   elements = [];
	     * }
	     */
	    var attempt = restParam(function(func, args) {
	      try {
	        return func.apply(undefined, args);
	      } catch(e) {
	        return isError(e) ? e : new Error(e);
	      }
	    });

	    /**
	     * Creates a function that invokes `func` with the `this` binding of `thisArg`
	     * and arguments of the created function. If `func` is a property name the
	     * created callback returns the property value for a given element. If `func`
	     * is an object the created callback returns `true` for elements that contain
	     * the equivalent object properties, otherwise it returns `false`.
	     *
	     * @static
	     * @memberOf _
	     * @alias iteratee
	     * @category Utility
	     * @param {*} [func=_.identity] The value to convert to a callback.
	     * @param {*} [thisArg] The `this` binding of `func`.
	     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
	     * @returns {Function} Returns the callback.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney', 'age': 36 },
	     *   { 'user': 'fred',   'age': 40 }
	     * ];
	     *
	     * // wrap to create custom callback shorthands
	     * _.callback = _.wrap(_.callback, function(callback, func, thisArg) {
	     *   var match = /^(.+?)__([gl]t)(.+)$/.exec(func);
	     *   if (!match) {
	     *     return callback(func, thisArg);
	     *   }
	     *   return function(object) {
	     *     return match[2] == 'gt'
	     *       ? object[match[1]] > match[3]
	     *       : object[match[1]] < match[3];
	     *   };
	     * });
	     *
	     * _.filter(users, 'age__gt36');
	     * // => [{ 'user': 'fred', 'age': 40 }]
	     */
	    function callback(func, thisArg, guard) {
	      if (guard && isIterateeCall(func, thisArg, guard)) {
	        thisArg = undefined;
	      }
	      return isObjectLike(func)
	        ? matches(func)
	        : baseCallback(func, thisArg);
	    }

	    /**
	     * Creates a function that returns `value`.
	     *
	     * @static
	     * @memberOf _
	     * @category Utility
	     * @param {*} value The value to return from the new function.
	     * @returns {Function} Returns the new function.
	     * @example
	     *
	     * var object = { 'user': 'fred' };
	     * var getter = _.constant(object);
	     *
	     * getter() === object;
	     * // => true
	     */
	    function constant(value) {
	      return function() {
	        return value;
	      };
	    }

	    /**
	     * This method returns the first argument provided to it.
	     *
	     * @static
	     * @memberOf _
	     * @category Utility
	     * @param {*} value Any value.
	     * @returns {*} Returns `value`.
	     * @example
	     *
	     * var object = { 'user': 'fred' };
	     *
	     * _.identity(object) === object;
	     * // => true
	     */
	    function identity(value) {
	      return value;
	    }

	    /**
	     * Creates a function that performs a deep comparison between a given object
	     * and `source`, returning `true` if the given object has equivalent property
	     * values, else `false`.
	     *
	     * **Note:** This method supports comparing arrays, booleans, `Date` objects,
	     * numbers, `Object` objects, regexes, and strings. Objects are compared by
	     * their own, not inherited, enumerable properties. For comparing a single
	     * own or inherited property value see `_.matchesProperty`.
	     *
	     * @static
	     * @memberOf _
	     * @category Utility
	     * @param {Object} source The object of property values to match.
	     * @returns {Function} Returns the new function.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney', 'age': 36, 'active': true },
	     *   { 'user': 'fred',   'age': 40, 'active': false }
	     * ];
	     *
	     * _.filter(users, _.matches({ 'age': 40, 'active': false }));
	     * // => [{ 'user': 'fred', 'age': 40, 'active': false }]
	     */
	    function matches(source) {
	      return baseMatches(baseClone(source, true));
	    }

	    /**
	     * Creates a function that compares the property value of `path` on a given
	     * object to `value`.
	     *
	     * **Note:** This method supports comparing arrays, booleans, `Date` objects,
	     * numbers, `Object` objects, regexes, and strings. Objects are compared by
	     * their own, not inherited, enumerable properties.
	     *
	     * @static
	     * @memberOf _
	     * @category Utility
	     * @param {Array|string} path The path of the property to get.
	     * @param {*} srcValue The value to match.
	     * @returns {Function} Returns the new function.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney' },
	     *   { 'user': 'fred' }
	     * ];
	     *
	     * _.find(users, _.matchesProperty('user', 'fred'));
	     * // => { 'user': 'fred' }
	     */
	    function matchesProperty(path, srcValue) {
	      return baseMatchesProperty(path, baseClone(srcValue, true));
	    }

	    /**
	     * Creates a function that invokes the method at `path` on a given object.
	     * Any additional arguments are provided to the invoked method.
	     *
	     * @static
	     * @memberOf _
	     * @category Utility
	     * @param {Array|string} path The path of the method to invoke.
	     * @param {...*} [args] The arguments to invoke the method with.
	     * @returns {Function} Returns the new function.
	     * @example
	     *
	     * var objects = [
	     *   { 'a': { 'b': { 'c': _.constant(2) } } },
	     *   { 'a': { 'b': { 'c': _.constant(1) } } }
	     * ];
	     *
	     * _.map(objects, _.method('a.b.c'));
	     * // => [2, 1]
	     *
	     * _.invoke(_.sortBy(objects, _.method(['a', 'b', 'c'])), 'a.b.c');
	     * // => [1, 2]
	     */
	    var method = restParam(function(path, args) {
	      return function(object) {
	        return invokePath(object, path, args);
	      };
	    });

	    /**
	     * The opposite of `_.method`; this method creates a function that invokes
	     * the method at a given path on `object`. Any additional arguments are
	     * provided to the invoked method.
	     *
	     * @static
	     * @memberOf _
	     * @category Utility
	     * @param {Object} object The object to query.
	     * @param {...*} [args] The arguments to invoke the method with.
	     * @returns {Function} Returns the new function.
	     * @example
	     *
	     * var array = _.times(3, _.constant),
	     *     object = { 'a': array, 'b': array, 'c': array };
	     *
	     * _.map(['a[2]', 'c[0]'], _.methodOf(object));
	     * // => [2, 0]
	     *
	     * _.map([['a', '2'], ['c', '0']], _.methodOf(object));
	     * // => [2, 0]
	     */
	    var methodOf = restParam(function(object, args) {
	      return function(path) {
	        return invokePath(object, path, args);
	      };
	    });

	    /**
	     * Adds all own enumerable function properties of a source object to the
	     * destination object. If `object` is a function then methods are added to
	     * its prototype as well.
	     *
	     * **Note:** Use `_.runInContext` to create a pristine `lodash` function to
	     * avoid conflicts caused by modifying the original.
	     *
	     * @static
	     * @memberOf _
	     * @category Utility
	     * @param {Function|Object} [object=lodash] The destination object.
	     * @param {Object} source The object of functions to add.
	     * @param {Object} [options] The options object.
	     * @param {boolean} [options.chain=true] Specify whether the functions added
	     *  are chainable.
	     * @returns {Function|Object} Returns `object`.
	     * @example
	     *
	     * function vowels(string) {
	     *   return _.filter(string, function(v) {
	     *     return /[aeiou]/i.test(v);
	     *   });
	     * }
	     *
	     * _.mixin({ 'vowels': vowels });
	     * _.vowels('fred');
	     * // => ['e']
	     *
	     * _('fred').vowels().value();
	     * // => ['e']
	     *
	     * _.mixin({ 'vowels': vowels }, { 'chain': false });
	     * _('fred').vowels();
	     * // => ['e']
	     */
	    function mixin(object, source, options) {
	      if (options == null) {
	        var isObj = isObject(source),
	            props = isObj ? keys(source) : undefined,
	            methodNames = (props && props.length) ? baseFunctions(source, props) : undefined;

	        if (!(methodNames ? methodNames.length : isObj)) {
	          methodNames = false;
	          options = source;
	          source = object;
	          object = this;
	        }
	      }
	      if (!methodNames) {
	        methodNames = baseFunctions(source, keys(source));
	      }
	      var chain = true,
	          index = -1,
	          isFunc = isFunction(object),
	          length = methodNames.length;

	      if (options === false) {
	        chain = false;
	      } else if (isObject(options) && 'chain' in options) {
	        chain = options.chain;
	      }
	      while (++index < length) {
	        var methodName = methodNames[index],
	            func = source[methodName];

	        object[methodName] = func;
	        if (isFunc) {
	          object.prototype[methodName] = (function(func) {
	            return function() {
	              var chainAll = this.__chain__;
	              if (chain || chainAll) {
	                var result = object(this.__wrapped__),
	                    actions = result.__actions__ = arrayCopy(this.__actions__);

	                actions.push({ 'func': func, 'args': arguments, 'thisArg': object });
	                result.__chain__ = chainAll;
	                return result;
	              }
	              return func.apply(object, arrayPush([this.value()], arguments));
	            };
	          }(func));
	        }
	      }
	      return object;
	    }

	    /**
	     * Reverts the `_` variable to its previous value and returns a reference to
	     * the `lodash` function.
	     *
	     * @static
	     * @memberOf _
	     * @category Utility
	     * @returns {Function} Returns the `lodash` function.
	     * @example
	     *
	     * var lodash = _.noConflict();
	     */
	    function noConflict() {
	      root._ = oldDash;
	      return this;
	    }

	    /**
	     * A no-operation function that returns `undefined` regardless of the
	     * arguments it receives.
	     *
	     * @static
	     * @memberOf _
	     * @category Utility
	     * @example
	     *
	     * var object = { 'user': 'fred' };
	     *
	     * _.noop(object) === undefined;
	     * // => true
	     */
	    function noop() {
	      // No operation performed.
	    }

	    /**
	     * Creates a function that returns the property value at `path` on a
	     * given object.
	     *
	     * @static
	     * @memberOf _
	     * @category Utility
	     * @param {Array|string} path The path of the property to get.
	     * @returns {Function} Returns the new function.
	     * @example
	     *
	     * var objects = [
	     *   { 'a': { 'b': { 'c': 2 } } },
	     *   { 'a': { 'b': { 'c': 1 } } }
	     * ];
	     *
	     * _.map(objects, _.property('a.b.c'));
	     * // => [2, 1]
	     *
	     * _.pluck(_.sortBy(objects, _.property(['a', 'b', 'c'])), 'a.b.c');
	     * // => [1, 2]
	     */
	    function property(path) {
	      return isKey(path) ? baseProperty(path) : basePropertyDeep(path);
	    }

	    /**
	     * The opposite of `_.property`; this method creates a function that returns
	     * the property value at a given path on `object`.
	     *
	     * @static
	     * @memberOf _
	     * @category Utility
	     * @param {Object} object The object to query.
	     * @returns {Function} Returns the new function.
	     * @example
	     *
	     * var array = [0, 1, 2],
	     *     object = { 'a': array, 'b': array, 'c': array };
	     *
	     * _.map(['a[2]', 'c[0]'], _.propertyOf(object));
	     * // => [2, 0]
	     *
	     * _.map([['a', '2'], ['c', '0']], _.propertyOf(object));
	     * // => [2, 0]
	     */
	    function propertyOf(object) {
	      return function(path) {
	        return baseGet(object, toPath(path), path + '');
	      };
	    }

	    /**
	     * Creates an array of numbers (positive and/or negative) progressing from
	     * `start` up to, but not including, `end`. If `end` is not specified it is
	     * set to `start` with `start` then set to `0`. If `end` is less than `start`
	     * a zero-length range is created unless a negative `step` is specified.
	     *
	     * @static
	     * @memberOf _
	     * @category Utility
	     * @param {number} [start=0] The start of the range.
	     * @param {number} end The end of the range.
	     * @param {number} [step=1] The value to increment or decrement by.
	     * @returns {Array} Returns the new array of numbers.
	     * @example
	     *
	     * _.range(4);
	     * // => [0, 1, 2, 3]
	     *
	     * _.range(1, 5);
	     * // => [1, 2, 3, 4]
	     *
	     * _.range(0, 20, 5);
	     * // => [0, 5, 10, 15]
	     *
	     * _.range(0, -4, -1);
	     * // => [0, -1, -2, -3]
	     *
	     * _.range(1, 4, 0);
	     * // => [1, 1, 1]
	     *
	     * _.range(0);
	     * // => []
	     */
	    function range(start, end, step) {
	      if (step && isIterateeCall(start, end, step)) {
	        end = step = undefined;
	      }
	      start = +start || 0;
	      step = step == null ? 1 : (+step || 0);

	      if (end == null) {
	        end = start;
	        start = 0;
	      } else {
	        end = +end || 0;
	      }
	      // Use `Array(length)` so engines like Chakra and V8 avoid slower modes.
	      // See https://youtu.be/XAqIpGU8ZZk#t=17m25s for more details.
	      var index = -1,
	          length = nativeMax(nativeCeil((end - start) / (step || 1)), 0),
	          result = Array(length);

	      while (++index < length) {
	        result[index] = start;
	        start += step;
	      }
	      return result;
	    }

	    /**
	     * Invokes the iteratee function `n` times, returning an array of the results
	     * of each invocation. The `iteratee` is bound to `thisArg` and invoked with
	     * one argument; (index).
	     *
	     * @static
	     * @memberOf _
	     * @category Utility
	     * @param {number} n The number of times to invoke `iteratee`.
	     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {Array} Returns the array of results.
	     * @example
	     *
	     * var diceRolls = _.times(3, _.partial(_.random, 1, 6, false));
	     * // => [3, 6, 4]
	     *
	     * _.times(3, function(n) {
	     *   mage.castSpell(n);
	     * });
	     * // => invokes `mage.castSpell(n)` three times with `n` of `0`, `1`, and `2`
	     *
	     * _.times(3, function(n) {
	     *   this.cast(n);
	     * }, mage);
	     * // => also invokes `mage.castSpell(n)` three times
	     */
	    function times(n, iteratee, thisArg) {
	      n = nativeFloor(n);

	      // Exit early to avoid a JSC JIT bug in Safari 8
	      // where `Array(0)` is treated as `Array(1)`.
	      if (n < 1 || !nativeIsFinite(n)) {
	        return [];
	      }
	      var index = -1,
	          result = Array(nativeMin(n, MAX_ARRAY_LENGTH));

	      iteratee = bindCallback(iteratee, thisArg, 1);
	      while (++index < n) {
	        if (index < MAX_ARRAY_LENGTH) {
	          result[index] = iteratee(index);
	        } else {
	          iteratee(index);
	        }
	      }
	      return result;
	    }

	    /**
	     * Generates a unique ID. If `prefix` is provided the ID is appended to it.
	     *
	     * @static
	     * @memberOf _
	     * @category Utility
	     * @param {string} [prefix] The value to prefix the ID with.
	     * @returns {string} Returns the unique ID.
	     * @example
	     *
	     * _.uniqueId('contact_');
	     * // => 'contact_104'
	     *
	     * _.uniqueId();
	     * // => '105'
	     */
	    function uniqueId(prefix) {
	      var id = ++idCounter;
	      return baseToString(prefix) + id;
	    }

	    /*------------------------------------------------------------------------*/

	    /**
	     * Adds two numbers.
	     *
	     * @static
	     * @memberOf _
	     * @category Math
	     * @param {number} augend The first number to add.
	     * @param {number} addend The second number to add.
	     * @returns {number} Returns the sum.
	     * @example
	     *
	     * _.add(6, 4);
	     * // => 10
	     */
	    function add(augend, addend) {
	      return (+augend || 0) + (+addend || 0);
	    }

	    /**
	     * Calculates `n` rounded up to `precision`.
	     *
	     * @static
	     * @memberOf _
	     * @category Math
	     * @param {number} n The number to round up.
	     * @param {number} [precision=0] The precision to round up to.
	     * @returns {number} Returns the rounded up number.
	     * @example
	     *
	     * _.ceil(4.006);
	     * // => 5
	     *
	     * _.ceil(6.004, 2);
	     * // => 6.01
	     *
	     * _.ceil(6040, -2);
	     * // => 6100
	     */
	    var ceil = createRound('ceil');

	    /**
	     * Calculates `n` rounded down to `precision`.
	     *
	     * @static
	     * @memberOf _
	     * @category Math
	     * @param {number} n The number to round down.
	     * @param {number} [precision=0] The precision to round down to.
	     * @returns {number} Returns the rounded down number.
	     * @example
	     *
	     * _.floor(4.006);
	     * // => 4
	     *
	     * _.floor(0.046, 2);
	     * // => 0.04
	     *
	     * _.floor(4060, -2);
	     * // => 4000
	     */
	    var floor = createRound('floor');

	    /**
	     * Gets the maximum value of `collection`. If `collection` is empty or falsey
	     * `-Infinity` is returned. If an iteratee function is provided it is invoked
	     * for each value in `collection` to generate the criterion by which the value
	     * is ranked. The `iteratee` is bound to `thisArg` and invoked with three
	     * arguments: (value, index, collection).
	     *
	     * If a property name is provided for `iteratee` the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If a value is also provided for `thisArg` the created `_.matchesProperty`
	     * style callback returns `true` for elements that have a matching property
	     * value, else `false`.
	     *
	     * If an object is provided for `iteratee` the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * @static
	     * @memberOf _
	     * @category Math
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function|Object|string} [iteratee] The function invoked per iteration.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {*} Returns the maximum value.
	     * @example
	     *
	     * _.max([4, 2, 8, 6]);
	     * // => 8
	     *
	     * _.max([]);
	     * // => -Infinity
	     *
	     * var users = [
	     *   { 'user': 'barney', 'age': 36 },
	     *   { 'user': 'fred',   'age': 40 }
	     * ];
	     *
	     * _.max(users, function(chr) {
	     *   return chr.age;
	     * });
	     * // => { 'user': 'fred', 'age': 40 }
	     *
	     * // using the `_.property` callback shorthand
	     * _.max(users, 'age');
	     * // => { 'user': 'fred', 'age': 40 }
	     */
	    var max = createExtremum(gt, NEGATIVE_INFINITY);

	    /**
	     * Gets the minimum value of `collection`. If `collection` is empty or falsey
	     * `Infinity` is returned. If an iteratee function is provided it is invoked
	     * for each value in `collection` to generate the criterion by which the value
	     * is ranked. The `iteratee` is bound to `thisArg` and invoked with three
	     * arguments: (value, index, collection).
	     *
	     * If a property name is provided for `iteratee` the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If a value is also provided for `thisArg` the created `_.matchesProperty`
	     * style callback returns `true` for elements that have a matching property
	     * value, else `false`.
	     *
	     * If an object is provided for `iteratee` the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * @static
	     * @memberOf _
	     * @category Math
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function|Object|string} [iteratee] The function invoked per iteration.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {*} Returns the minimum value.
	     * @example
	     *
	     * _.min([4, 2, 8, 6]);
	     * // => 2
	     *
	     * _.min([]);
	     * // => Infinity
	     *
	     * var users = [
	     *   { 'user': 'barney', 'age': 36 },
	     *   { 'user': 'fred',   'age': 40 }
	     * ];
	     *
	     * _.min(users, function(chr) {
	     *   return chr.age;
	     * });
	     * // => { 'user': 'barney', 'age': 36 }
	     *
	     * // using the `_.property` callback shorthand
	     * _.min(users, 'age');
	     * // => { 'user': 'barney', 'age': 36 }
	     */
	    var min = createExtremum(lt, POSITIVE_INFINITY);

	    /**
	     * Calculates `n` rounded to `precision`.
	     *
	     * @static
	     * @memberOf _
	     * @category Math
	     * @param {number} n The number to round.
	     * @param {number} [precision=0] The precision to round to.
	     * @returns {number} Returns the rounded number.
	     * @example
	     *
	     * _.round(4.006);
	     * // => 4
	     *
	     * _.round(4.006, 2);
	     * // => 4.01
	     *
	     * _.round(4060, -2);
	     * // => 4100
	     */
	    var round = createRound('round');

	    /**
	     * Gets the sum of the values in `collection`.
	     *
	     * @static
	     * @memberOf _
	     * @category Math
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function|Object|string} [iteratee] The function invoked per iteration.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {number} Returns the sum.
	     * @example
	     *
	     * _.sum([4, 6]);
	     * // => 10
	     *
	     * _.sum({ 'a': 4, 'b': 6 });
	     * // => 10
	     *
	     * var objects = [
	     *   { 'n': 4 },
	     *   { 'n': 6 }
	     * ];
	     *
	     * _.sum(objects, function(object) {
	     *   return object.n;
	     * });
	     * // => 10
	     *
	     * // using the `_.property` callback shorthand
	     * _.sum(objects, 'n');
	     * // => 10
	     */
	    function sum(collection, iteratee, thisArg) {
	      if (thisArg && isIterateeCall(collection, iteratee, thisArg)) {
	        iteratee = undefined;
	      }
	      iteratee = getCallback(iteratee, thisArg, 3);
	      return iteratee.length == 1
	        ? arraySum(isArray(collection) ? collection : toIterable(collection), iteratee)
	        : baseSum(collection, iteratee);
	    }

	    /*------------------------------------------------------------------------*/

	    // Ensure wrappers are instances of `baseLodash`.
	    lodash.prototype = baseLodash.prototype;

	    LodashWrapper.prototype = baseCreate(baseLodash.prototype);
	    LodashWrapper.prototype.constructor = LodashWrapper;

	    LazyWrapper.prototype = baseCreate(baseLodash.prototype);
	    LazyWrapper.prototype.constructor = LazyWrapper;

	    // Add functions to the `Map` cache.
	    MapCache.prototype['delete'] = mapDelete;
	    MapCache.prototype.get = mapGet;
	    MapCache.prototype.has = mapHas;
	    MapCache.prototype.set = mapSet;

	    // Add functions to the `Set` cache.
	    SetCache.prototype.push = cachePush;

	    // Assign cache to `_.memoize`.
	    memoize.Cache = MapCache;

	    // Add functions that return wrapped values when chaining.
	    lodash.after = after;
	    lodash.ary = ary;
	    lodash.assign = assign;
	    lodash.at = at;
	    lodash.before = before;
	    lodash.bind = bind;
	    lodash.bindAll = bindAll;
	    lodash.bindKey = bindKey;
	    lodash.callback = callback;
	    lodash.chain = chain;
	    lodash.chunk = chunk;
	    lodash.compact = compact;
	    lodash.constant = constant;
	    lodash.countBy = countBy;
	    lodash.create = create;
	    lodash.curry = curry;
	    lodash.curryRight = curryRight;
	    lodash.debounce = debounce;
	    lodash.defaults = defaults;
	    lodash.defaultsDeep = defaultsDeep;
	    lodash.defer = defer;
	    lodash.delay = delay;
	    lodash.difference = difference;
	    lodash.drop = drop;
	    lodash.dropRight = dropRight;
	    lodash.dropRightWhile = dropRightWhile;
	    lodash.dropWhile = dropWhile;
	    lodash.fill = fill;
	    lodash.filter = filter;
	    lodash.flatten = flatten;
	    lodash.flattenDeep = flattenDeep;
	    lodash.flow = flow;
	    lodash.flowRight = flowRight;
	    lodash.forEach = forEach;
	    lodash.forEachRight = forEachRight;
	    lodash.forIn = forIn;
	    lodash.forInRight = forInRight;
	    lodash.forOwn = forOwn;
	    lodash.forOwnRight = forOwnRight;
	    lodash.functions = functions;
	    lodash.groupBy = groupBy;
	    lodash.indexBy = indexBy;
	    lodash.initial = initial;
	    lodash.intersection = intersection;
	    lodash.invert = invert;
	    lodash.invoke = invoke;
	    lodash.keys = keys;
	    lodash.keysIn = keysIn;
	    lodash.map = map;
	    lodash.mapKeys = mapKeys;
	    lodash.mapValues = mapValues;
	    lodash.matches = matches;
	    lodash.matchesProperty = matchesProperty;
	    lodash.memoize = memoize;
	    lodash.merge = merge;
	    lodash.method = method;
	    lodash.methodOf = methodOf;
	    lodash.mixin = mixin;
	    lodash.modArgs = modArgs;
	    lodash.negate = negate;
	    lodash.omit = omit;
	    lodash.once = once;
	    lodash.pairs = pairs;
	    lodash.partial = partial;
	    lodash.partialRight = partialRight;
	    lodash.partition = partition;
	    lodash.pick = pick;
	    lodash.pluck = pluck;
	    lodash.property = property;
	    lodash.propertyOf = propertyOf;
	    lodash.pull = pull;
	    lodash.pullAt = pullAt;
	    lodash.range = range;
	    lodash.rearg = rearg;
	    lodash.reject = reject;
	    lodash.remove = remove;
	    lodash.rest = rest;
	    lodash.restParam = restParam;
	    lodash.set = set;
	    lodash.shuffle = shuffle;
	    lodash.slice = slice;
	    lodash.sortBy = sortBy;
	    lodash.sortByAll = sortByAll;
	    lodash.sortByOrder = sortByOrder;
	    lodash.spread = spread;
	    lodash.take = take;
	    lodash.takeRight = takeRight;
	    lodash.takeRightWhile = takeRightWhile;
	    lodash.takeWhile = takeWhile;
	    lodash.tap = tap;
	    lodash.throttle = throttle;
	    lodash.thru = thru;
	    lodash.times = times;
	    lodash.toArray = toArray;
	    lodash.toPlainObject = toPlainObject;
	    lodash.transform = transform;
	    lodash.union = union;
	    lodash.uniq = uniq;
	    lodash.unzip = unzip;
	    lodash.unzipWith = unzipWith;
	    lodash.values = values;
	    lodash.valuesIn = valuesIn;
	    lodash.where = where;
	    lodash.without = without;
	    lodash.wrap = wrap;
	    lodash.xor = xor;
	    lodash.zip = zip;
	    lodash.zipObject = zipObject;
	    lodash.zipWith = zipWith;

	    // Add aliases.
	    lodash.backflow = flowRight;
	    lodash.collect = map;
	    lodash.compose = flowRight;
	    lodash.each = forEach;
	    lodash.eachRight = forEachRight;
	    lodash.extend = assign;
	    lodash.iteratee = callback;
	    lodash.methods = functions;
	    lodash.object = zipObject;
	    lodash.select = filter;
	    lodash.tail = rest;
	    lodash.unique = uniq;

	    // Add functions to `lodash.prototype`.
	    mixin(lodash, lodash);

	    /*------------------------------------------------------------------------*/

	    // Add functions that return unwrapped values when chaining.
	    lodash.add = add;
	    lodash.attempt = attempt;
	    lodash.camelCase = camelCase;
	    lodash.capitalize = capitalize;
	    lodash.ceil = ceil;
	    lodash.clone = clone;
	    lodash.cloneDeep = cloneDeep;
	    lodash.deburr = deburr;
	    lodash.endsWith = endsWith;
	    lodash.escape = escape;
	    lodash.escapeRegExp = escapeRegExp;
	    lodash.every = every;
	    lodash.find = find;
	    lodash.findIndex = findIndex;
	    lodash.findKey = findKey;
	    lodash.findLast = findLast;
	    lodash.findLastIndex = findLastIndex;
	    lodash.findLastKey = findLastKey;
	    lodash.findWhere = findWhere;
	    lodash.first = first;
	    lodash.floor = floor;
	    lodash.get = get;
	    lodash.gt = gt;
	    lodash.gte = gte;
	    lodash.has = has;
	    lodash.identity = identity;
	    lodash.includes = includes;
	    lodash.indexOf = indexOf;
	    lodash.inRange = inRange;
	    lodash.isArguments = isArguments;
	    lodash.isArray = isArray;
	    lodash.isBoolean = isBoolean;
	    lodash.isDate = isDate;
	    lodash.isElement = isElement;
	    lodash.isEmpty = isEmpty;
	    lodash.isEqual = isEqual;
	    lodash.isError = isError;
	    lodash.isFinite = isFinite;
	    lodash.isFunction = isFunction;
	    lodash.isMatch = isMatch;
	    lodash.isNaN = isNaN;
	    lodash.isNative = isNative;
	    lodash.isNull = isNull;
	    lodash.isNumber = isNumber;
	    lodash.isObject = isObject;
	    lodash.isPlainObject = isPlainObject;
	    lodash.isRegExp = isRegExp;
	    lodash.isString = isString;
	    lodash.isTypedArray = isTypedArray;
	    lodash.isUndefined = isUndefined;
	    lodash.kebabCase = kebabCase;
	    lodash.last = last;
	    lodash.lastIndexOf = lastIndexOf;
	    lodash.lt = lt;
	    lodash.lte = lte;
	    lodash.max = max;
	    lodash.min = min;
	    lodash.noConflict = noConflict;
	    lodash.noop = noop;
	    lodash.now = now;
	    lodash.pad = pad;
	    lodash.padLeft = padLeft;
	    lodash.padRight = padRight;
	    lodash.parseInt = parseInt;
	    lodash.random = random;
	    lodash.reduce = reduce;
	    lodash.reduceRight = reduceRight;
	    lodash.repeat = repeat;
	    lodash.result = result;
	    lodash.round = round;
	    lodash.runInContext = runInContext;
	    lodash.size = size;
	    lodash.snakeCase = snakeCase;
	    lodash.some = some;
	    lodash.sortedIndex = sortedIndex;
	    lodash.sortedLastIndex = sortedLastIndex;
	    lodash.startCase = startCase;
	    lodash.startsWith = startsWith;
	    lodash.sum = sum;
	    lodash.template = template;
	    lodash.trim = trim;
	    lodash.trimLeft = trimLeft;
	    lodash.trimRight = trimRight;
	    lodash.trunc = trunc;
	    lodash.unescape = unescape;
	    lodash.uniqueId = uniqueId;
	    lodash.words = words;

	    // Add aliases.
	    lodash.all = every;
	    lodash.any = some;
	    lodash.contains = includes;
	    lodash.eq = isEqual;
	    lodash.detect = find;
	    lodash.foldl = reduce;
	    lodash.foldr = reduceRight;
	    lodash.head = first;
	    lodash.include = includes;
	    lodash.inject = reduce;

	    mixin(lodash, (function() {
	      var source = {};
	      baseForOwn(lodash, function(func, methodName) {
	        if (!lodash.prototype[methodName]) {
	          source[methodName] = func;
	        }
	      });
	      return source;
	    }()), false);

	    /*------------------------------------------------------------------------*/

	    // Add functions capable of returning wrapped and unwrapped values when chaining.
	    lodash.sample = sample;

	    lodash.prototype.sample = function(n) {
	      if (!this.__chain__ && n == null) {
	        return sample(this.value());
	      }
	      return this.thru(function(value) {
	        return sample(value, n);
	      });
	    };

	    /*------------------------------------------------------------------------*/

	    /**
	     * The semantic version number.
	     *
	     * @static
	     * @memberOf _
	     * @type string
	     */
	    lodash.VERSION = VERSION;

	    // Assign default placeholders.
	    arrayEach(['bind', 'bindKey', 'curry', 'curryRight', 'partial', 'partialRight'], function(methodName) {
	      lodash[methodName].placeholder = lodash;
	    });

	    // Add `LazyWrapper` methods for `_.drop` and `_.take` variants.
	    arrayEach(['drop', 'take'], function(methodName, index) {
	      LazyWrapper.prototype[methodName] = function(n) {
	        var filtered = this.__filtered__;
	        if (filtered && !index) {
	          return new LazyWrapper(this);
	        }
	        n = n == null ? 1 : nativeMax(nativeFloor(n) || 0, 0);

	        var result = this.clone();
	        if (filtered) {
	          result.__takeCount__ = nativeMin(result.__takeCount__, n);
	        } else {
	          result.__views__.push({ 'size': n, 'type': methodName + (result.__dir__ < 0 ? 'Right' : '') });
	        }
	        return result;
	      };

	      LazyWrapper.prototype[methodName + 'Right'] = function(n) {
	        return this.reverse()[methodName](n).reverse();
	      };
	    });

	    // Add `LazyWrapper` methods that accept an `iteratee` value.
	    arrayEach(['filter', 'map', 'takeWhile'], function(methodName, index) {
	      var type = index + 1,
	          isFilter = type != LAZY_MAP_FLAG;

	      LazyWrapper.prototype[methodName] = function(iteratee, thisArg) {
	        var result = this.clone();
	        result.__iteratees__.push({ 'iteratee': getCallback(iteratee, thisArg, 1), 'type': type });
	        result.__filtered__ = result.__filtered__ || isFilter;
	        return result;
	      };
	    });

	    // Add `LazyWrapper` methods for `_.first` and `_.last`.
	    arrayEach(['first', 'last'], function(methodName, index) {
	      var takeName = 'take' + (index ? 'Right' : '');

	      LazyWrapper.prototype[methodName] = function() {
	        return this[takeName](1).value()[0];
	      };
	    });

	    // Add `LazyWrapper` methods for `_.initial` and `_.rest`.
	    arrayEach(['initial', 'rest'], function(methodName, index) {
	      var dropName = 'drop' + (index ? '' : 'Right');

	      LazyWrapper.prototype[methodName] = function() {
	        return this.__filtered__ ? new LazyWrapper(this) : this[dropName](1);
	      };
	    });

	    // Add `LazyWrapper` methods for `_.pluck` and `_.where`.
	    arrayEach(['pluck', 'where'], function(methodName, index) {
	      var operationName = index ? 'filter' : 'map',
	          createCallback = index ? baseMatches : property;

	      LazyWrapper.prototype[methodName] = function(value) {
	        return this[operationName](createCallback(value));
	      };
	    });

	    LazyWrapper.prototype.compact = function() {
	      return this.filter(identity);
	    };

	    LazyWrapper.prototype.reject = function(predicate, thisArg) {
	      predicate = getCallback(predicate, thisArg, 1);
	      return this.filter(function(value) {
	        return !predicate(value);
	      });
	    };

	    LazyWrapper.prototype.slice = function(start, end) {
	      start = start == null ? 0 : (+start || 0);

	      var result = this;
	      if (result.__filtered__ && (start > 0 || end < 0)) {
	        return new LazyWrapper(result);
	      }
	      if (start < 0) {
	        result = result.takeRight(-start);
	      } else if (start) {
	        result = result.drop(start);
	      }
	      if (end !== undefined) {
	        end = (+end || 0);
	        result = end < 0 ? result.dropRight(-end) : result.take(end - start);
	      }
	      return result;
	    };

	    LazyWrapper.prototype.takeRightWhile = function(predicate, thisArg) {
	      return this.reverse().takeWhile(predicate, thisArg).reverse();
	    };

	    LazyWrapper.prototype.toArray = function() {
	      return this.take(POSITIVE_INFINITY);
	    };

	    // Add `LazyWrapper` methods to `lodash.prototype`.
	    baseForOwn(LazyWrapper.prototype, function(func, methodName) {
	      var checkIteratee = /^(?:filter|map|reject)|While$/.test(methodName),
	          retUnwrapped = /^(?:first|last)$/.test(methodName),
	          lodashFunc = lodash[retUnwrapped ? ('take' + (methodName == 'last' ? 'Right' : '')) : methodName];

	      if (!lodashFunc) {
	        return;
	      }
	      lodash.prototype[methodName] = function() {
	        var args = retUnwrapped ? [1] : arguments,
	            chainAll = this.__chain__,
	            value = this.__wrapped__,
	            isHybrid = !!this.__actions__.length,
	            isLazy = value instanceof LazyWrapper,
	            iteratee = args[0],
	            useLazy = isLazy || isArray(value);

	        if (useLazy && checkIteratee && typeof iteratee == 'function' && iteratee.length != 1) {
	          // Avoid lazy use if the iteratee has a "length" value other than `1`.
	          isLazy = useLazy = false;
	        }
	        var interceptor = function(value) {
	          return (retUnwrapped && chainAll)
	            ? lodashFunc(value, 1)[0]
	            : lodashFunc.apply(undefined, arrayPush([value], args));
	        };

	        var action = { 'func': thru, 'args': [interceptor], 'thisArg': undefined },
	            onlyLazy = isLazy && !isHybrid;

	        if (retUnwrapped && !chainAll) {
	          if (onlyLazy) {
	            value = value.clone();
	            value.__actions__.push(action);
	            return func.call(value);
	          }
	          return lodashFunc.call(undefined, this.value())[0];
	        }
	        if (!retUnwrapped && useLazy) {
	          value = onlyLazy ? value : new LazyWrapper(this);
	          var result = func.apply(value, args);
	          result.__actions__.push(action);
	          return new LodashWrapper(result, chainAll);
	        }
	        return this.thru(interceptor);
	      };
	    });

	    // Add `Array` and `String` methods to `lodash.prototype`.
	    arrayEach(['join', 'pop', 'push', 'replace', 'shift', 'sort', 'splice', 'split', 'unshift'], function(methodName) {
	      var func = (/^(?:replace|split)$/.test(methodName) ? stringProto : arrayProto)[methodName],
	          chainName = /^(?:push|sort|unshift)$/.test(methodName) ? 'tap' : 'thru',
	          retUnwrapped = /^(?:join|pop|replace|shift)$/.test(methodName);

	      lodash.prototype[methodName] = function() {
	        var args = arguments;
	        if (retUnwrapped && !this.__chain__) {
	          return func.apply(this.value(), args);
	        }
	        return this[chainName](function(value) {
	          return func.apply(value, args);
	        });
	      };
	    });

	    // Map minified function names to their real names.
	    baseForOwn(LazyWrapper.prototype, function(func, methodName) {
	      var lodashFunc = lodash[methodName];
	      if (lodashFunc) {
	        var key = lodashFunc.name,
	            names = realNames[key] || (realNames[key] = []);

	        names.push({ 'name': methodName, 'func': lodashFunc });
	      }
	    });

	    realNames[createHybridWrapper(undefined, BIND_KEY_FLAG).name] = [{ 'name': 'wrapper', 'func': undefined }];

	    // Add functions to the lazy wrapper.
	    LazyWrapper.prototype.clone = lazyClone;
	    LazyWrapper.prototype.reverse = lazyReverse;
	    LazyWrapper.prototype.value = lazyValue;

	    // Add chaining functions to the `lodash` wrapper.
	    lodash.prototype.chain = wrapperChain;
	    lodash.prototype.commit = wrapperCommit;
	    lodash.prototype.concat = wrapperConcat;
	    lodash.prototype.plant = wrapperPlant;
	    lodash.prototype.reverse = wrapperReverse;
	    lodash.prototype.toString = wrapperToString;
	    lodash.prototype.run = lodash.prototype.toJSON = lodash.prototype.valueOf = lodash.prototype.value = wrapperValue;

	    // Add function aliases to the `lodash` wrapper.
	    lodash.prototype.collect = lodash.prototype.map;
	    lodash.prototype.head = lodash.prototype.first;
	    lodash.prototype.select = lodash.prototype.filter;
	    lodash.prototype.tail = lodash.prototype.rest;

	    return lodash;
	  }

	  /*--------------------------------------------------------------------------*/

	  // Export lodash.
	  var _ = runInContext();

	  // Some AMD build optimizers like r.js check for condition patterns like the following:
	  if (true) {
	    // Expose lodash to the global object when an AMD loader is present to avoid
	    // errors in cases where lodash is loaded by a script tag and not intended
	    // as an AMD module. See http://requirejs.org/docs/errors.html#mismatch for
	    // more details.
	    root._ = _;

	    // Define as an anonymous module so, through path mapping, it can be
	    // referenced as the "underscore" module.
	    !(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
	      return _;
	    }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  }
	  // Check for `exports` after `define` in case a build optimizer adds an `exports` object.
	  else if (freeExports && freeModule) {
	    // Export for Node.js or RingoJS.
	    if (moduleExports) {
	      (freeModule.exports = _)._ = _;
	    }
	    // Export for Rhino with CommonJS support.
	    else {
	      freeExports._ = _;
	    }
	  }
	  else {
	    // Export for a browser or Rhino.
	    root._ = _;
	  }
	}.call(this));

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)(module), (function() { return this; }())))

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ }
/******/ ])
});
;