// clone dom object cache
let cobj = {
  txt: document.createTextNode('')
},
//pre-clone elements
cpre = ['div'];

for(let i = 0; i < cpre.length; i++){cobj[i] = document.createElement(cpre[i]);}const xu = {ctxt(i){let t = cobj.txt.cloneNode(false);t.textContent = i;return t;},isnd: function(i) {return i && i.nodeName && i.nodeType}}function xfn(e, i) {let t = typeof i;if (t == 'string') {if(!e){if(!cobj[i]){cobj[i] = document.createElement(i);}e = cobj[i].cloneNode(false);} else {e.appendChild(xu.ctxt(i))}} else if(xu.isnd(i)) {e.appendChild(i)} else if(t == 'object') {let k = Object.keys(i), f;for (t = 0; t < k.length; t++){f = k[t];if(typeof i[f] == 'function') {e[f] = i[f];} else {e.setAttribute(k[t], i[f])}}}else if(t == 'function') {t = i();e.appendChild(xu.isnd(t) ? t : xu.ctxt(t));}else if(t == 'number' || t == 'boolean') {e.appendChild(xu.ctxt(i.toString()))}return e;}function x(){let arr = [...arguments],i = null;while(arr.length){i = xfn(i, arr.shift());}return i;}
