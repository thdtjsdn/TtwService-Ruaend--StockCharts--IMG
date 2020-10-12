/*/
/data/data/com.termux/files/home/Application/TtwService-Ruaend--StockCharts--IMG/WebPage/root/ui/Page/주식-메인
//*/
//----------------------------------------------------------------------------------------------------;
var fileNm = 'ui/Page/주식-메인/index.js';
if( console ) console.log( '[ S ] - ' + fileNm + '----------' );
//----------------------------------------------------------------------------------------------------;

window.document.title = fileNm;

window.onpopstate = null;

//----------------------------------------------------------------------------------------------------;

/**
 * 이 Private Scope 영역의 메인 객체
 * this 키워드는 사용하지 않는 다.(JS 버전 별 문제 타파)
 * Public Instance 들의 Reference를 담아 마지막에 반환 한다.
 * UI 호출 API를 통해 사용할시 이 _THIS가 els[ 1 ](JavaScript Contriller Object)가 된다.
 * @const
 * @property
 */
//var _THIS = window.SYS0320_UI_INTERFACE.interface.Application({});
var _THIS = window.SYS0320_UI_INTERFACE.interface.Component({});
//var _THIS = window.SYS0320_UI_INTERFACE.interface.Module({});
//var _THIS = window.SYS0320_UI_INTERFACE.interface.Page({});
//var _THIS = window.SYS0320_UI_INTERFACE.interface.Popup({});

//----------------------------------------------------------------------------------------------------;

//	IMPORT;

//----------------------------------------------------------------------------------------------------;

(function(){
	var HOST = window.apis.url.getServerURL_WebServer_SCODE( 'SYS0015' );

	var f = window.apis.util.importJS__Reuse;
		//f( HOST + '/libs/FancyGrid/import-js.js' );

	//CSS;
	var f = SUtilTemplateHTML.addCSS__URLToHead;
		//f( HOST + '/libs/Leaflet/leaflet.css' );
	//JS;
	var f = window.apis.util.importJS__Reuse;
	//var f = SUtilTemplateHTML.addJS__URLToHead;
		//f( HOST + '/libs/Leaflet/leaflet.js' );
})();

//----------------------------------------------------------------------------------------------------;

//	PACKAGE;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//	DEFINE;

//----------------------------------------------------------------------------------------------------;

/**
 * @const
 * @property
 */
var _CLASS = (function(){
	return {
	};
})();

/**
 * _IDS.ROOT는 약속된 명명
 * 이 컨트롤러 객체의 대상이 되는 최상위 HTMLElement는 ROOT로 지칭한다
 * @const
 * @property
 */
var _IDS = (function(){
	return {
		ROOT : 'ui/Page/주식-메인/index'

		//, AD : "ui/Page/주식-메인/index--AD"
		, AD__BUTTON__CLOSE : "ui/Page/주식-메인/index--AD--TIME--닫기"

		, BUTTON__REAL_SEARCH_CODE : "ui/Page/주식-메인/index--INPUT--실시간조회종목코드"

		, BUTTON__VOICE__KODAQ : "ui/Page/주식-메인/index--BUTTON--실시간-음성-코스닥"

		, DIV__LIST : "ui/Page/주식-메인/index--DIV--LIST"

		, INPUT__DATE : 'ui/Page/주식-메인/index--INPUT--DATE'

		, INPUT__STOCK : 'ui/Page/주식-메인/index--INPUT--NAME'

		, IFRAME : 'ui/Page/주식-메인/index--IFRAME'

		, SELECT__CHART_TYPE : 'ui/Page/주식-메인/index--select--chartType'

		, TITLE : 'ui/Page/주식-메인/index--선택종목코드--컨테이너--제목'
	};
})();

/**
 * _ELS.ROOT는 약속된 명명
 * 이 컨트롤러 객체의 대상이 되는 최상위 HTMLElement는 ROOT로 지칭한다
 * @const
 * @property
 */
