(function(){var _CWD_=global.process.cwd()+"/";var s0="TtwPlatform-00000--NodeJS/Common-ConsoleBuild-000.js";try{require( _CWD_+s0 );}catch(er){}try{require( _CWD_+"../"+s0 );}catch(er){}try{require( _CWD_+"../../"+s0 );}catch(er){}try{require( _CWD_+"../../../"+s0 );}catch(er){}try{require( _CWD_+"../../../../"+s0 );}catch(er){}try{require( _CWD_+"../../../../../"+s0 );}catch(er){}})();
//----------------------------------------------------------------------------------------------------;
var fileNm = "BUILD - js.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

var jsPath = "../js/";
var filePath_Template = "BUILD - js.tjs";
//var rootInstanceKey = "global.";//NodeJS;
var rootInstanceKey = "window.";

//__list.json, __listPackage.json 생성;
try{ SUtilFsWriteStream_Extension_Dev.create_DirectoryAndFileList_JSON__JS( jsPath ); }catch( er ){ console.error( "try catch Error0 : " + er ); }

//__***define***.js 생성;
try{ SUtilFsWriteStream_Extension_Dev.create_Package_Define__JS( jsPath, filePath_Template, rootInstanceKey ); }catch( er ){ console.error( "try catch Error1 : " + er ); }

//----------------------------------------------------------------------------------------------------;

var jsPath = "../js-common/";try{ SUtilFsWriteStream_Extension_Dev.create_DirectoryAndFileList_JSON__JS( jsPath ); }catch( er ){ console.error( "try catch Error0 : " + er ); }try{ SUtilFsWriteStream_Extension_Dev.create_Package_Define__JS( jsPath, filePath_Template, rootInstanceKey ); }catch( er ){ console.error( "try catch Error1 : " + er ); }

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

global.process.exit();
