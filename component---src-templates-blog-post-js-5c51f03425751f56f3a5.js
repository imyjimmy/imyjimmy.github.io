(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{146:function(e,t,a){"use strict";a.r(t);a(32);var r=a(7),n=a.n(r),i=a(0),o=a.n(i),l=a(148),s=a(166),d=a.n(s),c=a(150);var u=function(){return o.a.createElement(l.StaticQuery,{render:function(e){var t=e.site.siteMetadata,a=t.author,r=t.social;return o.a.createElement("div",{style:{display:"flex",marginBottom:Object(c.a)(2.5)}},o.a.createElement(d.a,{alt:a,style:{marginRight:Object(c.a)(.5),marginBottom:0,minWidth:50,borderRadius:"100%"}}),o.a.createElement("p",null,"Written by ",o.a.createElement("strong",null,a)," who lives and works in San Francisco building useful things."," ",o.a.createElement("a",{href:"https://twitter.com/"+r.twitter},"You should follow him on Twitter")))}})},f=a(154),m=a(155);a.d(t,"pageQuery",function(){return g});var p=function(e){function t(){return e.apply(this,arguments)||this}return n()(t,e),t.prototype.render=function(){var e=this.props.data.markdownRemark,t=this.props.data.site.siteMetadata.title,a=this.props.pageContext,r=a.previous,n=a.next;return o.a.createElement(f.a,{location:this.props.location,title:t},o.a.createElement(m.a,{title:e.frontmatter.title,description:e.excerpt}),o.a.createElement("h1",null,e.frontmatter.title),o.a.createElement("p",{style:Object.assign({},Object(c.b)(-.2),{display:"block",marginBottom:Object(c.a)(1),marginTop:Object(c.a)(-1)})},e.frontmatter.date),o.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.html}}),o.a.createElement("hr",{style:{marginBottom:Object(c.a)(1)}}),o.a.createElement(u,null),o.a.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},o.a.createElement("li",null,r&&o.a.createElement(l.Link,{to:r.fields.slug,rel:"prev"},"← ",r.frontmatter.title)),o.a.createElement("li",null,n&&o.a.createElement(l.Link,{to:n.fields.slug,rel:"next"},n.frontmatter.title," →"))))},t}(o.a.Component),g=(t.default=p,"2761936148")},148:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return p}),a.d(t,"StaticQueryContext",function(){return f}),a.d(t,"StaticQuery",function(){return m});var r=a(0),n=a.n(r),i=a(4),o=a.n(i),l=a(147),s=a.n(l);a.d(t,"Link",function(){return s.a}),a.d(t,"withPrefix",function(){return l.withPrefix}),a.d(t,"navigate",function(){return l.navigate}),a.d(t,"push",function(){return l.push}),a.d(t,"replace",function(){return l.replace}),a.d(t,"navigateTo",function(){return l.navigateTo});var d=a(149),c=a.n(d);a.d(t,"PageRenderer",function(){return c.a});var u=a(33);a.d(t,"parsePath",function(){return u.a});var f=n.a.createContext({}),m=function(e){return n.a.createElement(f.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):n.a.createElement("div",null,"Loading (StaticQuery)")})};function p(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},149:function(e,t,a){var r;e.exports=(r=a(153))&&r.default||r},150:function(e,t,a){"use strict";a.d(t,"a",function(){return s}),a.d(t,"b",function(){return d});var r=a(159),n=a.n(r),i=a(160),o=a.n(i);o.a.overrideThemeStyles=function(){return{"a.gatsby-resp-image-link":{boxShadow:"none"},html:{overflowY:"none"}}},delete o.a.googleFonts;var l=new n.a(o.a);var s=l.rhythm,d=l.scale},151:function(e,t,a){a(32);a(163)();var r={transparent:"transparent","blue-black":"#161719","blue-grey":"#23262b",black:"#222b2f","grey-darkest":"#273238","grey-darker":"#364349","grey-dark":"#70818a",grey:"#9babb4","grey-light":"#dae4e9","grey-lighter":"#f3f7f9","grey-lightest":"#fafcfc",white:"#ffffff","red-darkest":"#420806","red-darker":"#6a1b19","red-dark":"#cc1f1a",red:"#bf381a","red-light":"#ef5753","red-lighter":"#f9acaa","red-lightest":"#fcebea","orange-darkest":"#542605","orange-darker":"#7f4012","orange-dark":"#c1611f",orange:"#e07628","orange-light":"#ffa31b","orange-lighter":"#fcd9b6","orange-lightest":"#fff5eb","yellow-darkest":"#453411","yellow-darker":"#684f1d","yellow-dark":"#f2d024",yellow:"#e9af32","yellow-light":"#fff382","yellow-lighter":"#fff9c2","yellow-lightest":"#fcfbeb","green-darkest":"#032d19","green-darker":"#0b4228","green-dark":"#1f9d55",green:"#38c172","green-light":"#51d88a","green-lighter":"#a2f5bf","green-lightest":"#e3fcec","teal-darkest":"#0d3331","teal-darker":"#174e4b","teal-dark":"#38a89d",teal:"#4dc0b5","teal-light":"#64d5ca","teal-lighter":"#a0f0ed","teal-lightest":"#e8fffe","blue-darkest":"#0a224e","blue-darker":"#103d60","blue-dark":"#2779bd",blue:"#a0d8f1","blue-light":"#6cb2eb","blue-lighter":"#bcdefa","blue-lightest":"#eff8ff","indigo-darkest":"#191e38","indigo-darker":"#2f365f","indigo-dark":"#5661b3",indigo:"#6574cd","indigo-light":"#7886d7","indigo-lighter":"#b2b7ff","indigo-lightest":"#e6e8ff","purple-darkest":"#1f133f","purple-darker":"#352465","purple-dark":"#794acf",purple:"#9561e2","purple-light":"#a779e9","purple-lighter":"#d6bbfc","purple-lightest":"#f3ebff","pink-darkest":"#45051e","pink-darker":"#72173a","pink-dark":"#eb5286",pink:"#f66d9b","pink-light":"#fa7ea8","pink-lighter":"#ffbbca","pink-lightest":"#ffebef"};e.exports={colors:r,screens:{sm:"400px",md:"600px",lg:"900px",xl:"1200px",xxl:"1600px"},fonts:{sans:['"Open Sans"',"-apple-system","BlinkMacSystemFont","Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue","sans-serif"],serif:['"Cantata One"',"Constantia","Lucida Bright","Lucidabright","Lucida Serif","Lucida","DejaVu Serif","Bitstream Vera Serif","Liberation Serif","Georgia","serif"],mono:["Menlo","Monaco","Consolas","Liberation Mono","Courier New","monospace"]},textSizes:{xs:".75rem",sm:".875rem",base:"1rem",lg:"1.125rem",xl:"1.25rem","2xl":"1.5rem","3xl":"1.875rem","4xl":"2.25rem","5xl":"3rem","6xl":"5rem","7xl":"8rem"},fontWeights:{hairline:100,thin:200,light:300,normal:400,medium:500,semibold:600,bold:700,extrabold:800,black:900},leading:{none:1,tight:1.25,normal:1.5,loose:2},tracking:{tight:"-0.05em",normal:"0",wide:"0.05em"},textColors:r,backgroundColors:r,borderWidths:{default:"1px",0:"0",2:"2px",4:"4px",8:"8px"},borderColors:Object.assign({default:r["grey-light"]},r),borderRadius:{none:"0",sm:".125rem",default:".25rem",lg:".5rem",full:"9999px"},width:{auto:"auto",px:"1px",1:"0.25rem",2:"0.5rem",3:"0.75rem",4:"1rem",6:"1.5rem",8:"2rem",10:"2.5rem",12:"3rem",16:"4rem",24:"6rem",32:"8rem",48:"12rem",64:"16rem","1/2":"50%","1/3":"33.33333%","2/3":"66.66667%","1/4":"25%","3/4":"75%","1/5":"20%","2/5":"40%","3/5":"60%","4/5":"80%","1/6":"16.66667%","5/6":"83.33333%",full:"100%",screen:"100vw"},height:{auto:"auto",px:"1px",1:"0.25rem",2:"0.5rem",3:"0.75rem",4:"1rem",6:"1.5rem",8:"2rem",10:"2.5rem",12:"3rem",16:"4rem",24:"6rem",32:"8rem",48:"12rem",64:"16rem",full:"100%",screen:"100vh"},minWidth:{0:"0",full:"100%"},minHeight:{0:"0",full:"100%",screen:"100vh"},maxWidth:{xs:"20rem",sm:"30rem",md:"40rem",lg:"50rem",xl:"60rem","2xl":"70rem","3xl":"80rem","4xl":"90rem","5xl":"100rem",full:"100%"},maxHeight:{full:"100%",screen:"100vh"},padding:{px:"1px",0:"0",1:"0.25rem",2:"0.5rem",3:"0.75rem",4:"1rem",6:"1.5rem",8:"2rem",12:"3rem",16:"4rem",24:"6rem",32:"8rem"},margin:{auto:"auto",px:"1px",0:"0",1:"0.25rem",2:"0.5rem",3:"0.75rem",4:"1rem",6:"1.5rem",8:"2rem"},negativeMargin:{px:"1px",0:"0",1:"0.25rem",2:"0.5rem",3:"0.75rem",4:"1rem",6:"1.5rem",8:"2rem"},shadows:{default:"0 2px 4px 0 rgba(0,0,0,0.10)",md:"0 4px 8px 0 rgba(0,0,0,0.12), 0 2px 4px 0 rgba(0,0,0,0.08)",lg:"0 15px 30px 0 rgba(0,0,0,0.11), 0 5px 15px 0 rgba(0,0,0,0.08)",inner:"inset 0 2px 4px 0 rgba(0,0,0,0.06)",none:"none"},zIndex:{auto:"auto",0:0,10:10,20:20,30:30,40:40,50:50},opacity:{0:"0",25:".25",50:".5",75:".75",100:"1"},options:{prefix:"",important:!1}}},153:function(e,t,a){"use strict";a.r(t);a(32);var r=a(0),n=a.n(r),i=a(4),o=a.n(i),l=a(55),s=a(2),d=function(e){var t=e.location,a=s.default.getResourcesForPathnameSync(t.pathname);return n.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json))};d.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=d},154:function(e,t,a){"use strict";a(32);var r=a(7),n=a.n(r),i=a(0),o=a.n(i),l=a(148),s=a(150),d=function(e){function t(){return e.apply(this,arguments)||this}return n()(t,e),t.prototype.render=function(){var e,t=this.props,a=t.location,r=t.title,n=t.children;return e="/"===a.pathname?o.a.createElement("h1",{style:Object.assign({},Object(s.b)(1.5),{marginBottom:Object(s.a)(1.5),marginTop:0})},o.a.createElement(l.Link,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},r)):o.a.createElement("h3",{style:{fontFamily:"Montserrat, sans-serif",marginTop:0,marginBottom:Object(s.a)(-1)}},o.a.createElement(l.Link,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},r)),o.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(s.a)(24),padding:Object(s.a)(1.5)+" "+Object(s.a)(.75)}},e,n,o.a.createElement("footer",null,"© ",(new Date).getFullYear(),", Built with"," ",o.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby")))},t}(o.a.Component);t.a=d},155:function(e,t,a){"use strict";var r=a(0),n=a.n(r),i=a(161),o=a.n(i),l=a(156),s=a.n(l);t.a=function(){var e=s.a.siteTitle,t=s.a.siteDescription,a="/"===s.a.pathPrefix?"":s.a.pathPrefix,r=s.a.siteUrl+a+s.a.siteLogo,i=[{"@context":"http://schema.org","@type":"WebSite",url:s.a.siteUrl+s.a.pathPrefix,name:e,alternateName:s.a.siteTitleAlt?s.a.siteTitleAlt:""}];return n.a.createElement(o.a,null,n.a.createElement("html",{lang:s.a.siteLanguage}),n.a.createElement("title",null,e),n.a.createElement("link",{rel:"apple-touch-icon",href:"/favicons/apple-touch-icon.png"}),n.a.createElement("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicons/favicon-32x32.png"}),n.a.createElement("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicons/favicon-16x16.png"}),n.a.createElement("link",{rel:"shortcut icon",href:"favicon.ico"}),n.a.createElement("meta",{name:"msapplication-TileColor",content:s.a.backgroundColor}),n.a.createElement("meta",{name:"msapplication-config",content:"browserconfig.xml"}),n.a.createElement("meta",{name:"description",content:t}),n.a.createElement("meta",{name:"image",content:r}),n.a.createElement("script",{type:"application/ld+json"},JSON.stringify(i)),n.a.createElement("meta",{property:"og:locale",content:s.a.ogLanguage}),n.a.createElement("meta",{property:"og:site_name",content:s.a.ogSiteName}),n.a.createElement("meta",{property:"og:title",content:e}),n.a.createElement("meta",{property:"og:description",content:t}),n.a.createElement("meta",{property:"og:image",content:r}),n.a.createElement("meta",{property:"fb:app_id",content:s.a.siteFBAppID?s.a.siteFBAppID:""}),n.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),n.a.createElement("meta",{name:"twitter:creator",content:s.a.userTwitter?s.a.userTwitter:""}),n.a.createElement("meta",{name:"twitter:title",content:e}),n.a.createElement("meta",{name:"twitter:description",content:t}),n.a.createElement("meta",{name:"twitter:image",content:r}))}},156:function(e,t,a){var r=a(151);e.exports={pathPrefix:"/",siteTitle:"Cara - Gatsby Starter Portfolio",siteTitleAlt:"Cara",siteUrl:"https://portfolio-cara.netlify.com",siteLanguage:"en",siteLogo:"/logos/logo-1024.png",siteDescription:"Playful & Colorful One-Page website with Parallax effect",userTwitter:"@cara",ogSiteName:"cara",ogLanguage:"en_US",themeColor:r.colors.orange,backgroundColor:r.colors.blue}},166:function(e,t,a){"use strict";var r=a(8);t.__esModule=!0,t.default=void 0;var n,i=r(a(7)),o=r(a(52)),l=r(a(157)),s=r(a(158)),d=r(a(0)),c=r(a(4)),u=function(e){var t=(0,s.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},f={},m=function(e){var t=u(e),a=t.fluid?t.fluid.src:t.fixed.src;return f[a]||!1},p=[];var g=function(e,t){(void 0===n&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=new window.IntersectionObserver(function(e){e.forEach(function(e){p.forEach(function(t){t[0]===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(t[0]),t[1]())})})},{rootMargin:"200px"})),n).observe(e),p.push([e,t])},h=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSetWebp?"<source type='image/webp' srcSet=\""+e.srcSetWebp+'" '+a+"/>":"",n=e.srcSet?'<source srcSet="'+e.srcSet+'" '+a+"/>":"",i=e.title?'title="'+e.title+'" ':"",o=e.alt?'alt="'+e.alt+'" ':'alt="" ',l=e.width?'width="'+e.width+'" ':"",s=e.height?'height="'+e.height+'" ':"",d=e.opacity?e.opacity:"1";return"<picture>"+r+n+"<img "+l+s+t+o+i+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+(e.transitionDelay?e.transitionDelay:"0.5s")+";opacity:"+d+';width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},b=d.default.forwardRef(function(e,t){var a=e.style,r=e.onLoad,n=e.onError,i=(0,l.default)(e,["style","onLoad","onError"]);return d.default.createElement("img",(0,s.default)({},i,{onLoad:r,onError:n,ref:t,style:(0,s.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},a)}))});b.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var y=function(e){function t(t){var a;a=e.call(this,t)||this;var r=!0,n=!1,i=t.fadeIn,l=m(t);!l&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=!1,n=!0),"undefined"==typeof window&&(r=!1),t.critical&&(r=!0,n=!1);var s=!(a.props.critical&&!a.props.fadeIn);return a.state={isVisible:r,imgLoaded:!1,IOSupported:n,fadeIn:i,hasNoScript:s,seenBefore:l},a.imageRef=d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,o.default)((0,o.default)(a))),a.handleRef=a.handleRef.bind((0,o.default)((0,o.default)(a))),a}(0,i.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:m(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.handleRef=function(e){var t=this;this.state.IOSupported&&e&&g(e,function(){t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:m(t.props)}),t.setState({isVisible:!0,imgLoaded:!1})})},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=t.fluid?t.fluid.src:t.fixed.src,f[a]=!0,this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,n=e.style,i=void 0===n?{}:n,o=e.imgStyle,l=void 0===o?{}:o,c=e.placeholderStyle,f=void 0===c?{}:c,m=e.placeholderClassName,p=e.fluid,g=e.fixed,y=e.backgroundColor,x=e.Tag,w="boolean"==typeof y?"lightgray":y,v=(0,s.default)({opacity:this.state.imgLoaded?0:1,transition:"opacity 0.5s",transitionDelay:this.state.imgLoaded?"0.5s":"0.25s"},l,f),E=(0,s.default)({opacity:this.state.imgLoaded||!1===this.state.fadeIn?1:0,transition:!0===this.state.fadeIn?"opacity 0.5s":"none"},l),S={title:t,alt:this.state.isVisible?"":a,style:v,className:m};if(p){var k=p;return d.default.createElement(x,{className:(r||"")+" gatsby-image-wrapper",style:(0,s.default)({position:"relative",overflow:"hidden"},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(k.srcSet)},d.default.createElement(x,{style:{width:"100%",paddingBottom:100/k.aspectRatio+"%"}}),k.base64&&d.default.createElement(b,(0,s.default)({src:k.base64},S)),k.tracedSVG&&d.default.createElement(b,(0,s.default)({src:k.tracedSVG},S)),w&&d.default.createElement(x,{title:t,style:{backgroundColor:w,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0}}),this.state.isVisible&&d.default.createElement("picture",null,k.srcSetWebp&&d.default.createElement("source",{type:"image/webp",srcSet:k.srcSetWebp,sizes:k.sizes}),d.default.createElement("source",{srcSet:k.srcSet,sizes:k.sizes}),d.default.createElement(b,{alt:a,title:t,src:k.src,style:E,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError})),this.state.hasNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:h((0,s.default)({alt:a,title:t},k))}}))}if(g){var L=g,R=(0,s.default)({position:"relative",overflow:"hidden",display:"inline-block",width:L.width,height:L.height},i);return"inherit"===i.display&&delete R.display,d.default.createElement(x,{className:(r||"")+" gatsby-image-wrapper",style:R,ref:this.handleRef,key:"fixed-"+JSON.stringify(L.srcSet)},L.base64&&d.default.createElement(b,(0,s.default)({src:L.base64},S)),L.tracedSVG&&d.default.createElement(b,(0,s.default)({src:L.tracedSVG},S)),w&&d.default.createElement(x,{title:t,style:{backgroundColor:w,width:L.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:L.height}}),this.state.isVisible&&d.default.createElement("picture",null,L.srcSetWebp&&d.default.createElement("source",{type:"image/webp",srcSet:L.srcSetWebp,sizes:L.sizes}),d.default.createElement("source",{srcSet:L.srcSet,sizes:L.sizes}),d.default.createElement(b,{alt:a,title:t,width:L.width,height:L.height,src:L.src,style:E,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError})),this.state.hasNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:h((0,s.default)({alt:a,title:t,width:L.width,height:L.height},L))}}))}return null},t}(d.default.Component);y.defaultProps={critical:!1,fadeIn:!0,alt:"",Tag:"div"};var x=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string}),w=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string});y.propTypes={resolutions:x,sizes:w,fixed:x,fluid:w,fadeIn:c.default.bool,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string};var v=y;t.default=v}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-5c51f03425751f56f3a5.js.map