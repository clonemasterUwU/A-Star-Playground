(this.webpackJsonpplayground=this.webpackJsonpplayground||[]).push([[0],{71:function(t,e,n){},74:function(t,e,n){},79:function(t,e,n){"use strict";n.r(e);var r=n(2),i=n(0),c=n.n(i),a=n(14),s=n.n(a),o=(n(71),n(103)),u=n(104),h=n(5),l=n(15),f=n(6),j=n(18);function b(){var t=Object(h.a)(["\n  width: 25px;\n  height: 25px;\n  border: 1px solid rgb(175, 216, 248);  \n  background-color: ",";\n"]);return b=function(){return t},t}function d(t){var e=t.onRightClick,n=t.nodeInfo,i=n.row,c=n.col,a=n.status,s=n.weight,o=n.isPath,u=t.onMouseUp,h=t.onMouseDown,l=t.onMouseEnter;return Object(r.jsx)(p,{row:i,col:c,weight:s,status:a,isPath:o,onContextMenu:function(t){return e(t,i,c)},onMouseDown:function(t){return h(t,i,c)},onMouseUp:function(t){return u(t,i,c)},onMouseEnter:function(t){return l(t,i,c)}})}var p=f.b.td(b(),(function(t){return 1===t.status?"rgb(248, 131, 131)":2===t.status?"rgb(129, 127, 252)":!0===t.isPath?"rgb(219, 241, 70)":0===t.status?"hsl(0,0%,".concat(100*(15-t.weight)/16,"%)"):""})),O=n(23),v=n(24),x=function(t){return(t+1>>>1)-1},g=function(t){return 1+(t<<1)},m=function(t){return t+1<<1},w=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(t,e){return t>e};Object(O.a)(this,t),this._heap=[],this._comparator=e}return Object(v.a)(t,[{key:"size",value:function(){return this._heap.length}},{key:"isEmpty",value:function(){return 0===this.size()}},{key:"peek",value:function(){return this._heap[0]}},{key:"push",value:function(){for(var t=this,e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return n.forEach((function(e){t._heap.push(e),t._siftUp()})),this.size()}},{key:"pop",value:function(){var t=this.peek(),e=this.size()-1;return e>0&&this._swap(0,e),this._heap.pop(),this._siftDown(),t}},{key:"replace",value:function(t){var e=this.peek();return this._heap[0]=t,this._siftDown(),e}},{key:"_greater",value:function(t,e){return this._comparator(this._heap[t],this._heap[e])}},{key:"_swap",value:function(t,e){var n=[this._heap[e],this._heap[t]];this._heap[t]=n[0],this._heap[e]=n[1]}},{key:"_siftUp",value:function(){for(var t=this.size()-1;t>0&&this._greater(t,x(t));)this._swap(t,x(t)),t=x(t)}},{key:"_siftDown",value:function(){for(var t=0;g(t)<this.size()&&this._greater(g(t),t)||m(t)<this.size()&&this._greater(m(t),t);){var e=m(t)<this.size()&&this._greater(m(t),g(t))?m(t):g(t);this._swap(t,e),t=e}}}]),t}();function y(t){for(var e=t,n=[];e.parent;)n.unshift(e),e=e.parent;return n}var k=function(t){for(var e,n,r=0;r<t.length;r++)for(var i=0;i<t[0].length;i++)t[r][i].f=0,t[r][i].g=0,t[r][i].h=0,t[r][i].isWall=15===t[r][i].weight,t[r][i].visited=!1,t[r][i].closed=!1,t[r][i].parent=null,t[r][i].r=r,t[r][i].c=i,t[r][i].isPath=!1,1===t[r][i].status&&(e=t[r][i]),2===t[r][i].status&&(n=t[r][i]);return{start:e,end:n}},C=function(t,e){return Math.abs(t.r-e.r)+Math.abs(t.c-e.c)},S=[-1,0,1,0,-1],_=function(t,e){for(var n=[],r=0;r<4;r++){var i=t.r+S[r],c=t.c+S[r+1];i>=0&&c>=0&&i<e.length&&c<e[0].length&&n.push(e[i][c])}return n};n(74);function z(t){var e=t.boardSize,n=(t.heuristic,t.start),c=t.setStart,a=Object(i.useState)([]),s=Object(l.a)(a,2),o=s[0],u=s[1],h=Object(i.useState)(0),f=Object(l.a)(h,2),j=f[0],b=f[1],p=Object(i.useState)(null),O=Object(l.a)(p,2),v=O[0],x=O[1];Object(i.useEffect)((function(){u(M(e[0],e[1]))}),[e]),Object(i.useEffect)((function(){n&&(u(function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:C,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:_,r=t.slice(),i=new w((function(t,e){return t.f<e.f})),c=k(r),a=c.start,s=c.end;a.h=e(a,s),a.f=a.h,i.push({r:a.r,c:a.c,f:a.h});for(var o=function(){var t=i.pop(),c=t.r,a=t.c,o=t.f;console.log(c,a,o);var u=r[c][a];if(u===s)return y(u).forEach((function(t){return t.isPath=!0})),{v:r};u.closed||(u.closed=!0,n(u,r).forEach((function(t){t.closed||t.isWall||(t.visited&&u.g+t.weight<t.g?(t.parent=u,t.g=u.g+u.weight,t.f=t.g+t.h,i.push({r:t.r,c:t.c,f:t.f})):t.visited||(t.parent=u,t.g=u.g+t.weight,t.h=e(t,s),t.visited=!0,t.f=t.g+t.h,i.push({r:t.r,c:t.c,f:t.f})))})))};i.size()>0;){var u=o();if("object"===typeof u)return u.v}return r}(o)),c(!1))}),[n,o]);var g=function(t,e,n){t.preventDefault()},m=function(t,e,n){if(t.preventDefault(),0!==o[e][n].status)x([e,n]),b(t.buttons);else switch(t.buttons){case 2:b(2),u(E(o,e,n));break;case 1:b(1),u(F(o,e,n))}c(!0)},S=function(t,e,n){t.preventDefault(),null!==v?0===o[e][n].status&&0!==j&&(u(D(o,v[0],v[1],e,n)),x([e,n]),c(!0)):2===j?(u(E(o,e,n)),c(!0)):1===j&&(u(F(o,e,n)),c(!0))},z=function(t){t.preventDefault(),b(0),x(null)};return Object(r.jsx)("table",{children:Object(r.jsx)("tbody",{children:o.map((function(t,e){return Object(r.jsx)("tr",{className:"row",children:t.map((function(t,e){return Object(r.jsx)(d,{nodeInfo:t,onRightClick:g,onMouseDown:m,onMouseEnter:S,onMouseUp:z},e)}))},e)}))})})}var D=function(t,e,n,r,i){var c=t.slice(),a=t[e][n].status;return c[e][n]=Object(j.a)(Object(j.a)({},t[e][n]),{},{status:0}),c[r][i]=Object(j.a)(Object(j.a)({},t[r][i]),{},{status:a}),c},M=function(t,e){for(var n=[],r=0;r<t;r++){for(var i=[],c=0;c<e;c++)i.push(P(r,c));n.push(i)}return n[0][0].status=1,n[n.length-1][n[0].length-1].status=2,n},P=function(t,e){return{row:t,col:e,weight:1,status:0}},F=function(t,e,n){var r=t.slice(),i=r[e][n];return r[e][n]=Object(j.a)(Object(j.a)({},i),{},{weight:(i.weight+1)%16}),r},E=function(t,e,n){var r=t.slice(),i=r[e][n];return r[e][n]=Object(j.a)(Object(j.a)({},i),{},{weight:15===i.weight?1:15}),r},H=n(58),B=n(99),I=n(106);function U(){var t=Object(h.a)(["\n  width: 300px;\n"]);return U=function(){return t},t}function A(t){var e=t.boardSize,n=t.setBoardSize,i=(t.heuristic,t.setHeuristic,t.setStart);return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(G,{"aria-label":"Column",max:20,min:5,marks:!0,step:1,value:e[0],onChange:function(t,r){return n([r,e[1]])},valueLabelDisplay:"auto",component:"span"}),Object(r.jsx)(B.a,{variant:"contained",onClick:function(){return i(!0)},children:"Start"}),Object(r.jsx)(B.a,{variant:"contained",onClick:function(){return n(Object(H.a)(e))},children:"Reset"})]})}var G=Object(f.b)(I.a)(U());function L(){var t=Object(i.useState)([15,15]),e=Object(l.a)(t,2),n=e[0],c=e[1],a=Object(i.useState)("manhattan"),s=Object(l.a)(a,2),o=s[0],u=s[1],h=Object(i.useState)(!1),f=Object(l.a)(h,2),j=f[0],b=f[1];return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(A,{boardSize:n,setBoardSize:c,heuristic:o,setHeuristic:u,start:j,setStart:b}),Object(r.jsx)(z,{start:j,setStart:b,boardSize:n,heuristic:o})]})}var R=n(40),T=n.n(R);function q(){var t=Object(h.a)(["\n  text-align:center;\n"]);return q=function(){return t},t}function N(){var t=Object(h.a)(["\n  display:flex;\n  flex-direction:column;\n  justify-content:center;\n  text-align:center;\n"]);return N=function(){return t},t}function J(t){var e=t.setChapterStage;return Object(r.jsxs)(W,{children:[Object(r.jsxs)(Y,{children:["A star",Object(r.jsx)("br",{}),"PLAYGROUND"]}),Object(r.jsxs)(B.a,{onClick:function(){return e(1)},children:[Object(r.jsx)("h1",{children:"Start"}),Object(r.jsx)(T.a,{fontSize:"large",color:"action"})]})]})}var W=f.b.div(N()),Y=f.b.h1(q()),K=n(101);function Q(){var t=Object(h.a)(["\n  width:200px;\n  margin-right:100px;\n"]);return Q=function(){return t},t}function V(t){var e=t.onClick;return Object(r.jsxs)(X,{onClick:function(){return e()},children:[Object(r.jsx)("h1",{children:"Next"}),Object(r.jsx)(T.a,{fontSize:"large",color:"action"})]})}var X=Object(f.b)(B.a)(Q()),Z=n(55),$=n.n(Z);function tt(){var t=Object(h.a)(["\n  width:200px;\n  margin-right:100px;\n"]);return tt=function(){return t},t}function et(t){var e=t.onClick;return Object(r.jsxs)(nt,{onClick:function(){return e()},children:[Object(r.jsx)($.a,{fontSize:"large",color:"action"}),Object(r.jsx)("h1",{children:"Back"})]})}var nt=Object(f.b)(B.a)(tt());function rt(){var t=Object(h.a)(["\n  font-size:30px;\n  font-weight:500;\n"]);return rt=function(){return t},t}function it(){var t=Object(h.a)(["\n  display:flex;\n  flex-direction:column;\n  justify-content:center;\n  text-align:center;\n  width:100%;\n"]);return it=function(){return t},t}function ct(t){var e=t.setChapterStage;return Object(r.jsxs)(at,{children:[Object(r.jsx)(st,{children:"Pathfinding applications"}),Object(r.jsxs)(K.a,{container:!0,children:[Object(r.jsxs)(K.a,{item:!0,xs:6,children:[Object(r.jsx)("p",{children:"Game"}),Object(r.jsx)("img",{src:"https://preview.redd.it/fm7002xqszp31.jpg?width=960&crop=smart&auto=webp&s=0b20e2b9d7099d67786cb9a89ceb3dc5450dbc70",alt:"Civ 6 Game",height:400,width:600})]}),Object(r.jsx)(K.a,{item:!0,xs:6,children:"GPS"})]}),Object(r.jsxs)(K.a,{container:!0,direction:"row",justify:"space-between",children:[Object(r.jsx)(et,{onClick:function(){e(0)}}),Object(r.jsx)(V,{onClick:function(){e(2)}})]})]})}var at=f.b.div(it()),st=f.b.div(rt());function ot(){var t=Object(h.a)(["\n  display:flex;\n  flex-direction:column;\n  justify-content:center;\n  text-align:center;\n  width:100%;\n"]);return ot=function(){return t},t}function ut(t){var e=t.setChapterStage;return Object(r.jsx)(ht,{children:Object(r.jsxs)(K.a,{container:!0,direction:"row",justify:"space-between",children:[Object(r.jsx)(et,{onClick:function(){e(1)}}),Object(r.jsx)(V,{onClick:function(){e(3)}})]})})}var ht=f.b.div(ot());function lt(t){var e=Object(i.useState)(0),n=Object(l.a)(e,2),c=n[0],a=n[1];switch(c){case 0:return Object(r.jsx)(J,{setChapterStage:a});case 1:return Object(r.jsx)(ct,{setChapterStage:a});case 2:return Object(r.jsx)(ut,{setChapterStage:a});default:return null}}function ft(){return Object(r.jsxs)("div",{children:["Pathfinding algorithms based on simple ideas: search around with minimal efforts until reaching the destiny.",Object(r.jsx)("br",{}),"A* stands out to be a \u201csmart\u201d one: it played the guessing game like a human.",Object(r.jsx)("br",{}),"This gives the algorithms some time advantages.",Object(r.jsx)("br",{}),"It calculates the value for each step by two components (f(x) = g(x) + h(x)):",Object(r.jsx)("br",{}),"the g(x) stands for the actual effort required to get to x-position.",Object(r.jsx)("br",{}),"The h(x) stands for the estimation efforts required to go from x to the destination."]})}var jt=n(105),bt=n(102);function dt(){var t=Object(h.a)(["\n  width:100%;\n  padding:12px;\n  background:#333;\n  position:absolute;\n  bottom:0;\n  justify-content:center;\n  display:flex;\n"]);return dt=function(){return t},t}function pt(){var t=Object(h.a)(["\n"]);return pt=function(){return t},t}function Ot(){var t=Object(h.a)(["\n  && {\n    margin: 8px;\n  }\n"]);return Ot=function(){return t},t}function vt(t){t.stage;var e=t.setStage;return Object(r.jsxs)(gt,{children:[Object(r.jsx)(xt,{title:"Chapter 0: Introduction",onClick:function(){return e(0)},children:Object(r.jsx)(bt.a,{color:"primary",size:"small",children:"0"})}),Object(r.jsx)(xt,{title:"Chapter 1: Pathfinding Algorithm",onClick:function(){return e(1)},children:Object(r.jsx)(bt.a,{color:"primary",size:"small",children:"1"})}),Object(r.jsx)(xt,{title:"Chapter 2: Heuristic",onClick:function(){return e(2)},children:Object(r.jsx)(bt.a,{color:"primary",size:"small",children:"2"})}),Object(r.jsx)(xt,{title:"Chapter 3: Breaking tie",onClick:function(){return e(3)},children:Object(r.jsx)(bt.a,{color:"primary",size:"small",children:"3"})}),Object(r.jsx)(xt,{title:"Chapter 4: Playground",onClick:function(){return e(4)},children:Object(r.jsx)(bt.a,{color:"primary",size:"small",children:"4"})})]})}var xt=Object(f.b)(jt.a)(Ot()),gt=(Object(f.b)(bt.a)(pt()),f.b.div(dt()));function mt(){var t=Object(h.a)(["\n  font-size:20px;\n  display:flex;\n  justify-content:center;\n  font-family:'Futura Handwritten';\n"]);return mt=function(){return t},t}function wt(){var t=Object(i.useState)(0),e=Object(l.a)(t,2),n=e[0],c=e[1];return Object(r.jsxs)(yt,{children:[0===n?Object(r.jsx)(lt,{}):1===n?Object(r.jsx)(ft,{}):4===n?Object(r.jsx)(L,{}):null,Object(r.jsx)(vt,{setStage:c,stage:n})]})}var yt=f.b.div(mt()),kt=n.p+"static/media/FuturaHandwritten.dbaf4545.ttf",Ct=n(57),St=("url(".concat(kt,") format(truetype)"),Object(Ct.a)({typography:{fontFamily:["Chilanka","cursive"].join(",")}}));function _t(){var t=Object(h.a)(["\n  @font-face {\n    font-family: 'Futura Handwritten';\n    src: url(",") format('truetype'),\n    local('Futura Handwritten');\n    font-weight: 300;\n    font-style: normal;\n  }\n"]);return _t=function(){return t},t}var zt=Object(f.a)(_t(),kt);var Dt=function(){return Object(r.jsxs)(o.a,{theme:St,children:[Object(r.jsx)(u.a,{}),Object(r.jsx)(zt,{}),Object(r.jsx)(wt,{})]})},Mt=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,107)).then((function(e){var n=e.getCLS,r=e.getFID,i=e.getFCP,c=e.getLCP,a=e.getTTFB;n(t),r(t),i(t),c(t),a(t)}))};s.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(Dt,{})}),document.getElementById("root")),Mt()}},[[79,1,2]]]);
//# sourceMappingURL=main.22bd8766.chunk.js.map