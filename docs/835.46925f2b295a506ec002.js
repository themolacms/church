"use strict";(self.webpackChunkchurch=self.webpackChunkchurch||[]).push([[835],{7835:(Q,h,s)=>{s.r(h),s.d(h,{PostsPageModule:()=>k});var g=s(8583),f=s(9029),u=s(2582),l=s(3971),d=s(5987),M=s(739),v=s(8307),m=s(5257),P=s(8002),C=s(157),t=s(7716),O=s(425);const y=function(n){return["posts","category",n]};function x(n,r){if(1&n&&(t.TgZ(0,"li"),t.TgZ(1,"a",10),t._uU(2),t.qZA(),t.qZA()),2&n){const e=r.$implicit;t.xp6(1),t.Q6J("usefulRouterLink",t.VKq(2,y,e.id)),t.xp6(1),t.Oqu(e.title)}}function _(n,r){if(1&n&&(t.TgZ(0,"div",11),t._UZ(1,"nguix-posts",12),t.qZA()),2&n){const e=t.oxw(2);t.xp6(1),t.Q6J("i18n",!0)("posts",e.posts)}}function T(n,r){1&n&&(t.TgZ(0,"div",13),t._UZ(1,"nguix-skeleton-posts",14),t.qZA()),2&n&&(t.xp6(1),t.Q6J("no",5))}function b(n,r){1&n&&(t.TgZ(0,"div",15),t._UZ(1,"nguix-spinner"),t.qZA())}const Z=function(){return["posts"]},I=function(){return{exact:!0}};function A(n,r){if(1&n){const e=t.EpF();t.TgZ(0,"div",1),t.TgZ(1,"div",2),t.TgZ(2,"ul"),t.TgZ(3,"li"),t.TgZ(4,"a",3),t._uU(5,"Home"),t.qZA(),t.qZA(),t.YNc(6,x,3,4,"li",4),t.qZA(),t.qZA(),t.TgZ(7,"div",5),t.TgZ(8,"div",6),t.NdJ("scrolled",function(){return t.CHM(e),t.oxw().fetchPosts()}),t.YNc(9,_,2,2,"div",7),t.YNc(10,T,2,1,"ng-template",null,8,t.W1O),t.qZA(),t.YNc(12,b,2,0,"div",9),t.qZA(),t.qZA()}if(2&n){const e=t.MAs(11),o=t.oxw();t.xp6(4),t.Q6J("usefulRouterLink",t.DdM(8,Z))("usefulRouterLinkActiveOptions",t.DdM(9,I)),t.xp6(2),t.Q6J("ngForOf",o.categories),t.xp6(2),t.Q6J("infiniteScrollDistance",2)("infiniteScrollThrottle",50),t.xp6(1),t.Q6J("ngIf",o.posts.length||!o.isLoadingMore)("ngIfElse",e),t.xp6(3),t.Q6J("ngIf",o.isLoadingMore)}}const L=[{path:"",component:(()=>{class n{constructor(e,o,c){this.route=e,this.store=o,this.settingService=c,this.page$=(0,M.aj)([this.route.params,this.settingService.onLocaleChanged]).pipe((0,v.b)(([i,a])=>{this.locale=a,this.categories.length||this.fetchCategories(),this.activeGroupName=i.categoryId?i.categoryId:"all",this.groupingTracker[this.activeGroupName]||(this.groupingTracker[this.activeGroupName]={latestQueryId:"",latestItem:void 0,pageNo:1,areThereMore:!0}),this.fetchPosts()})),this.groupingTracker={},this.activeGroupName="all",this.categories=[],this.posts=[],this.isLoadingMore=!1}ngOnInit(){}fetchPosts(){const e=this.groupingTracker[this.activeGroupName];if(!e.areThereMore||this.isLoadingMore)return;this.isLoadingMore=!0,setTimeout(()=>this.isLoadingMore=!1,3e3);const o=`post:default:publish:${this.locale}:${this.activeGroupName}`;return e.latestQueryId=`${o}:${e.pageNo++}`,this.store.dispatch(new C.G3(e.latestQueryId,c=>{let i=c.where("type","==","default").where("status","==","publish").where("locale","==",this.locale).orderBy("createdAt","desc");if("all"!==this.activeGroupName){const a=this.activeGroupName;i=i.where(`categories.${a}.id`,"==",a)}return e.latestItem&&(i=i.startAfter(e.latestItem.createdAt)),i.limit(3)})).pipe((0,m.q)(1),(0,P.U)(c=>c.schemata_post)).subscribe(c=>{const i=this.groupingTracker[this.activeGroupName],a=c.queryList[i.latestQueryId];i.areThereMore=!!a.length,i.latestItem=i.areThereMore?a[a.length-1]:i.latestItem,this.posts=Object.keys(c.queryList).filter(p=>p.includes(o)).reduce((p,w)=>p.concat(c.queryList[w]),[]),this.isLoadingMore=!1})}fetchCategories(){const e=`category:default:publish:${this.locale}`;return this.store.dispatch(new C.k2(e,o=>o.where("type","==","default").where("status","==","publish").where("locale","==",this.locale).orderBy("count","desc"))).pipe((0,m.q)(1),(0,P.U)(o=>o.schemata_category)).subscribe(o=>this.categories=o.queryList[e])}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(d.gz),t.Y36(O.yh),t.Y36(u.RC))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-posts-page"]],decls:2,vars:3,consts:[["class","host",4,"ngIf"],[1,"host"],[1,"toolbar"],["usefulRouterLinkActive","active",3,"usefulRouterLink","usefulRouterLinkActiveOptions"],[4,"ngFor","ngForOf"],[1,"body"],["infiniteScroll","",1,"listing",3,"infiniteScrollDistance","infiniteScrollThrottle","scrolled"],["class","main",4,"ngIf","ngIfElse"],["listLoading",""],["class","infinite-loading",4,"ngIf"],["usefulRouterLinkActive","active",3,"usefulRouterLink"],[1,"main"],["layout","card","authorPath","member","categoryPath","posts/category",3,"i18n","posts"],[1,"list-loading"],["layout","card",3,"no"],[1,"infinite-loading"]],template:function(e,o){1&e&&(t.YNc(0,A,13,10,"div",0),t.ALo(1,"async")),2&e&&t.Q6J("ngIf",t.lcZ(1,1,o.page$))},directives:[g.O5,u.jY,g.sg,f.R,l.PostsComponent,l.SkeletonPostsComponent,l.SpinnerComponent],pipes:[g.Ov],styles:[".host[_ngcontent-%COMP%]   .toolbar[_ngcontent-%COMP%]{width:100%;height:49px;position:fixed;top:65px;left:0;right:0;z-index:1;background:var(--app-color-background-tint);border-bottom:1px solid var(--app-color-background);padding:.5rem 1rem}.host[_ngcontent-%COMP%]   .toolbar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{flex:1;width:100%;margin:0;padding:0;list-style:none;display:flex;flex-wrap:nowrap;align-items:center;overflow-x:scroll;overflow-y:hidden;-ms-overflow-style:none;scrollbar-width:none}.host[_ngcontent-%COMP%]   .toolbar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]::-webkit-scrollbar{display:none}.host[_ngcontent-%COMP%]   .toolbar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-left:1rem}.host[_ngcontent-%COMP%]   .toolbar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-child{margin-left:0}.host[_ngcontent-%COMP%]   .toolbar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:block;text-decoration:none;color:var(--app-color-medium)}.host[_ngcontent-%COMP%]   .toolbar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .host[_ngcontent-%COMP%]   .toolbar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus, .host[_ngcontent-%COMP%]   .toolbar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]{color:var(--app-color-foreground)}.host[_ngcontent-%COMP%]   .toolbar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]{line-height:0;padding:1rem .75rem;font-size:.9rem;background:var(--app-color-background-shade);border-radius:var(--app-size-radius)}.host[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]{padding:65px 1rem 0;max-width:992px;margin:auto}.host[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .listing[_ngcontent-%COMP%]{min-height:100vh}.host[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .infinite-loading[_ngcontent-%COMP%]{padding-bottom:1rem;display:flex;justify-content:center}"]}),n})()}];let N=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[d.Bz.forChild(L)],d.Bz]}),n})(),k=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[g.ez,f.X,u.Pf,l.NguixSpinnerComponentModule,l.NguixPostsI18nComponentModule,l.NguixSkeletonPostsComponentModule,N]]}),n})()}}]);