(this.webpackJsonptvsizeguide=this.webpackJsonptvsizeguide||[]).push([[0],Array(18).concat([function(e,t,a){e.exports=a.p+"static/media/lounge43wall.4684358a.png"},function(e,t,a){e.exports=a.p+"static/media/lounge50wall.b45f4c39.png"},function(e,t,a){e.exports=a.p+"static/media/lounge55wall.097c0265.png"},function(e,t,a){e.exports=a.p+"static/media/lounge65wall.6fe9fa81.png"},function(e,t,a){e.exports=a.p+"static/media/lounge75wall.bac82def.png"},function(e,t,a){e.exports=a.p+"static/media/lounge43stand.9263822f.png"},function(e,t,a){e.exports=a.p+"static/media/lounge50stand.aed25ff6.png"},function(e,t,a){e.exports=a.p+"static/media/lounge55stand.ca5b6cb9.png"},function(e,t,a){e.exports=a.p+"static/media/lounge65stand.1c9b0cc0.png"},function(e,t,a){e.exports=a.p+"static/media/lounge75stand.cc2fd084.png"},,,,,function(e,t,a){e.exports=a(53)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,,,,,,function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),c=a(15),l=a.n(c),r=a(29),s=a(16),o=a(17),d=a(31),h=a(30),u=(a(37),a(38),a(9)),m=a(12),p=a.n(m),g=(a(39),function(e){var t=e.children;return i.a.createElement("div",{className:"Wrapper"},t)}),f=(a(40),function(){return i.a.createElement("div",{className:"wrapperIntro"},i.a.createElement("h2",null,"Choose the right size TV for your home"),i.a.createElement("p",null,"With 55\u2033 and 65\u2033 screens now the standard, try out different TVs on our interactive sizing guide so that you can visualise them in your home."))}),v=(a(41),function(e){var t=e.imgUrl,a=e.altText;return i.a.createElement("img",{src:t,className:"loungeImage",alt:a})}),E=(a(42),function(e){var t=e.category,a=e.size,n=e.width,c=e.height,l=e.depth;e.clicked;return i.a.createElement("div",{className:"TvSpecWrapper"},i.a.createElement("div",{className:"SpecIntro"},i.a.createElement("p",null,i.a.createElement("em",null,"Note: For reference the television cabinent is 180cm wide")),i.a.createElement("p",{className:"dimensions"},i.a.createElement("span",{className:"capitalise"},t)," | Dimensions:")),i.a.createElement("table",{className:"SpecTable"},i.a.createElement("tbody",null,i.a.createElement("tr",{className:"specTr"},i.a.createElement("th",null,"Screen size:"),i.a.createElement("td",null,a,"cm")),i.a.createElement("tr",{className:"specTr"},i.a.createElement("th",null,"Width:"),i.a.createElement("td",null,n,"cm")),i.a.createElement("tr",{className:"specTr"},i.a.createElement("th",null,"Height:"),i.a.createElement("td",null,c,"cm")),i.a.createElement("tr",{className:"specTr"},i.a.createElement("th",null,"Depth:"),i.a.createElement("td",null,l,"cm")))))}),w=(a(43),function(e){var t=e.label,a=e.clicked,n=e.activeCatButton,c=e.catButtonIndex;return i.a.createElement("div",{className:"\n                            button ".concat(n===c&&"active","\n                        "),onClick:a},i.a.createElement("p",{className:"capitalise"},t))}),z=(a(44),function(e){var t=e.label,a=e.clicked,n=e.sizeButtonIndex,c=e.activeSizeButton;return i.a.createElement("div",{className:"\n                            button ".concat(c===n&&"active","\n                        "),onClick:a},i.a.createElement("p",{className:"label"},"TV Sizes:"),i.a.createElement("p",{className:"tvSize"},t,"\u2033"))}),y=a(18),x=a.n(y),b=a(19),B=a.n(b),N=a(20),S=a.n(N),I=a(21),T=a.n(I),k=a(22),C=a.n(k),W=a(23),U=a.n(W),j=a(24),O=a.n(j),L=a(25),V=a.n(L),A=a(26),D=a.n(A),J=a(27),F=a.n(J),H=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))).state={selectedTv:[{id:0,category:"wall",size:"43",width:"97",height:"56",depth:"6"}],activeCatButton:0,activeSizeButton:0,catButtonIndex:0,sizeButtonIndex:0},e}return Object(o.a)(a,[{key:"render",value:function(){var e,t,a,n,c,l=this,s=[{id:0,category:"wall",catUrl:"/"},{id:1,category:"stand",catUrl:"/stand"}],o=[{id:0,category:"wall",size:"43",width:"97",height:"56",depth:"6"},{id:1,category:"wall",size:"50",width:"113",height:"65",depth:"6"},{id:2,category:"wall",size:"55",width:"124",height:"72",depth:"6"},{id:3,category:"wall",size:"65",width:"146",height:"84",depth:"6"},{id:4,category:"wall",size:"75",width:"167",height:"96",depth:"6"}],d=[{id:0,category:"stand",size:"43",width:"197",height:"64",depth:"35"},{id:1,category:"stand",size:"50",width:"1113",height:"74",depth:"35"},{id:2,category:"stand",size:"55",width:"124",height:"80",depth:"36"},{id:3,category:"stand",size:"65",width:"146",height:"92",depth:"39"},{id:4,category:"stand",size:"75",width:"167",height:"105",depth:"39"}],h=[x.a,B.a,S.a,T.a,C.a],m=[U.a,O.a,V.a,D.a,F.a],y=null,b=this.state.activeCatButton,N=this.state.activeSizeButton,I=Object(r.a)(this.state.selectedTv,1)[0],k=I.category,W=I.size,j=I.width,L=I.height,A=I.depth,J=function(e,t){if(l.setState({activeSizeButton:e}),"wall"===t){var a=o[e],n=a.id,i=a.size,c=a.width,r=a.height,s=a.depth;l.setState({selectedTv:[{id:n,category:t,size:i,width:c,height:r,depth:s}],sizeButtonIndex:e})}else if("stand"===t){var h=d[e],u=h.id,m=h.category,p=h.size,g=h.width,f=h.height,v=h.depth;l.setState({selectedTv:[{id:u,category:m,size:p,width:g,height:f,depth:v}],sizeButtonIndex:e})}};return s.length>0&&(e=i.a.createElement(f,null),n=i.a.createElement("ul",{className:"CategoryWrapper"},s.map((function(e,t){return i.a.createElement("li",{key:e.id},i.a.createElement(u.b,{to:"".concat(e.catUrl)},i.a.createElement(w,{label:e.category,activeCatButton:b,catButtonIndex:t,clicked:function(){return function(e,t){l.setState({activeCatButton:e});var a=null;a=0===e?"wall":"stand";var n=l.state.sizeButtonIndex;if("wall"===a){var i=o[n],c=i.id,r=i.size,s=i.width,h=i.height,u=i.depth;l.setState({selectedTv:[{id:c,category:a,size:r,width:s,height:h,depth:u}]})}else if("stand"===t){var m=d[n],p=m.id,g=m.size,f=m.width,v=m.height,E=m.depth;l.setState({selectedTv:[{id:p,category:a,size:g,width:f,height:v,depth:E}]})}}(t,e.category)}})))}))),c=i.a.createElement("ul",{className:"SizesWrapper"},o.map((function(e,t){return i.a.createElement("li",{key:e.id},i.a.createElement(z,{label:e.size,activeSizeButton:N,sizeButtonIndex:t,clicked:function(){return J(t,e.category)}}))}))),y=i.a.createElement("ul",{className:"SizesWrapper"},d.map((function(e,t){return i.a.createElement("li",{key:e.id},i.a.createElement(z,{label:e.size,activeSizeButton:N,sizeButtonIndex:t,clicked:function(){return J(t,e.category)}}))}))),a=i.a.createElement(E,{category:k,size:W,width:j,height:L,depth:A}),t=i.a.createElement("div",{className:"LoungeWrapper"},i.a.createElement(p.a,{path:"/",exact:!0},i.a.createElement(v,{imgUrl:h[this.state.sizeButtonIndex],altText:"Lounge Image with television"}),c,a),i.a.createElement(p.a,{path:"/stand",exact:!0},i.a.createElement(v,{imgUrl:m[this.state.sizeButtonIndex],altText:"Lounge Image with television"}),y,a))),i.a.createElement(g,null,e,i.a.createElement(u.a,null,t,n))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(H,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}]),[[32,1,2]]]);
//# sourceMappingURL=main.8da03f72.chunk.js.map