"use strict";(self.webpackChunkchurch=self.webpackChunkchurch||[]).push([[578],{8578:(N,p,e)=>{e.r(p),e.d(p,{ArticlePageModule:()=>T});var l=e(8583),r=e(3971),d=e(5987),f=e(5917),g=e(8307),A=e(3190),m=e(8002),u=e(157),t=e(7716),C=e(425),v=e(2582);function x(n,i){if(1&n){const o=t.EpF();t.TgZ(0,"div",6),t.TgZ(1,"nguix-post",7),t.NdJ("contentReady",function(a){return t.CHM(o),t.oxw(3).contentAddon(a)}),t.qZA(),t.qZA()}if(2&n){const o=i.ngIf;t.xp6(1),t.Q6J("post",o)}}function M(n,i){1&n&&(t.TgZ(0,"div",8),t._uU(1,"Item not found!"),t.qZA())}function Z(n,i){if(1&n&&(t.ynx(0),t.YNc(1,x,2,1,"div",4),t.YNc(2,M,2,0,"ng-template",null,5,t.W1O),t.BQk()),2&n){const o=i.ngIf,c=t.MAs(3);t.xp6(1),t.Q6J("ngIf",o.post)("ngIfElse",c)}}function y(n,i){if(1&n&&(t.TgZ(0,"div",2),t.YNc(1,Z,4,2,"ng-container",3),t.ALo(2,"async"),t.qZA()),2&n){const o=t.oxw();t.xp6(1),t.Q6J("ngIf",t.lcZ(2,1,o.data$))}}function I(n,i){1&n&&(t.TgZ(0,"div",9),t.TgZ(1,"div",6),t._UZ(2,"nguix-skeleton-post"),t.qZA(),t.qZA())}const P=[{path:"",component:(()=>{class n{constructor(o,c,a,h,_){this.route=o,this.store=c,this.modalService=a,this.navService=h,this.postDataService=_,this.page$=this.route.params.pipe((0,g.b)(s=>this.id=s.id)),this.data$=this.store.select(s=>s.schemata_post).pipe((0,A.w)(()=>{var s;return(null===(s=this.navService.routeData)||void 0===s?void 0:s.post)?(0,f.of)(this.navService.routeData.post):this.store.dispatch(new u.q9(this.id)).pipe((0,m.U)(O=>O.schemata_post.itemRecord[this.id]))}),(0,m.U)(s=>({post:s})),(0,g.b)(s=>{!s.post||this.postDataService.increment(this.id,{viewCount:1})}))}ngOnInit(){}contentAddon(o){o.querySelectorAll("img").forEach(a=>a.addEventListener("click",()=>this.modalService.image(a.src).show()))}}return n.\u0275fac=function(o){return new(o||n)(t.Y36(d.gz),t.Y36(C.yh),t.Y36(v.Z7),t.Y36(v.tZ),t.Y36(u.Vz))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-article-page"]],decls:4,vars:4,consts:[["class","host",4,"ngIf","ngIfElse"],["loadingHost",""],[1,"host"],[4,"ngIf"],["class","main",4,"ngIf","ngIfElse"],["itemNotFound",""],[1,"main"],["authorUrlSegment","member",3,"post","contentReady"],[1,"not-found"],[1,"loading-host"]],template:function(o,c){if(1&o&&(t.YNc(0,y,3,3,"div",0),t.ALo(1,"async"),t.YNc(2,I,3,0,"ng-template",null,1,t.W1O)),2&o){const a=t.MAs(3);t.Q6J("ngIf",t.lcZ(1,2,c.page$))("ngIfElse",a)}},directives:[l.O5,r.PostComponent,r.SkeletonPostComponent],pipes:[l.Ov],styles:[".host[_ngcontent-%COMP%]{padding:1rem}.host[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]{overflow:hidden;border-radius:var(--app-size-radius);background:var(--app-color-background-tint)}.loading-host[_ngcontent-%COMP%]{padding:1rem}.loading-host[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]{overflow:hidden;border-radius:var(--app-size-radius);background:var(--app-color-background-tint)}"]}),n})()}];let S=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[d.Bz.forChild(P)],d.Bz]}),n})(),T=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[l.ez,r.NguixSpinnerComponentModule,r.NguixPostComponentModule,r.NguixSkeletonPostComponentModule,S]]}),n})()}}]);