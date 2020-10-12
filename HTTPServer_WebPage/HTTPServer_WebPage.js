/*/
/data/data/com.termux/files/home/Application/TtwService-Ruaend--StockCharts--IMG/HTTPServer_WebPage
/data/data/com.termux/files/home/Application/TtwService-Ruaend--StockCharts--IMG/WebPage/root/ui/Page/주식-메인
//*/

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
	, wav : "audio/wav"
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
	var BLOCK_IPS = `
		1.246.223.32//한국 - SKB;
		5.9.140.//독일 -;
		54.36.148.//프랑스 - AS16276 OVH SAS;
		62.210.172.8//네덜란드 -
		//66.249.65.//미국 - AS15169 Google LLC;
		80.14.34.188//;
		106.12.77.15//중국 - baidu.com - Beijing Baidu Netcom Science and Technology Co. Ltd.;
		107.150.59.98//중국 - DataShack, LC;
		114.67.237.246//;
		116.74.58.212//;
		117.144.49.210//중국 - China Mobile Communications Corporation;
		117.220.196.50//인도 - 해킹;
		120.53.124.104//중국 - 해킹 - Tencent cloud computing;
		144.76.137.254//독일 - Hetzner Online GmbH;
		154.8.201.45//중국 - Tencent Cloud Computing (Beijing) Co. Ltd;
		185.191.171.//네덜란드 - 	datawebglobal.com;
		192.71.12.140//Sweden - GleSYS Internet Services AB
		192.99.4.//캐나다 - OVH Hosting Inc.;
		192.99.6.//캐나다 - OVH Hosting Inc.;
		192.241.235.154//;
		195.54.160.//러시아 - Arkada LLC;
		195.54.160.21//러시아 - Arkada LLC;
		195.54.160.135//러시아 - Arkada LLC;
		216.244.66.//미국 - wowrack.com;
		216.244.66.227//미국 - wowrack.com;
		218.17.208.165//중국 - 해킹시도;
		`;
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

		//IP 차단;
		//*/
		try
		{
			if(    -1 != BLOCK_IPS.indexOf( req.client.remoteAddress.replace( "ffff:", "" ) ) )
			{
				//global.apis.response.send_404( req, res );
				global.console.log( Date.now() + " - [ 차단 ] - " + req.client.remoteAddress + " - " + uri );
				global.apis.response.send_200_String( req, res, "fuck off" );
				return;
			}
		}
		catch( er )
		{
		}
		//*/

		if( ( -1 == uri.indexOf( "/img/" ) )
			&& ( -1 == uri.indexOf( "/download__voice_history_1line" ) )
			&& ( -1 == uri.indexOf( "/download__selectd_stock" ) )
			&& ( -1 == uri.indexOf( "음성 기록 통계" ) )
			&& ( -1 == req.client.remoteAddress.indexOf( "1.235.228.84" ) )
			&& ( -1 == req.client.remoteAddress.indexOf( "192.168.0.1" ) )
		)
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
					/*/
					global.apis.response.send_404( req, res );
					/*/
					global.b2link.response.setHeaders__b2ker( res );
					res.writeHead( 302, { "Location" : "http://thdtjsdn.com" } );
					res.end();
					//*/
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
					/*/
					global.apis.response.send_404( req, res );
					/*/
					global.b2link.response.setHeaders__b2ker( res );
					res.writeHead( 302, { "Location" : "http://thdtjsdn.com" } );
					res.end();
					//*/
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

		var path = "../WebPage/root/html/stock/";

		/*/
		/data/data/com.termux/files/home/Application/TtwService-Ruaend--StockCharts--IMG/WebPage/root/html/stock
		http://thdtjsdn.site:49781/deleteHTMLList__Stocks?date=20200905
		http://thdtjsdn.site:49781/deleteHTMLList__Stocks?date=20200920
		//*/
		_[ "/deleteHTMLList__Stocks" ] = function( req, res ){
			var q = global.apis.url.getQueryFromURL_Decode( req.url );

			var a = global.REQUIRES.fs.readdirSync( path );
			a.forEach(function( item ){
				if( -1 != item.indexOf( q.date ) )
					SUtilFsWriteStream.deleteFile( path + item );
			});

			SUtilHttpServerResponse.responseWrite_404( res );
		};

		_[ "/getHTMLList__Stocks__JSON" ] = function( req, res ){
			var a = SUtilFsReadStream.getList_File_Extension( path, ".html" );
				//a.reverse();
			SUtilHttpServerResponse.responseWrite_200_String( res, JSON.stringify( res ) );
		};

		/*/
		http://thdtjsdn.com:49781/getHTMLList__Stocks__HTML?dates=["20200911","20200910","20200909","20200908"]
		http://localhost:49781/getHTMLList__Stocks__HTML?dates=["20200911","20200910","20200909","20200908"]
		//*/
		_[ "/getHTMLList__Stocks__HTML" ] = function( req, res ){
			var q = global.apis.url.getQueryFromURL_Decode( req.url );

			if( !q.dates )
			{
				SUtilHttpServerResponse.responseWrite_200_String( res, "" );
				return;
			}

			q.dates = JSON.parse( q.dates );

			var r = "<style>body { background-color: #000000; }</style>";
			/*/
			var html_ad = `<div class="inline-ad">
				<script type="text/javascript">google_ad_client="ca-pub-1892980256031512";google_ad_host="ca-host-pub-1556223355139109";google_ad_host_channel="L0007";google_ad_slot="6262262429";google_ad_width=950;google_ad_height=350;</script>
				<script type="text/javascript" src="https://pagead2.googlesyndication.com/pagead/show_ads.js"></script>
				<ins id="aswift_2_expand" style="display:inline-table;border:none;height:0px;margin:0;padding:0;position:relative;visibility:visible;width:10px;background-color:transparent;" data-ad-slot="6262262429">
					<ins id="aswift_2_anchor" style="display:block;border:none;height:0px;margin:0;padding:0;position:relative;visibility:visible;width:0px;background-color:transparent;">
						<iframe width="0" height="0" frameborder="0" marginwidth="0" marginheight="0" vspace="0" hspace="0" allowtransparency="true" scrolling="no" allowfullscreen="true" onload="var i=this.id,s=window.google_iframe_oncopy,H=s&amp;&amp;s.handlers,h=H&amp;&amp;H[i],w=this.contentWindow,d;try{d=w.document}catch(e){}if(h&amp;&amp;d&amp;&amp;(!d.body||!d.body.firstChild)){if(h.call){setTimeout(h,0)}else if(h.match){try{h=s.upd(h,i)}catch(e){}w.location.replace(h)}}" id="aswift_2" name="aswift_2" style="left:0;position:absolute;top:0;border:0px;width:0px;height:0px;"></iframe>
					</ins>
				</ins>
			</div>`;

			r += html_ad;
			//*/

			//var template = `<a href="http://thdtjsdn.site/html/stock/{{파일명0}}" target="blank">{{파일명1}}</a>`;
			//var template = `<a href="http://thdtjsdn.com/html/stock/{{파일명0}}" target="blank">{{파일명1}}</a>`;
			var template = `<a href="http://thdtjsdn.com/html/stock/{{파일명0}}" target="blank">{{파일명1}}</a>`;

			var ar0 = [];
			var ar1 = [];

			//var a = SUtilFsReadStream.getList_File_Extension( path, ".html" );

			var a = global.REQUIRES.fs.readdirSync( path );
			a.forEach( function( item ){
				if( -1 != item.indexOf( "ttw_관심" )
					|| -1 != item.indexOf( "종합시황뉴스 - 정제 - 종목 - 시간정렬" )
					|| -1 == item.indexOf( ".html" )
				) return;

				var i=0, iLen=q.dates.length;
				for( ; i<iLen; ++i )
				{
					if( -1 != item.indexOf( q.dates[ i ] ) )
					{
						ar0.push( item );

						var fd = global.REQUIRES.fs.openSync( path + item );
						var fst = global.REQUIRES.fs.fstatSync( fd );
						global.REQUIRES.fs.close( fd, function(){} );
						ar1.push( fst );
					}
				}
			});

			//ar0.reverse();
			//ar0.forEach(function( item ){ r += "<br><br>" + template.replace( "{{파일명0}}", item ).replace( "{{파일명1}}", item.replace( ".html", "" ) ); });
			var i=0, iLen=ar0.length;
			//for( ; i<iLen; ++i ) r += "<br><br>" + ar1[ i ].atime.toString().split( " GMT" )[ 0 ] + " - " + template.replace( "{{파일명0}}", ar0[ i ] ).replace( "{{파일명1}}", ar0[ i ].replace( ".html", "" ) );
			for( ; i<iLen; ++i ){
				var dt = "";
				try{ dt = ar1[ i ].mtime.toString().slice( 4, 24 ); } catch( er ){ console.log( er ); }
				r += '<br><br><span style="color: orange;">' + dt + '</span> - ' + template.replace( "{{파일명0}}", ar0[ i ].replace( /\%/gi, "%25" ) ).replace( "{{파일명1}}", ar0[ i ].replace( ".html", "" ) );
			}

			//console.log( "r : " + r );
			//SUtilHttpServerResponse.responseWrite_200_String( res, r );
			global.apis.response.send_200_HTML( req, res, r );
		};





		var FILE_PATH__getLog = "";
		_[ "/getLog" ] = function( req, res ){

			if( FILE_PATH__getLog == "" )
			{
				var a = SUtilFsReadStream.getList_File_Extension( "./log/", ".txt" );
					a.forEach( function( item ){ if( -1 != item.indexOf( "log_" ) ) FILE_PATH__getLog = "./log/" + item; });
			}

			try
			{
				var fStr = SUtilFsReadStream.getFile( FILE_PATH__getLog ).toString()
				SUtilHttpServerResponse.responseWrite_200_String( res, fStr );
			}
			catch( er )
			{
				global.console.error( er );
			}
		};
		_[ "/upload__html" ] = function( req, res ){
			var q = global.apis.url.getQueryFromURL_Decode( req.url );

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

		_[ "/upload__html__ui" ] = function( req, res ){
			var q = global.apis.url.getQueryFromURL_Decode( req.url );

			debugger;
			var r = "";
			req.on( "data", function( chunk ){
				r += chunk;
				//console.log( "chunk : " + chunk );
			});
			req.on( "end", function( chunk ){
				SUtilFsWriteStream.writeFile_UTF8( "../WebPage/root/ui/Page/주식-차트-이미지/_HTML-small/" + q.nm + ".html", r );
			});
			SUtilHttpServerResponse.responseWrite_200_JSON( res, {} );
		};

		_[ "/upload__json" ] = function( req, res ){
			var q = global.apis.url.getQueryFromURL_Decode( req.url );

			debugger;
			var r = "";
			req.on( "data", function( chunk ){
				r += chunk;
				//console.log( "chunk : " + chunk );
			});
			req.on( "end", function( chunk ){
				SUtilFsWriteStream.writeFile_UTF8( "../WebPage/root/json/stock/" + q.nm + ".json", r );
			});
			SUtilHttpServerResponse.responseWrite_200_JSON( res, {} );
		};

		(function(){
			var o = {};
			var a = JSON.parse( SUtilFsReadStream.getFile( "./json/list-all.json" ).toString() );
				a.forEach( function( item ){ o[ item.name ] = item.code; });

			_[ "/download__json__toron" ] = function( req, res ){
				var q = global.apis.url.getQueryFromURL_Decode( req.url );

				try
				{
					var path = "../WebPage/root/json/stock/" + o[ q.name ] + "/" + q.date + ".json" ;
					if( global.REQUIRES.fs.existsSync( path ) )
						global.apis.response.send_200_String( req, res, SUtilFsReadStream.getFile( path ).toString() );
					else global.apis.response.send_404( req, res );
				}
				catch( er )
				{
					global.apis.response.send_404( req, res );
				}
			};
			_[ "/upload__json__toron" ] = function( req, res ){
				var q = global.apis.url.getQueryFromURL_Decode( req.url );

				debugger;
				var r = "";
				req.on( "data", function( chunk ){
					r += chunk;
					//console.log( "chunk : " + chunk );
				});
				req.on( "end", function( chunk ){
					SUtilFsWriteStream.createDirectory__BeforCheck( "../WebPage/root/json/stock/" + q.code + "/" );
					SUtilFsWriteStream.writeFile_UTF8( "../WebPage/root/json/stock/" + q.code + "/" + q.nm + ".json", r );
				});
				SUtilHttpServerResponse.responseWrite_200_JSON( res, {} );
			};
		})();




		var pad = function( n ){ var s = n.toString(); if( s.length == 1 ) return "0" + s; else return s; };
		var DATA__selectd_stock = {
			txt : ""
		};
		_[ "/download__selectd_stock" ] = function( req, res ){ try{ global.apis.response.send_200_String( req, res, DATA__selectd_stock.txt ); }catch( er ){} };
		/*/
		http://thdtjsdn.com/upload__selectd_stock?code=aaa
		//*/
		_[ "/upload__selectd_stock" ] = function( req, res ){
			var q = global.apis.url.getQueryFromURL_Decode( req.url );
			var d = new Date();
			DATA__selectd_stock.txt = d.getFullYear() + pad( d.getMonth() + 1 ) + pad( d.getDate() ) + " " + pad( d.getHours() ) + ":" + pad( d.getMinutes() ) + " - " + q.code;
			SUtilHttpServerResponse.responseWrite_200_True( res );
		};

		var DATA__upload__voice_history_1line = {
			txt : ""
		};
		_[ "/download__voice_history_1line" ] = function( req, res ){ try{ global.apis.response.send_200_String( req, res, DATA__upload__voice_history_1line.txt ); }catch( er ){} };
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
			SUtilHttpServerResponse.responseWrite_200_True( res );
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
			SUtilHttpServerResponse.responseWrite_200_True( res );
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
			SUtilHttpServerResponse.responseWrite_200_True( res );
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
			SUtilHttpServerResponse.responseWrite_200_True( res );
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
			SUtilHttpServerResponse.responseWrite_200_True( res );
		};

		var DATA__upload__voice_history_kospi_daq = {
			daq : ""
			, pi : ""
		};
		_[ "/download__voice_history_kosdaq" ] = function( req, res ){ try{ global.apis.response.send_200_String( req, res, DATA__upload__voice_history_kospi_daq.daq ); }catch( er ){} };
		_[ "/upload__voice_history_kosdaq" ] = function( req, res ){
			var r = "";
			req.on( "data", function( chunk ){
				r += chunk;
				//console.log( "chunk : " + chunk );
			});
			req.on( "end", function( chunk ){
				//SUtilFsWriteStream.writeFile_UTF8( "../WebPage/root/html/stock/voice_history/음성 기록 통계 - 1line.html", r );
				DATA__upload__voice_history_kospi_daq.daq = r;
			});
			SUtilHttpServerResponse.responseWrite_200_True( res );
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