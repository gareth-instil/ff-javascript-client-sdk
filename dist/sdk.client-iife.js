var HarnessFFSDK=(()=>{var Ze=Object.create,Se=Object.defineProperty,et=Object.getPrototypeOf,tt=Object.prototype.hasOwnProperty,rt=Object.getOwnPropertyNames,nt=Object.getOwnPropertyDescriptor;var at=r=>Se(r,"__esModule",{value:!0});var it=(r,i)=>()=>(i||(i={exports:{}},r(i.exports,i)),i.exports),ot=(r,i)=>{for(var h in i)Se(r,h,{get:i[h],enumerable:!0})},st=(r,i,h)=>{if(i&&typeof i=="object"||typeof i=="function")for(let d of rt(i))!tt.call(r,d)&&d!=="default"&&Se(r,d,{get:()=>i[d],enumerable:!(h=nt(i,d))||h.enumerable});return r},ft=r=>st(at(Se(r!=null?Ze(et(r)):{},"default",r&&r.__esModule&&"default"in r?{get:()=>r.default,enumerable:!0}:{value:r,enumerable:!0})),r);var je=it((Me,Ce)=>{(function(r){"use strict";var i=r.setTimeout,h=r.clearTimeout,d=r.XMLHttpRequest,k=r.XDomainRequest,D=r.ActiveXObject,P=r.EventSource,j=r.document,K=r.Promise,ee=r.fetch,de=r.Response,C=r.TextDecoder,A=r.TextEncoder,J=r.AbortController;if(typeof window!="undefined"&&typeof j!="undefined"&&!("readyState"in j)&&j.body==null&&(j.readyState="loading",window.addEventListener("load",function(e){j.readyState="complete"},!1)),d==null&&D!=null&&(d=function(){return new D("Microsoft.XMLHTTP")}),Object.create==null&&(Object.create=function(e){function n(){}return n.prototype=e,new n}),Date.now||(Date.now=function(){return new Date().getTime()}),J==null){var N=ee;ee=function(e,n){var a=n.signal;return N(e,{headers:n.headers,credentials:n.credentials,cache:n.cache}).then(function(t){var c=t.body.getReader();return a._reader=c,a._aborted&&a._reader.cancel(),{status:t.status,statusText:t.statusText,headers:t.headers,body:{getReader:function(){return c}}}})},J=function(){this.signal={_reader:null,_aborted:!1},this.abort=function(){this.signal._reader!=null&&this.signal._reader.cancel(),this.signal._aborted=!0}}}function te(){this.bitsNeeded=0,this.codePoint=0}te.prototype.decode=function(e){function n(g,y,u){if(u===1)return g>=128>>y&&g<<y<=2047;if(u===2)return g>=2048>>y&&g<<y<=55295||g>=57344>>y&&g<<y<=65535;if(u===3)return g>=65536>>y&&g<<y<=1114111;throw new Error}function a(g,y){if(g===6*1)return y>>6>15?3:y>31?2:1;if(g===6*2)return y>15?3:2;if(g===6*3)return 3;throw new Error}for(var t=65533,c="",s=this.bitsNeeded,l=this.codePoint,E=0;E<e.length;E+=1){var p=e[E];s!==0&&(p<128||p>191||!n(l<<6|p&63,s-6,a(s,l)))&&(s=0,l=t,c+=String.fromCharCode(l)),s===0?(p>=0&&p<=127?(s=0,l=p):p>=192&&p<=223?(s=6*1,l=p&31):p>=224&&p<=239?(s=6*2,l=p&15):p>=240&&p<=247?(s=6*3,l=p&7):(s=0,l=t),s!==0&&!n(l,s,a(s,l))&&(s=0,l=t)):(s-=6,l=l<<6|p&63),s===0&&(l<=65535?c+=String.fromCharCode(l):(c+=String.fromCharCode(55296+(l-65535-1>>10)),c+=String.fromCharCode(56320+(l-65535-1&1023))))}return this.bitsNeeded=s,this.codePoint=l,c};var Oe=function(){try{return new C().decode(new A().encode("test"),{stream:!0})==="test"}catch(e){console.debug("TextDecoder does not support streaming option. Using polyfill instead: "+e)}return!1};(C==null||A==null||!Oe())&&(C=te);var _=function(){};function b(e){this.withCredentials=!1,this.readyState=0,this.status=0,this.statusText="",this.responseText="",this.onprogress=_,this.onload=_,this.onerror=_,this.onreadystatechange=_,this._contentType="",this._xhr=e,this._sendTimeout=0,this._abort=_}b.prototype.open=function(e,n){this._abort(!0);var a=this,t=this._xhr,c=1,s=0;this._abort=function(u){a._sendTimeout!==0&&(h(a._sendTimeout),a._sendTimeout=0),(c===1||c===2||c===3)&&(c=4,t.onload=_,t.onerror=_,t.onabort=_,t.onprogress=_,t.onreadystatechange=_,t.abort(),s!==0&&(h(s),s=0),u||(a.readyState=4,a.onabort(null),a.onreadystatechange())),c=0};var l=function(){if(c===1){var u=0,w="",z=void 0;if("contentType"in t)u=200,w="OK",z=t.contentType;else try{u=t.status,w=t.statusText,z=t.getResponseHeader("Content-Type")}catch(he){u=0,w="",z=void 0}u!==0&&(c=2,a.readyState=2,a.status=u,a.statusText=w,a._contentType=z,a.onreadystatechange())}},E=function(){if(l(),c===2||c===3){c=3;var u="";try{u=t.responseText}catch(w){}a.readyState=3,a.responseText=u,a.onprogress()}},p=function(u,w){if((w==null||w.preventDefault==null)&&(w={preventDefault:_}),E(),c===1||c===2||c===3){if(c=4,s!==0&&(h(s),s=0),a.readyState=4,u==="load")a.onload(w);else if(u==="error")a.onerror(w);else if(u==="abort")a.onabort(w);else throw new TypeError;a.onreadystatechange()}},g=function(u){t!=null&&(t.readyState===4?(!("onload"in t)||!("onerror"in t)||!("onabort"in t))&&p(t.responseText===""?"error":"load",u):t.readyState===3?"onprogress"in t||E():t.readyState===2&&l())},y=function(){s=i(function(){y()},500),t.readyState===3&&E()};"onload"in t&&(t.onload=function(u){p("load",u)}),"onerror"in t&&(t.onerror=function(u){p("error",u)}),"onabort"in t&&(t.onabort=function(u){p("abort",u)}),"onprogress"in t&&(t.onprogress=E),"onreadystatechange"in t&&(t.onreadystatechange=function(u){g(u)}),("contentType"in t||!("ontimeout"in d.prototype))&&(n+=(n.indexOf("?")===-1?"?":"&")+"padding=true"),t.open(e,n,!0),"readyState"in t&&(s=i(function(){y()},0))},b.prototype.abort=function(){this._abort(!1)},b.prototype.getResponseHeader=function(e){return this._contentType},b.prototype.setRequestHeader=function(e,n){var a=this._xhr;"setRequestHeader"in a&&a.setRequestHeader(e,n)},b.prototype.getAllResponseHeaders=function(){return this._xhr.getAllResponseHeaders!=null&&this._xhr.getAllResponseHeaders()||""},b.prototype.send=function(){if((!("ontimeout"in d.prototype)||!("sendAsBinary"in d.prototype)&&!("mozAnon"in d.prototype))&&j!=null&&j.readyState!=null&&j.readyState!=="complete"){var e=this;e._sendTimeout=i(function(){e._sendTimeout=0,e.send()},4);return}var n=this._xhr;"withCredentials"in n&&(n.withCredentials=this.withCredentials);try{n.send(void 0)}catch(a){throw a}};function ce(e){return e.replace(/[A-Z]/g,function(n){return String.fromCharCode(n.charCodeAt(0)+32)})}function H(e){for(var n=Object.create(null),a=e.split(`\r
`),t=0;t<a.length;t+=1){var c=a[t],s=c.split(": "),l=s.shift(),E=s.join(": ");n[ce(l)]=E}this._map=n}H.prototype.get=function(e){return this._map[ce(e)]},d!=null&&d.HEADERS_RECEIVED==null&&(d.HEADERS_RECEIVED=2);function ye(){}ye.prototype.open=function(e,n,a,t,c,s,l){e.open("GET",c);var E=0;e.onprogress=function(){var g=e.responseText,y=g.slice(E);E+=y.length,a(y)},e.onerror=function(g){g.preventDefault(),t(new Error("NetworkError"))},e.onload=function(){t(null)},e.onabort=function(){t(null)},e.onreadystatechange=function(){if(e.readyState===d.HEADERS_RECEIVED){var g=e.status,y=e.statusText,u=e.getResponseHeader("Content-Type"),w=e.getAllResponseHeaders();n(g,y,u,new H(w))}},e.withCredentials=s;for(var p in l)Object.prototype.hasOwnProperty.call(l,p)&&e.setRequestHeader(p,l[p]);return e.send(),e};function ue(e){this._headers=e}ue.prototype.get=function(e){return this._headers.get(e)};function me(){}me.prototype.open=function(e,n,a,t,c,s,l){var E=null,p=new J,g=p.signal,y=new C;return ee(c,{headers:l,credentials:s?"include":"same-origin",signal:g,cache:"no-store"}).then(function(u){return E=u.body.getReader(),n(u.status,u.statusText,u.headers.get("Content-Type"),new ue(u.headers)),new K(function(w,z){var he=function(){E.read().then(function(U){if(U.done)w(void 0);else{var F=y.decode(U.value,{stream:!0});a(F),he()}}).catch(function(U){z(U)})};he()})}).catch(function(u){if(u.name!=="AbortError")return u}).then(function(u){t(u)}),{abort:function(){E!=null&&E.cancel(),p.abort()}}};function re(){this._listeners=Object.create(null)}function Ee(e){i(function(){throw e},0)}re.prototype.dispatchEvent=function(e){e.target=this;var n=this._listeners[e.type];if(n!=null)for(var a=n.length,t=0;t<a;t+=1){var c=n[t];try{typeof c.handleEvent=="function"?c.handleEvent(e):c.call(this,e)}catch(s){Ee(s)}}},re.prototype.addEventListener=function(e,n){e=String(e);var a=this._listeners,t=a[e];t==null&&(t=[],a[e]=t);for(var c=!1,s=0;s<t.length;s+=1)t[s]===n&&(c=!0);c||t.push(n)},re.prototype.removeEventListener=function(e,n){e=String(e);var a=this._listeners,t=a[e];if(t!=null){for(var c=[],s=0;s<t.length;s+=1)t[s]!==n&&c.push(t[s]);c.length===0?delete a[e]:a[e]=c}};function Z(e){this.type=e,this.target=void 0}function le(e,n){Z.call(this,e),this.data=n.data,this.lastEventId=n.lastEventId}le.prototype=Object.create(Z.prototype);function f(e,n){Z.call(this,e),this.status=n.status,this.statusText=n.statusText,this.headers=n.headers}f.prototype=Object.create(Z.prototype);function o(e,n){Z.call(this,e),this.error=n.error}o.prototype=Object.create(Z.prototype);var v=-1,S=0,m=1,T=2,L=-1,X=0,ne=1,ve=2,Xe=3,qe=/^text\/event\-stream(;.*)?$/i,Ge=1e3,Ke=18e6,De=function(e,n){var a=e==null?n:parseInt(e,10);return a!==a&&(a=n),Ne(a)},Ne=function(e){return Math.min(Math.max(e,Ge),Ke)},oe=function(e,n,a){try{typeof n=="function"&&n.call(e,a)}catch(t){Ee(t)}};function q(e,n){re.call(this),n=n||{},this.onopen=void 0,this.onmessage=void 0,this.onerror=void 0,this.url=void 0,this.readyState=void 0,this.withCredentials=void 0,this.headers=void 0,this._close=void 0,We(this,e,n)}function Je(){return d!=null&&"withCredentials"in d.prototype||k==null?new d:new k}var ze=ee!=null&&de!=null&&"body"in de.prototype;function We(e,n,a){n=String(n);var t=Boolean(a.withCredentials),c=a.lastEventIdQueryParameterName||"lastEventId",s=Ne(1e3),l=De(a.heartbeatTimeout,45e3),E="",p=s,g=!1,y=0,u=a.headers||{},w=a.Transport,z=ze&&w==null?void 0:new b(w!=null?new w:Je()),he=w!=null&&typeof w!="string"?new w:z==null?new me:new ye,U=void 0,F=0,G=v,se="",we="",W="",be="",x=X,_e=0,ae=0,Ye=function(I,R,$,B){if(G===S)if(I===200&&$!=null&&qe.test($)){G=m,g=Date.now(),p=s,e.readyState=m;var M=new f("open",{status:I,statusText:R,headers:B});e.dispatchEvent(M),oe(e,e.onopen,M)}else{var O="";I!==200?(R&&(R=R.replace(/\s+/g," ")),O="EventSource's response has a status "+I+" "+R+" that is not 200. Aborting the connection."):O="EventSource's response has a Content-Type specifying an unsupported type: "+($==null?"-":$.replace(/\s+/g," "))+". Aborting the connection.",Fe();var M=new f("error",{status:I,statusText:R,headers:B});e.dispatchEvent(M),oe(e,e.onerror,M),console.error(O)}},Qe=function(I){if(G===m){for(var R=-1,$=0;$<I.length;$+=1){var B=I.charCodeAt($);(B===`
`.charCodeAt(0)||B==="\r".charCodeAt(0))&&(R=$)}var M=(R!==-1?be:"")+I.slice(0,R+1);be=(R===-1?be:"")+I.slice(R+1),I!==""&&(g=Date.now(),y+=I.length);for(var O=0;O<M.length;O+=1){var B=M.charCodeAt(O);if(x===L&&B===`
`.charCodeAt(0))x=X;else if(x===L&&(x=X),B==="\r".charCodeAt(0)||B===`
`.charCodeAt(0)){if(x!==X){x===ne&&(ae=O+1);var Y=M.slice(_e,ae-1),Q=M.slice(ae+(ae<O&&M.charCodeAt(ae)===" ".charCodeAt(0)?1:0),O);Y==="data"?(se+=`
`,se+=Q):Y==="id"?we=Q:Y==="event"?W=Q:Y==="retry"?(s=De(Q,s),p=s):Y==="heartbeatTimeout"&&(l=De(Q,l),F!==0&&(h(F),F=i(function(){pe()},l)))}if(x===X){if(se!==""){E=we,W===""&&(W="message");var fe=new le(W,{data:se.slice(1),lastEventId:we});if(e.dispatchEvent(fe),W==="open"?oe(e,e.onopen,fe):W==="message"?oe(e,e.onmessage,fe):W==="error"&&oe(e,e.onerror,fe),G===T)return}se="",W=""}x=B==="\r".charCodeAt(0)?L:X}else x===X&&(_e=O,x=ne),x===ne?B===":".charCodeAt(0)&&(ae=O+1,x=ve):x===ve&&(x=Xe)}}},He=function(I){if(G===m||G===S){G=v,F!==0&&(h(F),F=0),F=i(function(){pe()},p),p=Ne(Math.min(s*16,p*2)),e.readyState=S;var R=new o("error",{error:I});e.dispatchEvent(R),oe(e,e.onerror,R),I!=null&&console.error(I)}},Fe=function(){G=T,U!=null&&(U.abort(),U=void 0),F!==0&&(h(F),F=0),e.readyState=T},pe=function(){if(F=0,G!==v){if(!g&&U!=null)He(new Error("No activity within "+l+" milliseconds. "+(G===S?"No response received.":y+" chars received.")+" Reconnecting.")),U!=null&&(U.abort(),U=void 0);else{var I=Math.max((g||Date.now())+l-Date.now(),1);g=!1,F=i(function(){pe()},I)}return}g=!1,y=0,F=i(function(){pe()},l),G=S,se="",W="",we=E,be="",_e=0,ae=0,x=X;var R=n;if(n.slice(0,5)!=="data:"&&n.slice(0,5)!=="blob:"&&E!==""){var $=n.indexOf("?");R=$===-1?n:n.slice(0,$+1)+n.slice($+1).replace(/(?:^|&)([^=&]*)(?:=[^&]*)?/g,function(Q,fe){return fe===c?"":Q}),R+=(n.indexOf("?")===-1?"?":"&")+c+"="+encodeURIComponent(E)}var B=e.withCredentials,M={};M.Accept="text/event-stream";var O=e.headers;if(O!=null)for(var Y in O)Object.prototype.hasOwnProperty.call(O,Y)&&(M[Y]=O[Y]);try{U=he.open(z,Ye,Qe,He,R,B,M)}catch(Q){throw Fe(),Q}};e.url=n,e.readyState=S,e.withCredentials=t,e.headers=u,e._close=Fe,pe()}q.prototype=Object.create(re.prototype),q.prototype.CONNECTING=S,q.prototype.OPEN=m,q.prototype.CLOSED=T,q.prototype.close=function(){this._close()},q.CONNECTING=S,q.OPEN=m,q.CLOSED=T,q.prototype.withCredentials=void 0;var Ve=P;d!=null&&(P==null||!("withCredentials"in P.prototype))&&(Ve=q),function(e){if(typeof Ce=="object"&&typeof Ce.exports=="object"){var n=e(Me);n!==void 0&&(Ce.exports=n)}else typeof define=="function"&&define.amd?define(["exports"],e):e(r)}(function(e){e.EventSourcePolyfill=q,e.NativeEventSource=P,e.EventSource=Ve})})(typeof globalThis=="undefined"?typeof window!="undefined"?window:typeof self!="undefined"?self:Me:globalThis)});var ut={};ot(ut,{Event:()=>V,initialize:()=>Be});function xe(r){this.message=r}xe.prototype=new Error,xe.prototype.name="InvalidCharacterError";var Le=typeof window!="undefined"&&window.atob&&window.atob.bind(window)||function(r){var i=String(r).replace(/=+$/,"");if(i.length%4==1)throw new xe("'atob' failed: The string to be decoded is not correctly encoded.");for(var h,d,k=0,D=0,P="";d=i.charAt(D++);~d&&(h=k%4?64*h+d:d,k++%4)?P+=String.fromCharCode(255&h>>(-2*k&6)):0)d="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(d);return P};function dt(r){var i=r.replace(/-/g,"+").replace(/_/g,"/");switch(i.length%4){case 0:break;case 2:i+="==";break;case 3:i+="=";break;default:throw"Illegal base64url string!"}try{return function(h){return decodeURIComponent(Le(h).replace(/(.)/g,function(d,k){var D=k.charCodeAt(0).toString(16).toUpperCase();return D.length<2&&(D="0"+D),"%"+D}))}(i)}catch(h){return Le(i)}}function Te(r){this.message=r}function ct(r,i){if(typeof r!="string")throw new Te("Invalid token specified");var h=(i=i||{}).header===!0?0:1;try{return JSON.parse(dt(r.split(".")[h]))}catch(d){throw new Te("Invalid token specified: "+d.message)}}Te.prototype=new Error,Te.prototype.name="InvalidTokenError";var ke=ct;function Pe(r){return{all:r=r||new Map,on:function(i,h){var d=r.get(i);d&&d.push(h)||r.set(i,[h])},off:function(i,h){var d=r.get(i);d&&d.splice(d.indexOf(h)>>>0,1)},emit:function(i,h){(r.get(i)||[]).slice().map(function(d){d(h)}),(r.get("*")||[]).slice().map(function(d){d(i,h)})}}}var $e=ft(je());var V;(function(r){r.READY="ready",r.CONNECTED="connected",r.DISCONNECTED="disconnected",r.RECONNECTED="reconnected",r.CHANGED="changed",r.ERROR="error"})(V||(V={}));var Ue={debug:!1,baseUrl:"https://config.feature-flags.uat.harness.io/api/1.0",eventUrl:"https://event.feature-flags.uat.harness.io/api/1.0",streamEnabled:!0,allAttributesPrivate:!1,privateAttributeNames:[]},ie=(r,...i)=>console.error(`[FF-SDK] ${r}`,...i),Re=30*1e3;var lt="1.3.0",vt=500,Ie=globalThis.fetch,ht=$e.EventSourcePolyfill,ge=!!globalThis.Proxy,Ae=r=>{let{value:i}=r;try{switch(r.kind.toLowerCase()){case"int":case"number":i=Number(i);break;case"boolean":i=i.toString().toLowerCase()==="true";break;case"json":i=JSON.parse(i);break}}catch(h){ie(h)}return i},Be=(r,i,h)=>{let d,k,D,P,j,K=!0,ee=()=>{K=!1},de=()=>{K=!0},C=[],A=Pe(),J={...Ue,...h},N=(f,...o)=>{J.debug&&console.debug(`[FF-SDK] ${f}`,...o)},te=f=>{if(K){let o=Date.now();o-f.lastAccessed>vt&&(f.count++,f.lastAccessed=o)}};globalThis.onbeforeunload=()=>{C.length&&globalThis.localStorage&&(ee(),globalThis.localStorage.HARNESS_FF_METRICS=JSON.stringify(C),de())};let Oe=async(f,o)=>(await(await Ie(`${o.baseUrl}/client/auth`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({apiKey:f,target:i})})).json()).authToken,_=()=>{if(C.length){N("Sending metrics...",{metrics:C,evaluations:b});let f={metricsData:C.map(o=>({timestamp:Date.now(),count:o.count,metricsType:"FFMETRICS",attributes:[{key:"featureIdentifier",value:o.featureIdentifier},{key:"featureName",value:o.featureIdentifier},{key:"variationIdentifier",value:o.variationIdentifier},{key:"target",value:i.identifier},{key:"SDK_NAME",value:"JavaScript"},{key:"SDK_TYPE",value:"client"},{key:"SDK_VERSION",value:lt}]}))};Ie(`${h.eventUrl}/metrics/${d}?cluster=${k}`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${P}`},body:JSON.stringify(f)}).then(()=>{C=[]}).catch(o=>{ie(o)}).finally(()=>{j=window.setTimeout(_,Re)})}else j=window.setTimeout(_,Re)},b={},ce=function(){return ge?new Proxy({},{get(f,o){let v=f[o];if(f.hasOwnProperty(o)){let S=f[o],m=C.find(T=>T.featureIdentifier===o&&S===T.featureValue);m?(m.variationIdentifier=b[o]?.identifier||"",te(m)):C.push({featureIdentifier:o,featureValue:S,variationIdentifier:b[o]?.identifier||"",count:K?1:0,lastAccessed:Date.now()}),N("Metrics event: Flag:",o,"has been read with value:",S,"variationIdentifier:",b[o]?.identifier)}return v}}):{}},H=ce();Oe(r,J).then(f=>{P=f;let o=ke(f);if(N("Authenticated",o),globalThis.localStorage&&globalThis.localStorage.HARNESS_FF_METRICS)try{delete globalThis.localStorage.HARNESS_FF_METRICS,N("Picking up metrics from previous session")}catch(v){}j=window.setTimeout(_,Re),d=o.environment,k=o.clusterIdentifier,ye().then(()=>{N("Fetch all flags ok",H)}).then(()=>{me()}).then(()=>{N("Event stream ready",{storage:H}),A.emit(V.READY,H),ge||Object.keys(H).forEach(v=>{C.push({featureIdentifier:v,featureValue:H[v],variationIdentifier:b[v]?.identifier||"",count:K?1:0,lastAccessed:Date.now()})})}).catch(v=>{A.emit(V.ERROR,v)})}).catch(f=>{ie("Authentication error: ",f),A.emit(V.ERROR,f)});let ye=async()=>{try{(await(await Ie(`${J.baseUrl}/client/env/${d}/target/${i.identifier}/evaluations?cluster=${k}`,{headers:{Authorization:`Bearer ${P}`}})).json()).forEach(v=>{let S=Ae(v);H[v.flag]=S,b[v.flag]={...v,value:S}})}catch(f){return ie("Features fetch operation error: ",f),A.emit(V.ERROR,f),f}},ue=async f=>{try{let o=await Ie(`${J.baseUrl}/client/env/${d}/target/${i.identifier}/evaluations/${f}?cluster=${k}`,{headers:{Authorization:`Bearer ${P}`}});if(o.ok){let v=await o.json(),S=Ae(v);if(ee(),H[f]=S,b[f]={...v,value:S},de(),A.emit(V.CHANGED,ge?new Proxy(v,{get(m,T){if(m.hasOwnProperty(T)&&T==="value"){let L=m.flag,X=v.value,ne=C.find(ve=>ve.featureIdentifier===L&&ve.featureValue===X);ne?(te(ne),ne.variationIdentifier=b[L]?.identifier||""):C.push({featureIdentifier:L,featureValue:String(X),variationIdentifier:b[L].identifier||"",count:K?1:0,lastAccessed:Date.now()}),N("Metrics event: Flag",T,"has been read with value via stream update",X)}return T==="value"?Ae(v):v[T]}}):{deleted:v.deleted,flag:v.flag,value:Ae(v)}),!ge){let m=v.flag,T=C.find(L=>L.featureIdentifier===m&&L.featureValue===v.value);T?(te(T),T.variationIdentifier=b[m]?.identifier||""):C.push({featureIdentifier:m,featureValue:String(v.value),variationIdentifier:b[m].identifier||"",count:K?1:0,lastAccessed:Date.now()})}}else A.emit(V.ERROR,o)}catch(o){ie("Feature fetch operation error: ",o),A.emit(V.ERROR,o)}},me=()=>{if(!J.streamEnabled){N("Stream is disabled by configuration. Note: Polling is not yet supported");return}D=new ht(`${J.baseUrl}/stream`,{headers:{Authorization:`Bearer ${P}`,"API-Key":r}}),D.onopen=f=>{N("Stream connected",f),A.emit(V.CONNECTED)},D.onclose=f=>{N("Stream disconnected"),A.emit(V.DISCONNECTED)},D.onerror=f=>{ie("Stream has issue",f),A.emit("error",f)},D.addEventListener("*",f=>{let o=JSON.parse(f.data);switch(N("Received event from stream: ",o),o.event){case"create":setTimeout(()=>ue(o.identifier),1e3);break;case"patch":ue(o.identifier);break;case"delete":delete H[o.identifier],A.emit(V.CHANGED,{flag:o.identifier,value:void 0,deleted:!0}),N("Evaluation deleted",{message:o,storage:H});break}})},re=(f,o)=>A.on(f,o),Ee=(f,o)=>{f?A.off(f,o):le()},Z=(f,o)=>{let v=H[f];if(!ge&&v!==void 0){let S=v,m=f,T=C.find(L=>L.featureIdentifier===m&&L.featureValue===S);T?(te(T),T.variationIdentifier=b[m]?.identifier||""):C.push({featureIdentifier:m,featureValue:S,count:K?1:0,variationIdentifier:b[m].identifier||"",lastAccessed:Date.now()})}return v!==void 0?v:o},le=()=>{N("Closing event stream"),H=ce(),b={},clearTimeout(j),A.all.clear(),D.close()};return{on:re,off:Ee,variation:Z,close:le}};return ut;})();
/** @license
 * eventsource.js
 * Available under MIT License (MIT)
 * https://github.com/Yaffle/EventSource/
 */
//# sourceMappingURL=sdk.client-iife.js.map
