parcelRequire=function(e,r,n){var t="function"==typeof parcelRequire&&parcelRequire,i="function"==typeof require&&require;function u(n,o){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!o&&f)return f(n,!0);if(t)return t(n,!0);if(i&&"string"==typeof n)return i(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}a.resolve=function(r){return e[n][1][r]||r};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,a,l,l.exports)}return r[n].exports;function a(e){return u(a.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=t;for(var o=0;o<n.length;o++)u(n[o]);return u}({14:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var t=function(){function t(){}return t.toText=function(t){return t.getDate()+"/"+(t.getMonth()+1)+"/"+t.getFullYear()},t.toDate=function(t){if(!/^\d{4}-\d{2}-\d{2}$/.test(t))throw new Error("Must be in the format yyyy-mm-dd");return new(Date.bind.apply(Date,[void 0].concat(t.split("-").map(function(t,e){return t-e%2}))))},t}();exports.DateConverter=t;
},{}],15:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=function(){function e(e){void 0===e&&(e=""),this._text=e}return Object.defineProperty(e.prototype,"text",{get:function(){return this._text},set:function(e){this._text=e},enumerable:!0,configurable:!0}),e}();exports.Message=e;
},{}],32:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=function(){function e(e){this._element=document.querySelector(e)}return e.prototype.update=function(e){this._element.innerHTML=this.render(e)},e.prototype.render=function(e){throw new Error("You need to implement the render method!")},e}();exports.View=e;
},{}],16:[function(require,module,exports) {
"use strict";var t=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])};return function(e,r){function n(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}();Object.defineProperty(exports,"__esModule",{value:!0});var e=require("./View"),r=function(e){function r(){return null!==e&&e.apply(this,arguments)||this}return t(r,e),r.prototype.render=function(t){return t.text?'<p class="alert -success">'+t.text+"</p>":""},r}(e.View);exports.MessageView=r;
},{"./View":32}],17:[function(require,module,exports) {
"use strict";var t=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])};return function(n,e){function r(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}}();Object.defineProperty(exports,"__esModule",{value:!0});var n=require("../converters/DateConverter"),e=require("./View"),r=function(e){function r(){return null!==e&&e.apply(this,arguments)||this}return t(r,e),r.prototype.render=function(t){return'\n      <table class="table">\n          <thead>\n              <tr>\n                  <th>Date</th>\n                  <th>Quantity</th>\n                  <th>Value</th>\n                  <th>Volume</th>\n              </tr>\n          </thead>\n\n          <tbody>\n              '+t.toArray().map(function(t){return"\n                  <tr>\n                      <td>"+n.DateConverter.toText(t.date)+"</td>\n                      <td>"+t.quantity+"</td>\n                      <td>"+t.value+"</td>\n                      <td>"+t.volume+"</td>\n                  </tr>"}).join("")+'\n          </tbody>\n\n          <tfoot>\n              <tr>\n                  <td colspan="3"></td>\n                  <td>'+t.totalVolume+"</td>\n              </tr>\n          </tfoot>\n      </table>\n    "},r}(e.View);exports.NegotiationsView=r;
},{"../converters/DateConverter":14,"./View":32}],18:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=function(){function e(e,t,n){Object.assign(this,{_quantity:t,_value:n}),this._date=new Date(e.getTime()),Object.freeze(this)}return Object.defineProperty(e.prototype,"volume",{get:function(){return this._quantity*this._value},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"date",{get:function(){return new Date(this._date.getTime())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"quantity",{get:function(){return this._quantity},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"value",{get:function(){return this._value},enumerable:!0,configurable:!0}),e}();exports.Negotiation=e;
},{}],19:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var t=function(){function t(){this._negotiations=[]}return t.prototype.add=function(t){this._negotiations.push(t)},t.prototype.toArray=function(){return[].concat(this._negotiations)},Object.defineProperty(t.prototype,"totalVolume",{get:function(){return this._negotiations.reduce(function(t,e){return t+e.volume},0)},enumerable:!0,configurable:!0}),t}();exports.Negotiations=t;
},{}],11:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("./../ui/converters/DateConverter"),t=require("./../ui/models/Message"),i=require("../ui/views/MessageView"),s=require("../ui/views/NegotiationsView"),a=require("./../domain/negotiation/Negotiation"),n=require("./../domain/negotiation/Negotiations"),o=function(){function o(){var e=document.querySelector.bind(document);this._inputDate=e("#date"),this._inputQuantity=e("#quantity"),this._inputValue=e("#value"),this._negotiations=new n.Negotiations,this._negotiationsView=new s.NegotiationsView("#negotiations"),this._message=new t.Message,this._messageView=new i.MessageView("#messageView"),this._messageView.update(this._message)}return o.prototype.add=function(e){e.preventDefault(),this._negotiations.add(this._createNegotiation()),this._message.text="Successfully created negotiation",this._negotiationsView.update(this._negotiations),this._clearForm(),this._messageView.update(this._message)},o.prototype._clearForm=function(){this._inputDate.value="",this._inputQuantity.value="",this._inputValue.value="",this._inputDate.focus()},o.prototype._createNegotiation=function(){return new a.Negotiation(e.DateConverter.toDate(this._inputDate.value),parseInt(this._inputQuantity.value,10),parseFloat(this._inputValue.value))},o}();exports.NegotiationController=o;
},{"./../ui/converters/DateConverter":14,"./../ui/models/Message":15,"../ui/views/MessageView":16,"../ui/views/NegotiationsView":17,"./../domain/negotiation/Negotiation":18,"./../domain/negotiation/Negotiations":19}],5:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("./controllers/NegotiationController"),t=new e.NegotiationController,r=document.querySelector('[data-js="form"]');r&&r.addEventListener("submit",t.add.bind(t));
},{"./controllers/NegotiationController":11}]},{},[5])
//# sourceMappingURL=app.3812e430.map