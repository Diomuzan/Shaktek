"use strict";(self.webpackChunkeav_ui=self.webpackChunkeav_ui||[]).push([["projects_eav-ui_src_app_content-export_content-export_component_ts"],{3810:(L,c,o)=>{o.r(c),o.d(c,{ContentExportComponent:()=>D});var g=o(6317),f=o(1640),x=o(722),h=o(7066),C=o(2188),t=o(3184),p=o(5758),E=o(2977),_=o(6362),l=o(587),m=o(4770),M=o(1434),T=o(1130),u=o(8390),v=o(7317);function Z(r,i){if(1&r&&(t.TgZ(0,"mat-option",24),t._uU(1),t.qZA()),2&r){const e=i.$implicit;t.Q6J("value",e.NameId),t.xp6(1),t.Oqu(e.NameId)}}function A(r,i){if(1&r&&(t.TgZ(0,"mat-radio-button",25),t._uU(1),t.qZA()),2&r){const e=t.oxw(2);t.xp6(1),t.hij(" Export selected ",e.itemIds.length," items ")}}function O(r,i){if(1&r){const e=t.EpF();t.TgZ(0,"form",5,6)(2,"div",7)(3,"div")(4,"mat-form-field",8)(5,"mat-label"),t._uU(6,"Languages"),t.qZA(),t.TgZ(7,"mat-select",9),t.NdJ("ngModelChange",function(a){return t.CHM(e),t.oxw().formValues.language=a}),t.TgZ(8,"mat-option",10),t._uU(9,"All"),t.qZA(),t.YNc(10,Z,2,2,"mat-option",11),t.qZA()()(),t.TgZ(11,"div")(12,"p",12),t._uU(13,"Export data"),t.qZA(),t.TgZ(14,"mat-radio-group",13),t.NdJ("ngModelChange",function(a){return t.CHM(e),t.oxw().formValues.recordExport=a}),t.TgZ(15,"mat-radio-button",14),t._uU(16,"No, just export blank data schema (for new data import) "),t.qZA(),t.TgZ(17,"mat-radio-button",15),t._uU(18,"Yes, export all content-items"),t.qZA(),t.YNc(19,A,2,1,"mat-radio-button",16),t.qZA()(),t.TgZ(20,"div")(21,"p",12),t._uU(22,"Value references to other languages"),t.qZA(),t.TgZ(23,"mat-radio-group",17),t.NdJ("ngModelChange",function(a){return t.CHM(e),t.oxw().formValues.languageReferences=a}),t.TgZ(24,"mat-radio-button",18),t._uU(25,"Keep references to other languages (for re-import) "),t.qZA(),t.TgZ(26,"mat-radio-button",19),t._uU(27,"Replace references with values"),t.qZA()()(),t.TgZ(28,"div")(29,"p",12),t._uU(30,"File / page references"),t.qZA(),t.TgZ(31,"mat-radio-group",20),t.NdJ("ngModelChange",function(a){return t.CHM(e),t.oxw().formValues.resourcesReferences=a}),t.TgZ(32,"mat-radio-button",18),t._uU(33,"Keep references (for re-import, for example Page:4711) "),t.qZA(),t.TgZ(34,"mat-radio-button",19),t._uU(35,"Replace references with real URLs (for example /Portals/0...) "),t.qZA()()()(),t.TgZ(36,"div",21)(37,"button",22),t.NdJ("click",function(){return t.CHM(e),t.oxw().closeDialog()}),t._uU(38,"Cancel"),t.qZA(),t.TgZ(39,"button",23),t.NdJ("click",function(){return t.CHM(e),t.oxw().exportContent()}),t._uU(40," Export Data "),t.qZA()()()}if(2&r){const e=t.MAs(1),n=t.oxw();t.xp6(7),t.Q6J("ngModel",n.formValues.language),t.xp6(3),t.Q6J("ngForOf",n.languages),t.xp6(4),t.Q6J("ngModel",n.formValues.recordExport),t.xp6(5),t.Q6J("ngIf",n.hasIdList),t.xp6(4),t.Q6J("ngModel",n.formValues.languageReferences)("disabled","Blank"===n.formValues.recordExport),t.xp6(8),t.Q6J("ngModel",n.formValues.resourcesReferences)("disabled","Blank"===n.formValues.recordExport),t.xp6(8),t.Q6J("disabled",!e.form.valid)}}let D=(()=>{class r{constructor(e,n,a,s,P){this.dialogRef=e,this.route=n,this.contentExportService=a,this.appDialogConfigService=s,this.contentTypesService=P,this.hostClass="dialog-component",this.hasIdList=!1,this.loading$=new g.X(!1),this.contentType$=new g.X(null),this.contentTypeStaticName=this.route.snapshot.paramMap.get("contentTypeStaticName");const d=this.route.snapshot.paramMap.get("selectedIds");this.hasIdList=!!d,this.hasIdList&&(this.itemIds=d.split(",").map(I=>parseInt(I,10)))}ngOnInit(){this.loading$.next(!0);const e=this.contentTypesService.retrieveContentType(this.contentTypeStaticName),n=this.appDialogConfigService.getShared$();(0,f.D)([e,n]).subscribe(([a,s])=>{this.contentType$.next(a),this.languages=s.Context.Language.List,this.formValues={defaultLanguage:s.Context.Language.Primary,contentTypeStaticName:this.contentTypeStaticName,language:"",recordExport:this.hasIdList?"Selection":"All",languageReferences:"Link",resourcesReferences:"Link"},this.loading$.next(!1)})}ngOnDestroy(){this.contentType$.complete(),this.loading$.complete()}closeDialog(){this.dialogRef.close()}exportContent(){this.contentExportService.exportContent(this.formValues,this.hasIdList&&"Selection"===this.formValues.recordExport?this.itemIds:null)}}return r.\u0275fac=function(e){return new(e||r)(t.Y36(p.so),t.Y36(E.gz),t.Y36(C.i),t.Y36(x.K),t.Y36(h.s))},r.\u0275cmp=t.Xpm({type:r,selectors:[["app-content-export"]],hostVars:1,hostBindings:function(e,n){2&e&&t.Ikx("className",n.hostClass)},decls:11,vars:6,consts:[["mat-dialog-title",""],[1,"dialog-title-box"],[1,"dialog-description"],["href","https://2sxc.org/help","target","_blank"],["class","dialog-form",4,"ngIf"],[1,"dialog-form"],["ngForm","ngForm"],[1,"dialog-form-content","fancy-scrollbar-light"],["appearance","standard","color","accent"],["name","Language",3,"ngModel","ngModelChange"],["value",""],[3,"value",4,"ngFor","ngForOf"],[1,"field-label"],["name","RecordExport",3,"ngModel","ngModelChange"],["value","Blank"],["value","All"],["value","Selection",4,"ngIf"],["name","LanguageReferences",3,"ngModel","disabled","ngModelChange"],["value","Link"],["value","Resolve"],["name","ResourcesReferences",3,"ngModel","disabled","ngModelChange"],[1,"dialog-form-actions"],["mat-raised-button","",3,"click"],["mat-raised-button","","color","accent",3,"disabled","click"],[3,"value"],["value","Selection"]],template:function(e,n){if(1&e&&(t.TgZ(0,"div",0)(1,"div",1),t._uU(2),t.ALo(3,"async"),t.qZA()(),t.TgZ(4,"p",2),t._uU(5," This will generate an XML file which you can edit in Excel. If you just want to import new data, use this to export the schema that you can then fill in using Excel. Please visit "),t.TgZ(6,"a",3),t._uU(7,"https://2sxc.org/help"),t.qZA(),t._uU(8," for more instructions.\n"),t.qZA(),t.YNc(9,O,41,9,"form",4),t.ALo(10,"async")),2&e){let a;t.xp6(2),t.hij("Export ",null==(a=t.lcZ(3,2,n.contentType$))?null:a.Name,""),t.xp6(7),t.Q6J("ngIf",!1===t.lcZ(10,4,n.loading$))}},directives:[p.uh,_.O5,l._Y,l.JL,l.F,m.KE,m.hX,M.gD,l.JJ,l.On,T.ey,_.sg,u.VQ,u.U0,v.lW],pipes:[_.Ov],styles:[".field-label[_ngcontent-%COMP%]{font-size:18px;margin:24px 0 0}.mat-radio-group[_ngcontent-%COMP%]{display:flex;flex-direction:column;margin:8px 0}.mat-radio-button[_ngcontent-%COMP%]{margin:5px;font-size:14px}"]}),r})()}}]);
//# sourceMappingURL=https://sources.2sxc.org/16.07.00/dist/ng-edit/projects_eav-ui_src_app_content-export_content-export_component_ts.1296ba76a2d51e22.js.map