function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function _createClass(e,n,t){return n&&_defineProperties(e.prototype,n),t&&_defineProperties(e,t),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{IYB0:function(e,n,t){"use strict";t.r(n),t.d(n,"JobModule",(function(){return b}));var o,i,r,l=t("ofXK"),a=t("vxfF"),c=t("tyNb"),s=t("AytR"),u=t("fXoL"),f=t("jhN1"),p=[{path:"",component:(o=function(){function e(n){_classCallCheck(this,e),this._title=n}return _createClass(e,[{key:"ngOnInit",value:function(){this._title.setTitle("".concat(s.a.configuration.list.jobs.title," / ").concat(s.a.configuration.general.title))}}]),e}(),o.\u0275fac=function(e){return new(e||o)(u.Kb(f.d))},o.\u0275cmp=u.Eb({type:o,selectors:[["app-job"]],decls:1,vars:0,template:function(e,n){1&e&&u.Lb(0,"router-outlet")},directives:[c.h],styles:["[_nghost-%COMP%]{display:block}"]}),o),children:[{path:":id",loadChildren:function(){return Promise.all([t.e(0),t.e(10)]).then(t.bind(null,"d2fp")).then((function(e){return e.JobDetailModule}))}},{path:"",loadChildren:function(){return Promise.all([t.e(0),t.e(11)]).then(t.bind(null,"u7nA")).then((function(e){return e.JobListModule}))}}]}],d=((i=function e(){_classCallCheck(this,e)}).\u0275mod=u.Ib({type:i}),i.\u0275inj=u.Hb({factory:function(e){return new(e||i)},imports:[[c.g.forChild(p)],c.g]}),i),h=t("9Xeq"),b=((r=function e(){_classCallCheck(this,e)}).\u0275mod=u.Ib({type:r}),r.\u0275inj=u.Hb({factory:function(e){return new(e||r)},imports:[[l.c,h.a,d,a.a]]}),r)}}]);