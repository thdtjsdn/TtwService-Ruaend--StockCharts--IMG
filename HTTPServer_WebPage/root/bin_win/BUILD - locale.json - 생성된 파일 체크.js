(function(){var _CWD_=global.process.cwd()+"/";var s0="TtwPlatform-00000--NodeJS/Common-ConsoleBuild-000.js";try{require( _CWD_+s0 );}catch(er){}try{require( _CWD_+"../"+s0 );}catch(er){}try{require( _CWD_+"../../"+s0 );}catch(er){}try{require( _CWD_+"../../../"+s0 );}catch(er){}try{require( _CWD_+"../../../../"+s0 );}catch(er){}try{require( _CWD_+"../../../../../"+s0 );}catch(er){}})();
//----------------------------------------------------------------------------------------------------;
var fileNm = "BUILD - locale.json - 생성된 파일 체크.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

//var rootPath = "../ui/";
//var rootPath = "../ui_template/";
//var rootPath = "../ui_template_custom/";

//var rootPath = "../ui_include/";

var extension = ".thtml";

//Overwrite true시 다른 JSON들도 전부 초기화 되니 주의;
var bOverWrite = false;

//지정 폴더;
SUtilFsWriteStream_Extension_Dev.create_TemplateJSON_FromHTMLDirectory__CheckOriginalJSON( rootPath, extension, bOverWrite );

//하위폴더 모두 포함;
SUtilFsWriteStream_Extension_Dev.create_TemplateJSON_FromHTMLDirectory__SubDirectories__CheckOriginalJSON( rootPath, extension, bOverWrite );

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

global.process.exit();
