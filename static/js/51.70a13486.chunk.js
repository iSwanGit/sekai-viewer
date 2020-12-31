(this["webpackJsonpsekai-viewer"]=this["webpackJsonpsekai-viewer"]||[]).push([[51],{6026:function(e,t,a){"use strict";a.d(t,"b",(function(){return m})),a.d(t,"a",(function(){return d})),a.d(t,"c",(function(){return u}));var n=a(29),r=a(47),c=a(6211),l=a(0),i=a.n(l),o=a(6021),s=a(49),m=function(e){var t=e.mode,a=e.contentKey,n=e.original,l=e.originalProps,o=e.translatedProps,m=e.assetTOptions,d=Object(s.c)().assetT;switch(t){case"original":return i.a.createElement(r.a,l,n);case"translated":return i.a.createElement(r.a,Object.assign({},o,{color:"textPrimary"}),d(a,n,m));case"both":return i.a.createElement(c.a,{container:!0,direction:"column"},i.a.createElement(r.a,Object.assign({},l,{color:"textPrimary"}),n),i.a.createElement(r.a,Object.assign({},o,{color:"textSecondary"}),d(a,n,m)))}},d=function(e){var t=e.mode,a=e.characterId,m=e.originalProps,d=e.translatedProps,u=e.assetTOptions,b=Object(o.e)("gameCharacters"),E=Object(n.a)(b,1)[0],p=Object(s.c)(),y=p.assetT,f=p.assetI18n,h=Object(l.useState)(),g=Object(n.a)(h,2),v=g[0],j=g[1];if(Object(l.useEffect)((function(){E.length&&j(E.find((function(e){return e.id===a})))}),[E,a]),!v)return i.a.createElement(r.a,null);switch(t){case"original":return i.a.createElement(r.a,Object.assign({},m,{color:"textPrimary"}),v.firstName," ",v.givenName);case"translated":return["zh-CN","zh-TW","ko","ja"].includes(f.language)?i.a.createElement(r.a,Object.assign({},d,{color:"textPrimary"}),v.firstName?y("character_name:".concat(a,".firstName"),v.firstName,u):""," ",y("character_name:".concat(a,".givenName"),v.givenName,u)):i.a.createElement(r.a,null,y("character_name:".concat(a,".givenName"),v.givenName,u)," ",v.firstName?y("character_name:".concat(a,".firstName"),v.firstName,u):"");case"both":return i.a.createElement(c.a,{container:!0,direction:"column"},i.a.createElement(r.a,m,v.firstName," ",v.givenName),["zh-CN","zh-TW","ko","ja"].includes(f.language)?i.a.createElement(r.a,Object.assign({color:"textSecondary"},d),v.firstName?y("character_name:".concat(a,".firstName"),v.firstName,u):""," ",y("character_name:".concat(a,".givenName"),v.givenName,u)):i.a.createElement(r.a,Object.assign({color:"textSecondary"},d),y("character_name:".concat(a,".givenName"),v.givenName,u)," ",v.firstName?y("character_name:".concat(a,".firstName"),v.firstName,u):""))}},u=function(e){var t=e.mode,a=e.releaseCondId,r=e.originalProps,c=e.translatedProps,s=e.assetTOptions,d=Object(o.e)("releaseConditions"),u=Object(n.a)(d,1)[0],b=Object(l.useState)(),E=Object(n.a)(b,2),p=E[0],y=E[1];if(Object(l.useEffect)((function(){u.length&&y(u.find((function(e){return e.id===a})))}),[a,u]),p){var f="";switch(p.releaseConditionType){case"none":f="release_cond:none_".concat(p.id);break;case"card_level":f="release_cond:card_level",s=Object.assign({},s,{level:p.releaseConditionTypeLevel});break;case"unit_rank":f="release_cond:unit_rank_".concat(p.releaseConditionTypeId),s=Object.assign({},s,{rank:p.releaseConditionTypeLevel});break;case"event_point":f="release_cond:event_point",s=Object.assign({},s,{point:p.releaseConditionTypeQuantity});break;default:f="release_cond:".concat(p.releaseConditionType)}return i.a.createElement(m,{mode:t,contentKey:f,original:p.sentence,originalProps:r,translatedProps:c,assetTOptions:s})}return i.a.createElement("div",null)}},6881:function(e,t,a){"use strict";a.r(t);var n=a(29),r=a(47),c=a(6005),l=a(6211),i=a(6010),o=a(6246),s=a(6877),m=a(6004),d=a(5957),u=a(6266),b=a(0),E=a.n(b),p=a(5933),y=a(13),f=a(50),h=a(51),g=a(6022),v=a(6021),j=a(6026),O=a(5969),N=a(133),S=a(6123),_=a(6027),x=a(6029),I=a(5956),w=a(6247),k=a(6119),C=a(6270),T=a(6269),P=a(6861),L=a(6862),B=a(6512),K=Object(O.a)((function(e){return{card:{margin:e.spacing(1.5,0),padding:e.spacing(1.5,0)}}})),z=function(e){var t=e.url,a=Object(b.useState)(!1),r=Object(n.a)(a,2),c=r[0],l=r[1],i=Object(b.useState)(),o=Object(n.a)(i,2),s=o[0],m=o[1],d=Object(b.useState)(!1),u=Object(n.a)(d,2),p=u[0],y=u[1],f=Object(b.useCallback)((function(){if(c)s&&s.stop(),l(!1);else{if(s)return void s.play();y(!0);var e=new B.Howl({src:[t]});e.on("load",(function(){y(!1),e.play()})),e.on("play",(function(){l(!0)})),e.on("end",(function(){l(!1)})),m(e)}}),[t,s,c]);return Object(b.useEffect)((function(){return function(){s&&s.stop()}}),[s]),E.a.createElement(I.a,{onClick:f,size:"small"},c?E.a.createElement(P.a,null):p?E.a.createElement(w.a,{variant:"indeterminate",size:"1rem",color:"inherit"}):E.a.createElement(L.a,null))},F=function(e){var t=e.characterId,a=e.characterName,n=e.text,c=e.voiceUrl,i=K();return E.a.createElement(k.a,{className:i.card},E.a.createElement(l.a,{container:!0,alignItems:"center"},E.a.createElement(l.a,{item:!0,xs:3,md:2},E.a.createElement(l.a,{container:!0,justify:"center"},E.a.createElement(C.a,{src:x.h["CharaIcon".concat(t)]}))),E.a.createElement(l.a,{item:!0,xs:7,md:9},E.a.createElement(l.a,{container:!0,spacing:1},E.a.createElement(l.a,{item:!0,xs:12},E.a.createElement(T.a,{label:a})),E.a.createElement(l.a,{item:!0,xs:12},E.a.createElement(r.a,null,n)))),c?E.a.createElement(l.a,{item:!0,xs:1},E.a.createElement(z,{url:c})):null))},W=function(e){var t=e.seType,a=e.text,c=e.resource,i=K(),o=Object(p.a)().t,s=Object(b.useState)(!1),m=Object(n.a)(s,2),u=m[0],y=m[1],f=Object(b.useState)(!1),h=Object(n.a)(f,2),g=h[0],v=h[1];switch(t){case"FullScreenText":return E.a.createElement(k.a,{className:i.card},E.a.createElement(l.a,{container:!0,alignItems:"center"},E.a.createElement(l.a,{item:!0,xs:3,md:2}),E.a.createElement(l.a,{item:!0,xs:7,md:9},E.a.createElement(l.a,{container:!0,spacing:1},E.a.createElement(l.a,{item:!0,xs:12},E.a.createElement(T.a,{label:o("story_reader:snippet.FullScreenText")})),E.a.createElement(l.a,{item:!0,xs:12},E.a.createElement(r.a,null,a.trimStart())))),c?E.a.createElement(l.a,{item:!0,xs:1},E.a.createElement(z,{url:c})):null));case"Telop":return E.a.createElement(k.a,{className:i.card},E.a.createElement(l.a,{container:!0,alignItems:"center"},E.a.createElement(l.a,{item:!0,xs:3,md:2}),E.a.createElement(l.a,{item:!0,xs:8,md:9},E.a.createElement(l.a,{container:!0,spacing:1},E.a.createElement(l.a,{item:!0,xs:12},E.a.createElement(T.a,{label:o("story_reader:snippet.Telop")})),E.a.createElement(l.a,{item:!0,xs:12},E.a.createElement(r.a,null,a.trimStart()))))));case"ChangeBackground":return E.a.createElement(k.a,{className:i.card},E.a.createElement(l.a,{container:!0,alignItems:"center"},E.a.createElement(l.a,{item:!0,xs:3,md:2}),E.a.createElement(l.a,{item:!0,xs:8,md:9},E.a.createElement(l.a,{container:!0,spacing:1},E.a.createElement(l.a,{item:!0,xs:12},E.a.createElement(T.a,{label:o("story_reader:snippet.ChangeBackground")})),u?E.a.createElement(l.a,{item:!0,xs:12},E.a.createElement(S.a,{onClick:function(){return window.open(c,"_blank")},image:c,style:{paddingTop:"56.25%",cursor:"pointer"}})):E.a.createElement(l.a,{item:!0,xs:12},E.a.createElement(d.a,{variant:"contained",onClick:function(){return y(!0)}},o("story_reader:snippet.ShowBackground")))))));case"Movie":return E.a.createElement(k.a,{className:i.card},E.a.createElement(l.a,{container:!0,alignItems:"center"},E.a.createElement(l.a,{item:!0,xs:3,md:2}),E.a.createElement(l.a,{item:!0,xs:8,md:9},E.a.createElement(l.a,{container:!0,spacing:1},E.a.createElement(l.a,{item:!0,xs:12},E.a.createElement(T.a,{label:o("story_reader:snippet.Movie")})),g?E.a.createElement(l.a,{item:!0,xs:12},E.a.createElement("video",{style:{maxWidth:"100%"},controls:!0},E.a.createElement("source",{src:c}))):E.a.createElement(l.a,{item:!0,xs:12},E.a.createElement(d.a,{variant:"contained",onClick:function(){return v(!0)}},o("story_reader:snippet.ShowMovie")))))));default:return null}},M=function(e){var t=e.hasBgm,a=e.hasSe,n=e.voiceUrl,c=K(),i=Object(p.a)().t;return E.a.createElement(k.a,{className:c.card},E.a.createElement(l.a,{container:!0,alignItems:"center"},E.a.createElement(l.a,{item:!0,xs:3,md:2}),E.a.createElement(l.a,{item:!0,xs:7,md:9},E.a.createElement(l.a,{container:!0,spacing:1},E.a.createElement(l.a,{item:!0,xs:12},E.a.createElement(T.a,{label:t?i("story_reader:snippet.BGM"):a?i("story_reader:snippet.SE"):"UNKNOWN"})),n.endsWith("bgm00000.mp3")?E.a.createElement(l.a,{item:!0,xs:12},E.a.createElement(r.a,null,i("story_reader:snippet.NoSound"))):null)),n&&!n.endsWith("bgm00000.mp3")?E.a.createElement(l.a,{item:!0,xs:1},E.a.createElement(z,{url:n})):null))},U=Object(O.a)((function(e){return{episodeBanner:{padding:e.spacing(1.5,0)}}})),V=function(){var e=Object(y.i)(),t=e.storyType,a=e.storyId,i=Object(g.a)(),o=U(),s=Object(p.a)().t,m=Object(b.useContext)(h.a).contentTransMode,d=Object(v.h)(m),u=Object(v.e)("unitStories"),f=Object(n.a)(u,1)[0],O=Object(v.e)("eventStories"),I=Object(n.a)(O,1)[0],w=Object(v.e)("characterProfiles"),k=Object(n.a)(w,1)[0],C=Object(v.e)("cardEpisodes"),T=Object(n.a)(C,1)[0],P=Object(b.useState)(""),L=Object(n.a)(P,2),B=L[0],K=L[1],z=Object(b.useState)(""),V=Object(n.a)(z,2),J=V[0],G=V[1],H=Object(b.useState)(""),Q=Object(n.a)(H,2),R=Q[0],q=Q[1],A=Object(b.useState)({characters:[],actions:[]}),D=Object(n.a)(A,2),X=D[0],Y=D[1],Z=Object(b.useState)(0),$=Object(n.a)(Z,2),ee=$[0],te=$[1];return Object(b.useEffect)((function(){switch(Y({characters:[],actions:[]}),t){case"unitStory":if(f.length){var e=a.split("-"),r=Object(n.a)(e,3),c=r[0],l=r[1],i=r[2],o=f.find((function(e){return e.unit===c})).chapters.find((function(e){return e.chapterNo===Number(l)})),m=o.episodes.find((function(e){return e.id===Number(i)}));Object(v.c)("story/episode_image/".concat(o.assetbundleName,"_rip/").concat(m.assetbundleName,".webp"),K),d("scenario/unitstory/".concat(o.assetbundleName,"_rip/").concat(m.scenarioId,".asset"),!1).then((function(e){return Y(e)})),G(o.title),q("".concat(m.episodeNoLabel," - ").concat(m.title)),te(m.releaseConditionId)}break;case"eventStory":if(I.length){var u=a.split("-"),b=Object(n.a)(u,2),E=b[0],p=b[1],y=I.find((function(e){return e.eventId===Number(E)})),h=y.eventStoryEpisodes.find((function(e){return e.id===Number(p)}));Object(v.c)("event_story/".concat(y.assetbundleName,"/episode_image_rip/").concat(h.assetbundleName,".webp"),K),d("event_story/".concat(y.assetbundleName,"/scenario_rip/").concat(h.scenarioId,".asset"),!1).then((function(e){return Y(e)})),G(""),q("".concat(h.episodeNo," - ").concat(h.title)),te(h.releaseConditionId)}break;case"charaStory":if(k.length){var g=a.split("-"),j=Object(n.a)(g,1)[0],O=k.find((function(e){return e.characterId===Number(j)}));K(x.h["CharaIcon".concat(j)]),d("scenario/profile_rip/".concat(O.scenarioId,".asset"),!1).then((function(e){return Y(e)})),G(""),q(s("member:introduction")),te(0)}break;case"cardStory":if(T.length){var N=a.split("-"),S=Object(n.a)(N,3)[2],_=T.find((function(e){return e.id===Number(S)}));Object(v.c)("character/member_small/".concat(_.assetbundleName,"_rip/card_normal.webp"),K),d("character/member/".concat(_.assetbundleName,"_rip/").concat(_.scenarioId,".asset"),!0).then((function(e){return Y(e)})),G(""),q(_.title),te(_.releaseConditionId)}}}),[f,I,a,t,d,k,T,s]),E.a.createElement(c.a,{className:i.content},E.a.createElement(N.a,{className:o.episodeBanner},E.a.createElement(l.a,{container:!0,spacing:1},E.a.createElement(l.a,{item:!0,xs:12,md:6},E.a.createElement(S.a,{image:B,style:{paddingTop:"56.25%",backgroundSize:"contain"}})),E.a.createElement(l.a,{item:!0,xs:12,md:6},E.a.createElement(l.a,{container:!0,spacing:1,alignItems:"center",justify:"center",style:{height:"100%"}},J?E.a.createElement(l.a,{item:!0,xs:12},E.a.createElement(r.a,{align:"center"},J)):null,E.a.createElement(l.a,{item:!0,xs:12},E.a.createElement(r.a,{align:"center"},R)),ee?E.a.createElement(l.a,{item:!0,xs:12},E.a.createElement(j.c,{mode:m,releaseCondId:ee,originalProps:{align:"center"},translatedProps:{align:"center"}})):null)))),X.actions.map((function(e,t){switch(e.type){case _.b.Talk:return E.a.createElement(F,{key:"action-".concat(t),characterId:e.chara.id,characterName:e.chara.name,text:e.body,voiceUrl:e.voice});case _.b.SpecialEffect:return E.a.createElement(W,{key:"action-".concat(t),seType:e.seType,text:e.body,resource:e.resource});case _.b.Sound:return E.a.createElement(M,{key:"action-".concat(t),hasBgm:e.hasBgm,hasSe:e.hasSe,voiceUrl:e.hasBgm?e.bgm:e.se});default:return null}})))};t.default=function(){var e=Object(g.a)(),t=Object(p.a)().t,a=Object(y.j)(),O=a.path,N=a.url,S=Object(y.j)("/storyreader/:storyType/:storyId"),_=Object(b.useContext)(h.a).contentTransMode,x=Object(v.e)("unitProfiles"),I=Object(n.a)(x,1)[0],w=Object(v.e)("unitStories"),k=Object(n.a)(w,1)[0],C=Object(v.e)("eventStories"),T=Object(n.a)(C,1)[0],P=Object(v.e)("events"),L=Object(n.a)(P,1)[0],B=Object(v.e)("characterProfiles"),K=Object(n.a)(B,1)[0],z=Object(v.e)("cardEpisodes"),F=Object(n.a)(z,1)[0],W=Object(v.e)("cards"),M=Object(n.a)(W,1)[0],U=Object(b.useState)("unitStory"),J=Object(n.a)(U,2),G=J[0],H=J[1],Q=Object(b.useState)("idol"),R=Object(n.a)(Q,2),q=R[0],A=R[1],D=Object(b.useState)(1),X=Object(n.a)(D,2),Y=X[0],Z=X[1],$=Object(b.useState)(3e4),ee=Object(n.a)($,2),te=ee[0],ae=ee[1],ne=Object(b.useState)(1),re=Object(n.a)(ne,2),ce=re[0],le=re[1],ie=Object(b.useState)(1000001),oe=Object(n.a)(ie,2),se=oe[0],me=oe[1],de=Object(b.useState)(1),ue=Object(n.a)(de,2),be=ue[0],Ee=ue[1],pe=Object(b.useState)(1),ye=Object(n.a)(pe,2),fe=ye[0],he=ye[1],ge=Object(b.useState)(1),ve=Object(n.a)(ge,2),je=ve[0],Oe=ve[1];return Object(b.useEffect)((function(){if(S)switch(H(S.params.storyType),S.params.storyType){case"unitStory":var e=S.params.storyId.split("-"),t=Object(n.a)(e,3),a=t[0],r=t[1],c=t[2];A(a),Z(Number(r)),ae(Number(c));break;case"eventStory":var l=S.params.storyId.split("-"),i=Object(n.a)(l,2),o=i[0],s=i[1];le(Number(o)),me(Number(s));break;case"charaStory":var m=S.params.storyId.split("-"),d=Object(n.a)(m,1)[0];Ee(Number(d));break;case"cardStory":var u=S.params.storyId.split("-"),b=Object(n.a)(u,3),E=b[0],p=b[1],y=b[2];Oe(Number(y)),he(Number(p)),Ee(Number(E))}}),[null===S||void 0===S?void 0:S.params.storyType,null===S||void 0===S?void 0:S.params.storyId]),E.a.createElement(b.Fragment,null,E.a.createElement(r.a,{variant:"h6",className:e.header},t("common:storyReader")),E.a.createElement(u.a,{severity:"warning",className:e.alert},t("common:betaIndicator")),E.a.createElement(c.a,{className:e.content,maxWidth:"lg"},E.a.createElement(l.a,{container:!0,spacing:1},E.a.createElement(l.a,{item:!0,xs:12,md:3},E.a.createElement(i.a,{style:{width:"100%"}},E.a.createElement(o.a,{id:"select-story-type"},t("story_reader:selectLabel.storyType")),E.a.createElement(s.a,{labelId:"select-story-type",value:G,onChange:function(e){return H(e.target.value)}},E.a.createElement(m.a,{value:"eventStory"},E.a.createElement(r.a,null,t("story_reader:selectValue.eventStory"))),E.a.createElement(m.a,{value:"unitStory"},E.a.createElement(r.a,null,t("story_reader:selectValue.unitStory"))),E.a.createElement(m.a,{value:"charaStory"},E.a.createElement(r.a,null,t("story_reader:selectValue.charaStory"))),E.a.createElement(m.a,{value:"cardStory"},E.a.createElement(r.a,null,t("story_reader:selectValue.cardStory")))))),"unitStory"===G?I.length&&k.length?E.a.createElement(b.Fragment,null,E.a.createElement(l.a,{item:!0,xs:12,md:3},E.a.createElement(i.a,{style:{width:"100%"}},E.a.createElement(o.a,{id:"select-unit-name"},t("story_reader:selectLabel.unitName")),E.a.createElement(s.a,{labelId:"select-unit-name",value:q,onChange:function(e){A(e.target.value),Z(1),ae(k.find((function(t){return t.unit===e.target.value})).chapters.find((function(e){return 1===e.chapterNo})).episodes[0].id)}},I.map((function(e){return E.a.createElement(m.a,{value:e.unit,key:e.unit},E.a.createElement(j.b,{mode:_,contentKey:"unit_profile:".concat(e.unit,".name"),original:e.unitName}))}))))),E.a.createElement(l.a,{item:!0,xs:12,md:3},E.a.createElement(i.a,{style:{width:"100%"}},E.a.createElement(o.a,{id:"select-unit-story-chapter"},t("story_reader:selectLabel.unitStoryChapter")),E.a.createElement(s.a,{labelId:"select-unit-story-chapter",value:Y,onChange:function(e){return Z(e.target.value)}},k.find((function(e){return e.unit===q})).chapters.map((function(e){return E.a.createElement(m.a,{value:e.chapterNo,key:e.chapterNo},E.a.createElement(j.b,{mode:_,contentKey:"unit_story_chapter_title:".concat(e.unit,"-").concat(e.chapterNo),original:e.title,originalProps:{style:{overflow:"hidden"}},translatedProps:{style:{overflow:"hidden"}}}))}))))),E.a.createElement(l.a,{item:!0,xs:12,md:3},E.a.createElement(i.a,{style:{width:"100%"}},E.a.createElement(o.a,{id:"select-unit-story-episode"},t("story_reader:selectLabel.unitStoryEpisode")),E.a.createElement(s.a,{labelId:"select-unit-story-episode",value:te,onChange:function(e){return ae(e.target.value)}},k.find((function(e){return e.unit===q})).chapters.find((function(e){return e.chapterNo===Y})).episodes.map((function(e){return E.a.createElement(m.a,{value:e.id,key:e.id},E.a.createElement(j.b,{mode:_,contentKey:"unit_story_episode_title:".concat(e.id),original:"".concat(e.episodeNoLabel," - ").concat(e.title),originalProps:{style:{overflow:"hidden"}},translatedProps:{style:{overflow:"hidden"}}}))})))))):null:"eventStory"===G?T.length?E.a.createElement(b.Fragment,null,E.a.createElement(l.a,{item:!0,xs:12,md:3},E.a.createElement(i.a,{style:{width:"100%"}},E.a.createElement(o.a,{id:"select-event-name"},t("story_reader:selectLabel.eventName")),E.a.createElement(s.a,{labelId:"select-event-name",value:ce,onChange:function(e){le(e.target.value),me(T.find((function(t){return t.eventId===e.target.value})).eventStoryEpisodes[0].id)}},L.map((function(e){return E.a.createElement(m.a,{value:e.id,key:e.id},E.a.createElement(j.b,{mode:_,contentKey:"event_name:".concat(e.id),original:e.name,originalProps:{style:{overflow:"hidden"}},translatedProps:{style:{overflow:"hidden"}}}))}))))),E.a.createElement(l.a,{item:!0,xs:12,md:3},E.a.createElement(i.a,{style:{width:"100%"}},E.a.createElement(o.a,{id:"select-event-story-episode"},t("story_reader:selectLabel.eventStoryEpisode")),E.a.createElement(s.a,{labelId:"select-event-story-episode",value:se,onChange:function(e){return me(e.target.value)}},T.find((function(e){return e.eventId===ce})).eventStoryEpisodes.map((function(e){return E.a.createElement(m.a,{value:e.id,key:e.id},E.a.createElement(j.b,{mode:_,contentKey:"event_story_episode_title:".concat(e.id),original:"".concat(e.episodeNo," - ").concat(e.title),originalProps:{style:{overflow:"hidden"}},translatedProps:{style:{overflow:"hidden"}}}))})))))):null:"charaStory"===G?K.length?E.a.createElement(b.Fragment,null,E.a.createElement(l.a,{item:!0,xs:12,md:3},E.a.createElement(i.a,{style:{width:"100%"}},E.a.createElement(o.a,{id:"select-chara-name"},t("story_reader:selectLabel.charaName")),E.a.createElement(s.a,{labelId:"select-chara-name",value:be,onChange:function(e){Ee(e.target.value)}},K.map((function(e){return E.a.createElement(m.a,{value:e.characterId,key:e.characterId},E.a.createElement(j.a,{mode:_,characterId:e.characterId}))})))))):null:"cardStory"===G&&M.length&&F.length?E.a.createElement(b.Fragment,null,E.a.createElement(l.a,{item:!0,xs:12,md:3},E.a.createElement(i.a,{style:{width:"100%"}},E.a.createElement(o.a,{id:"select-chara-name"},t("story_reader:selectLabel.charaName")),E.a.createElement(s.a,{labelId:"select-chara-name",value:be,onChange:function(e){Ee(e.target.value);var t=M.find((function(t){return t.characterId===e.target.value})).id;he(t),Oe(F.find((function(e){return e.cardId===t})).id)}},K.map((function(e){return E.a.createElement(m.a,{value:e.characterId,key:e.characterId},E.a.createElement(j.a,{mode:_,characterId:e.characterId}))}))))),E.a.createElement(l.a,{item:!0,xs:12,md:3},E.a.createElement(i.a,{style:{width:"100%"}},E.a.createElement(o.a,{id:"select-card-name"},t("story_reader:selectLabel.cardName")),E.a.createElement(s.a,{labelId:"select-card-name",value:fe,onChange:function(e){he(e.target.value),Oe(F.find((function(t){return t.cardId===e.target.value})).id)}},M.filter((function(e){return e.characterId===be})).map((function(e){return E.a.createElement(m.a,{value:e.id,key:e.id},E.a.createElement(j.b,{mode:_,contentKey:"card_prefix:".concat(e.id),original:e.prefix,originalProps:{style:{overflow:"hidden"}},translatedProps:{style:{overflow:"hidden"}}}))}))))),E.a.createElement(l.a,{item:!0,xs:12,md:3},E.a.createElement(i.a,{style:{width:"100%"}},E.a.createElement(o.a,{id:"select-card-story-episode"},t("story_reader:selectLabel.cardStoryEpisode")),E.a.createElement(s.a,{labelId:"select-card-story-episode",value:je,onChange:function(e){return Oe(e.target.value)}},F.filter((function(e){return e.cardId===fe})).map((function(e){return E.a.createElement(m.a,{value:e.id,key:e.id},E.a.createElement(j.b,{mode:_,contentKey:"card_episode_title:".concat(e.title),original:"".concat(e.title),originalProps:{style:{overflow:"hidden"}},translatedProps:{style:{overflow:"hidden"}}}))})))))):null),E.a.createElement(l.a,{container:!0,spacing:1},E.a.createElement(l.a,{item:!0},E.a.createElement(d.a,{variant:"contained",color:"primary",component:f.b,to:"".concat(N,"/").concat(G,"/").concat("unitStory"===G?"".concat(q,"-").concat(Y,"-").concat(te):"eventStory"===G?"".concat(ce,"-").concat(se):"charaStory"===G?"".concat(be):"cardStory"===G?"".concat(be,"-").concat(fe,"-").concat(je):0)},t("story_reader:buttonLabel.showEpisode"))))),E.a.createElement(y.d,null,E.a.createElement(y.b,{path:"".concat(O,"/:storyType/:storyId")},E.a.createElement(V,null))))}}}]);
//# sourceMappingURL=51.70a13486.chunk.js.map