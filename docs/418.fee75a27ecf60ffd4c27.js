"use strict";(self.webpackChunkchurch=self.webpackChunkchurch||[]).push([[418],{4418:(N,g,i)=>{i.r(g),i.d(g,{VideoPageModule:()=>O});var c=i(8583),s=i(3971),l=i(5987),v=i(5917),p=i(8307),f=i(3190),m=i(8002),u=i(157),n=i(7716),h=i(425),C=i(2582);function V(t,e){if(1&t&&(n.TgZ(0,"div",7),n._UZ(1,"nguix-video",8),n.qZA()),2&t){const o=e.ngIf;n.xp6(1),n.Q6J("video",o)}}function x(t,e){1&t&&(n.TgZ(0,"div",9),n._uU(1,"Item not found!"),n.qZA())}function M(t,e){if(1&t&&(n.ynx(0),n.YNc(1,V,2,1,"div",5),n.YNc(2,x,2,0,"ng-template",null,6,n.W1O),n.BQk()),2&t){const o=e.ngIf,d=n.MAs(3);n.xp6(1),n.Q6J("ngIf",o.video)("ngIfElse",d)}}function I(t,e){if(1&t&&(n.TgZ(0,"div",3),n.YNc(1,M,4,2,"ng-container",4),n.ALo(2,"async"),n.qZA()),2&t){const o=n.oxw(),d=n.MAs(3);n.xp6(1),n.Q6J("ngIf",n.lcZ(2,2,o.data$))("ngIfElse",d)}}function y(t,e){1&t&&n._uU(0," nguix-skeleton-video ...\n")}function Z(t,e){1&t&&(n.TgZ(0,"div",10),n._UZ(1,"nguix-spinner"),n.qZA())}const A=[{path:"",component:(()=>{class t{constructor(o,d,r,S){this.route=o,this.store=d,this.navService=r,this.videoDataService=S,this.page$=this.route.params.pipe((0,p.b)(a=>this.id=a.id)),this.data$=this.store.select(a=>a.schemata_video).pipe((0,f.w)(()=>{var a;return(null===(a=this.navService.routeData)||void 0===a?void 0:a.video)?(0,v.of)(this.navService.routeData.video):this.store.dispatch(new u.is(this.id)).pipe((0,m.U)(Y=>Y.schemata_video.itemRecord[this.id]))}),(0,m.U)(a=>({video:a})),(0,p.b)(a=>{!a.video||this.videoDataService.increment(this.id,{viewCount:1})}))}ngOnInit(){}}return t.\u0275fac=function(o){return new(o||t)(n.Y36(l.gz),n.Y36(h.yh),n.Y36(C.tZ),n.Y36(u.Er))},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-video"]],decls:6,vars:4,consts:[["class","host",4,"ngIf","ngIfElse"],["itemSkeleton",""],["loadingHost",""],[1,"host"],[4,"ngIf","ngIfElse"],["class","main",4,"ngIf","ngIfElse"],["itemNotFound",""],[1,"main"],[3,"video"],[1,"not-found"],[1,"loading-host"]],template:function(o,d){if(1&o&&(n.YNc(0,I,3,4,"div",0),n.ALo(1,"async"),n.YNc(2,y,1,0,"ng-template",null,1,n.W1O),n.YNc(4,Z,2,0,"ng-template",null,2,n.W1O)),2&o){const r=n.MAs(5);n.Q6J("ngIf",n.lcZ(1,2,d.page$))("ngIfElse",r)}},directives:[c.O5,s.VideoComponent,s.SpinnerComponent],pipes:[c.Ov],styles:[".host[_ngcontent-%COMP%]{padding:1rem}.host[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]{overflow:hidden;border-radius:var(--app-size-radius);background:var(--app-color-background-tint)}.loading-host[_ngcontent-%COMP%]{padding:2rem;display:flex;justify-content:center}"]}),t})()}];let T=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[[l.Bz.forChild(A)],l.Bz]}),t})(),O=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[[c.ez,s.NguixSpinnerComponentModule,s.NguixVideoComponentModule,T]]}),t})()}}]);