var _ELS = (function(){
	var o = {
		ROOT : window.document.getElementById( _IDS.ROOT )

		//, AD : window.document.getElementById( _IDS.AD )

		//, AD__BUTTON__CLOSE : window.document.getElementById( _IDS.AD__BUTTON__CLOSE )

		, BUTTON__REAL_SEARCH_CODE : window.document.getElementById( _IDS.BUTTON__REAL_SEARCH_CODE  )

		, BUTTON__VOICE__KODAQ : window.document.getElementById( _IDS.BUTTON__VOICE__KODAQ  )

		, DIV__LIST : window.document.getElementById( _IDS.DIV__LIST )

		, IFRAME : window.document.getElementById( _IDS.IFRAME )

		, INPUT__DATE : window.document.getElementById( _IDS.INPUT__DATE )

		, INPUT__STOCK : window.document.getElementById( _IDS.INPUT__STOCK )

		, SELECT__CHART_TYPE : window.document.getElementById( _IDS.SELECT__CHART_TYPE )

		, TITLE : window.document.getElementById( _IDS.TITLE )
	};

	//window.apis.STATIC.CONST.ROOT_DIV.EL_APPLICATION.appendChild( o.ROOT );
	//window.apis.STATIC.CONST.ROOT_DIV.EL_UI_COMPONENT_FIXED.appendChild( o.ROOT );
	window.apis.element.mouseEnable( o.ROOT );
	//window.apis.element.mouseDisable( o.ROOT );

	/*/
	o.ROOT.addEventListener( 'click', function( e ){
		var t = e.target;
		if( 'A' == t.tagName )
		{
			var url = t.getAttribute( 'data-href' );
			if( '새창' == t.innerText ) window.open( url, '_blank' );
			else
			{
				if( url )
				{
					o.IF0.src = url;
				}
			}
		}
	});
	//*/

	/*/
	(function(){
		var id = 'ui/Page/주식-메인/index--AD--TIME';
		var el = window.document.getElementById( id );

		var fn = function(){
			if( el.style.display == "none" )
			{
				el.style.display = "";
				setTimeout( fn, 10000 );
			}
		};

		setTimeout( fn, 10000 );

		var evt_mClick = function( event ){ el.style.display = "none"; };
		window.document.getElementById( "ui/Page/주식-메인/index--AD--TIME--닫기" ).addEventListener( "click", evt_mClick );
		setTimeout( function(){ el.style.display = "none"; }, 500 );
	})();
	//*/



	(function( e ){
		var evt = function( e ){
			var t = e.target;
			if( !t.value ){
				alert( "날짜를 선택 하시오" );
				return;
			}

			var date = t.value.replace( /\-/gi, '' );
			var url = window.location.origin + '/getHTMLList__Stocks__HTML?dates=["' + date + '"]';

			o.IFRAME.src = "";
			o.IFRAME.style.display = "none";

			var HTML = window.apis.xhr.reqSync_String( url );
			o.DIV__LIST.innerHTML = HTML;
			//o.AD.innerHTML = HTML_AD;
		};

		o.INPUT__DATE.addEventListener( "change", evt );
		//o.INPUT__DATE.addEventListener( "click", evt );
	})();



	o.INPUT__STOCK.addEventListener( 'keydown', function( e ){
		var t = e.target;
		if( e.keyCode == 13 )
		{
			//window.open( window.location.origin + ':49781/html/stock/__종목명별 차트 HTML/' + t.value + '.html', 'blank' );
			//o.IFRAME.src = window.location.origin + ':49781/html/stock/__종목명별 차트 HTML/' + t.value + '.html';
			o.IFRAME.src = window.location.origin + ':49781/html/stock/__종목명별 차트 HTML - 서버 - 모든 이미지/' + t.value + '.html';
			o.IFRAME.style.display = "";
		}
	});

	o.SELECT__CHART_TYPE.addEventListener( 'change', function( e ){
		var t = e.target;

		var url0 = window.location.origin + ':49781/html/stock/__전체 종목명별 차트 HTML/';
		var url1 = '';

		     if( t.value == 'all-min'){ url1 = '차트-MIN-전체 - 서버.html'; o.IFRAME.src = url0 + url1; o.IFRAME.style.display = ""; }
		else if( t.value == 'all-hd' ){ url1 = '차트-HD-전체 - 서버.html'; o.IFRAME.src = url0 + url1; o.IFRAME.style.display = ""; }
		else if( t.value == 'all-fhd'){ url1 = '차트-FHD-전체 - 서버.html'; o.IFRAME.src = url0 + url1; o.IFRAME.style.display = ""; }

		else if( t.value == 'all-min00' ){ url1 = '차트-MIN-전체 - 서버 - 00.html'; o.IFRAME.src = url0 + url1; o.IFRAME.style.display = ""; }
		else if( t.value == 'all-min01' ){ url1 = '차트-MIN-전체 - 서버 - 01.html'; o.IFRAME.src = url0 + url1; o.IFRAME.style.display = ""; }
		else if( t.value == 'all-min02' ){ url1 = '차트-MIN-전체 - 서버 - 02.html'; o.IFRAME.src = url0 + url1; o.IFRAME.style.display = ""; }
		else if( t.value == 'all-min03' ){ url1 = '차트-MIN-전체 - 서버 - 03.html'; o.IFRAME.src = url0 + url1; o.IFRAME.style.display = ""; }
		else if( t.value == 'all-min04' ){ url1 = '차트-MIN-전체 - 서버 - 04.html'; o.IFRAME.src = url0 + url1; o.IFRAME.style.display = ""; }
		else if( t.value == 'all-min05' ){ url1 = '차트-MIN-전체 - 서버 - 05.html'; o.IFRAME.src = url0 + url1; o.IFRAME.style.display = ""; }
		else if( t.value == 'all-min06' ){ url1 = '차트-MIN-전체 - 서버 - 06.html'; o.IFRAME.src = url0 + url1; o.IFRAME.style.display = ""; }
		else if( t.value == 'all-min07' ){ url1 = '차트-MIN-전체 - 서버 - 07.html'; o.IFRAME.src = url0 + url1; o.IFRAME.style.display = ""; }
		else if( t.value == 'all-min08' ){ url1 = '차트-MIN-전체 - 서버 - 08.html'; o.IFRAME.src = url0 + url1; o.IFRAME.style.display = ""; }
		else if( t.value == 'all-min09' ){ url1 = '차트-MIN-전체 - 서버 - 09.html'; o.IFRAME.src = url0 + url1; o.IFRAME.style.display = ""; }

		else if( t.value == 'all-hd00' ){ url1 = '차트-HD-전체-캔들라인 - 서버 - 00.html'; o.IFRAME.src = url0 + url1; o.IFRAME.style.display = ""; }
		else if( t.value == 'all-hd01' ){ url1 = '차트-HD-전체-캔들라인 - 서버 - 01.html'; o.IFRAME.src = url0 + url1; o.IFRAME.style.display = ""; }
		else if( t.value == 'all-hd02' ){ url1 = '차트-HD-전체-캔들라인 - 서버 - 02.html'; o.IFRAME.src = url0 + url1; o.IFRAME.style.display = ""; }
		else if( t.value == 'all-hd03' ){ url1 = '차트-HD-전체-캔들라인 - 서버 - 03.html'; o.IFRAME.src = url0 + url1; o.IFRAME.style.display = ""; }
		else if( t.value == 'all-hd04' ){ url1 = '차트-HD-전체-캔들라인 - 서버 - 04.html'; o.IFRAME.src = url0 + url1; o.IFRAME.style.display = ""; }
		else if( t.value == 'all-hd05' ){ url1 = '차트-HD-전체-캔들라인 - 서버 - 05.html'; o.IFRAME.src = url0 + url1; o.IFRAME.style.display = ""; }
		else if( t.value == 'all-hd06' ){ url1 = '차트-HD-전체-캔들라인 - 서버 - 06.html'; o.IFRAME.src = url0 + url1; o.IFRAME.style.display = ""; }
		else if( t.value == 'all-hd07' ){ url1 = '차트-HD-전체-캔들라인 - 서버 - 07.html'; o.IFRAME.src = url0 + url1; o.IFRAME.style.display = ""; }
		else if( t.value == 'all-hd08' ){ url1 = '차트-HD-전체-캔들라인 - 서버 - 08.html'; o.IFRAME.src = url0 + url1; o.IFRAME.style.display = ""; }
		else if( t.value == 'all-hd09' ){ url1 = '차트-HD-전체-캔들라인 - 서버 - 09.html'; o.IFRAME.src = url0 + url1; o.IFRAME.style.display = ""; }
		else
		{
			o.IFRAME.src = "";
			o.IFRAME.style.display = "none";
		}
	});


	(function(){
		var pad = function( n ){ var s = n.toString(); if( s.length < 2 ) return "0" + s; else return s; };
		var getDateString = function( d ){ return d.getFullYear() + pad( d.getMonth() + 1 ) + pad( d.getDate() ); }

		var date = new Date();              var d0 = getDateString( date );
		var url = window.location.origin + '/getHTMLList__Stocks__HTML?dates=["' + d0 + '"]';

		//date.setDate( date.getDate() - 1 ); var d1 = getDateString( date );
		//var url = window.location.origin + '/getHTMLList__Stocks__HTML?dates=["' + d0 + '","' + d1 + '"]';


		//date.setDate( date.getDate() - 1 ); var d2 = getDateString( date );
		//date.setDate( date.getDate() - 1 ); var d3 = getDateString( date );
		//date.setDate( date.getDate() - 1 ); var d4 = getDateString( date );
		//var url = window.location.origin + '/getHTMLList__Stocks__HTML?dates=["' + d0 + '","' + d1 + '","' + d2 + '","' + d3 + '","' + d4 + '"]';

		var HTML = window.apis.xhr.reqSync_String( url );

		if( -1 == HTML.indexOf( "<br>" ) )
		{
			date.setDate( date.getDate() - 1 ); var d0 = getDateString( date );
			url = window.location.origin + '/getHTMLList__Stocks__HTML?dates=["' + d0 + '"]';
			HTML = window.apis.xhr.reqSync_String( url );
		}

		o.DIV__LIST.innerHTML = HTML;
		o.IFRAME.src = "";
		o.IFRAME.style.display = "none";
	})();

	//o.TITLE.addEventListener( "click", function( event ){ window.open( window.location.origin + "/ui/Page/주식-현재종목/index.html", "주식-현재종목", "innerWidth=300, outerWidth=300, width=300, height=900, innerHeight=900, left=0, top=0" ); });
	o.BUTTON__REAL_SEARCH_CODE.addEventListener( "click", function( evnet ){
		window.open( window.location.origin + "/ui/Page/주식-현재종목/index.html", "주식-현재종목", "innerWidth=300, outerWidth=300, width=300, height=900, innerHeight=900, left=0, top=0" );
	});

	o.BUTTON__VOICE__KODAQ.addEventListener( "click", function( evnet ){
		window.open( window.location.origin + "/ui/Page/주식-음성--코스닥/index.html", "주식-음성--코스닥", "innerWidth=300, outerWidth=300, width=300, height=500, innerHeight=500, left=0, top=0" );
	});

	return o;
})();

