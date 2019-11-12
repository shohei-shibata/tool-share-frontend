(window["webpackJsonptool-share-frontend"]=window["webpackJsonptool-share-frontend"]||[]).push([[0],{19:function(e,t,n){e.exports=n(31)},24:function(e,t,n){},25:function(e,t,n){},31:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(16),o=n.n(l),u=(n(24),n(25),n(7)),c=n(6),i={_id:"123",name:"John",ownTool:["1","2","3"],groupBelong:["9","8","7"]},s=r.a.createContext(),m=function(e){var t={user:i};return r.a.createElement(s.Provider,Object.assign({value:{data:t,login:function(){},logout:function(){},register:function(){}}},e))},d=r.a.createContext(),f=function(e){var t=function(){var e=r.a.useContext(s);if(void 0===e)throw new Error("useAuth must be used within a AuthProvider");return e}().data.user;return r.a.createElement(d.Provider,Object.assign({value:t},e))},E=function(){var e=r.a.useContext(d);if(void 0===e)throw new Error("useUser must be used within a UserProvider");return e};var h=function(){return r.a.createElement("h2",null,"Home")};var v=function(){return r.a.createElement("h2",null,"About")},g=n(4),p=function(e){return e.tools.map((function(e){return r.a.createElement("li",{key:e._id},e.name," (",e.owner.name,")")}))},b=function(e){var t=Object(a.useState)("");Object(g.a)(t,1)[0];return r.a.createElement("input",Object.assign({type:"text"},e))},w=function(e){var t=e.value,n=e.text,a=e.onChange,l=e.checked;return r.a.createElement("div",null,r.a.createElement("label",null,r.a.createElement("input",{type:"checkbox",value:t,onChange:a,checked:l}),n.toString()))},y={filterToolsByKeyword:function(e,t){if("object"===typeof t&&!(t.length<1))return e.length>0?t.filter((function(t){return O(e,t.name)})):t},filterToolsByGroups:function(e,t){return t.filter((function(t){var n=!1;return e.forEach((function(e){t.accessibleGroups.includes(e)&&(n=!0)})),n}))}},O=function(e,t){var n=new RegExp(e);return e.length>0&&n.test(t)},_=n(10),T=[{_id:"7",name:"ftech friends",members:["123"],toolList:["1","2","3"]},{_id:"8",name:"group 2",members:["124"],toolList:["3","4","5"]},{_id:"9",name:"group 3",members:["123","124"],toolList:["1","2","5"]}],j=[{_id:"1",name:"hammer",owner:{_id:"124",name:"John"},accessibleGroups:["9","7"],note:"hit the nail on the head"},{_id:"2",name:"aerator",owner:{_id:"125",name:"Matt"},accessibleGroups:["9"],note:"put holes in ground"},{_id:"3",name:"powerwash",owner:{_id:"126",name:"Steve"},accessibleGroups:["8","7"],note:"water sold separated"}],k={getGroupsByIds:function(e){return T},getToolsByGroupIds:function(e){return j}},G=r.a.createContext(),x=function(e){var t=E(),n=Object(a.useState)(k.getToolsByGroupIds(t.groupBelong)),l=Object(g.a)(n,2),o=l[0],u=l[1];return r.a.createElement(G.Provider,Object.assign({value:{data:o,addTool:function(e){e.name.length<1?console.log("New tool name must be assigned"):o.filter((function(t){return t.name===e.name})).length>0?console.log("Tool name already exists"):(e._id=(1e3*Math.random()).toFixed(0),u([].concat(Object(_.a)(o),[e])))},removeTool:function(e){console.log("removeTool",e),u(o.filter((function(t){return t._id!==e})))}}},e))},S=function(){var e=r.a.useContext(G);if(void 0===e)throw new Error("useUserTools must be used within a UserToolsProvider");return e},C=r.a.createContext(),B=function(e){var t=E(),n=k.getGroupsByIds(t.GroupsBelong);return r.a.createElement(C.Provider,Object.assign({value:n},e))},N=function(){var e=r.a.useContext(C);if(void 0===e)throw new Error("useUserGroups must be used within a UserGroupsProvider");return e},A=function(){var e=S().data,t=N(),n=t.map((function(e){return{data:e,checked:!0}})),l=Object(a.useState)(""),o=Object(g.a)(l,2),u=o[0],c=o[1],i=Object(a.useState)(e),s=Object(g.a)(i,2),m=s[0],d=s[1],f=Object(a.useState)(n),E=Object(g.a)(f,2),h=E[0],v=E[1],O=function(t){var n=h.map((function(e){var n=Object.assign({},e);return e.data._id.toString()===t.target.value&&(n.checked=t.target.checked),n}));v(n);var a=n.filter((function(e){return e.checked})).map((function(e){return e.data._id}));d(y.filterToolsByGroups(a,e))},_=h.map((function(e){return r.a.createElement("li",{key:e.data._id},r.a.createElement(w,{value:e.data._id,text:e.data.name,onChange:O,checked:e.checked}))}));return r.a.createElement("div",{id:"tool-search"},r.a.createElement("p",null,JSON.stringify(e)),r.a.createElement("p",null,JSON.stringify(t)),r.a.createElement("form",{onSubmit:function(e){e.preventDefault()}},r.a.createElement(b,{"data-testid":"search-input",id:"search",name:"search-input",placeholder:"Type in a tool name",value:u,onChange:function(t){var n=t.target.value;c(n),d(y.filterToolsByKeyword(n,e))},autoFocus:!0}),r.a.createElement("h3",null,"My Groups:"),r.a.createElement("ul",null,h.length>0?_:r.a.createElement("li",null,"No Groups!"))),r.a.createElement("div",null,r.a.createElement("h3",null,"Search Results:"),r.a.createElement("ul",null,m&&m.length>0?r.a.createElement(p,{tools:m}):r.a.createElement("li",null,"No Matches!"))))};var J=function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"Search"),r.a.createElement(A,null))},M=function(e){return r.a.createElement("button",e,e.value)};var P=function(){var e=S(),t=e.data,n=e.addTool,l=e.removeTool,o=t,u=E(),c=N(),i={_id:"",name:"",owner:{_id:u._id,name:u.name},accessibleGroups:u.groupBelong,note:""},s=Object(a.useState)(i),m=Object(g.a)(s,2),d=m[0],f=m[1],h=function(e){var t=Object.assign({},d);t[e.target.name]=e.target.value,f(t)},v=function(e){var t=Object(_.a)(d.accessibleGroups).indexOf(e.target.value);if(e.target.checked)if(t>=0)console.log("already exists");else{var n=Object.assign({},d);n.accessibleGroups.push(e.target.value),f(n)}else if(t>=0){var a=Object.assign({},d);a.accessibleGroups.splice(t,1),f(a)}else console.log("group id not found")},p=function(e){var t=e.target.innerText,n="Are you sure you want to delete ".concat(t,"?");if(window.confirm(n)){var a=o.filter((function(e){return e.name===t}));1===a.length?l(a[0]._id):a.length<0?console.log("Remove Tool: no entries found"):console.log("Remove Tool: more than one entries found")}};return r.a.createElement("div",null,r.a.createElement("h2",null,"My Tools"),r.a.createElement("ul",null,o.map((function(e){return r.a.createElement("li",{key:e._id},e.name)}))),r.a.createElement("h2",null,"Add a new Tool"),r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),n(d),f(i)}},r.a.createElement(b,{placeholder:"Name",name:"name",value:d.name,onChange:h}),r.a.createElement(b,{placeholder:"Note",name:"note",value:d.note,onChange:h}),r.a.createElement("ul",null,c.map((function(e){return r.a.createElement(w,{key:e._id,value:e._id,text:e.name,onChange:v,checked:(t=e._id,d.accessibleGroups.indexOf(t)>=0)});var t}))),r.a.createElement(M,{value:"Add a Tool",type:"submit"})),r.a.createElement("h2",null,"Delete a Tool"),r.a.createElement("ul",null,o.map((function(e){return r.a.createElement("li",{key:e._id,onClick:p},e.name)}))))};var U=function(){var e=N();return r.a.createElement("div",null,r.a.createElement("h2",null,"My Groups"),r.a.createElement("p",null,JSON.stringify(e)),r.a.createElement("ul",null,e.map((function(e){return r.a.createElement("li",{key:e._id},e.name)}))))};var I=function(){return r.a.createElement("h2",null,"Settings")};var R=function(){var e=E();return r.a.createElement(u.a,null,r.a.createElement("div",null,r.a.createElement("h1",null,"Tools Sharing App"),r.a.createElement("nav",null,r.a.createElement("ul",{className:"nav-links"},r.a.createElement("li",null,r.a.createElement(u.b,{to:"/"},"Home")),r.a.createElement("li",null,r.a.createElement(u.b,{to:"/about"},"About")),r.a.createElement("li",null,r.a.createElement(u.b,{to:"/search"},"Search")),r.a.createElement("li",null,r.a.createElement(u.b,{to:"/my-tools"},"My Tools")),r.a.createElement("li",null,r.a.createElement(u.b,{to:"/my-groups"},"My Groups")),r.a.createElement("li",null,r.a.createElement(u.b,{to:"/settings"},"Settings")))),r.a.createElement("h2",null,"User Info"),r.a.createElement("p",null,JSON.stringify(e)),r.a.createElement(c.c,null,r.a.createElement(c.a,{path:"/about"},r.a.createElement(v,null)),r.a.createElement(c.a,{path:"/search"},r.a.createElement(J,{user:e})),r.a.createElement(c.a,{path:"/my-tools"},r.a.createElement(P,null)),r.a.createElement(c.a,{path:"/my-groups"},r.a.createElement(U,null)),r.a.createElement(c.a,{path:"/settings"},r.a.createElement(I,null)),r.a.createElement(c.a,{path:"/"},r.a.createElement(h,null)))))},D=function(e){var t=e.children;return r.a.createElement(m,null,r.a.createElement(f,null,r.a.createElement(x,null,r.a.createElement(B,null,t))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(D,null,r.a.createElement(R,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[19,1,2]]]);
//# sourceMappingURL=main.ce57c1c1.chunk.js.map