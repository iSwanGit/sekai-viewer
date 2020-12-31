(this["webpackJsonpsekai-viewer"]=this["webpackJsonpsekai-viewer"]||[]).push([[44],{6022:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var n=r(35),a=r(5969),c=Object(a.a)((function(e){var t;return{header:{fontWeight:"bold"},content:{marginTop:e.spacing(3),marginBottom:e.spacing(3),marginLeft:"auto",marginRight:"auto"},alert:{margin:e.spacing(1,0)},bold:{fontWeight:e.typography.fontWeightBold},avatarProfile:(t={},Object(n.a)(t,e.breakpoints.down("sm"),{height:e.spacing(10),width:e.spacing(10)}),Object(n.a)(t,e.breakpoints.up("md"),{height:e.spacing(20),width:e.spacing(20)}),t),capitalize:{textTransform:"capitalize"}}}))},6034:function(e,t,r){"use strict";r.d(t,"a",(function(){return u}));var n=r(84),a=r.n(n),c=r(100),s=r(86),o=r.n(s),i=r(0);function u(e){var t=Object(i.useMemo)((function(){var t=o.a.create({baseURL:"https://strapi.sekai.best"});return t.interceptors.request.use((function(t){return e&&(t.headers.authorization="Bearer ".concat(e)),t})),t.interceptors.response.use((function(e){return e}),(function(e){throw e.response.data.message?e.id=e.response.data.message[0].messages[0].id:e.id=e.message,e})),t}),[e]);return{postLoginLocal:Object(i.useCallback)(function(){var e=Object(c.a)(a.a.mark((function e(r){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.post("/auth/local",r);case 2:return e.abrupt("return",e.sent.data);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[t]),postRegisterLocal:Object(i.useCallback)(function(){var e=Object(c.a)(a.a.mark((function e(r){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.post("/auth/local/register",r);case 2:return e.abrupt("return",e.sent.data);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[t]),getRedirectConnectLoginUrl:Object(i.useCallback)((function(e){return"".concat(t.getUri({url:"".concat("https://strapi.sekai.best","/connect/").concat(e)}))}),[t]),getConnectCallback:Object(i.useCallback)(function(){var e=Object(c.a)(a.a.mark((function e(r,n){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.get("/auth/".concat(r,"/callback").concat(n));case 2:return e.abrupt("return",e.sent.data);case 3:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),[t]),getUserMe:Object(i.useCallback)(function(){var e=Object(c.a)(a.a.mark((function e(r){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.get("/users/me",r?{headers:{authorization:"Bearer ".concat(r)}}:{});case 2:return e.abrupt("return",e.sent.data);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[t]),postUpload:Object(i.useCallback)(function(){var e=Object(c.a)(a.a.mark((function e(r,n){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.post("/upload",r,{headers:Object.assign({"Content-Type":"multipart/form-data"},n?{authorization:"Bearer ".concat(n)}:{})});case 2:return e.abrupt("return",e.sent.data);case 3:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),[t]),putUserMetadataMe:Object(i.useCallback)(function(){var e=Object(c.a)(a.a.mark((function e(r,n){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.put("/user-metadata/me",n);case 2:return e.abrupt("return",e.sent.data);case 3:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),[t]),postForgotPassword:Object(i.useCallback)(function(){var e=Object(c.a)(a.a.mark((function e(r){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.post("/auth/forgot-password",{email:r});case 2:return e.abrupt("return",e.sent.data);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[t]),postResetPassword:Object(i.useCallback)(function(){var e=Object(c.a)(a.a.mark((function e(r,n,c){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.post("/auth/reset-password",{code:r,password:n,passwordConfirmation:c});case 2:return e.abrupt("return",e.sent.data);case 3:case"end":return e.stop()}}),e)})));return function(t,r,n){return e.apply(this,arguments)}}(),[t]),getSekaiProfileMe:Object(i.useCallback)(function(){var e=Object(c.a)(a.a.mark((function e(r){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.get("/sekai-profiles/me",r?{headers:{authorization:"Bearer ".concat(r)}}:{});case 2:return e.abrupt("return",e.sent.data);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[t]),postSekaiProfileVerify:Object(i.useCallback)(function(){var e=Object(c.a)(a.a.mark((function e(r){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.post("/sekai-profiles/verify",{userid:r});case 2:return e.abrupt("return",e.sent.data);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[t]),postSekaiProfileConfirm:Object(i.useCallback)(function(){var e=Object(c.a)(a.a.mark((function e(r,n){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.post("/sekai-profiles/".concat(r,"/confirm"),{userid:n});case 2:return e.abrupt("return",e.sent.data);case 3:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),[t]),putSekaiProfileUpdate:Object(i.useCallback)(function(){var e=Object(c.a)(a.a.mark((function e(r){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.put("/sekai-profiles/".concat(r,"/update"));case 2:return e.abrupt("return",e.sent.data);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[t]),getLanguages:Object(i.useCallback)(Object(c.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.get("/languages");case 2:return e.abrupt("return",e.sent.data);case 3:case"end":return e.stop()}}),e)}))),[t]),getUserMetadataMe:Object(i.useCallback)(function(){var e=Object(c.a)(a.a.mark((function e(r){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.get("/user-metadata/me",r?{headers:{authorization:"Bearer ".concat(r)}}:{});case 2:return e.abrupt("return",e.sent.data);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[t]),getSekaiCurrentEvent:Object(i.useCallback)(Object(c.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.get("/sekai-current-event");case 2:return e.abrupt("return",e.sent.data);case 3:case"end":return e.stop()}}),e)}))),[t]),getSekaiProfileEventRecordMe:Object(i.useCallback)(function(){var e=Object(c.a)(a.a.mark((function e(r){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.get("/sekai-profile-event-records/me",{params:r?{eventId:r}:{}});case 2:return e.abrupt("return",e.sent.data);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[t]),postSekaiProfileEventRecord:Object(i.useCallback)(function(){var e=Object(c.a)(a.a.mark((function e(r){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.post("/sekai-profile-event-records/record",{eventId:r});case 2:return e.abrupt("return",e.sent.data);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[t]),getAnnouncements:Object(i.useCallback)(Object(c.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.get("/announcements?",{params:{_sort:"isPin:DESC"}});case 2:return e.abrupt("return",e.sent.data);case 3:case"end":return e.stop()}}),e)}))),[t]),getAnnouncementById:Object(i.useCallback)(function(){var e=Object(c.a)(a.a.mark((function e(r){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.get("/announcements/".concat(r));case 2:return e.abrupt("return",e.sent.data);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[t]),getAnnouncementPage:Object(i.useCallback)(Object(c.a)(a.a.mark((function e(){var r,n,c=arguments;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=c.length>0&&void 0!==c[0]?c[0]:30,n=c.length>1&&void 0!==c[1]?c[1]:0,e.next=4,t.get("/announcements",{params:{_limit:r,_start:n*r,_sort:"isPin:DESC"}});case 4:return e.abrupt("return",e.sent.data);case 5:case"end":return e.stop()}}),e)}))),[t]),getAnnouncementCount:Object(i.useCallback)(Object(c.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=Number,e.next=3,t.get("/announcements/count");case 3:return e.t1=e.sent.data,e.abrupt("return",(0,e.t0)(e.t1));case 5:case"end":return e.stop()}}),e)}))),[t]),getComments:Object(i.useCallback)(function(){var e=Object(c.a)(a.a.mark((function e(r,n){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.get("/comments/".concat(r,":").concat(n));case 2:return e.abrupt("return",e.sent.data);case 3:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),[t]),postComment:Object(i.useCallback)(function(){var e=Object(c.a)(a.a.mark((function e(r,n,c,s){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.post("/comments/".concat(r,":").concat(n),{authorUser:c,content:s,related:[{refId:n,ref:r,field:"comments"}]});case 2:return e.abrupt("return",e.sent.data);case 3:case"end":return e.stop()}}),e)})));return function(t,r,n,a){return e.apply(this,arguments)}}(),[t]),getUserInfo:Object(i.useCallback)(function(){var e=Object(c.a)(a.a.mark((function e(r){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.get("/users/".concat(r));case 2:return e.abrupt("return",e.sent.data);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[t]),patchCommentLike:Object(i.useCallback)(function(){var e=Object(c.a)(a.a.mark((function e(r,n,c){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.patch("/comments/".concat(r,":").concat(n,"/comment/").concat(c,"/like"));case 2:return e.abrupt("return",e.sent.data);case 3:case"end":return e.stop()}}),e)})));return function(t,r,n){return e.apply(this,arguments)}}(),[t]),postCommentAbuse:Object(i.useCallback)(function(){var e=Object(c.a)(a.a.mark((function e(r,n,c,s,o){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.post("/comments/".concat(r,":").concat(n,"/comment/").concat(c,"/report-abuse"),{reason:s,content:o});case 2:return e.abrupt("return",e.sent.data);case 3:case"end":return e.stop()}}),e)})));return function(t,r,n,a,c){return e.apply(this,arguments)}}(),[t])}}},6211:function(e,t,r){"use strict";var n=r(2),a=r(1),c=r(0),s=(r(4),r(3)),o=r(5),i=[0,1,2,3,4,5,6,7,8,9,10],u=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];function p(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,r=parseFloat(e);return"".concat(r/t).concat(String(e).replace(String(r),"")||"px")}var l=c.forwardRef((function(e,t){var r=e.alignContent,o=void 0===r?"stretch":r,i=e.alignItems,u=void 0===i?"stretch":i,p=e.classes,l=e.className,f=e.component,d=void 0===f?"div":f,b=e.container,m=void 0!==b&&b,g=e.direction,x=void 0===g?"row":g,h=e.item,v=void 0!==h&&h,j=e.justify,k=void 0===j?"flex-start":j,w=e.lg,O=void 0!==w&&w,y=e.md,C=void 0!==y&&y,S=e.sm,E=void 0!==S&&S,I=e.spacing,P=void 0===I?0:I,M=e.wrap,z=void 0===M?"wrap":M,B=e.xl,U=void 0!==B&&B,W=e.xs,N=void 0!==W&&W,R=e.zeroMinWidth,D=void 0!==R&&R,L=Object(n.a)(e,["alignContent","alignItems","classes","className","component","container","direction","item","justify","lg","md","sm","spacing","wrap","xl","xs","zeroMinWidth"]),_=Object(s.a)(p.root,l,m&&[p.container,0!==P&&p["spacing-xs-".concat(String(P))]],v&&p.item,D&&p.zeroMinWidth,"row"!==x&&p["direction-xs-".concat(String(x))],"wrap"!==z&&p["wrap-xs-".concat(String(z))],"stretch"!==u&&p["align-items-xs-".concat(String(u))],"stretch"!==o&&p["align-content-xs-".concat(String(o))],"flex-start"!==k&&p["justify-xs-".concat(String(k))],!1!==N&&p["grid-xs-".concat(String(N))],!1!==E&&p["grid-sm-".concat(String(E))],!1!==C&&p["grid-md-".concat(String(C))],!1!==O&&p["grid-lg-".concat(String(O))],!1!==U&&p["grid-xl-".concat(String(U))]);return c.createElement(d,Object(a.a)({className:_,ref:t},L))})),f=Object(o.a)((function(e){return Object(a.a)({root:{},container:{boxSizing:"border-box",display:"flex",flexWrap:"wrap",width:"100%"},item:{boxSizing:"border-box",margin:"0"},zeroMinWidth:{minWidth:0},"direction-xs-column":{flexDirection:"column"},"direction-xs-column-reverse":{flexDirection:"column-reverse"},"direction-xs-row-reverse":{flexDirection:"row-reverse"},"wrap-xs-nowrap":{flexWrap:"nowrap"},"wrap-xs-wrap-reverse":{flexWrap:"wrap-reverse"},"align-items-xs-center":{alignItems:"center"},"align-items-xs-flex-start":{alignItems:"flex-start"},"align-items-xs-flex-end":{alignItems:"flex-end"},"align-items-xs-baseline":{alignItems:"baseline"},"align-content-xs-center":{alignContent:"center"},"align-content-xs-flex-start":{alignContent:"flex-start"},"align-content-xs-flex-end":{alignContent:"flex-end"},"align-content-xs-space-between":{alignContent:"space-between"},"align-content-xs-space-around":{alignContent:"space-around"},"justify-xs-center":{justifyContent:"center"},"justify-xs-flex-end":{justifyContent:"flex-end"},"justify-xs-space-between":{justifyContent:"space-between"},"justify-xs-space-around":{justifyContent:"space-around"},"justify-xs-space-evenly":{justifyContent:"space-evenly"}},function(e,t){var r={};return i.forEach((function(n){var a=e.spacing(n);0!==a&&(r["spacing-".concat(t,"-").concat(n)]={margin:"-".concat(p(a,2)),width:"calc(100% + ".concat(p(a),")"),"& > $item":{padding:p(a,2)}})})),r}(e,"xs"),e.breakpoints.keys.reduce((function(t,r){return function(e,t,r){var n={};u.forEach((function(e){var t="grid-".concat(r,"-").concat(e);if(!0!==e)if("auto"!==e){var a="".concat(Math.round(e/12*1e8)/1e6,"%");n[t]={flexBasis:a,flexGrow:0,maxWidth:a}}else n[t]={flexBasis:"auto",flexGrow:0,maxWidth:"none"};else n[t]={flexBasis:0,flexGrow:1,maxWidth:"100%"}})),"xs"===r?Object(a.a)(e,n):e[t.breakpoints.up(r)]=n}(t,e,r),t}),{}))}),{name:"MuiGrid"})(l);t.a=f},6365:function(e,t,r){"use strict";var n=r(1),a=r(2),c=r(0),s=(r(4),r(3)),o=r(7),i=r(5),u=r(12),p=r(14),l=c.forwardRef((function(e,t){var r=e.classes,i=e.className,u=e.color,l=void 0===u?"primary":u,f=e.value,d=e.valueBuffer,b=e.variant,m=void 0===b?"indeterminate":b,g=Object(a.a)(e,["classes","className","color","value","valueBuffer","variant"]),x=Object(p.a)(),h={},v={bar1:{},bar2:{}};if("determinate"===m||"buffer"===m)if(void 0!==f){h["aria-valuenow"]=Math.round(f),h["aria-valuemin"]=0,h["aria-valuemax"]=100;var j=f-100;"rtl"===x.direction&&(j=-j),v.bar1.transform="translateX(".concat(j,"%)")}else 0;if("buffer"===m)if(void 0!==d){var k=(d||0)-100;"rtl"===x.direction&&(k=-k),v.bar2.transform="translateX(".concat(k,"%)")}else 0;return c.createElement("div",Object(n.a)({className:Object(s.a)(r.root,r["color".concat(Object(o.a)(l))],i,{determinate:r.determinate,indeterminate:r.indeterminate,buffer:r.buffer,query:r.query}[m]),role:"progressbar"},h,{ref:t},g),"buffer"===m?c.createElement("div",{className:Object(s.a)(r.dashed,r["dashedColor".concat(Object(o.a)(l))])}):null,c.createElement("div",{className:Object(s.a)(r.bar,r["barColor".concat(Object(o.a)(l))],("indeterminate"===m||"query"===m)&&r.bar1Indeterminate,{determinate:r.bar1Determinate,buffer:r.bar1Buffer}[m]),style:v.bar1}),"determinate"===m?null:c.createElement("div",{className:Object(s.a)(r.bar,("indeterminate"===m||"query"===m)&&r.bar2Indeterminate,"buffer"===m?[r["color".concat(Object(o.a)(l))],r.bar2Buffer]:r["barColor".concat(Object(o.a)(l))]),style:v.bar2}))}));t.a=Object(i.a)((function(e){var t=function(t){return"light"===e.palette.type?Object(u.e)(t,.62):Object(u.a)(t,.5)},r=t(e.palette.primary.main),n=t(e.palette.secondary.main);return{root:{position:"relative",overflow:"hidden",height:4,"@media print":{colorAdjust:"exact"}},colorPrimary:{backgroundColor:r},colorSecondary:{backgroundColor:n},determinate:{},indeterminate:{},buffer:{backgroundColor:"transparent"},query:{transform:"rotate(180deg)"},dashed:{position:"absolute",marginTop:0,height:"100%",width:"100%",animation:"$buffer 3s infinite linear"},dashedColorPrimary:{backgroundImage:"radial-gradient(".concat(r," 0%, ").concat(r," 16%, transparent 42%)"),backgroundSize:"10px 10px",backgroundPosition:"0 -23px"},dashedColorSecondary:{backgroundImage:"radial-gradient(".concat(n," 0%, ").concat(n," 16%, transparent 42%)"),backgroundSize:"10px 10px",backgroundPosition:"0 -23px"},bar:{width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left"},barColorPrimary:{backgroundColor:e.palette.primary.main},barColorSecondary:{backgroundColor:e.palette.secondary.main},bar1Indeterminate:{width:"auto",animation:"$indeterminate1 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite"},bar1Determinate:{transition:"transform .".concat(4,"s linear")},bar1Buffer:{zIndex:1,transition:"transform .".concat(4,"s linear")},bar2Indeterminate:{width:"auto",animation:"$indeterminate2 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite"},bar2Buffer:{transition:"transform .".concat(4,"s linear")},"@keyframes indeterminate1":{"0%":{left:"-35%",right:"100%"},"60%":{left:"100%",right:"-90%"},"100%":{left:"100%",right:"-90%"}},"@keyframes indeterminate2":{"0%":{left:"-200%",right:"100%"},"60%":{left:"107%",right:"-8%"},"100%":{left:"107%",right:"-8%"}},"@keyframes buffer":{"0%":{opacity:1,backgroundPosition:"0 -23px"},"50%":{opacity:0,backgroundPosition:"0 -23px"},"100%":{opacity:1,backgroundPosition:"-200px -23px"}}}}),{name:"MuiLinearProgress"})(l)},6864:function(e,t,r){"use strict";r.r(t);var n=r(84),a=r.n(n),c=r(100),s=r(29),o=r(47),i=r(6211),u=r(6365),p=r(86),l=r.n(p),f=r(0),d=r.n(f),b=r(5933),m=r(13),g=r(51),x=r(6022),h=r(6034);t.default=function(){var e=Object(x.a)(),t=Object(b.a)().t,r=Object(m.i)().provider,n=Object(f.useContext)(g.c),p=n.updateUser,v=n.updateJwtToken,j=n.updateUserMeta,k=Object(m.h)(),w=Object(m.g)(),O=Object(h.a)(),y=O.getConnectCallback,C=O.getUserMetadataMe,S=O.postUpload,E=Object(f.useState)(0),I=Object(s.a)(E,2),P=I[0],M=I[1],z=Object(f.useState)(""),B=Object(s.a)(z,2),U=B[0],W=B[1];return Object(f.useEffect)((function(){document.title=t("title:connectRedirect")}),[t]),Object(f.useEffect)((function(){var e=function(){var e=Object(c.a)(a.a.mark((function e(){var n,c,s,o,i;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,W(t("auth:connect.fetch_user_data")),e.next=4,y(r,k.search||"");case 4:return n=e.sent,v(n.jwt),c=n.user.avatarUrl,delete n.user.avatarUrl,p(n.user),e.next=11,C(n.jwt);case 11:if((s=e.sent).avatar||!c){e.next=33;break}return M(50),W(t("auth:connect.fetch_user_avatar")),e.next=17,l.a.get(c,{responseType:"blob"});case 17:return o=e.sent.data,(i=new FormData).append("files",o,c.substring(c.lastIndexOf("/")+1)),i.append("refId",String(s.id)),i.append("ref","user-metadata"),i.append("field","avatar"),e.next=25,S(i,n.jwt);case 25:return M(75),e.t0=j,e.next=29,C(n.jwt);case 29:e.t1=e.sent,(0,e.t0)(e.t1),e.next=35;break;case 33:j(s),M(100);case 35:w.push("/user"),localStorage.setItem("lastUserCheck",String((new Date).getTime())),e.next=42;break;case 39:e.prev=39,e.t2=e.catch(0),"Auth.form.error.email.taken"===e.t2.id&&w.replace("/user/login?error=".concat(t("auth:error.email_taken")));case 42:case"end":return e.stop()}}),e,null,[[0,39]])})));return function(){return e.apply(this,arguments)}}();k.search&&e()}),[]),d.a.createElement(f.Fragment,null,d.a.createElement(o.a,{variant:"h6",className:e.header},t("auth:connect.redirect")),d.a.createElement(i.a,{container:!0,spacing:1},d.a.createElement(i.a,{item:!0,xs:12},d.a.createElement(o.a,null,U)),d.a.createElement(i.a,{item:!0,xs:12},d.a.createElement(u.a,{variant:"determinate",value:P}))))}}}]);
//# sourceMappingURL=44.166a7650.chunk.js.map