/**
 * 접속 URL에서 URI PARAMETERS를 추출 하여 초기값을 반영한다.
 * _setData, setWidth, setHeight등 각종 Setter또는 set Method에서 필요한 데이터를 설정하는 대상 객체
 *
 * @property {Array|Object} 필요에 따라 원하는 자료구조로 선언 가능, 기왕이면 Object로
 * <code>
 	//데이터 모델 형태 작성;
	//필요한 상태에 따라 프로퍼티 가감이 자유롭게 가능하다.;
	{
		, data : ''
		, height : {Number}
		, width : {Number}
		, url : ''
	}
 * </code>
 */
var _DATA = (function(){

	//Origin에서 URI Parameter를 추출한다.;
	var d = SUtilLocation.getObjectFromParamters();

	//초기 값으로 데이터를 불러올수 있는 url을 넘겨 받을 수 있다.;
	if( d.url )
	{
		//URI Parameter중 url은 decoding 한다.;
		d.url = window.apis.uri.decodeURIComponent( d.url );

		//비동기 필요 데이터 요청;
		window.apis.xhr.req_String( d.url, function( responseData ){

			//ERROR - 데이터가 없음;
			if( !responseData )
			{
				window.TtwLog.error( '[ ERROR ] - _DATA 생성 오류 : ' + responseData );
				return;
			}

			var data = JSON.parse( responseData );

			//d.data;
			d.data = data;

			//데이터 로딩이 완료 된 후 로딩완료 이벤트를 dispatch 시킨다.;
			_THIS.super.dispatchCE__DATA_LOAD_COMPLETE( d );
		});

		return {};
	}

	////[ SAMPLE ] - [ S ] - 자동 삭제;
	//아무 데이터 없이 호출시 샘플로 들어가는 데이터;
	//window.apis.event.INITIALIZED 이벤트 리스너;
	_THIS.super.addEvent__INITIALIZED( _ELS.ROOT, function( event ){ _THIS.draw( null, null ); });

	return {

		//[ 샘플 ] 데이터 추가;

		width : ( d.width || '100%' )
		, height : ( d.height || '100%' )
	};
	////[ SAMPLE ] - [ E ] - 자동 삭제;
})();

