"use strict";(self.webpackChunkeav_ui=self.webpackChunkeav_ui||[]).push([["projects_eav-ui_src_app_import-app_services_import-app_service_ts-projects_eav-ui_src_app_sha-1ab7ba","projects_eav-ui_src_app_shared_components_dialog-entry_dialog-entry_component_ts"],{9322:(T,m,s)=>{s.d(m,{H:()=>e,a:()=>i});var a=s(2673),u=s(745),p=s(3889),f=s(5368),h=s(3184),c=s(8784),v=s(2425);const e="admin/app/";let i=(()=>{class n{constructor(l,g,C){this.http=l,this.context=g,this.dnnContext=C}importApp(l,g,C=!1){const E=new FormData;return E.append("File",l),E.append("Name",null!=g?g:""),this.http.post(this.dnnContext.$2sxc.http.apiUrl(e+"Import"),E,{params:{zoneId:this.context.zoneId.toString()}}).pipe((0,a.w)(x=>{var O;if(C&&(null===(O=x.Messages[0])||void 0===O?void 0:O.MessageType)===p.D.Warning){const M=prompt(x.Messages[0].Text+" Would you like to install it using another folder name?");if(M)return this.importApp(l,M,!0)}return(0,u.of)(x)}))}}return n.\u0275fac=function(l){return new(l||n)(h.LFG(c.eN),h.LFG(f._),h.LFG(v._y))},n.\u0275prov=h.Yz7({token:n,factory:n.\u0275fac}),n})()},6167:(T,m,s)=>{s.d(m,{r:()=>c});var a=s(4480),u=s(5368),p=s(3184),f=s(5758),h=s(2977);let c=(()=>{class v{constructor(i,n,d,l,g,C){var E;this.dialog=i,this.viewContainerRef=n,this.router=d,this.route=l,this.context=g,this.changeDetectorRef=C;const x=this.router.getCurrentNavigation();this.dialogData=(null===(E=null==x?void 0:x.extras)||void 0===E?void 0:E.state)||{}}ngOnInit(){const i=this.route.snapshot.data.dialog;if(null==i)throw new Error("Could not find config for dialog. Did you forget to add DialogConfig to route data?");(0,a.P)("Open dialog:",i.name,"Context id:",this.context.id,"Context:",this.context),i.getComponent().then(n=>{this.dialog._dialogAnimatingOpen&&this.dialog._lastDialogRef?this.dialog._lastDialogRef.afterOpened().subscribe(()=>{this.openDialogComponent(i,n)}):this.openDialogComponent(i,n)})}ngOnDestroy(){this.dialogRef.close()}openDialogComponent(i,n){i.initContext&&this.context.init(this.route),this.dialogRef=this.dialog.open(n,{autoFocus:!1,backdropClass:"dialog-backdrop",closeOnNavigation:!1,data:this.dialogData,panelClass:["dialog-panel",`dialog-panel-${i.panelSize}`,i.showScrollbar?"show-scrollbar":"no-scrollbar",...i.panelClass?i.panelClass:[]],position:{top:"0"},viewContainerRef:this.viewContainerRef}),this.dialogRef.afterClosed().subscribe(d=>{(0,a.P)("Dialog was closed:",i.name,"Data:",d);const l=d;if(null==(null==l?void 0:l.navigateUrl))if(this.route.pathFromRoot.length<=3)try{window.parent.$2sxc.totalPopup.close()}catch(g){}else this.router.navigate(["./"],this.route.snapshot.url.length>0?{relativeTo:this.route.parent,state:d}:{relativeTo:this.route.parent.parent,state:d});else this.router.navigate([l.navigateUrl])}),this.changeDetectorRef.markForCheck()}}return v.\u0275fac=function(i){return new(i||v)(p.Y36(f.uw),p.Y36(p.s_b),p.Y36(h.F0),p.Y36(h.gz),p.Y36(u._),p.Y36(p.sBO))},v.\u0275cmp=p.Xpm({type:v,selectors:[["app-dialog-entry"]],decls:0,vars:0,template:function(i,n){},styles:[""]}),v})()},9262:(T,m,s)=>{s.d(m,{U:()=>B});var a=s(5758),u=s(6317),p=s(6562),f=s(635),h=s(9295),c=s(5904),v=s(2305),e=s(3184),i=s(2528),n=s(6362),d=s(5982),l=s(4742),g=s(7317),C=s(2376),E=s(1555);function x(o,_){1&o&&e._UZ(0,"mat-spinner",13)}function O(o,_){1&o&&(e.TgZ(0,"div"),e._uU(1,"Select or drop file"),e.qZA())}function M(o,_){if(1&o&&(e.TgZ(0,"div"),e._uU(1),e.qZA()),2&o){const t=_.$implicit;e.xp6(1),e.Oqu(t.name)}}function U(o,_){1&o&&(e.TgZ(0,"div",18),e._uU(1," Upload succeeded. See the messages below for more information. "),e.qZA())}function P(o,_){1&o&&(e.TgZ(0,"div",19),e._uU(1," Upload failed. See the messages below for more information. "),e.qZA())}const A=function(o,_,t){return{"sxc-message-warning":o,"sxc-message-success":_,"sxc-message-error":t}};function y(o,_){if(1&o&&(e.TgZ(0,"div",20),e._uU(1),e.qZA()),2&o){const t=_.$implicit,r=e.oxw(3);e.Q6J("ngClass",e.kEZ(2,A,t.MessageType===r.FileUploadMessageTypes.Warning,t.MessageType===r.FileUploadMessageTypes.Success,t.MessageType===r.FileUploadMessageTypes.Error)),e.xp6(1),e.hij(" ",t.Text," ")}}function I(o,_){if(1&o&&(e.TgZ(0,"div",14),e.YNc(1,U,2,0,"div",15),e.YNc(2,P,2,0,"div",16),e.YNc(3,y,2,6,"div",17),e.qZA()),2&o){const t=e.oxw().ngIf;e.xp6(1),e.Q6J("ngIf",t.result.Success),e.xp6(1),e.Q6J("ngIf",!t.result.Success),e.xp6(1),e.Q6J("ngForOf",t.result.Messages)}}function F(o,_){if(1&o){const t=e.EpF();e.ynx(0),e.TgZ(1,"button",21),e.NdJ("click",function(){return e.CHM(t),e.oxw(2).closeDialog()}),e._uU(2,"Cancel"),e.qZA(),e.TgZ(3,"button",22),e.NdJ("click",function(){return e.CHM(t),e.oxw(2).upload()}),e._uU(4," Upload "),e.qZA(),e.BQk()}if(2&o){const t=e.oxw().ngIf;e.xp6(3),e.Q6J("disabled",!t.files.length||t.uploading||!!t.result)}}function R(o,_){if(1&o){const t=e.EpF();e.ynx(0),e.TgZ(1,"button",23),e.NdJ("click",function(){return e.CHM(t),e.oxw(2).closeDialog(!0)}),e._uU(2,"Close"),e.qZA(),e.BQk()}}function L(o,_){if(1&o){const t=e.EpF();e.TgZ(0,"div",1),e.NdJ("filesDropped",function(D){return e.CHM(t),e.oxw().filesDropped(D)}),e.TgZ(1,"div",2),e._UZ(2,"div",3),e.ALo(3,"safeHtml"),e.qZA(),e.YNc(4,x,1,0,"mat-spinner",4),e._UZ(5,"p",5),e.ALo(6,"safeHtml"),e.TgZ(7,"div")(8,"button",6),e.NdJ("click",function(){return e.CHM(t),e.MAs(12).click()}),e.YNc(9,O,2,0,"div",7),e.YNc(10,M,2,1,"div",8),e.qZA(),e.TgZ(11,"input",9,10),e.NdJ("change",function(D){return e.CHM(t),e.oxw().filesChanged(D)}),e.qZA()(),e.YNc(13,I,4,3,"div",11),e.TgZ(14,"div",12),e.YNc(15,F,5,1,"ng-container",7),e.YNc(16,R,3,0,"ng-container",7),e.qZA()()}if(2&o){const t=_.ngIf,r=e.oxw();e.Q6J("allowedFileTypes",r.dialogData.allowedFileTypes),e.xp6(2),e.Q6J("innerHtml",e.lcZ(3,10,r.dialogData.title),e.oJD),e.xp6(2),e.Q6J("ngIf",t.uploading),e.xp6(1),e.Q6J("innerHtml",e.lcZ(6,12,r.dialogData.description),e.oJD),e.xp6(3),e.Q6J("disabled",t.uploading),e.xp6(1),e.Q6J("ngIf",!t.files.length),e.xp6(1),e.Q6J("ngForOf",t.files),e.xp6(3),e.Q6J("ngIf",t.result),e.xp6(2),e.Q6J("ngIf",!(null!=t.result&&t.result.Success)),e.xp6(1),e.Q6J("ngIf",null==t.result?null:t.result.Success)}}let B=(()=>{class o extends c.f{constructor(t,r,D){super(),this.dialogData=t,this.dialogRef=r,this.snackBar=D,this.hostClass="dialog-component",this.uploading$=new u.X(!1),this.files$=new u.X([]),this.result$=new u.X(void 0),this.FileUploadMessageTypes=v.D}ngOnInit(){this.subscription.add(this.files$.subscribe(()=>{void 0!==this.result$.value&&this.result$.next(void 0)})),null!=this.dialogData.files&&this.filesDropped(this.dialogData.files),this.viewModel$=(0,p.a)([this.uploading$,this.files$,this.result$]).pipe((0,f.U)(([t,r,D])=>({uploading:t,files:r,result:D})))}ngOnDestroy(){this.uploading$.complete(),this.files$.complete(),this.result$.complete(),super.ngOnDestroy()}closeDialog(t){this.dialogRef.close(t)}filesDropped(t){this.setFiles(t),this.upload()}filesChanged(t){const D=Array.from(t.target.files);this.setFiles(D)}upload(){this.uploading$.next(!0),this.subscription.add(this.dialogData.upload$(this.files$.value).pipe((0,h.q)(1)).subscribe({next:t=>{this.uploading$.next(!1),this.result$.next(t)},error:()=>{this.uploading$.next(!1),this.result$.next(void 0),this.snackBar.open("Upload failed. Please check console for more information",void 0,{duration:3e3})}}))}setFiles(t){this.dialogData.multiple||(t=t.slice(0,1)),this.files$.next(t)}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(a.WI),e.Y36(a.so),e.Y36(i.ux))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-file-upload-dialog"]],hostVars:1,hostBindings:function(t,r){2&t&&e.Ikx("className",r.hostClass)},features:[e.qOj],decls:2,vars:3,consts:[["appDragAndDrop","",3,"allowedFileTypes","filesDropped",4,"ngIf"],["appDragAndDrop","",3,"allowedFileTypes","filesDropped"],["mat-dialog-title",""],[1,"dialog-title-box",3,"innerHtml"],["mode","indeterminate","diameter","20","color","accent",4,"ngIf"],[1,"dialog-description",3,"innerHtml"],["mat-raised-button","","tippy","Open file browser",3,"disabled","click"],[4,"ngIf"],[4,"ngFor","ngForOf"],["type","file","multiple","",1,"hide",3,"change"],["fileInput",""],["class","dialog-component-content fancy-scrollbar-light result-container",4,"ngIf"],[1,"dialog-component-actions"],["mode","indeterminate","diameter","20","color","accent"],[1,"dialog-component-content","fancy-scrollbar-light","result-container"],["class","sxc-message sxc-message-info",4,"ngIf"],["class","sxc-message sxc-message-error",4,"ngIf"],["class","sxc-message",3,"ngClass",4,"ngFor","ngForOf"],[1,"sxc-message","sxc-message-info"],[1,"sxc-message","sxc-message-error"],[1,"sxc-message",3,"ngClass"],["mat-raised-button","",3,"click"],["mat-raised-button","","color","accent",3,"disabled","click"],["mat-raised-button","","color","accent",3,"click"]],template:function(t,r){1&t&&(e.YNc(0,L,17,14,"div",0),e.ALo(1,"async")),2&t&&e.Q6J("ngIf",e.lcZ(1,1,r.viewModel$))},directives:[n.O5,d.z,a.uh,l.Ou,g.lW,C.$,n.sg,n.mk],pipes:[n.Ov,E.z],styles:[".result-container[_ngcontent-%COMP%]{margin-top:16px}"]}),o})()},2305:(T,m,s)=>{s.d(m,{D:()=>a});const a={Warning:0,Success:1,Error:2}},3889:(T,m,s)=>{s.d(m,{D:()=>u.D,U:()=>a.U});var a=s(9262),u=s(2305)},5982:(T,m,s)=>{s.d(m,{z:()=>h});var a=s(3184),u=s(3280),p=s(5904),f=s(2528);let h=(()=>{class c extends p.f{constructor(e,i,n){super(),this.zone=i,this.snackBar=n,this.markStyle="outline",this.allowedFileTypes="",this.filesDropped=new a.vpe,this.dropAreaClass="eav-droparea",this.dragClass="eav-dragover",this.timeouts=[],this.element=e.nativeElement}ngOnInit(){this.markStyleClass=`eav-droparea-${this.markStyle}`,this.element.classList.add(this.dropAreaClass,this.markStyleClass),this.zone.runOutsideAngular(()=>{this.subscription.add((0,u.R)(this.element,"dragover").subscribe(e=>{e.preventDefault(),e.stopPropagation(),this.clearTimeouts(),this.element.classList.add(this.dragClass)})),this.subscription.add((0,u.R)(this.element,"dragleave").subscribe(e=>{e.preventDefault(),e.stopPropagation(),this.timeouts.push(window.setTimeout(()=>{this.element.classList.remove(this.dragClass)},50))}))})}ngOnDestroy(){this.clearTimeouts(),this.element.classList.remove(this.dropAreaClass,this.markStyleClass,this.dragClass),super.ngOnDestroy()}onDrop(e){e.preventDefault(),e.stopPropagation(),this.clearTimeouts(),this.element.classList.remove(this.dragClass);let n=Array.from(e.dataTransfer.files);n=this.filterTypes(n,this.allowedFileTypes),n.length>0&&this.filesDropped.emit(n)}clearTimeouts(){for(const e of this.timeouts)clearTimeout(e);this.timeouts=[]}filterTypes(e,i){if(""===i)return e;const n=i.split(",").map(l=>l.toLocaleLowerCase()),d=e.filter(l=>{const g=l.name.lastIndexOf(".");if(g<=0)return!1;const C=l.name.substring(g+1).toLocaleLowerCase();return n.includes(C)});if(e.length!==d.length){const l=this.allowedFileTypes.replace(/\,/g,", ");this.snackBar.open(d.length?"Some files were filtered out. This drop location only accepts file types: "+l:"This drop location only accepts file types: "+l,null,{duration:5e3})}return d}}return c.\u0275fac=function(e){return new(e||c)(a.Y36(a.SBq),a.Y36(a.R0b),a.Y36(f.ux))},c.\u0275dir=a.lG2({type:c,selectors:[["","appDragAndDrop",""]],hostBindings:function(e,i){1&e&&a.NdJ("drop",function(d){return i.onDrop(d)})},inputs:{markStyle:"markStyle",allowedFileTypes:"allowedFileTypes"},outputs:{filesDropped:"filesDropped"},features:[a.qOj]}),c})()},1555:(T,m,s)=>{s.d(m,{z:()=>p});var a=s(3184),u=s(318);let p=(()=>{class f{constructor(c){this.sanitizer=c}transform(c){return this.sanitizer.bypassSecurityTrustHtml(c)}}return f.\u0275fac=function(c){return new(c||f)(a.Y36(u.H7,16))},f.\u0275pipe=a.Yjl({name:"safeHtml",type:f,pure:!0}),f})()}}]);
//# sourceMappingURL=https://sources.2sxc.org/16.07.00/dist/ng-edit/projects_eav-ui_src_app_import-app_services_import-app_service_ts-projects_eav-ui_src_app_sha-1ab7ba.c271265db2044bdc.js.map