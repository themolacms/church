"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[418],{4418:(S,l,e)=>{e.r(l),e.d(l,{VideoPageModule:()=>O});var c=e(8583),s=e(3971),r=e(5987),u=e(5917),p=e(8307),f=e(3190),v=e(8002),m=e(157),n=e(7716),h=e(425),C=e(2582);function V(o,i){if(1&o&&(n.TgZ(0,"div",6),n._UZ(1,"nguix-video",7),n.qZA()),2&o){const t=i.ngIf;n.xp6(1),n.Q6J("video",t)}}function x(o,i){1&o&&(n.TgZ(0,"div",8),n._uU(1,"Item not found!"),n.qZA())}function M(o,i){if(1&o&&(n.ynx(0),n.YNc(1,V,2,1,"div",4),n.YNc(2,x,2,0,"ng-template",null,5,n.W1O),n.BQk()),2&o){const t=i.ngIf,d=n.MAs(3);n.xp6(1),n.Q6J("ngIf",t.video)("ngIfElse",d)}}function Z(o,i){if(1&o&&(n.TgZ(0,"div",2),n.YNc(1,M,4,2,"ng-container",3),n.ALo(2,"async"),n.qZA()),2&o){const t=n.oxw();n.xp6(1),n.Q6J("ngIf",n.lcZ(2,1,t.data$))}}function I(o,i){1&o&&(n.TgZ(0,"div",9),n.TgZ(1,"div",6),n._UZ(2,"nguix-skeleton-video"),n.qZA(),n.qZA())}const y=[{path:"",component:(()=>{class o{constructor(t,d,g,P){this.route=t,this.store=d,this.navService=g,this.videoDataService=P,this.page$=this.route.params.pipe((0,p.b)(a=>this.id=a.id)),this.data$=this.store.select(a=>a.schemata_video).pipe((0,f.w)(()=>{var a;return(null===(a=this.navService.routeData)||void 0===a?void 0:a.video)?(0,u.of)(this.navService.routeData.video):this.store.dispatch(new m.is(this.id)).pipe((0,v.U)(T=>T.schemata_video.itemRecord[this.id]))}),(0,v.U)(a=>({video:a})),(0,p.b)(a=>{!a.video||this.videoDataService.increment(this.id,{viewCount:1})}))}ngOnInit(){}}return o.\u0275fac=function(t){return new(t||o)(n.Y36(r.gz),n.Y36(h.yh),n.Y36(C.tZ),n.Y36(m.Er))},o.\u0275cmp=n.Xpm({type:o,selectors:[["app-video-page"]],decls:4,vars:4,consts:[["class","host",4,"ngIf","ngIfElse"],["loadingHost",""],[1,"host"],[4,"ngIf"],["class","main",4,"ngIf","ngIfElse"],["itemNotFound",""],[1,"main"],["categoryPath","videos/category",3,"video"],[1,"not-found"],[1,"loading-host"]],template:function(t,d){if(1&t&&(n.YNc(0,Z,3,3,"div",0),n.ALo(1,"async"),n.YNc(2,I,3,0,"ng-template",null,1,n.W1O)),2&t){const g=n.MAs(3);n.Q6J("ngIf",n.lcZ(1,2,d.page$))("ngIfElse",g)}},directives:[c.O5,s.VideoComponent,s.SkeletonVideoComponent],pipes:[c.Ov],styles:[".host[_ngcontent-%COMP%]{padding:1rem;max-width:992px;margin:auto}.host[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]{overflow:hidden;border-radius:var(--app-size-radius);background:var(--app-color-background-tint)}.loading-host[_ngcontent-%COMP%]{padding:1rem}.loading-host[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]{overflow:hidden;border-radius:var(--app-size-radius);background:var(--app-color-background-tint)}"]}),o})()}];let A=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=n.oAB({type:o}),o.\u0275inj=n.cJS({imports:[[r.Bz.forChild(y)],r.Bz]}),o})(),O=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=n.oAB({type:o}),o.\u0275inj=n.cJS({imports:[[c.ez,s.NguixVideoComponentModule,s.NguixSkeletonVideoComponentModule,A]]}),o})()}}]);