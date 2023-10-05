"use strict";(self.webpackChunkeav_ui=self.webpackChunkeav_ui||[]).push([["projects_eav-ui_src_app_permissions_permissions_component_ts"],{61:(P,u,e)=>{e.r(u),e.d(u,{PermissionsComponent:()=>R});var p=e(6317),i=e(6562),l=e(635),h=e(60),v=e(2087),C=e(4153),c=e(941),y=e(2225),t=e(3184),m=e(1130),a=e(2376),o=e(5590);let g=(()=>{class d{agInit(s){this.params=s}refresh(s){return!0}deletePermission(){this.params.onDelete(this.params.data)}}return d.\u0275fac=function(s){return new(s||d)},d.\u0275cmp=t.Xpm({type:d,selectors:[["app-permissions-actions"]],decls:4,vars:0,consts:[[1,"actions-component"],["matRipple","","tippy","Delete",1,"like-button","highlight",3,"click"]],template:function(s,n){1&s&&(t.TgZ(0,"div",0)(1,"div",1),t.NdJ("click",function(){return n.deletePermission()}),t.TgZ(2,"mat-icon"),t._uU(3,"delete"),t.qZA()()())},directives:[m.wG,a.$,o.Hw],styles:[""]}),d})();var D=e(2023),T=e(2977),M=e(5758),x=e(2528),E=e(6362),I=e(7317),b=e(4680);function A(d,f){if(1&d){const s=t.EpF();t.TgZ(0,"div",1)(1,"div",2)(2,"div",3)(3,"div"),t._uU(4,"Permissions"),t.qZA(),t.TgZ(5,"button",4),t.NdJ("click",function(){return t.CHM(s),t.oxw().closeDialog()}),t.TgZ(6,"mat-icon"),t._uU(7,"close"),t.qZA()()()(),t._UZ(8,"router-outlet"),t.TgZ(9,"div",5),t._UZ(10,"ag-grid-angular",6)(11,"div",7),t.TgZ(12,"button",8),t.NdJ("click",function(){return t.CHM(s),t.oxw().editPermission(null)}),t.TgZ(13,"mat-icon"),t._uU(14,"add"),t.qZA()()()()}if(2&d){const s=f.ngIf,n=t.oxw();t.xp6(10),t.Q6J("rowData",s.permissions)("gridOptions",n.gridOptions)}}let R=(()=>{class d extends h.H{constructor(s,n,r,O,_){super(s,n),this.router=s,this.route=n,this.dialogRef=r,this.permissionsService=O,this.snackBar=_,this.permissions$=new p.X(void 0),this.gridOptions=this.buildGridOptions(),this.targetType=parseInt(this.route.snapshot.paramMap.get("targetType"),10),this.keyType=this.route.snapshot.paramMap.get("keyType"),this.key=this.route.snapshot.paramMap.get("key"),this.prefills={[c.Zy.metadata.language.targetType]:{PermissionType:"language"}}}ngOnInit(){this.fetchPermissions(),this.subscription.add(this.refreshOnChildClosedShallow().subscribe(()=>{this.fetchPermissions()})),this.viewModel$=(0,i.a)([this.permissions$]).pipe((0,l.U)(([s])=>({permissions:s})))}ngOnDestroy(){this.permissions$.complete(),super.ngOnDestroy()}closeDialog(){this.dialogRef.close()}fetchPermissions(){this.permissionsService.getAll(this.targetType,this.keyType,this.key).subscribe(s=>{this.permissions$.next(s)})}editPermission(s){var n,r;let O;O=null==s?{items:[Object.assign({ContentTypeName:c.Zy.contentTypes.permissions,For:Object.assign(Object.assign(Object.assign({Target:null!==(r=null===(n=Object.values(c.Zy.metadata).find(U=>U.targetType===this.targetType))||void 0===n?void 0:n.target)&&void 0!==r?r:this.targetType.toString(),TargetType:this.targetType},this.keyType===c.Zy.keyTypes.guid&&{Guid:this.key}),this.keyType===c.Zy.keyTypes.number&&{Number:parseInt(this.key,10)}),this.keyType===c.Zy.keyTypes.string&&{String:this.key})},this.prefills[this.targetType]&&{Prefill:this.prefills[this.targetType]})]}:{items:[{EntityId:s.Id}]};const _=(0,y.f)(O);this.router.navigate([`edit/${_}`],{relativeTo:this.route})}deletePermission(s){!confirm(`Delete '${s.Title}' (${s.Id})?`)||(this.snackBar.open("Deleting..."),this.permissionsService.delete(s.Id).subscribe(()=>{this.snackBar.open("Deleted",null,{duration:2e3}),this.fetchPermissions()}))}buildGridOptions(){return Object.assign(Object.assign({},C.f),{columnDefs:[{headerName:"ID",field:"Id",width:70,headerClass:"dense",cellClass:"id-action no-padding no-outline".split(" "),sortable:!0,filter:"agNumberColumnFilter",valueGetter:n=>n.data.Id,cellRenderer:v.m,cellRendererParams:{tooltipGetter:r=>`ID: ${r.Id}\nGUID: ${r.Guid}`}},{field:"Name",flex:2,minWidth:250,cellClass:"primary-action highlight".split(" "),sortable:!0,sort:"asc",filter:"agTextColumnFilter",onCellClicked:n=>{this.editPermission(n.data)},valueGetter:n=>n.data.Title},{field:"Identity",flex:2,minWidth:250,cellClass:"no-outline",sortable:!0,filter:"agTextColumnFilter",valueGetter:n=>n.data.Identity},{field:"Condition",flex:2,minWidth:250,cellClass:"no-outline",sortable:!0,filter:"agTextColumnFilter",valueGetter:n=>n.data.Condition},{field:"Grant",width:70,headerClass:"dense",cellClass:"no-outline",sortable:!0,filter:"agTextColumnFilter",valueGetter:n=>n.data.Grant},{width:42,cellClass:"secondary-action no-padding".split(" "),pinned:"right",cellRenderer:g,cellRendererParams:(()=>({onDelete:r=>this.deletePermission(r)}))()}]})}}return d.\u0275fac=function(s){return new(s||d)(t.Y36(T.F0),t.Y36(T.gz),t.Y36(M.so),t.Y36(D.q),t.Y36(x.ux))},d.\u0275cmp=t.Xpm({type:d,selectors:[["app-permissions"]],features:[t.qOj],decls:2,vars:3,consts:[["class","nav-component-wrapper",4,"ngIf"],[1,"nav-component-wrapper"],["mat-dialog-title",""],[1,"dialog-title-box"],["mat-icon-button","","tippy","Close dialog",3,"click"],[1,"grid-wrapper"],[1,"ag-theme-material",3,"rowData","gridOptions"],[1,"grid-more-actions-box"],["mat-fab","","mat-elevation-z24","","tippy","Create a new permission",1,"grid-fab",3,"click"]],template:function(s,n){1&s&&(t.YNc(0,A,15,2,"div",0),t.ALo(1,"async")),2&s&&t.Q6J("ngIf",t.lcZ(1,1,n.viewModel$))},directives:[E.O5,M.uh,I.lW,a.$,o.Hw,T.lC,b.N8],pipes:[E.Ov],styles:[""]}),d})()},60:(P,u,e)=>{e.d(u,{H:()=>y});var p=e(2977),i=e(116),l=e(4874),h=e(635),v=e(679),C=e(5904),c=e(3184);let y=(()=>{class t extends C.f{constructor(a,o){super(),this.router=a,this.route=o}ngOnDestroy(){super.ngOnDestroy()}refreshOnChildClosedDeep(){return this.router.events.pipe((0,i.h)(a=>a instanceof p.m2),(0,l.O)(!!this.route.snapshot.firstChild.firstChild),(0,h.U)(()=>!!this.route.snapshot.firstChild.firstChild),(0,v.G)(),(0,i.h)(([a,o])=>a&&!o))}refreshOnChildClosedShallow(){return this.router.events.pipe((0,i.h)(a=>a instanceof p.m2),(0,l.O)(!!this.route.snapshot.firstChild),(0,h.U)(()=>!!this.route.snapshot.firstChild),(0,v.G)(),(0,i.h)(([a,o])=>a&&!o))}}return t.\u0275fac=function(a){return new(a||t)(c.Y36(p.F0),c.Y36(p.gz))},t.\u0275dir=c.lG2({type:t,features:[c.qOj]}),t})()},2087:(P,u,e)=>{e.d(u,{m:()=>t});var p=e(9673),i=e(3184),l=e(2528),h=e(1130),v=e(2376),C=e(6362),c=e(5590);const y=function(m,a){return{"align-start":m,"align-end":a}};let t=(()=>{class m{constructor(o){this.snackBar=o}agInit(o){this.id=o.value,this.align="number"==typeof this.id?"end":"start",this.tooltip=o.tooltipGetter(o.data)}refresh(o){return!0}copy(){(0,p.v)(this.tooltip),this.snackBar.open("Copied to clipboard",null,{duration:2e3})}}return m.\u0275fac=function(o){return new(o||m)(i.Y36(l.ux))},m.\u0275cmp=i.Xpm({type:m,selectors:[["app-id-field"]],decls:5,vars:6,consts:[["matRipple","",1,"id-box","highlight",3,"tippy","ngClass","click"],[1,"id"],[1,"icon"]],template:function(o,g){1&o&&(i.TgZ(0,"div",0),i.NdJ("click",function(){return g.copy()}),i.TgZ(1,"span",1),i._uU(2),i.qZA(),i.TgZ(3,"mat-icon",2),i._uU(4,"file_copy"),i.qZA()()),2&o&&(i.Q6J("tippy",g.tooltip)("ngClass",i.WLB(3,y,"start"===g.align,"end"===g.align)),i.xp6(2),i.Oqu(g.id))},directives:[h.wG,v.$,C.mk,c.Hw],styles:[".id-box[_ngcontent-%COMP%]{padding:0 8px;height:100%;display:flex;align-items:center}.id-box.align-start[_ngcontent-%COMP%]{justify-content:flex-start}.id-box.align-end[_ngcontent-%COMP%]{justify-content:flex-end}.id-box[_ngcontent-%COMP%]   .id[_ngcontent-%COMP%]{max-width:100%;text-overflow:ellipsis;overflow:hidden}.id-box[_ngcontent-%COMP%]:hover{text-decoration:none}.id-box[_ngcontent-%COMP%]:hover   .id[_ngcontent-%COMP%]{display:none}.id-box[_ngcontent-%COMP%]:not(:hover)   .icon[_ngcontent-%COMP%]{display:none}"]}),m})()},4153:(P,u,e)=>{e.d(u,{f:()=>p});const p={accentedSort:!0,animateRows:!0,enableCellTextSelection:!0,headerHeight:32,suppressScrollOnNewData:!0,valueCache:!0,defaultColDef:{filterParams:{newRowsAction:"keep"}},tooltipShowDelay:0,tooltipHideDelay:1e5,suppressMovableColumns:!0}},9673:(P,u,e)=>{function p(i){const l=document.createElement("textarea");l.value=i,l.setAttribute("readonly",""),l.style.position="absolute",l.style.left="-9999px",document.body.appendChild(l);const h=document.getSelection().rangeCount>0&&document.getSelection().getRangeAt(0);l.select(),document.execCommand("copy"),document.body.removeChild(l),h&&(document.getSelection().removeAllRanges(),document.getSelection().addRange(h))}e.d(u,{v:()=>p})}}]);
//# sourceMappingURL=https://sources.2sxc.org/16.07.00/dist/ng-edit/projects_eav-ui_src_app_permissions_permissions_component_ts.afd9f9689e41dd67.js.map