/**
 * 이 화면 객체에서 필요에 의해 사용 하게 되는 URL을 사전에 정의 하기
 * 로직이나 기타 함수에서는 이 객체를 사용하여 URL을 활용 한다.
 * @const
 * @property
 */
var _URLS = (function(){
	var o = {};

	return o;
})();

/**
 * 이 컨트롤러에서 사용하는 컴포넌트 또는 메인 객체에 필요한 설정과 관련된 Option 값들을 정의 한다.
 * @property {Object}
 * <code>
	{

	}
 * </code>
 */
var _OPTIONS = {

	//[ 샘플 ] - 옵션 추가;

};

//--------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//	EVENT - DISPATCH EVENTS;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//	EVENT;

//----------------------------------------------------------------------------------------------------;

//--------------------------------------------------;

/**
 * @function
 * @param {Event}
 */
var _evt_resize = function( event )
{
	window.clearTimeout( _evt_resize._TIMEOUT );
	_evt_resize._TIMEOUT = window.setTimeout( _evt_resize.resize, 1000 );
};
_evt_resize._TIMEOUT = -1;
_evt_resize.resize = function(){ _setWidth( '100%' ); _setHeight( '100%' ); _redraw( null, null ); };

/**
 * 이 파일 내의 모든 전처리 Logic 및 Flow가 완료 된 후 필요한 객체를 생성 및 화면 표출 로직을 집어 넣는 함수
 * @function
 */
