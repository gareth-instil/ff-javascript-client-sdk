var Qe=Object.create,_e=Object.defineProperty,Ze=Object.getPrototypeOf,et=Object.prototype.hasOwnProperty,tt=Object.getOwnPropertyNames,rt=Object.getOwnPropertyDescriptor;var nt=r=>_e(r,"__esModule",{value:!0});var at=(r,i)=>()=>(i||(i={exports:{}},r(i.exports,i)),i.exports);var it=(r,i,p)=>{if(i&&typeof i=="object"||typeof i=="function")for(let d of tt(i))!et.call(r,d)&&d!=="default"&&_e(r,d,{get:()=>i[d],enumerable:!(p=rt(i,d))||p.enumerable});return r},ot=r=>it(nt(_e(r!=null?Qe(Ze(r)):{},"default",r&&r.__esModule&&"default"in r?{get:()=>r.default,enumerable:!0}:{value:r,enumerable:!0})),r);var je=at((xe,Te)=>{(function(r){"use strict";var i=r.setTimeout,p=r.clearTimeout,d=r.XMLHttpRequest,x=r.XDomainRequest,M=r.ActiveXObject,U=r.EventSource,D=r.document,ve=r.Promise,Y=r.fetch,C=r.Response,T=r.TextDecoder,K=r.TextEncoder,A=r.AbortController;if(typeof window!="undefined"&&!("readyState"in D)&&D.body==null&&(D.readyState="loading",window.addEventListener("load",function(e){D.readyState="complete"},!1)),d==null&&M!=null&&(d=function(){return new M("Microsoft.XMLHTTP")}),Object.create==null&&(Object.create=function(e){function n(){}return n.prototype=e,new n}),Date.now||(Date.now=function(){return new Date().getTime()}),A==null){var ne=Y;Y=function(e,n){var a=n.signal;return ne(e,{headers:n.headers,credentials:n.credentials,cache:n.cache}).then(function(t){var u=t.body.getReader();return a._reader=u,a._aborted&&a._reader.cancel(),{status:t.status,statusText:t.statusText,headers:t.headers,body:{getReader:function(){return u}}}})},A=function(){this.signal={_reader:null,_aborted:!1},this.abort=function(){this.signal._reader!=null&&this.signal._reader.cancel(),this.signal._aborted=!0}}}function he(){this.bitsNeeded=0,this.codePoint=0}he.prototype.decode=function(e){function n(g,m,c){if(c===1)return g>=128>>m&&g<<m<=2047;if(c===2)return g>=2048>>m&&g<<m<=55295||g>=57344>>m&&g<<m<=65535;if(c===3)return g>=65536>>m&&g<<m<=1114111;throw new Error}function a(g,m){if(g===6*1)return m>>6>15?3:m>31?2:1;if(g===6*2)return m>15?3:2;if(g===6*3)return 3;throw new Error}for(var t=65533,u="",s=this.bitsNeeded,l=this.codePoint,b=0;b<e.length;b+=1){var h=e[b];s!==0&&(h<128||h>191||!n(l<<6|h&63,s-6,a(s,l)))&&(s=0,l=t,u+=String.fromCharCode(l)),s===0?(h>=0&&h<=127?(s=0,l=h):h>=192&&h<=223?(s=6*1,l=h&31):h>=224&&h<=239?(s=6*2,l=h&15):h>=240&&h<=247?(s=6*3,l=h&7):(s=0,l=t),s!==0&&!n(l,s,a(s,l))&&(s=0,l=t)):(s-=6,l=l<<6|h&63),s===0&&(l<=65535?u+=String.fromCharCode(l):(u+=String.fromCharCode(55296+(l-65535-1>>10)),u+=String.fromCharCode(56320+(l-65535-1&1023))))}return this.bitsNeeded=s,this.codePoint=l,u};var se=function(){try{return new T().decode(new K().encode("test"),{stream:!0})==="test"}catch(e){console.debug("TextDecoder does not support streaming option. Using polyfill instead: "+e)}return!1};(T==null||K==null||!se())&&(T=he);var y=function(){};function G(e){this.withCredentials=!1,this.readyState=0,this.status=0,this.statusText="",this.responseText="",this.onprogress=y,this.onload=y,this.onerror=y,this.onreadystatechange=y,this._contentType="",this._xhr=e,this._sendTimeout=0,this._abort=y}G.prototype.open=function(e,n){this._abort(!0);var a=this,t=this._xhr,u=1,s=0;this._abort=function(c){a._sendTimeout!==0&&(p(a._sendTimeout),a._sendTimeout=0),(u===1||u===2||u===3)&&(u=4,t.onload=y,t.onerror=y,t.onabort=y,t.onprogress=y,t.onreadystatechange=y,t.abort(),s!==0&&(p(s),s=0),c||(a.readyState=4,a.onabort(null),a.onreadystatechange())),u=0};var l=function(){if(u===1){var c=0,S="",z=void 0;if("contentType"in t)c=200,S="OK",z=t.contentType;else try{c=t.status,S=t.statusText,z=t.getResponseHeader("Content-Type")}catch(de){c=0,S="",z=void 0}c!==0&&(u=2,a.readyState=2,a.status=c,a.statusText=S,a._contentType=z,a.onreadystatechange())}},b=function(){if(l(),u===2||u===3){u=3;var c="";try{c=t.responseText}catch(S){}a.readyState=3,a.responseText=c,a.onprogress()}},h=function(c,S){if((S==null||S.preventDefault==null)&&(S={preventDefault:y}),b(),u===1||u===2||u===3){if(u=4,s!==0&&(p(s),s=0),a.readyState=4,c==="load")a.onload(S);else if(c==="error")a.onerror(S);else if(c==="abort")a.onabort(S);else throw new TypeError;a.onreadystatechange()}},g=function(c){t!=null&&(t.readyState===4?(!("onload"in t)||!("onerror"in t)||!("onabort"in t))&&h(t.responseText===""?"error":"load",c):t.readyState===3?"onprogress"in t||b():t.readyState===2&&l())},m=function(){s=i(function(){m()},500),t.readyState===3&&b()};"onload"in t&&(t.onload=function(c){h("load",c)}),"onerror"in t&&(t.onerror=function(c){h("error",c)}),"onabort"in t&&(t.onabort=function(c){h("abort",c)}),"onprogress"in t&&(t.onprogress=b),"onreadystatechange"in t&&(t.onreadystatechange=function(c){g(c)}),("contentType"in t||!("ontimeout"in d.prototype))&&(n+=(n.indexOf("?")===-1?"?":"&")+"padding=true"),t.open(e,n,!0),"readyState"in t&&(s=i(function(){m()},0))},G.prototype.abort=function(){this._abort(!1)},G.prototype.getResponseHeader=function(e){return this._contentType},G.prototype.setRequestHeader=function(e,n){var a=this._xhr;"setRequestHeader"in a&&a.setRequestHeader(e,n)},G.prototype.getAllResponseHeaders=function(){return this._xhr.getAllResponseHeaders!=null&&this._xhr.getAllResponseHeaders()||""},G.prototype.send=function(){if((!("ontimeout"in d.prototype)||!("sendAsBinary"in d.prototype)&&!("mozAnon"in d.prototype))&&D!=null&&D.readyState!=null&&D.readyState!=="complete"){var e=this;e._sendTimeout=i(function(){e._sendTimeout=0,e.send()},4);return}var n=this._xhr;"withCredentials"in n&&(n.withCredentials=this.withCredentials);try{n.send(void 0)}catch(a){throw a}};function k(e){return e.replace(/[A-Z]/g,function(n){return String.fromCharCode(n.charCodeAt(0)+32)})}function pe(e){for(var n=Object.create(null),a=e.split(`\r
`),t=0;t<a.length;t+=1){var u=a[t],s=u.split(": "),l=s.shift(),b=s.join(": ");n[k(l)]=b}this._map=n}pe.prototype.get=function(e){return this._map[k(e)]},d!=null&&d.HEADERS_RECEIVED==null&&(d.HEADERS_RECEIVED=2);function fe(){}fe.prototype.open=function(e,n,a,t,u,s,l){e.open("GET",u);var b=0;e.onprogress=function(){var g=e.responseText,m=g.slice(b);b+=m.length,a(m)},e.onerror=function(g){g.preventDefault(),t(new Error("NetworkError"))},e.onload=function(){t(null)},e.onabort=function(){t(null)},e.onreadystatechange=function(){if(e.readyState===d.HEADERS_RECEIVED){var g=e.status,m=e.statusText,c=e.getResponseHeader("Content-Type"),S=e.getAllResponseHeaders();n(g,m,c,new pe(S))}},e.withCredentials=s;for(var h in l)Object.prototype.hasOwnProperty.call(l,h)&&e.setRequestHeader(h,l[h]);return e.send(),e};function ge(e){this._headers=e}ge.prototype.get=function(e){return this._headers.get(e)};function ye(){}ye.prototype.open=function(e,n,a,t,u,s,l){var b=null,h=new A,g=h.signal,m=new T;return Y(u,{headers:l,credentials:s?"include":"same-origin",signal:g,cache:"no-store"}).then(function(c){return b=c.body.getReader(),n(c.status,c.statusText,c.headers.get("Content-Type"),new ge(c.headers)),new ve(function(S,z){var de=function(){b.read().then(function(j){if(j.done)S(void 0);else{var V=m.decode(j.value,{stream:!0});a(V),de()}}).catch(function(j){z(j)})};de()})}).catch(function(c){if(c.name!=="AbortError")return c}).then(function(c){t(c)}),{abort:function(){b!=null&&b.cancel(),h.abort()}}};function Q(){this._listeners=Object.create(null)}function me(e){i(function(){throw e},0)}Q.prototype.dispatchEvent=function(e){e.target=this;var n=this._listeners[e.type];if(n!=null)for(var a=n.length,t=0;t<a;t+=1){var u=n[t];try{typeof u.handleEvent=="function"?u.handleEvent(e):u.call(this,e)}catch(s){me(s)}}},Q.prototype.addEventListener=function(e,n){e=String(e);var a=this._listeners,t=a[e];t==null&&(t=[],a[e]=t);for(var u=!1,s=0;s<t.length;s+=1)t[s]===n&&(u=!0);u||t.push(n)},Q.prototype.removeEventListener=function(e,n){e=String(e);var a=this._listeners,t=a[e];if(t!=null){for(var u=[],s=0;s<t.length;s+=1)t[s]!==n&&u.push(t[s]);u.length===0?delete a[e]:a[e]=u}};function J(e){this.type=e,this.target=void 0}function f(e,n){J.call(this,e),this.data=n.data,this.lastEventId=n.lastEventId}f.prototype=Object.create(J.prototype);function o(e,n){J.call(this,e),this.status=n.status,this.statusText=n.statusText,this.headers=n.headers}o.prototype=Object.create(J.prototype);function v(e,n){J.call(this,e),this.error=n.error}v.prototype=Object.create(J.prototype);var O=-1,E=0,w=1,N=2,Z=-1,$=0,ae=1,Me=2,Be=3,Xe=/^text\/event\-stream(;.*)?$/i,qe=1e3,Ge=18e6,Ae=function(e,n){var a=e==null?n:parseInt(e,10);return a!==a&&(a=n),Oe(a)},Oe=function(e){return Math.min(Math.max(e,qe),Ge)},ie=function(e,n,a){try{typeof n=="function"&&n.call(e,a)}catch(t){me(t)}};function B(e,n){Q.call(this),n=n||{},this.onopen=void 0,this.onmessage=void 0,this.onerror=void 0,this.url=void 0,this.readyState=void 0,this.withCredentials=void 0,this.headers=void 0,this._close=void 0,ze(this,e,n)}function Ke(){return d!=null&&"withCredentials"in d.prototype||x==null?new d:new x}var Je=Y!=null&&C!=null&&"body"in C.prototype;function ze(e,n,a){n=String(n);var t=Boolean(a.withCredentials),u=a.lastEventIdQueryParameterName||"lastEventId",s=Oe(1e3),l=Ae(a.heartbeatTimeout,45e3),b="",h=s,g=!1,m=0,c=a.headers||{},S=a.Transport,z=Je&&S==null?void 0:new G(S!=null?new S:Ke()),de=S!=null&&typeof S!="string"?new S:z==null?new ye:new fe,j=void 0,V=0,X=O,oe="",Ee="",W="",we="",H=$,De=0,ee=0,We=function(R,I,q,L){if(X===E)if(R===200&&q!=null&&Xe.test(q)){X=w,g=Date.now(),h=s,e.readyState=w;var _=new o("open",{status:R,statusText:I,headers:L});e.dispatchEvent(_),ie(e,e.onopen,_)}else{var F="";R!==200?(I&&(I=I.replace(/\s+/g," ")),F="EventSource's response has a status "+R+" "+I+" that is not 200. Aborting the connection."):F="EventSource's response has a Content-Type specifying an unsupported type: "+(q==null?"-":q.replace(/\s+/g," "))+". Aborting the connection.",Ne();var _=new o("error",{status:R,statusText:I,headers:L});e.dispatchEvent(_),ie(e,e.onerror,_),console.error(F)}},Ye=function(R){if(X===w){for(var I=-1,q=0;q<R.length;q+=1){var L=R.charCodeAt(q);(L===`
`.charCodeAt(0)||L==="\r".charCodeAt(0))&&(I=q)}var _=(I!==-1?we:"")+R.slice(0,I+1);we=(I===-1?we:"")+R.slice(I+1),R!==""&&(g=Date.now(),m+=R.length);for(var F=0;F<_.length;F+=1){var L=_.charCodeAt(F);if(H===Z&&L===`
`.charCodeAt(0))H=$;else if(H===Z&&(H=$),L==="\r".charCodeAt(0)||L===`
`.charCodeAt(0)){if(H!==$){H===ae&&(ee=F+1);var te=_.slice(De,ee-1),ue=_.slice(ee+(ee<F&&_.charCodeAt(ee)===" ".charCodeAt(0)?1:0),F);te==="data"?(oe+=`
`,oe+=ue):te==="id"?Ee=ue:te==="event"?W=ue:te==="retry"?(s=Ae(ue,s),h=s):te==="heartbeatTimeout"&&(l=Ae(ue,l),V!==0&&(p(V),V=i(function(){ce()},l)))}if(H===$){if(oe!==""){b=Ee,W===""&&(W="message");var be=new f(W,{data:oe.slice(1),lastEventId:Ee});if(e.dispatchEvent(be),W==="open"?ie(e,e.onopen,be):W==="message"?ie(e,e.onmessage,be):W==="error"&&ie(e,e.onerror,be),X===N)return}oe="",W=""}H=L==="\r".charCodeAt(0)?Z:$}else H===$&&(De=F,H=ae),H===ae?L===":".charCodeAt(0)&&(ee=F+1,H=Me):H===Me&&(H=Be)}}},He=function(R){if(X===w||X===E){X=O,V!==0&&(p(V),V=0),V=i(function(){ce()},h),h=Oe(Math.min(s*16,h*2)),e.readyState=E;var I=new v("error",{error:R});e.dispatchEvent(I),ie(e,e.onerror,I),R!=null&&console.error(R)}},Ne=function(){X=N,j!=null&&(j.abort(),j=void 0),V!==0&&(p(V),V=0),e.readyState=N},ce=function(){if(V=0,X!==O){if(!g&&j!=null)He(new Error("No activity within "+l+" milliseconds. "+(X===E?"No response received.":m+" chars received.")+" Reconnecting.")),j!=null&&(j.abort(),j=void 0);else{var R=Math.max((g||Date.now())+l-Date.now(),1);g=!1,V=i(function(){ce()},R)}return}g=!1,m=0,V=i(function(){ce()},l),X=E,oe="",W="",Ee=b,we="",De=0,ee=0,H=$;var I=n;n.slice(0,5)!=="data:"&&n.slice(0,5)!=="blob:"&&b!==""&&(I+=(n.indexOf("?")===-1?"?":"&")+u+"="+encodeURIComponent(b));var q=e.withCredentials,L={};L.Accept="text/event-stream";var _=e.headers;if(_!=null)for(var F in _)Object.prototype.hasOwnProperty.call(_,F)&&(L[F]=_[F]);try{j=de.open(z,We,Ye,He,I,q,L)}catch(te){throw Ne(),te}};e.url=n,e.readyState=E,e.withCredentials=t,e.headers=c,e._close=Ne,ce()}B.prototype=Object.create(Q.prototype),B.prototype.CONNECTING=E,B.prototype.OPEN=w,B.prototype.CLOSED=N,B.prototype.close=function(){this._close()},B.CONNECTING=E,B.OPEN=w,B.CLOSED=N,B.prototype.withCredentials=void 0;var Ve=U;d!=null&&(U==null||!("withCredentials"in U.prototype))&&(Ve=B),function(e){if(typeof Te=="object"&&typeof Te.exports=="object"){var n=e(xe);n!==void 0&&(Te.exports=n)}else typeof define=="function"&&define.amd?define(["exports"],e):e(r)}(function(e){e.EventSourcePolyfill=B,e.NativeEventSource=U,e.EventSource=Ve})})(typeof globalThis=="undefined"?typeof window!="undefined"?window:typeof self!="undefined"?self:xe:globalThis)});function Fe(r){this.message=r}Fe.prototype=new Error,Fe.prototype.name="InvalidCharacterError";var Le=typeof window!="undefined"&&window.atob&&window.atob.bind(window)||function(r){var i=String(r).replace(/=+$/,"");if(i.length%4==1)throw new Fe("'atob' failed: The string to be decoded is not correctly encoded.");for(var p,d,x=0,M=0,U="";d=i.charAt(M++);~d&&(p=x%4?64*p+d:d,x++%4)?U+=String.fromCharCode(255&p>>(-2*x&6)):0)d="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(d);return U};function st(r){var i=r.replace(/-/g,"+").replace(/_/g,"/");switch(i.length%4){case 0:break;case 2:i+="==";break;case 3:i+="=";break;default:throw"Illegal base64url string!"}try{return function(p){return decodeURIComponent(Le(p).replace(/(.)/g,function(d,x){var M=x.charCodeAt(0).toString(16).toUpperCase();return M.length<2&&(M="0"+M),"%"+M}))}(i)}catch(p){return Le(i)}}function Se(r){this.message=r}function ft(r,i){if(typeof r!="string")throw new Se("Invalid token specified");var p=(i=i||{}).header===!0?0:1;try{return JSON.parse(st(r.split(".")[p]))}catch(d){throw new Se("Invalid token specified: "+d.message)}}Se.prototype=new Error,Se.prototype.name="InvalidTokenError";var ke=ft;function Pe(r){return{all:r=r||new Map,on:function(i,p){var d=r.get(i);d&&d.push(p)||r.set(i,[p])},off:function(i,p){var d=r.get(i);d&&d.splice(d.indexOf(p)>>>0,1)},emit:function(i,p){(r.get(i)||[]).slice().map(function(d){d(p)}),(r.get("*")||[]).slice().map(function(d){d(i,p)})}}}var $e=ot(je());var P;(function(r){r.READY="ready",r.CONNECTED="connected",r.DISCONNECTED="disconnected",r.RECONNECTED="reconnected",r.CHANGED="changed",r.ERROR="error"})(P||(P={}));var Ue={debug:!1,baseUrl:"https://config.feature-flags.uat.harness.io/api/1.0",eventUrl:"https://event.feature-flags.uat.harness.io/api/1.0",streamEnabled:!0,allAttributesPrivate:!1,privateAttributeNames:[]},re=(r,...i)=>console.error(`[FF-SDK] ${r}`,...i),Ce=30*1e3;var dt="1.3.0",ct=500,Re=globalThis.fetch,ut=$e.EventSourcePolyfill,le=!!globalThis.Proxy,Ie=r=>{let{value:i}=r;try{switch(r.kind.toLowerCase()){case"int":case"number":i=Number(i);break;case"boolean":i=i.toString().toLowerCase()==="true";break;case"json":i=JSON.parse(i);break}}catch(p){re(p)}return i},lt=(r,i,p)=>{let d,x,M,U,D=!0,ve=()=>{D=!1},Y=()=>{D=!0},C=[],T=Pe(),K={...Ue,...p},A=(f,...o)=>{K.debug&&console.debug(`[FF-SDK] ${f}`,...o)},ne=f=>{if(D){let o=Date.now();o-f.lastAccessed>ct&&(f.count++,f.lastAccessed=o)}};globalThis.onbeforeunload=()=>{C.length&&globalThis.localStorage&&(ve(),globalThis.localStorage.HARNESS_FF_METRICS=JSON.stringify(C),Y())};let he=async(f,o)=>(await(await Re(`${o.baseUrl}/client/auth`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({apiKey:f,target:i})})).json()).authToken,se=()=>{if(C.length){A("Sending metrics...",{metrics:C,evaluations:y});let f={metricsData:C.map(o=>({timestamp:Date.now(),count:o.count,metricsType:"FFMETRICS",attributes:[{key:"featureIdentifier",value:o.featureIdentifier},{key:"featureName",value:o.featureIdentifier},{key:"variationIdentifier",value:o.variationIdentifier},{key:"target",value:i.identifier},{key:"SDK_NAME",value:"JavaScript"},{key:"SDK_TYPE",value:"client"},{key:"SDK_VERSION",value:dt}]}))};Re(`${p.eventUrl}/metrics/${d}`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${M}`},body:JSON.stringify(f)}).then(()=>{C=[]}).catch(o=>{re(o)}).finally(()=>{U=window.setTimeout(se,Ce)})}else U=window.setTimeout(se,Ce)},y={},G=function(){return le?new Proxy({},{get(f,o){let v=f[o];if(f.hasOwnProperty(o)){let O=f[o],E=C.find(w=>w.featureIdentifier===o&&O===w.featureValue);E?(E.variationIdentifier=y[o]?.identifier||"",ne(E)):C.push({featureIdentifier:o,featureValue:O,variationIdentifier:y[o]?.identifier||"",count:D?1:0,lastAccessed:Date.now()}),A("Metrics event: Flag:",o,"has been read with value:",O,"variationIdentifier:",y[o]?.identifier)}return v}}):{}},k=G();he(r,K).then(f=>{M=f;let o=ke(f);if(A("Authenticated",o),globalThis.localStorage&&globalThis.localStorage.HARNESS_FF_METRICS)try{delete globalThis.localStorage.HARNESS_FF_METRICS,A("Picking up metrics from previous session")}catch(v){}U=window.setTimeout(se,Ce),d=o.environment,pe().then(()=>{A("Fetch all flags ok",k)}).then(()=>{ge()}).then(()=>{A("Event stream ready",{storage:k}),T.emit(P.READY,k),le||Object.keys(k).forEach(v=>{C.push({featureIdentifier:v,featureValue:k[v],variationIdentifier:y[v]?.identifier||"",count:D?1:0,lastAccessed:Date.now()})})}).catch(v=>{T.emit(P.ERROR,v)})}).catch(f=>{re("Authentication error: ",f),T.emit(P.ERROR,f)});let pe=async()=>{try{(await(await Re(`${K.baseUrl}/client/env/${d}/target/${i.identifier}/evaluations`,{headers:{Authorization:`Bearer ${M}`}})).json()).forEach(v=>{let O=Ie(v);k[v.flag]=O,y[v.flag]={...v,value:O}})}catch(f){return re("Features fetch operation error: ",f),T.emit(P.ERROR,f),f}},fe=async f=>{try{let o=await Re(`${K.baseUrl}/client/env/${d}/target/${i.identifier}/evaluations/${f}`,{headers:{Authorization:`Bearer ${M}`}});if(o.ok){let v=await o.json(),O=Ie(v);if(ve(),k[f]=O,y[f]={...v,value:O},Y(),T.emit(P.CHANGED,le?new Proxy(v,{get(E,w){if(E.hasOwnProperty(w)&&w==="value"){let N=E.flag,Z=v.value,$=C.find(ae=>ae.featureIdentifier===N&&ae.featureValue===Z);$?(ne($),$.variationIdentifier=y[N]?.identifier||""):C.push({featureIdentifier:N,featureValue:String(Z),variationIdentifier:y[N].identifier||"",count:D?1:0,lastAccessed:Date.now()}),A("Metrics event: Flag",w,"has been read with value via stream update",Z)}return w==="value"?Ie(v):v[w]}}):{deleted:v.deleted,flag:v.flag,value:Ie(v)}),!le){let E=v.flag,w=C.find(N=>N.featureIdentifier===E&&N.featureValue===v.value);w?(ne(w),w.variationIdentifier=y[E]?.identifier||""):C.push({featureIdentifier:E,featureValue:String(v.value),variationIdentifier:y[E].identifier||"",count:D?1:0,lastAccessed:Date.now()})}}else T.emit(P.ERROR,o)}catch(o){re("Feature fetch operation error: ",o),T.emit(P.ERROR,o)}},ge=()=>{if(!K.streamEnabled){A("Stream is disabled by configuration. Note: Polling is not yet supported");return}x=new ut(`${K.baseUrl}/stream`,{headers:{Authorization:`Bearer ${M}`,"API-Key":r}}),x.onopen=f=>{A("Stream connected",f),T.emit(P.CONNECTED)},x.onclose=f=>{A("Stream disconnected"),T.emit(P.DISCONNECTED)},x.onerror=f=>{re("Stream has issue",f),T.emit("error",f)},x.addEventListener("*",f=>{let o=JSON.parse(f.data);switch(A("Received event from stream: ",o),o.event){case"create":setTimeout(()=>fe(o.identifier),1e3);break;case"patch":fe(o.identifier);break;case"delete":delete k[o.identifier],T.emit(P.CHANGED,{flag:o.identifier,value:void 0,deleted:!0}),A("Evaluation deleted",{message:o,storage:k});break}})},ye=(f,o)=>T.on(f,o),Q=(f,o)=>{f?T.off(f,o):J()},me=(f,o)=>{let v=k[f];if(!le&&v!==void 0){let O=v,E=f,w=C.find(N=>N.featureIdentifier===E&&N.featureValue===O);w?(ne(w),w.variationIdentifier=y[E]?.identifier||""):C.push({featureIdentifier:E,featureValue:O,count:D?1:0,variationIdentifier:y[E].identifier||"",lastAccessed:Date.now()})}return v!==void 0?v:o},J=()=>{A("Closing event stream"),k=G(),y={},clearTimeout(U),T.all.clear(),x.close()};return{on:ye,off:Q,variation:me,close:J}};export{P as Event,lt as initialize};
/** @license
 * eventsource.js
 * Available under MIT License (MIT)
 * https://github.com/Yaffle/EventSource/
 */
//# sourceMappingURL=sdk.client.js.map
