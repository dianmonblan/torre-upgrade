function _classCallCheck(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,n){for(var e=0;e<n.length;e++){var o=n[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function _createClass(t,n,e){return n&&_defineProperties(t.prototype,n),e&&_defineProperties(t,e),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{C8ir:function(t,n,e){"use strict";e.r(n),e.d(n,"BioListModule",(function(){return y}));var o=e("ofXK"),i=e("vxfF"),r=e("tyNb"),a=e("2Vo4"),c=e("pLZG"),s=e("AytR"),l=e("Fi61"),g=e("ZKU/"),d=e("fXoL"),b=e("jhN1");function u(t,n){1&t&&(d.Ob(0,"div",2),d.nc(1,"Loading people..."),d.Nb())}function f(t,n){if(1&t&&(d.Ob(0,"li"),d.nc(1),d.Nb()),2&t){var e=n.$implicit,o=n.last;d.Ab(1),d.qc("",e.name,"",o?"":", ","")}}var p=function(t){return[".",t]};function h(t,n){if(1&t&&(d.Ob(0,"div",5),d.Lb(1,"img",6),d.Ob(2,"p",7),d.nc(3),d.Nb(),d.Ob(4,"div",8),d.Ob(5,"div",9),d.nc(6),d.Nb(),d.Ob(7,"div",10),d.nc(8),d.Nb(),d.Nb(),d.Ob(9,"ul",11),d.lc(10,f,2,2,"li",12),d.Nb(),d.Ob(11,"a",13),d.nc(12,"BIO"),d.Nb(),d.Nb()),2&t){var e,o=n.$implicit,i=d.Xb(2),r=null;d.Ab(1),d.cc("src",o.picture,d.hc)("alt",o.name),d.Ab(2),d.oc(o.name),d.Ab(3),d.pc(" ",null==(e=i.compensation(o.compensation))?null:e.periodicity," "),d.Ab(2),d.qc(" ",null==(r=i.compensation(o.compensation))?null:r.amount," ",null==(r=i.compensation(o.compensation))?null:r.currency," "),d.Ab(2),d.cc("ngForOf",o.skills),d.Ab(1),d.cc("routerLink",d.ec(9,p,o.username))("title",o.professionalHeadline)}}function _(t,n){if(1&t&&(d.Ob(0,"div",3),d.lc(1,h,13,11,"div",4),d.Nb()),2&t){var e=n.ngIf,o=d.Xb();d.Ab(1),d.cc("ngForOf",e)("ngForTrackBy",o.trackByFunction)}}var m,O,P,C=[{path:"",component:(m=function(){function t(n,e,o,i){_classCallCheck(this,t),this._torreAPIService=n,this._title=e,this._meta=o,this._activatedRoute=i,this.biosBehaviorSubject$=new a.a(this._torreAPIService.getPeopleState())}return _createClass(t,[{key:"ngOnInit",value:function(){this.startActivatedRouteQueryParamFilterSubscription();var t=this._activatedRoute.snapshot.queryParamMap;t.get("aggregate")||t.get("offset")||t.get("size")||this.list()}},{key:"ngOnDestroy",value:function(){this.biosBehaviorSubject$&&this.biosBehaviorSubject$.unsubscribe(),this._activatedRouteQueryParamFilterSubscription$&&this._activatedRouteQueryParamFilterSubscription$.unsubscribe()}},{key:"startActivatedRouteQueryParamFilterSubscription",value:function(){var t=this;this._activatedRouteQueryParamFilterSubscription$=this._activatedRoute.queryParamMap.pipe(Object(c.a)((function(t){return!!t.get("aggregate")||!!t.get("offset")||!!t.get("size")}))).subscribe((function(n){return t.list(n.get("aggregate"),Number(n.get("offset")),Number(n.get("size")))}))}},{key:"compensation",value:function(t){var n=t?Object.keys(t):null;return n?t[n[0]]:new g.a}},{key:"list",value:function(){var t=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:l.a,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:l.b;this._torreAPIService.people(n,e,o).subscribe((function(n){t._title.setTitle("".concat(s.a.configuration.list.people.title," / ").concat(s.a.configuration.general.title)),t._meta.updateTag({name:"description",content:n.reduce((function(t,n){return"".concat(n.professionalHeadline,", ").concat(t," ")}),"")}),t._meta.updateTag({name:"keywords",content:n.reduce((function(t,n){return"".concat(n.skills.join(", "),", ").concat(t," ")}),"")}),t.biosBehaviorSubject$.next(n)}))}},{key:"trackByFunction",value:function(t){return t.username}}]),t}(),m.\u0275fac=function(t){return new(t||m)(d.Kb(l.c),d.Kb(b.d),d.Kb(b.c),d.Kb(r.a))},m.\u0275cmp=d.Eb({type:m,selectors:[["app-bio-list"]],decls:4,vars:4,consts:[["loading",""],["class","container",4,"ngIf","ngIfElse"],[1,"loading"],[1,"container"],["class","card",4,"ngFor","ngForOf","ngForTrackBy"],[1,"card"],[1,"card__image",3,"src","alt"],[1,"card__name"],[1,"grid-container"],[1,"grid-child-posts"],[1,"grid-child-followers"],[1,"social-icons"],[4,"ngFor","ngForOf"],["queryParamsHandling","merge",1,"btn","draw-border",3,"routerLink","title"]],template:function(t,n){if(1&t&&(d.lc(0,u,2,0,"ng-template",null,0,d.mc),d.lc(2,_,2,2,"div",1),d.Yb(3,"async")),2&t){var e=d.gc(1);d.Ab(2),d.cc("ngIf",d.Zb(3,2,n.biosBehaviorSubject$))("ngIfElse",e)}},directives:[o.j,o.i,r.f],pipes:[o.b],styles:['[_nghost-%COMP%]{display:block}[_nghost-%COMP%]   .loading[_ngcontent-%COMP%]{display:block;margin-top:50px;text-align:center;color:#272133;font-size:24px;min-height:100px}[_nghost-%COMP%]   .container[_ngcontent-%COMP%]{display:grid;grid-template-columns:30% 30% 30%;grid-gap:50px;justify-content:center;text-align:center}[_nghost-%COMP%]   .card[_ngcontent-%COMP%]{background-color:#222831;height:auto;border-radius:5px;display:flex;flex-direction:column;align-items:center;box-shadow:rgba(0,0,0,.7);color:#fff}[_nghost-%COMP%]   .card__name[_ngcontent-%COMP%]{margin-top:15px;font-size:1.5em}[_nghost-%COMP%]   .card__image[_ngcontent-%COMP%]{height:160px;width:160px;border-radius:50%;border:5px solid #272133;margin-top:20px;box-shadow:0 10px 50px #eb196e}[_nghost-%COMP%]   .draw-border[_ngcontent-%COMP%]{box-shadow:inset 0 0 0 4px #58cdd1;color:#58afd1;transition:color .25s .0833333333s;position:relative;text-decoration:none}[_nghost-%COMP%]   .draw-border[_ngcontent-%COMP%]:after, [_nghost-%COMP%]   .draw-border[_ngcontent-%COMP%]:before{border:0 solid transparent;box-sizing:border-box;content:"";pointer-events:none;position:absolute;width:0;height:0;bottom:0;right:0}[_nghost-%COMP%]   .draw-border[_ngcontent-%COMP%]:before{border-bottom-width:4px;border-left-width:4px}[_nghost-%COMP%]   .draw-border[_ngcontent-%COMP%]:after{border-top-width:4px;border-right-width:4px}[_nghost-%COMP%]   .draw-border[_ngcontent-%COMP%]:hover{color:#ffe593}[_nghost-%COMP%]   .draw-border[_ngcontent-%COMP%]:hover:after, [_nghost-%COMP%]   .draw-border[_ngcontent-%COMP%]:hover:before{border-color:#eb196e;transition:border-color 0s,width .25s,height .25s;width:100%;height:100%}[_nghost-%COMP%]   .draw-border[_ngcontent-%COMP%]:hover:before{transition-delay:0s,0s,.25s}[_nghost-%COMP%]   .draw-border[_ngcontent-%COMP%]:hover:after{transition-delay:0s,.25s,0s}[_nghost-%COMP%]   .btn[_ngcontent-%COMP%]{background:none;border:none;cursor:pointer;line-height:1.5;font:700 1.2rem Roboto Slab,sans-serif;padding:.75em 2em;letter-spacing:.05rem;margin:1em;width:13rem}[_nghost-%COMP%]   .btn[_ngcontent-%COMP%]:focus{outline:2px dotted #55d7dc}[_nghost-%COMP%]   .social-icons[_ngcontent-%COMP%]{padding:0;list-style:none;margin:1em}[_nghost-%COMP%]   .social-icons[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:inline-block;margin:.15em;position:relative;font-size:1em}[_nghost-%COMP%]   .social-icons[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#fff;position:absolute;top:.95em;left:.96em;transition:all 265ms ease-out}[_nghost-%COMP%]   .social-icons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:inline-block}[_nghost-%COMP%]   .social-icons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:before{transform:scale(1);-ms-transform:scale(1);-webkit-transform:scale(1);content:" ";width:45px;height:45px;border-radius:100%;display:block;background:linear-gradient(45deg,#ff003c,#c648c8);transition:all 265ms ease-out}[_nghost-%COMP%]   .social-icons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover:before{transform:scale(0);transition:all 265ms ease-in}[_nghost-%COMP%]   .social-icons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%]{transform:scale(2.2);-ms-transform:scale(2.2);-webkit-transform:scale(2.2);color:#ff003c;background:-webkit-linear-gradient(45deg,#ff003c,#c648c8);-webkit-background-clip:text;-webkit-text-fill-color:transparent;transition:all 265ms ease-in}[_nghost-%COMP%]   .grid-container[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr;grid-gap:20px;font-size:1.2em}']}),m)}],M=((O=function t(){_classCallCheck(this,t)}).\u0275mod=d.Ib({type:O}),O.\u0275inj=d.Hb({factory:function(t){return new(t||O)},imports:[[r.g.forChild(C)],r.g]}),O),v=e("9Xeq"),y=((P=function t(){_classCallCheck(this,t)}).\u0275mod=d.Ib({type:P}),P.\u0275inj=d.Hb({factory:function(t){return new(t||P)},imports:[[o.c,v.a,M,i.a]]}),P)}}]);