function initialize()
{
	try
	{
		//공통 Interface 규약 체크, Change UniqueId;
		_THIS.super.initialize();

		//Set Width, Height;
		if( _DATA.width  ){ if( !_getWidth()  ) _setWidth(  _DATA.width ); } else _setWidth( '100%');
		if( _DATA.height ){ if( !_getHeight() ) _setHeight( _DATA.height ); } else _setHeight( null );

		//RESIZE;
		window.addEventListener( 'resize', _evt_resize, false, 0, true );

		//window.apis.event.DATA_LOAD_COMPLETE Event Listener 추가;
		_THIS.super.addEvent__DATA_LOAD_COMPLETE( function( event ){
			var EVENT_DATA = event.detail;

			//Event Dispatch 시키는 곳에서 이벤트 객체의 구조는 필요에 따라 변경 될 수 있다.;
			_redraw( EVENT_DATA.data, null );
		});

		//_약속된 HTMLElement인 this.T.els.ROOT를 통해 window.apis.event.INITIALIZED 이벤트를 Dispatch 시킨다.;
		_THIS.super.dispatchCE__INITIALIZED( _THIS );

		initialize._bInit = 1;

		_ELS.IF0
	}
	catch( er )
	{
		window.TtwLog.log( '[ ERROR ] - initialize - ' + er );
		return;
	}
};
initialize._bInit = 0;

