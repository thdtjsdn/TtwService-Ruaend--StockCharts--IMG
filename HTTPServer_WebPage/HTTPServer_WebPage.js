//require( "../../TtwPlatform-00000--NodeJS/Common-WebServer-000-0.js" );
require( "../../TtwPlatform-00000--NodeJS/Common-WebServer-000-1.js" );
//require( "../../TtwPlatform-00000--NodeJS/Common-WebServer-001-0.js" );
//require( "../../TtwPlatform-00000--NodeJS/Common-WebServer-001-1.js" );
//----------------------------------------------------------------------------------------------------;
var fileNm = "HTTPServer_WebPage.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//	REQUIRE - COMMON AREA - TtwPlatform-00000--NodeJS Repository;
//	 - 공통으로 사용하는 소스 조각 및 라이브러리

//----------------------------------------------------------------------------------------------------;

//Create Console;
require( "../../TtwPlatform-00000--NodeJS/Create-Console-Developers.js" );

//global.REQUIRES.mongodb;
//require( "../../TtwPlatform-00000--NodeJS/global.REQUIRES.mongodb.js" );

//----------------------------------------------------------------------------------------------------;

//	REQUIRE - LOCAL AREA;
//	- Application 종속적인 소스 조각 및 라이브러리

//----------------------------------------------------------------------------------------------------;

require( "./_$TATIC_CONST.js" );
require( "./_$TATIC_NODE_MODULES.js" );

//require( global.process.cwd() + "/libs/mongodb/mongodb_schema_validator.js" );

//----------------------------------------------------------------------------------------------------;

//	HTTPServer - Define - CONST;

//----------------------------------------------------------------------------------------------------;

/**
 * HTTPService를 할 대상 root Path
 * @property {String}
 */
global._$TATIC_CONST_SERVER_HTTP_TARGET_PATH = global.process.cwd() + "/../WebPage/root/";
global._$TATIC_CONST_SERVER_HTTP_HOST = null;
global._$TATIC_CONST_SERVER_HTTP_PORT = 49781;

global._$TATIC_CONST_SERVER_HTTP_MIME_TYPES = {
	bmp : "image/bmp"
	, css : "text/css"
	//, dbjs : "application/javascript"//오픈 금지;
	, gif : "image/gif"
	, html : "text/html"
	//, less : "text/css"//오픈 금지;
	, list : "text/plain"
	, jpeg : "image/jpeg"
	, jpg : "image/jpeg"
	, js : "application/javascript"
	, json : "text/json"
	, mp3 : "audio/mpeg"
	, png : "image/png"

	, "server-120-ip" : "application/javascript"
	, "server-122-ip" : "application/javascript"
	, "server-123-ip" : "application/javascript"

	//, tjs : "application/javascript"//오픈 금지;
	, thtml : "text/html"//오픈 금지;
	, txt : "text/plain"
	, xml : "text/xml"
	//, xlsx : "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"

	//Font;
	, ttf : "application/x-font-ttf"
	, woff : "application/x-font-woff"
	, woff2 : "application/x-font-woff"
};

global.apis.fs.autoLoad_JSs([ [ "JavaScript Import", "./js/", { router : 1, router_external : 1, router_internal : 1 } ] ]);

//----------------------------------------------------------------------------------------------------;

//	HTTPServer - Router;

//----------------------------------------------------------------------------------------------------;

