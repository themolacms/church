"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[206],{2206:(Q,h,i)=>{i.r(h),i.d(h,{ArticlesPageModule:()=>k});var g=i(8583),m=i(9029),u=i(2582),l=i(3971),p=i(5987),v=i(739),P=i(8307),f=i(5257),C=i(8002),M=i(157),t=i(7716),O=i(425);const y=function(e){return["articles","category",e]};function x(e,r){if(1&e&&(t.TgZ(0,"li"),t.TgZ(1,"a",10),t._uU(2),t.qZA(),t.qZA()),2&e){const n=r.$implicit;t.xp6(1),t.Q6J("usefulRouterLink",t.VKq(2,y,n.id)),t.xp6(1),t.Oqu(n.title)}}function _(e,r){if(1&e&&(t.TgZ(0,"div",11),t._UZ(1,"nguix-posts",12),t.qZA()),2&e){const n=t.oxw(2);t.xp6(1),t.Q6J("i18n",!0)("posts",n.posts)}}function A(e,r){1&e&&(t.TgZ(0,"div",13),t._UZ(1,"nguix-skeleton-posts",14),t.qZA()),2&e&&(t.xp6(1),t.Q6J("no",5))}function T(e,r){1&e&&(t.TgZ(0,"div",15),t._UZ(1,"nguix-spinner"),t.qZA())}const b=function(){return["articles"]},Z=function(){return{exact:!0}};function I(e,r){if(1&e){const n=t.EpF();t.TgZ(0,"div",1),t.TgZ(1,"div",2),t.TgZ(2,"ul"),t.TgZ(3,"li"),t.TgZ(4,"a",3),t._uU(5,"Home"),t.qZA(),t.qZA(),t.YNc(6,x,3,4,"li",4),t.qZA(),t.qZA(),t.TgZ(7,"div",5),t.TgZ(8,"div",6),t.NdJ("scrolled",function(){return t.CHM(n),t.oxw().fetchPosts()}),t.YNc(9,_,2,2,"div",7),t.YNc(10,A,2,1,"ng-template",null,8,t.W1O),t.qZA(),t.YNc(12,T,2,0,"div",9),t.qZA(),t.qZA()}if(2&e){const n=t.MAs(11),o=t.oxw();t.xp6(4),t.Q6J("usefulRouterLink",t.DdM(8,b))("usefulRouterLinkActiveOptions",t.DdM(9,Z)),t.xp6(2),t.Q6J("ngForOf",o.categories),t.xp6(2),t.Q6J("infiniteScrollDistance",2)("infiniteScrollThrottle",50),t.xp6(1),t.Q6J("ngIf",o.posts.length||!o.isLoadingMore)("ngIfElse",n),t.xp6(3),t.Q6J("ngIf",o.isLoadingMore)}}const L=[{path:"",component:(()=>{class e{constructor(n,o,c){this.route=n,this.store=o,this.settingService=c,this.page$=(0,v.aj)([this.route.params,this.settingService.onLocaleChanged]).pipe((0,P.b)(([s,a])=>{this.locale=a,this.categories.length||this.fetchCategories(),this.activeGroupName=s.categoryId?s.categoryId:"all",this.groupingTracker[this.activeGroupName]||(this.groupingTracker[this.activeGroupName]={latestQueryId:"",latestItem:void 0,pageNo:1,areThereMore:!0}),this.fetchPosts()})),this.groupingTracker={},this.activeGroupName="all",this.categories=[],this.posts=[],this.isLoadingMore=!1}ngOnInit(){}fetchPosts(){const n=this.groupingTracker[this.activeGroupName];if(!n.areThereMore||this.isLoadingMore)return;this.isLoadingMore=!0,setTimeout(()=>this.isLoadingMore=!1,3e3);const o=`post:article:publish:${this.locale}:${this.activeGroupName}`;return n.latestQueryId=`${o}:${n.pageNo++}`,this.store.dispatch(new M.G3(n.latestQueryId,c=>{let s=c.where("type","==","article").where("status","==","publish").where("locale","==",this.locale).orderBy("createdAt","desc");if("all"!==this.activeGroupName){const a=this.activeGroupName;s=s.where(`categories.${a}.id`,"==",a)}return n.latestItem&&(s=s.startAfter(n.latestItem.createdAt)),s.limit(3)})).pipe((0,f.q)(1),(0,C.U)(c=>c.schemata_post)).subscribe(c=>{const s=this.groupingTracker[this.activeGroupName],a=c.queryList[s.latestQueryId];s.areThereMore=!!a.length,s.latestItem=s.areThereMore?a[a.length-1]:s.latestItem,this.posts=Object.keys(c.queryList).filter(d=>d.includes(o)).reduce((d,w)=>d.concat(c.queryList[w]),[]),this.isLoadingMore=!1})}fetchCategories(){const n=`category:article_category:publish:${this.locale}`;return this.store.dispatch(new M.k2(n,o=>o.where("type","==","article_category").where("status","==","publish").where("locale","==",this.locale).orderBy("count","desc"))).pipe((0,f.q)(1),(0,C.U)(o=>o.schemata_category)).subscribe(o=>this.categories=o.queryList[n])}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(p.gz),t.Y36(O.yh),t.Y36(u.RC))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-articles-page"]],decls:2,vars:3,consts:[["class","host",4,"ngIf"],[1,"host"],[1,"toolbar"],["usefulRouterLinkActive","active",3,"usefulRouterLink","usefulRouterLinkActiveOptions"],[4,"ngFor","ngForOf"],[1,"body"],["infiniteScroll","",1,"listing",3,"infiniteScrollDistance","infiniteScrollThrottle","scrolled"],["class","main",4,"ngIf","ngIfElse"],["listLoading",""],["class","infinite-loading",4,"ngIf"],["usefulRouterLinkActive","active",3,"usefulRouterLink"],[1,"main"],["layout","card","postPath","article","authorPath","member","categoryPath","articles/category",3,"i18n","posts"],[1,"list-loading"],["layout","card",3,"no"],[1,"infinite-loading"]],template:function(n,o){1&n&&(t.YNc(0,I,13,10,"div",0),t.ALo(1,"async")),2&n&&t.Q6J("ngIf",t.lcZ(1,1,o.page$))},directives:[g.O5,u.jY,g.sg,m.R,l.PostsComponent,l.SkeletonPostsComponent,l.SpinnerComponent],pipes:[g.Ov],styles:[".host[_ngcontent-%COMP%]   .toolbar[_ngcontent-%COMP%]{width:100%;height:49px;position:fixed;top:65px;left:0;right:0;z-index:1;background:var(--app-color-background-tint);border-bottom:1px solid var(--app-color-background);padding:.5rem 1rem}.host[_ngcontent-%COMP%]   .toolbar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{flex:1;width:100%;margin:0;padding:0;list-style:none;display:flex;flex-wrap:nowrap;align-items:center;overflow-x:scroll;overflow-y:hidden;-ms-overflow-style:none;scrollbar-width:none}.host[_ngcontent-%COMP%]   .toolbar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]::-webkit-scrollbar{display:none}.host[_ngcontent-%COMP%]   .toolbar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-left:1rem}.host[_ngcontent-%COMP%]   .toolbar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-child{margin-left:0}.host[_ngcontent-%COMP%]   .toolbar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:block;text-decoration:none;color:var(--app-color-medium)}.host[_ngcontent-%COMP%]   .toolbar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .host[_ngcontent-%COMP%]   .toolbar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus, .host[_ngcontent-%COMP%]   .toolbar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]{color:var(--app-color-foreground)}.host[_ngcontent-%COMP%]   .toolbar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]{line-height:0;padding:1rem .75rem;font-size:.9rem;background:var(--app-color-background-shade);border-radius:var(--app-size-radius)}.host[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]{padding:65px 1rem 0;max-width:992px;margin:auto}.host[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .listing[_ngcontent-%COMP%]{min-height:100vh}.host[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .infinite-loading[_ngcontent-%COMP%]{padding-bottom:1rem;display:flex;justify-content:center}"]}),e})()}];let N=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[p.Bz.forChild(L)],p.Bz]}),e})(),k=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[g.ez,m.X,u.Pf,l.NguixSpinnerComponentModule,l.NguixPostsI18nComponentModule,l.NguixSkeletonPostsComponentModule,N]]}),e})()}}]);