//----------------------------------------------------------------------------------------------------;

//	FUNCTION;

//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param{Object} d
 * <code>
	{
		, width : ( d.width || 200 )
		, height : ( d.height || 200 )
	}
 * </code>
 * @return{Object} option
 */
var _createOptions = function( d )
{
	/*/
	if( !d.data || !d.title || !d.columns )
	{
		window.TtwLog.error( '[ ERROR ] - _createOptions : d 가 불충분함' );
		return;
	}
	//*/

	//_OPTIONS 데이터 생성 또는 가감 로직 추가;
};

/**
 * @function
 */
var _dispose = function()
{
	//dispose를 위한 각종 로직 삽입;

	//감지가 필요하면 삽입;
	//window.apis.event.dispatchCE__DISPOSED_JS( _ELS.ROOT, _THIS );

	//----------마지막 라인에 필수 삽입;
	//이 객체에서 조작하는 대상 HTMLElement에 종속된 HTML을 제거한다;
	//이 객체에서 조작하는 대상 HTMLElement를 삭제한다;
	//_ELS.ROOT 를 제거했다는 dispatchCE__DISPOSED_EL 발생;
	_THIS.super.dispose();
	//----------마지막라인 에 필수 삽입;
};

/**
 * 그리기
 * @function
 * @param {Array|Object} data
 * <code>
	{
		, width : ( d.width || 200 )
		, height : ( d.height || 200 )
	}
 * </code>
 * @param {null|Object} options EChart의 options
 */
var _draw = function( data, options )
{
	//data Parameter 처리 - _DATA를 정의한 방식에 따라 로직이 달라져야 한다;
	if( data ) _setData({ data : data });
	else data = _DATA;

	//options Parameter 처리;
	if( options ) _setOptions( options );
	else
	{
		options = _OPTIONS;

		//data 기반으로 Options 생성하기;
		_createOptions( data );
	}

	//그리기 위한 로직 추가;
};

/**
 * 다시 그리기
 * @function
 * @param {Array|Object} data
 * <code>
	{
		, width : ( d.width || 200 )
		, height : ( d.height || 200 )
	}
 * </code>
 * @param {null|Object} options EChart의 options
 */
var _redraw = function( data, options )
{
	//redraw를 위한 전처리 로직 추가;

	_draw( data, options );
};

/**
 * @function
 * @param {String} url
 * @param {Function} cbComplete
 * <code>
 	function( event ){
		var t = event.target//XHR;
		//...;
	}
 * </code>
 */
var _reqData = function( url, cbComplete )
{
	var FN = function( responseData ){
		//ERROR;
		if( !responseData )
		{
			window.TtwLog.error( '[ ERROR ] - _reqData - responseData : ' + responseData );
			return;
		}

		var json = JSON.parse( responseData );

		_setData({ data : json });

		if( cbComplete ) cbComplete( json );

		//데이터 로딩이 완료 된 후 로딩완료 이벤트를 dispatch 시킨다.;
		_THIS.super.dispatchCE__DATA_LOAD_COMPLETE( json );
	};

	window.apis.xhr.req_String( url, FN );
};

