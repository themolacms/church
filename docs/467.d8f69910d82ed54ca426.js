"use strict";(self.webpackChunkchurch=self.webpackChunkchurch||[]).push([[467],{4467:(j,h,i)=>{i.r(h),i.d(h,{HomePageModule:()=>L});var g=i(8583),u=i(8394),a=i(2582),c=i(3971),m=i(5987),p=i(8307),l=i(5257),r=i(8002),d=i(157),t=i(7716),_=i(425);function P(n,s){if(1&n&&(t.TgZ(0,"div"),t._UZ(1,"nguix-posts",17),t.qZA()),2&n){const e=t.oxw(3);t.xp6(1),t.Q6J("i18n",!0)("posts",e.posts)}}function M(n,s){1&n&&(t.TgZ(0,"div",18),t._UZ(1,"nguix-skeleton-posts",19),t.qZA()),2&n&&(t.xp6(1),t.Q6J("no",5))}function C(n,s){if(1&n&&(t.TgZ(0,"div"),t._UZ(1,"nguix-videos",20),t.qZA()),2&n){const e=t.oxw(3);t.xp6(1),t.Q6J("i18n",!0)("videos",e.videos)}}function O(n,s){1&n&&(t.TgZ(0,"div",18),t._UZ(1,"nguix-skeleton-videos",19),t.qZA()),2&n&&(t.xp6(1),t.Q6J("no",5))}function f(n,s){if(1&n&&(t.TgZ(0,"div"),t._UZ(1,"nguix-posts",17),t.qZA()),2&n){const e=t.oxw(3);t.xp6(1),t.Q6J("i18n",!0)("posts",e.articles)}}function x(n,s){1&n&&(t.TgZ(0,"div",18),t._UZ(1,"nguix-skeleton-posts",19),t.qZA()),2&n&&(t.xp6(1),t.Q6J("no",5))}const v=function(){return["about"]},Z=function(){return["posts"]},w=function(){return["videos"]},A=function(){return["articles"]};function T(n,s){if(1&n&&(t.TgZ(0,"div",2),t.TgZ(1,"div",3),t.TgZ(2,"div",4),t.TgZ(3,"h1"),t._uU(4,"Church Theme"),t.qZA(),t.TgZ(5,"p"),t._uU(6,"Welcome to the Mola Church Theme"),t.qZA(),t.qZA(),t.TgZ(7,"div",5),t.TgZ(8,"a",6),t._uU(9,"About us"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(10,"div",7),t.TgZ(11,"main"),t.TgZ(12,"section",8),t.TgZ(13,"div",9),t._uU(14,"News"),t.qZA(),t.TgZ(15,"div",10),t.YNc(16,P,2,2,"div",11),t.YNc(17,M,2,1,"ng-template",null,12,t.W1O),t.qZA(),t.TgZ(19,"div",13),t.TgZ(20,"a",14),t._uU(21,"View all news"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(22,"section",15),t.TgZ(23,"div",9),t._uU(24,"Videos"),t.qZA(),t.TgZ(25,"div",10),t.YNc(26,C,2,2,"div",11),t.YNc(27,O,2,1,"ng-template",null,12,t.W1O),t.qZA(),t.TgZ(29,"div",13),t.TgZ(30,"a",14),t._uU(31,"View all videos"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(32,"section",16),t.TgZ(33,"div",9),t._uU(34,"Articles"),t.qZA(),t.TgZ(35,"div",10),t.YNc(36,f,2,2,"div",11),t.YNc(37,x,2,1,"ng-template",null,12,t.W1O),t.qZA(),t.TgZ(39,"div",13),t.TgZ(40,"a",14),t._uU(41,"View all articles"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&n){const e=t.MAs(18),o=t.oxw(2);t.xp6(8),t.Q6J("usefulRouterLink",t.DdM(11,v))("usefulRouterBackwardable",!0),t.xp6(8),t.Q6J("ngIf",o.posts.length)("ngIfElse",e),t.xp6(4),t.Q6J("usefulRouterLink",t.DdM(12,Z)),t.xp6(6),t.Q6J("ngIf",o.videos.length)("ngIfElse",e),t.xp6(4),t.Q6J("usefulRouterLink",t.DdM(13,w)),t.xp6(6),t.Q6J("ngIf",o.articles.length)("ngIfElse",e),t.xp6(4),t.Q6J("usefulRouterLink",t.DdM(14,A))}}function y(n,s){if(1&n&&(t.ynx(0),t.YNc(1,T,42,15,"div",1),t.ALo(2,"async"),t.BQk()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",t.lcZ(2,1,e.page$))}}const q=[{path:"",component:(()=>{class n{constructor(e,o,H){this.store=e,this.metaService=o,this.settingService=H,this.page$=this.settingService.onLocaleChanged.pipe((0,p.b)(U=>(this.locale=U)&&this.fetchPosts()&&this.fetchArticles()&&this.fetchVideos())),this.posts=[],this.isLoadingPosts=!1,this.articles=[],this.isLoadingArticles=!1,this.videos=[],this.isLoadingVideos=!1}ngOnInit(){}fetchPosts(){this.isLoadingPosts=!0;const e=`post:default:publish:${this.locale}:1`;return this.store.dispatch(new d.G3(e,o=>o.where("type","==","default").where("status","==","publish").where("locale","==",this.locale).orderBy("createdAt","desc").limit(12))).pipe((0,l.q)(1),(0,r.U)(o=>o.schemata_post)).subscribe(o=>{this.posts=o.queryList[e],this.isLoadingPosts=!1})}fetchArticles(){this.isLoadingArticles=!0;const e=`post:article:publish:${this.locale}:1`;return this.store.dispatch(new d.G3(e,o=>o.where("type","==","article").where("status","==","publish").where("locale","==",this.locale).orderBy("createdAt","desc").limit(12))).pipe((0,l.q)(1),(0,r.U)(o=>o.schemata_post)).subscribe(o=>{this.articles=o.queryList[e],this.isLoadingArticles=!1})}fetchVideos(){this.isLoadingVideos=!0;const e=`video:default:publish:${this.locale}:1`;return this.store.dispatch(new d.lz(e,o=>o.where("type","==","default").where("status","==","publish").where("locale","==",this.locale).orderBy("createdAt","desc").limit(12))).pipe((0,l.q)(1),(0,r.U)(o=>o.schemata_video)).subscribe(o=>{this.videos=o.queryList[e],this.isLoadingVideos=!1})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(_.yh),t.Y36(a.Rj),t.Y36(a.RC))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-home-page"]],decls:1,vars:0,consts:[[4,"transloco"],["class","host",4,"ngIf"],[1,"host"],[1,"slideshow"],[1,"text"],[1,"actions"],[1,"button-danger",3,"usefulRouterLink","usefulRouterBackwardable"],[1,"major"],[1,"posts"],[1,"title"],[1,"body"],[4,"ngIf","ngIfElse"],["listLoading",""],[1,"foot"],[1,"button-outline-medium",3,"usefulRouterLink"],[1,"videos"],[1,"articles"],["layout","card","authorUrlSegment","member",3,"i18n","posts"],[1,"list-loading"],["layout","card",3,"no"],["layout","card",3,"i18n","videos"]],template:function(e,o){1&e&&t.YNc(0,y,3,3,"ng-container",0)},directives:[u.KI,g.O5,a.jY,c.PostsComponent,c.SkeletonPostsComponent,c.VideosComponent,c.SkeletonVideosComponent],pipes:[g.Ov],styles:[".host[_ngcontent-%COMP%]   .slideshow[_ngcontent-%COMP%]{display:flex;flex-flow:column;width:100%;max-width:100%;height:calc(100vh - 65px - 65px);background:url(/assets/images/cover.jpg);background-size:cover;background-position:center;background-repeat:no-repeat;align-items:center;justify-content:center;transition:all 1s ease}.host[_ngcontent-%COMP%]   .slideshow[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{display:flex;flex-flow:row;flex-wrap:wrap;justify-content:center}.host[_ngcontent-%COMP%]   .slideshow[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .host[_ngcontent-%COMP%]   .slideshow[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{text-align:center;color:var(--app-color-dark)}.host[_ngcontent-%COMP%]   .slideshow[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{width:100%;font-size:3rem;font-weight:700}.host[_ngcontent-%COMP%]   .slideshow[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1.35rem;margin-top:.5rem}.host[_ngcontent-%COMP%]   .slideshow[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]{margin-top:1rem}.host[_ngcontent-%COMP%]   .slideshow[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-align:center;margin-right:1rem;width:7rem}.host[_ngcontent-%COMP%]   .major[_ngcontent-%COMP%]{padding:1rem;max-width:1200px;margin:auto;display:flex;flex-wrap:wrap}.host[_ngcontent-%COMP%]   .major[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]{flex:1}.host[_ngcontent-%COMP%]   .major[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]{margin-top:3rem}.host[_ngcontent-%COMP%]   .major[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{display:flex;flex-wrap:nowrap;align-items:center;text-transform:uppercase;font-weight:700;color:var(--app-color-light);padding:.25rem 1rem;border-radius:var(--app-size-radius)}.host[_ngcontent-%COMP%]   .major[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]{margin-top:2rem}.host[_ngcontent-%COMP%]   .major[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   .foot[_ngcontent-%COMP%]{text-align:center}.host[_ngcontent-%COMP%]   .major[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   section.posts[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{background:var(--app-color-secondary)}.host[_ngcontent-%COMP%]   .major[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   section.videos[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{background:var(--app-color-danger)}.host[_ngcontent-%COMP%]   .major[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   section.articles[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{background:var(--app-color-tertiary)}.host[_ngcontent-%COMP%]   .major[_ngcontent-%COMP%]   aside[_ngcontent-%COMP%]{margin-left:2rem}@media only screen and (min-width: 480px){.host[_ngcontent-%COMP%]   .slideshow[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:3.5rem}}@media only screen and (min-width: 768px){.host[_ngcontent-%COMP%]   .slideshow[_ngcontent-%COMP%]{height:calc(100vw * 9 / 16);background-size:cover}.host[_ngcontent-%COMP%]   .slideshow[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{width:100%}}@media only screen and (min-width: 992px){.host[_ngcontent-%COMP%]   .slideshow[_ngcontent-%COMP%]{height:calc((100vw - 250px) * 9 / 16)}}@media only screen and (min-width: 1200px){.host[_ngcontent-%COMP%]   .slideshow[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:4.7rem}.host[_ngcontent-%COMP%]   .slideshow[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1.7rem}}"]}),n})()}];let b=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[m.Bz.forChild(q)],m.Bz]}),n})(),L=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[g.ez,u.y4,a.Pf,c.NguixIconComponentModule,c.NguixPostsI18nComponentModule,c.NguixSkeletonPostsComponentModule,c.NguixVideosI18nComponentModule,c.NguixSkeletonVideosComponentModule,b]]}),n})()}}]);