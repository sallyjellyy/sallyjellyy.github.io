(self.webpackChunkkciter_so=self.webpackChunkkciter_so||[]).push([[598],{8538:function(t){t.exports=function(){"use strict";var t="millisecond",e="second",n="minute",r="hour",i="day",s="week",a="month",u="quarter",o="year",c="date",f=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,d=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,h={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},l=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},m={s:l,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+l(r,2,"0")+":"+l(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,a),s=n-i<0,u=e.clone().add(r+(s?-1:1),a);return+(-(r+(n-i)/(s?i-u:u-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(f){return{M:a,y:o,w:s,d:i,D:c,h:r,m:n,s:e,ms:t,Q:u}[f]||String(f||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},$="en",p={};p[$]=h;var M=function(t){return t instanceof D},g=function(t,e,n){var r;if(!t)return $;if("string"==typeof t)p[t]&&(r=t),e&&(p[t]=e,r=t);else{var i=t.name;p[i]=t,r=i}return!n&&r&&($=r),r||!n&&$},y=function(t,e){if(M(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new D(n)},v=m;v.l=g,v.i=M,v.w=function(t,e){return y(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var D=function(){function h(t){this.$L=g(t.locale,null,!0),this.parse(t)}var l=h.prototype;return l.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(v.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(f);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},l.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},l.$utils=function(){return v},l.isValid=function(){return!("Invalid Date"===this.$d.toString())},l.isSame=function(t,e){var n=y(t);return this.startOf(e)<=n&&n<=this.endOf(e)},l.isAfter=function(t,e){return y(t)<this.startOf(e)},l.isBefore=function(t,e){return this.endOf(e)<y(t)},l.$g=function(t,e,n){return v.u(t)?this[e]:this.set(n,t)},l.unix=function(){return Math.floor(this.valueOf()/1e3)},l.valueOf=function(){return this.$d.getTime()},l.startOf=function(t,u){var f=this,d=!!v.u(u)||u,h=v.p(t),l=function(t,e){var n=v.w(f.$u?Date.UTC(f.$y,e,t):new Date(f.$y,e,t),f);return d?n:n.endOf(i)},m=function(t,e){return v.w(f.toDate()[t].apply(f.toDate("s"),(d?[0,0,0,0]:[23,59,59,999]).slice(e)),f)},$=this.$W,p=this.$M,M=this.$D,g="set"+(this.$u?"UTC":"");switch(h){case o:return d?l(1,0):l(31,11);case a:return d?l(1,p):l(0,p+1);case s:var y=this.$locale().weekStart||0,D=($<y?$+7:$)-y;return l(d?M-D:M+(6-D),p);case i:case c:return m(g+"Hours",0);case r:return m(g+"Minutes",1);case n:return m(g+"Seconds",2);case e:return m(g+"Milliseconds",3);default:return this.clone()}},l.endOf=function(t){return this.startOf(t,!1)},l.$set=function(s,u){var f,d=v.p(s),h="set"+(this.$u?"UTC":""),l=(f={},f[i]=h+"Date",f[c]=h+"Date",f[a]=h+"Month",f[o]=h+"FullYear",f[r]=h+"Hours",f[n]=h+"Minutes",f[e]=h+"Seconds",f[t]=h+"Milliseconds",f)[d],m=d===i?this.$D+(u-this.$W):u;if(d===a||d===o){var $=this.clone().set(c,1);$.$d[l](m),$.init(),this.$d=$.set(c,Math.min(this.$D,$.daysInMonth())).$d}else l&&this.$d[l](m);return this.init(),this},l.set=function(t,e){return this.clone().$set(t,e)},l.get=function(t){return this[v.p(t)]()},l.add=function(t,u){var c,f=this;t=Number(t);var d=v.p(u),h=function(e){var n=y(f);return v.w(n.date(n.date()+Math.round(e*t)),f)};if(d===a)return this.set(a,this.$M+t);if(d===o)return this.set(o,this.$y+t);if(d===i)return h(1);if(d===s)return h(7);var l=(c={},c[n]=6e4,c[r]=36e5,c[e]=1e3,c)[d]||1,m=this.$d.getTime()+t*l;return v.w(m,this)},l.subtract=function(t,e){return this.add(-1*t,e)},l.format=function(t){var e=this;if(!this.isValid())return"Invalid Date";var n=t||"YYYY-MM-DDTHH:mm:ssZ",r=v.z(this),i=this.$locale(),s=this.$H,a=this.$m,u=this.$M,o=i.weekdays,c=i.months,f=function(t,r,i,s){return t&&(t[r]||t(e,n))||i[r].substr(0,s)},h=function(t){return v.s(s%12||12,t,"0")},l=i.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},m={YY:String(this.$y).slice(-2),YYYY:this.$y,M:u+1,MM:v.s(u+1,2,"0"),MMM:f(i.monthsShort,u,c,3),MMMM:f(c,u),D:this.$D,DD:v.s(this.$D,2,"0"),d:String(this.$W),dd:f(i.weekdaysMin,this.$W,o,2),ddd:f(i.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(s),HH:v.s(s,2,"0"),h:h(1),hh:h(2),a:l(s,a,!0),A:l(s,a,!1),m:String(a),mm:v.s(a,2,"0"),s:String(this.$s),ss:v.s(this.$s,2,"0"),SSS:v.s(this.$ms,3,"0"),Z:r};return n.replace(d,(function(t,e){return e||m[t]||r.replace(":","")}))},l.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},l.diff=function(t,c,f){var d,h=v.p(c),l=y(t),m=6e4*(l.utcOffset()-this.utcOffset()),$=this-l,p=v.m(this,l);return p=(d={},d[o]=p/12,d[a]=p,d[u]=p/3,d[s]=($-m)/6048e5,d[i]=($-m)/864e5,d[r]=$/36e5,d[n]=$/6e4,d[e]=$/1e3,d)[h]||$,f?p:v.a(p)},l.daysInMonth=function(){return this.endOf(a).$D},l.$locale=function(){return p[this.$L]},l.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=g(t,e,!0);return r&&(n.$L=r),n},l.clone=function(){return v.w(this.$d,this)},l.toDate=function(){return new Date(this.valueOf())},l.toJSON=function(){return this.isValid()?this.toISOString():null},l.toISOString=function(){return this.$d.toISOString()},l.toString=function(){return this.$d.toUTCString()},h}(),S=D.prototype;return y.prototype=S,[["$ms",t],["$s",e],["$m",n],["$H",r],["$W",i],["$M",a],["$y",o],["$D",c]].forEach((function(t){S[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),y.extend=function(t,e){return t.$i||(t(e,D,y),t.$i=!0),y},y.locale=g,y.isDayjs=M,y.unix=function(t){return y(1e3*t)},y.en=p[$],y.Ls=p,y.p={},y}()},2063:function(t){t.exports=function(){"use strict";var t={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"};return function(e,n,r){var i=n.prototype,s=i.format;r.en.formats=t,i.format=function(e){void 0===e&&(e="YYYY-MM-DDTHH:mm:ssZ");var n=this.$locale().formats,r=function(e,n){return e.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(e,r,i){var s=i&&i.toUpperCase();return r||n[i]||t[i]||n[s].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(t,e,n){return e||n.slice(1)}))}))}(e,void 0===n?{}:n);return s.call(this,r)}}}()},4216:function(t,e,n){"use strict";var r=n(7294),i=n(5414),s=n(5444),a=function(t){var e,n,a=t.title,u=t.description,o=t.meta,c=(0,s.useStaticQuery)("63159454").site,f=u||c.siteMetadata.description,d=a||(null===(e=c.siteMetadata)||void 0===e?void 0:e.title);return r.createElement(i.q,{htmlAttributes:{ko:"ko"},title:d,titleTemplate:a?"%s | kciter.so":void 0,meta:[{name:"description",content:f},{property:"author",content:"Lee Sun-Hyoup"},{property:"og:title",content:d},{property:"og:description",content:f},{property:"og:type",content:"website"},{property:"og:site_name",content:"kciter.so"},{property:"og:locale",content:"ko_KR"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:"Lee Sun-Hyoup"},{name:"twitter:title",content:d},{name:"twitter:description",content:f},null!==(n=o.find((function(t){return"og:image"===t.name})))&&void 0!==n?n:{name:"og:image",content:"https://kciter.so/images/og.png"}].concat(o)})};a.defaultProps={lang:"en",meta:[],description:""},e.Z=a},5950:function(t,e,n){"use strict";n.r(e);var r=n(7294),i=n(7752),s=n(4216),a=n(5444),u=n(8538),o=n.n(u);o().extend(n(2063));e.default=function(){var t=(0,a.useStaticQuery)("1444442475").allMdx.group.reverse();return r.createElement(i.Z,null,r.createElement(s.Z,{title:"Snippets"}),r.createElement("div",null,t.map((function(t){var e=t.edges[0].node.fields.year;return r.createElement(r.Fragment,{key:e},r.createElement("h1",null,e),t.edges.map((function(t){return r.createElement("div",{className:"posts",key:t.node.fields.slug},r.createElement("a",{href:t.node.fields.slug},t.node.frontmatter.title),r.createElement("span",{className:"post-date"},r.createElement("i",{className:"fa fa-calendar","aria-hidden":"true"})," ",o()(t.node.fields.date).locale("en").format("LL")))})))}))))}}}]);
//# sourceMappingURL=component---src-pages-snippets-tsx-a68bac8b8a47e3842f38.js.map