/*/
//Browser에서 요청하는 /js/ 경로의 소스 파일들을 공통레파지토리에서 가져와 내려주는 기능;
//화면소스 개발모드에서만 사용한다.;
//Release 모드에서는 필요없음;
global.apis.server_http.globalServer__setMode__Dev__FileResCommonPath();
/*/
(function(){
	var _CWD = global.process.cwd() + "/";
	var _CWD_ROOT = _CWD + "../WebPage/root";

	var _0 = SUtilHttpServer.__evt_request__APIAndFilePath = SUtilHttpServer.evt_request__APIAndFilePath;
	var _1 = global.process.cwd() + "/../../TtwPlatform-00000--JS/WebPage/root/";
	//var _2 = global._$TATIC_VALUE_SERVER_HTTP_EVTS_REQUEST;

	SUtilHttpServer.evt_request__APIAndFilePath = function( req, res ){

		//----------;
		//var uri = SUtilHttpServer.getURIFromURL( req.url );
		var uri;
		debugger;
		///try{ uri = global.decodeURIComponent( SUtilHttpServer.getURIFromURL( req.url ) ); }
		try{ uri = global.decodeURIComponent( req.url ); }
		catch(er){
			try{ uri = global.decodeURIComponent( req.url ); }
			catch( er ){ uri = req.url; }
		}
		req.url = uri;
		//----------;

		if( ( -1 == uri.indexOf( "/img/" ) ) && ( -1 == uri.indexOf( "음성 기록 통계" ) ) )
		{
			global.console.log( Date.now() + " - " + req.client.remoteAddress + " - " + uri );
		}

		if( ( uri.length - 5 ) == uri.lastIndexOf( ".html" ) )
		{
			var PATH = _CWD_ROOT + uri;
			global.REQUIRE.fs.exists( PATH, function( b ){
				if( b )
				{
					var fStr = SUtilFsReadStream.getFile( PATH ).toString();

					if( -1 != fStr.indexOf( "<!=SYS0320." ) ) fStr = fStrreplace( /\<\!\=SYS0320\.HOST\=\!\>/gi, global.apis.url.getServerURL_WebServer_SCODE( "SYS0320" ) );

					global.apis.response.send_200_HTML( req, res, fStr );
					return;
				}
				else
				{
					global.apis.response.send_404( req, res );
					return;
				}
			});

			return;
		}

		else if( -1 != uri.lastIndexOf( ".js" ) && ( uri.length - 3 ) == uri.lastIndexOf( ".js" ) )
		{
			var PATH = _CWD_ROOT + uri;
			global.REQUIRE.fs.exists( PATH, function( b ){
				if( b )
				{
					var fStr = SUtilFsReadStream.getFile( PATH ).toString();

					//if( -1 != fStr.indexOf( "<!=SYS0320." ) ) fStr = fStrreplace( /\<\!\=SYS0320\.HOST\=\!\>/gi, global.apis.url.getServerURL_WebServer_SCODE( "SYS0320" ) );

					global.apis.response.send_200_HTML( req, res, fStr );
					return;
				}
				else
				{
					global.apis.response.send_404( req, res );
					return;
				}
			});

			return;
		}

		//else if( _2[ uri ] ) _0( req, res );

		else if( 0 == uri.indexOf( "/js/" ) )
		{
			//공통 모듈 파일을 가져와서 내려주기;
			//global.apis.response.sendStream_200_File_NCallback( req, res, _1 );
			global.apis.response.sendStream_200_File_URI_NCallback( req, res, _1, uri );
			return;
		}

		_0( req, res );
	};
})();
//*/

//----------------------------------------------------------------------------------------------------;

