(function(){var _CWD_=global.process.cwd()+"/";var s0="TtwPlatform-00000--NodeJS/Common-ConsoleBuild-000.js";try{require( _CWD_+s0 );}catch(er){}try{require( _CWD_+"../"+s0 );}catch(er){}try{require( _CWD_+"../../"+s0 );}catch(er){}try{require( _CWD_+"../../../"+s0 );}catch(er){}try{require( _CWD_+"../../../../"+s0 );}catch(er){}try{require( _CWD_+"../../../../../"+s0 );}catch(er){}})();
//----------------------------------------------------------------------------------------------------;
var fileNm = "BUILD - less, less_ui.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

var filePath_Const = "../less/_const_variable.less.import.txt";
var lessPath = "../less/";
var cssPath = "../css/";
var less_uiPath = "../less_ui/";
var css_uiPath = "../css_ui/";

var uiPath = "../ui/";

var sConstantValue = STtwUtilFsReadStream.getFile( filePath_Const ).toString( "utf8" );

SUtilFsWriteStream_Extension_Dev.create_CSS_FromLESS.o_Command.lessc = "lessc ";

//LESS Path에서 CSS를 만든 후 CSS 폴더로 복사 한다.;
try{ SUtilFsWriteStream_Extension_Dev.create_CSS_FromLESS( lessPath, cssPath, sConstantValue, true ); }catch( er ){ console.log( "try catch Error0 : " + er ); }

//LESS_UIComponent Path에서 CSS를 만든 후 CSS_UIComponent 폴더로 복사 한다.;
try{ SUtilFsWriteStream_Extension_Dev.create_CSS_FromLESS( less_uiPath, css_uiPath, sConstantValue, true ); }catch( er ){ console.log( "try catch Error1 : " + er ); }

//UI폴더의 전체 하위디렉토리까지 포함해서 LESS 파일을 CSS 파일로 생성한다.;
try{ SUtilFsWriteStream_Extension_Dev.create_CSS_FromLESS_SubDirectories( uiPath, sConstantValue, true ); }catch( er ){ console.log( "try catch Error2 : " + er ); }

//----------------------------------------------------------------------------------------------------;

try
{
	STtwUtilCP.sExec( "call css--createJSON.bat" );
	//STtwUtilCP.sExec( "call css--createJSON.sh.command" );
}
catch( er )
{
	console.error( "Error : " + er );
}

//----------------------------------------------------------------------------------------------------;

global.console.log( STtwUtilFsWriteStream_Extension_Dev.create_CSS_FromLESS.o_Command );

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

global.process.exit();
