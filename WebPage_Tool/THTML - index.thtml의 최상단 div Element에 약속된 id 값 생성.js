var PATH000 = "D:/GitHub_Ttw--Base/TtwService-Ruaend--StockCharts--IMG/WebPage/root/ui_template/";
var PATH001 = "D:/GitHub_Ttw--Base/TtwService-Ruaend--StockCharts--IMG/WebPage_Tool/";

//----------------------------------------------------------------------------------------------------;

var FNS = {
	getHTMLIDFromPath : function( path ){
		var HTMLElementID = "ui/" + path.replace( PATH000, "" ).replace( ".thtml", "" );
		return HTMLElementID;
	}
};

//----------------------------------------------------------------------------------------------------;

var FN0 = function( htmlFilePath ){
	var fStr = SUtilFsReadStream.getFile( htmlFilePath ).toString();

	//빈 파일인지 체크;
	//if( 0 == fStr.length )
	{
		var HTMLElementID = FNS.getHTMLIDFromPath( htmlFilePath );
			global.console.log( HTMLElementID );

		//ui_template/Page/의 thtml인지 체크
		if( -1 != htmlFilePath.indexOf( "/ui_template/Page/" ) )
		{
			var html = FN0.TEMPLATE_DIV_PAGE;
			var a_nm = HTMLElementID.split( "/" );

			html = html.replace( /\{\{id\}\}/gi, HTMLElementID )
				.replace( "{{nm}}", a_nm[ a_nm.length - 2 ] );

			/*///전체 강제 재작성;
			SUtilFsWriteStream.writeFile_UTF8( htmlFilePath, html );
			/*/
			if( -1 == fStr.indexOf( HTMLElementID ) )
			{
				SUtilFsWriteStream.writeFile_UTF8( htmlFilePath, html );
			}
			//ui/Page/Main/index/index 두번 들어간 실수 수정;
			else if( -1 != fStr.indexOf( HTMLElementID + "/index" ) )
			{
				SUtilFsWriteStream.writeFile_UTF8( htmlFilePath, html );
			}
			//*/
		}
		//ui_template/Popup/의 thtml인지 체크;
		else if( -1 != htmlFilePath.indexOf( "/ui_template/Popup/" ) )
		{
			var html = FN0.TEMPLATE_DIV_POPUP;
			var a_nm = HTMLElementID.split( "/" );

			html = html.replace( /\{\{id\}\}/gi, HTMLElementID )
				.replace( "{{nm}}", a_nm[ a_nm.length - 2 ] );

			/*///전체 강제 재작성;
			SUtilFsWriteStream.writeFile_UTF8( htmlFilePath, html );
			/*/
			if( -1 == fStr.indexOf( HTMLElementID ) )
			{
				SUtilFsWriteStream.writeFile_UTF8( htmlFilePath, html );
			}
			//ui/Popup/Main/index/index 두번 들어간 실수 수정;
			else if( -1 != fStr.indexOf( HTMLElementID + "/index" ) )
			{
				SUtilFsWriteStream.writeFile_UTF8( htmlFilePath, html );
			}
			//*/
		}
		else
		{
			var html = FN0.TEMPLATE_DIV;
			var a_nm = HTMLElementID.split( "/" );

			html = html.replace( /\{\{id\}\}/gi, HTMLElementID )
				.replace( "{{nm}}", a_nm[ a_nm.length - 2 ] );

			/*///전체 강제 재작성;
			SUtilFsWriteStream.writeFile_UTF8( htmlFilePath, html );
			/*/
			if( -1 == fStr.indexOf( HTMLElementID ) )
			{
				SUtilFsWriteStream.writeFile_UTF8( htmlFilePath, html );
			}
			//ui/Page/???/index/index 두번 들어간 실수 수정;
			else if( -1 != fStr.indexOf( HTMLElementID + "/index" ) )
			{
				SUtilFsWriteStream.writeFile_UTF8( htmlFilePath, html );
			}
			//*/
		}
	}

	//JS;
	var path = htmlFilePath.replace( ".thtml", ".js" );
	var fStr = SUtilFsReadStream.getFile( path ).toString();
	//빈 파일인지 체크;
	if( 0 == fStr.length )
	{
		var HTMLElementID = FNS.getHTMLIDFromPath( htmlFilePath );
		var js = FN0.TEMPLATE_JS.replace( /<!=PATH_ID=!>/gi, HTMLElementID );
		SUtilFsWriteStream.writeFile_UTF8( path, js );
	}
};
FN0.TEMPLATE_DIV = `<div id="{{id}}">
{{nm}}
</div>`;

