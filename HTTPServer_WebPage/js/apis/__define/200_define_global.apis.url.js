//----------------------------------------------------------------------------------------------------;
//var fileNm = "js/b2link/__define/200_define_global.apis.url.js";
//if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------[ S ] - global.apis.url;

global.apis.url = global.apis.url || {};

//----------------------------------------------------------------------------------------------------[ E ] - global.apis.url;

/**
 * @function
 * @param {String} url
 * @return {Object}
 */
global.apis.url.getQueryFromURL=function(r){try{return global.server.getQueryFromURL(r)}catch(e){return SUtilHttpServer.getQueryFromURL(r)}};

/**
 * encodeURIComponent된 url을 decodeURIComponent 한다. 는 기본적으로 진행함
 * encodeURIComponent를 사용하지 않고 자체 변환된 url도 풀어준다.
 * @function
 * @param {String} url
 * @return {Object}
 */
//global.apis.url.getQueryFromURL_Decode=function(e){e=decodeURIComponent(e);var r=global.server.getQueryFromURL(e);delete r[""];var l=JSON.stringify(r).replace('"":"",',"");return l=l.replace(/!MzU=!/gi,"#").replace(/!Mzg=!/gi,"&").replace(/!MTg3!/gi,"+"),JSON.parse(l)};
global.apis.url.getQueryFromURL_Decode=function(e){e=decodeURIComponent(e);var r=global.server.getQueryFromURL(e);delete r[""];var l=JSON.stringify(r).replace('"":"",',"");return l=l.replace(/!MzU=!/gi,"#").replace(/!Mzg=!/gi,"&").replace(/!MTg3!/gi,"+").replace(/!Mzc=!/gi,"%"),JSON.parse(l)};

//--------------------------------------------------;

/**
 * @function
 * @param {String} SCODE
 * @return {String}
 */
global.apis.url.getServerURL_APIServer_SCODE=function(e){return global.apis.url.getServerURLByServers(e+"_APIServer")};

/**
 * @function
 * @return {String}
 */
global.apis.url.getServerURL_APIServer_Self=function(){return global.apis.url.getServerURLByServers(global.apis.STATIC.CONFIG.URL.SCODE+"_APIServer")};

/**
 * @function
 * @param {String} SCODE
 * @return {String}
 */
global.apis.url.getServerURL_ScrapServer_SCODE=function(r){return global.apis.url.getServerURLByServers(r+"_ScrapServer")};

/**
 * @function
 * @return {String}
 */
global.apis.url.getServerURL_ScrapServer_Self=function(){return global.apis.url.getServerURLByServers(global.apis.STATIC.CONFIG.URL.SCODE+"_ScrapServer")};

/**
 * @function
 * @param {String} SCODE
 * @return {String}
 */
global.apis.url.getServerURL_WebServer_SCODE=function(e){return global.apis.url.getServerURLByServers(e+"_WebServer")};

/**
 * @function
 * @return {String}
 */
global.apis.url.getServerURL_WebServer_Self=function(){return global.apis.url.getServerURLByServers(global.apis.STATIC.CONFIG.URL.SCODE+"_WebServer")};

//--------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
//if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;