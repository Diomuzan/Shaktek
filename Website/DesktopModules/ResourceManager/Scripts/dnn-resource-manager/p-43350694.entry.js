import{r as t,c as e,h as n,H as s}from"./p-82abe0e7.js";const a=":host{display:inline-block}button{border:none;padding:0px;margin:0px;min-width:15px;min-height:15px;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;background-color:transparent;outline:none}svg{height:2em;width:2em;-webkit-transition:all 300ms ease-in-out;transition:all 300ms ease-in-out}button:focus svg,button:hover svg{color:var(--dnn-color-primary)}:host([expanded]) svg{-webkit-transform:rotate(90deg);transform:rotate(90deg)}";const i=class{constructor(n){t(this,n);this.changed=e(this,"changed",7);this.expandText="expand";this.collapseText="collapse";this.expanded=false}handleExpandedChanged(t){this.changed.emit(t)}render(){return n(s,null,n("button",{"aria-label":this.expanded?this.collapseText:this.expandText,onClick:()=>this.expanded=!this.expanded},n("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#000000"},n("path",{d:"M0 0h24v24H0z",fill:"none"}),n("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}))))}static get watchers(){return{expanded:["handleExpandedChanged"]}}};i.style=a;export{i as dnn_chevron};
//# sourceMappingURL=p-43350694.entry.js.map