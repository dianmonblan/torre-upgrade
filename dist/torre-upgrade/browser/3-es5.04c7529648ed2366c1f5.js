function _classCallCheck(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(n,e){for(var t=0;t<e.length;t++){var o=e[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}function _createClass(n,e,t){return e&&_defineProperties(n.prototype,e),t&&_defineProperties(n,t),n}(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{IYB0:function(n,e,t){"use strict";t.r(e),t.d(e,"JobModule",(function(){return b}));var o,i,r,c=t("ofXK"),l=t("vxfF"),a=t("tyNb"),u=t("AytR"),s=t("fXoL"),f=t("jhN1"),p=[{path:"",component:(o=function(){function n(e){_classCallCheck(this,n),this._title=e}return _createClass(n,[{key:"ngOnInit",value:function(){this._title.setTitle("".concat(u.a.configuration.list.jobs.title," / ").concat(u.a.configuration.general.title))}}]),n}(),o.\u0275fac=function(n){return new(n||o)(s.Kb(f.d))},o.\u0275cmp=s.Eb({type:o,selectors:[["app-job"]],decls:1,vars:0,template:function(n,e){1&n&&s.Lb(0,"router-outlet")},directives:[a.h],styles:["[_nghost-%COMP%]{display:block}"]}),o),children:[{path:":id",loadChildren:function(){return t.e(12).then(t.bind(null,"d2fp")).then((function(n){return n.JobDetailModule}))}},{path:"",loadChildren:function(){return Promise.all([t.e(2),t.e(13)]).then(t.bind(null,"u7nA")).then((function(n){return n.JobListModule}))}}]}],d=((i=function n(){_classCallCheck(this,n)}).\u0275mod=s.Ib({type:i}),i.\u0275inj=s.Hb({factory:function(n){return new(n||i)},imports:[[a.g.forChild(p)],a.g]}),i),h=t("9Xeq"),b=((r=function n(){_classCallCheck(this,n)}).\u0275mod=s.Ib({type:r}),r.\u0275inj=s.Hb({factory:function(n){return new(n||r)},imports:[[c.c,h.a,d,l.a]]}),r)}}]);