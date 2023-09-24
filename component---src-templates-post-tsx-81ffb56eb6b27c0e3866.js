/*! For license information please see component---src-templates-post-tsx-81ffb56eb6b27c0e3866.js.LICENSE.txt */
(self.webpackChunkkciter_so=self.webpackChunkkciter_so||[]).push([[186],{6097:function(t){function e(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){for(var i=0;i<e.length;i++){var s=e[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}var s;s=function(){function t(){var i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e(this,t),this.selector=i,this.elements=[],this.version="1.3.0",this.vp=this.getViewportSize(),this.body=document.querySelector("body"),this.options={wrap:s.wrap||!1,wrapWith:s.wrapWith||"<span></span>",marginTop:s.marginTop||0,marginBottom:s.marginBottom||0,stickyFor:s.stickyFor||0,stickyClass:s.stickyClass||null,stickyContainer:s.stickyContainer||"body"},this.updateScrollTopPosition=this.updateScrollTopPosition.bind(this),this.updateScrollTopPosition(),window.addEventListener("load",this.updateScrollTopPosition),window.addEventListener("scroll",this.updateScrollTopPosition),this.run()}var s,n,c;return s=t,(n=[{key:"run",value:function(){var t=this,e=setInterval((function(){if("complete"===document.readyState){clearInterval(e);var i=document.querySelectorAll(t.selector);t.forEach(i,(function(e){return t.renderElement(e)}))}}),10)}},{key:"renderElement",value:function(t){var e=this;t.sticky={},t.sticky.active=!1,t.sticky.marginTop=parseInt(t.getAttribute("data-margin-top"))||this.options.marginTop,t.sticky.marginBottom=parseInt(t.getAttribute("data-margin-bottom"))||this.options.marginBottom,t.sticky.stickyFor=parseInt(t.getAttribute("data-sticky-for"))||this.options.stickyFor,t.sticky.stickyClass=t.getAttribute("data-sticky-class")||this.options.stickyClass,t.sticky.wrap=!!t.hasAttribute("data-sticky-wrap")||this.options.wrap,t.sticky.stickyContainer=this.options.stickyContainer,t.sticky.container=this.getStickyContainer(t),t.sticky.container.rect=this.getRectangle(t.sticky.container),t.sticky.rect=this.getRectangle(t),"img"===t.tagName.toLowerCase()&&(t.onload=function(){return t.sticky.rect=e.getRectangle(t)}),t.sticky.wrap&&this.wrapElement(t),this.activate(t)}},{key:"wrapElement",value:function(t){t.insertAdjacentHTML("beforebegin",t.getAttribute("data-sticky-wrapWith")||this.options.wrapWith),t.previousSibling.appendChild(t)}},{key:"activate",value:function(t){t.sticky.rect.top+t.sticky.rect.height<t.sticky.container.rect.top+t.sticky.container.rect.height&&t.sticky.stickyFor<this.vp.width&&!t.sticky.active&&(t.sticky.active=!0),this.elements.indexOf(t)<0&&this.elements.push(t),t.sticky.resizeEvent||(this.initResizeEvents(t),t.sticky.resizeEvent=!0),t.sticky.scrollEvent||(this.initScrollEvents(t),t.sticky.scrollEvent=!0),this.setPosition(t)}},{key:"initResizeEvents",value:function(t){var e=this;t.sticky.resizeListener=function(){return e.onResizeEvents(t)},window.addEventListener("resize",t.sticky.resizeListener)}},{key:"destroyResizeEvents",value:function(t){window.removeEventListener("resize",t.sticky.resizeListener)}},{key:"onResizeEvents",value:function(t){this.vp=this.getViewportSize(),t.sticky.rect=this.getRectangle(t),t.sticky.container.rect=this.getRectangle(t.sticky.container),t.sticky.rect.top+t.sticky.rect.height<t.sticky.container.rect.top+t.sticky.container.rect.height&&t.sticky.stickyFor<this.vp.width&&!t.sticky.active?t.sticky.active=!0:(t.sticky.rect.top+t.sticky.rect.height>=t.sticky.container.rect.top+t.sticky.container.rect.height||t.sticky.stickyFor>=this.vp.width&&t.sticky.active)&&(t.sticky.active=!1),this.setPosition(t)}},{key:"initScrollEvents",value:function(t){var e=this;t.sticky.scrollListener=function(){return e.onScrollEvents(t)},window.addEventListener("scroll",t.sticky.scrollListener)}},{key:"destroyScrollEvents",value:function(t){window.removeEventListener("scroll",t.sticky.scrollListener)}},{key:"onScrollEvents",value:function(t){t.sticky&&t.sticky.active&&this.setPosition(t)}},{key:"setPosition",value:function(t){this.css(t,{position:"",width:"",top:"",left:""}),this.vp.height<t.sticky.rect.height||!t.sticky.active||(t.sticky.rect.width||(t.sticky.rect=this.getRectangle(t)),t.sticky.wrap&&this.css(t.parentNode,{display:"block",width:t.sticky.rect.width+"px",height:t.sticky.rect.height+"px"}),0===t.sticky.rect.top&&t.sticky.container===this.body?(this.css(t,{position:"fixed",top:t.sticky.rect.top+"px",left:t.sticky.rect.left+"px",width:t.sticky.rect.width+"px"}),t.sticky.stickyClass&&t.classList.add(t.sticky.stickyClass)):this.scrollTop>t.sticky.rect.top-t.sticky.marginTop?(this.css(t,{position:"fixed",width:t.sticky.rect.width+"px",left:t.sticky.rect.left+"px"}),this.scrollTop+t.sticky.rect.height+t.sticky.marginTop>t.sticky.container.rect.top+t.sticky.container.offsetHeight-t.sticky.marginBottom?(t.sticky.stickyClass&&t.classList.remove(t.sticky.stickyClass),this.css(t,{top:t.sticky.container.rect.top+t.sticky.container.offsetHeight-(this.scrollTop+t.sticky.rect.height+t.sticky.marginBottom)+"px"})):(t.sticky.stickyClass&&t.classList.add(t.sticky.stickyClass),this.css(t,{top:t.sticky.marginTop+"px"}))):(t.sticky.stickyClass&&t.classList.remove(t.sticky.stickyClass),this.css(t,{position:"",width:"",top:"",left:""}),t.sticky.wrap&&this.css(t.parentNode,{display:"",width:"",height:""})))}},{key:"update",value:function(){var t=this;this.forEach(this.elements,(function(e){e.sticky.rect=t.getRectangle(e),e.sticky.container.rect=t.getRectangle(e.sticky.container),t.activate(e),t.setPosition(e)}))}},{key:"destroy",value:function(){var t=this;window.removeEventListener("load",this.updateScrollTopPosition),window.removeEventListener("scroll",this.updateScrollTopPosition),this.forEach(this.elements,(function(e){t.destroyResizeEvents(e),t.destroyScrollEvents(e),delete e.sticky}))}},{key:"getStickyContainer",value:function(t){for(var e=t.parentNode;!e.hasAttribute("data-sticky-container")&&!e.parentNode.querySelector(t.sticky.stickyContainer)&&e!==this.body;)e=e.parentNode;return e}},{key:"getRectangle",value:function(t){this.css(t,{position:"",width:"",top:"",left:""});var e=Math.max(t.offsetWidth,t.clientWidth,t.scrollWidth),i=Math.max(t.offsetHeight,t.clientHeight,t.scrollHeight),s=0,n=0;do{s+=t.offsetTop||0,n+=t.offsetLeft||0,t=t.offsetParent}while(t);return{top:s,left:n,width:e,height:i}}},{key:"getViewportSize",value:function(){return{width:Math.max(document.documentElement.clientWidth,window.innerWidth||0),height:Math.max(document.documentElement.clientHeight,window.innerHeight||0)}}},{key:"updateScrollTopPosition",value:function(){this.scrollTop=(window.pageYOffset||document.scrollTop)-(document.clientTop||0)||0}},{key:"forEach",value:function(t,e){for(var i=0,s=t.length;i<s;i++)e(t[i])}},{key:"css",value:function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t.style[i]=e[i])}}])&&i(s.prototype,n),c&&i(s,c),t}(),t.exports=s},3173:function(t,e,i){var s=i(6097);t.exports=s},3474:function(t,e,i){"use strict";var s=i(7294);e.Z=function(t){var e=t.posts,i=t.current,n=t.style;return s.createElement("div",{className:"related",style:n},s.createElement("div",{className:"related-posts"},e.map((function(t){return t.node.fields.slug!==i&&s.createElement("div",{className:"related-post",key:t.node.fields.slug},s.createElement("a",{href:t.node.fields.slug},s.createElement("img",{src:t.node.frontmatter.image}),s.createElement("div",{className:"title"},t.node.frontmatter.title),s.createElement("small",null,t.node.fields.date)))}))))}},6677:function(t,e,i){"use strict";i.r(e),i.d(e,{default:function(){return v}});var s=i(7294),n=i(7752),c=i(4216),o=i(8538),r=i.n(o),a=i(6725),l=i(736),y=i(3474),h=i(3173),d=i.n(h),u=function t(e){var i=e.items;return s.createElement("ul",null,i.map((function(e){return s.createElement("li",{key:e.url},s.createElement("a",{href:e.url},e.title),e.items&&s.createElement(t,{items:e.items}))})))},p=function(t){var e=t.items;return(0,s.useEffect)((function(){void 0!==typeof document&&new(d())(".toc")}),[e]),s.createElement("div",{className:"toc","data-margin-top":"50"},s.createElement(u,{items:e}))},k=i(5414),m=i(8747),f=i.n(m);r().extend(i(2063));var v=function(t){var e=t.data,i=t.location,o=e.mdx,h=o.body,d=o.tableOfContents,u=o.fields,m=o.frontmatter,v=o.excerpt,g=r()(u.date).locale("ko").format(),E={headline:m.title,dateModified:g,datePublished:g,image:""+i.href+m.image,mainEntityOfPage:{"@type":"WebPage","@id":i.href},author:{"@type":"Person",name:"Lee Sun-Hyoup"},url:i.href,description:v,"@type":"BlogPosting","@context":"https://schema.org"};(0,s.useEffect)((function(){void 0!==typeof document&&f()((function(){f()(".post-container a.footnote-ref").each((function(t,e){var i,s=null===(i=f()(e).attr("href"))||void 0===i?void 0:i.slice(1),n=f()("#"+s).text().replace("↩","");f()(e).attr("data-tooltip",n)}))}))}),[]);var w=(0,s.useState)(),b=w[0],S=w[1];(0,s.useEffect)((function(){S(e.allMdx.edges.filter((function(t){return t.node.fields.slug!==u.slug})).sort((function(){return Math.random()-.5})).slice(0,6))}),[]);var C=m.draft&&!0;return s.createElement(n.Z,null,s.createElement(c.Z,{title:m.title,description:v,meta:[{name:"article:published_time",content:r()(u.date).locale("ko").format()},{name:"image",property:"og:image",content:"https://kciter.so"+m.image},{property:"og:image:secure_url",content:"https://kciter.so"+m.image}]}),s.createElement(k.q,null,s.createElement("script",{type:"application/ld+json"},JSON.stringify(E))),s.createElement("h1",{className:"post-title"},m.title),s.createElement("span",{className:"post-date"},"Written on ",r()(u.date).locale("en").format("LL")),s.createElement("img",{src:m.image}),C||d.items&&s.createElement(p,{items:d.items}),s.createElement("div",{className:"post-content"},C?s.createElement("div",{className:"not-yet-published"},"Not yet published"):s.createElement(a.MDXRenderer,null,h)),s.createElement(l.Z,{tags:m.tags,comment:m.comments}),b&&s.createElement(y.Z,{posts:b,current:u.slug}))}}}]);
//# sourceMappingURL=component---src-templates-post-tsx-81ffb56eb6b27c0e3866.js.map