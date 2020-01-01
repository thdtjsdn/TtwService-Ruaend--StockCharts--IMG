//----------------------------------------------------------------------------------------------------;
var fileNm = "js-common/apis/request/window.apis.request.getIp__SYS0310.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * 인수 req 에서 remoteIP 를 가져온다.
 * @function
 * @param {http.ClientRequest} req
 * @return {String} RemoteIP
 */
window.apis.request.getIp__SYS0310 = function( req )
{
	window.RayLog.timeStamp( "- [ S ] - " + "window.apis.request.getIp__SYS0310():String----------" );

	var ip = "";
	if( req.connection && req.connection.remoteAddress )
	{
		ip = req.connection.remoteAddress;
	}
	else
	{
		ip = req.ip;
	}

	window.RayLog.timeStamp( "- [ E ] - " + "window.apis.request.getIp__SYS0310():String----------" );

	return ip;
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;