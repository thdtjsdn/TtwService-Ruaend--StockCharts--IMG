window["__INITIALIZE-PACKAGE__"]=function(){var n="http://thdtjsdn.com:49323";SUtilTemplateHTML.addJS__URL(n+"/js__Merge/___merge_min_all_1_0.js"),SUtilTemplateHTML.addJS__URL(n+"/libs/ECharts/import-js.js"),delete window["__INITIALIZE-PACKAGE__"],function(){var n=SUtilXMLHttpReqGet.reqSyncReturn,t=JSON.parse;window.DATES=t(n("http://thdtjsdn.com/json/stock_chartdata_date_sparkline - 공통/_DATES--긴.json").responseText),window.LISTS=t(n("http://thdtjsdn.com/json/stock_dynamic/전종목 시세 - 선택.json").responseText);var e=SUtilXMLHttpReqGet.reqSyncReturn("http://thdtjsdn.com/json/stock-자동매매결과/"+window.DATES[4].replace(/\-.*/gi,"")+".json").responseText,a=JSON.parse(e);window.OOO=a}(),window.addEventListener("click",function(n){var t=n.target;if("TD"==t.tagName){var e=t.getAttribute("data-code"),a=t.innerText;if(e)if(n.ctrlKey){try{SUtilXMLHttpReqGet.req("http://localhost:49323/setStocksCode?code="+e)}catch(o){}try{SUtilXMLHttpReqGet.req("http://192.168.0.19:49323/setStocksCode?code="+e)}catch(o){}try{SUtilXMLHttpReqGet.req("http://192.168.0.2:49323/setStocksCode?code="+e)}catch(o){}}else window.open("http://thdtjsdn.com/ui/Page/주식-정보--종합/index.html?name="+a,null,"popup")}}),function(){window.__refresh__account__clear=function(n){window.OOO.b_p=0,window.OOO.b=0,window.OOO.s=0,window.OOO.p=0,window.OOO.f=0;for(var e in window.OOO)delete window.OOO[e];window.document.getElementById("ID-TRADING-BOARD-매수금").children[1].innerText=0,window.document.getElementById("ID-TRADING-BOARD-매도금").children[1].innerText=0,window.document.getElementById("ID-TRADING-BOARD-익절금").children[1].innerText=0,window.document.getElementById("ID-TRADING-BOARD-수수료").children[1].innerText=0,window.document.getElementById("ID-TRADING-BOARD-수익상태").children[1].innerText=0;try{window.apis.element.removeAllChildren(t.AUTO_TRADING.EL_ACCOUNT_TBODY)}catch(a){}},window.__refresh__account__all=function(n){window.OOO.b_p=0;var t;for(var e in window.OOO)if(t=window.OOO[e],t.cd=e,t.bp){t.bp=Number(Number(t.bp).toFixed(2));var a=Number((t.pr-t.bp)/t.pr);t.cr=Number((100*a).toFixed(2)),t.f=Math.round(t.f),t.p=Math.round(t.p),t.s=Math.round(t.s),t.b_p=Math.round(Number((t.b*a).toFixed(0))),t.n_f0=.0015*t.b_p,t.n_f1=.0023*t.b_p,t.b_p=Math.round(t.b_p-t.n_f0-t.n_f1),window.OOO.b_p+=t.b_p}var o=window.document.getElementById("ID-TRADING-BOARD-매수금");window.OOO.b>0?o.style.color="#ff7d7d":window.OOO.b<0?o.style.color="#36aaf7":0==window.OOO.b&&(o.style.color="#FFFFFF"),o.children[1].innerText=Math.round(window.OOO.b).toLocaleString();var o=window.document.getElementById("ID-TRADING-BOARD-매도금");o.style.color="#36aaf7",o.children[1].innerText=Math.round(window.OOO.s).toLocaleString();var o=window.document.getElementById("ID-TRADING-BOARD-익절금");window.OOO.p>0?o.style.color="#ff7d7d":window.OOO.p<0?o.style.color="#36aaf7":0==window.OOO.p&&(o.style.color="#FFFFFF"),o.children[1].innerText=Math.round(window.OOO.p).toLocaleString();var o=window.document.getElementById("ID-TRADING-BOARD-수수료");o.style.color="#36aaf7",o.children[1].innerText=Math.round(window.OOO.f).toLocaleString();var o=window.document.getElementById("ID-TRADING-BOARD-수익상태");window.OOO.b_p>0?o.style.color="#ff7d7d":window.OOO.b_p<0?o.style.color="#36aaf7":0==window.OOO.b_p&&(o.style.color="#FFFFFF"),o.children[1].innerText=Math.round(window.OOO.b_p).toLocaleString()};var n=function(){return n.EL_CHECK.checked?(window.__refresh__account__all(),void setTimeout(n,1e4)):void setTimeout(n,1e4)};n.EL_CHECK=window.document.getElementById("ID-CHECKBOX-상황갱신-자동"),setTimeout(n,1e4),function(){var n=[],e=function(){var e=window.document.getElementById("ID-DIV-잔고").tBodies[0];window.apis.element.removeAllChildren(e),n.forEach(function(n){if(n.type){var a="<td>"+n.TIME_STR+"</td><td>"+n.type+'</td><td class="td-nm" data-code="'+n.cd+'">'+n.nm+"</td><td>"+t.fn_getCrStr(n.CRL)+"</td><td>"+t.fn_getCrStr(n.CR)+"</td><td>"+t.fn_getCrStr(n.CRH)+"</td><td>"+t.fn_getCrStr(n.bcr)+"</td><td>"+t.fn_getPriceStr(Number(n.b_p.toFixed(0)).toLocaleString())+"</td><td>"+t.fn_getPriceStr(Number(n.bp.toFixed(0)).toLocaleString())+"</td><td>"+t.fn_getPriceStr(Number(n.b.toFixed(0)).toLocaleString())+"</td><td>"+t.fn_getPriceStr(Number(n.s.toFixed(0)).toLocaleString())+"</td><td>"+t.fn_getPriceStr(Number(n.p.toFixed(0)).toLocaleString())+"</td><td>"+t.fn_getPriceStr(Number(n.f.toFixed(0)).toLocaleString())+"</td><td>"+n.cnt_ss+"</td><td>"+t.fn_MoneyToStr(n.AA_GABS_P)+"</td><td>"+t.fn_MoneyToStr(n.AA_GABS_M)+"</td><td>"+n.PERCENT_SELL_PRICE+"%</td><td>"+t.fn_MoneyToStr(n.AA_GABS)+"</td><td>"+t.fn_MoneyToStr(n.AA_GABS__M)+"</td>",o=window.apis.html.createHTMLElement_TR("<tr>"+a+"</tr>");e.append(o)}}),window.__refresh__account__all()};window.document.getElementById("ID-BUTTON-결과-시간순").addEventListener("click",function(t){if(0==n.length){var a;for(var o in window.OOO)a=window.OOO[o],a.hasOwnProperty("b")&&n.push(a)}n=window.apis.array_collection.sortJsonArrayByKey_Desc(n,"TIME_STR"),e()}),window.document.getElementById("ID-BUTTON-결과-현재_수익률순").addEventListener("click",function(t){if(0==n.length){var a;for(var o in window.OOO)a=window.OOO[o],a.hasOwnProperty("b")&&n.push(a)}n=window.apis.array_collection.sortJsonArrayByKey_Desc(n,"bcr"),e()}),window.document.getElementById("ID-BUTTON-결과-현재_수익금순").addEventListener("click",function(t){if(0==n.length){var a;for(var o in window.OOO)a=window.OOO[o],a.hasOwnProperty("b")&&n.push(a)}n=window.apis.array_collection.sortJsonArrayByKey_Desc(n,"b_p"),e()}),window.document.getElementById("ID-BUTTON-결과-현재_매수금순").addEventListener("click",function(t){if(0==n.length){var a;for(var o in window.OOO)a=window.OOO[o],a.hasOwnProperty("b")&&n.push(a)}n=window.apis.array_collection.sortJsonArrayByKey_Desc(n,"b"),e()}),window.document.getElementById("ID-BUTTON-결과-누적_매도금순").addEventListener("click",function(t){if(0==n.length){var a;for(var o in window.OOO)a=window.OOO[o],a.hasOwnProperty("b")&&n.push(a)}n=window.apis.array_collection.sortJsonArrayByKey_Desc(n,"s"),e()}),window.document.getElementById("ID-BUTTON-결과-누적_익절금순").addEventListener("click",function(t){if(0==n.length){var a;for(var o in window.OOO)a=window.OOO[o],a.hasOwnProperty("b")&&n.push(a)}n=window.apis.array_collection.sortJsonArrayByKey_Desc(n,"p"),e()}),window.document.getElementById("ID-BUTTON-결과-누적_수수료순").addEventListener("click",function(t){if(0==n.length){var a;for(var o in window.OOO)a=window.OOO[o],a.hasOwnProperty("b")&&n.push(a)}n=window.apis.array_collection.sortJsonArrayByKey_Desc(n,"f"),e()}),window.document.getElementById("ID-BUTTON-결과-누적_매수횟수").addEventListener("click",function(t){if(0==n.length){var a;for(var o in window.OOO)a=window.OOO[o],a.hasOwnProperty("b")&&n.push(a)}n=window.apis.array_collection.sortJsonArrayByKey_Desc(n,"cnt_b"),e()}),window.document.getElementById("ID-BUTTON-결과-누적_추매횟수").addEventListener("click",function(t){if(0==n.length){var a;for(var o in window.OOO)a=window.OOO[o],a.hasOwnProperty("b")&&n.push(a)}n=window.apis.array_collection.sortJsonArrayByKey_Desc(n,"cnt_ba"),e()}),window.document.getElementById("ID-BUTTON-결과-누적_익절횟수").addEventListener("click",function(t){if(0==n.length){var a;for(var o in window.OOO)a=window.OOO[o],a.hasOwnProperty("b")&&n.push(a)}n=window.apis.array_collection.sortJsonArrayByKey_Desc(n,"cnt_s"),e()}),window.document.getElementById("ID-BUTTON-결과-누적_손절횟수").addEventListener("click",function(t){if(0==n.length){var a;for(var o in window.OOO)a=window.OOO[o],a.hasOwnProperty("b")&&n.push(a)}n=window.apis.array_collection.sortJsonArrayByKey_Desc(n,"cnt_ss"),e()}),window.document.getElementById("ID-BUTTON-결과-누적_대금(매수)순").addEventListener("click",function(t){if(0==n.length){var a;for(var o in window.OOO)a=window.OOO[o],a.hasOwnProperty("b")&&n.push(a)}n=window.apis.array_collection.sortJsonArrayByKey_Desc(n,"AA_GABS_P"),e()}),window.document.getElementById("ID-BUTTON-결과-누적_대금(매도)순").addEventListener("click",function(t){if(0==n.length){var a;for(var o in window.OOO)a=window.OOO[o],a.hasOwnProperty("b")&&n.push(a)}n=window.apis.array_collection.sortJsonArrayByKey_Desc(n,"AA_GABS_M"),e()}),window.document.getElementById("ID-BUTTON-결과-누적_매매강도순").addEventListener("click",function(t){if(0==n.length){var a;for(var o in window.OOO)a=window.OOO[o],a.hasOwnProperty("b")&&n.push(a)}n=window.apis.array_collection.sortJsonArrayByKey_Desc(n,"PERCENT_SELL_PRICE"),e()})}()}();var t=function(){};t.fn_getCrStr=function(n){try{return n>24?'<span class="pr" >+'+n+"</span>":n>21?'<span class="aa7">+'+n+"</span>":n>18?'<span class="aa6">+'+n+"</span>":n>15?'<span class="aa5">+'+n+"</span>":n>12?'<span class="aa4">+'+n+"</span>":n>9?'<span class="aa3">+'+n+"</span>":n>6?'<span class="aa2">+'+n+"</span>":n>3?'<span class="aa1">+'+n+"</span>":n>0?'<span class="aa0">'+n+"</span>":-9>n?'<span class="pb0">'+n+"</span>":0>n?'<span class="pb">'+n+"</span>":n}catch(t){return"-"}},t.fn_getTimeStr=function(n){var t=n.getDate(),e=n.getHours().toString(),a=n.getMinutes().toString(),o=n.getSeconds().toString();return 1==e.length&&(e="0"+e),1==a.length&&(a="0"+a),1==o.length&&(o="0"+o),t+"-"+e+":"+a+":"+o},t.fn_getPriceStr=function(n){try{var t=Number(n.replace(/\,/gi,""));return t>1e7?'<span class="pr" >'+n+"</span>":t>5e6?'<span class="aa7">'+n+"</span>":t>3e6?'<span class="aa6">'+n+"</span>":t>2e6?'<span class="aa5">'+n+"</span>":t>1e6?'<span class="aa4">'+n+"</span>":t>5e4?'<span class="aa3">'+n+"</span>":t>3e4?'<span class="aa2">'+n+"</span>":t>1e4?'<span class="aa1">'+n+"</span>":t>0?'<span class="aa0">'+n+"</span>":-1e6>t?'<span class="pb0">'+n+"</span>":0>t?'<span class="pb">'+n+"</span>":t}catch(e){return 0}},t.fn_MoneyToStr=function(n){var t=!1;0>n&&(t=!0);try{var e=n.toString().replace("-","")}catch(a){return"-"}var o;return o=t?5==e.length?'<span class="aa0">-'+e[0]+"만</span>":6==e.length?'<span class="aa0">-'+e[0]+"십</span>":7==e.length?'<span class="aa1">-'+e[0]+"백</span>":8==e.length?'<span class="aa2">-'+e[0]+"천</span>":9==e.length?'<span class="aa3">-'+e[0]+"억</span>":10==e.length?'<span class="aa4">-'+e[0]+e[1]+"억</span>":11==e.length?'<span class="aa5">-'+e.slice(0,2)+e[2]+"억</span>":12==e.length?'<span class="aa6">-'+e.slice(0,3)+e[3]+"억</span>":13==e.length?'<span class="aa7">-'+e[0]+"."+e[1]+"조</span>":14==e.length?'<span class="pr">'+e[0]+e[1]+"."+e[2]+"조</span>":'<span class="aa0">-'+e+"</span>":5==e.length?'<span class="aa0">'+e[0]+"만</span>":6==e.length?'<span class="aa0">'+e[0]+"십</span>":7==e.length?'<span class="aa1">'+e[0]+"백</span>":8==e.length?'<span class="aa2">'+e[0]+"천</span>":9==e.length?'<span class="aa3">'+e[0]+"억</span>":10==e.length?'<span class="aa4">'+e[0]+e[1]+"억</span>":11==e.length?'<span class="aa5">'+e.slice(0,2)+e[2]+"억</span>":12==e.length?'<span class="aa6">'+e.slice(0,3)+e[3]+"억</span>":13==e.length?'<span class="aa7">'+e[0]+"."+e[1]+"조</span>":14==e.length?'<span class="pr">'+e[0]+e[1]+"."+e[2]+"조</span>":'<span class="aa0">'+e+"</span>"}};