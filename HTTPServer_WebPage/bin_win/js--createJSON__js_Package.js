(function(){var _CWD_=global.process.cwd()+"/";var s0="TtwPlatform-00000--NodeJS/Common-ConsoleBuild-000.js";try{require( _CWD_+s0 );}catch(er){}try{require( _CWD_+"../"+s0 );}catch(er){}try{require( _CWD_+"../../"+s0 );}catch(er){}try{require( _CWD_+"../../../"+s0 );}catch(er){}try{require( _CWD_+"../../../../"+s0 );}catch(er){}try{require( _CWD_+"../../../../../"+s0 );}catch(er){}})();
//----------------------------------------------------------------------------------------------------;
var fileNm = "js--createJSON__JS_Package.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

var jsPath = "../js/";
var filePath_Template = "js--createJS__js.namespace.__define.200_define__files.template";
var rootInstanceKey = "global.";//NodeJS;
//var rootInstanceKey = "window.";

//__list.json, __listPackage.json 생성;
try{ SUtilFsWriteStream_Extension_Dev.create_DirectoryAndFileList_JSON__JS( jsPath ); }catch( er ){ console.error( "try catch Error0 : " + er ); }

//__***define***.js 생성;
try{ SUtilFsWriteStream_Extension_Dev.create_Package_Define__JS( jsPath, filePath_Template, rootInstanceKey ); }catch( er ){ console.error( "try catch Error1 : " + er ); }

//----------------------------------------------------------------------------------------------------;

var jsPath="../js__SYS0320/";try{SUtilFsWriteStream_Extension_Dev.create_DirectoryAndFileList_JSON__JS(jsPath);}catch(er){console.error("try catch Error0 : " + er);}try{SUtilFsWriteStream_Extension_Dev.create_Package_Define__JS(jsPath,filePath_Template,rootInstanceKey);}catch(er){console.error("try catch Error1 : " + er);}

//----------------------------------------------------------------------------------------------------;

global.process.exit();

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;