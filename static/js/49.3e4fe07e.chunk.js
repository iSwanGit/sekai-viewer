(this["webpackJsonpsekai-viewer"]=this["webpackJsonpsekai-viewer"]||[]).push([[49],{6022:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(35),r=n(5969),c=Object(r.a)((function(e){var t;return{header:{fontWeight:"bold"},content:{marginTop:e.spacing(3),marginBottom:e.spacing(3),marginLeft:"auto",marginRight:"auto"},alert:{margin:e.spacing(1,0)},bold:{fontWeight:e.typography.fontWeightBold},avatarProfile:(t={},Object(a.a)(t,e.breakpoints.down("sm"),{height:e.spacing(10),width:e.spacing(10)}),Object(a.a)(t,e.breakpoints.up("md"),{height:e.spacing(20),width:e.spacing(20)}),t),capitalize:{textTransform:"capitalize"}}}))},6034:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n(84),r=n.n(a),c=n(100),u=n(86),s=n.n(u),o=n(0);function i(e){var t=Object(o.useMemo)((function(){var t=s.a.create({baseURL:"https://strapi.sekai.best"});return t.interceptors.request.use((function(t){return e&&(t.headers.authorization="Bearer ".concat(e)),t})),t.interceptors.response.use((function(e){return e}),(function(e){throw e.response.data.message?e.id=e.response.data.message[0].messages[0].id:e.id=e.message,e})),t}),[e]);return{postLoginLocal:Object(o.useCallback)(function(){var e=Object(c.a)(r.a.mark((function e(n){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.post("/auth/local",n);case 2:return e.abrupt("return",e.sent.data);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[t]),postRegisterLocal:Object(o.useCallback)(function(){var e=Object(c.a)(r.a.mark((function e(n){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.post("/auth/local/register",n);case 2:return e.abrupt("return",e.sent.data);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[t]),getRedirectConnectLoginUrl:Object(o.useCallback)((function(e){return"".concat(t.getUri({url:"".concat("https://strapi.sekai.best","/connect/").concat(e)}))}),[t]),getConnectCallback:Object(o.useCallback)(function(){var e=Object(c.a)(r.a.mark((function e(n,a){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.get("/auth/".concat(n,"/callback").concat(a));case 2:return e.abrupt("return",e.sent.data);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),[t]),getUserMe:Object(o.useCallback)(function(){var e=Object(c.a)(r.a.mark((function e(n){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.get("/users/me",n?{headers:{authorization:"Bearer ".concat(n)}}:{});case 2:return e.abrupt("return",e.sent.data);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[t]),postUpload:Object(o.useCallback)(function(){var e=Object(c.a)(r.a.mark((function e(n,a){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.post("/upload",n,{headers:Object.assign({"Content-Type":"multipart/form-data"},a?{authorization:"Bearer ".concat(a)}:{})});case 2:return e.abrupt("return",e.sent.data);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),[t]),putUserMetadataMe:Object(o.useCallback)(function(){var e=Object(c.a)(r.a.mark((function e(n,a){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.put("/user-metadata/me",a);case 2:return e.abrupt("return",e.sent.data);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),[t]),postForgotPassword:Object(o.useCallback)(function(){var e=Object(c.a)(r.a.mark((function e(n){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.post("/auth/forgot-password",{email:n});case 2:return e.abrupt("return",e.sent.data);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[t]),postResetPassword:Object(o.useCallback)(function(){var e=Object(c.a)(r.a.mark((function e(n,a,c){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.post("/auth/reset-password",{code:n,password:a,passwordConfirmation:c});case 2:return e.abrupt("return",e.sent.data);case 3:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}(),[t]),getSekaiProfileMe:Object(o.useCallback)(function(){var e=Object(c.a)(r.a.mark((function e(n){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.get("/sekai-profiles/me",n?{headers:{authorization:"Bearer ".concat(n)}}:{});case 2:return e.abrupt("return",e.sent.data);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[t]),postSekaiProfileVerify:Object(o.useCallback)(function(){var e=Object(c.a)(r.a.mark((function e(n){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.post("/sekai-profiles/verify",{userid:n});case 2:return e.abrupt("return",e.sent.data);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[t]),postSekaiProfileConfirm:Object(o.useCallback)(function(){var e=Object(c.a)(r.a.mark((function e(n,a){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.post("/sekai-profiles/".concat(n,"/confirm"),{userid:a});case 2:return e.abrupt("return",e.sent.data);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),[t]),putSekaiProfileUpdate:Object(o.useCallback)(function(){var e=Object(c.a)(r.a.mark((function e(n){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.put("/sekai-profiles/".concat(n,"/update"));case 2:return e.abrupt("return",e.sent.data);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[t]),getLanguages:Object(o.useCallback)(Object(c.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.get("/languages");case 2:return e.abrupt("return",e.sent.data);case 3:case"end":return e.stop()}}),e)}))),[t]),getUserMetadataMe:Object(o.useCallback)(function(){var e=Object(c.a)(r.a.mark((function e(n){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.get("/user-metadata/me",n?{headers:{authorization:"Bearer ".concat(n)}}:{});case 2:return e.abrupt("return",e.sent.data);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[t]),getSekaiCurrentEvent:Object(o.useCallback)(Object(c.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.get("/sekai-current-event");case 2:return e.abrupt("return",e.sent.data);case 3:case"end":return e.stop()}}),e)}))),[t]),getSekaiProfileEventRecordMe:Object(o.useCallback)(function(){var e=Object(c.a)(r.a.mark((function e(n){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.get("/sekai-profile-event-records/me",{params:n?{eventId:n}:{}});case 2:return e.abrupt("return",e.sent.data);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[t]),postSekaiProfileEventRecord:Object(o.useCallback)(function(){var e=Object(c.a)(r.a.mark((function e(n){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.post("/sekai-profile-event-records/record",{eventId:n});case 2:return e.abrupt("return",e.sent.data);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[t]),getAnnouncements:Object(o.useCallback)(Object(c.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.get("/announcements?",{params:{_sort:"isPin:DESC"}});case 2:return e.abrupt("return",e.sent.data);case 3:case"end":return e.stop()}}),e)}))),[t]),getAnnouncementById:Object(o.useCallback)(function(){var e=Object(c.a)(r.a.mark((function e(n){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.get("/announcements/".concat(n));case 2:return e.abrupt("return",e.sent.data);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[t]),getAnnouncementPage:Object(o.useCallback)(Object(c.a)(r.a.mark((function e(){var n,a,c=arguments;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=c.length>0&&void 0!==c[0]?c[0]:30,a=c.length>1&&void 0!==c[1]?c[1]:0,e.next=4,t.get("/announcements",{params:{_limit:n,_start:a*n,_sort:"isPin:DESC"}});case 4:return e.abrupt("return",e.sent.data);case 5:case"end":return e.stop()}}),e)}))),[t]),getAnnouncementCount:Object(o.useCallback)(Object(c.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=Number,e.next=3,t.get("/announcements/count");case 3:return e.t1=e.sent.data,e.abrupt("return",(0,e.t0)(e.t1));case 5:case"end":return e.stop()}}),e)}))),[t]),getComments:Object(o.useCallback)(function(){var e=Object(c.a)(r.a.mark((function e(n,a){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.get("/comments/".concat(n,":").concat(a));case 2:return e.abrupt("return",e.sent.data);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),[t]),postComment:Object(o.useCallback)(function(){var e=Object(c.a)(r.a.mark((function e(n,a,c,u){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.post("/comments/".concat(n,":").concat(a),{authorUser:c,content:u,related:[{refId:a,ref:n,field:"comments"}]});case 2:return e.abrupt("return",e.sent.data);case 3:case"end":return e.stop()}}),e)})));return function(t,n,a,r){return e.apply(this,arguments)}}(),[t]),getUserInfo:Object(o.useCallback)(function(){var e=Object(c.a)(r.a.mark((function e(n){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.get("/users/".concat(n));case 2:return e.abrupt("return",e.sent.data);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[t]),patchCommentLike:Object(o.useCallback)(function(){var e=Object(c.a)(r.a.mark((function e(n,a,c){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.patch("/comments/".concat(n,":").concat(a,"/comment/").concat(c,"/like"));case 2:return e.abrupt("return",e.sent.data);case 3:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}(),[t]),postCommentAbuse:Object(o.useCallback)(function(){var e=Object(c.a)(r.a.mark((function e(n,a,c,u,s){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.post("/comments/".concat(n,":").concat(a,"/comment/").concat(c,"/report-abuse"),{reason:u,content:s});case 2:return e.abrupt("return",e.sent.data);case 3:case"end":return e.stop()}}),e)})));return function(t,n,a,r,c){return e.apply(this,arguments)}}(),[t])}}},6883:function(e,t,n){"use strict";n.r(t);var a=n(29),r=n(47),c=n(6211),u=n(5989),s=n(6005),o=n(0),i=n.n(o),l=n(5933),p=n(13),m=n(6317),f=n.n(m),b=n(6761),d=n.n(b),h=n(6321),v=n.n(h),O=(n(6762),n(6022)),j=n(6034),g=n(84),k=n.n(g),w=n(41),x=n(100),E=n(5957),C=n(6268),y=n(6007),S=n(6008),U=n(6009),M=n(6366),R=n(6010),I=n(6246),L=n(6877),P=n(6004),T=n(6353),N=n(6016),z=n(6221),A=n(6279),_=n(6871),B=n(6872),D=function(e){var t=e.comment,n=e.onThumbsUp,u=e.onReport,s=Object(j.a)().getUserInfo,l=Object(o.useMemo)((function(){return new f.a({linkify:!0,typographer:!0})}),[]),p=Object(o.useState)(),m=Object(a.a)(p,2),b=m[0],d=m[1],h=Object(o.useState)(t.points||0),O=Object(a.a)(h,2),g=O[0],w=O[1];return Object(o.useEffect)((function(){s(isNaN(t.authorUser)?t.authorUser.id:t.authorUser).then(d)}),[t.authorUser,s]),i.a.createElement(c.a,{container:!0,spacing:1},i.a.createElement(c.a,{item:!0,xs:12,container:!0,justify:"space-between",alignItems:"center"},i.a.createElement(c.a,{item:!0},i.a.createElement(c.a,{container:!0,spacing:1},i.a.createElement(c.a,{item:!0},i.a.createElement(r.a,{color:"textSecondary",variant:"subtitle2"},null===b||void 0===b?void 0:b.username)),i.a.createElement(c.a,{item:!0},i.a.createElement(r.a,{variant:"subtitle2"},new Date(t.created_at).toLocaleString())))),i.a.createElement(c.a,{item:!0},i.a.createElement(A.a,null,!!n&&i.a.createElement(E.a,{onClick:Object(x.a)(k.a.mark((function e(){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n(t.id);case 2:w(g+1);case 3:case"end":return e.stop()}}),e)})))},i.a.createElement(_.a,{fontSize:"inherit"})," ",g),!!u&&i.a.createElement(E.a,{onClick:Object(x.a)(k.a.mark((function e(){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u(t.id);case 2:case"end":return e.stop()}}),e)})))},i.a.createElement(B.a,{fontSize:"inherit"}))))),i.a.createElement(c.a,{item:!0,xs:12},i.a.createElement(r.a,null,i.a.createElement(v.a,{value:t.content,renderHTML:function(e){return l.render(e)},config:{view:{html:!0},canView:{html:!0}}}))))},H=n(51),W=n(6266),V=function(e){var t=e.comments,n=e.contentId,s=e.contentType,p=Object(l.a)().t,m=Object(o.useContext)(H.c),b=m.user,d=m.jwtToken,O=Object(j.a)(d),g=O.postComment,A=O.postCommentAbuse,_=Object(o.useMemo)((function(){return new f.a({linkify:!0,typographer:!0})}),[]);Object(o.useEffect)((function(){return v.a.use(h.Plugins.AutoResize,{min:150,max:300}),function(){v.a.unuse(h.Plugins.AutoResize)}}),[]);var B=Object(o.useState)(!1),V=Object(a.a)(B,2),F=V[0],J=V[1],q=Object(o.useState)(""),G=Object(a.a)(q,2),K=G[0],Q=G[1],X=Object(o.useState)(t),Y=Object(a.a)(X,2),Z=Y[0],$=Y[1],ee=Object(o.useState)(!1),te=Object(a.a)(ee,2),ne=te[0],ae=te[1],re=Object(o.useState)(""),ce=Object(a.a)(re,2),ue=ce[0],se=ce[1],oe=Object(o.useState)(0),ie=Object(a.a)(oe,2),le=ie[0],pe=ie[1],me=Object(o.useState)("OTHER"),fe=Object(a.a)(me,2),be=fe[0],de=fe[1],he=Object(o.useState)(!1),ve=Object(a.a)(he,2),Oe=ve[0],je=ve[1];return i.a.createElement(c.a,{container:!0,spacing:1},b&&i.a.createElement(c.a,{item:!0,xs:12},F?i.a.createElement(c.a,{container:!0,direction:"column",spacing:1},i.a.createElement(c.a,{item:!0},i.a.createElement(v.a,{value:K,config:{view:{menu:!0,md:!0},canView:{fullScreen:!1}},renderHTML:function(e){return _.render(e)},onChange:function(e){var t=e.text;return Q(t)}})),i.a.createElement(c.a,{item:!0},i.a.createElement(E.a,{variant:"outlined",onClick:Object(x.a)(k.a.mark((function e(){var t;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g(s,n,b.id,K);case 2:t=e.sent,$([].concat(Object(w.a)(Z),[t])),J(!1);case 5:case"end":return e.stop()}}),e)})))},p("comment:send")))):i.a.createElement(E.a,{variant:"outlined",onClick:function(){return J(!0)}},p("comment:write"))),i.a.createElement(c.a,{item:!0,xs:12},i.a.createElement(C.a,{margin:"2% 0"})),Z.length?Z.map((function(e){return i.a.createElement(o.Fragment,null,i.a.createElement(c.a,{item:!0,xs:12},i.a.createElement(D,{comment:e,onReport:function(){var e=Object(x.a)(k.a.mark((function e(t){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:ae(!0),pe(t);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()})),i.a.createElement(c.a,{item:!0,xs:12},i.a.createElement(u.a,null)))})):i.a.createElement(r.a,null,p("comment:no_comment_yet")),i.a.createElement(y.a,{open:ne,onClose:function(){ae(!1),se(""),pe(0)}},i.a.createElement(S.a,null,p("comment:report-abuse.title")),i.a.createElement(U.a,null,i.a.createElement(M.a,null,p("comment:report-abuse.description")),i.a.createElement(R.a,null,i.a.createElement(I.a,null,p("comment:report-abuse.reason.label")),i.a.createElement(L.a,{value:be,onChange:function(e){return de(e.target.value)}},i.a.createElement(P.a,{value:"OTHER"},p("comment:report-abuse.reason.other")),i.a.createElement(P.a,{value:"BAD_WORDS"},p("comment:report-abuse.reason.bad_words")),i.a.createElement(P.a,{value:"DISCRIMINATION"},p("comment:report-abuse.reason.discrimination")))),i.a.createElement(T.a,{fullWidth:!0,value:ue,margin:"dense",label:p("comment:report-abuse.content"),type:"text",onChange:function(e){return se(e.target.value)}})),i.a.createElement(N.a,null,i.a.createElement(E.a,{onClick:Object(x.a)(k.a.mark((function e(){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A(s,n,le,be,ue);case 2:je(!0),ae(!1);case 4:case"end":return e.stop()}}),e)}))),color:"primary"},p("common:submit")))),i.a.createElement(z.a,{open:Oe,autoHideDuration:3e3,onClose:function(){je(!1)}},i.a.createElement(W.a,{onClose:function(){je(!1)},severity:"success"},p("comment:report-abuse.success"))))},F=n(38);t.default=function(){var e=Object(O.a)(),t=Object(p.i)().id,n=Object(j.a)().getAnnouncementById,m=Object(l.a)().t,b=Object(o.useMemo)((function(){return new f.a({linkify:!0,typographer:!0}).use(d.a)}),[]),h=Object(o.useState)(),g=Object(a.a)(h,2),k=g[0],w=g[1];return Object(o.useEffect)((function(){n(t).then(w)}),[n,t]),k?i.a.createElement(o.Fragment,null,i.a.createElement(r.a,{variant:"h6",className:e.header},k.title),i.a.createElement(c.a,{container:!0,spacing:1},i.a.createElement(c.a,{item:!0},i.a.createElement(r.a,{variant:"subtitle2",color:"textSecondary"},m("announcement:category"),":"," ",m("announcement:categoryName.".concat(k.category)))),i.a.createElement(c.a,{item:!0},i.a.createElement(r.a,{variant:"subtitle2",color:"textSecondary"},m("announcement:author"),": ",k.user.username)),i.a.createElement(c.a,{item:!0},i.a.createElement(r.a,{variant:"subtitle2",color:"textSecondary"},m("announcement:published_at"),":"," ",new Date(k.published_at).toLocaleString()))),i.a.createElement(u.a,{style:{margin:"1% 0"}}),i.a.createElement(s.a,{className:e.content},i.a.createElement(v.a,{value:k.content,renderHTML:function(e){return b.render(e)},config:{view:{html:!0},canView:{html:!0}}})),i.a.createElement(r.a,{variant:"h6",className:e.header},m("common:comment")," ",i.a.createElement(F.e,null)),i.a.createElement(s.a,{className:e.content,maxWidth:"md"},i.a.createElement(V,{comments:k.comments.filter((function(e){return!e.blocked})),contentType:"announcement",contentId:Number(t)}))):i.a.createElement(r.a,{variant:"h6",className:e.header},"Loading...")}}}]);
//# sourceMappingURL=49.3e4fe07e.chunk.js.map