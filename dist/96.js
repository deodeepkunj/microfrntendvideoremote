(self.webpackChunk_microfrontend_videos_images_container_application_microfrontend_videos_remote=self.webpackChunk_microfrontend_videos_images_container_application_microfrontend_videos_remote||[]).push([[96],{9411:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c});var r=n(9669),a=n.n(r),i=n(5123);const c=a().create({baseURL:"https://www.googleapis.com/youtube/v3",params:{part:"snippet",maxResults:5,key:i.J}})},1096:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>p});var r=n(5861),a=n(8152),i=n(7757),c=n.n(i),s=n(7850),o=n.n(s),l=n(8205),u=n(2213),m=n(2881),d=n(4598),v=n(9411);const p=function(){var e=(0,s.useState)([]),t=(0,a.Z)(e,2),n=t[0],i=t[1],p=(0,s.useState)(null),f=(0,a.Z)(p,2),h=f[0],E=f[1],Z=function(){var e=(0,r.Z)(c().mark((function e(t){var n,r,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.Z.get("/search",{params:{q:t}});case 2:n=e.sent,r=n.data.items,a=r[0],i(r),E(a);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=function(e){E(e)};return o().createElement("div",{className:"ui container"},o().createElement(l.Z,{onFormSubmit:Z}),o().createElement("div",{className:"ui grid"},o().createElement("div",{className:"ui row"},o().createElement("div",{className:"eleven wide column"},o().createElement(m.Z,{video:h})),o().createElement("div",{className:"five wide column"},o().createElement(u.Z,null,n.map((function(e){return o().createElement(d.Z,{key:e.id.videoId,onVideoSelect:g,video:e})})))))))}},8205:(e,t,n)=>{"use strict";n.d(t,{Z:()=>d});var r=n(5671),a=n(3144),i=n(7326),c=n(9340),s=n(6215),o=n(1120),l=n(4942),u=n(7850),m=n.n(u);const d=function(e){(0,c.Z)(d,e);var t,n,u=(t=d,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=(0,o.Z)(t);if(n){var a=(0,o.Z)(this).constructor;e=Reflect.construct(r,arguments,a)}else e=r.apply(this,arguments);return(0,s.Z)(this,e)});function d(){var e;(0,r.Z)(this,d);for(var t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];return e=u.call.apply(u,[this].concat(n)),(0,l.Z)((0,i.Z)(e),"state",{term:""}),(0,l.Z)((0,i.Z)(e),"onInputChange",(function(t){e.setState({term:t.target.value})})),(0,l.Z)((0,i.Z)(e),"onFormSubmit",(function(t){t.preventDefault(),e.props.onFormSubmit(e.state.term)})),e}return(0,a.Z)(d,[{key:"render",value:function(){return m().createElement("div",{className:"search-bar ui segment"},m().createElement("form",{className:"ui form",onSubmit:this.onFormSubmit},m().createElement("div",{className:"field"},m().createElement("label",null,"Video Search"),m().createElement("input",{type:"text",value:this.state.term,onChange:this.onInputChange}))))}}]),d}(m().Component)},2881:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c});var r=n(7850),a=n.n(r),i=n(2004);const c=function(e){var t=e.video;if(!t)return a().createElement("div",null);var n=null==t?void 0:t.id.videoId,r=null==t?void 0:t.snippet.title,c=null==t?void 0:t.snippet.description,s="https://www.youtube.com/embed/".concat(n);return a().createElement("div",null,a().createElement("div",{className:"ui embed"},a().createElement(i.Z,{url:s})),a().createElement("div",{className:"ui segment"},a().createElement("h4",{className:"ui header"},r),a().createElement("p",null,c)))}},4598:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var r=n(7850),a=n.n(r);n(1996);const i=function(e){var t=e.video,n=e.onVideoSelect,r=null==t?void 0:t.snippet.thumbnails.medium.url,i=null==t?void 0:t.snippet.title;return a().createElement("div",{onClick:function(){return n(t)},className:"video-item item"},a().createElement("img",{className:"ui image",src:r,alt:i}),a().createElement("div",{className:"content"},a().createElement("div",{className:"header"},i)))}},2213:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var r=n(7850),a=n.n(r);const i=function(e){var t=e.children;return a().createElement("div",{className:"ui relaxed divided list"},t)}},2548:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>i});var r=n(3645),a=n.n(r)()(!1);a.push([e.id,".video-item {\n  display: flex !important;\n  align-items: center !important;\n  cursor: pointer;\n}\n\n.video-item.item img {\n  max-width: 180px;\n}\n",""]);const i=a},1996:(e,t,n)=>{var r=n(3379),a=n(2548);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.id,a,""]]);r(a,{insert:"head",singleton:!1}),e.exports=a.locals||{}},5123:e=>{"use strict";e.exports=JSON.parse('{"J":"AIzaSyC9i8TV41KO5pBprjmd0khaF8E5rNaFPlA"}')}}]);