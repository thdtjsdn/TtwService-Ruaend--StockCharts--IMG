
window.DATES = JSON.parse( SUtilXMLHttpReqGet.reqSyncReturn( "http://thdtjsdn.com/json/stock_chartdata_date_sparkline - 공통/_DATES--긴.json" ).responseText );

var DATE = window.DATES[ 0 ].replace( /\-.*/gi, "" );

//----------------------------------------------------------------------------------------------------;

//	CREATE FOLDERS;

//----------------------------------------------------------------------------------------------------;

var f0 = SUtilFsWriteStream.createDirectory__BeforCheck;
	f0( "../WebPage/root/json/stock_chartdata_date_sparkline/" + DATE + "/" );
	f0( "../WebPage/root/json/stock_chartdata_date_sparkline/" + window.DATES[ 0 ] + "/" );

	f0( "../WebPage/root/json/stock-당일체결상세-분/" + DATE + " - 분 - JSON - 정제/" );