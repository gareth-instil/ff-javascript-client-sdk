var ze=Object.create,Me=Object.defineProperty,We=Object.getPrototypeOf,Ye=Object.prototype.hasOwnProperty,Qe=Object.getOwnPropertyNames,Ze=Object.getOwnPropertyDescriptor;var re=Object.assign,et=a=>Me(a,"__esModule",{value:!0});var tt=(a,u)=>()=>(u||(u={exports:{}},a(u.exports,u)),u.exports);var nt=(a,u,A)=>{if(u&&typeof u=="object"||typeof u=="function")for(let g of Qe(u))!Ye.call(a,g)&&g!=="default"&&Me(a,g,{get:()=>u[g],enumerable:!(A=Ze(u,g))||A.enumerable});return a},rt=a=>nt(et(Me(a!=null?ze(We(a)):{},"default",a&&a.__esModule&&"default"in a?{get:()=>a.default,enumerable:!0}:{value:a,enumerable:!0})),a);var Ce=(a,u,A)=>new Promise((g,J)=>{var z=k=>{try{O(A.next(k))}catch(N){J(N)}},x=k=>{try{O(A.throw(k))}catch(N){J(N)}},O=k=>k.done?g(k.value):Promise.resolve(k.value).then(z,x);O((A=A.apply(a,u)).next())});var Pe=tt((Ve,Ae)=>{(function(a){"use strict";var u=a.setTimeout,A=a.clearTimeout,g=a.XMLHttpRequest,J=a.XDomainRequest,z=a.ActiveXObject,x=a.EventSource,O=a.document,k=a.Promise,N=a.fetch,ue=a.Response,ie=a.TextDecoder,I=a.TextEncoder,b=a.AbortController;if(typeof window!="undefined"&&typeof O!="undefined"&&!("readyState"in O)&&O.body==null&&(O.readyState="loading",window.addEventListener("load",function(e){O.readyState="complete"},!1)),g==null&&z!=null&&(g=function(){return new z("Microsoft.XMLHTTP")}),Object.create==null&&(Object.create=function(e){function n(){}return n.prototype=e,new n}),Date.now||(Date.now=function(){return new Date().getTime()}),b==null){var W=N;N=function(e,n){var r=n.signal;return W(e,{headers:n.headers,credentials:n.credentials,cache:n.cache}).then(function(t){var d=t.body.getReader();return r._reader=d,r._aborted&&r._reader.cancel(),{status:t.status,statusText:t.statusText,headers:t.headers,body:{getReader:function(){return d}}}})},b=function(){this.signal={_reader:null,_aborted:!1},this.abort=function(){this.signal._reader!=null&&this.signal._reader.cancel(),this.signal._aborted=!0}}}function w(){this.bitsNeeded=0,this.codePoint=0}w.prototype.decode=function(e){function n(p,E,c){if(c===1)return p>=128>>E&&p<<E<=2047;if(c===2)return p>=2048>>E&&p<<E<=55295||p>=57344>>E&&p<<E<=65535;if(c===3)return p>=65536>>E&&p<<E<=1114111;throw new Error}function r(p,E){if(p===6*1)return E>>6>15?3:E>31?2:1;if(p===6*2)return E>15?3:2;if(p===6*3)return 3;throw new Error}for(var t=65533,d="",f=this.bitsNeeded,l=this.codePoint,m=0;m<e.length;m+=1){var h=e[m];f!==0&&(h<128||h>191||!n(l<<6|h&63,f-6,r(f,l)))&&(f=0,l=t,d+=String.fromCharCode(l)),f===0?(h>=0&&h<=127?(f=0,l=h):h>=192&&h<=223?(f=6*1,l=h&31):h>=224&&h<=239?(f=6*2,l=h&15):h>=240&&h<=247?(f=6*3,l=h&7):(f=0,l=t),f!==0&&!n(l,f,r(f,l))&&(f=0,l=t)):(f-=6,l=l<<6|h&63),f===0&&(l<=65535?d+=String.fromCharCode(l):(d+=String.fromCharCode(55296+(l-65535-1>>10)),d+=String.fromCharCode(56320+(l-65535-1&1023))))}return this.bitsNeeded=f,this.codePoint=l,d};var oe=function(){try{return new ie().decode(new I().encode("test"),{stream:!0})==="test"}catch(e){console.debug("TextDecoder does not support streaming option. Using polyfill instead: "+e)}return!1};(ie==null||I==null||!oe())&&(ie=w);var B=function(){};function X(e){this.withCredentials=!1,this.readyState=0,this.status=0,this.statusText="",this.responseText="",this.onprogress=B,this.onload=B,this.onerror=B,this.onreadystatechange=B,this._contentType="",this._xhr=e,this._sendTimeout=0,this._abort=B}X.prototype.open=function(e,n){this._abort(!0);var r=this,t=this._xhr,d=1,f=0;this._abort=function(c){r._sendTimeout!==0&&(A(r._sendTimeout),r._sendTimeout=0),(d===1||d===2||d===3)&&(d=4,t.onload=B,t.onerror=B,t.onabort=B,t.onprogress=B,t.onreadystatechange=B,t.abort(),f!==0&&(A(f),f=0),c||(r.readyState=4,r.onabort(null),r.onreadystatechange())),d=0};var l=function(){if(d===1){var c=0,S="",Y=void 0;if("contentType"in t)c=200,S="OK",Y=t.contentType;else try{c=t.status,S=t.statusText,Y=t.getResponseHeader("Content-Type")}catch(Ee){c=0,S="",Y=void 0}c!==0&&(d=2,r.readyState=2,r.status=c,r.statusText=S,r._contentType=Y,r.onreadystatechange())}},m=function(){if(l(),d===2||d===3){d=3;var c="";try{c=t.responseText}catch(S){}r.readyState=3,r.responseText=c,r.onprogress()}},h=function(c,S){if((S==null||S.preventDefault==null)&&(S={preventDefault:B}),m(),d===1||d===2||d===3){if(d=4,f!==0&&(A(f),f=0),r.readyState=4,c==="load")r.onload(S);else if(c==="error")r.onerror(S);else if(c==="abort")r.onabort(S);else throw new TypeError;r.onreadystatechange()}},p=function(c){t!=null&&(t.readyState===4?(!("onload"in t)||!("onerror"in t)||!("onabort"in t))&&h(t.responseText===""?"error":"load",c):t.readyState===3?"onprogress"in t||m():t.readyState===2&&l())},E=function(){f=u(function(){E()},500),t.readyState===3&&m()};"onload"in t&&(t.onload=function(c){h("load",c)}),"onerror"in t&&(t.onerror=function(c){h("error",c)}),"onabort"in t&&(t.onabort=function(c){h("abort",c)}),"onprogress"in t&&(t.onprogress=m),"onreadystatechange"in t&&(t.onreadystatechange=function(c){p(c)}),("contentType"in t||!("ontimeout"in g.prototype))&&(n+=(n.indexOf("?")===-1?"?":"&")+"padding=true"),t.open(e,n,!0),"readyState"in t&&(f=u(function(){E()},0))},X.prototype.abort=function(){this._abort(!1)},X.prototype.getResponseHeader=function(e){return this._contentType},X.prototype.setRequestHeader=function(e,n){var r=this._xhr;"setRequestHeader"in r&&r.setRequestHeader(e,n)},X.prototype.getAllResponseHeaders=function(){return this._xhr.getAllResponseHeaders!=null&&this._xhr.getAllResponseHeaders()||""},X.prototype.send=function(){if((!("ontimeout"in g.prototype)||!("sendAsBinary"in g.prototype)&&!("mozAnon"in g.prototype))&&O!=null&&O.readyState!=null&&O.readyState!=="complete"){var e=this;e._sendTimeout=u(function(){e._sendTimeout=0,e.send()},4);return}var n=this._xhr;"withCredentials"in n&&(n.withCredentials=this.withCredentials);try{n.send(void 0)}catch(r){throw r}};function F(e){return e.replace(/[A-Z]/g,function(n){return String.fromCharCode(n.charCodeAt(0)+32)})}function le(e){for(var n=Object.create(null),r=e.split(`\r
`),t=0;t<r.length;t+=1){var d=r[t],f=d.split(": "),l=f.shift(),m=f.join(": ");n[F(l)]=m}this._map=n}le.prototype.get=function(e){return this._map[F(e)]},g!=null&&g.HEADERS_RECEIVED==null&&(g.HEADERS_RECEIVED=2);function ve(){}ve.prototype.open=function(e,n,r,t,d,f,l){e.open("GET",d);var m=0;e.onprogress=function(){var p=e.responseText,E=p.slice(m);m+=E.length,r(E)},e.onerror=function(p){p.preventDefault(),t(new Error("NetworkError"))},e.onload=function(){t(null)},e.onabort=function(){t(null)},e.onreadystatechange=function(){if(e.readyState===g.HEADERS_RECEIVED){var p=e.status,E=e.statusText,c=e.getResponseHeader("Content-Type"),S=e.getAllResponseHeaders();n(p,E,c,new le(S))}},e.withCredentials=f;for(var h in l)Object.prototype.hasOwnProperty.call(l,h)&&e.setRequestHeader(h,l[h]);return e.send(),e};function V(e){this._headers=e}V.prototype.get=function(e){return this._headers.get(e)};function he(){}he.prototype.open=function(e,n,r,t,d,f,l){var m=null,h=new b,p=h.signal,E=new ie;return N(d,{headers:l,credentials:f?"include":"same-origin",signal:p,cache:"no-store"}).then(function(c){return m=c.body.getReader(),n(c.status,c.statusText,c.headers.get("Content-Type"),new V(c.headers)),new k(function(S,Y){var Ee=function(){m.read().then(function(U){if(U.done)S(void 0);else{var L=E.decode(U.value,{stream:!0});r(L),Ee()}}).catch(function(U){Y(U)})};Ee()})}).catch(function(c){if(c.name!=="AbortError")return c}).then(function(c){t(c)}),{abort:function(){m!=null&&m.cancel(),h.abort()}}};function te(){this._listeners=Object.create(null)}function Se(e){u(function(){throw e},0)}te.prototype.dispatchEvent=function(e){e.target=this;var n=this._listeners[e.type];if(n!=null)for(var r=n.length,t=0;t<r;t+=1){var d=n[t];try{typeof d.handleEvent=="function"?d.handleEvent(e):d.call(this,e)}catch(f){Se(f)}}},te.prototype.addEventListener=function(e,n){e=String(e);var r=this._listeners,t=r[e];t==null&&(t=[],r[e]=t);for(var d=!1,f=0;f<t.length;f+=1)t[f]===n&&(d=!0);d||t.push(n)},te.prototype.removeEventListener=function(e,n){e=String(e);var r=this._listeners,t=r[e];if(t!=null){for(var d=[],f=0;f<t.length;f+=1)t[f]!==n&&d.push(t[f]);d.length===0?delete r[e]:r[e]=d}};function ne(e){this.type=e,this.target=void 0}function be(e,n){ne.call(this,e),this.data=n.data,this.lastEventId=n.lastEventId}be.prototype=Object.create(ne.prototype);function pe(e,n){ne.call(this,e),this.status=n.status,this.statusText=n.statusText,this.headers=n.headers}pe.prototype=Object.create(ne.prototype);function ge(e,n){ne.call(this,e),this.error=n.error}ge.prototype=Object.create(ne.prototype);var o=-1,s=0,i=1,v=2,T=-1,y=0,R=1,H=2,we=3,Be=/^text\/event\-stream(;.*)?$/i,Ue=1e3,$e=18e6,Ne=function(e,n){var r=e==null?n:parseInt(e,10);return r!==r&&(r=n),Fe(r)},Fe=function(e){return Math.min(Math.max(e,Ue),$e)},se=function(e,n,r){try{typeof n=="function"&&n.call(e,r)}catch(t){Se(t)}};function q(e,n){te.call(this),n=n||{},this.onopen=void 0,this.onmessage=void 0,this.onerror=void 0,this.url=void 0,this.readyState=void 0,this.withCredentials=void 0,this.headers=void 0,this._close=void 0,Xe(this,e,n)}function Ke(){return g!=null&&"withCredentials"in g.prototype||J==null?new g:new J}var Ge=N!=null&&ue!=null&&"body"in ue.prototype;function Xe(e,n,r){n=String(n);var t=Boolean(r.withCredentials),d=r.lastEventIdQueryParameterName||"lastEventId",f=Fe(1e3),l=Ne(r.heartbeatTimeout,45e3),m="",h=f,p=!1,E=0,c=r.headers||{},S=r.Transport,Y=Ge&&S==null?void 0:new X(S!=null?new S:Ke()),Ee=S!=null&&typeof S!="string"?new S:Y==null?new he:new ve,U=void 0,L=0,G=o,fe="",Te="",Q="",Re="",P=y,_e=0,ae=0,qe=function(D,C,$,K){if(G===s)if(D===200&&$!=null&&Be.test($)){G=i,p=Date.now(),h=f,e.readyState=i;var j=new pe("open",{status:D,statusText:C,headers:K});e.dispatchEvent(j),se(e,e.onopen,j)}else{var _="";D!==200?(C&&(C=C.replace(/\s+/g," ")),_="EventSource's response has a status "+D+" "+C+" that is not 200. Aborting the connection."):_="EventSource's response has a Content-Type specifying an unsupported type: "+($==null?"-":$.replace(/\s+/g," "))+". Aborting the connection.",xe();var j=new pe("error",{status:D,statusText:C,headers:K});e.dispatchEvent(j),se(e,e.onerror,j),console.error(_)}},Je=function(D){if(G===i){for(var C=-1,$=0;$<D.length;$+=1){var K=D.charCodeAt($);(K===`
`.charCodeAt(0)||K==="\r".charCodeAt(0))&&(C=$)}var j=(C!==-1?Re:"")+D.slice(0,C+1);Re=(C===-1?Re:"")+D.slice(C+1),D!==""&&(p=Date.now(),E+=D.length);for(var _=0;_<j.length;_+=1){var K=j.charCodeAt(_);if(P===T&&K===`
`.charCodeAt(0))P=y;else if(P===T&&(P=y),K==="\r".charCodeAt(0)||K===`
`.charCodeAt(0)){if(P!==y){P===R&&(ae=_+1);var Z=j.slice(_e,ae-1),ee=j.slice(ae+(ae<_&&j.charCodeAt(ae)===" ".charCodeAt(0)?1:0),_);Z==="data"?(fe+=`
`,fe+=ee):Z==="id"?Te=ee:Z==="event"?Q=ee:Z==="retry"?(f=Ne(ee,f),h=f):Z==="heartbeatTimeout"&&(l=Ne(ee,l),L!==0&&(A(L),L=u(function(){ye()},l)))}if(P===y){if(fe!==""){m=Te,Q===""&&(Q="message");var de=new be(Q,{data:fe.slice(1),lastEventId:Te});if(e.dispatchEvent(de),Q==="open"?se(e,e.onopen,de):Q==="message"?se(e,e.onmessage,de):Q==="error"&&se(e,e.onerror,de),G===v)return}fe="",Q=""}P=K==="\r".charCodeAt(0)?T:y}else P===y&&(_e=_,P=R),P===R?K===":".charCodeAt(0)&&(ae=_+1,P=H):P===H&&(P=we)}}},Le=function(D){if(G===i||G===s)G=o,L!==0&&(A(L),L=0),L=u(function(){ye()},h),h=Fe(Math.min(f*16,h*2)),e.readyState=s;else if(G===v&&D!=null){console.error(D);var C=new ge("error",{error:D});e.dispatchEvent(C),se(e,e.onerror,C)}},xe=function(){G=v,U!=null&&(U.abort(),U=void 0),L!==0&&(A(L),L=0),e.readyState=v},ye=function(){if(L=0,G!==o){if(!p&&U!=null)Le(new Error("No activity within "+l+" milliseconds. "+(G===s?"No response received.":E+" chars received.")+" Reconnecting.")),U!=null&&(U.abort(),U=void 0);else{var D=Math.max((p||Date.now())+l-Date.now(),1);p=!1,L=u(function(){ye()},D)}return}p=!1,E=0,L=u(function(){ye()},l),G=s,fe="",Q="",Te=m,Re="",_e=0,ae=0,P=y;var C=n;if(n.slice(0,5)!=="data:"&&n.slice(0,5)!=="blob:"&&m!==""){var $=n.indexOf("?");C=$===-1?n:n.slice(0,$+1)+n.slice($+1).replace(/(?:^|&)([^=&]*)(?:=[^&]*)?/g,function(ee,de){return de===d?"":ee}),C+=(n.indexOf("?")===-1?"?":"&")+d+"="+encodeURIComponent(m)}var K=e.withCredentials,j={};j.Accept="text/event-stream";var _=e.headers;if(_!=null)for(var Z in _)Object.prototype.hasOwnProperty.call(_,Z)&&(j[Z]=_[Z]);try{U=Ee.open(Y,qe,Je,Le,C,K,j)}catch(ee){throw xe(),ee}};e.url=n,e.readyState=s,e.withCredentials=t,e.headers=c,e._close=xe,ye()}q.prototype=Object.create(te.prototype),q.prototype.CONNECTING=s,q.prototype.OPEN=i,q.prototype.CLOSED=v,q.prototype.close=function(){this._close()},q.CONNECTING=s,q.OPEN=i,q.CLOSED=v,q.prototype.withCredentials=void 0;var He=x;g!=null&&(x==null||!("withCredentials"in x.prototype))&&(He=q),function(e){if(typeof Ae=="object"&&typeof Ae.exports=="object"){var n=e(Ve);n!==void 0&&(Ae.exports=n)}else typeof define=="function"&&define.amd?define(["exports"],e):e(a)}(function(e){e.EventSourcePolyfill=q,e.NativeEventSource=x,e.EventSource=He})})(typeof globalThis=="undefined"?typeof window!="undefined"?window:typeof self!="undefined"?self:Ve:globalThis)});var ke=rt(Pe());import it from"jwt-decode";import at from"mitt";var M;(function(a){a.READY="ready",a.CONNECTED="connected",a.DISCONNECTED="disconnected",a.CHANGED="changed",a.ERROR="error"})(M||(M={}));var je={debug:!1,baseUrl:"https://config.ff.harness.io/api/1.0",eventUrl:"https://events.ff.harness.io/api/1.0",streamEnabled:!0,allAttributesPrivate:!1,privateAttributeNames:[]},ce=(a,...u)=>console.error(`[FF-SDK] ${a}`,...u),Oe=30*1e3;var ot="1.4.11",st=500,Ie=globalThis.fetch,ft=ke.EventSourcePolyfill,me=!!globalThis.Proxy,De=a=>{let{value:u}=a;try{switch(a.kind.toLowerCase()){case"int":case"number":u=Number(u);break;case"boolean":u=u.toString().toLowerCase()==="true";break;case"json":u=JSON.parse(u);break}}catch(A){ce(A)}return u},dt=(a,u,A)=>{let g=!1,J,z,x,O,k,N=!0,ue=()=>{N=!1},ie=()=>{N=!0},I=[],b=at(),W=re(re({},je),A),w=(o,...s)=>{W.debug&&console.debug(`[FF-SDK] ${o}`,...s)},oe=o=>{if(N){let s=Date.now();s-o.lastAccessed>st&&(o.count++,o.lastAccessed=s)}};globalThis.onbeforeunload=()=>{I.length&&globalThis.localStorage&&(ue(),globalThis.localStorage.HARNESS_FF_METRICS=JSON.stringify(I),ie())};let B=(o,s)=>Ce(void 0,null,function*(){return(yield(yield Ie(`${s.baseUrl}/client/auth`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({apiKey:o,target:u})})).json()).authToken}),X=()=>{if(I.length){w("Sending metrics...",{metrics:I,evaluations:F});let o={metricsData:I.map(s=>({timestamp:Date.now(),count:s.count,metricsType:"FFMETRICS",attributes:[{key:"featureIdentifier",value:s.featureIdentifier},{key:"featureName",value:s.featureIdentifier},{key:"variationIdentifier",value:s.variationIdentifier},{key:"target",value:u.identifier},{key:"SDK_NAME",value:"JavaScript"},{key:"SDK_LANGUAGE",value:"JavaScript"},{key:"SDK_TYPE",value:"client"},{key:"SDK_VERSION",value:ot}]}))};Ie(`${W.eventUrl}/metrics/${J}?cluster=${z}`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${O}`},body:JSON.stringify(o)}).then(()=>{I=[]}).catch(s=>{w(s)}).finally(()=>{k=window.setTimeout(X,Oe)})}else k=window.setTimeout(X,Oe)},F={},le=o=>{w("Sending event for",o.flag),me?b.emit(M.CHANGED,new Proxy(o,{get(s,i){var v;if(s.hasOwnProperty(i)&&i==="value"){let T=s.flag,y=o.value,R=I.find(H=>H.featureIdentifier===T&&H.featureValue===y);R?(oe(R),R.variationIdentifier=((v=F[T])==null?void 0:v.identifier)||""):I.push({featureIdentifier:T,featureValue:String(y),variationIdentifier:F[T].identifier||"",count:N?1:0,lastAccessed:Date.now()}),w("Metrics event: Flag",i,"has been read with value via stream update",y)}return i==="value"?De(o):o[i]}})):b.emit(M.CHANGED,{deleted:o.deleted,flag:o.flag,value:De(o)})},ve=function(){return me?new Proxy({},{get(o,s){var v,T,y;let i=o[s];if(o.hasOwnProperty(s)){let R=o[s],H=I.find(we=>we.featureIdentifier===s&&R===we.featureValue);H?(H.variationIdentifier=((v=F[s])==null?void 0:v.identifier)||"",oe(H)):I.push({featureIdentifier:s,featureValue:R,variationIdentifier:((T=F[s])==null?void 0:T.identifier)||"",count:N?1:0,lastAccessed:Date.now()}),w("Metrics event: Flag:",s,"has been read with value:",R,"variationIdentifier:",(y=F[s])==null?void 0:y.identifier)}return i}}):{}},V=ve();B(a,W).then(o=>{if(g)return;O=o;let s=it(o);if(w("Authenticated",s),globalThis.localStorage&&globalThis.localStorage.HARNESS_FF_METRICS)try{delete globalThis.localStorage.HARNESS_FF_METRICS,w("Picking up metrics from previous session")}catch(i){}k=window.setTimeout(X,Oe),J=s.environment,z=s.clusterIdentifier,he().then(()=>{w("Fetch all flags ok",V)}).then(()=>{g||Se()}).then(()=>{g||(w("Event stream ready",{storage:V}),b.emit(M.READY,re({},V)),me||Object.keys(V).forEach(i=>{var v;I.push({featureIdentifier:i,featureValue:V[i],variationIdentifier:((v=F[i])==null?void 0:v.identifier)||"",count:N?1:0,lastAccessed:Date.now()})}))}).catch(i=>{b.emit(M.ERROR,i)})}).catch(o=>{ce("Authentication error: ",o),b.emit(M.ERROR,o)});let he=()=>Ce(void 0,null,function*(){try{(yield(yield Ie(`${W.baseUrl}/client/env/${J}/target/${u.identifier}/evaluations?cluster=${z}`,{headers:{Authorization:`Bearer ${O}`}})).json()).forEach(i=>{let v=De(i),T=V[i.flag];v!==T&&(w("Flag variation has changed for ",i.identifier),V[i.flag]=v,F[i.flag]=re(re({},i),{value:v}),le(i))})}catch(o){return ce("Features fetch operation error: ",o),b.emit(M.ERROR,o),o}}),te=o=>Ce(void 0,null,function*(){var s;try{let i=yield Ie(`${W.baseUrl}/client/env/${J}/target/${u.identifier}/evaluations/${o}?cluster=${z}`,{headers:{Authorization:`Bearer ${O}`}});if(i.ok){let v=yield i.json(),T=De(v);if(ue(),V[o]=T,F[o]=re(re({},v),{value:T}),ie(),le(v),!me){let y=v.flag,R=I.find(H=>H.featureIdentifier===y&&H.featureValue===v.value);R?(oe(R),R.variationIdentifier=((s=F[y])==null?void 0:s.identifier)||""):I.push({featureIdentifier:y,featureValue:String(v.value),variationIdentifier:F[y].identifier||"",count:N?1:0,lastAccessed:Date.now()})}}else b.emit(M.ERROR,i)}catch(i){ce("Feature fetch operation error: ",i),b.emit(M.ERROR,i)}}),Se=()=>{if(!W.streamEnabled){w("Stream is disabled by configuration. Note: Polling is not yet supported");return}x=new ft(`${W.baseUrl}/stream?cluster=${z}`,{headers:{Authorization:`Bearer ${O}`,"API-Key":a}}),x.onopen=i=>{w("Stream connected",i),b.emit(M.CONNECTED)},x.onclose=i=>{w("Stream disconnected"),b.emit(M.DISCONNECTED)},x.onerror=i=>{ce("Stream has issue",i),b.emit(M.ERROR,i)};let o=i=>{switch(i.event){case"create":setTimeout(()=>te(i.identifier),1e3);break;case"patch":te(i.identifier);break;case"delete":delete V[i.identifier],b.emit(M.CHANGED,{flag:i.identifier,value:void 0,deleted:!0}),w("Evaluation deleted",{message:i,storage:V});break}},s=i=>{i.event==="patch"&&he()};x.addEventListener("*",i=>{let v=JSON.parse(i.data);w("Received event from stream: ",v),v.domain==="flag"?o(v):v.domain==="target-segment"&&s(v)})},ne=(o,s)=>b.on(o,s),be=(o,s)=>{o?b.off(o,s):ge()},pe=(o,s)=>{var v;let i=V[o];if(!me&&i!==void 0){let T=i,y=o,R=I.find(H=>H.featureIdentifier===y&&H.featureValue===T);R?(oe(R),R.variationIdentifier=((v=F[y])==null?void 0:v.identifier)||""):I.push({featureIdentifier:y,featureValue:T,count:N?1:0,variationIdentifier:F[y].identifier||"",lastAccessed:Date.now()})}return i!==void 0?i:s},ge=()=>{g=!0,w("Closing event stream"),V=ve(),F={},clearTimeout(k),b.all.clear(),typeof(x==null?void 0:x.close)=="function"&&x.close()};return{on:ne,off:be,variation:pe,close:ge}};export{M as Event,dt as initialize};
/** @license
 * eventsource.js
 * Available under MIT License (MIT)
 * https://github.com/Yaffle/EventSource/
 */
//# sourceMappingURL=sdk.esm.js.map
