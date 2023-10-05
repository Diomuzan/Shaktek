"use strict";(self.webpackChunkeav_ui=self.webpackChunkeav_ui||[]).push([["projects_eav-ui_src_app_content-items_services_entities_service_ts-projects_eav-ui_src_app_fe-48a7641","projects_eav-ui_src_app_content-items_services_entities_service_ts-projects_eav-ui_src_app_sh-7da752","projects_eav-ui_src_app_features_features_module_ts-projects_eav-ui_src_app_shared_components-90acdb0","projects_eav-ui_src_app_shared_directives_click-stop-propagation_directive_ts","projects_eav-ui_src_app_features_features_module_ts","projects_eav-ui_src_app_content-items_services_entities_service_ts-projects_eav-ui_src_app_fe-48a7640","projects_eav-ui_src_app_content-items_services_entities_service_ts-projects_eav-ui_src_app_fe-9d77d2","projects_eav-ui_src_app_features_features_module_ts-projects_eav-ui_src_app_shared_components-90acdb1","projects_eav-ui_src_app_features_features_module_ts-projects_eav-ui_src_app_shared_components-86af18"],{4272:(h,m,e)=>{e.d(m,{g:()=>d});var t=e(4856),c=e(5368),r=e(3184),s=e(8784),l=e(2425);let d=(()=>{class _{constructor(u,g,f){this.http=u,this.context=g,this.dnnContext=f}create(u,g){return this.http.post(`app/auto/data/${u}`,g,{params:{appId:this.context.appId,zoneId:this.context.zoneId}})}update(u,g,f){return this.http.post(`app/auto/data/${u}/${g}`,f,{params:{appId:this.context.appId,zoneId:this.context.zoneId}})}delete(u,g,f){return this.http.delete(this.dnnContext.$2sxc.http.apiUrl(t.Uo+"delete"),{params:{contentType:u,id:g.toString(),appId:this.context.appId.toString(),force:f.toString()}})}}return _.\u0275fac=function(u){return new(u||_)(r.LFG(s.eN),r.LFG(c._),r.LFG(l._y))},_.\u0275prov=r.Yz7({token:_,factory:_.\u0275fac}),_})()},801:(h,m,e)=>{e.d(m,{S:()=>f});var t=e(6362),c=e(7317),r=e(5590),s=e(3135),l=e(7514),d=e(7392),_=e(1392),p=e(1961),u=e(3265),g=e(3184);let f=(()=>{class i{}return i.\u0275fac=function(C){return new(C||i)},i.\u0275mod=g.oAB({type:i}),i.\u0275inj=g.cJS({providers:[u.f],imports:[[t.ez,c.ot,r.Ps,p.QW,s.q,l.aw.forChild((0,d.f)(_.W))]]}),i})()},3265:(h,m,e)=>{e.d(m,{f:()=>l});var t=e(3184),c=e(8784),r=e(2425);let l=(()=>{class d{constructor(p,u){this.http=p,this.dnnContext=u}getFeatureDetails(p){return this.http.get(this.dnnContext.$2sxc.http.apiUrl("admin/feature/details"),{params:{nameId:p}})}}return d.\u0275fac=function(p){return new(p||d)(t.LFG(c.eN),t.LFG(r._y))},d.\u0275prov=t.Yz7({token:d,factory:d.\u0275fac}),d})()},8352:(h,m,e)=>{e.d(m,{Y:()=>f});var t=e(3184),c=e(6362),r=e(4770);function s(i,M){1&i&&t.GkF(0)}function l(i,M){if(1&i&&(t.TgZ(0,"mat-hint"),t.YNc(1,s,1,0,"ng-container",3),t.qZA()),2&i){t.oxw();const C=t.MAs(4);t.xp6(1),t.Q6J("ngTemplateOutlet",C)}}function d(i,M){1&i&&t.GkF(0)}function _(i,M){if(1&i&&(t.TgZ(0,"mat-error"),t.YNc(1,d,1,0,"ng-container",3),t.qZA()),2&i){t.oxw();const C=t.MAs(4);t.xp6(1),t.Q6J("ngTemplateOutlet",C)}}function p(i,M){1&i&&t.Hsn(0)}const u=function(i){return{"hint-box__short":i}},g=["*"];let f=(()=>{class i{constructor(){this.isError=!1,this.isShort=!0}toggleIsShort(){this.isShort=!this.isShort}}return i.\u0275fac=function(C){return new(C||i)},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-field-hint"]],inputs:{isError:"isError"},ngContentSelectors:g,decls:5,vars:6,consts:[[1,"hint-box",3,"ngClass","ngSwitch","click"],[4,"ngSwitchCase"],["content",""],[4,"ngTemplateOutlet"]],template:function(C,D){1&C&&(t.F$t(),t.TgZ(0,"div",0),t.NdJ("click",function(){return D.toggleIsShort()}),t.YNc(1,l,2,1,"mat-hint",1),t.YNc(2,_,2,1,"mat-error",1),t.qZA(),t.YNc(3,p,1,0,"ng-template",null,2,t.W1O)),2&C&&(t.Q6J("ngClass",t.VKq(4,u,D.isShort))("ngSwitch",D.isError),t.xp6(1),t.Q6J("ngSwitchCase",!1),t.xp6(1),t.Q6J("ngSwitchCase",!0))},directives:[c.mk,c.RF,c.n9,r.bx,c.tP,r.TO],styles:[".hint-box[_ngcontent-%COMP%]{margin-top:4px}.hint-box[_ngcontent-%COMP%]   .mat-hint[_ngcontent-%COMP%], .hint-box[_ngcontent-%COMP%]   .mat-error[_ngcontent-%COMP%]{font-size:12px;display:block}.hint-box__short[_ngcontent-%COMP%]   .mat-hint[_ngcontent-%COMP%], .hint-box__short[_ngcontent-%COMP%]   .mat-error[_ngcontent-%COMP%]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}"]}),i})()},7294:(h,m,e)=>{e.d(m,{E:()=>c});var t=e(3184);let c=(()=>{class r{onClick(l){l.stopPropagation()}}return r.\u0275fac=function(l){return new(l||r)},r.\u0275dir=t.lG2({type:r,selectors:[["","appClickStopPropagation",""]],hostBindings:function(l,d){1&l&&t.NdJ("click",function(p){return d.onClick(p)})}}),r})()},9673:(h,m,e)=>{function t(c){const r=document.createElement("textarea");r.value=c,r.setAttribute("readonly",""),r.style.position="absolute",r.style.left="-9999px",document.body.appendChild(r);const s=document.getSelection().rangeCount>0&&document.getSelection().getRangeAt(0);r.select(),document.execCommand("copy"),document.body.removeChild(r),s&&(document.getSelection().removeAllRanges(),document.getSelection().addRange(s))}e.d(m,{v:()=>t})},1555:(h,m,e)=>{e.d(m,{z:()=>r});var t=e(3184),c=e(318);let r=(()=>{class s{constructor(d){this.sanitizer=d}transform(d){return this.sanitizer.bypassSecurityTrustHtml(d)}}return s.\u0275fac=function(d){return new(d||s)(t.Y36(c.H7,16))},s.\u0275pipe=t.Yjl({name:"safeHtml",type:s,pure:!0}),s})()},7392:(h,m,e)=>{e.d(m,{f:()=>r});var t=e(8784),c=e(7514);function r(s){return{loader:{provide:c.Zw,useFactory:s,deps:[t.eN]},defaultLanguage:"en",isolate:!0}}},1392:(h,m,e)=>{e.d(m,{W:()=>c});var t=e(1183);function c(r){return new t.M(r,"./i18n/",`.js?${window.sxcVersion}`)}},1183:(h,m,e)=>{e.d(m,{M:()=>r});var t=e(3158),c=e(745);class r{constructor(l,d,_){this.http=l,this.prefix=d,this.suffix=_}getTranslation(l){return this.http.get(`${this.prefix}${l}${this.suffix}`).pipe((0,t.K)(d=>(console.warn(`Translation: Failed to get language '${l}' from ${this.prefix}`,d),(0,c.of)({}))))}}},1961:(h,m,e)=>{e.d(m,{$j:()=>i,QW:()=>P,a8:()=>I,dk:()=>y,dn:()=>g,hq:()=>M,kc:()=>E,n5:()=>f});var t=e(3184),c=e(7481),r=e(1130);const s=["*",[["mat-card-footer"]]],l=["*","mat-card-footer"],d=[[["","mat-card-avatar",""],["","matCardAvatar",""]],[["mat-card-title"],["mat-card-subtitle"],["","mat-card-title",""],["","mat-card-subtitle",""],["","matCardTitle",""],["","matCardSubtitle",""]],"*"],_=["[mat-card-avatar], [matCardAvatar]","mat-card-title, mat-card-subtitle,\n      [mat-card-title], [mat-card-subtitle],\n      [matCardTitle], [matCardSubtitle]","*"];let g=(()=>{class a{}return a.\u0275fac=function(o){return new(o||a)},a.\u0275dir=t.lG2({type:a,selectors:[["mat-card-content"],["","mat-card-content",""],["","matCardContent",""]],hostAttrs:[1,"mat-card-content"]}),a})(),f=(()=>{class a{}return a.\u0275fac=function(o){return new(o||a)},a.\u0275dir=t.lG2({type:a,selectors:[["mat-card-title"],["","mat-card-title",""],["","matCardTitle",""]],hostAttrs:[1,"mat-card-title"]}),a})(),i=(()=>{class a{}return a.\u0275fac=function(o){return new(o||a)},a.\u0275dir=t.lG2({type:a,selectors:[["mat-card-subtitle"],["","mat-card-subtitle",""],["","matCardSubtitle",""]],hostAttrs:[1,"mat-card-subtitle"]}),a})(),M=(()=>{class a{constructor(){this.align="start"}}return a.\u0275fac=function(o){return new(o||a)},a.\u0275dir=t.lG2({type:a,selectors:[["mat-card-actions"]],hostAttrs:[1,"mat-card-actions"],hostVars:2,hostBindings:function(o,v){2&o&&t.ekj("mat-card-actions-align-end","end"===v.align)},inputs:{align:"align"},exportAs:["matCardActions"]}),a})(),E=(()=>{class a{}return a.\u0275fac=function(o){return new(o||a)},a.\u0275dir=t.lG2({type:a,selectors:[["","mat-card-avatar",""],["","matCardAvatar",""]],hostAttrs:[1,"mat-card-avatar"]}),a})(),I=(()=>{class a{constructor(o){this._animationMode=o}}return a.\u0275fac=function(o){return new(o||a)(t.Y36(c.Qb,8))},a.\u0275cmp=t.Xpm({type:a,selectors:[["mat-card"]],hostAttrs:[1,"mat-card","mat-focus-indicator"],hostVars:2,hostBindings:function(o,v){2&o&&t.ekj("_mat-animation-noopable","NoopAnimations"===v._animationMode)},exportAs:["matCard"],ngContentSelectors:l,decls:2,vars:0,template:function(o,v){1&o&&(t.F$t(s),t.Hsn(0),t.Hsn(1,1))},styles:[".mat-card{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);display:block;position:relative;padding:16px;border-radius:4px}._mat-animation-noopable.mat-card{transition:none;animation:none}.mat-card .mat-divider-horizontal{position:absolute;left:0;width:100%}[dir=rtl] .mat-card .mat-divider-horizontal{left:auto;right:0}.mat-card .mat-divider-horizontal.mat-divider-inset{position:static;margin:0}[dir=rtl] .mat-card .mat-divider-horizontal.mat-divider-inset{margin-right:0}.cdk-high-contrast-active .mat-card{outline:solid 1px}.mat-card-actions,.mat-card-subtitle,.mat-card-content{display:block;margin-bottom:16px}.mat-card-title{display:block;margin-bottom:8px}.mat-card-actions{margin-left:-8px;margin-right:-8px;padding:8px 0}.mat-card-actions-align-end{display:flex;justify-content:flex-end}.mat-card-image{width:calc(100% + 32px);margin:0 -16px 16px -16px;display:block;overflow:hidden}.mat-card-image img{width:100%}.mat-card-footer{display:block;margin:0 -16px -16px -16px}.mat-card-actions .mat-button,.mat-card-actions .mat-raised-button,.mat-card-actions .mat-stroked-button{margin:0 8px}.mat-card-header{display:flex;flex-direction:row}.mat-card-header .mat-card-title{margin-bottom:12px}.mat-card-header-text{margin:0 16px}.mat-card-avatar{height:40px;width:40px;border-radius:50%;flex-shrink:0;object-fit:cover}.mat-card-title-group{display:flex;justify-content:space-between}.mat-card-sm-image{width:80px;height:80px}.mat-card-md-image{width:112px;height:112px}.mat-card-lg-image{width:152px;height:152px}.mat-card-xl-image{width:240px;height:240px;margin:-8px}.mat-card-title-group>.mat-card-xl-image{margin:-8px 0 8px}@media(max-width: 599px){.mat-card-title-group{margin:0}.mat-card-xl-image{margin-left:0;margin-right:0}}.mat-card>:first-child,.mat-card-content>:first-child{margin-top:0}.mat-card>:last-child:not(.mat-card-footer),.mat-card-content>:last-child:not(.mat-card-footer){margin-bottom:0}.mat-card-image:first-child{margin-top:-16px;border-top-left-radius:inherit;border-top-right-radius:inherit}.mat-card>.mat-card-actions:last-child{margin-bottom:-8px;padding-bottom:0}.mat-card-actions:not(.mat-card-actions-align-end) .mat-button:first-child,.mat-card-actions:not(.mat-card-actions-align-end) .mat-raised-button:first-child,.mat-card-actions:not(.mat-card-actions-align-end) .mat-stroked-button:first-child{margin-left:0;margin-right:0}.mat-card-actions-align-end .mat-button:last-child,.mat-card-actions-align-end .mat-raised-button:last-child,.mat-card-actions-align-end .mat-stroked-button:last-child{margin-left:0;margin-right:0}.mat-card-title:not(:first-child),.mat-card-subtitle:not(:first-child){margin-top:-4px}.mat-card-header .mat-card-subtitle:not(:first-child){margin-top:-8px}.mat-card>.mat-card-xl-image:first-child{margin-top:-8px}.mat-card>.mat-card-xl-image:last-child{margin-bottom:-8px}\n"],encapsulation:2,changeDetection:0}),a})(),y=(()=>{class a{}return a.\u0275fac=function(o){return new(o||a)},a.\u0275cmp=t.Xpm({type:a,selectors:[["mat-card-header"]],hostAttrs:[1,"mat-card-header"],ngContentSelectors:_,decls:4,vars:0,consts:[[1,"mat-card-header-text"]],template:function(o,v){1&o&&(t.F$t(d),t.Hsn(0),t.TgZ(1,"div",0),t.Hsn(2,1),t.qZA(),t.Hsn(3,2))},encapsulation:2,changeDetection:0}),a})(),P=(()=>{class a{}return a.\u0275fac=function(o){return new(o||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[[r.BQ],r.BQ]}),a})()}}]);
//# sourceMappingURL=https://sources.2sxc.org/16.07.00/dist/ng-edit/projects_eav-ui_src_app_content-items_services_entities_service_ts-projects_eav-ui_src_app_fe-48a7641.90d4d7aeb3d3b733.js.map