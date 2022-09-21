import{r as O,a as T,j as h,R as V}from"./index.6a0d6cd6.js";function P(e){return e*Math.PI/180}function R(e,t,n){return e>n?n:e<t?t:e}function M(e,t){return t/100*e}function j(e,t){return e+t/2}function D(e,t){var n=P(e);return{dx:t*Math.cos(n),dy:t*Math.sin(n)}}function C(e){return typeof e=="number"}function k(e,t){return typeof e=="function"?e(t):e}function z(e){for(var t=0,n=0;n<e.length;n++)t+=e[n].value;return t}function F(e){for(var t=e.data,n=e.lengthAngle,a=e.totalValue,i=e.paddingAngle,r=e.startAngle,l=a||z(t),u=R(n,-360,360),d=Math.abs(u)===360?t.length:t.length-1,c=Math.abs(i)*Math.sign(n),s=c*d,o=u-s,g=0,b=[],v=0;v<t.length;v++){var A=t[v],y=l===0?0:A.value/l*100,x=M(o,y),f=g+r;g=g+x+c,b.push(Object.assign({percentage:y,startAngle:f,degrees:x},A))}return b}function I(e,t){if(e==null)return{};var n={},a=Object.keys(e),i,r;for(r=0;r<a.length;r++)i=a[r],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function L(e){e.dataEntry,e.dataIndex;var t=I(e,["dataEntry","dataIndex"]);return h("text",{...Object.assign({dominantBaseline:"central"},t)})}function E(e){var t=1e14;return Math.round((e+Number.EPSILON)*t)/t}function N(e){var t=e.labelPosition,n=e.lineWidth,a=e.labelHorizontalShift,i=E(a);if(i===0)return"middle";if(t>100)return i>0?"start":"end";var r=100-n;return t<r?i>0?"end":"start":"middle"}function H(e,t){var n=e(t);return typeof n=="string"||typeof n=="number"?h(L,{...Object.assign({key:"label-"+(t.dataEntry.key||t.dataIndex)},t),children:n}):V.isValidElement(n)?n:null}function K(e,t){return e.map(function(n,a){var i,r=(i=k(t.segmentsShift,a))!=null?i:0,l=M(t.radius,t.labelPosition)+r,u=D(j(n.startAngle,n.degrees),l),d=u.dx,c=u.dy,s={x:t.center[0],y:t.center[1],dx:d,dy:c,textAnchor:N({labelPosition:t.labelPosition,lineWidth:t.lineWidth,labelHorizontalShift:d}),dataEntry:n,dataIndex:a,style:k(t.labelStyle,a)};return t.label&&H(t.label,s)})}var X=function(t,n,a,i,r){var l=r-i;if(l===0)return[];var u=a*Math.cos(i)+t,d=a*Math.sin(i)+n,c=a*Math.cos(r)+t,s=a*Math.sin(r)+n,o=Math.abs(l)<=Math.PI?"0":"1",g=l<0?"0":"1";return[["M",u,d],["A",a,a,0,o,g,c,s]]},Y=X;function $(e,t,n,a,i){var r=R(a,-359.999,359.999);return Y(e,t,i,P(n),P(n+r)).map(function(l){return l.join(" ")}).join(" ")}function W(e){var t=e.cx,n=e.cy,a=e.lengthAngle,i=e.lineWidth,r=e.radius,l=e.shift,u=l===void 0?0:l,d=e.reveal,c=e.rounded,s=e.startAngle,o=e.title,g=I(e,["cx","cy","lengthAngle","lineWidth","radius","shift","reveal","rounded","startAngle","title"]),b=r-i/2,v=D(j(s,a),u),A=v.dx,y=v.dy,x=$(t+A,n+y,s,a,b),f,S;if(C(d)){var B=P(b)*a;f=Math.abs(B),S=f-M(f,d)}return h("path",{...Object.assign({d:x,fill:"none",strokeWidth:i,strokeDasharray:f,strokeDashoffset:S,strokeLinecap:c?"round":void 0},g),children:o&&h("title",{children:o})})}function q(e,t,n){var a="stroke-dashoffset "+e+"ms "+t;return n&&n.transition&&(a=a+","+n.transition),{transition:a}}function G(e){return e.animate&&!C(e.reveal)?100:e.reveal}function m(e,t){return e&&function(n){e(n,t)}}function J(e,t,n){var a=n!=null?n:G(t),i=t.radius,r=t.center,l=r[0],u=r[1],d=M(i,t.lineWidth),c=e.map(function(s,o){var g=k(t.segmentsStyle,o);return h(W,{cx:l,cy:u,lengthAngle:s.degrees,lineWidth:d,radius:i,rounded:t.rounded,reveal:a,shift:k(t.segmentsShift,o),startAngle:s.startAngle,title:s.title,style:Object.assign({},g,t.animate&&q(t.animationDuration,t.animationEasing,g)),stroke:s.color,tabIndex:t.segmentsTabIndex,onBlur:m(t.onBlur,o),onClick:m(t.onClick,o),onFocus:m(t.onFocus,o),onKeyDown:m(t.onKeyDown,o),onMouseOver:m(t.onMouseOver,o),onMouseOut:m(t.onMouseOut,o)},s.key||o)});return t.background&&c.unshift(h(W,{cx:l,cy:u,lengthAngle:t.lengthAngle,lineWidth:d,radius:i,rounded:t.rounded,startAngle:t.startAngle,stroke:t.background},"bg")),c}var Q={animationDuration:500,animationEasing:"ease-out",center:[50,50],data:[],labelPosition:50,lengthAngle:360,lineWidth:100,paddingAngle:0,radius:50,startAngle:0,viewBoxSize:[100,100]};function w(e){var t=O.exports.useState(e.animate?0:null),n=t[0],a=t[1];O.exports.useEffect(function(){if(e.animate)return r();function r(){var l,u;return l=setTimeout(function(){l=null,u=requestAnimationFrame(function(){u=null,a(null)})}),function(){l&&clearTimeout(l),u&&cancelAnimationFrame(u)}}},[]);var i=F(e);return T("svg",{viewBox:"0 0 "+e.viewBoxSize[0]+" "+e.viewBoxSize[1],width:"100%",height:"100%",className:e.className,style:e.style,children:[J(i,e,n),e.label&&K(i,e),e.children]})}w.defaultProps=Q;const Z=({data:e})=>(console.log(e),h(w,{animate:!0,data:e}));export{Z as default};
