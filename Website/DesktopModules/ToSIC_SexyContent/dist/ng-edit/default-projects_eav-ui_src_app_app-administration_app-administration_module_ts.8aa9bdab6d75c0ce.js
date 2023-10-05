"use strict";(self.webpackChunkeav_ui=self.webpackChunkeav_ui||[]).push([["default-projects_eav-ui_src_app_app-administration_app-administration_module_ts"],{4883:(T,C,t)=>{t.r(C),t.d(C,{AppAdministrationModule:()=>ut});var h=t(6362),e=t(587),b=t(178),s=t(7317),g=t(1961),f=t(1534),r=t(1130),x=t(5758),d=t(6531),m=t(5590),v=t(4683),o=t(2796),u=t(4742),c=t(8390),k=t(1434),A=t(6623),R=t(2528),P=t(2379),G=t(139),z=t(7207),j=t(2188),K=t(8812),l=t(898),y=t(7383),i=t(801),a=t(2925),p=t(3077),I=t(5368),F=t(6500),N=t(3135),L=t(2977),W=t(2211),O=t(2649),S=t(2409),U=t(325),E=t(6167),D=t(1425),M=t(4929);const $={name:"APP_ADMINISTRATION_DIALOG",initContext:!0,panelSize:"large",panelClass:null,getComponent(){return(0,M.mG)(this,void 0,void 0,function*(){const{AppAdministrationNavComponent:n}=yield Promise.all([t.e("default-projects_eav-ui_src_app_app-administration_app-admin-helpers_ts-projects_eav-ui_src_a-463e21"),t.e("common"),t.e("projects_eav-ui_src_app_app-administration_app-administration-nav_app-administration-nav_comp-1b3e30")]).then(t.bind(t,2028));return n})}},Q={name:"ANALYZE_SETTINGS",initContext:!1,panelSize:"large",panelClass:null,getComponent(){return(0,M.mG)(this,void 0,void 0,function*(){const{AnalyzeSettingsComponent:n}=yield Promise.all([t.e("common"),t.e("projects_eav-ui_src_app_app-administration_sub-dialogs_analyze-settings_analyze-settings_comp-6cd38e")]).then(t.bind(t,5103));return n})}},Y={name:"SETTINGS_ITEM_DETAILS",initContext:!1,panelSize:"large",panelClass:null,getComponent(){return(0,M.mG)(this,void 0,void 0,function*(){const{SettingsItemDetailsComponent:n}=yield Promise.all([t.e("common"),t.e("projects_eav-ui_src_app_app-administration_sub-dialogs_analyze-settings_settings-item-details-4ac85a")]).then(t.bind(t,7563));return n})}},_={name:"EDIT_CONTENT_TYPE_DIALOG",initContext:!1,panelSize:"small",panelClass:null,getComponent(){return(0,M.mG)(this,void 0,void 0,function*(){const{EditContentTypeComponent:n}=yield Promise.all([t.e("common"),t.e("projects_eav-ui_src_app_app-administration_sub-dialogs_edit-content-type_edit-content-type_co-2abec4")]).then(t.bind(t,1038));return n})}},X={name:"EXPORT_APP_PARTS",initContext:!1,panelSize:"medium",panelClass:null,getComponent(){return(0,M.mG)(this,void 0,void 0,function*(){const{ExportAppPartsComponent:n}=yield Promise.all([t.e("common"),t.e("projects_eav-ui_src_app_app-administration_sub-dialogs_export-app-parts_export-app-parts_comp-b04a2d")]).then(t.bind(t,1638));return n})}},J={name:"EXPORT_APP",initContext:!1,panelSize:"medium",panelClass:null,getComponent(){return(0,M.mG)(this,void 0,void 0,function*(){const{ExportAppComponent:n}=yield t.e("projects_eav-ui_src_app_app-administration_sub-dialogs_export-app_export-app_component_ts").then(t.bind(t,9304));return n})}},H={name:"IMPORT_APP_PARTS",initContext:!1,panelSize:"medium",panelClass:null,getComponent(){return(0,M.mG)(this,void 0,void 0,function*(){const{ImportAppPartsComponent:n}=yield t.e("projects_eav-ui_src_app_app-administration_sub-dialogs_import-app-parts_import-app-parts_comp-cf6fb0").then(t.bind(t,1955));return n})}},w={name:"IMPORT_CONTENT_TYPE_DIALOG",initContext:!1,panelSize:"medium",panelClass:null,getComponent(){return(0,M.mG)(this,void 0,void 0,function*(){const{ImportContentTypeComponent:n}=yield t.e("projects_eav-ui_src_app_app-administration_sub-dialogs_import-content-type_import-content-typ-e2ad96").then(t.bind(t,6384));return n})}},q={name:"IMPORT_QUERY_DIALOG",initContext:!1,panelSize:"medium",panelClass:null,getComponent(){return(0,M.mG)(this,void 0,void 0,function*(){const{ImportQueryComponent:n}=yield t.e("projects_eav-ui_src_app_app-administration_sub-dialogs_import-query_import-query_component_ts").then(t.bind(t,3732));return n})}},tt={name:"IMPORT_VIEW_DIALOG",initContext:!1,panelSize:"medium",panelClass:null,getComponent(){return(0,M.mG)(this,void 0,void 0,function*(){const{ImportViewComponent:n}=yield t.e("projects_eav-ui_src_app_app-administration_sub-dialogs_import-view_import-view_component_ts").then(t.bind(t,8154));return n})}},et={name:"LANGUAGE_PERMISSIONS",initContext:!1,panelSize:"large",panelClass:null,getComponent(){return(0,M.mG)(this,void 0,void 0,function*(){const{LanguagePermissionsComponent:n}=yield t.e("projects_eav-ui_src_app_app-administration_sub-dialogs_language-permissions_language-permissi-a91b40").then(t.bind(t,579));return n})}},nt={name:"VIEWS_USAGE_DIALOG",initContext:!1,panelSize:"large",panelClass:null,getComponent(){return(0,M.mG)(this,void 0,void 0,function*(){const{ViewsUsageComponent:n}=yield t.e("projects_eav-ui_src_app_app-administration_sub-dialogs_views-usage_views-usage_component_ts").then(t.bind(t,7725));return n})}};var B=t(3184);const at=[{path:"",component:E.r,data:{dialog:$},children:[{path:"",redirectTo:"home",pathMatch:"full"},{path:"home",component:D.O,data:{title:"App Home"}},{path:"data/:scope",component:D.O,children:[{path:"import",component:E.r,data:{dialog:w,title:"Import Content Type"}},{path:"items/:contentTypeStaticName",loadChildren:()=>t.e("common").then(t.bind(t,3519)).then(n=>n.ContentItemsModule)},{matcher:O.eP,loadChildren:()=>Promise.all([t.e("default-node_modules_angular_material_fesm2015_list_mjs"),t.e("default-node_modules_angular_material_fesm2015_autocomplete_mjs"),t.e("default-projects_eav-ui_src_app_monaco-editor_index_ts-projects_eav-ui_src_app_shared_directi-e88d8b"),t.e("default-projects_eav-ui_src_app_edit_edit_module_ts"),t.e("default-node_modules_angular_cdk_fesm2015_drag-drop_mjs"),t.e("common"),t.e("projects_eav-ui_src_app_shared_directives_click-stop-propagation_directive_ts")]).then(t.bind(t,1595)).then(n=>n.EditModule)},{matcher:O.lZ,loadChildren:()=>t.e("projects_eav-ui_src_app_edit_refresh-edit_module_ts").then(t.bind(t,8449)).then(n=>n.RefreshEditModule)},{path:"add",component:E.r,data:{dialog:_,title:"Add Content Type"}},{path:":contentTypeStaticName/edit",component:E.r,data:{dialog:_,title:"Edit Content Type"}},...S.U.getRoutes(),W.ii.route,{path:"fields/:contentTypeStaticName",loadChildren:()=>t.e("common").then(t.bind(t,2489)).then(n=>n.ContentTypeFieldsModule),data:{title:"Content Type Fields"}},{path:"export/:contentTypeStaticName",loadChildren:()=>t.e("common").then(t.bind(t,3232)).then(n=>n.ContentExportModule),data:{title:"Export Items"}},{path:":contentTypeStaticName/import",loadChildren:()=>t.e("common").then(t.bind(t,7561)).then(n=>n.ContentImportModule),data:{title:"Import Items"}},U.i.route],data:{title:"App Data"}},{path:"queries",component:D.O,children:[{path:"import",component:E.r,data:{dialog:q,title:"Import Query"}},{matcher:O.eP,loadChildren:()=>Promise.all([t.e("default-node_modules_angular_material_fesm2015_list_mjs"),t.e("default-node_modules_angular_material_fesm2015_autocomplete_mjs"),t.e("default-projects_eav-ui_src_app_monaco-editor_index_ts-projects_eav-ui_src_app_shared_directi-e88d8b"),t.e("default-projects_eav-ui_src_app_edit_edit_module_ts"),t.e("default-node_modules_angular_cdk_fesm2015_drag-drop_mjs"),t.e("common"),t.e("projects_eav-ui_src_app_shared_directives_click-stop-propagation_directive_ts")]).then(t.bind(t,1595)).then(n=>n.EditModule),data:{title:"Edit Query Name and Description",history:!1}},...S.U.getRoutes(),Object.assign(Object.assign({},U.i.route),{data:{title:"Query Permissions"}}),W.ii.route],data:{title:"App Queries"}},{path:"views",component:D.O,children:[{path:"import",component:E.r,data:{dialog:tt,title:"Import View"}},{path:"usage/:guid",component:E.r,data:{dialog:nt}},{matcher:O.eP,loadChildren:()=>Promise.all([t.e("default-node_modules_angular_material_fesm2015_list_mjs"),t.e("default-node_modules_angular_material_fesm2015_autocomplete_mjs"),t.e("default-projects_eav-ui_src_app_monaco-editor_index_ts-projects_eav-ui_src_app_shared_directi-e88d8b"),t.e("default-projects_eav-ui_src_app_edit_edit_module_ts"),t.e("default-node_modules_angular_cdk_fesm2015_drag-drop_mjs"),t.e("common"),t.e("projects_eav-ui_src_app_shared_directives_click-stop-propagation_directive_ts")]).then(t.bind(t,1595)).then(n=>n.EditModule),data:{title:"Edit View"}},{matcher:O.lZ,loadChildren:()=>t.e("projects_eav-ui_src_app_edit_refresh-edit_module_ts").then(t.bind(t,8449)).then(n=>n.RefreshEditModule)},Object.assign(Object.assign({},U.i.route),{data:{title:"View Permissions"}}),...S.U.getRoutes()],data:{title:"App Views"}},{path:"web-api",component:D.O,data:{title:"App WebApi"},children:[W.ii.route]},{path:"app",component:D.O,data:{title:"Manage App"},children:[...S.U.getRoutes(),{matcher:O.eP,loadChildren:()=>Promise.all([t.e("default-node_modules_angular_material_fesm2015_list_mjs"),t.e("default-node_modules_angular_material_fesm2015_autocomplete_mjs"),t.e("default-projects_eav-ui_src_app_monaco-editor_index_ts-projects_eav-ui_src_app_shared_directi-e88d8b"),t.e("default-projects_eav-ui_src_app_edit_edit_module_ts"),t.e("default-node_modules_angular_cdk_fesm2015_drag-drop_mjs"),t.e("common"),t.e("projects_eav-ui_src_app_shared_directives_click-stop-propagation_directive_ts")]).then(t.bind(t,1595)).then(n=>n.EditModule),data:{title:"Edit App Properties"}},{matcher:O.lZ,loadChildren:()=>t.e("projects_eav-ui_src_app_edit_refresh-edit_module_ts").then(t.bind(t,8449)).then(n=>n.RefreshEditModule)},{path:"fields/:contentTypeStaticName",loadChildren:()=>t.e("common").then(t.bind(t,2489)).then(n=>n.ContentTypeFieldsModule),data:{title:"Edit Fields of App Settings & Resources"}},{path:"language-permissions",component:E.r,data:{dialog:et,title:"Language Permissions"},children:[Object.assign(Object.assign({},U.i.route),{data:{title:"Language Permissions"}})]},Object.assign(Object.assign({},U.i.route),{data:{title:"App Permissions"}}),{path:"analyze/:part",component:E.r,data:{dialog:Q,title:"Analyze Settings / Resources"},children:[{path:"details/:view/:settingsItemKey",component:E.r,data:{dialog:Y,title:"Settings / Resources Item Details"}}]}]},{path:"sync",component:D.O,data:{title:"Sync"},children:[...S.U.getRoutes(),{path:"export",component:E.r,data:{dialog:J,title:"Export App"}},{path:"export/parts",component:E.r,data:{dialog:X,title:"Export App Parts"}},{path:"import/parts",component:E.r,data:{dialog:H,title:"Import App Parts"}}]}]}];let it=(()=>{class n{}return n.\u0275fac=function(V){return new(V||n)},n.\u0275mod=B.oAB({type:n}),n.\u0275inj=B.cJS({imports:[[L.Bz.forChild(at)],L.Bz]}),n})();var ot=t(9584),st=t(722),ct=t(9597),rt=t(7066),dt=t(343),lt=t(6794),mt=t(2240),pt=t(3506),ht=t(8930);let ut=(()=>{class n{}return n.\u0275fac=function(V){return new(V||n)},n.\u0275mod=B.oAB({type:n}),n.\u0275inj=B.cJS({providers:[I._,st.K,ct.l,rt.s,pt.vG,ht.h,j.i,z.t,K.l,lt.v,dt.T,mt.z,F.x,ot.P,l.Mr,a.Do,G.b],imports:[[it,N.q,x.Is,h.ez,s.ot,m.Ps,p.o,P.Nh,e.u5,v.c,k.LD,c.Fk,u.Cq,f.p9,d.To,g.QW,r.si,A.rP,R.ZX,o.Tx,b.g,y.qH,i.S]]}),n})()},9584:(T,C,t)=>{t.d(C,{P:()=>r});var h=t(635),e=t(9322),b=t(5368),s=t(3184),g=t(8784),f=t(2425);let r=(()=>{class x{constructor(m,v,o){this.http=m,this.context=v,this.dnnContext=o}getStack(m,v,o,u=!1){return this.http.get(this.dnnContext.$2sxc.http.apiUrl(e.H+"GetStack"),{params:Object.assign(Object.assign({appId:this.context.appId.toString(),part:m},v&&{key:v}),o&&{view:o})}).pipe((0,h.U)(c=>{if(!u)return c;for(const k of c)k._value=JSON.stringify(k.Value);return c}))}}return x.\u0275fac=function(m){return new(m||x)(s.LFG(g.eN),s.LFG(b._),s.LFG(f._y))},x.\u0275prov=s.Yz7({token:x,factory:x.\u0275fac}),x})()},9597:(T,C,t)=>{t.d(C,{l:()=>f});var h=t(5368),e=t(3184),b=t(8784),s=t(2425);let f=(()=>{class r{constructor(d,m,v){this.http=d,this.context=m,this.dnnContext=v}getAppInternals(d,m,v,o){return this.http.get(this.dnnContext.$2sxc.http.apiUrl("admin/appinternals/get"),{params:Object.assign({appId:this.context.appId.toString(),targetType:d.toString(),keyType:m,key:v.toString()},o&&{contentType:o})})}}return r.\u0275fac=function(d){return new(d||r)(e.LFG(b.eN),e.LFG(h._),e.LFG(s._y))},r.\u0275prov=e.Yz7({token:r,factory:r.\u0275fac}),r})()},2188:(T,C,t)=>{t.d(C,{i:()=>f});var h=t(7066),e=t(4856),b=t(5368),s=t(3184),g=t(2425);let f=(()=>{class r{constructor(d,m){this.context=d,this.dnnContext=m}exportContent(d,m){const v=m?"&selectedids="+m.join():"",o=this.dnnContext.$2sxc.http.apiUrl(e.Uo+"Download")+"?appId="+this.context.appId+"&language="+d.language+"&defaultLanguage="+d.defaultLanguage+"&contentType="+d.contentTypeStaticName+"&recordExport="+d.recordExport+"&resourcesReferences="+d.resourcesReferences+"&languageReferences="+d.languageReferences+v;window.open(o,"_blank","")}exportJson(d){const m=this.dnnContext.$2sxc.http.apiUrl(h._+"Json")+"?appId="+this.context.appId+"&name="+d;window.open(m,"_blank","")}exportEntity(d,m,v){const o=this.dnnContext.$2sxc.http.apiUrl(e.Uo+"Json")+"?appId="+this.context.appId+"&id="+d+"&prefix="+m+"&withMetadata="+v;window.open(o,"_blank","")}}return r.\u0275fac=function(d){return new(d||r)(s.LFG(b._),s.LFG(g._y))},r.\u0275prov=s.Yz7({token:r,factory:r.\u0275fac}),r})()},8812:(T,C,t)=>{t.d(C,{l:()=>v});var h=t(7400),e=t(2673),b=t(635),s=t(898),g=t(4856),f=t(9934),r=t(5368),x=t(3184),d=t(8784),m=t(2425);let v=(()=>{class o{constructor(c,k,A){this.http=c,this.context=k,this.dnnContext=A}getAll(c){return this.http.get(this.dnnContext.$2sxc.http.apiUrl(g.PS),{params:{appId:this.context.appId.toString(),contentType:c}})}getColumns(c){return this.http.get(this.dnnContext.$2sxc.http.apiUrl(s.jt),{params:{appId:this.context.appId.toString(),staticName:c}})}importItem(c){return(0,h.D)((0,f.s)(c)).pipe((0,e.w)(k=>this.http.post(this.dnnContext.$2sxc.http.apiUrl(g.Uo+"upload"),{AppId:this.context.appId.toString(),ContentBase64:k})),(0,b.U)(k=>({Success:k,Messages:[]})))}}return o.\u0275fac=function(c){return new(c||o)(x.LFG(d.eN),x.LFG(r._),x.LFG(m._y))},o.\u0275prov=x.Yz7({token:o,factory:o.\u0275fac}),o})()},898:(T,C,t)=>{t.d(C,{Mr:()=>d,jt:()=>x});var h=t(635),e=t(7066),b=t(5368),s=t(3184),g=t(8784),f=t(2425);const r="admin/field/",x=r+"all";let d=(()=>{class m{constructor(o,u,c){this.http=o,this.context=u,this.dnnContext=c}apiUrl(o){return this.dnnContext.$2sxc.http.apiUrl(o)}typeListRetrieve(){return this.http.get(this.apiUrl(r+"DataTypes"),{params:{appid:this.context.appId.toString()}})}getInputTypesList(){return this.http.get(this.apiUrl(r+"InputTypes"),{params:{appid:this.context.appId.toString()}}).pipe((0,h.U)(o=>o.map(c=>({dataType:c.Type.substring(0,c.Type.indexOf("-")),inputType:c.Type,label:c.Label,description:c.Description,isDefault:c.IsDefault,isObsolete:c.IsObsolete,isRecommended:c.IsRecommended,obsoleteMessage:c.ObsoleteMessage,icon:c.IsDefault?"star":c.IsRecommended?"star_outline":null}))))}getReservedNames(){return this.http.get(this.apiUrl(r+"ReservedNames"))}getFields(o){return this.http.get(this.apiUrl(x),{params:{appid:this.context.appId.toString(),staticName:o}}).pipe((0,h.U)(u=>{if(u)for(const c of u){if(!c.Metadata)continue;const k=c.Metadata,R=k[c.Type],P=k[c.InputType];k.merged=Object.assign(Object.assign(Object.assign({},k.All),R),P)}return u}))}reOrder(o,u){return this.http.post(this.apiUrl(r+"Sort"),null,{params:{appid:this.context.appId.toString(),contentTypeId:u.Id.toString(),order:JSON.stringify(o)}})}setTitle(o,u){return this.http.post(this.apiUrl(e._+"SetTitle"),null,{params:{appid:this.context.appId.toString(),contentTypeId:u.Id.toString(),attributeId:o.Id.toString()}})}rename(o,u,c){return this.http.post(this.apiUrl(r+"Rename"),null,{params:{appid:this.context.appId.toString(),contentTypeId:u.toString(),attributeId:o.toString(),newName:c}})}delete(o,u){if(o.IsTitle)throw new Error("Can't delete Title");return this.http.delete(this.apiUrl(r+"Delete"),{params:{appid:this.context.appId.toString(),contentTypeId:u.Id.toString(),attributeId:o.Id.toString()}})}add(o,u){return this.http.post(this.apiUrl(r+"Add"),null,{params:{AppId:this.context.appId.toString(),ContentTypeId:u.toString(),Id:o.Id.toString(),Type:o.Type,InputType:o.InputType,StaticName:o.StaticName,IsTitle:o.IsTitle.toString(),Index:o.SortOrder.toString()}})}updateInputType(o,u,c){return this.http.post(this.apiUrl(r+"InputType"),null,{params:{appId:this.context.appId.toString(),attributeId:o.toString(),field:u,inputType:c}})}}return m.\u0275fac=function(o){return new(o||m)(s.LFG(g.eN),s.LFG(b._),s.LFG(f._y))},m.\u0275prov=s.Yz7({token:m,factory:m.\u0275fac}),m})()},2409:(T,C,t)=>{t.d(C,{U:()=>e});var h=t(941);class e{static getRoutes(){const s={path:"metadata/:targetType/:keyType/:key",loadChildren:()=>Promise.all([t.e("default-node_modules_angular_material_fesm2015_slide-toggle_mjs"),t.e("default-projects_eav-ui_src_app_permissions_index_ts"),t.e("common"),t.e("projects_eav-ui_src_app_metadata_metadata_module_ts")]).then(t.bind(t,1901)).then(f=>f.MetadataModule),data:{title:"Metadata"}};return[s,Object.assign(Object.assign({},s),{path:`${s.path}/title/:title`}),Object.assign(Object.assign({},s),{path:`${s.path}/contentType/:contentTypeStaticName`}),Object.assign(Object.assign({},s),{path:`${s.path}/title/:title/contentType/:contentTypeStaticName`})]}static getUrl(s,g,f,r,x){let d=`metadata/${s}/${g}/${f}`;return r&&(d+=`/title/${encodeURIComponent(r)}`),x&&(d+=`/contentType/${x}`),d}static getUrlApp(s,g){return this.getUrl(h.Zy.metadata.app.targetType,h.Zy.metadata.app.keyType,s.toString(),g)}static getUrlAttribute(s,g,f){return this.getUrl(h.Zy.metadata.attribute.targetType,h.Zy.metadata.attribute.keyType,s.toString(),g,f)}static getUrlContentType(s,g){return this.getUrl(h.Zy.metadata.contentType.targetType,h.Zy.metadata.contentType.keyType,s,g)}static getUrlEntity(s,g,f){return this.getUrl(h.Zy.metadata.entity.targetType,h.Zy.metadata.entity.keyType,s,g,f)}}},1534:(T,C,t)=>{t.d(C,{oG:()=>P,p9:()=>K});var h=t(6484),e=t(3184),b=t(587),s=t(1130),g=t(7481),f=t(4128),r=t(5837);const x=["input"],d=function(l){return{enterDuration:l}},m=["*"],v=new e.OlP("mat-checkbox-default-options",{providedIn:"root",factory:o});function o(){return{color:"accent",clickAction:"check-indeterminate"}}let u=0;const c=o(),k={provide:b.JU,useExisting:(0,e.Gpc)(()=>P),multi:!0};class A{}const R=(0,s.sb)((0,s.pj)((0,s.Kr)((0,s.Id)(class{constructor(l){this._elementRef=l}}))));let P=(()=>{class l extends R{constructor(i,a,p,I,F,N,L){super(i),this._changeDetectorRef=a,this._focusMonitor=p,this._ngZone=I,this._animationMode=N,this._options=L,this.ariaLabel="",this.ariaLabelledby=null,this._uniqueId="mat-checkbox-"+ ++u,this.id=this._uniqueId,this.labelPosition="after",this.name=null,this.change=new e.vpe,this.indeterminateChange=new e.vpe,this._onTouched=()=>{},this._currentAnimationClass="",this._currentCheckState=0,this._controlValueAccessorChangeFn=()=>{},this._checked=!1,this._disabled=!1,this._indeterminate=!1,this._options=this._options||c,this.color=this.defaultColor=this._options.color||c.color,this.tabIndex=parseInt(F)||0}get inputId(){return`${this.id||this._uniqueId}-input`}get required(){return this._required}set required(i){this._required=(0,h.Ig)(i)}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(i=>{i||Promise.resolve().then(()=>{this._onTouched(),this._changeDetectorRef.markForCheck()})}),this._syncIndeterminate(this._indeterminate)}ngAfterViewChecked(){}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef)}get checked(){return this._checked}set checked(i){const a=(0,h.Ig)(i);a!=this.checked&&(this._checked=a,this._changeDetectorRef.markForCheck())}get disabled(){return this._disabled}set disabled(i){const a=(0,h.Ig)(i);a!==this.disabled&&(this._disabled=a,this._changeDetectorRef.markForCheck())}get indeterminate(){return this._indeterminate}set indeterminate(i){const a=i!=this._indeterminate;this._indeterminate=(0,h.Ig)(i),a&&(this._transitionCheckState(this._indeterminate?3:this.checked?1:2),this.indeterminateChange.emit(this._indeterminate)),this._syncIndeterminate(this._indeterminate)}_isRippleDisabled(){return this.disableRipple||this.disabled}_onLabelTextChange(){this._changeDetectorRef.detectChanges()}writeValue(i){this.checked=!!i}registerOnChange(i){this._controlValueAccessorChangeFn=i}registerOnTouched(i){this._onTouched=i}setDisabledState(i){this.disabled=i}_getAriaChecked(){return this.checked?"true":this.indeterminate?"mixed":"false"}_transitionCheckState(i){let a=this._currentCheckState,p=this._elementRef.nativeElement;if(a!==i&&(this._currentAnimationClass.length>0&&p.classList.remove(this._currentAnimationClass),this._currentAnimationClass=this._getAnimationClassForCheckStateTransition(a,i),this._currentCheckState=i,this._currentAnimationClass.length>0)){p.classList.add(this._currentAnimationClass);const I=this._currentAnimationClass;this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{p.classList.remove(I)},1e3)})}}_emitChangeEvent(){const i=new A;i.source=this,i.checked=this.checked,this._controlValueAccessorChangeFn(this.checked),this.change.emit(i),this._inputElement&&(this._inputElement.nativeElement.checked=this.checked)}toggle(){this.checked=!this.checked,this._controlValueAccessorChangeFn(this.checked)}_onInputClick(i){var a;const p=null===(a=this._options)||void 0===a?void 0:a.clickAction;i.stopPropagation(),this.disabled||"noop"===p?!this.disabled&&"noop"===p&&(this._inputElement.nativeElement.checked=this.checked,this._inputElement.nativeElement.indeterminate=this.indeterminate):(this.indeterminate&&"check"!==p&&Promise.resolve().then(()=>{this._indeterminate=!1,this.indeterminateChange.emit(this._indeterminate)}),this._checked=!this._checked,this._transitionCheckState(this._checked?1:2),this._emitChangeEvent())}focus(i,a){i?this._focusMonitor.focusVia(this._inputElement,i,a):this._inputElement.nativeElement.focus(a)}_onInteractionEvent(i){i.stopPropagation()}_getAnimationClassForCheckStateTransition(i,a){if("NoopAnimations"===this._animationMode)return"";let p="";switch(i){case 0:if(1===a)p="unchecked-checked";else{if(3!=a)return"";p="unchecked-indeterminate"}break;case 2:p=1===a?"unchecked-checked":"unchecked-indeterminate";break;case 1:p=2===a?"checked-unchecked":"checked-indeterminate";break;case 3:p=1===a?"indeterminate-checked":"indeterminate-unchecked"}return`mat-checkbox-anim-${p}`}_syncIndeterminate(i){const a=this._inputElement;a&&(a.nativeElement.indeterminate=i)}}return l.\u0275fac=function(i){return new(i||l)(e.Y36(e.SBq),e.Y36(e.sBO),e.Y36(f.tE),e.Y36(e.R0b),e.$8M("tabindex"),e.Y36(g.Qb,8),e.Y36(v,8))},l.\u0275cmp=e.Xpm({type:l,selectors:[["mat-checkbox"]],viewQuery:function(i,a){if(1&i&&(e.Gf(x,5),e.Gf(s.wG,5)),2&i){let p;e.iGM(p=e.CRH())&&(a._inputElement=p.first),e.iGM(p=e.CRH())&&(a.ripple=p.first)}},hostAttrs:[1,"mat-checkbox"],hostVars:14,hostBindings:function(i,a){2&i&&(e.Ikx("id",a.id),e.uIk("tabindex",null)("aria-label",null)("aria-labelledby",null),e.ekj("mat-checkbox-indeterminate",a.indeterminate)("mat-checkbox-checked",a.checked)("mat-checkbox-disabled",a.disabled)("mat-checkbox-label-before","before"==a.labelPosition)("_mat-animation-noopable","NoopAnimations"===a._animationMode))},inputs:{disableRipple:"disableRipple",color:"color",tabIndex:"tabIndex",ariaLabel:["aria-label","ariaLabel"],ariaLabelledby:["aria-labelledby","ariaLabelledby"],ariaDescribedby:["aria-describedby","ariaDescribedby"],id:"id",required:"required",labelPosition:"labelPosition",name:"name",value:"value",checked:"checked",disabled:"disabled",indeterminate:"indeterminate"},outputs:{change:"change",indeterminateChange:"indeterminateChange"},exportAs:["matCheckbox"],features:[e._Bn([k]),e.qOj],ngContentSelectors:m,decls:17,vars:21,consts:[[1,"mat-checkbox-layout"],["label",""],[1,"mat-checkbox-inner-container"],["type","checkbox",1,"mat-checkbox-input","cdk-visually-hidden",3,"id","required","checked","disabled","tabIndex","change","click"],["input",""],["matRipple","",1,"mat-checkbox-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled","matRippleRadius","matRippleCentered","matRippleAnimation"],[1,"mat-ripple-element","mat-checkbox-persistent-ripple"],[1,"mat-checkbox-frame"],[1,"mat-checkbox-background"],["version","1.1","focusable","false","viewBox","0 0 24 24","aria-hidden","true",1,"mat-checkbox-checkmark"],["fill","none","stroke","white","d","M4.1,12.7 9,17.6 20.3,6.3",1,"mat-checkbox-checkmark-path"],[1,"mat-checkbox-mixedmark"],[1,"mat-checkbox-label",3,"cdkObserveContent"],["checkboxLabel",""],[2,"display","none"]],template:function(i,a){if(1&i&&(e.F$t(),e.TgZ(0,"label",0,1)(2,"span",2)(3,"input",3,4),e.NdJ("change",function(I){return a._onInteractionEvent(I)})("click",function(I){return a._onInputClick(I)}),e.qZA(),e.TgZ(5,"span",5),e._UZ(6,"span",6),e.qZA(),e._UZ(7,"span",7),e.TgZ(8,"span",8),e.O4$(),e.TgZ(9,"svg",9),e._UZ(10,"path",10),e.qZA(),e.kcU(),e._UZ(11,"span",11),e.qZA()(),e.TgZ(12,"span",12,13),e.NdJ("cdkObserveContent",function(){return a._onLabelTextChange()}),e.TgZ(14,"span",14),e._uU(15,"\xa0"),e.qZA(),e.Hsn(16),e.qZA()()),2&i){const p=e.MAs(1),I=e.MAs(13);e.uIk("for",a.inputId),e.xp6(2),e.ekj("mat-checkbox-inner-container-no-side-margin",!I.textContent||!I.textContent.trim()),e.xp6(1),e.Q6J("id",a.inputId)("required",a.required)("checked",a.checked)("disabled",a.disabled)("tabIndex",a.tabIndex),e.uIk("value",a.value)("name",a.name)("aria-label",a.ariaLabel||null)("aria-labelledby",a.ariaLabelledby)("aria-checked",a._getAriaChecked())("aria-describedby",a.ariaDescribedby),e.xp6(2),e.Q6J("matRippleTrigger",p)("matRippleDisabled",a._isRippleDisabled())("matRippleRadius",20)("matRippleCentered",!0)("matRippleAnimation",e.VKq(19,d,"NoopAnimations"===a._animationMode?0:150))}},directives:[s.wG,r.wD],styles:["@keyframes mat-checkbox-fade-in-background{0%{opacity:0}50%{opacity:1}}@keyframes mat-checkbox-fade-out-background{0%,50%{opacity:1}100%{opacity:0}}@keyframes mat-checkbox-unchecked-checked-checkmark-path{0%,50%{stroke-dashoffset:22.910259}50%{animation-timing-function:cubic-bezier(0, 0, 0.2, 0.1)}100%{stroke-dashoffset:0}}@keyframes mat-checkbox-unchecked-indeterminate-mixedmark{0%,68.2%{transform:scaleX(0)}68.2%{animation-timing-function:cubic-bezier(0, 0, 0, 1)}100%{transform:scaleX(1)}}@keyframes mat-checkbox-checked-unchecked-checkmark-path{from{animation-timing-function:cubic-bezier(0.4, 0, 1, 1);stroke-dashoffset:0}to{stroke-dashoffset:-22.910259}}@keyframes mat-checkbox-checked-indeterminate-checkmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 0.1);opacity:1;transform:rotate(0deg)}to{opacity:0;transform:rotate(45deg)}}@keyframes mat-checkbox-indeterminate-checked-checkmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);opacity:0;transform:rotate(45deg)}to{opacity:1;transform:rotate(360deg)}}@keyframes mat-checkbox-checked-indeterminate-mixedmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 0.1);opacity:0;transform:rotate(-45deg)}to{opacity:1;transform:rotate(0deg)}}@keyframes mat-checkbox-indeterminate-checked-mixedmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);opacity:1;transform:rotate(0deg)}to{opacity:0;transform:rotate(315deg)}}@keyframes mat-checkbox-indeterminate-unchecked-mixedmark{0%{animation-timing-function:linear;opacity:1;transform:scaleX(1)}32.8%,100%{opacity:0;transform:scaleX(0)}}.mat-checkbox-background,.mat-checkbox-frame{top:0;left:0;right:0;bottom:0;position:absolute;border-radius:2px;box-sizing:border-box;pointer-events:none}.mat-checkbox{display:inline-block;transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);cursor:pointer;-webkit-tap-highlight-color:transparent}._mat-animation-noopable.mat-checkbox{transition:none;animation:none}.mat-checkbox .mat-ripple-element:not(.mat-checkbox-persistent-ripple){opacity:.16}.mat-checkbox .mat-checkbox-ripple{position:absolute;left:calc(50% - 20px);top:calc(50% - 20px);height:40px;width:40px;z-index:1;pointer-events:none}.cdk-high-contrast-active .mat-checkbox.cdk-keyboard-focused .mat-checkbox-ripple{outline:solid 3px}.mat-checkbox-layout{-webkit-user-select:none;user-select:none;cursor:inherit;align-items:baseline;vertical-align:middle;display:inline-flex;white-space:nowrap}.mat-checkbox-label{-webkit-user-select:auto;user-select:auto}.mat-checkbox-inner-container{display:inline-block;height:16px;line-height:0;margin:auto;margin-right:8px;order:0;position:relative;vertical-align:middle;white-space:nowrap;width:16px;flex-shrink:0}[dir=rtl] .mat-checkbox-inner-container{margin-left:8px;margin-right:auto}.mat-checkbox-inner-container-no-side-margin{margin-left:0;margin-right:0}.mat-checkbox-frame{background-color:transparent;transition:border-color 90ms cubic-bezier(0, 0, 0.2, 0.1);border-width:2px;border-style:solid}._mat-animation-noopable .mat-checkbox-frame{transition:none}.mat-checkbox-background{align-items:center;display:inline-flex;justify-content:center;transition:background-color 90ms cubic-bezier(0, 0, 0.2, 0.1),opacity 90ms cubic-bezier(0, 0, 0.2, 0.1);-webkit-print-color-adjust:exact;color-adjust:exact}._mat-animation-noopable .mat-checkbox-background{transition:none}.cdk-high-contrast-active .mat-checkbox .mat-checkbox-background{background:none}.mat-checkbox-persistent-ripple{display:block;width:100%;height:100%;transform:none}.mat-checkbox-inner-container:hover .mat-checkbox-persistent-ripple{opacity:.04}.mat-checkbox.cdk-keyboard-focused .mat-checkbox-persistent-ripple{opacity:.12}.mat-checkbox-persistent-ripple,.mat-checkbox.mat-checkbox-disabled .mat-checkbox-inner-container:hover .mat-checkbox-persistent-ripple{opacity:0}@media(hover: none){.mat-checkbox-inner-container:hover .mat-checkbox-persistent-ripple{display:none}}.mat-checkbox-checkmark{top:0;left:0;right:0;bottom:0;position:absolute;width:100%}.mat-checkbox-checkmark-path{stroke-dashoffset:22.910259;stroke-dasharray:22.910259;stroke-width:2.1333333333px}.cdk-high-contrast-black-on-white .mat-checkbox-checkmark-path{stroke:#000 !important}.mat-checkbox-mixedmark{width:calc(100% - 6px);height:2px;opacity:0;transform:scaleX(0) rotate(0deg);border-radius:2px}.cdk-high-contrast-active .mat-checkbox-mixedmark{height:0;border-top:solid 2px;margin-top:2px}.mat-checkbox-label-before .mat-checkbox-inner-container{order:1;margin-left:8px;margin-right:auto}[dir=rtl] .mat-checkbox-label-before .mat-checkbox-inner-container{margin-left:auto;margin-right:8px}.mat-checkbox-checked .mat-checkbox-checkmark{opacity:1}.mat-checkbox-checked .mat-checkbox-checkmark-path{stroke-dashoffset:0}.mat-checkbox-checked .mat-checkbox-mixedmark{transform:scaleX(1) rotate(-45deg)}.mat-checkbox-indeterminate .mat-checkbox-checkmark{opacity:0;transform:rotate(45deg)}.mat-checkbox-indeterminate .mat-checkbox-checkmark-path{stroke-dashoffset:0}.mat-checkbox-indeterminate .mat-checkbox-mixedmark{opacity:1;transform:scaleX(1) rotate(0deg)}.mat-checkbox-unchecked .mat-checkbox-background{background-color:transparent}.mat-checkbox-disabled{cursor:default}.cdk-high-contrast-active .mat-checkbox-disabled{opacity:.5}.mat-checkbox-anim-unchecked-checked .mat-checkbox-background{animation:180ms linear 0ms mat-checkbox-fade-in-background}.mat-checkbox-anim-unchecked-checked .mat-checkbox-checkmark-path{animation:180ms linear 0ms mat-checkbox-unchecked-checked-checkmark-path}.mat-checkbox-anim-unchecked-indeterminate .mat-checkbox-background{animation:180ms linear 0ms mat-checkbox-fade-in-background}.mat-checkbox-anim-unchecked-indeterminate .mat-checkbox-mixedmark{animation:90ms linear 0ms mat-checkbox-unchecked-indeterminate-mixedmark}.mat-checkbox-anim-checked-unchecked .mat-checkbox-background{animation:180ms linear 0ms mat-checkbox-fade-out-background}.mat-checkbox-anim-checked-unchecked .mat-checkbox-checkmark-path{animation:90ms linear 0ms mat-checkbox-checked-unchecked-checkmark-path}.mat-checkbox-anim-checked-indeterminate .mat-checkbox-checkmark{animation:90ms linear 0ms mat-checkbox-checked-indeterminate-checkmark}.mat-checkbox-anim-checked-indeterminate .mat-checkbox-mixedmark{animation:90ms linear 0ms mat-checkbox-checked-indeterminate-mixedmark}.mat-checkbox-anim-indeterminate-checked .mat-checkbox-checkmark{animation:500ms linear 0ms mat-checkbox-indeterminate-checked-checkmark}.mat-checkbox-anim-indeterminate-checked .mat-checkbox-mixedmark{animation:500ms linear 0ms mat-checkbox-indeterminate-checked-mixedmark}.mat-checkbox-anim-indeterminate-unchecked .mat-checkbox-background{animation:180ms linear 0ms mat-checkbox-fade-out-background}.mat-checkbox-anim-indeterminate-unchecked .mat-checkbox-mixedmark{animation:300ms linear 0ms mat-checkbox-indeterminate-unchecked-mixedmark}.mat-checkbox-input{bottom:0;left:50%}\n"],encapsulation:2,changeDetection:0}),l})(),j=(()=>{class l{}return l.\u0275fac=function(i){return new(i||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({}),l})(),K=(()=>{class l{}return l.\u0275fac=function(i){return new(i||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({imports:[[s.si,s.BQ,r.Q8,j],s.BQ,j]}),l})()}}]);
//# sourceMappingURL=https://sources.2sxc.org/16.07.00/dist/ng-edit/default-projects_eav-ui_src_app_app-administration_app-administration_module_ts.8aa9bdab6d75c0ce.js.map