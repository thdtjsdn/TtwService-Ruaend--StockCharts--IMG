window.document.body.style.backgroundColor = " !important";

/*/
(function(){
	var FN = function(){ SUtilXMLHttpReqGet.req( "http://thdtjsdn.com/html/ad/google/ad--google--100per x 271.html", { onloadend : function( e ){
			var html = e.target.responseText;
			try{ var t = window.document.getElementById( "ID-AD--GOOGLE" ).children; t[ 0 ].remove(); t[ 0 ].remove(); t[ 0 ].remove(); }catch( er ){}
			window.document.getElementById( "ID-AD--GOOGLE" ).innerHTML = html;
	}});};
	setInterval( FN, 10000 );
})();
//*/

(function(){
	var FN = function(){
		SUtilXMLHttpReqGet.req( "http://thdtjsdn.com/download__message_stock?t=" + Date.now(), { onloadend : function( e ){
				var t = e.target.responseText;

				if( !t ){ setTimeout( FN, FN.TIMEOUT_TIME ); return; }

				if( FN.last_str == t ){ setTimeout( FN, FN.TIMEOUT_TIME ); return; }else{ FN.last_str = t; }

				if( t ){
					/*/
					FN.audio_ding.play();
					//*/

					try{ var str = SUtilXMLHttpReqGet.reqSyncReturn( FN.URL0 + t + ".txt" ).responseText; }
					catch(er){
						setTimeout( FN, FN.TIMEOUT_TIME );
						return;
					}

					if( str.indexOf( "4 Not Found" ) != -1 ){
						setTimeout( FN, FN.TIMEOUT_TIME );
						return;
					}

					FN.appendMessage( t, str );

					try
					{
						var a = window.document.getElementsByClassName( "message" );
						FN.SSU.text = a[ a.length-1 ].children[ 2 ].innerText.replace( /\~/gi, "" ).replace( /\//gi, "" ).replace( /ㅋ/gi, "크" ).replace( /ㅎ/gi, "흐" ).replace( /oo/gi, "응" );
						window.speechSynthesis.speak( FN.SSU );
					}
					catch(er)
					{
						FN.audio_ding.play();
					}


					//FN.audioSrc.src = "http://thdtjsdn.com/txt/message/stock/" + t + ".mp3";
					//try{ FN.audio.load(); FN.audio.play(); } catch(er){}
				}

				setTimeout( FN, FN.TIMEOUT_TIME );
			}
		});
	};
	try
	{
		FN.SSU = new SpeechSynthesisUtterance();
		FN.SSU.lang = "ko-KR";
		FN.SSU.voice = window.speechSynthesis.getVoices()[15];
		FN.SSU.rate = 1.3;
	}
	catch(er)
	{
	}


	FN.TEMP_EL = window.document.createElement( "div" );
	FN.URL0 = "http://thdtjsdn.com/txt/message/stock/";
	FN.pad = function( n ){ var s = n.toString(); if( s.length == 1 ) return "0" + s; else return s; };
	FN.appendMessage = function( t, str ){
		var el = window.document.getElementById( "ui/Page/주식-메세지-뷰어-음성/index--메세지" );
		var html = '<div class="message" data-date="{{DATE}}">';
			html = html.replace( "{{DATE}}", t );

		if( str.indexOf( "4 Not Found" ) != -1 ){
			return;
		}

		FN.last_str = t;

		var d = new Date( Number( t ) );
		//var date = d.getFullYear() + FN.pad( d.getMonth() + 1 ) + FN.pad( d.getDate() ) + " " + FN.pad( d.getHours() ) + ":" + FN.pad( d.getMinutes() ) + ":" + FN.pad( d.getSeconds() );
		var date = d.getFullYear() + "-" + FN.pad( d.getMonth() + 1 ) + "-" + FN.pad( d.getDate() ) + " " + FN.pad( d.getHours() ) + ":" + FN.pad( d.getMinutes() ) + ":" + FN.pad( d.getSeconds() );
		if( str.indexOf( "</a>" ) != -1 ){
			html += '<div class="time">' + date + ' </div><span>　-　</span><div style="overflow-y:hidden;">' + str + '</div>';
		}
		else{
			if( str.indexOf( "\n" ) != -1 && str.indexOf( "<table" ) == -1 ){
				html += '<div class="time">' + date + ' </div><span>　-　</span><div style="overflow-y:hidden;">' + str.replace( /\n/gi, "<br>" ) + '</div>';
			}
			else html += '<div class="time">' + date + ' </div><span>　-　</span><div style="overflow-y:hidden;">' + str + '</div>';
		}

		html += '</p>';

		/*/
		//el.appendChild( window.apis.html.createHTMLElement( "<br>" ) );
		el.appendChild( window.apis.html.createHTMLElement( html ) );
		/*/
		FN.TEMP_EL.innerHTML = html;
		el.appendChild( FN.TEMP_EL.children[ 0 ] );
		//*/

		el.scrollBy( 0, 200 );
	};
	FN.notify = function( str ){
		if( Notification.permission !== 'granted' ) alert( 'notification is disabled' );
		else {
			var notification = new Notification( 'Ttw Message', {
				  icon : ""
				, body : str
			});
			//notification.onclick = function(){ window.open( 'http://google.com' ); };
		}
	};
	FN.audio_ding = window.document.getElementById( "ID-AUDIO-DING" );
	FN.audio = window.document.getElementById( "ID-AUDIO" );
	FN.audioSrc = window.document.getElementById( "ID-AUDIO_SRC" );
	FN.last_str = "";
	FN.TIMEOUT_TIME = 5000;

	setTimeout(function(){

		//if( window.Notification ) Notification.requestPermission();

		FN.audio_ding.load();

		var d = new Date();

		var a0 = [];
		var a1 = [];
		try{
			var DATE_STRING = d.getFullYear() + FN.pad( d.getMonth() + 1 ) + FN.pad( d.getDate() );
			var str = SUtilXMLHttpReqGet.reqSyncReturn( FN.URL0 + "__" + DATE_STRING + ".txt" ).responseText;
				a0 = str.split( "\n|" );
		}catch(er){}

		try{
			d.setDate( d.getDate() - 1 );
			var DATE_STRING = d.getFullYear() + FN.pad( d.getMonth() + 1 ) + FN.pad( d.getDate() );
			var str = SUtilXMLHttpReqGet.reqSyncReturn( FN.URL0 + "__" + DATE_STRING + ".txt" ).responseText;
			a1 = str.split( "\n|" );
			a0 = a1.concat( a0 );
		}catch(er){}

		try{
			d.setDate( d.getDate() - 1 );
			var DATE_STRING = d.getFullYear() + FN.pad( d.getMonth() + 1 ) + FN.pad( d.getDate() );
			var str = SUtilXMLHttpReqGet.reqSyncReturn( FN.URL0 + "__" + DATE_STRING + ".txt" ).responseText;
			a1 = str.split( "\n|" );
			a0 = a1.concat( a0 );
		}catch(er){}

		try{
			d.setDate( d.getDate() - 1 );
			var DATE_STRING = d.getFullYear() + FN.pad( d.getMonth() + 1 ) + FN.pad( d.getDate() );
			var str = SUtilXMLHttpReqGet.reqSyncReturn( FN.URL0 + "__" + DATE_STRING + ".txt" ).responseText;
			a1 = str.split( "\n|" );
			a0 = a1.concat( a0 );
		}catch(er){}

		try{
			d.setDate( d.getDate() - 1 );
			var DATE_STRING = d.getFullYear() + FN.pad( d.getMonth() + 1 ) + FN.pad( d.getDate() );
			var str = SUtilXMLHttpReqGet.reqSyncReturn( FN.URL0 + "__" + DATE_STRING + ".txt" ).responseText;
			a1 = str.split( "\n|" );
			a0 = a1.concat( a0 );
		}catch(er){}

		try{ a0.forEach(function( item ){
			var aa = [];
			var idx0 = item.indexOf( " - " );
			aa[ 0 ] = item.slice( 0, idx0 );
			aa[ 1 ] = item.slice( idx0 + 3, item.length );

			if( aa[ 1 ] ) FN.appendMessage( aa[ 0 ], aa[ 1 ] );

		}); }catch(e){}


		if( a0[ a0.length-1 ].indexOf( "404 Not Found" ) != -1 ){
			FN.last_str = a0[ a0.length-2 ].split( " - " )[ 0 ];
		}
		else{
			FN.last_str = a0[ a0.length-1 ].split( " - " )[ 0 ];
		}


		setTimeout( FN, FN.TIMEOUT_TIME );
	}, 3000 );

	window.__FN = FN;
})();





(function(){
	var evt_mClick = function( event ){
		var t = event.target;
		if( t.tagName != "DIV" ) return;

		debugger;

		if( t.parentElement.getAttribute( "class" ) != "message" ) return;

		if( t.getAttribute( "class" ) == "time" ){
			var a = window.document.getElementById( "ui/Page/주식-메세지-뷰어-음성/index--메세지" ).children;
			var fn = function(){
				var el = a[ fn.i ];
				if( !el ){
					el.style.backgroundColor = "";
					++fn.i;
					if( fn.i >= fn.iLen ) return;
					setTimeout( fn, 1 );
				}

				el.style.backgroundColor = "brown";
				window.document.getElementById( "ui/Page/주식-메세지-뷰어-음성/index--메세지" ).scrollTo( 0, el.offsetTop - el.offsetHeight - 100 );

				var str = el.children[2].innerText;
				window.__FN.SSU.text = str.replace( /\~/gi, "" ).replace( /\//gi, "" ).replace( /ㅋ/gi, "크" ).replace( /ㅎ/gi, "흐" ).replace( /oo/gi, "응" );

				window.__FN.SSU.onerror = function( event ){
					el.style.backgroundColor = "";
					++fn.i;
					if( fn.i >= fn.iLen ) return;
					setTimeout( fn, 1 );
				};
				window.__FN.SSU.onend = function( event ){
					el.style.backgroundColor = "";
					++fn.i;
					if( fn.i >= fn.iLen ) return;
					setTimeout( fn, 1 );
				};

				try
				{
					window.speechSynthesis.speak( window.__FN.SSU );
				}
				catch(er)
				{
					++fn.i;
					if( fn.i >= fn.iLen ) return;
					setTimeout( fn, 1 );
					return;
				}
			};
			fn.i = Array.prototype.slice.call( a ).indexOf( t.parentElement );
			fn.io = null;
			fn.iLen = a.length;
			fn.list = a;
			setTimeout( fn, 1 );
		}
	};

	window.document.getElementById( "ui/Page/주식-메세지-뷰어-음성/index--메세지" ).addEventListener( "click", evt_mClick );
	window.document.getElementById( "ui/Page/주식-메세지-뷰어-음성/index--메세지0" )
})();





window.document.getElementById( "ui/Page/주식-메세지-뷰어-음성/index--BUTTON--불러오기" ).addEventListener( "click", function( event ){ alert( "준비중" ); });
window.document.getElementById( "ui/Page/주식-메세지-뷰어-음성/index--BUTTON--불러오기0" ).addEventListener( "click", function( event ){ alert( "준비중" ); });

window.document.getElementById( "ui/Page/주식-메세지-뷰어-음성/index--BUTTON--재생정지" ).addEventListener( "click", function( event ){ window.speechSynthesis.pause(); });
window.document.getElementById( "ui/Page/주식-메세지-뷰어-음성/index--BUTTON--재생정지0" ).addEventListener( "click", function( event ){ window.speechSynthesis.pause(); });





/*/
var a = window.document.getElementsByClassName( "message" );
a[ a.length-1 ].children[ 2 ].innerText
//*/
(function(){
	var evt_mClick = function( event ){

		var a = window.document.getElementsByClassName( "message" );
		var fn = function(){
			var el = a[ fn.iLen ];
			if( !el ){
				el.style.backgroundColor = "";
				--fn.iLen;
				if( fn.iLen < 0 ) return;
				setTimeout( fn, 1 );
			}

			el.style.backgroundColor = "brown";
			window.document.getElementById( "ui/Page/주식-메세지-뷰어-음성/index--메세지" ).scrollTo( 0, el.offsetTop - el.offsetHeight - 100 );

			var str = el.children[2].innerText;
			window.__FN.SSU.text = str.replace( /\~/gi, "" ).replace( /\//gi, "" ).replace( /ㅋ/gi, "크" ).replace( /ㅎ/gi, "흐" ).replace( /oo/gi, "응" );

			window.__FN.SSU.onerror = function( event ){
				el.style.backgroundColor = "";
				--fn.iLen;
				if( fn.iLen < 0 ) return;
				setTimeout( fn, 1 );
			};
			window.__FN.SSU.onend = function( event ){
				el.style.backgroundColor = "";
				--fn.iLen;
				if( fn.iLen < 0 ) return;
				setTimeout( fn, 1 );
			};

			try
			{
				window.speechSynthesis.speak( window.__FN.SSU );
			}
			catch(er)
			{
				debugger;
				--fn.iLen;
				if( fn.iLen < 0 ) return;
				setTimeout( fn, 1 );
				return;
			}
		};
		fn.i = 0;
		fn.io = null;
		fn.iLen = a.length - 1;
		fn.list = a;
		setTimeout( fn, 1 );
	};
	window.document.getElementById( "ui/Page/주식-메세지-뷰어-음성/index--BUTTON--재생" ).addEventListener( "click", evt_mClick );
	window.document.getElementById( "ui/Page/주식-메세지-뷰어-음성/index--BUTTON--재생0" ).addEventListener( "click", evt_mClick );
})();





window.document.getElementById( "ui/Page/주식-메세지-뷰어-음성/index--BUTTON--초기화" ).addEventListener( "click", function( event ){ alert( "준비중" ); });
window.document.getElementById( "ui/Page/주식-메세지-뷰어-음성/index--BUTTON--초기화0" ).addEventListener( "click", function( event ){ alert( "준비중" ); });





(function(){
	var evt_mClick = function( event ){
		var el = window.document.getElementById( "ui/Page/주식-메세지-뷰어-음성/index--메세지" );
		var a = el.children;

		var ta = [];
		var i=0, iLen=a.length;
		for( ; i<iLen; ++i ){
			if(    a[ i ].innerText.indexOf( "[ 행동 추적 봇 ]" ) != -1
				|| a[ i ].innerText.indexOf( "[행동 추적 봇]" ) != -1
				|| a[ i ].innerText.indexOf( "[가상화폐 알림봇]" ) != -1
				|| a[ i ].innerText.indexOf( "[ 가상화폐 알림봇 ]" ) != -1
				|| a[ i ].innerText.indexOf( "[ 주식 자동매매 알림봇 ]" ) != -1
				|| a[ i ].innerText.indexOf( "종목별 수급 순위 목록" ) != -1
			) ta.push( a[ i ] );
		}
		ta.forEach(function( item ){ try{ item.remove(); }catch(er){} })
	};
	window.document.getElementById( "ui/Page/주식-메세지-뷰어-음성/index--BUTTON--봇메세지삭제" ).addEventListener( "click", evt_mClick );
	window.document.getElementById( "ui/Page/주식-메세지-뷰어-음성/index--BUTTON--봇메세지삭제0" ).addEventListener( "click", evt_mClick );
})();





(function(){
	var evt_mClick = function( event ){
		var el = window.document.getElementById( "ui/Page/주식-메세지-뷰어-음성/index--메세지" );
		var a = el.children;

		var ta = [];
		var i=0, iLen=a.length;
		for( ; i<iLen; ++i ){
			if(    a[ i ].innerHTML.indexOf( "<a" ) != -1
				&& a[ i ].innerHTML.indexOf( 'href="' ) != -1 ) ta.push( a[ i ] );
		}
		ta.forEach(function( item ){ try{ item.remove(); }catch(er){} })
	};
	window.document.getElementById( "ui/Page/주식-메세지-뷰어-음성/index--BUTTON--뉴스만삭제" ).addEventListener( "click", evt_mClick );
	window.document.getElementById( "ui/Page/주식-메세지-뷰어-음성/index--BUTTON--뉴스만삭제0" ).addEventListener( "click", evt_mClick );
})();





(function(){
	var evt_mClick = function( event ){
		var el = window.document.getElementById( "ui/Page/주식-메세지-뷰어-음성/index--메세지" );
		var a = el.children;

		var ta = [];
		var i=0, iLen=a.length;
		for( ; i<iLen; ++i ){
			if(    a[ i ].innerHTML.indexOf( "<a" ) == -1
				&& a[ i ].innerHTML.indexOf( 'href="' ) == -1 ) ta.push( a[ i ] );
		}
		ta.forEach(function( item ){ try{ item.remove(); }catch(er){} })
	};
	window.document.getElementById( "ui/Page/주식-메세지-뷰어-음성/index--BUTTON--뉴스제외삭제" ).addEventListener( "click", evt_mClick );
	window.document.getElementById( "ui/Page/주식-메세지-뷰어-음성/index--BUTTON--뉴스제외삭제0" ).addEventListener( "click", evt_mClick );
})();





(function(){
	var FN = function(){
		FN.EL_IFRAMES[ 0 ].src = "http://thdtjsdn.com/index.iframe.ad.html";

		setTimeout( FN, 30000 );
	};
	FN.EL_IFRAMES = [
		window.document.getElementById( "if0" )
	];

	setTimeout( FN, 30000 );
})();