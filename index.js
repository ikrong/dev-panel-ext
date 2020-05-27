var DevPanel = (function () {
	'use strict';

	var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	function createCommonjsModule(fn, module) {
		return module = { exports: {} }, fn(module, module.exports), module.exports;
	}

	function commonjsRequire () {
		throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
	}

	/*! *****************************************************************************
	Copyright (c) Microsoft Corporation. All rights reserved.
	Licensed under the Apache License, Version 2.0 (the "License"); you may not use
	this file except in compliance with the License. You may obtain a copy of the
	License at http://www.apache.org/licenses/LICENSE-2.0

	THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
	KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
	WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
	MERCHANTABLITY OR NON-INFRINGEMENT.

	See the Apache Version 2.0 License for specific language governing permissions
	and limitations under the License.
	***************************************************************************** */function e(e,n,t,o){var r,i=arguments.length,a=i<3?n:null===o?o=Object.getOwnPropertyDescriptor(n,t):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,n,t,o);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(a=(i<3?r(a):i>3?r(n,t,a):r(n,t))||a);return i>3&&a&&Object.defineProperty(n,t,a),a}function n(e,n){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,n)}function t(e,n,t,o){return new(t||(t=Promise))((function(r,i){function a(e){try{s(o.next(e));}catch(e){i(e);}}function l(e){try{s(o.throw(e));}catch(e){i(e);}}function s(e){var n;e.done?r(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n);}))).then(a,l);}s((o=o.apply(e,n||[])).next());}))}
	/**
	 * @license
	 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
	 * This code may only be used under the BSD style license found at
	 * http://polymer.github.io/LICENSE.txt
	 * The complete set of authors may be found at
	 * http://polymer.github.io/AUTHORS.txt
	 * The complete set of contributors may be found at
	 * http://polymer.github.io/CONTRIBUTORS.txt
	 * Code distributed by Google as part of the polymer project is also
	 * subject to an additional IP rights grant found at
	 * http://polymer.github.io/PATENTS.txt
	 */
	const o="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,r=(e,n,t=null)=>{for(;n!==t;){const t=n.nextSibling;e.removeChild(n),n=t;}},i=`{{lit-${String(Math.random()).slice(2)}}}`,a=`\x3c!--${i}--\x3e`,l=new RegExp(`${i}|${a}`);class s{constructor(e,n){this.parts=[],this.element=n;const t=[],o=[],r=document.createTreeWalker(n.content,133,null,!1);let a=0,s=-1,d=0;const{strings:p,values:{length:g}}=e;for(;d<g;){const e=r.nextNode();if(null!==e){if(s++,1===e.nodeType){if(e.hasAttributes()){const n=e.attributes,{length:t}=n;let o=0;for(let e=0;e<t;e++)c(n[e].name,"$lit$")&&o++;for(;o-- >0;){const n=p[d],t=h.exec(n)[2],o=t.toLowerCase()+"$lit$",r=e.getAttribute(o);e.removeAttribute(o);const i=r.split(l);this.parts.push({type:"attribute",index:s,name:t,strings:i}),d+=i.length-1;}}"TEMPLATE"===e.tagName&&(o.push(e),r.currentNode=e.content);}else if(3===e.nodeType){const n=e.data;if(n.indexOf(i)>=0){const o=e.parentNode,r=n.split(l),i=r.length-1;for(let n=0;n<i;n++){let t,i=r[n];if(""===i)t=u();else {const e=h.exec(i);null!==e&&c(e[2],"$lit$")&&(i=i.slice(0,e.index)+e[1]+e[2].slice(0,-"$lit$".length)+e[3]),t=document.createTextNode(i);}o.insertBefore(t,e),this.parts.push({type:"node",index:++s});}""===r[i]?(o.insertBefore(u(),e),t.push(e)):e.data=r[i],d+=i;}}else if(8===e.nodeType)if(e.data===i){const n=e.parentNode;null!==e.previousSibling&&s!==a||(s++,n.insertBefore(u(),e)),a=s,this.parts.push({type:"node",index:s}),null===e.nextSibling?e.data="":(t.push(e),s--),d++;}else {let n=-1;for(;-1!==(n=e.data.indexOf(i,n+1));)this.parts.push({type:"node",index:-1}),d++;}}else r.currentNode=o.pop();}for(const e of t)e.parentNode.removeChild(e);}}const c=(e,n)=>{const t=e.length-n.length;return t>=0&&e.slice(t)===n},d=e=>-1!==e.index,u=()=>document.createComment(""),h=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function p(e,n){const{element:{content:t},parts:o}=e,r=document.createTreeWalker(t,133,null,!1);let i=f(o),a=o[i],l=-1,s=0;const c=[];let d=null;for(;r.nextNode();){l++;const e=r.currentNode;for(e.previousSibling===d&&(d=null),n.has(e)&&(c.push(e),null===d&&(d=e)),null!==d&&s++;void 0!==a&&a.index===l;)a.index=null!==d?-1:a.index-s,i=f(o,i),a=o[i];}c.forEach(e=>e.parentNode.removeChild(e));}const g=e=>{let n=11===e.nodeType?0:1;const t=document.createTreeWalker(e,133,null,!1);for(;t.nextNode();)n++;return n},f=(e,n=-1)=>{for(let t=n+1;t<e.length;t++){const n=e[t];if(d(n))return t}return -1};
	/**
	 * @license
	 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
	 * This code may only be used under the BSD style license found at
	 * http://polymer.github.io/LICENSE.txt
	 * The complete set of authors may be found at
	 * http://polymer.github.io/AUTHORS.txt
	 * The complete set of contributors may be found at
	 * http://polymer.github.io/CONTRIBUTORS.txt
	 * Code distributed by Google as part of the polymer project is also
	 * subject to an additional IP rights grant found at
	 * http://polymer.github.io/PATENTS.txt
	 */
	const m=new WeakMap,b=e=>(...n)=>{const t=e(...n);return m.set(t,!0),t},v=e=>"function"==typeof e&&m.has(e),w={},k={};
	/**
	 * @license
	 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
	 * This code may only be used under the BSD style license found at
	 * http://polymer.github.io/LICENSE.txt
	 * The complete set of authors may be found at
	 * http://polymer.github.io/AUTHORS.txt
	 * The complete set of contributors may be found at
	 * http://polymer.github.io/CONTRIBUTORS.txt
	 * Code distributed by Google as part of the polymer project is also
	 * subject to an additional IP rights grant found at
	 * http://polymer.github.io/PATENTS.txt
	 */
	class y{constructor(e,n,t){this.__parts=[],this.template=e,this.processor=n,this.options=t;}update(e){let n=0;for(const t of this.__parts)void 0!==t&&t.setValue(e[n]),n++;for(const e of this.__parts)void 0!==e&&e.commit();}_clone(){const e=o?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),n=[],t=this.template.parts,r=document.createTreeWalker(e,133,null,!1);let i,a=0,l=0,s=r.nextNode();for(;a<t.length;)if(i=t[a],d(i)){for(;l<i.index;)l++,"TEMPLATE"===s.nodeName&&(n.push(s),r.currentNode=s.content),null===(s=r.nextNode())&&(r.currentNode=n.pop(),s=r.nextNode());if("node"===i.type){const e=this.processor.handleTextExpression(this.options);e.insertAfterNode(s.previousSibling),this.__parts.push(e);}else this.__parts.push(...this.processor.handleAttributeExpressions(s,i.name,i.strings,this.options));a++;}else this.__parts.push(void 0),a++;return o&&(document.adoptNode(e),customElements.upgrade(e)),e}}
	/**
	 * @license
	 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
	 * This code may only be used under the BSD style license found at
	 * http://polymer.github.io/LICENSE.txt
	 * The complete set of authors may be found at
	 * http://polymer.github.io/AUTHORS.txt
	 * The complete set of contributors may be found at
	 * http://polymer.github.io/CONTRIBUTORS.txt
	 * Code distributed by Google as part of the polymer project is also
	 * subject to an additional IP rights grant found at
	 * http://polymer.github.io/PATENTS.txt
	 */const x=` ${i} `;class C{constructor(e,n,t,o){this.strings=e,this.values=n,this.type=t,this.processor=o;}getHTML(){const e=this.strings.length-1;let n="",t=!1;for(let o=0;o<e;o++){const e=this.strings[o],r=e.lastIndexOf("\x3c!--");t=(r>-1||t)&&-1===e.indexOf("--\x3e",r+1);const l=h.exec(e);n+=null===l?e+(t?x:a):e.substr(0,l.index)+l[1]+l[2]+"$lit$"+l[3]+i;}return n+=this.strings[e],n}getTemplateElement(){const e=document.createElement("template");return e.innerHTML=this.getHTML(),e}}
	/**
	 * @license
	 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
	 * This code may only be used under the BSD style license found at
	 * http://polymer.github.io/LICENSE.txt
	 * The complete set of authors may be found at
	 * http://polymer.github.io/AUTHORS.txt
	 * The complete set of contributors may be found at
	 * http://polymer.github.io/CONTRIBUTORS.txt
	 * Code distributed by Google as part of the polymer project is also
	 * subject to an additional IP rights grant found at
	 * http://polymer.github.io/PATENTS.txt
	 */const z=e=>null===e||!("object"==typeof e||"function"==typeof e),S=e=>Array.isArray(e)||!(!e||!e[Symbol.iterator]);class _{constructor(e,n,t){this.dirty=!0,this.element=e,this.name=n,this.strings=t,this.parts=[];for(let e=0;e<t.length-1;e++)this.parts[e]=this._createPart();}_createPart(){return new $(this)}_getValue(){const e=this.strings,n=e.length-1;let t="";for(let o=0;o<n;o++){t+=e[o];const n=this.parts[o];if(void 0!==n){const e=n.value;if(z(e)||!S(e))t+="string"==typeof e?e:String(e);else for(const n of e)t+="string"==typeof n?n:String(n);}}return t+=e[n],t}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()));}}class ${constructor(e){this.value=void 0,this.committer=e;}setValue(e){e===w||z(e)&&e===this.value||(this.value=e,v(e)||(this.committer.dirty=!0));}commit(){for(;v(this.value);){const e=this.value;this.value=w,e(this);}this.value!==w&&this.committer.commit();}}class L{constructor(e){this.value=void 0,this.__pendingValue=void 0,this.options=e;}appendInto(e){this.startNode=e.appendChild(u()),this.endNode=e.appendChild(u());}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling;}appendIntoPart(e){e.__insert(this.startNode=u()),e.__insert(this.endNode=u());}insertAfterPart(e){e.__insert(this.startNode=u()),this.endNode=e.endNode,e.endNode=this.startNode;}setValue(e){this.__pendingValue=e;}commit(){if(null===this.startNode.parentNode)return;for(;v(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=w,e(this);}const e=this.__pendingValue;e!==w&&(z(e)?e!==this.value&&this.__commitText(e):e instanceof C?this.__commitTemplateResult(e):e instanceof Node?this.__commitNode(e):S(e)?this.__commitIterable(e):e===k?(this.value=k,this.clear()):this.__commitText(e));}__insert(e){this.endNode.parentNode.insertBefore(e,this.endNode);}__commitNode(e){this.value!==e&&(this.clear(),this.__insert(e),this.value=e);}__commitText(e){const n=this.startNode.nextSibling,t="string"==typeof(e=null==e?"":e)?e:String(e);n===this.endNode.previousSibling&&3===n.nodeType?n.data=t:this.__commitNode(document.createTextNode(t)),this.value=e;}__commitTemplateResult(e){const n=this.options.templateFactory(e);if(this.value instanceof y&&this.value.template===n)this.value.update(e.values);else {const t=new y(n,e.processor,this.options),o=t._clone();t.update(e.values),this.__commitNode(o),this.value=t;}}__commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());const n=this.value;let t,o=0;for(const r of e)t=n[o],void 0===t&&(t=new L(this.options),n.push(t),0===o?t.appendIntoPart(this):t.insertAfterPart(n[o-1])),t.setValue(r),t.commit(),o++;o<n.length&&(n.length=o,this.clear(t&&t.endNode));}clear(e=this.startNode){r(this.startNode.parentNode,e.nextSibling,this.endNode);}}class M{constructor(e,n,t){if(this.value=void 0,this.__pendingValue=void 0,2!==t.length||""!==t[0]||""!==t[1])throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=n,this.strings=t;}setValue(e){this.__pendingValue=e;}commit(){for(;v(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=w,e(this);}if(this.__pendingValue===w)return;const e=!!this.__pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=e),this.__pendingValue=w;}}class A extends _{constructor(e,n,t){super(e,n,t),this.single=2===t.length&&""===t[0]&&""===t[1];}_createPart(){return new q(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue());}}class q extends ${}let B=!1;(()=>{try{const e={get capture(){return B=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e);}catch(e){}})();class E{constructor(e,n,t){this.value=void 0,this.__pendingValue=void 0,this.element=e,this.eventName=n,this.eventContext=t,this.__boundHandleEvent=e=>this.handleEvent(e);}setValue(e){this.__pendingValue=e;}commit(){for(;v(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=w,e(this);}if(this.__pendingValue===w)return;const e=this.__pendingValue,n=this.value,t=null==e||null!=n&&(e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive),o=null!=e&&(null==n||t);t&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),o&&(this.__options=T(e),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=e,this.__pendingValue=w;}handleEvent(e){"function"==typeof this.value?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e);}}const T=e=>e&&(B?{capture:e.capture,passive:e.passive,once:e.once}:e.capture)
	/**
	 * @license
	 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
	 * This code may only be used under the BSD style license found at
	 * http://polymer.github.io/LICENSE.txt
	 * The complete set of authors may be found at
	 * http://polymer.github.io/AUTHORS.txt
	 * The complete set of contributors may be found at
	 * http://polymer.github.io/CONTRIBUTORS.txt
	 * Code distributed by Google as part of the polymer project is also
	 * subject to an additional IP rights grant found at
	 * http://polymer.github.io/PATENTS.txt
	 */;function P(e){let n=O.get(e.type);void 0===n&&(n={stringsArray:new WeakMap,keyString:new Map},O.set(e.type,n));let t=n.stringsArray.get(e.strings);if(void 0!==t)return t;const o=e.strings.join(i);return t=n.keyString.get(o),void 0===t&&(t=new s(e,e.getTemplateElement()),n.keyString.set(o,t)),n.stringsArray.set(e.strings,t),t}const O=new Map,V=new WeakMap;
	/**
	 * @license
	 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
	 * This code may only be used under the BSD style license found at
	 * http://polymer.github.io/LICENSE.txt
	 * The complete set of authors may be found at
	 * http://polymer.github.io/AUTHORS.txt
	 * The complete set of contributors may be found at
	 * http://polymer.github.io/CONTRIBUTORS.txt
	 * Code distributed by Google as part of the polymer project is also
	 * subject to an additional IP rights grant found at
	 * http://polymer.github.io/PATENTS.txt
	 */const U=new
	/**
	 * @license
	 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
	 * This code may only be used under the BSD style license found at
	 * http://polymer.github.io/LICENSE.txt
	 * The complete set of authors may be found at
	 * http://polymer.github.io/AUTHORS.txt
	 * The complete set of contributors may be found at
	 * http://polymer.github.io/CONTRIBUTORS.txt
	 * Code distributed by Google as part of the polymer project is also
	 * subject to an additional IP rights grant found at
	 * http://polymer.github.io/PATENTS.txt
	 */
	class{handleAttributeExpressions(e,n,t,o){const r=n[0];if("."===r){return new A(e,n.slice(1),t).parts}return "@"===r?[new E(e,n.slice(1),o.eventContext)]:"?"===r?[new M(e,n.slice(1),t)]:new _(e,n,t).parts}handleTextExpression(e){return new L(e)}};
	/**
	 * @license
	 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
	 * This code may only be used under the BSD style license found at
	 * http://polymer.github.io/LICENSE.txt
	 * The complete set of authors may be found at
	 * http://polymer.github.io/AUTHORS.txt
	 * The complete set of contributors may be found at
	 * http://polymer.github.io/CONTRIBUTORS.txt
	 * Code distributed by Google as part of the polymer project is also
	 * subject to an additional IP rights grant found at
	 * http://polymer.github.io/PATENTS.txt
	 */"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.2.1");const N=(e,...n)=>new C(e,n,"html",U)
	/**
	 * @license
	 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
	 * This code may only be used under the BSD style license found at
	 * http://polymer.github.io/LICENSE.txt
	 * The complete set of authors may be found at
	 * http://polymer.github.io/AUTHORS.txt
	 * The complete set of contributors may be found at
	 * http://polymer.github.io/CONTRIBUTORS.txt
	 * Code distributed by Google as part of the polymer project is also
	 * subject to an additional IP rights grant found at
	 * http://polymer.github.io/PATENTS.txt
	 */,H=(e,n)=>`${e}--${n}`;let F=!0;void 0===window.ShadyCSS?F=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),F=!1);const j=e=>n=>{const t=H(n.type,e);let o=O.get(t);void 0===o&&(o={stringsArray:new WeakMap,keyString:new Map},O.set(t,o));let r=o.stringsArray.get(n.strings);if(void 0!==r)return r;const a=n.strings.join(i);if(r=o.keyString.get(a),void 0===r){const t=n.getTemplateElement();F&&window.ShadyCSS.prepareTemplateDom(t,e),r=new s(n,t),o.keyString.set(a,r);}return o.stringsArray.set(n.strings,r),r},R=["html","svg"],I=new Set,Z=(e,n,t)=>{I.add(e);const o=t?t.element:document.createElement("template"),r=n.querySelectorAll("style"),{length:i}=r;if(0===i)return void window.ShadyCSS.prepareTemplateStyles(o,e);const a=document.createElement("style");for(let e=0;e<i;e++){const n=r[e];n.parentNode.removeChild(n),a.textContent+=n.textContent;}(e=>{R.forEach(n=>{const t=O.get(H(n,e));void 0!==t&&t.keyString.forEach(e=>{const{element:{content:n}}=e,t=new Set;Array.from(n.querySelectorAll("style")).forEach(e=>{t.add(e);}),p(e,t);});});})(e);const l=o.content;t?function(e,n,t=null){const{element:{content:o},parts:r}=e;if(null==t)return void o.appendChild(n);const i=document.createTreeWalker(o,133,null,!1);let a=f(r),l=0,s=-1;for(;i.nextNode();){for(s++,i.currentNode===t&&(l=g(n),t.parentNode.insertBefore(n,t));-1!==a&&r[a].index===s;){if(l>0){for(;-1!==a;)r[a].index+=l,a=f(r,a);return}a=f(r,a);}}}(t,a,l.firstChild):l.insertBefore(a,l.firstChild),window.ShadyCSS.prepareTemplateStyles(o,e);const s=l.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==s)n.insertBefore(s.cloneNode(!0),n.firstChild);else if(t){l.insertBefore(a,l.firstChild);const e=new Set;e.add(a),p(t,e);}};window.JSCompiler_renameProperty=(e,n)=>e;const D={toAttribute(e,n){switch(n){case Boolean:return e?"":null;case Object:case Array:return null==e?e:JSON.stringify(e)}return e},fromAttribute(e,n){switch(n){case Boolean:return null!==e;case Number:return null===e?null:Number(e);case Object:case Array:return JSON.parse(e)}return e}},W=(e,n)=>n!==e&&(n==n||e==e),G={attribute:!0,type:String,converter:D,reflect:!1,hasChanged:W};class J extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=new Promise(e=>this._enableUpdatingResolver=e),this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize();}static get observedAttributes(){this.finalize();const e=[];return this._classProperties.forEach((n,t)=>{const o=this._attributeNameForProperty(t,n);void 0!==o&&(this._attributeToPropertyMap.set(o,t),e.push(o));}),e}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const e=Object.getPrototypeOf(this)._classProperties;void 0!==e&&e.forEach((e,n)=>this._classProperties.set(n,e));}}static createProperty(e,n=G){if(this._ensureClassProperties(),this._classProperties.set(e,n),n.noAccessor||this.prototype.hasOwnProperty(e))return;const t="symbol"==typeof e?Symbol():"__"+e,o=this.getPropertyDescriptor(e,t,n);void 0!==o&&Object.defineProperty(this.prototype,e,o);}static getPropertyDescriptor(e,n,t){return {get(){return this[n]},set(t){const o=this[e];this[n]=t,this._requestUpdate(e,o);},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this._classProperties&&this._classProperties.get(e)||G}static finalize(){const e=Object.getPrototypeOf(this);if(e.hasOwnProperty("finalized")||e.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const e=this.properties,n=[...Object.getOwnPropertyNames(e),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e):[]];for(const t of n)this.createProperty(t,e[t]);}}static _attributeNameForProperty(e,n){const t=n.attribute;return !1===t?void 0:"string"==typeof t?t:"string"==typeof e?e.toLowerCase():void 0}static _valueHasChanged(e,n,t=W){return t(e,n)}static _propertyValueFromAttribute(e,n){const t=n.type,o=n.converter||D,r="function"==typeof o?o:o.fromAttribute;return r?r(e,t):e}static _propertyValueToAttribute(e,n){if(void 0===n.reflect)return;const t=n.type,o=n.converter;return (o&&o.toAttribute||D.toAttribute)(e,t)}initialize(){this._saveInstanceProperties(),this._requestUpdate();}_saveInstanceProperties(){this.constructor._classProperties.forEach((e,n)=>{if(this.hasOwnProperty(n)){const e=this[n];delete this[n],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(n,e);}});}_applyInstanceProperties(){this._instanceProperties.forEach((e,n)=>this[n]=e),this._instanceProperties=void 0;}connectedCallback(){this.enableUpdating();}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0);}disconnectedCallback(){}attributeChangedCallback(e,n,t){n!==t&&this._attributeToProperty(e,t);}_propertyToAttribute(e,n,t=G){const o=this.constructor,r=o._attributeNameForProperty(e,t);if(void 0!==r){const e=o._propertyValueToAttribute(n,t);if(void 0===e)return;this._updateState=8|this._updateState,null==e?this.removeAttribute(r):this.setAttribute(r,e),this._updateState=-9&this._updateState;}}_attributeToProperty(e,n){if(8&this._updateState)return;const t=this.constructor,o=t._attributeToPropertyMap.get(e);if(void 0!==o){const e=t.getPropertyOptions(o);this._updateState=16|this._updateState,this[o]=t._propertyValueFromAttribute(n,e),this._updateState=-17&this._updateState;}}_requestUpdate(e,n){let t=!0;if(void 0!==e){const o=this.constructor,r=o.getPropertyOptions(e);o._valueHasChanged(this[e],n,r.hasChanged)?(this._changedProperties.has(e)||this._changedProperties.set(e,n),!0!==r.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(e,r))):t=!1;}!this._hasRequestedUpdate&&t&&(this._updatePromise=this._enqueueUpdate());}requestUpdate(e,n){return this._requestUpdate(e,n),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise;}catch(e){}const e=this.performUpdate();return null!=e&&await e,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){this._instanceProperties&&this._applyInstanceProperties();let e=!1;const n=this._changedProperties;try{e=this.shouldUpdate(n),e?this.update(n):this._markUpdated();}catch(n){throw e=!1,this._markUpdated(),n}e&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(n)),this.updated(n));}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState;}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(e){return !0}update(e){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((e,n)=>this._propertyToAttribute(n,this[n],e)),this._reflectingProperties=void 0),this._markUpdated();}updated(e){}firstUpdated(e){}}J.finalized=!0;
	/**
	 * @license
	 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
	 * This code may only be used under the BSD style license found at
	 * http://polymer.github.io/LICENSE.txt
	 * The complete set of authors may be found at
	 * http://polymer.github.io/AUTHORS.txt
	 * The complete set of contributors may be found at
	 * http://polymer.github.io/CONTRIBUTORS.txt
	 * Code distributed by Google as part of the polymer project is also
	 * subject to an additional IP rights grant found at
	 * http://polymer.github.io/PATENTS.txt
	 */
	const Y=e=>n=>"function"==typeof n?((e,n)=>(window.customElements.define(e,n),n))(e,n):((e,n)=>{const{kind:t,elements:o}=n;return {kind:t,elements:o,finisher(n){window.customElements.define(e,n);}}})(e,n),X=(e,n)=>"method"===n.kind&&n.descriptor&&!("value"in n.descriptor)?Object.assign(Object.assign({},n),{finisher(t){t.createProperty(n.key,e);}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){"function"==typeof n.initializer&&(this[n.key]=n.initializer.call(this));},finisher(t){t.createProperty(n.key,e);}};function K(e){return (n,t)=>void 0!==t?((e,n,t)=>{n.constructor.createProperty(t,e);})(e,n,t):X(e,n)}function Q(e){return (n,t)=>{const o={get(){return this.renderRoot.querySelector(e)},enumerable:!0,configurable:!0};return void 0!==t?ee(o,n,t):ne(o,n)}}const ee=(e,n,t)=>{Object.defineProperty(n,t,e);},ne=(e,n)=>({kind:"method",placement:"prototype",key:n.key,descriptor:e})
	/**
	@license
	Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
	This code may only be used under the BSD style license found at
	http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
	http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
	found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
	part of the polymer project is also subject to an additional IP rights grant
	found at http://polymer.github.io/PATENTS.txt
	*/,te="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,oe=Symbol();class re{constructor(e,n){if(n!==oe)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e;}get styleSheet(){return void 0===this._styleSheet&&(te?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const ie=e=>new re(String(e),oe),ae=(e,...n)=>{const t=n.reduce((n,t,o)=>n+(e=>{if(e instanceof re)return e.cssText;if("number"==typeof e)return e;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${e}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(t)+e[o+1],e[0]);return new re(t,oe)};
	/**
	 * @license
	 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
	 * This code may only be used under the BSD style license found at
	 * http://polymer.github.io/LICENSE.txt
	 * The complete set of authors may be found at
	 * http://polymer.github.io/AUTHORS.txt
	 * The complete set of contributors may be found at
	 * http://polymer.github.io/CONTRIBUTORS.txt
	 * Code distributed by Google as part of the polymer project is also
	 * subject to an additional IP rights grant found at
	 * http://polymer.github.io/PATENTS.txt
	 */
	(window.litElementVersions||(window.litElementVersions=[])).push("2.3.1");const le={};class se extends J{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const e=this.getStyles();if(void 0===e)this._styles=[];else if(Array.isArray(e)){const n=(e,t)=>e.reduceRight((e,t)=>Array.isArray(t)?n(t,e):(e.add(t),e),t),t=n(e,new Set),o=[];t.forEach(e=>o.unshift(e)),this._styles=o;}else this._styles=[e];}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles();}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const e=this.constructor._styles;0!==e.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?te?this.renderRoot.adoptedStyleSheets=e.map(e=>e.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map(e=>e.cssText),this.localName));}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this);}update(e){const n=this.render();super.update(e),n!==le&&this.constructor.render(n,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(e=>{const n=document.createElement("style");n.textContent=e.cssText,this.renderRoot.appendChild(n);}));}render(){return le}}function ce(e){return String(e).match(/^(-?\d+)(\.\d+)?$/)?e+"px":e}function de(e={}){return Object.keys(e).reduce((n,t)=>(void 0!==e[t]&&(n[t]=e[t]),n),{})}function ue(e,n){let o=null,r=null;return (...n)=>{clearTimeout(null),o?r=n:function n(...i){return o=new Promise(a=>t(this,void 0,void 0,(function*(){try{yield e(...i);}catch(e){}o=null,r&&(n(...r),r=null);})))}(n);}}se.finalized=!0,se.render=(e,n,t)=>{if(!t||"object"!=typeof t||!t.scopeName)throw new Error("The `scopeName` option is required.");const o=t.scopeName,i=V.has(n),a=F&&11===n.nodeType&&!!n.host,l=a&&!I.has(o),s=l?document.createDocumentFragment():n;if(((e,n,t)=>{let o=V.get(n);void 0===o&&(r(n,n.firstChild),V.set(n,o=new L(Object.assign({templateFactory:P},t))),o.appendInto(n)),o.setValue(e),o.commit();})(e,s,Object.assign({templateFactory:j(o)},t)),l){const e=V.get(s);V.delete(s);const t=e.value instanceof y?e.value.template:void 0;Z(o,s,t),r(n,n.firstChild),n.appendChild(s),V.set(n,e);}!i&&a&&window.ShadyCSS.styleElement(n.host);};class he extends se{constructor(){super(),this._onFns=[];}updated(e){super.updated(e);}emit(e,n){let t=new CustomEvent(e,{detail:n});this.dispatchEvent(t);let o="on"+e,r=e=>{};"function"!=typeof this[o]||o in HTMLElement.prototype?"string"==typeof this[o]&&(r=new Function("event",this[o])):r=this[o],r(t);}noop(...e){}findSameParent(){let e=[],n=this.getRootNode();if(n instanceof ShadowRoot){let t=n.host;t.nodeName==this.nodeName&&e.push(t),t instanceof he&&e.push(...t.findSameParent());}return e}findParentElementByTag(e,n=this.parentElement){if(n)return n.nodeName.toLowerCase()==e.toLowerCase()?n:n.parentElement?this.findParentElementByTag(e,n.parentElement):void 0}on(e,n,t,o){["string","number"].includes(typeof t)&&(o=t,t=this);let r,i=t||this;i.addEventListener(e,r=e=>n(e)),this._onFns.push({name:e,fn:r,key:void 0===o?o:null,el:i});}off(e){let n=this._onFns.filter(n=>n.name==e||n.key==e);this._onFns=this._onFns.filter(n=>!(n.name==e||n.key==e)),n.map(e=>{e.el.removeEventListener(e.name,e.fn);});}setStyle(e,n=this){let t={};Object.keys(e).map(n=>{e[n]&&(t[n]=e[n]);}),Object.assign(n.style,t);}createElement(e,n,t,o=!1){let r=["area","base","br","col","embed","hr","img","input","keygen","link","meta","param","source","track","wbr"].includes(e.toLowerCase());n=de(n);let i=Object.keys(n);if(!o&&!i.length)return "";let a=i.map(e=>{let t="boolean"==typeof n[e],o="function"==typeof n[e],r=".";return t?r="?":o&&(r="@"),{isBool:t,isFn:o,prefix:r,key:e}}),l=[],s=[...a.reduce((t,o,r)=>(t.push(`${r>0?'"':`<${e} `} ${o.prefix}${o.key}="`),l.push(n[o.key]),t),[]),...r?['" />']:t?['">',`</${e}>`]:[`"></${e}>`]];return !r&&t&&l.push(t||""),s.raw=[...s],N(s,...l)}createClassString(e){return Object.keys(e).reduce((n,t)=>(e[t]&&n.push(t),n),[]).join(" ")}findElementInSlot(e,n){return e.assignedElements().reduce((e,t)=>{let o=Array.from(t.querySelectorAll(n)),r=Array.from(t.querySelectorAll("slot")).map(e=>this.findElementInSlot(e,n));return e.push(...o,...r,...t.nodeName.toLowerCase()==n?[t]:[]),e},[])}}class pe{constructor(e=!1){this.persevere=e,this._listeners=[],this._listenTypes=new Map;}on(e,n,t=!1){this.persevere&&this._listenTypes.has(e)&&(n(this._listenTypes.get(e)),t)||this._listeners.push({type:e,fn:n,once:t});}emit(e,n){this.persevere&&this._listenTypes.set(e,n);let t=this._listeners.filter(n=>n.type==e);this._listeners=this._listeners.filter(n=>!(n.type==e&&!0===n.once)),t.map(({fn:e})=>e(n));}off(e,n){this._listeners=this._listeners.filter(t=>!(t.type==e&&(void 0===n||n==t.fn)));}once(e,n){this.on(e,n,!0);}}var ge=new class extends pe{constructor(){super(!0),this.listener();}onChange(e){let n=["doc:loading","doc:interactive","dom:loaded","doc:complete","win:load"];document.body&&this.emit("body"),n.indexOf(e)>=2&&this.emit("dom"),4==n.indexOf(e)&&this.emit("doc");}listener(){if("complete"==document.readyState)return this.onChange("win:load");let e=null,n=null,t=null;document.addEventListener("readystatechange",e=()=>{this.onChange("doc:"+document.readyState),"complete"==document.readyState&&document.addEventListener("readystatechange",e);}),document.addEventListener("DOMContentLoaded",n=()=>{this.onChange("dom:loaded"),document.addEventListener("DOMContentLoaded",n);}),window.addEventListener("load",t=()=>{this.onChange("win:load"),window.removeEventListener("load",t);});}};function fe(e){return n=>{window.customElements.get(e)||Y(e)(n),function(e){"undefined"!=typeof window&&(window.IUUI=window.IUUI||{},Object.getOwnPropertyNames(e).filter(n=>n.match(/^\$/)&&"function"==typeof e[n]).map(n=>{"$install"===n?ge.once("doc",()=>e[n]()):window.IUUI[n.substr(1)]=(...t)=>e[n](...t);}));}(n);}}let me=class extends he{constructor(){super(...arguments),this.type="fill",this.size="",this.color="",this.shape="",this.icon="",this.loading=!1;}static get styles(){return ae`${ie("* {\n  box-sizing: border-box;\n  -webkit-tap-highlight-color: transparent; }\n  *::selection {\n    background-color: var(--iu-main-color, #2ed573);\n    color: var(--iu-white-color, #ffffff); }\n\nbody {\n  padding: 0;\n  margin: 0; }\n\na {\n  color: var(--iu-main-color, #2ed573); }\n\n.hide,\n.hidden,\n[hide],\n[hidden] {\n  display: none; }\n\n.main-text {\n  color: var(--iu-main-color, #2ed573); }\n\n.main-bg {\n  background-color: var(--iu-main-color, #2ed573); }\n\n.mainLight-text {\n  color: var(--iu-mainLight-color, #f2fff8); }\n\n.mainLight-bg {\n  background-color: var(--iu-mainLight-color, #f2fff8); }\n\n.white-text {\n  color: var(--iu-white-color, #ffffff); }\n\n.white-bg {\n  background-color: var(--iu-white-color, #ffffff); }\n\n.dark-text {\n  color: var(--iu-dark-color, #2f3542); }\n\n.dark-bg {\n  background-color: var(--iu-dark-color, #2f3542); }\n\n.light-text {\n  color: var(--iu-light-color, #f5f5f5); }\n\n.light-bg {\n  background-color: var(--iu-light-color, #f5f5f5); }\n\n.light-grey-text {\n  color: var(--iu-light-grey-color, #dddddd); }\n\n.light-grey-bg {\n  background-color: var(--iu-light-grey-color, #dddddd); }\n\n.grey-text {\n  color: var(--iu-grey-color, #a4b0be); }\n\n.grey-bg {\n  background-color: var(--iu-grey-color, #a4b0be); }\n\n.success-text {\n  color: var(--iu-success-color, #2ed573); }\n\n.success-bg {\n  background-color: var(--iu-success-color, #2ed573); }\n\n.info-text {\n  color: var(--iu-info-color, #1e90ff); }\n\n.info-bg {\n  background-color: var(--iu-info-color, #1e90ff); }\n\n.warn-text {\n  color: var(--iu-warn-color, #ffa502); }\n\n.warn-bg {\n  background-color: var(--iu-warn-color, #ffa502); }\n\n.error-text {\n  color: var(--iu-error-color, #ff4757); }\n\n.error-bg {\n  background-color: var(--iu-error-color, #ff4757); }\n\n:host {\n  cursor: pointer;\n  user-select: none;\n  display: inline-flex;\n  position: relative;\n  border: none;\n  background: var(--iu-light-color, #f5f5f5);\n  color: var(--iu-dark-color, #2f3542);\n  overflow: hidden;\n  z-index: 1;\n  white-space: nowrap;\n  justify-content: center;\n  align-items: center;\n  padding: .25em .9em;\n  border-radius: 0.125em;\n  margin: 0 10px 10px 0; }\n  :host:focus {\n    outline: none; }\n  :host(:hover) {\n    color: var(--iu-success-color, #2ed573);\n    border-color: var(--iu-success-color, #2ed573); }\n  :host([disabled]) {\n    opacity: .6;\n    cursor: not-allowed; }\n  :host([block]) {\n    display: block;\n    width: 100%; }\n  :host([type=fill][color=success]) {\n    color: #fff;\n    background-color: var(--iu-success-color, #2ed573); }\n  :host([type=fill][color=info]) {\n    color: #fff;\n    background-color: var(--iu-info-color, #1e90ff); }\n  :host([type=fill][color=warn]) {\n    color: #fff;\n    background-color: var(--iu-warn-color, #ffa502); }\n  :host([type=fill][color=error]) {\n    color: #fff;\n    background-color: var(--iu-error-color, #ff4757); }\n  :host([type=dash]),\n  :host([type=ghost]),\n  :host([type=text]) {\n    background-color: transparent; }\n  :host([type=dash]) {\n    border: 1px dashed var(--iu-light-color, #f5f5f5);\n    color: var(--iu-light-color, #f5f5f5); }\n    :host([type=dash][color=success]) {\n      border-color: var(--iu-success-color, #2ed573);\n      color: var(--iu-success-color, #2ed573); }\n    :host([type=dash][color=info]) {\n      border-color: var(--iu-info-color, #1e90ff);\n      color: var(--iu-info-color, #1e90ff); }\n    :host([type=dash][color=warn]) {\n      border-color: var(--iu-warn-color, #ffa502);\n      color: var(--iu-warn-color, #ffa502); }\n    :host([type=dash][color=error]) {\n      border-color: var(--iu-error-color, #ff4757);\n      color: var(--iu-error-color, #ff4757); }\n  :host([type=ghost]) {\n    border: 1px solid #fff;\n    color: #fff; }\n    :host([type=dash]):hover {\n      border-color: var(--iu-light-color, #f5f5f5);\n      color: var(--iu-light-color, #f5f5f5); }\n    :host([type=dash][color=success]):hover {\n      border-color: var(--iu-success-color, #2ed573);\n      color: var(--iu-success-color, #2ed573); }\n    :host([type=dash][color=info]):hover {\n      border-color: var(--iu-info-color, #1e90ff);\n      color: var(--iu-info-color, #1e90ff); }\n    :host([type=dash][color=warn]):hover {\n      border-color: var(--iu-warn-color, #ffa502);\n      color: var(--iu-warn-color, #ffa502); }\n    :host([type=dash][color=error]):hover {\n      border-color: var(--iu-error-color, #ff4757);\n      color: var(--iu-error-color, #ff4757); }\n  :host([type=text]):hover {\n    color: var(--iu-main-color, #2ed573); }\n  :host([type=text][color=success]):hover {\n    color: var(--iu-success-color, #2ed573); }\n  :host([type=text][color=info]):hover {\n    color: var(--iu-info-color, #1e90ff); }\n  :host([type=text][color=warn]):hover {\n    color: var(--iu-warn-color, #ffa502); }\n  :host([type=text][color=error]):hover {\n    color: var(--iu-error-color, #ff4757); }\n  :host([shape=square]) {\n    border-radius: 0; }\n  :host([shape=round]) {\n    border-radius: 50px; }\n  :host([shape=circle]) {\n    border-radius: 50%;\n    text-align: center;\n    width: 2em;\n    height: 2em;\n    padding: 0; }\n  :host([shape=cube]) {\n    border-radius: 0;\n    text-align: center;\n    width: 2em;\n    height: 2em;\n    padding: 0; }\n  :host([shape=plain]) {\n    border-radius: 0;\n    font-size: 1em;\n    padding: 0; }\n\n:host([block]) {\n  display: block; }\n\n:host([disabled]) {\n  cursor: not-allowed; }\n\n:host([loading]) {\n  pointer-events: none;\n  opacity: .6; }\n\n:host([size=mini]) {\n  font-size: 12px; }\n\n:host([size=small]) {\n  font-size: 14px; }\n\n:host([size=normal]) {\n  font-size: 16px; }\n\n:host([size=large]) {\n  font-size: 24px; }\n\nbutton {\n  background-color: transparent;\n  border: none;\n  font-size: 1em;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  margin: auto; }\n  button:focus {\n    outline: none; }\n  button iu-ripple {\n    cursor: pointer; }\n\n:host([disabled]) button {\n  pointer-events: none; }\n")}`}connectedCallback(){super.connectedCallback();}disconnectedCallback(){super.disconnectedCallback();}attributeChangedCallback(e,n,t){super.attributeChangedCallback(e,n,t);}updated(e){super.updated(e);}firstUpdated(e){super.firstUpdated(e);}onBtnClick(e){e.stopPropagation(),this.emit("click");}render(){let e={name:this.icon||void 0,spin:this.loading||void 0};return e.spin&&!e.name&&(e.name="loading"),N`
        ${this.createElement("iu-icon",e)}
        <slot></slot>
        <button .type=${this.formType||"button"} @click="${this.onBtnClick}">
            <iu-ripple ?dark=${!this.color||"fill"!=this.type}></iu-ripple>
        </button>`}};e([K({reflect:!0}),n("design:type",String)],me.prototype,"type",void 0),e([K({reflect:!0}),n("design:type",String)],me.prototype,"size",void 0),e([K({reflect:!0}),n("design:type",String)],me.prototype,"color",void 0),e([K({reflect:!0}),n("design:type",String)],me.prototype,"shape",void 0),e([K(),n("design:type",String)],me.prototype,"icon",void 0),e([K({type:Boolean}),n("design:type",Boolean)],me.prototype,"loading",void 0),e([K({type:Boolean,reflect:!0}),n("design:type",Boolean)],me.prototype,"disabled",void 0),e([K({type:Boolean,reflect:!0}),n("design:type",Boolean)],me.prototype,"block",void 0),e([K({attribute:"form-type"}),n("design:type",String)],me.prototype,"formType",void 0),me=e([fe("iu-button")],me);class be extends he{constructor(){super(...arguments),this.invalid=!1,this.valid=!1,this.required=!1,this.disabled=!1,this.readonly=!1,this.defaultValue="",this.value=!1,this.name="";}checkValidity(){return t(this,void 0,void 0,(function*(){let e=this.input.checkValidity(),n=this.input.validationMessage;if(e&&this.validator&&!this.disabled){let o=this.validator;Array.isArray(this.validator)||(o=[this.validator]),yield function(e,n){return t(this,void 0,void 0,(function*(){for(let t=0;t<e.length;t++)try{yield n(e[t]);}catch(e){return e}}))}(o,o=>t(this,void 0,void 0,(function*(){let t={message:o.message};if(!(yield o.validator(this.input.value,t)))throw e=!1,n=t.message,new Error})));}this.disabled&&(e=!0,n=""),this.invalid=!e,this.valid=e,this.valid?(this.tip.message="",this.tip.hide()):(this.tip.message=n,this.tip.show());}))}}e([K({reflect:!0,type:Boolean}),n("design:type",Object)],be.prototype,"invalid",void 0),e([K({reflect:!0,type:Boolean}),n("design:type",Object)],be.prototype,"valid",void 0),e([K({reflect:!0,type:Boolean}),n("design:type",Object)],be.prototype,"required",void 0),e([K({reflect:!0,type:Boolean}),n("design:type",Object)],be.prototype,"disabled",void 0),e([K({reflect:!0,type:Boolean}),n("design:type",Object)],be.prototype,"readonly",void 0),e([K({reflect:!0,type:String}),n("design:type",Object)],be.prototype,"defaultValue",void 0),e([K({reflect:!0,type:Boolean}),n("design:type",Object)],be.prototype,"value",void 0),e([K({reflect:!0,type:String}),n("design:type",String)],be.prototype,"name",void 0),e([K(),n("design:type",Object)],be.prototype,"validator",void 0),e([Q("iu-tip"),n("design:type",Object)],be.prototype,"tip",void 0),e([Q("input"),n("design:type",HTMLInputElement)],be.prototype,"input",void 0);let ve=class extends be{constructor(){super(...arguments),this.indeterminate=!1,this.defaultValue=!1,this.value=!1;}static get styles(){return ae`${ie("* {\n  box-sizing: border-box;\n  -webkit-tap-highlight-color: transparent; }\n  *::selection {\n    background-color: var(--iu-main-color, #2ed573);\n    color: var(--iu-white-color, #ffffff); }\n\nbody {\n  padding: 0;\n  margin: 0; }\n\na {\n  color: var(--iu-main-color, #2ed573); }\n\n.hide,\n.hidden,\n[hide],\n[hidden] {\n  display: none; }\n\n.main-text {\n  color: var(--iu-main-color, #2ed573); }\n\n.main-bg {\n  background-color: var(--iu-main-color, #2ed573); }\n\n.mainLight-text {\n  color: var(--iu-mainLight-color, #f2fff8); }\n\n.mainLight-bg {\n  background-color: var(--iu-mainLight-color, #f2fff8); }\n\n.white-text {\n  color: var(--iu-white-color, #ffffff); }\n\n.white-bg {\n  background-color: var(--iu-white-color, #ffffff); }\n\n.dark-text {\n  color: var(--iu-dark-color, #2f3542); }\n\n.dark-bg {\n  background-color: var(--iu-dark-color, #2f3542); }\n\n.light-text {\n  color: var(--iu-light-color, #f5f5f5); }\n\n.light-bg {\n  background-color: var(--iu-light-color, #f5f5f5); }\n\n.light-grey-text {\n  color: var(--iu-light-grey-color, #dddddd); }\n\n.light-grey-bg {\n  background-color: var(--iu-light-grey-color, #dddddd); }\n\n.grey-text {\n  color: var(--iu-grey-color, #a4b0be); }\n\n.grey-bg {\n  background-color: var(--iu-grey-color, #a4b0be); }\n\n.success-text {\n  color: var(--iu-success-color, #2ed573); }\n\n.success-bg {\n  background-color: var(--iu-success-color, #2ed573); }\n\n.info-text {\n  color: var(--iu-info-color, #1e90ff); }\n\n.info-bg {\n  background-color: var(--iu-info-color, #1e90ff); }\n\n.warn-text {\n  color: var(--iu-warn-color, #ffa502); }\n\n.warn-bg {\n  background-color: var(--iu-warn-color, #ffa502); }\n\n.error-text {\n  color: var(--iu-error-color, #ff4757); }\n\n.error-bg {\n  background-color: var(--iu-error-color, #ff4757); }\n\n:host {\n  cursor: pointer;\n  user-select: none;\n  display: inline-block; }\n\n:host label {\n  cursor: pointer;\n  font-size: 1em;\n  line-height: 1; }\n\n:host(:not([disabled]):hover) .checkbox,\n:host(:not([readonly]):hover) .checkbox {\n  border-color: var(--iu-success-color, #2ed573); }\n\n:host([disabled]) {\n  cursor: not-allowed; }\n\n:host([readonly]) {\n  cursor: default; }\n\nlabel.disabled {\n  opacity: .6;\n  pointer-events: none; }\n\nlabel.readonly {\n  pointer-events: none; }\n\nlabel.required .checkbox {\n  border-color: var(--iu-error-color, #ff4757); }\n\n.checkbox {\n  display: inline-block;\n  border: 0.125em solid var(--iu-light-grey-color, #dddddd);\n  width: 1.125em;\n  height: 1.125em;\n  overflow: hidden;\n  vertical-align: middle;\n  transition: border .1s ease-out; }\n  .checkbox > .check,\n  .checkbox > .indeterminate {\n    transform: scale(0);\n    transition: transform 100ms ease-in-out;\n    margin: 0;\n    background-color: var(--iu-success-color, #2ed573);\n    color: #fff; }\n\ninput:checked + .checkbox {\n  border-color: var(--iu-success-color, #2ed573); }\n  input:checked + .checkbox > .check {\n    transform: scale(1);\n    display: inline-block; }\n  input:checked + .checkbox > .indeterminate {\n    display: none; }\n\ninput:indeterminate + .checkbox {\n  border-color: var(--iu-success-color, #2ed573); }\n  input:indeterminate + .checkbox > .check {\n    display: none; }\n  input:indeterminate + .checkbox > .indeterminate {\n    transform: scale(1);\n    display: inline-block; }\n")}`}connectedCallback(){super.connectedCallback();}disconnectedCallback(){super.disconnectedCallback(),this.off("change"),this.off("focus");}attributeChangedCallback(e,n,t){super.attributeChangedCallback(e,n,t);}shouldUpdate(e){return !0}updated(e){super.updated(e),e.has("indeterminate")&&(this.input.indeterminate=this.indeterminate);}firstUpdated(e){super.firstUpdated(e),this.on("change",ue(()=>this.inputValueChange()),this.input),this.on("focus",()=>this.inputValueChange(),this.input);}inputValueChange(){return this.emit("change",{value:this.value}),console.log("change"),this.checkValidity()}render(){let e={hidden:!0,defaultChecked:this.defaultValue,checked:this.value,type:"checkbox",name:this.name,required:this.required,readonly:this.readonly,disabled:this.disabled},n={disabled:this.disabled,readonly:this.readonly,required:this.required};return N`<iu-tip trigger="hover" type="error" placement="topLeft">
            <label class="${this.createClassString(n)}">
                ${this.createElement("input",e)}
                <span class="checkbox">
                    <iu-icon class="check" name="check"></iu-icon>
                    <iu-icon class="indeterminate" name="indeterminate"></iu-icon>
                </span>
                <slot></slot>
            </label>
        </iu-tip>`}};e([K({reflect:!0,type:Boolean}),n("design:type",Object)],ve.prototype,"indeterminate",void 0),e([K({reflect:!0,type:Boolean}),n("design:type",Boolean)],ve.prototype,"defaultValue",void 0),e([K({reflect:!0,type:Boolean}),n("design:type",Boolean)],ve.prototype,"value",void 0),ve=e([fe("iu-checkbox")],ve);var we;let ke=we=class extends he{constructor(){super(...arguments),this.showCancel=!0,this.showOk=!0;}static get styles(){return ae`${ie("* {\n  box-sizing: border-box;\n  -webkit-tap-highlight-color: transparent; }\n  *::selection {\n    background-color: var(--iu-main-color, #2ed573);\n    color: var(--iu-white-color, #ffffff); }\n\nbody {\n  padding: 0;\n  margin: 0; }\n\na {\n  color: var(--iu-main-color, #2ed573); }\n\n.hide,\n.hidden,\n[hide],\n[hidden] {\n  display: none; }\n\n.main-text {\n  color: var(--iu-main-color, #2ed573); }\n\n.main-bg {\n  background-color: var(--iu-main-color, #2ed573); }\n\n.mainLight-text {\n  color: var(--iu-mainLight-color, #f2fff8); }\n\n.mainLight-bg {\n  background-color: var(--iu-mainLight-color, #f2fff8); }\n\n.white-text {\n  color: var(--iu-white-color, #ffffff); }\n\n.white-bg {\n  background-color: var(--iu-white-color, #ffffff); }\n\n.dark-text {\n  color: var(--iu-dark-color, #2f3542); }\n\n.dark-bg {\n  background-color: var(--iu-dark-color, #2f3542); }\n\n.light-text {\n  color: var(--iu-light-color, #f5f5f5); }\n\n.light-bg {\n  background-color: var(--iu-light-color, #f5f5f5); }\n\n.light-grey-text {\n  color: var(--iu-light-grey-color, #dddddd); }\n\n.light-grey-bg {\n  background-color: var(--iu-light-grey-color, #dddddd); }\n\n.grey-text {\n  color: var(--iu-grey-color, #a4b0be); }\n\n.grey-bg {\n  background-color: var(--iu-grey-color, #a4b0be); }\n\n.success-text {\n  color: var(--iu-success-color, #2ed573); }\n\n.success-bg {\n  background-color: var(--iu-success-color, #2ed573); }\n\n.info-text {\n  color: var(--iu-info-color, #1e90ff); }\n\n.info-bg {\n  background-color: var(--iu-info-color, #1e90ff); }\n\n.warn-text {\n  color: var(--iu-warn-color, #ffa502); }\n\n.warn-bg {\n  background-color: var(--iu-warn-color, #ffa502); }\n\n.error-text {\n  color: var(--iu-error-color, #ff4757); }\n\n.error-bg {\n  background-color: var(--iu-error-color, #ff4757); }\n\n.dialog {\n  z-index: 100;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  margin: auto;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  user-select: none;\n  transform: scale(0);\n  transition: 0s .2s; }\n  .dialog > .background {\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    margin: auto;\n    background-color: rgba(0, 0, 0, 0.2);\n    z-index: -1;\n    opacity: 0;\n    transition: opacity .2s ease-out; }\n  .dialog.open {\n    transform: scale(1);\n    transition: 0s 0s; }\n    .dialog.open > .background {\n      opacity: 1; }\n    .dialog.open > .body {\n      transform: scale(1); }\n  .dialog > .body {\n    width: 360px;\n    height: 200px;\n    max-width: calc(100% - 40px);\n    max-height: calc(100% - 40px);\n    background-color: #fff;\n    border-radius: 2px;\n    box-shadow: 0 0 50px rgba(0, 0, 0, 0.2);\n    display: flex;\n    padding: 1em;\n    position: relative;\n    transform: scale(0);\n    transition: transform .2s ease-out; }\n    .dialog > .body > .close {\n      position: absolute;\n      top: 1em;\n      right: 1em;\n      margin: 0;\n      text-align: center; }\n    .dialog > .body > .status {\n      font-size: 2em;\n      min-width: 1.5em;\n      max-width: 1.5em;\n      padding-right: .5em; }\n    .dialog > .body > .content {\n      display: flex;\n      flex-direction: column;\n      flex: auto; }\n      .dialog > .body > .content > .dialog-header {\n        white-space: nowrap;\n        font-size: 1.2em;\n        font-weight: bold;\n        height: 1.4em;\n        padding-right: 1.4em; }\n      .dialog > .body > .content > .dialog-body {\n        position: relative;\n        flex: auto;\n        overflow: auto;\n        padding: .5em 0;\n        padding-right: 1.4em; }\n      .dialog > .body > .content > .dialog-footer {\n        padding: .1em;\n        text-align: right;\n        height: 2em; }\n")}`}static $alert(e){return we.$dialog(Object.assign({okText:"知道了",showCancel:!1,showOk:!0},e)).finally(()=>{})}static $confirm(e){return we.$dialog(Object.assign({status:"warn",showCancel:!0,showOk:!0},e))}static $dialog(e){return new Promise((n,t)=>{let o=document.createElement("iu-dialog");o.title=e.title||"",o.status=e.status||"success",o.innerHTML=e.content||"",Object.assign(o,de({title:e.title,status:e.status,okText:e.okText,okColor:e.okColor,cancelText:e.cancelText,cancelColor:e.cancelColor,showCancel:e.showCancel,showOk:e.showOk})),e.onCancel=e.onCancel||(()=>{}),e.onOk=e.onOk||(()=>{}),o.oncancel=n=>(e.onCancel(n),t(n)),o.onconfirm=t=>(e.onOk(t),n(t)),document.body.append(o),o.show();})}connectedCallback(){super.connectedCallback();}disconnectedCallback(){super.disconnectedCallback();}attributeChangedCallback(e,n,t){super.attributeChangedCallback(e,n,t);}shouldUpdate(e){return !0}updated(e){super.updated(e);}firstUpdated(e){super.firstUpdated(e);}getStatus(){return this.status?N`<div class="status ${this.status}-text">
            <iu-icon .name="${this.status}"></iu-icon>
        </div>`:""}show(){this.open=!0;}hide(){this.open=!1;}cancel(){this.emit("cancel"),this.hide();}confirm(){this.emit("confirm"),this.hide();}render(){return N`
        <div class="dialog ${this.open?"open":""}">
            <div class="background"></div>
            <div class="body">
                ${this.getStatus()}
                <iu-button class="close" type="text" size="small" shape="cube" @click="${this.cancel}">
                    <iu-icon name="close"></iu-icon>
                </iu-button>
                <div class="content">
                    ${this.title?N`<div class="dialog-header">${this.title}</div>`:""}
                    <div class="dialog-body">
                        <slot></slot>
                    </div>
                    <div class="dialog-footer">
                        <iu-button @click="${this.cancel}" color="${this.cancelColor||""}" ?hidden=${!this.showCancel}>
                            ${this.cancelText||"取消"}
                        </iu-button>
                        <iu-button @click="${this.confirm}" color="${this.okColor||"success"}" ?hidden=${!this.showOk}>
                            ${this.okText||"确定"}
                        </iu-button>
                    </div>
                </div>
            </div>
        </div>
        `}};e([K(),n("design:type",String)],ke.prototype,"status",void 0),e([K(),n("design:type",String)],ke.prototype,"title",void 0),e([K(),n("design:type",String)],ke.prototype,"okText",void 0),e([K(),n("design:type",String)],ke.prototype,"cancelText",void 0),e([K(),n("design:type",String)],ke.prototype,"okColor",void 0),e([K(),n("design:type",String)],ke.prototype,"cancelColor",void 0),e([K({reflect:!0}),n("design:type",Boolean)],ke.prototype,"open",void 0),e([K(),n("design:type",Boolean)],ke.prototype,"showCancel",void 0),e([K(),n("design:type",Boolean)],ke.prototype,"showOk",void 0),e([K({converter:function(e){return "string"==typeof e?new Function("event",e):e}}),n("design:type",Object)],ke.prototype,"onconfirm",void 0),ke=we=e([fe("iu-dialog")],ke);let ye=class extends he{constructor(){super(...arguments),this.placement="top",this.open=!1,this.trigger="click",this._timer=null;}static get styles(){return ae`${ie("* {\n  box-sizing: border-box;\n  -webkit-tap-highlight-color: transparent; }\n  *::selection {\n    background-color: var(--iu-main-color, #2ed573);\n    color: var(--iu-white-color, #ffffff); }\n\nbody {\n  padding: 0;\n  margin: 0; }\n\na {\n  color: var(--iu-main-color, #2ed573); }\n\n.hide,\n.hidden,\n[hide],\n[hidden] {\n  display: none; }\n\n.main-text {\n  color: var(--iu-main-color, #2ed573); }\n\n.main-bg {\n  background-color: var(--iu-main-color, #2ed573); }\n\n.mainLight-text {\n  color: var(--iu-mainLight-color, #f2fff8); }\n\n.mainLight-bg {\n  background-color: var(--iu-mainLight-color, #f2fff8); }\n\n.white-text {\n  color: var(--iu-white-color, #ffffff); }\n\n.white-bg {\n  background-color: var(--iu-white-color, #ffffff); }\n\n.dark-text {\n  color: var(--iu-dark-color, #2f3542); }\n\n.dark-bg {\n  background-color: var(--iu-dark-color, #2f3542); }\n\n.light-text {\n  color: var(--iu-light-color, #f5f5f5); }\n\n.light-bg {\n  background-color: var(--iu-light-color, #f5f5f5); }\n\n.light-grey-text {\n  color: var(--iu-light-grey-color, #dddddd); }\n\n.light-grey-bg {\n  background-color: var(--iu-light-grey-color, #dddddd); }\n\n.grey-text {\n  color: var(--iu-grey-color, #a4b0be); }\n\n.grey-bg {\n  background-color: var(--iu-grey-color, #a4b0be); }\n\n.success-text {\n  color: var(--iu-success-color, #2ed573); }\n\n.success-bg {\n  background-color: var(--iu-success-color, #2ed573); }\n\n.info-text {\n  color: var(--iu-info-color, #1e90ff); }\n\n.info-bg {\n  background-color: var(--iu-info-color, #1e90ff); }\n\n.warn-text {\n  color: var(--iu-warn-color, #ffa502); }\n\n.warn-bg {\n  background-color: var(--iu-warn-color, #ffa502); }\n\n.error-text {\n  color: var(--iu-error-color, #ff4757); }\n\n.error-bg {\n  background-color: var(--iu-error-color, #ff4757); }\n\n:host {\n  display: inline-block;\n  position: relative;\n  width: inherit; }\n\n.direction-content {\n  position: absolute;\n  transition: all ease-in-out .2s;\n  z-index: 10;\n  transform: scale(0);\n  width: max-content;\n  user-select: none; }\n  .direction-content.fit {\n    min-width: 100%; }\n\n:host([open]) .direction-content {\n  transform: scale(1); }\n\n:host([placement=topLeft]) .direction-content {\n  bottom: 100%;\n  left: 0;\n  transform-origin: left bottom; }\n\n:host([placement=top]) .direction-content {\n  bottom: 100%;\n  transform: translate(-50%) scale(0);\n  left: 50%;\n  transform-origin: center bottom; }\n\n:host([placement=top][open]) .direction-content {\n  transform: translate(-50%) scale(1); }\n\n:host([placement=topRight]) .direction-content {\n  bottom: 100%;\n  right: 0;\n  transform-origin: right bottom; }\n\n:host([placement=leftTop]) .direction-content {\n  right: 100%;\n  top: 0;\n  transform-origin: right top; }\n\n:host([placement=left]) .direction-content {\n  right: 100%;\n  top: 50%;\n  transform: translateY(-50%) scale(0);\n  transform-origin: right center; }\n\n:host([placement=left][open]) .direction-content {\n  transform: translateY(-50%) scale(1); }\n\n:host([placement=leftBottom]) .direction-content {\n  bottom: 0;\n  right: 100%;\n  transform-origin: right bottom; }\n\n:host([placement=rightTop]) .direction-content {\n  left: 100%;\n  top: 0;\n  transform-origin: left top; }\n\n:host([placement=right]) .direction-content {\n  left: 100%;\n  top: 50%;\n  transform: translateY(-50%) scale(0);\n  transform-origin: left center; }\n\n:host([placement=right][open]) .direction-content {\n  transform: translateY(-50%) scale(1); }\n\n:host([placement=rightBottom]) .direction-content {\n  left: 100%;\n  bottom: 0;\n  transform-origin: left bottom; }\n\n:host([placement=bottomLeft]) .direction-content {\n  top: 100%;\n  left: 0;\n  transform-origin: left top; }\n\n:host([placement=bottom]) .direction-content {\n  top: 100%;\n  transform: translate(-50%) scale(0);\n  left: 50%;\n  transform-origin: center top; }\n\n:host([placement=bottom][open]) .direction-content {\n  transform: translate(-50%) scale(1); }\n\n:host([placement=bottomRight]) .direction-content {\n  top: 100%;\n  right: 0;\n  transform-origin: right top; }\n")}`}connectedCallback(){super.connectedCallback(),this.on("click",e=>this.clickDirection(e)),this.on("mouseenter",e=>this.moveIn(e)),this.on("mousemove",e=>this.moveIn(e)),this.on("mouseout",e=>this.moveOut(e)),this.on("contextmenu",e=>this.contextOpen(e)),this.on("click",e=>this.backgroundClick(e),document.body);}disconnectedCallback(){super.disconnectedCallback(),this.off("click"),this.off("mouseenter"),this.off("mouseout"),this.off("contextmenu");}attributeChangedCallback(e,n,t){super.attributeChangedCallback(e,n,t);}shouldUpdate(e){return !0}updated(e){super.updated(e),"contextmenu"!=this.trigger||this.placement||(this.placement=""),this.open&&!this.hasMessage()&&this.hide();}firstUpdated(e){super.firstUpdated(e);}computeContentSize(){let{width:e,height:n}=this.contentEl.getBoundingClientRect();return {width:e,height:n}}clickDirection(e){let n=Array.from(e.path||e.composedPath()),t=n.includes(this.contentEl)||n.includes(this);"contextmenu"==this.trigger?this.open&&this.hide():"click"==this.trigger?this.open?this.hide():this.show():this.open&&!t&&this.hide();}show(){this.open=!0,this.visibleChanged();}hide(){this.open=!1,this.visibleChanged();}visibleChanged(){setTimeout(()=>{this.emit("change",this.open);},200);}moveIn(e){"hover"==this.trigger&&(this._timer&&clearTimeout(this._timer),this.show());}moveOut(e){"hover"==this.trigger&&(this._timer&&clearTimeout(this._timer),this._timer=setTimeout(()=>{this.hide();},200));}contextOpen(e){if("contextmenu"==this.trigger){e.preventDefault();let{offsetX:n,offsetY:t}=e;Object.assign(this.contentEl.style,{top:t+4+"px",left:n-4+"px"}),this.show();}}backgroundClick(e){Array.from(e.path||e.composedPath()).includes(this)||this.hide();}hasMessage(e=this.slotContent){return Array.from(e.assignedElements()).some(e=>!!e.textContent.trim()||Array.from(e.querySelectorAll("slot")).some(e=>this.hasMessage(e)))}render(){return N`<slot></slot>
        <div class="direction-content ${this.fit?"fit":""}">
            <slot name="content"></slot>
        </div>`}};e([Q(".direction-content"),n("design:type",HTMLElement)],ye.prototype,"contentEl",void 0),e([K({reflect:!0}),n("design:type",String)],ye.prototype,"placement",void 0),e([K({reflect:!0,type:Boolean}),n("design:type",Boolean)],ye.prototype,"fit",void 0),e([K({type:Boolean,reflect:!0}),n("design:type",Object)],ye.prototype,"open",void 0),e([K(),n("design:type",String)],ye.prototype,"trigger",void 0),e([Q("slot[name=content]"),n("design:type",HTMLSlotElement)],ye.prototype,"slotContent",void 0),ye=e([fe("iu-direction")],ye);var xe=new Proxy(new class{},{get:(e,n)=>({exec:(e=null)=>document.execCommand(n,!1,e),state:()=>document.queryCommandState(n),value:()=>document.queryCommandValue(n)})}),Ce={name:"加粗",icon:"bold",exec:()=>xe.bold.exec(),state:()=>xe.bold.state()},ze={name:"斜体",icon:"italic",exec:()=>xe.italic.exec(),state:()=>xe.italic.state()},Se={name:"下划线",icon:"underline",exec:()=>xe.underline.exec(),state:()=>xe.underline.state()},_e={name:"删除线",icon:"strikethrough",exec:()=>xe.strikeThrough.exec(),state:()=>xe.strikeThrough.state()},$e={name:"引用",icon:"quote",exec:()=>{"blockquote"==xe.formatBlock.value()?xe.formatBlock.exec("<p>"):xe.formatBlock.exec("<blockquote>");},state:()=>"blockquote"==xe.formatBlock.value()},Le={name:"代码",icon:"code",exec:()=>xe.formatBlock.exec("<pre>"),state:()=>"pre"==xe.formatBlock.value()},Me={name:"水平线",icon:"horizontal",exec:()=>xe.insertHorizontalRule.exec()},Ae={name:"标题",icon:"heading",get list(){return Array(6).fill("").map((e,n)=>({key:n+1,name:`H${n+1} 标题${n+1}`})).map(e=>N`<div data-listkey="${e.key}" class="heading">
                ${new Function("html",`return html\`<h${e.key}>${e.name}</h${e.key}>\``)(N)}
            </div>`)},exec:e=>{let n="1";if(e){(e.path||e.composedPath()).some(e=>{if(e instanceof HTMLElement&&e.getAttribute("data-listkey"))return n=e.getAttribute("data-listkey"),!0});}xe.formatBlock.exec(`<h${n}>`);},state:()=>!!xe.formatBlock.value().match(/^h[1-6]$/)};window.addEventListener("iuuiinstalled",()=>{window.IUUI.registerIconAlias("iu-editor-icon",'<svg><symbol id="icon-heading" viewBox="0 0 1024 1024"><path d="M775.01729922 432.39124866V64.16703001h105.20692067v894.25881832h-105.20692067v-420.82767899H248.98270078v420.82767899H143.77578011V64.16703001h105.20692067v368.22421865z"  ></path></symbol><symbol id="icon-emoji" viewBox="0 0 1024 1024"><path d="M511.52822949 144.24207908a366.93261645 366.93261645 0 1 0 0 733.86523385 366.93261645 366.93261645 0 0 0 0-733.86523385z m0-78.62841756a445.56103493 445.56103493 0 1 1 0 891.12206895 445.56103493 445.56103493 0 0 1 0-891.12206895zM309.34835812 383.84907766a63.63659942 63.63659942 0 1 1 127.27319884 0 63.63659942 63.63659942 0 0 1-127.27319884 0z m277.03412487 0a63.63659942 63.63659942 0 1 1 127.32561788 0 63.63659942 63.63659942 0 0 1-127.32561788 0zM294.19928284 537.38416868h437.90786781c0 100.27744183-92.20492508 220.68375925-221.47004312 220.68375924-129.21269991 0-216.43782468-120.40631742-216.43782469-220.68375924z"  ></path></symbol><symbol id="icon-clear" viewBox="0 0 1084 1024"><path d="M703.63056403 429.04545609l-236.22559115 236.22559115 216.57260259 216.57260167 236.16991631-236.28126507-216.57260166-216.51692775zM93.44143455 330.66916088l275.58724403-275.58724403a55.67419058 55.67419058 0 0 1 78.72330575 0l551.17448711 551.17448804a55.67419058 55.67419058 0 0 1 0 78.72330574l-275.58724403 275.58724403a55.67419058 55.67419058 0 0 1-78.77897966 0l-551.1744871-551.17448805a55.67419058 55.67419058 0 0 1 0-78.72330573z"  ></path></symbol><symbol id="icon-font-circle" viewBox="0 0 1024 1024"><path d="M755.5328 316.7v129.1248h-59.2704v-75.6H327.1832v75.6H267.9128V316.7h212.7384a449.7192 449.7192 0 0 0-24.7968-45.864L524.096 260c7.9128 16.7328 15.7752 35.6328 22.5792 56.7h208.8072z m-398.4624 97.776h308.7504v51.912c-35.028 23.688-74.5416 46.9728-117.432 69.6528v23.184H764v54.0792H548.3888v96.1128c0 36.2376-19.7568 54.5832-58.6656 54.5832H420.272l-14.112-51.3072c19.2024 1.0584 40.6728 1.6128 63.8064 1.6128 12.3984 0 19.152-8.064 19.152-23.7888V613.304H260V559.2752h229.1184v-45.9144c37.296-18.396 67.1832-34.02 89.208-47.0232h-221.256V414.476z"  ></path><path d="M512 58.4a453.6 453.6 0 1 1 0 907.2A453.6 453.6 0 0 1 512 58.4z m0 50.4a403.2 403.2 0 1 0 0 806.4A403.2 403.2 0 0 0 512 108.8z"  ></path></symbol><symbol id="icon-arrow" viewBox="0 0 1409 1024"><path d="M794.95732236 910.90170006c-51.83375848 77.92002844-134.49674565 80.63029029-188.36320001 0L117.39185493 177.09829994C65.55809746 99.17827048 96.04854267 35.82589968 189.21379473 35.82589968h1023.12385524c91.47133765 0 125.34961168 60.64210895 71.82193981 141.27240026L794.95732236 910.90170006z"  ></path></symbol><symbol id="icon-indent" viewBox="0 0 1024 1024"><path d="M814.86968086 455.4447049V379.00135695c0-17.67476253 8.90050542-20.57847353 19.50536295-6.94365671l108.44729298 139.56749986a17.16976933 17.16976933 0 0 1 0 20.70472183l-108.44729298 137.23190626c-10.79422997 13.63481681-19.56848709 10.66798166-19.56848709-7.32240163V586.67981673h-164.37529158A12.30920962 12.30920962 0 0 1 638.24830383 574.68622786V467.56454207c0-6.6911601 6.24929104-12.11983717 12.18296131-12.11983717h164.43841572zM82.75576701 101.25508854h858.48846598c6.94365672 0 12.62483038 5.68117367 12.62483038 12.62483037v73.22401623a12.62483038 12.62483038 0 0 1-12.62483038 12.62483037H82.75576701a12.62483038 12.62483038 0 0 1-12.62483038-12.62483037V113.87991891c0-6.94365672 5.68117367-12.62483038 12.62483038-12.62483037z m0 459.54382591h479.74355452c6.94365672 0 12.62483038 5.68117367 12.62483037 12.62483038v73.22401622a12.62483038 12.62483038 0 0 1-12.62483037 12.62483037H82.75576701a12.62483038 12.62483038 0 0 1-12.62483038-12.62483037v-73.22401622c0-6.94365672 5.68117367-12.62483038 12.62483038-12.62483038z m0-196.94735397h479.74355452c6.94365672 0 12.62483038 5.68117367 12.62483037 12.62483038v73.22401622a12.62483038 12.62483038 0 0 1-12.62483037 12.62483039H82.75576701a12.62483038 12.62483038 0 0 1-12.62483038-12.62483039V376.47639086c0-6.94365672 5.68117367-12.62483038 12.62483038-12.62483038z m0 459.54382591h858.48846598c6.94365672 0 12.62483038 5.68117367 12.62483038 12.62483039v73.22401621a12.62483038 12.62483038 0 0 1-12.62483038 12.62483038H82.75576701a12.62483038 12.62483038 0 0 1-12.62483038-12.62483038v-73.22401621c0-6.94365672 5.68117367-12.62483038 12.62483038-12.62483039z"  ></path></symbol><symbol id="icon-redo" viewBox="0 0 1024 1024"><path d="M870.32819357 180.25561216L766.46923738 76.51501375c-3.9058069-3.9058069-11.95413627-4.14252246-16.74762654 0.65096782l-45.33103159 45.33103159c-4.61595361 4.61595361-5.14856364 12.36838852-0.65096782 16.80680545l97.40845692 97.40845692-96.22487907 96.16570017c-4.43841693 4.49759582-3.96498579 12.19085184 0.65096781 16.80680545l45.33103159 45.33103158c4.79349029 4.79349029 12.84181965 4.55677471 16.80680545 0.65096783l151.20207012-151.26124902c4.49759582-4.43841693 3.96498579-12.19085184-0.59178892-16.74762655l-45.3310316-45.33103159a12.01331516 12.01331516 0 0 0-2.72222905-2.07126124z"  ></path><path d="M571.17889241 947.92420458v-118.35778483H482.58809046A266.36419476 266.36419476 0 0 1 216.10553792 563.26140388C216.10553792 416.49775068 335.41018503 296.956388 482.58809046 296.956388H867.07335449V178.59860317H482.3513749A384.89951627 384.89951627 0 0 0 97.74775309 563.26140388C97.74775309 775.71362765 270.1358667 947.92420458 482.3513749 947.92420458H571.17889241z"  ></path><path d="M600.76833862 829.56641975H512v118.35778483h88.76833862a29.58944621 29.58944621 0 0 0 29.58944622-29.5894462v-59.17889242a29.58944621 29.58944621 0 0 0-29.58944622-29.58944621z"  ></path></symbol><symbol id="icon-bold" viewBox="0 0 1024 1024"><path d="M234.223432 124.71949323c0-29.0573096 23.54278369-52.6000933 53.02428759-52.6000933h17.17986919a35.34952507 35.34952507 0 0 1 35.84441842 35.70302032v812.33208611a36.12721461 36.12721461 0 0 1-35.84441842 35.70302031H287.17702055a52.8828895 52.8828895 0 0 1-53.02428759-52.67079235V124.7901923z"  ></path><path d="M259.53369196 74.24037142l8.483886-1.48468004s2.5451658 30.96618396 0 0c58.68021163-4.73683636 144.65025659-4.73683636 184.31242374-4.73683635 39.66216714 0 69.92136059 2.1209715 69.92136057 2.12097149 133.76260287 5.7973221 242.21494578 118.56230708 242.21494577 252.96120141v-13.78631478c0 133.90400097-108.87653721 242.49774197-241.29585812 242.49774198H298.84236383c-13.43281952 0-26.51214381-1.06048575-39.30867187-3.18145726V450.21792007c4.24194301 0.42419429 8.62528412 0.63629145 13.00862521 0.63629146h251.68861851c77.41545989 0 139.27712878-62.21516412 139.27712877-138.92363352a138.78223542 138.78223542 0 0 0-139.27712877-138.85293448h-251.68861851c-4.38334111 0-8.76668222 0.21209715-13.00862521 0.63629145V74.24037142z"  ></path><path d="M284.77325285 455.87384408a250.27463749 250.27463749 0 0 1 50.19632559-5.01963255h202.55277866a252.39560899 252.39560899 0 0 1 252.2542109 252.1128128v-5.79732211c0 139.27712878-113.25987833 254.58727955-252.67840519 257.4859406 0 0-41.07614813 1.20188385-70.48695301 1.20188385-29.3401058 0-177.45461586-6.50431262-172.22288613-6.5043126a180.28257787 180.28257787 0 0 1-9.61507082-0.28279621V852.70761253c8.34248791 1.41398101 16.96777203 2.1209715 25.6637552 2.1209715h226.37835855c84.83886017 0 151.93225875-67.87108813 151.93225874-151.50806445a151.29596729 151.29596729 0 0 0-152.00295779-151.50806445h-226.23696045c-8.83738127 0-17.39196634 0.7069905-25.73445425 2.1209715V455.87384408z"  ></path></symbol><symbol id="icon-code" viewBox="0 0 1024 1024"><path d="M287.86688 785.06666667H218.7264a10.92266667 10.92266667 0 0 1-9.44810667-5.46133334l-149.80437333-262.144a10.92266667 10.92266667 0 0 1 0-10.92266666l149.80437333-262.144a10.92266667 10.92266667 0 0 1 9.44810667-5.46133334h69.19509333a10.92266667 10.92266667 0 0 1 9.50272 16.384L150.67818667 512l146.69141333 256.68266667a10.92266667 10.92266667 0 0 1-9.50272 16.384z m519.64586667 0h-69.19509334a10.92266667 10.92266667 0 0 1-9.50272-16.384l146.69141334-256.68266667-146.69141334-256.68266667a10.92266667 10.92266667 0 0 1 9.50272-16.384h69.19509334a10.92266667 10.92266667 0 0 1 9.44810666 5.46133334l149.80437334 262.144a10.92266667 10.92266667 0 0 1 0 10.92266666l-149.80437334 262.144a10.92266667 10.92266667 0 0 1-9.44810666 5.46133334zM451.92533333 785.06666667H388.57386667a10.92266667 10.92266667 0 0 1-10.37653334-14.36330667l174.76266667-524.288A10.92266667 10.92266667 0 0 1 563.33653333 238.93333333h63.35146667a10.92266667 10.92266667 0 0 1 10.37653333 14.36330667l-174.76266666 524.288A10.92266667 10.92266667 0 0 1 451.92533333 785.06666667z"  ></path></symbol><symbol id="icon-undo" viewBox="0 0 1024 1024"><path d="M147.42118401 174.4687136L253.09184001 68.91848c3.97393921-3.97393921 12.1626624-4.214784 17.03976959 0.66232319l46.1217792 46.12177921c4.6964736 4.6964736 5.2383744 12.58414081 0.6623232 17.0999808L217.7478656 231.9101984 315.71148799 329.7533984c4.51584 4.57605121 4.0341504 12.4035072-0.6623232 17.09998079l-46.12177919 46.1217792c-4.8771072 4.8771072-13.0658304 4.63626239-17.0999808 0.6623232L97.9275776 239.7376544c-4.57605121-4.51584-4.0341504-12.4035072 0.602112-17.0397696l46.1217792-46.1217792a12.2228736 12.2228736 0 0 1 2.76971521-2.107392z"  ></path><path d="M451.7888 955.5284v-120.4224h90.1361664A271.0106112 271.0106112 0 0 0 813.05599999 564.15559999C813.05599999 414.831824 691.6702208 293.20519999 541.9249664 293.20519999H150.7328V172.7828h391.43301119A391.6136448 391.6136448 0 0 1 933.47839999 564.15559999c0 216.158208-175.3952256 391.37280001-391.3125888 391.37280001H451.7888z"  ></path><path d="M421.68320001 835.106H512v120.4224H421.68320001a30.1056 30.1056 0 0 1-30.10560001-30.1056v-60.21120001a30.1056 30.1056 0 0 1 30.10560001-30.10559999z"  ></path></symbol><symbol id="icon-italic" viewBox="0 0 1024 1024"><path d="M405.14074235 846.45363985l117.94486871-668.9072797H361.17535969a15.08246403 15.08246403 0 0 1-15.08246401-15.08246404V74.60854313c0-8.29535522 6.78710881-15.08246403 15.08246401-15.08246402h437.39145689c8.29535522 0 15.08246403 6.78710881 15.08246403 15.08246402v87.85535298a15.08246403 15.08246403 0 0 1-15.08246403 15.08246404h-155.65102879l-117.94486873 668.9072797h138.4570198c8.29535522 0 15.08246403 6.78710881 15.08246403 15.08246404V949.39145687a15.08246403 15.08246403 0 0 1-15.08246403 15.08246402H225.43318342a15.08246403 15.08246403 0 0 1-15.08246403-15.08246402v-87.85535298c0-8.29535522 6.78710881-15.08246403 15.08246403-15.08246404h179.70755893z"  ></path></symbol><symbol id="icon-font-space-copy" viewBox="0 0 1024 1024"><path d="M948.90666667 133.34755555m0 11.65084445l0 792.25742222q0 11.65084445-11.65084445 11.65084445l-64.07964444 0q-11.65084445 0-11.65084445-11.65084445l0-792.25742222q0-11.65084445 11.65084445-11.65084445l64.07964444 0q11.65084445 0 11.65084445 11.65084445Z"  ></path><path d="M566.99333405 283.18344306m-4.3644837 10.80247523l-198.1257125 490.37834582q-4.3644837 10.80247523-15.1669578 6.43799154l-59.41361095-24.00465693q-10.80247523-4.3644837-6.43799267-15.16695779l198.1257125-490.37834696q4.3644837-10.80247523 15.16695893-6.43799154l59.41361095 24.00465693q10.80247523 4.3644837 6.43799154 15.16695893Z"  ></path><path d="M567.17269447 250.46536989m4.36448256 10.80247523l195.31062158 483.41075058q4.3644837 10.80247523-6.43799154 15.16695779l-59.41361208 24.00465693q-10.80247523 4.3644837-15.1669578-6.43799154l-195.31062158-483.41075058q-4.3644837-10.80247523 6.43799154-15.16695779l59.41361208-24.00465693q10.80247523-4.3644837 15.1669578 6.43799154Z"  ></path><path d="M191.60177778 133.34755555m0 11.65084445l0 792.25742222q0 11.65084445-11.65084445 11.65084445l-64.07964444 0q-11.65084445 0-11.65084444-11.65084445l0-792.25742222q0-11.65084445 11.65084444-11.65084445l64.07964444 0q11.65084445 0 11.65084445 11.65084445Z"  ></path><path d="M395.49155555 512h291.27111112v58.25422222H395.49155555z"  ></path></symbol><symbol id="icon-align-left" viewBox="0 0 1024 1024"><path d="M82.75576701 95.92175521h858.48846598c6.94365672 0 12.62483038 5.68117367 12.62483038 12.62483037v73.22401623a12.62483038 12.62483038 0 0 1-12.62483038 12.62483037H82.75576701a12.62483038 12.62483038 0 0 1-12.62483038-12.62483037V108.54658558c0-6.94365672 5.68117367-12.62483038 12.62483038-12.62483037z m0 722.14029785h479.74355452c6.94365672 0 12.62483038 5.68117367 12.62483037 12.62483039v73.22401621a12.62483038 12.62483038 0 0 1-12.62483037 12.62483038H82.75576701a12.62483038 12.62483038 0 0 1-12.62483038-12.62483038v-73.22401621c0-6.94365672 5.68117367-12.62483038 12.62483038-12.62483039z m0-481.44790662h479.74355452c6.94365672 0 12.62483038 5.68117367 12.62483037 12.62483039v73.22401621a12.62483038 12.62483038 0 0 1-12.62483037 12.62483038H82.75576701a12.62483038 12.62483038 0 0 1-12.62483038-12.62483038v-73.22401621c0-6.94365672 5.68117367-12.62483038 12.62483038-12.62483039z m0 240.75551538h858.48846598c6.94365672 0 12.62483038 5.68117367 12.62483038 12.62483039v73.22401622a12.62483038 12.62483038 0 0 1-12.62483038 12.62483037H82.75576701a12.62483038 12.62483038 0 0 1-12.62483038-12.62483037v-73.22401622c0-6.94365672 5.68117367-12.62483038 12.62483038-12.62483039z"  ></path></symbol><symbol id="icon-backcolor" viewBox="0 0 1024 1024"><path d="M594.35343916 680.31309206a156.03809524 156.03809524 0 1 0 0-232.6007873V277.94285714a26.00634921 26.00634921 0 0 0-52.01269842 0v416.1015873a26.00634921 26.00634921 0 0 0 52.01269842 0v-13.73135238zM438.31534392 447.71230476a156.03809524 156.03809524 0 1 0 0 232.6007873v13.73135238a26.00634921 26.00634921 0 0 0 52.01269841 0v-260.06349206a26.00634921 26.00634921 0 0 0-52.01269841 0v13.73135238zM74.22645503 173.81343492C74.22645503 159.50994286 85.40918519 147.91111111 99.71267725 147.91111111h833.24342857c14.04342857 0 25.48622222 11.44279365 25.48622223 25.90232381v676.37313016a25.53823492 25.53823492 0 0 1-25.48622223 25.90232381H99.71267725c-14.04342857 0-25.48622222-11.44279365-25.48622222-25.90232381V173.81343492zM334.28994709 668.03809524a104.02539683 104.02539683 0 1 1 0-208.05079365 104.02539683 104.02539683 0 0 1 0 208.05079365z m364.08888889 0a104.02539683 104.02539683 0 1 1 0-208.05079365 104.02539683 104.02539683 0 0 1 0 208.05079365z"  ></path></symbol><symbol id="icon-table" viewBox="0 0 1280 1024"><path d="M760.45228597 370.17377201H526.74152192v207.74290135h233.71076405v-207.74290135z m111.29084078 0v207.74290135H1086.90541821v-207.74290135h-215.16229146z m-111.29084078 537.90572773v-218.8719856H526.74152192v218.8719856h233.71076405z m111.29084078 0H1086.90541821v-218.8719856h-215.16229146v218.8719856zM415.45068118 370.17377201H196.57869553v207.74290135h218.87198565v-207.74290135z m0 537.90572773v-218.8719856H196.57869553v218.8719856h218.87198565zM196.57869553 258.88293121h890.32672268V91.94666917H196.57869553v166.93626204zM159.48174861-19.34416986h964.52061652a74.19389384 74.19389384 0 0 1 74.19389387 74.19389386v890.32672267a74.19389384 74.19389384 0 0 1-74.19389387 74.19389387h-964.52061652a74.19389384 74.19389384 0 0 1-74.19389386-74.19389387V54.849724a74.19389384 74.19389384 0 0 1 74.19389386-74.19389386z"  ></path></symbol><symbol id="icon-underline" viewBox="0 0 1024 1024"><path d="M820.81466096 85.00731641h0.67332429v390.46075405A307.23787218 307.23787218 0 0 1 514.51944279 782.36928051a307.43986946 307.43986946 0 0 1-307.17053976-306.90121005V72.21415495c0-6.19458345 5.58859159-11.24451559 11.17718317-11.24451559H300.46965193c6.19458345 0 11.17718317 4.71327 11.17718316 11.24451559v49.62399996c0 1.34664858-0.26932972 2.69329715-0.74065671 3.90528087v348.31065368a208.86519384 208.86519384 0 0 0 208.93252628 208.46119928 208.86519384 208.86519384 0 0 0 208.93252627-208.46119928v-350.12862926a12.11983717 12.11983717 0 0 1-0.13466486-2.01997286v-49.69133239c0-6.19458345 4.91526729-11.24451559 11.31184802-11.24451559h69.55439886c6.26191588 0 11.31184802 4.71327 11.31184801 11.24451559v12.79316146zM253.33695184 863.77418681c0-7.81056174 6.05991858-14.07247761 13.33182088-14.0724776h511.99578788c7.40656716 0 13.33182088 6.59857801 13.33182088 14.0724776v72.85368787c0 7.81056174-6.05991858 14.07247761-13.33182088 14.07247759H266.66877272c-7.40656716 0-13.33182088-6.59857801-13.33182088-14.07247759V863.84151924z"  ></path></symbol><symbol id="icon-paragraph-top" viewBox="0 0 1024 1024"><path d="M75.94236649 824.50729227h872.11526702a12.82522451 12.82522451 0 0 1 12.82522452 12.8252245v68.61495118a12.82522451 12.82522451 0 0 1-12.82522452 12.8252245H75.94236649a12.82522451 12.82522451 0 0 1-12.82522452-12.8252245v-68.61495118a12.82522451 12.82522451 0 0 1 12.82522452-12.8252245z m0-461.13094744h872.11526702c7.05387349 0 12.82522451 5.77135103 12.82522452 12.8252245v68.61495116a12.82522451 12.82522451 0 0 1-12.82522452 12.82522452H75.94236649a12.82522451 12.82522451 0 0 1-12.82522452-12.82522452V376.26569546c0-7.05387349 5.77135103-12.82522451 12.82522452-12.82522452z m0 230.53341065h872.11526702c7.05387349 0 12.82522451 5.77135103 12.82522452 12.82522452v68.61495115a12.82522451 12.82522451 0 0 1-12.82522452 12.82522451H75.94236649a12.82522451 12.82522451 0 0 1-12.82522452-12.82522451v-68.61495115c0-7.05387349 5.77135103-12.82522451 12.82522452-12.82522452z m418.23057144-497.74696343c9.81129676-14.42837758 26.29171025-13.85124247 35.65412414 0l92.59812101 136.20388435c9.81129676 14.4925037 4.03994572 26.22758413-13.594738 26.22758413H415.16955492c-17.3140531 0-23.02127801-12.37634166-13.594738-26.29171024l92.59812101-136.13975824z"  ></path></symbol><symbol id="icon-quote" viewBox="0 0 1024 1024"><path d="M922.5238782 433.35204056c9.14668961 10.40601645 11.26766112 25.58421877 4.17566264 37.77980491l-203.94466619 353.27431617a32.47737616 32.47737616 0 0 1-45.26948553 11.33394148 33.14017975 33.14017975 0 0 1-12.79210939-44.87180339l121.55817934-210.6389825c-17.49801491 5.16986804-36.12279593 7.95364315-55.27781985 7.95364313h-4.63962515a195.9247427 195.9247427 0 0 1-195.85846234-195.52706053V378.40562253C530.47555173 270.36863654 618.4295888 182.87856198 726.20145335 182.87856198H730.84107852a195.9247427 195.9247427 0 0 1 195.85846232 195.52706055v14.2502773c0 13.9188755-1.45816791 27.57262956-4.241943 40.69614073z m-474.43481334 35.59255305a33.07389939 33.07389939 0 0 1-2.98261617 26.44586345l-188.30250136 326.16564914a32.94133868 32.94133868 0 0 1-45.73344806 12.06302542 33.33902083 33.33902083 0 0 1-12.39442723-45.60088734l119.30464711-206.66216094A198.24455529 198.24455529 0 0 1 68.03748346 390.26980689v-9.47809141a198.17827493 198.17827493 0 0 1 396.35654983 0v9.47809141c0 27.97031171-5.83267163 54.54873587-16.30496843 78.67478672z"  ></path></symbol><symbol id="icon-fontcolor" viewBox="0 0 1024 1024"><path d="M397.85888528 64.17590055l-0.57457007-0.79003384h222.64589758l-0.14364251 0.21546377a14.36425146 14.36425146 0 0 1 10.91683111 9.19312092l302.1520294 830.11009171a14.36425146 14.36425146 0 0 1-8.61855088 18.38624187l-76.41781775 27.79482656a14.36425146 14.36425146 0 0 1-18.38624186-8.61855087l-118.72053829-326.06850808H309.08781128l-118.72053829 326.2121506a14.36425146 14.36425146 0 0 1-18.38624189 8.61855086l-76.41781774-27.86664781a14.36425146 14.36425146 0 0 1-8.61855088-18.38624187L389.09669188 72.7944514a14.36425146 14.36425146 0 0 1 8.7621934-8.61855085z m71.82125727 108.95284729l-120.51606972 331.0959961h321.47194762l-120.2287847-330.37778353-0.3591063 0.50274881H470.47017638l-0.71821257-1.22096138z"  ></path></symbol><symbol id="icon-horizontal" viewBox="0 0 1024 1024"><path d="M77.03514075 512m12.4275674 0l845.0745837 0q12.42756741 0 12.4275674 12.42756741l0 99.42053926q0 12.42756741-12.4275674 12.42756741l-845.0745837 0q-12.42756741 0-12.4275674-12.42756741l0-99.42053926q0-12.42756741 12.4275674-12.42756741Z"  ></path></symbol><symbol id="icon-align" viewBox="0 0 1024 1024"><path d="M89.46270815 139.17297778h845.0745837c6.83516208 0 12.42756741 5.59240533 12.4275674 12.4275674v72.07989097a12.42756741 12.42756741 0 0 1-12.4275674 12.4275674H89.46270815a12.42756741 12.42756741 0 0 1-12.4275674-12.4275674V151.60054518c0-6.83516208 5.59240533-12.42756741 12.4275674-12.4275674z m0 710.8568557h845.0745837c6.83516208 0 12.42756741 5.59240533 12.4275674 12.42756741v72.07989096a12.42756741 12.42756741 0 0 1-12.4275674 12.4275674H89.46270815a12.42756741 12.42756741 0 0 1-12.4275674-12.4275674v-72.07989096c0-6.83516208 5.59240533-12.42756741 12.4275674-12.42756741z m0-473.92528308h845.0745837c6.83516208 0 12.42756741 5.59240533 12.4275674 12.42756741v72.07989096a12.42756741 12.42756741 0 0 1-12.4275674 12.42756741H89.46270815a12.42756741 12.42756741 0 0 1-12.4275674-12.42756741v-72.07989096c0-6.83516208 5.59240533-12.42756741 12.4275674-12.42756741z m0 236.99371045h845.0745837c6.83516208 0 12.42756741 5.59240533 12.4275674 12.42756742v72.07989096a12.42756741 12.42756741 0 0 1-12.4275674 12.4275674H89.46270815a12.42756741 12.42756741 0 0 1-12.4275674-12.4275674v-72.07989096c0-6.83516208 5.59240533-12.42756741 12.4275674-12.42756742z"  ></path></symbol><symbol id="icon-align-center" viewBox="0 0 1024 1024"><path d="M89.46270815 139.17297778h845.0745837c6.83516208 0 12.42756741 5.59240533 12.4275674 12.4275674v72.07989097a12.42756741 12.42756741 0 0 1-12.4275674 12.4275674H89.46270815a12.42756741 12.42756741 0 0 1-12.4275674-12.4275674V151.60054518c0-6.83516208 5.59240533-12.42756741 12.4275674-12.4275674z m186.4135111 710.8568557h472.2475615c6.83516208 0 12.42756741 5.59240533 12.4275674 12.42756741v72.07989096a12.42756741 12.42756741 0 0 1-12.4275674 12.4275674H275.87621925a12.42756741 12.42756741 0 0 1-12.4275674-12.4275674v-72.07989096c0-6.83516208 5.59240533-12.42756741 12.4275674-12.42756741z m0-473.92528308h472.2475615c6.83516208 0 12.42756741 5.59240533 12.4275674 12.42756741v72.07989096a12.42756741 12.42756741 0 0 1-12.4275674 12.42756741H275.87621925a12.42756741 12.42756741 0 0 1-12.4275674-12.42756741v-72.07989096c0-6.83516208 5.59240533-12.42756741 12.4275674-12.42756741z m-186.4135111 236.99371045h845.0745837c6.83516208 0 12.42756741 5.59240533 12.4275674 12.42756742v72.07989096a12.42756741 12.42756741 0 0 1-12.4275674 12.4275674H89.46270815a12.42756741 12.42756741 0 0 1-12.4275674-12.4275674v-72.07989096c0-6.83516208 5.59240533-12.42756741 12.4275674-12.42756742z"  ></path></symbol><symbol id="icon-align-right" viewBox="0 0 1024 1024"><path d="M89.46270815 139.17297778h845.0745837c6.83516208 0 12.42756741 5.59240533 12.4275674 12.4275674v72.07989097a12.42756741 12.42756741 0 0 1-12.4275674 12.4275674H89.46270815a12.42756741 12.42756741 0 0 1-12.4275674-12.4275674V151.60054518c0-6.83516208 5.59240533-12.42756741 12.4275674-12.4275674z m372.82702222 710.8568557h472.24756148c6.83516208 0 12.42756741 5.59240533 12.4275674 12.42756741v72.07989096a12.42756741 12.42756741 0 0 1-12.4275674 12.4275674H462.28973037a12.42756741 12.42756741 0 0 1-12.4275674-12.4275674v-72.07989096c0-6.83516208 5.59240533-12.42756741 12.4275674-12.42756741z m0-473.92528308h472.24756148c6.83516208 0 12.42756741 5.59240533 12.4275674 12.42756741v72.07989096a12.42756741 12.42756741 0 0 1-12.4275674 12.42756741H462.28973037a12.42756741 12.42756741 0 0 1-12.4275674-12.42756741v-72.07989096c0-6.83516208 5.59240533-12.42756741 12.4275674-12.42756741z m-372.82702222 236.99371045h845.0745837c6.83516208 0 12.42756741 5.59240533 12.4275674 12.42756742v72.07989096a12.42756741 12.42756741 0 0 1-12.4275674 12.4275674H89.46270815a12.42756741 12.42756741 0 0 1-12.4275674-12.4275674v-72.07989096c0-6.83516208 5.59240533-12.42756741 12.4275674-12.42756742z"  ></path></symbol><symbol id="icon-line-space" viewBox="0 0 1024 1024"><path d="M192.36296628 359.94871277a17.70928355 17.70928355 0 0 1 20.50548622 0l135.27407123 101.96819058c13.9188755 10.5634323 11.2469485 19.01417813-5.34385398 19.01417813h-283.09998554c-16.83935383 0-19.13845381-8.45074583-5.65454318-18.4549376l138.31882525-102.52743111z m17.89569707 366.2404115a17.70928355 17.70928355 0 0 1-20.50548623 0l-135.27407122-101.96819058c-13.9188755-10.5634323-11.2469485-19.01417813 5.34385398-19.01417814h283.09998554c16.83935383 0 19.13845381 8.45074583 5.65454317 18.4549376l-138.31882524 102.52743112z"  ></path><path d="M77.03514075 139.17297778m12.4275674 0l845.0745837 0q12.42756741 0 12.4275674 12.4275674l0 68.35162074q0 12.42756741-12.4275674 12.42756741l-845.0745837 0q-12.42756741 0-12.4275674-12.42756741l0-68.35162074q0-12.42756741 12.4275674-12.4275674Z"  ></path><path d="M449.86216297 574.13783703m12.4275674 0l472.24756148 0q12.42756741 0 12.4275674 12.42756742l0 68.35162073q0 12.42756741-12.4275674 12.42756741l-472.24756148 0q-12.42756741 0-12.4275674-12.42756741l0-68.35162073q0-12.42756741 12.4275674-12.42756742Z"  ></path><path d="M449.86216297 387.72432592m12.4275674 0l472.24756148 0q12.42756741 0 12.4275674 12.42756741l0 68.35162075q0 12.42756741-12.4275674 12.4275674l-472.24756148 0q-12.42756741 0-12.4275674-12.4275674l0-68.35162075q0-12.42756741 12.4275674-12.42756741Z"  ></path><path d="M77.03514075 822.68918518m12.4275674 0l845.0745837 0q12.42756741 0 12.4275674 12.42756741l0 68.35162074q0 12.42756741-12.4275674 12.42756742l-845.0745837 0q-12.42756741 0-12.4275674-12.42756742l0-68.35162074q0-12.42756741 12.4275674-12.42756741Z"  ></path></symbol><symbol id="icon-list" viewBox="0 0 1024 1024"><path d="M291.82558815 114.31784297m13.25607191 0l636.29145125 0q13.2560719 0 13.25607189 13.25607189l0 72.90839545q0 13.2560719-13.25607189 13.25607191l-636.29145125 0q-13.2560719 0-13.25607191-13.25607191l0-72.90839545q0-13.2560719 13.25607191-13.25607189Z"  ></path><path d="M291.82558815 445.7196405m13.25607191 0l636.29145125 0q13.2560719 0 13.25607189 13.25607189l0 72.90839546q0 13.2560719-13.25607189 13.2560719l-636.29145125 0q-13.2560719 0-13.25607191-13.2560719l0-72.90839546q0-13.2560719 13.25607191-13.25607189Z"  ></path><path d="M291.82558815 777.12143803m13.25607191 0l636.29145125 0q13.2560719 0 13.25607189 13.25607189l0 72.90839547q0 13.2560719-13.25607189 13.25607189l-636.29145125 0q-13.2560719 0-13.25607191-13.25607189l0-72.90839547q0-13.2560719 13.25607191-13.25607189Z"  ></path><path d="M142.69477926 164.02811259m-66.2803595 0a66.2803595 66.2803595 0 1 0 132.56071901 0 66.2803595 66.2803595 0 1 0-132.56071901 0Z"  ></path><path d="M142.69477926 495.42991013m-66.2803595 0a66.2803595 66.2803595 0 1 0 132.56071901 0 66.2803595 66.2803595 0 1 0-132.56071901 0Z"  ></path><path d="M142.69477926 826.83170765m-66.2803595 0a66.2803595 66.2803595 0 1 0 132.56071901 0 66.2803595 66.2803595 0 1 0-132.56071901 0Z"  ></path></symbol><symbol id="icon-format" viewBox="0 0 1024 1024"><path d="M497.21947984 355.82558814V123.18152628c0-17.89569707 14.71423981-32.47737616 33.27274046-32.47737615h70.91998468c18.35965957 0 33.27274047 14.2502773 33.27274046 32.47737615V355.82558814H876.54197728c18.29337922 0 33.14017975 15.3770434 33.14017975 33.14017976V422.10594764H222.22226825v-33.14017974c0-18.29337922 14.38283801-33.14017975 33.14017974-33.14017976h241.85703185zM222.22226825 488.38630716H909.68215703v463.96251653h-105.91601449c-36.45419773 0-71.51650791-29.36219926-79.13874924-65.08731303 0 0-21.20971504-133.75376549-55.54294127-133.75376548 0 132.56071902-31.94713328 144.35862301-31.94713329 144.35862301-20.34807037 30.09128322-66.01523807 54.48245552-103.13223938 54.4824555H151.10344249c-36.65303881 0-48.38466243-22.80044368-26.57842416-52.361484 0 0 97.69724991-113.33941475 97.69724992-212.75995401V488.38630716z"  ></path></symbol><symbol id="icon-paragraph-bottom" viewBox="0 0 1024 1024"><path d="M77.03514075 590.76456298m12.4275674 0l845.0745837 0q12.42756741 0 12.4275674 12.4275674l0 68.35162073q0 12.42756741-12.4275674 12.42756742l-845.0745837 0q-12.42756741 0-12.4275674-12.42756742l0-68.35162073q0-12.42756741 12.4275674-12.4275674Z"  ></path><path d="M77.03514075 93.66186668m12.4275674 0l845.0745837 0q12.42756741 0 12.4275674 12.4275674l0 68.35162074q0 12.42756741-12.4275674 12.42756741l-845.0745837 0q-12.42756741 0-12.4275674-12.42756741l0-68.35162074q0-12.42756741 12.4275674-12.4275674Z"  ></path><path d="M77.03514075 342.21321482m12.4275674 0l845.0745837 0q12.42756741 0 12.4275674 12.42756741l0 68.35162075q0 12.42756741-12.4275674 12.4275674l-845.0745837 0q-12.42756741 0-12.4275674-12.4275674l0-68.35162075q0-12.42756741 12.4275674-12.42756741Z"  ></path><path d="M529.2743187 937.68010715c-9.50708907 14.29170252-24.6687213 14.78880522-34.5486374 0l-89.72703668-134.59055502c-9.50708907-14.29170252-3.91468373-25.91147805 13.17322146-25.91147805h187.65626784c16.777216 0 22.9909997 11.12267283 13.17322146 25.91147805l-89.72703668 134.59055502z"  ></path></symbol><symbol id="icon-font-space" viewBox="0 0 1024 1024"><path d="M948.90666667 133.34755555m0 11.65084445l0 792.25742222q0 11.65084445-11.65084445 11.65084445l-64.07964444 0q-11.65084445 0-11.65084445-11.65084445l0-792.25742222q0-11.65084445 11.65084445-11.65084445l64.07964444 0q11.65084445 0 11.65084445 11.65084445Z"  ></path><path d="M566.99333405 283.18344306m-4.3644837 10.80247523l-198.1257125 490.37834582q-4.3644837 10.80247523-15.1669578 6.43799154l-59.41361095-24.00465693q-10.80247523-4.3644837-6.43799267-15.16695779l198.1257125-490.37834696q4.3644837-10.80247523 15.16695893-6.43799154l59.41361095 24.00465693q10.80247523 4.3644837 6.43799154 15.16695893Z"  ></path><path d="M567.17269447 250.46536989m4.36448256 10.80247523l195.31062158 483.41075058q4.3644837 10.80247523-6.43799154 15.16695779l-59.41361208 24.00465693q-10.80247523 4.3644837-15.1669578-6.43799154l-195.31062158-483.41075058q-4.3644837-10.80247523 6.43799154-15.16695779l59.41361208-24.00465693q10.80247523-4.3644837 15.1669578 6.43799154Z"  ></path><path d="M191.60177778 133.34755555m0 11.65084445l0 792.25742222q0 11.65084445-11.65084445 11.65084445l-64.07964444 0q-11.65084445 0-11.65084444-11.65084445l0-792.25742222q0-11.65084445 11.65084444-11.65084445l64.07964444 0q11.65084445 0 11.65084445 11.65084445Z"  ></path><path d="M395.49155555 512h291.27111112v58.25422222H395.49155555z"  ></path></symbol><symbol id="icon-strikethrough" viewBox="0 0 1338 1024"><path d="M932.29526392 653.63100503h173.24130582c6.67056374 27.84235141 10.15085829 59.0683256 10.15085829 93.87126612 0.09667429 222.6421446-182.32873933 351.50970236-450.4080592 351.50969983-154.09968825 0-296.59839385-47.9507194-427.49612177-144.04550428a19.33496613 19.33496613 0 0 1-4.83373965-26.10220662l60.71179606-94.64466297a19.33496613 19.33496613 0 0 1 26.10220416-6.18718977c140.46853545 83.81708214 254.931541 125.67728606 343.19566563 125.67728607 182.42541368 0 295.14827192-67.96240806 295.14827198-203.79055242 0-38.66993478-8.31403672-70.76598008-25.81218132-96.28813596z m-657.38887831-290.02450693a360.59713587 360.59713587 0 0 1-15.08127471-108.08246473c0-210.94449015 171.30780743-337.39517552 407.77445599-337.39517552 124.90388674 0 252.0312947 37.89653542 381.18887527 113.59293192a19.33496613 19.33496613 0 0 1 6.38053835 27.35897747l-56.94147863 86.33062879a19.33496613 19.33496613 0 0 1-25.13545623 6.47721264c-116.20315284-60.51844749-218.87182716-90.87434557-307.81267682-90.87434304-162.12369961 0-247.87427763 72.79615024-247.87427764 189.77269989 0 46.88729467 12.27770522 84.68715576 40.31340774 112.81953258h-182.71543902z"  ></path><path d="M90.83749901 436.11262547m19.33496612 0l1121.42809037 0q19.33496613 0 19.33496611 19.33496612l0 106.34231995q0 19.33496613-19.33496611 19.33496613l-1121.42809037 0q-19.33496613 0-19.33496612-19.33496613l0-106.34231995q0-19.33496613 19.33496612-19.33496612Z"  ></path></symbol><symbol id="icon-justifyindent" viewBox="0 0 1024 1024"><path d="M89.46270815 96.50631112h845.0745837c6.83516208 0 12.42756741 5.59240533 12.4275674 12.4275674v72.07989097a12.42756741 12.42756741 0 0 1-12.4275674 12.4275674H89.46270815a12.42756741 12.42756741 0 0 1-12.4275674-12.4275674V108.93387852c0-6.83516208 5.59240533-12.42756741 12.4275674-12.4275674z m186.4135111 473.92528307h472.2475615c6.83516208 0 12.42756741 5.59240533 12.4275674 12.42756742v72.07989096a12.42756741 12.42756741 0 0 1-12.4275674 12.4275674H275.87621925a12.42756741 12.42756741 0 0 1-12.4275674-12.4275674v-72.07989096c0-6.83516208 5.59240533-12.42756741 12.4275674-12.42756742z m0-236.99371045h472.2475615c6.83516208 0 12.42756741 5.59240533 12.4275674 12.42756741v72.07989096a12.42756741 12.42756741 0 0 1-12.4275674 12.42756741H275.87621925a12.42756741 12.42756741 0 0 1-12.4275674-12.42756741v-72.07989096c0-6.83516208 5.59240533-12.42756741 12.4275674-12.42756741z m-186.4135111 473.92528308h845.0745837c6.83516208 0 12.42756741 5.59240533 12.4275674 12.42756741v72.07989096a12.42756741 12.42756741 0 0 1-12.4275674 12.4275674H89.46270815a12.42756741 12.42756741 0 0 1-12.4275674-12.4275674v-72.07989096c0-6.83516208 5.59240533-12.42756741 12.4275674-12.42756741z m96.87288794-328.08777956a28.5212672 28.5212672 0 0 1 0 42.12945351l-88.85710697 82.14622057c-12.55184308 11.61977552-22.74244835 7.70509179-22.74244835-9.38281339v-187.65626786c0-16.777216 10.5634323-20.69189973 22.8045862-9.32067555l88.79496912 82.02194489z m643.12661333 0l88.79496913-82.14622055c12.2411539-11.30908635 22.74244835-7.45654045 22.74244835 9.44495122v187.59413002c0 17.08790518-10.19060528 21.00258892-22.74244835 9.32067556l-88.85710697-82.02194489a28.5212672 28.5212672 0 0 1 0-42.25372919z"  ></path></symbol><symbol id="icon-float-right" viewBox="0 0 1024 1024"><path d="M77.03514075 117.83964445m12.4275674 0l845.0745837 0q12.42756741 0 12.4275674 12.4275674l0 68.35162074q0 12.42756741-12.4275674 12.42756741l-845.0745837 0q-12.42756741 0-12.4275674-12.42756741l0-68.35162074q0-12.42756741 12.4275674-12.4275674Z"  ></path><path d="M77.03514075 801.35585185m12.4275674 0l845.0745837 0q12.42756741 0 12.4275674 12.42756741l0 68.35162074q0 12.42756741-12.4275674 12.42756742l-845.0745837 0q-12.42756741 0-12.4275674-12.42756742l0-68.35162074q0-12.42756741 12.4275674-12.42756741Z"  ></path><path d="M586.56540445 304.25315556h347.9718874c6.83516208 0 12.42756741 5.59240533 12.4275674 12.42756741v410.10972445a12.42756741 12.42756741 0 0 1-12.4275674 12.4275674h-347.9718874a12.42756741 12.42756741 0 0 1-12.42756742-12.4275674v-410.10972445c0-6.83516208 5.59240533-12.42756741 12.42756742-12.42756741z"  ></path><path d="M77.03514075 552.8045037m12.4275674 0l410.10972444 0q12.42756741 0 12.42756741 12.42756742l0 68.35162073q0 12.42756741-12.42756741 12.42756741l-410.10972444 0q-12.42756741 0-12.4275674-12.42756741l0-68.35162073q0-12.42756741 12.4275674-12.42756742Z"  ></path><path d="M77.03514075 366.39099259m12.4275674 0l410.10972444 0q12.42756741 0 12.42756741 12.42756741l0 68.35162075q0 12.42756741-12.42756741 12.4275674l-410.10972444 0q-12.42756741 0-12.4275674-12.4275674l0-68.35162075q0-12.42756741 12.4275674-12.42756741Z"  ></path></symbol><symbol id="icon-link" viewBox="0 0 1024 1024"><path d="M751.322762 432.24195274l-71.013348-41.007708 40.952142-70.95778199a113.91029999 113.91029999 0 1 0-197.314866-113.9103L412.53686 399.34688075a113.965866 113.965866 0 0 0 20.448288 139.804056l-41.285538 71.45787599a194.481 194.481 0 0 1-48.12015599-250.047l112.57671599-195.03666a194.481 194.481 0 1 1 336.841092 194.48100001l-41.6745 72.23579999z"  ></path><path d="M218.278124 577.60260874l71.013348 41.007708-40.28535 69.73533001a113.91029999 113.91029999 0 0 0 197.314866 113.91029999l110.57633999-191.42486999a113.965866 113.965866 0 0 0-20.44828799-139.804056l41.285538-71.513442a194.481 194.481 0 0 1 48.120156 250.047l-112.410018 194.70326399a194.481 194.481 0 0 1-336.841092-194.481l41.6745-72.180234z"  ></path></symbol><symbol id="icon-float-left" viewBox="0 0 1024 1024"><path d="M77.03514075 139.17297778m12.4275674 0l845.0745837 0q12.42756741 0 12.4275674 12.4275674l0 68.35162074q0 12.42756741-12.4275674 12.42756741l-845.0745837 0q-12.42756741 0-12.4275674-12.42756741l0-68.35162074q0-12.42756741 12.4275674-12.4275674Z"  ></path><path d="M77.03514075 822.68918518m12.4275674 0l845.0745837 0q12.42756741 0 12.4275674 12.42756741l0 68.35162074q0 12.42756741-12.4275674 12.42756742l-845.0745837 0q-12.42756741 0-12.4275674-12.42756742l0-68.35162074q0-12.42756741 12.4275674-12.42756741Z"  ></path><path d="M89.46270815 325.58648889h347.9718874c6.83516208 0 12.42756741 5.59240533 12.42756742 12.42756741v410.10972445a12.42756741 12.42756741 0 0 1-12.42756742 12.4275674h-347.9718874a12.42756741 12.42756741 0 0 1-12.4275674-12.4275674v-410.10972445c0-6.83516208 5.59240533-12.42756741 12.4275674-12.42756741z"  ></path><path d="M512 574.13783703m12.42756741 0l410.10972444 0q12.42756741 0 12.4275674 12.42756742l0 68.35162073q0 12.42756741-12.4275674 12.42756741l-410.10972444 0q-12.42756741 0-12.42756741-12.42756741l0-68.35162073q0-12.42756741 12.42756741-12.42756742Z"  ></path><path d="M512 387.72432592m12.42756741 0l410.10972444 0q12.42756741 0 12.4275674 12.42756741l0 68.35162075q0 12.42756741-12.4275674 12.4275674l-410.10972444 0q-12.42756741 0-12.42756741-12.4275674l0-68.35162075q0-12.42756741 12.42756741-12.42756741Z"  ></path></symbol><symbol id="icon-unlink" viewBox="0 0 1024 1024"><path d="M627.38670392 695.36209947l-94.14991915 163.11182223a193.62593862 193.62593862 0 0 1-335.43335958-193.68141884l44.49512974-77.11749418 70.73726984 40.83343576-42.22044106 73.17839916a113.45703281 113.45703281 0 1 0 196.45542942 113.40155259l85.10664466-147.41092233 75.00924613 27.74010582z m-216.92762751-404.95006476l72.12427513-124.83047619a193.62593862 193.62593862 0 1 1 335.37787936 193.62593862l-44.49512973 77.11749418-70.73726984-40.83343576 42.94168381-74.39896381a113.45703281 113.45703281 0 1 0-196.45542942-113.45703281l-70.51534899 122.16742603-68.24066032-39.39095026z"  ></path></symbol><symbol id="icon-float-default" viewBox="0 0 1024 1024"><path d="M77.03514075 117.83964445m12.4275674 0l845.0745837 0q12.42756741 0 12.4275674 12.4275674l0 68.35162074q0 12.42756741-12.4275674 12.42756741l-845.0745837 0q-12.42756741 0-12.4275674-12.42756741l0-68.35162074q0-12.42756741 12.4275674-12.4275674Z"  ></path><path d="M77.03514075 801.35585185m12.4275674 0l845.0745837 0q12.42756741 0 12.4275674 12.42756741l0 68.35162074q0 12.42756741-12.4275674 12.42756742l-845.0745837 0q-12.42756741 0-12.4275674-12.42756742l0-68.35162074q0-12.42756741 12.4275674-12.42756741Z"  ></path><path d="M89.46270815 304.25315556h410.10972444c6.83516208 0 12.42756741 5.59240533 12.42756741 12.42756741v410.10972445a12.42756741 12.42756741 0 0 1-12.42756741 12.4275674h-410.10972444a12.42756741 12.42756741 0 0 1-12.4275674-12.4275674v-410.10972445c0-6.83516208 5.59240533-12.42756741 12.4275674-12.42756741z"  ></path></symbol><symbol id="icon-float-center" viewBox="0 0 1024 1024"><path d="M70.13093663 122.41910971m12.62483038 0l858.48846598 0q12.62483038 0 12.62483038 12.62483037l0 69.4365671q0 12.62483038-12.62483038 12.62483039l-858.48846598 0q-12.62483038 0-12.62483038-12.62483039l0-69.4365671q0-12.62483038 12.62483038-12.62483037Z"  ></path><path d="M70.13093663 816.78478072m12.62483038 0l858.48846598 0q12.62483038 0 12.62483038 12.62483038l0 69.4365671q0 12.62483038-12.62483038 12.6248304l-858.48846598 0q-12.62483038 0-12.62483038-12.6248304l0-69.4365671q0-12.62483038 12.62483038-12.62483038Z"  ></path><path d="M259.50339236 551.6633427v-227.24694688c0-6.94365672 5.68117367-12.62483038 12.62483037-12.62483038h479.74355454c6.94365672 0 12.62483038 5.68117367 12.62483037 12.62483038v227.24694688a12.62483038 12.62483038 0 0 1-12.62483037 12.62483037h-479.74355454a12.62483038 12.62483038 0 0 1-12.62483037-12.62483037z"  ></path><path d="M70.13093663 627.412325m12.62483038 0l858.48846598 0q12.62483038 0 12.62483038 12.62483037l0 69.4365671q0 12.62483038-12.62483038 12.62483039l-858.48846598 0q-12.62483038 0-12.62483038-12.62483039l0-69.4365671q0-12.62483038 12.62483038-12.62483037Z"  ></path></symbol></svg>');});const qe=[Ce,ze,Se,_e,$e,Le,Me,Ae];let Be=class extends he{constructor(){super(...arguments),this.plugins=[];}static get styles(){return ae`${ie("* {\n  box-sizing: border-box;\n  -webkit-tap-highlight-color: transparent; }\n  *::selection {\n    background-color: var(--iu-main-color, #2ed573);\n    color: var(--iu-white-color, #ffffff); }\n\nbody {\n  padding: 0;\n  margin: 0; }\n\na {\n  color: var(--iu-main-color, #2ed573); }\n\n.hide,\n.hidden,\n[hide],\n[hidden] {\n  display: none; }\n\n.main-text {\n  color: var(--iu-main-color, #2ed573); }\n\n.main-bg {\n  background-color: var(--iu-main-color, #2ed573); }\n\n.mainLight-text {\n  color: var(--iu-mainLight-color, #f2fff8); }\n\n.mainLight-bg {\n  background-color: var(--iu-mainLight-color, #f2fff8); }\n\n.white-text {\n  color: var(--iu-white-color, #ffffff); }\n\n.white-bg {\n  background-color: var(--iu-white-color, #ffffff); }\n\n.dark-text {\n  color: var(--iu-dark-color, #2f3542); }\n\n.dark-bg {\n  background-color: var(--iu-dark-color, #2f3542); }\n\n.light-text {\n  color: var(--iu-light-color, #f5f5f5); }\n\n.light-bg {\n  background-color: var(--iu-light-color, #f5f5f5); }\n\n.light-grey-text {\n  color: var(--iu-light-grey-color, #dddddd); }\n\n.light-grey-bg {\n  background-color: var(--iu-light-grey-color, #dddddd); }\n\n.grey-text {\n  color: var(--iu-grey-color, #a4b0be); }\n\n.grey-bg {\n  background-color: var(--iu-grey-color, #a4b0be); }\n\n.success-text {\n  color: var(--iu-success-color, #2ed573); }\n\n.success-bg {\n  background-color: var(--iu-success-color, #2ed573); }\n\n.info-text {\n  color: var(--iu-info-color, #1e90ff); }\n\n.info-bg {\n  background-color: var(--iu-info-color, #1e90ff); }\n\n.warn-text {\n  color: var(--iu-warn-color, #ffa502); }\n\n.warn-bg {\n  background-color: var(--iu-warn-color, #ffa502); }\n\n.error-text {\n  color: var(--iu-error-color, #ff4757); }\n\n.error-bg {\n  background-color: var(--iu-error-color, #ff4757); }\n\n:host {\n  background-color: #fff;\n  display: flex;\n  flex-direction: column;\n  min-height: 20em;\n  padding: 1em;\n  font-size: 1em; }\n\n.editor-header {\n  height: fit-content; }\n  .editor-header .active {\n    color: var(--iu-success-color, #2ed573); }\n\n.editor-content {\n  flex: auto;\n  padding-top: 1em; }\n  .editor-content:focus {\n    outline: none; }\n\n.editor-plugin-view {\n  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);\n  padding: .5em;\n  border-radius: .2em;\n  background-color: #fff; }\n  .editor-plugin-view [data-listkey] {\n    cursor: pointer; }\n    .editor-plugin-view [data-listkey]:hover {\n      color: var(--iu-success-color, #2ed573); }\n  .editor-plugin-view .heading h1,\n  .editor-plugin-view .heading h2,\n  .editor-plugin-view .heading h3,\n  .editor-plugin-view .heading h4,\n  .editor-plugin-view .heading h5,\n  .editor-plugin-view .heading h6 {\n    margin: 0; }\n")}`}connectedCallback(){super.connectedCallback();}disconnectedCallback(){super.disconnectedCallback();}attributeChangedCallback(e,n,t){super.attributeChangedCallback(e,n,t);}shouldUpdate(e){return !0}updated(e){super.updated(e);}firstUpdated(e){super.firstUpdated(e);}execCommand(e,n){this.editorContent.focus(),e.exec(n),this.checkPluginStatus();}getPlugins(){return qe.map((e,n)=>{let t={};t.plugin=e,t.id=n+1,this.plugins.push(t);let o=N`<iu-button data-plugin="${t.id}" type="text" shape="plain" 
                    @click="${this.execCommand.bind(this,e)}"
                >
                    <iu-editor-icon name="${e.icon}"></iu-editor-icon>
                </iu-button>`;return e.list?N`<iu-direction trigger="hover" placement="bottom">
                        ${o}
                        <div class="editor-plugin-view" slot="content" @click="${this.execCommand.bind(this,e)}">
                            ${e.list}
                        </div>
                </iu-direction>`:e.icon?o:void 0})}onInput(e){xe.formatBlock.value()||xe.formatBlock.exec("<p>");}onKeyUp(e){if(this.renderRoot instanceof ShadowRoot){let e=this.renderRoot.getSelection(),n=e.anchorNode,t=e.anchorNode;if(1!=e.anchorNode.nodeType&&(t=e.anchorNode.parentElement),this.editorContent.contains(t)){"blockquote"==t.nodeName.toLowerCase()&&(t.previousElementSibling&&"blockquote"==t.previousElementSibling.nodeName.toLowerCase()?(t.previousElementSibling.append(document.createElement("br")),Array.from(t.childNodes).map(e=>{t.previousElementSibling.append(e);}),t.remove(),n.textContent&&e.setPosition(e.anchorNode,0)):console.log("no move"));}}this.checkPluginStatus();}onMouseUp(e){this.checkPluginStatus();}onContentClick(e){this.checkPluginStatus();}checkPluginStatus(){this.plugins.map(e=>{if(e.dom=e.dom||this.renderRoot.querySelector(`.editor-header [data-plugin="${e.id}"]`),e.plugin.state){e.plugin.state()?e.dom.classList.add("active"):e.dom.classList.remove("active");}});}render(){return N`
        <div class="editor-header">
            ${this.getPlugins()}
        </div>
        <div class="editor-content" contentEditable 
            @keyup="${this.onKeyUp}"
            @input="${this.onInput}"
            @mouseup="${this.onMouseUp}"
            @click="${this.onContentClick}"
        >wangEditor基于javascript和css开发的 Web富文本编辑器, 轻量、简洁、易用、开源免费 demo 文档 下载 github 欢迎使用wangEditor 富文本编辑器,请输入内容...</div>
        <div class="white-bg">
        <br>
        </div>
        `}};e([Q(".editor-content"),n("design:type",HTMLElement)],Be.prototype,"editorContent",void 0),Be=e([fe("iu-editor")],Be);let Ee=class extends he{constructor(){super(),this.type="response",this.src&&this.process();}static get styles(){return ae`${ie("")}`}connectedCallback(){super.connectedCallback();}disconnectedCallback(){super.disconnectedCallback();}attributeChangedCallback(e,n,t){super.attributeChangedCallback(e,n,t),"src"==e&&n!=t&&t&&this.process();}updated(e){super.updated(e);}firstUpdated(e){super.firstUpdated(e);}process(){let e=this.type.toLowerCase();["image","js","css"].indexOf(e)>=0?this.loadResource(this.src,e):this.request().catch(e=>{20==e.code&&"AbortError"==e.name||this.emit("error",e);});}loadResource(e,n){this.ctrl&&this.ctrl.abort();let t=new AbortController;this.ctrl=t;let o=this.fakeProgress(e=>this.emit("progress",e));this.ctrl.signal.addEventListener("abort",()=>o.cancel());let[r,i]={js:["script","src"],css:["link","href"],image:["img","src"]}[n],a=document.createElement(r);a[i]=e,a.onload=()=>{o.cancel(),t.signal.aborted||(o.finish(),this.emit("ended",a));},a.onerror=e=>{o.cancel(),this.emit("error",e);},"image"!=n&&document.body.append(a);}reader(e){return t(this,void 0,void 0,(function*(){let n=this.type.toLowerCase();return "blob"==n?yield e.blob():"json"==n?yield e.json():"text"==n?yield e.text():e}))}fakeProgress(e=(e=>{})){let n=0,t=setInterval(()=>{n<80?n+=5:n<95?n+=.1:clearInterval(t),e(n);},200);return {cancel:()=>clearInterval(t),finish:()=>{clearInterval(t),e(100);}}}request(){return t(this,void 0,void 0,(function*(){this.ctrl&&this.ctrl.abort();let e=new AbortController;this.ctrl=e;let n=yield fetch(this.src,{method:"GET",signal:this.ctrl.signal}),o=n.headers.get("Content-Length");if(!o){let t=this.fakeProgress(e=>this.emit("progress",e));e.signal.addEventListener("abort",()=>t.cancel());let o=yield this.reader(n);if(t.cancel(),e.signal.aborted)return;return t.finish(),this.emit("ended",o)}let r=+o,i=0,a=n.body.getReader(),l=new Response(new ReadableStream({start:e=>{let n=()=>t(this,void 0,void 0,(function*(){try{let{done:t,value:o}=yield a.read();if(t){e.close();let n=100;return this.emit("progress",n),void this.emit("ended",yield this.reader(l))}i+=o.byteLength;let s=+Number(100*i/r).toFixed(2);this.emit("progress",s),e.enqueue(o),n();}catch(n){e.error(n);}}));n();}}),{status:n.status,statusText:n.statusText,headers:n.headers});}))}render(){return N``}};e([K(),n("design:type",String)],Ee.prototype,"src",void 0),e([K(),n("design:type",String)],Ee.prototype,"type",void 0),Ee=e([fe("iu-fetch"),n("design:paramtypes",[])],Ee);let Te=class extends he{static get styles(){return ae`${ie("* {\n  box-sizing: border-box;\n  -webkit-tap-highlight-color: transparent; }\n  *::selection {\n    background-color: var(--iu-main-color, #2ed573);\n    color: var(--iu-white-color, #ffffff); }\n\nbody {\n  padding: 0;\n  margin: 0; }\n\na {\n  color: var(--iu-main-color, #2ed573); }\n\n.hide,\n.hidden,\n[hide],\n[hidden] {\n  display: none; }\n\n.main-text {\n  color: var(--iu-main-color, #2ed573); }\n\n.main-bg {\n  background-color: var(--iu-main-color, #2ed573); }\n\n.mainLight-text {\n  color: var(--iu-mainLight-color, #f2fff8); }\n\n.mainLight-bg {\n  background-color: var(--iu-mainLight-color, #f2fff8); }\n\n.white-text {\n  color: var(--iu-white-color, #ffffff); }\n\n.white-bg {\n  background-color: var(--iu-white-color, #ffffff); }\n\n.dark-text {\n  color: var(--iu-dark-color, #2f3542); }\n\n.dark-bg {\n  background-color: var(--iu-dark-color, #2f3542); }\n\n.light-text {\n  color: var(--iu-light-color, #f5f5f5); }\n\n.light-bg {\n  background-color: var(--iu-light-color, #f5f5f5); }\n\n.light-grey-text {\n  color: var(--iu-light-grey-color, #dddddd); }\n\n.light-grey-bg {\n  background-color: var(--iu-light-grey-color, #dddddd); }\n\n.grey-text {\n  color: var(--iu-grey-color, #a4b0be); }\n\n.grey-bg {\n  background-color: var(--iu-grey-color, #a4b0be); }\n\n.success-text {\n  color: var(--iu-success-color, #2ed573); }\n\n.success-bg {\n  background-color: var(--iu-success-color, #2ed573); }\n\n.info-text {\n  color: var(--iu-info-color, #1e90ff); }\n\n.info-bg {\n  background-color: var(--iu-info-color, #1e90ff); }\n\n.warn-text {\n  color: var(--iu-warn-color, #ffa502); }\n\n.warn-bg {\n  background-color: var(--iu-warn-color, #ffa502); }\n\n.error-text {\n  color: var(--iu-error-color, #ff4757); }\n\n.error-bg {\n  background-color: var(--iu-error-color, #ff4757); }\n")}`}connectedCallback(){super.connectedCallback();}disconnectedCallback(){super.disconnectedCallback();}attributeChangedCallback(e,n,t){super.attributeChangedCallback(e,n,t);}shouldUpdate(e){return !0}updated(e){super.updated(e);}firstUpdated(e){super.firstUpdated(e);}render(){return N`
        <span>form</span>
        `}};Te=e([fe("iu-form")],Te);var Pe="* {\n  box-sizing: border-box;\n  -webkit-tap-highlight-color: transparent; }\n  *::selection {\n    background-color: var(--iu-main-color, #2ed573);\n    color: var(--iu-white-color, #ffffff); }\n\nbody {\n  padding: 0;\n  margin: 0; }\n\na {\n  color: var(--iu-main-color, #2ed573); }\n\n.hide,\n.hidden,\n[hide],\n[hidden] {\n  display: none; }\n\n.main-text {\n  color: var(--iu-main-color, #2ed573); }\n\n.main-bg {\n  background-color: var(--iu-main-color, #2ed573); }\n\n.mainLight-text {\n  color: var(--iu-mainLight-color, #f2fff8); }\n\n.mainLight-bg {\n  background-color: var(--iu-mainLight-color, #f2fff8); }\n\n.white-text {\n  color: var(--iu-white-color, #ffffff); }\n\n.white-bg {\n  background-color: var(--iu-white-color, #ffffff); }\n\n.dark-text {\n  color: var(--iu-dark-color, #2f3542); }\n\n.dark-bg {\n  background-color: var(--iu-dark-color, #2f3542); }\n\n.light-text {\n  color: var(--iu-light-color, #f5f5f5); }\n\n.light-bg {\n  background-color: var(--iu-light-color, #f5f5f5); }\n\n.light-grey-text {\n  color: var(--iu-light-grey-color, #dddddd); }\n\n.light-grey-bg {\n  background-color: var(--iu-light-grey-color, #dddddd); }\n\n.grey-text {\n  color: var(--iu-grey-color, #a4b0be); }\n\n.grey-bg {\n  background-color: var(--iu-grey-color, #a4b0be); }\n\n.success-text {\n  color: var(--iu-success-color, #2ed573); }\n\n.success-bg {\n  background-color: var(--iu-success-color, #2ed573); }\n\n.info-text {\n  color: var(--iu-info-color, #1e90ff); }\n\n.info-bg {\n  background-color: var(--iu-info-color, #1e90ff); }\n\n.warn-text {\n  color: var(--iu-warn-color, #ffa502); }\n\n.warn-bg {\n  background-color: var(--iu-warn-color, #ffa502); }\n\n.error-text {\n  color: var(--iu-error-color, #ff4757); }\n\n.error-bg {\n  background-color: var(--iu-error-color, #ff4757); }\n\n:host {\n  display: inline-block; }\n\n.icon {\n  display: inline-block;\n  width: 1em;\n  height: 1em;\n  margin: auto;\n  fill: currentColor;\n  overflow: hidden; }\n  .icon path {\n    fill: var(--iu-dark-color, #2f3542); }\n  .icon.spin {\n    animation: spin 2s linear infinite; }\n\ndiv.holder {\n  display: block;\n  position: fixed;\n  top: -10px;\n  left: -10px;\n  width: 0;\n  height: 0;\n  visibility: hidden;\n  overflow: hidden; }\n\n@keyframes spin {\n  from {\n    transform: rotate(0); }\n  to {\n    transform: rotate(360deg); } }\n";
	/**
	 * @license
	 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
	 * This code may only be used under the BSD style license found at
	 * http://polymer.github.io/LICENSE.txt
	 * The complete set of authors may be found at
	 * http://polymer.github.io/AUTHORS.txt
	 * The complete set of contributors may be found at
	 * http://polymer.github.io/CONTRIBUTORS.txt
	 * Code distributed by Google as part of the polymer project is also
	 * subject to an additional IP rights grant found at
	 * http://polymer.github.io/PATENTS.txt
	 */const Oe=new WeakMap,Ve=b(e=>n=>{if(!(n instanceof L))throw new Error("unsafeSVG can only be used in text bindings");const t=Oe.get(n);if(void 0!==t&&z(e)&&e===t.value&&n.value===t.fragment)return;const o=document.createElement("template");o.innerHTML=`<svg>${e}</svg>`;const r=o.content,i=r.firstChild;r.removeChild(i),((e,n,t=null,o=null)=>{for(;n!==t;){const t=n.nextSibling;e.insertBefore(n,o),n=t;}})(r,i.firstChild);const a=document.importNode(r,!0);n.setValue(a),Oe.set(n,{value:e,fragment:a});});var Ue,Ne="icon-",He='<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><symbol id="icon-error-fill" viewBox="0 0 1024 1024"><path d="M512 62C263.4453125 62 62 263.4453125 62 512s201.4453125 450 450 450 450-201.4453125 450-450S760.5546875 62 512 62z m180.43945313 586.14257813c12.3046875 12.39257813 12.3046875 32.43164063-0.08789063 44.73632812-6.15234375 6.15234375-14.23828125 9.22851563-22.32421875 9.22851563s-16.25976563-3.07617188-22.41210938-9.31640625L512 556.82421875 376.38476562 692.79101563c-6.15234375 6.24023438-14.32617188 9.31640625-22.41210937 9.31640624s-16.171875-3.07617188-22.32421875-9.22851562c-12.39257813-12.3046875-12.39257813-32.34375-0.08789062-44.73632813L467.3515625 512 331.56054687 375.85742187c-12.3046875-12.39257813-12.3046875-32.43164063 0.08789063-44.73632812s32.43164063-12.3046875 44.73632813 0.08789063L512 467.17578125l135.61523438-136.0546875c12.3046875-12.39257813 32.34375-12.39257813 44.73632812-0.08789063 12.39257813 12.3046875 12.39257813 32.34375 0.08789062 44.73632813L556.6484375 512l135.79101563 136.14257813z"  ></path></symbol><symbol id="icon-info-fill" viewBox="0 0 1024 1024"><path d="M512 62C263.4453125 62 62 263.4453125 62 512s201.4453125 450 450 450 450-201.4453125 450-450S760.5546875 62 512 62z m-2.63671875 162.15820313c17.49023438 0 31.640625 14.15039063 31.640625 31.64062499s-14.15039063 31.640625-31.640625 31.640625-31.640625-14.15039063-31.640625-31.640625 14.15039063-31.640625 31.640625-31.640625z m138.1640625 489.63867187c0 17.49023438-14.15039063 31.640625-31.640625 31.640625H402.83984375c-17.49023438 0-31.640625-14.15039063-31.640625-31.640625s14.15039063-31.640625 31.640625-31.640625H477.72265625V406.09179687h-52.734375c-17.49023438 0-31.640625-14.15039063-31.640625-31.64062499s14.15039063-31.640625 31.640625-31.640625h84.375c17.49023438 0 31.640625 14.15039063 31.640625 31.640625v307.70507812h74.8828125c17.49023438 0 31.640625 14.15039063 31.640625 31.640625z"  ></path></symbol><symbol id="icon-warn-fill" viewBox="0 0 1024 1024"><path d="M512 962c-248.53153887 0-450-201.46846114-450-450S263.46846113 62 512 62s450 201.46846114 450 450-201.46846114 450-450 450zM480.99153887 264.5l6.84 353.21538428a6.92307685 6.92307685 0 0 0 6.92307686 6.78461572h41.99538427a6.92307685 6.92307685 0 0 0 6.92307685-6.78461573l6.69461573-346.15384541a6.92307685 6.92307685 0 0 0-6.92307685-7.06153886h-62.44615459z m34.7538454 487.50230742a41.24769258 41.24769258 0 1 0 0-82.50230742 41.24769258 41.24769258 0 0 0 0 82.50230742z"  ></path></symbol><symbol id="icon-success-fill" viewBox="0 0 1024 1024"><path d="M512 962C263.47625 962 62 760.52375 62 512S263.47625 62 512 62s450 201.47625 450 450-201.47625 450-450 450z m238.64625-574.54875l-47.7225-47.73375-270.4725 270.4725-111.375-111.375-47.7225 47.73375L400.625 673.83125l31.815 31.815z"  ></path></symbol><symbol id="icon-indeterminate" viewBox="0 0 1024 1024"><path d="M63.11714241 453.18619017h897.76571518v112.22071408H63.11714241z"  ></path></symbol><symbol id="icon-radio" viewBox="0 0 1024 1024"><path d="M62.6947551 512a449.3052449 449.3052449 0 1 0 898.6104898 0A449.3052449 449.3052449 0 0 0 62.6947551 512"  ></path><path d="M118.85791071 512a393.14208929 393.14208929 0 1 0 786.28417858 0A393.14208929 393.14208929 0 0 0 118.85791071 512"  ></path><path d="M343.51053316 512a168.48946684 168.48946684 0 1 0 336.97893368 0 168.48946684 168.48946684 0 0 0-336.97893368 0"  ></path></symbol><symbol id="icon-star-empty" viewBox="0 0 1024 1024"><path d="M962 410.966l-310.932-45.18-139.068-281.754-139.05 281.754-310.95 45.18 225 219.312-53.118 309.69 278.118-146.214 278.118 146.214-53.118-309.69 225-219.312zM512 724.256l-196.398 103.248 37.512-218.7-158.886-154.89 219.582-31.914 98.208-198.972 98.208 198.972 219.582 31.914-158.904 154.89 37.512 218.7-196.398-103.248z"  ></path></symbol><symbol id="icon-star-full" viewBox="0 0 1024 1024"><path d="M962 410.966l-310.932-45.18-139.068-281.754-139.05 281.754-310.95 45.18 225 219.312-53.118 309.69 278.118-146.214 278.118 146.214-53.118-309.69 225-219.312z"  ></path></symbol><symbol id="icon-star-half" viewBox="0 0 1024 1024"><path d="M962 410.966l-310.932-45.18-139.068-281.754-139.05 281.754-310.95 45.18 225 219.312-53.118 309.69 278.118-146.214 278.118 146.214-53.118-309.69 225-219.312zM512 724.256l-0.828 0.432 0.828-501.66 98.208 198.972 219.582 31.914-158.904 154.89 37.512 218.7-196.398-103.248z"  ></path></symbol><symbol id="icon-search" viewBox="0 0 1024 1024"><path d="M427.3861091 790.48868752A363.41808979 363.41808979 0 1 1 427.3861091 63.60090702a363.41808979 363.41808979 0 0 1 0 726.8877805z m0-80.75384218a282.66424762 282.66424762 0 1 0 0-565.38009614 282.66424762 282.66424762 0 0 0 0 565.38009614z"  ></path><path d="M669.75083563 609.63104036l285.50224219 285.55384217-57.06948845 57.12108844-285.55384217-285.55384219z"  ></path></symbol><symbol id="icon-user" viewBox="0 0 1024 1024"><path d="M512 555.2c-134.55 0-243.9-109.35-243.9-243.9 0-134.55 109.35-243.9 243.9-243.9s243.9 109.35 243.9 243.9c0 134.55-109.35 243.9-243.9 243.9z m0-420.75c-97.65 0-176.85 79.2-176.85 176.85 0 97.65 79.2 176.85 176.85 176.85s176.85-79.2 176.85-176.85c0-97.65-79.2-176.85-176.85-176.85z"  ></path><path d="M913.85 952.1c-18.45 0-33.75-9.9-33.75-28.35 0-202.95-165.15-368.1-368.1-368.1s-368.1 165.15-368.1 368.1c0 18.45-14.85 28.35-33.75 28.35s-33.75-9.9-33.75-28.35c0-239.85 195.3-435.15 435.15-435.15s435.15 195.3 435.15 435.15c0.45 18.45-14.4 28.35-32.85 28.35z"  ></path><path d="M921.5 952.55H102.05c-13.95 0-25.65-11.7-25.65-25.65v-6.75c0-13.95 11.7-25.65 25.65-25.65h819c13.95 0 25.65 11.7 25.65 25.65v6.75c0.45 13.95-11.25 25.65-25.2 25.65z"  ></path></symbol><symbol id="icon-close" viewBox="0 0 1024 1024"><path d="M962 137.1670376L887.83518974 62 512 436.8329624 137.1670376 62 62 137.1670376l374.8329624 374.8329624L62 887.83518974l75.1670376 74.16481026 374.8329624-374.8329624 375.83518974 374.8329624 74.16481026-74.16481026-374.8329624-375.83518974L962 137.1670376z"  ></path></symbol><symbol id="icon-view-on" viewBox="0 0 1024 1024"><path d="M512 608a96 96 0 1 1 0-192 96 96 0 0 1 0 192m0-256c-88.224 0-160 71.776-160 160s71.776 160 160 160 160-71.776 160-160-71.776-160-160-160"  ></path><path d="M512 800c-212.064 0-384-256-384-288s171.936-288 384-288 384 256 384 288-171.936 288-384 288m0-640C265.248 160 64 443.008 64 512c0 68.992 201.248 352 448 352s448-283.008 448-352c0-68.992-201.248-352-448-352"  ></path></symbol><symbol id="icon-view-off" viewBox="0 0 1024 1024"><path d="M512 800c-66.112 0-128.32-24.896-182.656-60.096l94.976-94.976A156.256 156.256 0 0 0 512 672c88.224 0 160-71.776 160-160a156.256 156.256 0 0 0-27.072-87.68l101.536-101.536C837.28 398.624 896 493.344 896 512c0 32-171.936 288-384 288m96-288a96 96 0 0 1-96 96c-14.784 0-28.64-3.616-41.088-9.664l127.424-127.424c6.048 12.448 9.664 26.304 9.664 41.088M128 512c0-32 171.936-288 384-288 66.112 0 128.32 24.896 182.656 60.096L277.536 701.216C186.72 625.376 128 530.656 128 512m664.064-234.816l91.328-91.328-45.248-45.248-97.632 97.632C673.472 192.704 595.456 160 512 160 265.248 160 64 443.008 64 512c0 39.392 65.728 148.416 167.936 234.816l-91.328 91.328 45.248 45.248 97.632-97.632C350.528 831.296 428.544 864 512 864c246.752 0 448-283.008 448-352 0-39.392-65.728-148.416-167.936-234.816"  ></path><path d="M512 352c-88.224 0-160 71.776-160 160 0 15.328 2.848 29.856 6.88 43.872l58.592-58.592a95.616 95.616 0 0 1 79.808-79.808l58.592-58.592A157.76 157.76 0 0 0 512 352"  ></path></symbol><symbol id="icon-setting" viewBox="0 0 1024 1024"><path d="M512 640c-70.592 0-128-57.408-128-128s57.408-128 128-128 128 57.408 128 128-57.408 128-128 128m0-320a192 192 0 0 0 0 384 192 192 0 0 0 0-384"  ></path><path d="M693.216 735.552a291.744 291.744 0 0 1-40.512 27.52c-1.216 0.64-2.368 1.472-3.616 2.144a286.08 286.08 0 0 1-34.048 15.392l-19.552 72.992-9.28 34.592c-0.576 0.128-1.152 0.32-1.76 0.384l-8.736 1.632c-3.52 0.64-7.104 1.088-10.656 1.6a357.152 357.152 0 0 1-53.056 3.744c-5.216 0-10.464-0.128-15.68-0.32l-8.64-0.48a355.936 355.936 0 0 1-28.736-2.944c-3.52-0.512-7.072-0.96-10.624-1.6a418.496 418.496 0 0 1-8.736-1.6l-1.76-0.416-9.28-34.56-19.584-73.024a286.784 286.784 0 0 1-47.84-23.776 287.488 287.488 0 0 1-30.304-21.28l-72.96 19.552-34.56 9.28-1.184-1.376a237.504 237.504 0 0 1-5.792-6.72c-2.304-2.784-4.512-5.664-6.752-8.512a315.84 315.84 0 0 1-16.928-23.424c-1.6-2.336-3.104-4.768-4.64-7.168a337.92 337.92 0 0 1-15.68-27.168 435.84 435.84 0 0 1-3.936-7.68c-1.536-3.104-3.072-6.208-4.512-9.344a362.912 362.912 0 0 1-7.296-17.024c-1.344-3.328-2.688-6.656-3.968-9.984l-2.976-8.448-0.512-1.696 25.184-25.184 53.568-53.632a292.8 292.8 0 0 1-3.68-41.28c0-1.28-0.192-2.496-0.192-3.744 0-1.28 0.192-2.464 0.192-3.744a292.8 292.8 0 0 1 3.68-41.28l-53.568-53.632-25.184-25.184a438.656 438.656 0 0 1 3.488-10.144c1.28-3.36 2.624-6.688 3.968-10.048a375.68 375.68 0 0 1 52.992-91.776c2.24-2.848 4.448-5.696 6.72-8.48 1.92-2.24 3.84-4.48 5.824-6.72l1.184-1.376 34.56 9.28 72.96 19.52c9.568-7.776 19.744-14.72 30.304-21.28l4.064-2.464a283.68 283.68 0 0 1 43.776-21.28l19.584-73.024 9.28-34.56 1.76-0.416c2.88-0.544 5.76-1.12 8.704-1.6 3.52-0.608 7.168-1.12 10.752-1.6 6.08-0.864 12.16-1.6 18.336-2.208a362.752 362.752 0 0 1 19.008-1.184c5.184-0.224 10.4-0.384 15.616-0.384 5.216 0 10.464 0.16 15.648 0.384a362.752 362.752 0 0 1 19.008 1.184c6.08 0.576 12.224 1.344 18.304 2.24 3.616 0.448 7.2 0.96 10.784 1.536l8.704 1.632 1.76 0.384 9.28 34.592 19.52 72.992c11.712 4.512 23.168 9.472 34.08 15.392 1.248 0.672 2.4 1.504 3.616 2.176 14.304 8.064 27.84 17.216 40.512 27.52l72.96-19.584 34.528-9.248 1.216 1.344c1.92 2.24 3.904 4.48 5.76 6.752 2.304 2.752 4.48 5.632 6.72 8.448 3.84 4.864 7.552 9.792 11.136 14.848 1.984 2.816 3.904 5.696 5.824 8.544l4.672 7.232a357.472 357.472 0 0 1 19.616 34.88 397.184 397.184 0 0 1 11.776 26.336c1.344 3.328 2.72 6.656 4 10.048 1.024 2.784 1.984 5.568 2.944 8.384 0.192 0.576 0.32 1.152 0.544 1.728l-25.184 25.184-53.6 53.6c1.92 12.064 3.104 24.352 3.488 36.896 0.064 2.72 0.384 5.44 0.384 8.16 0 2.752-0.32 5.44-0.384 8.16a291.136 291.136 0 0 1-3.52 36.864l53.632 53.632 25.184 25.184-0.544 1.696c-0.96 2.816-1.92 5.6-2.944 8.384-1.28 3.392-2.624 6.72-4 10.08a376.32 376.32 0 0 1-11.776 26.336 435.84 435.84 0 0 1-11.456 21.44c-2.624 4.544-5.376 8.992-8.16 13.44-1.536 2.368-3.072 4.8-4.64 7.136a315.84 315.84 0 0 1-16.96 23.456c-2.24 2.88-4.48 5.696-6.72 8.448-1.92 2.304-3.84 4.512-5.792 6.752-0.384 0.48-0.8 0.896-1.216 1.344l-34.56-9.248-72.96-19.52z m-305.12 139.328c-2.624-0.896-5.28-1.728-7.872-2.688l-3.328-1.216-3.328-1.28c4.896 1.92 9.856 3.584 14.816 5.248l-0.32-0.064z m-119.424-66.368l-2.656-2.24c-2.144-1.824-4.224-3.712-6.336-5.568l-0.224-0.192c3.968 3.52 7.936 6.976 12.064 10.272l-2.88-2.24z m623.776-245.664l-0.192-0.16-0.096-0.128h-0.032l-29.184-29.216c0.416-7.104 1.056-14.144 1.056-21.344 0-7.232-0.64-14.272-1.056-21.376l29.184-29.184 0.128-0.128 0.192-0.192 54.72-54.72a444.032 444.032 0 0 0-18.4-57.376 449.664 449.664 0 0 0-28.8-61.024c-11.424-19.84-24.576-38.08-38.432-55.456a449.024 449.024 0 0 0-40.48-44.64l-74.752 20.032-0.064 0.032-0.224 0.064-0.16 0.032h-0.032l-39.424 10.56a348.448 348.448 0 0 0-37.472-21.376l-10.624-39.68-0.032-0.064-0.032-0.16-0.064-0.224v-0.064l-20.032-74.752a447.68 447.68 0 0 0-58.88-12.736A448.128 448.128 0 0 0 512 64c-22.912 0-45.248 2.24-67.232 5.568-20.096 3.04-39.776 7.136-58.88 12.736l-20.032 74.752-0.032 0.064-0.064 0.224-0.032 0.16v0.064l-10.656 39.68c-12.928 6.464-25.504 13.472-37.472 21.44l-39.392-10.56-0.064-0.064h-0.16l-0.224-0.096h-0.064l-74.72-20.064c-14.432 13.76-27.84 28.8-40.48 44.64A446.816 446.816 0 0 0 124.032 288c-11.456 19.84-20.672 40.32-28.8 61.024A450.496 450.496 0 0 0 76.8 406.4l54.72 54.72v0.064l0.224 0.16 0.096 0.128v0.032l29.216 29.184C160.64 497.76 160 504.8 160 512c0 7.2 0.64 14.208 1.088 21.312l-29.184 29.184-0.032 0.032-0.096 0.128-0.192 0.192-0.032 0.032L76.8 617.6c4.704 19.328 11.008 38.464 18.4 57.344 8.128 20.704 17.344 41.216 28.8 61.056 11.456 19.84 24.576 38.08 38.464 55.424 12.672 15.872 26.048 30.88 40.48 44.64l74.72-20.032h0.064l0.224-0.064 0.16-0.064h0.064l39.36-10.56c12 7.936 24.576 14.912 37.504 21.376l10.656 39.712v0.224l0.096 0.224v0.032l20.064 74.752c19.104 5.6 38.784 9.728 58.88 12.736a447.68 447.68 0 0 0 67.2 5.6c22.976 0 45.28-2.24 67.296-5.6a442.56 442.56 0 0 0 58.88-12.736l20.032-74.752 0.064-0.256 0.064-0.192 10.624-39.68c12.928-6.496 25.504-13.504 37.44-21.44l39.456 10.56v0.032l0.192 0.032 0.224 0.064h0.064l74.752 20.032c14.4-13.76 27.808-28.768 40.48-44.64A449.92 449.92 0 0 0 900 736c11.456-19.84 20.64-40.32 28.768-61.056 7.424-18.88 13.728-37.984 18.432-57.344l-54.72-54.72h-0.032z"  ></path></symbol><symbol id="icon-lock" viewBox="0 0 1024 1024"><path d="M730.45333333 475.59111111v-182.04444444c0-120.14933333-98.304-218.45333333-218.45333333-218.45333334s-218.45333333 98.304-218.45333333 218.45333334v182.04444444H111.50222222v473.31555556h800.99555556V475.59111111h-182.04444445z m-364.08888888-182.04444444c0-80.09955555 65.536-145.63555555 145.63555555-145.63555556s145.63555555 65.536 145.63555555 145.63555556v182.04444444h-291.2711111v-182.04444444z m473.31555555 582.54222222H184.32v-327.68h655.36v327.68z"  ></path><path d="M475.59111111 803.27111111h72.81777778v-182.04444444h-72.81777778z"  ></path></symbol><symbol id="icon-unlock" viewBox="0 0 1024 1024"><path d="M366.36444445 475.59111111v-182.04444444c0-80.09955555 65.536-145.63555555 145.63555555-145.63555556s145.63555555 65.536 145.63555555 145.63555556v72.81777778h72.81777778v-72.81777778c0-120.14933333-98.304-218.45333333-218.45333333-218.45333334s-218.45333333 98.304-218.45333333 218.45333334v182.04444444H111.50222222v473.31555556h800.99555556V475.59111111H366.36444445z m473.31555555 400.49777778H184.32v-327.68h655.36v327.68z"  ></path><path d="M402.77333333 766.86222222h218.45333334v-72.81777777h-218.45333334z"  ></path></symbol><symbol id="icon-image" viewBox="0 0 1024 1024"><path d="M876.08888889 642.38023111l-145.63555556-145.63555556-145.63555555 145.63555556-291.81724445-291.78083556L147.91111111 495.65240889V147.76547555h728.17777778V642.34382222z m0 233.56302222H147.91111111V598.65315555l145.08942222-145.08942222L584.81777778 745.38097778l145.63555555-145.63555556 145.63555556 145.63555556v130.52586667z m0-800.99555555H75.09333333v873.81333333h873.81333334v-873.81333333h-72.81777778z"  ></path><path d="M694.04444445 293.40103111c-20.06129778 0-36.40888889 16.34759111-36.4088889 36.40888889 0 20.02488889 16.34759111 36.40888889 36.4088889 36.40888889 20.06129778 0 36.40888889-16.384 36.40888888-36.40888889 0-20.06129778-16.34759111-36.40888889-36.40888888-36.40888889m0 145.63555556c-60.22030222 0-109.22666667-49.00636445-109.22666667-109.22666667s49.00636445-109.22666667 109.22666667-109.22666667 109.22666667 49.00636445 109.22666666 109.22666667-49.00636445 109.22666667-109.22666666 109.22666667"  ></path></symbol><symbol id="icon-list" viewBox="0 0 1024 1024"><path d="M75.09333333 220.72888889h72.81777778V147.91111111H75.09333333zM293.54666667 220.72888889h655.36V147.91111111H293.54666667zM75.09333333 548.40888889h72.81777778v-72.81777778H75.09333333zM293.54666667 548.40888889h655.36v-72.81777778H293.54666667zM75.09333333 876.08888889h72.81777778v-72.81777778H75.09333333zM293.54666667 876.08888889h655.36v-72.81777778H293.54666667z"  ></path></symbol><symbol id="icon-like" viewBox="0 0 1024 1024"><path d="M512 805.75146667l-226.816-226.816-103.28746667-103.28746667-9.728-9.728A135.50933333 135.50933333 0 0 1 136.53333333 374.784c0-75.33226667 61.2352-136.53333333 136.53333334-136.53333333 34.98666667 0 66.59413333 13.55093333 90.79466666 35.29386666l10.41066667 10.41066667 102.98026667 102.94613333L512 421.71733333l34.74773333-34.816 102.98026667-102.94613333 10.41066667-10.41066667A135.3728 135.3728 0 0 1 750.93333333 238.25066667c75.29813333 0 136.53333333 61.2352 136.53333334 136.53333333a135.50933333 135.50933333 0 0 1-35.6352 91.17013333l-9.728 9.728-103.28746667 103.28746667L512 805.75146667zM750.93333333 169.984c-50.75626667 0-97.00693333 18.77333333-132.77866666 49.3568l-0.17066667-0.17066667-2.28693333 2.32106667-20.51413334 20.51413333L512 325.15413333 428.81706667 242.00533333l-20.51413334-20.48-2.28693333-2.3552-0.17066667 0.17066667A203.6736 203.6736 0 0 0 273.06666667 169.984a204.8 204.8 0 0 0-204.8 204.8c0 62.0544 27.71626667 117.52106667 71.30453333 155.10186667L512 902.28053333l372.4288-372.39466666A204.25386667 204.25386667 0 0 0 955.73333333 374.71573333a204.8 204.8 0 0 0-204.8-204.8z"  ></path></symbol><symbol id="icon-like-fill" viewBox="0 0 1024 1024"><path d="M750.93333333 169.984c-50.75626667 0-97.00693333 18.77333333-132.77866666 49.3568l-0.17066667-0.2048-2.28693333 2.3552-20.51413334 20.48L512 325.18826667l-83.18293333-83.21706667-20.51413334-20.48-2.28693333-2.3552-0.17066667 0.2048A203.6736 203.6736 0 0 0 273.06666667 169.94986667a204.8 204.8 0 0 0-204.8 204.8c0 62.08853333 27.71626667 117.5552 71.30453333 155.10186666L512 902.31466667l372.4288-372.46293334A204.25386667 204.25386667 0 0 0 955.73333333 374.784a204.8 204.8 0 0 0-204.8-204.8"  ></path></symbol><symbol id="icon-up" viewBox="0 0 1024 1024"><path d="M878.65470058 748.64386063L512 381.98916006l-366.65470058 366.65470057-71.08868043-71.08868046L512 239.81179914l437.74338101 437.74338103z"  ></path></symbol><symbol id="icon-left" viewBox="0 0 1024 1024"><path d="M633.11218617 949.74338101L195.36880514 512l437.74338103-437.74338101 71.08868044 71.08868043L337.54616605 512l366.65470056 366.65470058z"  ></path></symbol><symbol id="icon-down" viewBox="0 0 1024 1024"><path d="M512 784.18820086l-437.74338101-437.74338103 71.08868043-71.08868046L512 642.01083994l366.65470058-366.65470057 71.08868043 71.08868046z"  ></path></symbol><symbol id="icon-right" viewBox="0 0 1024 1024"><path d="M390.93808871 949.74338101l-71.08868044-71.08868043L686.45383395 512l-366.65470056-366.65470058 71.08868044-71.08868043L828.68146975 512z"  ></path></symbol><symbol id="icon-page-first" viewBox="0 0 1024 1024"><path d="M865.4952507 189.74489207l-62.48028557-62.48028554L418.27957166 512l384.73539347 384.73539347L865.4952507 834.25510793 543.24014279 512zM202.69165565 953.86906337h88.37381265V70.13093663H202.69165565z"  ></path></symbol><symbol id="icon-page-last" viewBox="0 0 1024 1024"><path d="M158.5047493 189.74489207L480.75985721 512 158.5047493 834.25510793l62.48028557 62.48028554L605.72042834 512 220.98503487 127.26460653zM732.9345317 953.86906337h88.37381265V70.13093663h-88.37381265z"  ></path></symbol><symbol id="icon-got-to-link" viewBox="0 0 1024 1024"><path d="M569.44297824 896.42608514l-61.86166887-61.86166887 322.56441626-322.56441627-322.56441626-322.56441627 61.86166887-61.86166887L953.86906337 512z"  ></path><path d="M70.13093663 467.81309366h795.36431407v88.37381268H70.13093663z"  ></path></symbol><symbol id="icon-check" viewBox="0 0 1024 1024"><path d="M368.9958966 700.76541647l-217.36623714-217.36623715L71.54736153 569.20164137l297.44853507 297.44853507L952.45263847 283.19343459l-80.08229793-85.80246206z"  ></path></symbol><symbol id="icon-loading-line" viewBox="0 0 1024 1024"><path d="M512.0305376 704.81352325a32.14067607 32.14067607 0 0 1 31.62642539 26.35535478l0.51425068 5.78532129v192.84405732a32.14067607 32.14067607 0 0 1-63.76710146 5.78532129L479.88986153 929.79825664v-192.84405732A32.14067607 32.14067607 0 0 1 512.0305376 704.81352325z m-136.34074776-56.5033087a32.14067607 32.14067607 0 0 1 3.72831768 41.01150323l-3.72831768 4.49969414-136.40503007 136.27646718a32.14067607 32.14067607 0 0 1-49.17523448-40.94722178l3.72831856-4.49969414 136.4050292-136.27646719a32.14067607 32.14067607 0 0 1 45.44691679 0z m316.00712813-6.81382353l4.49969414 3.66403711 138.71915859 133.96233867a32.14067607 32.14067607 0 0 1-40.11156387 49.88232949l-4.49969501-3.66403711L651.52107266 691.31443906a32.14067607 32.14067607 0 0 1 40.17584531-49.88232949zM287.0458042 479.82878984a32.14067607 32.14067607 0 0 1 5.78532217 63.76710147L287.0458042 544.11014287h-192.84405644a32.14067607 32.14067607 0 0 1-5.78532218-63.76710146L94.20174776 479.82878984h192.84405644z m642.81352412 0a32.14067607 32.14067607 0 0 1 5.78532129 63.76710147l-5.78532129 0.51425156h-192.84405733a32.14067607 32.14067607 0 0 1-5.78532216-63.76710146l5.78532216-0.51425157h192.84405733zM229.25686924 194.93383643l4.49969414 3.66403711L372.54000342 332.62449365a32.14067607 32.14067607 0 0 1-40.17584532 49.8823295l-4.49969501-3.66403711-138.71915772-133.96233867a32.14067607 32.14067607 0 0 1 40.11156387-49.8823295z m600.96636299-1.15706426a32.14067607 32.14067607 0 0 1 3.72831767 41.01150322l-3.72831767 4.49969414-136.40503008 136.27646719a32.14067607 32.14067607 0 0 1-49.17523447-40.94722178l3.72831855-4.49969414 136.4050292-136.27646718a32.14067607 32.14067607 0 0 1 45.4469168 0zM512.0305376 62a32.14067607 32.14067607 0 0 1 31.62642539 26.35535479L544.17121367 94.14067607v192.84405732a32.14067607 32.14067607 0 0 1-63.76710146 5.7853213L479.88986153 286.98473339v-192.84405732A32.14067607 32.14067607 0 0 1 512.0305376 62z"  ></path></symbol><symbol id="icon-loading" viewBox="0 0 1024 1024"><path d="M441.36551709 139.30689658a70.63448291 70.63448291 0 1 0 141.23793077 0 70.63448291 70.63448291 0 1 0-141.26896495 0h0.03103418zM167.43965557 255.96551709a68.58620683 68.58620683 0 1 0 137.17241367 0 68.58620683 68.58620683 0 1 0-137.17241367 0zM63.03965557 513.89310342a62.4413795 62.4413795 0 0 0 124.8827581 0 62.4413795 62.4413795 0 0 0-124.8827581 0z m110.54482734 281.43620684a54.24827607 54.24827607 0 0 0 108.49655127 0 54.24827607 54.24827607 0 0 0-108.49655127 0z m293.38448292 117.5586205a47.20344785 47.20344785 0 0 0 94.40689657 0 47.20344785 47.20344785 0 0 0-94.40689657 0z m303.95172391-108.31034443a33.82758633 33.82758633 0 1 0 67.65517266 0 33.82758633 33.82758633 0 1 0-67.65517266 0z m140.72586241-291.97241367a23.9741376 23.9741376 0 1 0 47.94827519 0 23.9741376 23.9741376 0 1 0-47.94827519 0z m-72.01551797-251.45689659a17.11551709 17.11551709 0 0 0 34.24655215 0 17.11551709 17.11551709 0 0 0-34.24655215 0z"  ></path></symbol><symbol id="icon-success" viewBox="0 0 1024 1024"><path d="M512 64a448 448 0 1 0 448 448A448 448 0 0 0 512 64z m0 832a384 384 0 1 1 384-384 384 384 0 0 1-384 384z"  ></path><path d="M448 688l-160-158.72 50.88-50.24L448 587.2 685.12 352 736 402.56l-288 285.44z"  ></path></symbol><symbol id="icon-info" viewBox="0 0 1024 1024"><path d="M544 704v-288h-128v64h64v224h-96v64h256v-64h-96zM512 224a48 48 0 1 0 48 48A48 48 0 0 0 512 224z"  ></path><path d="M512 960a448 448 0 1 1 448-448 448 448 0 0 1-448 448z m0-832a384 384 0 1 0 384 384A384 384 0 0 0 512 128z"  ></path></symbol><symbol id="icon-warn" viewBox="0 0 1024 1024"><path d="M512 64a448 448 0 1 0 448 448A448 448 0 0 0 512 64z m0 832a384 384 0 1 1 384-384 384 384 0 0 1-384 384z"  ></path><path d="M480 256h64v352h-64zM512 704a48 48 0 1 0 48 48A48 48 0 0 0 512 704z"  ></path></symbol><symbol id="icon-error" viewBox="0 0 1024 1024"><path d="M685.12 736L512 562.912 338.88 736 288 685.12 461.088 512 288 338.912 338.912 288 512 461.088 685.088 288 736 338.912 562.912 512 736 685.12 685.12 736z"  ></path><path d="M512 128A384 384 0 1 1 128 512 384.448 384.448 0 0 1 512 128m0-64a448 448 0 1 0 448 448A448 448 0 0 0 512 64z"  ></path></symbol></svg>';const Fe=new pe;let je=Ue=class extends he{constructor(){super(...arguments),this._listenFn=null;}static get styles(){return ae`${ie(Pe)}`}static $registerSVGSymbol(e,n=Ne){return t(this,void 0,void 0,(function*(){this.url=e,this.prefix=n,Fe.emit("symbolurlchanged");}))}static $registerIconAlias(e,n){var t;const o=((t=class extends Ue{}).svgContent=n||"",t.prefix=Ne,t.url="",t);return fe(e)(o),o}connectedCallback(){super.connectedCallback(),Fe.on("symbolurlchanged",this._listenFn=()=>this.changeUpdate());}disconnectedCallback(){super.disconnectedCallback(),Fe.off("symbolurlchanged",this._listenFn);}attributeChangedCallback(e,n,t){super.attributeChangedCallback(e,n,t);}shouldUpdate(e){return !0}updated(e){super.updated(e),this.changeUpdate();}firstUpdated(e){super.firstUpdated(e);}changeUpdate(){let e=this.name?`#${Ne}${this.name}`:"",n=this.custom?`${this.protoClazz.url}#${this.protoClazz.prefix}${this.custom}`:"";(e||n)&&this.use.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",""+(e||n)),this.setStyle({fontSize:this.size,color:this.color});}get protoClazz(){return this.__proto__.constructor}render(){let e=this.protoClazz.svgContent||He;return N`
        <svg class="icon ${this.spin?"spin":""}" viewBox="0 0 10 10">
            <use xlink:href=""></use>
        </svg>
        <div class="holder">${this.name?Ve(e):""}</div>`}};je.prefix=Ne,je.url="",je.svgContent="",e([K(),n("design:type",String)],je.prototype,"name",void 0),e([K(),n("design:type",String)],je.prototype,"custom",void 0),e([K({type:Boolean}),n("design:type",Boolean)],je.prototype,"spin",void 0),e([K({converter:ce}),n("design:type",String)],je.prototype,"size",void 0),e([K(),n("design:type",String)],je.prototype,"color",void 0),e([Q("svg.icon use"),n("design:type",SVGUseElement)],je.prototype,"use",void 0),je=Ue=e([fe("iu-icon")],je);let Re=class extends be{constructor(){super(...arguments),this.block=!1,this.round=!1,this.type="text",this.placeholder="",this.label="",this.passwordView=!1;}static get styles(){return ae`${ie('* {\n  box-sizing: border-box;\n  -webkit-tap-highlight-color: transparent; }\n  *::selection {\n    background-color: var(--iu-main-color, #2ed573);\n    color: var(--iu-white-color, #ffffff); }\n\nbody {\n  padding: 0;\n  margin: 0; }\n\na {\n  color: var(--iu-main-color, #2ed573); }\n\n.hide,\n.hidden,\n[hide],\n[hidden] {\n  display: none; }\n\n.main-text {\n  color: var(--iu-main-color, #2ed573); }\n\n.main-bg {\n  background-color: var(--iu-main-color, #2ed573); }\n\n.mainLight-text {\n  color: var(--iu-mainLight-color, #f2fff8); }\n\n.mainLight-bg {\n  background-color: var(--iu-mainLight-color, #f2fff8); }\n\n.white-text {\n  color: var(--iu-white-color, #ffffff); }\n\n.white-bg {\n  background-color: var(--iu-white-color, #ffffff); }\n\n.dark-text {\n  color: var(--iu-dark-color, #2f3542); }\n\n.dark-bg {\n  background-color: var(--iu-dark-color, #2f3542); }\n\n.light-text {\n  color: var(--iu-light-color, #f5f5f5); }\n\n.light-bg {\n  background-color: var(--iu-light-color, #f5f5f5); }\n\n.light-grey-text {\n  color: var(--iu-light-grey-color, #dddddd); }\n\n.light-grey-bg {\n  background-color: var(--iu-light-grey-color, #dddddd); }\n\n.grey-text {\n  color: var(--iu-grey-color, #a4b0be); }\n\n.grey-bg {\n  background-color: var(--iu-grey-color, #a4b0be); }\n\n.success-text {\n  color: var(--iu-success-color, #2ed573); }\n\n.success-bg {\n  background-color: var(--iu-success-color, #2ed573); }\n\n.info-text {\n  color: var(--iu-info-color, #1e90ff); }\n\n.info-bg {\n  background-color: var(--iu-info-color, #1e90ff); }\n\n.warn-text {\n  color: var(--iu-warn-color, #ffa502); }\n\n.warn-bg {\n  background-color: var(--iu-warn-color, #ffa502); }\n\n.error-text {\n  color: var(--iu-error-color, #ff4757); }\n\n.error-bg {\n  background-color: var(--iu-error-color, #ff4757); }\n\n:host {\n  display: inline-block;\n  position: relative;\n  width: inherit; }\n\n:host([block]) {\n  width: 100%; }\n\n:host([round]) .input-wrap {\n  border-radius: 50px; }\n\n.input-wrap {\n  border: 1px solid var(--iu-grey-color, #a4b0be);\n  padding: .3em .65em;\n  border-radius: .125em;\n  display: inline-flex;\n  font-size: 1em;\n  height: 2em;\n  align-items: center;\n  width: 100%; }\n  .input-wrap:focus-within {\n    border-color: var(--iu-success-color, #2ed573); }\n  .input-wrap.invalid {\n    border-color: var(--iu-error-color, #ff4757);\n    color: var(--iu-error-color, #ff4757); }\n  .input-wrap.readonly {\n    cursor: default; }\n    .input-wrap.readonly input {\n      cursor: default; }\n  .input-wrap.disabled {\n    background-color: var(--iu-light-color, #f5f5f5);\n    opacity: .6;\n    cursor: not-allowed; }\n    .input-wrap.disabled input {\n      cursor: not-allowed; }\n  .input-wrap input {\n    font-size: 1em;\n    border: none;\n    background-color: transparent;\n    height: 1.4em;\n    color: currentColor;\n    flex: auto;\n    min-width: 1em; }\n    .input-wrap input:focus {\n      outline: none; }\n    .input-wrap input[type="number"] {\n      -moz-appearance: textfield; }\n      .input-wrap input[type="number"]::-webkit-outer-spin-button, .input-wrap input[type="number"]::-webkit-inner-spin-button {\n        -webkit-appearance: none !important;\n        margin: 0; }\n  .input-wrap .label {\n    position: absolute;\n    color: var(--iu-grey-color, #a4b0be);\n    transition: all .2s ease-in-out;\n    opacity: 0;\n    left: 2px;\n    padding: 0 .6em;\n    font-size: 1em;\n    pointer-events: none;\n    transition: all .2s ease-in-out;\n    top: .35em;\n    user-select: none; }\n  .input-wrap input:placeholder-shown ~ .label {\n    opacity: 1; }\n  .input-wrap input:focus ~ .label,\n  .input-wrap input:not(:placeholder-shown) ~ .label {\n    top: -1em;\n    background-color: #fff;\n    padding: 0 .2em;\n    font-size: 0.6em;\n    left: .6em;\n    opacity: 1;\n    color: var(--iu-success-color, #2ed573); }\n  .input-wrap .icon {\n    flex: 0 0 1.5em;\n    padding-right: .5em; }\n  .input-wrap .icon-after {\n    flex: 0 0 1.5em;\n    padding-left: .5em;\n    margin: 0;\n    cursor: pointer; }\n  .input-wrap .number-step {\n    flex: 0 0 1em;\n    display: flex;\n    flex-direction: column;\n    height: 2em; }\n    .input-wrap .number-step > div {\n      flex: 1;\n      width: 1em;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      transition: all ease-in-out .2s; }\n      .input-wrap .number-step > div iu-button {\n        margin: 0;\n        font-size: .5em;\n        text-align: center;\n        width: 100%;\n        height: 100%;\n        display: inline-flex;\n        justify-content: center;\n        align-items: center; }\n      .input-wrap .number-step > div:hover {\n        flex: 3; }\n')}`}connectedCallback(){super.connectedCallback(),this.on("input",ue(()=>this.onInput()),this.input),this.on("focus",()=>this.onFocus(),this.input);}disconnectedCallback(){super.disconnectedCallback();}attributeChangedCallback(e,n,t){super.attributeChangedCallback(e,n,t);}shouldUpdate(e){return !0}updated(e){super.updated(e);}firstUpdated(e){super.firstUpdated(e);}onInput(){return this.checkValidity()}onFocus(){this.checkValidity();}inputNumberStepAction(e){""===this.input.value?this.input.value="0":this.input.value=""+((Number(this.input.value)||0)+e*(Number(this.step)||1));}getInputNumberComponent(){return this.disabled||this.readonly?"":N`<div class="number-step">
            <div class="up">
                <iu-button shape="plain" type="text" icon="up" @click="${this.inputNumberStepAction.bind(this,1)}">
                </iu-button>
            </div>
            <div class="down">
                <iu-button shape="plain" type="text" icon="down" @click="${this.inputNumberStepAction.bind(this,-1)}">
                </iu-button>
            </div>
        </div>`}goSearch(){this.emit("search",this.input.value);}getInputSearchComponent(){return this.disabled||this.readonly?"":N`<iu-button class="icon-after" icon="search" shape="circle" 
            type="text"
            @click="${this.goSearch}"
        >
        </iu-button>`}togglePasswordView(){this.passwordView=!this.passwordView,this.input.type=this.passwordView?"text":"password";}getInputPasswordComponent(){if(this.disabled||this.readonly)return "";let e=!this.passwordView;return console.log("viewoff "+e),N`<iu-button class="icon-after"
            icon="${e?"view-off":"view-on"}" 
            shape="circle" type="text"
            @click="${this.togglePasswordView}"
        >
        </iu-button>`}reset(){this.input.value=this.defaultValue,this.invalid=!1,this.valid=!1,this.tip.hide();}render(){let e="";!0===this.valid&&(e="success"),!0===this.invalid&&(e="error");let n={defaultValue:this.defaultValue||void 0,name:this.name||void 0,required:this.required,readonly:this.readonly,disabled:this.disabled,minlength:this.minlength,maxlength:this.maxlength,min:this.min,max:this.max,pattern:this.pattern,placeholder:this.placeholder||void 0,type:["number","text","password"].includes(this.type)?this.type:"text"};this.label&&(n.placeholder=" ");let t={invalid:this.invalid,valid:this.valid,readonly:this.readonly,disabled:this.disabled};return N`<iu-tip trigger="manual" type="${e}">
            <div class="input-wrap ${this.createClassString(t)}">
                ${this.createElement("iu-icon",{name:this.icon||void 0})}
                ${this.createElement("input",n)}
                ${"password"==this.type?this.getInputPasswordComponent():""}
                ${"search"==this.type?this.getInputSearchComponent():""}
                ${"number"==this.type?this.getInputNumberComponent():""}
                ${this.label?N`<span class="label">${this.label}</span>`:""}
            </div>
        </iu-tip>`}};e([K({reflect:!0,type:String}),n("design:type",String)],Re.prototype,"icon",void 0),e([K({reflect:!0,type:Boolean}),n("design:type",Object)],Re.prototype,"block",void 0),e([K({reflect:!0,type:Boolean}),n("design:type",Object)],Re.prototype,"round",void 0),e([K({reflect:!0,type:Number}),n("design:type",Number)],Re.prototype,"minlength",void 0),e([K({reflect:!0,type:Number}),n("design:type",Number)],Re.prototype,"step",void 0),e([K({reflect:!0,type:Number}),n("design:type",Number)],Re.prototype,"maxlength",void 0),e([K({reflect:!0,type:Number}),n("design:type",Number)],Re.prototype,"min",void 0),e([K({reflect:!0,type:Number}),n("design:type",Number)],Re.prototype,"max",void 0),e([K({reflect:!0,type:String}),n("design:type",String)],Re.prototype,"pattern",void 0),e([K({reflect:!0,type:String}),n("design:type",String)],Re.prototype,"type",void 0),e([K({reflect:!0,type:String}),n("design:type",String)],Re.prototype,"placeholder",void 0),e([K({reflect:!0,type:String}),n("design:type",String)],Re.prototype,"label",void 0),e([K({type:Boolean}),n("design:type",Object)],Re.prototype,"passwordView",void 0),Re=e([fe("iu-input")],Re);let Ie=class extends he{static get styles(){return ae`${ie("* {\n  box-sizing: border-box;\n  -webkit-tap-highlight-color: transparent; }\n  *::selection {\n    background-color: var(--iu-main-color, #2ed573);\n    color: var(--iu-white-color, #ffffff); }\n\nbody {\n  padding: 0;\n  margin: 0; }\n\na {\n  color: var(--iu-main-color, #2ed573); }\n\n.hide,\n.hidden,\n[hide],\n[hidden] {\n  display: none; }\n\n.main-text {\n  color: var(--iu-main-color, #2ed573); }\n\n.main-bg {\n  background-color: var(--iu-main-color, #2ed573); }\n\n.mainLight-text {\n  color: var(--iu-mainLight-color, #f2fff8); }\n\n.mainLight-bg {\n  background-color: var(--iu-mainLight-color, #f2fff8); }\n\n.white-text {\n  color: var(--iu-white-color, #ffffff); }\n\n.white-bg {\n  background-color: var(--iu-white-color, #ffffff); }\n\n.dark-text {\n  color: var(--iu-dark-color, #2f3542); }\n\n.dark-bg {\n  background-color: var(--iu-dark-color, #2f3542); }\n\n.light-text {\n  color: var(--iu-light-color, #f5f5f5); }\n\n.light-bg {\n  background-color: var(--iu-light-color, #f5f5f5); }\n\n.light-grey-text {\n  color: var(--iu-light-grey-color, #dddddd); }\n\n.light-grey-bg {\n  background-color: var(--iu-light-grey-color, #dddddd); }\n\n.grey-text {\n  color: var(--iu-grey-color, #a4b0be); }\n\n.grey-bg {\n  background-color: var(--iu-grey-color, #a4b0be); }\n\n.success-text {\n  color: var(--iu-success-color, #2ed573); }\n\n.success-bg {\n  background-color: var(--iu-success-color, #2ed573); }\n\n.info-text {\n  color: var(--iu-info-color, #1e90ff); }\n\n.info-bg {\n  background-color: var(--iu-info-color, #1e90ff); }\n\n.warn-text {\n  color: var(--iu-warn-color, #ffa502); }\n\n.warn-bg {\n  background-color: var(--iu-warn-color, #ffa502); }\n\n.error-text {\n  color: var(--iu-error-color, #ff4757); }\n\n.error-bg {\n  background-color: var(--iu-error-color, #ff4757); }\n\n:host {\n  height: 40px; }\n")}`}connectedCallback(){super.connectedCallback();}disconnectedCallback(){super.disconnectedCallback();}attributeChangedCallback(e,n,t){super.attributeChangedCallback(e,n,t);}firstUpdated(e){super.firstUpdated(e);}updated(e){super.updated(e),Object.assign(this.style,{height:this.height,maxHeight:this.height,minHeight:this.height,flex:"0 0 "+this.height});}render(){return N`<slot />`}};e([K({converter:ce}),n("design:type",String)],Ie.prototype,"height",void 0),Ie=e([fe("iu-header")],Ie);let Ze=class extends he{static get styles(){return ae`${ie("* {\n  box-sizing: border-box;\n  -webkit-tap-highlight-color: transparent; }\n  *::selection {\n    background-color: var(--iu-main-color, #2ed573);\n    color: var(--iu-white-color, #ffffff); }\n\nbody {\n  padding: 0;\n  margin: 0; }\n\na {\n  color: var(--iu-main-color, #2ed573); }\n\n.hide,\n.hidden,\n[hide],\n[hidden] {\n  display: none; }\n\n.main-text {\n  color: var(--iu-main-color, #2ed573); }\n\n.main-bg {\n  background-color: var(--iu-main-color, #2ed573); }\n\n.mainLight-text {\n  color: var(--iu-mainLight-color, #f2fff8); }\n\n.mainLight-bg {\n  background-color: var(--iu-mainLight-color, #f2fff8); }\n\n.white-text {\n  color: var(--iu-white-color, #ffffff); }\n\n.white-bg {\n  background-color: var(--iu-white-color, #ffffff); }\n\n.dark-text {\n  color: var(--iu-dark-color, #2f3542); }\n\n.dark-bg {\n  background-color: var(--iu-dark-color, #2f3542); }\n\n.light-text {\n  color: var(--iu-light-color, #f5f5f5); }\n\n.light-bg {\n  background-color: var(--iu-light-color, #f5f5f5); }\n\n.light-grey-text {\n  color: var(--iu-light-grey-color, #dddddd); }\n\n.light-grey-bg {\n  background-color: var(--iu-light-grey-color, #dddddd); }\n\n.grey-text {\n  color: var(--iu-grey-color, #a4b0be); }\n\n.grey-bg {\n  background-color: var(--iu-grey-color, #a4b0be); }\n\n.success-text {\n  color: var(--iu-success-color, #2ed573); }\n\n.success-bg {\n  background-color: var(--iu-success-color, #2ed573); }\n\n.info-text {\n  color: var(--iu-info-color, #1e90ff); }\n\n.info-bg {\n  background-color: var(--iu-info-color, #1e90ff); }\n\n.warn-text {\n  color: var(--iu-warn-color, #ffa502); }\n\n.warn-bg {\n  background-color: var(--iu-warn-color, #ffa502); }\n\n.error-text {\n  color: var(--iu-error-color, #ff4757); }\n\n.error-bg {\n  background-color: var(--iu-error-color, #ff4757); }\n\n:host {\n  flex: auto;\n  overflow: auto; }\n")}`}connectedCallback(){super.connectedCallback();}disconnectedCallback(){super.disconnectedCallback();}attributeChangedCallback(e,n,t){super.attributeChangedCallback(e,n,t);}updated(e){super.updated(e);}firstUpdated(e){super.firstUpdated(e);}render(){return N`<slot />`}};Ze=e([fe("iu-content")],Ze);let De=class extends he{static get styles(){return ae`${ie("* {\n  box-sizing: border-box;\n  -webkit-tap-highlight-color: transparent; }\n  *::selection {\n    background-color: var(--iu-main-color, #2ed573);\n    color: var(--iu-white-color, #ffffff); }\n\nbody {\n  padding: 0;\n  margin: 0; }\n\na {\n  color: var(--iu-main-color, #2ed573); }\n\n.hide,\n.hidden,\n[hide],\n[hidden] {\n  display: none; }\n\n.main-text {\n  color: var(--iu-main-color, #2ed573); }\n\n.main-bg {\n  background-color: var(--iu-main-color, #2ed573); }\n\n.mainLight-text {\n  color: var(--iu-mainLight-color, #f2fff8); }\n\n.mainLight-bg {\n  background-color: var(--iu-mainLight-color, #f2fff8); }\n\n.white-text {\n  color: var(--iu-white-color, #ffffff); }\n\n.white-bg {\n  background-color: var(--iu-white-color, #ffffff); }\n\n.dark-text {\n  color: var(--iu-dark-color, #2f3542); }\n\n.dark-bg {\n  background-color: var(--iu-dark-color, #2f3542); }\n\n.light-text {\n  color: var(--iu-light-color, #f5f5f5); }\n\n.light-bg {\n  background-color: var(--iu-light-color, #f5f5f5); }\n\n.light-grey-text {\n  color: var(--iu-light-grey-color, #dddddd); }\n\n.light-grey-bg {\n  background-color: var(--iu-light-grey-color, #dddddd); }\n\n.grey-text {\n  color: var(--iu-grey-color, #a4b0be); }\n\n.grey-bg {\n  background-color: var(--iu-grey-color, #a4b0be); }\n\n.success-text {\n  color: var(--iu-success-color, #2ed573); }\n\n.success-bg {\n  background-color: var(--iu-success-color, #2ed573); }\n\n.info-text {\n  color: var(--iu-info-color, #1e90ff); }\n\n.info-bg {\n  background-color: var(--iu-info-color, #1e90ff); }\n\n.warn-text {\n  color: var(--iu-warn-color, #ffa502); }\n\n.warn-bg {\n  background-color: var(--iu-warn-color, #ffa502); }\n\n.error-text {\n  color: var(--iu-error-color, #ff4757); }\n\n.error-bg {\n  background-color: var(--iu-error-color, #ff4757); }\n\n:host {\n  width: 200px;\n  height: 100%; }\n")}`}connectedCallback(){super.connectedCallback(),this.checkParentLayout();}disconnectedCallback(){super.disconnectedCallback();}attributeChangedCallback(e,n,t){super.attributeChangedCallback(e,n,t);}firstUpdated(e){super.firstUpdated(e);}updated(e){super.updated(e),Object.assign(this.style,{width:this.width,maxWidth:this.width,minWidth:this.width,flex:"0 0 "+this.width});}checkParentLayout(){let e=this.renderRoot;if(e instanceof ShadowRoot){let n=e.host.parentElement;"iu-layout"==n.nodeName.toLowerCase()&&n.setAttribute("direction","row");}}render(){return N`<slot />`}};e([K({converter:ce}),n("design:type",String)],De.prototype,"width",void 0),De=e([fe("iu-sider")],De);let We=class extends he{static get styles(){return ae`${ie("* {\n  box-sizing: border-box;\n  -webkit-tap-highlight-color: transparent; }\n  *::selection {\n    background-color: var(--iu-main-color, #2ed573);\n    color: var(--iu-white-color, #ffffff); }\n\nbody {\n  padding: 0;\n  margin: 0; }\n\na {\n  color: var(--iu-main-color, #2ed573); }\n\n.hide,\n.hidden,\n[hide],\n[hidden] {\n  display: none; }\n\n.main-text {\n  color: var(--iu-main-color, #2ed573); }\n\n.main-bg {\n  background-color: var(--iu-main-color, #2ed573); }\n\n.mainLight-text {\n  color: var(--iu-mainLight-color, #f2fff8); }\n\n.mainLight-bg {\n  background-color: var(--iu-mainLight-color, #f2fff8); }\n\n.white-text {\n  color: var(--iu-white-color, #ffffff); }\n\n.white-bg {\n  background-color: var(--iu-white-color, #ffffff); }\n\n.dark-text {\n  color: var(--iu-dark-color, #2f3542); }\n\n.dark-bg {\n  background-color: var(--iu-dark-color, #2f3542); }\n\n.light-text {\n  color: var(--iu-light-color, #f5f5f5); }\n\n.light-bg {\n  background-color: var(--iu-light-color, #f5f5f5); }\n\n.light-grey-text {\n  color: var(--iu-light-grey-color, #dddddd); }\n\n.light-grey-bg {\n  background-color: var(--iu-light-grey-color, #dddddd); }\n\n.grey-text {\n  color: var(--iu-grey-color, #a4b0be); }\n\n.grey-bg {\n  background-color: var(--iu-grey-color, #a4b0be); }\n\n.success-text {\n  color: var(--iu-success-color, #2ed573); }\n\n.success-bg {\n  background-color: var(--iu-success-color, #2ed573); }\n\n.info-text {\n  color: var(--iu-info-color, #1e90ff); }\n\n.info-bg {\n  background-color: var(--iu-info-color, #1e90ff); }\n\n.warn-text {\n  color: var(--iu-warn-color, #ffa502); }\n\n.warn-bg {\n  background-color: var(--iu-warn-color, #ffa502); }\n\n.error-text {\n  color: var(--iu-error-color, #ff4757); }\n\n.error-bg {\n  background-color: var(--iu-error-color, #ff4757); }\n\n:host {\n  height: 40px; }\n")}`}connectedCallback(){super.connectedCallback();}disconnectedCallback(){super.disconnectedCallback();}attributeChangedCallback(e,n,t){super.attributeChangedCallback(e,n,t);}firstUpdated(e){super.firstUpdated(e);}updated(e){super.updated(e),Object.assign(this.style,{height:this.height,maxHeight:this.height,minHeight:this.height,flex:"0 0 "+this.height});}render(){return N`<slot />`}};e([K({converter:ce}),n("design:type",String)],We.prototype,"height",void 0),We=e([fe("iu-footer")],We);let Ge=class extends he{constructor(){super(...arguments),this.direction="column";}static get styles(){return ae`${ie("* {\n  box-sizing: border-box;\n  -webkit-tap-highlight-color: transparent; }\n  *::selection {\n    background-color: var(--iu-main-color, #2ed573);\n    color: var(--iu-white-color, #ffffff); }\n\nbody {\n  padding: 0;\n  margin: 0; }\n\na {\n  color: var(--iu-main-color, #2ed573); }\n\n.hide,\n.hidden,\n[hide],\n[hidden] {\n  display: none; }\n\n.main-text {\n  color: var(--iu-main-color, #2ed573); }\n\n.main-bg {\n  background-color: var(--iu-main-color, #2ed573); }\n\n.mainLight-text {\n  color: var(--iu-mainLight-color, #f2fff8); }\n\n.mainLight-bg {\n  background-color: var(--iu-mainLight-color, #f2fff8); }\n\n.white-text {\n  color: var(--iu-white-color, #ffffff); }\n\n.white-bg {\n  background-color: var(--iu-white-color, #ffffff); }\n\n.dark-text {\n  color: var(--iu-dark-color, #2f3542); }\n\n.dark-bg {\n  background-color: var(--iu-dark-color, #2f3542); }\n\n.light-text {\n  color: var(--iu-light-color, #f5f5f5); }\n\n.light-bg {\n  background-color: var(--iu-light-color, #f5f5f5); }\n\n.light-grey-text {\n  color: var(--iu-light-grey-color, #dddddd); }\n\n.light-grey-bg {\n  background-color: var(--iu-light-grey-color, #dddddd); }\n\n.grey-text {\n  color: var(--iu-grey-color, #a4b0be); }\n\n.grey-bg {\n  background-color: var(--iu-grey-color, #a4b0be); }\n\n.success-text {\n  color: var(--iu-success-color, #2ed573); }\n\n.success-bg {\n  background-color: var(--iu-success-color, #2ed573); }\n\n.info-text {\n  color: var(--iu-info-color, #1e90ff); }\n\n.info-bg {\n  background-color: var(--iu-info-color, #1e90ff); }\n\n.warn-text {\n  color: var(--iu-warn-color, #ffa502); }\n\n.warn-bg {\n  background-color: var(--iu-warn-color, #ffa502); }\n\n.error-text {\n  color: var(--iu-error-color, #ff4757); }\n\n.error-bg {\n  background-color: var(--iu-error-color, #ff4757); }\n\n:host {\n  display: flex;\n  flex: auto;\n  flex-direction: column;\n  width: 100%;\n  height: 100%; }\n\n:host([direction=row]) {\n  flex-direction: row; }\n")}`}connectedCallback(){super.connectedCallback();}disconnectedCallback(){super.disconnectedCallback();}attributeChangedCallback(e,n,t){super.attributeChangedCallback(e,n,t);}firstUpdated(e){super.firstUpdated(e);}updated(e){super.updated(e),Object.assign(this.style,{height:this.height,width:this.width});}render(){return N`<slot />`}};e([K({reflect:!0}),n("design:type",String)],Ge.prototype,"direction",void 0),e([K({converter:ce}),n("design:type",String)],Ge.prototype,"width",void 0),e([K({converter:ce}),n("design:type",String)],Ge.prototype,"height",void 0),Ge=e([fe("iu-layout")],Ge);
	/**
	 * @license
	 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
	 * This code may only be used under the BSD style license found at
	 * http://polymer.github.io/LICENSE.txt
	 * The complete set of authors may be found at
	 * http://polymer.github.io/AUTHORS.txt
	 * The complete set of contributors may be found at
	 * http://polymer.github.io/CONTRIBUTORS.txt
	 * Code distributed by Google as part of the polymer project is also
	 * subject to an additional IP rights grant found at
	 * http://polymer.github.io/PATENTS.txt
	 */
	const Je=new WeakMap,Ye=b(e=>n=>{if(!(n instanceof L))throw new Error("unsafeHTML can only be used in text bindings");const t=Je.get(n);if(void 0!==t&&z(e)&&e===t.value&&n.value===t.fragment)return;const o=document.createElement("template");o.innerHTML=e;const r=document.importNode(o.content,!0);n.setValue(r),Je.set(n,{value:e,fragment:r});});var Xe="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof commonjsGlobal?commonjsGlobal:"undefined"!=typeof self?self:{};function Ke(e,n){return e(n={exports:{}},n.exports),n.exports}var Qe=Ke((function(e){function n(){return {baseUrl:null,breaks:!1,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartLists:!1,smartypants:!1,tokenizer:null,xhtml:!1}}e.exports={defaults:{baseUrl:null,breaks:!1,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartLists:!1,smartypants:!1,tokenizer:null,xhtml:!1},getDefaults:n,changeDefaults:function(n){e.exports.defaults=n;}};}));Qe.defaults,Qe.getDefaults,Qe.changeDefaults;const en=/[&<>"']/,nn=/[&<>"']/g,tn=/[<>"']|&(?!#?\w+;)/,on=/[<>"']|&(?!#?\w+;)/g,rn={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},an=e=>rn[e];const ln=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi;function sn(e){return e.replace(ln,(e,n)=>"colon"===(n=n.toLowerCase())?":":"#"===n.charAt(0)?"x"===n.charAt(1)?String.fromCharCode(parseInt(n.substring(2),16)):String.fromCharCode(+n.substring(1)):"")}const cn=/(^|[^\[])\^/g;const dn=/[^\w:]/g,un=/^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;const hn={},pn=/^[^:]+:\/*[^/]*$/,gn=/^([^:]+:)[\s\S]*$/,fn=/^([^:]+:\/*[^/]*)[\s\S]*$/;function mn(e,n){hn[" "+e]||(pn.test(e)?hn[" "+e]=e+"/":hn[" "+e]=bn(e,"/",!0));const t=-1===(e=hn[" "+e]).indexOf(":");return "//"===n.substring(0,2)?t?n:e.replace(gn,"$1")+n:"/"===n.charAt(0)?t?n:e.replace(fn,"$1")+n:e+n}function bn(e,n,t){const o=e.length;if(0===o)return "";let r=0;for(;r<o;){const i=e.charAt(o-r-1);if(i!==n||t){if(i===n||!t)break;r++;}else r++;}return e.substr(0,o-r)}var vn={escape:function(e,n){if(n){if(en.test(e))return e.replace(nn,an)}else if(tn.test(e))return e.replace(on,an);return e},unescape:sn,edit:function(e,n){e=e.source||e,n=n||"";const t={replace:(n,o)=>(o=(o=o.source||o).replace(cn,"$1"),e=e.replace(n,o),t),getRegex:()=>new RegExp(e,n)};return t},cleanUrl:function(e,n,t){if(e){let e;try{e=decodeURIComponent(sn(t)).replace(dn,"").toLowerCase();}catch(e){return null}if(0===e.indexOf("javascript:")||0===e.indexOf("vbscript:")||0===e.indexOf("data:"))return null}n&&!un.test(t)&&(t=mn(n,t));try{t=encodeURI(t).replace(/%25/g,"%");}catch(e){return null}return t},resolveUrl:mn,noopTest:{exec:function(){}},merge:function(e){let n,t,o=1;for(;o<arguments.length;o++)for(t in n=arguments[o],n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t]);return e},splitCells:function(e,n){const t=e.replace(/\|/g,(e,n,t)=>{let o=!1,r=n;for(;--r>=0&&"\\"===t[r];)o=!o;return o?"|":" |"}).split(/ \|/);let o=0;if(t.length>n)t.splice(n);else for(;t.length<n;)t.push("");for(;o<t.length;o++)t[o]=t[o].trim().replace(/\\\|/g,"|");return t},rtrim:bn,findClosingBracket:function(e,n){if(-1===e.indexOf(n[1]))return -1;const t=e.length;let o=0,r=0;for(;r<t;r++)if("\\"===e[r])r++;else if(e[r]===n[0])o++;else if(e[r]===n[1]&&(o--,o<0))return r;return -1},checkSanitizeDeprecation:function(e){e&&e.sanitize&&!e.silent&&console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options");}};const{defaults:wn}=Qe,{rtrim:kn,splitCells:yn,escape:xn,findClosingBracket:Cn}=vn;function zn(e,n,t){const o=n.href,r=n.title?xn(n.title):null;return "!"!==e[0].charAt(0)?{type:"link",raw:t,href:o,title:r,text:e[1]}:{type:"image",raw:t,text:xn(e[1]),href:o,title:r}}var Sn=class{constructor(e){this.options=e||wn;}space(e){const n=this.rules.block.newline.exec(e);if(n)return n[0].length>1?{type:"space",raw:n[0]}:{raw:"\n"}}code(e,n){const t=this.rules.block.code.exec(e);if(t){const e=n[n.length-1];if(e&&"paragraph"===e.type)return n.pop(),e.text+="\n"+t[0].trimRight(),e.raw+="\n"+t[0],e;{const e=t[0].replace(/^ {4}/gm,"");return {type:"code",raw:t[0],codeBlockStyle:"indented",text:this.options.pedantic?e:kn(e,"\n")}}}}fences(e){const n=this.rules.block.fences.exec(e);if(n)return {type:"code",raw:n[0],lang:n[2]?n[2].trim():n[2],text:n[3]||""}}heading(e){const n=this.rules.block.heading.exec(e);if(n)return {type:"heading",raw:n[0],depth:n[1].length,text:n[2]}}nptable(e){const n=this.rules.block.nptable.exec(e);if(n){const e={type:"table",header:yn(n[1].replace(/^ *| *\| *$/g,"")),align:n[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:n[3]?n[3].replace(/\n$/,"").split("\n"):[],raw:n[0]};if(e.header.length===e.align.length){let n,t=e.align.length;for(n=0;n<t;n++)/^ *-+: *$/.test(e.align[n])?e.align[n]="right":/^ *:-+: *$/.test(e.align[n])?e.align[n]="center":/^ *:-+ *$/.test(e.align[n])?e.align[n]="left":e.align[n]=null;for(t=e.cells.length,n=0;n<t;n++)e.cells[n]=yn(e.cells[n],e.header.length);return e}}}hr(e){const n=this.rules.block.hr.exec(e);if(n)return {type:"hr",raw:n[0]}}blockquote(e){const n=this.rules.block.blockquote.exec(e);if(n){const e=n[0].replace(/^ *> ?/gm,"");return {type:"blockquote",raw:n[0],text:e}}}list(e){const n=this.rules.block.list.exec(e);if(n){let e=n[0];const t=n[2],o=t.length>1,r={type:"list",raw:e,ordered:o,start:o?+t:"",loose:!1,items:[]},i=n[0].match(this.rules.block.item);let a,l,s,c,d,u,h,p=!1;const g=i.length;for(let n=0;n<g;n++)a=i[n],e=a,l=a.length,a=a.replace(/^ *([*+-]|\d+\.) */,""),~a.indexOf("\n ")&&(l-=a.length,a=this.options.pedantic?a.replace(/^ {1,4}/gm,""):a.replace(new RegExp("^ {1,"+l+"}","gm"),"")),n!==g-1&&(s=this.rules.block.bullet.exec(i[n+1])[0],(t.length>1?1===s.length:s.length>1||this.options.smartLists&&s!==t)&&(c=i.slice(n+1).join("\n"),r.raw=r.raw.substring(0,r.raw.length-c.length),n=g-1)),d=p||/\n\n(?!\s*$)/.test(a),n!==g-1&&(p="\n"===a.charAt(a.length-1),d||(d=p)),d&&(r.loose=!0),u=/^\[[ xX]\] /.test(a),h=void 0,u&&(h=" "!==a[1],a=a.replace(/^\[[ xX]\] +/,"")),r.items.push({raw:e,task:u,checked:h,loose:d,text:a});return r}}html(e){const n=this.rules.block.html.exec(e);if(n)return {type:this.options.sanitize?"paragraph":"html",raw:n[0],pre:!this.options.sanitizer&&("pre"===n[1]||"script"===n[1]||"style"===n[1]),text:this.options.sanitize?this.options.sanitizer?this.options.sanitizer(n[0]):xn(n[0]):n[0]}}def(e){const n=this.rules.block.def.exec(e);if(n){return n[3]&&(n[3]=n[3].substring(1,n[3].length-1)),{tag:n[1].toLowerCase().replace(/\s+/g," "),raw:n[0],href:n[2],title:n[3]}}}table(e){const n=this.rules.block.table.exec(e);if(n){const e={type:"table",header:yn(n[1].replace(/^ *| *\| *$/g,"")),align:n[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:n[3]?n[3].replace(/\n$/,"").split("\n"):[]};if(e.header.length===e.align.length){e.raw=n[0];let t,o=e.align.length;for(t=0;t<o;t++)/^ *-+: *$/.test(e.align[t])?e.align[t]="right":/^ *:-+: *$/.test(e.align[t])?e.align[t]="center":/^ *:-+ *$/.test(e.align[t])?e.align[t]="left":e.align[t]=null;for(o=e.cells.length,t=0;t<o;t++)e.cells[t]=yn(e.cells[t].replace(/^ *\| *| *\| *$/g,""),e.header.length);return e}}}lheading(e){const n=this.rules.block.lheading.exec(e);if(n)return {type:"heading",raw:n[0],depth:"="===n[2].charAt(0)?1:2,text:n[1]}}paragraph(e){const n=this.rules.block.paragraph.exec(e);if(n)return {type:"paragraph",raw:n[0],text:"\n"===n[1].charAt(n[1].length-1)?n[1].slice(0,-1):n[1]}}text(e){const n=this.rules.block.text.exec(e);if(n)return {type:"text",raw:n[0],text:n[0]}}escape(e){const n=this.rules.inline.escape.exec(e);if(n)return {type:"escape",raw:n[0],text:xn(n[1])}}tag(e,n,t){const o=this.rules.inline.tag.exec(e);if(o)return !n&&/^<a /i.test(o[0])?n=!0:n&&/^<\/a>/i.test(o[0])&&(n=!1),!t&&/^<(pre|code|kbd|script)(\s|>)/i.test(o[0])?t=!0:t&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(o[0])&&(t=!1),{type:this.options.sanitize?"text":"html",raw:o[0],inLink:n,inRawBlock:t,text:this.options.sanitize?this.options.sanitizer?this.options.sanitizer(o[0]):xn(o[0]):o[0]}}link(e){const n=this.rules.inline.link.exec(e);if(n){const e=Cn(n[2],"()");if(e>-1){const t=(0===n[0].indexOf("!")?5:4)+n[1].length+e;n[2]=n[2].substring(0,e),n[0]=n[0].substring(0,t).trim(),n[3]="";}let t=n[2],o="";if(this.options.pedantic){const e=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(t);e?(t=e[1],o=e[3]):o="";}else o=n[3]?n[3].slice(1,-1):"";return t=t.trim().replace(/^<([\s\S]*)>$/,"$1"),zn(n,{href:t?t.replace(this.rules.inline._escapes,"$1"):t,title:o?o.replace(this.rules.inline._escapes,"$1"):o},n[0])}}reflink(e,n){let t;if((t=this.rules.inline.reflink.exec(e))||(t=this.rules.inline.nolink.exec(e))){let e=(t[2]||t[1]).replace(/\s+/g," ");if(e=n[e.toLowerCase()],!e||!e.href){const e=t[0].charAt(0);return {type:"text",raw:e,text:e}}return zn(t,e,t[0])}}strong(e){const n=this.rules.inline.strong.exec(e);if(n)return {type:"strong",raw:n[0],text:n[4]||n[3]||n[2]||n[1]}}em(e){const n=this.rules.inline.em.exec(e);if(n)return {type:"em",raw:n[0],text:n[6]||n[5]||n[4]||n[3]||n[2]||n[1]}}codespan(e){const n=this.rules.inline.code.exec(e);if(n)return {type:"codespan",raw:n[0],text:xn(n[2].trim(),!0)}}br(e){const n=this.rules.inline.br.exec(e);if(n)return {type:"br",raw:n[0]}}del(e){const n=this.rules.inline.del.exec(e);if(n)return {type:"del",raw:n[0],text:n[1]}}autolink(e,n){const t=this.rules.inline.autolink.exec(e);if(t){let e,o;return "@"===t[2]?(e=xn(this.options.mangle?n(t[1]):t[1]),o="mailto:"+e):(e=xn(t[1]),o=e),{type:"link",raw:t[0],text:e,href:o,tokens:[{type:"text",raw:e,text:e}]}}}url(e,n){let t;if(t=this.rules.inline.url.exec(e)){let e,o;if("@"===t[2])e=xn(this.options.mangle?n(t[0]):t[0]),o="mailto:"+e;else {let n;do{n=t[0],t[0]=this.rules.inline._backpedal.exec(t[0])[0];}while(n!==t[0]);e=xn(t[0]),o="www."===t[1]?"http://"+e:e;}return {type:"link",raw:t[0],text:e,href:o,tokens:[{type:"text",raw:e,text:e}]}}}inlineText(e,n,t){const o=this.rules.inline.text.exec(e);if(o){let e;return e=n?this.options.sanitize?this.options.sanitizer?this.options.sanitizer(o[0]):xn(o[0]):o[0]:xn(this.options.smartypants?t(o[0]):o[0]),{type:"text",raw:o[0],text:e}}}};const{noopTest:_n,edit:$n,merge:Ln}=vn,Mn={newline:/^\n+/,code:/^( {4}[^\n]+\n*)+/,fences:/^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?:\n+|$)|$)/,hr:/^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/,heading:/^ {0,3}(#{1,6}) +([^\n]*?)(?: +#+)? *(?:\n+|$)/,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( {0,3})(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,html:"^ {0,3}(?:<(script|pre|style)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?\\?>\\n*|<![A-Z][\\s\\S]*?>\\n*|<!\\[CDATA\\[[\\s\\S]*?\\]\\]>\\n*|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:\\n{2,}|$)|<(?!script|pre|style)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:\\n{2,}|$)|</(?!script|pre|style)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:\\n{2,}|$))",def:/^ {0,3}\[(label)\]: *\n? *<?([^\s>]+)>?(?:(?: +\n? *| *\n *)(title))? *(?:\n+|$)/,nptable:_n,table:_n,lheading:/^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/,_paragraph:/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html)[^\n]+)*)/,text:/^[^\n]+/,_label:/(?!\s*\])(?:\\[\[\]]|[^\[\]])+/,_title:/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/};Mn.def=$n(Mn.def).replace("label",Mn._label).replace("title",Mn._title).getRegex(),Mn.bullet=/(?:[*+-]|\d{1,9}\.)/,Mn.item=/^( *)(bull) ?[^\n]*(?:\n(?!\1bull ?)[^\n]*)*/,Mn.item=$n(Mn.item,"gm").replace(/bull/g,Mn.bullet).getRegex(),Mn.list=$n(Mn.list).replace(/bull/g,Mn.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+Mn.def.source+")").getRegex(),Mn._tag="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",Mn._comment=/<!--(?!-?>)[\s\S]*?-->/,Mn.html=$n(Mn.html,"i").replace("comment",Mn._comment).replace("tag",Mn._tag).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),Mn.paragraph=$n(Mn._paragraph).replace("hr",Mn.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)").replace("tag",Mn._tag).getRegex(),Mn.blockquote=$n(Mn.blockquote).replace("paragraph",Mn.paragraph).getRegex(),Mn.normal=Ln({},Mn),Mn.gfm=Ln({},Mn.normal,{nptable:"^ *([^|\\n ].*\\|.*)\\n *([-:]+ *\\|[-| :]*)(?:\\n((?:(?!\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)",table:"^ *\\|(.+)\\n *\\|?( *[-:]+[-| :]*)(?:\\n *((?:(?!\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"}),Mn.gfm.nptable=$n(Mn.gfm.nptable).replace("hr",Mn.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)").replace("tag",Mn._tag).getRegex(),Mn.gfm.table=$n(Mn.gfm.table).replace("hr",Mn.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)").replace("tag",Mn._tag).getRegex(),Mn.pedantic=Ln({},Mn.normal,{html:$n("^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:\"[^\"]*\"|'[^']*'|\\s[^'\"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))").replace("comment",Mn._comment).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^ *(#{1,6}) *([^\n]+?) *(?:#+ *)?(?:\n+|$)/,fences:_n,paragraph:$n(Mn.normal._paragraph).replace("hr",Mn.hr).replace("heading"," *#{1,6} *[^\n]").replace("lheading",Mn.lheading).replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").getRegex()});const An={escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:_n,tag:"^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",link:/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,reflink:/^!?\[(label)\]\[(?!\s*\])((?:\\[\[\]]?|[^\[\]\\])+)\]/,nolink:/^!?\[(?!\s*\])((?:\[[^\[\]]*\]|\\[\[\]]|[^\[\]])*)\](?:\[\])?/,strong:/^__([^\s_])__(?!_)|^\*\*([^\s*])\*\*(?!\*)|^__([^\s][\s\S]*?[^\s])__(?!_)|^\*\*([^\s][\s\S]*?[^\s])\*\*(?!\*)/,em:/^_([^\s_])_(?!_)|^_([^\s_<][\s\S]*?[^\s_])_(?!_|[^\spunctuation])|^_([^\s_<][\s\S]*?[^\s])_(?!_|[^\spunctuation])|^\*([^\s*<\[])\*(?!\*)|^\*([^\s<"][\s\S]*?[^\s\[\*])\*(?![\]`punctuation])|^\*([^\s*"<\[][\s\S]*[^\s])\*(?!\*)/,code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,br:/^( {2,}|\\)\n(?!\s*$)/,del:_n,text:/^(`+|[^`])(?:[\s\S]*?(?:(?=[\\<!\[`*]|\b_|$)|[^ ](?= {2,}\n))|(?= {2,}\n))/,_punctuation:"!\"#$%&'()*+\\-./:;<=>?@\\[^_{|}~"};An.em=$n(An.em).replace(/punctuation/g,An._punctuation).getRegex(),An._escapes=/\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g,An._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/,An._email=/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/,An.autolink=$n(An.autolink).replace("scheme",An._scheme).replace("email",An._email).getRegex(),An._attribute=/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/,An.tag=$n(An.tag).replace("comment",Mn._comment).replace("attribute",An._attribute).getRegex(),An._label=/(?:\[[^\[\]]*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,An._href=/<(?:\\[<>]?|[^\s<>\\])*>|[^\s\x00-\x1f]*/,An._title=/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/,An.link=$n(An.link).replace("label",An._label).replace("href",An._href).replace("title",An._title).getRegex(),An.reflink=$n(An.reflink).replace("label",An._label).getRegex(),An.normal=Ln({},An),An.pedantic=Ln({},An.normal,{strong:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,em:/^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/,link:$n(/^!?\[(label)\]\((.*?)\)/).replace("label",An._label).getRegex(),reflink:$n(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",An._label).getRegex()}),An.gfm=Ln({},An.normal,{escape:$n(An.escape).replace("])","~|])").getRegex(),_extended_email:/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,url:/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,_backpedal:/(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,del:/^~+(?=\S)([\s\S]*?\S)~+/,text:/^(`+|[^`])(?:[\s\S]*?(?:(?=[\\<!\[`*~]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))|(?= {2,}\n|[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))/}),An.gfm.url=$n(An.gfm.url,"i").replace("email",An.gfm._extended_email).getRegex(),An.breaks=Ln({},An.gfm,{br:$n(An.br).replace("{2,}","*").getRegex(),text:$n(An.gfm.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()});var qn={block:Mn,inline:An};const{defaults:Bn}=Qe,{block:En,inline:Tn}=qn;function Pn(e){return e.replace(/---/g,"—").replace(/--/g,"–").replace(/(^|[-\u2014/(\[{"\s])'/g,"$1‘").replace(/'/g,"’").replace(/(^|[-\u2014/(\[{\u2018\s])"/g,"$1“").replace(/"/g,"”").replace(/\.{3}/g,"…")}function On(e){let n,t,o="";const r=e.length;for(n=0;n<r;n++)t=e.charCodeAt(n),Math.random()>.5&&(t="x"+t.toString(16)),o+="&#"+t+";";return o}var Vn=class e{constructor(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||Bn,this.options.tokenizer=this.options.tokenizer||new Sn,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options;const n={block:En.normal,inline:Tn.normal};this.options.pedantic?(n.block=En.pedantic,n.inline=Tn.pedantic):this.options.gfm&&(n.block=En.gfm,this.options.breaks?n.inline=Tn.breaks:n.inline=Tn.gfm),this.tokenizer.rules=n;}static get rules(){return {block:En,inline:Tn}}static lex(n,t){return new e(t).lex(n)}lex(e){return e=e.replace(/\r\n|\r/g,"\n").replace(/\t/g,"    "),this.blockTokens(e,this.tokens,!0),this.inline(this.tokens),this.tokens}blockTokens(e,n=[],t=!0){let o,r,i;for(e=e.replace(/^ +$/gm,"");e;)if(o=this.tokenizer.space(e))e=e.substring(o.raw.length),o.type&&n.push(o);else if(o=this.tokenizer.code(e,n))e=e.substring(o.raw.length),n.push(o);else if(o=this.tokenizer.fences(e))e=e.substring(o.raw.length),n.push(o);else if(o=this.tokenizer.heading(e))e=e.substring(o.raw.length),n.push(o);else if(o=this.tokenizer.nptable(e))e=e.substring(o.raw.length),n.push(o);else if(o=this.tokenizer.hr(e))e=e.substring(o.raw.length),n.push(o);else if(o=this.tokenizer.blockquote(e))e=e.substring(o.raw.length),o.tokens=this.blockTokens(o.text,[],t),n.push(o);else if(o=this.tokenizer.list(e)){for(e=e.substring(o.raw.length),i=o.items.length,r=0;r<i;r++)o.items[r].tokens=this.blockTokens(o.items[r].text,[],!1);n.push(o);}else if(o=this.tokenizer.html(e))e=e.substring(o.raw.length),n.push(o);else if(t&&(o=this.tokenizer.def(e)))e=e.substring(o.raw.length),this.tokens.links[o.tag]||(this.tokens.links[o.tag]={href:o.href,title:o.title});else if(o=this.tokenizer.table(e))e=e.substring(o.raw.length),n.push(o);else if(o=this.tokenizer.lheading(e))e=e.substring(o.raw.length),n.push(o);else if(t&&(o=this.tokenizer.paragraph(e)))e=e.substring(o.raw.length),n.push(o);else if(o=this.tokenizer.text(e))e=e.substring(o.raw.length),n.push(o);else if(e){const n="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(n);break}throw new Error(n)}return n}inline(e){let n,t,o,r,i,a;const l=e.length;for(n=0;n<l;n++)switch(a=e[n],a.type){case"paragraph":case"text":case"heading":a.tokens=[],this.inlineTokens(a.text,a.tokens);break;case"table":for(a.tokens={header:[],cells:[]},r=a.header.length,t=0;t<r;t++)a.tokens.header[t]=[],this.inlineTokens(a.header[t],a.tokens.header[t]);for(r=a.cells.length,t=0;t<r;t++)for(i=a.cells[t],a.tokens.cells[t]=[],o=0;o<i.length;o++)a.tokens.cells[t][o]=[],this.inlineTokens(i[o],a.tokens.cells[t][o]);break;case"blockquote":this.inline(a.tokens);break;case"list":for(r=a.items.length,t=0;t<r;t++)this.inline(a.items[t].tokens);}return e}inlineTokens(e,n=[],t=!1,o=!1){let r;for(;e;)if(r=this.tokenizer.escape(e))e=e.substring(r.raw.length),n.push(r);else if(r=this.tokenizer.tag(e,t,o))e=e.substring(r.raw.length),t=r.inLink,o=r.inRawBlock,n.push(r);else if(r=this.tokenizer.link(e))e=e.substring(r.raw.length),"link"===r.type&&(r.tokens=this.inlineTokens(r.text,[],!0,o)),n.push(r);else if(r=this.tokenizer.reflink(e,this.tokens.links))e=e.substring(r.raw.length),"link"===r.type&&(r.tokens=this.inlineTokens(r.text,[],!0,o)),n.push(r);else if(r=this.tokenizer.strong(e))e=e.substring(r.raw.length),r.tokens=this.inlineTokens(r.text,[],t,o),n.push(r);else if(r=this.tokenizer.em(e))e=e.substring(r.raw.length),r.tokens=this.inlineTokens(r.text,[],t,o),n.push(r);else if(r=this.tokenizer.codespan(e))e=e.substring(r.raw.length),n.push(r);else if(r=this.tokenizer.br(e))e=e.substring(r.raw.length),n.push(r);else if(r=this.tokenizer.del(e))e=e.substring(r.raw.length),r.tokens=this.inlineTokens(r.text,[],t,o),n.push(r);else if(r=this.tokenizer.autolink(e,On))e=e.substring(r.raw.length),n.push(r);else if(t||!(r=this.tokenizer.url(e,On))){if(r=this.tokenizer.inlineText(e,o,Pn))e=e.substring(r.raw.length),n.push(r);else if(e){const n="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(n);break}throw new Error(n)}}else e=e.substring(r.raw.length),n.push(r);return n}};const{defaults:Un}=Qe,{cleanUrl:Nn,escape:Hn}=vn;var Fn=class{constructor(e){this.options=e||Un;}code(e,n,t){const o=(n||"").match(/\S*/)[0];if(this.options.highlight){const n=this.options.highlight(e,o);null!=n&&n!==e&&(t=!0,e=n);}return o?'<pre><code class="'+this.options.langPrefix+Hn(o,!0)+'">'+(t?e:Hn(e,!0))+"</code></pre>\n":"<pre><code>"+(t?e:Hn(e,!0))+"</code></pre>"}blockquote(e){return "<blockquote>\n"+e+"</blockquote>\n"}html(e){return e}heading(e,n,t,o){return this.options.headerIds?"<h"+n+' id="'+this.options.headerPrefix+o.slug(t)+'">'+e+"</h"+n+">\n":"<h"+n+">"+e+"</h"+n+">\n"}hr(){return this.options.xhtml?"<hr/>\n":"<hr>\n"}list(e,n,t){const o=n?"ol":"ul";return "<"+o+(n&&1!==t?' start="'+t+'"':"")+">\n"+e+"</"+o+">\n"}listitem(e){return "<li>"+e+"</li>\n"}checkbox(e){return "<input "+(e?'checked="" ':"")+'disabled="" type="checkbox"'+(this.options.xhtml?" /":"")+"> "}paragraph(e){return "<p>"+e+"</p>\n"}table(e,n){return n&&(n="<tbody>"+n+"</tbody>"),"<table>\n<thead>\n"+e+"</thead>\n"+n+"</table>\n"}tablerow(e){return "<tr>\n"+e+"</tr>\n"}tablecell(e,n){const t=n.header?"th":"td";return (n.align?"<"+t+' align="'+n.align+'">':"<"+t+">")+e+"</"+t+">\n"}strong(e){return "<strong>"+e+"</strong>"}em(e){return "<em>"+e+"</em>"}codespan(e){return "<code>"+e+"</code>"}br(){return this.options.xhtml?"<br/>":"<br>"}del(e){return "<del>"+e+"</del>"}link(e,n,t){if(null===(e=Nn(this.options.sanitize,this.options.baseUrl,e)))return t;let o='<a href="'+Hn(e)+'"';return n&&(o+=' title="'+n+'"'),o+=">"+t+"</a>",o}image(e,n,t){if(null===(e=Nn(this.options.sanitize,this.options.baseUrl,e)))return t;let o='<img src="'+e+'" alt="'+t+'"';return n&&(o+=' title="'+n+'"'),o+=this.options.xhtml?"/>":">",o}text(e){return e}},jn=class{strong(e){return e}em(e){return e}codespan(e){return e}del(e){return e}html(e){return e}text(e){return e}link(e,n,t){return ""+t}image(e,n,t){return ""+t}br(){return ""}},Rn=class{constructor(){this.seen={};}slug(e){let n=e.toLowerCase().trim().replace(/<[!\/a-z].*?>/gi,"").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,"").replace(/\s/g,"-");if(this.seen.hasOwnProperty(n)){const e=n;do{this.seen[e]++,n=e+"-"+this.seen[e];}while(this.seen.hasOwnProperty(n))}return this.seen[n]=0,n}};const{defaults:In}=Qe,{unescape:Zn}=vn;var Dn=class e{constructor(e){this.options=e||In,this.options.renderer=this.options.renderer||new Fn,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new jn,this.slugger=new Rn;}static parse(n,t){return new e(t).parse(n)}parse(e,n=!0){let t,o,r,i,a,l,s,c,d,u,h,p,g,f,m,b,v,w,k="";const y=e.length;for(t=0;t<y;t++)switch(u=e[t],u.type){case"space":continue;case"hr":k+=this.renderer.hr();continue;case"heading":k+=this.renderer.heading(this.parseInline(u.tokens),u.depth,Zn(this.parseInline(u.tokens,this.textRenderer)),this.slugger);continue;case"code":k+=this.renderer.code(u.text,u.lang,u.escaped);continue;case"table":for(c="",s="",i=u.header.length,o=0;o<i;o++)s+=this.renderer.tablecell(this.parseInline(u.tokens.header[o]),{header:!0,align:u.align[o]});for(c+=this.renderer.tablerow(s),d="",i=u.cells.length,o=0;o<i;o++){for(l=u.tokens.cells[o],s="",a=l.length,r=0;r<a;r++)s+=this.renderer.tablecell(this.parseInline(l[r]),{header:!1,align:u.align[r]});d+=this.renderer.tablerow(s);}k+=this.renderer.table(c,d);continue;case"blockquote":d=this.parse(u.tokens),k+=this.renderer.blockquote(d);continue;case"list":for(h=u.ordered,p=u.start,g=u.loose,i=u.items.length,d="",o=0;o<i;o++)m=u.items[o],b=m.checked,v=m.task,f="",m.task&&(w=this.renderer.checkbox(b),g?"text"===m.tokens[0].type?(m.tokens[0].text=w+" "+m.tokens[0].text,m.tokens[0].tokens&&m.tokens[0].tokens.length>0&&"text"===m.tokens[0].tokens[0].type&&(m.tokens[0].tokens[0].text=w+" "+m.tokens[0].tokens[0].text)):m.tokens.unshift({type:"text",text:w}):f+=w),f+=this.parse(m.tokens,g),d+=this.renderer.listitem(f,v,b);k+=this.renderer.list(d,h,p);continue;case"html":k+=this.renderer.html(u.text);continue;case"paragraph":k+=this.renderer.paragraph(this.parseInline(u.tokens));continue;case"text":for(d=u.tokens?this.parseInline(u.tokens):u.text;t+1<y&&"text"===e[t+1].type;)u=e[++t],d+="\n"+(u.tokens?this.parseInline(u.tokens):u.text);k+=n?this.renderer.paragraph(d):d;continue;default:{const e='Token with "'+u.type+'" type was not found.';if(this.options.silent)return void console.error(e);throw new Error(e)}}return k}parseInline(e,n){n=n||this.renderer;let t,o,r="";const i=e.length;for(t=0;t<i;t++)switch(o=e[t],o.type){case"escape":r+=n.text(o.text);break;case"html":r+=n.html(o.text);break;case"link":r+=n.link(o.href,o.title,this.parseInline(o.tokens,n));break;case"image":r+=n.image(o.href,o.title,o.text);break;case"strong":r+=n.strong(this.parseInline(o.tokens,n));break;case"em":r+=n.em(this.parseInline(o.tokens,n));break;case"codespan":r+=n.codespan(o.text);break;case"br":r+=n.br();break;case"del":r+=n.del(this.parseInline(o.tokens,n));break;case"text":r+=n.text(o.text);break;default:{const e='Token with "'+o.type+'" type was not found.';if(this.options.silent)return void console.error(e);throw new Error(e)}}return r}};const{merge:Wn,checkSanitizeDeprecation:Gn,escape:Jn}=vn,{getDefaults:Yn,changeDefaults:Xn,defaults:Kn}=Qe;function Qn(e,n,t){if(null==e)throw new Error("marked(): input parameter is undefined or null");if("string"!=typeof e)throw new Error("marked(): input parameter is of type "+Object.prototype.toString.call(e)+", string expected");if(t||"function"==typeof n){t||(t=n,n=null),n=Wn({},Qn.defaults,n||{}),Gn(n);const o=n.highlight;let r,i,a=0;try{r=Vn.lex(e,n);}catch(e){return t(e)}i=r.length;const l=function(e){if(e)return n.highlight=o,t(e);let i;try{i=Dn.parse(r,n);}catch(n){e=n;}return n.highlight=o,e?t(e):t(null,i)};if(!o||o.length<3)return l();if(delete n.highlight,!i)return l();for(;a<r.length;a++)!function(e){"code"!==e.type?--i||l():o(e.text,e.lang,(function(n,t){return n?l(n):null==t||t===e.text?--i||l():(e.text=t,e.escaped=!0,void(--i||l()))}));}(r[a]);}else try{return n=Wn({},Qn.defaults,n||{}),Gn(n),Dn.parse(Vn.lex(e,n),n)}catch(e){if(e.message+="\nPlease report this to https://github.com/markedjs/marked.",(n||Qn.defaults).silent)return "<p>An error occurred:</p><pre>"+Jn(e.message+"",!0)+"</pre>";throw e}}Qn.options=Qn.setOptions=function(e){return Wn(Qn.defaults,e),Xn(Qn.defaults),Qn},Qn.getDefaults=Yn,Qn.defaults=Kn,Qn.use=function(e){const n=Wn({},e);if(e.renderer){const t=Qn.defaults.renderer||new Fn;for(const n in e.renderer){const o=t[n];t[n]=(...r)=>{let i=e.renderer[n].apply(t,r);return !1===i&&(i=o.apply(t,r)),i};}n.renderer=t;}if(e.tokenizer){const t=Qn.defaults.tokenizer||new Sn;for(const n in e.tokenizer){const o=t[n];t[n]=(...r)=>{let i=e.tokenizer[n].apply(t,r);return !1===i&&(i=o.apply(t,r)),i};}n.tokenizer=t;}Qn.setOptions(n);},Qn.Parser=Dn,Qn.parser=Dn.parse,Qn.Renderer=Fn,Qn.TextRenderer=jn,Qn.Lexer=Vn,Qn.lexer=Vn.lex,Qn.Tokenizer=Sn,Qn.Slugger=Rn,Qn.parse=Qn;var et=Qn,nt=Ke((function(e){var n=function(e){var n=/\blang(?:uage)?-([\w-]+)\b/i,t=0,o={manual:e.Prism&&e.Prism.manual,disableWorkerMessageHandler:e.Prism&&e.Prism.disableWorkerMessageHandler,util:{encode:function e(n){return n instanceof r?new r(n.type,e(n.content),n.alias):Array.isArray(n)?n.map(e):n.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).slice(8,-1)},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++t}),e.__id},clone:function e(n,t){var r,i,a=o.util.type(n);switch(t=t||{},a){case"Object":if(i=o.util.objId(n),t[i])return t[i];for(var l in r={},t[i]=r,n)n.hasOwnProperty(l)&&(r[l]=e(n[l],t));return r;case"Array":return i=o.util.objId(n),t[i]?t[i]:(r=[],t[i]=r,n.forEach((function(n,o){r[o]=e(n,t);})),r);default:return n}},getLanguage:function(e){for(;e&&!n.test(e.className);)e=e.parentElement;return e?(e.className.match(n)||[,"none"])[1].toLowerCase():"none"},currentScript:function(){if("undefined"==typeof document)return null;if("currentScript"in document)return document.currentScript;try{throw new Error}catch(o){var e=(/at [^(\r\n]*\((.*):.+:.+\)$/i.exec(o.stack)||[])[1];if(e){var n=document.getElementsByTagName("script");for(var t in n)if(n[t].src==e)return n[t]}return null}}},languages:{extend:function(e,n){var t=o.util.clone(o.languages[e]);for(var r in n)t[r]=n[r];return t},insertBefore:function(e,n,t,r){var i=(r=r||o.languages)[e],a={};for(var l in i)if(i.hasOwnProperty(l)){if(l==n)for(var s in t)t.hasOwnProperty(s)&&(a[s]=t[s]);t.hasOwnProperty(l)||(a[l]=i[l]);}var c=r[e];return r[e]=a,o.languages.DFS(o.languages,(function(n,t){t===c&&n!=e&&(this[n]=a);})),a},DFS:function e(n,t,r,i){i=i||{};var a=o.util.objId;for(var l in n)if(n.hasOwnProperty(l)){t.call(n,l,n[l],r||l);var s=n[l],c=o.util.type(s);"Object"!==c||i[a(s)]?"Array"!==c||i[a(s)]||(i[a(s)]=!0,e(s,t,l,i)):(i[a(s)]=!0,e(s,t,null,i));}}},plugins:{},highlightAll:function(e,n){o.highlightAllUnder(document,e,n);},highlightAllUnder:function(e,n,t){var r={callback:t,container:e,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};o.hooks.run("before-highlightall",r),r.elements=Array.prototype.slice.apply(r.container.querySelectorAll(r.selector)),o.hooks.run("before-all-elements-highlight",r);for(var i,a=0;i=r.elements[a++];)o.highlightElement(i,!0===n,r.callback);},highlightElement:function(t,r,i){var a=o.util.getLanguage(t),l=o.languages[a];t.className=t.className.replace(n,"").replace(/\s+/g," ")+" language-"+a;var s=t.parentNode;s&&"pre"===s.nodeName.toLowerCase()&&(s.className=s.className.replace(n,"").replace(/\s+/g," ")+" language-"+a);var c={element:t,language:a,grammar:l,code:t.textContent};function d(e){c.highlightedCode=e,o.hooks.run("before-insert",c),c.element.innerHTML=c.highlightedCode,o.hooks.run("after-highlight",c),o.hooks.run("complete",c),i&&i.call(c.element);}if(o.hooks.run("before-sanity-check",c),!c.code)return o.hooks.run("complete",c),void(i&&i.call(c.element));if(o.hooks.run("before-highlight",c),c.grammar)if(r&&e.Worker){var u=new Worker(o.filename);u.onmessage=function(e){d(e.data);},u.postMessage(JSON.stringify({language:c.language,code:c.code,immediateClose:!0}));}else d(o.highlight(c.code,c.grammar,c.language));else d(o.util.encode(c.code));},highlight:function(e,n,t){var i={code:e,grammar:n,language:t};return o.hooks.run("before-tokenize",i),i.tokens=o.tokenize(i.code,i.grammar),o.hooks.run("after-tokenize",i),r.stringify(o.util.encode(i.tokens),i.language)},tokenize:function(e,n){var t=n.rest;if(t){for(var s in t)n[s]=t[s];delete n.rest;}var c=new i;return a(c,c.head,e),function e(n,t,i,s,c,d,u){for(var h in i)if(i.hasOwnProperty(h)&&i[h]){var p=i[h];p=Array.isArray(p)?p:[p];for(var g=0;g<p.length;++g){if(u&&u==h+","+g)return;var f=p[g],m=f.inside,b=!!f.lookbehind,v=!!f.greedy,w=0,k=f.alias;if(v&&!f.pattern.global){var y=f.pattern.toString().match(/[imsuy]*$/)[0];f.pattern=RegExp(f.pattern.source,y+"g");}f=f.pattern||f;for(var x=s.next,C=c;x!==t.tail;C+=x.value.length,x=x.next){var z=x.value;if(t.length>n.length)return;if(!(z instanceof r)){var S=1;if(v&&x!=t.tail.prev){if(f.lastIndex=C,!(A=f.exec(n)))break;var _=A.index+(b&&A[1]?A[1].length:0),$=A.index+A[0].length,L=C;for(L+=x.value.length;_>=L;)x=x.next,L+=x.value.length;if(L-=x.value.length,C=L,x.value instanceof r)continue;for(var M=x;M!==t.tail&&(L<$||"string"==typeof M.value&&!M.prev.value.greedy);M=M.next)S++,L+=M.value.length;S--,z=n.slice(C,L),A.index-=C;}else {f.lastIndex=0;var A=f.exec(z);}if(A){b&&(w=A[1]?A[1].length:0);_=A.index+w,A=A[0].slice(w),$=_+A.length;var q=z.slice(0,_),B=z.slice($),E=x.prev;q&&(E=a(t,E,q),C+=q.length),l(t,E,S);var T=new r(h,m?o.tokenize(A,m):A,k,A,v);if(x=a(t,E,T),B&&a(t,x,B),S>1&&e(n,t,i,x.prev,C,!0,h+","+g),d)break}else if(d)break}}}}}(e,c,n,c.head,0),function(e){var n=[],t=e.head.next;for(;t!==e.tail;)n.push(t.value),t=t.next;return n}(c)},hooks:{all:{},add:function(e,n){var t=o.hooks.all;t[e]=t[e]||[],t[e].push(n);},run:function(e,n){var t=o.hooks.all[e];if(t&&t.length)for(var r,i=0;r=t[i++];)r(n);}},Token:r};function r(e,n,t,o,r){this.type=e,this.content=n,this.alias=t,this.length=0|(o||"").length,this.greedy=!!r;}function i(){var e={value:null,prev:null,next:null},n={value:null,prev:e,next:null};e.next=n,this.head=e,this.tail=n,this.length=0;}function a(e,n,t){var o=n.next,r={value:t,prev:n,next:o};return n.next=r,o.prev=r,e.length++,r}function l(e,n,t){for(var o=n.next,r=0;r<t&&o!==e.tail;r++)o=o.next;n.next=o,o.prev=n,e.length-=r;}if(e.Prism=o,r.stringify=function e(n,t){if("string"==typeof n)return n;if(Array.isArray(n)){var r="";return n.forEach((function(n){r+=e(n,t);})),r}var i={type:n.type,content:e(n.content,t),tag:"span",classes:["token",n.type],attributes:{},language:t},a=n.alias;a&&(Array.isArray(a)?Array.prototype.push.apply(i.classes,a):i.classes.push(a)),o.hooks.run("wrap",i);var l="";for(var s in i.attributes)l+=" "+s+'="'+(i.attributes[s]||"").replace(/"/g,"&quot;")+'"';return "<"+i.tag+' class="'+i.classes.join(" ")+'"'+l+">"+i.content+"</"+i.tag+">"},!e.document)return e.addEventListener?(o.disableWorkerMessageHandler||e.addEventListener("message",(function(n){var t=JSON.parse(n.data),r=t.language,i=t.code,a=t.immediateClose;e.postMessage(o.highlight(i,o.languages[r],r)),a&&e.close();}),!1),o):o;var s=o.util.currentScript();function c(){o.manual||o.highlightAll();}if(s&&(o.filename=s.src,s.hasAttribute("data-manual")&&(o.manual=!0)),!o.manual){var d=document.readyState;"loading"===d||"interactive"===d&&s&&s.defer?document.addEventListener("DOMContentLoaded",c):window.requestAnimationFrame?window.requestAnimationFrame(c):window.setTimeout(c,16);}return o}("undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{});e.exports&&(e.exports=n),void 0!==Xe&&(Xe.Prism=n),n.languages.markup={comment:/<!--[\s\S]*?-->/,prolog:/<\?[\s\S]+?\?>/,doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:(?!<!--)[^"'\]]|"[^"]*"|'[^']*'|<!--[\s\S]*?-->)*\]\s*)?>/i,greedy:!0},cdata:/<!\[CDATA\[[\s\S]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/i,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/i,inside:{punctuation:[/^=/,{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:/&#?[\da-z]{1,8};/i},n.languages.markup.tag.inside["attr-value"].inside.entity=n.languages.markup.entity,n.hooks.add("wrap",(function(e){"entity"===e.type&&(e.attributes.title=e.content.replace(/&amp;/,"&"));})),Object.defineProperty(n.languages.markup.tag,"addInlined",{value:function(e,t){var o={};o["language-"+t]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:n.languages[t]},o.cdata=/^<!\[CDATA\[|\]\]>$/i;var r={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:o}};r["language-"+t]={pattern:/[\s\S]+/,inside:n.languages[t]};var i={};i[e]={pattern:RegExp(/(<__[\s\S]*?>)(?:<!\[CDATA\[[\s\S]*?\]\]>\s*|[\s\S])*?(?=<\/__>)/.source.replace(/__/g,(function(){return e})),"i"),lookbehind:!0,greedy:!0,inside:r},n.languages.insertBefore("markup","cdata",i);}}),n.languages.xml=n.languages.extend("markup",{}),n.languages.html=n.languages.markup,n.languages.mathml=n.languages.markup,n.languages.svg=n.languages.markup,function(e){var n=/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;e.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-]+[\s\S]*?(?:;|(?=\s*\{))/,inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\((?!\s*\))\s*)(?:[^()]|\((?:[^()]|\([^()]*\))*\))+?(?=\s*\))/,lookbehind:!0,alias:"selector"}}},url:{pattern:RegExp("url\\((?:"+n.source+"|[^\n\r()]*)\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/}},selector:RegExp("[^{}\\s](?:[^{};\"']|"+n.source+")*?(?=\\s*\\{)"),string:{pattern:n,greedy:!0},property:/[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,important:/!important\b/i,function:/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:,]/},e.languages.css.atrule.inside.rest=e.languages.css;var t=e.languages.markup;t&&(t.tag.addInlined("style","css"),e.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:t.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:e.languages.css}},alias:"language-css"}},t.tag));}(n),n.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|interface|extends|implements|trait|instanceof|new)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(?:true|false)\b/,function:/\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},n.languages.javascript=n.languages.extend("clike",{"class-name":[n.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/,lookbehind:!0}],keyword:[{pattern:/((?:^|})\s*)(?:catch|finally)\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],number:/\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,function:/#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,operator:/--|\+\+|\*\*=?|=>|&&|\|\||[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?[.?]?|[~:]/}),n.languages.javascript["class-name"][0].pattern=/(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/,n.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=(?:\s|\/\*[\s\S]*?\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,lookbehind:!0,greedy:!0},"function-variable":{pattern:/#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/,lookbehind:!0,inside:n.languages.javascript},{pattern:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i,inside:n.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/,lookbehind:!0,inside:n.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/,lookbehind:!0,inside:n.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),n.languages.insertBefore("javascript","string",{"template-string":{pattern:/`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}|(?!\${)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\${|}$/,alias:"punctuation"},rest:n.languages.javascript}},string:/[\s\S]+/}}}),n.languages.markup&&n.languages.markup.tag.addInlined("script","javascript"),n.languages.js=n.languages.javascript,"undefined"!=typeof self&&self.Prism&&self.document&&document.querySelector&&(self.Prism.fileHighlight=function(e){e=e||document;var t={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"};Array.prototype.slice.call(e.querySelectorAll("pre[data-src]")).forEach((function(e){if(!e.hasAttribute("data-src-loaded")){for(var o,r=e.getAttribute("data-src"),i=e,a=/\blang(?:uage)?-([\w-]+)\b/i;i&&!a.test(i.className);)i=i.parentNode;if(i&&(o=(e.className.match(a)||[,""])[1]),!o){var l=(r.match(/\.(\w+)$/)||[,""])[1];o=t[l]||l;}var s=document.createElement("code");s.className="language-"+o,e.textContent="",s.textContent="Loading…",e.appendChild(s);var c=new XMLHttpRequest;c.open("GET",r,!0),c.onreadystatechange=function(){4==c.readyState&&(c.status<400&&c.responseText?(s.textContent=c.responseText,n.highlightElement(s),e.setAttribute("data-src-loaded","")):c.status>=400?s.textContent="✖ Error "+c.status+" while fetching file: "+c.statusText:s.textContent="✖ Error: File does not exist or is empty");},c.send(null);}}));},document.addEventListener("DOMContentLoaded",(function(){self.Prism.fileHighlight();})));}));const tt={code:(e,n,t)=>(n=n||"markup",nt.languages[n]||(n="markup"),`<pre data-lang="${n}"><code class="lang-${n}">${nt.highlight(e,nt.languages[n],n)}</code></pre>`)};et.use({renderer:tt});const ot={paragraph(e){let n=[{reg:/^!&gt;/,name:"tip"},{reg:/^\?&gt;/,name:"warn"}].find(n=>n.reg.test(e));return `<p class="${n?n.name:""}">${n?e.replace(n.reg,""):e}</p>`}};et.use({renderer:ot});const rt={list(e,n,t){const o=n?"ol":"ul";return `<${o} ${[/<li class="task-list-item">/.test(e.split('class="task-list"')[0])?'class="task-list"':"",t&&t>1?`start="${t}"`:""].join(" ").trim()}>${e}</${o}>`},listitem:e=>/^(<input.*type="checkbox"[^>]*>)/.test(e)?`<li class="task-list-item"><label>${e}</label></li>`:`<li>${e}</li>`};et.use({renderer:rt});let it=class extends he{constructor(){super(),this.cacheMenu=null;}static get styles(){return ae`${ie('* {\n  box-sizing: border-box;\n  -webkit-tap-highlight-color: transparent; }\n  *::selection {\n    background-color: var(--iu-main-color, #2ed573);\n    color: var(--iu-white-color, #ffffff); }\n\nbody {\n  padding: 0;\n  margin: 0; }\n\na {\n  color: var(--iu-main-color, #2ed573); }\n\n.hide,\n.hidden,\n[hide],\n[hidden] {\n  display: none; }\n\n.main-text {\n  color: var(--iu-main-color, #2ed573); }\n\n.main-bg {\n  background-color: var(--iu-main-color, #2ed573); }\n\n.mainLight-text {\n  color: var(--iu-mainLight-color, #f2fff8); }\n\n.mainLight-bg {\n  background-color: var(--iu-mainLight-color, #f2fff8); }\n\n.white-text {\n  color: var(--iu-white-color, #ffffff); }\n\n.white-bg {\n  background-color: var(--iu-white-color, #ffffff); }\n\n.dark-text {\n  color: var(--iu-dark-color, #2f3542); }\n\n.dark-bg {\n  background-color: var(--iu-dark-color, #2f3542); }\n\n.light-text {\n  color: var(--iu-light-color, #f5f5f5); }\n\n.light-bg {\n  background-color: var(--iu-light-color, #f5f5f5); }\n\n.light-grey-text {\n  color: var(--iu-light-grey-color, #dddddd); }\n\n.light-grey-bg {\n  background-color: var(--iu-light-grey-color, #dddddd); }\n\n.grey-text {\n  color: var(--iu-grey-color, #a4b0be); }\n\n.grey-bg {\n  background-color: var(--iu-grey-color, #a4b0be); }\n\n.success-text {\n  color: var(--iu-success-color, #2ed573); }\n\n.success-bg {\n  background-color: var(--iu-success-color, #2ed573); }\n\n.info-text {\n  color: var(--iu-info-color, #1e90ff); }\n\n.info-bg {\n  background-color: var(--iu-info-color, #1e90ff); }\n\n.warn-text {\n  color: var(--iu-warn-color, #ffa502); }\n\n.warn-bg {\n  background-color: var(--iu-warn-color, #ffa502); }\n\n.error-text {\n  color: var(--iu-error-color, #ff4757); }\n\n.error-bg {\n  background-color: var(--iu-error-color, #ff4757); }\n\n/**\n * prism.js default theme for JavaScript, CSS and HTML\n * Based on dabblet (http://dabblet.com)\n * @author Lea Verou\n */\ncode[class*="lang-"],\npre[class*="lang-"] {\n  color: black;\n  background: none;\n  text-shadow: 0 1px white;\n  font-family: Consolas, Monaco, \'Andale Mono\', \'Ubuntu Mono\', monospace;\n  font-size: 1em;\n  text-align: left;\n  white-space: pre;\n  word-spacing: normal;\n  word-break: normal;\n  word-wrap: normal;\n  line-height: 1.5;\n  -moz-tab-size: 4;\n  -o-tab-size: 4;\n  tab-size: 4;\n  -webkit-hyphens: none;\n  -moz-hyphens: none;\n  -ms-hyphens: none;\n  hyphens: none; }\n\npre[class*="lang-"]::-moz-selection,\npre[class*="lang-"] ::-moz-selection,\ncode[class*="lang-"]::-moz-selection,\ncode[class*="lang-"] ::-moz-selection {\n  text-shadow: none;\n  background: var(--iu-grey-color, #a4b0be); }\n\npre[class*="lang-"]::selection,\npre[class*="lang-"] ::selection,\ncode[class*="lang-"]::selection,\ncode[class*="lang-"] ::selection {\n  text-shadow: none;\n  background: var(--iu-grey-color, #a4b0be); }\n\n@media print {\n  code[class*="lang-"],\n  pre[class*="lang-"] {\n    text-shadow: none; } }\n\n/* Code blocks */\npre[class*="lang-"] {\n  padding: 1em;\n  margin: .5em 0;\n  overflow: auto; }\n\n:not(pre) > code[class*="lang-"],\npre[class*="lang-"] {\n  background: var(--iu-light-color, #f5f5f5);\n  color: var(--iu-warn-color, #ffa502); }\n\n/* Inline code */\n:not(pre) > code[class*="lang-"] {\n  padding: .1em;\n  border-radius: .3em;\n  white-space: normal; }\n\n.token.comment,\n.token.prolog,\n.token.doctype,\n.token.cdata {\n  color: var(--iu-grey-color, #a4b0be); }\n\n.token.punctuation {\n  color: #999; }\n\n.token.namespace {\n  opacity: .7; }\n\n.token.property,\n.token.tag,\n.token.boolean,\n.token.number,\n.token.constant,\n.token.symbol,\n.token.deleted {\n  color: var(--iu-error-color, #ff4757); }\n\n.token.selector,\n.token.attr-name,\n.token.string,\n.token.char,\n.token.builtin,\n.token.inserted {\n  color: var(--iu-main-color, #2ed573); }\n\n.token.operator,\n.token.entity,\n.token.url,\n.lang-css .token.string,\n.style .token.string {\n  color: var(--iu-warn-color, #ffa502); }\n\n.token.atrule,\n.token.attr-value,\n.token.keyword {\n  color: var(--iu-info-color, #1e90ff); }\n\n.token.function,\n.token.class-name {\n  color: var(--iu-error-color, #ff4757); }\n\n.token.regex,\n.token.important,\n.token.variable {\n  color: var(--iu-warn-color, #ffa502); }\n\n.token.important,\n.token.bold {\n  font-weight: bold; }\n\n.token.italic {\n  font-style: italic; }\n\n.token.entity {\n  cursor: help; }\n\n.markdown {\n  -ms-text-size-adjust: 100%;\n  -webkit-text-size-adjust: 100%;\n  line-height: 1.5;\n  color: #24292e;\n  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji;\n  font-size: 16px;\n  line-height: 1.5;\n  word-wrap: break-word; }\n  .markdown .octicon {\n    display: inline-block;\n    fill: currentColor;\n    vertical-align: text-bottom; }\n  .markdown .anchor {\n    float: left;\n    line-height: 1;\n    margin-left: -20px;\n    padding-right: 4px; }\n    .markdown .anchor:focus {\n      outline: none; }\n  .markdown details {\n    display: block; }\n    .markdown details summary {\n      cursor: pointer; }\n  .markdown summary {\n    display: list-item; }\n  .markdown a {\n    background-color: initial;\n    color: #0366d6;\n    text-decoration: none; }\n    .markdown a:hover {\n      text-decoration: underline; }\n    .markdown a:not([href]) {\n      color: inherit;\n      text-decoration: none; }\n  .markdown strong {\n    font-weight: inherit;\n    font-weight: bolder;\n    font-weight: 600; }\n  .markdown h1 {\n    font-size: 2em;\n    margin: .67em 0;\n    font-size: 32px;\n    font-size: 2em; }\n  .markdown img {\n    border-style: none;\n    max-width: 100%;\n    box-sizing: initial;\n    background-color: #fff; }\n  .markdown hr {\n    box-sizing: initial;\n    height: 0;\n    overflow: visible;\n    height: 0;\n    margin: 15px 0;\n    overflow: hidden;\n    background: transparent;\n    border: 0;\n    border-bottom: 1px solid #dfe2e5;\n    border-bottom-color: #eee;\n    height: .25em;\n    padding: 0;\n    margin: 24px 0;\n    background-color: #e1e4e8;\n    border: 0; }\n    .markdown hr:after {\n      clear: both; }\n  .markdown input {\n    font: inherit;\n    margin: 0;\n    overflow: visible;\n    font-family: inherit;\n    font-size: inherit;\n    line-height: inherit; }\n  .markdown [type=checkbox] {\n    box-sizing: border-box;\n    padding: 0; }\n  .markdown * {\n    box-sizing: border-box; }\n  .markdown table {\n    border-spacing: 0;\n    border-collapse: collapse;\n    display: block;\n    width: 100%;\n    overflow: auto; }\n    .markdown table th {\n      font-weight: 600; }\n    .markdown table tr {\n      background-color: #fff;\n      border-top: 1px solid #c6cbd1; }\n      .markdown table tr:nth-child(2n) {\n        background-color: #f6f8fa; }\n  .markdown kbd {\n    display: inline-block;\n    padding: 3px 5px;\n    font: 11px SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace;\n    line-height: 10px;\n    color: #444d56;\n    vertical-align: middle;\n    background-color: #fafbfc;\n    border: 1px solid #d1d5da;\n    border-radius: 3px;\n    box-shadow: inset 0 -1px 0 #d1d5da;\n    display: inline-block;\n    padding: 3px 5px;\n    font: 11px SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace;\n    line-height: 10px;\n    color: #444d56;\n    vertical-align: middle;\n    background-color: #fafbfc;\n    border: 1px solid #d1d5da;\n    border-radius: 3px;\n    box-shadow: inset 0 -1px 0 #d1d5da; }\n  .markdown h2 {\n    font-size: 24px;\n    font-size: 1.5em; }\n  .markdown h3 {\n    font-size: 20px;\n    font-size: 1.25em; }\n  .markdown h4 {\n    font-size: 16px;\n    font-size: 1em; }\n  .markdown h5 {\n    font-size: 14px;\n    font-size: .875em; }\n  .markdown h6 {\n    font-size: 12px;\n    font-size: .85em;\n    color: #6a737d; }\n  .markdown p {\n    margin-top: 0;\n    margin-bottom: 10px; }\n  .markdown blockquote {\n    margin: 0;\n    padding: 0 1em;\n    color: #6a737d;\n    border-left: .25em solid #dfe2e5; }\n    .markdown blockquote > :first-child {\n      margin-top: 0; }\n    .markdown blockquote > :last-child {\n      margin-bottom: 0; }\n  .markdown dd {\n    margin-left: 0; }\n  .markdown pre {\n    margin-top: 0;\n    margin-bottom: 0;\n    word-wrap: normal; }\n    .markdown pre > code {\n      padding: 0;\n      margin: 0;\n      font-size: 100%;\n      word-break: normal;\n      white-space: pre;\n      background: transparent;\n      border: 0; }\n    .markdown pre code {\n      display: inline;\n      max-width: auto;\n      padding: 0;\n      margin: 0;\n      overflow: visible;\n      line-height: inherit;\n      word-wrap: normal;\n      background-color: initial;\n      border: 0; }\n  .markdown :checked + .radio-label {\n    position: relative;\n    z-index: 1;\n    border-color: #0366d6; }\n  .markdown .border {\n    border: 1px solid #e1e4e8 !important; }\n  .markdown .border-0 {\n    border: 0 !important; }\n  .markdown .border-bottom {\n    border-bottom: 1px solid #e1e4e8 !important; }\n  .markdown .rounded-1 {\n    border-radius: 3px !important; }\n  .markdown .bg-white {\n    background-color: #fff !important; }\n  .markdown .bg-gray-light {\n    background-color: #fafbfc !important; }\n  .markdown .text-gray-light {\n    color: #6a737d !important; }\n  .markdown .mb-0 {\n    margin-bottom: 0 !important;\n    margin-bottom: 0 !important; }\n  .markdown .my-2 {\n    margin-top: 8px !important;\n    margin-bottom: 8px !important;\n    margin-bottom: 8px !important;\n    margin-top: 8px !important; }\n  .markdown .pl-0 {\n    padding-left: 0 !important;\n    padding-left: 0 !important; }\n  .markdown .py-0 {\n    padding-top: 0 !important;\n    padding-bottom: 0 !important;\n    padding-top: 0 !important;\n    padding-bottom: 0 !important; }\n  .markdown .pl-1 {\n    padding-left: 4px !important;\n    padding-left: 4px !important; }\n  .markdown .pl-2 {\n    padding-left: 8px !important;\n    padding-left: 8px !important; }\n  .markdown .py-2 {\n    padding-top: 8px !important;\n    padding-bottom: 8px !important;\n    padding-top: 8px !important;\n    padding-bottom: 8px !important; }\n  .markdown .px-3 {\n    padding-right: 16px !important; }\n  .markdown .pl-4 {\n    padding-left: 24px !important;\n    padding-left: 24px !important; }\n  .markdown .pl-5 {\n    padding-left: 32px !important;\n    padding-left: 32px !important; }\n  .markdown .pl-6 {\n    padding-left: 40px !important;\n    padding-left: 40px !important; }\n  .markdown .f6 {\n    font-size: 12px !important; }\n  .markdown .lh-condensed {\n    line-height: 1.25 !important; }\n  .markdown .text-bold {\n    font-weight: 600 !important; }\n  .markdown .pl-c {\n    color: #6a737d; }\n  .markdown .pl-ent {\n    color: #22863a; }\n  .markdown .pl-k {\n    color: #d73a49; }\n  .markdown .pl-bu {\n    color: #b31d28; }\n  .markdown .pl-ii {\n    color: #fafbfc;\n    background-color: #b31d28; }\n  .markdown .pl-c2 {\n    color: #fafbfc;\n    background-color: #d73a49; }\n    .markdown .pl-c2:before {\n      content: "^M"; }\n  .markdown .pl-sr .pl-cce {\n    font-weight: 700;\n    color: #22863a; }\n  .markdown .pl-ml {\n    color: #735c0f; }\n  .markdown .pl-mi {\n    font-style: italic;\n    color: #24292e; }\n  .markdown .pl-mb {\n    font-weight: 700;\n    color: #24292e; }\n  .markdown .pl-md {\n    color: #b31d28;\n    background-color: #ffeef0; }\n  .markdown .pl-mi1 {\n    color: #22863a;\n    background-color: #f0fff4; }\n  .markdown .pl-mc {\n    color: #e36209;\n    background-color: #ffebda; }\n  .markdown .pl-mi2 {\n    color: #f6f8fa;\n    background-color: #005cc5; }\n  .markdown .pl-mdr {\n    font-weight: 700;\n    color: #6f42c1; }\n  .markdown .pl-ba {\n    color: #586069; }\n  .markdown .pl-sg {\n    color: #959da5; }\n  .markdown .pl-corl {\n    text-decoration: underline;\n    color: #032f62; }\n  .markdown .pl-3 {\n    padding-left: 16px !important; }\n  .markdown .pl-7 {\n    padding-left: 48px !important; }\n  .markdown .pl-8 {\n    padding-left: 64px !important; }\n  .markdown .pl-9 {\n    padding-left: 80px !important; }\n  .markdown .pl-10 {\n    padding-left: 96px !important; }\n  .markdown .pl-11 {\n    padding-left: 112px !important; }\n  .markdown .pl-12 {\n    padding-left: 128px !important; }\n  .markdown:after {\n    clear: both; }\n  .markdown > :first-child {\n    margin-top: 0 !important; }\n  .markdown > :last-child {\n    margin-bottom: 0 !important; }\n  .markdown li {\n    word-wrap: break-all; }\n    .markdown li > p {\n      margin-top: 16px; }\n    .markdown li + li {\n      margin-top: .25em; }\n  .markdown dl {\n    padding: 0; }\n    .markdown dl dt {\n      padding: 0;\n      margin-top: 16px;\n      font-size: 1em;\n      font-style: italic;\n      font-weight: 600; }\n    .markdown dl dd {\n      padding: 0 16px;\n      margin-bottom: 16px; }\n  .markdown img[align=right] {\n    padding-left: 20px; }\n  .markdown img[align=left] {\n    padding-right: 20px; }\n  .markdown code {\n    padding: .2em .4em;\n    margin: 0;\n    font-size: 85%;\n    background-color: rgba(27, 31, 35, 0.05);\n    border-radius: 3px; }\n  .markdown .highlight {\n    margin-bottom: 16px; }\n    .markdown .highlight pre {\n      margin-bottom: 0;\n      word-break: normal; }\n  .markdown .commit-tease-sha {\n    display: inline-block;\n    font-family: SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace;\n    font-size: 90%;\n    color: #444d56; }\n  .markdown .full-commit .btn-outline:not(:disabled):hover {\n    color: #005cc5;\n    border-color: #005cc5; }\n  .markdown .blob-wrapper {\n    overflow-x: auto;\n    overflow-y: hidden; }\n  .markdown .blob-wrapper-embedded {\n    max-height: 240px;\n    overflow-y: auto; }\n  .markdown .blob-num {\n    width: 1%;\n    min-width: 50px;\n    padding-right: 10px;\n    padding-left: 10px;\n    font-family: SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace;\n    font-size: 12px;\n    line-height: 20px;\n    color: rgba(27, 31, 35, 0.3);\n    text-align: right;\n    white-space: nowrap;\n    vertical-align: top;\n    cursor: pointer;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none; }\n    .markdown .blob-num:hover {\n      color: rgba(27, 31, 35, 0.6); }\n    .markdown .blob-num:before {\n      content: attr(data-line-number); }\n  .markdown .blob-code {\n    position: relative;\n    padding-right: 10px;\n    padding-left: 10px;\n    line-height: 20px;\n    vertical-align: top; }\n  .markdown .blob-code-inner {\n    overflow: visible;\n    font-family: SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace;\n    font-size: 12px;\n    color: #24292e;\n    word-wrap: normal;\n    white-space: pre; }\n  .markdown .tab-size[data-tab-size="1"] {\n    -moz-tab-size: 1;\n    tab-size: 1; }\n  .markdown .tab-size[data-tab-size="2"] {\n    -moz-tab-size: 2;\n    tab-size: 2; }\n  .markdown .tab-size[data-tab-size="3"] {\n    -moz-tab-size: 3;\n    tab-size: 3; }\n  .markdown .tab-size[data-tab-size="4"] {\n    -moz-tab-size: 4;\n    tab-size: 4; }\n  .markdown .tab-size[data-tab-size="5"] {\n    -moz-tab-size: 5;\n    tab-size: 5; }\n  .markdown .tab-size[data-tab-size="6"] {\n    -moz-tab-size: 6;\n    tab-size: 6; }\n  .markdown .tab-size[data-tab-size="7"] {\n    -moz-tab-size: 7;\n    tab-size: 7; }\n  .markdown .tab-size[data-tab-size="8"] {\n    -moz-tab-size: 8;\n    tab-size: 8; }\n  .markdown .tab-size[data-tab-size="9"] {\n    -moz-tab-size: 9;\n    tab-size: 9; }\n  .markdown .tab-size[data-tab-size="10"] {\n    -moz-tab-size: 10;\n    tab-size: 10; }\n  .markdown .tab-size[data-tab-size="11"] {\n    -moz-tab-size: 11;\n    tab-size: 11; }\n  .markdown .tab-size[data-tab-size="12"] {\n    -moz-tab-size: 12;\n    tab-size: 12; }\n  .markdown .task-list-item {\n    list-style-type: none; }\n    .markdown .task-list-item + .task-list-item {\n      margin-top: 3px; }\n    .markdown .task-list-item input {\n      margin: 0 .2em .25em -1.6em;\n      vertical-align: middle; }\n\n.markdown h1 .octicon-link,\n.markdown h2 .octicon-link,\n.markdown h3 .octicon-link,\n.markdown h4 .octicon-link,\n.markdown h5 .octicon-link,\n.markdown h6 .octicon-link {\n  color: #1b1f23;\n  vertical-align: middle;\n  visibility: hidden; }\n\n.markdown h1:hover .anchor,\n.markdown h2:hover .anchor,\n.markdown h3:hover .anchor,\n.markdown h4:hover .anchor,\n.markdown h5:hover .anchor,\n.markdown h6:hover .anchor {\n  text-decoration: none; }\n\n.markdown h1:hover .anchor .octicon-link,\n.markdown h2:hover .anchor .octicon-link,\n.markdown h3:hover .anchor .octicon-link,\n.markdown h4:hover .anchor .octicon-link,\n.markdown h5:hover .anchor .octicon-link,\n.markdown h6:hover .anchor .octicon-link {\n  visibility: visible; }\n\n.markdown h1:hover .anchor .octicon-link:before,\n.markdown h2:hover .anchor .octicon-link:before,\n.markdown h3:hover .anchor .octicon-link:before,\n.markdown h4:hover .anchor .octicon-link:before,\n.markdown h5:hover .anchor .octicon-link:before,\n.markdown h6:hover .anchor .octicon-link:before {\n  width: 16px;\n  height: 16px;\n  content: \' \';\n  display: inline-block;\n  background-image: url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 16 16\' version=\'1.1\' width=\'16\' height=\'16\' aria-hidden=\'true\'%3E%3Cpath fill-rule=\'evenodd\' d=\'M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\'%3E%3C/path%3E%3C/svg%3E"); }\n\n.markdown a:active,\n.markdown a:hover {\n  outline-width: 0; }\n\n.markdown code,\n.markdown kbd,\n.markdown pre {\n  font-family: monospace, monospace;\n  font-size: 1em; }\n\n.markdown hr:after,\n.markdown hr:before {\n  display: table;\n  content: ""; }\n\n.markdown td,\n.markdown th {\n  padding: 0; }\n\n.markdown h1,\n.markdown h2,\n.markdown h3,\n.markdown h4,\n.markdown h5,\n.markdown h6 {\n  margin-top: 0;\n  margin-bottom: 0;\n  margin-top: 24px;\n  margin-bottom: 16px;\n  font-weight: 600;\n  line-height: 1.25; }\n\n.markdown h1,\n.markdown h2 {\n  font-weight: 600;\n  padding-bottom: .3em;\n  border-bottom: 1px solid #eaecef; }\n\n.markdown h3,\n.markdown h4 {\n  font-weight: 600; }\n\n.markdown h5,\n.markdown h6 {\n  font-weight: 600; }\n\n.markdown ol,\n.markdown ul {\n  padding-left: 0;\n  margin-top: 0;\n  margin-bottom: 0;\n  padding-left: 2em; }\n\n.markdown ol ol,\n.markdown ul ol {\n  list-style-type: lower-roman; }\n\n.markdown ol ol ol,\n.markdown ol ul ol,\n.markdown ul ol ol,\n.markdown ul ul ol {\n  list-style-type: lower-alpha; }\n\n.markdown code,\n.markdown pre {\n  font-family: SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace;\n  font-size: 12px; }\n\n.markdown input::-webkit-inner-spin-button,\n.markdown input::-webkit-outer-spin-button {\n  margin: 0;\n  -webkit-appearance: none;\n  appearance: none; }\n\n.markdown .pl-3,\n.markdown .px-3 {\n  padding-left: 16px !important; }\n\n.markdown .pl-c1,\n.markdown .pl-s .pl-v {\n  color: #005cc5; }\n\n.markdown .pl-e,\n.markdown .pl-en {\n  color: #6f42c1; }\n\n.markdown .pl-s .pl-s1,\n.markdown .pl-smi {\n  color: #24292e; }\n\n.markdown .pl-pds,\n.markdown .pl-s,\n.markdown .pl-s .pl-pse .pl-s1,\n.markdown .pl-sr,\n.markdown .pl-sr .pl-cce,\n.markdown .pl-sr .pl-sra,\n.markdown .pl-sr .pl-sre {\n  color: #032f62; }\n\n.markdown .pl-smw,\n.markdown .pl-v {\n  color: #e36209; }\n\n.markdown .pl-mh,\n.markdown .pl-mh .pl-en,\n.markdown .pl-ms {\n  font-weight: 700;\n  color: #005cc5; }\n\n.markdown:after,\n.markdown:before {\n  display: table;\n  content: ""; }\n\n.markdown blockquote,\n.markdown details,\n.markdown dl,\n.markdown ol,\n.markdown p,\n.markdown pre,\n.markdown table,\n.markdown ul {\n  margin-top: 0;\n  margin-bottom: 16px; }\n\n.markdown ol ol,\n.markdown ol ul,\n.markdown ul ol,\n.markdown ul ul {\n  margin-top: 0;\n  margin-bottom: 0; }\n\n.markdown table td,\n.markdown table th {\n  padding: 6px 13px;\n  border: 1px solid #dfe2e5; }\n\n.markdown .highlight pre,\n.markdown pre {\n  padding: 16px;\n  overflow: auto;\n  font-size: 85%;\n  line-height: 1.45;\n  background-color: #f6f8fa;\n  border-radius: 3px; }\n\n.markdown .pl-token.active,\n.markdown .pl-token:hover {\n  cursor: pointer;\n  background: #ffea7f; }\n\n.markdown {\n  padding: 10px 16px; }\n  .markdown pre {\n    background-color: #f8f8f8;\n    white-space: pre-wrap;\n    padding: 0;\n    position: relative;\n    font-size: 16px;\n    padding: 0 20px; }\n    .markdown pre code {\n      padding: 20px 0 10px 0;\n      display: block;\n      white-space: pre-wrap;\n      word-break: break-word;\n      overflow: auto; }\n    .markdown pre::before {\n      color: #ccc;\n      content: attr(data-lang);\n      font-size: .6rem;\n      font-weight: 600;\n      height: 15px;\n      line-height: 15px;\n      padding: 5px 10px 0;\n      position: absolute;\n      right: 0;\n      text-align: right;\n      top: 0; }\n  .markdown blockquote {\n    border-left: 4px solid var(--iu-main-color, #2ed573);\n    color: #858585;\n    margin: 2em 0;\n    padding-left: 20px; }\n  .markdown h1 code,\n  .markdown h2 code,\n  .markdown h3 code,\n  .markdown h4 code,\n  .markdown h5 code,\n  .markdown h6 code,\n  .markdown p code,\n  .markdown div code {\n    font-size: 14px;\n    padding: 3px 5px;\n    margin: 0 4px;\n    background-color: var(--iu-light-color, #f5f5f5);\n    color: var(--iu-error-color, #ff4757); }\n')}`}connectedCallback(){super.connectedCallback(),this.markdownContent&&this.parse(this.markdownContent);}disconnectedCallback(){super.disconnectedCallback(),this.cacheMenu=null;}attributeChangedCallback(e,n,t){super.attributeChangedCallback(e,n,t),"markdown-content"==e&&n!=t&&this.parse(t);}parse(e){this.findSameParent().some(n=>n.markdownContent==e)&&(e="MARKDOWN Error: ```[Circular Markdown]```\n",console.error(new Error("Markdown Circular Error: "+this.outerHTML))),this.markdownContent=e;let n=et(e,{smartypants:!0});this.htmlContent=n,this.cacheMenu=null;}loaded({detail:e}){this.parse(e);}getMenu(){return this.cacheMenu||(this.cacheMenu=Array.from(this.mdEl.querySelectorAll("h1,h2,h3,h4,h5,h6")).reduce((e,n)=>{let t=+n.tagName.toLowerCase().match(/([0-9])$/)[1]-1;e.preIndex>=0?t-e.preIndex>1&&(t=e.preIndex+1):t>0&&(t=0),e.preIndex=t,e.indexs[t]++,e.indexs.map((n,o)=>{o>t&&(e.indexs[o]=-1);});let o=e.menu;e.indexs.slice(0,t).map((e,n)=>{o=o[e].children;});let r=n.getAttribute("id").trim();return o.push({id:r,name:r,key:r,el:n,children:[]}),e},{menu:[],indexs:Array(6).fill(-1),preIndex:-1}).menu),this.cacheMenu}findMenu(e){"string"==typeof e&&(e=e.split(">"));let n=this.getMenu(),t=null;Array(e.length).fill("").some((o,r)=>{if(t=n=n.find(n=>n.id==e[r]),!t)return t=null,!0;n=t.children;}),t&&t.el.scrollIntoView(!0);}updated(e){super.updated(e),e.has("htmlContent")&&this.emit("ended",this.htmlContent);}firstUpdated(e){super.firstUpdated(e);}render(){return N`
        <iu-fetch src=${this.src||""} @ended=${this.loaded} type="text"></iu-fetch>
        <div class="markdown" data-src="${this.src||""}">
           ${this.htmlContent?Ye(this.htmlContent):""}
        </div>
        `}};e([Q(".markdown"),n("design:type",HTMLElement)],it.prototype,"mdEl",void 0),e([K(),n("design:type",String)],it.prototype,"src",void 0),e([K({reflect:!1,attribute:"markdown-content"}),n("design:type",String)],it.prototype,"markdownContent",void 0),e([K({reflect:!1}),n("design:type",String)],it.prototype,"htmlContent",void 0),e([K({reflect:!1}),n("design:type",Function),n("design:paramtypes",[Object]),n("design:returntype",void 0)],it.prototype,"loaded",null),it=e([fe("iu-markdown"),n("design:paramtypes",[])],it);let at=class extends he{constructor(){super(...arguments),this.menu=[],this._preMenuItem=null;}static get styles(){return ae`${ie("* {\n  box-sizing: border-box;\n  -webkit-tap-highlight-color: transparent; }\n  *::selection {\n    background-color: var(--iu-main-color, #2ed573);\n    color: var(--iu-white-color, #ffffff); }\n\nbody {\n  padding: 0;\n  margin: 0; }\n\na {\n  color: var(--iu-main-color, #2ed573); }\n\n.hide,\n.hidden,\n[hide],\n[hidden] {\n  display: none; }\n\n.main-text {\n  color: var(--iu-main-color, #2ed573); }\n\n.main-bg {\n  background-color: var(--iu-main-color, #2ed573); }\n\n.mainLight-text {\n  color: var(--iu-mainLight-color, #f2fff8); }\n\n.mainLight-bg {\n  background-color: var(--iu-mainLight-color, #f2fff8); }\n\n.white-text {\n  color: var(--iu-white-color, #ffffff); }\n\n.white-bg {\n  background-color: var(--iu-white-color, #ffffff); }\n\n.dark-text {\n  color: var(--iu-dark-color, #2f3542); }\n\n.dark-bg {\n  background-color: var(--iu-dark-color, #2f3542); }\n\n.light-text {\n  color: var(--iu-light-color, #f5f5f5); }\n\n.light-bg {\n  background-color: var(--iu-light-color, #f5f5f5); }\n\n.light-grey-text {\n  color: var(--iu-light-grey-color, #dddddd); }\n\n.light-grey-bg {\n  background-color: var(--iu-light-grey-color, #dddddd); }\n\n.grey-text {\n  color: var(--iu-grey-color, #a4b0be); }\n\n.grey-bg {\n  background-color: var(--iu-grey-color, #a4b0be); }\n\n.success-text {\n  color: var(--iu-success-color, #2ed573); }\n\n.success-bg {\n  background-color: var(--iu-success-color, #2ed573); }\n\n.info-text {\n  color: var(--iu-info-color, #1e90ff); }\n\n.info-bg {\n  background-color: var(--iu-info-color, #1e90ff); }\n\n.warn-text {\n  color: var(--iu-warn-color, #ffa502); }\n\n.warn-bg {\n  background-color: var(--iu-warn-color, #ffa502); }\n\n.error-text {\n  color: var(--iu-error-color, #ff4757); }\n\n.error-bg {\n  background-color: var(--iu-error-color, #ff4757); }\n\n.iu-arrow {\n  position: relative; }\n  .iu-arrow::before, .iu-arrow::after {\n    content: '';\n    display: inline-block;\n    width: 1px;\n    height: 0;\n    transform-origin: center center;\n    border-radius: 2px;\n    transition: all ease-in-out .2s;\n    position: absolute;\n    left: 0;\n    right: 0;\n    top: 0;\n    bottom: 0;\n    margin: auto;\n    border-top: 8px solid transparent;\n    border-bottom: 8px solid #000;\n    z-index: 1; }\n  .iu-arrow.active::before, .iu-arrow.active::after {\n    border-bottom-color: var(--iu-main-color, #2ed573); }\n  .iu-arrow.active.main::before, .iu-arrow.active.main::after {\n    border-bottom-color: var(--iu-main-color, #2ed573); }\n  .iu-arrow.active.mainLight::before, .iu-arrow.active.mainLight::after {\n    border-bottom-color: var(--iu-mainLight-color, #f2fff8); }\n  .iu-arrow.active.white::before, .iu-arrow.active.white::after {\n    border-bottom-color: var(--iu-white-color, #ffffff); }\n  .iu-arrow.active.dark::before, .iu-arrow.active.dark::after {\n    border-bottom-color: var(--iu-dark-color, #2f3542); }\n  .iu-arrow.active.light::before, .iu-arrow.active.light::after {\n    border-bottom-color: var(--iu-light-color, #f5f5f5); }\n  .iu-arrow.active.light-grey::before, .iu-arrow.active.light-grey::after {\n    border-bottom-color: var(--iu-light-grey-color, #dddddd); }\n  .iu-arrow.active.grey::before, .iu-arrow.active.grey::after {\n    border-bottom-color: var(--iu-grey-color, #a4b0be); }\n  .iu-arrow.active.success::before, .iu-arrow.active.success::after {\n    border-bottom-color: var(--iu-success-color, #2ed573); }\n  .iu-arrow.active.info::before, .iu-arrow.active.info::after {\n    border-bottom-color: var(--iu-info-color, #1e90ff); }\n  .iu-arrow.active.warn::before, .iu-arrow.active.warn::after {\n    border-bottom-color: var(--iu-warn-color, #ffa502); }\n  .iu-arrow.active.error::before, .iu-arrow.active.error::after {\n    border-bottom-color: var(--iu-error-color, #ff4757); }\n  .iu-arrow::before, .iu-arrow.up-down::before {\n    transform: rotate(135deg);\n    top: 5px; }\n  .iu-arrow::after, .iu-arrow.up-down::after {\n    transform: rotate(-135deg);\n    top: 5px; }\n  .iu-arrow.open::before, .iu-arrow.up-down.open::before {\n    transform: rotate(45deg);\n    top: -5px; }\n  .iu-arrow.open::after, .iu-arrow.up-down.open::after {\n    transform: rotate(-45deg);\n    top: -5px; }\n  .iu-arrow.left-right::before {\n    transform: rotate(135deg);\n    top: 0;\n    right: -6px; }\n  .iu-arrow.left-right::after {\n    transform: rotate(45deg);\n    top: 0;\n    right: -6px; }\n  .iu-arrow.left-right.open::before {\n    transform: rotate(225deg);\n    top: 0;\n    right: 6px; }\n  .iu-arrow.left-right.open::after {\n    transform: rotate(-45deg);\n    top: 0;\n    right: 6px; }\n\n.menu {\n  user-select: none; }\n  .menu.basic .menu-wrap {\n    width: 100%;\n    overflow: hidden;\n    box-sizing: content-box; }\n    .menu.basic .menu-wrap .menu-item {\n      position: relative; }\n      .menu.basic .menu-wrap .menu-item.active .menu-title-wrap::before {\n        content: '';\n        width: 100%;\n        height: 100%;\n        position: absolute;\n        top: 0;\n        left: 0;\n        right: 0;\n        bottom: 0;\n        margin: auto;\n        background-color: var(--iu-main-color, #2ed573);\n        opacity: .1; }\n      .menu.basic .menu-wrap .menu-item.active .menu-title-wrap .menu-title {\n        border-right-color: var(--iu-main-color, #2ed573);\n        color: var(--iu-main-color, #2ed573); }\n      .menu.basic .menu-wrap .menu-item .menu-title-wrap {\n        height: 40px;\n        position: relative; }\n        .menu.basic .menu-wrap .menu-item .menu-title-wrap .menu-title {\n          display: flex;\n          line-height: 40px;\n          border-right: 2px solid transparent;\n          padding: 0 5px 0 14px;\n          cursor: pointer; }\n          .menu.basic .menu-wrap .menu-item .menu-title-wrap .menu-title .menu-icon {\n            width: 20px; }\n          .menu.basic .menu-wrap .menu-item .menu-title-wrap .menu-title .menu-name {\n            flex: auto; }\n          .menu.basic .menu-wrap .menu-item .menu-title-wrap .menu-title .menu-arrow {\n            width: 24px; }\n        .menu.basic .menu-wrap .menu-item .menu-title-wrap:hover .menu-title {\n          color: var(--iu-main-color, #2ed573); }\n          .menu.basic .menu-wrap .menu-item .menu-title-wrap:hover .menu-title .menu-arrow.iu-arrow::before, .menu.basic .menu-wrap .menu-item .menu-title-wrap:hover .menu-title .menu-arrow.iu-arrow::after {\n            border-bottom-color: var(--iu-main-color, #2ed573); }\n      .menu.basic .menu-wrap .menu-item.open > .menu-title-wrap .menu-title {\n        color: var(--iu-main-color, #2ed573); }\n        .menu.basic .menu-wrap .menu-item.open > .menu-title-wrap .menu-title .menu-arrow.iu-arrow::before, .menu.basic .menu-wrap .menu-item.open > .menu-title-wrap .menu-title .menu-arrow.iu-arrow::after {\n          border-bottom-color: var(--iu-main-color, #2ed573); }\n    .menu.basic .menu-wrap .menu-wrap {\n      animation: autoHeightNarrow .0s ease forwards; }\n\n@keyframes autoHeightExpand {\n  0% {\n    max-height: 0; }\n  90% {\n    max-height: 100px; }\n  100% {\n    max-height: initial; } }\n\n@keyframes autoHeightNarrow {\n  0% {\n    max-height: 100px; }\n  100% {\n    max-height: 0; } }\n")}`}connectedCallback(){super.connectedCallback();}disconnectedCallback(){super.disconnectedCallback();}attributeChangedCallback(e,n,t){super.attributeChangedCallback(e,n,t);}shouldUpdate(e){return !0}updated(e){super.updated(e),e.has("value")&&this.select();}firstUpdated(e){super.firstUpdated(e);}select(e=this.value,n=this.menu,t=0){e.length&&n.some(n=>{var o;if(n.name==e[t])return this.menuOpen(n,e.slice(0,t+1),!1),(null===(o=null==n?void 0:n.children)||void 0===o?void 0:o.length)&&e.length-1>t&&this.select(e,n.children,++t),!0});}getBasicMenu(e=this.menu,n=[]){return N`<div class="menu-wrap">${e.map(e=>{let t=[...n,e.key||e.name],o=t.join(">");return N`
            <div class="menu-item">
                <div class="menu-title-wrap" @click=${this.menuOpen.bind(this,e,t)} 
                    data-path="${o}"
                >
                    <div class="menu-title"
                        style="${t.length>1?`padding-left:${14*(t.length+1)}px;`:""}"
                    >
                        ${1==t.length?N`<div class="menu-icon"></div>`:""}
                        <div class="menu-name">${e.name}</div>
                        ${e.children&&e.children.length?N`
                        <div class="menu-arrow iu-arrow up-down"></div>
                        `:""}
                    </div>
                </div>
                ${e.children?this.getBasicMenu(e.children,t):""}
            </div>
            `})}</div>`}menuOpen(e,n,t=!0){var o,r;let i=this.renderRoot.querySelector(`[data-path="${n.join(">")}"]`),a=i.parentElement,l=!a.classList.contains("open");Array.from(this.renderRoot.querySelectorAll(".open")).map(e=>{e.classList.contains("menu-arrow")||e.classList.remove("open");}),n.map((e,t)=>{var o,r;let i=n.slice(0,t+1).join(">");null===(r=null===(o=this.renderRoot.querySelector(`[data-path="${i}"]`))||void 0===o?void 0:o.parentElement)||void 0===r||r.classList.add("open");});let s=a.querySelector(".menu-wrap");if(s){s.style.animation.match("autoHeightExpand")&&l&&(l=!1);let e=l?"autoHeightExpand":"autoHeightNarrow";s.style.animation.match(e)||(s.style.animation=`${e} ${t?.2:0}s ease-in forwards`);}(null===(o=null==e?void 0:e.children)||void 0===o?void 0:o.length)||(null===(r=this._preMenuItem)||void 0===r||r.classList.remove("active"),a.classList.add("active"),this._preMenuItem=a,this.emit("change",{menu:e,keys:n})),l?a.classList.add("open"):a.classList.remove("open");let c=i.querySelector(".menu-arrow");c&&(l?c.classList.add("open"):c.classList.remove("open"));}render(){return N`<div class="menu basic">
        ${this.getBasicMenu()}
        </div>`}};e([K({converter:e=>JSON.parse(e)}),n("design:type",Array)],at.prototype,"menu",void 0),e([K({converter:e=>e.split(">")}),n("design:type",Array)],at.prototype,"value",void 0),at=e([fe("iu-menu")],at);var lt;const st=new pe;let ct=lt=class extends he{constructor(){super(...arguments),this._listenFn=null;}static get styles(){return ae`${ie(Pe)}`}static $registerSVGSymbol(e,n=Ne){return t(this,void 0,void 0,(function*(){this.url=e,this.prefix=n,st.emit("symbolurlchanged");}))}static $registerIconAlias(e,n){var t;const o=((t=class extends lt{}).svgContent=n||"",t.prefix=Ne,t.url="",t);return fe(e)(o),o}connectedCallback(){super.connectedCallback(),st.on("symbolurlchanged",this._listenFn=()=>this.changeUpdate());}disconnectedCallback(){super.disconnectedCallback(),st.off("symbolurlchanged",this._listenFn);}attributeChangedCallback(e,n,t){super.attributeChangedCallback(e,n,t);}shouldUpdate(e){return !0}updated(e){super.updated(e),this.changeUpdate();}firstUpdated(e){super.firstUpdated(e);}changeUpdate(){let e=this.name?`#${Ne}${this.name}`:"",n=this.custom?`${this.protoClazz.url}#${this.protoClazz.prefix}${this.custom}`:"";(e||n)&&this.use.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",""+(e||n)),this.setStyle({fontSize:this.size,color:this.color});}get protoClazz(){return this.__proto__.constructor}render(){let e=this.protoClazz.svgContent||He;return N`
        <svg class="icon ${this.spin?"spin":""}" viewBox="0 0 10 10">
            <use xlink:href=""></use>
        </svg>
        <div class="holder">${this.name?Ve(e):""}</div>`}};ct.prefix=Ne,ct.url="",ct.svgContent="",e([K(),n("design:type",String)],ct.prototype,"name",void 0),e([K(),n("design:type",String)],ct.prototype,"custom",void 0),e([K({type:Boolean}),n("design:type",Boolean)],ct.prototype,"spin",void 0),e([K({converter:ce}),n("design:type",String)],ct.prototype,"size",void 0),e([K(),n("design:type",String)],ct.prototype,"color",void 0),e([Q("svg.icon use"),n("design:type",SVGUseElement)],ct.prototype,"use",void 0),ct=lt=e([fe("iu-icon")],ct);let dt=class extends he{constructor(){super(...arguments),this.timer=null,this.type="success",this.message="",this.duration=3e3,this.showClose=!1;}static get styles(){return ae`${ie("* {\n  box-sizing: border-box;\n  -webkit-tap-highlight-color: transparent; }\n  *::selection {\n    background-color: var(--iu-main-color, #2ed573);\n    color: var(--iu-white-color, #ffffff); }\n\nbody {\n  padding: 0;\n  margin: 0; }\n\na {\n  color: var(--iu-main-color, #2ed573); }\n\n.hide,\n.hidden,\n[hide],\n[hidden] {\n  display: none; }\n\n.main-text {\n  color: var(--iu-main-color, #2ed573); }\n\n.main-bg {\n  background-color: var(--iu-main-color, #2ed573); }\n\n.mainLight-text {\n  color: var(--iu-mainLight-color, #f2fff8); }\n\n.mainLight-bg {\n  background-color: var(--iu-mainLight-color, #f2fff8); }\n\n.white-text {\n  color: var(--iu-white-color, #ffffff); }\n\n.white-bg {\n  background-color: var(--iu-white-color, #ffffff); }\n\n.dark-text {\n  color: var(--iu-dark-color, #2f3542); }\n\n.dark-bg {\n  background-color: var(--iu-dark-color, #2f3542); }\n\n.light-text {\n  color: var(--iu-light-color, #f5f5f5); }\n\n.light-bg {\n  background-color: var(--iu-light-color, #f5f5f5); }\n\n.light-grey-text {\n  color: var(--iu-light-grey-color, #dddddd); }\n\n.light-grey-bg {\n  background-color: var(--iu-light-grey-color, #dddddd); }\n\n.grey-text {\n  color: var(--iu-grey-color, #a4b0be); }\n\n.grey-bg {\n  background-color: var(--iu-grey-color, #a4b0be); }\n\n.success-text {\n  color: var(--iu-success-color, #2ed573); }\n\n.success-bg {\n  background-color: var(--iu-success-color, #2ed573); }\n\n.info-text {\n  color: var(--iu-info-color, #1e90ff); }\n\n.info-bg {\n  background-color: var(--iu-info-color, #1e90ff); }\n\n.warn-text {\n  color: var(--iu-warn-color, #ffa502); }\n\n.warn-bg {\n  background-color: var(--iu-warn-color, #ffa502); }\n\n.error-text {\n  color: var(--iu-error-color, #ff4757); }\n\n.error-bg {\n  background-color: var(--iu-error-color, #ff4757); }\n\n:host {\n  display: inline-block;\n  width: 100%;\n  margin-bottom: 1em;\n  animation: fadeInDown .2s ease-in-out forwards; }\n\n:host(:first-child) {\n  margin-top: 1em; }\n\n.msg-container {\n  display: inline-block;\n  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);\n  padding: .5em 1em;\n  padding-left: 2em;\n  position: relative;\n  line-height: 1.5;\n  max-width: 80%;\n  text-align: left;\n  user-select: none;\n  border-radius: .125em;\n  pointer-events: all;\n  overflow: hidden;\n  background-color: #fff; }\n  .msg-container .icon {\n    position: absolute;\n    left: .5em;\n    top: .6em; }\n  .msg-container .msg-body {\n    font-size: .875em; }\n  .msg-container.show-close {\n    padding-right: 2em; }\n    .msg-container.show-close .icon-after {\n      position: absolute;\n      left: auto;\n      font-size: .6em;\n      top: 1.4em;\n      right: 0.8em;\n      cursor: pointer; }\n      .msg-container.show-close .icon-after:hover {\n        color: var(--iu-success-color, #2ed573); }\n\n@keyframes fadeOutUp {\n  0% {\n    opacity: 1; }\n  to {\n    opacity: 0;\n    transform: translate3d(0, -100%, 0); } }\n\n@keyframes fadeInDown {\n  0% {\n    opacity: 0;\n    transform: translate3d(0, -100%, 0); }\n  to {\n    opacity: 1;\n    transform: translateZ(0); } }\n")}`}connectedCallback(){super.connectedCallback();}disconnectedCallback(){super.disconnectedCallback();}attributeChangedCallback(e,n,t){super.attributeChangedCallback(e,n,t);}shouldUpdate(e){return !0}updated(e){super.updated(e);}firstUpdated(e){super.firstUpdated(e);let n=this.duration||3e3;0===this.duration||Number.isFinite(this.duration)||null==this.duration||void 0===this.duration||n>0&&(this.timer=setTimeout(()=>{this.destroy();},n));}destroy(e="timeout"){clearTimeout(this.timer),this.style.animation="fadeOutUp .2s ease-in-out forwards",setTimeout(()=>{this.emit("close",e),this.remove();},200);}render(){let e=this.type+"-fill",n=this.type+"-text";return "loading"==this.type&&(e="loading",n="success-text"),N`<div class="msg-container ${this.showClose?"show-close":""}">
            <iu-icon class="icon ${n}" name="${e}" ?spin="${"loading"==this.type}"></iu-icon>
            <div class="msg-body">
                ${this.message}
                <slot></slot>
            </div>
            ${this.showClose?N`<iu-icon 
                class="icon icon-after light-grey-text" 
                name="close" 
                @click="${this.destroy.bind(this,"user-close")}"
            ></iu-icon>`:""}
        </div>`}};var ut;e([K(),n("design:type",String)],dt.prototype,"type",void 0),e([K(),n("design:type",String)],dt.prototype,"message",void 0),e([K(),n("design:type",Number)],dt.prototype,"duration",void 0),e([K({type:Boolean}),n("design:type",Boolean)],dt.prototype,"showClose",void 0),e([Q(".msg-container"),n("design:type",HTMLElement)],dt.prototype,"container",void 0),dt=e([fe("iu-message-item")],dt);let ht=ut=class extends he{static get styles(){return ae`${ie("* {\n  box-sizing: border-box;\n  -webkit-tap-highlight-color: transparent; }\n  *::selection {\n    background-color: var(--iu-main-color, #2ed573);\n    color: var(--iu-white-color, #ffffff); }\n\nbody {\n  padding: 0;\n  margin: 0; }\n\na {\n  color: var(--iu-main-color, #2ed573); }\n\n.hide,\n.hidden,\n[hide],\n[hidden] {\n  display: none; }\n\n.main-text {\n  color: var(--iu-main-color, #2ed573); }\n\n.main-bg {\n  background-color: var(--iu-main-color, #2ed573); }\n\n.mainLight-text {\n  color: var(--iu-mainLight-color, #f2fff8); }\n\n.mainLight-bg {\n  background-color: var(--iu-mainLight-color, #f2fff8); }\n\n.white-text {\n  color: var(--iu-white-color, #ffffff); }\n\n.white-bg {\n  background-color: var(--iu-white-color, #ffffff); }\n\n.dark-text {\n  color: var(--iu-dark-color, #2f3542); }\n\n.dark-bg {\n  background-color: var(--iu-dark-color, #2f3542); }\n\n.light-text {\n  color: var(--iu-light-color, #f5f5f5); }\n\n.light-bg {\n  background-color: var(--iu-light-color, #f5f5f5); }\n\n.light-grey-text {\n  color: var(--iu-light-grey-color, #dddddd); }\n\n.light-grey-bg {\n  background-color: var(--iu-light-grey-color, #dddddd); }\n\n.grey-text {\n  color: var(--iu-grey-color, #a4b0be); }\n\n.grey-bg {\n  background-color: var(--iu-grey-color, #a4b0be); }\n\n.success-text {\n  color: var(--iu-success-color, #2ed573); }\n\n.success-bg {\n  background-color: var(--iu-success-color, #2ed573); }\n\n.info-text {\n  color: var(--iu-info-color, #1e90ff); }\n\n.info-bg {\n  background-color: var(--iu-info-color, #1e90ff); }\n\n.warn-text {\n  color: var(--iu-warn-color, #ffa502); }\n\n.warn-bg {\n  background-color: var(--iu-warn-color, #ffa502); }\n\n.error-text {\n  color: var(--iu-error-color, #ff4757); }\n\n.error-bg {\n  background-color: var(--iu-error-color, #ff4757); }\n\n:host {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  pointer-events: none;\n  display: block;\n  text-align: center;\n  user-select: none;\n  z-index: 10000; }\n")}`}static $install(){this.messageContainer=this.messageContainer||document.createElement("iu-message"),document.body.append(this.messageContainer);}static $success(e){return "string"==typeof e?ut.$message(e,"success"):(e.type=e.type||"success",ut.$message(e))}static $error(e){return "string"==typeof e?ut.$message(e,"error"):(e.type=e.type||"error",ut.$message(e))}static $info(e){return "string"==typeof e?ut.$message(e,"info"):(e.type=e.type||"info",ut.$message(e))}static $warn(e){return "string"==typeof e?ut.$message(e,"warn"):(e.type=e.type||"warn",ut.$message(e))}static $message(e,n){"string"==typeof e&&(e={message:e,type:n||"success"});let t=e,o=null,r=new Promise(e=>{let n=document.createElement("iu-message-item");n.message=t.message,n.duration=t.duration,n.type=t.type||"success",n.showClose=t.showClose||!1,n.onclose=e,this.messageContainer.append(n),o=()=>n.destroy();});return r.destroy=o,r}connectedCallback(){super.connectedCallback();}disconnectedCallback(){super.disconnectedCallback();}attributeChangedCallback(e,n,t){super.attributeChangedCallback(e,n,t);}shouldUpdate(e){return !0}updated(e){super.updated(e);}firstUpdated(e){super.firstUpdated(e);}render(){return N`<slot></slot>`}};ht.messageContainer=null,ht=ut=e([fe("iu-message")],ht);let pt=class extends be{constructor(){super(...arguments),this.defaultValue=!1,this.name="";}static get styles(){return ae`${ie("* {\n  box-sizing: border-box;\n  -webkit-tap-highlight-color: transparent; }\n  *::selection {\n    background-color: var(--iu-main-color, #2ed573);\n    color: var(--iu-white-color, #ffffff); }\n\nbody {\n  padding: 0;\n  margin: 0; }\n\na {\n  color: var(--iu-main-color, #2ed573); }\n\n.hide,\n.hidden,\n[hide],\n[hidden] {\n  display: none; }\n\n.main-text {\n  color: var(--iu-main-color, #2ed573); }\n\n.main-bg {\n  background-color: var(--iu-main-color, #2ed573); }\n\n.mainLight-text {\n  color: var(--iu-mainLight-color, #f2fff8); }\n\n.mainLight-bg {\n  background-color: var(--iu-mainLight-color, #f2fff8); }\n\n.white-text {\n  color: var(--iu-white-color, #ffffff); }\n\n.white-bg {\n  background-color: var(--iu-white-color, #ffffff); }\n\n.dark-text {\n  color: var(--iu-dark-color, #2f3542); }\n\n.dark-bg {\n  background-color: var(--iu-dark-color, #2f3542); }\n\n.light-text {\n  color: var(--iu-light-color, #f5f5f5); }\n\n.light-bg {\n  background-color: var(--iu-light-color, #f5f5f5); }\n\n.light-grey-text {\n  color: var(--iu-light-grey-color, #dddddd); }\n\n.light-grey-bg {\n  background-color: var(--iu-light-grey-color, #dddddd); }\n\n.grey-text {\n  color: var(--iu-grey-color, #a4b0be); }\n\n.grey-bg {\n  background-color: var(--iu-grey-color, #a4b0be); }\n\n.success-text {\n  color: var(--iu-success-color, #2ed573); }\n\n.success-bg {\n  background-color: var(--iu-success-color, #2ed573); }\n\n.info-text {\n  color: var(--iu-info-color, #1e90ff); }\n\n.info-bg {\n  background-color: var(--iu-info-color, #1e90ff); }\n\n.warn-text {\n  color: var(--iu-warn-color, #ffa502); }\n\n.warn-bg {\n  background-color: var(--iu-warn-color, #ffa502); }\n\n.error-text {\n  color: var(--iu-error-color, #ff4757); }\n\n.error-bg {\n  background-color: var(--iu-error-color, #ff4757); }\n\n:host {\n  cursor: pointer;\n  user-select: none;\n  display: inline-block; }\n\n:host label {\n  cursor: pointer;\n  font-size: 1em;\n  line-height: 1; }\n\n:host(:not([disabled]):hover) .radio,\n:host(:not([readonly]):hover) .radio {\n  border-color: var(--iu-success-color, #2ed573); }\n\n:host([disabled]) {\n  cursor: not-allowed; }\n\n:host([readonly]) {\n  cursor: default; }\n\nlabel.disabled {\n  opacity: .6;\n  pointer-events: none; }\n\nlabel.readonly {\n  pointer-events: none; }\n\nlabel.required .radio {\n  border-color: var(--iu-error-color, #ff4757); }\n\n.radio {\n  display: inline-flex;\n  border: 0.125em solid var(--iu-light-grey-color, #dddddd);\n  border-radius: 50%;\n  width: 1.125em;\n  height: 1.125em;\n  pointer-events: none;\n  overflow: hidden;\n  position: relative;\n  justify-content: center;\n  align-items: center;\n  vertical-align: middle; }\n  .radio::before {\n    content: '';\n    width: .6em;\n    height: .6em;\n    border-radius: 50%;\n    transform: scale(0);\n    transition: transform 100ms ease-in-out;\n    margin: 0;\n    background-color: var(--iu-success-color, #2ed573); }\n\ninput:checked + .radio {\n  border-color: var(--iu-success-color, #2ed573); }\n  input:checked + .radio::before {\n    transform: scale(1); }\n")}`}connectedCallback(){super.connectedCallback();}disconnectedCallback(){super.disconnectedCallback(),this.off("change"),this.off("focus");}attributeChangedCallback(e,n,t){super.attributeChangedCallback(e,n,t);}shouldUpdate(e){return !0}updated(e){super.updated(e);}firstUpdated(e){super.firstUpdated(e),this.on("change",ue(()=>this.onValueChange()),this.input),this.on("focus",ue(()=>this.onValueChange()),this.input);}onValueChange(){return this.value=this.input.checked,this.emit("change",{value:this.input.checked}),this.checkValidity()}render(){let e={hidden:!0,defaultChecked:this.defaultValue,type:"radio",name:this.name,required:this.required,readonly:this.readonly,disabled:this.disabled},n={disabled:this.disabled,required:this.required,readonly:this.readonly};return N`<iu-tip trigger="hover" type="error" placement="topLeft">
            <label class="${this.createClassString(n)}">
                ${this.createElement("input",e)}
                <span class="radio"></span>
                <slot></slot>
            </label>
        </iu-tip>`}};e([K({reflect:!0,type:Boolean}),n("design:type",Boolean)],pt.prototype,"defaultValue",void 0),e([K({reflect:!0,type:String}),n("design:type",String)],pt.prototype,"name",void 0),pt=e([fe("iu-radio")],pt);let gt=class extends he{static get styles(){return ae`${ie("* {\n  box-sizing: border-box;\n  -webkit-tap-highlight-color: transparent; }\n  *::selection {\n    background-color: var(--iu-main-color, #2ed573);\n    color: var(--iu-white-color, #ffffff); }\n\nbody {\n  padding: 0;\n  margin: 0; }\n\na {\n  color: var(--iu-main-color, #2ed573); }\n\n.hide,\n.hidden,\n[hide],\n[hidden] {\n  display: none; }\n\n.main-text {\n  color: var(--iu-main-color, #2ed573); }\n\n.main-bg {\n  background-color: var(--iu-main-color, #2ed573); }\n\n.mainLight-text {\n  color: var(--iu-mainLight-color, #f2fff8); }\n\n.mainLight-bg {\n  background-color: var(--iu-mainLight-color, #f2fff8); }\n\n.white-text {\n  color: var(--iu-white-color, #ffffff); }\n\n.white-bg {\n  background-color: var(--iu-white-color, #ffffff); }\n\n.dark-text {\n  color: var(--iu-dark-color, #2f3542); }\n\n.dark-bg {\n  background-color: var(--iu-dark-color, #2f3542); }\n\n.light-text {\n  color: var(--iu-light-color, #f5f5f5); }\n\n.light-bg {\n  background-color: var(--iu-light-color, #f5f5f5); }\n\n.light-grey-text {\n  color: var(--iu-light-grey-color, #dddddd); }\n\n.light-grey-bg {\n  background-color: var(--iu-light-grey-color, #dddddd); }\n\n.grey-text {\n  color: var(--iu-grey-color, #a4b0be); }\n\n.grey-bg {\n  background-color: var(--iu-grey-color, #a4b0be); }\n\n.success-text {\n  color: var(--iu-success-color, #2ed573); }\n\n.success-bg {\n  background-color: var(--iu-success-color, #2ed573); }\n\n.info-text {\n  color: var(--iu-info-color, #1e90ff); }\n\n.info-bg {\n  background-color: var(--iu-info-color, #1e90ff); }\n\n.warn-text {\n  color: var(--iu-warn-color, #ffa502); }\n\n.warn-bg {\n  background-color: var(--iu-warn-color, #ffa502); }\n\n.error-text {\n  color: var(--iu-error-color, #ff4757); }\n\n.error-bg {\n  background-color: var(--iu-error-color, #ff4757); }\n\n.iu-ripple {\n  display: block;\n  overflow: hidden;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  margin: auto; }\n  .iu-ripple::before {\n    content: '';\n    display: inline-block;\n    left: var(--ripple-left, 50%);\n    top: var(--ripple-top, 50%);\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    background-image: radial-gradient(circle, rgba(255, 255, 255, 0.4) 10%, transparent 10%);\n    transform: translate(-50%, -50%) scale(10);\n    opacity: 0;\n    transition: transform .3s, opacity .8s;\n    background-position: center;\n    background-repeat: no-repeat;\n    pointer-events: none; }\n  .iu-ripple:active::before {\n    transform: translate(-50%, -50%) scale(0);\n    opacity: 1;\n    transition: 0s; }\n\n.iu-ripple.dark {\n  display: block;\n  overflow: hidden;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  margin: auto; }\n  .iu-ripple.dark::before {\n    content: '';\n    display: inline-block;\n    left: var(--ripple-left, 50%);\n    top: var(--ripple-top, 50%);\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    background-image: radial-gradient(circle, rgba(0, 0, 0, 0.2) 10%, transparent 10%);\n    transform: translate(-50%, -50%) scale(10);\n    opacity: 0;\n    transition: transform .3s, opacity .8s;\n    background-position: center;\n    background-repeat: no-repeat;\n    pointer-events: none; }\n  .iu-ripple.dark:active::before {\n    transform: translate(-50%, -50%) scale(0);\n    opacity: 1;\n    transition: 0s; }\n\n:host {\n  display: block;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  margin: auto; }\n")}`}connectedCallback(){super.connectedCallback();}disconnectedCallback(){super.disconnectedCallback();}attributeChangedCallback(e,n,t){super.attributeChangedCallback(e,n,t);}shouldUpdate(e){return !0}updated(e){super.updated(e);}firstUpdated(e){super.firstUpdated(e);}rippleClick(e){let[n,t]=[e.clientX,e.clientY],{x:o,y:r}=this.getBoundingClientRect(),[i,a]=[n-o,t-r];this.rippleEl.style.setProperty("--ripple-left",i+"px"),this.rippleEl.style.setProperty("--ripple-top",a+"px");}render(){return N`<span class="iu-ripple ${this.dark?"dark":""}" @click=${this.rippleClick}></span>`}};e([Q(".iu-ripple"),n("design:type",HTMLElement)],gt.prototype,"rippleEl",void 0),e([K({type:Boolean}),n("design:type",Boolean)],gt.prototype,"dark",void 0),gt=e([fe("iu-ripple")],gt);let ft=class extends he{static get styles(){return ae`${ie('* {\n  box-sizing: border-box;\n  -webkit-tap-highlight-color: transparent; }\n  *::selection {\n    background-color: var(--iu-main-color, #2ed573);\n    color: var(--iu-white-color, #ffffff); }\n\nbody {\n  padding: 0;\n  margin: 0; }\n\na {\n  color: var(--iu-main-color, #2ed573); }\n\n.hide,\n.hidden,\n[hide],\n[hidden] {\n  display: none; }\n\n.main-text {\n  color: var(--iu-main-color, #2ed573); }\n\n.main-bg {\n  background-color: var(--iu-main-color, #2ed573); }\n\n.mainLight-text {\n  color: var(--iu-mainLight-color, #f2fff8); }\n\n.mainLight-bg {\n  background-color: var(--iu-mainLight-color, #f2fff8); }\n\n.white-text {\n  color: var(--iu-white-color, #ffffff); }\n\n.white-bg {\n  background-color: var(--iu-white-color, #ffffff); }\n\n.dark-text {\n  color: var(--iu-dark-color, #2f3542); }\n\n.dark-bg {\n  background-color: var(--iu-dark-color, #2f3542); }\n\n.light-text {\n  color: var(--iu-light-color, #f5f5f5); }\n\n.light-bg {\n  background-color: var(--iu-light-color, #f5f5f5); }\n\n.light-grey-text {\n  color: var(--iu-light-grey-color, #dddddd); }\n\n.light-grey-bg {\n  background-color: var(--iu-light-grey-color, #dddddd); }\n\n.grey-text {\n  color: var(--iu-grey-color, #a4b0be); }\n\n.grey-bg {\n  background-color: var(--iu-grey-color, #a4b0be); }\n\n.success-text {\n  color: var(--iu-success-color, #2ed573); }\n\n.success-bg {\n  background-color: var(--iu-success-color, #2ed573); }\n\n.info-text {\n  color: var(--iu-info-color, #1e90ff); }\n\n.info-bg {\n  background-color: var(--iu-info-color, #1e90ff); }\n\n.warn-text {\n  color: var(--iu-warn-color, #ffa502); }\n\n.warn-bg {\n  background-color: var(--iu-warn-color, #ffa502); }\n\n.error-text {\n  color: var(--iu-error-color, #ff4757); }\n\n.error-bg {\n  background-color: var(--iu-error-color, #ff4757); }\n\n.iu-arrow {\n  position: relative; }\n  .iu-arrow::before, .iu-arrow::after {\n    content: \'\';\n    display: inline-block;\n    width: 1px;\n    height: 0;\n    transform-origin: center center;\n    border-radius: 2px;\n    transition: all ease-in-out .2s;\n    position: absolute;\n    left: 0;\n    right: 0;\n    top: 0;\n    bottom: 0;\n    margin: auto;\n    border-top: 8px solid transparent;\n    border-bottom: 8px solid #000;\n    z-index: 1; }\n  .iu-arrow.active::before, .iu-arrow.active::after {\n    border-bottom-color: var(--iu-main-color, #2ed573); }\n  .iu-arrow.active.main::before, .iu-arrow.active.main::after {\n    border-bottom-color: var(--iu-main-color, #2ed573); }\n  .iu-arrow.active.mainLight::before, .iu-arrow.active.mainLight::after {\n    border-bottom-color: var(--iu-mainLight-color, #f2fff8); }\n  .iu-arrow.active.white::before, .iu-arrow.active.white::after {\n    border-bottom-color: var(--iu-white-color, #ffffff); }\n  .iu-arrow.active.dark::before, .iu-arrow.active.dark::after {\n    border-bottom-color: var(--iu-dark-color, #2f3542); }\n  .iu-arrow.active.light::before, .iu-arrow.active.light::after {\n    border-bottom-color: var(--iu-light-color, #f5f5f5); }\n  .iu-arrow.active.light-grey::before, .iu-arrow.active.light-grey::after {\n    border-bottom-color: var(--iu-light-grey-color, #dddddd); }\n  .iu-arrow.active.grey::before, .iu-arrow.active.grey::after {\n    border-bottom-color: var(--iu-grey-color, #a4b0be); }\n  .iu-arrow.active.success::before, .iu-arrow.active.success::after {\n    border-bottom-color: var(--iu-success-color, #2ed573); }\n  .iu-arrow.active.info::before, .iu-arrow.active.info::after {\n    border-bottom-color: var(--iu-info-color, #1e90ff); }\n  .iu-arrow.active.warn::before, .iu-arrow.active.warn::after {\n    border-bottom-color: var(--iu-warn-color, #ffa502); }\n  .iu-arrow.active.error::before, .iu-arrow.active.error::after {\n    border-bottom-color: var(--iu-error-color, #ff4757); }\n  .iu-arrow::before, .iu-arrow.up-down::before {\n    transform: rotate(135deg);\n    top: 5px; }\n  .iu-arrow::after, .iu-arrow.up-down::after {\n    transform: rotate(-135deg);\n    top: 5px; }\n  .iu-arrow.open::before, .iu-arrow.up-down.open::before {\n    transform: rotate(45deg);\n    top: -5px; }\n  .iu-arrow.open::after, .iu-arrow.up-down.open::after {\n    transform: rotate(-45deg);\n    top: -5px; }\n  .iu-arrow.left-right::before {\n    transform: rotate(135deg);\n    top: 0;\n    right: -6px; }\n  .iu-arrow.left-right::after {\n    transform: rotate(45deg);\n    top: 0;\n    right: -6px; }\n  .iu-arrow.left-right.open::before {\n    transform: rotate(225deg);\n    top: 0;\n    right: 6px; }\n  .iu-arrow.left-right.open::after {\n    transform: rotate(-45deg);\n    top: 0;\n    right: 6px; }\n\n.iu-ripple {\n  display: block;\n  overflow: hidden;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  margin: auto; }\n  .iu-ripple::before {\n    content: \'\';\n    display: inline-block;\n    left: var(--ripple-left, 50%);\n    top: var(--ripple-top, 50%);\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    background-image: radial-gradient(circle, rgba(255, 255, 255, 0.4) 10%, transparent 10%);\n    transform: translate(-50%, -50%) scale(10);\n    opacity: 0;\n    transition: transform .3s, opacity .8s;\n    background-position: center;\n    background-repeat: no-repeat;\n    pointer-events: none; }\n  .iu-ripple:active::before {\n    transform: translate(-50%, -50%) scale(0);\n    opacity: 1;\n    transition: 0s; }\n\n.iu-ripple.dark {\n  display: block;\n  overflow: hidden;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  margin: auto; }\n  .iu-ripple.dark::before {\n    content: \'\';\n    display: inline-block;\n    left: var(--ripple-left, 50%);\n    top: var(--ripple-top, 50%);\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    background-image: radial-gradient(circle, rgba(0, 0, 0, 0.2) 10%, transparent 10%);\n    transform: translate(-50%, -50%) scale(10);\n    opacity: 0;\n    transition: transform .3s, opacity .8s;\n    background-position: center;\n    background-repeat: no-repeat;\n    pointer-events: none; }\n  .iu-ripple.dark:active::before {\n    transform: translate(-50%, -50%) scale(0);\n    opacity: 1;\n    transition: 0s; }\n\n:host([span="1"]) {\n  grid-column: span 1; }\n\n:host {\n  grid-column: span 1;\n  display: block; }\n\n:host([span="2"]) {\n  grid-column: span 2; }\n\n:host([span="3"]) {\n  grid-column: span 3; }\n\n:host([span="4"]) {\n  grid-column: span 4; }\n\n:host([span="5"]) {\n  grid-column: span 5; }\n\n:host([span="6"]) {\n  grid-column: span 6; }\n\n:host([span="7"]) {\n  grid-column: span 7; }\n\n:host([span="8"]) {\n  grid-column: span 8; }\n\n:host([span="9"]) {\n  grid-column: span 9; }\n\n:host([span="10"]) {\n  grid-column: span 10; }\n\n:host([span="11"]) {\n  grid-column: span 11; }\n\n:host([span="12"]) {\n  grid-column: span 12; }\n\n:host([span="13"]) {\n  grid-column: span 13; }\n\n:host([span="14"]) {\n  grid-column: span 14; }\n\n:host([span="15"]) {\n  grid-column: span 15; }\n\n:host([span="16"]) {\n  grid-column: span 16; }\n\n:host([span="17"]) {\n  grid-column: span 17; }\n\n:host([span="18"]) {\n  grid-column: span 18; }\n\n:host([span="19"]) {\n  grid-column: span 19; }\n\n:host([span="20"]) {\n  grid-column: span 20; }\n\n:host([span="21"]) {\n  grid-column: span 21; }\n\n:host([span="22"]) {\n  grid-column: span 22; }\n\n:host([span="23"]) {\n  grid-column: span 23; }\n\n:host([span="24"]) {\n  grid-column: span 24; }\n')}`}connectedCallback(){super.connectedCallback();}disconnectedCallback(){super.disconnectedCallback();}attributeChangedCallback(e,n,t){super.attributeChangedCallback(e,n,t);}shouldUpdate(e){return !0}updated(e){super.updated(e);}firstUpdated(e){super.firstUpdated(e);}render(){return N`<slot />`}};e([K({type:Number}),n("design:type",Number)],ft.prototype,"span",void 0),ft=e([fe("iu-col")],ft);let mt=class extends he{static get styles(){return ae`${ie(":host {\n  display: grid;\n  grid-template-columns: repeat(24, 1fr);\n  grid-gap: var(--iu-grid-gap, 0);\n  gap: var(--iu-grid-gap, 0); }\n")}`}connectedCallback(){super.connectedCallback();}disconnectedCallback(){super.disconnectedCallback();}attributeChangedCallback(e,n,t){super.attributeChangedCallback(e,n,t);}shouldUpdate(e){return !0}updated(e){super.updated(e);}firstUpdated(e){super.firstUpdated(e);}render(){return N`<style>
        :host{
            --iu-grid-gap:${this.gutter}px;
        }
        </style><slot />`}};e([K({type:Number}),n("design:type",Number)],mt.prototype,"gutter",void 0),mt=e([fe("iu-row")],mt);let bt=class extends he{static get styles(){return ae`${ie("* {\n  box-sizing: border-box;\n  -webkit-tap-highlight-color: transparent; }\n  *::selection {\n    background-color: var(--iu-main-color, #2ed573);\n    color: var(--iu-white-color, #ffffff); }\n\nbody {\n  padding: 0;\n  margin: 0; }\n\na {\n  color: var(--iu-main-color, #2ed573); }\n\n.hide,\n.hidden,\n[hide],\n[hidden] {\n  display: none; }\n\n.main-text {\n  color: var(--iu-main-color, #2ed573); }\n\n.main-bg {\n  background-color: var(--iu-main-color, #2ed573); }\n\n.mainLight-text {\n  color: var(--iu-mainLight-color, #f2fff8); }\n\n.mainLight-bg {\n  background-color: var(--iu-mainLight-color, #f2fff8); }\n\n.white-text {\n  color: var(--iu-white-color, #ffffff); }\n\n.white-bg {\n  background-color: var(--iu-white-color, #ffffff); }\n\n.dark-text {\n  color: var(--iu-dark-color, #2f3542); }\n\n.dark-bg {\n  background-color: var(--iu-dark-color, #2f3542); }\n\n.light-text {\n  color: var(--iu-light-color, #f5f5f5); }\n\n.light-bg {\n  background-color: var(--iu-light-color, #f5f5f5); }\n\n.light-grey-text {\n  color: var(--iu-light-grey-color, #dddddd); }\n\n.light-grey-bg {\n  background-color: var(--iu-light-grey-color, #dddddd); }\n\n.grey-text {\n  color: var(--iu-grey-color, #a4b0be); }\n\n.grey-bg {\n  background-color: var(--iu-grey-color, #a4b0be); }\n\n.success-text {\n  color: var(--iu-success-color, #2ed573); }\n\n.success-bg {\n  background-color: var(--iu-success-color, #2ed573); }\n\n.info-text {\n  color: var(--iu-info-color, #1e90ff); }\n\n.info-bg {\n  background-color: var(--iu-info-color, #1e90ff); }\n\n.warn-text {\n  color: var(--iu-warn-color, #ffa502); }\n\n.warn-bg {\n  background-color: var(--iu-warn-color, #ffa502); }\n\n.error-text {\n  color: var(--iu-error-color, #ff4757); }\n\n.error-bg {\n  background-color: var(--iu-error-color, #ff4757); }\n\n:host {\n  display: block;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  padding: .5em 0.65em;\n  font-size: .8em;\n  align-items: center;\n  cursor: default;\n  position: relative;\n  transition: background-color .5s ease-out; }\n  :host > span {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis; }\n\n:host([disabled]) {\n  opacity: .6;\n  pointer-events: none; }\n\n:host([selected]),\n:host([focusin]) {\n  color: #fff;\n  background-color: var(--iu-success-color, #2ed573); }\n\n:host(:hover) {\n  color: #fff;\n  background-color: var(--iu-success-color, #2ed573); }\n")}`}connectedCallback(){super.connectedCallback();}disconnectedCallback(){super.disconnectedCallback(),this.selectElement&&this.selectElement.detach&&this.selectElement.detach(this);}attributeChangedCallback(e,n,t){super.attributeChangedCallback(e,n,t);}shouldUpdate(e){return !0}updated(e){super.updated(e),e.has("focusin")&&this.focusin&&this.scrollIntoView({block:"nearest"});}firstUpdated(e){super.firstUpdated(e),this.selectElement=this.findParentElementByTag("iu-select"),this.selectElement&&this.selectElement.optionsListChange(this);}get label(){return this.textContent.trim()}render(){return N`<span><slot></slot></span>`}};e([K(),n("design:type",String)],bt.prototype,"value",void 0),e([K({reflect:!0,type:Boolean}),n("design:type",Boolean)],bt.prototype,"selected",void 0),e([K({reflect:!0,type:Boolean}),n("design:type",Boolean)],bt.prototype,"focusin",void 0),e([K({reflect:!0,type:String}),n("design:type",String)],bt.prototype,"key",void 0),e([K({reflect:!0,type:Boolean}),n("design:type",Boolean)],bt.prototype,"disabled",void 0),bt=e([fe("iu-option")],bt);let vt=class extends be{constructor(){super(...arguments),this.placeholder="",this.multiple=!1,this.search=!1,this.selectedLabel="",this.optionViewOpen=!1,this.searchText="",this.optionsList=[];}static get styles(){return ae`${ie("* {\n  box-sizing: border-box;\n  -webkit-tap-highlight-color: transparent; }\n  *::selection {\n    background-color: var(--iu-main-color, #2ed573);\n    color: var(--iu-white-color, #ffffff); }\n\nbody {\n  padding: 0;\n  margin: 0; }\n\na {\n  color: var(--iu-main-color, #2ed573); }\n\n.hide,\n.hidden,\n[hide],\n[hidden] {\n  display: none; }\n\n.main-text {\n  color: var(--iu-main-color, #2ed573); }\n\n.main-bg {\n  background-color: var(--iu-main-color, #2ed573); }\n\n.mainLight-text {\n  color: var(--iu-mainLight-color, #f2fff8); }\n\n.mainLight-bg {\n  background-color: var(--iu-mainLight-color, #f2fff8); }\n\n.white-text {\n  color: var(--iu-white-color, #ffffff); }\n\n.white-bg {\n  background-color: var(--iu-white-color, #ffffff); }\n\n.dark-text {\n  color: var(--iu-dark-color, #2f3542); }\n\n.dark-bg {\n  background-color: var(--iu-dark-color, #2f3542); }\n\n.light-text {\n  color: var(--iu-light-color, #f5f5f5); }\n\n.light-bg {\n  background-color: var(--iu-light-color, #f5f5f5); }\n\n.light-grey-text {\n  color: var(--iu-light-grey-color, #dddddd); }\n\n.light-grey-bg {\n  background-color: var(--iu-light-grey-color, #dddddd); }\n\n.grey-text {\n  color: var(--iu-grey-color, #a4b0be); }\n\n.grey-bg {\n  background-color: var(--iu-grey-color, #a4b0be); }\n\n.success-text {\n  color: var(--iu-success-color, #2ed573); }\n\n.success-bg {\n  background-color: var(--iu-success-color, #2ed573); }\n\n.info-text {\n  color: var(--iu-info-color, #1e90ff); }\n\n.info-bg {\n  background-color: var(--iu-info-color, #1e90ff); }\n\n.warn-text {\n  color: var(--iu-warn-color, #ffa502); }\n\n.warn-bg {\n  background-color: var(--iu-warn-color, #ffa502); }\n\n.error-text {\n  color: var(--iu-error-color, #ff4757); }\n\n.error-bg {\n  background-color: var(--iu-error-color, #ff4757); }\n\n.iu-arrow {\n  position: relative; }\n  .iu-arrow::before, .iu-arrow::after {\n    content: '';\n    display: inline-block;\n    width: 1px;\n    height: 0;\n    transform-origin: center center;\n    border-radius: 2px;\n    transition: all ease-in-out .2s;\n    position: absolute;\n    left: 0;\n    right: 0;\n    top: 0;\n    bottom: 0;\n    margin: auto;\n    border-top: 8px solid transparent;\n    border-bottom: 8px solid #000;\n    z-index: 1; }\n  .iu-arrow.active::before, .iu-arrow.active::after {\n    border-bottom-color: var(--iu-main-color, #2ed573); }\n  .iu-arrow.active.main::before, .iu-arrow.active.main::after {\n    border-bottom-color: var(--iu-main-color, #2ed573); }\n  .iu-arrow.active.mainLight::before, .iu-arrow.active.mainLight::after {\n    border-bottom-color: var(--iu-mainLight-color, #f2fff8); }\n  .iu-arrow.active.white::before, .iu-arrow.active.white::after {\n    border-bottom-color: var(--iu-white-color, #ffffff); }\n  .iu-arrow.active.dark::before, .iu-arrow.active.dark::after {\n    border-bottom-color: var(--iu-dark-color, #2f3542); }\n  .iu-arrow.active.light::before, .iu-arrow.active.light::after {\n    border-bottom-color: var(--iu-light-color, #f5f5f5); }\n  .iu-arrow.active.light-grey::before, .iu-arrow.active.light-grey::after {\n    border-bottom-color: var(--iu-light-grey-color, #dddddd); }\n  .iu-arrow.active.grey::before, .iu-arrow.active.grey::after {\n    border-bottom-color: var(--iu-grey-color, #a4b0be); }\n  .iu-arrow.active.success::before, .iu-arrow.active.success::after {\n    border-bottom-color: var(--iu-success-color, #2ed573); }\n  .iu-arrow.active.info::before, .iu-arrow.active.info::after {\n    border-bottom-color: var(--iu-info-color, #1e90ff); }\n  .iu-arrow.active.warn::before, .iu-arrow.active.warn::after {\n    border-bottom-color: var(--iu-warn-color, #ffa502); }\n  .iu-arrow.active.error::before, .iu-arrow.active.error::after {\n    border-bottom-color: var(--iu-error-color, #ff4757); }\n  .iu-arrow::before, .iu-arrow.up-down::before {\n    transform: rotate(135deg);\n    top: 5px; }\n  .iu-arrow::after, .iu-arrow.up-down::after {\n    transform: rotate(-135deg);\n    top: 5px; }\n  .iu-arrow.open::before, .iu-arrow.up-down.open::before {\n    transform: rotate(45deg);\n    top: -5px; }\n  .iu-arrow.open::after, .iu-arrow.up-down.open::after {\n    transform: rotate(-45deg);\n    top: -5px; }\n  .iu-arrow.left-right::before {\n    transform: rotate(135deg);\n    top: 0;\n    right: -6px; }\n  .iu-arrow.left-right::after {\n    transform: rotate(45deg);\n    top: 0;\n    right: -6px; }\n  .iu-arrow.left-right.open::before {\n    transform: rotate(225deg);\n    top: 0;\n    right: 6px; }\n  .iu-arrow.left-right.open::after {\n    transform: rotate(-45deg);\n    top: 0;\n    right: 6px; }\n\n:host {\n  user-select: none; }\n\n.select {\n  font-size: 1em;\n  padding: 0.3em 0.65em;\n  display: inline-flex;\n  align-items: center;\n  border-radius: .125em;\n  border: 1px solid var(--iu-grey-color, #a4b0be);\n  cursor: pointer; }\n  :host(:hover) .select,\n  :host(:focus) .select, .select:hover {\n    border-color: var(--iu-success-color, #2ed573);\n    color: var(--iu-success-color, #2ed573); }\n    :host(:hover) .select .arrow.iu-arrow::before, :host(:hover) .select .arrow.iu-arrow::after,\n    :host(:focus) .select .arrow.iu-arrow::before,\n    :host(:focus) .select .arrow.iu-arrow::after, .select:hover .arrow.iu-arrow::before, .select:hover .arrow.iu-arrow::after {\n      border-bottom-color: var(--iu-success-color, #2ed573); }\n  .select button {\n    display: none; }\n  .select input {\n    border: none;\n    font-size: 1em; }\n    .select input:focus {\n      outline: none; }\n  .select .text {\n    flex: auto;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis; }\n  .select .arrow {\n    width: 1em;\n    height: 1em;\n    margin-left: .5em; }\n\n.options {\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);\n  margin-top: .625em;\n  max-height: 50vh;\n  overflow: auto;\n  background-color: #fff; }\n")}`}connectedCallback(){super.connectedCallback(),this.on("click",()=>{this.focusBtn.focus();}),this.on("keydown",e=>{if([38,40].includes(e.keyCode))this.moveOptionFocus(38==e.keyCode?-1:1);else if(13==e.keyCode){let e=this.optionsList.find(e=>e.focusin);this.direction.hide(),this.selectOption(e);}},this.focusBtn);}disconnectedCallback(){super.disconnectedCallback();}attributeChangedCallback(e,n,t){super.attributeChangedCallback(e,n,t);}shouldUpdate(e){return !0}updated(e){super.updated(e),e.get("value")&&this.value!=e.get("value")&&this.reloadOptionStatus();}firstUpdated(e){super.firstUpdated(e);}checkValidity(){return t(this,void 0,void 0,(function*(){let e=!0;this.required&&!this.value&&(e=!1),this.invalid=!e,this.valid=!!e,this.valid?(this.tip.message="",this.tip.hide()):(this.tip.message="请选择",this.tip.show());}))}setValue(e){this.value!=e&&(this.value=e,this.emit("change",{value:e}),this.emit("input",{value:e}));}onOptionClick(e){let n=(e.path||e.composedPath()).find(e=>"iu-option"==e.nodeName.toLowerCase());this.selectOption(n);}selectOption(e){this.optionsList.map(e=>{e.selected=!1,e.focusin=!1;}),e.selected=!0,e.focusin=!0,this.setValue(e.value),this.selectedLabel=e.label;}reloadOptionStatus(){this.optionsList.some(e=>{if(e.value==this.value)return this.selectOption(e),this.requestUpdate(),!0});}onOptionViewChange({detail:e}){this.optionViewOpen=e,e&&this.showSelectedOption(),this.optionsList.map(e=>{e.selected?e.focusin=!0:e.focusin=!1;});}showSelectedOption(){var e;null===(e=this.querySelector("iu-option[selected]"))||void 0===e||e.scrollIntoView({block:"nearest"});}optionsListChange(){this.optionsList=Array.from(this.querySelectorAll("iu-option"));let e=this.optionsList.filter(e=>e.selected);if(e.length&&!this.multiple){let n=e.shift();this.setValue(n.value),this.selectedLabel=n.label;}}moveOptionFocus(e){let n=this.optionsList.findIndex(e=>e.focusin);n>=0&&(this.optionsList[n].focusin=!1);let t=n+1*e;t>this.optionsList.length-1?t=0:t<0&&(t=this.optionsList.length-1);let o=this.optionsList[t];o&&(o.focusin=!0);}onSearchInput(e){this.searchText=e.target.value;}onSearchBlur(e){}render(){return N`
        ${this.search&&this.searchText?N`<style>
            ::slotted(iu-option:not([key*="${this.searchText}"])) {
                display:none;
            }
        </style>`:""}
        <iu-tip class="error-tip" trigger="manual" placement="topLeft">
            <iu-direction trigger="click" placement="bottomLeft" fit @change="${this.onOptionViewChange}">
                <div class="select">
                    <button></button>
                    <input ?hidden="${!this.search}" placeholder="${this.selectedLabel||this.placeholder||"请选择"}"
                        @input="${this.onSearchInput}"
                        @blur="${this.onSearchBlur}"
                    />
                    <div ?hidden="${this.search}" class="text">${this.selectedLabel||this.placeholder||"请选择"}</div>
                    <div class="arrow iu-arrow up-down ${this.optionViewOpen?"open":""}"></div>
                </div>
                <div class="options" slot="content" @click="${this.onOptionClick}">
                    <slot></slot>
                </div>
            </iu-direction>
        </iu-tip>`}};e([Q(".error-tip"),n("design:type",Object)],vt.prototype,"tip",void 0),e([K(),n("design:type",String)],vt.prototype,"placeholder",void 0),e([K({type:Boolean,reflect:!0}),n("design:type",Object)],vt.prototype,"multiple",void 0),e([K({type:Boolean,reflect:!0}),n("design:type",Object)],vt.prototype,"search",void 0),e([Q("slot"),n("design:type",HTMLSlotElement)],vt.prototype,"slotEl",void 0),e([K({attribute:!1}),n("design:type",Object)],vt.prototype,"optionViewOpen",void 0),e([K({attribute:!1}),n("design:type",Object)],vt.prototype,"searchText",void 0),e([Q("button"),n("design:type",HTMLElement)],vt.prototype,"focusBtn",void 0),e([Q("iu-direction"),n("design:type",Object)],vt.prototype,"direction",void 0),vt=e([fe("iu-select")],vt);let wt=class extends be{constructor(){super(...arguments),this.defaultValue=!1,this.value=!1;}static get styles(){return ae`${ie("* {\n  box-sizing: border-box;\n  -webkit-tap-highlight-color: transparent; }\n  *::selection {\n    background-color: var(--iu-main-color, #2ed573);\n    color: var(--iu-white-color, #ffffff); }\n\nbody {\n  padding: 0;\n  margin: 0; }\n\na {\n  color: var(--iu-main-color, #2ed573); }\n\n.hide,\n.hidden,\n[hide],\n[hidden] {\n  display: none; }\n\n.main-text {\n  color: var(--iu-main-color, #2ed573); }\n\n.main-bg {\n  background-color: var(--iu-main-color, #2ed573); }\n\n.mainLight-text {\n  color: var(--iu-mainLight-color, #f2fff8); }\n\n.mainLight-bg {\n  background-color: var(--iu-mainLight-color, #f2fff8); }\n\n.white-text {\n  color: var(--iu-white-color, #ffffff); }\n\n.white-bg {\n  background-color: var(--iu-white-color, #ffffff); }\n\n.dark-text {\n  color: var(--iu-dark-color, #2f3542); }\n\n.dark-bg {\n  background-color: var(--iu-dark-color, #2f3542); }\n\n.light-text {\n  color: var(--iu-light-color, #f5f5f5); }\n\n.light-bg {\n  background-color: var(--iu-light-color, #f5f5f5); }\n\n.light-grey-text {\n  color: var(--iu-light-grey-color, #dddddd); }\n\n.light-grey-bg {\n  background-color: var(--iu-light-grey-color, #dddddd); }\n\n.grey-text {\n  color: var(--iu-grey-color, #a4b0be); }\n\n.grey-bg {\n  background-color: var(--iu-grey-color, #a4b0be); }\n\n.success-text {\n  color: var(--iu-success-color, #2ed573); }\n\n.success-bg {\n  background-color: var(--iu-success-color, #2ed573); }\n\n.info-text {\n  color: var(--iu-info-color, #1e90ff); }\n\n.info-bg {\n  background-color: var(--iu-info-color, #1e90ff); }\n\n.warn-text {\n  color: var(--iu-warn-color, #ffa502); }\n\n.warn-bg {\n  background-color: var(--iu-warn-color, #ffa502); }\n\n.error-text {\n  color: var(--iu-error-color, #ff4757); }\n\n.error-bg {\n  background-color: var(--iu-error-color, #ff4757); }\n\n.switch {\n  width: 2.5em;\n  padding: .2em;\n  height: 1.4em;\n  border-radius: 50px;\n  background-color: var(--iu-light-grey-color, #dddddd);\n  position: relative;\n  display: inline-flex;\n  align-items: center;\n  transition: background-color .2s ease-out; }\n  .switch::before {\n    content: '';\n    width: 1em;\n    height: 1em;\n    border-radius: 50px;\n    position: absolute;\n    background-color: #fff;\n    z-index: 1;\n    left: .125em;\n    transition: all .2s ease-in-out;\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2); }\n  .switch::after {\n    opacity: 0;\n    content: '';\n    width: .6em;\n    height: .6em;\n    border-radius: 50px;\n    position: absolute;\n    background-color: var(--iu-success-color, #2ed573);\n    z-index: 2;\n    left: .325em;\n    transition: all .2s ease-in-out; }\n  .switch:active::before {\n    width: 1.6em; }\n  .switch:active::after {\n    width: 1.2em;\n    height: .2em;\n    opacity: 1; }\n\ninput[type=checkbox]:checked + .switch {\n  background-color: var(--iu-success-color, #2ed573); }\n  input[type=checkbox]:checked + .switch::before {\n    right: .125em;\n    left: auto; }\n  input[type=checkbox]:checked + .switch::after {\n    right: .325em;\n    left: auto; }\n")}`}connectedCallback(){super.connectedCallback();}disconnectedCallback(){super.disconnectedCallback();}attributeChangedCallback(e,n,t){super.attributeChangedCallback(e,n,t);}shouldUpdate(e){return !0}updated(e){super.updated(e);}firstUpdated(e){super.firstUpdated(e);}inputValueChange(){return this.emit("change",{value:this.value}),console.log("change"),this.checkValidity()}render(){let e={hidden:!0,defaultChecked:this.defaultValue,type:"checkbox",name:this.name,required:this.required,readonly:this.readonly,disabled:this.disabled},n={disabled:this.disabled,required:this.required,readonly:this.readonly};return N`<iu-tip trigger="hover" type="error" placement="topLeft">
            <label class="${this.createClassString(n)}">
                ${this.createElement("input",e)}
                <span class="switch"></span>
                <slot></slot>
            </label>
        </iu-tip>`}};e([K({reflect:!0,type:Boolean}),n("design:type",Boolean)],wt.prototype,"defaultValue",void 0),e([K({reflect:!0,type:Boolean}),n("design:type",Boolean)],wt.prototype,"value",void 0),wt=e([fe("iu-switch")],wt);let kt=class extends he{constructor(){super(...arguments),this.placement="top",this.open=!1,this.trigger="click",this.showArrow=!0;}static get styles(){return ae`${ie("* {\n  box-sizing: border-box;\n  -webkit-tap-highlight-color: transparent; }\n  *::selection {\n    background-color: var(--iu-main-color, #2ed573);\n    color: var(--iu-white-color, #ffffff); }\n\nbody {\n  padding: 0;\n  margin: 0; }\n\na {\n  color: var(--iu-main-color, #2ed573); }\n\n.hide,\n.hidden,\n[hide],\n[hidden] {\n  display: none; }\n\n.main-text {\n  color: var(--iu-main-color, #2ed573); }\n\n.main-bg {\n  background-color: var(--iu-main-color, #2ed573); }\n\n.mainLight-text {\n  color: var(--iu-mainLight-color, #f2fff8); }\n\n.mainLight-bg {\n  background-color: var(--iu-mainLight-color, #f2fff8); }\n\n.white-text {\n  color: var(--iu-white-color, #ffffff); }\n\n.white-bg {\n  background-color: var(--iu-white-color, #ffffff); }\n\n.dark-text {\n  color: var(--iu-dark-color, #2f3542); }\n\n.dark-bg {\n  background-color: var(--iu-dark-color, #2f3542); }\n\n.light-text {\n  color: var(--iu-light-color, #f5f5f5); }\n\n.light-bg {\n  background-color: var(--iu-light-color, #f5f5f5); }\n\n.light-grey-text {\n  color: var(--iu-light-grey-color, #dddddd); }\n\n.light-grey-bg {\n  background-color: var(--iu-light-grey-color, #dddddd); }\n\n.grey-text {\n  color: var(--iu-grey-color, #a4b0be); }\n\n.grey-bg {\n  background-color: var(--iu-grey-color, #a4b0be); }\n\n.success-text {\n  color: var(--iu-success-color, #2ed573); }\n\n.success-bg {\n  background-color: var(--iu-success-color, #2ed573); }\n\n.info-text {\n  color: var(--iu-info-color, #1e90ff); }\n\n.info-bg {\n  background-color: var(--iu-info-color, #1e90ff); }\n\n.warn-text {\n  color: var(--iu-warn-color, #ffa502); }\n\n.warn-bg {\n  background-color: var(--iu-warn-color, #ffa502); }\n\n.error-text {\n  color: var(--iu-error-color, #ff4757); }\n\n.error-bg {\n  background-color: var(--iu-error-color, #ff4757); }\n\n.iu-dir-arrow {\n  position: absolute;\n  margin: auto; }\n  .iu-dir-arrow.top {\n    top: 100%;\n    left: 0;\n    right: 0;\n    width: 0;\n    height: 4px;\n    border-top: 4px solid var(--iu-dark-color, #2f3542);\n    border-left: 4px solid transparent;\n    border-right: 4px solid transparent; }\n  .iu-dir-arrow.top.success {\n    border-top: 4px solid var(--iu-success-color, #2ed573); }\n  .iu-dir-arrow.top.info {\n    border-top: 4px solid var(--iu-info-color, #1e90ff); }\n  .iu-dir-arrow.top.warn {\n    border-top: 4px solid var(--iu-warn-color, #ffa502); }\n  .iu-dir-arrow.top.error {\n    border-top: 4px solid var(--iu-error-color, #ff4757); }\n  .iu-dir-arrow.topLeft {\n    top: 100%;\n    left: 2px;\n    width: 0;\n    height: 4px;\n    border-top: 4px solid var(--iu-dark-color, #2f3542);\n    border-left: 4px solid transparent;\n    border-right: 4px solid transparent; }\n  .iu-dir-arrow.topLeft.success {\n    border-top: 4px solid var(--iu-success-color, #2ed573); }\n  .iu-dir-arrow.topLeft.info {\n    border-top: 4px solid var(--iu-info-color, #1e90ff); }\n  .iu-dir-arrow.topLeft.warn {\n    border-top: 4px solid var(--iu-warn-color, #ffa502); }\n  .iu-dir-arrow.topLeft.error {\n    border-top: 4px solid var(--iu-error-color, #ff4757); }\n  .iu-dir-arrow.topRight {\n    top: 100%;\n    right: 2px;\n    width: 0;\n    height: 4px;\n    border-top: 4px solid var(--iu-dark-color, #2f3542);\n    border-left: 4px solid transparent;\n    border-right: 4px solid transparent; }\n  .iu-dir-arrow.topRight.success {\n    border-top: 4px solid var(--iu-success-color, #2ed573); }\n  .iu-dir-arrow.topRight.info {\n    border-top: 4px solid var(--iu-info-color, #1e90ff); }\n  .iu-dir-arrow.topRight.warn {\n    border-top: 4px solid var(--iu-warn-color, #ffa502); }\n  .iu-dir-arrow.topRight.error {\n    border-top: 4px solid var(--iu-error-color, #ff4757); }\n  .iu-dir-arrow.left {\n    left: 100%;\n    top: 0;\n    bottom: 0;\n    height: 0;\n    width: 4px;\n    border-left: 4px solid var(--iu-dark-color, #2f3542);\n    border-top: 4px solid transparent;\n    border-bottom: 4px solid transparent; }\n  .iu-dir-arrow.left.success {\n    border-left: 4px solid var(--iu-success-color, #2ed573); }\n  .iu-dir-arrow.left.info {\n    border-left: 4px solid var(--iu-info-color, #1e90ff); }\n  .iu-dir-arrow.left.warn {\n    border-left: 4px solid var(--iu-warn-color, #ffa502); }\n  .iu-dir-arrow.left.error {\n    border-left: 4px solid var(--iu-error-color, #ff4757); }\n  .iu-dir-arrow.leftTop {\n    left: 100%;\n    top: 2px;\n    height: 0;\n    width: 4px;\n    border-left: 4px solid var(--iu-dark-color, #2f3542);\n    border-top: 4px solid transparent;\n    border-bottom: 4px solid transparent; }\n  .iu-dir-arrow.leftTop.success {\n    border-left: 4px solid var(--iu-success-color, #2ed573); }\n  .iu-dir-arrow.leftTop.info {\n    border-left: 4px solid var(--iu-info-color, #1e90ff); }\n  .iu-dir-arrow.leftTop.warn {\n    border-left: 4px solid var(--iu-warn-color, #ffa502); }\n  .iu-dir-arrow.leftTop.error {\n    border-left: 4px solid var(--iu-error-color, #ff4757); }\n  .iu-dir-arrow.leftBottom {\n    left: 100%;\n    bottom: 2px;\n    height: 0;\n    width: 4px;\n    border-left: 4px solid var(--iu-dark-color, #2f3542);\n    border-top: 4px solid transparent;\n    border-bottom: 4px solid transparent; }\n  .iu-dir-arrow.leftBottom.success {\n    border-left: 4px solid var(--iu-success-color, #2ed573); }\n  .iu-dir-arrow.leftBottom.info {\n    border-left: 4px solid var(--iu-info-color, #1e90ff); }\n  .iu-dir-arrow.leftBottom.warn {\n    border-left: 4px solid var(--iu-warn-color, #ffa502); }\n  .iu-dir-arrow.leftBottom.error {\n    border-left: 4px solid var(--iu-error-color, #ff4757); }\n  .iu-dir-arrow.right {\n    right: 100%;\n    top: 0;\n    bottom: 0;\n    height: 0;\n    width: 4px;\n    border-right: 4px solid var(--iu-dark-color, #2f3542);\n    border-top: 4px solid transparent;\n    border-bottom: 4px solid transparent; }\n  .iu-dir-arrow.right.success {\n    border-right: 4px solid var(--iu-success-color, #2ed573); }\n  .iu-dir-arrow.right.info {\n    border-right: 4px solid var(--iu-info-color, #1e90ff); }\n  .iu-dir-arrow.right.warn {\n    border-right: 4px solid var(--iu-warn-color, #ffa502); }\n  .iu-dir-arrow.right.error {\n    border-right: 4px solid var(--iu-error-color, #ff4757); }\n  .iu-dir-arrow.rightTop {\n    right: 100%;\n    top: 2px;\n    height: 0;\n    width: 4px;\n    border-right: 4px solid var(--iu-dark-color, #2f3542);\n    border-top: 4px solid transparent;\n    border-bottom: 4px solid transparent; }\n  .iu-dir-arrow.rightTop.success {\n    border-right: 4px solid var(--iu-success-color, #2ed573); }\n  .iu-dir-arrow.rightTop.info {\n    border-right: 4px solid var(--iu-info-color, #1e90ff); }\n  .iu-dir-arrow.rightTop.warn {\n    border-right: 4px solid var(--iu-warn-color, #ffa502); }\n  .iu-dir-arrow.rightTop.error {\n    border-right: 4px solid var(--iu-error-color, #ff4757); }\n  .iu-dir-arrow.rightBottom {\n    right: 100%;\n    bottom: 2px;\n    height: 0;\n    width: 4px;\n    border-right: 4px solid var(--iu-dark-color, #2f3542);\n    border-top: 4px solid transparent;\n    border-bottom: 4px solid transparent; }\n  .iu-dir-arrow.rightBottom.success {\n    border-right: 4px solid var(--iu-success-color, #2ed573); }\n  .iu-dir-arrow.rightBottom.info {\n    border-right: 4px solid var(--iu-info-color, #1e90ff); }\n  .iu-dir-arrow.rightBottom.warn {\n    border-right: 4px solid var(--iu-warn-color, #ffa502); }\n  .iu-dir-arrow.rightBottom.error {\n    border-right: 4px solid var(--iu-error-color, #ff4757); }\n  .iu-dir-arrow.bottom {\n    bottom: 100%;\n    left: 0;\n    right: 0;\n    width: 0;\n    height: 4px;\n    border-bottom: 4px solid var(--iu-dark-color, #2f3542);\n    border-left: 4px solid transparent;\n    border-right: 4px solid transparent; }\n  .iu-dir-arrow.bottom.success {\n    border-bottom: 4px solid var(--iu-success-color, #2ed573); }\n  .iu-dir-arrow.bottom.info {\n    border-bottom: 4px solid var(--iu-info-color, #1e90ff); }\n  .iu-dir-arrow.bottom.warn {\n    border-bottom: 4px solid var(--iu-warn-color, #ffa502); }\n  .iu-dir-arrow.bottom.error {\n    border-bottom: 4px solid var(--iu-error-color, #ff4757); }\n  .iu-dir-arrow.bottomLeft {\n    bottom: 100%;\n    left: 2px;\n    width: 0;\n    height: 4px;\n    border-bottom: 4px solid var(--iu-dark-color, #2f3542);\n    border-left: 4px solid transparent;\n    border-right: 4px solid transparent; }\n  .iu-dir-arrow.bottomLeft.success {\n    border-bottom: 4px solid var(--iu-success-color, #2ed573); }\n  .iu-dir-arrow.bottomLeft.info {\n    border-bottom: 4px solid var(--iu-info-color, #1e90ff); }\n  .iu-dir-arrow.bottomLeft.warn {\n    border-bottom: 4px solid var(--iu-warn-color, #ffa502); }\n  .iu-dir-arrow.bottomLeft.error {\n    border-bottom: 4px solid var(--iu-error-color, #ff4757); }\n  .iu-dir-arrow.bottomRight {\n    bottom: 100%;\n    right: 2px;\n    width: 0;\n    height: 4px;\n    border-bottom: 4px solid var(--iu-dark-color, #2f3542);\n    border-left: 4px solid transparent;\n    border-right: 4px solid transparent; }\n  .iu-dir-arrow.bottomRight.success {\n    border-bottom: 4px solid var(--iu-success-color, #2ed573); }\n  .iu-dir-arrow.bottomRight.info {\n    border-bottom: 4px solid var(--iu-info-color, #1e90ff); }\n  .iu-dir-arrow.bottomRight.warn {\n    border-bottom: 4px solid var(--iu-warn-color, #ffa502); }\n  .iu-dir-arrow.bottomRight.error {\n    border-bottom: 4px solid var(--iu-error-color, #ff4757); }\n\n:host {\n  display: inline-block;\n  width: inherit; }\n\n.tip-content {\n  background-color: var(--iu-dark-color, #2f3542);\n  color: var(--iu-light-color, #f5f5f5);\n  position: relative;\n  box-shadow: 0 0 2em rgba(0, 0, 0, 0.2);\n  border-radius: 0.125em; }\n  .tip-content.left, .tip-content.leftTop, .tip-content.leftBottom {\n    margin-right: .625em; }\n  .tip-content.right, .tip-content.rightTop, .tip-content.rightBottom {\n    margin-left: .625em; }\n  .tip-content.top, .tip-content.topLeft, .tip-content.topRight {\n    margin-bottom: .625em; }\n  .tip-content.bottom, .tip-content.bottomLeft, .tip-content.bottomRight {\n    margin-top: .625em; }\n  .tip-content.success {\n    background-color: var(--iu-success-color, #2ed573);\n    color: #fff; }\n  .tip-content.info {\n    background-color: var(--iu-info-color, #1e90ff);\n    color: #fff; }\n  .tip-content.warn {\n    background-color: var(--iu-warn-color, #ffa502);\n    color: #fff; }\n  .tip-content.error {\n    background-color: var(--iu-error-color, #ff4757);\n    color: #fff; }\n  .tip-content .tip-message {\n    padding: 0.315em;\n    font-size: 0.75em; }\n    .tip-content .tip-message .message-content {\n      max-width: 20em;\n      display: inline-block; }\n")}`}connectedCallback(){super.connectedCallback();}disconnectedCallback(){super.disconnectedCallback();}attributeChangedCallback(e,n,t){super.attributeChangedCallback(e,n,t);}shouldUpdate(e){return !0}updated(e){super.updated(e);}firstUpdated(e){super.firstUpdated(e);}show(){this.open=!0;}hide(){this.open=!1;}onChange({detail:e}){this.open=e;}render(){return N`<iu-direction class="dir" 
                .placement="${this.placement}" 
                .trigger="${this.trigger}"
                ?open="${this.open}"
                @change="${this.onChange}"
            >
                <slot></slot>
                <div slot="content" class="tip-content ${this.placement} ${this.type||""}">
                    <div class="iu-dir-arrow ${this.placement} ${this.type||""}" ?hidden="${!this.showArrow}"></div>
                    <div class="tip-message">
                        ${this.message?N`<span class="message-content">${this.message}</span>`:""}
                        <slot name="tip"></slot>
                    </div>
                </div>
            </iu-direction>
        </span>`}};e([Q("dir"),n("design:type",HTMLElement)],kt.prototype,"dirEl",void 0),e([K({reflect:!0}),n("design:type",String)],kt.prototype,"placement",void 0),e([K({type:Boolean,reflect:!0}),n("design:type",Object)],kt.prototype,"open",void 0),e([K(),n("design:type",String)],kt.prototype,"trigger",void 0),e([K(),n("design:type",String)],kt.prototype,"type",void 0),e([K(),n("design:type",String)],kt.prototype,"message",void 0),e([K({type:Boolean,attribute:!0}),n("design:type",Object)],kt.prototype,"showArrow",void 0),kt=e([fe("iu-tip")],kt),window.dispatchEvent(new CustomEvent("iuuiinstalled"));

	var global$1 = (typeof global !== "undefined" ? global :
	  typeof self !== "undefined" ? self :
	  typeof window !== "undefined" ? window : {});

	/*!
	 * Vue.js v2.6.11
	 * (c) 2014-2019 Evan You
	 * Released under the MIT License.
	 */
	/*  */

	var emptyObject = Object.freeze({});

	// These helpers produce better VM code in JS engines due to their
	// explicitness and function inlining.
	function isUndef (v) {
	  return v === undefined || v === null
	}

	function isDef (v) {
	  return v !== undefined && v !== null
	}

	function isTrue (v) {
	  return v === true
	}

	function isFalse (v) {
	  return v === false
	}

	/**
	 * Check if value is primitive.
	 */
	function isPrimitive (value) {
	  return (
	    typeof value === 'string' ||
	    typeof value === 'number' ||
	    // $flow-disable-line
	    typeof value === 'symbol' ||
	    typeof value === 'boolean'
	  )
	}

	/**
	 * Quick object check - this is primarily used to tell
	 * Objects from primitive values when we know the value
	 * is a JSON-compliant type.
	 */
	function isObject (obj) {
	  return obj !== null && typeof obj === 'object'
	}

	/**
	 * Get the raw type string of a value, e.g., [object Object].
	 */
	var _toString = Object.prototype.toString;

	function toRawType (value) {
	  return _toString.call(value).slice(8, -1)
	}

	/**
	 * Strict object type check. Only returns true
	 * for plain JavaScript objects.
	 */
	function isPlainObject (obj) {
	  return _toString.call(obj) === '[object Object]'
	}

	function isRegExp (v) {
	  return _toString.call(v) === '[object RegExp]'
	}

	/**
	 * Check if val is a valid array index.
	 */
	function isValidArrayIndex (val) {
	  var n = parseFloat(String(val));
	  return n >= 0 && Math.floor(n) === n && isFinite(val)
	}

	function isPromise (val) {
	  return (
	    isDef(val) &&
	    typeof val.then === 'function' &&
	    typeof val.catch === 'function'
	  )
	}

	/**
	 * Convert a value to a string that is actually rendered.
	 */
	function toString (val) {
	  return val == null
	    ? ''
	    : Array.isArray(val) || (isPlainObject(val) && val.toString === _toString)
	      ? JSON.stringify(val, null, 2)
	      : String(val)
	}

	/**
	 * Convert an input value to a number for persistence.
	 * If the conversion fails, return original string.
	 */
	function toNumber (val) {
	  var n = parseFloat(val);
	  return isNaN(n) ? val : n
	}

	/**
	 * Make a map and return a function for checking if a key
	 * is in that map.
	 */
	function makeMap (
	  str,
	  expectsLowerCase
	) {
	  var map = Object.create(null);
	  var list = str.split(',');
	  for (var i = 0; i < list.length; i++) {
	    map[list[i]] = true;
	  }
	  return expectsLowerCase
	    ? function (val) { return map[val.toLowerCase()]; }
	    : function (val) { return map[val]; }
	}

	/**
	 * Check if a tag is a built-in tag.
	 */
	var isBuiltInTag = makeMap('slot,component', true);

	/**
	 * Check if an attribute is a reserved attribute.
	 */
	var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');

	/**
	 * Remove an item from an array.
	 */
	function remove (arr, item) {
	  if (arr.length) {
	    var index = arr.indexOf(item);
	    if (index > -1) {
	      return arr.splice(index, 1)
	    }
	  }
	}

	/**
	 * Check whether an object has the property.
	 */
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	function hasOwn (obj, key) {
	  return hasOwnProperty.call(obj, key)
	}

	/**
	 * Create a cached version of a pure function.
	 */
	function cached (fn) {
	  var cache = Object.create(null);
	  return (function cachedFn (str) {
	    var hit = cache[str];
	    return hit || (cache[str] = fn(str))
	  })
	}

	/**
	 * Camelize a hyphen-delimited string.
	 */
	var camelizeRE = /-(\w)/g;
	var camelize = cached(function (str) {
	  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
	});

	/**
	 * Capitalize a string.
	 */
	var capitalize = cached(function (str) {
	  return str.charAt(0).toUpperCase() + str.slice(1)
	});

	/**
	 * Hyphenate a camelCase string.
	 */
	var hyphenateRE = /\B([A-Z])/g;
	var hyphenate = cached(function (str) {
	  return str.replace(hyphenateRE, '-$1').toLowerCase()
	});

	/**
	 * Simple bind polyfill for environments that do not support it,
	 * e.g., PhantomJS 1.x. Technically, we don't need this anymore
	 * since native bind is now performant enough in most browsers.
	 * But removing it would mean breaking code that was able to run in
	 * PhantomJS 1.x, so this must be kept for backward compatibility.
	 */

	/* istanbul ignore next */
	function polyfillBind (fn, ctx) {
	  function boundFn (a) {
	    var l = arguments.length;
	    return l
	      ? l > 1
	        ? fn.apply(ctx, arguments)
	        : fn.call(ctx, a)
	      : fn.call(ctx)
	  }

	  boundFn._length = fn.length;
	  return boundFn
	}

	function nativeBind (fn, ctx) {
	  return fn.bind(ctx)
	}

	var bind = Function.prototype.bind
	  ? nativeBind
	  : polyfillBind;

	/**
	 * Convert an Array-like object to a real Array.
	 */
	function toArray (list, start) {
	  start = start || 0;
	  var i = list.length - start;
	  var ret = new Array(i);
	  while (i--) {
	    ret[i] = list[i + start];
	  }
	  return ret
	}

	/**
	 * Mix properties into target object.
	 */
	function extend (to, _from) {
	  for (var key in _from) {
	    to[key] = _from[key];
	  }
	  return to
	}

	/**
	 * Merge an Array of Objects into a single Object.
	 */
	function toObject (arr) {
	  var res = {};
	  for (var i = 0; i < arr.length; i++) {
	    if (arr[i]) {
	      extend(res, arr[i]);
	    }
	  }
	  return res
	}

	/* eslint-disable no-unused-vars */

	/**
	 * Perform no operation.
	 * Stubbing args to make Flow happy without leaving useless transpiled code
	 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/).
	 */
	function noop (a, b, c) {}

	/**
	 * Always return false.
	 */
	var no = function (a, b, c) { return false; };

	/* eslint-enable no-unused-vars */

	/**
	 * Return the same value.
	 */
	var identity = function (_) { return _; };

	/**
	 * Check if two values are loosely equal - that is,
	 * if they are plain objects, do they have the same shape?
	 */
	function looseEqual (a, b) {
	  if (a === b) { return true }
	  var isObjectA = isObject(a);
	  var isObjectB = isObject(b);
	  if (isObjectA && isObjectB) {
	    try {
	      var isArrayA = Array.isArray(a);
	      var isArrayB = Array.isArray(b);
	      if (isArrayA && isArrayB) {
	        return a.length === b.length && a.every(function (e, i) {
	          return looseEqual(e, b[i])
	        })
	      } else if (a instanceof Date && b instanceof Date) {
	        return a.getTime() === b.getTime()
	      } else if (!isArrayA && !isArrayB) {
	        var keysA = Object.keys(a);
	        var keysB = Object.keys(b);
	        return keysA.length === keysB.length && keysA.every(function (key) {
	          return looseEqual(a[key], b[key])
	        })
	      } else {
	        /* istanbul ignore next */
	        return false
	      }
	    } catch (e) {
	      /* istanbul ignore next */
	      return false
	    }
	  } else if (!isObjectA && !isObjectB) {
	    return String(a) === String(b)
	  } else {
	    return false
	  }
	}

	/**
	 * Return the first index at which a loosely equal value can be
	 * found in the array (if value is a plain object, the array must
	 * contain an object of the same shape), or -1 if it is not present.
	 */
	function looseIndexOf (arr, val) {
	  for (var i = 0; i < arr.length; i++) {
	    if (looseEqual(arr[i], val)) { return i }
	  }
	  return -1
	}

	/**
	 * Ensure a function is called only once.
	 */
	function once (fn) {
	  var called = false;
	  return function () {
	    if (!called) {
	      called = true;
	      fn.apply(this, arguments);
	    }
	  }
	}

	var SSR_ATTR = 'data-server-rendered';

	var ASSET_TYPES = [
	  'component',
	  'directive',
	  'filter'
	];

	var LIFECYCLE_HOOKS = [
	  'beforeCreate',
	  'created',
	  'beforeMount',
	  'mounted',
	  'beforeUpdate',
	  'updated',
	  'beforeDestroy',
	  'destroyed',
	  'activated',
	  'deactivated',
	  'errorCaptured',
	  'serverPrefetch'
	];

	/*  */



	var config = ({
	  /**
	   * Option merge strategies (used in core/util/options)
	   */
	  // $flow-disable-line
	  optionMergeStrategies: Object.create(null),

	  /**
	   * Whether to suppress warnings.
	   */
	  silent: false,

	  /**
	   * Show production mode tip message on boot?
	   */
	  productionTip: "" !== 'production',

	  /**
	   * Whether to enable devtools
	   */
	  devtools: "" !== 'production',

	  /**
	   * Whether to record perf
	   */
	  performance: false,

	  /**
	   * Error handler for watcher errors
	   */
	  errorHandler: null,

	  /**
	   * Warn handler for watcher warns
	   */
	  warnHandler: null,

	  /**
	   * Ignore certain custom elements
	   */
	  ignoredElements: [],

	  /**
	   * Custom user key aliases for v-on
	   */
	  // $flow-disable-line
	  keyCodes: Object.create(null),

	  /**
	   * Check if a tag is reserved so that it cannot be registered as a
	   * component. This is platform-dependent and may be overwritten.
	   */
	  isReservedTag: no,

	  /**
	   * Check if an attribute is reserved so that it cannot be used as a component
	   * prop. This is platform-dependent and may be overwritten.
	   */
	  isReservedAttr: no,

	  /**
	   * Check if a tag is an unknown element.
	   * Platform-dependent.
	   */
	  isUnknownElement: no,

	  /**
	   * Get the namespace of an element
	   */
	  getTagNamespace: noop,

	  /**
	   * Parse the real tag name for the specific platform.
	   */
	  parsePlatformTagName: identity,

	  /**
	   * Check if an attribute must be bound using property, e.g. value
	   * Platform-dependent.
	   */
	  mustUseProp: no,

	  /**
	   * Perform updates asynchronously. Intended to be used by Vue Test Utils
	   * This will significantly reduce performance if set to false.
	   */
	  async: true,

	  /**
	   * Exposed for legacy reasons
	   */
	  _lifecycleHooks: LIFECYCLE_HOOKS
	});

	/*  */

	/**
	 * unicode letters used for parsing html tags, component names and property paths.
	 * using https://www.w3.org/TR/html53/semantics-scripting.html#potentialcustomelementname
	 * skipping \u10000-\uEFFFF due to it freezing up PhantomJS
	 */
	var unicodeRegExp = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;

	/**
	 * Check if a string starts with $ or _
	 */
	function isReserved (str) {
	  var c = (str + '').charCodeAt(0);
	  return c === 0x24 || c === 0x5F
	}

	/**
	 * Define a property.
	 */
	function def (obj, key, val, enumerable) {
	  Object.defineProperty(obj, key, {
	    value: val,
	    enumerable: !!enumerable,
	    writable: true,
	    configurable: true
	  });
	}

	/**
	 * Parse simple path.
	 */
	var bailRE = new RegExp(("[^" + (unicodeRegExp.source) + ".$_\\d]"));
	function parsePath (path) {
	  if (bailRE.test(path)) {
	    return
	  }
	  var segments = path.split('.');
	  return function (obj) {
	    for (var i = 0; i < segments.length; i++) {
	      if (!obj) { return }
	      obj = obj[segments[i]];
	    }
	    return obj
	  }
	}

	/*  */

	// can we use __proto__?
	var hasProto = '__proto__' in {};

	// Browser environment sniffing
	var inBrowser = typeof window !== 'undefined';
	var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
	var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
	var UA = inBrowser && window.navigator.userAgent.toLowerCase();
	var isIE = UA && /msie|trident/.test(UA);
	var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
	var isEdge = UA && UA.indexOf('edge/') > 0;
	var isAndroid = (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android');
	var isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || (weexPlatform === 'ios');
	var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;
	var isPhantomJS = UA && /phantomjs/.test(UA);
	var isFF = UA && UA.match(/firefox\/(\d+)/);

	// Firefox has a "watch" function on Object.prototype...
	var nativeWatch = ({}).watch;

	var supportsPassive = false;
	if (inBrowser) {
	  try {
	    var opts = {};
	    Object.defineProperty(opts, 'passive', ({
	      get: function get () {
	        /* istanbul ignore next */
	        supportsPassive = true;
	      }
	    })); // https://github.com/facebook/flow/issues/285
	    window.addEventListener('test-passive', null, opts);
	  } catch (e) {}
	}

	// this needs to be lazy-evaled because vue may be required before
	// vue-server-renderer can set VUE_ENV
	var _isServer;
	var isServerRendering = function () {
	  if (_isServer === undefined) {
	    /* istanbul ignore if */
	    if (!inBrowser && !inWeex && typeof global$1 !== 'undefined') {
	      // detect presence of vue-server-renderer and avoid
	      // Webpack shimming the process
	      _isServer = global$1['process'] && global$1['process'].env.VUE_ENV === 'server';
	    } else {
	      _isServer = false;
	    }
	  }
	  return _isServer
	};

	// detect devtools
	var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

	/* istanbul ignore next */
	function isNative (Ctor) {
	  return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
	}

	var hasSymbol =
	  typeof Symbol !== 'undefined' && isNative(Symbol) &&
	  typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

	var _Set;
	/* istanbul ignore if */ // $flow-disable-line
	if (typeof Set !== 'undefined' && isNative(Set)) {
	  // use native Set when available.
	  _Set = Set;
	} else {
	  // a non-standard Set polyfill that only works with primitive keys.
	  _Set = /*@__PURE__*/(function () {
	    function Set () {
	      this.set = Object.create(null);
	    }
	    Set.prototype.has = function has (key) {
	      return this.set[key] === true
	    };
	    Set.prototype.add = function add (key) {
	      this.set[key] = true;
	    };
	    Set.prototype.clear = function clear () {
	      this.set = Object.create(null);
	    };

	    return Set;
	  }());
	}

	/*  */

	var warn = noop;
	var tip = noop;
	var generateComponentTrace = (noop); // work around flow check
	var formatComponentName = (noop);

	{
	  var hasConsole = typeof console !== 'undefined';
	  var classifyRE = /(?:^|[-_])(\w)/g;
	  var classify = function (str) { return str
	    .replace(classifyRE, function (c) { return c.toUpperCase(); })
	    .replace(/[-_]/g, ''); };

	  warn = function (msg, vm) {
	    var trace = vm ? generateComponentTrace(vm) : '';

	    if (config.warnHandler) {
	      config.warnHandler.call(null, msg, vm, trace);
	    } else if (hasConsole && (!config.silent)) {
	      console.error(("[Vue warn]: " + msg + trace));
	    }
	  };

	  tip = function (msg, vm) {
	    if (hasConsole && (!config.silent)) {
	      console.warn("[Vue tip]: " + msg + (
	        vm ? generateComponentTrace(vm) : ''
	      ));
	    }
	  };

	  formatComponentName = function (vm, includeFile) {
	    if (vm.$root === vm) {
	      return '<Root>'
	    }
	    var options = typeof vm === 'function' && vm.cid != null
	      ? vm.options
	      : vm._isVue
	        ? vm.$options || vm.constructor.options
	        : vm;
	    var name = options.name || options._componentTag;
	    var file = options.__file;
	    if (!name && file) {
	      var match = file.match(/([^/\\]+)\.vue$/);
	      name = match && match[1];
	    }

	    return (
	      (name ? ("<" + (classify(name)) + ">") : "<Anonymous>") +
	      (file && includeFile !== false ? (" at " + file) : '')
	    )
	  };

	  var repeat = function (str, n) {
	    var res = '';
	    while (n) {
	      if (n % 2 === 1) { res += str; }
	      if (n > 1) { str += str; }
	      n >>= 1;
	    }
	    return res
	  };

	  generateComponentTrace = function (vm) {
	    if (vm._isVue && vm.$parent) {
	      var tree = [];
	      var currentRecursiveSequence = 0;
	      while (vm) {
	        if (tree.length > 0) {
	          var last = tree[tree.length - 1];
	          if (last.constructor === vm.constructor) {
	            currentRecursiveSequence++;
	            vm = vm.$parent;
	            continue
	          } else if (currentRecursiveSequence > 0) {
	            tree[tree.length - 1] = [last, currentRecursiveSequence];
	            currentRecursiveSequence = 0;
	          }
	        }
	        tree.push(vm);
	        vm = vm.$parent;
	      }
	      return '\n\nfound in\n\n' + tree
	        .map(function (vm, i) { return ("" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm)
	            ? ((formatComponentName(vm[0])) + "... (" + (vm[1]) + " recursive calls)")
	            : formatComponentName(vm))); })
	        .join('\n')
	    } else {
	      return ("\n\n(found in " + (formatComponentName(vm)) + ")")
	    }
	  };
	}

	/*  */

	var uid = 0;

	/**
	 * A dep is an observable that can have multiple
	 * directives subscribing to it.
	 */
	var Dep = function Dep () {
	  this.id = uid++;
	  this.subs = [];
	};

	Dep.prototype.addSub = function addSub (sub) {
	  this.subs.push(sub);
	};

	Dep.prototype.removeSub = function removeSub (sub) {
	  remove(this.subs, sub);
	};

	Dep.prototype.depend = function depend () {
	  if (Dep.target) {
	    Dep.target.addDep(this);
	  }
	};

	Dep.prototype.notify = function notify () {
	  // stabilize the subscriber list first
	  var subs = this.subs.slice();
	  if ( !config.async) {
	    // subs aren't sorted in scheduler if not running async
	    // we need to sort them now to make sure they fire in correct
	    // order
	    subs.sort(function (a, b) { return a.id - b.id; });
	  }
	  for (var i = 0, l = subs.length; i < l; i++) {
	    subs[i].update();
	  }
	};

	// The current target watcher being evaluated.
	// This is globally unique because only one watcher
	// can be evaluated at a time.
	Dep.target = null;
	var targetStack = [];

	function pushTarget (target) {
	  targetStack.push(target);
	  Dep.target = target;
	}

	function popTarget () {
	  targetStack.pop();
	  Dep.target = targetStack[targetStack.length - 1];
	}

	/*  */

	var VNode = function VNode (
	  tag,
	  data,
	  children,
	  text,
	  elm,
	  context,
	  componentOptions,
	  asyncFactory
	) {
	  this.tag = tag;
	  this.data = data;
	  this.children = children;
	  this.text = text;
	  this.elm = elm;
	  this.ns = undefined;
	  this.context = context;
	  this.fnContext = undefined;
	  this.fnOptions = undefined;
	  this.fnScopeId = undefined;
	  this.key = data && data.key;
	  this.componentOptions = componentOptions;
	  this.componentInstance = undefined;
	  this.parent = undefined;
	  this.raw = false;
	  this.isStatic = false;
	  this.isRootInsert = true;
	  this.isComment = false;
	  this.isCloned = false;
	  this.isOnce = false;
	  this.asyncFactory = asyncFactory;
	  this.asyncMeta = undefined;
	  this.isAsyncPlaceholder = false;
	};

	var prototypeAccessors = { child: { configurable: true } };

	// DEPRECATED: alias for componentInstance for backwards compat.
	/* istanbul ignore next */
	prototypeAccessors.child.get = function () {
	  return this.componentInstance
	};

	Object.defineProperties( VNode.prototype, prototypeAccessors );

	var createEmptyVNode = function (text) {
	  if ( text === void 0 ) text = '';

	  var node = new VNode();
	  node.text = text;
	  node.isComment = true;
	  return node
	};

	function createTextVNode (val) {
	  return new VNode(undefined, undefined, undefined, String(val))
	}

	// optimized shallow clone
	// used for static nodes and slot nodes because they may be reused across
	// multiple renders, cloning them avoids errors when DOM manipulations rely
	// on their elm reference.
	function cloneVNode (vnode) {
	  var cloned = new VNode(
	    vnode.tag,
	    vnode.data,
	    // #7975
	    // clone children array to avoid mutating original in case of cloning
	    // a child.
	    vnode.children && vnode.children.slice(),
	    vnode.text,
	    vnode.elm,
	    vnode.context,
	    vnode.componentOptions,
	    vnode.asyncFactory
	  );
	  cloned.ns = vnode.ns;
	  cloned.isStatic = vnode.isStatic;
	  cloned.key = vnode.key;
	  cloned.isComment = vnode.isComment;
	  cloned.fnContext = vnode.fnContext;
	  cloned.fnOptions = vnode.fnOptions;
	  cloned.fnScopeId = vnode.fnScopeId;
	  cloned.asyncMeta = vnode.asyncMeta;
	  cloned.isCloned = true;
	  return cloned
	}

	/*
	 * not type checking this file because flow doesn't play well with
	 * dynamically accessing methods on Array prototype
	 */

	var arrayProto = Array.prototype;
	var arrayMethods = Object.create(arrayProto);

	var methodsToPatch = [
	  'push',
	  'pop',
	  'shift',
	  'unshift',
	  'splice',
	  'sort',
	  'reverse'
	];

	/**
	 * Intercept mutating methods and emit events
	 */
	methodsToPatch.forEach(function (method) {
	  // cache original method
	  var original = arrayProto[method];
	  def(arrayMethods, method, function mutator () {
	    var args = [], len = arguments.length;
	    while ( len-- ) args[ len ] = arguments[ len ];

	    var result = original.apply(this, args);
	    var ob = this.__ob__;
	    var inserted;
	    switch (method) {
	      case 'push':
	      case 'unshift':
	        inserted = args;
	        break
	      case 'splice':
	        inserted = args.slice(2);
	        break
	    }
	    if (inserted) { ob.observeArray(inserted); }
	    // notify change
	    ob.dep.notify();
	    return result
	  });
	});

	/*  */

	var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

	/**
	 * In some cases we may want to disable observation inside a component's
	 * update computation.
	 */
	var shouldObserve = true;

	function toggleObserving (value) {
	  shouldObserve = value;
	}

	/**
	 * Observer class that is attached to each observed
	 * object. Once attached, the observer converts the target
	 * object's property keys into getter/setters that
	 * collect dependencies and dispatch updates.
	 */
	var Observer = function Observer (value) {
	  this.value = value;
	  this.dep = new Dep();
	  this.vmCount = 0;
	  def(value, '__ob__', this);
	  if (Array.isArray(value)) {
	    if (hasProto) {
	      protoAugment(value, arrayMethods);
	    } else {
	      copyAugment(value, arrayMethods, arrayKeys);
	    }
	    this.observeArray(value);
	  } else {
	    this.walk(value);
	  }
	};

	/**
	 * Walk through all properties and convert them into
	 * getter/setters. This method should only be called when
	 * value type is Object.
	 */
	Observer.prototype.walk = function walk (obj) {
	  var keys = Object.keys(obj);
	  for (var i = 0; i < keys.length; i++) {
	    defineReactive$$1(obj, keys[i]);
	  }
	};

	/**
	 * Observe a list of Array items.
	 */
	Observer.prototype.observeArray = function observeArray (items) {
	  for (var i = 0, l = items.length; i < l; i++) {
	    observe(items[i]);
	  }
	};

	// helpers

	/**
	 * Augment a target Object or Array by intercepting
	 * the prototype chain using __proto__
	 */
	function protoAugment (target, src) {
	  /* eslint-disable no-proto */
	  target.__proto__ = src;
	  /* eslint-enable no-proto */
	}

	/**
	 * Augment a target Object or Array by defining
	 * hidden properties.
	 */
	/* istanbul ignore next */
	function copyAugment (target, src, keys) {
	  for (var i = 0, l = keys.length; i < l; i++) {
	    var key = keys[i];
	    def(target, key, src[key]);
	  }
	}

	/**
	 * Attempt to create an observer instance for a value,
	 * returns the new observer if successfully observed,
	 * or the existing observer if the value already has one.
	 */
	function observe (value, asRootData) {
	  if (!isObject(value) || value instanceof VNode) {
	    return
	  }
	  var ob;
	  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
	    ob = value.__ob__;
	  } else if (
	    shouldObserve &&
	    !isServerRendering() &&
	    (Array.isArray(value) || isPlainObject(value)) &&
	    Object.isExtensible(value) &&
	    !value._isVue
	  ) {
	    ob = new Observer(value);
	  }
	  if (asRootData && ob) {
	    ob.vmCount++;
	  }
	  return ob
	}

	/**
	 * Define a reactive property on an Object.
	 */
	function defineReactive$$1 (
	  obj,
	  key,
	  val,
	  customSetter,
	  shallow
	) {
	  var dep = new Dep();

	  var property = Object.getOwnPropertyDescriptor(obj, key);
	  if (property && property.configurable === false) {
	    return
	  }

	  // cater for pre-defined getter/setters
	  var getter = property && property.get;
	  var setter = property && property.set;
	  if ((!getter || setter) && arguments.length === 2) {
	    val = obj[key];
	  }

	  var childOb = !shallow && observe(val);
	  Object.defineProperty(obj, key, {
	    enumerable: true,
	    configurable: true,
	    get: function reactiveGetter () {
	      var value = getter ? getter.call(obj) : val;
	      if (Dep.target) {
	        dep.depend();
	        if (childOb) {
	          childOb.dep.depend();
	          if (Array.isArray(value)) {
	            dependArray(value);
	          }
	        }
	      }
	      return value
	    },
	    set: function reactiveSetter (newVal) {
	      var value = getter ? getter.call(obj) : val;
	      /* eslint-disable no-self-compare */
	      if (newVal === value || (newVal !== newVal && value !== value)) {
	        return
	      }
	      /* eslint-enable no-self-compare */
	      if ( customSetter) {
	        customSetter();
	      }
	      // #7981: for accessor properties without setter
	      if (getter && !setter) { return }
	      if (setter) {
	        setter.call(obj, newVal);
	      } else {
	        val = newVal;
	      }
	      childOb = !shallow && observe(newVal);
	      dep.notify();
	    }
	  });
	}

	/**
	 * Set a property on an object. Adds the new property and
	 * triggers change notification if the property doesn't
	 * already exist.
	 */
	function set (target, key, val) {
	  if (
	    (isUndef(target) || isPrimitive(target))
	  ) {
	    warn(("Cannot set reactive property on undefined, null, or primitive value: " + ((target))));
	  }
	  if (Array.isArray(target) && isValidArrayIndex(key)) {
	    target.length = Math.max(target.length, key);
	    target.splice(key, 1, val);
	    return val
	  }
	  if (key in target && !(key in Object.prototype)) {
	    target[key] = val;
	    return val
	  }
	  var ob = (target).__ob__;
	  if (target._isVue || (ob && ob.vmCount)) {
	     warn(
	      'Avoid adding reactive properties to a Vue instance or its root $data ' +
	      'at runtime - declare it upfront in the data option.'
	    );
	    return val
	  }
	  if (!ob) {
	    target[key] = val;
	    return val
	  }
	  defineReactive$$1(ob.value, key, val);
	  ob.dep.notify();
	  return val
	}

	/**
	 * Delete a property and trigger change if necessary.
	 */
	function del (target, key) {
	  if (
	    (isUndef(target) || isPrimitive(target))
	  ) {
	    warn(("Cannot delete reactive property on undefined, null, or primitive value: " + ((target))));
	  }
	  if (Array.isArray(target) && isValidArrayIndex(key)) {
	    target.splice(key, 1);
	    return
	  }
	  var ob = (target).__ob__;
	  if (target._isVue || (ob && ob.vmCount)) {
	     warn(
	      'Avoid deleting properties on a Vue instance or its root $data ' +
	      '- just set it to null.'
	    );
	    return
	  }
	  if (!hasOwn(target, key)) {
	    return
	  }
	  delete target[key];
	  if (!ob) {
	    return
	  }
	  ob.dep.notify();
	}

	/**
	 * Collect dependencies on array elements when the array is touched, since
	 * we cannot intercept array element access like property getters.
	 */
	function dependArray (value) {
	  for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
	    e = value[i];
	    e && e.__ob__ && e.__ob__.dep.depend();
	    if (Array.isArray(e)) {
	      dependArray(e);
	    }
	  }
	}

	/*  */

	/**
	 * Option overwriting strategies are functions that handle
	 * how to merge a parent option value and a child option
	 * value into the final value.
	 */
	var strats = config.optionMergeStrategies;

	/**
	 * Options with restrictions
	 */
	{
	  strats.el = strats.propsData = function (parent, child, vm, key) {
	    if (!vm) {
	      warn(
	        "option \"" + key + "\" can only be used during instance " +
	        'creation with the `new` keyword.'
	      );
	    }
	    return defaultStrat(parent, child)
	  };
	}

	/**
	 * Helper that recursively merges two data objects together.
	 */
	function mergeData (to, from) {
	  if (!from) { return to }
	  var key, toVal, fromVal;

	  var keys = hasSymbol
	    ? Reflect.ownKeys(from)
	    : Object.keys(from);

	  for (var i = 0; i < keys.length; i++) {
	    key = keys[i];
	    // in case the object is already observed...
	    if (key === '__ob__') { continue }
	    toVal = to[key];
	    fromVal = from[key];
	    if (!hasOwn(to, key)) {
	      set(to, key, fromVal);
	    } else if (
	      toVal !== fromVal &&
	      isPlainObject(toVal) &&
	      isPlainObject(fromVal)
	    ) {
	      mergeData(toVal, fromVal);
	    }
	  }
	  return to
	}

	/**
	 * Data
	 */
	function mergeDataOrFn (
	  parentVal,
	  childVal,
	  vm
	) {
	  if (!vm) {
	    // in a Vue.extend merge, both should be functions
	    if (!childVal) {
	      return parentVal
	    }
	    if (!parentVal) {
	      return childVal
	    }
	    // when parentVal & childVal are both present,
	    // we need to return a function that returns the
	    // merged result of both functions... no need to
	    // check if parentVal is a function here because
	    // it has to be a function to pass previous merges.
	    return function mergedDataFn () {
	      return mergeData(
	        typeof childVal === 'function' ? childVal.call(this, this) : childVal,
	        typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal
	      )
	    }
	  } else {
	    return function mergedInstanceDataFn () {
	      // instance merge
	      var instanceData = typeof childVal === 'function'
	        ? childVal.call(vm, vm)
	        : childVal;
	      var defaultData = typeof parentVal === 'function'
	        ? parentVal.call(vm, vm)
	        : parentVal;
	      if (instanceData) {
	        return mergeData(instanceData, defaultData)
	      } else {
	        return defaultData
	      }
	    }
	  }
	}

	strats.data = function (
	  parentVal,
	  childVal,
	  vm
	) {
	  if (!vm) {
	    if (childVal && typeof childVal !== 'function') {
	       warn(
	        'The "data" option should be a function ' +
	        'that returns a per-instance value in component ' +
	        'definitions.',
	        vm
	      );

	      return parentVal
	    }
	    return mergeDataOrFn(parentVal, childVal)
	  }

	  return mergeDataOrFn(parentVal, childVal, vm)
	};

	/**
	 * Hooks and props are merged as arrays.
	 */
	function mergeHook (
	  parentVal,
	  childVal
	) {
	  var res = childVal
	    ? parentVal
	      ? parentVal.concat(childVal)
	      : Array.isArray(childVal)
	        ? childVal
	        : [childVal]
	    : parentVal;
	  return res
	    ? dedupeHooks(res)
	    : res
	}

	function dedupeHooks (hooks) {
	  var res = [];
	  for (var i = 0; i < hooks.length; i++) {
	    if (res.indexOf(hooks[i]) === -1) {
	      res.push(hooks[i]);
	    }
	  }
	  return res
	}

	LIFECYCLE_HOOKS.forEach(function (hook) {
	  strats[hook] = mergeHook;
	});

	/**
	 * Assets
	 *
	 * When a vm is present (instance creation), we need to do
	 * a three-way merge between constructor options, instance
	 * options and parent options.
	 */
	function mergeAssets (
	  parentVal,
	  childVal,
	  vm,
	  key
	) {
	  var res = Object.create(parentVal || null);
	  if (childVal) {
	     assertObjectType(key, childVal, vm);
	    return extend(res, childVal)
	  } else {
	    return res
	  }
	}

	ASSET_TYPES.forEach(function (type) {
	  strats[type + 's'] = mergeAssets;
	});

	/**
	 * Watchers.
	 *
	 * Watchers hashes should not overwrite one
	 * another, so we merge them as arrays.
	 */
	strats.watch = function (
	  parentVal,
	  childVal,
	  vm,
	  key
	) {
	  // work around Firefox's Object.prototype.watch...
	  if (parentVal === nativeWatch) { parentVal = undefined; }
	  if (childVal === nativeWatch) { childVal = undefined; }
	  /* istanbul ignore if */
	  if (!childVal) { return Object.create(parentVal || null) }
	  {
	    assertObjectType(key, childVal, vm);
	  }
	  if (!parentVal) { return childVal }
	  var ret = {};
	  extend(ret, parentVal);
	  for (var key$1 in childVal) {
	    var parent = ret[key$1];
	    var child = childVal[key$1];
	    if (parent && !Array.isArray(parent)) {
	      parent = [parent];
	    }
	    ret[key$1] = parent
	      ? parent.concat(child)
	      : Array.isArray(child) ? child : [child];
	  }
	  return ret
	};

	/**
	 * Other object hashes.
	 */
	strats.props =
	strats.methods =
	strats.inject =
	strats.computed = function (
	  parentVal,
	  childVal,
	  vm,
	  key
	) {
	  if (childVal && "" !== 'production') {
	    assertObjectType(key, childVal, vm);
	  }
	  if (!parentVal) { return childVal }
	  var ret = Object.create(null);
	  extend(ret, parentVal);
	  if (childVal) { extend(ret, childVal); }
	  return ret
	};
	strats.provide = mergeDataOrFn;

	/**
	 * Default strategy.
	 */
	var defaultStrat = function (parentVal, childVal) {
	  return childVal === undefined
	    ? parentVal
	    : childVal
	};

	/**
	 * Validate component names
	 */
	function checkComponents (options) {
	  for (var key in options.components) {
	    validateComponentName(key);
	  }
	}

	function validateComponentName (name) {
	  if (!new RegExp(("^[a-zA-Z][\\-\\.0-9_" + (unicodeRegExp.source) + "]*$")).test(name)) {
	    warn(
	      'Invalid component name: "' + name + '". Component names ' +
	      'should conform to valid custom element name in html5 specification.'
	    );
	  }
	  if (isBuiltInTag(name) || config.isReservedTag(name)) {
	    warn(
	      'Do not use built-in or reserved HTML elements as component ' +
	      'id: ' + name
	    );
	  }
	}

	/**
	 * Ensure all props option syntax are normalized into the
	 * Object-based format.
	 */
	function normalizeProps (options, vm) {
	  var props = options.props;
	  if (!props) { return }
	  var res = {};
	  var i, val, name;
	  if (Array.isArray(props)) {
	    i = props.length;
	    while (i--) {
	      val = props[i];
	      if (typeof val === 'string') {
	        name = camelize(val);
	        res[name] = { type: null };
	      } else {
	        warn('props must be strings when using array syntax.');
	      }
	    }
	  } else if (isPlainObject(props)) {
	    for (var key in props) {
	      val = props[key];
	      name = camelize(key);
	      res[name] = isPlainObject(val)
	        ? val
	        : { type: val };
	    }
	  } else {
	    warn(
	      "Invalid value for option \"props\": expected an Array or an Object, " +
	      "but got " + (toRawType(props)) + ".",
	      vm
	    );
	  }
	  options.props = res;
	}

	/**
	 * Normalize all injections into Object-based format
	 */
	function normalizeInject (options, vm) {
	  var inject = options.inject;
	  if (!inject) { return }
	  var normalized = options.inject = {};
	  if (Array.isArray(inject)) {
	    for (var i = 0; i < inject.length; i++) {
	      normalized[inject[i]] = { from: inject[i] };
	    }
	  } else if (isPlainObject(inject)) {
	    for (var key in inject) {
	      var val = inject[key];
	      normalized[key] = isPlainObject(val)
	        ? extend({ from: key }, val)
	        : { from: val };
	    }
	  } else {
	    warn(
	      "Invalid value for option \"inject\": expected an Array or an Object, " +
	      "but got " + (toRawType(inject)) + ".",
	      vm
	    );
	  }
	}

	/**
	 * Normalize raw function directives into object format.
	 */
	function normalizeDirectives (options) {
	  var dirs = options.directives;
	  if (dirs) {
	    for (var key in dirs) {
	      var def$$1 = dirs[key];
	      if (typeof def$$1 === 'function') {
	        dirs[key] = { bind: def$$1, update: def$$1 };
	      }
	    }
	  }
	}

	function assertObjectType (name, value, vm) {
	  if (!isPlainObject(value)) {
	    warn(
	      "Invalid value for option \"" + name + "\": expected an Object, " +
	      "but got " + (toRawType(value)) + ".",
	      vm
	    );
	  }
	}

	/**
	 * Merge two option objects into a new one.
	 * Core utility used in both instantiation and inheritance.
	 */
	function mergeOptions (
	  parent,
	  child,
	  vm
	) {
	  {
	    checkComponents(child);
	  }

	  if (typeof child === 'function') {
	    child = child.options;
	  }

	  normalizeProps(child, vm);
	  normalizeInject(child, vm);
	  normalizeDirectives(child);

	  // Apply extends and mixins on the child options,
	  // but only if it is a raw options object that isn't
	  // the result of another mergeOptions call.
	  // Only merged options has the _base property.
	  if (!child._base) {
	    if (child.extends) {
	      parent = mergeOptions(parent, child.extends, vm);
	    }
	    if (child.mixins) {
	      for (var i = 0, l = child.mixins.length; i < l; i++) {
	        parent = mergeOptions(parent, child.mixins[i], vm);
	      }
	    }
	  }

	  var options = {};
	  var key;
	  for (key in parent) {
	    mergeField(key);
	  }
	  for (key in child) {
	    if (!hasOwn(parent, key)) {
	      mergeField(key);
	    }
	  }
	  function mergeField (key) {
	    var strat = strats[key] || defaultStrat;
	    options[key] = strat(parent[key], child[key], vm, key);
	  }
	  return options
	}

	/**
	 * Resolve an asset.
	 * This function is used because child instances need access
	 * to assets defined in its ancestor chain.
	 */
	function resolveAsset (
	  options,
	  type,
	  id,
	  warnMissing
	) {
	  /* istanbul ignore if */
	  if (typeof id !== 'string') {
	    return
	  }
	  var assets = options[type];
	  // check local registration variations first
	  if (hasOwn(assets, id)) { return assets[id] }
	  var camelizedId = camelize(id);
	  if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
	  var PascalCaseId = capitalize(camelizedId);
	  if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
	  // fallback to prototype chain
	  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
	  if ( warnMissing && !res) {
	    warn(
	      'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
	      options
	    );
	  }
	  return res
	}

	/*  */



	function validateProp (
	  key,
	  propOptions,
	  propsData,
	  vm
	) {
	  var prop = propOptions[key];
	  var absent = !hasOwn(propsData, key);
	  var value = propsData[key];
	  // boolean casting
	  var booleanIndex = getTypeIndex(Boolean, prop.type);
	  if (booleanIndex > -1) {
	    if (absent && !hasOwn(prop, 'default')) {
	      value = false;
	    } else if (value === '' || value === hyphenate(key)) {
	      // only cast empty string / same name to boolean if
	      // boolean has higher priority
	      var stringIndex = getTypeIndex(String, prop.type);
	      if (stringIndex < 0 || booleanIndex < stringIndex) {
	        value = true;
	      }
	    }
	  }
	  // check default value
	  if (value === undefined) {
	    value = getPropDefaultValue(vm, prop, key);
	    // since the default value is a fresh copy,
	    // make sure to observe it.
	    var prevShouldObserve = shouldObserve;
	    toggleObserving(true);
	    observe(value);
	    toggleObserving(prevShouldObserve);
	  }
	  {
	    assertProp(prop, key, value, vm, absent);
	  }
	  return value
	}

	/**
	 * Get the default value of a prop.
	 */
	function getPropDefaultValue (vm, prop, key) {
	  // no default, return undefined
	  if (!hasOwn(prop, 'default')) {
	    return undefined
	  }
	  var def = prop.default;
	  // warn against non-factory defaults for Object & Array
	  if ( isObject(def)) {
	    warn(
	      'Invalid default value for prop "' + key + '": ' +
	      'Props with type Object/Array must use a factory function ' +
	      'to return the default value.',
	      vm
	    );
	  }
	  // the raw prop value was also undefined from previous render,
	  // return previous default value to avoid unnecessary watcher trigger
	  if (vm && vm.$options.propsData &&
	    vm.$options.propsData[key] === undefined &&
	    vm._props[key] !== undefined
	  ) {
	    return vm._props[key]
	  }
	  // call factory function for non-Function types
	  // a value is Function if its prototype is function even across different execution context
	  return typeof def === 'function' && getType(prop.type) !== 'Function'
	    ? def.call(vm)
	    : def
	}

	/**
	 * Assert whether a prop is valid.
	 */
	function assertProp (
	  prop,
	  name,
	  value,
	  vm,
	  absent
	) {
	  if (prop.required && absent) {
	    warn(
	      'Missing required prop: "' + name + '"',
	      vm
	    );
	    return
	  }
	  if (value == null && !prop.required) {
	    return
	  }
	  var type = prop.type;
	  var valid = !type || type === true;
	  var expectedTypes = [];
	  if (type) {
	    if (!Array.isArray(type)) {
	      type = [type];
	    }
	    for (var i = 0; i < type.length && !valid; i++) {
	      var assertedType = assertType(value, type[i]);
	      expectedTypes.push(assertedType.expectedType || '');
	      valid = assertedType.valid;
	    }
	  }

	  if (!valid) {
	    warn(
	      getInvalidTypeMessage(name, value, expectedTypes),
	      vm
	    );
	    return
	  }
	  var validator = prop.validator;
	  if (validator) {
	    if (!validator(value)) {
	      warn(
	        'Invalid prop: custom validator check failed for prop "' + name + '".',
	        vm
	      );
	    }
	  }
	}

	var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

	function assertType (value, type) {
	  var valid;
	  var expectedType = getType(type);
	  if (simpleCheckRE.test(expectedType)) {
	    var t = typeof value;
	    valid = t === expectedType.toLowerCase();
	    // for primitive wrapper objects
	    if (!valid && t === 'object') {
	      valid = value instanceof type;
	    }
	  } else if (expectedType === 'Object') {
	    valid = isPlainObject(value);
	  } else if (expectedType === 'Array') {
	    valid = Array.isArray(value);
	  } else {
	    valid = value instanceof type;
	  }
	  return {
	    valid: valid,
	    expectedType: expectedType
	  }
	}

	/**
	 * Use function string name to check built-in types,
	 * because a simple equality check will fail when running
	 * across different vms / iframes.
	 */
	function getType (fn) {
	  var match = fn && fn.toString().match(/^\s*function (\w+)/);
	  return match ? match[1] : ''
	}

	function isSameType (a, b) {
	  return getType(a) === getType(b)
	}

	function getTypeIndex (type, expectedTypes) {
	  if (!Array.isArray(expectedTypes)) {
	    return isSameType(expectedTypes, type) ? 0 : -1
	  }
	  for (var i = 0, len = expectedTypes.length; i < len; i++) {
	    if (isSameType(expectedTypes[i], type)) {
	      return i
	    }
	  }
	  return -1
	}

	function getInvalidTypeMessage (name, value, expectedTypes) {
	  var message = "Invalid prop: type check failed for prop \"" + name + "\"." +
	    " Expected " + (expectedTypes.map(capitalize).join(', '));
	  var expectedType = expectedTypes[0];
	  var receivedType = toRawType(value);
	  var expectedValue = styleValue(value, expectedType);
	  var receivedValue = styleValue(value, receivedType);
	  // check if we need to specify expected value
	  if (expectedTypes.length === 1 &&
	      isExplicable(expectedType) &&
	      !isBoolean(expectedType, receivedType)) {
	    message += " with value " + expectedValue;
	  }
	  message += ", got " + receivedType + " ";
	  // check if we need to specify received value
	  if (isExplicable(receivedType)) {
	    message += "with value " + receivedValue + ".";
	  }
	  return message
	}

	function styleValue (value, type) {
	  if (type === 'String') {
	    return ("\"" + value + "\"")
	  } else if (type === 'Number') {
	    return ("" + (Number(value)))
	  } else {
	    return ("" + value)
	  }
	}

	function isExplicable (value) {
	  var explicitTypes = ['string', 'number', 'boolean'];
	  return explicitTypes.some(function (elem) { return value.toLowerCase() === elem; })
	}

	function isBoolean () {
	  var args = [], len = arguments.length;
	  while ( len-- ) args[ len ] = arguments[ len ];

	  return args.some(function (elem) { return elem.toLowerCase() === 'boolean'; })
	}

	/*  */

	function handleError (err, vm, info) {
	  // Deactivate deps tracking while processing error handler to avoid possible infinite rendering.
	  // See: https://github.com/vuejs/vuex/issues/1505
	  pushTarget();
	  try {
	    if (vm) {
	      var cur = vm;
	      while ((cur = cur.$parent)) {
	        var hooks = cur.$options.errorCaptured;
	        if (hooks) {
	          for (var i = 0; i < hooks.length; i++) {
	            try {
	              var capture = hooks[i].call(cur, err, vm, info) === false;
	              if (capture) { return }
	            } catch (e) {
	              globalHandleError(e, cur, 'errorCaptured hook');
	            }
	          }
	        }
	      }
	    }
	    globalHandleError(err, vm, info);
	  } finally {
	    popTarget();
	  }
	}

	function invokeWithErrorHandling (
	  handler,
	  context,
	  args,
	  vm,
	  info
	) {
	  var res;
	  try {
	    res = args ? handler.apply(context, args) : handler.call(context);
	    if (res && !res._isVue && isPromise(res) && !res._handled) {
	      res.catch(function (e) { return handleError(e, vm, info + " (Promise/async)"); });
	      // issue #9511
	      // avoid catch triggering multiple times when nested calls
	      res._handled = true;
	    }
	  } catch (e) {
	    handleError(e, vm, info);
	  }
	  return res
	}

	function globalHandleError (err, vm, info) {
	  if (config.errorHandler) {
	    try {
	      return config.errorHandler.call(null, err, vm, info)
	    } catch (e) {
	      // if the user intentionally throws the original error in the handler,
	      // do not log it twice
	      if (e !== err) {
	        logError(e, null, 'config.errorHandler');
	      }
	    }
	  }
	  logError(err, vm, info);
	}

	function logError (err, vm, info) {
	  {
	    warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
	  }
	  /* istanbul ignore else */
	  if ((inBrowser || inWeex) && typeof console !== 'undefined') {
	    console.error(err);
	  } else {
	    throw err
	  }
	}

	/*  */

	var isUsingMicroTask = false;

	var callbacks = [];
	var pending = false;

	function flushCallbacks () {
	  pending = false;
	  var copies = callbacks.slice(0);
	  callbacks.length = 0;
	  for (var i = 0; i < copies.length; i++) {
	    copies[i]();
	  }
	}

	// Here we have async deferring wrappers using microtasks.
	// In 2.5 we used (macro) tasks (in combination with microtasks).
	// However, it has subtle problems when state is changed right before repaint
	// (e.g. #6813, out-in transitions).
	// Also, using (macro) tasks in event handler would cause some weird behaviors
	// that cannot be circumvented (e.g. #7109, #7153, #7546, #7834, #8109).
	// So we now use microtasks everywhere, again.
	// A major drawback of this tradeoff is that there are some scenarios
	// where microtasks have too high a priority and fire in between supposedly
	// sequential events (e.g. #4521, #6690, which have workarounds)
	// or even between bubbling of the same event (#6566).
	var timerFunc;

	// The nextTick behavior leverages the microtask queue, which can be accessed
	// via either native Promise.then or MutationObserver.
	// MutationObserver has wider support, however it is seriously bugged in
	// UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
	// completely stops working after triggering a few times... so, if native
	// Promise is available, we will use it:
	/* istanbul ignore next, $flow-disable-line */
	if (typeof Promise !== 'undefined' && isNative(Promise)) {
	  var p$1 = Promise.resolve();
	  timerFunc = function () {
	    p$1.then(flushCallbacks);
	    // In problematic UIWebViews, Promise.then doesn't completely break, but
	    // it can get stuck in a weird state where callbacks are pushed into the
	    // microtask queue but the queue isn't being flushed, until the browser
	    // needs to do some other work, e.g. handle a timer. Therefore we can
	    // "force" the microtask queue to be flushed by adding an empty timer.
	    if (isIOS) { setTimeout(noop); }
	  };
	  isUsingMicroTask = true;
	} else if (!isIE && typeof MutationObserver !== 'undefined' && (
	  isNative(MutationObserver) ||
	  // PhantomJS and iOS 7.x
	  MutationObserver.toString() === '[object MutationObserverConstructor]'
	)) {
	  // Use MutationObserver where native Promise is not available,
	  // e.g. PhantomJS, iOS7, Android 4.4
	  // (#6466 MutationObserver is unreliable in IE11)
	  var counter = 1;
	  var observer = new MutationObserver(flushCallbacks);
	  var textNode = document.createTextNode(String(counter));
	  observer.observe(textNode, {
	    characterData: true
	  });
	  timerFunc = function () {
	    counter = (counter + 1) % 2;
	    textNode.data = String(counter);
	  };
	  isUsingMicroTask = true;
	} else if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
	  // Fallback to setImmediate.
	  // Technically it leverages the (macro) task queue,
	  // but it is still a better choice than setTimeout.
	  timerFunc = function () {
	    setImmediate(flushCallbacks);
	  };
	} else {
	  // Fallback to setTimeout.
	  timerFunc = function () {
	    setTimeout(flushCallbacks, 0);
	  };
	}

	function nextTick (cb, ctx) {
	  var _resolve;
	  callbacks.push(function () {
	    if (cb) {
	      try {
	        cb.call(ctx);
	      } catch (e) {
	        handleError(e, ctx, 'nextTick');
	      }
	    } else if (_resolve) {
	      _resolve(ctx);
	    }
	  });
	  if (!pending) {
	    pending = true;
	    timerFunc();
	  }
	  // $flow-disable-line
	  if (!cb && typeof Promise !== 'undefined') {
	    return new Promise(function (resolve) {
	      _resolve = resolve;
	    })
	  }
	}

	/*  */

	/* not type checking this file because flow doesn't play well with Proxy */

	var initProxy;

	{
	  var allowedGlobals = makeMap(
	    'Infinity,undefined,NaN,isFinite,isNaN,' +
	    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
	    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
	    'require' // for Webpack/Browserify
	  );

	  var warnNonPresent = function (target, key) {
	    warn(
	      "Property or method \"" + key + "\" is not defined on the instance but " +
	      'referenced during render. Make sure that this property is reactive, ' +
	      'either in the data option, or for class-based components, by ' +
	      'initializing the property. ' +
	      'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.',
	      target
	    );
	  };

	  var warnReservedPrefix = function (target, key) {
	    warn(
	      "Property \"" + key + "\" must be accessed with \"$data." + key + "\" because " +
	      'properties starting with "$" or "_" are not proxied in the Vue instance to ' +
	      'prevent conflicts with Vue internals. ' +
	      'See: https://vuejs.org/v2/api/#data',
	      target
	    );
	  };

	  var hasProxy =
	    typeof Proxy !== 'undefined' && isNative(Proxy);

	  if (hasProxy) {
	    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
	    config.keyCodes = new Proxy(config.keyCodes, {
	      set: function set (target, key, value) {
	        if (isBuiltInModifier(key)) {
	          warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
	          return false
	        } else {
	          target[key] = value;
	          return true
	        }
	      }
	    });
	  }

	  var hasHandler = {
	    has: function has (target, key) {
	      var has = key in target;
	      var isAllowed = allowedGlobals(key) ||
	        (typeof key === 'string' && key.charAt(0) === '_' && !(key in target.$data));
	      if (!has && !isAllowed) {
	        if (key in target.$data) { warnReservedPrefix(target, key); }
	        else { warnNonPresent(target, key); }
	      }
	      return has || !isAllowed
	    }
	  };

	  var getHandler = {
	    get: function get (target, key) {
	      if (typeof key === 'string' && !(key in target)) {
	        if (key in target.$data) { warnReservedPrefix(target, key); }
	        else { warnNonPresent(target, key); }
	      }
	      return target[key]
	    }
	  };

	  initProxy = function initProxy (vm) {
	    if (hasProxy) {
	      // determine which proxy handler to use
	      var options = vm.$options;
	      var handlers = options.render && options.render._withStripped
	        ? getHandler
	        : hasHandler;
	      vm._renderProxy = new Proxy(vm, handlers);
	    } else {
	      vm._renderProxy = vm;
	    }
	  };
	}

	/*  */

	var seenObjects = new _Set();

	/**
	 * Recursively traverse an object to evoke all converted
	 * getters, so that every nested property inside the object
	 * is collected as a "deep" dependency.
	 */
	function traverse (val) {
	  _traverse(val, seenObjects);
	  seenObjects.clear();
	}

	function _traverse (val, seen) {
	  var i, keys;
	  var isA = Array.isArray(val);
	  if ((!isA && !isObject(val)) || Object.isFrozen(val) || val instanceof VNode) {
	    return
	  }
	  if (val.__ob__) {
	    var depId = val.__ob__.dep.id;
	    if (seen.has(depId)) {
	      return
	    }
	    seen.add(depId);
	  }
	  if (isA) {
	    i = val.length;
	    while (i--) { _traverse(val[i], seen); }
	  } else {
	    keys = Object.keys(val);
	    i = keys.length;
	    while (i--) { _traverse(val[keys[i]], seen); }
	  }
	}

	var mark;
	var measure;

	{
	  var perf = inBrowser && window.performance;
	  /* istanbul ignore if */
	  if (
	    perf &&
	    perf.mark &&
	    perf.measure &&
	    perf.clearMarks &&
	    perf.clearMeasures
	  ) {
	    mark = function (tag) { return perf.mark(tag); };
	    measure = function (name, startTag, endTag) {
	      perf.measure(name, startTag, endTag);
	      perf.clearMarks(startTag);
	      perf.clearMarks(endTag);
	      // perf.clearMeasures(name)
	    };
	  }
	}

	/*  */

	var normalizeEvent = cached(function (name) {
	  var passive = name.charAt(0) === '&';
	  name = passive ? name.slice(1) : name;
	  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
	  name = once$$1 ? name.slice(1) : name;
	  var capture = name.charAt(0) === '!';
	  name = capture ? name.slice(1) : name;
	  return {
	    name: name,
	    once: once$$1,
	    capture: capture,
	    passive: passive
	  }
	});

	function createFnInvoker (fns, vm) {
	  function invoker () {
	    var arguments$1 = arguments;

	    var fns = invoker.fns;
	    if (Array.isArray(fns)) {
	      var cloned = fns.slice();
	      for (var i = 0; i < cloned.length; i++) {
	        invokeWithErrorHandling(cloned[i], null, arguments$1, vm, "v-on handler");
	      }
	    } else {
	      // return handler return value for single handlers
	      return invokeWithErrorHandling(fns, null, arguments, vm, "v-on handler")
	    }
	  }
	  invoker.fns = fns;
	  return invoker
	}

	function updateListeners (
	  on,
	  oldOn,
	  add,
	  remove$$1,
	  createOnceHandler,
	  vm
	) {
	  var name, def$$1, cur, old, event;
	  for (name in on) {
	    def$$1 = cur = on[name];
	    old = oldOn[name];
	    event = normalizeEvent(name);
	    if (isUndef(cur)) {
	       warn(
	        "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
	        vm
	      );
	    } else if (isUndef(old)) {
	      if (isUndef(cur.fns)) {
	        cur = on[name] = createFnInvoker(cur, vm);
	      }
	      if (isTrue(event.once)) {
	        cur = on[name] = createOnceHandler(event.name, cur, event.capture);
	      }
	      add(event.name, cur, event.capture, event.passive, event.params);
	    } else if (cur !== old) {
	      old.fns = cur;
	      on[name] = old;
	    }
	  }
	  for (name in oldOn) {
	    if (isUndef(on[name])) {
	      event = normalizeEvent(name);
	      remove$$1(event.name, oldOn[name], event.capture);
	    }
	  }
	}

	/*  */

	function mergeVNodeHook (def, hookKey, hook) {
	  if (def instanceof VNode) {
	    def = def.data.hook || (def.data.hook = {});
	  }
	  var invoker;
	  var oldHook = def[hookKey];

	  function wrappedHook () {
	    hook.apply(this, arguments);
	    // important: remove merged hook to ensure it's called only once
	    // and prevent memory leak
	    remove(invoker.fns, wrappedHook);
	  }

	  if (isUndef(oldHook)) {
	    // no existing hook
	    invoker = createFnInvoker([wrappedHook]);
	  } else {
	    /* istanbul ignore if */
	    if (isDef(oldHook.fns) && isTrue(oldHook.merged)) {
	      // already a merged invoker
	      invoker = oldHook;
	      invoker.fns.push(wrappedHook);
	    } else {
	      // existing plain hook
	      invoker = createFnInvoker([oldHook, wrappedHook]);
	    }
	  }

	  invoker.merged = true;
	  def[hookKey] = invoker;
	}

	/*  */

	function extractPropsFromVNodeData (
	  data,
	  Ctor,
	  tag
	) {
	  // we are only extracting raw values here.
	  // validation and default values are handled in the child
	  // component itself.
	  var propOptions = Ctor.options.props;
	  if (isUndef(propOptions)) {
	    return
	  }
	  var res = {};
	  var attrs = data.attrs;
	  var props = data.props;
	  if (isDef(attrs) || isDef(props)) {
	    for (var key in propOptions) {
	      var altKey = hyphenate(key);
	      {
	        var keyInLowerCase = key.toLowerCase();
	        if (
	          key !== keyInLowerCase &&
	          attrs && hasOwn(attrs, keyInLowerCase)
	        ) {
	          tip(
	            "Prop \"" + keyInLowerCase + "\" is passed to component " +
	            (formatComponentName(tag || Ctor)) + ", but the declared prop name is" +
	            " \"" + key + "\". " +
	            "Note that HTML attributes are case-insensitive and camelCased " +
	            "props need to use their kebab-case equivalents when using in-DOM " +
	            "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\"."
	          );
	        }
	      }
	      checkProp(res, props, key, altKey, true) ||
	      checkProp(res, attrs, key, altKey, false);
	    }
	  }
	  return res
	}

	function checkProp (
	  res,
	  hash,
	  key,
	  altKey,
	  preserve
	) {
	  if (isDef(hash)) {
	    if (hasOwn(hash, key)) {
	      res[key] = hash[key];
	      if (!preserve) {
	        delete hash[key];
	      }
	      return true
	    } else if (hasOwn(hash, altKey)) {
	      res[key] = hash[altKey];
	      if (!preserve) {
	        delete hash[altKey];
	      }
	      return true
	    }
	  }
	  return false
	}

	/*  */

	// The template compiler attempts to minimize the need for normalization by
	// statically analyzing the template at compile time.
	//
	// For plain HTML markup, normalization can be completely skipped because the
	// generated render function is guaranteed to return Array<VNode>. There are
	// two cases where extra normalization is needed:

	// 1. When the children contains components - because a functional component
	// may return an Array instead of a single root. In this case, just a simple
	// normalization is needed - if any child is an Array, we flatten the whole
	// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
	// because functional components already normalize their own children.
	function simpleNormalizeChildren (children) {
	  for (var i = 0; i < children.length; i++) {
	    if (Array.isArray(children[i])) {
	      return Array.prototype.concat.apply([], children)
	    }
	  }
	  return children
	}

	// 2. When the children contains constructs that always generated nested Arrays,
	// e.g. <template>, <slot>, v-for, or when the children is provided by user
	// with hand-written render functions / JSX. In such cases a full normalization
	// is needed to cater to all possible types of children values.
	function normalizeChildren (children) {
	  return isPrimitive(children)
	    ? [createTextVNode(children)]
	    : Array.isArray(children)
	      ? normalizeArrayChildren(children)
	      : undefined
	}

	function isTextNode (node) {
	  return isDef(node) && isDef(node.text) && isFalse(node.isComment)
	}

	function normalizeArrayChildren (children, nestedIndex) {
	  var res = [];
	  var i, c, lastIndex, last;
	  for (i = 0; i < children.length; i++) {
	    c = children[i];
	    if (isUndef(c) || typeof c === 'boolean') { continue }
	    lastIndex = res.length - 1;
	    last = res[lastIndex];
	    //  nested
	    if (Array.isArray(c)) {
	      if (c.length > 0) {
	        c = normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i));
	        // merge adjacent text nodes
	        if (isTextNode(c[0]) && isTextNode(last)) {
	          res[lastIndex] = createTextVNode(last.text + (c[0]).text);
	          c.shift();
	        }
	        res.push.apply(res, c);
	      }
	    } else if (isPrimitive(c)) {
	      if (isTextNode(last)) {
	        // merge adjacent text nodes
	        // this is necessary for SSR hydration because text nodes are
	        // essentially merged when rendered to HTML strings
	        res[lastIndex] = createTextVNode(last.text + c);
	      } else if (c !== '') {
	        // convert primitive to vnode
	        res.push(createTextVNode(c));
	      }
	    } else {
	      if (isTextNode(c) && isTextNode(last)) {
	        // merge adjacent text nodes
	        res[lastIndex] = createTextVNode(last.text + c.text);
	      } else {
	        // default key for nested array children (likely generated by v-for)
	        if (isTrue(children._isVList) &&
	          isDef(c.tag) &&
	          isUndef(c.key) &&
	          isDef(nestedIndex)) {
	          c.key = "__vlist" + nestedIndex + "_" + i + "__";
	        }
	        res.push(c);
	      }
	    }
	  }
	  return res
	}

	/*  */

	function initProvide (vm) {
	  var provide = vm.$options.provide;
	  if (provide) {
	    vm._provided = typeof provide === 'function'
	      ? provide.call(vm)
	      : provide;
	  }
	}

	function initInjections (vm) {
	  var result = resolveInject(vm.$options.inject, vm);
	  if (result) {
	    toggleObserving(false);
	    Object.keys(result).forEach(function (key) {
	      /* istanbul ignore else */
	      {
	        defineReactive$$1(vm, key, result[key], function () {
	          warn(
	            "Avoid mutating an injected value directly since the changes will be " +
	            "overwritten whenever the provided component re-renders. " +
	            "injection being mutated: \"" + key + "\"",
	            vm
	          );
	        });
	      }
	    });
	    toggleObserving(true);
	  }
	}

	function resolveInject (inject, vm) {
	  if (inject) {
	    // inject is :any because flow is not smart enough to figure out cached
	    var result = Object.create(null);
	    var keys = hasSymbol
	      ? Reflect.ownKeys(inject)
	      : Object.keys(inject);

	    for (var i = 0; i < keys.length; i++) {
	      var key = keys[i];
	      // #6574 in case the inject object is observed...
	      if (key === '__ob__') { continue }
	      var provideKey = inject[key].from;
	      var source = vm;
	      while (source) {
	        if (source._provided && hasOwn(source._provided, provideKey)) {
	          result[key] = source._provided[provideKey];
	          break
	        }
	        source = source.$parent;
	      }
	      if (!source) {
	        if ('default' in inject[key]) {
	          var provideDefault = inject[key].default;
	          result[key] = typeof provideDefault === 'function'
	            ? provideDefault.call(vm)
	            : provideDefault;
	        } else {
	          warn(("Injection \"" + key + "\" not found"), vm);
	        }
	      }
	    }
	    return result
	  }
	}

	/*  */



	/**
	 * Runtime helper for resolving raw children VNodes into a slot object.
	 */
	function resolveSlots (
	  children,
	  context
	) {
	  if (!children || !children.length) {
	    return {}
	  }
	  var slots = {};
	  for (var i = 0, l = children.length; i < l; i++) {
	    var child = children[i];
	    var data = child.data;
	    // remove slot attribute if the node is resolved as a Vue slot node
	    if (data && data.attrs && data.attrs.slot) {
	      delete data.attrs.slot;
	    }
	    // named slots should only be respected if the vnode was rendered in the
	    // same context.
	    if ((child.context === context || child.fnContext === context) &&
	      data && data.slot != null
	    ) {
	      var name = data.slot;
	      var slot = (slots[name] || (slots[name] = []));
	      if (child.tag === 'template') {
	        slot.push.apply(slot, child.children || []);
	      } else {
	        slot.push(child);
	      }
	    } else {
	      (slots.default || (slots.default = [])).push(child);
	    }
	  }
	  // ignore slots that contains only whitespace
	  for (var name$1 in slots) {
	    if (slots[name$1].every(isWhitespace)) {
	      delete slots[name$1];
	    }
	  }
	  return slots
	}

	function isWhitespace (node) {
	  return (node.isComment && !node.asyncFactory) || node.text === ' '
	}

	/*  */

	function normalizeScopedSlots (
	  slots,
	  normalSlots,
	  prevSlots
	) {
	  var res;
	  var hasNormalSlots = Object.keys(normalSlots).length > 0;
	  var isStable = slots ? !!slots.$stable : !hasNormalSlots;
	  var key = slots && slots.$key;
	  if (!slots) {
	    res = {};
	  } else if (slots._normalized) {
	    // fast path 1: child component re-render only, parent did not change
	    return slots._normalized
	  } else if (
	    isStable &&
	    prevSlots &&
	    prevSlots !== emptyObject &&
	    key === prevSlots.$key &&
	    !hasNormalSlots &&
	    !prevSlots.$hasNormal
	  ) {
	    // fast path 2: stable scoped slots w/ no normal slots to proxy,
	    // only need to normalize once
	    return prevSlots
	  } else {
	    res = {};
	    for (var key$1 in slots) {
	      if (slots[key$1] && key$1[0] !== '$') {
	        res[key$1] = normalizeScopedSlot(normalSlots, key$1, slots[key$1]);
	      }
	    }
	  }
	  // expose normal slots on scopedSlots
	  for (var key$2 in normalSlots) {
	    if (!(key$2 in res)) {
	      res[key$2] = proxyNormalSlot(normalSlots, key$2);
	    }
	  }
	  // avoriaz seems to mock a non-extensible $scopedSlots object
	  // and when that is passed down this would cause an error
	  if (slots && Object.isExtensible(slots)) {
	    (slots)._normalized = res;
	  }
	  def(res, '$stable', isStable);
	  def(res, '$key', key);
	  def(res, '$hasNormal', hasNormalSlots);
	  return res
	}

	function normalizeScopedSlot(normalSlots, key, fn) {
	  var normalized = function () {
	    var res = arguments.length ? fn.apply(null, arguments) : fn({});
	    res = res && typeof res === 'object' && !Array.isArray(res)
	      ? [res] // single vnode
	      : normalizeChildren(res);
	    return res && (
	      res.length === 0 ||
	      (res.length === 1 && res[0].isComment) // #9658
	    ) ? undefined
	      : res
	  };
	  // this is a slot using the new v-slot syntax without scope. although it is
	  // compiled as a scoped slot, render fn users would expect it to be present
	  // on this.$slots because the usage is semantically a normal slot.
	  if (fn.proxy) {
	    Object.defineProperty(normalSlots, key, {
	      get: normalized,
	      enumerable: true,
	      configurable: true
	    });
	  }
	  return normalized
	}

	function proxyNormalSlot(slots, key) {
	  return function () { return slots[key]; }
	}

	/*  */

	/**
	 * Runtime helper for rendering v-for lists.
	 */
	function renderList (
	  val,
	  render
	) {
	  var ret, i, l, keys, key;
	  if (Array.isArray(val) || typeof val === 'string') {
	    ret = new Array(val.length);
	    for (i = 0, l = val.length; i < l; i++) {
	      ret[i] = render(val[i], i);
	    }
	  } else if (typeof val === 'number') {
	    ret = new Array(val);
	    for (i = 0; i < val; i++) {
	      ret[i] = render(i + 1, i);
	    }
	  } else if (isObject(val)) {
	    if (hasSymbol && val[Symbol.iterator]) {
	      ret = [];
	      var iterator = val[Symbol.iterator]();
	      var result = iterator.next();
	      while (!result.done) {
	        ret.push(render(result.value, ret.length));
	        result = iterator.next();
	      }
	    } else {
	      keys = Object.keys(val);
	      ret = new Array(keys.length);
	      for (i = 0, l = keys.length; i < l; i++) {
	        key = keys[i];
	        ret[i] = render(val[key], key, i);
	      }
	    }
	  }
	  if (!isDef(ret)) {
	    ret = [];
	  }
	  (ret)._isVList = true;
	  return ret
	}

	/*  */

	/**
	 * Runtime helper for rendering <slot>
	 */
	function renderSlot (
	  name,
	  fallback,
	  props,
	  bindObject
	) {
	  var scopedSlotFn = this.$scopedSlots[name];
	  var nodes;
	  if (scopedSlotFn) { // scoped slot
	    props = props || {};
	    if (bindObject) {
	      if ( !isObject(bindObject)) {
	        warn(
	          'slot v-bind without argument expects an Object',
	          this
	        );
	      }
	      props = extend(extend({}, bindObject), props);
	    }
	    nodes = scopedSlotFn(props) || fallback;
	  } else {
	    nodes = this.$slots[name] || fallback;
	  }

	  var target = props && props.slot;
	  if (target) {
	    return this.$createElement('template', { slot: target }, nodes)
	  } else {
	    return nodes
	  }
	}

	/*  */

	/**
	 * Runtime helper for resolving filters
	 */
	function resolveFilter (id) {
	  return resolveAsset(this.$options, 'filters', id, true) || identity
	}

	/*  */

	function isKeyNotMatch (expect, actual) {
	  if (Array.isArray(expect)) {
	    return expect.indexOf(actual) === -1
	  } else {
	    return expect !== actual
	  }
	}

	/**
	 * Runtime helper for checking keyCodes from config.
	 * exposed as Vue.prototype._k
	 * passing in eventKeyName as last argument separately for backwards compat
	 */
	function checkKeyCodes (
	  eventKeyCode,
	  key,
	  builtInKeyCode,
	  eventKeyName,
	  builtInKeyName
	) {
	  var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;
	  if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
	    return isKeyNotMatch(builtInKeyName, eventKeyName)
	  } else if (mappedKeyCode) {
	    return isKeyNotMatch(mappedKeyCode, eventKeyCode)
	  } else if (eventKeyName) {
	    return hyphenate(eventKeyName) !== key
	  }
	}

	/*  */

	/**
	 * Runtime helper for merging v-bind="object" into a VNode's data.
	 */
	function bindObjectProps (
	  data,
	  tag,
	  value,
	  asProp,
	  isSync
	) {
	  if (value) {
	    if (!isObject(value)) {
	       warn(
	        'v-bind without argument expects an Object or Array value',
	        this
	      );
	    } else {
	      if (Array.isArray(value)) {
	        value = toObject(value);
	      }
	      var hash;
	      var loop = function ( key ) {
	        if (
	          key === 'class' ||
	          key === 'style' ||
	          isReservedAttribute(key)
	        ) {
	          hash = data;
	        } else {
	          var type = data.attrs && data.attrs.type;
	          hash = asProp || config.mustUseProp(tag, type, key)
	            ? data.domProps || (data.domProps = {})
	            : data.attrs || (data.attrs = {});
	        }
	        var camelizedKey = camelize(key);
	        var hyphenatedKey = hyphenate(key);
	        if (!(camelizedKey in hash) && !(hyphenatedKey in hash)) {
	          hash[key] = value[key];

	          if (isSync) {
	            var on = data.on || (data.on = {});
	            on[("update:" + key)] = function ($event) {
	              value[key] = $event;
	            };
	          }
	        }
	      };

	      for (var key in value) loop( key );
	    }
	  }
	  return data
	}

	/*  */

	/**
	 * Runtime helper for rendering static trees.
	 */
	function renderStatic (
	  index,
	  isInFor
	) {
	  var cached = this._staticTrees || (this._staticTrees = []);
	  var tree = cached[index];
	  // if has already-rendered static tree and not inside v-for,
	  // we can reuse the same tree.
	  if (tree && !isInFor) {
	    return tree
	  }
	  // otherwise, render a fresh tree.
	  tree = cached[index] = this.$options.staticRenderFns[index].call(
	    this._renderProxy,
	    null,
	    this // for render fns generated for functional component templates
	  );
	  markStatic(tree, ("__static__" + index), false);
	  return tree
	}

	/**
	 * Runtime helper for v-once.
	 * Effectively it means marking the node as static with a unique key.
	 */
	function markOnce (
	  tree,
	  index,
	  key
	) {
	  markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
	  return tree
	}

	function markStatic (
	  tree,
	  key,
	  isOnce
	) {
	  if (Array.isArray(tree)) {
	    for (var i = 0; i < tree.length; i++) {
	      if (tree[i] && typeof tree[i] !== 'string') {
	        markStaticNode(tree[i], (key + "_" + i), isOnce);
	      }
	    }
	  } else {
	    markStaticNode(tree, key, isOnce);
	  }
	}

	function markStaticNode (node, key, isOnce) {
	  node.isStatic = true;
	  node.key = key;
	  node.isOnce = isOnce;
	}

	/*  */

	function bindObjectListeners (data, value) {
	  if (value) {
	    if (!isPlainObject(value)) {
	       warn(
	        'v-on without argument expects an Object value',
	        this
	      );
	    } else {
	      var on = data.on = data.on ? extend({}, data.on) : {};
	      for (var key in value) {
	        var existing = on[key];
	        var ours = value[key];
	        on[key] = existing ? [].concat(existing, ours) : ours;
	      }
	    }
	  }
	  return data
	}

	/*  */

	function resolveScopedSlots (
	  fns, // see flow/vnode
	  res,
	  // the following are added in 2.6
	  hasDynamicKeys,
	  contentHashKey
	) {
	  res = res || { $stable: !hasDynamicKeys };
	  for (var i = 0; i < fns.length; i++) {
	    var slot = fns[i];
	    if (Array.isArray(slot)) {
	      resolveScopedSlots(slot, res, hasDynamicKeys);
	    } else if (slot) {
	      // marker for reverse proxying v-slot without scope on this.$slots
	      if (slot.proxy) {
	        slot.fn.proxy = true;
	      }
	      res[slot.key] = slot.fn;
	    }
	  }
	  if (contentHashKey) {
	    (res).$key = contentHashKey;
	  }
	  return res
	}

	/*  */

	function bindDynamicKeys (baseObj, values) {
	  for (var i = 0; i < values.length; i += 2) {
	    var key = values[i];
	    if (typeof key === 'string' && key) {
	      baseObj[values[i]] = values[i + 1];
	    } else if ( key !== '' && key !== null) {
	      // null is a special value for explicitly removing a binding
	      warn(
	        ("Invalid value for dynamic directive argument (expected string or null): " + key),
	        this
	      );
	    }
	  }
	  return baseObj
	}

	// helper to dynamically append modifier runtime markers to event names.
	// ensure only append when value is already string, otherwise it will be cast
	// to string and cause the type check to miss.
	function prependModifier (value, symbol) {
	  return typeof value === 'string' ? symbol + value : value
	}

	/*  */

	function installRenderHelpers (target) {
	  target._o = markOnce;
	  target._n = toNumber;
	  target._s = toString;
	  target._l = renderList;
	  target._t = renderSlot;
	  target._q = looseEqual;
	  target._i = looseIndexOf;
	  target._m = renderStatic;
	  target._f = resolveFilter;
	  target._k = checkKeyCodes;
	  target._b = bindObjectProps;
	  target._v = createTextVNode;
	  target._e = createEmptyVNode;
	  target._u = resolveScopedSlots;
	  target._g = bindObjectListeners;
	  target._d = bindDynamicKeys;
	  target._p = prependModifier;
	}

	/*  */

	function FunctionalRenderContext (
	  data,
	  props,
	  children,
	  parent,
	  Ctor
	) {
	  var this$1 = this;

	  var options = Ctor.options;
	  // ensure the createElement function in functional components
	  // gets a unique context - this is necessary for correct named slot check
	  var contextVm;
	  if (hasOwn(parent, '_uid')) {
	    contextVm = Object.create(parent);
	    // $flow-disable-line
	    contextVm._original = parent;
	  } else {
	    // the context vm passed in is a functional context as well.
	    // in this case we want to make sure we are able to get a hold to the
	    // real context instance.
	    contextVm = parent;
	    // $flow-disable-line
	    parent = parent._original;
	  }
	  var isCompiled = isTrue(options._compiled);
	  var needNormalization = !isCompiled;

	  this.data = data;
	  this.props = props;
	  this.children = children;
	  this.parent = parent;
	  this.listeners = data.on || emptyObject;
	  this.injections = resolveInject(options.inject, parent);
	  this.slots = function () {
	    if (!this$1.$slots) {
	      normalizeScopedSlots(
	        data.scopedSlots,
	        this$1.$slots = resolveSlots(children, parent)
	      );
	    }
	    return this$1.$slots
	  };

	  Object.defineProperty(this, 'scopedSlots', ({
	    enumerable: true,
	    get: function get () {
	      return normalizeScopedSlots(data.scopedSlots, this.slots())
	    }
	  }));

	  // support for compiled functional template
	  if (isCompiled) {
	    // exposing $options for renderStatic()
	    this.$options = options;
	    // pre-resolve slots for renderSlot()
	    this.$slots = this.slots();
	    this.$scopedSlots = normalizeScopedSlots(data.scopedSlots, this.$slots);
	  }

	  if (options._scopeId) {
	    this._c = function (a, b, c, d) {
	      var vnode = createElement(contextVm, a, b, c, d, needNormalization);
	      if (vnode && !Array.isArray(vnode)) {
	        vnode.fnScopeId = options._scopeId;
	        vnode.fnContext = parent;
	      }
	      return vnode
	    };
	  } else {
	    this._c = function (a, b, c, d) { return createElement(contextVm, a, b, c, d, needNormalization); };
	  }
	}

	installRenderHelpers(FunctionalRenderContext.prototype);

	function createFunctionalComponent (
	  Ctor,
	  propsData,
	  data,
	  contextVm,
	  children
	) {
	  var options = Ctor.options;
	  var props = {};
	  var propOptions = options.props;
	  if (isDef(propOptions)) {
	    for (var key in propOptions) {
	      props[key] = validateProp(key, propOptions, propsData || emptyObject);
	    }
	  } else {
	    if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
	    if (isDef(data.props)) { mergeProps(props, data.props); }
	  }

	  var renderContext = new FunctionalRenderContext(
	    data,
	    props,
	    children,
	    contextVm,
	    Ctor
	  );

	  var vnode = options.render.call(null, renderContext._c, renderContext);

	  if (vnode instanceof VNode) {
	    return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options, renderContext)
	  } else if (Array.isArray(vnode)) {
	    var vnodes = normalizeChildren(vnode) || [];
	    var res = new Array(vnodes.length);
	    for (var i = 0; i < vnodes.length; i++) {
	      res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options, renderContext);
	    }
	    return res
	  }
	}

	function cloneAndMarkFunctionalResult (vnode, data, contextVm, options, renderContext) {
	  // #7817 clone node before setting fnContext, otherwise if the node is reused
	  // (e.g. it was from a cached normal slot) the fnContext causes named slots
	  // that should not be matched to match.
	  var clone = cloneVNode(vnode);
	  clone.fnContext = contextVm;
	  clone.fnOptions = options;
	  {
	    (clone.devtoolsMeta = clone.devtoolsMeta || {}).renderContext = renderContext;
	  }
	  if (data.slot) {
	    (clone.data || (clone.data = {})).slot = data.slot;
	  }
	  return clone
	}

	function mergeProps (to, from) {
	  for (var key in from) {
	    to[camelize(key)] = from[key];
	  }
	}

	/*  */

	/*  */

	/*  */

	/*  */

	// inline hooks to be invoked on component VNodes during patch
	var componentVNodeHooks = {
	  init: function init (vnode, hydrating) {
	    if (
	      vnode.componentInstance &&
	      !vnode.componentInstance._isDestroyed &&
	      vnode.data.keepAlive
	    ) {
	      // kept-alive components, treat as a patch
	      var mountedNode = vnode; // work around flow
	      componentVNodeHooks.prepatch(mountedNode, mountedNode);
	    } else {
	      var child = vnode.componentInstance = createComponentInstanceForVnode(
	        vnode,
	        activeInstance
	      );
	      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
	    }
	  },

	  prepatch: function prepatch (oldVnode, vnode) {
	    var options = vnode.componentOptions;
	    var child = vnode.componentInstance = oldVnode.componentInstance;
	    updateChildComponent(
	      child,
	      options.propsData, // updated props
	      options.listeners, // updated listeners
	      vnode, // new parent vnode
	      options.children // new children
	    );
	  },

	  insert: function insert (vnode) {
	    var context = vnode.context;
	    var componentInstance = vnode.componentInstance;
	    if (!componentInstance._isMounted) {
	      componentInstance._isMounted = true;
	      callHook(componentInstance, 'mounted');
	    }
	    if (vnode.data.keepAlive) {
	      if (context._isMounted) {
	        // vue-router#1212
	        // During updates, a kept-alive component's child components may
	        // change, so directly walking the tree here may call activated hooks
	        // on incorrect children. Instead we push them into a queue which will
	        // be processed after the whole patch process ended.
	        queueActivatedComponent(componentInstance);
	      } else {
	        activateChildComponent(componentInstance, true /* direct */);
	      }
	    }
	  },

	  destroy: function destroy (vnode) {
	    var componentInstance = vnode.componentInstance;
	    if (!componentInstance._isDestroyed) {
	      if (!vnode.data.keepAlive) {
	        componentInstance.$destroy();
	      } else {
	        deactivateChildComponent(componentInstance, true /* direct */);
	      }
	    }
	  }
	};

	var hooksToMerge = Object.keys(componentVNodeHooks);

	function createComponent (
	  Ctor,
	  data,
	  context,
	  children,
	  tag
	) {
	  if (isUndef(Ctor)) {
	    return
	  }

	  var baseCtor = context.$options._base;

	  // plain options object: turn it into a constructor
	  if (isObject(Ctor)) {
	    Ctor = baseCtor.extend(Ctor);
	  }

	  // if at this stage it's not a constructor or an async component factory,
	  // reject.
	  if (typeof Ctor !== 'function') {
	    {
	      warn(("Invalid Component definition: " + (String(Ctor))), context);
	    }
	    return
	  }

	  // async component
	  var asyncFactory;
	  if (isUndef(Ctor.cid)) {
	    asyncFactory = Ctor;
	    Ctor = resolveAsyncComponent(asyncFactory, baseCtor);
	    if (Ctor === undefined) {
	      // return a placeholder node for async component, which is rendered
	      // as a comment node but preserves all the raw information for the node.
	      // the information will be used for async server-rendering and hydration.
	      return createAsyncPlaceholder(
	        asyncFactory,
	        data,
	        context,
	        children,
	        tag
	      )
	    }
	  }

	  data = data || {};

	  // resolve constructor options in case global mixins are applied after
	  // component constructor creation
	  resolveConstructorOptions(Ctor);

	  // transform component v-model data into props & events
	  if (isDef(data.model)) {
	    transformModel(Ctor.options, data);
	  }

	  // extract props
	  var propsData = extractPropsFromVNodeData(data, Ctor, tag);

	  // functional component
	  if (isTrue(Ctor.options.functional)) {
	    return createFunctionalComponent(Ctor, propsData, data, context, children)
	  }

	  // extract listeners, since these needs to be treated as
	  // child component listeners instead of DOM listeners
	  var listeners = data.on;
	  // replace with listeners with .native modifier
	  // so it gets processed during parent component patch.
	  data.on = data.nativeOn;

	  if (isTrue(Ctor.options.abstract)) {
	    // abstract components do not keep anything
	    // other than props & listeners & slot

	    // work around flow
	    var slot = data.slot;
	    data = {};
	    if (slot) {
	      data.slot = slot;
	    }
	  }

	  // install component management hooks onto the placeholder node
	  installComponentHooks(data);

	  // return a placeholder vnode
	  var name = Ctor.options.name || tag;
	  var vnode = new VNode(
	    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
	    data, undefined, undefined, undefined, context,
	    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children },
	    asyncFactory
	  );

	  return vnode
	}

	function createComponentInstanceForVnode (
	  vnode, // we know it's MountedComponentVNode but flow doesn't
	  parent // activeInstance in lifecycle state
	) {
	  var options = {
	    _isComponent: true,
	    _parentVnode: vnode,
	    parent: parent
	  };
	  // check inline-template render functions
	  var inlineTemplate = vnode.data.inlineTemplate;
	  if (isDef(inlineTemplate)) {
	    options.render = inlineTemplate.render;
	    options.staticRenderFns = inlineTemplate.staticRenderFns;
	  }
	  return new vnode.componentOptions.Ctor(options)
	}

	function installComponentHooks (data) {
	  var hooks = data.hook || (data.hook = {});
	  for (var i = 0; i < hooksToMerge.length; i++) {
	    var key = hooksToMerge[i];
	    var existing = hooks[key];
	    var toMerge = componentVNodeHooks[key];
	    if (existing !== toMerge && !(existing && existing._merged)) {
	      hooks[key] = existing ? mergeHook$1(toMerge, existing) : toMerge;
	    }
	  }
	}

	function mergeHook$1 (f1, f2) {
	  var merged = function (a, b) {
	    // flow complains about extra args which is why we use any
	    f1(a, b);
	    f2(a, b);
	  };
	  merged._merged = true;
	  return merged
	}

	// transform component v-model info (value and callback) into
	// prop and event handler respectively.
	function transformModel (options, data) {
	  var prop = (options.model && options.model.prop) || 'value';
	  var event = (options.model && options.model.event) || 'input'
	  ;(data.attrs || (data.attrs = {}))[prop] = data.model.value;
	  var on = data.on || (data.on = {});
	  var existing = on[event];
	  var callback = data.model.callback;
	  if (isDef(existing)) {
	    if (
	      Array.isArray(existing)
	        ? existing.indexOf(callback) === -1
	        : existing !== callback
	    ) {
	      on[event] = [callback].concat(existing);
	    }
	  } else {
	    on[event] = callback;
	  }
	}

	/*  */

	var SIMPLE_NORMALIZE = 1;
	var ALWAYS_NORMALIZE = 2;

	// wrapper function for providing a more flexible interface
	// without getting yelled at by flow
	function createElement (
	  context,
	  tag,
	  data,
	  children,
	  normalizationType,
	  alwaysNormalize
	) {
	  if (Array.isArray(data) || isPrimitive(data)) {
	    normalizationType = children;
	    children = data;
	    data = undefined;
	  }
	  if (isTrue(alwaysNormalize)) {
	    normalizationType = ALWAYS_NORMALIZE;
	  }
	  return _createElement(context, tag, data, children, normalizationType)
	}

	function _createElement (
	  context,
	  tag,
	  data,
	  children,
	  normalizationType
	) {
	  if (isDef(data) && isDef((data).__ob__)) {
	     warn(
	      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
	      'Always create fresh vnode data objects in each render!',
	      context
	    );
	    return createEmptyVNode()
	  }
	  // object syntax in v-bind
	  if (isDef(data) && isDef(data.is)) {
	    tag = data.is;
	  }
	  if (!tag) {
	    // in case of component :is set to falsy value
	    return createEmptyVNode()
	  }
	  // warn against non-primitive key
	  if (
	    isDef(data) && isDef(data.key) && !isPrimitive(data.key)
	  ) {
	    {
	      warn(
	        'Avoid using non-primitive value as key, ' +
	        'use string/number value instead.',
	        context
	      );
	    }
	  }
	  // support single function children as default scoped slot
	  if (Array.isArray(children) &&
	    typeof children[0] === 'function'
	  ) {
	    data = data || {};
	    data.scopedSlots = { default: children[0] };
	    children.length = 0;
	  }
	  if (normalizationType === ALWAYS_NORMALIZE) {
	    children = normalizeChildren(children);
	  } else if (normalizationType === SIMPLE_NORMALIZE) {
	    children = simpleNormalizeChildren(children);
	  }
	  var vnode, ns;
	  if (typeof tag === 'string') {
	    var Ctor;
	    ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag);
	    if (config.isReservedTag(tag)) {
	      // platform built-in elements
	      if ( isDef(data) && isDef(data.nativeOn)) {
	        warn(
	          ("The .native modifier for v-on is only valid on components but it was used on <" + tag + ">."),
	          context
	        );
	      }
	      vnode = new VNode(
	        config.parsePlatformTagName(tag), data, children,
	        undefined, undefined, context
	      );
	    } else if ((!data || !data.pre) && isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
	      // component
	      vnode = createComponent(Ctor, data, context, children, tag);
	    } else {
	      // unknown or unlisted namespaced elements
	      // check at runtime because it may get assigned a namespace when its
	      // parent normalizes children
	      vnode = new VNode(
	        tag, data, children,
	        undefined, undefined, context
	      );
	    }
	  } else {
	    // direct component options / constructor
	    vnode = createComponent(tag, data, context, children);
	  }
	  if (Array.isArray(vnode)) {
	    return vnode
	  } else if (isDef(vnode)) {
	    if (isDef(ns)) { applyNS(vnode, ns); }
	    if (isDef(data)) { registerDeepBindings(data); }
	    return vnode
	  } else {
	    return createEmptyVNode()
	  }
	}

	function applyNS (vnode, ns, force) {
	  vnode.ns = ns;
	  if (vnode.tag === 'foreignObject') {
	    // use default namespace inside foreignObject
	    ns = undefined;
	    force = true;
	  }
	  if (isDef(vnode.children)) {
	    for (var i = 0, l = vnode.children.length; i < l; i++) {
	      var child = vnode.children[i];
	      if (isDef(child.tag) && (
	        isUndef(child.ns) || (isTrue(force) && child.tag !== 'svg'))) {
	        applyNS(child, ns, force);
	      }
	    }
	  }
	}

	// ref #5318
	// necessary to ensure parent re-render when deep bindings like :style and
	// :class are used on slot nodes
	function registerDeepBindings (data) {
	  if (isObject(data.style)) {
	    traverse(data.style);
	  }
	  if (isObject(data.class)) {
	    traverse(data.class);
	  }
	}

	/*  */

	function initRender (vm) {
	  vm._vnode = null; // the root of the child tree
	  vm._staticTrees = null; // v-once cached trees
	  var options = vm.$options;
	  var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree
	  var renderContext = parentVnode && parentVnode.context;
	  vm.$slots = resolveSlots(options._renderChildren, renderContext);
	  vm.$scopedSlots = emptyObject;
	  // bind the createElement fn to this instance
	  // so that we get proper render context inside it.
	  // args order: tag, data, children, normalizationType, alwaysNormalize
	  // internal version is used by render functions compiled from templates
	  vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
	  // normalization is always applied for the public version, used in
	  // user-written render functions.
	  vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };

	  // $attrs & $listeners are exposed for easier HOC creation.
	  // they need to be reactive so that HOCs using them are always updated
	  var parentData = parentVnode && parentVnode.data;

	  /* istanbul ignore else */
	  {
	    defineReactive$$1(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {
	      !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
	    }, true);
	    defineReactive$$1(vm, '$listeners', options._parentListeners || emptyObject, function () {
	      !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
	    }, true);
	  }
	}

	var currentRenderingInstance = null;

	function renderMixin (Vue) {
	  // install runtime convenience helpers
	  installRenderHelpers(Vue.prototype);

	  Vue.prototype.$nextTick = function (fn) {
	    return nextTick(fn, this)
	  };

	  Vue.prototype._render = function () {
	    var vm = this;
	    var ref = vm.$options;
	    var render = ref.render;
	    var _parentVnode = ref._parentVnode;

	    if (_parentVnode) {
	      vm.$scopedSlots = normalizeScopedSlots(
	        _parentVnode.data.scopedSlots,
	        vm.$slots,
	        vm.$scopedSlots
	      );
	    }

	    // set parent vnode. this allows render functions to have access
	    // to the data on the placeholder node.
	    vm.$vnode = _parentVnode;
	    // render self
	    var vnode;
	    try {
	      // There's no need to maintain a stack because all render fns are called
	      // separately from one another. Nested component's render fns are called
	      // when parent component is patched.
	      currentRenderingInstance = vm;
	      vnode = render.call(vm._renderProxy, vm.$createElement);
	    } catch (e) {
	      handleError(e, vm, "render");
	      // return error render result,
	      // or previous vnode to prevent render error causing blank component
	      /* istanbul ignore else */
	      if ( vm.$options.renderError) {
	        try {
	          vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
	        } catch (e) {
	          handleError(e, vm, "renderError");
	          vnode = vm._vnode;
	        }
	      } else {
	        vnode = vm._vnode;
	      }
	    } finally {
	      currentRenderingInstance = null;
	    }
	    // if the returned array contains only a single node, allow it
	    if (Array.isArray(vnode) && vnode.length === 1) {
	      vnode = vnode[0];
	    }
	    // return empty vnode in case the render function errored out
	    if (!(vnode instanceof VNode)) {
	      if ( Array.isArray(vnode)) {
	        warn(
	          'Multiple root nodes returned from render function. Render function ' +
	          'should return a single root node.',
	          vm
	        );
	      }
	      vnode = createEmptyVNode();
	    }
	    // set parent
	    vnode.parent = _parentVnode;
	    return vnode
	  };
	}

	/*  */

	function ensureCtor (comp, base) {
	  if (
	    comp.__esModule ||
	    (hasSymbol && comp[Symbol.toStringTag] === 'Module')
	  ) {
	    comp = comp.default;
	  }
	  return isObject(comp)
	    ? base.extend(comp)
	    : comp
	}

	function createAsyncPlaceholder (
	  factory,
	  data,
	  context,
	  children,
	  tag
	) {
	  var node = createEmptyVNode();
	  node.asyncFactory = factory;
	  node.asyncMeta = { data: data, context: context, children: children, tag: tag };
	  return node
	}

	function resolveAsyncComponent (
	  factory,
	  baseCtor
	) {
	  if (isTrue(factory.error) && isDef(factory.errorComp)) {
	    return factory.errorComp
	  }

	  if (isDef(factory.resolved)) {
	    return factory.resolved
	  }

	  var owner = currentRenderingInstance;
	  if (owner && isDef(factory.owners) && factory.owners.indexOf(owner) === -1) {
	    // already pending
	    factory.owners.push(owner);
	  }

	  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
	    return factory.loadingComp
	  }

	  if (owner && !isDef(factory.owners)) {
	    var owners = factory.owners = [owner];
	    var sync = true;
	    var timerLoading = null;
	    var timerTimeout = null

	    ;(owner).$on('hook:destroyed', function () { return remove(owners, owner); });

	    var forceRender = function (renderCompleted) {
	      for (var i = 0, l = owners.length; i < l; i++) {
	        (owners[i]).$forceUpdate();
	      }

	      if (renderCompleted) {
	        owners.length = 0;
	        if (timerLoading !== null) {
	          clearTimeout(timerLoading);
	          timerLoading = null;
	        }
	        if (timerTimeout !== null) {
	          clearTimeout(timerTimeout);
	          timerTimeout = null;
	        }
	      }
	    };

	    var resolve = once(function (res) {
	      // cache resolved
	      factory.resolved = ensureCtor(res, baseCtor);
	      // invoke callbacks only if this is not a synchronous resolve
	      // (async resolves are shimmed as synchronous during SSR)
	      if (!sync) {
	        forceRender(true);
	      } else {
	        owners.length = 0;
	      }
	    });

	    var reject = once(function (reason) {
	       warn(
	        "Failed to resolve async component: " + (String(factory)) +
	        (reason ? ("\nReason: " + reason) : '')
	      );
	      if (isDef(factory.errorComp)) {
	        factory.error = true;
	        forceRender(true);
	      }
	    });

	    var res = factory(resolve, reject);

	    if (isObject(res)) {
	      if (isPromise(res)) {
	        // () => Promise
	        if (isUndef(factory.resolved)) {
	          res.then(resolve, reject);
	        }
	      } else if (isPromise(res.component)) {
	        res.component.then(resolve, reject);

	        if (isDef(res.error)) {
	          factory.errorComp = ensureCtor(res.error, baseCtor);
	        }

	        if (isDef(res.loading)) {
	          factory.loadingComp = ensureCtor(res.loading, baseCtor);
	          if (res.delay === 0) {
	            factory.loading = true;
	          } else {
	            timerLoading = setTimeout(function () {
	              timerLoading = null;
	              if (isUndef(factory.resolved) && isUndef(factory.error)) {
	                factory.loading = true;
	                forceRender(false);
	              }
	            }, res.delay || 200);
	          }
	        }

	        if (isDef(res.timeout)) {
	          timerTimeout = setTimeout(function () {
	            timerTimeout = null;
	            if (isUndef(factory.resolved)) {
	              reject(
	                 ("timeout (" + (res.timeout) + "ms)")
	                  
	              );
	            }
	          }, res.timeout);
	        }
	      }
	    }

	    sync = false;
	    // return in case resolved synchronously
	    return factory.loading
	      ? factory.loadingComp
	      : factory.resolved
	  }
	}

	/*  */

	function isAsyncPlaceholder (node) {
	  return node.isComment && node.asyncFactory
	}

	/*  */

	function getFirstComponentChild (children) {
	  if (Array.isArray(children)) {
	    for (var i = 0; i < children.length; i++) {
	      var c = children[i];
	      if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
	        return c
	      }
	    }
	  }
	}

	/*  */

	/*  */

	function initEvents (vm) {
	  vm._events = Object.create(null);
	  vm._hasHookEvent = false;
	  // init parent attached events
	  var listeners = vm.$options._parentListeners;
	  if (listeners) {
	    updateComponentListeners(vm, listeners);
	  }
	}

	var target;

	function add (event, fn) {
	  target.$on(event, fn);
	}

	function remove$1 (event, fn) {
	  target.$off(event, fn);
	}

	function createOnceHandler (event, fn) {
	  var _target = target;
	  return function onceHandler () {
	    var res = fn.apply(null, arguments);
	    if (res !== null) {
	      _target.$off(event, onceHandler);
	    }
	  }
	}

	function updateComponentListeners (
	  vm,
	  listeners,
	  oldListeners
	) {
	  target = vm;
	  updateListeners(listeners, oldListeners || {}, add, remove$1, createOnceHandler, vm);
	  target = undefined;
	}

	function eventsMixin (Vue) {
	  var hookRE = /^hook:/;
	  Vue.prototype.$on = function (event, fn) {
	    var vm = this;
	    if (Array.isArray(event)) {
	      for (var i = 0, l = event.length; i < l; i++) {
	        vm.$on(event[i], fn);
	      }
	    } else {
	      (vm._events[event] || (vm._events[event] = [])).push(fn);
	      // optimize hook:event cost by using a boolean flag marked at registration
	      // instead of a hash lookup
	      if (hookRE.test(event)) {
	        vm._hasHookEvent = true;
	      }
	    }
	    return vm
	  };

	  Vue.prototype.$once = function (event, fn) {
	    var vm = this;
	    function on () {
	      vm.$off(event, on);
	      fn.apply(vm, arguments);
	    }
	    on.fn = fn;
	    vm.$on(event, on);
	    return vm
	  };

	  Vue.prototype.$off = function (event, fn) {
	    var vm = this;
	    // all
	    if (!arguments.length) {
	      vm._events = Object.create(null);
	      return vm
	    }
	    // array of events
	    if (Array.isArray(event)) {
	      for (var i$1 = 0, l = event.length; i$1 < l; i$1++) {
	        vm.$off(event[i$1], fn);
	      }
	      return vm
	    }
	    // specific event
	    var cbs = vm._events[event];
	    if (!cbs) {
	      return vm
	    }
	    if (!fn) {
	      vm._events[event] = null;
	      return vm
	    }
	    // specific handler
	    var cb;
	    var i = cbs.length;
	    while (i--) {
	      cb = cbs[i];
	      if (cb === fn || cb.fn === fn) {
	        cbs.splice(i, 1);
	        break
	      }
	    }
	    return vm
	  };

	  Vue.prototype.$emit = function (event) {
	    var vm = this;
	    {
	      var lowerCaseEvent = event.toLowerCase();
	      if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
	        tip(
	          "Event \"" + lowerCaseEvent + "\" is emitted in component " +
	          (formatComponentName(vm)) + " but the handler is registered for \"" + event + "\". " +
	          "Note that HTML attributes are case-insensitive and you cannot use " +
	          "v-on to listen to camelCase events when using in-DOM templates. " +
	          "You should probably use \"" + (hyphenate(event)) + "\" instead of \"" + event + "\"."
	        );
	      }
	    }
	    var cbs = vm._events[event];
	    if (cbs) {
	      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
	      var args = toArray(arguments, 1);
	      var info = "event handler for \"" + event + "\"";
	      for (var i = 0, l = cbs.length; i < l; i++) {
	        invokeWithErrorHandling(cbs[i], vm, args, vm, info);
	      }
	    }
	    return vm
	  };
	}

	/*  */

	var activeInstance = null;
	var isUpdatingChildComponent = false;

	function setActiveInstance(vm) {
	  var prevActiveInstance = activeInstance;
	  activeInstance = vm;
	  return function () {
	    activeInstance = prevActiveInstance;
	  }
	}

	function initLifecycle (vm) {
	  var options = vm.$options;

	  // locate first non-abstract parent
	  var parent = options.parent;
	  if (parent && !options.abstract) {
	    while (parent.$options.abstract && parent.$parent) {
	      parent = parent.$parent;
	    }
	    parent.$children.push(vm);
	  }

	  vm.$parent = parent;
	  vm.$root = parent ? parent.$root : vm;

	  vm.$children = [];
	  vm.$refs = {};

	  vm._watcher = null;
	  vm._inactive = null;
	  vm._directInactive = false;
	  vm._isMounted = false;
	  vm._isDestroyed = false;
	  vm._isBeingDestroyed = false;
	}

	function lifecycleMixin (Vue) {
	  Vue.prototype._update = function (vnode, hydrating) {
	    var vm = this;
	    var prevEl = vm.$el;
	    var prevVnode = vm._vnode;
	    var restoreActiveInstance = setActiveInstance(vm);
	    vm._vnode = vnode;
	    // Vue.prototype.__patch__ is injected in entry points
	    // based on the rendering backend used.
	    if (!prevVnode) {
	      // initial render
	      vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false /* removeOnly */);
	    } else {
	      // updates
	      vm.$el = vm.__patch__(prevVnode, vnode);
	    }
	    restoreActiveInstance();
	    // update __vue__ reference
	    if (prevEl) {
	      prevEl.__vue__ = null;
	    }
	    if (vm.$el) {
	      vm.$el.__vue__ = vm;
	    }
	    // if parent is an HOC, update its $el as well
	    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
	      vm.$parent.$el = vm.$el;
	    }
	    // updated hook is called by the scheduler to ensure that children are
	    // updated in a parent's updated hook.
	  };

	  Vue.prototype.$forceUpdate = function () {
	    var vm = this;
	    if (vm._watcher) {
	      vm._watcher.update();
	    }
	  };

	  Vue.prototype.$destroy = function () {
	    var vm = this;
	    if (vm._isBeingDestroyed) {
	      return
	    }
	    callHook(vm, 'beforeDestroy');
	    vm._isBeingDestroyed = true;
	    // remove self from parent
	    var parent = vm.$parent;
	    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
	      remove(parent.$children, vm);
	    }
	    // teardown watchers
	    if (vm._watcher) {
	      vm._watcher.teardown();
	    }
	    var i = vm._watchers.length;
	    while (i--) {
	      vm._watchers[i].teardown();
	    }
	    // remove reference from data ob
	    // frozen object may not have observer.
	    if (vm._data.__ob__) {
	      vm._data.__ob__.vmCount--;
	    }
	    // call the last hook...
	    vm._isDestroyed = true;
	    // invoke destroy hooks on current rendered tree
	    vm.__patch__(vm._vnode, null);
	    // fire destroyed hook
	    callHook(vm, 'destroyed');
	    // turn off all instance listeners.
	    vm.$off();
	    // remove __vue__ reference
	    if (vm.$el) {
	      vm.$el.__vue__ = null;
	    }
	    // release circular reference (#6759)
	    if (vm.$vnode) {
	      vm.$vnode.parent = null;
	    }
	  };
	}

	function mountComponent (
	  vm,
	  el,
	  hydrating
	) {
	  vm.$el = el;
	  if (!vm.$options.render) {
	    vm.$options.render = createEmptyVNode;
	    {
	      /* istanbul ignore if */
	      if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
	        vm.$options.el || el) {
	        warn(
	          'You are using the runtime-only build of Vue where the template ' +
	          'compiler is not available. Either pre-compile the templates into ' +
	          'render functions, or use the compiler-included build.',
	          vm
	        );
	      } else {
	        warn(
	          'Failed to mount component: template or render function not defined.',
	          vm
	        );
	      }
	    }
	  }
	  callHook(vm, 'beforeMount');

	  var updateComponent;
	  /* istanbul ignore if */
	  if ( config.performance && mark) {
	    updateComponent = function () {
	      var name = vm._name;
	      var id = vm._uid;
	      var startTag = "vue-perf-start:" + id;
	      var endTag = "vue-perf-end:" + id;

	      mark(startTag);
	      var vnode = vm._render();
	      mark(endTag);
	      measure(("vue " + name + " render"), startTag, endTag);

	      mark(startTag);
	      vm._update(vnode, hydrating);
	      mark(endTag);
	      measure(("vue " + name + " patch"), startTag, endTag);
	    };
	  } else {
	    updateComponent = function () {
	      vm._update(vm._render(), hydrating);
	    };
	  }

	  // we set this to vm._watcher inside the watcher's constructor
	  // since the watcher's initial patch may call $forceUpdate (e.g. inside child
	  // component's mounted hook), which relies on vm._watcher being already defined
	  new Watcher(vm, updateComponent, noop, {
	    before: function before () {
	      if (vm._isMounted && !vm._isDestroyed) {
	        callHook(vm, 'beforeUpdate');
	      }
	    }
	  }, true /* isRenderWatcher */);
	  hydrating = false;

	  // manually mounted instance, call mounted on self
	  // mounted is called for render-created child components in its inserted hook
	  if (vm.$vnode == null) {
	    vm._isMounted = true;
	    callHook(vm, 'mounted');
	  }
	  return vm
	}

	function updateChildComponent (
	  vm,
	  propsData,
	  listeners,
	  parentVnode,
	  renderChildren
	) {
	  {
	    isUpdatingChildComponent = true;
	  }

	  // determine whether component has slot children
	  // we need to do this before overwriting $options._renderChildren.

	  // check if there are dynamic scopedSlots (hand-written or compiled but with
	  // dynamic slot names). Static scoped slots compiled from template has the
	  // "$stable" marker.
	  var newScopedSlots = parentVnode.data.scopedSlots;
	  var oldScopedSlots = vm.$scopedSlots;
	  var hasDynamicScopedSlot = !!(
	    (newScopedSlots && !newScopedSlots.$stable) ||
	    (oldScopedSlots !== emptyObject && !oldScopedSlots.$stable) ||
	    (newScopedSlots && vm.$scopedSlots.$key !== newScopedSlots.$key)
	  );

	  // Any static slot children from the parent may have changed during parent's
	  // update. Dynamic scoped slots may also have changed. In such cases, a forced
	  // update is necessary to ensure correctness.
	  var needsForceUpdate = !!(
	    renderChildren ||               // has new static slots
	    vm.$options._renderChildren ||  // has old static slots
	    hasDynamicScopedSlot
	  );

	  vm.$options._parentVnode = parentVnode;
	  vm.$vnode = parentVnode; // update vm's placeholder node without re-render

	  if (vm._vnode) { // update child tree's parent
	    vm._vnode.parent = parentVnode;
	  }
	  vm.$options._renderChildren = renderChildren;

	  // update $attrs and $listeners hash
	  // these are also reactive so they may trigger child update if the child
	  // used them during render
	  vm.$attrs = parentVnode.data.attrs || emptyObject;
	  vm.$listeners = listeners || emptyObject;

	  // update props
	  if (propsData && vm.$options.props) {
	    toggleObserving(false);
	    var props = vm._props;
	    var propKeys = vm.$options._propKeys || [];
	    for (var i = 0; i < propKeys.length; i++) {
	      var key = propKeys[i];
	      var propOptions = vm.$options.props; // wtf flow?
	      props[key] = validateProp(key, propOptions, propsData, vm);
	    }
	    toggleObserving(true);
	    // keep a copy of raw propsData
	    vm.$options.propsData = propsData;
	  }

	  // update listeners
	  listeners = listeners || emptyObject;
	  var oldListeners = vm.$options._parentListeners;
	  vm.$options._parentListeners = listeners;
	  updateComponentListeners(vm, listeners, oldListeners);

	  // resolve slots + force update if has children
	  if (needsForceUpdate) {
	    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
	    vm.$forceUpdate();
	  }

	  {
	    isUpdatingChildComponent = false;
	  }
	}

	function isInInactiveTree (vm) {
	  while (vm && (vm = vm.$parent)) {
	    if (vm._inactive) { return true }
	  }
	  return false
	}

	function activateChildComponent (vm, direct) {
	  if (direct) {
	    vm._directInactive = false;
	    if (isInInactiveTree(vm)) {
	      return
	    }
	  } else if (vm._directInactive) {
	    return
	  }
	  if (vm._inactive || vm._inactive === null) {
	    vm._inactive = false;
	    for (var i = 0; i < vm.$children.length; i++) {
	      activateChildComponent(vm.$children[i]);
	    }
	    callHook(vm, 'activated');
	  }
	}

	function deactivateChildComponent (vm, direct) {
	  if (direct) {
	    vm._directInactive = true;
	    if (isInInactiveTree(vm)) {
	      return
	    }
	  }
	  if (!vm._inactive) {
	    vm._inactive = true;
	    for (var i = 0; i < vm.$children.length; i++) {
	      deactivateChildComponent(vm.$children[i]);
	    }
	    callHook(vm, 'deactivated');
	  }
	}

	function callHook (vm, hook) {
	  // #7573 disable dep collection when invoking lifecycle hooks
	  pushTarget();
	  var handlers = vm.$options[hook];
	  var info = hook + " hook";
	  if (handlers) {
	    for (var i = 0, j = handlers.length; i < j; i++) {
	      invokeWithErrorHandling(handlers[i], vm, null, vm, info);
	    }
	  }
	  if (vm._hasHookEvent) {
	    vm.$emit('hook:' + hook);
	  }
	  popTarget();
	}

	/*  */

	var MAX_UPDATE_COUNT = 100;

	var queue = [];
	var activatedChildren = [];
	var has = {};
	var circular = {};
	var waiting = false;
	var flushing = false;
	var index = 0;

	/**
	 * Reset the scheduler's state.
	 */
	function resetSchedulerState () {
	  index = queue.length = activatedChildren.length = 0;
	  has = {};
	  {
	    circular = {};
	  }
	  waiting = flushing = false;
	}

	// Async edge case #6566 requires saving the timestamp when event listeners are
	// attached. However, calling performance.now() has a perf overhead especially
	// if the page has thousands of event listeners. Instead, we take a timestamp
	// every time the scheduler flushes and use that for all event listeners
	// attached during that flush.
	var currentFlushTimestamp = 0;

	// Async edge case fix requires storing an event listener's attach timestamp.
	var getNow = Date.now;

	// Determine what event timestamp the browser is using. Annoyingly, the
	// timestamp can either be hi-res (relative to page load) or low-res
	// (relative to UNIX epoch), so in order to compare time we have to use the
	// same timestamp type when saving the flush timestamp.
	// All IE versions use low-res event timestamps, and have problematic clock
	// implementations (#9632)
	if (inBrowser && !isIE) {
	  var performance = window.performance;
	  if (
	    performance &&
	    typeof performance.now === 'function' &&
	    getNow() > document.createEvent('Event').timeStamp
	  ) {
	    // if the event timestamp, although evaluated AFTER the Date.now(), is
	    // smaller than it, it means the event is using a hi-res timestamp,
	    // and we need to use the hi-res version for event listener timestamps as
	    // well.
	    getNow = function () { return performance.now(); };
	  }
	}

	/**
	 * Flush both queues and run the watchers.
	 */
	function flushSchedulerQueue () {
	  currentFlushTimestamp = getNow();
	  flushing = true;
	  var watcher, id;

	  // Sort queue before flush.
	  // This ensures that:
	  // 1. Components are updated from parent to child. (because parent is always
	  //    created before the child)
	  // 2. A component's user watchers are run before its render watcher (because
	  //    user watchers are created before the render watcher)
	  // 3. If a component is destroyed during a parent component's watcher run,
	  //    its watchers can be skipped.
	  queue.sort(function (a, b) { return a.id - b.id; });

	  // do not cache length because more watchers might be pushed
	  // as we run existing watchers
	  for (index = 0; index < queue.length; index++) {
	    watcher = queue[index];
	    if (watcher.before) {
	      watcher.before();
	    }
	    id = watcher.id;
	    has[id] = null;
	    watcher.run();
	    // in dev build, check and stop circular updates.
	    if ( has[id] != null) {
	      circular[id] = (circular[id] || 0) + 1;
	      if (circular[id] > MAX_UPDATE_COUNT) {
	        warn(
	          'You may have an infinite update loop ' + (
	            watcher.user
	              ? ("in watcher with expression \"" + (watcher.expression) + "\"")
	              : "in a component render function."
	          ),
	          watcher.vm
	        );
	        break
	      }
	    }
	  }

	  // keep copies of post queues before resetting state
	  var activatedQueue = activatedChildren.slice();
	  var updatedQueue = queue.slice();

	  resetSchedulerState();

	  // call component updated and activated hooks
	  callActivatedHooks(activatedQueue);
	  callUpdatedHooks(updatedQueue);

	  // devtool hook
	  /* istanbul ignore if */
	  if (devtools && config.devtools) {
	    devtools.emit('flush');
	  }
	}

	function callUpdatedHooks (queue) {
	  var i = queue.length;
	  while (i--) {
	    var watcher = queue[i];
	    var vm = watcher.vm;
	    if (vm._watcher === watcher && vm._isMounted && !vm._isDestroyed) {
	      callHook(vm, 'updated');
	    }
	  }
	}

	/**
	 * Queue a kept-alive component that was activated during patch.
	 * The queue will be processed after the entire tree has been patched.
	 */
	function queueActivatedComponent (vm) {
	  // setting _inactive to false here so that a render function can
	  // rely on checking whether it's in an inactive tree (e.g. router-view)
	  vm._inactive = false;
	  activatedChildren.push(vm);
	}

	function callActivatedHooks (queue) {
	  for (var i = 0; i < queue.length; i++) {
	    queue[i]._inactive = true;
	    activateChildComponent(queue[i], true /* true */);
	  }
	}

	/**
	 * Push a watcher into the watcher queue.
	 * Jobs with duplicate IDs will be skipped unless it's
	 * pushed when the queue is being flushed.
	 */
	function queueWatcher (watcher) {
	  var id = watcher.id;
	  if (has[id] == null) {
	    has[id] = true;
	    if (!flushing) {
	      queue.push(watcher);
	    } else {
	      // if already flushing, splice the watcher based on its id
	      // if already past its id, it will be run next immediately.
	      var i = queue.length - 1;
	      while (i > index && queue[i].id > watcher.id) {
	        i--;
	      }
	      queue.splice(i + 1, 0, watcher);
	    }
	    // queue the flush
	    if (!waiting) {
	      waiting = true;

	      if ( !config.async) {
	        flushSchedulerQueue();
	        return
	      }
	      nextTick(flushSchedulerQueue);
	    }
	  }
	}

	/*  */



	var uid$2 = 0;

	/**
	 * A watcher parses an expression, collects dependencies,
	 * and fires callback when the expression value changes.
	 * This is used for both the $watch() api and directives.
	 */
	var Watcher = function Watcher (
	  vm,
	  expOrFn,
	  cb,
	  options,
	  isRenderWatcher
	) {
	  this.vm = vm;
	  if (isRenderWatcher) {
	    vm._watcher = this;
	  }
	  vm._watchers.push(this);
	  // options
	  if (options) {
	    this.deep = !!options.deep;
	    this.user = !!options.user;
	    this.lazy = !!options.lazy;
	    this.sync = !!options.sync;
	    this.before = options.before;
	  } else {
	    this.deep = this.user = this.lazy = this.sync = false;
	  }
	  this.cb = cb;
	  this.id = ++uid$2; // uid for batching
	  this.active = true;
	  this.dirty = this.lazy; // for lazy watchers
	  this.deps = [];
	  this.newDeps = [];
	  this.depIds = new _Set();
	  this.newDepIds = new _Set();
	  this.expression =  expOrFn.toString()
	    ;
	  // parse expression for getter
	  if (typeof expOrFn === 'function') {
	    this.getter = expOrFn;
	  } else {
	    this.getter = parsePath(expOrFn);
	    if (!this.getter) {
	      this.getter = noop;
	       warn(
	        "Failed watching path: \"" + expOrFn + "\" " +
	        'Watcher only accepts simple dot-delimited paths. ' +
	        'For full control, use a function instead.',
	        vm
	      );
	    }
	  }
	  this.value = this.lazy
	    ? undefined
	    : this.get();
	};

	/**
	 * Evaluate the getter, and re-collect dependencies.
	 */
	Watcher.prototype.get = function get () {
	  pushTarget(this);
	  var value;
	  var vm = this.vm;
	  try {
	    value = this.getter.call(vm, vm);
	  } catch (e) {
	    if (this.user) {
	      handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
	    } else {
	      throw e
	    }
	  } finally {
	    // "touch" every property so they are all tracked as
	    // dependencies for deep watching
	    if (this.deep) {
	      traverse(value);
	    }
	    popTarget();
	    this.cleanupDeps();
	  }
	  return value
	};

	/**
	 * Add a dependency to this directive.
	 */
	Watcher.prototype.addDep = function addDep (dep) {
	  var id = dep.id;
	  if (!this.newDepIds.has(id)) {
	    this.newDepIds.add(id);
	    this.newDeps.push(dep);
	    if (!this.depIds.has(id)) {
	      dep.addSub(this);
	    }
	  }
	};

	/**
	 * Clean up for dependency collection.
	 */
	Watcher.prototype.cleanupDeps = function cleanupDeps () {
	  var i = this.deps.length;
	  while (i--) {
	    var dep = this.deps[i];
	    if (!this.newDepIds.has(dep.id)) {
	      dep.removeSub(this);
	    }
	  }
	  var tmp = this.depIds;
	  this.depIds = this.newDepIds;
	  this.newDepIds = tmp;
	  this.newDepIds.clear();
	  tmp = this.deps;
	  this.deps = this.newDeps;
	  this.newDeps = tmp;
	  this.newDeps.length = 0;
	};

	/**
	 * Subscriber interface.
	 * Will be called when a dependency changes.
	 */
	Watcher.prototype.update = function update () {
	  /* istanbul ignore else */
	  if (this.lazy) {
	    this.dirty = true;
	  } else if (this.sync) {
	    this.run();
	  } else {
	    queueWatcher(this);
	  }
	};

	/**
	 * Scheduler job interface.
	 * Will be called by the scheduler.
	 */
	Watcher.prototype.run = function run () {
	  if (this.active) {
	    var value = this.get();
	    if (
	      value !== this.value ||
	      // Deep watchers and watchers on Object/Arrays should fire even
	      // when the value is the same, because the value may
	      // have mutated.
	      isObject(value) ||
	      this.deep
	    ) {
	      // set new value
	      var oldValue = this.value;
	      this.value = value;
	      if (this.user) {
	        try {
	          this.cb.call(this.vm, value, oldValue);
	        } catch (e) {
	          handleError(e, this.vm, ("callback for watcher \"" + (this.expression) + "\""));
	        }
	      } else {
	        this.cb.call(this.vm, value, oldValue);
	      }
	    }
	  }
	};

	/**
	 * Evaluate the value of the watcher.
	 * This only gets called for lazy watchers.
	 */
	Watcher.prototype.evaluate = function evaluate () {
	  this.value = this.get();
	  this.dirty = false;
	};

	/**
	 * Depend on all deps collected by this watcher.
	 */
	Watcher.prototype.depend = function depend () {
	  var i = this.deps.length;
	  while (i--) {
	    this.deps[i].depend();
	  }
	};

	/**
	 * Remove self from all dependencies' subscriber list.
	 */
	Watcher.prototype.teardown = function teardown () {
	  if (this.active) {
	    // remove self from vm's watcher list
	    // this is a somewhat expensive operation so we skip it
	    // if the vm is being destroyed.
	    if (!this.vm._isBeingDestroyed) {
	      remove(this.vm._watchers, this);
	    }
	    var i = this.deps.length;
	    while (i--) {
	      this.deps[i].removeSub(this);
	    }
	    this.active = false;
	  }
	};

	/*  */

	var sharedPropertyDefinition = {
	  enumerable: true,
	  configurable: true,
	  get: noop,
	  set: noop
	};

	function proxy (target, sourceKey, key) {
	  sharedPropertyDefinition.get = function proxyGetter () {
	    return this[sourceKey][key]
	  };
	  sharedPropertyDefinition.set = function proxySetter (val) {
	    this[sourceKey][key] = val;
	  };
	  Object.defineProperty(target, key, sharedPropertyDefinition);
	}

	function initState (vm) {
	  vm._watchers = [];
	  var opts = vm.$options;
	  if (opts.props) { initProps(vm, opts.props); }
	  if (opts.methods) { initMethods(vm, opts.methods); }
	  if (opts.data) {
	    initData(vm);
	  } else {
	    observe(vm._data = {}, true /* asRootData */);
	  }
	  if (opts.computed) { initComputed(vm, opts.computed); }
	  if (opts.watch && opts.watch !== nativeWatch) {
	    initWatch(vm, opts.watch);
	  }
	}

	function initProps (vm, propsOptions) {
	  var propsData = vm.$options.propsData || {};
	  var props = vm._props = {};
	  // cache prop keys so that future props updates can iterate using Array
	  // instead of dynamic object key enumeration.
	  var keys = vm.$options._propKeys = [];
	  var isRoot = !vm.$parent;
	  // root instance props should be converted
	  if (!isRoot) {
	    toggleObserving(false);
	  }
	  var loop = function ( key ) {
	    keys.push(key);
	    var value = validateProp(key, propsOptions, propsData, vm);
	    /* istanbul ignore else */
	    {
	      var hyphenatedKey = hyphenate(key);
	      if (isReservedAttribute(hyphenatedKey) ||
	          config.isReservedAttr(hyphenatedKey)) {
	        warn(
	          ("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop."),
	          vm
	        );
	      }
	      defineReactive$$1(props, key, value, function () {
	        if (!isRoot && !isUpdatingChildComponent) {
	          warn(
	            "Avoid mutating a prop directly since the value will be " +
	            "overwritten whenever the parent component re-renders. " +
	            "Instead, use a data or computed property based on the prop's " +
	            "value. Prop being mutated: \"" + key + "\"",
	            vm
	          );
	        }
	      });
	    }
	    // static props are already proxied on the component's prototype
	    // during Vue.extend(). We only need to proxy props defined at
	    // instantiation here.
	    if (!(key in vm)) {
	      proxy(vm, "_props", key);
	    }
	  };

	  for (var key in propsOptions) loop( key );
	  toggleObserving(true);
	}

	function initData (vm) {
	  var data = vm.$options.data;
	  data = vm._data = typeof data === 'function'
	    ? getData(data, vm)
	    : data || {};
	  if (!isPlainObject(data)) {
	    data = {};
	     warn(
	      'data functions should return an object:\n' +
	      'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
	      vm
	    );
	  }
	  // proxy data on instance
	  var keys = Object.keys(data);
	  var props = vm.$options.props;
	  var methods = vm.$options.methods;
	  var i = keys.length;
	  while (i--) {
	    var key = keys[i];
	    {
	      if (methods && hasOwn(methods, key)) {
	        warn(
	          ("Method \"" + key + "\" has already been defined as a data property."),
	          vm
	        );
	      }
	    }
	    if (props && hasOwn(props, key)) {
	       warn(
	        "The data property \"" + key + "\" is already declared as a prop. " +
	        "Use prop default value instead.",
	        vm
	      );
	    } else if (!isReserved(key)) {
	      proxy(vm, "_data", key);
	    }
	  }
	  // observe data
	  observe(data, true /* asRootData */);
	}

	function getData (data, vm) {
	  // #7573 disable dep collection when invoking data getters
	  pushTarget();
	  try {
	    return data.call(vm, vm)
	  } catch (e) {
	    handleError(e, vm, "data()");
	    return {}
	  } finally {
	    popTarget();
	  }
	}

	var computedWatcherOptions = { lazy: true };

	function initComputed (vm, computed) {
	  // $flow-disable-line
	  var watchers = vm._computedWatchers = Object.create(null);
	  // computed properties are just getters during SSR
	  var isSSR = isServerRendering();

	  for (var key in computed) {
	    var userDef = computed[key];
	    var getter = typeof userDef === 'function' ? userDef : userDef.get;
	    if ( getter == null) {
	      warn(
	        ("Getter is missing for computed property \"" + key + "\"."),
	        vm
	      );
	    }

	    if (!isSSR) {
	      // create internal watcher for the computed property.
	      watchers[key] = new Watcher(
	        vm,
	        getter || noop,
	        noop,
	        computedWatcherOptions
	      );
	    }

	    // component-defined computed properties are already defined on the
	    // component prototype. We only need to define computed properties defined
	    // at instantiation here.
	    if (!(key in vm)) {
	      defineComputed(vm, key, userDef);
	    } else {
	      if (key in vm.$data) {
	        warn(("The computed property \"" + key + "\" is already defined in data."), vm);
	      } else if (vm.$options.props && key in vm.$options.props) {
	        warn(("The computed property \"" + key + "\" is already defined as a prop."), vm);
	      }
	    }
	  }
	}

	function defineComputed (
	  target,
	  key,
	  userDef
	) {
	  var shouldCache = !isServerRendering();
	  if (typeof userDef === 'function') {
	    sharedPropertyDefinition.get = shouldCache
	      ? createComputedGetter(key)
	      : createGetterInvoker(userDef);
	    sharedPropertyDefinition.set = noop;
	  } else {
	    sharedPropertyDefinition.get = userDef.get
	      ? shouldCache && userDef.cache !== false
	        ? createComputedGetter(key)
	        : createGetterInvoker(userDef.get)
	      : noop;
	    sharedPropertyDefinition.set = userDef.set || noop;
	  }
	  if (
	      sharedPropertyDefinition.set === noop) {
	    sharedPropertyDefinition.set = function () {
	      warn(
	        ("Computed property \"" + key + "\" was assigned to but it has no setter."),
	        this
	      );
	    };
	  }
	  Object.defineProperty(target, key, sharedPropertyDefinition);
	}

	function createComputedGetter (key) {
	  return function computedGetter () {
	    var watcher = this._computedWatchers && this._computedWatchers[key];
	    if (watcher) {
	      if (watcher.dirty) {
	        watcher.evaluate();
	      }
	      if (Dep.target) {
	        watcher.depend();
	      }
	      return watcher.value
	    }
	  }
	}

	function createGetterInvoker(fn) {
	  return function computedGetter () {
	    return fn.call(this, this)
	  }
	}

	function initMethods (vm, methods) {
	  var props = vm.$options.props;
	  for (var key in methods) {
	    {
	      if (typeof methods[key] !== 'function') {
	        warn(
	          "Method \"" + key + "\" has type \"" + (typeof methods[key]) + "\" in the component definition. " +
	          "Did you reference the function correctly?",
	          vm
	        );
	      }
	      if (props && hasOwn(props, key)) {
	        warn(
	          ("Method \"" + key + "\" has already been defined as a prop."),
	          vm
	        );
	      }
	      if ((key in vm) && isReserved(key)) {
	        warn(
	          "Method \"" + key + "\" conflicts with an existing Vue instance method. " +
	          "Avoid defining component methods that start with _ or $."
	        );
	      }
	    }
	    vm[key] = typeof methods[key] !== 'function' ? noop : bind(methods[key], vm);
	  }
	}

	function initWatch (vm, watch) {
	  for (var key in watch) {
	    var handler = watch[key];
	    if (Array.isArray(handler)) {
	      for (var i = 0; i < handler.length; i++) {
	        createWatcher(vm, key, handler[i]);
	      }
	    } else {
	      createWatcher(vm, key, handler);
	    }
	  }
	}

	function createWatcher (
	  vm,
	  expOrFn,
	  handler,
	  options
	) {
	  if (isPlainObject(handler)) {
	    options = handler;
	    handler = handler.handler;
	  }
	  if (typeof handler === 'string') {
	    handler = vm[handler];
	  }
	  return vm.$watch(expOrFn, handler, options)
	}

	function stateMixin (Vue) {
	  // flow somehow has problems with directly declared definition object
	  // when using Object.defineProperty, so we have to procedurally build up
	  // the object here.
	  var dataDef = {};
	  dataDef.get = function () { return this._data };
	  var propsDef = {};
	  propsDef.get = function () { return this._props };
	  {
	    dataDef.set = function () {
	      warn(
	        'Avoid replacing instance root $data. ' +
	        'Use nested data properties instead.',
	        this
	      );
	    };
	    propsDef.set = function () {
	      warn("$props is readonly.", this);
	    };
	  }
	  Object.defineProperty(Vue.prototype, '$data', dataDef);
	  Object.defineProperty(Vue.prototype, '$props', propsDef);

	  Vue.prototype.$set = set;
	  Vue.prototype.$delete = del;

	  Vue.prototype.$watch = function (
	    expOrFn,
	    cb,
	    options
	  ) {
	    var vm = this;
	    if (isPlainObject(cb)) {
	      return createWatcher(vm, expOrFn, cb, options)
	    }
	    options = options || {};
	    options.user = true;
	    var watcher = new Watcher(vm, expOrFn, cb, options);
	    if (options.immediate) {
	      try {
	        cb.call(vm, watcher.value);
	      } catch (error) {
	        handleError(error, vm, ("callback for immediate watcher \"" + (watcher.expression) + "\""));
	      }
	    }
	    return function unwatchFn () {
	      watcher.teardown();
	    }
	  };
	}

	/*  */

	var uid$3 = 0;

	function initMixin (Vue) {
	  Vue.prototype._init = function (options) {
	    var vm = this;
	    // a uid
	    vm._uid = uid$3++;

	    var startTag, endTag;
	    /* istanbul ignore if */
	    if ( config.performance && mark) {
	      startTag = "vue-perf-start:" + (vm._uid);
	      endTag = "vue-perf-end:" + (vm._uid);
	      mark(startTag);
	    }

	    // a flag to avoid this being observed
	    vm._isVue = true;
	    // merge options
	    if (options && options._isComponent) {
	      // optimize internal component instantiation
	      // since dynamic options merging is pretty slow, and none of the
	      // internal component options needs special treatment.
	      initInternalComponent(vm, options);
	    } else {
	      vm.$options = mergeOptions(
	        resolveConstructorOptions(vm.constructor),
	        options || {},
	        vm
	      );
	    }
	    /* istanbul ignore else */
	    {
	      initProxy(vm);
	    }
	    // expose real self
	    vm._self = vm;
	    initLifecycle(vm);
	    initEvents(vm);
	    initRender(vm);
	    callHook(vm, 'beforeCreate');
	    initInjections(vm); // resolve injections before data/props
	    initState(vm);
	    initProvide(vm); // resolve provide after data/props
	    callHook(vm, 'created');

	    /* istanbul ignore if */
	    if ( config.performance && mark) {
	      vm._name = formatComponentName(vm, false);
	      mark(endTag);
	      measure(("vue " + (vm._name) + " init"), startTag, endTag);
	    }

	    if (vm.$options.el) {
	      vm.$mount(vm.$options.el);
	    }
	  };
	}

	function initInternalComponent (vm, options) {
	  var opts = vm.$options = Object.create(vm.constructor.options);
	  // doing this because it's faster than dynamic enumeration.
	  var parentVnode = options._parentVnode;
	  opts.parent = options.parent;
	  opts._parentVnode = parentVnode;

	  var vnodeComponentOptions = parentVnode.componentOptions;
	  opts.propsData = vnodeComponentOptions.propsData;
	  opts._parentListeners = vnodeComponentOptions.listeners;
	  opts._renderChildren = vnodeComponentOptions.children;
	  opts._componentTag = vnodeComponentOptions.tag;

	  if (options.render) {
	    opts.render = options.render;
	    opts.staticRenderFns = options.staticRenderFns;
	  }
	}

	function resolveConstructorOptions (Ctor) {
	  var options = Ctor.options;
	  if (Ctor.super) {
	    var superOptions = resolveConstructorOptions(Ctor.super);
	    var cachedSuperOptions = Ctor.superOptions;
	    if (superOptions !== cachedSuperOptions) {
	      // super option changed,
	      // need to resolve new options.
	      Ctor.superOptions = superOptions;
	      // check if there are any late-modified/attached options (#4976)
	      var modifiedOptions = resolveModifiedOptions(Ctor);
	      // update base extend options
	      if (modifiedOptions) {
	        extend(Ctor.extendOptions, modifiedOptions);
	      }
	      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
	      if (options.name) {
	        options.components[options.name] = Ctor;
	      }
	    }
	  }
	  return options
	}

	function resolveModifiedOptions (Ctor) {
	  var modified;
	  var latest = Ctor.options;
	  var sealed = Ctor.sealedOptions;
	  for (var key in latest) {
	    if (latest[key] !== sealed[key]) {
	      if (!modified) { modified = {}; }
	      modified[key] = latest[key];
	    }
	  }
	  return modified
	}

	function Vue (options) {
	  if (
	    !(this instanceof Vue)
	  ) {
	    warn('Vue is a constructor and should be called with the `new` keyword');
	  }
	  this._init(options);
	}

	initMixin(Vue);
	stateMixin(Vue);
	eventsMixin(Vue);
	lifecycleMixin(Vue);
	renderMixin(Vue);

	/*  */

	function initUse (Vue) {
	  Vue.use = function (plugin) {
	    var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
	    if (installedPlugins.indexOf(plugin) > -1) {
	      return this
	    }

	    // additional parameters
	    var args = toArray(arguments, 1);
	    args.unshift(this);
	    if (typeof plugin.install === 'function') {
	      plugin.install.apply(plugin, args);
	    } else if (typeof plugin === 'function') {
	      plugin.apply(null, args);
	    }
	    installedPlugins.push(plugin);
	    return this
	  };
	}

	/*  */

	function initMixin$1 (Vue) {
	  Vue.mixin = function (mixin) {
	    this.options = mergeOptions(this.options, mixin);
	    return this
	  };
	}

	/*  */

	function initExtend (Vue) {
	  /**
	   * Each instance constructor, including Vue, has a unique
	   * cid. This enables us to create wrapped "child
	   * constructors" for prototypal inheritance and cache them.
	   */
	  Vue.cid = 0;
	  var cid = 1;

	  /**
	   * Class inheritance
	   */
	  Vue.extend = function (extendOptions) {
	    extendOptions = extendOptions || {};
	    var Super = this;
	    var SuperId = Super.cid;
	    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
	    if (cachedCtors[SuperId]) {
	      return cachedCtors[SuperId]
	    }

	    var name = extendOptions.name || Super.options.name;
	    if ( name) {
	      validateComponentName(name);
	    }

	    var Sub = function VueComponent (options) {
	      this._init(options);
	    };
	    Sub.prototype = Object.create(Super.prototype);
	    Sub.prototype.constructor = Sub;
	    Sub.cid = cid++;
	    Sub.options = mergeOptions(
	      Super.options,
	      extendOptions
	    );
	    Sub['super'] = Super;

	    // For props and computed properties, we define the proxy getters on
	    // the Vue instances at extension time, on the extended prototype. This
	    // avoids Object.defineProperty calls for each instance created.
	    if (Sub.options.props) {
	      initProps$1(Sub);
	    }
	    if (Sub.options.computed) {
	      initComputed$1(Sub);
	    }

	    // allow further extension/mixin/plugin usage
	    Sub.extend = Super.extend;
	    Sub.mixin = Super.mixin;
	    Sub.use = Super.use;

	    // create asset registers, so extended classes
	    // can have their private assets too.
	    ASSET_TYPES.forEach(function (type) {
	      Sub[type] = Super[type];
	    });
	    // enable recursive self-lookup
	    if (name) {
	      Sub.options.components[name] = Sub;
	    }

	    // keep a reference to the super options at extension time.
	    // later at instantiation we can check if Super's options have
	    // been updated.
	    Sub.superOptions = Super.options;
	    Sub.extendOptions = extendOptions;
	    Sub.sealedOptions = extend({}, Sub.options);

	    // cache constructor
	    cachedCtors[SuperId] = Sub;
	    return Sub
	  };
	}

	function initProps$1 (Comp) {
	  var props = Comp.options.props;
	  for (var key in props) {
	    proxy(Comp.prototype, "_props", key);
	  }
	}

	function initComputed$1 (Comp) {
	  var computed = Comp.options.computed;
	  for (var key in computed) {
	    defineComputed(Comp.prototype, key, computed[key]);
	  }
	}

	/*  */

	function initAssetRegisters (Vue) {
	  /**
	   * Create asset registration methods.
	   */
	  ASSET_TYPES.forEach(function (type) {
	    Vue[type] = function (
	      id,
	      definition
	    ) {
	      if (!definition) {
	        return this.options[type + 's'][id]
	      } else {
	        /* istanbul ignore if */
	        if ( type === 'component') {
	          validateComponentName(id);
	        }
	        if (type === 'component' && isPlainObject(definition)) {
	          definition.name = definition.name || id;
	          definition = this.options._base.extend(definition);
	        }
	        if (type === 'directive' && typeof definition === 'function') {
	          definition = { bind: definition, update: definition };
	        }
	        this.options[type + 's'][id] = definition;
	        return definition
	      }
	    };
	  });
	}

	/*  */



	function getComponentName (opts) {
	  return opts && (opts.Ctor.options.name || opts.tag)
	}

	function matches (pattern, name) {
	  if (Array.isArray(pattern)) {
	    return pattern.indexOf(name) > -1
	  } else if (typeof pattern === 'string') {
	    return pattern.split(',').indexOf(name) > -1
	  } else if (isRegExp(pattern)) {
	    return pattern.test(name)
	  }
	  /* istanbul ignore next */
	  return false
	}

	function pruneCache (keepAliveInstance, filter) {
	  var cache = keepAliveInstance.cache;
	  var keys = keepAliveInstance.keys;
	  var _vnode = keepAliveInstance._vnode;
	  for (var key in cache) {
	    var cachedNode = cache[key];
	    if (cachedNode) {
	      var name = getComponentName(cachedNode.componentOptions);
	      if (name && !filter(name)) {
	        pruneCacheEntry(cache, key, keys, _vnode);
	      }
	    }
	  }
	}

	function pruneCacheEntry (
	  cache,
	  key,
	  keys,
	  current
	) {
	  var cached$$1 = cache[key];
	  if (cached$$1 && (!current || cached$$1.tag !== current.tag)) {
	    cached$$1.componentInstance.$destroy();
	  }
	  cache[key] = null;
	  remove(keys, key);
	}

	var patternTypes = [String, RegExp, Array];

	var KeepAlive = {
	  name: 'keep-alive',
	  abstract: true,

	  props: {
	    include: patternTypes,
	    exclude: patternTypes,
	    max: [String, Number]
	  },

	  created: function created () {
	    this.cache = Object.create(null);
	    this.keys = [];
	  },

	  destroyed: function destroyed () {
	    for (var key in this.cache) {
	      pruneCacheEntry(this.cache, key, this.keys);
	    }
	  },

	  mounted: function mounted () {
	    var this$1 = this;

	    this.$watch('include', function (val) {
	      pruneCache(this$1, function (name) { return matches(val, name); });
	    });
	    this.$watch('exclude', function (val) {
	      pruneCache(this$1, function (name) { return !matches(val, name); });
	    });
	  },

	  render: function render () {
	    var slot = this.$slots.default;
	    var vnode = getFirstComponentChild(slot);
	    var componentOptions = vnode && vnode.componentOptions;
	    if (componentOptions) {
	      // check pattern
	      var name = getComponentName(componentOptions);
	      var ref = this;
	      var include = ref.include;
	      var exclude = ref.exclude;
	      if (
	        // not included
	        (include && (!name || !matches(include, name))) ||
	        // excluded
	        (exclude && name && matches(exclude, name))
	      ) {
	        return vnode
	      }

	      var ref$1 = this;
	      var cache = ref$1.cache;
	      var keys = ref$1.keys;
	      var key = vnode.key == null
	        // same constructor may get registered as different local components
	        // so cid alone is not enough (#3269)
	        ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
	        : vnode.key;
	      if (cache[key]) {
	        vnode.componentInstance = cache[key].componentInstance;
	        // make current key freshest
	        remove(keys, key);
	        keys.push(key);
	      } else {
	        cache[key] = vnode;
	        keys.push(key);
	        // prune oldest entry
	        if (this.max && keys.length > parseInt(this.max)) {
	          pruneCacheEntry(cache, keys[0], keys, this._vnode);
	        }
	      }

	      vnode.data.keepAlive = true;
	    }
	    return vnode || (slot && slot[0])
	  }
	};

	var builtInComponents = {
	  KeepAlive: KeepAlive
	};

	/*  */

	function initGlobalAPI (Vue) {
	  // config
	  var configDef = {};
	  configDef.get = function () { return config; };
	  {
	    configDef.set = function () {
	      warn(
	        'Do not replace the Vue.config object, set individual fields instead.'
	      );
	    };
	  }
	  Object.defineProperty(Vue, 'config', configDef);

	  // exposed util methods.
	  // NOTE: these are not considered part of the public API - avoid relying on
	  // them unless you are aware of the risk.
	  Vue.util = {
	    warn: warn,
	    extend: extend,
	    mergeOptions: mergeOptions,
	    defineReactive: defineReactive$$1
	  };

	  Vue.set = set;
	  Vue.delete = del;
	  Vue.nextTick = nextTick;

	  // 2.6 explicit observable API
	  Vue.observable = function (obj) {
	    observe(obj);
	    return obj
	  };

	  Vue.options = Object.create(null);
	  ASSET_TYPES.forEach(function (type) {
	    Vue.options[type + 's'] = Object.create(null);
	  });

	  // this is used to identify the "base" constructor to extend all plain-object
	  // components with in Weex's multi-instance scenarios.
	  Vue.options._base = Vue;

	  extend(Vue.options.components, builtInComponents);

	  initUse(Vue);
	  initMixin$1(Vue);
	  initExtend(Vue);
	  initAssetRegisters(Vue);
	}

	initGlobalAPI(Vue);

	Object.defineProperty(Vue.prototype, '$isServer', {
	  get: isServerRendering
	});

	Object.defineProperty(Vue.prototype, '$ssrContext', {
	  get: function get () {
	    /* istanbul ignore next */
	    return this.$vnode && this.$vnode.ssrContext
	  }
	});

	// expose FunctionalRenderContext for ssr runtime helper installation
	Object.defineProperty(Vue, 'FunctionalRenderContext', {
	  value: FunctionalRenderContext
	});

	Vue.version = '2.6.11';

	/*  */

	// these are reserved for web because they are directly compiled away
	// during template compilation
	var isReservedAttr = makeMap('style,class');

	// attributes that should be using props for binding
	var acceptValue = makeMap('input,textarea,option,select,progress');
	var mustUseProp = function (tag, type, attr) {
	  return (
	    (attr === 'value' && acceptValue(tag)) && type !== 'button' ||
	    (attr === 'selected' && tag === 'option') ||
	    (attr === 'checked' && tag === 'input') ||
	    (attr === 'muted' && tag === 'video')
	  )
	};

	var isEnumeratedAttr = makeMap('contenteditable,draggable,spellcheck');

	var isValidContentEditableValue = makeMap('events,caret,typing,plaintext-only');

	var convertEnumeratedValue = function (key, value) {
	  return isFalsyAttrValue(value) || value === 'false'
	    ? 'false'
	    // allow arbitrary string value for contenteditable
	    : key === 'contenteditable' && isValidContentEditableValue(value)
	      ? value
	      : 'true'
	};

	var isBooleanAttr = makeMap(
	  'allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,' +
	  'default,defaultchecked,defaultmuted,defaultselected,defer,disabled,' +
	  'enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,' +
	  'muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,' +
	  'required,reversed,scoped,seamless,selected,sortable,translate,' +
	  'truespeed,typemustmatch,visible'
	);

	var xlinkNS = 'http://www.w3.org/1999/xlink';

	var isXlink = function (name) {
	  return name.charAt(5) === ':' && name.slice(0, 5) === 'xlink'
	};

	var getXlinkProp = function (name) {
	  return isXlink(name) ? name.slice(6, name.length) : ''
	};

	var isFalsyAttrValue = function (val) {
	  return val == null || val === false
	};

	/*  */

	function genClassForVnode (vnode) {
	  var data = vnode.data;
	  var parentNode = vnode;
	  var childNode = vnode;
	  while (isDef(childNode.componentInstance)) {
	    childNode = childNode.componentInstance._vnode;
	    if (childNode && childNode.data) {
	      data = mergeClassData(childNode.data, data);
	    }
	  }
	  while (isDef(parentNode = parentNode.parent)) {
	    if (parentNode && parentNode.data) {
	      data = mergeClassData(data, parentNode.data);
	    }
	  }
	  return renderClass(data.staticClass, data.class)
	}

	function mergeClassData (child, parent) {
	  return {
	    staticClass: concat(child.staticClass, parent.staticClass),
	    class: isDef(child.class)
	      ? [child.class, parent.class]
	      : parent.class
	  }
	}

	function renderClass (
	  staticClass,
	  dynamicClass
	) {
	  if (isDef(staticClass) || isDef(dynamicClass)) {
	    return concat(staticClass, stringifyClass(dynamicClass))
	  }
	  /* istanbul ignore next */
	  return ''
	}

	function concat (a, b) {
	  return a ? b ? (a + ' ' + b) : a : (b || '')
	}

	function stringifyClass (value) {
	  if (Array.isArray(value)) {
	    return stringifyArray(value)
	  }
	  if (isObject(value)) {
	    return stringifyObject(value)
	  }
	  if (typeof value === 'string') {
	    return value
	  }
	  /* istanbul ignore next */
	  return ''
	}

	function stringifyArray (value) {
	  var res = '';
	  var stringified;
	  for (var i = 0, l = value.length; i < l; i++) {
	    if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
	      if (res) { res += ' '; }
	      res += stringified;
	    }
	  }
	  return res
	}

	function stringifyObject (value) {
	  var res = '';
	  for (var key in value) {
	    if (value[key]) {
	      if (res) { res += ' '; }
	      res += key;
	    }
	  }
	  return res
	}

	/*  */

	var namespaceMap = {
	  svg: 'http://www.w3.org/2000/svg',
	  math: 'http://www.w3.org/1998/Math/MathML'
	};

	var isHTMLTag = makeMap(
	  'html,body,base,head,link,meta,style,title,' +
	  'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,' +
	  'div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,' +
	  'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,' +
	  's,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,' +
	  'embed,object,param,source,canvas,script,noscript,del,ins,' +
	  'caption,col,colgroup,table,thead,tbody,td,th,tr,' +
	  'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,' +
	  'output,progress,select,textarea,' +
	  'details,dialog,menu,menuitem,summary,' +
	  'content,element,shadow,template,blockquote,iframe,tfoot'
	);

	// this map is intentionally selective, only covering SVG elements that may
	// contain child elements.
	var isSVG = makeMap(
	  'svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,' +
	  'foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,' +
	  'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view',
	  true
	);

	var isReservedTag = function (tag) {
	  return isHTMLTag(tag) || isSVG(tag)
	};

	function getTagNamespace (tag) {
	  if (isSVG(tag)) {
	    return 'svg'
	  }
	  // basic support for MathML
	  // note it doesn't support other MathML elements being component roots
	  if (tag === 'math') {
	    return 'math'
	  }
	}

	var unknownElementCache = Object.create(null);
	function isUnknownElement (tag) {
	  /* istanbul ignore if */
	  if (!inBrowser) {
	    return true
	  }
	  if (isReservedTag(tag)) {
	    return false
	  }
	  tag = tag.toLowerCase();
	  /* istanbul ignore if */
	  if (unknownElementCache[tag] != null) {
	    return unknownElementCache[tag]
	  }
	  var el = document.createElement(tag);
	  if (tag.indexOf('-') > -1) {
	    // http://stackoverflow.com/a/28210364/1070244
	    return (unknownElementCache[tag] = (
	      el.constructor === window.HTMLUnknownElement ||
	      el.constructor === window.HTMLElement
	    ))
	  } else {
	    return (unknownElementCache[tag] = /HTMLUnknownElement/.test(el.toString()))
	  }
	}

	var isTextInputType = makeMap('text,number,password,search,email,tel,url');

	/*  */

	/**
	 * Query an element selector if it's not an element already.
	 */
	function query (el) {
	  if (typeof el === 'string') {
	    var selected = document.querySelector(el);
	    if (!selected) {
	       warn(
	        'Cannot find element: ' + el
	      );
	      return document.createElement('div')
	    }
	    return selected
	  } else {
	    return el
	  }
	}

	/*  */

	function createElement$1 (tagName, vnode) {
	  var elm = document.createElement(tagName);
	  if (tagName !== 'select') {
	    return elm
	  }
	  // false or null will remove the attribute but undefined will not
	  if (vnode.data && vnode.data.attrs && vnode.data.attrs.multiple !== undefined) {
	    elm.setAttribute('multiple', 'multiple');
	  }
	  return elm
	}

	function createElementNS (namespace, tagName) {
	  return document.createElementNS(namespaceMap[namespace], tagName)
	}

	function createTextNode (text) {
	  return document.createTextNode(text)
	}

	function createComment (text) {
	  return document.createComment(text)
	}

	function insertBefore (parentNode, newNode, referenceNode) {
	  parentNode.insertBefore(newNode, referenceNode);
	}

	function removeChild (node, child) {
	  node.removeChild(child);
	}

	function appendChild (node, child) {
	  node.appendChild(child);
	}

	function parentNode (node) {
	  return node.parentNode
	}

	function nextSibling (node) {
	  return node.nextSibling
	}

	function tagName (node) {
	  return node.tagName
	}

	function setTextContent (node, text) {
	  node.textContent = text;
	}

	function setStyleScope (node, scopeId) {
	  node.setAttribute(scopeId, '');
	}

	var nodeOps = /*#__PURE__*/Object.freeze({
	  createElement: createElement$1,
	  createElementNS: createElementNS,
	  createTextNode: createTextNode,
	  createComment: createComment,
	  insertBefore: insertBefore,
	  removeChild: removeChild,
	  appendChild: appendChild,
	  parentNode: parentNode,
	  nextSibling: nextSibling,
	  tagName: tagName,
	  setTextContent: setTextContent,
	  setStyleScope: setStyleScope
	});

	/*  */

	var ref = {
	  create: function create (_, vnode) {
	    registerRef(vnode);
	  },
	  update: function update (oldVnode, vnode) {
	    if (oldVnode.data.ref !== vnode.data.ref) {
	      registerRef(oldVnode, true);
	      registerRef(vnode);
	    }
	  },
	  destroy: function destroy (vnode) {
	    registerRef(vnode, true);
	  }
	};

	function registerRef (vnode, isRemoval) {
	  var key = vnode.data.ref;
	  if (!isDef(key)) { return }

	  var vm = vnode.context;
	  var ref = vnode.componentInstance || vnode.elm;
	  var refs = vm.$refs;
	  if (isRemoval) {
	    if (Array.isArray(refs[key])) {
	      remove(refs[key], ref);
	    } else if (refs[key] === ref) {
	      refs[key] = undefined;
	    }
	  } else {
	    if (vnode.data.refInFor) {
	      if (!Array.isArray(refs[key])) {
	        refs[key] = [ref];
	      } else if (refs[key].indexOf(ref) < 0) {
	        // $flow-disable-line
	        refs[key].push(ref);
	      }
	    } else {
	      refs[key] = ref;
	    }
	  }
	}

	/**
	 * Virtual DOM patching algorithm based on Snabbdom by
	 * Simon Friis Vindum (@paldepind)
	 * Licensed under the MIT License
	 * https://github.com/paldepind/snabbdom/blob/master/LICENSE
	 *
	 * modified by Evan You (@yyx990803)
	 *
	 * Not type-checking this because this file is perf-critical and the cost
	 * of making flow understand it is not worth it.
	 */

	var emptyNode = new VNode('', {}, []);

	var hooks = ['create', 'activate', 'update', 'remove', 'destroy'];

	function sameVnode (a, b) {
	  return (
	    a.key === b.key && (
	      (
	        a.tag === b.tag &&
	        a.isComment === b.isComment &&
	        isDef(a.data) === isDef(b.data) &&
	        sameInputType(a, b)
	      ) || (
	        isTrue(a.isAsyncPlaceholder) &&
	        a.asyncFactory === b.asyncFactory &&
	        isUndef(b.asyncFactory.error)
	      )
	    )
	  )
	}

	function sameInputType (a, b) {
	  if (a.tag !== 'input') { return true }
	  var i;
	  var typeA = isDef(i = a.data) && isDef(i = i.attrs) && i.type;
	  var typeB = isDef(i = b.data) && isDef(i = i.attrs) && i.type;
	  return typeA === typeB || isTextInputType(typeA) && isTextInputType(typeB)
	}

	function createKeyToOldIdx (children, beginIdx, endIdx) {
	  var i, key;
	  var map = {};
	  for (i = beginIdx; i <= endIdx; ++i) {
	    key = children[i].key;
	    if (isDef(key)) { map[key] = i; }
	  }
	  return map
	}

	function createPatchFunction (backend) {
	  var i, j;
	  var cbs = {};

	  var modules = backend.modules;
	  var nodeOps = backend.nodeOps;

	  for (i = 0; i < hooks.length; ++i) {
	    cbs[hooks[i]] = [];
	    for (j = 0; j < modules.length; ++j) {
	      if (isDef(modules[j][hooks[i]])) {
	        cbs[hooks[i]].push(modules[j][hooks[i]]);
	      }
	    }
	  }

	  function emptyNodeAt (elm) {
	    return new VNode(nodeOps.tagName(elm).toLowerCase(), {}, [], undefined, elm)
	  }

	  function createRmCb (childElm, listeners) {
	    function remove$$1 () {
	      if (--remove$$1.listeners === 0) {
	        removeNode(childElm);
	      }
	    }
	    remove$$1.listeners = listeners;
	    return remove$$1
	  }

	  function removeNode (el) {
	    var parent = nodeOps.parentNode(el);
	    // element may have already been removed due to v-html / v-text
	    if (isDef(parent)) {
	      nodeOps.removeChild(parent, el);
	    }
	  }

	  function isUnknownElement$$1 (vnode, inVPre) {
	    return (
	      !inVPre &&
	      !vnode.ns &&
	      !(
	        config.ignoredElements.length &&
	        config.ignoredElements.some(function (ignore) {
	          return isRegExp(ignore)
	            ? ignore.test(vnode.tag)
	            : ignore === vnode.tag
	        })
	      ) &&
	      config.isUnknownElement(vnode.tag)
	    )
	  }

	  var creatingElmInVPre = 0;

	  function createElm (
	    vnode,
	    insertedVnodeQueue,
	    parentElm,
	    refElm,
	    nested,
	    ownerArray,
	    index
	  ) {
	    if (isDef(vnode.elm) && isDef(ownerArray)) {
	      // This vnode was used in a previous render!
	      // now it's used as a new node, overwriting its elm would cause
	      // potential patch errors down the road when it's used as an insertion
	      // reference node. Instead, we clone the node on-demand before creating
	      // associated DOM element for it.
	      vnode = ownerArray[index] = cloneVNode(vnode);
	    }

	    vnode.isRootInsert = !nested; // for transition enter check
	    if (createComponent(vnode, insertedVnodeQueue, parentElm, refElm)) {
	      return
	    }

	    var data = vnode.data;
	    var children = vnode.children;
	    var tag = vnode.tag;
	    if (isDef(tag)) {
	      {
	        if (data && data.pre) {
	          creatingElmInVPre++;
	        }
	        if (isUnknownElement$$1(vnode, creatingElmInVPre)) {
	          warn(
	            'Unknown custom element: <' + tag + '> - did you ' +
	            'register the component correctly? For recursive components, ' +
	            'make sure to provide the "name" option.',
	            vnode.context
	          );
	        }
	      }

	      vnode.elm = vnode.ns
	        ? nodeOps.createElementNS(vnode.ns, tag)
	        : nodeOps.createElement(tag, vnode);
	      setScope(vnode);

	      /* istanbul ignore if */
	      {
	        createChildren(vnode, children, insertedVnodeQueue);
	        if (isDef(data)) {
	          invokeCreateHooks(vnode, insertedVnodeQueue);
	        }
	        insert(parentElm, vnode.elm, refElm);
	      }

	      if ( data && data.pre) {
	        creatingElmInVPre--;
	      }
	    } else if (isTrue(vnode.isComment)) {
	      vnode.elm = nodeOps.createComment(vnode.text);
	      insert(parentElm, vnode.elm, refElm);
	    } else {
	      vnode.elm = nodeOps.createTextNode(vnode.text);
	      insert(parentElm, vnode.elm, refElm);
	    }
	  }

	  function createComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
	    var i = vnode.data;
	    if (isDef(i)) {
	      var isReactivated = isDef(vnode.componentInstance) && i.keepAlive;
	      if (isDef(i = i.hook) && isDef(i = i.init)) {
	        i(vnode, false /* hydrating */);
	      }
	      // after calling the init hook, if the vnode is a child component
	      // it should've created a child instance and mounted it. the child
	      // component also has set the placeholder vnode's elm.
	      // in that case we can just return the element and be done.
	      if (isDef(vnode.componentInstance)) {
	        initComponent(vnode, insertedVnodeQueue);
	        insert(parentElm, vnode.elm, refElm);
	        if (isTrue(isReactivated)) {
	          reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm);
	        }
	        return true
	      }
	    }
	  }

	  function initComponent (vnode, insertedVnodeQueue) {
	    if (isDef(vnode.data.pendingInsert)) {
	      insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert);
	      vnode.data.pendingInsert = null;
	    }
	    vnode.elm = vnode.componentInstance.$el;
	    if (isPatchable(vnode)) {
	      invokeCreateHooks(vnode, insertedVnodeQueue);
	      setScope(vnode);
	    } else {
	      // empty component root.
	      // skip all element-related modules except for ref (#3455)
	      registerRef(vnode);
	      // make sure to invoke the insert hook
	      insertedVnodeQueue.push(vnode);
	    }
	  }

	  function reactivateComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
	    var i;
	    // hack for #4339: a reactivated component with inner transition
	    // does not trigger because the inner node's created hooks are not called
	    // again. It's not ideal to involve module-specific logic in here but
	    // there doesn't seem to be a better way to do it.
	    var innerNode = vnode;
	    while (innerNode.componentInstance) {
	      innerNode = innerNode.componentInstance._vnode;
	      if (isDef(i = innerNode.data) && isDef(i = i.transition)) {
	        for (i = 0; i < cbs.activate.length; ++i) {
	          cbs.activate[i](emptyNode, innerNode);
	        }
	        insertedVnodeQueue.push(innerNode);
	        break
	      }
	    }
	    // unlike a newly created component,
	    // a reactivated keep-alive component doesn't insert itself
	    insert(parentElm, vnode.elm, refElm);
	  }

	  function insert (parent, elm, ref$$1) {
	    if (isDef(parent)) {
	      if (isDef(ref$$1)) {
	        if (nodeOps.parentNode(ref$$1) === parent) {
	          nodeOps.insertBefore(parent, elm, ref$$1);
	        }
	      } else {
	        nodeOps.appendChild(parent, elm);
	      }
	    }
	  }

	  function createChildren (vnode, children, insertedVnodeQueue) {
	    if (Array.isArray(children)) {
	      {
	        checkDuplicateKeys(children);
	      }
	      for (var i = 0; i < children.length; ++i) {
	        createElm(children[i], insertedVnodeQueue, vnode.elm, null, true, children, i);
	      }
	    } else if (isPrimitive(vnode.text)) {
	      nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(String(vnode.text)));
	    }
	  }

	  function isPatchable (vnode) {
	    while (vnode.componentInstance) {
	      vnode = vnode.componentInstance._vnode;
	    }
	    return isDef(vnode.tag)
	  }

	  function invokeCreateHooks (vnode, insertedVnodeQueue) {
	    for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
	      cbs.create[i$1](emptyNode, vnode);
	    }
	    i = vnode.data.hook; // Reuse variable
	    if (isDef(i)) {
	      if (isDef(i.create)) { i.create(emptyNode, vnode); }
	      if (isDef(i.insert)) { insertedVnodeQueue.push(vnode); }
	    }
	  }

	  // set scope id attribute for scoped CSS.
	  // this is implemented as a special case to avoid the overhead
	  // of going through the normal attribute patching process.
	  function setScope (vnode) {
	    var i;
	    if (isDef(i = vnode.fnScopeId)) {
	      nodeOps.setStyleScope(vnode.elm, i);
	    } else {
	      var ancestor = vnode;
	      while (ancestor) {
	        if (isDef(i = ancestor.context) && isDef(i = i.$options._scopeId)) {
	          nodeOps.setStyleScope(vnode.elm, i);
	        }
	        ancestor = ancestor.parent;
	      }
	    }
	    // for slot content they should also get the scopeId from the host instance.
	    if (isDef(i = activeInstance) &&
	      i !== vnode.context &&
	      i !== vnode.fnContext &&
	      isDef(i = i.$options._scopeId)
	    ) {
	      nodeOps.setStyleScope(vnode.elm, i);
	    }
	  }

	  function addVnodes (parentElm, refElm, vnodes, startIdx, endIdx, insertedVnodeQueue) {
	    for (; startIdx <= endIdx; ++startIdx) {
	      createElm(vnodes[startIdx], insertedVnodeQueue, parentElm, refElm, false, vnodes, startIdx);
	    }
	  }

	  function invokeDestroyHook (vnode) {
	    var i, j;
	    var data = vnode.data;
	    if (isDef(data)) {
	      if (isDef(i = data.hook) && isDef(i = i.destroy)) { i(vnode); }
	      for (i = 0; i < cbs.destroy.length; ++i) { cbs.destroy[i](vnode); }
	    }
	    if (isDef(i = vnode.children)) {
	      for (j = 0; j < vnode.children.length; ++j) {
	        invokeDestroyHook(vnode.children[j]);
	      }
	    }
	  }

	  function removeVnodes (vnodes, startIdx, endIdx) {
	    for (; startIdx <= endIdx; ++startIdx) {
	      var ch = vnodes[startIdx];
	      if (isDef(ch)) {
	        if (isDef(ch.tag)) {
	          removeAndInvokeRemoveHook(ch);
	          invokeDestroyHook(ch);
	        } else { // Text node
	          removeNode(ch.elm);
	        }
	      }
	    }
	  }

	  function removeAndInvokeRemoveHook (vnode, rm) {
	    if (isDef(rm) || isDef(vnode.data)) {
	      var i;
	      var listeners = cbs.remove.length + 1;
	      if (isDef(rm)) {
	        // we have a recursively passed down rm callback
	        // increase the listeners count
	        rm.listeners += listeners;
	      } else {
	        // directly removing
	        rm = createRmCb(vnode.elm, listeners);
	      }
	      // recursively invoke hooks on child component root node
	      if (isDef(i = vnode.componentInstance) && isDef(i = i._vnode) && isDef(i.data)) {
	        removeAndInvokeRemoveHook(i, rm);
	      }
	      for (i = 0; i < cbs.remove.length; ++i) {
	        cbs.remove[i](vnode, rm);
	      }
	      if (isDef(i = vnode.data.hook) && isDef(i = i.remove)) {
	        i(vnode, rm);
	      } else {
	        rm();
	      }
	    } else {
	      removeNode(vnode.elm);
	    }
	  }

	  function updateChildren (parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
	    var oldStartIdx = 0;
	    var newStartIdx = 0;
	    var oldEndIdx = oldCh.length - 1;
	    var oldStartVnode = oldCh[0];
	    var oldEndVnode = oldCh[oldEndIdx];
	    var newEndIdx = newCh.length - 1;
	    var newStartVnode = newCh[0];
	    var newEndVnode = newCh[newEndIdx];
	    var oldKeyToIdx, idxInOld, vnodeToMove, refElm;

	    // removeOnly is a special flag used only by <transition-group>
	    // to ensure removed elements stay in correct relative positions
	    // during leaving transitions
	    var canMove = !removeOnly;

	    {
	      checkDuplicateKeys(newCh);
	    }

	    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
	      if (isUndef(oldStartVnode)) {
	        oldStartVnode = oldCh[++oldStartIdx]; // Vnode has been moved left
	      } else if (isUndef(oldEndVnode)) {
	        oldEndVnode = oldCh[--oldEndIdx];
	      } else if (sameVnode(oldStartVnode, newStartVnode)) {
	        patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
	        oldStartVnode = oldCh[++oldStartIdx];
	        newStartVnode = newCh[++newStartIdx];
	      } else if (sameVnode(oldEndVnode, newEndVnode)) {
	        patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx);
	        oldEndVnode = oldCh[--oldEndIdx];
	        newEndVnode = newCh[--newEndIdx];
	      } else if (sameVnode(oldStartVnode, newEndVnode)) { // Vnode moved right
	        patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx);
	        canMove && nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm));
	        oldStartVnode = oldCh[++oldStartIdx];
	        newEndVnode = newCh[--newEndIdx];
	      } else if (sameVnode(oldEndVnode, newStartVnode)) { // Vnode moved left
	        patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
	        canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
	        oldEndVnode = oldCh[--oldEndIdx];
	        newStartVnode = newCh[++newStartIdx];
	      } else {
	        if (isUndef(oldKeyToIdx)) { oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx); }
	        idxInOld = isDef(newStartVnode.key)
	          ? oldKeyToIdx[newStartVnode.key]
	          : findIdxInOld(newStartVnode, oldCh, oldStartIdx, oldEndIdx);
	        if (isUndef(idxInOld)) { // New element
	          createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
	        } else {
	          vnodeToMove = oldCh[idxInOld];
	          if (sameVnode(vnodeToMove, newStartVnode)) {
	            patchVnode(vnodeToMove, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
	            oldCh[idxInOld] = undefined;
	            canMove && nodeOps.insertBefore(parentElm, vnodeToMove.elm, oldStartVnode.elm);
	          } else {
	            // same key but different element. treat as new element
	            createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
	          }
	        }
	        newStartVnode = newCh[++newStartIdx];
	      }
	    }
	    if (oldStartIdx > oldEndIdx) {
	      refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm;
	      addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
	    } else if (newStartIdx > newEndIdx) {
	      removeVnodes(oldCh, oldStartIdx, oldEndIdx);
	    }
	  }

	  function checkDuplicateKeys (children) {
	    var seenKeys = {};
	    for (var i = 0; i < children.length; i++) {
	      var vnode = children[i];
	      var key = vnode.key;
	      if (isDef(key)) {
	        if (seenKeys[key]) {
	          warn(
	            ("Duplicate keys detected: '" + key + "'. This may cause an update error."),
	            vnode.context
	          );
	        } else {
	          seenKeys[key] = true;
	        }
	      }
	    }
	  }

	  function findIdxInOld (node, oldCh, start, end) {
	    for (var i = start; i < end; i++) {
	      var c = oldCh[i];
	      if (isDef(c) && sameVnode(node, c)) { return i }
	    }
	  }

	  function patchVnode (
	    oldVnode,
	    vnode,
	    insertedVnodeQueue,
	    ownerArray,
	    index,
	    removeOnly
	  ) {
	    if (oldVnode === vnode) {
	      return
	    }

	    if (isDef(vnode.elm) && isDef(ownerArray)) {
	      // clone reused vnode
	      vnode = ownerArray[index] = cloneVNode(vnode);
	    }

	    var elm = vnode.elm = oldVnode.elm;

	    if (isTrue(oldVnode.isAsyncPlaceholder)) {
	      if (isDef(vnode.asyncFactory.resolved)) {
	        hydrate(oldVnode.elm, vnode, insertedVnodeQueue);
	      } else {
	        vnode.isAsyncPlaceholder = true;
	      }
	      return
	    }

	    // reuse element for static trees.
	    // note we only do this if the vnode is cloned -
	    // if the new node is not cloned it means the render functions have been
	    // reset by the hot-reload-api and we need to do a proper re-render.
	    if (isTrue(vnode.isStatic) &&
	      isTrue(oldVnode.isStatic) &&
	      vnode.key === oldVnode.key &&
	      (isTrue(vnode.isCloned) || isTrue(vnode.isOnce))
	    ) {
	      vnode.componentInstance = oldVnode.componentInstance;
	      return
	    }

	    var i;
	    var data = vnode.data;
	    if (isDef(data) && isDef(i = data.hook) && isDef(i = i.prepatch)) {
	      i(oldVnode, vnode);
	    }

	    var oldCh = oldVnode.children;
	    var ch = vnode.children;
	    if (isDef(data) && isPatchable(vnode)) {
	      for (i = 0; i < cbs.update.length; ++i) { cbs.update[i](oldVnode, vnode); }
	      if (isDef(i = data.hook) && isDef(i = i.update)) { i(oldVnode, vnode); }
	    }
	    if (isUndef(vnode.text)) {
	      if (isDef(oldCh) && isDef(ch)) {
	        if (oldCh !== ch) { updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly); }
	      } else if (isDef(ch)) {
	        {
	          checkDuplicateKeys(ch);
	        }
	        if (isDef(oldVnode.text)) { nodeOps.setTextContent(elm, ''); }
	        addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
	      } else if (isDef(oldCh)) {
	        removeVnodes(oldCh, 0, oldCh.length - 1);
	      } else if (isDef(oldVnode.text)) {
	        nodeOps.setTextContent(elm, '');
	      }
	    } else if (oldVnode.text !== vnode.text) {
	      nodeOps.setTextContent(elm, vnode.text);
	    }
	    if (isDef(data)) {
	      if (isDef(i = data.hook) && isDef(i = i.postpatch)) { i(oldVnode, vnode); }
	    }
	  }

	  function invokeInsertHook (vnode, queue, initial) {
	    // delay insert hooks for component root nodes, invoke them after the
	    // element is really inserted
	    if (isTrue(initial) && isDef(vnode.parent)) {
	      vnode.parent.data.pendingInsert = queue;
	    } else {
	      for (var i = 0; i < queue.length; ++i) {
	        queue[i].data.hook.insert(queue[i]);
	      }
	    }
	  }

	  var hydrationBailed = false;
	  // list of modules that can skip create hook during hydration because they
	  // are already rendered on the client or has no need for initialization
	  // Note: style is excluded because it relies on initial clone for future
	  // deep updates (#7063).
	  var isRenderedModule = makeMap('attrs,class,staticClass,staticStyle,key');

	  // Note: this is a browser-only function so we can assume elms are DOM nodes.
	  function hydrate (elm, vnode, insertedVnodeQueue, inVPre) {
	    var i;
	    var tag = vnode.tag;
	    var data = vnode.data;
	    var children = vnode.children;
	    inVPre = inVPre || (data && data.pre);
	    vnode.elm = elm;

	    if (isTrue(vnode.isComment) && isDef(vnode.asyncFactory)) {
	      vnode.isAsyncPlaceholder = true;
	      return true
	    }
	    // assert node match
	    {
	      if (!assertNodeMatch(elm, vnode, inVPre)) {
	        return false
	      }
	    }
	    if (isDef(data)) {
	      if (isDef(i = data.hook) && isDef(i = i.init)) { i(vnode, true /* hydrating */); }
	      if (isDef(i = vnode.componentInstance)) {
	        // child component. it should have hydrated its own tree.
	        initComponent(vnode, insertedVnodeQueue);
	        return true
	      }
	    }
	    if (isDef(tag)) {
	      if (isDef(children)) {
	        // empty element, allow client to pick up and populate children
	        if (!elm.hasChildNodes()) {
	          createChildren(vnode, children, insertedVnodeQueue);
	        } else {
	          // v-html and domProps: innerHTML
	          if (isDef(i = data) && isDef(i = i.domProps) && isDef(i = i.innerHTML)) {
	            if (i !== elm.innerHTML) {
	              /* istanbul ignore if */
	              if (
	                typeof console !== 'undefined' &&
	                !hydrationBailed
	              ) {
	                hydrationBailed = true;
	                console.warn('Parent: ', elm);
	                console.warn('server innerHTML: ', i);
	                console.warn('client innerHTML: ', elm.innerHTML);
	              }
	              return false
	            }
	          } else {
	            // iterate and compare children lists
	            var childrenMatch = true;
	            var childNode = elm.firstChild;
	            for (var i$1 = 0; i$1 < children.length; i$1++) {
	              if (!childNode || !hydrate(childNode, children[i$1], insertedVnodeQueue, inVPre)) {
	                childrenMatch = false;
	                break
	              }
	              childNode = childNode.nextSibling;
	            }
	            // if childNode is not null, it means the actual childNodes list is
	            // longer than the virtual children list.
	            if (!childrenMatch || childNode) {
	              /* istanbul ignore if */
	              if (
	                typeof console !== 'undefined' &&
	                !hydrationBailed
	              ) {
	                hydrationBailed = true;
	                console.warn('Parent: ', elm);
	                console.warn('Mismatching childNodes vs. VNodes: ', elm.childNodes, children);
	              }
	              return false
	            }
	          }
	        }
	      }
	      if (isDef(data)) {
	        var fullInvoke = false;
	        for (var key in data) {
	          if (!isRenderedModule(key)) {
	            fullInvoke = true;
	            invokeCreateHooks(vnode, insertedVnodeQueue);
	            break
	          }
	        }
	        if (!fullInvoke && data['class']) {
	          // ensure collecting deps for deep class bindings for future updates
	          traverse(data['class']);
	        }
	      }
	    } else if (elm.data !== vnode.text) {
	      elm.data = vnode.text;
	    }
	    return true
	  }

	  function assertNodeMatch (node, vnode, inVPre) {
	    if (isDef(vnode.tag)) {
	      return vnode.tag.indexOf('vue-component') === 0 || (
	        !isUnknownElement$$1(vnode, inVPre) &&
	        vnode.tag.toLowerCase() === (node.tagName && node.tagName.toLowerCase())
	      )
	    } else {
	      return node.nodeType === (vnode.isComment ? 8 : 3)
	    }
	  }

	  return function patch (oldVnode, vnode, hydrating, removeOnly) {
	    if (isUndef(vnode)) {
	      if (isDef(oldVnode)) { invokeDestroyHook(oldVnode); }
	      return
	    }

	    var isInitialPatch = false;
	    var insertedVnodeQueue = [];

	    if (isUndef(oldVnode)) {
	      // empty mount (likely as component), create new root element
	      isInitialPatch = true;
	      createElm(vnode, insertedVnodeQueue);
	    } else {
	      var isRealElement = isDef(oldVnode.nodeType);
	      if (!isRealElement && sameVnode(oldVnode, vnode)) {
	        // patch existing root node
	        patchVnode(oldVnode, vnode, insertedVnodeQueue, null, null, removeOnly);
	      } else {
	        if (isRealElement) {
	          // mounting to a real element
	          // check if this is server-rendered content and if we can perform
	          // a successful hydration.
	          if (oldVnode.nodeType === 1 && oldVnode.hasAttribute(SSR_ATTR)) {
	            oldVnode.removeAttribute(SSR_ATTR);
	            hydrating = true;
	          }
	          if (isTrue(hydrating)) {
	            if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
	              invokeInsertHook(vnode, insertedVnodeQueue, true);
	              return oldVnode
	            } else {
	              warn(
	                'The client-side rendered virtual DOM tree is not matching ' +
	                'server-rendered content. This is likely caused by incorrect ' +
	                'HTML markup, for example nesting block-level elements inside ' +
	                '<p>, or missing <tbody>. Bailing hydration and performing ' +
	                'full client-side render.'
	              );
	            }
	          }
	          // either not server-rendered, or hydration failed.
	          // create an empty node and replace it
	          oldVnode = emptyNodeAt(oldVnode);
	        }

	        // replacing existing element
	        var oldElm = oldVnode.elm;
	        var parentElm = nodeOps.parentNode(oldElm);

	        // create new node
	        createElm(
	          vnode,
	          insertedVnodeQueue,
	          // extremely rare edge case: do not insert if old element is in a
	          // leaving transition. Only happens when combining transition +
	          // keep-alive + HOCs. (#4590)
	          oldElm._leaveCb ? null : parentElm,
	          nodeOps.nextSibling(oldElm)
	        );

	        // update parent placeholder node element, recursively
	        if (isDef(vnode.parent)) {
	          var ancestor = vnode.parent;
	          var patchable = isPatchable(vnode);
	          while (ancestor) {
	            for (var i = 0; i < cbs.destroy.length; ++i) {
	              cbs.destroy[i](ancestor);
	            }
	            ancestor.elm = vnode.elm;
	            if (patchable) {
	              for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
	                cbs.create[i$1](emptyNode, ancestor);
	              }
	              // #6513
	              // invoke insert hooks that may have been merged by create hooks.
	              // e.g. for directives that uses the "inserted" hook.
	              var insert = ancestor.data.hook.insert;
	              if (insert.merged) {
	                // start at index 1 to avoid re-invoking component mounted hook
	                for (var i$2 = 1; i$2 < insert.fns.length; i$2++) {
	                  insert.fns[i$2]();
	                }
	              }
	            } else {
	              registerRef(ancestor);
	            }
	            ancestor = ancestor.parent;
	          }
	        }

	        // destroy old node
	        if (isDef(parentElm)) {
	          removeVnodes([oldVnode], 0, 0);
	        } else if (isDef(oldVnode.tag)) {
	          invokeDestroyHook(oldVnode);
	        }
	      }
	    }

	    invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch);
	    return vnode.elm
	  }
	}

	/*  */

	var directives = {
	  create: updateDirectives,
	  update: updateDirectives,
	  destroy: function unbindDirectives (vnode) {
	    updateDirectives(vnode, emptyNode);
	  }
	};

	function updateDirectives (oldVnode, vnode) {
	  if (oldVnode.data.directives || vnode.data.directives) {
	    _update(oldVnode, vnode);
	  }
	}

	function _update (oldVnode, vnode) {
	  var isCreate = oldVnode === emptyNode;
	  var isDestroy = vnode === emptyNode;
	  var oldDirs = normalizeDirectives$1(oldVnode.data.directives, oldVnode.context);
	  var newDirs = normalizeDirectives$1(vnode.data.directives, vnode.context);

	  var dirsWithInsert = [];
	  var dirsWithPostpatch = [];

	  var key, oldDir, dir;
	  for (key in newDirs) {
	    oldDir = oldDirs[key];
	    dir = newDirs[key];
	    if (!oldDir) {
	      // new directive, bind
	      callHook$1(dir, 'bind', vnode, oldVnode);
	      if (dir.def && dir.def.inserted) {
	        dirsWithInsert.push(dir);
	      }
	    } else {
	      // existing directive, update
	      dir.oldValue = oldDir.value;
	      dir.oldArg = oldDir.arg;
	      callHook$1(dir, 'update', vnode, oldVnode);
	      if (dir.def && dir.def.componentUpdated) {
	        dirsWithPostpatch.push(dir);
	      }
	    }
	  }

	  if (dirsWithInsert.length) {
	    var callInsert = function () {
	      for (var i = 0; i < dirsWithInsert.length; i++) {
	        callHook$1(dirsWithInsert[i], 'inserted', vnode, oldVnode);
	      }
	    };
	    if (isCreate) {
	      mergeVNodeHook(vnode, 'insert', callInsert);
	    } else {
	      callInsert();
	    }
	  }

	  if (dirsWithPostpatch.length) {
	    mergeVNodeHook(vnode, 'postpatch', function () {
	      for (var i = 0; i < dirsWithPostpatch.length; i++) {
	        callHook$1(dirsWithPostpatch[i], 'componentUpdated', vnode, oldVnode);
	      }
	    });
	  }

	  if (!isCreate) {
	    for (key in oldDirs) {
	      if (!newDirs[key]) {
	        // no longer present, unbind
	        callHook$1(oldDirs[key], 'unbind', oldVnode, oldVnode, isDestroy);
	      }
	    }
	  }
	}

	var emptyModifiers = Object.create(null);

	function normalizeDirectives$1 (
	  dirs,
	  vm
	) {
	  var res = Object.create(null);
	  if (!dirs) {
	    // $flow-disable-line
	    return res
	  }
	  var i, dir;
	  for (i = 0; i < dirs.length; i++) {
	    dir = dirs[i];
	    if (!dir.modifiers) {
	      // $flow-disable-line
	      dir.modifiers = emptyModifiers;
	    }
	    res[getRawDirName(dir)] = dir;
	    dir.def = resolveAsset(vm.$options, 'directives', dir.name, true);
	  }
	  // $flow-disable-line
	  return res
	}

	function getRawDirName (dir) {
	  return dir.rawName || ((dir.name) + "." + (Object.keys(dir.modifiers || {}).join('.')))
	}

	function callHook$1 (dir, hook, vnode, oldVnode, isDestroy) {
	  var fn = dir.def && dir.def[hook];
	  if (fn) {
	    try {
	      fn(vnode.elm, dir, vnode, oldVnode, isDestroy);
	    } catch (e) {
	      handleError(e, vnode.context, ("directive " + (dir.name) + " " + hook + " hook"));
	    }
	  }
	}

	var baseModules = [
	  ref,
	  directives
	];

	/*  */

	function updateAttrs (oldVnode, vnode) {
	  var opts = vnode.componentOptions;
	  if (isDef(opts) && opts.Ctor.options.inheritAttrs === false) {
	    return
	  }
	  if (isUndef(oldVnode.data.attrs) && isUndef(vnode.data.attrs)) {
	    return
	  }
	  var key, cur, old;
	  var elm = vnode.elm;
	  var oldAttrs = oldVnode.data.attrs || {};
	  var attrs = vnode.data.attrs || {};
	  // clone observed objects, as the user probably wants to mutate it
	  if (isDef(attrs.__ob__)) {
	    attrs = vnode.data.attrs = extend({}, attrs);
	  }

	  for (key in attrs) {
	    cur = attrs[key];
	    old = oldAttrs[key];
	    if (old !== cur) {
	      setAttr(elm, key, cur);
	    }
	  }
	  // #4391: in IE9, setting type can reset value for input[type=radio]
	  // #6666: IE/Edge forces progress value down to 1 before setting a max
	  /* istanbul ignore if */
	  if ((isIE || isEdge) && attrs.value !== oldAttrs.value) {
	    setAttr(elm, 'value', attrs.value);
	  }
	  for (key in oldAttrs) {
	    if (isUndef(attrs[key])) {
	      if (isXlink(key)) {
	        elm.removeAttributeNS(xlinkNS, getXlinkProp(key));
	      } else if (!isEnumeratedAttr(key)) {
	        elm.removeAttribute(key);
	      }
	    }
	  }
	}

	function setAttr (el, key, value) {
	  if (el.tagName.indexOf('-') > -1) {
	    baseSetAttr(el, key, value);
	  } else if (isBooleanAttr(key)) {
	    // set attribute for blank value
	    // e.g. <option disabled>Select one</option>
	    if (isFalsyAttrValue(value)) {
	      el.removeAttribute(key);
	    } else {
	      // technically allowfullscreen is a boolean attribute for <iframe>,
	      // but Flash expects a value of "true" when used on <embed> tag
	      value = key === 'allowfullscreen' && el.tagName === 'EMBED'
	        ? 'true'
	        : key;
	      el.setAttribute(key, value);
	    }
	  } else if (isEnumeratedAttr(key)) {
	    el.setAttribute(key, convertEnumeratedValue(key, value));
	  } else if (isXlink(key)) {
	    if (isFalsyAttrValue(value)) {
	      el.removeAttributeNS(xlinkNS, getXlinkProp(key));
	    } else {
	      el.setAttributeNS(xlinkNS, key, value);
	    }
	  } else {
	    baseSetAttr(el, key, value);
	  }
	}

	function baseSetAttr (el, key, value) {
	  if (isFalsyAttrValue(value)) {
	    el.removeAttribute(key);
	  } else {
	    // #7138: IE10 & 11 fires input event when setting placeholder on
	    // <textarea>... block the first input event and remove the blocker
	    // immediately.
	    /* istanbul ignore if */
	    if (
	      isIE && !isIE9 &&
	      el.tagName === 'TEXTAREA' &&
	      key === 'placeholder' && value !== '' && !el.__ieph
	    ) {
	      var blocker = function (e) {
	        e.stopImmediatePropagation();
	        el.removeEventListener('input', blocker);
	      };
	      el.addEventListener('input', blocker);
	      // $flow-disable-line
	      el.__ieph = true; /* IE placeholder patched */
	    }
	    el.setAttribute(key, value);
	  }
	}

	var attrs = {
	  create: updateAttrs,
	  update: updateAttrs
	};

	/*  */

	function updateClass (oldVnode, vnode) {
	  var el = vnode.elm;
	  var data = vnode.data;
	  var oldData = oldVnode.data;
	  if (
	    isUndef(data.staticClass) &&
	    isUndef(data.class) && (
	      isUndef(oldData) || (
	        isUndef(oldData.staticClass) &&
	        isUndef(oldData.class)
	      )
	    )
	  ) {
	    return
	  }

	  var cls = genClassForVnode(vnode);

	  // handle transition classes
	  var transitionClass = el._transitionClasses;
	  if (isDef(transitionClass)) {
	    cls = concat(cls, stringifyClass(transitionClass));
	  }

	  // set the class
	  if (cls !== el._prevClass) {
	    el.setAttribute('class', cls);
	    el._prevClass = cls;
	  }
	}

	var klass = {
	  create: updateClass,
	  update: updateClass
	};

	/*  */

	/*  */

	/*  */

	/*  */

	// in some cases, the event used has to be determined at runtime
	// so we used some reserved tokens during compile.
	var RANGE_TOKEN = '__r';
	var CHECKBOX_RADIO_TOKEN = '__c';

	/*  */

	// normalize v-model event tokens that can only be determined at runtime.
	// it's important to place the event as the first in the array because
	// the whole point is ensuring the v-model callback gets called before
	// user-attached handlers.
	function normalizeEvents (on) {
	  /* istanbul ignore if */
	  if (isDef(on[RANGE_TOKEN])) {
	    // IE input[type=range] only supports `change` event
	    var event = isIE ? 'change' : 'input';
	    on[event] = [].concat(on[RANGE_TOKEN], on[event] || []);
	    delete on[RANGE_TOKEN];
	  }
	  // This was originally intended to fix #4521 but no longer necessary
	  // after 2.5. Keeping it for backwards compat with generated code from < 2.4
	  /* istanbul ignore if */
	  if (isDef(on[CHECKBOX_RADIO_TOKEN])) {
	    on.change = [].concat(on[CHECKBOX_RADIO_TOKEN], on.change || []);
	    delete on[CHECKBOX_RADIO_TOKEN];
	  }
	}

	var target$1;

	function createOnceHandler$1 (event, handler, capture) {
	  var _target = target$1; // save current target element in closure
	  return function onceHandler () {
	    var res = handler.apply(null, arguments);
	    if (res !== null) {
	      remove$2(event, onceHandler, capture, _target);
	    }
	  }
	}

	// #9446: Firefox <= 53 (in particular, ESR 52) has incorrect Event.timeStamp
	// implementation and does not fire microtasks in between event propagation, so
	// safe to exclude.
	var useMicrotaskFix = isUsingMicroTask && !(isFF && Number(isFF[1]) <= 53);

	function add$1 (
	  name,
	  handler,
	  capture,
	  passive
	) {
	  // async edge case #6566: inner click event triggers patch, event handler
	  // attached to outer element during patch, and triggered again. This
	  // happens because browsers fire microtask ticks between event propagation.
	  // the solution is simple: we save the timestamp when a handler is attached,
	  // and the handler would only fire if the event passed to it was fired
	  // AFTER it was attached.
	  if (useMicrotaskFix) {
	    var attachedTimestamp = currentFlushTimestamp;
	    var original = handler;
	    handler = original._wrapper = function (e) {
	      if (
	        // no bubbling, should always fire.
	        // this is just a safety net in case event.timeStamp is unreliable in
	        // certain weird environments...
	        e.target === e.currentTarget ||
	        // event is fired after handler attachment
	        e.timeStamp >= attachedTimestamp ||
	        // bail for environments that have buggy event.timeStamp implementations
	        // #9462 iOS 9 bug: event.timeStamp is 0 after history.pushState
	        // #9681 QtWebEngine event.timeStamp is negative value
	        e.timeStamp <= 0 ||
	        // #9448 bail if event is fired in another document in a multi-page
	        // electron/nw.js app, since event.timeStamp will be using a different
	        // starting reference
	        e.target.ownerDocument !== document
	      ) {
	        return original.apply(this, arguments)
	      }
	    };
	  }
	  target$1.addEventListener(
	    name,
	    handler,
	    supportsPassive
	      ? { capture: capture, passive: passive }
	      : capture
	  );
	}

	function remove$2 (
	  name,
	  handler,
	  capture,
	  _target
	) {
	  (_target || target$1).removeEventListener(
	    name,
	    handler._wrapper || handler,
	    capture
	  );
	}

	function updateDOMListeners (oldVnode, vnode) {
	  if (isUndef(oldVnode.data.on) && isUndef(vnode.data.on)) {
	    return
	  }
	  var on = vnode.data.on || {};
	  var oldOn = oldVnode.data.on || {};
	  target$1 = vnode.elm;
	  normalizeEvents(on);
	  updateListeners(on, oldOn, add$1, remove$2, createOnceHandler$1, vnode.context);
	  target$1 = undefined;
	}

	var events = {
	  create: updateDOMListeners,
	  update: updateDOMListeners
	};

	/*  */

	var svgContainer;

	function updateDOMProps (oldVnode, vnode) {
	  if (isUndef(oldVnode.data.domProps) && isUndef(vnode.data.domProps)) {
	    return
	  }
	  var key, cur;
	  var elm = vnode.elm;
	  var oldProps = oldVnode.data.domProps || {};
	  var props = vnode.data.domProps || {};
	  // clone observed objects, as the user probably wants to mutate it
	  if (isDef(props.__ob__)) {
	    props = vnode.data.domProps = extend({}, props);
	  }

	  for (key in oldProps) {
	    if (!(key in props)) {
	      elm[key] = '';
	    }
	  }

	  for (key in props) {
	    cur = props[key];
	    // ignore children if the node has textContent or innerHTML,
	    // as these will throw away existing DOM nodes and cause removal errors
	    // on subsequent patches (#3360)
	    if (key === 'textContent' || key === 'innerHTML') {
	      if (vnode.children) { vnode.children.length = 0; }
	      if (cur === oldProps[key]) { continue }
	      // #6601 work around Chrome version <= 55 bug where single textNode
	      // replaced by innerHTML/textContent retains its parentNode property
	      if (elm.childNodes.length === 1) {
	        elm.removeChild(elm.childNodes[0]);
	      }
	    }

	    if (key === 'value' && elm.tagName !== 'PROGRESS') {
	      // store value as _value as well since
	      // non-string values will be stringified
	      elm._value = cur;
	      // avoid resetting cursor position when value is the same
	      var strCur = isUndef(cur) ? '' : String(cur);
	      if (shouldUpdateValue(elm, strCur)) {
	        elm.value = strCur;
	      }
	    } else if (key === 'innerHTML' && isSVG(elm.tagName) && isUndef(elm.innerHTML)) {
	      // IE doesn't support innerHTML for SVG elements
	      svgContainer = svgContainer || document.createElement('div');
	      svgContainer.innerHTML = "<svg>" + cur + "</svg>";
	      var svg = svgContainer.firstChild;
	      while (elm.firstChild) {
	        elm.removeChild(elm.firstChild);
	      }
	      while (svg.firstChild) {
	        elm.appendChild(svg.firstChild);
	      }
	    } else if (
	      // skip the update if old and new VDOM state is the same.
	      // `value` is handled separately because the DOM value may be temporarily
	      // out of sync with VDOM state due to focus, composition and modifiers.
	      // This  #4521 by skipping the unnecesarry `checked` update.
	      cur !== oldProps[key]
	    ) {
	      // some property updates can throw
	      // e.g. `value` on <progress> w/ non-finite value
	      try {
	        elm[key] = cur;
	      } catch (e) {}
	    }
	  }
	}

	// check platforms/web/util/attrs.js acceptValue


	function shouldUpdateValue (elm, checkVal) {
	  return (!elm.composing && (
	    elm.tagName === 'OPTION' ||
	    isNotInFocusAndDirty(elm, checkVal) ||
	    isDirtyWithModifiers(elm, checkVal)
	  ))
	}

	function isNotInFocusAndDirty (elm, checkVal) {
	  // return true when textbox (.number and .trim) loses focus and its value is
	  // not equal to the updated value
	  var notInFocus = true;
	  // #6157
	  // work around IE bug when accessing document.activeElement in an iframe
	  try { notInFocus = document.activeElement !== elm; } catch (e) {}
	  return notInFocus && elm.value !== checkVal
	}

	function isDirtyWithModifiers (elm, newVal) {
	  var value = elm.value;
	  var modifiers = elm._vModifiers; // injected by v-model runtime
	  if (isDef(modifiers)) {
	    if (modifiers.number) {
	      return toNumber(value) !== toNumber(newVal)
	    }
	    if (modifiers.trim) {
	      return value.trim() !== newVal.trim()
	    }
	  }
	  return value !== newVal
	}

	var domProps = {
	  create: updateDOMProps,
	  update: updateDOMProps
	};

	/*  */

	var parseStyleText = cached(function (cssText) {
	  var res = {};
	  var listDelimiter = /;(?![^(]*\))/g;
	  var propertyDelimiter = /:(.+)/;
	  cssText.split(listDelimiter).forEach(function (item) {
	    if (item) {
	      var tmp = item.split(propertyDelimiter);
	      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
	    }
	  });
	  return res
	});

	// merge static and dynamic style data on the same vnode
	function normalizeStyleData (data) {
	  var style = normalizeStyleBinding(data.style);
	  // static style is pre-processed into an object during compilation
	  // and is always a fresh object, so it's safe to merge into it
	  return data.staticStyle
	    ? extend(data.staticStyle, style)
	    : style
	}

	// normalize possible array / string values into Object
	function normalizeStyleBinding (bindingStyle) {
	  if (Array.isArray(bindingStyle)) {
	    return toObject(bindingStyle)
	  }
	  if (typeof bindingStyle === 'string') {
	    return parseStyleText(bindingStyle)
	  }
	  return bindingStyle
	}

	/**
	 * parent component style should be after child's
	 * so that parent component's style could override it
	 */
	function getStyle (vnode, checkChild) {
	  var res = {};
	  var styleData;

	  if (checkChild) {
	    var childNode = vnode;
	    while (childNode.componentInstance) {
	      childNode = childNode.componentInstance._vnode;
	      if (
	        childNode && childNode.data &&
	        (styleData = normalizeStyleData(childNode.data))
	      ) {
	        extend(res, styleData);
	      }
	    }
	  }

	  if ((styleData = normalizeStyleData(vnode.data))) {
	    extend(res, styleData);
	  }

	  var parentNode = vnode;
	  while ((parentNode = parentNode.parent)) {
	    if (parentNode.data && (styleData = normalizeStyleData(parentNode.data))) {
	      extend(res, styleData);
	    }
	  }
	  return res
	}

	/*  */

	var cssVarRE = /^--/;
	var importantRE = /\s*!important$/;
	var setProp = function (el, name, val) {
	  /* istanbul ignore if */
	  if (cssVarRE.test(name)) {
	    el.style.setProperty(name, val);
	  } else if (importantRE.test(val)) {
	    el.style.setProperty(hyphenate(name), val.replace(importantRE, ''), 'important');
	  } else {
	    var normalizedName = normalize(name);
	    if (Array.isArray(val)) {
	      // Support values array created by autoprefixer, e.g.
	      // {display: ["-webkit-box", "-ms-flexbox", "flex"]}
	      // Set them one by one, and the browser will only set those it can recognize
	      for (var i = 0, len = val.length; i < len; i++) {
	        el.style[normalizedName] = val[i];
	      }
	    } else {
	      el.style[normalizedName] = val;
	    }
	  }
	};

	var vendorNames = ['Webkit', 'Moz', 'ms'];

	var emptyStyle;
	var normalize = cached(function (prop) {
	  emptyStyle = emptyStyle || document.createElement('div').style;
	  prop = camelize(prop);
	  if (prop !== 'filter' && (prop in emptyStyle)) {
	    return prop
	  }
	  var capName = prop.charAt(0).toUpperCase() + prop.slice(1);
	  for (var i = 0; i < vendorNames.length; i++) {
	    var name = vendorNames[i] + capName;
	    if (name in emptyStyle) {
	      return name
	    }
	  }
	});

	function updateStyle (oldVnode, vnode) {
	  var data = vnode.data;
	  var oldData = oldVnode.data;

	  if (isUndef(data.staticStyle) && isUndef(data.style) &&
	    isUndef(oldData.staticStyle) && isUndef(oldData.style)
	  ) {
	    return
	  }

	  var cur, name;
	  var el = vnode.elm;
	  var oldStaticStyle = oldData.staticStyle;
	  var oldStyleBinding = oldData.normalizedStyle || oldData.style || {};

	  // if static style exists, stylebinding already merged into it when doing normalizeStyleData
	  var oldStyle = oldStaticStyle || oldStyleBinding;

	  var style = normalizeStyleBinding(vnode.data.style) || {};

	  // store normalized style under a different key for next diff
	  // make sure to clone it if it's reactive, since the user likely wants
	  // to mutate it.
	  vnode.data.normalizedStyle = isDef(style.__ob__)
	    ? extend({}, style)
	    : style;

	  var newStyle = getStyle(vnode, true);

	  for (name in oldStyle) {
	    if (isUndef(newStyle[name])) {
	      setProp(el, name, '');
	    }
	  }
	  for (name in newStyle) {
	    cur = newStyle[name];
	    if (cur !== oldStyle[name]) {
	      // ie9 setting to null has no effect, must use empty string
	      setProp(el, name, cur == null ? '' : cur);
	    }
	  }
	}

	var style = {
	  create: updateStyle,
	  update: updateStyle
	};

	/*  */

	var whitespaceRE = /\s+/;

	/**
	 * Add class with compatibility for SVG since classList is not supported on
	 * SVG elements in IE
	 */
	function addClass (el, cls) {
	  /* istanbul ignore if */
	  if (!cls || !(cls = cls.trim())) {
	    return
	  }

	  /* istanbul ignore else */
	  if (el.classList) {
	    if (cls.indexOf(' ') > -1) {
	      cls.split(whitespaceRE).forEach(function (c) { return el.classList.add(c); });
	    } else {
	      el.classList.add(cls);
	    }
	  } else {
	    var cur = " " + (el.getAttribute('class') || '') + " ";
	    if (cur.indexOf(' ' + cls + ' ') < 0) {
	      el.setAttribute('class', (cur + cls).trim());
	    }
	  }
	}

	/**
	 * Remove class with compatibility for SVG since classList is not supported on
	 * SVG elements in IE
	 */
	function removeClass (el, cls) {
	  /* istanbul ignore if */
	  if (!cls || !(cls = cls.trim())) {
	    return
	  }

	  /* istanbul ignore else */
	  if (el.classList) {
	    if (cls.indexOf(' ') > -1) {
	      cls.split(whitespaceRE).forEach(function (c) { return el.classList.remove(c); });
	    } else {
	      el.classList.remove(cls);
	    }
	    if (!el.classList.length) {
	      el.removeAttribute('class');
	    }
	  } else {
	    var cur = " " + (el.getAttribute('class') || '') + " ";
	    var tar = ' ' + cls + ' ';
	    while (cur.indexOf(tar) >= 0) {
	      cur = cur.replace(tar, ' ');
	    }
	    cur = cur.trim();
	    if (cur) {
	      el.setAttribute('class', cur);
	    } else {
	      el.removeAttribute('class');
	    }
	  }
	}

	/*  */

	function resolveTransition (def$$1) {
	  if (!def$$1) {
	    return
	  }
	  /* istanbul ignore else */
	  if (typeof def$$1 === 'object') {
	    var res = {};
	    if (def$$1.css !== false) {
	      extend(res, autoCssTransition(def$$1.name || 'v'));
	    }
	    extend(res, def$$1);
	    return res
	  } else if (typeof def$$1 === 'string') {
	    return autoCssTransition(def$$1)
	  }
	}

	var autoCssTransition = cached(function (name) {
	  return {
	    enterClass: (name + "-enter"),
	    enterToClass: (name + "-enter-to"),
	    enterActiveClass: (name + "-enter-active"),
	    leaveClass: (name + "-leave"),
	    leaveToClass: (name + "-leave-to"),
	    leaveActiveClass: (name + "-leave-active")
	  }
	});

	var hasTransition = inBrowser && !isIE9;
	var TRANSITION = 'transition';
	var ANIMATION = 'animation';

	// Transition property/event sniffing
	var transitionProp = 'transition';
	var transitionEndEvent = 'transitionend';
	var animationProp = 'animation';
	var animationEndEvent = 'animationend';
	if (hasTransition) {
	  /* istanbul ignore if */
	  if (window.ontransitionend === undefined &&
	    window.onwebkittransitionend !== undefined
	  ) {
	    transitionProp = 'WebkitTransition';
	    transitionEndEvent = 'webkitTransitionEnd';
	  }
	  if (window.onanimationend === undefined &&
	    window.onwebkitanimationend !== undefined
	  ) {
	    animationProp = 'WebkitAnimation';
	    animationEndEvent = 'webkitAnimationEnd';
	  }
	}

	// binding to window is necessary to make hot reload work in IE in strict mode
	var raf = inBrowser
	  ? window.requestAnimationFrame
	    ? window.requestAnimationFrame.bind(window)
	    : setTimeout
	  : /* istanbul ignore next */ function (fn) { return fn(); };

	function nextFrame (fn) {
	  raf(function () {
	    raf(fn);
	  });
	}

	function addTransitionClass (el, cls) {
	  var transitionClasses = el._transitionClasses || (el._transitionClasses = []);
	  if (transitionClasses.indexOf(cls) < 0) {
	    transitionClasses.push(cls);
	    addClass(el, cls);
	  }
	}

	function removeTransitionClass (el, cls) {
	  if (el._transitionClasses) {
	    remove(el._transitionClasses, cls);
	  }
	  removeClass(el, cls);
	}

	function whenTransitionEnds (
	  el,
	  expectedType,
	  cb
	) {
	  var ref = getTransitionInfo(el, expectedType);
	  var type = ref.type;
	  var timeout = ref.timeout;
	  var propCount = ref.propCount;
	  if (!type) { return cb() }
	  var event = type === TRANSITION ? transitionEndEvent : animationEndEvent;
	  var ended = 0;
	  var end = function () {
	    el.removeEventListener(event, onEnd);
	    cb();
	  };
	  var onEnd = function (e) {
	    if (e.target === el) {
	      if (++ended >= propCount) {
	        end();
	      }
	    }
	  };
	  setTimeout(function () {
	    if (ended < propCount) {
	      end();
	    }
	  }, timeout + 1);
	  el.addEventListener(event, onEnd);
	}

	var transformRE = /\b(transform|all)(,|$)/;

	function getTransitionInfo (el, expectedType) {
	  var styles = window.getComputedStyle(el);
	  // JSDOM may return undefined for transition properties
	  var transitionDelays = (styles[transitionProp + 'Delay'] || '').split(', ');
	  var transitionDurations = (styles[transitionProp + 'Duration'] || '').split(', ');
	  var transitionTimeout = getTimeout(transitionDelays, transitionDurations);
	  var animationDelays = (styles[animationProp + 'Delay'] || '').split(', ');
	  var animationDurations = (styles[animationProp + 'Duration'] || '').split(', ');
	  var animationTimeout = getTimeout(animationDelays, animationDurations);

	  var type;
	  var timeout = 0;
	  var propCount = 0;
	  /* istanbul ignore if */
	  if (expectedType === TRANSITION) {
	    if (transitionTimeout > 0) {
	      type = TRANSITION;
	      timeout = transitionTimeout;
	      propCount = transitionDurations.length;
	    }
	  } else if (expectedType === ANIMATION) {
	    if (animationTimeout > 0) {
	      type = ANIMATION;
	      timeout = animationTimeout;
	      propCount = animationDurations.length;
	    }
	  } else {
	    timeout = Math.max(transitionTimeout, animationTimeout);
	    type = timeout > 0
	      ? transitionTimeout > animationTimeout
	        ? TRANSITION
	        : ANIMATION
	      : null;
	    propCount = type
	      ? type === TRANSITION
	        ? transitionDurations.length
	        : animationDurations.length
	      : 0;
	  }
	  var hasTransform =
	    type === TRANSITION &&
	    transformRE.test(styles[transitionProp + 'Property']);
	  return {
	    type: type,
	    timeout: timeout,
	    propCount: propCount,
	    hasTransform: hasTransform
	  }
	}

	function getTimeout (delays, durations) {
	  /* istanbul ignore next */
	  while (delays.length < durations.length) {
	    delays = delays.concat(delays);
	  }

	  return Math.max.apply(null, durations.map(function (d, i) {
	    return toMs(d) + toMs(delays[i])
	  }))
	}

	// Old versions of Chromium (below 61.0.3163.100) formats floating pointer numbers
	// in a locale-dependent way, using a comma instead of a dot.
	// If comma is not replaced with a dot, the input will be rounded down (i.e. acting
	// as a floor function) causing unexpected behaviors
	function toMs (s) {
	  return Number(s.slice(0, -1).replace(',', '.')) * 1000
	}

	/*  */

	function enter (vnode, toggleDisplay) {
	  var el = vnode.elm;

	  // call leave callback now
	  if (isDef(el._leaveCb)) {
	    el._leaveCb.cancelled = true;
	    el._leaveCb();
	  }

	  var data = resolveTransition(vnode.data.transition);
	  if (isUndef(data)) {
	    return
	  }

	  /* istanbul ignore if */
	  if (isDef(el._enterCb) || el.nodeType !== 1) {
	    return
	  }

	  var css = data.css;
	  var type = data.type;
	  var enterClass = data.enterClass;
	  var enterToClass = data.enterToClass;
	  var enterActiveClass = data.enterActiveClass;
	  var appearClass = data.appearClass;
	  var appearToClass = data.appearToClass;
	  var appearActiveClass = data.appearActiveClass;
	  var beforeEnter = data.beforeEnter;
	  var enter = data.enter;
	  var afterEnter = data.afterEnter;
	  var enterCancelled = data.enterCancelled;
	  var beforeAppear = data.beforeAppear;
	  var appear = data.appear;
	  var afterAppear = data.afterAppear;
	  var appearCancelled = data.appearCancelled;
	  var duration = data.duration;

	  // activeInstance will always be the <transition> component managing this
	  // transition. One edge case to check is when the <transition> is placed
	  // as the root node of a child component. In that case we need to check
	  // <transition>'s parent for appear check.
	  var context = activeInstance;
	  var transitionNode = activeInstance.$vnode;
	  while (transitionNode && transitionNode.parent) {
	    context = transitionNode.context;
	    transitionNode = transitionNode.parent;
	  }

	  var isAppear = !context._isMounted || !vnode.isRootInsert;

	  if (isAppear && !appear && appear !== '') {
	    return
	  }

	  var startClass = isAppear && appearClass
	    ? appearClass
	    : enterClass;
	  var activeClass = isAppear && appearActiveClass
	    ? appearActiveClass
	    : enterActiveClass;
	  var toClass = isAppear && appearToClass
	    ? appearToClass
	    : enterToClass;

	  var beforeEnterHook = isAppear
	    ? (beforeAppear || beforeEnter)
	    : beforeEnter;
	  var enterHook = isAppear
	    ? (typeof appear === 'function' ? appear : enter)
	    : enter;
	  var afterEnterHook = isAppear
	    ? (afterAppear || afterEnter)
	    : afterEnter;
	  var enterCancelledHook = isAppear
	    ? (appearCancelled || enterCancelled)
	    : enterCancelled;

	  var explicitEnterDuration = toNumber(
	    isObject(duration)
	      ? duration.enter
	      : duration
	  );

	  if ( explicitEnterDuration != null) {
	    checkDuration(explicitEnterDuration, 'enter', vnode);
	  }

	  var expectsCSS = css !== false && !isIE9;
	  var userWantsControl = getHookArgumentsLength(enterHook);

	  var cb = el._enterCb = once(function () {
	    if (expectsCSS) {
	      removeTransitionClass(el, toClass);
	      removeTransitionClass(el, activeClass);
	    }
	    if (cb.cancelled) {
	      if (expectsCSS) {
	        removeTransitionClass(el, startClass);
	      }
	      enterCancelledHook && enterCancelledHook(el);
	    } else {
	      afterEnterHook && afterEnterHook(el);
	    }
	    el._enterCb = null;
	  });

	  if (!vnode.data.show) {
	    // remove pending leave element on enter by injecting an insert hook
	    mergeVNodeHook(vnode, 'insert', function () {
	      var parent = el.parentNode;
	      var pendingNode = parent && parent._pending && parent._pending[vnode.key];
	      if (pendingNode &&
	        pendingNode.tag === vnode.tag &&
	        pendingNode.elm._leaveCb
	      ) {
	        pendingNode.elm._leaveCb();
	      }
	      enterHook && enterHook(el, cb);
	    });
	  }

	  // start enter transition
	  beforeEnterHook && beforeEnterHook(el);
	  if (expectsCSS) {
	    addTransitionClass(el, startClass);
	    addTransitionClass(el, activeClass);
	    nextFrame(function () {
	      removeTransitionClass(el, startClass);
	      if (!cb.cancelled) {
	        addTransitionClass(el, toClass);
	        if (!userWantsControl) {
	          if (isValidDuration(explicitEnterDuration)) {
	            setTimeout(cb, explicitEnterDuration);
	          } else {
	            whenTransitionEnds(el, type, cb);
	          }
	        }
	      }
	    });
	  }

	  if (vnode.data.show) {
	    toggleDisplay && toggleDisplay();
	    enterHook && enterHook(el, cb);
	  }

	  if (!expectsCSS && !userWantsControl) {
	    cb();
	  }
	}

	function leave (vnode, rm) {
	  var el = vnode.elm;

	  // call enter callback now
	  if (isDef(el._enterCb)) {
	    el._enterCb.cancelled = true;
	    el._enterCb();
	  }

	  var data = resolveTransition(vnode.data.transition);
	  if (isUndef(data) || el.nodeType !== 1) {
	    return rm()
	  }

	  /* istanbul ignore if */
	  if (isDef(el._leaveCb)) {
	    return
	  }

	  var css = data.css;
	  var type = data.type;
	  var leaveClass = data.leaveClass;
	  var leaveToClass = data.leaveToClass;
	  var leaveActiveClass = data.leaveActiveClass;
	  var beforeLeave = data.beforeLeave;
	  var leave = data.leave;
	  var afterLeave = data.afterLeave;
	  var leaveCancelled = data.leaveCancelled;
	  var delayLeave = data.delayLeave;
	  var duration = data.duration;

	  var expectsCSS = css !== false && !isIE9;
	  var userWantsControl = getHookArgumentsLength(leave);

	  var explicitLeaveDuration = toNumber(
	    isObject(duration)
	      ? duration.leave
	      : duration
	  );

	  if ( isDef(explicitLeaveDuration)) {
	    checkDuration(explicitLeaveDuration, 'leave', vnode);
	  }

	  var cb = el._leaveCb = once(function () {
	    if (el.parentNode && el.parentNode._pending) {
	      el.parentNode._pending[vnode.key] = null;
	    }
	    if (expectsCSS) {
	      removeTransitionClass(el, leaveToClass);
	      removeTransitionClass(el, leaveActiveClass);
	    }
	    if (cb.cancelled) {
	      if (expectsCSS) {
	        removeTransitionClass(el, leaveClass);
	      }
	      leaveCancelled && leaveCancelled(el);
	    } else {
	      rm();
	      afterLeave && afterLeave(el);
	    }
	    el._leaveCb = null;
	  });

	  if (delayLeave) {
	    delayLeave(performLeave);
	  } else {
	    performLeave();
	  }

	  function performLeave () {
	    // the delayed leave may have already been cancelled
	    if (cb.cancelled) {
	      return
	    }
	    // record leaving element
	    if (!vnode.data.show && el.parentNode) {
	      (el.parentNode._pending || (el.parentNode._pending = {}))[(vnode.key)] = vnode;
	    }
	    beforeLeave && beforeLeave(el);
	    if (expectsCSS) {
	      addTransitionClass(el, leaveClass);
	      addTransitionClass(el, leaveActiveClass);
	      nextFrame(function () {
	        removeTransitionClass(el, leaveClass);
	        if (!cb.cancelled) {
	          addTransitionClass(el, leaveToClass);
	          if (!userWantsControl) {
	            if (isValidDuration(explicitLeaveDuration)) {
	              setTimeout(cb, explicitLeaveDuration);
	            } else {
	              whenTransitionEnds(el, type, cb);
	            }
	          }
	        }
	      });
	    }
	    leave && leave(el, cb);
	    if (!expectsCSS && !userWantsControl) {
	      cb();
	    }
	  }
	}

	// only used in dev mode
	function checkDuration (val, name, vnode) {
	  if (typeof val !== 'number') {
	    warn(
	      "<transition> explicit " + name + " duration is not a valid number - " +
	      "got " + (JSON.stringify(val)) + ".",
	      vnode.context
	    );
	  } else if (isNaN(val)) {
	    warn(
	      "<transition> explicit " + name + " duration is NaN - " +
	      'the duration expression might be incorrect.',
	      vnode.context
	    );
	  }
	}

	function isValidDuration (val) {
	  return typeof val === 'number' && !isNaN(val)
	}

	/**
	 * Normalize a transition hook's argument length. The hook may be:
	 * - a merged hook (invoker) with the original in .fns
	 * - a wrapped component method (check ._length)
	 * - a plain function (.length)
	 */
	function getHookArgumentsLength (fn) {
	  if (isUndef(fn)) {
	    return false
	  }
	  var invokerFns = fn.fns;
	  if (isDef(invokerFns)) {
	    // invoker
	    return getHookArgumentsLength(
	      Array.isArray(invokerFns)
	        ? invokerFns[0]
	        : invokerFns
	    )
	  } else {
	    return (fn._length || fn.length) > 1
	  }
	}

	function _enter (_, vnode) {
	  if (vnode.data.show !== true) {
	    enter(vnode);
	  }
	}

	var transition = inBrowser ? {
	  create: _enter,
	  activate: _enter,
	  remove: function remove$$1 (vnode, rm) {
	    /* istanbul ignore else */
	    if (vnode.data.show !== true) {
	      leave(vnode, rm);
	    } else {
	      rm();
	    }
	  }
	} : {};

	var platformModules = [
	  attrs,
	  klass,
	  events,
	  domProps,
	  style,
	  transition
	];

	/*  */

	// the directive module should be applied last, after all
	// built-in modules have been applied.
	var modules = platformModules.concat(baseModules);

	var patch = createPatchFunction({ nodeOps: nodeOps, modules: modules });

	/**
	 * Not type checking this file because flow doesn't like attaching
	 * properties to Elements.
	 */

	/* istanbul ignore if */
	if (isIE9) {
	  // http://www.matts411.com/post/internet-explorer-9-oninput/
	  document.addEventListener('selectionchange', function () {
	    var el = document.activeElement;
	    if (el && el.vmodel) {
	      trigger(el, 'input');
	    }
	  });
	}

	var directive = {
	  inserted: function inserted (el, binding, vnode, oldVnode) {
	    if (vnode.tag === 'select') {
	      // #6903
	      if (oldVnode.elm && !oldVnode.elm._vOptions) {
	        mergeVNodeHook(vnode, 'postpatch', function () {
	          directive.componentUpdated(el, binding, vnode);
	        });
	      } else {
	        setSelected(el, binding, vnode.context);
	      }
	      el._vOptions = [].map.call(el.options, getValue);
	    } else if (vnode.tag === 'textarea' || isTextInputType(el.type)) {
	      el._vModifiers = binding.modifiers;
	      if (!binding.modifiers.lazy) {
	        el.addEventListener('compositionstart', onCompositionStart);
	        el.addEventListener('compositionend', onCompositionEnd);
	        // Safari < 10.2 & UIWebView doesn't fire compositionend when
	        // switching focus before confirming composition choice
	        // this also fixes the issue where some browsers e.g. iOS Chrome
	        // fires "change" instead of "input" on autocomplete.
	        el.addEventListener('change', onCompositionEnd);
	        /* istanbul ignore if */
	        if (isIE9) {
	          el.vmodel = true;
	        }
	      }
	    }
	  },

	  componentUpdated: function componentUpdated (el, binding, vnode) {
	    if (vnode.tag === 'select') {
	      setSelected(el, binding, vnode.context);
	      // in case the options rendered by v-for have changed,
	      // it's possible that the value is out-of-sync with the rendered options.
	      // detect such cases and filter out values that no longer has a matching
	      // option in the DOM.
	      var prevOptions = el._vOptions;
	      var curOptions = el._vOptions = [].map.call(el.options, getValue);
	      if (curOptions.some(function (o, i) { return !looseEqual(o, prevOptions[i]); })) {
	        // trigger change event if
	        // no matching option found for at least one value
	        var needReset = el.multiple
	          ? binding.value.some(function (v) { return hasNoMatchingOption(v, curOptions); })
	          : binding.value !== binding.oldValue && hasNoMatchingOption(binding.value, curOptions);
	        if (needReset) {
	          trigger(el, 'change');
	        }
	      }
	    }
	  }
	};

	function setSelected (el, binding, vm) {
	  actuallySetSelected(el, binding, vm);
	  /* istanbul ignore if */
	  if (isIE || isEdge) {
	    setTimeout(function () {
	      actuallySetSelected(el, binding, vm);
	    }, 0);
	  }
	}

	function actuallySetSelected (el, binding, vm) {
	  var value = binding.value;
	  var isMultiple = el.multiple;
	  if (isMultiple && !Array.isArray(value)) {
	     warn(
	      "<select multiple v-model=\"" + (binding.expression) + "\"> " +
	      "expects an Array value for its binding, but got " + (Object.prototype.toString.call(value).slice(8, -1)),
	      vm
	    );
	    return
	  }
	  var selected, option;
	  for (var i = 0, l = el.options.length; i < l; i++) {
	    option = el.options[i];
	    if (isMultiple) {
	      selected = looseIndexOf(value, getValue(option)) > -1;
	      if (option.selected !== selected) {
	        option.selected = selected;
	      }
	    } else {
	      if (looseEqual(getValue(option), value)) {
	        if (el.selectedIndex !== i) {
	          el.selectedIndex = i;
	        }
	        return
	      }
	    }
	  }
	  if (!isMultiple) {
	    el.selectedIndex = -1;
	  }
	}

	function hasNoMatchingOption (value, options) {
	  return options.every(function (o) { return !looseEqual(o, value); })
	}

	function getValue (option) {
	  return '_value' in option
	    ? option._value
	    : option.value
	}

	function onCompositionStart (e) {
	  e.target.composing = true;
	}

	function onCompositionEnd (e) {
	  // prevent triggering an input event for no reason
	  if (!e.target.composing) { return }
	  e.target.composing = false;
	  trigger(e.target, 'input');
	}

	function trigger (el, type) {
	  var e = document.createEvent('HTMLEvents');
	  e.initEvent(type, true, true);
	  el.dispatchEvent(e);
	}

	/*  */

	// recursively search for possible transition defined inside the component root
	function locateNode (vnode) {
	  return vnode.componentInstance && (!vnode.data || !vnode.data.transition)
	    ? locateNode(vnode.componentInstance._vnode)
	    : vnode
	}

	var show = {
	  bind: function bind (el, ref, vnode) {
	    var value = ref.value;

	    vnode = locateNode(vnode);
	    var transition$$1 = vnode.data && vnode.data.transition;
	    var originalDisplay = el.__vOriginalDisplay =
	      el.style.display === 'none' ? '' : el.style.display;
	    if (value && transition$$1) {
	      vnode.data.show = true;
	      enter(vnode, function () {
	        el.style.display = originalDisplay;
	      });
	    } else {
	      el.style.display = value ? originalDisplay : 'none';
	    }
	  },

	  update: function update (el, ref, vnode) {
	    var value = ref.value;
	    var oldValue = ref.oldValue;

	    /* istanbul ignore if */
	    if (!value === !oldValue) { return }
	    vnode = locateNode(vnode);
	    var transition$$1 = vnode.data && vnode.data.transition;
	    if (transition$$1) {
	      vnode.data.show = true;
	      if (value) {
	        enter(vnode, function () {
	          el.style.display = el.__vOriginalDisplay;
	        });
	      } else {
	        leave(vnode, function () {
	          el.style.display = 'none';
	        });
	      }
	    } else {
	      el.style.display = value ? el.__vOriginalDisplay : 'none';
	    }
	  },

	  unbind: function unbind (
	    el,
	    binding,
	    vnode,
	    oldVnode,
	    isDestroy
	  ) {
	    if (!isDestroy) {
	      el.style.display = el.__vOriginalDisplay;
	    }
	  }
	};

	var platformDirectives = {
	  model: directive,
	  show: show
	};

	/*  */

	var transitionProps = {
	  name: String,
	  appear: Boolean,
	  css: Boolean,
	  mode: String,
	  type: String,
	  enterClass: String,
	  leaveClass: String,
	  enterToClass: String,
	  leaveToClass: String,
	  enterActiveClass: String,
	  leaveActiveClass: String,
	  appearClass: String,
	  appearActiveClass: String,
	  appearToClass: String,
	  duration: [Number, String, Object]
	};

	// in case the child is also an abstract component, e.g. <keep-alive>
	// we want to recursively retrieve the real component to be rendered
	function getRealChild (vnode) {
	  var compOptions = vnode && vnode.componentOptions;
	  if (compOptions && compOptions.Ctor.options.abstract) {
	    return getRealChild(getFirstComponentChild(compOptions.children))
	  } else {
	    return vnode
	  }
	}

	function extractTransitionData (comp) {
	  var data = {};
	  var options = comp.$options;
	  // props
	  for (var key in options.propsData) {
	    data[key] = comp[key];
	  }
	  // events.
	  // extract listeners and pass them directly to the transition methods
	  var listeners = options._parentListeners;
	  for (var key$1 in listeners) {
	    data[camelize(key$1)] = listeners[key$1];
	  }
	  return data
	}

	function placeholder (h, rawChild) {
	  if (/\d-keep-alive$/.test(rawChild.tag)) {
	    return h('keep-alive', {
	      props: rawChild.componentOptions.propsData
	    })
	  }
	}

	function hasParentTransition (vnode) {
	  while ((vnode = vnode.parent)) {
	    if (vnode.data.transition) {
	      return true
	    }
	  }
	}

	function isSameChild (child, oldChild) {
	  return oldChild.key === child.key && oldChild.tag === child.tag
	}

	var isNotTextNode = function (c) { return c.tag || isAsyncPlaceholder(c); };

	var isVShowDirective = function (d) { return d.name === 'show'; };

	var Transition = {
	  name: 'transition',
	  props: transitionProps,
	  abstract: true,

	  render: function render (h) {
	    var this$1 = this;

	    var children = this.$slots.default;
	    if (!children) {
	      return
	    }

	    // filter out text nodes (possible whitespaces)
	    children = children.filter(isNotTextNode);
	    /* istanbul ignore if */
	    if (!children.length) {
	      return
	    }

	    // warn multiple elements
	    if ( children.length > 1) {
	      warn(
	        '<transition> can only be used on a single element. Use ' +
	        '<transition-group> for lists.',
	        this.$parent
	      );
	    }

	    var mode = this.mode;

	    // warn invalid mode
	    if (
	      mode && mode !== 'in-out' && mode !== 'out-in'
	    ) {
	      warn(
	        'invalid <transition> mode: ' + mode,
	        this.$parent
	      );
	    }

	    var rawChild = children[0];

	    // if this is a component root node and the component's
	    // parent container node also has transition, skip.
	    if (hasParentTransition(this.$vnode)) {
	      return rawChild
	    }

	    // apply transition data to child
	    // use getRealChild() to ignore abstract components e.g. keep-alive
	    var child = getRealChild(rawChild);
	    /* istanbul ignore if */
	    if (!child) {
	      return rawChild
	    }

	    if (this._leaving) {
	      return placeholder(h, rawChild)
	    }

	    // ensure a key that is unique to the vnode type and to this transition
	    // component instance. This key will be used to remove pending leaving nodes
	    // during entering.
	    var id = "__transition-" + (this._uid) + "-";
	    child.key = child.key == null
	      ? child.isComment
	        ? id + 'comment'
	        : id + child.tag
	      : isPrimitive(child.key)
	        ? (String(child.key).indexOf(id) === 0 ? child.key : id + child.key)
	        : child.key;

	    var data = (child.data || (child.data = {})).transition = extractTransitionData(this);
	    var oldRawChild = this._vnode;
	    var oldChild = getRealChild(oldRawChild);

	    // mark v-show
	    // so that the transition module can hand over the control to the directive
	    if (child.data.directives && child.data.directives.some(isVShowDirective)) {
	      child.data.show = true;
	    }

	    if (
	      oldChild &&
	      oldChild.data &&
	      !isSameChild(child, oldChild) &&
	      !isAsyncPlaceholder(oldChild) &&
	      // #6687 component root is a comment node
	      !(oldChild.componentInstance && oldChild.componentInstance._vnode.isComment)
	    ) {
	      // replace old child transition data with fresh one
	      // important for dynamic transitions!
	      var oldData = oldChild.data.transition = extend({}, data);
	      // handle transition mode
	      if (mode === 'out-in') {
	        // return placeholder node and queue update when leave finishes
	        this._leaving = true;
	        mergeVNodeHook(oldData, 'afterLeave', function () {
	          this$1._leaving = false;
	          this$1.$forceUpdate();
	        });
	        return placeholder(h, rawChild)
	      } else if (mode === 'in-out') {
	        if (isAsyncPlaceholder(child)) {
	          return oldRawChild
	        }
	        var delayedLeave;
	        var performLeave = function () { delayedLeave(); };
	        mergeVNodeHook(data, 'afterEnter', performLeave);
	        mergeVNodeHook(data, 'enterCancelled', performLeave);
	        mergeVNodeHook(oldData, 'delayLeave', function (leave) { delayedLeave = leave; });
	      }
	    }

	    return rawChild
	  }
	};

	/*  */

	var props = extend({
	  tag: String,
	  moveClass: String
	}, transitionProps);

	delete props.mode;

	var TransitionGroup = {
	  props: props,

	  beforeMount: function beforeMount () {
	    var this$1 = this;

	    var update = this._update;
	    this._update = function (vnode, hydrating) {
	      var restoreActiveInstance = setActiveInstance(this$1);
	      // force removing pass
	      this$1.__patch__(
	        this$1._vnode,
	        this$1.kept,
	        false, // hydrating
	        true // removeOnly (!important, avoids unnecessary moves)
	      );
	      this$1._vnode = this$1.kept;
	      restoreActiveInstance();
	      update.call(this$1, vnode, hydrating);
	    };
	  },

	  render: function render (h) {
	    var tag = this.tag || this.$vnode.data.tag || 'span';
	    var map = Object.create(null);
	    var prevChildren = this.prevChildren = this.children;
	    var rawChildren = this.$slots.default || [];
	    var children = this.children = [];
	    var transitionData = extractTransitionData(this);

	    for (var i = 0; i < rawChildren.length; i++) {
	      var c = rawChildren[i];
	      if (c.tag) {
	        if (c.key != null && String(c.key).indexOf('__vlist') !== 0) {
	          children.push(c);
	          map[c.key] = c
	          ;(c.data || (c.data = {})).transition = transitionData;
	        } else {
	          var opts = c.componentOptions;
	          var name = opts ? (opts.Ctor.options.name || opts.tag || '') : c.tag;
	          warn(("<transition-group> children must be keyed: <" + name + ">"));
	        }
	      }
	    }

	    if (prevChildren) {
	      var kept = [];
	      var removed = [];
	      for (var i$1 = 0; i$1 < prevChildren.length; i$1++) {
	        var c$1 = prevChildren[i$1];
	        c$1.data.transition = transitionData;
	        c$1.data.pos = c$1.elm.getBoundingClientRect();
	        if (map[c$1.key]) {
	          kept.push(c$1);
	        } else {
	          removed.push(c$1);
	        }
	      }
	      this.kept = h(tag, null, kept);
	      this.removed = removed;
	    }

	    return h(tag, null, children)
	  },

	  updated: function updated () {
	    var children = this.prevChildren;
	    var moveClass = this.moveClass || ((this.name || 'v') + '-move');
	    if (!children.length || !this.hasMove(children[0].elm, moveClass)) {
	      return
	    }

	    // we divide the work into three loops to avoid mixing DOM reads and writes
	    // in each iteration - which helps prevent layout thrashing.
	    children.forEach(callPendingCbs);
	    children.forEach(recordPosition);
	    children.forEach(applyTranslation);

	    // force reflow to put everything in position
	    // assign to this to avoid being removed in tree-shaking
	    // $flow-disable-line
	    this._reflow = document.body.offsetHeight;

	    children.forEach(function (c) {
	      if (c.data.moved) {
	        var el = c.elm;
	        var s = el.style;
	        addTransitionClass(el, moveClass);
	        s.transform = s.WebkitTransform = s.transitionDuration = '';
	        el.addEventListener(transitionEndEvent, el._moveCb = function cb (e) {
	          if (e && e.target !== el) {
	            return
	          }
	          if (!e || /transform$/.test(e.propertyName)) {
	            el.removeEventListener(transitionEndEvent, cb);
	            el._moveCb = null;
	            removeTransitionClass(el, moveClass);
	          }
	        });
	      }
	    });
	  },

	  methods: {
	    hasMove: function hasMove (el, moveClass) {
	      /* istanbul ignore if */
	      if (!hasTransition) {
	        return false
	      }
	      /* istanbul ignore if */
	      if (this._hasMove) {
	        return this._hasMove
	      }
	      // Detect whether an element with the move class applied has
	      // CSS transitions. Since the element may be inside an entering
	      // transition at this very moment, we make a clone of it and remove
	      // all other transition classes applied to ensure only the move class
	      // is applied.
	      var clone = el.cloneNode();
	      if (el._transitionClasses) {
	        el._transitionClasses.forEach(function (cls) { removeClass(clone, cls); });
	      }
	      addClass(clone, moveClass);
	      clone.style.display = 'none';
	      this.$el.appendChild(clone);
	      var info = getTransitionInfo(clone);
	      this.$el.removeChild(clone);
	      return (this._hasMove = info.hasTransform)
	    }
	  }
	};

	function callPendingCbs (c) {
	  /* istanbul ignore if */
	  if (c.elm._moveCb) {
	    c.elm._moveCb();
	  }
	  /* istanbul ignore if */
	  if (c.elm._enterCb) {
	    c.elm._enterCb();
	  }
	}

	function recordPosition (c) {
	  c.data.newPos = c.elm.getBoundingClientRect();
	}

	function applyTranslation (c) {
	  var oldPos = c.data.pos;
	  var newPos = c.data.newPos;
	  var dx = oldPos.left - newPos.left;
	  var dy = oldPos.top - newPos.top;
	  if (dx || dy) {
	    c.data.moved = true;
	    var s = c.elm.style;
	    s.transform = s.WebkitTransform = "translate(" + dx + "px," + dy + "px)";
	    s.transitionDuration = '0s';
	  }
	}

	var platformComponents = {
	  Transition: Transition,
	  TransitionGroup: TransitionGroup
	};

	/*  */

	// install platform specific utils
	Vue.config.mustUseProp = mustUseProp;
	Vue.config.isReservedTag = isReservedTag;
	Vue.config.isReservedAttr = isReservedAttr;
	Vue.config.getTagNamespace = getTagNamespace;
	Vue.config.isUnknownElement = isUnknownElement;

	// install platform runtime directives & components
	extend(Vue.options.directives, platformDirectives);
	extend(Vue.options.components, platformComponents);

	// install platform patch function
	Vue.prototype.__patch__ = inBrowser ? patch : noop;

	// public mount method
	Vue.prototype.$mount = function (
	  el,
	  hydrating
	) {
	  el = el && inBrowser ? query(el) : undefined;
	  return mountComponent(this, el, hydrating)
	};

	// devtools global hook
	/* istanbul ignore next */
	if (inBrowser) {
	  setTimeout(function () {
	    if (config.devtools) {
	      if (devtools) {
	        devtools.emit('init', Vue);
	      } else {
	        console[console.info ? 'info' : 'log'](
	          'Download the Vue Devtools extension for a better development experience:\n' +
	          'https://github.com/vuejs/vue-devtools'
	        );
	      }
	    }
	    if (
	      config.productionTip !== false &&
	      typeof console !== 'undefined'
	    ) {
	      console[console.info ? 'info' : 'log'](
	        "You are running Vue in development mode.\n" +
	        "Make sure to turn on production mode when deploying for production.\n" +
	        "See more tips at https://vuejs.org/guide/deployment.html"
	      );
	    }
	  }, 0);
	}

	/*!
	  * vue-router v3.3.0
	  * (c) 2020 Evan You
	  * @license MIT
	  */
	/*  */

	function assert (condition, message) {
	  if (!condition) {
	    throw new Error(("[vue-router] " + message))
	  }
	}

	function warn$1 (condition, message) {
	  if ( !condition) {
	    typeof console !== 'undefined' && console.warn(("[vue-router] " + message));
	  }
	}

	function isError (err) {
	  return Object.prototype.toString.call(err).indexOf('Error') > -1
	}

	function isRouterError (err, errorType) {
	  return isError(err) && err._isRouter && (errorType == null || err.type === errorType)
	}

	function extend$1 (a, b) {
	  for (var key in b) {
	    a[key] = b[key];
	  }
	  return a
	}

	var View = {
	  name: 'RouterView',
	  functional: true,
	  props: {
	    name: {
	      type: String,
	      default: 'default'
	    }
	  },
	  render: function render (_, ref) {
	    var props = ref.props;
	    var children = ref.children;
	    var parent = ref.parent;
	    var data = ref.data;

	    // used by devtools to display a router-view badge
	    data.routerView = true;

	    // directly use parent context's createElement() function
	    // so that components rendered by router-view can resolve named slots
	    var h = parent.$createElement;
	    var name = props.name;
	    var route = parent.$route;
	    var cache = parent._routerViewCache || (parent._routerViewCache = {});

	    // determine current view depth, also check to see if the tree
	    // has been toggled inactive but kept-alive.
	    var depth = 0;
	    var inactive = false;
	    while (parent && parent._routerRoot !== parent) {
	      var vnodeData = parent.$vnode ? parent.$vnode.data : {};
	      if (vnodeData.routerView) {
	        depth++;
	      }
	      if (vnodeData.keepAlive && parent._directInactive && parent._inactive) {
	        inactive = true;
	      }
	      parent = parent.$parent;
	    }
	    data.routerViewDepth = depth;

	    // render previous view if the tree is inactive and kept-alive
	    if (inactive) {
	      var cachedData = cache[name];
	      var cachedComponent = cachedData && cachedData.component;
	      if (cachedComponent) {
	        // #2301
	        // pass props
	        if (cachedData.configProps) {
	          fillPropsinData(cachedComponent, data, cachedData.route, cachedData.configProps);
	        }
	        return h(cachedComponent, data, children)
	      } else {
	        // render previous empty view
	        return h()
	      }
	    }

	    var matched = route.matched[depth];
	    var component = matched && matched.components[name];

	    // render empty node if no matched route or no config component
	    if (!matched || !component) {
	      cache[name] = null;
	      return h()
	    }

	    // cache component
	    cache[name] = { component: component };

	    // attach instance registration hook
	    // this will be called in the instance's injected lifecycle hooks
	    data.registerRouteInstance = function (vm, val) {
	      // val could be undefined for unregistration
	      var current = matched.instances[name];
	      if (
	        (val && current !== vm) ||
	        (!val && current === vm)
	      ) {
	        matched.instances[name] = val;
	      }
	    }

	    // also register instance in prepatch hook
	    // in case the same component instance is reused across different routes
	    ;(data.hook || (data.hook = {})).prepatch = function (_, vnode) {
	      matched.instances[name] = vnode.componentInstance;
	    };

	    // register instance in init hook
	    // in case kept-alive component be actived when routes changed
	    data.hook.init = function (vnode) {
	      if (vnode.data.keepAlive &&
	        vnode.componentInstance &&
	        vnode.componentInstance !== matched.instances[name]
	      ) {
	        matched.instances[name] = vnode.componentInstance;
	      }
	    };

	    var configProps = matched.props && matched.props[name];
	    // save route and configProps in cachce
	    if (configProps) {
	      extend$1(cache[name], {
	        route: route,
	        configProps: configProps
	      });
	      fillPropsinData(component, data, route, configProps);
	    }

	    return h(component, data, children)
	  }
	};

	function fillPropsinData (component, data, route, configProps) {
	  // resolve props
	  var propsToPass = data.props = resolveProps(route, configProps);
	  if (propsToPass) {
	    // clone to prevent mutation
	    propsToPass = data.props = extend$1({}, propsToPass);
	    // pass non-declared props as attrs
	    var attrs = data.attrs = data.attrs || {};
	    for (var key in propsToPass) {
	      if (!component.props || !(key in component.props)) {
	        attrs[key] = propsToPass[key];
	        delete propsToPass[key];
	      }
	    }
	  }
	}

	function resolveProps (route, config) {
	  switch (typeof config) {
	    case 'undefined':
	      return
	    case 'object':
	      return config
	    case 'function':
	      return config(route)
	    case 'boolean':
	      return config ? route.params : undefined
	    default:
	      {
	        warn$1(
	          false,
	          "props in \"" + (route.path) + "\" is a " + (typeof config) + ", " +
	          "expecting an object, function or boolean."
	        );
	      }
	  }
	}

	/*  */

	var encodeReserveRE = /[!'()*]/g;
	var encodeReserveReplacer = function (c) { return '%' + c.charCodeAt(0).toString(16); };
	var commaRE = /%2C/g;

	// fixed encodeURIComponent which is more conformant to RFC3986:
	// - escapes [!'()*]
	// - preserve commas
	var encode = function (str) { return encodeURIComponent(str)
	  .replace(encodeReserveRE, encodeReserveReplacer)
	  .replace(commaRE, ','); };

	var decode = decodeURIComponent;

	function resolveQuery (
	  query,
	  extraQuery,
	  _parseQuery
	) {
	  if ( extraQuery === void 0 ) extraQuery = {};

	  var parse = _parseQuery || parseQuery;
	  var parsedQuery;
	  try {
	    parsedQuery = parse(query || '');
	  } catch (e) {
	     warn$1(false, e.message);
	    parsedQuery = {};
	  }
	  for (var key in extraQuery) {
	    parsedQuery[key] = extraQuery[key];
	  }
	  return parsedQuery
	}

	function parseQuery (query) {
	  var res = {};

	  query = query.trim().replace(/^(\?|#|&)/, '');

	  if (!query) {
	    return res
	  }

	  query.split('&').forEach(function (param) {
	    var parts = param.replace(/\+/g, ' ').split('=');
	    var key = decode(parts.shift());
	    var val = parts.length > 0
	      ? decode(parts.join('='))
	      : null;

	    if (res[key] === undefined) {
	      res[key] = val;
	    } else if (Array.isArray(res[key])) {
	      res[key].push(val);
	    } else {
	      res[key] = [res[key], val];
	    }
	  });

	  return res
	}

	function stringifyQuery (obj) {
	  var res = obj ? Object.keys(obj).map(function (key) {
	    var val = obj[key];

	    if (val === undefined) {
	      return ''
	    }

	    if (val === null) {
	      return encode(key)
	    }

	    if (Array.isArray(val)) {
	      var result = [];
	      val.forEach(function (val2) {
	        if (val2 === undefined) {
	          return
	        }
	        if (val2 === null) {
	          result.push(encode(key));
	        } else {
	          result.push(encode(key) + '=' + encode(val2));
	        }
	      });
	      return result.join('&')
	    }

	    return encode(key) + '=' + encode(val)
	  }).filter(function (x) { return x.length > 0; }).join('&') : null;
	  return res ? ("?" + res) : ''
	}

	/*  */

	var trailingSlashRE = /\/?$/;

	function createRoute (
	  record,
	  location,
	  redirectedFrom,
	  router
	) {
	  var stringifyQuery = router && router.options.stringifyQuery;

	  var query = location.query || {};
	  try {
	    query = clone(query);
	  } catch (e) {}

	  var route = {
	    name: location.name || (record && record.name),
	    meta: (record && record.meta) || {},
	    path: location.path || '/',
	    hash: location.hash || '',
	    query: query,
	    params: location.params || {},
	    fullPath: getFullPath(location, stringifyQuery),
	    matched: record ? formatMatch(record) : []
	  };
	  if (redirectedFrom) {
	    route.redirectedFrom = getFullPath(redirectedFrom, stringifyQuery);
	  }
	  return Object.freeze(route)
	}

	function clone (value) {
	  if (Array.isArray(value)) {
	    return value.map(clone)
	  } else if (value && typeof value === 'object') {
	    var res = {};
	    for (var key in value) {
	      res[key] = clone(value[key]);
	    }
	    return res
	  } else {
	    return value
	  }
	}

	// the starting route that represents the initial state
	var START = createRoute(null, {
	  path: '/'
	});

	function formatMatch (record) {
	  var res = [];
	  while (record) {
	    res.unshift(record);
	    record = record.parent;
	  }
	  return res
	}

	function getFullPath (
	  ref,
	  _stringifyQuery
	) {
	  var path = ref.path;
	  var query = ref.query; if ( query === void 0 ) query = {};
	  var hash = ref.hash; if ( hash === void 0 ) hash = '';

	  var stringify = _stringifyQuery || stringifyQuery;
	  return (path || '/') + stringify(query) + hash
	}

	function isSameRoute (a, b) {
	  if (b === START) {
	    return a === b
	  } else if (!b) {
	    return false
	  } else if (a.path && b.path) {
	    return (
	      a.path.replace(trailingSlashRE, '') === b.path.replace(trailingSlashRE, '') &&
	      a.hash === b.hash &&
	      isObjectEqual(a.query, b.query)
	    )
	  } else if (a.name && b.name) {
	    return (
	      a.name === b.name &&
	      a.hash === b.hash &&
	      isObjectEqual(a.query, b.query) &&
	      isObjectEqual(a.params, b.params)
	    )
	  } else {
	    return false
	  }
	}

	function isObjectEqual (a, b) {
	  if ( a === void 0 ) a = {};
	  if ( b === void 0 ) b = {};

	  // handle null value #1566
	  if (!a || !b) { return a === b }
	  var aKeys = Object.keys(a);
	  var bKeys = Object.keys(b);
	  if (aKeys.length !== bKeys.length) {
	    return false
	  }
	  return aKeys.every(function (key) {
	    var aVal = a[key];
	    var bVal = b[key];
	    // check nested equality
	    if (typeof aVal === 'object' && typeof bVal === 'object') {
	      return isObjectEqual(aVal, bVal)
	    }
	    return String(aVal) === String(bVal)
	  })
	}

	function isIncludedRoute (current, target) {
	  return (
	    current.path.replace(trailingSlashRE, '/').indexOf(
	      target.path.replace(trailingSlashRE, '/')
	    ) === 0 &&
	    (!target.hash || current.hash === target.hash) &&
	    queryIncludes(current.query, target.query)
	  )
	}

	function queryIncludes (current, target) {
	  for (var key in target) {
	    if (!(key in current)) {
	      return false
	    }
	  }
	  return true
	}

	/*  */

	function resolvePath (
	  relative,
	  base,
	  append
	) {
	  var firstChar = relative.charAt(0);
	  if (firstChar === '/') {
	    return relative
	  }

	  if (firstChar === '?' || firstChar === '#') {
	    return base + relative
	  }

	  var stack = base.split('/');

	  // remove trailing segment if:
	  // - not appending
	  // - appending to trailing slash (last segment is empty)
	  if (!append || !stack[stack.length - 1]) {
	    stack.pop();
	  }

	  // resolve relative path
	  var segments = relative.replace(/^\//, '').split('/');
	  for (var i = 0; i < segments.length; i++) {
	    var segment = segments[i];
	    if (segment === '..') {
	      stack.pop();
	    } else if (segment !== '.') {
	      stack.push(segment);
	    }
	  }

	  // ensure leading slash
	  if (stack[0] !== '') {
	    stack.unshift('');
	  }

	  return stack.join('/')
	}

	function parsePath$1 (path) {
	  var hash = '';
	  var query = '';

	  var hashIndex = path.indexOf('#');
	  if (hashIndex >= 0) {
	    hash = path.slice(hashIndex);
	    path = path.slice(0, hashIndex);
	  }

	  var queryIndex = path.indexOf('?');
	  if (queryIndex >= 0) {
	    query = path.slice(queryIndex + 1);
	    path = path.slice(0, queryIndex);
	  }

	  return {
	    path: path,
	    query: query,
	    hash: hash
	  }
	}

	function cleanPath (path) {
	  return path.replace(/\/\//g, '/')
	}

	var isarray = Array.isArray || function (arr) {
	  return Object.prototype.toString.call(arr) == '[object Array]';
	};

	/**
	 * Expose `pathToRegexp`.
	 */
	var pathToRegexp_1 = pathToRegexp;
	var parse_1 = parse;
	var compile_1 = compile;
	var tokensToFunction_1 = tokensToFunction;
	var tokensToRegExp_1 = tokensToRegExp;

	/**
	 * The main path matching regexp utility.
	 *
	 * @type {RegExp}
	 */
	var PATH_REGEXP = new RegExp([
	  // Match escaped characters that would otherwise appear in future matches.
	  // This allows the user to escape special characters that won't transform.
	  '(\\\\.)',
	  // Match Express-style parameters and un-named parameters with a prefix
	  // and optional suffixes. Matches appear as:
	  //
	  // "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
	  // "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
	  // "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
	  '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'
	].join('|'), 'g');

	/**
	 * Parse a string for the raw tokens.
	 *
	 * @param  {string}  str
	 * @param  {Object=} options
	 * @return {!Array}
	 */
	function parse (str, options) {
	  var tokens = [];
	  var key = 0;
	  var index = 0;
	  var path = '';
	  var defaultDelimiter = options && options.delimiter || '/';
	  var res;

	  while ((res = PATH_REGEXP.exec(str)) != null) {
	    var m = res[0];
	    var escaped = res[1];
	    var offset = res.index;
	    path += str.slice(index, offset);
	    index = offset + m.length;

	    // Ignore already escaped sequences.
	    if (escaped) {
	      path += escaped[1];
	      continue
	    }

	    var next = str[index];
	    var prefix = res[2];
	    var name = res[3];
	    var capture = res[4];
	    var group = res[5];
	    var modifier = res[6];
	    var asterisk = res[7];

	    // Push the current path onto the tokens.
	    if (path) {
	      tokens.push(path);
	      path = '';
	    }

	    var partial = prefix != null && next != null && next !== prefix;
	    var repeat = modifier === '+' || modifier === '*';
	    var optional = modifier === '?' || modifier === '*';
	    var delimiter = res[2] || defaultDelimiter;
	    var pattern = capture || group;

	    tokens.push({
	      name: name || key++,
	      prefix: prefix || '',
	      delimiter: delimiter,
	      optional: optional,
	      repeat: repeat,
	      partial: partial,
	      asterisk: !!asterisk,
	      pattern: pattern ? escapeGroup(pattern) : (asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?')
	    });
	  }

	  // Match any characters still remaining.
	  if (index < str.length) {
	    path += str.substr(index);
	  }

	  // If the path exists, push it onto the end.
	  if (path) {
	    tokens.push(path);
	  }

	  return tokens
	}

	/**
	 * Compile a string to a template function for the path.
	 *
	 * @param  {string}             str
	 * @param  {Object=}            options
	 * @return {!function(Object=, Object=)}
	 */
	function compile (str, options) {
	  return tokensToFunction(parse(str, options), options)
	}

	/**
	 * Prettier encoding of URI path segments.
	 *
	 * @param  {string}
	 * @return {string}
	 */
	function encodeURIComponentPretty (str) {
	  return encodeURI(str).replace(/[\/?#]/g, function (c) {
	    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
	  })
	}

	/**
	 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
	 *
	 * @param  {string}
	 * @return {string}
	 */
	function encodeAsterisk (str) {
	  return encodeURI(str).replace(/[?#]/g, function (c) {
	    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
	  })
	}

	/**
	 * Expose a method for transforming tokens into the path function.
	 */
	function tokensToFunction (tokens, options) {
	  // Compile all the tokens into regexps.
	  var matches = new Array(tokens.length);

	  // Compile all the patterns before compilation.
	  for (var i = 0; i < tokens.length; i++) {
	    if (typeof tokens[i] === 'object') {
	      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$', flags(options));
	    }
	  }

	  return function (obj, opts) {
	    var path = '';
	    var data = obj || {};
	    var options = opts || {};
	    var encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent;

	    for (var i = 0; i < tokens.length; i++) {
	      var token = tokens[i];

	      if (typeof token === 'string') {
	        path += token;

	        continue
	      }

	      var value = data[token.name];
	      var segment;

	      if (value == null) {
	        if (token.optional) {
	          // Prepend partial segment prefixes.
	          if (token.partial) {
	            path += token.prefix;
	          }

	          continue
	        } else {
	          throw new TypeError('Expected "' + token.name + '" to be defined')
	        }
	      }

	      if (isarray(value)) {
	        if (!token.repeat) {
	          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`')
	        }

	        if (value.length === 0) {
	          if (token.optional) {
	            continue
	          } else {
	            throw new TypeError('Expected "' + token.name + '" to not be empty')
	          }
	        }

	        for (var j = 0; j < value.length; j++) {
	          segment = encode(value[j]);

	          if (!matches[i].test(segment)) {
	            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`')
	          }

	          path += (j === 0 ? token.prefix : token.delimiter) + segment;
	        }

	        continue
	      }

	      segment = token.asterisk ? encodeAsterisk(value) : encode(value);

	      if (!matches[i].test(segment)) {
	        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"')
	      }

	      path += token.prefix + segment;
	    }

	    return path
	  }
	}

	/**
	 * Escape a regular expression string.
	 *
	 * @param  {string} str
	 * @return {string}
	 */
	function escapeString (str) {
	  return str.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1')
	}

	/**
	 * Escape the capturing group by escaping special characters and meaning.
	 *
	 * @param  {string} group
	 * @return {string}
	 */
	function escapeGroup (group) {
	  return group.replace(/([=!:$\/()])/g, '\\$1')
	}

	/**
	 * Attach the keys as a property of the regexp.
	 *
	 * @param  {!RegExp} re
	 * @param  {Array}   keys
	 * @return {!RegExp}
	 */
	function attachKeys (re, keys) {
	  re.keys = keys;
	  return re
	}

	/**
	 * Get the flags for a regexp from the options.
	 *
	 * @param  {Object} options
	 * @return {string}
	 */
	function flags (options) {
	  return options && options.sensitive ? '' : 'i'
	}

	/**
	 * Pull out keys from a regexp.
	 *
	 * @param  {!RegExp} path
	 * @param  {!Array}  keys
	 * @return {!RegExp}
	 */
	function regexpToRegexp (path, keys) {
	  // Use a negative lookahead to match only capturing groups.
	  var groups = path.source.match(/\((?!\?)/g);

	  if (groups) {
	    for (var i = 0; i < groups.length; i++) {
	      keys.push({
	        name: i,
	        prefix: null,
	        delimiter: null,
	        optional: false,
	        repeat: false,
	        partial: false,
	        asterisk: false,
	        pattern: null
	      });
	    }
	  }

	  return attachKeys(path, keys)
	}

	/**
	 * Transform an array into a regexp.
	 *
	 * @param  {!Array}  path
	 * @param  {Array}   keys
	 * @param  {!Object} options
	 * @return {!RegExp}
	 */
	function arrayToRegexp (path, keys, options) {
	  var parts = [];

	  for (var i = 0; i < path.length; i++) {
	    parts.push(pathToRegexp(path[i], keys, options).source);
	  }

	  var regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options));

	  return attachKeys(regexp, keys)
	}

	/**
	 * Create a path regexp from string input.
	 *
	 * @param  {string}  path
	 * @param  {!Array}  keys
	 * @param  {!Object} options
	 * @return {!RegExp}
	 */
	function stringToRegexp (path, keys, options) {
	  return tokensToRegExp(parse(path, options), keys, options)
	}

	/**
	 * Expose a function for taking tokens and returning a RegExp.
	 *
	 * @param  {!Array}          tokens
	 * @param  {(Array|Object)=} keys
	 * @param  {Object=}         options
	 * @return {!RegExp}
	 */
	function tokensToRegExp (tokens, keys, options) {
	  if (!isarray(keys)) {
	    options = /** @type {!Object} */ (keys || options);
	    keys = [];
	  }

	  options = options || {};

	  var strict = options.strict;
	  var end = options.end !== false;
	  var route = '';

	  // Iterate over the tokens and create our regexp string.
	  for (var i = 0; i < tokens.length; i++) {
	    var token = tokens[i];

	    if (typeof token === 'string') {
	      route += escapeString(token);
	    } else {
	      var prefix = escapeString(token.prefix);
	      var capture = '(?:' + token.pattern + ')';

	      keys.push(token);

	      if (token.repeat) {
	        capture += '(?:' + prefix + capture + ')*';
	      }

	      if (token.optional) {
	        if (!token.partial) {
	          capture = '(?:' + prefix + '(' + capture + '))?';
	        } else {
	          capture = prefix + '(' + capture + ')?';
	        }
	      } else {
	        capture = prefix + '(' + capture + ')';
	      }

	      route += capture;
	    }
	  }

	  var delimiter = escapeString(options.delimiter || '/');
	  var endsWithDelimiter = route.slice(-delimiter.length) === delimiter;

	  // In non-strict mode we allow a slash at the end of match. If the path to
	  // match already ends with a slash, we remove it for consistency. The slash
	  // is valid at the end of a path match, not in the middle. This is important
	  // in non-ending mode, where "/test/" shouldn't match "/test//route".
	  if (!strict) {
	    route = (endsWithDelimiter ? route.slice(0, -delimiter.length) : route) + '(?:' + delimiter + '(?=$))?';
	  }

	  if (end) {
	    route += '$';
	  } else {
	    // In non-ending mode, we need the capturing groups to match as much as
	    // possible by using a positive lookahead to the end or next path segment.
	    route += strict && endsWithDelimiter ? '' : '(?=' + delimiter + '|$)';
	  }

	  return attachKeys(new RegExp('^' + route, flags(options)), keys)
	}

	/**
	 * Normalize the given path string, returning a regular expression.
	 *
	 * An empty array can be passed in for the keys, which will hold the
	 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
	 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
	 *
	 * @param  {(string|RegExp|Array)} path
	 * @param  {(Array|Object)=}       keys
	 * @param  {Object=}               options
	 * @return {!RegExp}
	 */
	function pathToRegexp (path, keys, options) {
	  if (!isarray(keys)) {
	    options = /** @type {!Object} */ (keys || options);
	    keys = [];
	  }

	  options = options || {};

	  if (path instanceof RegExp) {
	    return regexpToRegexp(path, /** @type {!Array} */ (keys))
	  }

	  if (isarray(path)) {
	    return arrayToRegexp(/** @type {!Array} */ (path), /** @type {!Array} */ (keys), options)
	  }

	  return stringToRegexp(/** @type {string} */ (path), /** @type {!Array} */ (keys), options)
	}
	pathToRegexp_1.parse = parse_1;
	pathToRegexp_1.compile = compile_1;
	pathToRegexp_1.tokensToFunction = tokensToFunction_1;
	pathToRegexp_1.tokensToRegExp = tokensToRegExp_1;

	/*  */

	// $flow-disable-line
	var regexpCompileCache = Object.create(null);

	function fillParams (
	  path,
	  params,
	  routeMsg
	) {
	  params = params || {};
	  try {
	    var filler =
	      regexpCompileCache[path] ||
	      (regexpCompileCache[path] = pathToRegexp_1.compile(path));

	    // Fix #2505 resolving asterisk routes { name: 'not-found', params: { pathMatch: '/not-found' }}
	    // and fix #3106 so that you can work with location descriptor object having params.pathMatch equal to empty string
	    if (typeof params.pathMatch === 'string') { params[0] = params.pathMatch; }

	    return filler(params, { pretty: true })
	  } catch (e) {
	    {
	      // Fix #3072 no warn if `pathMatch` is string
	      warn$1(typeof params.pathMatch === 'string', ("missing param for " + routeMsg + ": " + (e.message)));
	    }
	    return ''
	  } finally {
	    // delete the 0 if it was added
	    delete params[0];
	  }
	}

	/*  */

	function normalizeLocation (
	  raw,
	  current,
	  append,
	  router
	) {
	  var next = typeof raw === 'string' ? { path: raw } : raw;
	  // named target
	  if (next._normalized) {
	    return next
	  } else if (next.name) {
	    next = extend$1({}, raw);
	    var params = next.params;
	    if (params && typeof params === 'object') {
	      next.params = extend$1({}, params);
	    }
	    return next
	  }

	  // relative params
	  if (!next.path && next.params && current) {
	    next = extend$1({}, next);
	    next._normalized = true;
	    var params$1 = extend$1(extend$1({}, current.params), next.params);
	    if (current.name) {
	      next.name = current.name;
	      next.params = params$1;
	    } else if (current.matched.length) {
	      var rawPath = current.matched[current.matched.length - 1].path;
	      next.path = fillParams(rawPath, params$1, ("path " + (current.path)));
	    } else {
	      warn$1(false, "relative params navigation requires a current route.");
	    }
	    return next
	  }

	  var parsedPath = parsePath$1(next.path || '');
	  var basePath = (current && current.path) || '/';
	  var path = parsedPath.path
	    ? resolvePath(parsedPath.path, basePath, append || next.append)
	    : basePath;

	  var query = resolveQuery(
	    parsedPath.query,
	    next.query,
	    router && router.options.parseQuery
	  );

	  var hash = next.hash || parsedPath.hash;
	  if (hash && hash.charAt(0) !== '#') {
	    hash = "#" + hash;
	  }

	  return {
	    _normalized: true,
	    path: path,
	    query: query,
	    hash: hash
	  }
	}

	/*  */

	// work around weird flow bug
	var toTypes = [String, Object];
	var eventTypes = [String, Array];

	var noop$1 = function () {};

	var Link = {
	  name: 'RouterLink',
	  props: {
	    to: {
	      type: toTypes,
	      required: true
	    },
	    tag: {
	      type: String,
	      default: 'a'
	    },
	    exact: Boolean,
	    append: Boolean,
	    replace: Boolean,
	    activeClass: String,
	    exactActiveClass: String,
	    ariaCurrentValue: {
	      type: String,
	      default: 'page'
	    },
	    event: {
	      type: eventTypes,
	      default: 'click'
	    }
	  },
	  render: function render (h) {
	    var this$1 = this;

	    var router = this.$router;
	    var current = this.$route;
	    var ref = router.resolve(
	      this.to,
	      current,
	      this.append
	    );
	    var location = ref.location;
	    var route = ref.route;
	    var href = ref.href;

	    var classes = {};
	    var globalActiveClass = router.options.linkActiveClass;
	    var globalExactActiveClass = router.options.linkExactActiveClass;
	    // Support global empty active class
	    var activeClassFallback =
	      globalActiveClass == null ? 'router-link-active' : globalActiveClass;
	    var exactActiveClassFallback =
	      globalExactActiveClass == null
	        ? 'router-link-exact-active'
	        : globalExactActiveClass;
	    var activeClass =
	      this.activeClass == null ? activeClassFallback : this.activeClass;
	    var exactActiveClass =
	      this.exactActiveClass == null
	        ? exactActiveClassFallback
	        : this.exactActiveClass;

	    var compareTarget = route.redirectedFrom
	      ? createRoute(null, normalizeLocation(route.redirectedFrom), null, router)
	      : route;

	    classes[exactActiveClass] = isSameRoute(current, compareTarget);
	    classes[activeClass] = this.exact
	      ? classes[exactActiveClass]
	      : isIncludedRoute(current, compareTarget);

	    var ariaCurrentValue = classes[exactActiveClass] ? this.ariaCurrentValue : null;

	    var handler = function (e) {
	      if (guardEvent(e)) {
	        if (this$1.replace) {
	          router.replace(location, noop$1);
	        } else {
	          router.push(location, noop$1);
	        }
	      }
	    };

	    var on = { click: guardEvent };
	    if (Array.isArray(this.event)) {
	      this.event.forEach(function (e) {
	        on[e] = handler;
	      });
	    } else {
	      on[this.event] = handler;
	    }

	    var data = { class: classes };

	    var scopedSlot =
	      !this.$scopedSlots.$hasNormal &&
	      this.$scopedSlots.default &&
	      this.$scopedSlots.default({
	        href: href,
	        route: route,
	        navigate: handler,
	        isActive: classes[activeClass],
	        isExactActive: classes[exactActiveClass]
	      });

	    if (scopedSlot) {
	      if (scopedSlot.length === 1) {
	        return scopedSlot[0]
	      } else if (scopedSlot.length > 1 || !scopedSlot.length) {
	        {
	          warn$1(
	            false,
	            ("RouterLink with to=\"" + (this.to) + "\" is trying to use a scoped slot but it didn't provide exactly one child. Wrapping the content with a span element.")
	          );
	        }
	        return scopedSlot.length === 0 ? h() : h('span', {}, scopedSlot)
	      }
	    }

	    if (this.tag === 'a') {
	      data.on = on;
	      data.attrs = { href: href, 'aria-current': ariaCurrentValue };
	    } else {
	      // find the first <a> child and apply listener and href
	      var a = findAnchor(this.$slots.default);
	      if (a) {
	        // in case the <a> is a static node
	        a.isStatic = false;
	        var aData = (a.data = extend$1({}, a.data));
	        aData.on = aData.on || {};
	        // transform existing events in both objects into arrays so we can push later
	        for (var event in aData.on) {
	          var handler$1 = aData.on[event];
	          if (event in on) {
	            aData.on[event] = Array.isArray(handler$1) ? handler$1 : [handler$1];
	          }
	        }
	        // append new listeners for router-link
	        for (var event$1 in on) {
	          if (event$1 in aData.on) {
	            // on[event] is always a function
	            aData.on[event$1].push(on[event$1]);
	          } else {
	            aData.on[event$1] = handler;
	          }
	        }

	        var aAttrs = (a.data.attrs = extend$1({}, a.data.attrs));
	        aAttrs.href = href;
	        aAttrs['aria-current'] = ariaCurrentValue;
	      } else {
	        // doesn't have <a> child, apply listener to self
	        data.on = on;
	      }
	    }

	    return h(this.tag, data, this.$slots.default)
	  }
	};

	function guardEvent (e) {
	  // don't redirect with control keys
	  if (e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) { return }
	  // don't redirect when preventDefault called
	  if (e.defaultPrevented) { return }
	  // don't redirect on right click
	  if (e.button !== undefined && e.button !== 0) { return }
	  // don't redirect if `target="_blank"`
	  if (e.currentTarget && e.currentTarget.getAttribute) {
	    var target = e.currentTarget.getAttribute('target');
	    if (/\b_blank\b/i.test(target)) { return }
	  }
	  // this may be a Weex event which doesn't have this method
	  if (e.preventDefault) {
	    e.preventDefault();
	  }
	  return true
	}

	function findAnchor (children) {
	  if (children) {
	    var child;
	    for (var i = 0; i < children.length; i++) {
	      child = children[i];
	      if (child.tag === 'a') {
	        return child
	      }
	      if (child.children && (child = findAnchor(child.children))) {
	        return child
	      }
	    }
	  }
	}

	var _Vue;

	function install (Vue) {
	  if (install.installed && _Vue === Vue) { return }
	  install.installed = true;

	  _Vue = Vue;

	  var isDef = function (v) { return v !== undefined; };

	  var registerInstance = function (vm, callVal) {
	    var i = vm.$options._parentVnode;
	    if (isDef(i) && isDef(i = i.data) && isDef(i = i.registerRouteInstance)) {
	      i(vm, callVal);
	    }
	  };

	  Vue.mixin({
	    beforeCreate: function beforeCreate () {
	      if (isDef(this.$options.router)) {
	        this._routerRoot = this;
	        this._router = this.$options.router;
	        this._router.init(this);
	        Vue.util.defineReactive(this, '_route', this._router.history.current);
	      } else {
	        this._routerRoot = (this.$parent && this.$parent._routerRoot) || this;
	      }
	      registerInstance(this, this);
	    },
	    destroyed: function destroyed () {
	      registerInstance(this);
	    }
	  });

	  Object.defineProperty(Vue.prototype, '$router', {
	    get: function get () { return this._routerRoot._router }
	  });

	  Object.defineProperty(Vue.prototype, '$route', {
	    get: function get () { return this._routerRoot._route }
	  });

	  Vue.component('RouterView', View);
	  Vue.component('RouterLink', Link);

	  var strats = Vue.config.optionMergeStrategies;
	  // use the same hook merging strategy for route hooks
	  strats.beforeRouteEnter = strats.beforeRouteLeave = strats.beforeRouteUpdate = strats.created;
	}

	/*  */

	var inBrowser$1 = typeof window !== 'undefined';

	/*  */

	function createRouteMap (
	  routes,
	  oldPathList,
	  oldPathMap,
	  oldNameMap
	) {
	  // the path list is used to control path matching priority
	  var pathList = oldPathList || [];
	  // $flow-disable-line
	  var pathMap = oldPathMap || Object.create(null);
	  // $flow-disable-line
	  var nameMap = oldNameMap || Object.create(null);

	  routes.forEach(function (route) {
	    addRouteRecord(pathList, pathMap, nameMap, route);
	  });

	  // ensure wildcard routes are always at the end
	  for (var i = 0, l = pathList.length; i < l; i++) {
	    if (pathList[i] === '*') {
	      pathList.push(pathList.splice(i, 1)[0]);
	      l--;
	      i--;
	    }
	  }

	  return {
	    pathList: pathList,
	    pathMap: pathMap,
	    nameMap: nameMap
	  }
	}

	function addRouteRecord (
	  pathList,
	  pathMap,
	  nameMap,
	  route,
	  parent,
	  matchAs
	) {
	  var path = route.path;
	  var name = route.name;
	  {
	    assert(path != null, "\"path\" is required in a route configuration.");
	    assert(
	      typeof route.component !== 'string',
	      "route config \"component\" for path: " + (String(
	        path || name
	      )) + " cannot be a " + "string id. Use an actual component instead."
	    );
	  }

	  var pathToRegexpOptions =
	    route.pathToRegexpOptions || {};
	  var normalizedPath = normalizePath(path, parent, pathToRegexpOptions.strict);

	  if (typeof route.caseSensitive === 'boolean') {
	    pathToRegexpOptions.sensitive = route.caseSensitive;
	  }

	  var record = {
	    path: normalizedPath,
	    regex: compileRouteRegex(normalizedPath, pathToRegexpOptions),
	    components: route.components || { default: route.component },
	    instances: {},
	    name: name,
	    parent: parent,
	    matchAs: matchAs,
	    redirect: route.redirect,
	    beforeEnter: route.beforeEnter,
	    meta: route.meta || {},
	    props:
	      route.props == null
	        ? {}
	        : route.components
	          ? route.props
	          : { default: route.props }
	  };

	  if (route.children) {
	    // Warn if route is named, does not redirect and has a default child route.
	    // If users navigate to this route by name, the default child will
	    // not be rendered (GH Issue #629)
	    {
	      if (
	        route.name &&
	        !route.redirect &&
	        route.children.some(function (child) { return /^\/?$/.test(child.path); })
	      ) {
	        warn$1(
	          false,
	          "Named Route '" + (route.name) + "' has a default child route. " +
	            "When navigating to this named route (:to=\"{name: '" + (route.name) + "'\"), " +
	            "the default child route will not be rendered. Remove the name from " +
	            "this route and use the name of the default child route for named " +
	            "links instead."
	        );
	      }
	    }
	    route.children.forEach(function (child) {
	      var childMatchAs = matchAs
	        ? cleanPath((matchAs + "/" + (child.path)))
	        : undefined;
	      addRouteRecord(pathList, pathMap, nameMap, child, record, childMatchAs);
	    });
	  }

	  if (!pathMap[record.path]) {
	    pathList.push(record.path);
	    pathMap[record.path] = record;
	  }

	  if (route.alias !== undefined) {
	    var aliases = Array.isArray(route.alias) ? route.alias : [route.alias];
	    for (var i = 0; i < aliases.length; ++i) {
	      var alias = aliases[i];
	      if ( alias === path) {
	        warn$1(
	          false,
	          ("Found an alias with the same value as the path: \"" + path + "\". You have to remove that alias. It will be ignored in development.")
	        );
	        // skip in dev to make it work
	        continue
	      }

	      var aliasRoute = {
	        path: alias,
	        children: route.children
	      };
	      addRouteRecord(
	        pathList,
	        pathMap,
	        nameMap,
	        aliasRoute,
	        parent,
	        record.path || '/' // matchAs
	      );
	    }
	  }

	  if (name) {
	    if (!nameMap[name]) {
	      nameMap[name] = record;
	    } else if ( !matchAs) {
	      warn$1(
	        false,
	        "Duplicate named routes definition: " +
	          "{ name: \"" + name + "\", path: \"" + (record.path) + "\" }"
	      );
	    }
	  }
	}

	function compileRouteRegex (
	  path,
	  pathToRegexpOptions
	) {
	  var regex = pathToRegexp_1(path, [], pathToRegexpOptions);
	  {
	    var keys = Object.create(null);
	    regex.keys.forEach(function (key) {
	      warn$1(
	        !keys[key.name],
	        ("Duplicate param keys in route with path: \"" + path + "\"")
	      );
	      keys[key.name] = true;
	    });
	  }
	  return regex
	}

	function normalizePath (
	  path,
	  parent,
	  strict
	) {
	  if (!strict) { path = path.replace(/\/$/, ''); }
	  if (path[0] === '/') { return path }
	  if (parent == null) { return path }
	  return cleanPath(((parent.path) + "/" + path))
	}

	/*  */



	function createMatcher (
	  routes,
	  router
	) {
	  var ref = createRouteMap(routes);
	  var pathList = ref.pathList;
	  var pathMap = ref.pathMap;
	  var nameMap = ref.nameMap;

	  function addRoutes (routes) {
	    createRouteMap(routes, pathList, pathMap, nameMap);
	  }

	  function match (
	    raw,
	    currentRoute,
	    redirectedFrom
	  ) {
	    var location = normalizeLocation(raw, currentRoute, false, router);
	    var name = location.name;

	    if (name) {
	      var record = nameMap[name];
	      {
	        warn$1(record, ("Route with name '" + name + "' does not exist"));
	      }
	      if (!record) { return _createRoute(null, location) }
	      var paramNames = record.regex.keys
	        .filter(function (key) { return !key.optional; })
	        .map(function (key) { return key.name; });

	      if (typeof location.params !== 'object') {
	        location.params = {};
	      }

	      if (currentRoute && typeof currentRoute.params === 'object') {
	        for (var key in currentRoute.params) {
	          if (!(key in location.params) && paramNames.indexOf(key) > -1) {
	            location.params[key] = currentRoute.params[key];
	          }
	        }
	      }

	      location.path = fillParams(record.path, location.params, ("named route \"" + name + "\""));
	      return _createRoute(record, location, redirectedFrom)
	    } else if (location.path) {
	      location.params = {};
	      for (var i = 0; i < pathList.length; i++) {
	        var path = pathList[i];
	        var record$1 = pathMap[path];
	        if (matchRoute(record$1.regex, location.path, location.params)) {
	          return _createRoute(record$1, location, redirectedFrom)
	        }
	      }
	    }
	    // no match
	    return _createRoute(null, location)
	  }

	  function redirect (
	    record,
	    location
	  ) {
	    var originalRedirect = record.redirect;
	    var redirect = typeof originalRedirect === 'function'
	      ? originalRedirect(createRoute(record, location, null, router))
	      : originalRedirect;

	    if (typeof redirect === 'string') {
	      redirect = { path: redirect };
	    }

	    if (!redirect || typeof redirect !== 'object') {
	      {
	        warn$1(
	          false, ("invalid redirect option: " + (JSON.stringify(redirect)))
	        );
	      }
	      return _createRoute(null, location)
	    }

	    var re = redirect;
	    var name = re.name;
	    var path = re.path;
	    var query = location.query;
	    var hash = location.hash;
	    var params = location.params;
	    query = re.hasOwnProperty('query') ? re.query : query;
	    hash = re.hasOwnProperty('hash') ? re.hash : hash;
	    params = re.hasOwnProperty('params') ? re.params : params;

	    if (name) {
	      // resolved named direct
	      var targetRecord = nameMap[name];
	      {
	        assert(targetRecord, ("redirect failed: named route \"" + name + "\" not found."));
	      }
	      return match({
	        _normalized: true,
	        name: name,
	        query: query,
	        hash: hash,
	        params: params
	      }, undefined, location)
	    } else if (path) {
	      // 1. resolve relative redirect
	      var rawPath = resolveRecordPath(path, record);
	      // 2. resolve params
	      var resolvedPath = fillParams(rawPath, params, ("redirect route with path \"" + rawPath + "\""));
	      // 3. rematch with existing query and hash
	      return match({
	        _normalized: true,
	        path: resolvedPath,
	        query: query,
	        hash: hash
	      }, undefined, location)
	    } else {
	      {
	        warn$1(false, ("invalid redirect option: " + (JSON.stringify(redirect))));
	      }
	      return _createRoute(null, location)
	    }
	  }

	  function alias (
	    record,
	    location,
	    matchAs
	  ) {
	    var aliasedPath = fillParams(matchAs, location.params, ("aliased route with path \"" + matchAs + "\""));
	    var aliasedMatch = match({
	      _normalized: true,
	      path: aliasedPath
	    });
	    if (aliasedMatch) {
	      var matched = aliasedMatch.matched;
	      var aliasedRecord = matched[matched.length - 1];
	      location.params = aliasedMatch.params;
	      return _createRoute(aliasedRecord, location)
	    }
	    return _createRoute(null, location)
	  }

	  function _createRoute (
	    record,
	    location,
	    redirectedFrom
	  ) {
	    if (record && record.redirect) {
	      return redirect(record, redirectedFrom || location)
	    }
	    if (record && record.matchAs) {
	      return alias(record, location, record.matchAs)
	    }
	    return createRoute(record, location, redirectedFrom, router)
	  }

	  return {
	    match: match,
	    addRoutes: addRoutes
	  }
	}

	function matchRoute (
	  regex,
	  path,
	  params
	) {
	  var m = path.match(regex);

	  if (!m) {
	    return false
	  } else if (!params) {
	    return true
	  }

	  for (var i = 1, len = m.length; i < len; ++i) {
	    var key = regex.keys[i - 1];
	    var val = typeof m[i] === 'string' ? decodeURIComponent(m[i]) : m[i];
	    if (key) {
	      // Fix #1994: using * with props: true generates a param named 0
	      params[key.name || 'pathMatch'] = val;
	    }
	  }

	  return true
	}

	function resolveRecordPath (path, record) {
	  return resolvePath(path, record.parent ? record.parent.path : '/', true)
	}

	/*  */

	// use User Timing api (if present) for more accurate key precision
	var Time =
	  inBrowser$1 && window.performance && window.performance.now
	    ? window.performance
	    : Date;

	function genStateKey () {
	  return Time.now().toFixed(3)
	}

	var _key = genStateKey();

	function getStateKey () {
	  return _key
	}

	function setStateKey (key) {
	  return (_key = key)
	}

	/*  */

	var positionStore = Object.create(null);

	function setupScroll () {
	  // Prevent browser scroll behavior on History popstate
	  if ('scrollRestoration' in window.history) {
	    window.history.scrollRestoration = 'manual';
	  }
	  // Fix for #1585 for Firefox
	  // Fix for #2195 Add optional third attribute to workaround a bug in safari https://bugs.webkit.org/show_bug.cgi?id=182678
	  // Fix for #2774 Support for apps loaded from Windows file shares not mapped to network drives: replaced location.origin with
	  // window.location.protocol + '//' + window.location.host
	  // location.host contains the port and location.hostname doesn't
	  var protocolAndPath = window.location.protocol + '//' + window.location.host;
	  var absolutePath = window.location.href.replace(protocolAndPath, '');
	  // preserve existing history state as it could be overriden by the user
	  var stateCopy = extend$1({}, window.history.state);
	  stateCopy.key = getStateKey();
	  window.history.replaceState(stateCopy, '', absolutePath);
	  window.addEventListener('popstate', handlePopState);
	  return function () {
	    window.removeEventListener('popstate', handlePopState);
	  }
	}

	function handleScroll (
	  router,
	  to,
	  from,
	  isPop
	) {
	  if (!router.app) {
	    return
	  }

	  var behavior = router.options.scrollBehavior;
	  if (!behavior) {
	    return
	  }

	  {
	    assert(typeof behavior === 'function', "scrollBehavior must be a function");
	  }

	  // wait until re-render finishes before scrolling
	  router.app.$nextTick(function () {
	    var position = getScrollPosition();
	    var shouldScroll = behavior.call(
	      router,
	      to,
	      from,
	      isPop ? position : null
	    );

	    if (!shouldScroll) {
	      return
	    }

	    if (typeof shouldScroll.then === 'function') {
	      shouldScroll
	        .then(function (shouldScroll) {
	          scrollToPosition((shouldScroll), position);
	        })
	        .catch(function (err) {
	          {
	            assert(false, err.toString());
	          }
	        });
	    } else {
	      scrollToPosition(shouldScroll, position);
	    }
	  });
	}

	function saveScrollPosition () {
	  var key = getStateKey();
	  if (key) {
	    positionStore[key] = {
	      x: window.pageXOffset,
	      y: window.pageYOffset
	    };
	  }
	}

	function handlePopState (e) {
	  saveScrollPosition();
	  if (e.state && e.state.key) {
	    setStateKey(e.state.key);
	  }
	}

	function getScrollPosition () {
	  var key = getStateKey();
	  if (key) {
	    return positionStore[key]
	  }
	}

	function getElementPosition (el, offset) {
	  var docEl = document.documentElement;
	  var docRect = docEl.getBoundingClientRect();
	  var elRect = el.getBoundingClientRect();
	  return {
	    x: elRect.left - docRect.left - offset.x,
	    y: elRect.top - docRect.top - offset.y
	  }
	}

	function isValidPosition (obj) {
	  return isNumber(obj.x) || isNumber(obj.y)
	}

	function normalizePosition (obj) {
	  return {
	    x: isNumber(obj.x) ? obj.x : window.pageXOffset,
	    y: isNumber(obj.y) ? obj.y : window.pageYOffset
	  }
	}

	function normalizeOffset (obj) {
	  return {
	    x: isNumber(obj.x) ? obj.x : 0,
	    y: isNumber(obj.y) ? obj.y : 0
	  }
	}

	function isNumber (v) {
	  return typeof v === 'number'
	}

	var hashStartsWithNumberRE = /^#\d/;

	function scrollToPosition (shouldScroll, position) {
	  var isObject = typeof shouldScroll === 'object';
	  if (isObject && typeof shouldScroll.selector === 'string') {
	    // getElementById would still fail if the selector contains a more complicated query like #main[data-attr]
	    // but at the same time, it doesn't make much sense to select an element with an id and an extra selector
	    var el = hashStartsWithNumberRE.test(shouldScroll.selector) // $flow-disable-line
	      ? document.getElementById(shouldScroll.selector.slice(1)) // $flow-disable-line
	      : document.querySelector(shouldScroll.selector);

	    if (el) {
	      var offset =
	        shouldScroll.offset && typeof shouldScroll.offset === 'object'
	          ? shouldScroll.offset
	          : {};
	      offset = normalizeOffset(offset);
	      position = getElementPosition(el, offset);
	    } else if (isValidPosition(shouldScroll)) {
	      position = normalizePosition(shouldScroll);
	    }
	  } else if (isObject && isValidPosition(shouldScroll)) {
	    position = normalizePosition(shouldScroll);
	  }

	  if (position) {
	    window.scrollTo(position.x, position.y);
	  }
	}

	/*  */

	var supportsPushState =
	  inBrowser$1 &&
	  (function () {
	    var ua = window.navigator.userAgent;

	    if (
	      (ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) &&
	      ua.indexOf('Mobile Safari') !== -1 &&
	      ua.indexOf('Chrome') === -1 &&
	      ua.indexOf('Windows Phone') === -1
	    ) {
	      return false
	    }

	    return window.history && typeof window.history.pushState === 'function'
	  })();

	function pushState (url, replace) {
	  saveScrollPosition();
	  // try...catch the pushState call to get around Safari
	  // DOM Exception 18 where it limits to 100 pushState calls
	  var history = window.history;
	  try {
	    if (replace) {
	      // preserve existing history state as it could be overriden by the user
	      var stateCopy = extend$1({}, history.state);
	      stateCopy.key = getStateKey();
	      history.replaceState(stateCopy, '', url);
	    } else {
	      history.pushState({ key: setStateKey(genStateKey()) }, '', url);
	    }
	  } catch (e) {
	    window.location[replace ? 'replace' : 'assign'](url);
	  }
	}

	function replaceState (url) {
	  pushState(url, true);
	}

	/*  */

	function runQueue (queue, fn, cb) {
	  var step = function (index) {
	    if (index >= queue.length) {
	      cb();
	    } else {
	      if (queue[index]) {
	        fn(queue[index], function () {
	          step(index + 1);
	        });
	      } else {
	        step(index + 1);
	      }
	    }
	  };
	  step(0);
	}

	/*  */

	function resolveAsyncComponents (matched) {
	  return function (to, from, next) {
	    var hasAsync = false;
	    var pending = 0;
	    var error = null;

	    flatMapComponents(matched, function (def, _, match, key) {
	      // if it's a function and doesn't have cid attached,
	      // assume it's an async component resolve function.
	      // we are not using Vue's default async resolving mechanism because
	      // we want to halt the navigation until the incoming component has been
	      // resolved.
	      if (typeof def === 'function' && def.cid === undefined) {
	        hasAsync = true;
	        pending++;

	        var resolve = once$1(function (resolvedDef) {
	          if (isESModule(resolvedDef)) {
	            resolvedDef = resolvedDef.default;
	          }
	          // save resolved on async factory in case it's used elsewhere
	          def.resolved = typeof resolvedDef === 'function'
	            ? resolvedDef
	            : _Vue.extend(resolvedDef);
	          match.components[key] = resolvedDef;
	          pending--;
	          if (pending <= 0) {
	            next();
	          }
	        });

	        var reject = once$1(function (reason) {
	          var msg = "Failed to resolve async component " + key + ": " + reason;
	           warn$1(false, msg);
	          if (!error) {
	            error = isError(reason)
	              ? reason
	              : new Error(msg);
	            next(error);
	          }
	        });

	        var res;
	        try {
	          res = def(resolve, reject);
	        } catch (e) {
	          reject(e);
	        }
	        if (res) {
	          if (typeof res.then === 'function') {
	            res.then(resolve, reject);
	          } else {
	            // new syntax in Vue 2.3
	            var comp = res.component;
	            if (comp && typeof comp.then === 'function') {
	              comp.then(resolve, reject);
	            }
	          }
	        }
	      }
	    });

	    if (!hasAsync) { next(); }
	  }
	}

	function flatMapComponents (
	  matched,
	  fn
	) {
	  return flatten(matched.map(function (m) {
	    return Object.keys(m.components).map(function (key) { return fn(
	      m.components[key],
	      m.instances[key],
	      m, key
	    ); })
	  }))
	}

	function flatten (arr) {
	  return Array.prototype.concat.apply([], arr)
	}

	var hasSymbol$1 =
	  typeof Symbol === 'function' &&
	  typeof Symbol.toStringTag === 'symbol';

	function isESModule (obj) {
	  return obj.__esModule || (hasSymbol$1 && obj[Symbol.toStringTag] === 'Module')
	}

	// in Webpack 2, require.ensure now also returns a Promise
	// so the resolve/reject functions may get called an extra time
	// if the user uses an arrow function shorthand that happens to
	// return that Promise.
	function once$1 (fn) {
	  var called = false;
	  return function () {
	    var args = [], len = arguments.length;
	    while ( len-- ) args[ len ] = arguments[ len ];

	    if (called) { return }
	    called = true;
	    return fn.apply(this, args)
	  }
	}

	var NavigationFailureType = {
	  redirected: 1,
	  aborted: 2,
	  cancelled: 3,
	  duplicated: 4
	};

	function createNavigationRedirectedError (from, to) {
	  return createRouterError(
	    from,
	    to,
	    NavigationFailureType.redirected,
	    ("Redirected from \"" + (from.fullPath) + "\" to \"" + (stringifyRoute(to)) + "\" via a navigation guard.")
	  )
	}

	function createNavigationDuplicatedError (from, to) {
	  return createRouterError(
	    from,
	    to,
	    NavigationFailureType.duplicated,
	    ("Avoided redundant navigation to current location: \"" + (from.fullPath) + "\".")
	  )
	}

	function createNavigationCancelledError (from, to) {
	  return createRouterError(
	    from,
	    to,
	    NavigationFailureType.cancelled,
	    ("Navigation cancelled from \"" + (from.fullPath) + "\" to \"" + (to.fullPath) + "\" with a new navigation.")
	  )
	}

	function createNavigationAbortedError (from, to) {
	  return createRouterError(
	    from,
	    to,
	    NavigationFailureType.aborted,
	    ("Navigation aborted from \"" + (from.fullPath) + "\" to \"" + (to.fullPath) + "\" via a navigation guard.")
	  )
	}

	function createRouterError (from, to, type, message) {
	  var error = new Error(message);
	  error._isRouter = true;
	  error.from = from;
	  error.to = to;
	  error.type = type;

	  var newStack = error.stack.split('\n');
	  newStack.splice(1, 2); // remove 2 last useless calls
	  error.stack = newStack.join('\n');
	  return error
	}

	var propertiesToLog = ['params', 'query', 'hash'];

	function stringifyRoute (to) {
	  if (typeof to === 'string') { return to }
	  if ('path' in to) { return to.path }
	  var location = {};
	  propertiesToLog.forEach(function (key) {
	    if (key in to) { location[key] = to[key]; }
	  });
	  return JSON.stringify(location, null, 2)
	}

	/*  */

	var History = function History (router, base) {
	  this.router = router;
	  this.base = normalizeBase(base);
	  // start with a route object that stands for "nowhere"
	  this.current = START;
	  this.pending = null;
	  this.ready = false;
	  this.readyCbs = [];
	  this.readyErrorCbs = [];
	  this.errorCbs = [];
	  this.listeners = [];
	};

	History.prototype.listen = function listen (cb) {
	  this.cb = cb;
	};

	History.prototype.onReady = function onReady (cb, errorCb) {
	  if (this.ready) {
	    cb();
	  } else {
	    this.readyCbs.push(cb);
	    if (errorCb) {
	      this.readyErrorCbs.push(errorCb);
	    }
	  }
	};

	History.prototype.onError = function onError (errorCb) {
	  this.errorCbs.push(errorCb);
	};

	History.prototype.transitionTo = function transitionTo (
	  location,
	  onComplete,
	  onAbort
	) {
	    var this$1 = this;

	  var route = this.router.match(location, this.current);
	  this.confirmTransition(
	    route,
	    function () {
	      var prev = this$1.current;
	      this$1.updateRoute(route);
	      onComplete && onComplete(route);
	      this$1.ensureURL();
	      this$1.router.afterHooks.forEach(function (hook) {
	        hook && hook(route, prev);
	      });

	      // fire ready cbs once
	      if (!this$1.ready) {
	        this$1.ready = true;
	        this$1.readyCbs.forEach(function (cb) {
	          cb(route);
	        });
	      }
	    },
	    function (err) {
	      if (onAbort) {
	        onAbort(err);
	      }
	      if (err && !this$1.ready) {
	        this$1.ready = true;
	        this$1.readyErrorCbs.forEach(function (cb) {
	          cb(err);
	        });
	      }
	    }
	  );
	};

	History.prototype.confirmTransition = function confirmTransition (route, onComplete, onAbort) {
	    var this$1 = this;

	  var current = this.current;
	  var abort = function (err) {
	    // after merging https://github.com/vuejs/vue-router/pull/2771 we
	    // When the user navigates through history through back/forward buttons
	    // we do not want to throw the error. We only throw it if directly calling
	    // push/replace. That's why it's not included in isError
	    if (!isRouterError(err, NavigationFailureType.duplicated) && isError(err)) {
	      if (this$1.errorCbs.length) {
	        this$1.errorCbs.forEach(function (cb) {
	          cb(err);
	        });
	      } else {
	        warn$1(false, 'uncaught error during route navigation:');
	        console.error(err);
	      }
	    }
	    onAbort && onAbort(err);
	  };
	  if (
	    isSameRoute(route, current) &&
	    // in the case the route map has been dynamically appended to
	    route.matched.length === current.matched.length
	  ) {
	    this.ensureURL();
	    return abort(createNavigationDuplicatedError(current, route))
	  }

	  var ref = resolveQueue(
	    this.current.matched,
	    route.matched
	  );
	    var updated = ref.updated;
	    var deactivated = ref.deactivated;
	    var activated = ref.activated;

	  var queue = [].concat(
	    // in-component leave guards
	    extractLeaveGuards(deactivated),
	    // global before hooks
	    this.router.beforeHooks,
	    // in-component update hooks
	    extractUpdateHooks(updated),
	    // in-config enter guards
	    activated.map(function (m) { return m.beforeEnter; }),
	    // async components
	    resolveAsyncComponents(activated)
	  );

	  this.pending = route;
	  var iterator = function (hook, next) {
	    if (this$1.pending !== route) {
	      return abort(createNavigationCancelledError(current, route))
	    }
	    try {
	      hook(route, current, function (to) {
	        if (to === false) {
	          // next(false) -> abort navigation, ensure current URL
	          this$1.ensureURL(true);
	          abort(createNavigationAbortedError(current, route));
	        } else if (isError(to)) {
	          this$1.ensureURL(true);
	          abort(to);
	        } else if (
	          typeof to === 'string' ||
	          (typeof to === 'object' &&
	            (typeof to.path === 'string' || typeof to.name === 'string'))
	        ) {
	          // next('/') or next({ path: '/' }) -> redirect
	          abort(createNavigationRedirectedError(current, route));
	          if (typeof to === 'object' && to.replace) {
	            this$1.replace(to);
	          } else {
	            this$1.push(to);
	          }
	        } else {
	          // confirm transition and pass on the value
	          next(to);
	        }
	      });
	    } catch (e) {
	      abort(e);
	    }
	  };

	  runQueue(queue, iterator, function () {
	    var postEnterCbs = [];
	    var isValid = function () { return this$1.current === route; };
	    // wait until async components are resolved before
	    // extracting in-component enter guards
	    var enterGuards = extractEnterGuards(activated, postEnterCbs, isValid);
	    var queue = enterGuards.concat(this$1.router.resolveHooks);
	    runQueue(queue, iterator, function () {
	      if (this$1.pending !== route) {
	        return abort()
	      }
	      this$1.pending = null;
	      onComplete(route);
	      if (this$1.router.app) {
	        this$1.router.app.$nextTick(function () {
	          postEnterCbs.forEach(function (cb) {
	            cb();
	          });
	        });
	      }
	    });
	  });
	};

	History.prototype.updateRoute = function updateRoute (route) {
	  this.current = route;
	  this.cb && this.cb(route);
	};

	History.prototype.setupListeners = function setupListeners () {
	  // Default implementation is empty
	};

	History.prototype.teardownListeners = function teardownListeners () {
	  this.listeners.forEach(function (cleanupListener) {
	    cleanupListener();
	  });
	  this.listeners = [];
	};

	function normalizeBase (base) {
	  if (!base) {
	    if (inBrowser$1) {
	      // respect <base> tag
	      var baseEl = document.querySelector('base');
	      base = (baseEl && baseEl.getAttribute('href')) || '/';
	      // strip full URL origin
	      base = base.replace(/^https?:\/\/[^\/]+/, '');
	    } else {
	      base = '/';
	    }
	  }
	  // make sure there's the starting slash
	  if (base.charAt(0) !== '/') {
	    base = '/' + base;
	  }
	  // remove trailing slash
	  return base.replace(/\/$/, '')
	}

	function resolveQueue (
	  current,
	  next
	) {
	  var i;
	  var max = Math.max(current.length, next.length);
	  for (i = 0; i < max; i++) {
	    if (current[i] !== next[i]) {
	      break
	    }
	  }
	  return {
	    updated: next.slice(0, i),
	    activated: next.slice(i),
	    deactivated: current.slice(i)
	  }
	}

	function extractGuards (
	  records,
	  name,
	  bind,
	  reverse
	) {
	  var guards = flatMapComponents(records, function (def, instance, match, key) {
	    var guard = extractGuard(def, name);
	    if (guard) {
	      return Array.isArray(guard)
	        ? guard.map(function (guard) { return bind(guard, instance, match, key); })
	        : bind(guard, instance, match, key)
	    }
	  });
	  return flatten(reverse ? guards.reverse() : guards)
	}

	function extractGuard (
	  def,
	  key
	) {
	  if (typeof def !== 'function') {
	    // extend now so that global mixins are applied.
	    def = _Vue.extend(def);
	  }
	  return def.options[key]
	}

	function extractLeaveGuards (deactivated) {
	  return extractGuards(deactivated, 'beforeRouteLeave', bindGuard, true)
	}

	function extractUpdateHooks (updated) {
	  return extractGuards(updated, 'beforeRouteUpdate', bindGuard)
	}

	function bindGuard (guard, instance) {
	  if (instance) {
	    return function boundRouteGuard () {
	      return guard.apply(instance, arguments)
	    }
	  }
	}

	function extractEnterGuards (
	  activated,
	  cbs,
	  isValid
	) {
	  return extractGuards(
	    activated,
	    'beforeRouteEnter',
	    function (guard, _, match, key) {
	      return bindEnterGuard(guard, match, key, cbs, isValid)
	    }
	  )
	}

	function bindEnterGuard (
	  guard,
	  match,
	  key,
	  cbs,
	  isValid
	) {
	  return function routeEnterGuard (to, from, next) {
	    return guard(to, from, function (cb) {
	      if (typeof cb === 'function') {
	        cbs.push(function () {
	          // #750
	          // if a router-view is wrapped with an out-in transition,
	          // the instance may not have been registered at this time.
	          // we will need to poll for registration until current route
	          // is no longer valid.
	          poll(cb, match.instances, key, isValid);
	        });
	      }
	      next(cb);
	    })
	  }
	}

	function poll (
	  cb, // somehow flow cannot infer this is a function
	  instances,
	  key,
	  isValid
	) {
	  if (
	    instances[key] &&
	    !instances[key]._isBeingDestroyed // do not reuse being destroyed instance
	  ) {
	    cb(instances[key]);
	  } else if (isValid()) {
	    setTimeout(function () {
	      poll(cb, instances, key, isValid);
	    }, 16);
	  }
	}

	/*  */

	var HTML5History = /*@__PURE__*/(function (History) {
	  function HTML5History (router, base) {
	    History.call(this, router, base);

	    this._startLocation = getLocation(this.base);
	  }

	  if ( History ) HTML5History.__proto__ = History;
	  HTML5History.prototype = Object.create( History && History.prototype );
	  HTML5History.prototype.constructor = HTML5History;

	  HTML5History.prototype.setupListeners = function setupListeners () {
	    var this$1 = this;

	    if (this.listeners.length > 0) {
	      return
	    }

	    var router = this.router;
	    var expectScroll = router.options.scrollBehavior;
	    var supportsScroll = supportsPushState && expectScroll;

	    if (supportsScroll) {
	      this.listeners.push(setupScroll());
	    }

	    var handleRoutingEvent = function () {
	      var current = this$1.current;

	      // Avoiding first `popstate` event dispatched in some browsers but first
	      // history route not updated since async guard at the same time.
	      var location = getLocation(this$1.base);
	      if (this$1.current === START && location === this$1._startLocation) {
	        return
	      }

	      this$1.transitionTo(location, function (route) {
	        if (supportsScroll) {
	          handleScroll(router, route, current, true);
	        }
	      });
	    };
	    window.addEventListener('popstate', handleRoutingEvent);
	    this.listeners.push(function () {
	      window.removeEventListener('popstate', handleRoutingEvent);
	    });
	  };

	  HTML5History.prototype.go = function go (n) {
	    window.history.go(n);
	  };

	  HTML5History.prototype.push = function push (location, onComplete, onAbort) {
	    var this$1 = this;

	    var ref = this;
	    var fromRoute = ref.current;
	    this.transitionTo(location, function (route) {
	      pushState(cleanPath(this$1.base + route.fullPath));
	      handleScroll(this$1.router, route, fromRoute, false);
	      onComplete && onComplete(route);
	    }, onAbort);
	  };

	  HTML5History.prototype.replace = function replace (location, onComplete, onAbort) {
	    var this$1 = this;

	    var ref = this;
	    var fromRoute = ref.current;
	    this.transitionTo(location, function (route) {
	      replaceState(cleanPath(this$1.base + route.fullPath));
	      handleScroll(this$1.router, route, fromRoute, false);
	      onComplete && onComplete(route);
	    }, onAbort);
	  };

	  HTML5History.prototype.ensureURL = function ensureURL (push) {
	    if (getLocation(this.base) !== this.current.fullPath) {
	      var current = cleanPath(this.base + this.current.fullPath);
	      push ? pushState(current) : replaceState(current);
	    }
	  };

	  HTML5History.prototype.getCurrentLocation = function getCurrentLocation () {
	    return getLocation(this.base)
	  };

	  return HTML5History;
	}(History));

	function getLocation (base) {
	  var path = decodeURI(window.location.pathname);
	  if (base && path.toLowerCase().indexOf(base.toLowerCase()) === 0) {
	    path = path.slice(base.length);
	  }
	  return (path || '/') + window.location.search + window.location.hash
	}

	/*  */

	var HashHistory = /*@__PURE__*/(function (History) {
	  function HashHistory (router, base, fallback) {
	    History.call(this, router, base);
	    // check history fallback deeplinking
	    if (fallback && checkFallback(this.base)) {
	      return
	    }
	    ensureSlash();
	  }

	  if ( History ) HashHistory.__proto__ = History;
	  HashHistory.prototype = Object.create( History && History.prototype );
	  HashHistory.prototype.constructor = HashHistory;

	  // this is delayed until the app mounts
	  // to avoid the hashchange listener being fired too early
	  HashHistory.prototype.setupListeners = function setupListeners () {
	    var this$1 = this;

	    if (this.listeners.length > 0) {
	      return
	    }

	    var router = this.router;
	    var expectScroll = router.options.scrollBehavior;
	    var supportsScroll = supportsPushState && expectScroll;

	    if (supportsScroll) {
	      this.listeners.push(setupScroll());
	    }

	    var handleRoutingEvent = function () {
	      var current = this$1.current;
	      if (!ensureSlash()) {
	        return
	      }
	      this$1.transitionTo(getHash(), function (route) {
	        if (supportsScroll) {
	          handleScroll(this$1.router, route, current, true);
	        }
	        if (!supportsPushState) {
	          replaceHash(route.fullPath);
	        }
	      });
	    };
	    var eventType = supportsPushState ? 'popstate' : 'hashchange';
	    window.addEventListener(
	      eventType,
	      handleRoutingEvent
	    );
	    this.listeners.push(function () {
	      window.removeEventListener(eventType, handleRoutingEvent);
	    });
	  };

	  HashHistory.prototype.push = function push (location, onComplete, onAbort) {
	    var this$1 = this;

	    var ref = this;
	    var fromRoute = ref.current;
	    this.transitionTo(
	      location,
	      function (route) {
	        pushHash(route.fullPath);
	        handleScroll(this$1.router, route, fromRoute, false);
	        onComplete && onComplete(route);
	      },
	      onAbort
	    );
	  };

	  HashHistory.prototype.replace = function replace (location, onComplete, onAbort) {
	    var this$1 = this;

	    var ref = this;
	    var fromRoute = ref.current;
	    this.transitionTo(
	      location,
	      function (route) {
	        replaceHash(route.fullPath);
	        handleScroll(this$1.router, route, fromRoute, false);
	        onComplete && onComplete(route);
	      },
	      onAbort
	    );
	  };

	  HashHistory.prototype.go = function go (n) {
	    window.history.go(n);
	  };

	  HashHistory.prototype.ensureURL = function ensureURL (push) {
	    var current = this.current.fullPath;
	    if (getHash() !== current) {
	      push ? pushHash(current) : replaceHash(current);
	    }
	  };

	  HashHistory.prototype.getCurrentLocation = function getCurrentLocation () {
	    return getHash()
	  };

	  return HashHistory;
	}(History));

	function checkFallback (base) {
	  var location = getLocation(base);
	  if (!/^\/#/.test(location)) {
	    window.location.replace(cleanPath(base + '/#' + location));
	    return true
	  }
	}

	function ensureSlash () {
	  var path = getHash();
	  if (path.charAt(0) === '/') {
	    return true
	  }
	  replaceHash('/' + path);
	  return false
	}

	function getHash () {
	  // We can't use window.location.hash here because it's not
	  // consistent across browsers - Firefox will pre-decode it!
	  var href = window.location.href;
	  var index = href.indexOf('#');
	  // empty path
	  if (index < 0) { return '' }

	  href = href.slice(index + 1);
	  // decode the hash but not the search or hash
	  // as search(query) is already decoded
	  // https://github.com/vuejs/vue-router/issues/2708
	  var searchIndex = href.indexOf('?');
	  if (searchIndex < 0) {
	    var hashIndex = href.indexOf('#');
	    if (hashIndex > -1) {
	      href = decodeURI(href.slice(0, hashIndex)) + href.slice(hashIndex);
	    } else { href = decodeURI(href); }
	  } else {
	    href = decodeURI(href.slice(0, searchIndex)) + href.slice(searchIndex);
	  }

	  return href
	}

	function getUrl (path) {
	  var href = window.location.href;
	  var i = href.indexOf('#');
	  var base = i >= 0 ? href.slice(0, i) : href;
	  return (base + "#" + path)
	}

	function pushHash (path) {
	  if (supportsPushState) {
	    pushState(getUrl(path));
	  } else {
	    window.location.hash = path;
	  }
	}

	function replaceHash (path) {
	  if (supportsPushState) {
	    replaceState(getUrl(path));
	  } else {
	    window.location.replace(getUrl(path));
	  }
	}

	/*  */

	var AbstractHistory = /*@__PURE__*/(function (History) {
	  function AbstractHistory (router, base) {
	    History.call(this, router, base);
	    this.stack = [];
	    this.index = -1;
	  }

	  if ( History ) AbstractHistory.__proto__ = History;
	  AbstractHistory.prototype = Object.create( History && History.prototype );
	  AbstractHistory.prototype.constructor = AbstractHistory;

	  AbstractHistory.prototype.push = function push (location, onComplete, onAbort) {
	    var this$1 = this;

	    this.transitionTo(
	      location,
	      function (route) {
	        this$1.stack = this$1.stack.slice(0, this$1.index + 1).concat(route);
	        this$1.index++;
	        onComplete && onComplete(route);
	      },
	      onAbort
	    );
	  };

	  AbstractHistory.prototype.replace = function replace (location, onComplete, onAbort) {
	    var this$1 = this;

	    this.transitionTo(
	      location,
	      function (route) {
	        this$1.stack = this$1.stack.slice(0, this$1.index).concat(route);
	        onComplete && onComplete(route);
	      },
	      onAbort
	    );
	  };

	  AbstractHistory.prototype.go = function go (n) {
	    var this$1 = this;

	    var targetIndex = this.index + n;
	    if (targetIndex < 0 || targetIndex >= this.stack.length) {
	      return
	    }
	    var route = this.stack[targetIndex];
	    this.confirmTransition(
	      route,
	      function () {
	        this$1.index = targetIndex;
	        this$1.updateRoute(route);
	      },
	      function (err) {
	        if (isRouterError(err, NavigationFailureType.duplicated)) {
	          this$1.index = targetIndex;
	        }
	      }
	    );
	  };

	  AbstractHistory.prototype.getCurrentLocation = function getCurrentLocation () {
	    var current = this.stack[this.stack.length - 1];
	    return current ? current.fullPath : '/'
	  };

	  AbstractHistory.prototype.ensureURL = function ensureURL () {
	    // noop
	  };

	  return AbstractHistory;
	}(History));

	/*  */



	var VueRouter = function VueRouter (options) {
	  if ( options === void 0 ) options = {};

	  this.app = null;
	  this.apps = [];
	  this.options = options;
	  this.beforeHooks = [];
	  this.resolveHooks = [];
	  this.afterHooks = [];
	  this.matcher = createMatcher(options.routes || [], this);

	  var mode = options.mode || 'hash';
	  this.fallback = mode === 'history' && !supportsPushState && options.fallback !== false;
	  if (this.fallback) {
	    mode = 'hash';
	  }
	  if (!inBrowser$1) {
	    mode = 'abstract';
	  }
	  this.mode = mode;

	  switch (mode) {
	    case 'history':
	      this.history = new HTML5History(this, options.base);
	      break
	    case 'hash':
	      this.history = new HashHistory(this, options.base, this.fallback);
	      break
	    case 'abstract':
	      this.history = new AbstractHistory(this, options.base);
	      break
	    default:
	      {
	        assert(false, ("invalid mode: " + mode));
	      }
	  }
	};

	var prototypeAccessors$1 = { currentRoute: { configurable: true } };

	VueRouter.prototype.match = function match (
	  raw,
	  current,
	  redirectedFrom
	) {
	  return this.matcher.match(raw, current, redirectedFrom)
	};

	prototypeAccessors$1.currentRoute.get = function () {
	  return this.history && this.history.current
	};

	VueRouter.prototype.init = function init (app /* Vue component instance */) {
	    var this$1 = this;

	   assert(
	    install.installed,
	    "not installed. Make sure to call `Vue.use(VueRouter)` " +
	    "before creating root instance."
	  );

	  this.apps.push(app);

	  // set up app destroyed handler
	  // https://github.com/vuejs/vue-router/issues/2639
	  app.$once('hook:destroyed', function () {
	    // clean out app from this.apps array once destroyed
	    var index = this$1.apps.indexOf(app);
	    if (index > -1) { this$1.apps.splice(index, 1); }
	    // ensure we still have a main app or null if no apps
	    // we do not release the router so it can be reused
	    if (this$1.app === app) { this$1.app = this$1.apps[0] || null; }

	    if (!this$1.app) {
	      // clean up event listeners
	      // https://github.com/vuejs/vue-router/issues/2341
	      this$1.history.teardownListeners();
	    }
	  });

	  // main app previously initialized
	  // return as we don't need to set up new history listener
	  if (this.app) {
	    return
	  }

	  this.app = app;

	  var history = this.history;

	  if (history instanceof HTML5History || history instanceof HashHistory) {
	    var setupListeners = function () {
	      history.setupListeners();
	    };
	    history.transitionTo(history.getCurrentLocation(), setupListeners, setupListeners);
	  }

	  history.listen(function (route) {
	    this$1.apps.forEach(function (app) {
	      app._route = route;
	    });
	  });
	};

	VueRouter.prototype.beforeEach = function beforeEach (fn) {
	  return registerHook(this.beforeHooks, fn)
	};

	VueRouter.prototype.beforeResolve = function beforeResolve (fn) {
	  return registerHook(this.resolveHooks, fn)
	};

	VueRouter.prototype.afterEach = function afterEach (fn) {
	  return registerHook(this.afterHooks, fn)
	};

	VueRouter.prototype.onReady = function onReady (cb, errorCb) {
	  this.history.onReady(cb, errorCb);
	};

	VueRouter.prototype.onError = function onError (errorCb) {
	  this.history.onError(errorCb);
	};

	VueRouter.prototype.push = function push (location, onComplete, onAbort) {
	    var this$1 = this;

	  // $flow-disable-line
	  if (!onComplete && !onAbort && typeof Promise !== 'undefined') {
	    return new Promise(function (resolve, reject) {
	      this$1.history.push(location, resolve, reject);
	    })
	  } else {
	    this.history.push(location, onComplete, onAbort);
	  }
	};

	VueRouter.prototype.replace = function replace (location, onComplete, onAbort) {
	    var this$1 = this;

	  // $flow-disable-line
	  if (!onComplete && !onAbort && typeof Promise !== 'undefined') {
	    return new Promise(function (resolve, reject) {
	      this$1.history.replace(location, resolve, reject);
	    })
	  } else {
	    this.history.replace(location, onComplete, onAbort);
	  }
	};

	VueRouter.prototype.go = function go (n) {
	  this.history.go(n);
	};

	VueRouter.prototype.back = function back () {
	  this.go(-1);
	};

	VueRouter.prototype.forward = function forward () {
	  this.go(1);
	};

	VueRouter.prototype.getMatchedComponents = function getMatchedComponents (to) {
	  var route = to
	    ? to.matched
	      ? to
	      : this.resolve(to).route
	    : this.currentRoute;
	  if (!route) {
	    return []
	  }
	  return [].concat.apply([], route.matched.map(function (m) {
	    return Object.keys(m.components).map(function (key) {
	      return m.components[key]
	    })
	  }))
	};

	VueRouter.prototype.resolve = function resolve (
	  to,
	  current,
	  append
	) {
	  current = current || this.history.current;
	  var location = normalizeLocation(
	    to,
	    current,
	    append,
	    this
	  );
	  var route = this.match(location, current);
	  var fullPath = route.redirectedFrom || route.fullPath;
	  var base = this.history.base;
	  var href = createHref(base, fullPath, this.mode);
	  return {
	    location: location,
	    route: route,
	    href: href,
	    // for backwards compat
	    normalizedTo: location,
	    resolved: route
	  }
	};

	VueRouter.prototype.addRoutes = function addRoutes (routes) {
	  this.matcher.addRoutes(routes);
	  if (this.history.current !== START) {
	    this.history.transitionTo(this.history.getCurrentLocation());
	  }
	};

	Object.defineProperties( VueRouter.prototype, prototypeAccessors$1 );

	function registerHook (list, fn) {
	  list.push(fn);
	  return function () {
	    var i = list.indexOf(fn);
	    if (i > -1) { list.splice(i, 1); }
	  }
	}

	function createHref (base, fullPath, mode) {
	  var path = mode === 'hash' ? '#' + fullPath : fullPath;
	  return base ? cleanPath(base + '/' + path) : path
	}

	VueRouter.install = install;
	VueRouter.version = '3.3.0';

	if (inBrowser$1 && window.Vue) {
	  window.Vue.use(VueRouter);
	}

	var require$$0 = {};

	var core = createCommonjsModule(function (module, exports) {
	(function (root, factory) {
		{
			// CommonJS
			module.exports = exports = factory();
		}
	}(commonjsGlobal, function () {

		/*globals window, global, require*/

		/**
		 * CryptoJS core components.
		 */
		var CryptoJS = CryptoJS || (function (Math, undefined$1) {

		    var crypto;

		    // Native crypto from window (Browser)
		    if (typeof window !== 'undefined' && window.crypto) {
		        crypto = window.crypto;
		    }

		    // Native (experimental IE 11) crypto from window (Browser)
		    if (!crypto && typeof window !== 'undefined' && window.msCrypto) {
		        crypto = window.msCrypto;
		    }

		    // Native crypto from global (NodeJS)
		    if (!crypto && typeof commonjsGlobal !== 'undefined' && commonjsGlobal.crypto) {
		        crypto = commonjsGlobal.crypto;
		    }

		    // Native crypto import via require (NodeJS)
		    if (!crypto && typeof commonjsRequire === 'function') {
		        try {
		            crypto = require$$0;
		        } catch (err) {}
		    }

		    /*
		     * Cryptographically secure pseudorandom number generator
		     *
		     * As Math.random() is cryptographically not safe to use
		     */
		    var cryptoSecureRandomInt = function () {
		        if (crypto) {
		            // Use getRandomValues method (Browser)
		            if (typeof crypto.getRandomValues === 'function') {
		                try {
		                    return crypto.getRandomValues(new Uint32Array(1))[0];
		                } catch (err) {}
		            }

		            // Use randomBytes method (NodeJS)
		            if (typeof crypto.randomBytes === 'function') {
		                try {
		                    return crypto.randomBytes(4).readInt32LE();
		                } catch (err) {}
		            }
		        }

		        throw new Error('Native crypto module could not be used to get secure random number.');
		    };

		    /*
		     * Local polyfill of Object.create

		     */
		    var create = Object.create || (function () {
		        function F() {}

		        return function (obj) {
		            var subtype;

		            F.prototype = obj;

		            subtype = new F();

		            F.prototype = null;

		            return subtype;
		        };
		    }());

		    /**
		     * CryptoJS namespace.
		     */
		    var C = {};

		    /**
		     * Library namespace.
		     */
		    var C_lib = C.lib = {};

		    /**
		     * Base object for prototypal inheritance.
		     */
		    var Base = C_lib.Base = (function () {


		        return {
		            /**
		             * Creates a new object that inherits from this object.
		             *
		             * @param {Object} overrides Properties to copy into the new object.
		             *
		             * @return {Object} The new object.
		             *
		             * @static
		             *
		             * @example
		             *
		             *     var MyType = CryptoJS.lib.Base.extend({
		             *         field: 'value',
		             *
		             *         method: function () {
		             *         }
		             *     });
		             */
		            extend: function (overrides) {
		                // Spawn
		                var subtype = create(this);

		                // Augment
		                if (overrides) {
		                    subtype.mixIn(overrides);
		                }

		                // Create default initializer
		                if (!subtype.hasOwnProperty('init') || this.init === subtype.init) {
		                    subtype.init = function () {
		                        subtype.$super.init.apply(this, arguments);
		                    };
		                }

		                // Initializer's prototype is the subtype object
		                subtype.init.prototype = subtype;

		                // Reference supertype
		                subtype.$super = this;

		                return subtype;
		            },

		            /**
		             * Extends this object and runs the init method.
		             * Arguments to create() will be passed to init().
		             *
		             * @return {Object} The new object.
		             *
		             * @static
		             *
		             * @example
		             *
		             *     var instance = MyType.create();
		             */
		            create: function () {
		                var instance = this.extend();
		                instance.init.apply(instance, arguments);

		                return instance;
		            },

		            /**
		             * Initializes a newly created object.
		             * Override this method to add some logic when your objects are created.
		             *
		             * @example
		             *
		             *     var MyType = CryptoJS.lib.Base.extend({
		             *         init: function () {
		             *             // ...
		             *         }
		             *     });
		             */
		            init: function () {
		            },

		            /**
		             * Copies properties into this object.
		             *
		             * @param {Object} properties The properties to mix in.
		             *
		             * @example
		             *
		             *     MyType.mixIn({
		             *         field: 'value'
		             *     });
		             */
		            mixIn: function (properties) {
		                for (var propertyName in properties) {
		                    if (properties.hasOwnProperty(propertyName)) {
		                        this[propertyName] = properties[propertyName];
		                    }
		                }

		                // IE won't copy toString using the loop above
		                if (properties.hasOwnProperty('toString')) {
		                    this.toString = properties.toString;
		                }
		            },

		            /**
		             * Creates a copy of this object.
		             *
		             * @return {Object} The clone.
		             *
		             * @example
		             *
		             *     var clone = instance.clone();
		             */
		            clone: function () {
		                return this.init.prototype.extend(this);
		            }
		        };
		    }());

		    /**
		     * An array of 32-bit words.
		     *
		     * @property {Array} words The array of 32-bit words.
		     * @property {number} sigBytes The number of significant bytes in this word array.
		     */
		    var WordArray = C_lib.WordArray = Base.extend({
		        /**
		         * Initializes a newly created word array.
		         *
		         * @param {Array} words (Optional) An array of 32-bit words.
		         * @param {number} sigBytes (Optional) The number of significant bytes in the words.
		         *
		         * @example
		         *
		         *     var wordArray = CryptoJS.lib.WordArray.create();
		         *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607]);
		         *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607], 6);
		         */
		        init: function (words, sigBytes) {
		            words = this.words = words || [];

		            if (sigBytes != undefined$1) {
		                this.sigBytes = sigBytes;
		            } else {
		                this.sigBytes = words.length * 4;
		            }
		        },

		        /**
		         * Converts this word array to a string.
		         *
		         * @param {Encoder} encoder (Optional) The encoding strategy to use. Default: CryptoJS.enc.Hex
		         *
		         * @return {string} The stringified word array.
		         *
		         * @example
		         *
		         *     var string = wordArray + '';
		         *     var string = wordArray.toString();
		         *     var string = wordArray.toString(CryptoJS.enc.Utf8);
		         */
		        toString: function (encoder) {
		            return (encoder || Hex).stringify(this);
		        },

		        /**
		         * Concatenates a word array to this word array.
		         *
		         * @param {WordArray} wordArray The word array to append.
		         *
		         * @return {WordArray} This word array.
		         *
		         * @example
		         *
		         *     wordArray1.concat(wordArray2);
		         */
		        concat: function (wordArray) {
		            // Shortcuts
		            var thisWords = this.words;
		            var thatWords = wordArray.words;
		            var thisSigBytes = this.sigBytes;
		            var thatSigBytes = wordArray.sigBytes;

		            // Clamp excess bits
		            this.clamp();

		            // Concat
		            if (thisSigBytes % 4) {
		                // Copy one byte at a time
		                for (var i = 0; i < thatSigBytes; i++) {
		                    var thatByte = (thatWords[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
		                    thisWords[(thisSigBytes + i) >>> 2] |= thatByte << (24 - ((thisSigBytes + i) % 4) * 8);
		                }
		            } else {
		                // Copy one word at a time
		                for (var i = 0; i < thatSigBytes; i += 4) {
		                    thisWords[(thisSigBytes + i) >>> 2] = thatWords[i >>> 2];
		                }
		            }
		            this.sigBytes += thatSigBytes;

		            // Chainable
		            return this;
		        },

		        /**
		         * Removes insignificant bits.
		         *
		         * @example
		         *
		         *     wordArray.clamp();
		         */
		        clamp: function () {
		            // Shortcuts
		            var words = this.words;
		            var sigBytes = this.sigBytes;

		            // Clamp
		            words[sigBytes >>> 2] &= 0xffffffff << (32 - (sigBytes % 4) * 8);
		            words.length = Math.ceil(sigBytes / 4);
		        },

		        /**
		         * Creates a copy of this word array.
		         *
		         * @return {WordArray} The clone.
		         *
		         * @example
		         *
		         *     var clone = wordArray.clone();
		         */
		        clone: function () {
		            var clone = Base.clone.call(this);
		            clone.words = this.words.slice(0);

		            return clone;
		        },

		        /**
		         * Creates a word array filled with random bytes.
		         *
		         * @param {number} nBytes The number of random bytes to generate.
		         *
		         * @return {WordArray} The random word array.
		         *
		         * @static
		         *
		         * @example
		         *
		         *     var wordArray = CryptoJS.lib.WordArray.random(16);
		         */
		        random: function (nBytes) {
		            var words = [];

		            for (var i = 0; i < nBytes; i += 4) {
		                words.push(cryptoSecureRandomInt());
		            }

		            return new WordArray.init(words, nBytes);
		        }
		    });

		    /**
		     * Encoder namespace.
		     */
		    var C_enc = C.enc = {};

		    /**
		     * Hex encoding strategy.
		     */
		    var Hex = C_enc.Hex = {
		        /**
		         * Converts a word array to a hex string.
		         *
		         * @param {WordArray} wordArray The word array.
		         *
		         * @return {string} The hex string.
		         *
		         * @static
		         *
		         * @example
		         *
		         *     var hexString = CryptoJS.enc.Hex.stringify(wordArray);
		         */
		        stringify: function (wordArray) {
		            // Shortcuts
		            var words = wordArray.words;
		            var sigBytes = wordArray.sigBytes;

		            // Convert
		            var hexChars = [];
		            for (var i = 0; i < sigBytes; i++) {
		                var bite = (words[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
		                hexChars.push((bite >>> 4).toString(16));
		                hexChars.push((bite & 0x0f).toString(16));
		            }

		            return hexChars.join('');
		        },

		        /**
		         * Converts a hex string to a word array.
		         *
		         * @param {string} hexStr The hex string.
		         *
		         * @return {WordArray} The word array.
		         *
		         * @static
		         *
		         * @example
		         *
		         *     var wordArray = CryptoJS.enc.Hex.parse(hexString);
		         */
		        parse: function (hexStr) {
		            // Shortcut
		            var hexStrLength = hexStr.length;

		            // Convert
		            var words = [];
		            for (var i = 0; i < hexStrLength; i += 2) {
		                words[i >>> 3] |= parseInt(hexStr.substr(i, 2), 16) << (24 - (i % 8) * 4);
		            }

		            return new WordArray.init(words, hexStrLength / 2);
		        }
		    };

		    /**
		     * Latin1 encoding strategy.
		     */
		    var Latin1 = C_enc.Latin1 = {
		        /**
		         * Converts a word array to a Latin1 string.
		         *
		         * @param {WordArray} wordArray The word array.
		         *
		         * @return {string} The Latin1 string.
		         *
		         * @static
		         *
		         * @example
		         *
		         *     var latin1String = CryptoJS.enc.Latin1.stringify(wordArray);
		         */
		        stringify: function (wordArray) {
		            // Shortcuts
		            var words = wordArray.words;
		            var sigBytes = wordArray.sigBytes;

		            // Convert
		            var latin1Chars = [];
		            for (var i = 0; i < sigBytes; i++) {
		                var bite = (words[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
		                latin1Chars.push(String.fromCharCode(bite));
		            }

		            return latin1Chars.join('');
		        },

		        /**
		         * Converts a Latin1 string to a word array.
		         *
		         * @param {string} latin1Str The Latin1 string.
		         *
		         * @return {WordArray} The word array.
		         *
		         * @static
		         *
		         * @example
		         *
		         *     var wordArray = CryptoJS.enc.Latin1.parse(latin1String);
		         */
		        parse: function (latin1Str) {
		            // Shortcut
		            var latin1StrLength = latin1Str.length;

		            // Convert
		            var words = [];
		            for (var i = 0; i < latin1StrLength; i++) {
		                words[i >>> 2] |= (latin1Str.charCodeAt(i) & 0xff) << (24 - (i % 4) * 8);
		            }

		            return new WordArray.init(words, latin1StrLength);
		        }
		    };

		    /**
		     * UTF-8 encoding strategy.
		     */
		    var Utf8 = C_enc.Utf8 = {
		        /**
		         * Converts a word array to a UTF-8 string.
		         *
		         * @param {WordArray} wordArray The word array.
		         *
		         * @return {string} The UTF-8 string.
		         *
		         * @static
		         *
		         * @example
		         *
		         *     var utf8String = CryptoJS.enc.Utf8.stringify(wordArray);
		         */
		        stringify: function (wordArray) {
		            try {
		                return decodeURIComponent(escape(Latin1.stringify(wordArray)));
		            } catch (e) {
		                throw new Error('Malformed UTF-8 data');
		            }
		        },

		        /**
		         * Converts a UTF-8 string to a word array.
		         *
		         * @param {string} utf8Str The UTF-8 string.
		         *
		         * @return {WordArray} The word array.
		         *
		         * @static
		         *
		         * @example
		         *
		         *     var wordArray = CryptoJS.enc.Utf8.parse(utf8String);
		         */
		        parse: function (utf8Str) {
		            return Latin1.parse(unescape(encodeURIComponent(utf8Str)));
		        }
		    };

		    /**
		     * Abstract buffered block algorithm template.
		     *
		     * The property blockSize must be implemented in a concrete subtype.
		     *
		     * @property {number} _minBufferSize The number of blocks that should be kept unprocessed in the buffer. Default: 0
		     */
		    var BufferedBlockAlgorithm = C_lib.BufferedBlockAlgorithm = Base.extend({
		        /**
		         * Resets this block algorithm's data buffer to its initial state.
		         *
		         * @example
		         *
		         *     bufferedBlockAlgorithm.reset();
		         */
		        reset: function () {
		            // Initial values
		            this._data = new WordArray.init();
		            this._nDataBytes = 0;
		        },

		        /**
		         * Adds new data to this block algorithm's buffer.
		         *
		         * @param {WordArray|string} data The data to append. Strings are converted to a WordArray using UTF-8.
		         *
		         * @example
		         *
		         *     bufferedBlockAlgorithm._append('data');
		         *     bufferedBlockAlgorithm._append(wordArray);
		         */
		        _append: function (data) {
		            // Convert string to WordArray, else assume WordArray already
		            if (typeof data == 'string') {
		                data = Utf8.parse(data);
		            }

		            // Append
		            this._data.concat(data);
		            this._nDataBytes += data.sigBytes;
		        },

		        /**
		         * Processes available data blocks.
		         *
		         * This method invokes _doProcessBlock(offset), which must be implemented by a concrete subtype.
		         *
		         * @param {boolean} doFlush Whether all blocks and partial blocks should be processed.
		         *
		         * @return {WordArray} The processed data.
		         *
		         * @example
		         *
		         *     var processedData = bufferedBlockAlgorithm._process();
		         *     var processedData = bufferedBlockAlgorithm._process(!!'flush');
		         */
		        _process: function (doFlush) {
		            var processedWords;

		            // Shortcuts
		            var data = this._data;
		            var dataWords = data.words;
		            var dataSigBytes = data.sigBytes;
		            var blockSize = this.blockSize;
		            var blockSizeBytes = blockSize * 4;

		            // Count blocks ready
		            var nBlocksReady = dataSigBytes / blockSizeBytes;
		            if (doFlush) {
		                // Round up to include partial blocks
		                nBlocksReady = Math.ceil(nBlocksReady);
		            } else {
		                // Round down to include only full blocks,
		                // less the number of blocks that must remain in the buffer
		                nBlocksReady = Math.max((nBlocksReady | 0) - this._minBufferSize, 0);
		            }

		            // Count words ready
		            var nWordsReady = nBlocksReady * blockSize;

		            // Count bytes ready
		            var nBytesReady = Math.min(nWordsReady * 4, dataSigBytes);

		            // Process blocks
		            if (nWordsReady) {
		                for (var offset = 0; offset < nWordsReady; offset += blockSize) {
		                    // Perform concrete-algorithm logic
		                    this._doProcessBlock(dataWords, offset);
		                }

		                // Remove processed words
		                processedWords = dataWords.splice(0, nWordsReady);
		                data.sigBytes -= nBytesReady;
		            }

		            // Return processed words
		            return new WordArray.init(processedWords, nBytesReady);
		        },

		        /**
		         * Creates a copy of this object.
		         *
		         * @return {Object} The clone.
		         *
		         * @example
		         *
		         *     var clone = bufferedBlockAlgorithm.clone();
		         */
		        clone: function () {
		            var clone = Base.clone.call(this);
		            clone._data = this._data.clone();

		            return clone;
		        },

		        _minBufferSize: 0
		    });

		    /**
		     * Abstract hasher template.
		     *
		     * @property {number} blockSize The number of 32-bit words this hasher operates on. Default: 16 (512 bits)
		     */
		    var Hasher = C_lib.Hasher = BufferedBlockAlgorithm.extend({
		        /**
		         * Configuration options.
		         */
		        cfg: Base.extend(),

		        /**
		         * Initializes a newly created hasher.
		         *
		         * @param {Object} cfg (Optional) The configuration options to use for this hash computation.
		         *
		         * @example
		         *
		         *     var hasher = CryptoJS.algo.SHA256.create();
		         */
		        init: function (cfg) {
		            // Apply config defaults
		            this.cfg = this.cfg.extend(cfg);

		            // Set initial values
		            this.reset();
		        },

		        /**
		         * Resets this hasher to its initial state.
		         *
		         * @example
		         *
		         *     hasher.reset();
		         */
		        reset: function () {
		            // Reset data buffer
		            BufferedBlockAlgorithm.reset.call(this);

		            // Perform concrete-hasher logic
		            this._doReset();
		        },

		        /**
		         * Updates this hasher with a message.
		         *
		         * @param {WordArray|string} messageUpdate The message to append.
		         *
		         * @return {Hasher} This hasher.
		         *
		         * @example
		         *
		         *     hasher.update('message');
		         *     hasher.update(wordArray);
		         */
		        update: function (messageUpdate) {
		            // Append
		            this._append(messageUpdate);

		            // Update the hash
		            this._process();

		            // Chainable
		            return this;
		        },

		        /**
		         * Finalizes the hash computation.
		         * Note that the finalize operation is effectively a destructive, read-once operation.
		         *
		         * @param {WordArray|string} messageUpdate (Optional) A final message update.
		         *
		         * @return {WordArray} The hash.
		         *
		         * @example
		         *
		         *     var hash = hasher.finalize();
		         *     var hash = hasher.finalize('message');
		         *     var hash = hasher.finalize(wordArray);
		         */
		        finalize: function (messageUpdate) {
		            // Final message update
		            if (messageUpdate) {
		                this._append(messageUpdate);
		            }

		            // Perform concrete-hasher logic
		            var hash = this._doFinalize();

		            return hash;
		        },

		        blockSize: 512/32,

		        /**
		         * Creates a shortcut function to a hasher's object interface.
		         *
		         * @param {Hasher} hasher The hasher to create a helper for.
		         *
		         * @return {Function} The shortcut function.
		         *
		         * @static
		         *
		         * @example
		         *
		         *     var SHA256 = CryptoJS.lib.Hasher._createHelper(CryptoJS.algo.SHA256);
		         */
		        _createHelper: function (hasher) {
		            return function (message, cfg) {
		                return new hasher.init(cfg).finalize(message);
		            };
		        },

		        /**
		         * Creates a shortcut function to the HMAC's object interface.
		         *
		         * @param {Hasher} hasher The hasher to use in this HMAC helper.
		         *
		         * @return {Function} The shortcut function.
		         *
		         * @static
		         *
		         * @example
		         *
		         *     var HmacSHA256 = CryptoJS.lib.Hasher._createHmacHelper(CryptoJS.algo.SHA256);
		         */
		        _createHmacHelper: function (hasher) {
		            return function (message, key) {
		                return new C_algo.HMAC.init(hasher, key).finalize(message);
		            };
		        }
		    });

		    /**
		     * Algorithm namespace.
		     */
		    var C_algo = C.algo = {};

		    return C;
		}(Math));


		return CryptoJS;

	}));
	});

	var x64Core = createCommonjsModule(function (module, exports) {
	(function (root, factory) {
		{
			// CommonJS
			module.exports = exports = factory(core);
		}
	}(commonjsGlobal, function (CryptoJS) {

		(function (undefined$1) {
		    // Shortcuts
		    var C = CryptoJS;
		    var C_lib = C.lib;
		    var Base = C_lib.Base;
		    var X32WordArray = C_lib.WordArray;

		    /**
		     * x64 namespace.
		     */
		    var C_x64 = C.x64 = {};

		    /**
		     * A 64-bit word.
		     */
		    var X64Word = C_x64.Word = Base.extend({
		        /**
		         * Initializes a newly created 64-bit word.
		         *
		         * @param {number} high The high 32 bits.
		         * @param {number} low The low 32 bits.
		         *
		         * @example
		         *
		         *     var x64Word = CryptoJS.x64.Word.create(0x00010203, 0x04050607);
		         */
		        init: function (high, low) {
		            this.high = high;
		            this.low = low;
		        }

		        /**
		         * Bitwise NOTs this word.
		         *
		         * @return {X64Word} A new x64-Word object after negating.
		         *
		         * @example
		         *
		         *     var negated = x64Word.not();
		         */
		        // not: function () {
		            // var high = ~this.high;
		            // var low = ~this.low;

		            // return X64Word.create(high, low);
		        // },

		        /**
		         * Bitwise ANDs this word with the passed word.
		         *
		         * @param {X64Word} word The x64-Word to AND with this word.
		         *
		         * @return {X64Word} A new x64-Word object after ANDing.
		         *
		         * @example
		         *
		         *     var anded = x64Word.and(anotherX64Word);
		         */
		        // and: function (word) {
		            // var high = this.high & word.high;
		            // var low = this.low & word.low;

		            // return X64Word.create(high, low);
		        // },

		        /**
		         * Bitwise ORs this word with the passed word.
		         *
		         * @param {X64Word} word The x64-Word to OR with this word.
		         *
		         * @return {X64Word} A new x64-Word object after ORing.
		         *
		         * @example
		         *
		         *     var ored = x64Word.or(anotherX64Word);
		         */
		        // or: function (word) {
		            // var high = this.high | word.high;
		            // var low = this.low | word.low;

		            // return X64Word.create(high, low);
		        // },

		        /**
		         * Bitwise XORs this word with the passed word.
		         *
		         * @param {X64Word} word The x64-Word to XOR with this word.
		         *
		         * @return {X64Word} A new x64-Word object after XORing.
		         *
		         * @example
		         *
		         *     var xored = x64Word.xor(anotherX64Word);
		         */
		        // xor: function (word) {
		            // var high = this.high ^ word.high;
		            // var low = this.low ^ word.low;

		            // return X64Word.create(high, low);
		        // },

		        /**
		         * Shifts this word n bits to the left.
		         *
		         * @param {number} n The number of bits to shift.
		         *
		         * @return {X64Word} A new x64-Word object after shifting.
		         *
		         * @example
		         *
		         *     var shifted = x64Word.shiftL(25);
		         */
		        // shiftL: function (n) {
		            // if (n < 32) {
		                // var high = (this.high << n) | (this.low >>> (32 - n));
		                // var low = this.low << n;
		            // } else {
		                // var high = this.low << (n - 32);
		                // var low = 0;
		            // }

		            // return X64Word.create(high, low);
		        // },

		        /**
		         * Shifts this word n bits to the right.
		         *
		         * @param {number} n The number of bits to shift.
		         *
		         * @return {X64Word} A new x64-Word object after shifting.
		         *
		         * @example
		         *
		         *     var shifted = x64Word.shiftR(7);
		         */
		        // shiftR: function (n) {
		            // if (n < 32) {
		                // var low = (this.low >>> n) | (this.high << (32 - n));
		                // var high = this.high >>> n;
		            // } else {
		                // var low = this.high >>> (n - 32);
		                // var high = 0;
		            // }

		            // return X64Word.create(high, low);
		        // },

		        /**
		         * Rotates this word n bits to the left.
		         *
		         * @param {number} n The number of bits to rotate.
		         *
		         * @return {X64Word} A new x64-Word object after rotating.
		         *
		         * @example
		         *
		         *     var rotated = x64Word.rotL(25);
		         */
		        // rotL: function (n) {
		            // return this.shiftL(n).or(this.shiftR(64 - n));
		        // },

		        /**
		         * Rotates this word n bits to the right.
		         *
		         * @param {number} n The number of bits to rotate.
		         *
		         * @return {X64Word} A new x64-Word object after rotating.
		         *
		         * @example
		         *
		         *     var rotated = x64Word.rotR(7);
		         */
		        // rotR: function (n) {
		            // return this.shiftR(n).or(this.shiftL(64 - n));
		        // },

		        /**
		         * Adds this word with the passed word.
		         *
		         * @param {X64Word} word The x64-Word to add with this word.
		         *
		         * @return {X64Word} A new x64-Word object after adding.
		         *
		         * @example
		         *
		         *     var added = x64Word.add(anotherX64Word);
		         */
		        // add: function (word) {
		            // var low = (this.low + word.low) | 0;
		            // var carry = (low >>> 0) < (this.low >>> 0) ? 1 : 0;
		            // var high = (this.high + word.high + carry) | 0;

		            // return X64Word.create(high, low);
		        // }
		    });

		    /**
		     * An array of 64-bit words.
		     *
		     * @property {Array} words The array of CryptoJS.x64.Word objects.
		     * @property {number} sigBytes The number of significant bytes in this word array.
		     */
		    var X64WordArray = C_x64.WordArray = Base.extend({
		        /**
		         * Initializes a newly created word array.
		         *
		         * @param {Array} words (Optional) An array of CryptoJS.x64.Word objects.
		         * @param {number} sigBytes (Optional) The number of significant bytes in the words.
		         *
		         * @example
		         *
		         *     var wordArray = CryptoJS.x64.WordArray.create();
		         *
		         *     var wordArray = CryptoJS.x64.WordArray.create([
		         *         CryptoJS.x64.Word.create(0x00010203, 0x04050607),
		         *         CryptoJS.x64.Word.create(0x18191a1b, 0x1c1d1e1f)
		         *     ]);
		         *
		         *     var wordArray = CryptoJS.x64.WordArray.create([
		         *         CryptoJS.x64.Word.create(0x00010203, 0x04050607),
		         *         CryptoJS.x64.Word.create(0x18191a1b, 0x1c1d1e1f)
		         *     ], 10);
		         */
		        init: function (words, sigBytes) {
		            words = this.words = words || [];

		            if (sigBytes != undefined$1) {
		                this.sigBytes = sigBytes;
		            } else {
		                this.sigBytes = words.length * 8;
		            }
		        },

		        /**
		         * Converts this 64-bit word array to a 32-bit word array.
		         *
		         * @return {CryptoJS.lib.WordArray} This word array's data as a 32-bit word array.
		         *
		         * @example
		         *
		         *     var x32WordArray = x64WordArray.toX32();
		         */
		        toX32: function () {
		            // Shortcuts
		            var x64Words = this.words;
		            var x64WordsLength = x64Words.length;

		            // Convert
		            var x32Words = [];
		            for (var i = 0; i < x64WordsLength; i++) {
		                var x64Word = x64Words[i];
		                x32Words.push(x64Word.high);
		                x32Words.push(x64Word.low);
		            }

		            return X32WordArray.create(x32Words, this.sigBytes);
		        },

		        /**
		         * Creates a copy of this word array.
		         *
		         * @return {X64WordArray} The clone.
		         *
		         * @example
		         *
		         *     var clone = x64WordArray.clone();
		         */
		        clone: function () {
		            var clone = Base.clone.call(this);

		            // Clone "words" array
		            var words = clone.words = this.words.slice(0);

		            // Clone each X64Word object
		            var wordsLength = words.length;
		            for (var i = 0; i < wordsLength; i++) {
		                words[i] = words[i].clone();
		            }

		            return clone;
		        }
		    });
		}());


		return CryptoJS;

	}));
	});

	var libTypedarrays = createCommonjsModule(function (module, exports) {
	(function (root, factory) {
		{
			// CommonJS
			module.exports = exports = factory(core);
		}
	}(commonjsGlobal, function (CryptoJS) {

		(function () {
		    // Check if typed arrays are supported
		    if (typeof ArrayBuffer != 'function') {
		        return;
		    }

		    // Shortcuts
		    var C = CryptoJS;
		    var C_lib = C.lib;
		    var WordArray = C_lib.WordArray;

		    // Reference original init
		    var superInit = WordArray.init;

		    // Augment WordArray.init to handle typed arrays
		    var subInit = WordArray.init = function (typedArray) {
		        // Convert buffers to uint8
		        if (typedArray instanceof ArrayBuffer) {
		            typedArray = new Uint8Array(typedArray);
		        }

		        // Convert other array views to uint8
		        if (
		            typedArray instanceof Int8Array ||
		            (typeof Uint8ClampedArray !== "undefined" && typedArray instanceof Uint8ClampedArray) ||
		            typedArray instanceof Int16Array ||
		            typedArray instanceof Uint16Array ||
		            typedArray instanceof Int32Array ||
		            typedArray instanceof Uint32Array ||
		            typedArray instanceof Float32Array ||
		            typedArray instanceof Float64Array
		        ) {
		            typedArray = new Uint8Array(typedArray.buffer, typedArray.byteOffset, typedArray.byteLength);
		        }

		        // Handle Uint8Array
		        if (typedArray instanceof Uint8Array) {
		            // Shortcut
		            var typedArrayByteLength = typedArray.byteLength;

		            // Extract bytes
		            var words = [];
		            for (var i = 0; i < typedArrayByteLength; i++) {
		                words[i >>> 2] |= typedArray[i] << (24 - (i % 4) * 8);
		            }

		            // Initialize this word array
		            superInit.call(this, words, typedArrayByteLength);
		        } else {
		            // Else call normal init
		            superInit.apply(this, arguments);
		        }
		    };

		    subInit.prototype = WordArray;
		}());


		return CryptoJS.lib.WordArray;

	}));
	});

	var encUtf16 = createCommonjsModule(function (module, exports) {
	(function (root, factory) {
		{
			// CommonJS
			module.exports = exports = factory(core);
		}
	}(commonjsGlobal, function (CryptoJS) {

		(function () {
		    // Shortcuts
		    var C = CryptoJS;
		    var C_lib = C.lib;
		    var WordArray = C_lib.WordArray;
		    var C_enc = C.enc;

		    /**
		     * UTF-16 BE encoding strategy.
		     */
		    var Utf16BE = C_enc.Utf16 = C_enc.Utf16BE = {
		        /**
		         * Converts a word array to a UTF-16 BE string.
		         *
		         * @param {WordArray} wordArray The word array.
		         *
		         * @return {string} The UTF-16 BE string.
		         *
		         * @static
		         *
		         * @example
		         *
		         *     var utf16String = CryptoJS.enc.Utf16.stringify(wordArray);
		         */
		        stringify: function (wordArray) {
		            // Shortcuts
		            var words = wordArray.words;
		            var sigBytes = wordArray.sigBytes;

		            // Convert
		            var utf16Chars = [];
		            for (var i = 0; i < sigBytes; i += 2) {
		                var codePoint = (words[i >>> 2] >>> (16 - (i % 4) * 8)) & 0xffff;
		                utf16Chars.push(String.fromCharCode(codePoint));
		            }

		            return utf16Chars.join('');
		        },

		        /**
		         * Converts a UTF-16 BE string to a word array.
		         *
		         * @param {string} utf16Str The UTF-16 BE string.
		         *
		         * @return {WordArray} The word array.
		         *
		         * @static
		         *
		         * @example
		         *
		         *     var wordArray = CryptoJS.enc.Utf16.parse(utf16String);
		         */
		        parse: function (utf16Str) {
		            // Shortcut
		            var utf16StrLength = utf16Str.length;

		            // Convert
		            var words = [];
		            for (var i = 0; i < utf16StrLength; i++) {
		                words[i >>> 1] |= utf16Str.charCodeAt(i) << (16 - (i % 2) * 16);
		            }

		            return WordArray.create(words, utf16StrLength * 2);
		        }
		    };

		    /**
		     * UTF-16 LE encoding strategy.
		     */
		    C_enc.Utf16LE = {
		        /**
		         * Converts a word array to a UTF-16 LE string.
		         *
		         * @param {WordArray} wordArray The word array.
		         *
		         * @return {string} The UTF-16 LE string.
		         *
		         * @static
		         *
		         * @example
		         *
		         *     var utf16Str = CryptoJS.enc.Utf16LE.stringify(wordArray);
		         */
		        stringify: function (wordArray) {
		            // Shortcuts
		            var words = wordArray.words;
		            var sigBytes = wordArray.sigBytes;

		            // Convert
		            var utf16Chars = [];
		            for (var i = 0; i < sigBytes; i += 2) {
		                var codePoint = swapEndian((words[i >>> 2] >>> (16 - (i % 4) * 8)) & 0xffff);
		                utf16Chars.push(String.fromCharCode(codePoint));
		            }

		            return utf16Chars.join('');
		        },

		        /**
		         * Converts a UTF-16 LE string to a word array.
		         *
		         * @param {string} utf16Str The UTF-16 LE string.
		         *
		         * @return {WordArray} The word array.
		         *
		         * @static
		         *
		         * @example
		         *
		         *     var wordArray = CryptoJS.enc.Utf16LE.parse(utf16Str);
		         */
		        parse: function (utf16Str) {
		            // Shortcut
		            var utf16StrLength = utf16Str.length;

		            // Convert
		            var words = [];
		            for (var i = 0; i < utf16StrLength; i++) {
		                words[i >>> 1] |= swapEndian(utf16Str.charCodeAt(i) << (16 - (i % 2) * 16));
		            }

		            return WordArray.create(words, utf16StrLength * 2);
		        }
		    };

		    function swapEndian(word) {
		        return ((word << 8) & 0xff00ff00) | ((word >>> 8) & 0x00ff00ff);
		    }
		}());


		return CryptoJS.enc.Utf16;

	}));
	});

	var encBase64 = createCommonjsModule(function (module, exports) {
	(function (root, factory) {
		{
			// CommonJS
			module.exports = exports = factory(core);
		}
	}(commonjsGlobal, function (CryptoJS) {

		(function () {
		    // Shortcuts
		    var C = CryptoJS;
		    var C_lib = C.lib;
		    var WordArray = C_lib.WordArray;
		    var C_enc = C.enc;

		    /**
		     * Base64 encoding strategy.
		     */
		    var Base64 = C_enc.Base64 = {
		        /**
		         * Converts a word array to a Base64 string.
		         *
		         * @param {WordArray} wordArray The word array.
		         *
		         * @return {string} The Base64 string.
		         *
		         * @static
		         *
		         * @example
		         *
		         *     var base64String = CryptoJS.enc.Base64.stringify(wordArray);
		         */
		        stringify: function (wordArray) {
		            // Shortcuts
		            var words = wordArray.words;
		            var sigBytes = wordArray.sigBytes;
		            var map = this._map;

		            // Clamp excess bits
		            wordArray.clamp();

		            // Convert
		            var base64Chars = [];
		            for (var i = 0; i < sigBytes; i += 3) {
		                var byte1 = (words[i >>> 2]       >>> (24 - (i % 4) * 8))       & 0xff;
		                var byte2 = (words[(i + 1) >>> 2] >>> (24 - ((i + 1) % 4) * 8)) & 0xff;
		                var byte3 = (words[(i + 2) >>> 2] >>> (24 - ((i + 2) % 4) * 8)) & 0xff;

		                var triplet = (byte1 << 16) | (byte2 << 8) | byte3;

		                for (var j = 0; (j < 4) && (i + j * 0.75 < sigBytes); j++) {
		                    base64Chars.push(map.charAt((triplet >>> (6 * (3 - j))) & 0x3f));
		                }
		            }

		            // Add padding
		            var paddingChar = map.charAt(64);
		            if (paddingChar) {
		                while (base64Chars.length % 4) {
		                    base64Chars.push(paddingChar);
		                }
		            }

		            return base64Chars.join('');
		        },

		        /**
		         * Converts a Base64 string to a word array.
		         *
		         * @param {string} base64Str The Base64 string.
		         *
		         * @return {WordArray} The word array.
		         *
		         * @static
		         *
		         * @example
		         *
		         *     var wordArray = CryptoJS.enc.Base64.parse(base64String);
		         */
		        parse: function (base64Str) {
		            // Shortcuts
		            var base64StrLength = base64Str.length;
		            var map = this._map;
		            var reverseMap = this._reverseMap;

		            if (!reverseMap) {
		                    reverseMap = this._reverseMap = [];
		                    for (var j = 0; j < map.length; j++) {
		                        reverseMap[map.charCodeAt(j)] = j;
		                    }
		            }

		            // Ignore padding
		            var paddingChar = map.charAt(64);
		            if (paddingChar) {
		                var paddingIndex = base64Str.indexOf(paddingChar);
		                if (paddingIndex !== -1) {
		                    base64StrLength = paddingIndex;
		                }
		            }

		            // Convert
		            return parseLoop(base64Str, base64StrLength, reverseMap);

		        },

		        _map: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='
		    };

		    function parseLoop(base64Str, base64StrLength, reverseMap) {
		      var words = [];
		      var nBytes = 0;
		      for (var i = 0; i < base64StrLength; i++) {
		          if (i % 4) {
		              var bits1 = reverseMap[base64Str.charCodeAt(i - 1)] << ((i % 4) * 2);
		              var bits2 = reverseMap[base64Str.charCodeAt(i)] >>> (6 - (i % 4) * 2);
		              var bitsCombined = bits1 | bits2;
		              words[nBytes >>> 2] |= bitsCombined << (24 - (nBytes % 4) * 8);
		              nBytes++;
		          }
		      }
		      return WordArray.create(words, nBytes);
		    }
		}());


		return CryptoJS.enc.Base64;

	}));
	});

	var md5 = createCommonjsModule(function (module, exports) {
	(function (root, factory) {
		{
			// CommonJS
			module.exports = exports = factory(core);
		}
	}(commonjsGlobal, function (CryptoJS) {

		(function (Math) {
		    // Shortcuts
		    var C = CryptoJS;
		    var C_lib = C.lib;
		    var WordArray = C_lib.WordArray;
		    var Hasher = C_lib.Hasher;
		    var C_algo = C.algo;

		    // Constants table
		    var T = [];

		    // Compute constants
		    (function () {
		        for (var i = 0; i < 64; i++) {
		            T[i] = (Math.abs(Math.sin(i + 1)) * 0x100000000) | 0;
		        }
		    }());

		    /**
		     * MD5 hash algorithm.
		     */
		    var MD5 = C_algo.MD5 = Hasher.extend({
		        _doReset: function () {
		            this._hash = new WordArray.init([
		                0x67452301, 0xefcdab89,
		                0x98badcfe, 0x10325476
		            ]);
		        },

		        _doProcessBlock: function (M, offset) {
		            // Swap endian
		            for (var i = 0; i < 16; i++) {
		                // Shortcuts
		                var offset_i = offset + i;
		                var M_offset_i = M[offset_i];

		                M[offset_i] = (
		                    (((M_offset_i << 8)  | (M_offset_i >>> 24)) & 0x00ff00ff) |
		                    (((M_offset_i << 24) | (M_offset_i >>> 8))  & 0xff00ff00)
		                );
		            }

		            // Shortcuts
		            var H = this._hash.words;

		            var M_offset_0  = M[offset + 0];
		            var M_offset_1  = M[offset + 1];
		            var M_offset_2  = M[offset + 2];
		            var M_offset_3  = M[offset + 3];
		            var M_offset_4  = M[offset + 4];
		            var M_offset_5  = M[offset + 5];
		            var M_offset_6  = M[offset + 6];
		            var M_offset_7  = M[offset + 7];
		            var M_offset_8  = M[offset + 8];
		            var M_offset_9  = M[offset + 9];
		            var M_offset_10 = M[offset + 10];
		            var M_offset_11 = M[offset + 11];
		            var M_offset_12 = M[offset + 12];
		            var M_offset_13 = M[offset + 13];
		            var M_offset_14 = M[offset + 14];
		            var M_offset_15 = M[offset + 15];

		            // Working varialbes
		            var a = H[0];
		            var b = H[1];
		            var c = H[2];
		            var d = H[3];

		            // Computation
		            a = FF(a, b, c, d, M_offset_0,  7,  T[0]);
		            d = FF(d, a, b, c, M_offset_1,  12, T[1]);
		            c = FF(c, d, a, b, M_offset_2,  17, T[2]);
		            b = FF(b, c, d, a, M_offset_3,  22, T[3]);
		            a = FF(a, b, c, d, M_offset_4,  7,  T[4]);
		            d = FF(d, a, b, c, M_offset_5,  12, T[5]);
		            c = FF(c, d, a, b, M_offset_6,  17, T[6]);
		            b = FF(b, c, d, a, M_offset_7,  22, T[7]);
		            a = FF(a, b, c, d, M_offset_8,  7,  T[8]);
		            d = FF(d, a, b, c, M_offset_9,  12, T[9]);
		            c = FF(c, d, a, b, M_offset_10, 17, T[10]);
		            b = FF(b, c, d, a, M_offset_11, 22, T[11]);
		            a = FF(a, b, c, d, M_offset_12, 7,  T[12]);
		            d = FF(d, a, b, c, M_offset_13, 12, T[13]);
		            c = FF(c, d, a, b, M_offset_14, 17, T[14]);
		            b = FF(b, c, d, a, M_offset_15, 22, T[15]);

		            a = GG(a, b, c, d, M_offset_1,  5,  T[16]);
		            d = GG(d, a, b, c, M_offset_6,  9,  T[17]);
		            c = GG(c, d, a, b, M_offset_11, 14, T[18]);
		            b = GG(b, c, d, a, M_offset_0,  20, T[19]);
		            a = GG(a, b, c, d, M_offset_5,  5,  T[20]);
		            d = GG(d, a, b, c, M_offset_10, 9,  T[21]);
		            c = GG(c, d, a, b, M_offset_15, 14, T[22]);
		            b = GG(b, c, d, a, M_offset_4,  20, T[23]);
		            a = GG(a, b, c, d, M_offset_9,  5,  T[24]);
		            d = GG(d, a, b, c, M_offset_14, 9,  T[25]);
		            c = GG(c, d, a, b, M_offset_3,  14, T[26]);
		            b = GG(b, c, d, a, M_offset_8,  20, T[27]);
		            a = GG(a, b, c, d, M_offset_13, 5,  T[28]);
		            d = GG(d, a, b, c, M_offset_2,  9,  T[29]);
		            c = GG(c, d, a, b, M_offset_7,  14, T[30]);
		            b = GG(b, c, d, a, M_offset_12, 20, T[31]);

		            a = HH(a, b, c, d, M_offset_5,  4,  T[32]);
		            d = HH(d, a, b, c, M_offset_8,  11, T[33]);
		            c = HH(c, d, a, b, M_offset_11, 16, T[34]);
		            b = HH(b, c, d, a, M_offset_14, 23, T[35]);
		            a = HH(a, b, c, d, M_offset_1,  4,  T[36]);
		            d = HH(d, a, b, c, M_offset_4,  11, T[37]);
		            c = HH(c, d, a, b, M_offset_7,  16, T[38]);
		            b = HH(b, c, d, a, M_offset_10, 23, T[39]);
		            a = HH(a, b, c, d, M_offset_13, 4,  T[40]);
		            d = HH(d, a, b, c, M_offset_0,  11, T[41]);
		            c = HH(c, d, a, b, M_offset_3,  16, T[42]);
		            b = HH(b, c, d, a, M_offset_6,  23, T[43]);
		            a = HH(a, b, c, d, M_offset_9,  4,  T[44]);
		            d = HH(d, a, b, c, M_offset_12, 11, T[45]);
		            c = HH(c, d, a, b, M_offset_15, 16, T[46]);
		            b = HH(b, c, d, a, M_offset_2,  23, T[47]);

		            a = II(a, b, c, d, M_offset_0,  6,  T[48]);
		            d = II(d, a, b, c, M_offset_7,  10, T[49]);
		            c = II(c, d, a, b, M_offset_14, 15, T[50]);
		            b = II(b, c, d, a, M_offset_5,  21, T[51]);
		            a = II(a, b, c, d, M_offset_12, 6,  T[52]);
		            d = II(d, a, b, c, M_offset_3,  10, T[53]);
		            c = II(c, d, a, b, M_offset_10, 15, T[54]);
		            b = II(b, c, d, a, M_offset_1,  21, T[55]);
		            a = II(a, b, c, d, M_offset_8,  6,  T[56]);
		            d = II(d, a, b, c, M_offset_15, 10, T[57]);
		            c = II(c, d, a, b, M_offset_6,  15, T[58]);
		            b = II(b, c, d, a, M_offset_13, 21, T[59]);
		            a = II(a, b, c, d, M_offset_4,  6,  T[60]);
		            d = II(d, a, b, c, M_offset_11, 10, T[61]);
		            c = II(c, d, a, b, M_offset_2,  15, T[62]);
		            b = II(b, c, d, a, M_offset_9,  21, T[63]);

		            // Intermediate hash value
		            H[0] = (H[0] + a) | 0;
		            H[1] = (H[1] + b) | 0;
		            H[2] = (H[2] + c) | 0;
		            H[3] = (H[3] + d) | 0;
		        },

		        _doFinalize: function () {
		            // Shortcuts
		            var data = this._data;
		            var dataWords = data.words;

		            var nBitsTotal = this._nDataBytes * 8;
		            var nBitsLeft = data.sigBytes * 8;

		            // Add padding
		            dataWords[nBitsLeft >>> 5] |= 0x80 << (24 - nBitsLeft % 32);

		            var nBitsTotalH = Math.floor(nBitsTotal / 0x100000000);
		            var nBitsTotalL = nBitsTotal;
		            dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 15] = (
		                (((nBitsTotalH << 8)  | (nBitsTotalH >>> 24)) & 0x00ff00ff) |
		                (((nBitsTotalH << 24) | (nBitsTotalH >>> 8))  & 0xff00ff00)
		            );
		            dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 14] = (
		                (((nBitsTotalL << 8)  | (nBitsTotalL >>> 24)) & 0x00ff00ff) |
		                (((nBitsTotalL << 24) | (nBitsTotalL >>> 8))  & 0xff00ff00)
		            );

		            data.sigBytes = (dataWords.length + 1) * 4;

		            // Hash final blocks
		            this._process();

		            // Shortcuts
		            var hash = this._hash;
		            var H = hash.words;

		            // Swap endian
		            for (var i = 0; i < 4; i++) {
		                // Shortcut
		                var H_i = H[i];

		                H[i] = (((H_i << 8)  | (H_i >>> 24)) & 0x00ff00ff) |
		                       (((H_i << 24) | (H_i >>> 8))  & 0xff00ff00);
		            }

		            // Return final computed hash
		            return hash;
		        },

		        clone: function () {
		            var clone = Hasher.clone.call(this);
		            clone._hash = this._hash.clone();

		            return clone;
		        }
		    });

		    function FF(a, b, c, d, x, s, t) {
		        var n = a + ((b & c) | (~b & d)) + x + t;
		        return ((n << s) | (n >>> (32 - s))) + b;
		    }

		    function GG(a, b, c, d, x, s, t) {
		        var n = a + ((b & d) | (c & ~d)) + x + t;
		        return ((n << s) | (n >>> (32 - s))) + b;
		    }

		    function HH(a, b, c, d, x, s, t) {
		        var n = a + (b ^ c ^ d) + x + t;
		        return ((n << s) | (n >>> (32 - s))) + b;
		    }

		    function II(a, b, c, d, x, s, t) {
		        var n = a + (c ^ (b | ~d)) + x + t;
		        return ((n << s) | (n >>> (32 - s))) + b;
		    }

		    /**
		     * Shortcut function to the hasher's object interface.
		     *
		     * @param {WordArray|string} message The message to hash.
		     *
		     * @return {WordArray} The hash.
		     *
		     * @static
		     *
		     * @example
		     *
		     *     var hash = CryptoJS.MD5('message');
		     *     var hash = CryptoJS.MD5(wordArray);
		     */
		    C.MD5 = Hasher._createHelper(MD5);

		    /**
		     * Shortcut function to the HMAC's object interface.
		     *
		     * @param {WordArray|string} message The message to hash.
		     * @param {WordArray|string} key The secret key.
		     *
		     * @return {WordArray} The HMAC.
		     *
		     * @static
		     *
		     * @example
		     *
		     *     var hmac = CryptoJS.HmacMD5(message, key);
		     */
		    C.HmacMD5 = Hasher._createHmacHelper(MD5);
		}(Math));


		return CryptoJS.MD5;

	}));
	});

	var sha1 = createCommonjsModule(function (module, exports) {
	(function (root, factory) {
		{
			// CommonJS
			module.exports = exports = factory(core);
		}
	}(commonjsGlobal, function (CryptoJS) {

		(function () {
		    // Shortcuts
		    var C = CryptoJS;
		    var C_lib = C.lib;
		    var WordArray = C_lib.WordArray;
		    var Hasher = C_lib.Hasher;
		    var C_algo = C.algo;

		    // Reusable object
		    var W = [];

		    /**
		     * SHA-1 hash algorithm.
		     */
		    var SHA1 = C_algo.SHA1 = Hasher.extend({
		        _doReset: function () {
		            this._hash = new WordArray.init([
		                0x67452301, 0xefcdab89,
		                0x98badcfe, 0x10325476,
		                0xc3d2e1f0
		            ]);
		        },

		        _doProcessBlock: function (M, offset) {
		            // Shortcut
		            var H = this._hash.words;

		            // Working variables
		            var a = H[0];
		            var b = H[1];
		            var c = H[2];
		            var d = H[3];
		            var e = H[4];

		            // Computation
		            for (var i = 0; i < 80; i++) {
		                if (i < 16) {
		                    W[i] = M[offset + i] | 0;
		                } else {
		                    var n = W[i - 3] ^ W[i - 8] ^ W[i - 14] ^ W[i - 16];
		                    W[i] = (n << 1) | (n >>> 31);
		                }

		                var t = ((a << 5) | (a >>> 27)) + e + W[i];
		                if (i < 20) {
		                    t += ((b & c) | (~b & d)) + 0x5a827999;
		                } else if (i < 40) {
		                    t += (b ^ c ^ d) + 0x6ed9eba1;
		                } else if (i < 60) {
		                    t += ((b & c) | (b & d) | (c & d)) - 0x70e44324;
		                } else /* if (i < 80) */ {
		                    t += (b ^ c ^ d) - 0x359d3e2a;
		                }

		                e = d;
		                d = c;
		                c = (b << 30) | (b >>> 2);
		                b = a;
		                a = t;
		            }

		            // Intermediate hash value
		            H[0] = (H[0] + a) | 0;
		            H[1] = (H[1] + b) | 0;
		            H[2] = (H[2] + c) | 0;
		            H[3] = (H[3] + d) | 0;
		            H[4] = (H[4] + e) | 0;
		        },

		        _doFinalize: function () {
		            // Shortcuts
		            var data = this._data;
		            var dataWords = data.words;

		            var nBitsTotal = this._nDataBytes * 8;
		            var nBitsLeft = data.sigBytes * 8;

		            // Add padding
		            dataWords[nBitsLeft >>> 5] |= 0x80 << (24 - nBitsLeft % 32);
		            dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 14] = Math.floor(nBitsTotal / 0x100000000);
		            dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 15] = nBitsTotal;
		            data.sigBytes = dataWords.length * 4;

		            // Hash final blocks
		            this._process();

		            // Return final computed hash
		            return this._hash;
		        },

		        clone: function () {
		            var clone = Hasher.clone.call(this);
		            clone._hash = this._hash.clone();

		            return clone;
		        }
		    });

		    /**
		     * Shortcut function to the hasher's object interface.
		     *
		     * @param {WordArray|string} message The message to hash.
		     *
		     * @return {WordArray} The hash.
		     *
		     * @static
		     *
		     * @example
		     *
		     *     var hash = CryptoJS.SHA1('message');
		     *     var hash = CryptoJS.SHA1(wordArray);
		     */
		    C.SHA1 = Hasher._createHelper(SHA1);

		    /**
		     * Shortcut function to the HMAC's object interface.
		     *
		     * @param {WordArray|string} message The message to hash.
		     * @param {WordArray|string} key The secret key.
		     *
		     * @return {WordArray} The HMAC.
		     *
		     * @static
		     *
		     * @example
		     *
		     *     var hmac = CryptoJS.HmacSHA1(message, key);
		     */
		    C.HmacSHA1 = Hasher._createHmacHelper(SHA1);
		}());


		return CryptoJS.SHA1;

	}));
	});

	var sha256 = createCommonjsModule(function (module, exports) {
	(function (root, factory) {
		{
			// CommonJS
			module.exports = exports = factory(core);
		}
	}(commonjsGlobal, function (CryptoJS) {

		(function (Math) {
		    // Shortcuts
		    var C = CryptoJS;
		    var C_lib = C.lib;
		    var WordArray = C_lib.WordArray;
		    var Hasher = C_lib.Hasher;
		    var C_algo = C.algo;

		    // Initialization and round constants tables
		    var H = [];
		    var K = [];

		    // Compute constants
		    (function () {
		        function isPrime(n) {
		            var sqrtN = Math.sqrt(n);
		            for (var factor = 2; factor <= sqrtN; factor++) {
		                if (!(n % factor)) {
		                    return false;
		                }
		            }

		            return true;
		        }

		        function getFractionalBits(n) {
		            return ((n - (n | 0)) * 0x100000000) | 0;
		        }

		        var n = 2;
		        var nPrime = 0;
		        while (nPrime < 64) {
		            if (isPrime(n)) {
		                if (nPrime < 8) {
		                    H[nPrime] = getFractionalBits(Math.pow(n, 1 / 2));
		                }
		                K[nPrime] = getFractionalBits(Math.pow(n, 1 / 3));

		                nPrime++;
		            }

		            n++;
		        }
		    }());

		    // Reusable object
		    var W = [];

		    /**
		     * SHA-256 hash algorithm.
		     */
		    var SHA256 = C_algo.SHA256 = Hasher.extend({
		        _doReset: function () {
		            this._hash = new WordArray.init(H.slice(0));
		        },

		        _doProcessBlock: function (M, offset) {
		            // Shortcut
		            var H = this._hash.words;

		            // Working variables
		            var a = H[0];
		            var b = H[1];
		            var c = H[2];
		            var d = H[3];
		            var e = H[4];
		            var f = H[5];
		            var g = H[6];
		            var h = H[7];

		            // Computation
		            for (var i = 0; i < 64; i++) {
		                if (i < 16) {
		                    W[i] = M[offset + i] | 0;
		                } else {
		                    var gamma0x = W[i - 15];
		                    var gamma0  = ((gamma0x << 25) | (gamma0x >>> 7))  ^
		                                  ((gamma0x << 14) | (gamma0x >>> 18)) ^
		                                   (gamma0x >>> 3);

		                    var gamma1x = W[i - 2];
		                    var gamma1  = ((gamma1x << 15) | (gamma1x >>> 17)) ^
		                                  ((gamma1x << 13) | (gamma1x >>> 19)) ^
		                                   (gamma1x >>> 10);

		                    W[i] = gamma0 + W[i - 7] + gamma1 + W[i - 16];
		                }

		                var ch  = (e & f) ^ (~e & g);
		                var maj = (a & b) ^ (a & c) ^ (b & c);

		                var sigma0 = ((a << 30) | (a >>> 2)) ^ ((a << 19) | (a >>> 13)) ^ ((a << 10) | (a >>> 22));
		                var sigma1 = ((e << 26) | (e >>> 6)) ^ ((e << 21) | (e >>> 11)) ^ ((e << 7)  | (e >>> 25));

		                var t1 = h + sigma1 + ch + K[i] + W[i];
		                var t2 = sigma0 + maj;

		                h = g;
		                g = f;
		                f = e;
		                e = (d + t1) | 0;
		                d = c;
		                c = b;
		                b = a;
		                a = (t1 + t2) | 0;
		            }

		            // Intermediate hash value
		            H[0] = (H[0] + a) | 0;
		            H[1] = (H[1] + b) | 0;
		            H[2] = (H[2] + c) | 0;
		            H[3] = (H[3] + d) | 0;
		            H[4] = (H[4] + e) | 0;
		            H[5] = (H[5] + f) | 0;
		            H[6] = (H[6] + g) | 0;
		            H[7] = (H[7] + h) | 0;
		        },

		        _doFinalize: function () {
		            // Shortcuts
		            var data = this._data;
		            var dataWords = data.words;

		            var nBitsTotal = this._nDataBytes * 8;
		            var nBitsLeft = data.sigBytes * 8;

		            // Add padding
		            dataWords[nBitsLeft >>> 5] |= 0x80 << (24 - nBitsLeft % 32);
		            dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 14] = Math.floor(nBitsTotal / 0x100000000);
		            dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 15] = nBitsTotal;
		            data.sigBytes = dataWords.length * 4;

		            // Hash final blocks
		            this._process();

		            // Return final computed hash
		            return this._hash;
		        },

		        clone: function () {
		            var clone = Hasher.clone.call(this);
		            clone._hash = this._hash.clone();

		            return clone;
		        }
		    });

		    /**
		     * Shortcut function to the hasher's object interface.
		     *
		     * @param {WordArray|string} message The message to hash.
		     *
		     * @return {WordArray} The hash.
		     *
		     * @static
		     *
		     * @example
		     *
		     *     var hash = CryptoJS.SHA256('message');
		     *     var hash = CryptoJS.SHA256(wordArray);
		     */
		    C.SHA256 = Hasher._createHelper(SHA256);

		    /**
		     * Shortcut function to the HMAC's object interface.
		     *
		     * @param {WordArray|string} message The message to hash.
		     * @param {WordArray|string} key The secret key.
		     *
		     * @return {WordArray} The HMAC.
		     *
		     * @static
		     *
		     * @example
		     *
		     *     var hmac = CryptoJS.HmacSHA256(message, key);
		     */
		    C.HmacSHA256 = Hasher._createHmacHelper(SHA256);
		}(Math));


		return CryptoJS.SHA256;

	}));
	});

	var sha224 = createCommonjsModule(function (module, exports) {
	(function (root, factory, undef) {
		{
			// CommonJS
			module.exports = exports = factory(core, sha256);
		}
	}(commonjsGlobal, function (CryptoJS) {

		(function () {
		    // Shortcuts
		    var C = CryptoJS;
		    var C_lib = C.lib;
		    var WordArray = C_lib.WordArray;
		    var C_algo = C.algo;
		    var SHA256 = C_algo.SHA256;

		    /**
		     * SHA-224 hash algorithm.
		     */
		    var SHA224 = C_algo.SHA224 = SHA256.extend({
		        _doReset: function () {
		            this._hash = new WordArray.init([
		                0xc1059ed8, 0x367cd507, 0x3070dd17, 0xf70e5939,
		                0xffc00b31, 0x68581511, 0x64f98fa7, 0xbefa4fa4
		            ]);
		        },

		        _doFinalize: function () {
		            var hash = SHA256._doFinalize.call(this);

		            hash.sigBytes -= 4;

		            return hash;
		        }
		    });

		    /**
		     * Shortcut function to the hasher's object interface.
		     *
		     * @param {WordArray|string} message The message to hash.
		     *
		     * @return {WordArray} The hash.
		     *
		     * @static
		     *
		     * @example
		     *
		     *     var hash = CryptoJS.SHA224('message');
		     *     var hash = CryptoJS.SHA224(wordArray);
		     */
		    C.SHA224 = SHA256._createHelper(SHA224);

		    /**
		     * Shortcut function to the HMAC's object interface.
		     *
		     * @param {WordArray|string} message The message to hash.
		     * @param {WordArray|string} key The secret key.
		     *
		     * @return {WordArray} The HMAC.
		     *
		     * @static
		     *
		     * @example
		     *
		     *     var hmac = CryptoJS.HmacSHA224(message, key);
		     */
		    C.HmacSHA224 = SHA256._createHmacHelper(SHA224);
		}());


		return CryptoJS.SHA224;

	}));
	});

	var sha512 = createCommonjsModule(function (module, exports) {
	(function (root, factory, undef) {
		{
			// CommonJS
			module.exports = exports = factory(core, x64Core);
		}
	}(commonjsGlobal, function (CryptoJS) {

		(function () {
		    // Shortcuts
		    var C = CryptoJS;
		    var C_lib = C.lib;
		    var Hasher = C_lib.Hasher;
		    var C_x64 = C.x64;
		    var X64Word = C_x64.Word;
		    var X64WordArray = C_x64.WordArray;
		    var C_algo = C.algo;

		    function X64Word_create() {
		        return X64Word.create.apply(X64Word, arguments);
		    }

		    // Constants
		    var K = [
		        X64Word_create(0x428a2f98, 0xd728ae22), X64Word_create(0x71374491, 0x23ef65cd),
		        X64Word_create(0xb5c0fbcf, 0xec4d3b2f), X64Word_create(0xe9b5dba5, 0x8189dbbc),
		        X64Word_create(0x3956c25b, 0xf348b538), X64Word_create(0x59f111f1, 0xb605d019),
		        X64Word_create(0x923f82a4, 0xaf194f9b), X64Word_create(0xab1c5ed5, 0xda6d8118),
		        X64Word_create(0xd807aa98, 0xa3030242), X64Word_create(0x12835b01, 0x45706fbe),
		        X64Word_create(0x243185be, 0x4ee4b28c), X64Word_create(0x550c7dc3, 0xd5ffb4e2),
		        X64Word_create(0x72be5d74, 0xf27b896f), X64Word_create(0x80deb1fe, 0x3b1696b1),
		        X64Word_create(0x9bdc06a7, 0x25c71235), X64Word_create(0xc19bf174, 0xcf692694),
		        X64Word_create(0xe49b69c1, 0x9ef14ad2), X64Word_create(0xefbe4786, 0x384f25e3),
		        X64Word_create(0x0fc19dc6, 0x8b8cd5b5), X64Word_create(0x240ca1cc, 0x77ac9c65),
		        X64Word_create(0x2de92c6f, 0x592b0275), X64Word_create(0x4a7484aa, 0x6ea6e483),
		        X64Word_create(0x5cb0a9dc, 0xbd41fbd4), X64Word_create(0x76f988da, 0x831153b5),
		        X64Word_create(0x983e5152, 0xee66dfab), X64Word_create(0xa831c66d, 0x2db43210),
		        X64Word_create(0xb00327c8, 0x98fb213f), X64Word_create(0xbf597fc7, 0xbeef0ee4),
		        X64Word_create(0xc6e00bf3, 0x3da88fc2), X64Word_create(0xd5a79147, 0x930aa725),
		        X64Word_create(0x06ca6351, 0xe003826f), X64Word_create(0x14292967, 0x0a0e6e70),
		        X64Word_create(0x27b70a85, 0x46d22ffc), X64Word_create(0x2e1b2138, 0x5c26c926),
		        X64Word_create(0x4d2c6dfc, 0x5ac42aed), X64Word_create(0x53380d13, 0x9d95b3df),
		        X64Word_create(0x650a7354, 0x8baf63de), X64Word_create(0x766a0abb, 0x3c77b2a8),
		        X64Word_create(0x81c2c92e, 0x47edaee6), X64Word_create(0x92722c85, 0x1482353b),
		        X64Word_create(0xa2bfe8a1, 0x4cf10364), X64Word_create(0xa81a664b, 0xbc423001),
		        X64Word_create(0xc24b8b70, 0xd0f89791), X64Word_create(0xc76c51a3, 0x0654be30),
		        X64Word_create(0xd192e819, 0xd6ef5218), X64Word_create(0xd6990624, 0x5565a910),
		        X64Word_create(0xf40e3585, 0x5771202a), X64Word_create(0x106aa070, 0x32bbd1b8),
		        X64Word_create(0x19a4c116, 0xb8d2d0c8), X64Word_create(0x1e376c08, 0x5141ab53),
		        X64Word_create(0x2748774c, 0xdf8eeb99), X64Word_create(0x34b0bcb5, 0xe19b48a8),
		        X64Word_create(0x391c0cb3, 0xc5c95a63), X64Word_create(0x4ed8aa4a, 0xe3418acb),
		        X64Word_create(0x5b9cca4f, 0x7763e373), X64Word_create(0x682e6ff3, 0xd6b2b8a3),
		        X64Word_create(0x748f82ee, 0x5defb2fc), X64Word_create(0x78a5636f, 0x43172f60),
		        X64Word_create(0x84c87814, 0xa1f0ab72), X64Word_create(0x8cc70208, 0x1a6439ec),
		        X64Word_create(0x90befffa, 0x23631e28), X64Word_create(0xa4506ceb, 0xde82bde9),
		        X64Word_create(0xbef9a3f7, 0xb2c67915), X64Word_create(0xc67178f2, 0xe372532b),
		        X64Word_create(0xca273ece, 0xea26619c), X64Word_create(0xd186b8c7, 0x21c0c207),
		        X64Word_create(0xeada7dd6, 0xcde0eb1e), X64Word_create(0xf57d4f7f, 0xee6ed178),
		        X64Word_create(0x06f067aa, 0x72176fba), X64Word_create(0x0a637dc5, 0xa2c898a6),
		        X64Word_create(0x113f9804, 0xbef90dae), X64Word_create(0x1b710b35, 0x131c471b),
		        X64Word_create(0x28db77f5, 0x23047d84), X64Word_create(0x32caab7b, 0x40c72493),
		        X64Word_create(0x3c9ebe0a, 0x15c9bebc), X64Word_create(0x431d67c4, 0x9c100d4c),
		        X64Word_create(0x4cc5d4be, 0xcb3e42b6), X64Word_create(0x597f299c, 0xfc657e2a),
		        X64Word_create(0x5fcb6fab, 0x3ad6faec), X64Word_create(0x6c44198c, 0x4a475817)
		    ];

		    // Reusable objects
		    var W = [];
		    (function () {
		        for (var i = 0; i < 80; i++) {
		            W[i] = X64Word_create();
		        }
		    }());

		    /**
		     * SHA-512 hash algorithm.
		     */
		    var SHA512 = C_algo.SHA512 = Hasher.extend({
		        _doReset: function () {
		            this._hash = new X64WordArray.init([
		                new X64Word.init(0x6a09e667, 0xf3bcc908), new X64Word.init(0xbb67ae85, 0x84caa73b),
		                new X64Word.init(0x3c6ef372, 0xfe94f82b), new X64Word.init(0xa54ff53a, 0x5f1d36f1),
		                new X64Word.init(0x510e527f, 0xade682d1), new X64Word.init(0x9b05688c, 0x2b3e6c1f),
		                new X64Word.init(0x1f83d9ab, 0xfb41bd6b), new X64Word.init(0x5be0cd19, 0x137e2179)
		            ]);
		        },

		        _doProcessBlock: function (M, offset) {
		            // Shortcuts
		            var H = this._hash.words;

		            var H0 = H[0];
		            var H1 = H[1];
		            var H2 = H[2];
		            var H3 = H[3];
		            var H4 = H[4];
		            var H5 = H[5];
		            var H6 = H[6];
		            var H7 = H[7];

		            var H0h = H0.high;
		            var H0l = H0.low;
		            var H1h = H1.high;
		            var H1l = H1.low;
		            var H2h = H2.high;
		            var H2l = H2.low;
		            var H3h = H3.high;
		            var H3l = H3.low;
		            var H4h = H4.high;
		            var H4l = H4.low;
		            var H5h = H5.high;
		            var H5l = H5.low;
		            var H6h = H6.high;
		            var H6l = H6.low;
		            var H7h = H7.high;
		            var H7l = H7.low;

		            // Working variables
		            var ah = H0h;
		            var al = H0l;
		            var bh = H1h;
		            var bl = H1l;
		            var ch = H2h;
		            var cl = H2l;
		            var dh = H3h;
		            var dl = H3l;
		            var eh = H4h;
		            var el = H4l;
		            var fh = H5h;
		            var fl = H5l;
		            var gh = H6h;
		            var gl = H6l;
		            var hh = H7h;
		            var hl = H7l;

		            // Rounds
		            for (var i = 0; i < 80; i++) {
		                var Wil;
		                var Wih;

		                // Shortcut
		                var Wi = W[i];

		                // Extend message
		                if (i < 16) {
		                    Wih = Wi.high = M[offset + i * 2]     | 0;
		                    Wil = Wi.low  = M[offset + i * 2 + 1] | 0;
		                } else {
		                    // Gamma0
		                    var gamma0x  = W[i - 15];
		                    var gamma0xh = gamma0x.high;
		                    var gamma0xl = gamma0x.low;
		                    var gamma0h  = ((gamma0xh >>> 1) | (gamma0xl << 31)) ^ ((gamma0xh >>> 8) | (gamma0xl << 24)) ^ (gamma0xh >>> 7);
		                    var gamma0l  = ((gamma0xl >>> 1) | (gamma0xh << 31)) ^ ((gamma0xl >>> 8) | (gamma0xh << 24)) ^ ((gamma0xl >>> 7) | (gamma0xh << 25));

		                    // Gamma1
		                    var gamma1x  = W[i - 2];
		                    var gamma1xh = gamma1x.high;
		                    var gamma1xl = gamma1x.low;
		                    var gamma1h  = ((gamma1xh >>> 19) | (gamma1xl << 13)) ^ ((gamma1xh << 3) | (gamma1xl >>> 29)) ^ (gamma1xh >>> 6);
		                    var gamma1l  = ((gamma1xl >>> 19) | (gamma1xh << 13)) ^ ((gamma1xl << 3) | (gamma1xh >>> 29)) ^ ((gamma1xl >>> 6) | (gamma1xh << 26));

		                    // W[i] = gamma0 + W[i - 7] + gamma1 + W[i - 16]
		                    var Wi7  = W[i - 7];
		                    var Wi7h = Wi7.high;
		                    var Wi7l = Wi7.low;

		                    var Wi16  = W[i - 16];
		                    var Wi16h = Wi16.high;
		                    var Wi16l = Wi16.low;

		                    Wil = gamma0l + Wi7l;
		                    Wih = gamma0h + Wi7h + ((Wil >>> 0) < (gamma0l >>> 0) ? 1 : 0);
		                    Wil = Wil + gamma1l;
		                    Wih = Wih + gamma1h + ((Wil >>> 0) < (gamma1l >>> 0) ? 1 : 0);
		                    Wil = Wil + Wi16l;
		                    Wih = Wih + Wi16h + ((Wil >>> 0) < (Wi16l >>> 0) ? 1 : 0);

		                    Wi.high = Wih;
		                    Wi.low  = Wil;
		                }

		                var chh  = (eh & fh) ^ (~eh & gh);
		                var chl  = (el & fl) ^ (~el & gl);
		                var majh = (ah & bh) ^ (ah & ch) ^ (bh & ch);
		                var majl = (al & bl) ^ (al & cl) ^ (bl & cl);

		                var sigma0h = ((ah >>> 28) | (al << 4))  ^ ((ah << 30)  | (al >>> 2)) ^ ((ah << 25) | (al >>> 7));
		                var sigma0l = ((al >>> 28) | (ah << 4))  ^ ((al << 30)  | (ah >>> 2)) ^ ((al << 25) | (ah >>> 7));
		                var sigma1h = ((eh >>> 14) | (el << 18)) ^ ((eh >>> 18) | (el << 14)) ^ ((eh << 23) | (el >>> 9));
		                var sigma1l = ((el >>> 14) | (eh << 18)) ^ ((el >>> 18) | (eh << 14)) ^ ((el << 23) | (eh >>> 9));

		                // t1 = h + sigma1 + ch + K[i] + W[i]
		                var Ki  = K[i];
		                var Kih = Ki.high;
		                var Kil = Ki.low;

		                var t1l = hl + sigma1l;
		                var t1h = hh + sigma1h + ((t1l >>> 0) < (hl >>> 0) ? 1 : 0);
		                var t1l = t1l + chl;
		                var t1h = t1h + chh + ((t1l >>> 0) < (chl >>> 0) ? 1 : 0);
		                var t1l = t1l + Kil;
		                var t1h = t1h + Kih + ((t1l >>> 0) < (Kil >>> 0) ? 1 : 0);
		                var t1l = t1l + Wil;
		                var t1h = t1h + Wih + ((t1l >>> 0) < (Wil >>> 0) ? 1 : 0);

		                // t2 = sigma0 + maj
		                var t2l = sigma0l + majl;
		                var t2h = sigma0h + majh + ((t2l >>> 0) < (sigma0l >>> 0) ? 1 : 0);

		                // Update working variables
		                hh = gh;
		                hl = gl;
		                gh = fh;
		                gl = fl;
		                fh = eh;
		                fl = el;
		                el = (dl + t1l) | 0;
		                eh = (dh + t1h + ((el >>> 0) < (dl >>> 0) ? 1 : 0)) | 0;
		                dh = ch;
		                dl = cl;
		                ch = bh;
		                cl = bl;
		                bh = ah;
		                bl = al;
		                al = (t1l + t2l) | 0;
		                ah = (t1h + t2h + ((al >>> 0) < (t1l >>> 0) ? 1 : 0)) | 0;
		            }

		            // Intermediate hash value
		            H0l = H0.low  = (H0l + al);
		            H0.high = (H0h + ah + ((H0l >>> 0) < (al >>> 0) ? 1 : 0));
		            H1l = H1.low  = (H1l + bl);
		            H1.high = (H1h + bh + ((H1l >>> 0) < (bl >>> 0) ? 1 : 0));
		            H2l = H2.low  = (H2l + cl);
		            H2.high = (H2h + ch + ((H2l >>> 0) < (cl >>> 0) ? 1 : 0));
		            H3l = H3.low  = (H3l + dl);
		            H3.high = (H3h + dh + ((H3l >>> 0) < (dl >>> 0) ? 1 : 0));
		            H4l = H4.low  = (H4l + el);
		            H4.high = (H4h + eh + ((H4l >>> 0) < (el >>> 0) ? 1 : 0));
		            H5l = H5.low  = (H5l + fl);
		            H5.high = (H5h + fh + ((H5l >>> 0) < (fl >>> 0) ? 1 : 0));
		            H6l = H6.low  = (H6l + gl);
		            H6.high = (H6h + gh + ((H6l >>> 0) < (gl >>> 0) ? 1 : 0));
		            H7l = H7.low  = (H7l + hl);
		            H7.high = (H7h + hh + ((H7l >>> 0) < (hl >>> 0) ? 1 : 0));
		        },

		        _doFinalize: function () {
		            // Shortcuts
		            var data = this._data;
		            var dataWords = data.words;

		            var nBitsTotal = this._nDataBytes * 8;
		            var nBitsLeft = data.sigBytes * 8;

		            // Add padding
		            dataWords[nBitsLeft >>> 5] |= 0x80 << (24 - nBitsLeft % 32);
		            dataWords[(((nBitsLeft + 128) >>> 10) << 5) + 30] = Math.floor(nBitsTotal / 0x100000000);
		            dataWords[(((nBitsLeft + 128) >>> 10) << 5) + 31] = nBitsTotal;
		            data.sigBytes = dataWords.length * 4;

		            // Hash final blocks
		            this._process();

		            // Convert hash to 32-bit word array before returning
		            var hash = this._hash.toX32();

		            // Return final computed hash
		            return hash;
		        },

		        clone: function () {
		            var clone = Hasher.clone.call(this);
		            clone._hash = this._hash.clone();

		            return clone;
		        },

		        blockSize: 1024/32
		    });

		    /**
		     * Shortcut function to the hasher's object interface.
		     *
		     * @param {WordArray|string} message The message to hash.
		     *
		     * @return {WordArray} The hash.
		     *
		     * @static
		     *
		     * @example
		     *
		     *     var hash = CryptoJS.SHA512('message');
		     *     var hash = CryptoJS.SHA512(wordArray);
		     */
		    C.SHA512 = Hasher._createHelper(SHA512);

		    /**
		     * Shortcut function to the HMAC's object interface.
		     *
		     * @param {WordArray|string} message The message to hash.
		     * @param {WordArray|string} key The secret key.
		     *
		     * @return {WordArray} The HMAC.
		     *
		     * @static
		     *
		     * @example
		     *
		     *     var hmac = CryptoJS.HmacSHA512(message, key);
		     */
		    C.HmacSHA512 = Hasher._createHmacHelper(SHA512);
		}());


		return CryptoJS.SHA512;

	}));
	});

	var sha384 = createCommonjsModule(function (module, exports) {
	(function (root, factory, undef) {
		{
			// CommonJS
			module.exports = exports = factory(core, x64Core, sha512);
		}
	}(commonjsGlobal, function (CryptoJS) {

		(function () {
		    // Shortcuts
		    var C = CryptoJS;
		    var C_x64 = C.x64;
		    var X64Word = C_x64.Word;
		    var X64WordArray = C_x64.WordArray;
		    var C_algo = C.algo;
		    var SHA512 = C_algo.SHA512;

		    /**
		     * SHA-384 hash algorithm.
		     */
		    var SHA384 = C_algo.SHA384 = SHA512.extend({
		        _doReset: function () {
		            this._hash = new X64WordArray.init([
		                new X64Word.init(0xcbbb9d5d, 0xc1059ed8), new X64Word.init(0x629a292a, 0x367cd507),
		                new X64Word.init(0x9159015a, 0x3070dd17), new X64Word.init(0x152fecd8, 0xf70e5939),
		                new X64Word.init(0x67332667, 0xffc00b31), new X64Word.init(0x8eb44a87, 0x68581511),
		                new X64Word.init(0xdb0c2e0d, 0x64f98fa7), new X64Word.init(0x47b5481d, 0xbefa4fa4)
		            ]);
		        },

		        _doFinalize: function () {
		            var hash = SHA512._doFinalize.call(this);

		            hash.sigBytes -= 16;

		            return hash;
		        }
		    });

		    /**
		     * Shortcut function to the hasher's object interface.
		     *
		     * @param {WordArray|string} message The message to hash.
		     *
		     * @return {WordArray} The hash.
		     *
		     * @static
		     *
		     * @example
		     *
		     *     var hash = CryptoJS.SHA384('message');
		     *     var hash = CryptoJS.SHA384(wordArray);
		     */
		    C.SHA384 = SHA512._createHelper(SHA384);

		    /**
		     * Shortcut function to the HMAC's object interface.
		     *
		     * @param {WordArray|string} message The message to hash.
		     * @param {WordArray|string} key The secret key.
		     *
		     * @return {WordArray} The HMAC.
		     *
		     * @static
		     *
		     * @example
		     *
		     *     var hmac = CryptoJS.HmacSHA384(message, key);
		     */
		    C.HmacSHA384 = SHA512._createHmacHelper(SHA384);
		}());


		return CryptoJS.SHA384;

	}));
	});

	var sha3 = createCommonjsModule(function (module, exports) {
	(function (root, factory, undef) {
		{
			// CommonJS
			module.exports = exports = factory(core, x64Core);
		}
	}(commonjsGlobal, function (CryptoJS) {

		(function (Math) {
		    // Shortcuts
		    var C = CryptoJS;
		    var C_lib = C.lib;
		    var WordArray = C_lib.WordArray;
		    var Hasher = C_lib.Hasher;
		    var C_x64 = C.x64;
		    var X64Word = C_x64.Word;
		    var C_algo = C.algo;

		    // Constants tables
		    var RHO_OFFSETS = [];
		    var PI_INDEXES  = [];
		    var ROUND_CONSTANTS = [];

		    // Compute Constants
		    (function () {
		        // Compute rho offset constants
		        var x = 1, y = 0;
		        for (var t = 0; t < 24; t++) {
		            RHO_OFFSETS[x + 5 * y] = ((t + 1) * (t + 2) / 2) % 64;

		            var newX = y % 5;
		            var newY = (2 * x + 3 * y) % 5;
		            x = newX;
		            y = newY;
		        }

		        // Compute pi index constants
		        for (var x = 0; x < 5; x++) {
		            for (var y = 0; y < 5; y++) {
		                PI_INDEXES[x + 5 * y] = y + ((2 * x + 3 * y) % 5) * 5;
		            }
		        }

		        // Compute round constants
		        var LFSR = 0x01;
		        for (var i = 0; i < 24; i++) {
		            var roundConstantMsw = 0;
		            var roundConstantLsw = 0;

		            for (var j = 0; j < 7; j++) {
		                if (LFSR & 0x01) {
		                    var bitPosition = (1 << j) - 1;
		                    if (bitPosition < 32) {
		                        roundConstantLsw ^= 1 << bitPosition;
		                    } else /* if (bitPosition >= 32) */ {
		                        roundConstantMsw ^= 1 << (bitPosition - 32);
		                    }
		                }

		                // Compute next LFSR
		                if (LFSR & 0x80) {
		                    // Primitive polynomial over GF(2): x^8 + x^6 + x^5 + x^4 + 1
		                    LFSR = (LFSR << 1) ^ 0x71;
		                } else {
		                    LFSR <<= 1;
		                }
		            }

		            ROUND_CONSTANTS[i] = X64Word.create(roundConstantMsw, roundConstantLsw);
		        }
		    }());

		    // Reusable objects for temporary values
		    var T = [];
		    (function () {
		        for (var i = 0; i < 25; i++) {
		            T[i] = X64Word.create();
		        }
		    }());

		    /**
		     * SHA-3 hash algorithm.
		     */
		    var SHA3 = C_algo.SHA3 = Hasher.extend({
		        /**
		         * Configuration options.
		         *
		         * @property {number} outputLength
		         *   The desired number of bits in the output hash.
		         *   Only values permitted are: 224, 256, 384, 512.
		         *   Default: 512
		         */
		        cfg: Hasher.cfg.extend({
		            outputLength: 512
		        }),

		        _doReset: function () {
		            var state = this._state = [];
		            for (var i = 0; i < 25; i++) {
		                state[i] = new X64Word.init();
		            }

		            this.blockSize = (1600 - 2 * this.cfg.outputLength) / 32;
		        },

		        _doProcessBlock: function (M, offset) {
		            // Shortcuts
		            var state = this._state;
		            var nBlockSizeLanes = this.blockSize / 2;

		            // Absorb
		            for (var i = 0; i < nBlockSizeLanes; i++) {
		                // Shortcuts
		                var M2i  = M[offset + 2 * i];
		                var M2i1 = M[offset + 2 * i + 1];

		                // Swap endian
		                M2i = (
		                    (((M2i << 8)  | (M2i >>> 24)) & 0x00ff00ff) |
		                    (((M2i << 24) | (M2i >>> 8))  & 0xff00ff00)
		                );
		                M2i1 = (
		                    (((M2i1 << 8)  | (M2i1 >>> 24)) & 0x00ff00ff) |
		                    (((M2i1 << 24) | (M2i1 >>> 8))  & 0xff00ff00)
		                );

		                // Absorb message into state
		                var lane = state[i];
		                lane.high ^= M2i1;
		                lane.low  ^= M2i;
		            }

		            // Rounds
		            for (var round = 0; round < 24; round++) {
		                // Theta
		                for (var x = 0; x < 5; x++) {
		                    // Mix column lanes
		                    var tMsw = 0, tLsw = 0;
		                    for (var y = 0; y < 5; y++) {
		                        var lane = state[x + 5 * y];
		                        tMsw ^= lane.high;
		                        tLsw ^= lane.low;
		                    }

		                    // Temporary values
		                    var Tx = T[x];
		                    Tx.high = tMsw;
		                    Tx.low  = tLsw;
		                }
		                for (var x = 0; x < 5; x++) {
		                    // Shortcuts
		                    var Tx4 = T[(x + 4) % 5];
		                    var Tx1 = T[(x + 1) % 5];
		                    var Tx1Msw = Tx1.high;
		                    var Tx1Lsw = Tx1.low;

		                    // Mix surrounding columns
		                    var tMsw = Tx4.high ^ ((Tx1Msw << 1) | (Tx1Lsw >>> 31));
		                    var tLsw = Tx4.low  ^ ((Tx1Lsw << 1) | (Tx1Msw >>> 31));
		                    for (var y = 0; y < 5; y++) {
		                        var lane = state[x + 5 * y];
		                        lane.high ^= tMsw;
		                        lane.low  ^= tLsw;
		                    }
		                }

		                // Rho Pi
		                for (var laneIndex = 1; laneIndex < 25; laneIndex++) {
		                    var tMsw;
		                    var tLsw;

		                    // Shortcuts
		                    var lane = state[laneIndex];
		                    var laneMsw = lane.high;
		                    var laneLsw = lane.low;
		                    var rhoOffset = RHO_OFFSETS[laneIndex];

		                    // Rotate lanes
		                    if (rhoOffset < 32) {
		                        tMsw = (laneMsw << rhoOffset) | (laneLsw >>> (32 - rhoOffset));
		                        tLsw = (laneLsw << rhoOffset) | (laneMsw >>> (32 - rhoOffset));
		                    } else /* if (rhoOffset >= 32) */ {
		                        tMsw = (laneLsw << (rhoOffset - 32)) | (laneMsw >>> (64 - rhoOffset));
		                        tLsw = (laneMsw << (rhoOffset - 32)) | (laneLsw >>> (64 - rhoOffset));
		                    }

		                    // Transpose lanes
		                    var TPiLane = T[PI_INDEXES[laneIndex]];
		                    TPiLane.high = tMsw;
		                    TPiLane.low  = tLsw;
		                }

		                // Rho pi at x = y = 0
		                var T0 = T[0];
		                var state0 = state[0];
		                T0.high = state0.high;
		                T0.low  = state0.low;

		                // Chi
		                for (var x = 0; x < 5; x++) {
		                    for (var y = 0; y < 5; y++) {
		                        // Shortcuts
		                        var laneIndex = x + 5 * y;
		                        var lane = state[laneIndex];
		                        var TLane = T[laneIndex];
		                        var Tx1Lane = T[((x + 1) % 5) + 5 * y];
		                        var Tx2Lane = T[((x + 2) % 5) + 5 * y];

		                        // Mix rows
		                        lane.high = TLane.high ^ (~Tx1Lane.high & Tx2Lane.high);
		                        lane.low  = TLane.low  ^ (~Tx1Lane.low  & Tx2Lane.low);
		                    }
		                }

		                // Iota
		                var lane = state[0];
		                var roundConstant = ROUND_CONSTANTS[round];
		                lane.high ^= roundConstant.high;
		                lane.low  ^= roundConstant.low;
		            }
		        },

		        _doFinalize: function () {
		            // Shortcuts
		            var data = this._data;
		            var dataWords = data.words;
		            var nBitsTotal = this._nDataBytes * 8;
		            var nBitsLeft = data.sigBytes * 8;
		            var blockSizeBits = this.blockSize * 32;

		            // Add padding
		            dataWords[nBitsLeft >>> 5] |= 0x1 << (24 - nBitsLeft % 32);
		            dataWords[((Math.ceil((nBitsLeft + 1) / blockSizeBits) * blockSizeBits) >>> 5) - 1] |= 0x80;
		            data.sigBytes = dataWords.length * 4;

		            // Hash final blocks
		            this._process();

		            // Shortcuts
		            var state = this._state;
		            var outputLengthBytes = this.cfg.outputLength / 8;
		            var outputLengthLanes = outputLengthBytes / 8;

		            // Squeeze
		            var hashWords = [];
		            for (var i = 0; i < outputLengthLanes; i++) {
		                // Shortcuts
		                var lane = state[i];
		                var laneMsw = lane.high;
		                var laneLsw = lane.low;

		                // Swap endian
		                laneMsw = (
		                    (((laneMsw << 8)  | (laneMsw >>> 24)) & 0x00ff00ff) |
		                    (((laneMsw << 24) | (laneMsw >>> 8))  & 0xff00ff00)
		                );
		                laneLsw = (
		                    (((laneLsw << 8)  | (laneLsw >>> 24)) & 0x00ff00ff) |
		                    (((laneLsw << 24) | (laneLsw >>> 8))  & 0xff00ff00)
		                );

		                // Squeeze state to retrieve hash
		                hashWords.push(laneLsw);
		                hashWords.push(laneMsw);
		            }

		            // Return final computed hash
		            return new WordArray.init(hashWords, outputLengthBytes);
		        },

		        clone: function () {
		            var clone = Hasher.clone.call(this);

		            var state = clone._state = this._state.slice(0);
		            for (var i = 0; i < 25; i++) {
		                state[i] = state[i].clone();
		            }

		            return clone;
		        }
		    });

		    /**
		     * Shortcut function to the hasher's object interface.
		     *
		     * @param {WordArray|string} message The message to hash.
		     *
		     * @return {WordArray} The hash.
		     *
		     * @static
		     *
		     * @example
		     *
		     *     var hash = CryptoJS.SHA3('message');
		     *     var hash = CryptoJS.SHA3(wordArray);
		     */
		    C.SHA3 = Hasher._createHelper(SHA3);

		    /**
		     * Shortcut function to the HMAC's object interface.
		     *
		     * @param {WordArray|string} message The message to hash.
		     * @param {WordArray|string} key The secret key.
		     *
		     * @return {WordArray} The HMAC.
		     *
		     * @static
		     *
		     * @example
		     *
		     *     var hmac = CryptoJS.HmacSHA3(message, key);
		     */
		    C.HmacSHA3 = Hasher._createHmacHelper(SHA3);
		}(Math));


		return CryptoJS.SHA3;

	}));
	});

	var ripemd160 = createCommonjsModule(function (module, exports) {
	(function (root, factory) {
		{
			// CommonJS
			module.exports = exports = factory(core);
		}
	}(commonjsGlobal, function (CryptoJS) {

		/** @preserve
		(c) 2012 by Cédric Mesnil. All rights reserved.

		Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

		    - Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
		    - Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.

		THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
		*/

		(function (Math) {
		    // Shortcuts
		    var C = CryptoJS;
		    var C_lib = C.lib;
		    var WordArray = C_lib.WordArray;
		    var Hasher = C_lib.Hasher;
		    var C_algo = C.algo;

		    // Constants table
		    var _zl = WordArray.create([
		        0,  1,  2,  3,  4,  5,  6,  7,  8,  9, 10, 11, 12, 13, 14, 15,
		        7,  4, 13,  1, 10,  6, 15,  3, 12,  0,  9,  5,  2, 14, 11,  8,
		        3, 10, 14,  4,  9, 15,  8,  1,  2,  7,  0,  6, 13, 11,  5, 12,
		        1,  9, 11, 10,  0,  8, 12,  4, 13,  3,  7, 15, 14,  5,  6,  2,
		        4,  0,  5,  9,  7, 12,  2, 10, 14,  1,  3,  8, 11,  6, 15, 13]);
		    var _zr = WordArray.create([
		        5, 14,  7,  0,  9,  2, 11,  4, 13,  6, 15,  8,  1, 10,  3, 12,
		        6, 11,  3,  7,  0, 13,  5, 10, 14, 15,  8, 12,  4,  9,  1,  2,
		        15,  5,  1,  3,  7, 14,  6,  9, 11,  8, 12,  2, 10,  0,  4, 13,
		        8,  6,  4,  1,  3, 11, 15,  0,  5, 12,  2, 13,  9,  7, 10, 14,
		        12, 15, 10,  4,  1,  5,  8,  7,  6,  2, 13, 14,  0,  3,  9, 11]);
		    var _sl = WordArray.create([
		         11, 14, 15, 12,  5,  8,  7,  9, 11, 13, 14, 15,  6,  7,  9,  8,
		        7, 6,   8, 13, 11,  9,  7, 15,  7, 12, 15,  9, 11,  7, 13, 12,
		        11, 13,  6,  7, 14,  9, 13, 15, 14,  8, 13,  6,  5, 12,  7,  5,
		          11, 12, 14, 15, 14, 15,  9,  8,  9, 14,  5,  6,  8,  6,  5, 12,
		        9, 15,  5, 11,  6,  8, 13, 12,  5, 12, 13, 14, 11,  8,  5,  6 ]);
		    var _sr = WordArray.create([
		        8,  9,  9, 11, 13, 15, 15,  5,  7,  7,  8, 11, 14, 14, 12,  6,
		        9, 13, 15,  7, 12,  8,  9, 11,  7,  7, 12,  7,  6, 15, 13, 11,
		        9,  7, 15, 11,  8,  6,  6, 14, 12, 13,  5, 14, 13, 13,  7,  5,
		        15,  5,  8, 11, 14, 14,  6, 14,  6,  9, 12,  9, 12,  5, 15,  8,
		        8,  5, 12,  9, 12,  5, 14,  6,  8, 13,  6,  5, 15, 13, 11, 11 ]);

		    var _hl =  WordArray.create([ 0x00000000, 0x5A827999, 0x6ED9EBA1, 0x8F1BBCDC, 0xA953FD4E]);
		    var _hr =  WordArray.create([ 0x50A28BE6, 0x5C4DD124, 0x6D703EF3, 0x7A6D76E9, 0x00000000]);

		    /**
		     * RIPEMD160 hash algorithm.
		     */
		    var RIPEMD160 = C_algo.RIPEMD160 = Hasher.extend({
		        _doReset: function () {
		            this._hash  = WordArray.create([0x67452301, 0xEFCDAB89, 0x98BADCFE, 0x10325476, 0xC3D2E1F0]);
		        },

		        _doProcessBlock: function (M, offset) {

		            // Swap endian
		            for (var i = 0; i < 16; i++) {
		                // Shortcuts
		                var offset_i = offset + i;
		                var M_offset_i = M[offset_i];

		                // Swap
		                M[offset_i] = (
		                    (((M_offset_i << 8)  | (M_offset_i >>> 24)) & 0x00ff00ff) |
		                    (((M_offset_i << 24) | (M_offset_i >>> 8))  & 0xff00ff00)
		                );
		            }
		            // Shortcut
		            var H  = this._hash.words;
		            var hl = _hl.words;
		            var hr = _hr.words;
		            var zl = _zl.words;
		            var zr = _zr.words;
		            var sl = _sl.words;
		            var sr = _sr.words;

		            // Working variables
		            var al, bl, cl, dl, el;
		            var ar, br, cr, dr, er;

		            ar = al = H[0];
		            br = bl = H[1];
		            cr = cl = H[2];
		            dr = dl = H[3];
		            er = el = H[4];
		            // Computation
		            var t;
		            for (var i = 0; i < 80; i += 1) {
		                t = (al +  M[offset+zl[i]])|0;
		                if (i<16){
			            t +=  f1(bl,cl,dl) + hl[0];
		                } else if (i<32) {
			            t +=  f2(bl,cl,dl) + hl[1];
		                } else if (i<48) {
			            t +=  f3(bl,cl,dl) + hl[2];
		                } else if (i<64) {
			            t +=  f4(bl,cl,dl) + hl[3];
		                } else {// if (i<80) {
			            t +=  f5(bl,cl,dl) + hl[4];
		                }
		                t = t|0;
		                t =  rotl(t,sl[i]);
		                t = (t+el)|0;
		                al = el;
		                el = dl;
		                dl = rotl(cl, 10);
		                cl = bl;
		                bl = t;

		                t = (ar + M[offset+zr[i]])|0;
		                if (i<16){
			            t +=  f5(br,cr,dr) + hr[0];
		                } else if (i<32) {
			            t +=  f4(br,cr,dr) + hr[1];
		                } else if (i<48) {
			            t +=  f3(br,cr,dr) + hr[2];
		                } else if (i<64) {
			            t +=  f2(br,cr,dr) + hr[3];
		                } else {// if (i<80) {
			            t +=  f1(br,cr,dr) + hr[4];
		                }
		                t = t|0;
		                t =  rotl(t,sr[i]) ;
		                t = (t+er)|0;
		                ar = er;
		                er = dr;
		                dr = rotl(cr, 10);
		                cr = br;
		                br = t;
		            }
		            // Intermediate hash value
		            t    = (H[1] + cl + dr)|0;
		            H[1] = (H[2] + dl + er)|0;
		            H[2] = (H[3] + el + ar)|0;
		            H[3] = (H[4] + al + br)|0;
		            H[4] = (H[0] + bl + cr)|0;
		            H[0] =  t;
		        },

		        _doFinalize: function () {
		            // Shortcuts
		            var data = this._data;
		            var dataWords = data.words;

		            var nBitsTotal = this._nDataBytes * 8;
		            var nBitsLeft = data.sigBytes * 8;

		            // Add padding
		            dataWords[nBitsLeft >>> 5] |= 0x80 << (24 - nBitsLeft % 32);
		            dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 14] = (
		                (((nBitsTotal << 8)  | (nBitsTotal >>> 24)) & 0x00ff00ff) |
		                (((nBitsTotal << 24) | (nBitsTotal >>> 8))  & 0xff00ff00)
		            );
		            data.sigBytes = (dataWords.length + 1) * 4;

		            // Hash final blocks
		            this._process();

		            // Shortcuts
		            var hash = this._hash;
		            var H = hash.words;

		            // Swap endian
		            for (var i = 0; i < 5; i++) {
		                // Shortcut
		                var H_i = H[i];

		                // Swap
		                H[i] = (((H_i << 8)  | (H_i >>> 24)) & 0x00ff00ff) |
		                       (((H_i << 24) | (H_i >>> 8))  & 0xff00ff00);
		            }

		            // Return final computed hash
		            return hash;
		        },

		        clone: function () {
		            var clone = Hasher.clone.call(this);
		            clone._hash = this._hash.clone();

		            return clone;
		        }
		    });


		    function f1(x, y, z) {
		        return ((x) ^ (y) ^ (z));

		    }

		    function f2(x, y, z) {
		        return (((x)&(y)) | ((~x)&(z)));
		    }

		    function f3(x, y, z) {
		        return (((x) | (~(y))) ^ (z));
		    }

		    function f4(x, y, z) {
		        return (((x) & (z)) | ((y)&(~(z))));
		    }

		    function f5(x, y, z) {
		        return ((x) ^ ((y) |(~(z))));

		    }

		    function rotl(x,n) {
		        return (x<<n) | (x>>>(32-n));
		    }


		    /**
		     * Shortcut function to the hasher's object interface.
		     *
		     * @param {WordArray|string} message The message to hash.
		     *
		     * @return {WordArray} The hash.
		     *
		     * @static
		     *
		     * @example
		     *
		     *     var hash = CryptoJS.RIPEMD160('message');
		     *     var hash = CryptoJS.RIPEMD160(wordArray);
		     */
		    C.RIPEMD160 = Hasher._createHelper(RIPEMD160);

		    /**
		     * Shortcut function to the HMAC's object interface.
		     *
		     * @param {WordArray|string} message The message to hash.
		     * @param {WordArray|string} key The secret key.
		     *
		     * @return {WordArray} The HMAC.
		     *
		     * @static
		     *
		     * @example
		     *
		     *     var hmac = CryptoJS.HmacRIPEMD160(message, key);
		     */
		    C.HmacRIPEMD160 = Hasher._createHmacHelper(RIPEMD160);
		}());


		return CryptoJS.RIPEMD160;

	}));
	});

	var hmac = createCommonjsModule(function (module, exports) {
	(function (root, factory) {
		{
			// CommonJS
			module.exports = exports = factory(core);
		}
	}(commonjsGlobal, function (CryptoJS) {

		(function () {
		    // Shortcuts
		    var C = CryptoJS;
		    var C_lib = C.lib;
		    var Base = C_lib.Base;
		    var C_enc = C.enc;
		    var Utf8 = C_enc.Utf8;
		    var C_algo = C.algo;

		    /**
		     * HMAC algorithm.
		     */
		    var HMAC = C_algo.HMAC = Base.extend({
		        /**
		         * Initializes a newly created HMAC.
		         *
		         * @param {Hasher} hasher The hash algorithm to use.
		         * @param {WordArray|string} key The secret key.
		         *
		         * @example
		         *
		         *     var hmacHasher = CryptoJS.algo.HMAC.create(CryptoJS.algo.SHA256, key);
		         */
		        init: function (hasher, key) {
		            // Init hasher
		            hasher = this._hasher = new hasher.init();

		            // Convert string to WordArray, else assume WordArray already
		            if (typeof key == 'string') {
		                key = Utf8.parse(key);
		            }

		            // Shortcuts
		            var hasherBlockSize = hasher.blockSize;
		            var hasherBlockSizeBytes = hasherBlockSize * 4;

		            // Allow arbitrary length keys
		            if (key.sigBytes > hasherBlockSizeBytes) {
		                key = hasher.finalize(key);
		            }

		            // Clamp excess bits
		            key.clamp();

		            // Clone key for inner and outer pads
		            var oKey = this._oKey = key.clone();
		            var iKey = this._iKey = key.clone();

		            // Shortcuts
		            var oKeyWords = oKey.words;
		            var iKeyWords = iKey.words;

		            // XOR keys with pad constants
		            for (var i = 0; i < hasherBlockSize; i++) {
		                oKeyWords[i] ^= 0x5c5c5c5c;
		                iKeyWords[i] ^= 0x36363636;
		            }
		            oKey.sigBytes = iKey.sigBytes = hasherBlockSizeBytes;

		            // Set initial values
		            this.reset();
		        },

		        /**
		         * Resets this HMAC to its initial state.
		         *
		         * @example
		         *
		         *     hmacHasher.reset();
		         */
		        reset: function () {
		            // Shortcut
		            var hasher = this._hasher;

		            // Reset
		            hasher.reset();
		            hasher.update(this._iKey);
		        },

		        /**
		         * Updates this HMAC with a message.
		         *
		         * @param {WordArray|string} messageUpdate The message to append.
		         *
		         * @return {HMAC} This HMAC instance.
		         *
		         * @example
		         *
		         *     hmacHasher.update('message');
		         *     hmacHasher.update(wordArray);
		         */
		        update: function (messageUpdate) {
		            this._hasher.update(messageUpdate);

		            // Chainable
		            return this;
		        },

		        /**
		         * Finalizes the HMAC computation.
		         * Note that the finalize operation is effectively a destructive, read-once operation.
		         *
		         * @param {WordArray|string} messageUpdate (Optional) A final message update.
		         *
		         * @return {WordArray} The HMAC.
		         *
		         * @example
		         *
		         *     var hmac = hmacHasher.finalize();
		         *     var hmac = hmacHasher.finalize('message');
		         *     var hmac = hmacHasher.finalize(wordArray);
		         */
		        finalize: function (messageUpdate) {
		            // Shortcut
		            var hasher = this._hasher;

		            // Compute HMAC
		            var innerHash = hasher.finalize(messageUpdate);
		            hasher.reset();
		            var hmac = hasher.finalize(this._oKey.clone().concat(innerHash));

		            return hmac;
		        }
		    });
		}());


	}));
	});

	var pbkdf2 = createCommonjsModule(function (module, exports) {
	(function (root, factory, undef) {
		{
			// CommonJS
			module.exports = exports = factory(core, sha1, hmac);
		}
	}(commonjsGlobal, function (CryptoJS) {

		(function () {
		    // Shortcuts
		    var C = CryptoJS;
		    var C_lib = C.lib;
		    var Base = C_lib.Base;
		    var WordArray = C_lib.WordArray;
		    var C_algo = C.algo;
		    var SHA1 = C_algo.SHA1;
		    var HMAC = C_algo.HMAC;

		    /**
		     * Password-Based Key Derivation Function 2 algorithm.
		     */
		    var PBKDF2 = C_algo.PBKDF2 = Base.extend({
		        /**
		         * Configuration options.
		         *
		         * @property {number} keySize The key size in words to generate. Default: 4 (128 bits)
		         * @property {Hasher} hasher The hasher to use. Default: SHA1
		         * @property {number} iterations The number of iterations to perform. Default: 1
		         */
		        cfg: Base.extend({
		            keySize: 128/32,
		            hasher: SHA1,
		            iterations: 1
		        }),

		        /**
		         * Initializes a newly created key derivation function.
		         *
		         * @param {Object} cfg (Optional) The configuration options to use for the derivation.
		         *
		         * @example
		         *
		         *     var kdf = CryptoJS.algo.PBKDF2.create();
		         *     var kdf = CryptoJS.algo.PBKDF2.create({ keySize: 8 });
		         *     var kdf = CryptoJS.algo.PBKDF2.create({ keySize: 8, iterations: 1000 });
		         */
		        init: function (cfg) {
		            this.cfg = this.cfg.extend(cfg);
		        },

		        /**
		         * Computes the Password-Based Key Derivation Function 2.
		         *
		         * @param {WordArray|string} password The password.
		         * @param {WordArray|string} salt A salt.
		         *
		         * @return {WordArray} The derived key.
		         *
		         * @example
		         *
		         *     var key = kdf.compute(password, salt);
		         */
		        compute: function (password, salt) {
		            // Shortcut
		            var cfg = this.cfg;

		            // Init HMAC
		            var hmac = HMAC.create(cfg.hasher, password);

		            // Initial values
		            var derivedKey = WordArray.create();
		            var blockIndex = WordArray.create([0x00000001]);

		            // Shortcuts
		            var derivedKeyWords = derivedKey.words;
		            var blockIndexWords = blockIndex.words;
		            var keySize = cfg.keySize;
		            var iterations = cfg.iterations;

		            // Generate key
		            while (derivedKeyWords.length < keySize) {
		                var block = hmac.update(salt).finalize(blockIndex);
		                hmac.reset();

		                // Shortcuts
		                var blockWords = block.words;
		                var blockWordsLength = blockWords.length;

		                // Iterations
		                var intermediate = block;
		                for (var i = 1; i < iterations; i++) {
		                    intermediate = hmac.finalize(intermediate);
		                    hmac.reset();

		                    // Shortcut
		                    var intermediateWords = intermediate.words;

		                    // XOR intermediate with block
		                    for (var j = 0; j < blockWordsLength; j++) {
		                        blockWords[j] ^= intermediateWords[j];
		                    }
		                }

		                derivedKey.concat(block);
		                blockIndexWords[0]++;
		            }
		            derivedKey.sigBytes = keySize * 4;

		            return derivedKey;
		        }
		    });

		    /**
		     * Computes the Password-Based Key Derivation Function 2.
		     *
		     * @param {WordArray|string} password The password.
		     * @param {WordArray|string} salt A salt.
		     * @param {Object} cfg (Optional) The configuration options to use for this computation.
		     *
		     * @return {WordArray} The derived key.
		     *
		     * @static
		     *
		     * @example
		     *
		     *     var key = CryptoJS.PBKDF2(password, salt);
		     *     var key = CryptoJS.PBKDF2(password, salt, { keySize: 8 });
		     *     var key = CryptoJS.PBKDF2(password, salt, { keySize: 8, iterations: 1000 });
		     */
		    C.PBKDF2 = function (password, salt, cfg) {
		        return PBKDF2.create(cfg).compute(password, salt);
		    };
		}());


		return CryptoJS.PBKDF2;

	}));
	});

	var evpkdf = createCommonjsModule(function (module, exports) {
	(function (root, factory, undef) {
		{
			// CommonJS
			module.exports = exports = factory(core, sha1, hmac);
		}
	}(commonjsGlobal, function (CryptoJS) {

		(function () {
		    // Shortcuts
		    var C = CryptoJS;
		    var C_lib = C.lib;
		    var Base = C_lib.Base;
		    var WordArray = C_lib.WordArray;
		    var C_algo = C.algo;
		    var MD5 = C_algo.MD5;

		    /**
		     * This key derivation function is meant to conform with EVP_BytesToKey.
		     * www.openssl.org/docs/crypto/EVP_BytesToKey.html
		     */
		    var EvpKDF = C_algo.EvpKDF = Base.extend({
		        /**
		         * Configuration options.
		         *
		         * @property {number} keySize The key size in words to generate. Default: 4 (128 bits)
		         * @property {Hasher} hasher The hash algorithm to use. Default: MD5
		         * @property {number} iterations The number of iterations to perform. Default: 1
		         */
		        cfg: Base.extend({
		            keySize: 128/32,
		            hasher: MD5,
		            iterations: 1
		        }),

		        /**
		         * Initializes a newly created key derivation function.
		         *
		         * @param {Object} cfg (Optional) The configuration options to use for the derivation.
		         *
		         * @example
		         *
		         *     var kdf = CryptoJS.algo.EvpKDF.create();
		         *     var kdf = CryptoJS.algo.EvpKDF.create({ keySize: 8 });
		         *     var kdf = CryptoJS.algo.EvpKDF.create({ keySize: 8, iterations: 1000 });
		         */
		        init: function (cfg) {
		            this.cfg = this.cfg.extend(cfg);
		        },

		        /**
		         * Derives a key from a password.
		         *
		         * @param {WordArray|string} password The password.
		         * @param {WordArray|string} salt A salt.
		         *
		         * @return {WordArray} The derived key.
		         *
		         * @example
		         *
		         *     var key = kdf.compute(password, salt);
		         */
		        compute: function (password, salt) {
		            var block;

		            // Shortcut
		            var cfg = this.cfg;

		            // Init hasher
		            var hasher = cfg.hasher.create();

		            // Initial values
		            var derivedKey = WordArray.create();

		            // Shortcuts
		            var derivedKeyWords = derivedKey.words;
		            var keySize = cfg.keySize;
		            var iterations = cfg.iterations;

		            // Generate key
		            while (derivedKeyWords.length < keySize) {
		                if (block) {
		                    hasher.update(block);
		                }
		                block = hasher.update(password).finalize(salt);
		                hasher.reset();

		                // Iterations
		                for (var i = 1; i < iterations; i++) {
		                    block = hasher.finalize(block);
		                    hasher.reset();
		                }

		                derivedKey.concat(block);
		            }
		            derivedKey.sigBytes = keySize * 4;

		            return derivedKey;
		        }
		    });

		    /**
		     * Derives a key from a password.
		     *
		     * @param {WordArray|string} password The password.
		     * @param {WordArray|string} salt A salt.
		     * @param {Object} cfg (Optional) The configuration options to use for this computation.
		     *
		     * @return {WordArray} The derived key.
		     *
		     * @static
		     *
		     * @example
		     *
		     *     var key = CryptoJS.EvpKDF(password, salt);
		     *     var key = CryptoJS.EvpKDF(password, salt, { keySize: 8 });
		     *     var key = CryptoJS.EvpKDF(password, salt, { keySize: 8, iterations: 1000 });
		     */
		    C.EvpKDF = function (password, salt, cfg) {
		        return EvpKDF.create(cfg).compute(password, salt);
		    };
		}());


		return CryptoJS.EvpKDF;

	}));
	});

	var cipherCore = createCommonjsModule(function (module, exports) {
	(function (root, factory, undef) {
		{
			// CommonJS
			module.exports = exports = factory(core, evpkdf);
		}
	}(commonjsGlobal, function (CryptoJS) {

		/**
		 * Cipher core components.
		 */
		CryptoJS.lib.Cipher || (function (undefined$1) {
		    // Shortcuts
		    var C = CryptoJS;
		    var C_lib = C.lib;
		    var Base = C_lib.Base;
		    var WordArray = C_lib.WordArray;
		    var BufferedBlockAlgorithm = C_lib.BufferedBlockAlgorithm;
		    var C_enc = C.enc;
		    var Utf8 = C_enc.Utf8;
		    var Base64 = C_enc.Base64;
		    var C_algo = C.algo;
		    var EvpKDF = C_algo.EvpKDF;

		    /**
		     * Abstract base cipher template.
		     *
		     * @property {number} keySize This cipher's key size. Default: 4 (128 bits)
		     * @property {number} ivSize This cipher's IV size. Default: 4 (128 bits)
		     * @property {number} _ENC_XFORM_MODE A constant representing encryption mode.
		     * @property {number} _DEC_XFORM_MODE A constant representing decryption mode.
		     */
		    var Cipher = C_lib.Cipher = BufferedBlockAlgorithm.extend({
		        /**
		         * Configuration options.
		         *
		         * @property {WordArray} iv The IV to use for this operation.
		         */
		        cfg: Base.extend(),

		        /**
		         * Creates this cipher in encryption mode.
		         *
		         * @param {WordArray} key The key.
		         * @param {Object} cfg (Optional) The configuration options to use for this operation.
		         *
		         * @return {Cipher} A cipher instance.
		         *
		         * @static
		         *
		         * @example
		         *
		         *     var cipher = CryptoJS.algo.AES.createEncryptor(keyWordArray, { iv: ivWordArray });
		         */
		        createEncryptor: function (key, cfg) {
		            return this.create(this._ENC_XFORM_MODE, key, cfg);
		        },

		        /**
		         * Creates this cipher in decryption mode.
		         *
		         * @param {WordArray} key The key.
		         * @param {Object} cfg (Optional) The configuration options to use for this operation.
		         *
		         * @return {Cipher} A cipher instance.
		         *
		         * @static
		         *
		         * @example
		         *
		         *     var cipher = CryptoJS.algo.AES.createDecryptor(keyWordArray, { iv: ivWordArray });
		         */
		        createDecryptor: function (key, cfg) {
		            return this.create(this._DEC_XFORM_MODE, key, cfg);
		        },

		        /**
		         * Initializes a newly created cipher.
		         *
		         * @param {number} xformMode Either the encryption or decryption transormation mode constant.
		         * @param {WordArray} key The key.
		         * @param {Object} cfg (Optional) The configuration options to use for this operation.
		         *
		         * @example
		         *
		         *     var cipher = CryptoJS.algo.AES.create(CryptoJS.algo.AES._ENC_XFORM_MODE, keyWordArray, { iv: ivWordArray });
		         */
		        init: function (xformMode, key, cfg) {
		            // Apply config defaults
		            this.cfg = this.cfg.extend(cfg);

		            // Store transform mode and key
		            this._xformMode = xformMode;
		            this._key = key;

		            // Set initial values
		            this.reset();
		        },

		        /**
		         * Resets this cipher to its initial state.
		         *
		         * @example
		         *
		         *     cipher.reset();
		         */
		        reset: function () {
		            // Reset data buffer
		            BufferedBlockAlgorithm.reset.call(this);

		            // Perform concrete-cipher logic
		            this._doReset();
		        },

		        /**
		         * Adds data to be encrypted or decrypted.
		         *
		         * @param {WordArray|string} dataUpdate The data to encrypt or decrypt.
		         *
		         * @return {WordArray} The data after processing.
		         *
		         * @example
		         *
		         *     var encrypted = cipher.process('data');
		         *     var encrypted = cipher.process(wordArray);
		         */
		        process: function (dataUpdate) {
		            // Append
		            this._append(dataUpdate);

		            // Process available blocks
		            return this._process();
		        },

		        /**
		         * Finalizes the encryption or decryption process.
		         * Note that the finalize operation is effectively a destructive, read-once operation.
		         *
		         * @param {WordArray|string} dataUpdate The final data to encrypt or decrypt.
		         *
		         * @return {WordArray} The data after final processing.
		         *
		         * @example
		         *
		         *     var encrypted = cipher.finalize();
		         *     var encrypted = cipher.finalize('data');
		         *     var encrypted = cipher.finalize(wordArray);
		         */
		        finalize: function (dataUpdate) {
		            // Final data update
		            if (dataUpdate) {
		                this._append(dataUpdate);
		            }

		            // Perform concrete-cipher logic
		            var finalProcessedData = this._doFinalize();

		            return finalProcessedData;
		        },

		        keySize: 128/32,

		        ivSize: 128/32,

		        _ENC_XFORM_MODE: 1,

		        _DEC_XFORM_MODE: 2,

		        /**
		         * Creates shortcut functions to a cipher's object interface.
		         *
		         * @param {Cipher} cipher The cipher to create a helper for.
		         *
		         * @return {Object} An object with encrypt and decrypt shortcut functions.
		         *
		         * @static
		         *
		         * @example
		         *
		         *     var AES = CryptoJS.lib.Cipher._createHelper(CryptoJS.algo.AES);
		         */
		        _createHelper: (function () {
		            function selectCipherStrategy(key) {
		                if (typeof key == 'string') {
		                    return PasswordBasedCipher;
		                } else {
		                    return SerializableCipher;
		                }
		            }

		            return function (cipher) {
		                return {
		                    encrypt: function (message, key, cfg) {
		                        return selectCipherStrategy(key).encrypt(cipher, message, key, cfg);
		                    },

		                    decrypt: function (ciphertext, key, cfg) {
		                        return selectCipherStrategy(key).decrypt(cipher, ciphertext, key, cfg);
		                    }
		                };
		            };
		        }())
		    });

		    /**
		     * Abstract base stream cipher template.
		     *
		     * @property {number} blockSize The number of 32-bit words this cipher operates on. Default: 1 (32 bits)
		     */
		    var StreamCipher = C_lib.StreamCipher = Cipher.extend({
		        _doFinalize: function () {
		            // Process partial blocks
		            var finalProcessedBlocks = this._process(!!'flush');

		            return finalProcessedBlocks;
		        },

		        blockSize: 1
		    });

		    /**
		     * Mode namespace.
		     */
		    var C_mode = C.mode = {};

		    /**
		     * Abstract base block cipher mode template.
		     */
		    var BlockCipherMode = C_lib.BlockCipherMode = Base.extend({
		        /**
		         * Creates this mode for encryption.
		         *
		         * @param {Cipher} cipher A block cipher instance.
		         * @param {Array} iv The IV words.
		         *
		         * @static
		         *
		         * @example
		         *
		         *     var mode = CryptoJS.mode.CBC.createEncryptor(cipher, iv.words);
		         */
		        createEncryptor: function (cipher, iv) {
		            return this.Encryptor.create(cipher, iv);
		        },

		        /**
		         * Creates this mode for decryption.
		         *
		         * @param {Cipher} cipher A block cipher instance.
		         * @param {Array} iv The IV words.
		         *
		         * @static
		         *
		         * @example
		         *
		         *     var mode = CryptoJS.mode.CBC.createDecryptor(cipher, iv.words);
		         */
		        createDecryptor: function (cipher, iv) {
		            return this.Decryptor.create(cipher, iv);
		        },

		        /**
		         * Initializes a newly created mode.
		         *
		         * @param {Cipher} cipher A block cipher instance.
		         * @param {Array} iv The IV words.
		         *
		         * @example
		         *
		         *     var mode = CryptoJS.mode.CBC.Encryptor.create(cipher, iv.words);
		         */
		        init: function (cipher, iv) {
		            this._cipher = cipher;
		            this._iv = iv;
		        }
		    });

		    /**
		     * Cipher Block Chaining mode.
		     */
		    var CBC = C_mode.CBC = (function () {
		        /**
		         * Abstract base CBC mode.
		         */
		        var CBC = BlockCipherMode.extend();

		        /**
		         * CBC encryptor.
		         */
		        CBC.Encryptor = CBC.extend({
		            /**
		             * Processes the data block at offset.
		             *
		             * @param {Array} words The data words to operate on.
		             * @param {number} offset The offset where the block starts.
		             *
		             * @example
		             *
		             *     mode.processBlock(data.words, offset);
		             */
		            processBlock: function (words, offset) {
		                // Shortcuts
		                var cipher = this._cipher;
		                var blockSize = cipher.blockSize;

		                // XOR and encrypt
		                xorBlock.call(this, words, offset, blockSize);
		                cipher.encryptBlock(words, offset);

		                // Remember this block to use with next block
		                this._prevBlock = words.slice(offset, offset + blockSize);
		            }
		        });

		        /**
		         * CBC decryptor.
		         */
		        CBC.Decryptor = CBC.extend({
		            /**
		             * Processes the data block at offset.
		             *
		             * @param {Array} words The data words to operate on.
		             * @param {number} offset The offset where the block starts.
		             *
		             * @example
		             *
		             *     mode.processBlock(data.words, offset);
		             */
		            processBlock: function (words, offset) {
		                // Shortcuts
		                var cipher = this._cipher;
		                var blockSize = cipher.blockSize;

		                // Remember this block to use with next block
		                var thisBlock = words.slice(offset, offset + blockSize);

		                // Decrypt and XOR
		                cipher.decryptBlock(words, offset);
		                xorBlock.call(this, words, offset, blockSize);

		                // This block becomes the previous block
		                this._prevBlock = thisBlock;
		            }
		        });

		        function xorBlock(words, offset, blockSize) {
		            var block;

		            // Shortcut
		            var iv = this._iv;

		            // Choose mixing block
		            if (iv) {
		                block = iv;

		                // Remove IV for subsequent blocks
		                this._iv = undefined$1;
		            } else {
		                block = this._prevBlock;
		            }

		            // XOR blocks
		            for (var i = 0; i < blockSize; i++) {
		                words[offset + i] ^= block[i];
		            }
		        }

		        return CBC;
		    }());

		    /**
		     * Padding namespace.
		     */
		    var C_pad = C.pad = {};

		    /**
		     * PKCS #5/7 padding strategy.
		     */
		    var Pkcs7 = C_pad.Pkcs7 = {
		        /**
		         * Pads data using the algorithm defined in PKCS #5/7.
		         *
		         * @param {WordArray} data The data to pad.
		         * @param {number} blockSize The multiple that the data should be padded to.
		         *
		         * @static
		         *
		         * @example
		         *
		         *     CryptoJS.pad.Pkcs7.pad(wordArray, 4);
		         */
		        pad: function (data, blockSize) {
		            // Shortcut
		            var blockSizeBytes = blockSize * 4;

		            // Count padding bytes
		            var nPaddingBytes = blockSizeBytes - data.sigBytes % blockSizeBytes;

		            // Create padding word
		            var paddingWord = (nPaddingBytes << 24) | (nPaddingBytes << 16) | (nPaddingBytes << 8) | nPaddingBytes;

		            // Create padding
		            var paddingWords = [];
		            for (var i = 0; i < nPaddingBytes; i += 4) {
		                paddingWords.push(paddingWord);
		            }
		            var padding = WordArray.create(paddingWords, nPaddingBytes);

		            // Add padding
		            data.concat(padding);
		        },

		        /**
		         * Unpads data that had been padded using the algorithm defined in PKCS #5/7.
		         *
		         * @param {WordArray} data The data to unpad.
		         *
		         * @static
		         *
		         * @example
		         *
		         *     CryptoJS.pad.Pkcs7.unpad(wordArray);
		         */
		        unpad: function (data) {
		            // Get number of padding bytes from last byte
		            var nPaddingBytes = data.words[(data.sigBytes - 1) >>> 2] & 0xff;

		            // Remove padding
		            data.sigBytes -= nPaddingBytes;
		        }
		    };

		    /**
		     * Abstract base block cipher template.
		     *
		     * @property {number} blockSize The number of 32-bit words this cipher operates on. Default: 4 (128 bits)
		     */
		    var BlockCipher = C_lib.BlockCipher = Cipher.extend({
		        /**
		         * Configuration options.
		         *
		         * @property {Mode} mode The block mode to use. Default: CBC
		         * @property {Padding} padding The padding strategy to use. Default: Pkcs7
		         */
		        cfg: Cipher.cfg.extend({
		            mode: CBC,
		            padding: Pkcs7
		        }),

		        reset: function () {
		            var modeCreator;

		            // Reset cipher
		            Cipher.reset.call(this);

		            // Shortcuts
		            var cfg = this.cfg;
		            var iv = cfg.iv;
		            var mode = cfg.mode;

		            // Reset block mode
		            if (this._xformMode == this._ENC_XFORM_MODE) {
		                modeCreator = mode.createEncryptor;
		            } else /* if (this._xformMode == this._DEC_XFORM_MODE) */ {
		                modeCreator = mode.createDecryptor;
		                // Keep at least one block in the buffer for unpadding
		                this._minBufferSize = 1;
		            }

		            if (this._mode && this._mode.__creator == modeCreator) {
		                this._mode.init(this, iv && iv.words);
		            } else {
		                this._mode = modeCreator.call(mode, this, iv && iv.words);
		                this._mode.__creator = modeCreator;
		            }
		        },

		        _doProcessBlock: function (words, offset) {
		            this._mode.processBlock(words, offset);
		        },

		        _doFinalize: function () {
		            var finalProcessedBlocks;

		            // Shortcut
		            var padding = this.cfg.padding;

		            // Finalize
		            if (this._xformMode == this._ENC_XFORM_MODE) {
		                // Pad data
		                padding.pad(this._data, this.blockSize);

		                // Process final blocks
		                finalProcessedBlocks = this._process(!!'flush');
		            } else /* if (this._xformMode == this._DEC_XFORM_MODE) */ {
		                // Process final blocks
		                finalProcessedBlocks = this._process(!!'flush');

		                // Unpad data
		                padding.unpad(finalProcessedBlocks);
		            }

		            return finalProcessedBlocks;
		        },

		        blockSize: 128/32
		    });

		    /**
		     * A collection of cipher parameters.
		     *
		     * @property {WordArray} ciphertext The raw ciphertext.
		     * @property {WordArray} key The key to this ciphertext.
		     * @property {WordArray} iv The IV used in the ciphering operation.
		     * @property {WordArray} salt The salt used with a key derivation function.
		     * @property {Cipher} algorithm The cipher algorithm.
		     * @property {Mode} mode The block mode used in the ciphering operation.
		     * @property {Padding} padding The padding scheme used in the ciphering operation.
		     * @property {number} blockSize The block size of the cipher.
		     * @property {Format} formatter The default formatting strategy to convert this cipher params object to a string.
		     */
		    var CipherParams = C_lib.CipherParams = Base.extend({
		        /**
		         * Initializes a newly created cipher params object.
		         *
		         * @param {Object} cipherParams An object with any of the possible cipher parameters.
		         *
		         * @example
		         *
		         *     var cipherParams = CryptoJS.lib.CipherParams.create({
		         *         ciphertext: ciphertextWordArray,
		         *         key: keyWordArray,
		         *         iv: ivWordArray,
		         *         salt: saltWordArray,
		         *         algorithm: CryptoJS.algo.AES,
		         *         mode: CryptoJS.mode.CBC,
		         *         padding: CryptoJS.pad.PKCS7,
		         *         blockSize: 4,
		         *         formatter: CryptoJS.format.OpenSSL
		         *     });
		         */
		        init: function (cipherParams) {
		            this.mixIn(cipherParams);
		        },

		        /**
		         * Converts this cipher params object to a string.
		         *
		         * @param {Format} formatter (Optional) The formatting strategy to use.
		         *
		         * @return {string} The stringified cipher params.
		         *
		         * @throws Error If neither the formatter nor the default formatter is set.
		         *
		         * @example
		         *
		         *     var string = cipherParams + '';
		         *     var string = cipherParams.toString();
		         *     var string = cipherParams.toString(CryptoJS.format.OpenSSL);
		         */
		        toString: function (formatter) {
		            return (formatter || this.formatter).stringify(this);
		        }
		    });

		    /**
		     * Format namespace.
		     */
		    var C_format = C.format = {};

		    /**
		     * OpenSSL formatting strategy.
		     */
		    var OpenSSLFormatter = C_format.OpenSSL = {
		        /**
		         * Converts a cipher params object to an OpenSSL-compatible string.
		         *
		         * @param {CipherParams} cipherParams The cipher params object.
		         *
		         * @return {string} The OpenSSL-compatible string.
		         *
		         * @static
		         *
		         * @example
		         *
		         *     var openSSLString = CryptoJS.format.OpenSSL.stringify(cipherParams);
		         */
		        stringify: function (cipherParams) {
		            var wordArray;

		            // Shortcuts
		            var ciphertext = cipherParams.ciphertext;
		            var salt = cipherParams.salt;

		            // Format
		            if (salt) {
		                wordArray = WordArray.create([0x53616c74, 0x65645f5f]).concat(salt).concat(ciphertext);
		            } else {
		                wordArray = ciphertext;
		            }

		            return wordArray.toString(Base64);
		        },

		        /**
		         * Converts an OpenSSL-compatible string to a cipher params object.
		         *
		         * @param {string} openSSLStr The OpenSSL-compatible string.
		         *
		         * @return {CipherParams} The cipher params object.
		         *
		         * @static
		         *
		         * @example
		         *
		         *     var cipherParams = CryptoJS.format.OpenSSL.parse(openSSLString);
		         */
		        parse: function (openSSLStr) {
		            var salt;

		            // Parse base64
		            var ciphertext = Base64.parse(openSSLStr);

		            // Shortcut
		            var ciphertextWords = ciphertext.words;

		            // Test for salt
		            if (ciphertextWords[0] == 0x53616c74 && ciphertextWords[1] == 0x65645f5f) {
		                // Extract salt
		                salt = WordArray.create(ciphertextWords.slice(2, 4));

		                // Remove salt from ciphertext
		                ciphertextWords.splice(0, 4);
		                ciphertext.sigBytes -= 16;
		            }

		            return CipherParams.create({ ciphertext: ciphertext, salt: salt });
		        }
		    };

		    /**
		     * A cipher wrapper that returns ciphertext as a serializable cipher params object.
		     */
		    var SerializableCipher = C_lib.SerializableCipher = Base.extend({
		        /**
		         * Configuration options.
		         *
		         * @property {Formatter} format The formatting strategy to convert cipher param objects to and from a string. Default: OpenSSL
		         */
		        cfg: Base.extend({
		            format: OpenSSLFormatter
		        }),

		        /**
		         * Encrypts a message.
		         *
		         * @param {Cipher} cipher The cipher algorithm to use.
		         * @param {WordArray|string} message The message to encrypt.
		         * @param {WordArray} key The key.
		         * @param {Object} cfg (Optional) The configuration options to use for this operation.
		         *
		         * @return {CipherParams} A cipher params object.
		         *
		         * @static
		         *
		         * @example
		         *
		         *     var ciphertextParams = CryptoJS.lib.SerializableCipher.encrypt(CryptoJS.algo.AES, message, key);
		         *     var ciphertextParams = CryptoJS.lib.SerializableCipher.encrypt(CryptoJS.algo.AES, message, key, { iv: iv });
		         *     var ciphertextParams = CryptoJS.lib.SerializableCipher.encrypt(CryptoJS.algo.AES, message, key, { iv: iv, format: CryptoJS.format.OpenSSL });
		         */
		        encrypt: function (cipher, message, key, cfg) {
		            // Apply config defaults
		            cfg = this.cfg.extend(cfg);

		            // Encrypt
		            var encryptor = cipher.createEncryptor(key, cfg);
		            var ciphertext = encryptor.finalize(message);

		            // Shortcut
		            var cipherCfg = encryptor.cfg;

		            // Create and return serializable cipher params
		            return CipherParams.create({
		                ciphertext: ciphertext,
		                key: key,
		                iv: cipherCfg.iv,
		                algorithm: cipher,
		                mode: cipherCfg.mode,
		                padding: cipherCfg.padding,
		                blockSize: cipher.blockSize,
		                formatter: cfg.format
		            });
		        },

		        /**
		         * Decrypts serialized ciphertext.
		         *
		         * @param {Cipher} cipher The cipher algorithm to use.
		         * @param {CipherParams|string} ciphertext The ciphertext to decrypt.
		         * @param {WordArray} key The key.
		         * @param {Object} cfg (Optional) The configuration options to use for this operation.
		         *
		         * @return {WordArray} The plaintext.
		         *
		         * @static
		         *
		         * @example
		         *
		         *     var plaintext = CryptoJS.lib.SerializableCipher.decrypt(CryptoJS.algo.AES, formattedCiphertext, key, { iv: iv, format: CryptoJS.format.OpenSSL });
		         *     var plaintext = CryptoJS.lib.SerializableCipher.decrypt(CryptoJS.algo.AES, ciphertextParams, key, { iv: iv, format: CryptoJS.format.OpenSSL });
		         */
		        decrypt: function (cipher, ciphertext, key, cfg) {
		            // Apply config defaults
		            cfg = this.cfg.extend(cfg);

		            // Convert string to CipherParams
		            ciphertext = this._parse(ciphertext, cfg.format);

		            // Decrypt
		            var plaintext = cipher.createDecryptor(key, cfg).finalize(ciphertext.ciphertext);

		            return plaintext;
		        },

		        /**
		         * Converts serialized ciphertext to CipherParams,
		         * else assumed CipherParams already and returns ciphertext unchanged.
		         *
		         * @param {CipherParams|string} ciphertext The ciphertext.
		         * @param {Formatter} format The formatting strategy to use to parse serialized ciphertext.
		         *
		         * @return {CipherParams} The unserialized ciphertext.
		         *
		         * @static
		         *
		         * @example
		         *
		         *     var ciphertextParams = CryptoJS.lib.SerializableCipher._parse(ciphertextStringOrParams, format);
		         */
		        _parse: function (ciphertext, format) {
		            if (typeof ciphertext == 'string') {
		                return format.parse(ciphertext, this);
		            } else {
		                return ciphertext;
		            }
		        }
		    });

		    /**
		     * Key derivation function namespace.
		     */
		    var C_kdf = C.kdf = {};

		    /**
		     * OpenSSL key derivation function.
		     */
		    var OpenSSLKdf = C_kdf.OpenSSL = {
		        /**
		         * Derives a key and IV from a password.
		         *
		         * @param {string} password The password to derive from.
		         * @param {number} keySize The size in words of the key to generate.
		         * @param {number} ivSize The size in words of the IV to generate.
		         * @param {WordArray|string} salt (Optional) A 64-bit salt to use. If omitted, a salt will be generated randomly.
		         *
		         * @return {CipherParams} A cipher params object with the key, IV, and salt.
		         *
		         * @static
		         *
		         * @example
		         *
		         *     var derivedParams = CryptoJS.kdf.OpenSSL.execute('Password', 256/32, 128/32);
		         *     var derivedParams = CryptoJS.kdf.OpenSSL.execute('Password', 256/32, 128/32, 'saltsalt');
		         */
		        execute: function (password, keySize, ivSize, salt) {
		            // Generate random salt
		            if (!salt) {
		                salt = WordArray.random(64/8);
		            }

		            // Derive key and IV
		            var key = EvpKDF.create({ keySize: keySize + ivSize }).compute(password, salt);

		            // Separate key and IV
		            var iv = WordArray.create(key.words.slice(keySize), ivSize * 4);
		            key.sigBytes = keySize * 4;

		            // Return params
		            return CipherParams.create({ key: key, iv: iv, salt: salt });
		        }
		    };

		    /**
		     * A serializable cipher wrapper that derives the key from a password,
		     * and returns ciphertext as a serializable cipher params object.
		     */
		    var PasswordBasedCipher = C_lib.PasswordBasedCipher = SerializableCipher.extend({
		        /**
		         * Configuration options.
		         *
		         * @property {KDF} kdf The key derivation function to use to generate a key and IV from a password. Default: OpenSSL
		         */
		        cfg: SerializableCipher.cfg.extend({
		            kdf: OpenSSLKdf
		        }),

		        /**
		         * Encrypts a message using a password.
		         *
		         * @param {Cipher} cipher The cipher algorithm to use.
		         * @param {WordArray|string} message The message to encrypt.
		         * @param {string} password The password.
		         * @param {Object} cfg (Optional) The configuration options to use for this operation.
		         *
		         * @return {CipherParams} A cipher params object.
		         *
		         * @static
		         *
		         * @example
		         *
		         *     var ciphertextParams = CryptoJS.lib.PasswordBasedCipher.encrypt(CryptoJS.algo.AES, message, 'password');
		         *     var ciphertextParams = CryptoJS.lib.PasswordBasedCipher.encrypt(CryptoJS.algo.AES, message, 'password', { format: CryptoJS.format.OpenSSL });
		         */
		        encrypt: function (cipher, message, password, cfg) {
		            // Apply config defaults
		            cfg = this.cfg.extend(cfg);

		            // Derive key and other params
		            var derivedParams = cfg.kdf.execute(password, cipher.keySize, cipher.ivSize);

		            // Add IV to config
		            cfg.iv = derivedParams.iv;

		            // Encrypt
		            var ciphertext = SerializableCipher.encrypt.call(this, cipher, message, derivedParams.key, cfg);

		            // Mix in derived params
		            ciphertext.mixIn(derivedParams);

		            return ciphertext;
		        },

		        /**
		         * Decrypts serialized ciphertext using a password.
		         *
		         * @param {Cipher} cipher The cipher algorithm to use.
		         * @param {CipherParams|string} ciphertext The ciphertext to decrypt.
		         * @param {string} password The password.
		         * @param {Object} cfg (Optional) The configuration options to use for this operation.
		         *
		         * @return {WordArray} The plaintext.
		         *
		         * @static
		         *
		         * @example
		         *
		         *     var plaintext = CryptoJS.lib.PasswordBasedCipher.decrypt(CryptoJS.algo.AES, formattedCiphertext, 'password', { format: CryptoJS.format.OpenSSL });
		         *     var plaintext = CryptoJS.lib.PasswordBasedCipher.decrypt(CryptoJS.algo.AES, ciphertextParams, 'password', { format: CryptoJS.format.OpenSSL });
		         */
		        decrypt: function (cipher, ciphertext, password, cfg) {
		            // Apply config defaults
		            cfg = this.cfg.extend(cfg);

		            // Convert string to CipherParams
		            ciphertext = this._parse(ciphertext, cfg.format);

		            // Derive key and other params
		            var derivedParams = cfg.kdf.execute(password, cipher.keySize, cipher.ivSize, ciphertext.salt);

		            // Add IV to config
		            cfg.iv = derivedParams.iv;

		            // Decrypt
		            var plaintext = SerializableCipher.decrypt.call(this, cipher, ciphertext, derivedParams.key, cfg);

		            return plaintext;
		        }
		    });
		}());


	}));
	});

	var modeCfb = createCommonjsModule(function (module, exports) {
	(function (root, factory, undef) {
		{
			// CommonJS
			module.exports = exports = factory(core, cipherCore);
		}
	}(commonjsGlobal, function (CryptoJS) {

		/**
		 * Cipher Feedback block mode.
		 */
		CryptoJS.mode.CFB = (function () {
		    var CFB = CryptoJS.lib.BlockCipherMode.extend();

		    CFB.Encryptor = CFB.extend({
		        processBlock: function (words, offset) {
		            // Shortcuts
		            var cipher = this._cipher;
		            var blockSize = cipher.blockSize;

		            generateKeystreamAndEncrypt.call(this, words, offset, blockSize, cipher);

		            // Remember this block to use with next block
		            this._prevBlock = words.slice(offset, offset + blockSize);
		        }
		    });

		    CFB.Decryptor = CFB.extend({
		        processBlock: function (words, offset) {
		            // Shortcuts
		            var cipher = this._cipher;
		            var blockSize = cipher.blockSize;

		            // Remember this block to use with next block
		            var thisBlock = words.slice(offset, offset + blockSize);

		            generateKeystreamAndEncrypt.call(this, words, offset, blockSize, cipher);

		            // This block becomes the previous block
		            this._prevBlock = thisBlock;
		        }
		    });

		    function generateKeystreamAndEncrypt(words, offset, blockSize, cipher) {
		        var keystream;

		        // Shortcut
		        var iv = this._iv;

		        // Generate keystream
		        if (iv) {
		            keystream = iv.slice(0);

		            // Remove IV for subsequent blocks
		            this._iv = undefined;
		        } else {
		            keystream = this._prevBlock;
		        }
		        cipher.encryptBlock(keystream, 0);

		        // Encrypt
		        for (var i = 0; i < blockSize; i++) {
		            words[offset + i] ^= keystream[i];
		        }
		    }

		    return CFB;
		}());


		return CryptoJS.mode.CFB;

	}));
	});

	var modeCtr = createCommonjsModule(function (module, exports) {
	(function (root, factory, undef) {
		{
			// CommonJS
			module.exports = exports = factory(core, cipherCore);
		}
	}(commonjsGlobal, function (CryptoJS) {

		/**
		 * Counter block mode.
		 */
		CryptoJS.mode.CTR = (function () {
		    var CTR = CryptoJS.lib.BlockCipherMode.extend();

		    var Encryptor = CTR.Encryptor = CTR.extend({
		        processBlock: function (words, offset) {
		            // Shortcuts
		            var cipher = this._cipher;
		            var blockSize = cipher.blockSize;
		            var iv = this._iv;
		            var counter = this._counter;

		            // Generate keystream
		            if (iv) {
		                counter = this._counter = iv.slice(0);

		                // Remove IV for subsequent blocks
		                this._iv = undefined;
		            }
		            var keystream = counter.slice(0);
		            cipher.encryptBlock(keystream, 0);

		            // Increment counter
		            counter[blockSize - 1] = (counter[blockSize - 1] + 1) | 0;

		            // Encrypt
		            for (var i = 0; i < blockSize; i++) {
		                words[offset + i] ^= keystream[i];
		            }
		        }
		    });

		    CTR.Decryptor = Encryptor;

		    return CTR;
		}());


		return CryptoJS.mode.CTR;

	}));
	});

	var modeCtrGladman = createCommonjsModule(function (module, exports) {
	(function (root, factory, undef) {
		{
			// CommonJS
			module.exports = exports = factory(core, cipherCore);
		}
	}(commonjsGlobal, function (CryptoJS) {

		/** @preserve
		 * Counter block mode compatible with  Dr Brian Gladman fileenc.c
		 * derived from CryptoJS.mode.CTR
		 * Jan Hruby jhruby.web@gmail.com
		 */
		CryptoJS.mode.CTRGladman = (function () {
		    var CTRGladman = CryptoJS.lib.BlockCipherMode.extend();

			function incWord(word)
			{
				if (((word >> 24) & 0xff) === 0xff) { //overflow
				var b1 = (word >> 16)&0xff;
				var b2 = (word >> 8)&0xff;
				var b3 = word & 0xff;

				if (b1 === 0xff) // overflow b1
				{
				b1 = 0;
				if (b2 === 0xff)
				{
					b2 = 0;
					if (b3 === 0xff)
					{
						b3 = 0;
					}
					else
					{
						++b3;
					}
				}
				else
				{
					++b2;
				}
				}
				else
				{
				++b1;
				}

				word = 0;
				word += (b1 << 16);
				word += (b2 << 8);
				word += b3;
				}
				else
				{
				word += (0x01 << 24);
				}
				return word;
			}

			function incCounter(counter)
			{
				if ((counter[0] = incWord(counter[0])) === 0)
				{
					// encr_data in fileenc.c from  Dr Brian Gladman's counts only with DWORD j < 8
					counter[1] = incWord(counter[1]);
				}
				return counter;
			}

		    var Encryptor = CTRGladman.Encryptor = CTRGladman.extend({
		        processBlock: function (words, offset) {
		            // Shortcuts
		            var cipher = this._cipher;
		            var blockSize = cipher.blockSize;
		            var iv = this._iv;
		            var counter = this._counter;

		            // Generate keystream
		            if (iv) {
		                counter = this._counter = iv.slice(0);

		                // Remove IV for subsequent blocks
		                this._iv = undefined;
		            }

					incCounter(counter);

					var keystream = counter.slice(0);
		            cipher.encryptBlock(keystream, 0);

		            // Encrypt
		            for (var i = 0; i < blockSize; i++) {
		                words[offset + i] ^= keystream[i];
		            }
		        }
		    });

		    CTRGladman.Decryptor = Encryptor;

		    return CTRGladman;
		}());




		return CryptoJS.mode.CTRGladman;

	}));
	});

	var modeOfb = createCommonjsModule(function (module, exports) {
	(function (root, factory, undef) {
		{
			// CommonJS
			module.exports = exports = factory(core, cipherCore);
		}
	}(commonjsGlobal, function (CryptoJS) {

		/**
		 * Output Feedback block mode.
		 */
		CryptoJS.mode.OFB = (function () {
		    var OFB = CryptoJS.lib.BlockCipherMode.extend();

		    var Encryptor = OFB.Encryptor = OFB.extend({
		        processBlock: function (words, offset) {
		            // Shortcuts
		            var cipher = this._cipher;
		            var blockSize = cipher.blockSize;
		            var iv = this._iv;
		            var keystream = this._keystream;

		            // Generate keystream
		            if (iv) {
		                keystream = this._keystream = iv.slice(0);

		                // Remove IV for subsequent blocks
		                this._iv = undefined;
		            }
		            cipher.encryptBlock(keystream, 0);

		            // Encrypt
		            for (var i = 0; i < blockSize; i++) {
		                words[offset + i] ^= keystream[i];
		            }
		        }
		    });

		    OFB.Decryptor = Encryptor;

		    return OFB;
		}());


		return CryptoJS.mode.OFB;

	}));
	});

	var modeEcb = createCommonjsModule(function (module, exports) {
	(function (root, factory, undef) {
		{
			// CommonJS
			module.exports = exports = factory(core, cipherCore);
		}
	}(commonjsGlobal, function (CryptoJS) {

		/**
		 * Electronic Codebook block mode.
		 */
		CryptoJS.mode.ECB = (function () {
		    var ECB = CryptoJS.lib.BlockCipherMode.extend();

		    ECB.Encryptor = ECB.extend({
		        processBlock: function (words, offset) {
		            this._cipher.encryptBlock(words, offset);
		        }
		    });

		    ECB.Decryptor = ECB.extend({
		        processBlock: function (words, offset) {
		            this._cipher.decryptBlock(words, offset);
		        }
		    });

		    return ECB;
		}());


		return CryptoJS.mode.ECB;

	}));
	});

	var padAnsix923 = createCommonjsModule(function (module, exports) {
	(function (root, factory, undef) {
		{
			// CommonJS
			module.exports = exports = factory(core, cipherCore);
		}
	}(commonjsGlobal, function (CryptoJS) {

		/**
		 * ANSI X.923 padding strategy.
		 */
		CryptoJS.pad.AnsiX923 = {
		    pad: function (data, blockSize) {
		        // Shortcuts
		        var dataSigBytes = data.sigBytes;
		        var blockSizeBytes = blockSize * 4;

		        // Count padding bytes
		        var nPaddingBytes = blockSizeBytes - dataSigBytes % blockSizeBytes;

		        // Compute last byte position
		        var lastBytePos = dataSigBytes + nPaddingBytes - 1;

		        // Pad
		        data.clamp();
		        data.words[lastBytePos >>> 2] |= nPaddingBytes << (24 - (lastBytePos % 4) * 8);
		        data.sigBytes += nPaddingBytes;
		    },

		    unpad: function (data) {
		        // Get number of padding bytes from last byte
		        var nPaddingBytes = data.words[(data.sigBytes - 1) >>> 2] & 0xff;

		        // Remove padding
		        data.sigBytes -= nPaddingBytes;
		    }
		};


		return CryptoJS.pad.Ansix923;

	}));
	});

	var padIso10126 = createCommonjsModule(function (module, exports) {
	(function (root, factory, undef) {
		{
			// CommonJS
			module.exports = exports = factory(core, cipherCore);
		}
	}(commonjsGlobal, function (CryptoJS) {

		/**
		 * ISO 10126 padding strategy.
		 */
		CryptoJS.pad.Iso10126 = {
		    pad: function (data, blockSize) {
		        // Shortcut
		        var blockSizeBytes = blockSize * 4;

		        // Count padding bytes
		        var nPaddingBytes = blockSizeBytes - data.sigBytes % blockSizeBytes;

		        // Pad
		        data.concat(CryptoJS.lib.WordArray.random(nPaddingBytes - 1)).
		             concat(CryptoJS.lib.WordArray.create([nPaddingBytes << 24], 1));
		    },

		    unpad: function (data) {
		        // Get number of padding bytes from last byte
		        var nPaddingBytes = data.words[(data.sigBytes - 1) >>> 2] & 0xff;

		        // Remove padding
		        data.sigBytes -= nPaddingBytes;
		    }
		};


		return CryptoJS.pad.Iso10126;

	}));
	});

	var padIso97971 = createCommonjsModule(function (module, exports) {
	(function (root, factory, undef) {
		{
			// CommonJS
			module.exports = exports = factory(core, cipherCore);
		}
	}(commonjsGlobal, function (CryptoJS) {

		/**
		 * ISO/IEC 9797-1 Padding Method 2.
		 */
		CryptoJS.pad.Iso97971 = {
		    pad: function (data, blockSize) {
		        // Add 0x80 byte
		        data.concat(CryptoJS.lib.WordArray.create([0x80000000], 1));

		        // Zero pad the rest
		        CryptoJS.pad.ZeroPadding.pad(data, blockSize);
		    },

		    unpad: function (data) {
		        // Remove zero padding
		        CryptoJS.pad.ZeroPadding.unpad(data);

		        // Remove one more byte -- the 0x80 byte
		        data.sigBytes--;
		    }
		};


		return CryptoJS.pad.Iso97971;

	}));
	});

	var padZeropadding = createCommonjsModule(function (module, exports) {
	(function (root, factory, undef) {
		{
			// CommonJS
			module.exports = exports = factory(core, cipherCore);
		}
	}(commonjsGlobal, function (CryptoJS) {

		/**
		 * Zero padding strategy.
		 */
		CryptoJS.pad.ZeroPadding = {
		    pad: function (data, blockSize) {
		        // Shortcut
		        var blockSizeBytes = blockSize * 4;

		        // Pad
		        data.clamp();
		        data.sigBytes += blockSizeBytes - ((data.sigBytes % blockSizeBytes) || blockSizeBytes);
		    },

		    unpad: function (data) {
		        // Shortcut
		        var dataWords = data.words;

		        // Unpad
		        var i = data.sigBytes - 1;
		        for (var i = data.sigBytes - 1; i >= 0; i--) {
		            if (((dataWords[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff)) {
		                data.sigBytes = i + 1;
		                break;
		            }
		        }
		    }
		};


		return CryptoJS.pad.ZeroPadding;

	}));
	});

	var padNopadding = createCommonjsModule(function (module, exports) {
	(function (root, factory, undef) {
		{
			// CommonJS
			module.exports = exports = factory(core, cipherCore);
		}
	}(commonjsGlobal, function (CryptoJS) {

		/**
		 * A noop padding strategy.
		 */
		CryptoJS.pad.NoPadding = {
		    pad: function () {
		    },

		    unpad: function () {
		    }
		};


		return CryptoJS.pad.NoPadding;

	}));
	});

	var formatHex = createCommonjsModule(function (module, exports) {
	(function (root, factory, undef) {
		{
			// CommonJS
			module.exports = exports = factory(core, cipherCore);
		}
	}(commonjsGlobal, function (CryptoJS) {

		(function (undefined$1) {
		    // Shortcuts
		    var C = CryptoJS;
		    var C_lib = C.lib;
		    var CipherParams = C_lib.CipherParams;
		    var C_enc = C.enc;
		    var Hex = C_enc.Hex;
		    var C_format = C.format;

		    var HexFormatter = C_format.Hex = {
		        /**
		         * Converts the ciphertext of a cipher params object to a hexadecimally encoded string.
		         *
		         * @param {CipherParams} cipherParams The cipher params object.
		         *
		         * @return {string} The hexadecimally encoded string.
		         *
		         * @static
		         *
		         * @example
		         *
		         *     var hexString = CryptoJS.format.Hex.stringify(cipherParams);
		         */
		        stringify: function (cipherParams) {
		            return cipherParams.ciphertext.toString(Hex);
		        },

		        /**
		         * Converts a hexadecimally encoded ciphertext string to a cipher params object.
		         *
		         * @param {string} input The hexadecimally encoded string.
		         *
		         * @return {CipherParams} The cipher params object.
		         *
		         * @static
		         *
		         * @example
		         *
		         *     var cipherParams = CryptoJS.format.Hex.parse(hexString);
		         */
		        parse: function (input) {
		            var ciphertext = Hex.parse(input);
		            return CipherParams.create({ ciphertext: ciphertext });
		        }
		    };
		}());


		return CryptoJS.format.Hex;

	}));
	});

	var aes = createCommonjsModule(function (module, exports) {
	(function (root, factory, undef) {
		{
			// CommonJS
			module.exports = exports = factory(core, encBase64, md5, evpkdf, cipherCore);
		}
	}(commonjsGlobal, function (CryptoJS) {

		(function () {
		    // Shortcuts
		    var C = CryptoJS;
		    var C_lib = C.lib;
		    var BlockCipher = C_lib.BlockCipher;
		    var C_algo = C.algo;

		    // Lookup tables
		    var SBOX = [];
		    var INV_SBOX = [];
		    var SUB_MIX_0 = [];
		    var SUB_MIX_1 = [];
		    var SUB_MIX_2 = [];
		    var SUB_MIX_3 = [];
		    var INV_SUB_MIX_0 = [];
		    var INV_SUB_MIX_1 = [];
		    var INV_SUB_MIX_2 = [];
		    var INV_SUB_MIX_3 = [];

		    // Compute lookup tables
		    (function () {
		        // Compute double table
		        var d = [];
		        for (var i = 0; i < 256; i++) {
		            if (i < 128) {
		                d[i] = i << 1;
		            } else {
		                d[i] = (i << 1) ^ 0x11b;
		            }
		        }

		        // Walk GF(2^8)
		        var x = 0;
		        var xi = 0;
		        for (var i = 0; i < 256; i++) {
		            // Compute sbox
		            var sx = xi ^ (xi << 1) ^ (xi << 2) ^ (xi << 3) ^ (xi << 4);
		            sx = (sx >>> 8) ^ (sx & 0xff) ^ 0x63;
		            SBOX[x] = sx;
		            INV_SBOX[sx] = x;

		            // Compute multiplication
		            var x2 = d[x];
		            var x4 = d[x2];
		            var x8 = d[x4];

		            // Compute sub bytes, mix columns tables
		            var t = (d[sx] * 0x101) ^ (sx * 0x1010100);
		            SUB_MIX_0[x] = (t << 24) | (t >>> 8);
		            SUB_MIX_1[x] = (t << 16) | (t >>> 16);
		            SUB_MIX_2[x] = (t << 8)  | (t >>> 24);
		            SUB_MIX_3[x] = t;

		            // Compute inv sub bytes, inv mix columns tables
		            var t = (x8 * 0x1010101) ^ (x4 * 0x10001) ^ (x2 * 0x101) ^ (x * 0x1010100);
		            INV_SUB_MIX_0[sx] = (t << 24) | (t >>> 8);
		            INV_SUB_MIX_1[sx] = (t << 16) | (t >>> 16);
		            INV_SUB_MIX_2[sx] = (t << 8)  | (t >>> 24);
		            INV_SUB_MIX_3[sx] = t;

		            // Compute next counter
		            if (!x) {
		                x = xi = 1;
		            } else {
		                x = x2 ^ d[d[d[x8 ^ x2]]];
		                xi ^= d[d[xi]];
		            }
		        }
		    }());

		    // Precomputed Rcon lookup
		    var RCON = [0x00, 0x01, 0x02, 0x04, 0x08, 0x10, 0x20, 0x40, 0x80, 0x1b, 0x36];

		    /**
		     * AES block cipher algorithm.
		     */
		    var AES = C_algo.AES = BlockCipher.extend({
		        _doReset: function () {
		            var t;

		            // Skip reset of nRounds has been set before and key did not change
		            if (this._nRounds && this._keyPriorReset === this._key) {
		                return;
		            }

		            // Shortcuts
		            var key = this._keyPriorReset = this._key;
		            var keyWords = key.words;
		            var keySize = key.sigBytes / 4;

		            // Compute number of rounds
		            var nRounds = this._nRounds = keySize + 6;

		            // Compute number of key schedule rows
		            var ksRows = (nRounds + 1) * 4;

		            // Compute key schedule
		            var keySchedule = this._keySchedule = [];
		            for (var ksRow = 0; ksRow < ksRows; ksRow++) {
		                if (ksRow < keySize) {
		                    keySchedule[ksRow] = keyWords[ksRow];
		                } else {
		                    t = keySchedule[ksRow - 1];

		                    if (!(ksRow % keySize)) {
		                        // Rot word
		                        t = (t << 8) | (t >>> 24);

		                        // Sub word
		                        t = (SBOX[t >>> 24] << 24) | (SBOX[(t >>> 16) & 0xff] << 16) | (SBOX[(t >>> 8) & 0xff] << 8) | SBOX[t & 0xff];

		                        // Mix Rcon
		                        t ^= RCON[(ksRow / keySize) | 0] << 24;
		                    } else if (keySize > 6 && ksRow % keySize == 4) {
		                        // Sub word
		                        t = (SBOX[t >>> 24] << 24) | (SBOX[(t >>> 16) & 0xff] << 16) | (SBOX[(t >>> 8) & 0xff] << 8) | SBOX[t & 0xff];
		                    }

		                    keySchedule[ksRow] = keySchedule[ksRow - keySize] ^ t;
		                }
		            }

		            // Compute inv key schedule
		            var invKeySchedule = this._invKeySchedule = [];
		            for (var invKsRow = 0; invKsRow < ksRows; invKsRow++) {
		                var ksRow = ksRows - invKsRow;

		                if (invKsRow % 4) {
		                    var t = keySchedule[ksRow];
		                } else {
		                    var t = keySchedule[ksRow - 4];
		                }

		                if (invKsRow < 4 || ksRow <= 4) {
		                    invKeySchedule[invKsRow] = t;
		                } else {
		                    invKeySchedule[invKsRow] = INV_SUB_MIX_0[SBOX[t >>> 24]] ^ INV_SUB_MIX_1[SBOX[(t >>> 16) & 0xff]] ^
		                                               INV_SUB_MIX_2[SBOX[(t >>> 8) & 0xff]] ^ INV_SUB_MIX_3[SBOX[t & 0xff]];
		                }
		            }
		        },

		        encryptBlock: function (M, offset) {
		            this._doCryptBlock(M, offset, this._keySchedule, SUB_MIX_0, SUB_MIX_1, SUB_MIX_2, SUB_MIX_3, SBOX);
		        },

		        decryptBlock: function (M, offset) {
		            // Swap 2nd and 4th rows
		            var t = M[offset + 1];
		            M[offset + 1] = M[offset + 3];
		            M[offset + 3] = t;

		            this._doCryptBlock(M, offset, this._invKeySchedule, INV_SUB_MIX_0, INV_SUB_MIX_1, INV_SUB_MIX_2, INV_SUB_MIX_3, INV_SBOX);

		            // Inv swap 2nd and 4th rows
		            var t = M[offset + 1];
		            M[offset + 1] = M[offset + 3];
		            M[offset + 3] = t;
		        },

		        _doCryptBlock: function (M, offset, keySchedule, SUB_MIX_0, SUB_MIX_1, SUB_MIX_2, SUB_MIX_3, SBOX) {
		            // Shortcut
		            var nRounds = this._nRounds;

		            // Get input, add round key
		            var s0 = M[offset]     ^ keySchedule[0];
		            var s1 = M[offset + 1] ^ keySchedule[1];
		            var s2 = M[offset + 2] ^ keySchedule[2];
		            var s3 = M[offset + 3] ^ keySchedule[3];

		            // Key schedule row counter
		            var ksRow = 4;

		            // Rounds
		            for (var round = 1; round < nRounds; round++) {
		                // Shift rows, sub bytes, mix columns, add round key
		                var t0 = SUB_MIX_0[s0 >>> 24] ^ SUB_MIX_1[(s1 >>> 16) & 0xff] ^ SUB_MIX_2[(s2 >>> 8) & 0xff] ^ SUB_MIX_3[s3 & 0xff] ^ keySchedule[ksRow++];
		                var t1 = SUB_MIX_0[s1 >>> 24] ^ SUB_MIX_1[(s2 >>> 16) & 0xff] ^ SUB_MIX_2[(s3 >>> 8) & 0xff] ^ SUB_MIX_3[s0 & 0xff] ^ keySchedule[ksRow++];
		                var t2 = SUB_MIX_0[s2 >>> 24] ^ SUB_MIX_1[(s3 >>> 16) & 0xff] ^ SUB_MIX_2[(s0 >>> 8) & 0xff] ^ SUB_MIX_3[s1 & 0xff] ^ keySchedule[ksRow++];
		                var t3 = SUB_MIX_0[s3 >>> 24] ^ SUB_MIX_1[(s0 >>> 16) & 0xff] ^ SUB_MIX_2[(s1 >>> 8) & 0xff] ^ SUB_MIX_3[s2 & 0xff] ^ keySchedule[ksRow++];

		                // Update state
		                s0 = t0;
		                s1 = t1;
		                s2 = t2;
		                s3 = t3;
		            }

		            // Shift rows, sub bytes, add round key
		            var t0 = ((SBOX[s0 >>> 24] << 24) | (SBOX[(s1 >>> 16) & 0xff] << 16) | (SBOX[(s2 >>> 8) & 0xff] << 8) | SBOX[s3 & 0xff]) ^ keySchedule[ksRow++];
		            var t1 = ((SBOX[s1 >>> 24] << 24) | (SBOX[(s2 >>> 16) & 0xff] << 16) | (SBOX[(s3 >>> 8) & 0xff] << 8) | SBOX[s0 & 0xff]) ^ keySchedule[ksRow++];
		            var t2 = ((SBOX[s2 >>> 24] << 24) | (SBOX[(s3 >>> 16) & 0xff] << 16) | (SBOX[(s0 >>> 8) & 0xff] << 8) | SBOX[s1 & 0xff]) ^ keySchedule[ksRow++];
		            var t3 = ((SBOX[s3 >>> 24] << 24) | (SBOX[(s0 >>> 16) & 0xff] << 16) | (SBOX[(s1 >>> 8) & 0xff] << 8) | SBOX[s2 & 0xff]) ^ keySchedule[ksRow++];

		            // Set output
		            M[offset]     = t0;
		            M[offset + 1] = t1;
		            M[offset + 2] = t2;
		            M[offset + 3] = t3;
		        },

		        keySize: 256/32
		    });

		    /**
		     * Shortcut functions to the cipher's object interface.
		     *
		     * @example
		     *
		     *     var ciphertext = CryptoJS.AES.encrypt(message, key, cfg);
		     *     var plaintext  = CryptoJS.AES.decrypt(ciphertext, key, cfg);
		     */
		    C.AES = BlockCipher._createHelper(AES);
		}());


		return CryptoJS.AES;

	}));
	});

	var tripledes = createCommonjsModule(function (module, exports) {
	(function (root, factory, undef) {
		{
			// CommonJS
			module.exports = exports = factory(core, encBase64, md5, evpkdf, cipherCore);
		}
	}(commonjsGlobal, function (CryptoJS) {

		(function () {
		    // Shortcuts
		    var C = CryptoJS;
		    var C_lib = C.lib;
		    var WordArray = C_lib.WordArray;
		    var BlockCipher = C_lib.BlockCipher;
		    var C_algo = C.algo;

		    // Permuted Choice 1 constants
		    var PC1 = [
		        57, 49, 41, 33, 25, 17, 9,  1,
		        58, 50, 42, 34, 26, 18, 10, 2,
		        59, 51, 43, 35, 27, 19, 11, 3,
		        60, 52, 44, 36, 63, 55, 47, 39,
		        31, 23, 15, 7,  62, 54, 46, 38,
		        30, 22, 14, 6,  61, 53, 45, 37,
		        29, 21, 13, 5,  28, 20, 12, 4
		    ];

		    // Permuted Choice 2 constants
		    var PC2 = [
		        14, 17, 11, 24, 1,  5,
		        3,  28, 15, 6,  21, 10,
		        23, 19, 12, 4,  26, 8,
		        16, 7,  27, 20, 13, 2,
		        41, 52, 31, 37, 47, 55,
		        30, 40, 51, 45, 33, 48,
		        44, 49, 39, 56, 34, 53,
		        46, 42, 50, 36, 29, 32
		    ];

		    // Cumulative bit shift constants
		    var BIT_SHIFTS = [1,  2,  4,  6,  8,  10, 12, 14, 15, 17, 19, 21, 23, 25, 27, 28];

		    // SBOXes and round permutation constants
		    var SBOX_P = [
		        {
		            0x0: 0x808200,
		            0x10000000: 0x8000,
		            0x20000000: 0x808002,
		            0x30000000: 0x2,
		            0x40000000: 0x200,
		            0x50000000: 0x808202,
		            0x60000000: 0x800202,
		            0x70000000: 0x800000,
		            0x80000000: 0x202,
		            0x90000000: 0x800200,
		            0xa0000000: 0x8200,
		            0xb0000000: 0x808000,
		            0xc0000000: 0x8002,
		            0xd0000000: 0x800002,
		            0xe0000000: 0x0,
		            0xf0000000: 0x8202,
		            0x8000000: 0x0,
		            0x18000000: 0x808202,
		            0x28000000: 0x8202,
		            0x38000000: 0x8000,
		            0x48000000: 0x808200,
		            0x58000000: 0x200,
		            0x68000000: 0x808002,
		            0x78000000: 0x2,
		            0x88000000: 0x800200,
		            0x98000000: 0x8200,
		            0xa8000000: 0x808000,
		            0xb8000000: 0x800202,
		            0xc8000000: 0x800002,
		            0xd8000000: 0x8002,
		            0xe8000000: 0x202,
		            0xf8000000: 0x800000,
		            0x1: 0x8000,
		            0x10000001: 0x2,
		            0x20000001: 0x808200,
		            0x30000001: 0x800000,
		            0x40000001: 0x808002,
		            0x50000001: 0x8200,
		            0x60000001: 0x200,
		            0x70000001: 0x800202,
		            0x80000001: 0x808202,
		            0x90000001: 0x808000,
		            0xa0000001: 0x800002,
		            0xb0000001: 0x8202,
		            0xc0000001: 0x202,
		            0xd0000001: 0x800200,
		            0xe0000001: 0x8002,
		            0xf0000001: 0x0,
		            0x8000001: 0x808202,
		            0x18000001: 0x808000,
		            0x28000001: 0x800000,
		            0x38000001: 0x200,
		            0x48000001: 0x8000,
		            0x58000001: 0x800002,
		            0x68000001: 0x2,
		            0x78000001: 0x8202,
		            0x88000001: 0x8002,
		            0x98000001: 0x800202,
		            0xa8000001: 0x202,
		            0xb8000001: 0x808200,
		            0xc8000001: 0x800200,
		            0xd8000001: 0x0,
		            0xe8000001: 0x8200,
		            0xf8000001: 0x808002
		        },
		        {
		            0x0: 0x40084010,
		            0x1000000: 0x4000,
		            0x2000000: 0x80000,
		            0x3000000: 0x40080010,
		            0x4000000: 0x40000010,
		            0x5000000: 0x40084000,
		            0x6000000: 0x40004000,
		            0x7000000: 0x10,
		            0x8000000: 0x84000,
		            0x9000000: 0x40004010,
		            0xa000000: 0x40000000,
		            0xb000000: 0x84010,
		            0xc000000: 0x80010,
		            0xd000000: 0x0,
		            0xe000000: 0x4010,
		            0xf000000: 0x40080000,
		            0x800000: 0x40004000,
		            0x1800000: 0x84010,
		            0x2800000: 0x10,
		            0x3800000: 0x40004010,
		            0x4800000: 0x40084010,
		            0x5800000: 0x40000000,
		            0x6800000: 0x80000,
		            0x7800000: 0x40080010,
		            0x8800000: 0x80010,
		            0x9800000: 0x0,
		            0xa800000: 0x4000,
		            0xb800000: 0x40080000,
		            0xc800000: 0x40000010,
		            0xd800000: 0x84000,
		            0xe800000: 0x40084000,
		            0xf800000: 0x4010,
		            0x10000000: 0x0,
		            0x11000000: 0x40080010,
		            0x12000000: 0x40004010,
		            0x13000000: 0x40084000,
		            0x14000000: 0x40080000,
		            0x15000000: 0x10,
		            0x16000000: 0x84010,
		            0x17000000: 0x4000,
		            0x18000000: 0x4010,
		            0x19000000: 0x80000,
		            0x1a000000: 0x80010,
		            0x1b000000: 0x40000010,
		            0x1c000000: 0x84000,
		            0x1d000000: 0x40004000,
		            0x1e000000: 0x40000000,
		            0x1f000000: 0x40084010,
		            0x10800000: 0x84010,
		            0x11800000: 0x80000,
		            0x12800000: 0x40080000,
		            0x13800000: 0x4000,
		            0x14800000: 0x40004000,
		            0x15800000: 0x40084010,
		            0x16800000: 0x10,
		            0x17800000: 0x40000000,
		            0x18800000: 0x40084000,
		            0x19800000: 0x40000010,
		            0x1a800000: 0x40004010,
		            0x1b800000: 0x80010,
		            0x1c800000: 0x0,
		            0x1d800000: 0x4010,
		            0x1e800000: 0x40080010,
		            0x1f800000: 0x84000
		        },
		        {
		            0x0: 0x104,
		            0x100000: 0x0,
		            0x200000: 0x4000100,
		            0x300000: 0x10104,
		            0x400000: 0x10004,
		            0x500000: 0x4000004,
		            0x600000: 0x4010104,
		            0x700000: 0x4010000,
		            0x800000: 0x4000000,
		            0x900000: 0x4010100,
		            0xa00000: 0x10100,
		            0xb00000: 0x4010004,
		            0xc00000: 0x4000104,
		            0xd00000: 0x10000,
		            0xe00000: 0x4,
		            0xf00000: 0x100,
		            0x80000: 0x4010100,
		            0x180000: 0x4010004,
		            0x280000: 0x0,
		            0x380000: 0x4000100,
		            0x480000: 0x4000004,
		            0x580000: 0x10000,
		            0x680000: 0x10004,
		            0x780000: 0x104,
		            0x880000: 0x4,
		            0x980000: 0x100,
		            0xa80000: 0x4010000,
		            0xb80000: 0x10104,
		            0xc80000: 0x10100,
		            0xd80000: 0x4000104,
		            0xe80000: 0x4010104,
		            0xf80000: 0x4000000,
		            0x1000000: 0x4010100,
		            0x1100000: 0x10004,
		            0x1200000: 0x10000,
		            0x1300000: 0x4000100,
		            0x1400000: 0x100,
		            0x1500000: 0x4010104,
		            0x1600000: 0x4000004,
		            0x1700000: 0x0,
		            0x1800000: 0x4000104,
		            0x1900000: 0x4000000,
		            0x1a00000: 0x4,
		            0x1b00000: 0x10100,
		            0x1c00000: 0x4010000,
		            0x1d00000: 0x104,
		            0x1e00000: 0x10104,
		            0x1f00000: 0x4010004,
		            0x1080000: 0x4000000,
		            0x1180000: 0x104,
		            0x1280000: 0x4010100,
		            0x1380000: 0x0,
		            0x1480000: 0x10004,
		            0x1580000: 0x4000100,
		            0x1680000: 0x100,
		            0x1780000: 0x4010004,
		            0x1880000: 0x10000,
		            0x1980000: 0x4010104,
		            0x1a80000: 0x10104,
		            0x1b80000: 0x4000004,
		            0x1c80000: 0x4000104,
		            0x1d80000: 0x4010000,
		            0x1e80000: 0x4,
		            0x1f80000: 0x10100
		        },
		        {
		            0x0: 0x80401000,
		            0x10000: 0x80001040,
		            0x20000: 0x401040,
		            0x30000: 0x80400000,
		            0x40000: 0x0,
		            0x50000: 0x401000,
		            0x60000: 0x80000040,
		            0x70000: 0x400040,
		            0x80000: 0x80000000,
		            0x90000: 0x400000,
		            0xa0000: 0x40,
		            0xb0000: 0x80001000,
		            0xc0000: 0x80400040,
		            0xd0000: 0x1040,
		            0xe0000: 0x1000,
		            0xf0000: 0x80401040,
		            0x8000: 0x80001040,
		            0x18000: 0x40,
		            0x28000: 0x80400040,
		            0x38000: 0x80001000,
		            0x48000: 0x401000,
		            0x58000: 0x80401040,
		            0x68000: 0x0,
		            0x78000: 0x80400000,
		            0x88000: 0x1000,
		            0x98000: 0x80401000,
		            0xa8000: 0x400000,
		            0xb8000: 0x1040,
		            0xc8000: 0x80000000,
		            0xd8000: 0x400040,
		            0xe8000: 0x401040,
		            0xf8000: 0x80000040,
		            0x100000: 0x400040,
		            0x110000: 0x401000,
		            0x120000: 0x80000040,
		            0x130000: 0x0,
		            0x140000: 0x1040,
		            0x150000: 0x80400040,
		            0x160000: 0x80401000,
		            0x170000: 0x80001040,
		            0x180000: 0x80401040,
		            0x190000: 0x80000000,
		            0x1a0000: 0x80400000,
		            0x1b0000: 0x401040,
		            0x1c0000: 0x80001000,
		            0x1d0000: 0x400000,
		            0x1e0000: 0x40,
		            0x1f0000: 0x1000,
		            0x108000: 0x80400000,
		            0x118000: 0x80401040,
		            0x128000: 0x0,
		            0x138000: 0x401000,
		            0x148000: 0x400040,
		            0x158000: 0x80000000,
		            0x168000: 0x80001040,
		            0x178000: 0x40,
		            0x188000: 0x80000040,
		            0x198000: 0x1000,
		            0x1a8000: 0x80001000,
		            0x1b8000: 0x80400040,
		            0x1c8000: 0x1040,
		            0x1d8000: 0x80401000,
		            0x1e8000: 0x400000,
		            0x1f8000: 0x401040
		        },
		        {
		            0x0: 0x80,
		            0x1000: 0x1040000,
		            0x2000: 0x40000,
		            0x3000: 0x20000000,
		            0x4000: 0x20040080,
		            0x5000: 0x1000080,
		            0x6000: 0x21000080,
		            0x7000: 0x40080,
		            0x8000: 0x1000000,
		            0x9000: 0x20040000,
		            0xa000: 0x20000080,
		            0xb000: 0x21040080,
		            0xc000: 0x21040000,
		            0xd000: 0x0,
		            0xe000: 0x1040080,
		            0xf000: 0x21000000,
		            0x800: 0x1040080,
		            0x1800: 0x21000080,
		            0x2800: 0x80,
		            0x3800: 0x1040000,
		            0x4800: 0x40000,
		            0x5800: 0x20040080,
		            0x6800: 0x21040000,
		            0x7800: 0x20000000,
		            0x8800: 0x20040000,
		            0x9800: 0x0,
		            0xa800: 0x21040080,
		            0xb800: 0x1000080,
		            0xc800: 0x20000080,
		            0xd800: 0x21000000,
		            0xe800: 0x1000000,
		            0xf800: 0x40080,
		            0x10000: 0x40000,
		            0x11000: 0x80,
		            0x12000: 0x20000000,
		            0x13000: 0x21000080,
		            0x14000: 0x1000080,
		            0x15000: 0x21040000,
		            0x16000: 0x20040080,
		            0x17000: 0x1000000,
		            0x18000: 0x21040080,
		            0x19000: 0x21000000,
		            0x1a000: 0x1040000,
		            0x1b000: 0x20040000,
		            0x1c000: 0x40080,
		            0x1d000: 0x20000080,
		            0x1e000: 0x0,
		            0x1f000: 0x1040080,
		            0x10800: 0x21000080,
		            0x11800: 0x1000000,
		            0x12800: 0x1040000,
		            0x13800: 0x20040080,
		            0x14800: 0x20000000,
		            0x15800: 0x1040080,
		            0x16800: 0x80,
		            0x17800: 0x21040000,
		            0x18800: 0x40080,
		            0x19800: 0x21040080,
		            0x1a800: 0x0,
		            0x1b800: 0x21000000,
		            0x1c800: 0x1000080,
		            0x1d800: 0x40000,
		            0x1e800: 0x20040000,
		            0x1f800: 0x20000080
		        },
		        {
		            0x0: 0x10000008,
		            0x100: 0x2000,
		            0x200: 0x10200000,
		            0x300: 0x10202008,
		            0x400: 0x10002000,
		            0x500: 0x200000,
		            0x600: 0x200008,
		            0x700: 0x10000000,
		            0x800: 0x0,
		            0x900: 0x10002008,
		            0xa00: 0x202000,
		            0xb00: 0x8,
		            0xc00: 0x10200008,
		            0xd00: 0x202008,
		            0xe00: 0x2008,
		            0xf00: 0x10202000,
		            0x80: 0x10200000,
		            0x180: 0x10202008,
		            0x280: 0x8,
		            0x380: 0x200000,
		            0x480: 0x202008,
		            0x580: 0x10000008,
		            0x680: 0x10002000,
		            0x780: 0x2008,
		            0x880: 0x200008,
		            0x980: 0x2000,
		            0xa80: 0x10002008,
		            0xb80: 0x10200008,
		            0xc80: 0x0,
		            0xd80: 0x10202000,
		            0xe80: 0x202000,
		            0xf80: 0x10000000,
		            0x1000: 0x10002000,
		            0x1100: 0x10200008,
		            0x1200: 0x10202008,
		            0x1300: 0x2008,
		            0x1400: 0x200000,
		            0x1500: 0x10000000,
		            0x1600: 0x10000008,
		            0x1700: 0x202000,
		            0x1800: 0x202008,
		            0x1900: 0x0,
		            0x1a00: 0x8,
		            0x1b00: 0x10200000,
		            0x1c00: 0x2000,
		            0x1d00: 0x10002008,
		            0x1e00: 0x10202000,
		            0x1f00: 0x200008,
		            0x1080: 0x8,
		            0x1180: 0x202000,
		            0x1280: 0x200000,
		            0x1380: 0x10000008,
		            0x1480: 0x10002000,
		            0x1580: 0x2008,
		            0x1680: 0x10202008,
		            0x1780: 0x10200000,
		            0x1880: 0x10202000,
		            0x1980: 0x10200008,
		            0x1a80: 0x2000,
		            0x1b80: 0x202008,
		            0x1c80: 0x200008,
		            0x1d80: 0x0,
		            0x1e80: 0x10000000,
		            0x1f80: 0x10002008
		        },
		        {
		            0x0: 0x100000,
		            0x10: 0x2000401,
		            0x20: 0x400,
		            0x30: 0x100401,
		            0x40: 0x2100401,
		            0x50: 0x0,
		            0x60: 0x1,
		            0x70: 0x2100001,
		            0x80: 0x2000400,
		            0x90: 0x100001,
		            0xa0: 0x2000001,
		            0xb0: 0x2100400,
		            0xc0: 0x2100000,
		            0xd0: 0x401,
		            0xe0: 0x100400,
		            0xf0: 0x2000000,
		            0x8: 0x2100001,
		            0x18: 0x0,
		            0x28: 0x2000401,
		            0x38: 0x2100400,
		            0x48: 0x100000,
		            0x58: 0x2000001,
		            0x68: 0x2000000,
		            0x78: 0x401,
		            0x88: 0x100401,
		            0x98: 0x2000400,
		            0xa8: 0x2100000,
		            0xb8: 0x100001,
		            0xc8: 0x400,
		            0xd8: 0x2100401,
		            0xe8: 0x1,
		            0xf8: 0x100400,
		            0x100: 0x2000000,
		            0x110: 0x100000,
		            0x120: 0x2000401,
		            0x130: 0x2100001,
		            0x140: 0x100001,
		            0x150: 0x2000400,
		            0x160: 0x2100400,
		            0x170: 0x100401,
		            0x180: 0x401,
		            0x190: 0x2100401,
		            0x1a0: 0x100400,
		            0x1b0: 0x1,
		            0x1c0: 0x0,
		            0x1d0: 0x2100000,
		            0x1e0: 0x2000001,
		            0x1f0: 0x400,
		            0x108: 0x100400,
		            0x118: 0x2000401,
		            0x128: 0x2100001,
		            0x138: 0x1,
		            0x148: 0x2000000,
		            0x158: 0x100000,
		            0x168: 0x401,
		            0x178: 0x2100400,
		            0x188: 0x2000001,
		            0x198: 0x2100000,
		            0x1a8: 0x0,
		            0x1b8: 0x2100401,
		            0x1c8: 0x100401,
		            0x1d8: 0x400,
		            0x1e8: 0x2000400,
		            0x1f8: 0x100001
		        },
		        {
		            0x0: 0x8000820,
		            0x1: 0x20000,
		            0x2: 0x8000000,
		            0x3: 0x20,
		            0x4: 0x20020,
		            0x5: 0x8020820,
		            0x6: 0x8020800,
		            0x7: 0x800,
		            0x8: 0x8020000,
		            0x9: 0x8000800,
		            0xa: 0x20800,
		            0xb: 0x8020020,
		            0xc: 0x820,
		            0xd: 0x0,
		            0xe: 0x8000020,
		            0xf: 0x20820,
		            0x80000000: 0x800,
		            0x80000001: 0x8020820,
		            0x80000002: 0x8000820,
		            0x80000003: 0x8000000,
		            0x80000004: 0x8020000,
		            0x80000005: 0x20800,
		            0x80000006: 0x20820,
		            0x80000007: 0x20,
		            0x80000008: 0x8000020,
		            0x80000009: 0x820,
		            0x8000000a: 0x20020,
		            0x8000000b: 0x8020800,
		            0x8000000c: 0x0,
		            0x8000000d: 0x8020020,
		            0x8000000e: 0x8000800,
		            0x8000000f: 0x20000,
		            0x10: 0x20820,
		            0x11: 0x8020800,
		            0x12: 0x20,
		            0x13: 0x800,
		            0x14: 0x8000800,
		            0x15: 0x8000020,
		            0x16: 0x8020020,
		            0x17: 0x20000,
		            0x18: 0x0,
		            0x19: 0x20020,
		            0x1a: 0x8020000,
		            0x1b: 0x8000820,
		            0x1c: 0x8020820,
		            0x1d: 0x20800,
		            0x1e: 0x820,
		            0x1f: 0x8000000,
		            0x80000010: 0x20000,
		            0x80000011: 0x800,
		            0x80000012: 0x8020020,
		            0x80000013: 0x20820,
		            0x80000014: 0x20,
		            0x80000015: 0x8020000,
		            0x80000016: 0x8000000,
		            0x80000017: 0x8000820,
		            0x80000018: 0x8020820,
		            0x80000019: 0x8000020,
		            0x8000001a: 0x8000800,
		            0x8000001b: 0x0,
		            0x8000001c: 0x20800,
		            0x8000001d: 0x820,
		            0x8000001e: 0x20020,
		            0x8000001f: 0x8020800
		        }
		    ];

		    // Masks that select the SBOX input
		    var SBOX_MASK = [
		        0xf8000001, 0x1f800000, 0x01f80000, 0x001f8000,
		        0x0001f800, 0x00001f80, 0x000001f8, 0x8000001f
		    ];

		    /**
		     * DES block cipher algorithm.
		     */
		    var DES = C_algo.DES = BlockCipher.extend({
		        _doReset: function () {
		            // Shortcuts
		            var key = this._key;
		            var keyWords = key.words;

		            // Select 56 bits according to PC1
		            var keyBits = [];
		            for (var i = 0; i < 56; i++) {
		                var keyBitPos = PC1[i] - 1;
		                keyBits[i] = (keyWords[keyBitPos >>> 5] >>> (31 - keyBitPos % 32)) & 1;
		            }

		            // Assemble 16 subkeys
		            var subKeys = this._subKeys = [];
		            for (var nSubKey = 0; nSubKey < 16; nSubKey++) {
		                // Create subkey
		                var subKey = subKeys[nSubKey] = [];

		                // Shortcut
		                var bitShift = BIT_SHIFTS[nSubKey];

		                // Select 48 bits according to PC2
		                for (var i = 0; i < 24; i++) {
		                    // Select from the left 28 key bits
		                    subKey[(i / 6) | 0] |= keyBits[((PC2[i] - 1) + bitShift) % 28] << (31 - i % 6);

		                    // Select from the right 28 key bits
		                    subKey[4 + ((i / 6) | 0)] |= keyBits[28 + (((PC2[i + 24] - 1) + bitShift) % 28)] << (31 - i % 6);
		                }

		                // Since each subkey is applied to an expanded 32-bit input,
		                // the subkey can be broken into 8 values scaled to 32-bits,
		                // which allows the key to be used without expansion
		                subKey[0] = (subKey[0] << 1) | (subKey[0] >>> 31);
		                for (var i = 1; i < 7; i++) {
		                    subKey[i] = subKey[i] >>> ((i - 1) * 4 + 3);
		                }
		                subKey[7] = (subKey[7] << 5) | (subKey[7] >>> 27);
		            }

		            // Compute inverse subkeys
		            var invSubKeys = this._invSubKeys = [];
		            for (var i = 0; i < 16; i++) {
		                invSubKeys[i] = subKeys[15 - i];
		            }
		        },

		        encryptBlock: function (M, offset) {
		            this._doCryptBlock(M, offset, this._subKeys);
		        },

		        decryptBlock: function (M, offset) {
		            this._doCryptBlock(M, offset, this._invSubKeys);
		        },

		        _doCryptBlock: function (M, offset, subKeys) {
		            // Get input
		            this._lBlock = M[offset];
		            this._rBlock = M[offset + 1];

		            // Initial permutation
		            exchangeLR.call(this, 4,  0x0f0f0f0f);
		            exchangeLR.call(this, 16, 0x0000ffff);
		            exchangeRL.call(this, 2,  0x33333333);
		            exchangeRL.call(this, 8,  0x00ff00ff);
		            exchangeLR.call(this, 1,  0x55555555);

		            // Rounds
		            for (var round = 0; round < 16; round++) {
		                // Shortcuts
		                var subKey = subKeys[round];
		                var lBlock = this._lBlock;
		                var rBlock = this._rBlock;

		                // Feistel function
		                var f = 0;
		                for (var i = 0; i < 8; i++) {
		                    f |= SBOX_P[i][((rBlock ^ subKey[i]) & SBOX_MASK[i]) >>> 0];
		                }
		                this._lBlock = rBlock;
		                this._rBlock = lBlock ^ f;
		            }

		            // Undo swap from last round
		            var t = this._lBlock;
		            this._lBlock = this._rBlock;
		            this._rBlock = t;

		            // Final permutation
		            exchangeLR.call(this, 1,  0x55555555);
		            exchangeRL.call(this, 8,  0x00ff00ff);
		            exchangeRL.call(this, 2,  0x33333333);
		            exchangeLR.call(this, 16, 0x0000ffff);
		            exchangeLR.call(this, 4,  0x0f0f0f0f);

		            // Set output
		            M[offset] = this._lBlock;
		            M[offset + 1] = this._rBlock;
		        },

		        keySize: 64/32,

		        ivSize: 64/32,

		        blockSize: 64/32
		    });

		    // Swap bits across the left and right words
		    function exchangeLR(offset, mask) {
		        var t = ((this._lBlock >>> offset) ^ this._rBlock) & mask;
		        this._rBlock ^= t;
		        this._lBlock ^= t << offset;
		    }

		    function exchangeRL(offset, mask) {
		        var t = ((this._rBlock >>> offset) ^ this._lBlock) & mask;
		        this._lBlock ^= t;
		        this._rBlock ^= t << offset;
		    }

		    /**
		     * Shortcut functions to the cipher's object interface.
		     *
		     * @example
		     *
		     *     var ciphertext = CryptoJS.DES.encrypt(message, key, cfg);
		     *     var plaintext  = CryptoJS.DES.decrypt(ciphertext, key, cfg);
		     */
		    C.DES = BlockCipher._createHelper(DES);

		    /**
		     * Triple-DES block cipher algorithm.
		     */
		    var TripleDES = C_algo.TripleDES = BlockCipher.extend({
		        _doReset: function () {
		            // Shortcuts
		            var key = this._key;
		            var keyWords = key.words;
		            // Make sure the key length is valid (64, 128 or >= 192 bit)
		            if (keyWords.length !== 2 && keyWords.length !== 4 && keyWords.length < 6) {
		                throw new Error('Invalid key length - 3DES requires the key length to be 64, 128, 192 or >192.');
		            }

		            // Extend the key according to the keying options defined in 3DES standard
		            var key1 = keyWords.slice(0, 2);
		            var key2 = keyWords.length < 4 ? keyWords.slice(0, 2) : keyWords.slice(2, 4);
		            var key3 = keyWords.length < 6 ? keyWords.slice(0, 2) : keyWords.slice(4, 6);

		            // Create DES instances
		            this._des1 = DES.createEncryptor(WordArray.create(key1));
		            this._des2 = DES.createEncryptor(WordArray.create(key2));
		            this._des3 = DES.createEncryptor(WordArray.create(key3));
		        },

		        encryptBlock: function (M, offset) {
		            this._des1.encryptBlock(M, offset);
		            this._des2.decryptBlock(M, offset);
		            this._des3.encryptBlock(M, offset);
		        },

		        decryptBlock: function (M, offset) {
		            this._des3.decryptBlock(M, offset);
		            this._des2.encryptBlock(M, offset);
		            this._des1.decryptBlock(M, offset);
		        },

		        keySize: 192/32,

		        ivSize: 64/32,

		        blockSize: 64/32
		    });

		    /**
		     * Shortcut functions to the cipher's object interface.
		     *
		     * @example
		     *
		     *     var ciphertext = CryptoJS.TripleDES.encrypt(message, key, cfg);
		     *     var plaintext  = CryptoJS.TripleDES.decrypt(ciphertext, key, cfg);
		     */
		    C.TripleDES = BlockCipher._createHelper(TripleDES);
		}());


		return CryptoJS.TripleDES;

	}));
	});

	var rc4 = createCommonjsModule(function (module, exports) {
	(function (root, factory, undef) {
		{
			// CommonJS
			module.exports = exports = factory(core, encBase64, md5, evpkdf, cipherCore);
		}
	}(commonjsGlobal, function (CryptoJS) {

		(function () {
		    // Shortcuts
		    var C = CryptoJS;
		    var C_lib = C.lib;
		    var StreamCipher = C_lib.StreamCipher;
		    var C_algo = C.algo;

		    /**
		     * RC4 stream cipher algorithm.
		     */
		    var RC4 = C_algo.RC4 = StreamCipher.extend({
		        _doReset: function () {
		            // Shortcuts
		            var key = this._key;
		            var keyWords = key.words;
		            var keySigBytes = key.sigBytes;

		            // Init sbox
		            var S = this._S = [];
		            for (var i = 0; i < 256; i++) {
		                S[i] = i;
		            }

		            // Key setup
		            for (var i = 0, j = 0; i < 256; i++) {
		                var keyByteIndex = i % keySigBytes;
		                var keyByte = (keyWords[keyByteIndex >>> 2] >>> (24 - (keyByteIndex % 4) * 8)) & 0xff;

		                j = (j + S[i] + keyByte) % 256;

		                // Swap
		                var t = S[i];
		                S[i] = S[j];
		                S[j] = t;
		            }

		            // Counters
		            this._i = this._j = 0;
		        },

		        _doProcessBlock: function (M, offset) {
		            M[offset] ^= generateKeystreamWord.call(this);
		        },

		        keySize: 256/32,

		        ivSize: 0
		    });

		    function generateKeystreamWord() {
		        // Shortcuts
		        var S = this._S;
		        var i = this._i;
		        var j = this._j;

		        // Generate keystream word
		        var keystreamWord = 0;
		        for (var n = 0; n < 4; n++) {
		            i = (i + 1) % 256;
		            j = (j + S[i]) % 256;

		            // Swap
		            var t = S[i];
		            S[i] = S[j];
		            S[j] = t;

		            keystreamWord |= S[(S[i] + S[j]) % 256] << (24 - n * 8);
		        }

		        // Update counters
		        this._i = i;
		        this._j = j;

		        return keystreamWord;
		    }

		    /**
		     * Shortcut functions to the cipher's object interface.
		     *
		     * @example
		     *
		     *     var ciphertext = CryptoJS.RC4.encrypt(message, key, cfg);
		     *     var plaintext  = CryptoJS.RC4.decrypt(ciphertext, key, cfg);
		     */
		    C.RC4 = StreamCipher._createHelper(RC4);

		    /**
		     * Modified RC4 stream cipher algorithm.
		     */
		    var RC4Drop = C_algo.RC4Drop = RC4.extend({
		        /**
		         * Configuration options.
		         *
		         * @property {number} drop The number of keystream words to drop. Default 192
		         */
		        cfg: RC4.cfg.extend({
		            drop: 192
		        }),

		        _doReset: function () {
		            RC4._doReset.call(this);

		            // Drop
		            for (var i = this.cfg.drop; i > 0; i--) {
		                generateKeystreamWord.call(this);
		            }
		        }
		    });

		    /**
		     * Shortcut functions to the cipher's object interface.
		     *
		     * @example
		     *
		     *     var ciphertext = CryptoJS.RC4Drop.encrypt(message, key, cfg);
		     *     var plaintext  = CryptoJS.RC4Drop.decrypt(ciphertext, key, cfg);
		     */
		    C.RC4Drop = StreamCipher._createHelper(RC4Drop);
		}());


		return CryptoJS.RC4;

	}));
	});

	var rabbit = createCommonjsModule(function (module, exports) {
	(function (root, factory, undef) {
		{
			// CommonJS
			module.exports = exports = factory(core, encBase64, md5, evpkdf, cipherCore);
		}
	}(commonjsGlobal, function (CryptoJS) {

		(function () {
		    // Shortcuts
		    var C = CryptoJS;
		    var C_lib = C.lib;
		    var StreamCipher = C_lib.StreamCipher;
		    var C_algo = C.algo;

		    // Reusable objects
		    var S  = [];
		    var C_ = [];
		    var G  = [];

		    /**
		     * Rabbit stream cipher algorithm
		     */
		    var Rabbit = C_algo.Rabbit = StreamCipher.extend({
		        _doReset: function () {
		            // Shortcuts
		            var K = this._key.words;
		            var iv = this.cfg.iv;

		            // Swap endian
		            for (var i = 0; i < 4; i++) {
		                K[i] = (((K[i] << 8)  | (K[i] >>> 24)) & 0x00ff00ff) |
		                       (((K[i] << 24) | (K[i] >>> 8))  & 0xff00ff00);
		            }

		            // Generate initial state values
		            var X = this._X = [
		                K[0], (K[3] << 16) | (K[2] >>> 16),
		                K[1], (K[0] << 16) | (K[3] >>> 16),
		                K[2], (K[1] << 16) | (K[0] >>> 16),
		                K[3], (K[2] << 16) | (K[1] >>> 16)
		            ];

		            // Generate initial counter values
		            var C = this._C = [
		                (K[2] << 16) | (K[2] >>> 16), (K[0] & 0xffff0000) | (K[1] & 0x0000ffff),
		                (K[3] << 16) | (K[3] >>> 16), (K[1] & 0xffff0000) | (K[2] & 0x0000ffff),
		                (K[0] << 16) | (K[0] >>> 16), (K[2] & 0xffff0000) | (K[3] & 0x0000ffff),
		                (K[1] << 16) | (K[1] >>> 16), (K[3] & 0xffff0000) | (K[0] & 0x0000ffff)
		            ];

		            // Carry bit
		            this._b = 0;

		            // Iterate the system four times
		            for (var i = 0; i < 4; i++) {
		                nextState.call(this);
		            }

		            // Modify the counters
		            for (var i = 0; i < 8; i++) {
		                C[i] ^= X[(i + 4) & 7];
		            }

		            // IV setup
		            if (iv) {
		                // Shortcuts
		                var IV = iv.words;
		                var IV_0 = IV[0];
		                var IV_1 = IV[1];

		                // Generate four subvectors
		                var i0 = (((IV_0 << 8) | (IV_0 >>> 24)) & 0x00ff00ff) | (((IV_0 << 24) | (IV_0 >>> 8)) & 0xff00ff00);
		                var i2 = (((IV_1 << 8) | (IV_1 >>> 24)) & 0x00ff00ff) | (((IV_1 << 24) | (IV_1 >>> 8)) & 0xff00ff00);
		                var i1 = (i0 >>> 16) | (i2 & 0xffff0000);
		                var i3 = (i2 << 16)  | (i0 & 0x0000ffff);

		                // Modify counter values
		                C[0] ^= i0;
		                C[1] ^= i1;
		                C[2] ^= i2;
		                C[3] ^= i3;
		                C[4] ^= i0;
		                C[5] ^= i1;
		                C[6] ^= i2;
		                C[7] ^= i3;

		                // Iterate the system four times
		                for (var i = 0; i < 4; i++) {
		                    nextState.call(this);
		                }
		            }
		        },

		        _doProcessBlock: function (M, offset) {
		            // Shortcut
		            var X = this._X;

		            // Iterate the system
		            nextState.call(this);

		            // Generate four keystream words
		            S[0] = X[0] ^ (X[5] >>> 16) ^ (X[3] << 16);
		            S[1] = X[2] ^ (X[7] >>> 16) ^ (X[5] << 16);
		            S[2] = X[4] ^ (X[1] >>> 16) ^ (X[7] << 16);
		            S[3] = X[6] ^ (X[3] >>> 16) ^ (X[1] << 16);

		            for (var i = 0; i < 4; i++) {
		                // Swap endian
		                S[i] = (((S[i] << 8)  | (S[i] >>> 24)) & 0x00ff00ff) |
		                       (((S[i] << 24) | (S[i] >>> 8))  & 0xff00ff00);

		                // Encrypt
		                M[offset + i] ^= S[i];
		            }
		        },

		        blockSize: 128/32,

		        ivSize: 64/32
		    });

		    function nextState() {
		        // Shortcuts
		        var X = this._X;
		        var C = this._C;

		        // Save old counter values
		        for (var i = 0; i < 8; i++) {
		            C_[i] = C[i];
		        }

		        // Calculate new counter values
		        C[0] = (C[0] + 0x4d34d34d + this._b) | 0;
		        C[1] = (C[1] + 0xd34d34d3 + ((C[0] >>> 0) < (C_[0] >>> 0) ? 1 : 0)) | 0;
		        C[2] = (C[2] + 0x34d34d34 + ((C[1] >>> 0) < (C_[1] >>> 0) ? 1 : 0)) | 0;
		        C[3] = (C[3] + 0x4d34d34d + ((C[2] >>> 0) < (C_[2] >>> 0) ? 1 : 0)) | 0;
		        C[4] = (C[4] + 0xd34d34d3 + ((C[3] >>> 0) < (C_[3] >>> 0) ? 1 : 0)) | 0;
		        C[5] = (C[5] + 0x34d34d34 + ((C[4] >>> 0) < (C_[4] >>> 0) ? 1 : 0)) | 0;
		        C[6] = (C[6] + 0x4d34d34d + ((C[5] >>> 0) < (C_[5] >>> 0) ? 1 : 0)) | 0;
		        C[7] = (C[7] + 0xd34d34d3 + ((C[6] >>> 0) < (C_[6] >>> 0) ? 1 : 0)) | 0;
		        this._b = (C[7] >>> 0) < (C_[7] >>> 0) ? 1 : 0;

		        // Calculate the g-values
		        for (var i = 0; i < 8; i++) {
		            var gx = X[i] + C[i];

		            // Construct high and low argument for squaring
		            var ga = gx & 0xffff;
		            var gb = gx >>> 16;

		            // Calculate high and low result of squaring
		            var gh = ((((ga * ga) >>> 17) + ga * gb) >>> 15) + gb * gb;
		            var gl = (((gx & 0xffff0000) * gx) | 0) + (((gx & 0x0000ffff) * gx) | 0);

		            // High XOR low
		            G[i] = gh ^ gl;
		        }

		        // Calculate new state values
		        X[0] = (G[0] + ((G[7] << 16) | (G[7] >>> 16)) + ((G[6] << 16) | (G[6] >>> 16))) | 0;
		        X[1] = (G[1] + ((G[0] << 8)  | (G[0] >>> 24)) + G[7]) | 0;
		        X[2] = (G[2] + ((G[1] << 16) | (G[1] >>> 16)) + ((G[0] << 16) | (G[0] >>> 16))) | 0;
		        X[3] = (G[3] + ((G[2] << 8)  | (G[2] >>> 24)) + G[1]) | 0;
		        X[4] = (G[4] + ((G[3] << 16) | (G[3] >>> 16)) + ((G[2] << 16) | (G[2] >>> 16))) | 0;
		        X[5] = (G[5] + ((G[4] << 8)  | (G[4] >>> 24)) + G[3]) | 0;
		        X[6] = (G[6] + ((G[5] << 16) | (G[5] >>> 16)) + ((G[4] << 16) | (G[4] >>> 16))) | 0;
		        X[7] = (G[7] + ((G[6] << 8)  | (G[6] >>> 24)) + G[5]) | 0;
		    }

		    /**
		     * Shortcut functions to the cipher's object interface.
		     *
		     * @example
		     *
		     *     var ciphertext = CryptoJS.Rabbit.encrypt(message, key, cfg);
		     *     var plaintext  = CryptoJS.Rabbit.decrypt(ciphertext, key, cfg);
		     */
		    C.Rabbit = StreamCipher._createHelper(Rabbit);
		}());


		return CryptoJS.Rabbit;

	}));
	});

	var rabbitLegacy = createCommonjsModule(function (module, exports) {
	(function (root, factory, undef) {
		{
			// CommonJS
			module.exports = exports = factory(core, encBase64, md5, evpkdf, cipherCore);
		}
	}(commonjsGlobal, function (CryptoJS) {

		(function () {
		    // Shortcuts
		    var C = CryptoJS;
		    var C_lib = C.lib;
		    var StreamCipher = C_lib.StreamCipher;
		    var C_algo = C.algo;

		    // Reusable objects
		    var S  = [];
		    var C_ = [];
		    var G  = [];

		    /**
		     * Rabbit stream cipher algorithm.
		     *
		     * This is a legacy version that neglected to convert the key to little-endian.
		     * This error doesn't affect the cipher's security,
		     * but it does affect its compatibility with other implementations.
		     */
		    var RabbitLegacy = C_algo.RabbitLegacy = StreamCipher.extend({
		        _doReset: function () {
		            // Shortcuts
		            var K = this._key.words;
		            var iv = this.cfg.iv;

		            // Generate initial state values
		            var X = this._X = [
		                K[0], (K[3] << 16) | (K[2] >>> 16),
		                K[1], (K[0] << 16) | (K[3] >>> 16),
		                K[2], (K[1] << 16) | (K[0] >>> 16),
		                K[3], (K[2] << 16) | (K[1] >>> 16)
		            ];

		            // Generate initial counter values
		            var C = this._C = [
		                (K[2] << 16) | (K[2] >>> 16), (K[0] & 0xffff0000) | (K[1] & 0x0000ffff),
		                (K[3] << 16) | (K[3] >>> 16), (K[1] & 0xffff0000) | (K[2] & 0x0000ffff),
		                (K[0] << 16) | (K[0] >>> 16), (K[2] & 0xffff0000) | (K[3] & 0x0000ffff),
		                (K[1] << 16) | (K[1] >>> 16), (K[3] & 0xffff0000) | (K[0] & 0x0000ffff)
		            ];

		            // Carry bit
		            this._b = 0;

		            // Iterate the system four times
		            for (var i = 0; i < 4; i++) {
		                nextState.call(this);
		            }

		            // Modify the counters
		            for (var i = 0; i < 8; i++) {
		                C[i] ^= X[(i + 4) & 7];
		            }

		            // IV setup
		            if (iv) {
		                // Shortcuts
		                var IV = iv.words;
		                var IV_0 = IV[0];
		                var IV_1 = IV[1];

		                // Generate four subvectors
		                var i0 = (((IV_0 << 8) | (IV_0 >>> 24)) & 0x00ff00ff) | (((IV_0 << 24) | (IV_0 >>> 8)) & 0xff00ff00);
		                var i2 = (((IV_1 << 8) | (IV_1 >>> 24)) & 0x00ff00ff) | (((IV_1 << 24) | (IV_1 >>> 8)) & 0xff00ff00);
		                var i1 = (i0 >>> 16) | (i2 & 0xffff0000);
		                var i3 = (i2 << 16)  | (i0 & 0x0000ffff);

		                // Modify counter values
		                C[0] ^= i0;
		                C[1] ^= i1;
		                C[2] ^= i2;
		                C[3] ^= i3;
		                C[4] ^= i0;
		                C[5] ^= i1;
		                C[6] ^= i2;
		                C[7] ^= i3;

		                // Iterate the system four times
		                for (var i = 0; i < 4; i++) {
		                    nextState.call(this);
		                }
		            }
		        },

		        _doProcessBlock: function (M, offset) {
		            // Shortcut
		            var X = this._X;

		            // Iterate the system
		            nextState.call(this);

		            // Generate four keystream words
		            S[0] = X[0] ^ (X[5] >>> 16) ^ (X[3] << 16);
		            S[1] = X[2] ^ (X[7] >>> 16) ^ (X[5] << 16);
		            S[2] = X[4] ^ (X[1] >>> 16) ^ (X[7] << 16);
		            S[3] = X[6] ^ (X[3] >>> 16) ^ (X[1] << 16);

		            for (var i = 0; i < 4; i++) {
		                // Swap endian
		                S[i] = (((S[i] << 8)  | (S[i] >>> 24)) & 0x00ff00ff) |
		                       (((S[i] << 24) | (S[i] >>> 8))  & 0xff00ff00);

		                // Encrypt
		                M[offset + i] ^= S[i];
		            }
		        },

		        blockSize: 128/32,

		        ivSize: 64/32
		    });

		    function nextState() {
		        // Shortcuts
		        var X = this._X;
		        var C = this._C;

		        // Save old counter values
		        for (var i = 0; i < 8; i++) {
		            C_[i] = C[i];
		        }

		        // Calculate new counter values
		        C[0] = (C[0] + 0x4d34d34d + this._b) | 0;
		        C[1] = (C[1] + 0xd34d34d3 + ((C[0] >>> 0) < (C_[0] >>> 0) ? 1 : 0)) | 0;
		        C[2] = (C[2] + 0x34d34d34 + ((C[1] >>> 0) < (C_[1] >>> 0) ? 1 : 0)) | 0;
		        C[3] = (C[3] + 0x4d34d34d + ((C[2] >>> 0) < (C_[2] >>> 0) ? 1 : 0)) | 0;
		        C[4] = (C[4] + 0xd34d34d3 + ((C[3] >>> 0) < (C_[3] >>> 0) ? 1 : 0)) | 0;
		        C[5] = (C[5] + 0x34d34d34 + ((C[4] >>> 0) < (C_[4] >>> 0) ? 1 : 0)) | 0;
		        C[6] = (C[6] + 0x4d34d34d + ((C[5] >>> 0) < (C_[5] >>> 0) ? 1 : 0)) | 0;
		        C[7] = (C[7] + 0xd34d34d3 + ((C[6] >>> 0) < (C_[6] >>> 0) ? 1 : 0)) | 0;
		        this._b = (C[7] >>> 0) < (C_[7] >>> 0) ? 1 : 0;

		        // Calculate the g-values
		        for (var i = 0; i < 8; i++) {
		            var gx = X[i] + C[i];

		            // Construct high and low argument for squaring
		            var ga = gx & 0xffff;
		            var gb = gx >>> 16;

		            // Calculate high and low result of squaring
		            var gh = ((((ga * ga) >>> 17) + ga * gb) >>> 15) + gb * gb;
		            var gl = (((gx & 0xffff0000) * gx) | 0) + (((gx & 0x0000ffff) * gx) | 0);

		            // High XOR low
		            G[i] = gh ^ gl;
		        }

		        // Calculate new state values
		        X[0] = (G[0] + ((G[7] << 16) | (G[7] >>> 16)) + ((G[6] << 16) | (G[6] >>> 16))) | 0;
		        X[1] = (G[1] + ((G[0] << 8)  | (G[0] >>> 24)) + G[7]) | 0;
		        X[2] = (G[2] + ((G[1] << 16) | (G[1] >>> 16)) + ((G[0] << 16) | (G[0] >>> 16))) | 0;
		        X[3] = (G[3] + ((G[2] << 8)  | (G[2] >>> 24)) + G[1]) | 0;
		        X[4] = (G[4] + ((G[3] << 16) | (G[3] >>> 16)) + ((G[2] << 16) | (G[2] >>> 16))) | 0;
		        X[5] = (G[5] + ((G[4] << 8)  | (G[4] >>> 24)) + G[3]) | 0;
		        X[6] = (G[6] + ((G[5] << 16) | (G[5] >>> 16)) + ((G[4] << 16) | (G[4] >>> 16))) | 0;
		        X[7] = (G[7] + ((G[6] << 8)  | (G[6] >>> 24)) + G[5]) | 0;
		    }

		    /**
		     * Shortcut functions to the cipher's object interface.
		     *
		     * @example
		     *
		     *     var ciphertext = CryptoJS.RabbitLegacy.encrypt(message, key, cfg);
		     *     var plaintext  = CryptoJS.RabbitLegacy.decrypt(ciphertext, key, cfg);
		     */
		    C.RabbitLegacy = StreamCipher._createHelper(RabbitLegacy);
		}());


		return CryptoJS.RabbitLegacy;

	}));
	});

	var cryptoJs = createCommonjsModule(function (module, exports) {
	(function (root, factory, undef) {
		{
			// CommonJS
			module.exports = exports = factory(core, x64Core, libTypedarrays, encUtf16, encBase64, md5, sha1, sha256, sha224, sha512, sha384, sha3, ripemd160, hmac, pbkdf2, evpkdf, cipherCore, modeCfb, modeCtr, modeCtrGladman, modeOfb, modeEcb, padAnsix923, padIso10126, padIso97971, padZeropadding, padNopadding, formatHex, aes, tripledes, rc4, rabbit, rabbitLegacy);
		}
	}(commonjsGlobal, function (CryptoJS) {

		return CryptoJS;

	}));
	});

	class Encrypt {

	    sha1(str) {
	        return cryptoJs.SHA1(str).toString()
	    }
	    sha224(str) {
	        return cryptoJs.SHA224(str).toString()
	    }
	    sha224(str) {
	        return cryptoJs.SHA224(str).toString()
	    }
	    sha256(str) {
	        return cryptoJs.SHA256(str).toString()
	    }
	    sha384(str) {
	        return cryptoJs.SHA384(str).toString()
	    }
	    sha512(str) {
	        return cryptoJs.SHA512(str).toString()
	    }
	    md5(str) {
	        return cryptoJs.MD5(str).toString()
	    }
	    hmacSha1(str, key) {
	        return cryptoJs.HmacSHA1(str, key).toString()
	    }
	    hmacSha224(str, key) {
	        return cryptoJs.HmacSHA224(str, key).toString()
	    }
	    hmacSha256(str, key) {
	        return cryptoJs.HmacSHA256(str, key).toString()
	    }
	    hmacSha384(str, key) {
	        return cryptoJs.HmacSHA384(str, key).toString()
	    }
	    hmacSha512(str, key) {
	        return cryptoJs.HmacSHA512(str, key).toString()
	    }
	    hmacMD5(str, key) {
	        return cryptoJs.HmacMD5(str, key).toString()
	    }
	    base64_encode(str) {
	        return cryptoJs.enc.Base64.stringify(cryptoJs.enc.Utf8.parse(str))
	    }
	    base64_decode(str) {
	        return cryptoJs.enc.Base64.parse(str).toString(cryptoJs.enc.Utf8)
	    }
	    aes_encode(str, key) {
	        return cryptoJs.AES.encrypt(str, key).toString()
	    }
	    aes_decode(str, key) {
	        return cryptoJs.AES.decrypt(str, key).toString(cryptoJs.enc.Utf8)
	    }
	    des_encode(str, key) {
	        return cryptoJs.DES.encrypt(str, key).toString()
	    }
	    des_decode(str, key) {
	        return cryptoJs.DES.decrypt(str, key).toString(cryptoJs.enc.Utf8)
	    }
	    rabbit_encode(str, key) {
	        return cryptoJs.Rabbit.encrypt(str, key).toString()
	    }
	    rabbit_decode(str, key) {
	        return cryptoJs.Rabbit.decrypt(str, key).toString(cryptoJs.enc.Utf8)
	    }
	    rc4_encode(str, key) {
	        return cryptoJs.RC4.encrypt(str, key).toString()
	    }
	    rc4_decode(str, key) {
	        return cryptoJs.RC4.decrypt(str, key).toString(cryptoJs.enc.Utf8)
	    }
	    tripledes_encode(str, key) {
	        return cryptoJs.TripleDES.encrypt(str, key).toString()
	    }
	    tripledes_decode(str, key) {
	        return cryptoJs.TripleDES.decrypt(str, key).toString(cryptoJs.enc.Utf8)
	    }
	    url_encode(str) {
	        return encodeURIComponent(str).toString()
	    }
	    url_decode(str) {
	        return decodeURIComponent(str).toString()
	    }

	}

	//
	const enc = new Encrypt();
	var script = {
	  data() {
	    return {
	      encs: [],
	      showKey: false,
	      form: {
	        input: '',
	        key: '',
	        output: ''
	      }
	    };
	  },
	  mounted() {
	    this.getEncryptFunction();
	  },
	  methods: {
	    getEncryptFunction() {
	      console.log({ enc });
	      Object.getOwnPropertyNames(enc.__proto__).map(key => {
	        if (key == 'constructor') return;
	        let name = key.match(/([a-z0-9]*)/)[1].toUpperCase();
	        let decode = false;
	        if (key.match(/_encode$/)) {
	          name += '加密';
	        } else if (key.match(/_decode$/)) {
	          name += '解密';
	          decode = true;
	        }
	        this.encs.push({
	          name,
	          key,
	          decode,
	          needKey: enc[key].length == 2
	        });
	      });
	    },
	    process(item) {
	      this.showKey = item.needKey;
	      this.form.output = enc[item.key](this.form.input, this.form.key);
	    }
	  }
	};

	function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
	    if (typeof shadowMode !== 'boolean') {
	        createInjectorSSR = createInjector;
	        createInjector = shadowMode;
	        shadowMode = false;
	    }
	    // Vue.extend constructor export interop.
	    const options = typeof script === 'function' ? script.options : script;
	    // render functions
	    if (template && template.render) {
	        options.render = template.render;
	        options.staticRenderFns = template.staticRenderFns;
	        options._compiled = true;
	        // functional template
	        if (isFunctionalTemplate) {
	            options.functional = true;
	        }
	    }
	    // scopedId
	    if (scopeId) {
	        options._scopeId = scopeId;
	    }
	    let hook;
	    if (moduleIdentifier) {
	        // server build
	        hook = function (context) {
	            // 2.3 injection
	            context =
	                context || // cached call
	                    (this.$vnode && this.$vnode.ssrContext) || // stateful
	                    (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
	            // 2.2 with runInNewContext: true
	            if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
	                context = __VUE_SSR_CONTEXT__;
	            }
	            // inject component styles
	            if (style) {
	                style.call(this, createInjectorSSR(context));
	            }
	            // register component module identifier for async chunk inference
	            if (context && context._registeredComponents) {
	                context._registeredComponents.add(moduleIdentifier);
	            }
	        };
	        // used by ssr in case component is cached and beforeCreate
	        // never gets called
	        options._ssrRegister = hook;
	    }
	    else if (style) {
	        hook = shadowMode
	            ? function (context) {
	                style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
	            }
	            : function (context) {
	                style.call(this, createInjector(context));
	            };
	    }
	    if (hook) {
	        if (options.functional) {
	            // register for functional component in vue file
	            const originalRender = options.render;
	            options.render = function renderWithStyleInjection(h, context) {
	                hook.call(context);
	                return originalRender(h, context);
	            };
	        }
	        else {
	            // inject component registration as beforeCreate hook
	            const existing = options.beforeCreate;
	            options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
	        }
	    }
	    return script;
	}

	const isOldIE = typeof navigator !== 'undefined' &&
	    /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
	function createInjector(context) {
	    return (id, style) => addStyle(id, style);
	}
	let HEAD;
	const styles = {};
	function addStyle(id, css) {
	    const group = isOldIE ? css.media || 'default' : id;
	    const style = styles[group] || (styles[group] = { ids: new Set(), styles: [] });
	    if (!style.ids.has(id)) {
	        style.ids.add(id);
	        let code = css.source;
	        if (css.map) {
	            // https://developer.chrome.com/devtools/docs/javascript-debugging
	            // this makes source maps inside style tags work properly in Chrome
	            code += '\n/*# sourceURL=' + css.map.sources[0] + ' */';
	            // http://stackoverflow.com/a/26603875
	            code +=
	                '\n/*# sourceMappingURL=data:application/json;base64,' +
	                    btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) +
	                    ' */';
	        }
	        if (!style.element) {
	            style.element = document.createElement('style');
	            style.element.type = 'text/css';
	            if (css.media)
	                style.element.setAttribute('media', css.media);
	            if (HEAD === undefined) {
	                HEAD = document.head || document.getElementsByTagName('head')[0];
	            }
	            HEAD.appendChild(style.element);
	        }
	        if ('styleSheet' in style.element) {
	            style.styles.push(code);
	            style.element.styleSheet.cssText = style.styles
	                .filter(Boolean)
	                .join('\n');
	        }
	        else {
	            const index = style.ids.size - 1;
	            const textNode = document.createTextNode(code);
	            const nodes = style.element.childNodes;
	            if (nodes[index])
	                style.element.removeChild(nodes[index]);
	            if (nodes.length)
	                style.element.insertBefore(textNode, nodes[index]);
	            else
	                style.element.appendChild(textNode);
	        }
	    }
	}

	/* script */
	const __vue_script__ = script;

	/* template */
	var __vue_render__ = function() {
	  var _vm = this;
	  var _h = _vm.$createElement;
	  var _c = _vm._self._c || _h;
	  return _c("div", { staticClass: "encrypt" }, [
	    _c("div", { staticClass: "box" }, [
	      _c("div", { staticClass: "name" }, [_vm._v("输入：")]),
	      _vm._v(" "),
	      _c("div", [
	        _c("textarea", {
	          directives: [
	            {
	              name: "model",
	              rawName: "v-model",
	              value: _vm.form.input,
	              expression: "form.input"
	            }
	          ],
	          domProps: { value: _vm.form.input },
	          on: {
	            input: function($event) {
	              if ($event.target.composing) {
	                return
	              }
	              _vm.$set(_vm.form, "input", $event.target.value);
	            }
	          }
	        })
	      ])
	    ]),
	    _vm._v(" "),
	    _vm.showKey
	      ? _c("div", { staticClass: "box key" }, [
	          _c("div", { staticClass: "name" }, [_vm._v("密钥：")]),
	          _vm._v(" "),
	          _c("div", [
	            _c("textarea", {
	              directives: [
	                {
	                  name: "model",
	                  rawName: "v-model",
	                  value: _vm.form.key,
	                  expression: "form.key"
	                }
	              ],
	              domProps: { value: _vm.form.key },
	              on: {
	                input: function($event) {
	                  if ($event.target.composing) {
	                    return
	                  }
	                  _vm.$set(_vm.form, "key", $event.target.value);
	                }
	              }
	            })
	          ])
	        ])
	      : _vm._e(),
	    _vm._v(" "),
	    _c(
	      "div",
	      _vm._l(_vm.encs, function(item) {
	        return _c(
	          "iu-button",
	          {
	            key: item.key,
	            attrs: { color: item.decode ? "error" : "success", size: "mini" },
	            on: {
	              click: function($event) {
	                return _vm.process(item)
	              }
	            }
	          },
	          [_vm._v(_vm._s(item.name))]
	        )
	      }),
	      1
	    ),
	    _vm._v(" "),
	    _c("div", { staticClass: "box" }, [
	      _c("div", { staticClass: "name" }, [_vm._v("输出：")]),
	      _vm._v(" "),
	      _c("div", [
	        _c("textarea", {
	          directives: [
	            {
	              name: "model",
	              rawName: "v-model",
	              value: _vm.form.output,
	              expression: "form.output"
	            }
	          ],
	          domProps: { value: _vm.form.output },
	          on: {
	            input: function($event) {
	              if ($event.target.composing) {
	                return
	              }
	              _vm.$set(_vm.form, "output", $event.target.value);
	            }
	          }
	        })
	      ])
	    ])
	  ])
	};
	var __vue_staticRenderFns__ = [];
	__vue_render__._withStripped = true;

	  /* style */
	  const __vue_inject_styles__ = function (inject) {
	    if (!inject) return
	    inject("data-v-0de67e6b_0", { source: ".encrypt[data-v-0de67e6b] {\n  max-height: 100%;\n  overflow: auto;\n}\n.encrypt .box textarea[data-v-0de67e6b] {\n  border: 1px solid #ededed;\n  resize: none;\n  width: 100%;\n  height: 100px;\n  margin-bottom: 20px;\n}\n.encrypt .box textarea[data-v-0de67e6b]:focus {\n  outline: none;\n}\n.encrypt .box.key textarea[data-v-0de67e6b] {\n  height: 2.5em;\n  line-height: 1.5;\n}\n.encrypt iu-button[data-v-0de67e6b] {\n  cursor: pointer;\n}\n\n/*# sourceMappingURL=encrypt.vue.map */", map: {"version":3,"sources":["F:\\My_Fun\\ali.git\\crx\\dev-panel\\panel\\pages\\encrypt.vue","encrypt.vue"],"names":[],"mappings":"AA8EA;EACA,gBAAA;EACA,cAAA;AC7EA;AD+EA;EACA,yBAAA;EACA,YAAA;EACA,WAAA;EACA,aAAA;EACA,mBAAA;AC7EA;AD8EA;EACA,aAAA;AC5EA;ADgFA;EACA,aAAA;EACA,gBAAA;AC9EA;ADkFA;EACA,eAAA;AChFA;;AAEA,sCAAsC","file":"encrypt.vue","sourcesContent":["<template>\n  <div class=\"encrypt\">\n    <div class=\"box\">\n      <div class=\"name\">输入：</div>\n      <div>\n        <textarea v-model=\"form.input\"></textarea>\n      </div>\n    </div>\n    <div class=\"box key\" v-if=\"showKey\">\n      <div class=\"name\">密钥：</div>\n      <div>\n        <textarea v-model=\"form.key\"></textarea>\n      </div>\n    </div>\n    <div>\n      <iu-button\n        :color=\"item.decode?'error':'success'\"\n        :key=\"item.key\"\n        @click=\"process(item)\"\n        size=\"mini\"\n        v-for=\"item of encs\"\n      >{{item.name}}</iu-button>\n    </div>\n    <div class=\"box\">\n      <div class=\"name\">输出：</div>\n      <div>\n        <textarea v-model=\"form.output\"></textarea>\n      </div>\n    </div>\n  </div>\n</template>\n<script>\nimport Encrypt from '../utils/encrypt';\nconst enc = new Encrypt();\nexport default {\n  data() {\n    return {\n      encs: [],\n      showKey: false,\n      form: {\n        input: '',\n        key: '',\n        output: ''\n      }\n    };\n  },\n  mounted() {\n    this.getEncryptFunction();\n  },\n  methods: {\n    getEncryptFunction() {\n      console.log({ enc });\n      Object.getOwnPropertyNames(enc.__proto__).map(key => {\n        if (key == 'constructor') return;\n        let name = key.match(/([a-z0-9]*)/)[1].toUpperCase();\n        let decode = false;\n        if (key.match(/_encode$/)) {\n          name += '加密';\n        } else if (key.match(/_decode$/)) {\n          name += '解密';\n          decode = true;\n        }\n        this.encs.push({\n          name,\n          key,\n          decode,\n          needKey: enc[key].length == 2\n        });\n      });\n    },\n    process(item) {\n      this.showKey = item.needKey;\n      this.form.output = enc[item.key](this.form.input, this.form.key);\n    }\n  }\n};\n</script>\n<style lang=\"scss\" scoped>\n.encrypt {\n  max-height: 100%;\n  overflow: auto;\n  .box {\n    textarea {\n      border: 1px solid #ededed;\n      resize: none;\n      width: 100%;\n      height: 100px;\n      margin-bottom: 20px;\n      &:focus {\n        outline: none;\n      }\n    }\n    &.key {\n      textarea {\n        height: 2.5em;\n        line-height: 1.5;\n      }\n    }\n  }\n  iu-button {\n    cursor: pointer;\n  }\n}\n</style>",".encrypt {\n  max-height: 100%;\n  overflow: auto;\n}\n.encrypt .box textarea {\n  border: 1px solid #ededed;\n  resize: none;\n  width: 100%;\n  height: 100px;\n  margin-bottom: 20px;\n}\n.encrypt .box textarea:focus {\n  outline: none;\n}\n.encrypt .box.key textarea {\n  height: 2.5em;\n  line-height: 1.5;\n}\n.encrypt iu-button {\n  cursor: pointer;\n}\n\n/*# sourceMappingURL=encrypt.vue.map */"]}, media: undefined });

	  };
	  /* scoped */
	  const __vue_scope_id__ = "data-v-0de67e6b";
	  /* module identifier */
	  const __vue_module_identifier__ = undefined;
	  /* functional template */
	  const __vue_is_functional_template__ = false;
	  /* style inject SSR */
	  
	  /* style inject shadow dom */
	  

	  
	  const __vue_component__ = /*#__PURE__*/normalizeComponent(
	    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
	    __vue_inject_styles__,
	    __vue_script__,
	    __vue_scope_id__,
	    __vue_is_functional_template__,
	    __vue_module_identifier__,
	    false,
	    createInjector,
	    undefined,
	    undefined
	  );

	var qrcode = createCommonjsModule(function (module) {
	/**
	 * @fileoverview
	 * - modified davidshimjs/qrcodejs library for use in node.js
	 * - Using the 'QRCode for Javascript library'
	 * - Fixed dataset of 'QRCode for Javascript library' for support full-spec.
	 * - this library has no dependencies.
	 *
	 * @version 0.9.1 (2016-02-12)
	 * @author davidshimjs, papnkukn
	 * @see <a href="http://www.d-project.com/" target="_blank">http://www.d-project.com/</a>
	 * @see <a href="http://jeromeetienne.github.com/jquery-qrcode/" target="_blank">http://jeromeetienne.github.com/jquery-qrcode/</a>
	 * @see <a href="https://github.com/davidshimjs/qrcodejs" target="_blank">https://github.com/davidshimjs/qrcodejs</a>
	 */

	//---------------------------------------------------------------------
	// QRCode for JavaScript
	//
	// Copyright (c) 2009 Kazuhiko Arase
	//
	// URL: http://www.d-project.com/
	//
	// Licensed under the MIT license:
	//   http://www.opensource.org/licenses/mit-license.php
	//
	// The word "QR Code" is registered trademark of 
	// DENSO WAVE INCORPORATED
	//   http://www.denso-wave.com/qrcode/faqpatent-e.html
	//
	//---------------------------------------------------------------------
	function QR8bitByte(data) {
	  this.mode = QRMode.MODE_8BIT_BYTE;
	  this.data = data;
	  this.parsedData = [];

	  // Added to support UTF-8 Characters
	  for (var i = 0, l = this.data.length; i < l; i++) {
	    var byteArray = [];
	    var code = this.data.charCodeAt(i);

	    if (code > 0x10000) {
	      byteArray[0] = 0xF0 | ((code & 0x1C0000) >>> 18);
	      byteArray[1] = 0x80 | ((code & 0x3F000) >>> 12);
	      byteArray[2] = 0x80 | ((code & 0xFC0) >>> 6);
	      byteArray[3] = 0x80 | (code & 0x3F);
	    } else if (code > 0x800) {
	      byteArray[0] = 0xE0 | ((code & 0xF000) >>> 12);
	      byteArray[1] = 0x80 | ((code & 0xFC0) >>> 6);
	      byteArray[2] = 0x80 | (code & 0x3F);
	    } else if (code > 0x80) {
	      byteArray[0] = 0xC0 | ((code & 0x7C0) >>> 6);
	      byteArray[1] = 0x80 | (code & 0x3F);
	    } else {
	      byteArray[0] = code;
	    }

	    this.parsedData.push(byteArray);
	  }

	  this.parsedData = Array.prototype.concat.apply([], this.parsedData);

	  if (this.parsedData.length != this.data.length) {
	    this.parsedData.unshift(191);
	    this.parsedData.unshift(187);
	    this.parsedData.unshift(239);
	  }
	}

	QR8bitByte.prototype = {
	  getLength: function (buffer) {
	    return this.parsedData.length;
	  },
	  write: function (buffer) {
	    for (var i = 0, l = this.parsedData.length; i < l; i++) {
	      buffer.put(this.parsedData[i], 8);
	    }
	  }
	};

	function QRCodeModel(typeNumber, errorCorrectLevel) {
	  this.typeNumber = typeNumber;
	  this.errorCorrectLevel = errorCorrectLevel;
	  this.modules = null;
	  this.moduleCount = 0;
	  this.dataCache = null;
	  this.dataList = [];
	}

	QRCodeModel.prototype={addData:function(data){var newData=new QR8bitByte(data);this.dataList.push(newData);this.dataCache=null;},isDark:function(row,col){if(row<0||this.moduleCount<=row||col<0||this.moduleCount<=col){throw new Error(row+","+col);}
	return this.modules[row][col];},getModuleCount:function(){return this.moduleCount;},make:function(){this.makeImpl(false,this.getBestMaskPattern());},makeImpl:function(test,maskPattern){this.moduleCount=this.typeNumber*4+17;this.modules=new Array(this.moduleCount);for(var row=0;row<this.moduleCount;row++){this.modules[row]=new Array(this.moduleCount);for(var col=0;col<this.moduleCount;col++){this.modules[row][col]=null;}}
	this.setupPositionProbePattern(0,0);this.setupPositionProbePattern(this.moduleCount-7,0);this.setupPositionProbePattern(0,this.moduleCount-7);this.setupPositionAdjustPattern();this.setupTimingPattern();this.setupTypeInfo(test,maskPattern);if(this.typeNumber>=7){this.setupTypeNumber(test);}
	if(this.dataCache==null){this.dataCache=QRCodeModel.createData(this.typeNumber,this.errorCorrectLevel,this.dataList);}
	this.mapData(this.dataCache,maskPattern);},setupPositionProbePattern:function(row,col){for(var r=-1;r<=7;r++){if(row+r<=-1||this.moduleCount<=row+r)continue;for(var c=-1;c<=7;c++){if(col+c<=-1||this.moduleCount<=col+c)continue;if((0<=r&&r<=6&&(c==0||c==6))||(0<=c&&c<=6&&(r==0||r==6))||(2<=r&&r<=4&&2<=c&&c<=4)){this.modules[row+r][col+c]=true;}else {this.modules[row+r][col+c]=false;}}}},getBestMaskPattern:function(){var minLostPoint=0;var pattern=0;for(var i=0;i<8;i++){this.makeImpl(true,i);var lostPoint=QRUtil.getLostPoint(this);if(i==0||minLostPoint>lostPoint){minLostPoint=lostPoint;pattern=i;}}
	return pattern;},createMovieClip:function(target_mc,instance_name,depth){var qr_mc=target_mc.createEmptyMovieClip(instance_name,depth);var cs=1;this.make();for(var row=0;row<this.modules.length;row++){var y=row*cs;for(var col=0;col<this.modules[row].length;col++){var x=col*cs;var dark=this.modules[row][col];if(dark){qr_mc.beginFill(0,100);qr_mc.moveTo(x,y);qr_mc.lineTo(x+cs,y);qr_mc.lineTo(x+cs,y+cs);qr_mc.lineTo(x,y+cs);qr_mc.endFill();}}}
	return qr_mc;},setupTimingPattern:function(){for(var r=8;r<this.moduleCount-8;r++){if(this.modules[r][6]!=null){continue;}
	this.modules[r][6]=(r%2==0);}
	for(var c=8;c<this.moduleCount-8;c++){if(this.modules[6][c]!=null){continue;}
	this.modules[6][c]=(c%2==0);}},setupPositionAdjustPattern:function(){var pos=QRUtil.getPatternPosition(this.typeNumber);for(var i=0;i<pos.length;i++){for(var j=0;j<pos.length;j++){var row=pos[i];var col=pos[j];if(this.modules[row][col]!=null){continue;}
	for(var r=-2;r<=2;r++){for(var c=-2;c<=2;c++){if(r==-2||r==2||c==-2||c==2||(r==0&&c==0)){this.modules[row+r][col+c]=true;}else {this.modules[row+r][col+c]=false;}}}}}},setupTypeNumber:function(test){var bits=QRUtil.getBCHTypeNumber(this.typeNumber);for(var i=0;i<18;i++){var mod=(!test&&((bits>>i)&1)==1);this.modules[Math.floor(i/3)][i%3+this.moduleCount-8-3]=mod;}
	for(var i=0;i<18;i++){var mod=(!test&&((bits>>i)&1)==1);this.modules[i%3+this.moduleCount-8-3][Math.floor(i/3)]=mod;}},setupTypeInfo:function(test,maskPattern){var data=(this.errorCorrectLevel<<3)|maskPattern;var bits=QRUtil.getBCHTypeInfo(data);for(var i=0;i<15;i++){var mod=(!test&&((bits>>i)&1)==1);if(i<6){this.modules[i][8]=mod;}else if(i<8){this.modules[i+1][8]=mod;}else {this.modules[this.moduleCount-15+i][8]=mod;}}
	for(var i=0;i<15;i++){var mod=(!test&&((bits>>i)&1)==1);if(i<8){this.modules[8][this.moduleCount-i-1]=mod;}else if(i<9){this.modules[8][15-i-1+1]=mod;}else {this.modules[8][15-i-1]=mod;}}
	this.modules[this.moduleCount-8][8]=(!test);},mapData:function(data,maskPattern){var inc=-1;var row=this.moduleCount-1;var bitIndex=7;var byteIndex=0;for(var col=this.moduleCount-1;col>0;col-=2){if(col==6)col--;while(true){for(var c=0;c<2;c++){if(this.modules[row][col-c]==null){var dark=false;if(byteIndex<data.length){dark=(((data[byteIndex]>>>bitIndex)&1)==1);}
	var mask=QRUtil.getMask(maskPattern,row,col-c);if(mask){dark=!dark;}
	this.modules[row][col-c]=dark;bitIndex--;if(bitIndex==-1){byteIndex++;bitIndex=7;}}}
	row+=inc;if(row<0||this.moduleCount<=row){row-=inc;inc=-inc;break;}}}}};QRCodeModel.PAD0=0xEC;QRCodeModel.PAD1=0x11;QRCodeModel.createData=function(typeNumber,errorCorrectLevel,dataList){var rsBlocks=QRRSBlock.getRSBlocks(typeNumber,errorCorrectLevel);var buffer=new QRBitBuffer();for(var i=0;i<dataList.length;i++){var data=dataList[i];buffer.put(data.mode,4);buffer.put(data.getLength(),QRUtil.getLengthInBits(data.mode,typeNumber));data.write(buffer);}
	var totalDataCount=0;for(var i=0;i<rsBlocks.length;i++){totalDataCount+=rsBlocks[i].dataCount;}
	if(buffer.getLengthInBits()>totalDataCount*8){throw new Error("code length overflow. ("
	+buffer.getLengthInBits()
	+">"
	+totalDataCount*8
	+")");}
	if(buffer.getLengthInBits()+4<=totalDataCount*8){buffer.put(0,4);}
	while(buffer.getLengthInBits()%8!=0){buffer.putBit(false);}
	while(true){if(buffer.getLengthInBits()>=totalDataCount*8){break;}
	buffer.put(QRCodeModel.PAD0,8);if(buffer.getLengthInBits()>=totalDataCount*8){break;}
	buffer.put(QRCodeModel.PAD1,8);}
	return QRCodeModel.createBytes(buffer,rsBlocks);};QRCodeModel.createBytes=function(buffer,rsBlocks){var offset=0;var maxDcCount=0;var maxEcCount=0;var dcdata=new Array(rsBlocks.length);var ecdata=new Array(rsBlocks.length);for(var r=0;r<rsBlocks.length;r++){var dcCount=rsBlocks[r].dataCount;var ecCount=rsBlocks[r].totalCount-dcCount;maxDcCount=Math.max(maxDcCount,dcCount);maxEcCount=Math.max(maxEcCount,ecCount);dcdata[r]=new Array(dcCount);for(var i=0;i<dcdata[r].length;i++){dcdata[r][i]=0xff&buffer.buffer[i+offset];}
	offset+=dcCount;var rsPoly=QRUtil.getErrorCorrectPolynomial(ecCount);var rawPoly=new QRPolynomial(dcdata[r],rsPoly.getLength()-1);var modPoly=rawPoly.mod(rsPoly);ecdata[r]=new Array(rsPoly.getLength()-1);for(var i=0;i<ecdata[r].length;i++){var modIndex=i+modPoly.getLength()-ecdata[r].length;ecdata[r][i]=(modIndex>=0)?modPoly.get(modIndex):0;}}
	var totalCodeCount=0;for(var i=0;i<rsBlocks.length;i++){totalCodeCount+=rsBlocks[i].totalCount;}
	var data=new Array(totalCodeCount);var index=0;for(var i=0;i<maxDcCount;i++){for(var r=0;r<rsBlocks.length;r++){if(i<dcdata[r].length){data[index++]=dcdata[r][i];}}}
	for(var i=0;i<maxEcCount;i++){for(var r=0;r<rsBlocks.length;r++){if(i<ecdata[r].length){data[index++]=ecdata[r][i];}}}
	return data;};var QRMode={MODE_NUMBER:1<<0,MODE_ALPHA_NUM:1<<1,MODE_8BIT_BYTE:1<<2,MODE_KANJI:1<<3};var QRErrorCorrectLevel={L:1,M:0,Q:3,H:2};var QRMaskPattern={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};var QRUtil={PATTERN_POSITION_TABLE:[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],G15:(1<<10)|(1<<8)|(1<<5)|(1<<4)|(1<<2)|(1<<1)|(1<<0),G18:(1<<12)|(1<<11)|(1<<10)|(1<<9)|(1<<8)|(1<<5)|(1<<2)|(1<<0),G15_MASK:(1<<14)|(1<<12)|(1<<10)|(1<<4)|(1<<1),getBCHTypeInfo:function(data){var d=data<<10;while(QRUtil.getBCHDigit(d)-QRUtil.getBCHDigit(QRUtil.G15)>=0){d^=(QRUtil.G15<<(QRUtil.getBCHDigit(d)-QRUtil.getBCHDigit(QRUtil.G15)));}
	return ((data<<10)|d)^QRUtil.G15_MASK;},getBCHTypeNumber:function(data){var d=data<<12;while(QRUtil.getBCHDigit(d)-QRUtil.getBCHDigit(QRUtil.G18)>=0){d^=(QRUtil.G18<<(QRUtil.getBCHDigit(d)-QRUtil.getBCHDigit(QRUtil.G18)));}
	return (data<<12)|d;},getBCHDigit:function(data){var digit=0;while(data!=0){digit++;data>>>=1;}
	return digit;},getPatternPosition:function(typeNumber){return QRUtil.PATTERN_POSITION_TABLE[typeNumber-1];},getMask:function(maskPattern,i,j){switch(maskPattern){case QRMaskPattern.PATTERN000:return (i+j)%2==0;case QRMaskPattern.PATTERN001:return i%2==0;case QRMaskPattern.PATTERN010:return j%3==0;case QRMaskPattern.PATTERN011:return (i+j)%3==0;case QRMaskPattern.PATTERN100:return (Math.floor(i/2)+Math.floor(j/3))%2==0;case QRMaskPattern.PATTERN101:return (i*j)%2+(i*j)%3==0;case QRMaskPattern.PATTERN110:return ((i*j)%2+(i*j)%3)%2==0;case QRMaskPattern.PATTERN111:return ((i*j)%3+(i+j)%2)%2==0;default:throw new Error("bad maskPattern:"+maskPattern);}},getErrorCorrectPolynomial:function(errorCorrectLength){var a=new QRPolynomial([1],0);for(var i=0;i<errorCorrectLength;i++){a=a.multiply(new QRPolynomial([1,QRMath.gexp(i)],0));}
	return a;},getLengthInBits:function(mode,type){if(1<=type&&type<10){switch(mode){case QRMode.MODE_NUMBER:return 10;case QRMode.MODE_ALPHA_NUM:return 9;case QRMode.MODE_8BIT_BYTE:return 8;case QRMode.MODE_KANJI:return 8;default:throw new Error("mode:"+mode);}}else if(type<27){switch(mode){case QRMode.MODE_NUMBER:return 12;case QRMode.MODE_ALPHA_NUM:return 11;case QRMode.MODE_8BIT_BYTE:return 16;case QRMode.MODE_KANJI:return 10;default:throw new Error("mode:"+mode);}}else if(type<41){switch(mode){case QRMode.MODE_NUMBER:return 14;case QRMode.MODE_ALPHA_NUM:return 13;case QRMode.MODE_8BIT_BYTE:return 16;case QRMode.MODE_KANJI:return 12;default:throw new Error("mode:"+mode);}}else {throw new Error("type:"+type);}},getLostPoint:function(qrCode){var moduleCount=qrCode.getModuleCount();var lostPoint=0;for(var row=0;row<moduleCount;row++){for(var col=0;col<moduleCount;col++){var sameCount=0;var dark=qrCode.isDark(row,col);for(var r=-1;r<=1;r++){if(row+r<0||moduleCount<=row+r){continue;}
	for(var c=-1;c<=1;c++){if(col+c<0||moduleCount<=col+c){continue;}
	if(r==0&&c==0){continue;}
	if(dark==qrCode.isDark(row+r,col+c)){sameCount++;}}}
	if(sameCount>5){lostPoint+=(3+sameCount-5);}}}
	for(var row=0;row<moduleCount-1;row++){for(var col=0;col<moduleCount-1;col++){var count=0;if(qrCode.isDark(row,col))count++;if(qrCode.isDark(row+1,col))count++;if(qrCode.isDark(row,col+1))count++;if(qrCode.isDark(row+1,col+1))count++;if(count==0||count==4){lostPoint+=3;}}}
	for(var row=0;row<moduleCount;row++){for(var col=0;col<moduleCount-6;col++){if(qrCode.isDark(row,col)&&!qrCode.isDark(row,col+1)&&qrCode.isDark(row,col+2)&&qrCode.isDark(row,col+3)&&qrCode.isDark(row,col+4)&&!qrCode.isDark(row,col+5)&&qrCode.isDark(row,col+6)){lostPoint+=40;}}}
	for(var col=0;col<moduleCount;col++){for(var row=0;row<moduleCount-6;row++){if(qrCode.isDark(row,col)&&!qrCode.isDark(row+1,col)&&qrCode.isDark(row+2,col)&&qrCode.isDark(row+3,col)&&qrCode.isDark(row+4,col)&&!qrCode.isDark(row+5,col)&&qrCode.isDark(row+6,col)){lostPoint+=40;}}}
	var darkCount=0;for(var col=0;col<moduleCount;col++){for(var row=0;row<moduleCount;row++){if(qrCode.isDark(row,col)){darkCount++;}}}
	var ratio=Math.abs(100*darkCount/moduleCount/moduleCount-50)/5;lostPoint+=ratio*10;return lostPoint;}};var QRMath={glog:function(n){if(n<1){throw new Error("glog("+n+")");}
	return QRMath.LOG_TABLE[n];},gexp:function(n){while(n<0){n+=255;}
	while(n>=256){n-=255;}
	return QRMath.EXP_TABLE[n];},EXP_TABLE:new Array(256),LOG_TABLE:new Array(256)};for(var i=0;i<8;i++){QRMath.EXP_TABLE[i]=1<<i;}
	for(var i=8;i<256;i++){QRMath.EXP_TABLE[i]=QRMath.EXP_TABLE[i-4]^QRMath.EXP_TABLE[i-5]^QRMath.EXP_TABLE[i-6]^QRMath.EXP_TABLE[i-8];}
	for(var i=0;i<255;i++){QRMath.LOG_TABLE[QRMath.EXP_TABLE[i]]=i;}
	function QRPolynomial(num,shift){if(num.length==undefined){throw new Error(num.length+"/"+shift);}
	var offset=0;while(offset<num.length&&num[offset]==0){offset++;}
	this.num=new Array(num.length-offset+shift);for(var i=0;i<num.length-offset;i++){this.num[i]=num[i+offset];}}
	QRPolynomial.prototype={get:function(index){return this.num[index];},getLength:function(){return this.num.length;},multiply:function(e){var num=new Array(this.getLength()+e.getLength()-1);for(var i=0;i<this.getLength();i++){for(var j=0;j<e.getLength();j++){num[i+j]^=QRMath.gexp(QRMath.glog(this.get(i))+QRMath.glog(e.get(j)));}}
	return new QRPolynomial(num,0);},mod:function(e){if(this.getLength()-e.getLength()<0){return this;}
	var ratio=QRMath.glog(this.get(0))-QRMath.glog(e.get(0));var num=new Array(this.getLength());for(var i=0;i<this.getLength();i++){num[i]=this.get(i);}
	for(var i=0;i<e.getLength();i++){num[i]^=QRMath.gexp(QRMath.glog(e.get(i))+ratio);}
	return new QRPolynomial(num,0).mod(e);}};function QRRSBlock(totalCount,dataCount){this.totalCount=totalCount;this.dataCount=dataCount;}
	QRRSBlock.RS_BLOCK_TABLE=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]];QRRSBlock.getRSBlocks=function(typeNumber,errorCorrectLevel){var rsBlock=QRRSBlock.getRsBlockTable(typeNumber,errorCorrectLevel);if(rsBlock==undefined){throw new Error("bad rs block @ typeNumber:"+typeNumber+"/errorCorrectLevel:"+errorCorrectLevel);}
	var length=rsBlock.length/3;var list=[];for(var i=0;i<length;i++){var count=rsBlock[i*3+0];var totalCount=rsBlock[i*3+1];var dataCount=rsBlock[i*3+2];for(var j=0;j<count;j++){list.push(new QRRSBlock(totalCount,dataCount));}}
	return list;};QRRSBlock.getRsBlockTable=function(typeNumber,errorCorrectLevel){switch(errorCorrectLevel){case QRErrorCorrectLevel.L:return QRRSBlock.RS_BLOCK_TABLE[(typeNumber-1)*4+0];case QRErrorCorrectLevel.M:return QRRSBlock.RS_BLOCK_TABLE[(typeNumber-1)*4+1];case QRErrorCorrectLevel.Q:return QRRSBlock.RS_BLOCK_TABLE[(typeNumber-1)*4+2];case QRErrorCorrectLevel.H:return QRRSBlock.RS_BLOCK_TABLE[(typeNumber-1)*4+3];default:return undefined;}};function QRBitBuffer(){this.buffer=[];this.length=0;}
	QRBitBuffer.prototype={get:function(index){var bufIndex=Math.floor(index/8);return ((this.buffer[bufIndex]>>>(7-index%8))&1)==1;},put:function(num,length){for(var i=0;i<length;i++){this.putBit(((num>>>(length-i-1))&1)==1);}},getLengthInBits:function(){return this.length;},putBit:function(bit){var bufIndex=Math.floor(this.length/8);if(this.buffer.length<=bufIndex){this.buffer.push(0);}
	if(bit){this.buffer[bufIndex]|=(0x80>>>(this.length%8));}
	this.length++;}};var QRCodeLimitLength=[[17,14,11,7],[32,26,20,14],[53,42,32,24],[78,62,46,34],[106,84,60,44],[134,106,74,58],[154,122,86,64],[192,152,108,84],[230,180,130,98],[271,213,151,119],[321,251,177,137],[367,287,203,155],[425,331,241,177],[458,362,258,194],[520,412,292,220],[586,450,322,250],[644,504,364,280],[718,560,394,310],[792,624,442,338],[858,666,482,382],[929,711,509,403],[1003,779,565,439],[1091,857,611,461],[1171,911,661,511],[1273,997,715,535],[1367,1059,751,593],[1465,1125,805,625],[1528,1190,868,658],[1628,1264,908,698],[1732,1370,982,742],[1840,1452,1030,790],[1952,1538,1112,842],[2068,1628,1168,898],[2188,1722,1228,958],[2303,1809,1283,983],[2431,1911,1351,1051],[2563,1989,1423,1093],[2699,2099,1499,1139],[2809,2213,1579,1219],[2953,2331,1663,1273]];


	/** Constructor */
	function QRCode(options) {
	  
	  //Default options
	  this.options = {
	    padding: 4,
	    width: 256, 
	    height: 256,
	    typeNumber: 4,
	    color: "#000000",
	    background: "#ffffff",
	    ecl: "M"
	  };
	  
	  //In case the options is string
	  if (typeof options === 'string') {
	    options = {
	      content: options
	    };
	  }
	  
	  //Merge options
	  if (options) {
	    for (var i in options) {
	      this.options[i] = options[i];
	    }
	  }
	  
	  if (typeof this.options.content !== 'string') {
	    throw new Error("Expected 'content' as string!");
	  }
	  
	  if (this.options.content.length === 0 /* || this.options.content.length > 7089 */) {
	    throw new Error("Expected 'content' to be non-empty!");
	  }
	  
	  if (!(this.options.padding >= 0)) {
	    throw new Error("Expected 'padding' value to be non-negative!");
	  }
	  
	  if (!(this.options.width > 0) || !(this.options.height > 0)) {
	    throw new Error("Expected 'width' or 'height' value to be higher than zero!");
	  }
	  
	  //Gets the error correction level
	  function _getErrorCorrectLevel(ecl) {
	    switch (ecl) {
	        case "L":
	          return QRErrorCorrectLevel.L;
	          
	        case "M":
	          return QRErrorCorrectLevel.M;
	          
	        case "Q":
	          return QRErrorCorrectLevel.Q;
	          
	        case "H":
	          return QRErrorCorrectLevel.H;
	          
	        default:
	          throw new Error("Unknwon error correction level: " + ecl);
	      }
	  }
	  
	  //Get type number
	  function _getTypeNumber(content, ecl) {      
	    var length = _getUTF8Length(content);
	    
	    var type = 1;
	    var limit = 0;
	    for (var i = 0, len = QRCodeLimitLength.length; i <= len; i++) {
	      var table = QRCodeLimitLength[i];
	      if (!table) {
	        throw new Error("Content too long: expected " + limit + " but got " + length);
	      }
	      
	      switch (ecl) {
	        case "L":
	          limit = table[0];
	          break;
	          
	        case "M":
	          limit = table[1];
	          break;
	          
	        case "Q":
	          limit = table[2];
	          break;
	          
	        case "H":
	          limit = table[3];
	          break;
	          
	        default:
	          throw new Error("Unknwon error correction level: " + ecl);
	      }
	      
	      if (length <= limit) {
	        break;
	      }
	      
	      type++;
	    }
	    
	    if (type > QRCodeLimitLength.length) {
	      throw new Error("Content too long");
	    }
	    
	    return type;
	  }

	  //Gets text length
	  function _getUTF8Length(content) {
	    var result = encodeURI(content).toString().replace(/\%[0-9a-fA-F]{2}/g, 'a');
	    return result.length + (result.length != content ? 3 : 0);
	  }
	  
	  //Generate QR Code matrix
	  var content = this.options.content;
	  var type = _getTypeNumber(content, this.options.ecl);
	  var ecl = _getErrorCorrectLevel(this.options.ecl);
	  this.qrcode = new QRCodeModel(type, ecl);
	  this.qrcode.addData(content);
	  this.qrcode.make();
	}

	/** Generates QR Code as SVG image */
	QRCode.prototype.svg = function(opt) {
	  var options = this.options || { };
	  var modules = this.qrcode.modules;
	  
	  if (typeof opt == "undefined") {
	    opt = { container: options.container || "svg" };
	  }
	  
	  //Apply new lines and indents in SVG?
	  var pretty = typeof options.pretty != "undefined" ? !!options.pretty : true;
	  
	  var indent = pretty ? '  ' : '';
	  var EOL = pretty ? '\r\n' : '';
	  var width = options.width;
	  var height = options.height;
	  var length = modules.length;
	  var xsize = width / (length + 2 * options.padding);
	  var ysize = height / (length + 2 * options.padding);
	  
	  //Join (union, merge) rectangles into one shape?
	  var join = typeof options.join != "undefined" ? !!options.join : false;
	  
	  //Swap the X and Y modules, pull request #2
	  var swap = typeof options.swap != "undefined" ? !!options.swap : false;
	  
	  //Apply <?xml...?> declaration in SVG?
	  var xmlDeclaration = typeof options.xmlDeclaration != "undefined" ? !!options.xmlDeclaration : true;
	  
	  //Populate with predefined shape instead of "rect" elements, thanks to @kkocdko
	  var predefined = typeof options.predefined != "undefined" ? !!options.predefined : false;
	  var defs = predefined ? indent + '<defs><path id="qrmodule" d="M0 0 h' + ysize + ' v' + xsize + ' H0 z" style="fill:' + options.color + ';shape-rendering:crispEdges;" /></defs>' + EOL : '';
	  
	  //Background rectangle
	  var bgrect = indent + '<rect x="0" y="0" width="' + width + '" height="' + height + '" style="fill:' + options.background + ';shape-rendering:crispEdges;"/>' + EOL;
	  
	  //Rectangles representing modules
	  var modrect = '';
	  var pathdata = '';

	  for (var y = 0; y < length; y++) {
	    for (var x = 0; x < length; x++) {
	      var module = modules[x][y];
	      if (module) {
	        
	        var px = (x * xsize + options.padding * xsize);
	        var py = (y * ysize + options.padding * ysize);
	        
	        //Some users have had issues with the QR Code, thanks to @danioso for the solution
	        if (swap) {
	          var t = px;
	          px = py;
	          py = t;
	        }
	        
	        if (join) {
	          //Module as a part of svg path data, thanks to @danioso
	          var w = xsize + px;
	          var h = ysize + py;

	          px = (Number.isInteger(px))? Number(px): px.toFixed(2);
	          py = (Number.isInteger(py))? Number(py): py.toFixed(2);
	          w = (Number.isInteger(w))? Number(w): w.toFixed(2);
	          h = (Number.isInteger(h))? Number(h): h.toFixed(2);

	          pathdata += ('M' + px + ',' + py + ' V' + h + ' H' + w + ' V' + py + ' H' + px + ' Z ');
	        }
	        else if (predefined) {
	          //Module as a predefined shape, thanks to @kkocdko
	          modrect += indent + '<use x="' + px.toString() + '" y="' + py.toString() + '" href="#qrmodule" />' + EOL;
	        }
	        else {
	          //Module as rectangle element
	          modrect += indent + '<rect x="' + px.toString() + '" y="' + py.toString() + '" width="' + xsize + '" height="' + ysize + '" style="fill:' + options.color + ';shape-rendering:crispEdges;"/>' + EOL;
	        }
	      }
	    }
	  }
	  
	  if (join) {
	    modrect = indent + '<path x="0" y="0" style="fill:' + options.color + ';shape-rendering:crispEdges;" d="' + pathdata + '" />';
	  }

	  var svg = "";
	  switch (opt.container) {
	    //Wrapped in SVG document
	    case "svg":
	      if (xmlDeclaration) {
	        svg += '<?xml version="1.0" standalone="yes"?>' + EOL;
	      }
	      svg += '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="' + width + '" height="' + height + '">' + EOL;
	      svg += defs + bgrect + modrect;
	      svg += '</svg>';
	      break;
	      
	    //Viewbox for responsive use in a browser, thanks to @danioso
	    case "svg-viewbox":
	      if (xmlDeclaration) {
	        svg += '<?xml version="1.0" standalone="yes"?>' + EOL;
	      }
	      svg += '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 ' + width + ' ' + height + '">' + EOL;
	      svg += defs + bgrect + modrect;
	      svg += '</svg>';
	      break;
	      
	    
	    //Wrapped in group element    
	    case "g":
	      svg += '<g width="' + width + '" height="' + height + '">' + EOL;
	      svg += defs + bgrect + modrect;
	      svg += '</g>';
	      break;
	      
	    //Without a container
	    default:
	      svg += (defs + bgrect + modrect).replace(/^\s+/, ""); //Clear indents on each line
	      break;
	  }
	  
	  return svg;
	};

	/** Writes QR Code image to a file */
	QRCode.prototype.save = function(file, callback) {
	  var data = this.svg();
	  if (typeof callback != "function") {
	    callback = function(error, result) { };
	  }
	  try {
	    //Package 'fs' is available in node.js but not in a web browser
	    var fs = require$$0;
	    fs.writeFile(file, data, callback);
	  }
	  catch (e) {
	    //Sorry, 'fs' is not available
	    callback(e);
	  }
	};

	{
	  module.exports = QRCode;
	}
	});

	//

	var script$1 = {
	  data() {
	    return {
	      form: {
	        content: '',
	        ecl: 'L'
	      },
	      photo: '',
	      levels: ['L', 'M', 'Q', 'H']
	    };
	  },
	  mounted() {
	    window.rc.getCurrentTabUrl().then(
	      url => {
	        this.form.content = url || '你好';
	      },
	      () => {}
	    );
	  },
	  watch: {
	    form: {
	      deep: true,
	      handler() {
	        console.log(this.form);
	        this.renderQrcode();
	      }
	    }
	  },
	  methods: {
	    renderQrcode() {
	      let svg = new qrcode(
	        Object.assign(
	          {
	            content: this.form.content,
	            padding: 0,
	            width: 500,
	            height: 500,
	            color: '#000000',
	            background: '#ffffff',
	            join: true,
	            container: 'svg-viewbox'
	          },
	          this.form
	        )
	      ).svg();

	      this.$refs.qrcode.innerHTML = svg;
	      this.$refs.qrcode
	        .querySelector('svg')
	        .setAttribute('xmlns:xlink', 'http://www.w3.org/1999/xlink');
	    },
	    getCurrentTab() {},
	    getPhoto(e) {
	      let file = e.target.files[0];
	      if (!file) return;
	      let reader = new FileReader();
	      reader.readAsDataURL(file);
	      reader.onload = () => {
	        this.photo = reader.result;
	        this.setLogo();
	      };
	      e.target.value = '';
	    },
	    async setLogo() {
	      let size = 80;
	      let img = this.$refs.qrcode.querySelector('svg #logo');
	      if (!img) {
	        img = document.createElementNS('http://www.w3.org/2000/svg', 'image');
	        this.$refs.qrcode.querySelector('svg').append(img);
	      }
	      img.setAttribute('id', 'logo');
	      img.setAttribute('width', size);
	      img.setAttribute('height', size);
	      img.setAttribute('x', (500 - size) / 2);
	      img.setAttribute('y', (500 - size) / 2);
	      let canvas = await this.toCanvas(this.photo, size, size);
	      let url = await this.canvasToDataUrl(canvas);
	      console.log({ canvas, url });
	      img.setAttributeNS('http://www.w3.org/1999/xlink', 'href', url);
	    },
	    toCanvas(url, width, height) {
	      return new Promise((r, j) => {
	        let img = document.createElement('img');
	        img.onload = () => {
	          console.log({ img });
	          let canvas = document.createElement('canvas');
	          canvas.width = width || img.width;
	          canvas.height = height || img.height;
	          let ctx = canvas.getContext('2d');
	          let wrate = canvas.width / img.width;
	          let hrate = canvas.height / img.height;
	          let rate = wrate < hrate ? wrate : hrate;

	          let drawWidth = rate * img.width;
	          let drawHeight = rate * img.height;

	          ctx.fillStyle = '#ffffff';
	          ctx.fillRect(0, 0, canvas.width, canvas.height);

	          ctx.drawImage(
	            img,
	            (canvas.width - drawWidth) / 2,
	            (canvas.height - drawHeight) / 2,
	            drawWidth,
	            drawHeight
	          );

	          r(canvas);
	        };
	        img.onerror = j;
	        img.src = url;
	      });
	    },
	    canvasToBlob(canvas) {
	      return new Promise((r, j) => {
	        canvas.toBlob(blob => {
	          r(blob);
	        });
	      });
	    },
	    canvasToDataUrl(canvas) {
	      return new Promise((r, j) => {
	        r(canvas.toDataURL());
	      });
	    },
	    async downloadSVG(type) {
	      let link = '';
	      let svg = this.$refs.qrcode.querySelector('svg').outerHTML;

	      if (type == 'svg') {
	        link = URL.createObjectURL(new Blob([svg], { type: 'image/svg+xml' }));
	      } else {
	        svg = `data:image/svg+xml;,${encodeURIComponent(svg)}`;
	        let canvas = await this.toCanvas(svg, 500, 500);
	        let blob = await this.canvasToBlob(canvas);
	        link = URL.createObjectURL(blob);
	      }

	      let a = document.createElement('a');
	      a.href = link;
	      a.download = `qrcode.${type}`;
	      a.click();
	    }
	  }
	};

	/* script */
	const __vue_script__$1 = script$1;

	/* template */
	var __vue_render__$1 = function() {
	  var _vm = this;
	  var _h = _vm.$createElement;
	  var _c = _vm._self._c || _h;
	  return _c("div", { staticClass: "qrbox" }, [
	    _c("div", { staticClass: "container" }, [
	      _c("div", { ref: "qrcode", staticClass: "qrcode" }),
	      _vm._v(" "),
	      _c("div", { staticClass: "options" }, [
	        _c(
	          "div",
	          { staticClass: "form" },
	          [
	            _c("div", [_vm._v("容错:")]),
	            _vm._v(" "),
	            _c(
	              "iu-select",
	              {
	                attrs: { value: _vm.form.ecl },
	                on: {
	                  input: function($event) {
	                    _vm.form.ecl = $event.detail.value;
	                  }
	                }
	              },
	              _vm._l(_vm.levels, function(item) {
	                return _c("iu-option", { key: item, attrs: { value: item } }, [
	                  _vm._v(_vm._s(item))
	                ])
	              }),
	              1
	            ),
	            _vm._v(" "),
	            _c("div", [_vm._v("LOGO:")]),
	            _vm._v(" "),
	            _c(
	              "label",
	              {
	                staticClass: "upload",
	                style: { "background-image": "url(" + _vm.photo + ")" }
	              },
	              [
	                !_vm.photo
	                  ? _c("div", { staticClass: "placeholder" }, [
	                      _vm._v("选择图片")
	                    ])
	                  : _vm._e(),
	                _vm._v(" "),
	                _c("input", {
	                  attrs: { type: "file" },
	                  on: { change: _vm.getPhoto }
	                })
	              ]
	            )
	          ],
	          1
	        ),
	        _vm._v(" "),
	        _c(
	          "div",
	          { staticClass: "buttons" },
	          [
	            _c(
	              "iu-button",
	              {
	                attrs: { color: "success", size: "mini" },
	                on: {
	                  click: function($event) {
	                    return _vm.downloadSVG("svg")
	                  }
	                }
	              },
	              [_vm._v("导出SVG")]
	            ),
	            _vm._v(" "),
	            _c(
	              "iu-button",
	              {
	                attrs: { color: "success", size: "mini" },
	                on: {
	                  click: function($event) {
	                    return _vm.downloadSVG("png")
	                  }
	                }
	              },
	              [_vm._v("导出PNG")]
	            )
	          ],
	          1
	        )
	      ])
	    ]),
	    _vm._v(" "),
	    _c("div", { staticClass: "text" }, [
	      _c("textarea", {
	        directives: [
	          {
	            name: "model",
	            rawName: "v-model",
	            value: _vm.form.content,
	            expression: "form.content"
	          }
	        ],
	        domProps: { value: _vm.form.content },
	        on: {
	          input: function($event) {
	            if ($event.target.composing) {
	              return
	            }
	            _vm.$set(_vm.form, "content", $event.target.value);
	          }
	        }
	      })
	    ])
	  ])
	};
	var __vue_staticRenderFns__$1 = [];
	__vue_render__$1._withStripped = true;

	  /* style */
	  const __vue_inject_styles__$1 = function (inject) {
	    if (!inject) return
	    inject("data-v-f76c6358_0", { source: ".qrbox[data-v-f76c6358] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n.qrbox .container[data-v-f76c6358] {\n  display: flex;\n  height: 240px;\n  max-height: 240px;\n  min-height: 240px;\n}\n.qrbox .container .qrcode[data-v-f76c6358] {\n  width: 240px;\n  max-width: 240px;\n  min-width: 240px;\n  height: 240px;\n}\n.qrbox .container .options[data-v-f76c6358] {\n  flex: auto;\n  padding: 0 0 0 20px;\n  display: flex;\n  flex-direction: column;\n}\n.qrbox .container .options .form[data-v-f76c6358] {\n  flex: auto;\n}\n.qrbox .container .options .buttons[data-v-f76c6358] {\n  height: 24px;\n  text-align: right;\n}\n.qrbox .container .options .upload[data-v-f76c6358] {\n  width: 60px;\n  height: 60px;\n  display: block;\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: 1px solid #bdbdbd;\n  cursor: pointer;\n}\n.qrbox .container .options .upload input[data-v-f76c6358] {\n  display: none;\n}\n.qrbox .text[data-v-f76c6358] {\n  flex: auto;\n  padding: 5px 0;\n}\n.qrbox .text textarea[data-v-f76c6358] {\n  border: 2px solid #ededed;\n  padding: 1em;\n  resize: none;\n  width: 100%;\n  height: 100%;\n}\n\n/*# sourceMappingURL=qrcode.vue.map */", map: {"version":3,"sources":["F:\\My_Fun\\ali.git\\crx\\dev-panel\\panel\\pages\\qrcode.vue","qrcode.vue"],"names":[],"mappings":"AAiLA;EACA,aAAA;EACA,sBAAA;EACA,YAAA;AChLA;ADiLA;EACA,aAAA;EACA,aAAA;EACA,iBAAA;EACA,iBAAA;AC/KA;ADgLA;EACA,YAAA;EACA,gBAAA;EACA,gBAAA;EACA,aAAA;AC9KA;ADgLA;EACA,UAAA;EACA,mBAAA;EACA,aAAA;EACA,sBAAA;AC9KA;AD+KA;EACA,UAAA;AC7KA;AD+KA;EACA,YAAA;EACA,iBAAA;AC7KA;AD+KA;EACA,WAAA;EACA,YAAA;EACA,cAAA;EACA,sBAAA;EACA,4BAAA;EACA,2BAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,yBAAA;EACA,eAAA;AC7KA;AD8KA;EACA,aAAA;AC5KA;ADiLA;EACA,UAAA;EACA,cAAA;AC/KA;ADgLA;EACA,yBAAA;EACA,YAAA;EACA,YAAA;EACA,WAAA;EACA,YAAA;AC9KA;;AAEA,qCAAqC","file":"qrcode.vue","sourcesContent":["<template>\n  <div class=\"qrbox\">\n    <div class=\"container\">\n      <div class=\"qrcode\" ref=\"qrcode\"></div>\n      <div class=\"options\">\n        <div class=\"form\">\n          <div>容错:</div>\n          <iu-select :value=\"form.ecl\" @input=\"form.ecl=$event.detail.value\">\n            <iu-option :key=\"item\" :value=\"item\" v-for=\"item of levels\">{{item}}</iu-option>\n          </iu-select>\n          <div>LOGO:</div>\n          <label :style=\"{'background-image':`url(${photo})`}\" class=\"upload\">\n            <div class=\"placeholder\" v-if=\"!photo\">选择图片</div>\n            <input @change=\"getPhoto\" type=\"file\" />\n          </label>\n        </div>\n        <div class=\"buttons\">\n          <iu-button @click=\"downloadSVG('svg')\" color=\"success\" size=\"mini\">导出SVG</iu-button>\n          <iu-button @click=\"downloadSVG('png')\" color=\"success\" size=\"mini\">导出PNG</iu-button>\n        </div>\n      </div>\n    </div>\n    <div class=\"text\">\n      <textarea v-model=\"form.content\"></textarea>\n    </div>\n  </div>\n</template>\n<script>\nimport Qrcode from 'qrcode-svg';\n\nexport default {\n  data() {\n    return {\n      form: {\n        content: '',\n        ecl: 'L'\n      },\n      photo: '',\n      levels: ['L', 'M', 'Q', 'H']\n    };\n  },\n  mounted() {\n    window.rc.getCurrentTabUrl().then(\n      url => {\n        this.form.content = url || '你好';\n      },\n      () => {}\n    );\n  },\n  watch: {\n    form: {\n      deep: true,\n      handler() {\n        console.log(this.form);\n        this.renderQrcode();\n      }\n    }\n  },\n  methods: {\n    renderQrcode() {\n      let svg = new Qrcode(\n        Object.assign(\n          {\n            content: this.form.content,\n            padding: 0,\n            width: 500,\n            height: 500,\n            color: '#000000',\n            background: '#ffffff',\n            join: true,\n            container: 'svg-viewbox'\n          },\n          this.form\n        )\n      ).svg();\n\n      this.$refs.qrcode.innerHTML = svg;\n      this.$refs.qrcode\n        .querySelector('svg')\n        .setAttribute('xmlns:xlink', 'http://www.w3.org/1999/xlink');\n    },\n    getCurrentTab() {},\n    getPhoto(e) {\n      let file = e.target.files[0];\n      if (!file) return;\n      let reader = new FileReader();\n      reader.readAsDataURL(file);\n      reader.onload = () => {\n        this.photo = reader.result;\n        this.setLogo();\n      };\n      e.target.value = '';\n    },\n    async setLogo() {\n      let size = 80;\n      let img = this.$refs.qrcode.querySelector('svg #logo');\n      if (!img) {\n        img = document.createElementNS('http://www.w3.org/2000/svg', 'image');\n        this.$refs.qrcode.querySelector('svg').append(img);\n      }\n      img.setAttribute('id', 'logo');\n      img.setAttribute('width', size);\n      img.setAttribute('height', size);\n      img.setAttribute('x', (500 - size) / 2);\n      img.setAttribute('y', (500 - size) / 2);\n      let canvas = await this.toCanvas(this.photo, size, size);\n      let url = await this.canvasToDataUrl(canvas);\n      console.log({ canvas, url });\n      img.setAttributeNS('http://www.w3.org/1999/xlink', 'href', url);\n    },\n    toCanvas(url, width, height) {\n      return new Promise((r, j) => {\n        let img = document.createElement('img');\n        img.onload = () => {\n          console.log({ img });\n          let canvas = document.createElement('canvas');\n          canvas.width = width || img.width;\n          canvas.height = height || img.height;\n          let ctx = canvas.getContext('2d');\n          let wrate = canvas.width / img.width;\n          let hrate = canvas.height / img.height;\n          let rate = wrate < hrate ? wrate : hrate;\n\n          let drawWidth = rate * img.width;\n          let drawHeight = rate * img.height;\n\n          ctx.fillStyle = '#ffffff';\n          ctx.fillRect(0, 0, canvas.width, canvas.height);\n\n          ctx.drawImage(\n            img,\n            (canvas.width - drawWidth) / 2,\n            (canvas.height - drawHeight) / 2,\n            drawWidth,\n            drawHeight\n          );\n\n          r(canvas);\n        };\n        img.onerror = j;\n        img.src = url;\n      });\n    },\n    canvasToBlob(canvas) {\n      return new Promise((r, j) => {\n        canvas.toBlob(blob => {\n          r(blob);\n        });\n      });\n    },\n    canvasToDataUrl(canvas) {\n      return new Promise((r, j) => {\n        r(canvas.toDataURL());\n      });\n    },\n    async downloadSVG(type) {\n      let link = '';\n      let svg = this.$refs.qrcode.querySelector('svg').outerHTML;\n\n      if (type == 'svg') {\n        link = URL.createObjectURL(new Blob([svg], { type: 'image/svg+xml' }));\n      } else {\n        svg = `data:image/svg+xml;,${encodeURIComponent(svg)}`;\n        let canvas = await this.toCanvas(svg, 500, 500);\n        let blob = await this.canvasToBlob(canvas);\n        link = URL.createObjectURL(blob);\n      }\n\n      let a = document.createElement('a');\n      a.href = link;\n      a.download = `qrcode.${type}`;\n      a.click();\n    }\n  }\n};\n</script>\n<style lang=\"scss\" scoped>\n.qrbox {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  .container {\n    display: flex;\n    height: 240px;\n    max-height: 240px;\n    min-height: 240px;\n    .qrcode {\n      width: 240px;\n      max-width: 240px;\n      min-width: 240px;\n      height: 240px;\n    }\n    .options {\n      flex: auto;\n      padding: 0 0 0 20px;\n      display: flex;\n      flex-direction: column;\n      .form {\n        flex: auto;\n      }\n      .buttons {\n        height: 24px;\n        text-align: right;\n      }\n      .upload {\n        width: 60px;\n        height: 60px;\n        display: block;\n        background-size: cover;\n        background-repeat: no-repeat;\n        background-position: center;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        border: 1px solid #bdbdbd;\n        cursor: pointer;\n        input {\n          display: none;\n        }\n      }\n    }\n  }\n  .text {\n    flex: auto;\n    padding: 5px 0;\n    textarea {\n      border: 2px solid #ededed;\n      padding: 1em;\n      resize: none;\n      width: 100%;\n      height: 100%;\n    }\n  }\n}\n</style>",".qrbox {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n.qrbox .container {\n  display: flex;\n  height: 240px;\n  max-height: 240px;\n  min-height: 240px;\n}\n.qrbox .container .qrcode {\n  width: 240px;\n  max-width: 240px;\n  min-width: 240px;\n  height: 240px;\n}\n.qrbox .container .options {\n  flex: auto;\n  padding: 0 0 0 20px;\n  display: flex;\n  flex-direction: column;\n}\n.qrbox .container .options .form {\n  flex: auto;\n}\n.qrbox .container .options .buttons {\n  height: 24px;\n  text-align: right;\n}\n.qrbox .container .options .upload {\n  width: 60px;\n  height: 60px;\n  display: block;\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: 1px solid #bdbdbd;\n  cursor: pointer;\n}\n.qrbox .container .options .upload input {\n  display: none;\n}\n.qrbox .text {\n  flex: auto;\n  padding: 5px 0;\n}\n.qrbox .text textarea {\n  border: 2px solid #ededed;\n  padding: 1em;\n  resize: none;\n  width: 100%;\n  height: 100%;\n}\n\n/*# sourceMappingURL=qrcode.vue.map */"]}, media: undefined });

	  };
	  /* scoped */
	  const __vue_scope_id__$1 = "data-v-f76c6358";
	  /* module identifier */
	  const __vue_module_identifier__$1 = undefined;
	  /* functional template */
	  const __vue_is_functional_template__$1 = false;
	  /* style inject SSR */
	  
	  /* style inject shadow dom */
	  

	  
	  const __vue_component__$1 = /*#__PURE__*/normalizeComponent(
	    { render: __vue_render__$1, staticRenderFns: __vue_staticRenderFns__$1 },
	    __vue_inject_styles__$1,
	    __vue_script__$1,
	    __vue_scope_id__$1,
	    __vue_is_functional_template__$1,
	    __vue_module_identifier__$1,
	    false,
	    createInjector,
	    undefined,
	    undefined
	  );

	var Pages = {
	    Encrypt: __vue_component__,
	    Qrcode: __vue_component__$1,
	};

	Vue.use(VueRouter);

	var router = new VueRouter({
	    mode: 'hash',
	    routes: [
	        { path: '/encrypt', component: Pages.Encrypt, name: '加解密' },
	        { path: '/qrcode', component: Pages.Qrcode, name: '二维码' },
	    ],
	    onError(e) {
	        {
	            console.error(e);
	        }
	    }
	});

	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	var script$2 = {
	  components: {},
	  data() {
	    return {
	      screen: {
	        width: window.innerWidth,
	        height: window.innerHeight - 60
	      },
	      menu: [
	        { path: '/encrypt', name: '加解密', icon: 'encrypt' },
	        { path: '/qrcode', name: '二维码', icon: 'qrcode' }
	      ]
	    };
	  },
	  beforeCreate() {
	    if (localStorage.historyRoutePath) {
	      this.$router.push(localStorage.historyRoutePath);
	    }
	  },
	  beforeMount() {
	    if (!this.$route.name) {
	      this.open(this.menu[0]);
	    }
	    window.addEventListener('resize', () => {
	      this.screen.width = window.innerWidth;
	      this.screen.height = window.innerHeight - 60;
	    });
	  },
	  computed: {
	    popoverStyle() {
	      return {
	        width: this.screen.width + 'px',
	        maxHeight: this.screen.height + 'px'
	      };
	    },
	    routerName() {
	      return this.$route.name;
	    }
	  },
	  methods: {
	    open(item) {
	      this.$router.push(item.path);
	      localStorage.historyRoutePath = item.path;
	    }
	  }
	};

	/* script */
	const __vue_script__$2 = script$2;

	/* template */
	var __vue_render__$2 = function() {
	  var _vm = this;
	  var _h = _vm.$createElement;
	  var _c = _vm._self._c || _h;
	  return _c(
	    "div",
	    { staticClass: "panel-box" },
	    [
	      _c(
	        "iu-layout",
	        [
	          _c(
	            "iu-header",
	            { staticClass: "header", attrs: { height: "60" } },
	            [
	              _c(
	                "iu-direction",
	                { attrs: { placement: "bottomLeft" } },
	                [
	                  _c("dev-icon", {
	                    staticClass: "tool-icon",
	                    attrs: { name: "tool" }
	                  }),
	                  _vm._v(" "),
	                  _c("iu-ripple", { attrs: { dark: "" } }),
	                  _vm._v(" "),
	                  _c("div", { attrs: { slot: "content" }, slot: "content" }, [
	                    _c(
	                      "div",
	                      { staticClass: "menu", style: _vm.popoverStyle },
	                      _vm._l(_vm.menu, function(item) {
	                        return _c(
	                          "div",
	                          {
	                            staticClass: "menu-item",
	                            on: {
	                              click: function($event) {
	                                return _vm.open(item)
	                              }
	                            }
	                          },
	                          [
	                            _c("iu-ripple"),
	                            _vm._v(" "),
	                            _c(
	                              "div",
	                              { staticClass: "icon" },
	                              [_c("dev-icon", { attrs: { name: item.icon } })],
	                              1
	                            ),
	                            _vm._v(" "),
	                            _c("div", { staticClass: "name" }, [
	                              _vm._v(_vm._s(item.name))
	                            ])
	                          ],
	                          1
	                        )
	                      }),
	                      0
	                    )
	                  ])
	                ],
	                1
	              ),
	              _vm._v(" "),
	              _c("span", { staticClass: "title" }, [
	                _vm._v(
	                  "工具" + _vm._s(_vm.routerName ? ": " + _vm.routerName : "")
	                )
	              ])
	            ],
	            1
	          ),
	          _vm._v(" "),
	          _c(
	            "iu-content",
	            { staticClass: "router-content" },
	            [_c("router-view")],
	            1
	          )
	        ],
	        1
	      )
	    ],
	    1
	  )
	};
	var __vue_staticRenderFns__$2 = [];
	__vue_render__$2._withStripped = true;

	  /* style */
	  const __vue_inject_styles__$2 = function (inject) {
	    if (!inject) return
	    inject("data-v-6da06842_0", { source: ".panel-box[data-v-6da06842] {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  left: 0;\n  top: 0;\n}\n.panel-box .header[data-v-6da06842] {\n  user-select: none;\n  border-bottom: 1px solid #ededed;\n  padding: 10px;\n}\n.panel-box .header .tool-icon[data-v-6da06842] {\n  font-size: 40px;\n  vertical-align: middle;\n  cursor: pointer;\n}\n.panel-box .header .title[data-v-6da06842] {\n  font-size: 20px;\n  line-height: 40px;\n  display: inline-block;\n  margin-left: 10px;\n  vertical-align: middle;\n  max-width: 60%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.panel-box .header .menu[data-v-6da06842] {\n  background-color: #fff;\n  padding: 10px 0;\n  overflow: auto;\n  box-shadow: 0 10px 10px 0px rgba(0, 0, 0, 0.2);\n  padding: 10px;\n  margin-left: -10px;\n  margin-top: 10px;\n}\n.panel-box .header .menu .menu-item[data-v-6da06842] {\n  display: inline-block;\n  text-align: center;\n  padding: 10px;\n  width: 80px;\n  cursor: pointer;\n  position: relative;\n}\n.panel-box .header .menu .menu-item[data-v-6da06842]:hover {\n  background-color: #f4f4f4;\n}\n.panel-box .header .menu .menu-item .icon[data-v-6da06842] {\n  font-size: 32px;\n}\n.panel-box .header .menu .menu-item .name[data-v-6da06842] {\n  font-size: 12px;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n.panel-box .router-content[data-v-6da06842] {\n  overflow-y: auto;\n  padding: 10px;\n}\n\n/*# sourceMappingURL=index.vue.map */", map: {"version":3,"sources":["F:\\My_Fun\\ali.git\\crx\\dev-panel\\panel\\index.vue","index.vue"],"names":[],"mappings":"AA8EA;EACA,eAAA;EACA,WAAA;EACA,YAAA;EACA,OAAA;EACA,MAAA;AC7EA;AD8EA;EACA,iBAAA;EACA,gCAAA;EACA,aAAA;AC5EA;AD6EA;EACA,eAAA;EACA,sBAAA;EACA,eAAA;AC3EA;AD6EA;EACA,eAAA;EACA,iBAAA;EACA,qBAAA;EACA,iBAAA;EACA,sBAAA;EACA,cAAA;EACA,gBAAA;EACA,uBAAA;EACA,mBAAA;AC3EA;AD6EA;EACA,sBAAA;EACA,eAAA;EACA,cAAA;EACA,8CAAA;EACA,aAAA;EACA,kBAAA;EACA,gBAAA;AC3EA;AD4EA;EACA,qBAAA;EACA,kBAAA;EACA,aAAA;EACA,WAAA;EACA,eAAA;EACA,kBAAA;AC1EA;AD2EA;EACA,yBAAA;ACzEA;AD2EA;EACA,eAAA;ACzEA;AD2EA;EACA,eAAA;EACA,gBAAA;EACA,mBAAA;EACA,uBAAA;ACzEA;AD8EA;EACA,gBAAA;EACA,aAAA;AC5EA;;AAEA,oCAAoC","file":"index.vue","sourcesContent":["<template>\n  <div class=\"panel-box\">\n    <iu-layout>\n      <iu-header class=\"header\" height=\"60\">\n        <iu-direction placement=\"bottomLeft\">\n          <dev-icon class=\"tool-icon\" name=\"tool\"></dev-icon>\n          <iu-ripple dark></iu-ripple>\n          <div slot=\"content\">\n            <div :style=\"popoverStyle\" class=\"menu\">\n              <div @click=\"open(item)\" class=\"menu-item\" v-for=\"item of menu\">\n                <iu-ripple></iu-ripple>\n                <div class=\"icon\">\n                  <dev-icon :name=\"item.icon\"></dev-icon>\n                </div>\n                <div class=\"name\">{{item.name}}</div>\n              </div>\n            </div>\n          </div>\n        </iu-direction>\n        <span class=\"title\">工具{{routerName?`: ${routerName}`:''}}</span>\n      </iu-header>\n      <iu-content class=\"router-content\">\n        <router-view></router-view>\n      </iu-content>\n    </iu-layout>\n    <!-- <encrypt /> -->\n  </div>\n</template>\n\n<script>\nexport default {\n  components: {},\n  data() {\n    return {\n      screen: {\n        width: window.innerWidth,\n        height: window.innerHeight - 60\n      },\n      menu: [\n        { path: '/encrypt', name: '加解密', icon: 'encrypt' },\n        { path: '/qrcode', name: '二维码', icon: 'qrcode' }\n      ]\n    };\n  },\n  beforeCreate() {\n    if (localStorage.historyRoutePath) {\n      this.$router.push(localStorage.historyRoutePath);\n    }\n  },\n  beforeMount() {\n    if (!this.$route.name) {\n      this.open(this.menu[0]);\n    }\n    window.addEventListener('resize', () => {\n      this.screen.width = window.innerWidth;\n      this.screen.height = window.innerHeight - 60;\n    });\n  },\n  computed: {\n    popoverStyle() {\n      return {\n        width: this.screen.width + 'px',\n        maxHeight: this.screen.height + 'px'\n      };\n    },\n    routerName() {\n      return this.$route.name;\n    }\n  },\n  methods: {\n    open(item) {\n      this.$router.push(item.path);\n      localStorage.historyRoutePath = item.path;\n    }\n  }\n};\n</script>\n<style lang=\"scss\" scoped>\n.panel-box {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  left: 0;\n  top: 0;\n  .header {\n    user-select: none;\n    border-bottom: 1px solid #ededed;\n    padding: 10px;\n    .tool-icon {\n      font-size: 40px;\n      vertical-align: middle;\n      cursor: pointer;\n    }\n    .title {\n      font-size: 20px;\n      line-height: 40px;\n      display: inline-block;\n      margin-left: 10px;\n      vertical-align: middle;\n      max-width: 60%;\n      overflow: hidden;\n      text-overflow: ellipsis;\n      white-space: nowrap;\n    }\n    .menu {\n      background-color: #fff;\n      padding: 10px 0;\n      overflow: auto;\n      box-shadow: 0 10px 10px 0px rgba(0, 0, 0, 0.2);\n      padding: 10px;\n      margin-left: -10px;\n      margin-top: 10px;\n      .menu-item {\n        display: inline-block;\n        text-align: center;\n        padding: 10px;\n        width: 80px;\n        cursor: pointer;\n        position: relative;\n        &:hover {\n          background-color: #f4f4f4;\n        }\n        .icon {\n          font-size: 32px;\n        }\n        .name {\n          font-size: 12px;\n          overflow: hidden;\n          white-space: nowrap;\n          text-overflow: ellipsis;\n        }\n      }\n    }\n  }\n  .router-content {\n    overflow-y: auto;\n    padding: 10px;\n  }\n}\n</style>\n<style lang=\"scss\">\nbody {\n  margin: 0;\n}\n* {\n  box-sizing: border-box;\n}\n::-webkit-scrollbar {\n  width: 4px;\n}\n\n::-webkit-scrollbar-thumb {\n  background: transparent;\n  border-radius: 4px;\n}\n\n:hover::-webkit-scrollbar-thumb {\n  background: rgba(136, 136, 136, 0.4);\n}\n\n:hover::-webkit-scrollbar-track {\n  background: rgba(136, 136, 136, 0.1);\n}\n</style>",".panel-box {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  left: 0;\n  top: 0;\n}\n.panel-box .header {\n  user-select: none;\n  border-bottom: 1px solid #ededed;\n  padding: 10px;\n}\n.panel-box .header .tool-icon {\n  font-size: 40px;\n  vertical-align: middle;\n  cursor: pointer;\n}\n.panel-box .header .title {\n  font-size: 20px;\n  line-height: 40px;\n  display: inline-block;\n  margin-left: 10px;\n  vertical-align: middle;\n  max-width: 60%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.panel-box .header .menu {\n  background-color: #fff;\n  padding: 10px 0;\n  overflow: auto;\n  box-shadow: 0 10px 10px 0px rgba(0, 0, 0, 0.2);\n  padding: 10px;\n  margin-left: -10px;\n  margin-top: 10px;\n}\n.panel-box .header .menu .menu-item {\n  display: inline-block;\n  text-align: center;\n  padding: 10px;\n  width: 80px;\n  cursor: pointer;\n  position: relative;\n}\n.panel-box .header .menu .menu-item:hover {\n  background-color: #f4f4f4;\n}\n.panel-box .header .menu .menu-item .icon {\n  font-size: 32px;\n}\n.panel-box .header .menu .menu-item .name {\n  font-size: 12px;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n.panel-box .router-content {\n  overflow-y: auto;\n  padding: 10px;\n}\n\n/*# sourceMappingURL=index.vue.map */"]}, media: undefined })
	,inject("data-v-6da06842_1", { source: "body {\n  margin: 0;\n}\n* {\n  box-sizing: border-box;\n}\n::-webkit-scrollbar {\n  width: 4px;\n}\n::-webkit-scrollbar-thumb {\n  background: transparent;\n  border-radius: 4px;\n}\n:hover::-webkit-scrollbar-thumb {\n  background: rgba(136, 136, 136, 0.4);\n}\n:hover::-webkit-scrollbar-track {\n  background: rgba(136, 136, 136, 0.1);\n}\n\n/*# sourceMappingURL=index.vue.map */", map: {"version":3,"sources":["F:\\My_Fun\\ali.git\\crx\\dev-panel\\panel\\index.vue","index.vue"],"names":[],"mappings":"AA6IA;EACA,SAAA;AC5IA;AD8IA;EACA,sBAAA;AC3IA;AD6IA;EACA,UAAA;AC1IA;AD6IA;EACA,uBAAA;EACA,kBAAA;AC1IA;AD6IA;EACA,oCAAA;AC1IA;AD6IA;EACA,oCAAA;AC1IA;;AAEA,oCAAoC","file":"index.vue","sourcesContent":["<template>\n  <div class=\"panel-box\">\n    <iu-layout>\n      <iu-header class=\"header\" height=\"60\">\n        <iu-direction placement=\"bottomLeft\">\n          <dev-icon class=\"tool-icon\" name=\"tool\"></dev-icon>\n          <iu-ripple dark></iu-ripple>\n          <div slot=\"content\">\n            <div :style=\"popoverStyle\" class=\"menu\">\n              <div @click=\"open(item)\" class=\"menu-item\" v-for=\"item of menu\">\n                <iu-ripple></iu-ripple>\n                <div class=\"icon\">\n                  <dev-icon :name=\"item.icon\"></dev-icon>\n                </div>\n                <div class=\"name\">{{item.name}}</div>\n              </div>\n            </div>\n          </div>\n        </iu-direction>\n        <span class=\"title\">工具{{routerName?`: ${routerName}`:''}}</span>\n      </iu-header>\n      <iu-content class=\"router-content\">\n        <router-view></router-view>\n      </iu-content>\n    </iu-layout>\n    <!-- <encrypt /> -->\n  </div>\n</template>\n\n<script>\nexport default {\n  components: {},\n  data() {\n    return {\n      screen: {\n        width: window.innerWidth,\n        height: window.innerHeight - 60\n      },\n      menu: [\n        { path: '/encrypt', name: '加解密', icon: 'encrypt' },\n        { path: '/qrcode', name: '二维码', icon: 'qrcode' }\n      ]\n    };\n  },\n  beforeCreate() {\n    if (localStorage.historyRoutePath) {\n      this.$router.push(localStorage.historyRoutePath);\n    }\n  },\n  beforeMount() {\n    if (!this.$route.name) {\n      this.open(this.menu[0]);\n    }\n    window.addEventListener('resize', () => {\n      this.screen.width = window.innerWidth;\n      this.screen.height = window.innerHeight - 60;\n    });\n  },\n  computed: {\n    popoverStyle() {\n      return {\n        width: this.screen.width + 'px',\n        maxHeight: this.screen.height + 'px'\n      };\n    },\n    routerName() {\n      return this.$route.name;\n    }\n  },\n  methods: {\n    open(item) {\n      this.$router.push(item.path);\n      localStorage.historyRoutePath = item.path;\n    }\n  }\n};\n</script>\n<style lang=\"scss\" scoped>\n.panel-box {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  left: 0;\n  top: 0;\n  .header {\n    user-select: none;\n    border-bottom: 1px solid #ededed;\n    padding: 10px;\n    .tool-icon {\n      font-size: 40px;\n      vertical-align: middle;\n      cursor: pointer;\n    }\n    .title {\n      font-size: 20px;\n      line-height: 40px;\n      display: inline-block;\n      margin-left: 10px;\n      vertical-align: middle;\n      max-width: 60%;\n      overflow: hidden;\n      text-overflow: ellipsis;\n      white-space: nowrap;\n    }\n    .menu {\n      background-color: #fff;\n      padding: 10px 0;\n      overflow: auto;\n      box-shadow: 0 10px 10px 0px rgba(0, 0, 0, 0.2);\n      padding: 10px;\n      margin-left: -10px;\n      margin-top: 10px;\n      .menu-item {\n        display: inline-block;\n        text-align: center;\n        padding: 10px;\n        width: 80px;\n        cursor: pointer;\n        position: relative;\n        &:hover {\n          background-color: #f4f4f4;\n        }\n        .icon {\n          font-size: 32px;\n        }\n        .name {\n          font-size: 12px;\n          overflow: hidden;\n          white-space: nowrap;\n          text-overflow: ellipsis;\n        }\n      }\n    }\n  }\n  .router-content {\n    overflow-y: auto;\n    padding: 10px;\n  }\n}\n</style>\n<style lang=\"scss\">\nbody {\n  margin: 0;\n}\n* {\n  box-sizing: border-box;\n}\n::-webkit-scrollbar {\n  width: 4px;\n}\n\n::-webkit-scrollbar-thumb {\n  background: transparent;\n  border-radius: 4px;\n}\n\n:hover::-webkit-scrollbar-thumb {\n  background: rgba(136, 136, 136, 0.4);\n}\n\n:hover::-webkit-scrollbar-track {\n  background: rgba(136, 136, 136, 0.1);\n}\n</style>","body {\n  margin: 0;\n}\n\n* {\n  box-sizing: border-box;\n}\n\n::-webkit-scrollbar {\n  width: 4px;\n}\n\n::-webkit-scrollbar-thumb {\n  background: transparent;\n  border-radius: 4px;\n}\n\n:hover::-webkit-scrollbar-thumb {\n  background: rgba(136, 136, 136, 0.4);\n}\n\n:hover::-webkit-scrollbar-track {\n  background: rgba(136, 136, 136, 0.1);\n}\n\n/*# sourceMappingURL=index.vue.map */"]}, media: undefined });

	  };
	  /* scoped */
	  const __vue_scope_id__$2 = "data-v-6da06842";
	  /* module identifier */
	  const __vue_module_identifier__$2 = undefined;
	  /* functional template */
	  const __vue_is_functional_template__$2 = false;
	  /* style inject SSR */
	  
	  /* style inject shadow dom */
	  

	  
	  const __vue_component__$2 = /*#__PURE__*/normalizeComponent(
	    { render: __vue_render__$2, staticRenderFns: __vue_staticRenderFns__$2 },
	    __vue_inject_styles__$2,
	    __vue_script__$2,
	    __vue_scope_id__$2,
	    __vue_is_functional_template__$2,
	    __vue_module_identifier__$2,
	    false,
	    createInjector,
	    undefined,
	    undefined
	  );

	var require$$0$1 = "data:image/xml+svg;,%3C%3Fxml%20version%3D%221.0%22%20standalone%3D%22no%22%3F%3E%3C!DOCTYPE%20svg%20PUBLIC%20%22-%2F%2FW3C%2F%2FDTD%20SVG%201.1%2F%2FEN%22%20%22http%3A%2F%2Fwww.w3.org%2FGraphics%2FSVG%2F1.1%2FDTD%2Fsvg11.dtd%22%3E%3Csvg%20t%3D%221590472353245%22%20class%3D%22icon%22%20viewBox%3D%220%200%201024%201024%22%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20p-id%3D%228531%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20width%3D%22128%22%20height%3D%22128%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cpath%20d%3D%22M409.6%20128c19.2%200%2038.4%2012.8%2051.2%2025.6L512%20230.4c19.2%2012.8%2038.4%2025.6%2057.6%2025.6H960c38.4%200%2064%2025.6%2064%2064v588.8c0%2025.6-25.6%2051.2-64%2051.2H64c-38.4%200-64-19.2-64-51.2V192c0-38.4%2025.6-64%2064-64h345.6z%22%20fill%3D%22%23119CE0%22%20p-id%3D%228532%22%20data-spm-anchor-id%3D%22a313x.7781069.0.i3%22%20class%3D%22%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M371.2%20320H448v64H384c-12.8%200-19.2%200-25.6%206.4-6.4%206.4-6.4%2019.2-6.4%2032v38.4H448v64H352v300.8H275.2V518.4H192v-64h83.2v-32c0-32%206.4-57.6%2025.6-70.4%2019.2-25.6%2038.4-32%2070.4-32z%20m102.4%20140.8h89.6L640%20576l76.8-115.2h89.6l-128%20172.8%20140.8%20192h-89.6L640%20684.8l-96%20140.8H454.4l140.8-192-121.6-172.8z%22%20fill%3D%22%23FFFFFF%22%20p-id%3D%228533%22%20data-spm-anchor-id%3D%22a313x.7781069.0.i4%22%20class%3D%22%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E";

	var require$$1 = "<svg><symbol id=\"icon-qrcode\" viewBox=\"0 0 1024 1024\"><path d=\"M0 0v451.072h466.24V0H0z m382.848 367.68h-299.52V79.616h299.52v288zM0 534.4v451.072h466.24V534.464H0z m382.848 367.744h-299.52V614.016h299.52v288.128zM553.408 0v451.072h466.24V0H553.408z m382.848 367.68h-299.52V79.616h299.52v288zM636.8 985.472H553.408V534.464h253.952v189.504c0 11.392 3.84 11.392 11.392 11.392h113.664V530.56h83.392v284.288h-295.68V610.24H640.64l-3.84 3.84v371.392z\" fill=\"#2ed573\" ></path><path d=\"M723.968 985.472h128.896v-121.28h-128.896zM898.304 985.472h125.12v-121.28h-125.12zM170.56 284.288V163.008H295.68V276.672c0 3.84 0 11.392-7.616 11.392H174.336c0-3.84 0-3.84-3.776-3.84zM170.56 818.752v-121.344h117.504c3.84 0 11.392 0 11.392 7.616v113.728H170.56zM727.744 163.008h125.12v121.28H735.36c-7.616 0-11.392 0-11.392-7.616V166.784s3.84 0 3.84-3.84z\" fill=\"#2ed573\" ></path></symbol><symbol id=\"icon-tool\" viewBox=\"0 0 1024 1024\"><path d=\"M0 21.29A21.333 21.333 0 0 1 21.29 0h418.198C451.264 0 460.8 9.621 460.8 21.29v418.198a21.333 21.333 0 0 1-21.29 21.29H21.29A21.333 21.333 0 0 1 0 439.51V21.291z m0 563.2a21.333 21.333 0 0 1 21.29-21.29h418.198a21.333 21.333 0 0 1 21.29 21.29v418.198a21.333 21.333 0 0 1-21.29 21.29H21.291A21.333 21.333 0 0 1 0 1002.71V584.491z m563.2 0a21.333 21.333 0 0 1 21.29-21.29h418.198a21.333 21.333 0 0 1 21.29 21.29v418.198A21.333 21.333 0 0 1 1002.71 1024H584.491a21.333 21.333 0 0 1-21.291-21.29V584.49z\" fill=\"#2ed573\" ></path><path d=\"M578.283 202.133l187.05-187.05a21.312 21.312 0 0 1 30.166 0l187.05 187.05a21.312 21.312 0 0 1 0 30.166L795.5 419.349a21.312 21.312 0 0 1-30.166 0L578.283 232.3a21.333 21.333 0 0 1 0-30.166z\" fill=\"#7bed9f\" ></path></symbol><symbol id=\"icon-encrypt\" viewBox=\"0 0 1024 1024\"><path d=\"M409.6 128c19.2 0 38.4 12.8 51.2 25.6L512 230.4c19.2 12.8 38.4 25.6 57.6 25.6H960c38.4 0 64 25.6 64 64v588.8c0 25.6-25.6 51.2-64 51.2H64c-38.4 0-64-19.2-64-51.2V192c0-38.4 25.6-64 64-64h345.6z\" fill=\"#2ed573\" ></path><path d=\"M371.2 320H448v64H384c-12.8 0-19.2 0-25.6 6.4-6.4 6.4-6.4 19.2-6.4 32v38.4H448v64H352v300.8H275.2V518.4H192v-64h83.2v-32c0-32 6.4-57.6 25.6-70.4 19.2-25.6 38.4-32 70.4-32z m102.4 140.8h89.6L640 576l76.8-115.2h89.6l-128 172.8 140.8 192h-89.6L640 684.8l-96 140.8H454.4l140.8-192-121.6-172.8z\" fill=\"#FFFFFF\" ></path></symbol></svg>";

	var Assets = {
	    images: {
	        encrypt: require$$0$1,
	        symbol: require$$1,
	    }
	};

	IUUI.registerIconAlias('dev-icon', Assets.images.symbol);

	Vue.config.ignoredElements = [
	    /^iu-/
	];
	Vue.config.errorHandler = function (err, vm, info) {
	    {
	        console.error(err);
	        console.error(info);
	    }
	};

	window.addEventListener('unhandledrejection', e => e.preventDefault());

	var index$1 = (el) => {
	    new Vue({
	        el,
	        router,
	        render: h => h(__vue_component__$2),

	    });
	};

	return index$1;

}());
