"use strict";(self.webpackChunkchurch=self.webpackChunkchurch||[]).push([[640],{9548:(A,r,o)=>{o.r(r),o.d(r,{VideosPageModule:()=>L});var a=o(8583),c=o(9029),u=o(4633),l=o(3971),h=o(5987),g=o(8307),p=o(5257),f=o(8002),m=o(157),e=o(7716),v=o(425),x=o(2582);function M(t,s){if(1&t&&(e.TgZ(0,"div",6),e._UZ(1,"nguix-videos",7),e.qZA()),2&t){const n=e.oxw(2);e.xp6(1),e.Q6J("i18n",!0)("videos",n.videos)}}function C(t,s){1&t&&(e.TgZ(0,"div",8),e._UZ(1,"nguix-skeleton-videos",9),e.qZA()),2&t&&(e.xp6(1),e.Q6J("no",5))}function y(t,s){1&t&&(e.TgZ(0,"div",10),e._UZ(1,"nguix-spinner"),e.qZA())}function V(t,s){if(1&t){const n=e.EpF();e.TgZ(0,"div",1),e.TgZ(1,"div",2),e.NdJ("scrolled",function(){return e.CHM(n),e.oxw().fetchVideos()}),e.YNc(2,M,2,2,"div",3),e.YNc(3,C,2,1,"ng-template",null,4,e.W1O),e.qZA(),e.YNc(5,y,2,0,"div",5),e.qZA()}if(2&t){const n=e.MAs(4),i=e.oxw();e.xp6(1),e.Q6J("infiniteScrollDistance",2)("infiniteScrollThrottle",50),e.xp6(1),e.Q6J("ngIf",i.videos.length||!i.isLoadingMore)("ngIfElse",n),e.xp6(3),e.Q6J("ngIf",i.isLoadingMore)}}const T=[{path:"",component:(()=>{class t{constructor(n,i){this.store=n,this.settingService=i,this.page$=this.settingService.onLocaleChanged.pipe((0,g.b)(d=>(this.locale=d)&&this.fetchVideos())),this.pageNo=1,this.areThereMore=!0,this.videos=[],this.isLoadingMore=!1}ngOnInit(){}fetchVideos(){!this.areThereMore||this.isLoadingMore||(this.isLoadingMore=!0,setTimeout(()=>this.isLoadingMore=!1,3e3),this.latestQueryId=`video:default:publish:${this.locale}:${this.pageNo++}`,this.store.dispatch(new m.lz(this.latestQueryId,n=>{let i=n.where("type","==","default").where("status","==","publish").where("locale","==",this.locale).orderBy("createdAt","desc");return this.latestItem&&(i=i.startAfter(this.latestItem.createdAt)),i.limit(5)})).pipe((0,p.q)(1),(0,f.U)(n=>n.schemata_video)).subscribe(n=>{const i=n.queryList[this.latestQueryId];this.areThereMore=!!i.length,this.latestItem=this.areThereMore?i[i.length-1]:this.latestItem,this.videos=Object.keys(n.queryList).filter(d=>d.includes(`:default:publish:${this.locale}:`)).reduce((d,Z)=>d.concat(n.queryList[Z]),[]),this.isLoadingMore=!1}))}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(v.yh),e.Y36(x.RC))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-videos-page"]],decls:2,vars:3,consts:[["class","host",4,"ngIf"],[1,"host"],["infiniteScroll","",1,"listing",3,"infiniteScrollDistance","infiniteScrollThrottle","scrolled"],["class","main",4,"ngIf","ngIfElse"],["listLoading",""],["class","infinite-loading",4,"ngIf"],[1,"main"],["layout","card",3,"i18n","videos"],[1,"list-loading"],["layout","card",3,"no"],[1,"infinite-loading"]],template:function(n,i){1&n&&(e.YNc(0,V,6,5,"div",0),e.ALo(1,"async")),2&n&&e.Q6J("ngIf",e.lcZ(1,1,i.page$))},directives:[a.O5,c.R,l.VideosComponent,l.SkeletonVideosComponent,l.SpinnerComponent],pipes:[a.Ov],styles:[".host[_ngcontent-%COMP%]{padding:1rem}.host[_ngcontent-%COMP%]   .listing[_ngcontent-%COMP%]{min-height:100vh}.host[_ngcontent-%COMP%]   .infinite-loading[_ngcontent-%COMP%]{display:flex;justify-content:center}"]}),t})()}];let I=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[h.Bz.forChild(T)],h.Bz]}),t})(),L=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[a.ez,c.X,u.Lr,l.NguixSpinnerComponentModule,l.NguixVideosI18nComponentModule,l.NguixSkeletonVideosComponentModule,I]]}),t})()}}]);