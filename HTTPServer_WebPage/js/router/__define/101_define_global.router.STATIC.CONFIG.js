//----------------------------------------------------------------------------------------------------;
//var fileNm = "js/router/__define/101_define_global.router.STATIC.CONFIG.js";
//if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

var _ = "";

//--------------------------------------------------[ S ] - global.router.STATIC.CONFIG;

global.router.STATIC.CONFIG = global.router.STATIC.CONFIG || {};

global.TtwLog.timeStamp( "--------------------------------------------------[ S ] - global.router.STATIC.CONFIG.URL" );
global.router.STATIC.CONFIG.URL = {};
global.router.STATIC.CONFIG.URL._COMMON = "http://localhost:49320/";//시스템 개별 정의;

global.router.STATIC.CONFIG.URL.MEMBER = {};
global.router.STATIC.CONFIG.URL.MEMBER.COMMON = global.router.STATIC.CONFIG.URL._COMMON + "member/";

global.router.STATIC.CONFIG.URL.MEMBER.MEMBER_SESSION = {};
/*/
global.router.STATIC.CONFIG.URL.MEMBER.MEMBER_SESSION.COMMON = global.router.STATIC.CONFIG.URL.MEMBER.COMMON + "member_session/";
_ = global.router.STATIC.CONFIG.URL.MEMBER.MEMBER_SESSION.COMMON;
global.router.STATIC.CONFIG.URL.MEMBER.MEMBER_SESSION.CHECK_SESSION = _ + "checkSession?";
global.router.STATIC.CONFIG.URL.MEMBER.MEMBER_SESSION.DESTROY_SESSION = _ + "destroySession";
/*/
global.router.STATIC.CONFIG.URL.MEMBER.MEMBER_SESSION.COMMON = global.router.STATIC.CONFIG.URL.MEMBER.COMMON + "session/";
_ = global.router.STATIC.CONFIG.URL.MEMBER.MEMBER_SESSION.COMMON;
global.router.STATIC.CONFIG.URL.MEMBER.MEMBER_SESSION.CHECK_SESSION = _ + "check_session?";
global.router.STATIC.CONFIG.URL.MEMBER.MEMBER_SESSION.DESTROY_SESSION = _ + "destroy_session";
//*/
global.TtwLog.timeStamp( "--------------------------------------------------[ E ] - global.router.STATIC.CONFIG.URL" );

//--------------------------------------------------[ E ] - global.router.STATIC.CONFIG;

//----------------------------------------------------------------------------------------------------;
//if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//--------------------------------------------------------------------------------------------------;