FN0.TEMPLATE_DIV_PAGE = `<include-html>./ui_include/SYS0310/Page/000-----index-----First.html</include-html>
<div id="{{id}}">
{{nm}}
</div>
<SCRIPT type="text/javascript">
	window.initialized = function(){
		var HOST = window.b2link.url.getServerURL_WebServer_SCODE( "SYS0310" );

		//JS;
		var f = SUtilTemplateHTML.addJS__URLToHead;
			f( HOST + "/{{id}}.js" );
	};
</SCRIPT>
<include-html>./ui_include/SYS0310/Page/000-----index-----Last.html</include-html>`;

FN0.TEMPLATE_DIV_POPUP = `<include-html>./ui_include/SYS0310/Popup/000-----index-----First.html</include-html>
<div id="{{id}}">
{{nm}}
</div>
<SCRIPT type="text/javascript">
	window.initialized = function(){
		var HOST = window.b2link.url.getServerURL_WebServer_SCODE( "SYS0310" );

		//JS;
		var f = SUtilTemplateHTML.addJS__URLToHead;
			f( HOST + "/{{id}}.js" );
	};
</SCRIPT>
<include-html>./ui_include/SYS0310/Popup/000-----index-----Last.html</include-html>`;

FN0.TEMPLATE_JS = SUtilFsReadStream.getFile( PATH001 + "THTML - index.thtml의 최상단 div Element에 약속된 id 값 생성 - index.tjs" ).toString();

//----------------------------------------------------------------------------------------------------;

var a =
[
	"D:/GitHub_Ttw--Base/TtwService-Ruaend--StockCharts--IMG/WebPage/root/ui_template/index.thtml",

	"D:/GitHub_Ttw--Base/TtwService-Ruaend--StockCharts--IMG/WebPage/root/ui_template/Application/SiteMap/index.thtml",
	"D:/GitHub_Ttw--Base/TtwService-Ruaend--StockCharts--IMG/WebPage/root/ui_template/Page/주식-차트-이미지/index.thtml",
	"D:/GitHub_Ttw--Base/TtwService-Ruaend--StockCharts--IMG/WebPage/root/ui_template/_TEMPLATE/Application/index.thtml",
	"D:/GitHub_Ttw--Base/TtwService-Ruaend--StockCharts--IMG/WebPage/root/ui_template/_TEMPLATE/Page/index.thtml",
	"D:/GitHub_Ttw--Base/TtwService-Ruaend--StockCharts--IMG/WebPage/root/ui_template/_TEMPLATE/Popup/index.thtml"





	//"D:/GitHub_Ttw--Base/TtwService-Ruaend--StockCharts--IMG/WebPage/root/ui_template/_TEMPLATE는 무시 한다;
	//"D:/GitHub_Ttw--Base/TtwService-Ruaend--StockCharts--IMG/WebPage/root/ui_template/_TEMPLATE/Application/index.thtml",
	//"D:/GitHub_Ttw--Base/TtwService-Ruaend--StockCharts--IMG/WebPage/root/ui_template/_TEMPLATE/Page/index.thtml",
	//"D:/GitHub_Ttw--Base/TtwService-Ruaend--StockCharts--IMG/WebPage/root/ui_template/_TEMPLATE/Popup/index.thtml"
]
;

a.forEach( function( item ){
	FN0( item );
	global.console.log( item );
});