//*/
(function(){
	var _ = global._$TATIC_VALUE_SERVER_HTTP_EVTS_REQUEST;

	//Custom URI Example - http://localhost:port/a;
	_[ "/a" ] = function( req, res ){

		debugger;
		console.log( 1 );
		var r = "";
		req.on( "data", function( chunk ){
			r += chunk;
			console.log( "chunk : " + chunk );
		});
		req.on( "end", function( chunk ){
			r;
			//debugger;
		});
		SUtilHttpServerResponse.responseWrite_200_JSON( res, {} );
	};

	(function(){
		var FILE_PATH = "";
		_[ "/getLog" ] = function( req, res ){

			if( FILE_PATH == "" )
			{
				var a = SUtilFsReadStream.getList_File_Extension( "./log/", ".txt" );
					a.forEach( function( item ){ if( -1 != item.indexOf( "log_" ) ) FILE_PATH = "./log/" + item; });
			}

			try
			{
				var fStr = SUtilFsReadStream.getFile( FILE_PATH ).toString()
				SUtilHttpServerResponse.responseWrite_200_String( res, fStr );
			}
			catch( er )
			{
				global.console.error( er );
			}
		};
		_[ "/upload__html" ] = function( req, res ){
			var q = global.apis.url.getQueryFromURL( req.url );

			debugger;
			var r = "";
			req.on( "data", function( chunk ){
				r += chunk;
				//console.log( "chunk : " + chunk );
			});
			req.on( "end", function( chunk ){
				SUtilFsWriteStream.writeFile_UTF8( "../WebPage/root/html/stock/" + q.nm + ".html", r );
			});
			SUtilHttpServerResponse.responseWrite_200_JSON( res, {} );
		};

		var DATA__upload__voice_history_1line = {
			txt : ""
		};
		_[ "/download__voice_history_1line" ] = function( req, res ){ SUtilHttpServerResponse.responseWrite_200_String( res, DATA__upload__voice_history_1line.txt ); };
		_[ "/upload__voice_history_1line" ] = function( req, res ){
			var r = "";
			req.on( "data", function( chunk ){
				r += chunk;
				//console.log( "chunk : " + chunk );
			});
			req.on( "end", function( chunk ){
				//SUtilFsWriteStream.writeFile_UTF8( "../WebPage/root/html/stock/voice_history/음성 기록 통계 - 1line.html", r );
				DATA__upload__voice_history_1line.txt = r;
			});
			SUtilHttpServerResponse.responseWrite_200_JSON( res, {} );
		};
		_[ "/upload__voice_history_05" ] = function( req, res ){
			var r = "";
			req.on( "data", function( chunk ){
				r += chunk;
				//console.log( "chunk : " + chunk );
			});
			req.on( "end", function( chunk ){
				SUtilFsWriteStream.writeFile_UTF8( "../WebPage/root/html/stock/voice_history/음성 기록 통계 - 0.5.html", r );
			});
			SUtilHttpServerResponse.responseWrite_200_JSON( res, {} );
		};
		_[ "/upload__voice_history_07" ] = function( req, res ){
			var r = "";
			req.on( "data", function( chunk ){
				r += chunk;
				//console.log( "chunk : " + chunk );
			});
			req.on( "end", function( chunk ){
				SUtilFsWriteStream.writeFile_UTF8( "../WebPage/root/html/stock/voice_history/음성 기록 통계 - 0.7.html", r );
			});
			SUtilHttpServerResponse.responseWrite_200_JSON( res, {} );
		};
		_[ "/upload__voice_history_07_cnt" ] = function( req, res ){
			var r = "";
			req.on( "data", function( chunk ){
				r += chunk;
				//console.log( "chunk : " + chunk );
			});
			req.on( "end", function( chunk ){
				SUtilFsWriteStream.writeFile_UTF8( "../WebPage/root/html/stock/voice_history/음성 기록 통계 - 0.7 - 횟수.html", r );
			});
			SUtilHttpServerResponse.responseWrite_200_JSON( res, {} );
		};
		_[ "/upload__voice_history_m07" ] = function( req, res ){
			var r = "";
			req.on( "data", function( chunk ){
				r += chunk;
				//console.log( "chunk : " + chunk );
			});
			req.on( "end", function( chunk ){
				SUtilFsWriteStream.writeFile_UTF8( "../WebPage/root/html/stock/voice_history/음성 기록 통계 - -0.7.html", r );
			});
			SUtilHttpServerResponse.responseWrite_200_JSON( res, {} );
		};
	})();

	/*/
	_[ "/js/index.js" ]
		= _[ "/js/index_dev_mongodb.js" ]
		= function( req, res ){ global.apis.response.sendStream_200_File_NCallback( req, res, global._$TATIC_CONST_SERVER_HTTP_TARGET_PATH ); };
	//*/

	//B2LiNK-B2Labs IP 이외 차단 파일 목록;
	//require( "../../TtwPlatform-00000--NodeJS/NotAvailableServiceFiles__IP.js" );
})();
//*/

//----------------------------------------------------------------------------------------------------;

//	HTTPServer - Initialize;

//----------------------------------------------------------------------------------------------------;

//WebServer용 HTTPServer를 생성한다.;
global.server = global.apis.server_http.newServer__WebServer();

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//	JavaScript Import;
// - ./js/ : 공통모듈, TtwPlatform-00000--NodeJS에 존재한다.;
// - ./js___***/ : 각 개별 레파지토리에 존재한다. API 파일 목록은 필요 요소에 따라 다를수 있다.;

//----------------------------------------------------------------------------------------------------;

/*/
(function(){
	global.apis.fs.autoLoad_JSs([
		[ "JavaScript Import - TtwService-Ruaend--StockCharts--IMG", "./js__SYS0320/", { router : 1, router_external : 1, router_internal : 1 } ]
	]);
})();
//*/

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;