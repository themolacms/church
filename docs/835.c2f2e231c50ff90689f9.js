"use strict";(self.webpackChunkchurch=self.webpackChunkchurch||[]).push([[835],{7835:(A,c,o)=>{o.r(c),o.d(c,{PostsPageModule:()=>L});var r=o(8583),h=o(9029),u=o(4633),l=o(3971),d=o(5987),g=o(8307),p=o(5257),m=o(8002),f=o(157),t=o(7716),v=o(425),P=o(2582);function x(s,i){if(1&s&&(t.TgZ(0,"div",6),t._UZ(1,"nguix-posts",7),t.qZA()),2&s){const e=t.oxw(2);t.xp6(1),t.Q6J("i18n",!0)("posts",e.posts)}}function M(s,i){1&s&&(t.TgZ(0,"div",8),t._UZ(1,"nguix-skeleton-posts",9),t.qZA()),2&s&&(t.xp6(1),t.Q6J("no",5))}function C(s,i){1&s&&(t.TgZ(0,"div",10),t._UZ(1,"nguix-spinner"),t.qZA())}function y(s,i){if(1&s){const e=t.EpF();t.TgZ(0,"div",1),t.TgZ(1,"div",2),t.NdJ("scrolled",function(){return t.CHM(e),t.oxw().fetchPosts()}),t.YNc(2,x,2,2,"div",3),t.YNc(3,M,2,1,"ng-template",null,4,t.W1O),t.qZA(),t.YNc(5,C,2,0,"div",5),t.qZA()}if(2&s){const e=t.MAs(4),n=t.oxw();t.xp6(1),t.Q6J("infiniteScrollDistance",2)("infiniteScrollThrottle",50),t.xp6(1),t.Q6J("ngIf",n.posts.length||!n.isLoadingMore)("ngIfElse",e),t.xp6(3),t.Q6J("ngIf",n.isLoadingMore)}}const T=[{path:"",component:(()=>{class s{constructor(e,n){this.store=e,this.settingService=n,this.page$=this.settingService.onLocaleChanged.pipe((0,g.b)(a=>(this.locale=a)&&this.fetchPosts())),this.pageNo=1,this.areThereMore=!0,this.posts=[],this.isLoadingMore=!1}ngOnInit(){}fetchPosts(){!this.areThereMore||this.isLoadingMore||(this.isLoadingMore=!0,setTimeout(()=>this.isLoadingMore=!1,3e3),this.latestQueryId=`post:default:publish:${this.locale}:${this.pageNo++}`,this.store.dispatch(new f.G3(this.latestQueryId,e=>{let n=e.where("type","==","default").where("status","==","publish").where("locale","==",this.locale).orderBy("createdAt","desc");return this.latestItem&&(n=n.startAfter(this.latestItem.createdAt)),n.limit(2)})).pipe((0,p.q)(1),(0,m.U)(e=>e.schemata_post)).subscribe(e=>{const n=e.queryList[this.latestQueryId];this.areThereMore=!!n.length,this.latestItem=this.areThereMore?n[n.length-1]:this.latestItem,this.posts=Object.keys(e.queryList).filter(a=>a.includes(`:default:publish:${this.locale}:`)).reduce((a,Z)=>a.concat(e.queryList[Z]),[]),this.isLoadingMore=!1}))}}return s.\u0275fac=function(e){return new(e||s)(t.Y36(v.yh),t.Y36(P.RC))},s.\u0275cmp=t.Xpm({type:s,selectors:[["app-posts-page"]],decls:2,vars:3,consts:[["class","host",4,"ngIf"],[1,"host"],["infiniteScroll","",1,"listing",3,"infiniteScrollDistance","infiniteScrollThrottle","scrolled"],["class","main",4,"ngIf","ngIfElse"],["listLoading",""],["class","infinite-loading",4,"ngIf"],[1,"main"],["layout","card","authorUrlSegment","member",3,"i18n","posts"],[1,"list-loading"],["layout","card",3,"no"],[1,"infinite-loading"]],template:function(e,n){1&e&&(t.YNc(0,y,6,5,"div",0),t.ALo(1,"async")),2&e&&t.Q6J("ngIf",t.lcZ(1,1,n.page$))},directives:[r.O5,h.R,l.PostsComponent,l.SkeletonPostsComponent,l.SpinnerComponent],pipes:[r.Ov],styles:[".host[_ngcontent-%COMP%]{padding:1rem}.host[_ngcontent-%COMP%]   .listing[_ngcontent-%COMP%]{min-height:100vh}.host[_ngcontent-%COMP%]   .infinite-loading[_ngcontent-%COMP%]{display:flex;justify-content:center}"]}),s})()}];let I=(()=>{class s{}return s.\u0275fac=function(e){return new(e||s)},s.\u0275mod=t.oAB({type:s}),s.\u0275inj=t.cJS({imports:[[d.Bz.forChild(T)],d.Bz]}),s})(),L=(()=>{class s{}return s.\u0275fac=function(e){return new(e||s)},s.\u0275mod=t.oAB({type:s}),s.\u0275inj=t.cJS({imports:[[r.ez,h.X,u.Lr,l.NguixSpinnerComponentModule,l.NguixPostsI18nComponentModule,l.NguixSkeletonPostsComponentModule,I]]}),s})()}}]);