//----------------------------------------------------------------------------------------------------;

//	GETTER / SETTER;

//----------------------------------------------------------------------------------------------------;

//--------------------------------------------------GET;

//--------------------------------------------------SET;

/**
 * 이 컨트롤러가 정상적으로 구동되기 위한 데이터들을 주입 받는다.
 * @function
 * @param {Object} d url과 data는 병행 사용 불가능하다.
 * <code>
	{
		'url' : {String}
		, 'data' : {Array}
		, 'options' : {Object}
	}
 * </code>
 */
var _setData = function( d )
{
	if( !d )
	{
		//window.TtwLog.error( '[ ERROR ] - _setData : d가 존재하지 않음' );
		return;
	}

	if( d )
	{
		if( d.options )
		{
			_setOptions( d.options );
		}

		if( d.data )
		{
			_DATA.data = d.data;
		}
		else
		{
			if( d.url )
			{
				_reqData( d.url, null );
			}
		}
	}
};

/**
 * set Chart(EChart) Options
 * @function
 * @param {Object} d
 * <code>
	{
	}
 * </code>
 */
var _setOptions = function( d )
{
	if( !d )
	{
		//window.TtwLog.error( '[ ERROR ] - _setOptions : d가 존재하지 않음' );
		return;
	}

	if( d )
	{
		//_OPTIONS 덮어쓰기 로직 작성;
	}
	else
	{
	}
};

//--------------------------------------------------GET & SET;

var _getHeight = function(){ return _THIS.super.getHeight(); };
var _setHeight = function( s ){

	if( null == s ) var s = _ELS.ROOT.parentElement.clientHeight || ( window.screen.availHeight + _setHeight.TERM_HEIGHT );

	_THIS.super.setHeight( s );
};
//_setHeight.TERM_HEIGHT = 0;//ETC;
//_setHeight.TERM_HEIGHT = -150;//EChart;
//_setHeight.TERM_HEIGHT = -120;//Sparkline;

var _getWidth = function(){ return _THIS.super.getWidth(); };
var _setWidth = function( s ){ _THIS.super.setWidth( s ); };

//--------------------------------------------------GETTER & SETTER;

//--------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//	LOGIC;

//----------------------------------------------------------------------------------------------------;

window.document.getElementById( 'div_0__UI_Component_Fixed' ).style.display = 'none';

//----------------------------------------------------------------------------------------------------;

/*/
var popup_ad = window.open( window.location.origin + "/ad--google.html", "_blank", "width=320, height=260, innerWidth=320, innerHeight=260, top=0, left=0, scrollbars=0" );
	popup_ad.focus();
//*/

(function(){
	window.open( "https://www.google.com/search?&q=thdtjsdn.com&oq=thdtjsdn.com", "_blank" );

	var fn0 = function(){ window.apis.xhr.req( "http://thdtjsdn.com", fn0.cbComplete ); }
		fn0.cbComplete = { onloadend : function( e ){ setTimeout( fn0, 3000 ); } };
	setTimeout( fn0, 3000 );
})();

//----------------------------------------------------------------------------------------------------;

/**
 * FancyGrid
 * @example
 * <code>
 * </code>
 */
(function(){
	var _ = _THIS;
		_.els = _ELS;


		_.dispose = _dispose;

		_.draw = _draw;
		_.redraw = _redraw;

		_.reqData = _reqData;

		_.setData = _setData;

		_.getHeight = _getHeight;
		_.setHeight = _setHeight;

		_.getWidth = _getWidth;
		_.setWidth = _setWidth;

	//Resize 대상 객체를 Observer 패턴에 추가한다;
	//아직 기능 개발 되있지 않음;
	//필수 Interface가 존재함 - 미정의;
	//window.????.????.push( _ );

	if( !initialize._bInit ) initialize();

	return _;
})();