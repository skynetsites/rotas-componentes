import{a as l,j as t}from"./index-CbUxugv8.js";import{C as y}from"./card.esm-lOR1Zp78.js";import{u as b,P as j,C as N,a as z,c as P,S as D}from"./App-qOfE76ne.js";var C={root:function(n){var e=n.props,a=n.horizontal,r=n.vertical;return P("p-divider p-component p-divider-".concat(e.layout," p-divider-").concat(e.type),{"p-divider-left":a&&(!e.align||e.align==="left"),"p-divider-right":a&&e.align==="right","p-divider-center":a&&e.align==="center"||r&&(!e.align||e.align==="center"),"p-divider-top":r&&e.align==="top","p-divider-bottom":r&&e.align==="bottom"},e.className)},content:"p-divider-content"},E=`
@layer primereact {
    .p-divider-horizontal {
        display: flex;
        width: 100%;
        position: relative;
        align-items: center;
    }
    
    .p-divider-horizontal:before {
        position: absolute;
        display: block;
        top: 50%;
        left: 0;
        width: 100%;
        content: "";
    }
    
    .p-divider-horizontal.p-divider-left {
        justify-content: flex-start;
    }
    
    .p-divider-horizontal.p-divider-right {
        justify-content: flex-end;
    }
    
    .p-divider-horizontal.p-divider-center {
        justify-content: center;
    }
    
    .p-divider-content {
        z-index: 1;
    }
    
    .p-divider-vertical {
        min-height: 100%;
        margin: 0 1rem;
        display: flex;
        position: relative;
        justify-content: center;
    }
    
    .p-divider-vertical:before {
        position: absolute;
        display: block;
        top: 0;
        left: 50%;
        height: 100%;
        content: "";
    }
    
    .p-divider-vertical.p-divider-top {
        align-items: flex-start;
    }
    
    .p-divider-vertical.p-divider-center {
        align-items: center;
    }
    
    .p-divider-vertical.p-divider-bottom {
        align-items: flex-end;
    }
    
    .p-divider-solid.p-divider-horizontal:before {
        border-top-style: solid;
    }
    
    .p-divider-solid.p-divider-vertical:before {
        border-left-style: solid;
    }
    
    .p-divider-dashed.p-divider-horizontal:before {
        border-top-style: dashed;
    }
    
    .p-divider-dashed.p-divider-vertical:before {
        border-left-style: dashed;
    }
    
    .p-divider-dotted.p-divider-horizontal:before {
        border-top-style: dotted;
    }
    
    .p-divider-dotted.p-divider-horizontal:before {
        border-left-style: dotted;
    }
}
`,w={root:function(n){var e=n.props;return{justifyContent:e.layout==="horizontal"?e.align==="center"||e.align===null?"center":e.align==="left"?"flex-start":e.align==="right"?"flex-end":null:null,alignItems:e.layout==="vertical"?e.align==="center"||e.align===null?"center":e.align==="top"?"flex-start":e.align==="bottom"?"flex-end":null:null}}},s=N.extend({defaultProps:{__TYPE:"Divider",align:null,layout:"horizontal",type:"solid",style:null,className:null,children:void 0},css:{classes:C,styles:E,inlineStyles:w}}),v=l.forwardRef(function(i,n){var e=b(),a=l.useContext(j),r=s.getProps(i,a),o=s.setMetaData({props:r}),d=o.ptm,c=o.cx,m=o.sx,u=o.isUnstyled;z(s.css.styles,u,{name:"divider"});var p=l.useRef(null),x=r.layout==="horizontal",h=r.layout==="vertical";l.useImperativeHandle(n,function(){return{props:r,getElement:function(){return p.current}}});var f=e({ref:p,style:m("root"),className:c("root",{horizontal:x,vertical:h}),"aria-orientation":r.layout,role:"separator"},s.getOtherProps(r),d("root")),g=e({className:c("content")},d("content"));return l.createElement("div",f,l.createElement("div",g,r.children))});v.displayName="Divider";const k=()=>{const i=D.aboutus;return t.jsxs("div",{className:"max-w-full mx-auto",children:[t.jsxs("div",{className:"flex flex-column align-items-center text-center",children:[t.jsx("h1",{className:"text-5xl text-gray-800 mt-0 mb-4",children:i.title}),t.jsx("p",{className:"text-lg mb-5 xl:w-9 text-gray-700 mt-0",children:i.subtitle})]}),t.jsxs(y,{className:"shadow-2",children:[t.jsx("h2",{className:"text-gray-800 mt-0 mb-2",children:i.ourhistory.title}),i.ourhistory.description.map((n,e)=>t.jsx("p",{className:"text-gray-700",children:n},e)),t.jsx(v,{})," ",t.jsx("h2",{className:"text-gray-800",children:i.ourvalues.title}),t.jsx("p",{className:"text-gray-700",children:i.ourvalues.description}),t.jsx("div",{className:"grid",children:i.ourvalues.values.map((n,e)=>t.jsxs("div",{className:"col-12 md:col-4",children:[t.jsx("h3",{className:"text-2xl text-gray-800",children:n.title}),t.jsx("p",{className:"text-gray-700 m-0",children:n.description})]},e))})]})]})};export{k as default};
