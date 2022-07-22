var _JUPYTERLAB;(()=>{"use strict";var t={80835:()=>{const t=Symbol("Comlink.proxy"),e=Symbol("Comlink.endpoint"),s=Symbol("Comlink.releaseProxy"),r=Symbol("Comlink.thrown"),i=t=>"object"==typeof t&&null!==t||"function"==typeof t,a=new Map([["proxy",{canHandle:e=>i(e)&&e[t],serialize(t){const{port1:e,port2:s}=new MessageChannel;return n(t,e),[s,[s]]},deserialize:t=>(t.start(),l(t,[],undefined))}],["throw",{canHandle:t=>i(t)&&r in t,serialize({value:t}){let e;return e=t instanceof Error?{isError:!0,value:{message:t.message,name:t.name,stack:t.stack}}:{isError:!1,value:t},[e,[]]},deserialize(t){if(t.isError)throw Object.assign(new Error(t.value.message),t.value);throw t.value}}]]);function n(e,s=self){s.addEventListener("message",(function i(a){if(!a||!a.data)return;const{id:h,type:l,path:E}=Object.assign({path:[]},a.data),d=(a.data.argumentList||[]).map(c);let m;try{const s=E.slice(0,-1).reduce(((t,e)=>t[e]),e),r=E.reduce(((t,e)=>t[e]),e);switch(l){case"GET":m=r;break;case"SET":s[E.slice(-1)[0]]=c(a.data.value),m=!0;break;case"APPLY":m=r.apply(s,d);break;case"CONSTRUCT":m=function(e){return Object.assign(e,{[t]:!0})}(new r(...d));break;case"ENDPOINT":{const{port1:t,port2:s}=new MessageChannel;n(e,s),m=function(t,e){return u.set(t,e),t}(t,[t])}break;case"RELEASE":m=void 0;break;default:return}}catch(t){m={value:t,[r]:0}}Promise.resolve(m).catch((t=>({value:t,[r]:0}))).then((t=>{const[e,r]=p(t);s.postMessage(Object.assign(Object.assign({},e),{id:h}),r),"RELEASE"===l&&(s.removeEventListener("message",i),o(s))}))})),s.start&&s.start()}function o(t){(function(t){return"MessagePort"===t.constructor.name})(t)&&t.close()}function h(t){if(t)throw new Error("Proxy has been released and is not useable")}function l(t,r=[],i=function(){}){let a=!1;const n=new Proxy(i,{get(e,i){if(h(a),i===s)return()=>d(t,{type:"RELEASE",path:r.map((t=>t.toString()))}).then((()=>{o(t),a=!0}));if("then"===i){if(0===r.length)return{then:()=>n};const e=d(t,{type:"GET",path:r.map((t=>t.toString()))}).then(c);return e.then.bind(e)}return l(t,[...r,i])},set(e,s,i){h(a);const[n,o]=p(i);return d(t,{type:"SET",path:[...r,s].map((t=>t.toString())),value:n},o).then(c)},apply(s,i,n){h(a);const o=r[r.length-1];if(o===e)return d(t,{type:"ENDPOINT"}).then(c);if("bind"===o)return l(t,r.slice(0,-1));const[u,p]=E(n);return d(t,{type:"APPLY",path:r.map((t=>t.toString())),argumentList:u},p).then(c)},construct(e,s){h(a);const[i,n]=E(s);return d(t,{type:"CONSTRUCT",path:r.map((t=>t.toString())),argumentList:i},n).then(c)}});return n}function E(t){const e=t.map(p);return[e.map((t=>t[0])),(s=e.map((t=>t[1])),Array.prototype.concat.apply([],s))];var s}const u=new WeakMap;function p(t){for(const[e,s]of a)if(s.canHandle(t)){const[r,i]=s.serialize(t);return[{type:"HANDLER",name:e,value:r},i]}return[{type:"RAW",value:t},u.get(t)||[]]}function c(t){switch(t.type){case"HANDLER":return a.get(t.name).deserialize(t.value);case"RAW":return t.value}}function d(t,e,s){return new Promise((r=>{const i=new Array(4).fill(0).map((()=>Math.floor(Math.random()*Number.MAX_SAFE_INTEGER).toString(16))).join("-");t.addEventListener("message",(function e(s){s.data&&s.data.id&&s.data.id===i&&(t.removeEventListener("message",e),r(s.data))})),t.start&&t.start(),t.postMessage(Object.assign({id:i},e),s)}))}const m=new TextEncoder,_=new TextDecoder("utf-8"),f={0:!1,1:!0,2:!0,64:!0,65:!0,66:!0,129:!0,193:!0,514:!0,577:!0,578:!0,705:!0,706:!0,1024:!0,1025:!0,1026:!0,1089:!0,1090:!0,1153:!0,1154:!0,1217:!0,1218:!0,4096:!0,4098:!0};class O{constructor(t){this.fs=t}open(t){const e=this.fs.realPath(t.node);this.fs.FS.isFile(t.node.mode)&&(t.file=this.fs.API.get(e))}close(t){if(!this.fs.FS.isFile(t.node.mode)||!t.file)return;const e=this.fs.realPath(t.node),s=t.flags;let r="string"==typeof s?parseInt(s,10):s;r&=8191;let i=!0;r in f&&(i=f[r]),i&&(this.fs.API.put(e,t.file),t.file=void 0)}read(t,e,s,r,i){var a;if(r<=0||void 0===t.file)return 0;const n=Math.min((null!==(a=t.file.data.length)&&void 0!==a?a:0)-i,r);try{e.set(t.file.data.subarray(i,i+n),s)}catch(t){throw new this.fs.FS.ErrnoError(this.fs.ERRNO_CODES.EPERM)}return n}write(t,e,s,r,i){var a,n;if(r<=0||void 0===t.file)return 0;t.node.timestamp=Date.now();try{if(i+r>(null!==(n=null===(a=t.file)||void 0===a?void 0:a.data.length)&&void 0!==n?n:0)){const e=t.file.data?t.file.data:new Uint8Array;t.file.data=new Uint8Array(i+r),t.file.data.set(e)}return t.file.data.set(e.subarray(s,s+r),i),r}catch(t){throw new this.fs.FS.ErrnoError(this.fs.ERRNO_CODES.EPERM)}}llseek(t,e,s){let r=e;if(1===s)r+=t.position;else if(2===s&&this.fs.FS.isFile(t.node.mode)){if(void 0===t.file)throw new this.fs.FS.ErrnoError(this.fs.ERRNO_CODES.EPERM);r+=t.file.data.length}if(r<0)throw new this.fs.FS.ErrnoError(this.fs.ERRNO_CODES.EINVAL);return r}}class R{constructor(t){this.fs=t}getattr(t){return this.fs.API.getattr(this.fs.realPath(t))}setattr(t,e){}lookup(t,e){const s=this.fs.PATH.join2(this.fs.realPath(t),e),r=this.fs.API.lookup(s);if(!r.ok)throw this.fs.FS.genericErrors[this.fs.ERRNO_CODES.ENOENT];return this.fs.createNode(t,e,r.mode)}mknod(t,e,s,r){const i=this.fs.PATH.join2(this.fs.realPath(t),e);return this.fs.API.mknod(i,s),this.fs.createNode(t,e,s,r)}rename(t,e,s){this.fs.API.rename(t.parent?this.fs.PATH.join2(this.fs.realPath(t.parent),t.name):t.name,this.fs.PATH.join2(this.fs.realPath(e),s)),t.name=s,t.parent=e}unlink(t,e){this.fs.API.rmdir(this.fs.PATH.join2(this.fs.realPath(t),e))}rmdir(t,e){this.fs.API.rmdir(this.fs.PATH.join2(this.fs.realPath(t),e))}readdir(t){return this.fs.API.readdir(this.fs.realPath(t))}symlink(t,e,s){throw new this.fs.FS.ErrnoError(this.fs.ERRNO_CODES.EPERM)}readlink(t){throw new this.fs.FS.ErrnoError(this.fs.ERRNO_CODES.EPERM)}}class P{constructor(t,e,s,r,i){this._baseUrl=t,this._driveName=e,this._mountpoint=s,this.FS=r,this.ERRNO_CODES=i}request(t,e,s=null){const r=new XMLHttpRequest;r.open(t,encodeURI(`${this.endpoint}${e}`),!1);try{null===s?r.send():r.send(s)}catch(t){console.error(t)}if(r.status>=400)throw new this.FS.ErrnoError(this.ERRNO_CODES.EINVAL);return JSON.parse(r.responseText)}lookup(t){return this.request("GET",`${this.normalizePath(t)}?m=lookup`)}getmode(t){return Number.parseInt(this.request("GET",`${this.normalizePath(t)}?m=getmode`))}mknod(t,e){return this.request("GET",`${this.normalizePath(t)}?m=mknod&args=${e}`)}rename(t,e){return this.request("GET",`${this.normalizePath(t)}?m=rename&args=${this.normalizePath(e)}`)}readdir(t){const e=this.request("GET",`${this.normalizePath(t)}?m=readdir`);return e.push("."),e.push(".."),e}rmdir(t){return this.request("GET",`${this.normalizePath(t)}?m=rmdir`)}get(t){const e=this.request("GET",`${this.normalizePath(t)}?m=get`),s=e.content,r=e.format;switch(r){case"json":case"text":return{data:m.encode(s),format:r};case"base64":{const t=atob(s),e=t.length,i=new Uint8Array(e);for(let s=0;s<e;s++)i[s]=t.charCodeAt(s);return{data:i,format:r}}default:throw new this.FS.ErrnoError(this.ERRNO_CODES.ENOENT)}}put(t,e){switch(e.format){case"json":case"text":return this.request("PUT",`${this.normalizePath(t)}?m=put&args=${e.format}`,_.decode(e.data));case"base64":{let s="";for(let t=0;t<e.data.byteLength;t++)s+=String.fromCharCode(e.data[t]);return this.request("PUT",`${this.normalizePath(t)}?m=put&args=${e.format}`,btoa(s))}}}getattr(t){const e=this.request("GET",`${this.normalizePath(t)}?m=getattr`);return e.atime=new Date(e.atime),e.mtime=new Date(e.mtime),e.ctime=new Date(e.ctime),e}normalizePath(t){return t.startsWith(this._mountpoint)&&(t=t.slice(this._mountpoint.length)),this._driveName&&(t=`${this._driveName}:${t}`),t}get endpoint(){return`${this._baseUrl}api/drive/`}}class N{constructor(t){this.FS=t.FS,this.PATH=t.PATH,this.ERRNO_CODES=t.ERRNO_CODES,this.API=new P(t.baseUrl,t.driveName,t.mountpoint,this.FS,this.ERRNO_CODES),this.driveName=t.driveName,this.node_ops=new R(this),this.stream_ops=new O(this)}mount(t){return this.createNode(null,t.mountpoint,16895,0)}createNode(t,e,s,r){const i=this.FS;if(!i.isDir(s)&&!i.isFile(s))throw new i.ErrnoError(this.ERRNO_CODES.EINVAL);const a=i.createNode(t,e,s,r);return a.node_ops=this.node_ops,a.stream_ops=this.stream_ops,a}getMode(t){return this.API.getmode(t)}realPath(t){const e=[];let s=t;for(e.push(s.name);s.parent!==s;)s=s.parent,e.push(s.name);return e.reverse(),this.PATH.join.apply(null,e)}}const y={E2BIG:1,EACCES:2,EADDRINUSE:3,EADDRNOTAVAIL:4,EADV:122,EAFNOSUPPORT:5,EAGAIN:6,EALREADY:7,EBADE:113,EBADF:8,EBADFD:127,EBADMSG:9,EBADR:114,EBADRQC:103,EBADSLT:102,EBFONT:101,EBUSY:10,ECANCELED:11,ECHILD:12,ECHRNG:106,ECOMM:124,ECONNABORTED:13,ECONNREFUSED:14,ECONNRESET:15,EDEADLK:16,EDEADLOCK:16,EDESTADDRREQ:17,EDOM:18,EDOTDOT:125,EDQUOT:19,EEXIST:20,EFAULT:21,EFBIG:22,EHOSTDOWN:142,EHOSTUNREACH:23,EIDRM:24,EILSEQ:25,EINPROGRESS:26,EINTR:27,EINVAL:28,EIO:29,EISCONN:30,EISDIR:31,EL2HLT:112,EL2NSYNC:156,EL3HLT:107,EL3RST:108,ELIBACC:129,ELIBBAD:130,ELIBEXEC:133,ELIBMAX:132,ELIBSCN:131,ELNRNG:109,ELOOP:32,EMFILE:33,EMLINK:34,EMSGSIZE:35,EMULTIHOP:36,ENAMETOOLONG:37,ENETDOWN:38,ENETRESET:39,ENETUNREACH:40,ENFILE:41,ENOANO:104,ENOBUFS:42,ENOCSI:111,ENODATA:116,ENODEV:43,ENOENT:44,ENOEXEC:45,ENOLCK:46,ENOLINK:47,ENOMEDIUM:148,ENOMEM:48,ENOMSG:49,ENONET:119,ENOPKG:120,ENOPROTOOPT:50,ENOSPC:51,ENOSR:118,ENOSTR:100,ENOSYS:52,ENOTBLK:105,ENOTCONN:53,ENOTDIR:54,ENOTEMPTY:55,ENOTRECOVERABLE:56,ENOTSOCK:57,ENOTSUP:138,ENOTTY:59,ENOTUNIQ:126,ENXIO:60,EOPNOTSUPP:138,EOVERFLOW:61,EOWNERDEAD:62,EPERM:63,EPFNOSUPPORT:139,EPIPE:64,EPROTO:65,EPROTONOSUPPORT:66,EPROTOTYPE:67,ERANGE:68,EREMCHG:128,EREMOTE:121,EROFS:69,ESHUTDOWN:140,ESOCKTNOSUPPORT:137,ESPIPE:70,ESRCH:71,ESRMNT:123,ESTALE:72,ESTRPIPE:135,ETIME:117,ETIMEDOUT:73,ETOOMANYREFS:141,ETXTBSY:74,EUNATCH:110,EUSERS:136,EWOULDBLOCK:6,EXDEV:75,EXFULL:115};n(new class{constructor(){this._options=null,this._initializer=null,this._localPath="",this._driveName="",this._driveFS=null,this._initialized=new Promise(((t,e)=>{this._initializer={resolve:t,reject:e}}))}async initialize(t){var e;if(this._options=t,t.location.includes(":")){const e=t.location.split(":");this._driveName=e[0],this._localPath=e[1]}else this._driveName="",this._localPath=t.location;await this.initRuntime(t),await this.initFilesystem(t),await this.initPackageManager(t),await this.initKernel(t),await this.initGlobals(t),null===(e=this._initializer)||void 0===e||e.resolve()}async initRuntime(t){const{pyodideUrl:e,indexUrl:s}=t;if(e.endsWith(".mjs")){const t=await import(e);this._pyodide=await t.loadPyodide({indexURL:s})}else importScripts(e),this._pyodide=await self.loadPyodide({indexURL:s})}async initPackageManager(t){if(!this._options)throw new Error("Uninitialized");const{pipliteWheelUrl:e,disablePyPIFallback:s,pipliteUrls:r}=this._options;await this._pyodide.loadPackage(["micropip"]),await this._pyodide.runPythonAsync(`\n      import micropip\n      await micropip.install('${e}', keep_going=True)\n      import piplite.piplite\n      piplite.piplite._PIPLITE_DISABLE_PYPI = ${s?"True":"False"}\n      piplite.piplite._PIPLITE_URLS = ${JSON.stringify(r)}\n    `)}async initKernel(t){await this._pyodide.runPythonAsync("\n      await piplite.install(['matplotlib', 'ipykernel'], keep_going=True);\n      await piplite.install(['pyolite'], keep_going=True);\n      await piplite.install(['ipython'], keep_going=True);\n      import pyolite\n    "),t.mountDrive&&this._localPath&&await this._pyodide.runPythonAsync(`\n        import os;\n        os.chdir("${this._localPath}");\n      `)}async initGlobals(t){const{globals:e}=this._pyodide;this._kernel=e.get("pyolite").kernel_instance.copy(),this._stdout_stream=e.get("pyolite").stdout_stream.copy(),this._stderr_stream=e.get("pyolite").stderr_stream.copy(),this._interpreter=this._kernel.interpreter.copy(),this._interpreter.send_comm=this.sendComm.bind(this)}async initFilesystem(t){if(t.mountDrive){const e="/drive",{FS:s}=this._pyodide,{baseUrl:r}=t,i=new N({FS:s,PATH:this._pyodide._module.PATH,ERRNO_CODES:y,baseUrl:r,driveName:this._driveName,mountpoint:e});s.mkdir(e),s.mount(i,{},e),s.chdir(e),this._driveFS=i}}mapToObject(t){const e=t instanceof Array?[]:{};return t.forEach(((t,s)=>{e[s]=t instanceof Map||t instanceof Array?this.mapToObject(t):t})),e}formatResult(t){if(!this._pyodide.isPyProxy(t))return t;const e=t.toJs();return this.mapToObject(e)}async setup(t){await this._initialized,this._kernel._parent_header=this._pyodide.toPy(t)}async execute(t,e){await this.setup(e);const s=(t,e)=>{const s={name:this.formatResult(t),text:this.formatResult(e)};postMessage({parentHeader:this.formatResult(this._kernel._parent_header).header,bundle:s,type:"stream"})};this._stdout_stream.publish_stream_callback=s,this._stderr_stream.publish_stream_callback=s,this._interpreter.display_pub.clear_output_callback=t=>{const e={wait:this.formatResult(t)};postMessage({parentHeader:this.formatResult(this._kernel._parent_header).header,bundle:e,type:"clear_output"})},this._interpreter.display_pub.display_data_callback=(t,e,s)=>{const r={data:this.formatResult(t),metadata:this.formatResult(e),transient:this.formatResult(s)};postMessage({parentHeader:this.formatResult(this._kernel._parent_header).header,bundle:r,type:"display_data"})},this._interpreter.display_pub.update_display_data_callback=(t,e,s)=>{const r={data:this.formatResult(t),metadata:this.formatResult(e),transient:this.formatResult(s)};postMessage({parentHeader:this.formatResult(this._kernel._parent_header).header,bundle:r,type:"update_display_data"})},this._interpreter.displayhook.publish_execution_result=(t,e,s)=>{const r={execution_count:t,data:this.formatResult(e),metadata:this.formatResult(s)};postMessage({parentHeader:this.formatResult(this._kernel._parent_header).header,bundle:r,type:"execute_result"})},this._interpreter.input=this.input,this._interpreter.getpass=this.getpass;const r=await this._kernel.run(t.code),i=this.formatResult(r);return"error"===i.status&&((t,e,s)=>{const r={ename:t,evalue:e,traceback:s};postMessage({parentHeader:this.formatResult(this._kernel._parent_header).header,bundle:r,type:"execute_error"})})(i.ename,i.evalue,i.traceback),i}async complete(t,e){await this.setup(e);const s=this._kernel.complete(t.code,t.cursor_pos);return this.formatResult(s)}async inspect(t,e){await this.setup(e);const s=this._kernel.inspect(t.code,t.cursor_pos,t.detail_level);return this.formatResult(s)}async isComplete(t,e){await this.setup(e);const s=this._kernel.is_complete(t.code);return this.formatResult(s)}async commInfo(t,e){await this.setup(e);const s=this._kernel.comm_info(t.target_name);return{comms:this.formatResult(s),status:"ok"}}async commOpen(t,e){await this.setup(e);const s=this._kernel.comm_manager.comm_open(this._pyodide.toPy(t));return this.formatResult(s)}async commMsg(t,e){await this.setup(e);const s=this._kernel.comm_manager.comm_msg(this._pyodide.toPy(t));return this.formatResult(s)}async commClose(t,e){await this.setup(e);const s=this._kernel.comm_manager.comm_close(this._pyodide.toPy(t));return this.formatResult(s)}async inputReply(t,e){await this.setup(e),this._resolveInputReply(t)}async sendInputRequest(t,e){const s={prompt:t,password:e};postMessage({type:"input_request",parentHeader:this.formatResult(this._kernel._parent_header).header,content:s})}async getpass(t){t=void 0===t?"":t,await this.sendInputRequest(t,!0);const e=new Promise((t=>{this._resolveInputReply=t}));return(await e).value}async input(t){t=void 0===t?"":t,await this.sendInputRequest(t,!1);const e=new Promise((t=>{this._resolveInputReply=t}));return(await e).value}async sendComm(t,e,s,r,i){postMessage({type:t,content:this.formatResult(e),metadata:this.formatResult(s),ident:this.formatResult(r),buffers:this.formatResult(i),parentHeader:this.formatResult(this._kernel._parent_header).header})}})}},e={};function s(r){var i=e[r];if(void 0!==i)return i.exports;var a=e[r]={exports:{}};return t[r](a,a.exports,s),a.exports}s.m=t,s.c=e,s.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{s.S={};var t={},e={};s.I=(r,i)=>{i||(i=[]);var a=e[r];if(a||(a=e[r]={}),!(i.indexOf(a)>=0)){if(i.push(a),t[r])return t[r];s.o(s.S,r)||(s.S[r]={}),s.S[r];var n=[];return t[r]=n.length?Promise.all(n).then((()=>t[r]=1)):1}}})();var r=s(80835);(_JUPYTERLAB=void 0===_JUPYTERLAB?{}:_JUPYTERLAB).CORE_OUTPUT=r})();
//# sourceMappingURL=835.e19fb74.js.map