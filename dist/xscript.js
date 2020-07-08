// clone dom object cache
let cobj = {
  txt: document.createTextNode('')
},
//pre-clone elements
cpre = ['div'];

for(let e=0;e<cpre.length;e++)cobj[e]=document.createElement(cpre[e]);const xu={ctxt(e){let t=cobj.txt.cloneNode(!1);return t.textContent=e,t},isnd:function(e){return e&&e.nodeName&&e.nodeType}};function xfn(e,t){let n=typeof t;if("string"==n)e?e.appendChild(xu.ctxt(t)):(cobj[t]||(cobj[t]=document.createElement(t)),e=cobj[t].cloneNode(!1));else if(xu.isnd(t))e.appendChild(t);else if("object"==n){let o,c=Object.keys(t);for(n=0;n<c.length;n++)"function"==typeof t[o=c[n]]?e[o]=t[o]:e.setAttribute(c[n],t[o])}else"function"==n?(n=t(),e.appendChild(xu.isnd(n)?n:xu.ctxt(n))):"number"!=n&&"boolean"!=n||e.appendChild(xu.ctxt(t.toString()));return e}function x(){let e=[...arguments],t=null;for(;e.length;)t=xfn(t,e.shift());return t};
