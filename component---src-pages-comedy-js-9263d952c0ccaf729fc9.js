(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{146:function(e,t,a){"use strict";a.r(t);var r=a(7),n=a.n(r),i=a(0),o=a.n(i),l=a(148),c=a(155),m=a(157),s=a.n(m),g=a(152),u=a.n(g),d=function(){var e=u.a.siteTitle,t=u.a.siteDescription,a="/"===u.a.pathPrefix?"":u.a.pathPrefix,r=u.a.siteUrl+a+u.a.siteLogo,n=[{"@context":"http://schema.org","@type":"WebSite",url:u.a.siteUrl+u.a.pathPrefix,name:e,alternateName:u.a.siteTitleAlt?u.a.siteTitleAlt:""}];return o.a.createElement(s.a,null,o.a.createElement("html",{lang:u.a.siteLanguage}),o.a.createElement("title",null,e),o.a.createElement("link",{rel:"apple-touch-icon",href:"/favicons/apple-touch-icon.png"}),o.a.createElement("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicons/favicon-32x32.png"}),o.a.createElement("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicons/favicon-16x16.png"}),o.a.createElement("link",{rel:"shortcut icon",href:"favicon.ico"}),o.a.createElement("meta",{name:"msapplication-TileColor",content:u.a.backgroundColor}),o.a.createElement("meta",{name:"msapplication-config",content:"browserconfig.xml"}),o.a.createElement("meta",{name:"description",content:t}),o.a.createElement("meta",{name:"image",content:r}),o.a.createElement("script",{type:"application/ld+json"},JSON.stringify(n)),o.a.createElement("meta",{property:"og:locale",content:u.a.ogLanguage}),o.a.createElement("meta",{property:"og:site_name",content:u.a.ogSiteName}),o.a.createElement("meta",{property:"og:title",content:e}),o.a.createElement("meta",{property:"og:description",content:t}),o.a.createElement("meta",{property:"og:image",content:r}),o.a.createElement("meta",{property:"fb:app_id",content:u.a.siteFBAppID?u.a.siteFBAppID:""}),o.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),o.a.createElement("meta",{name:"twitter:creator",content:u.a.userTwitter?u.a.userTwitter:""}),o.a.createElement("meta",{name:"twitter:title",content:e}),o.a.createElement("meta",{name:"twitter:description",content:t}),o.a.createElement("meta",{name:"twitter:image",content:r}))},f=a(150);a.d(t,"pageQuery",function(){return h});var p=function(e){function t(){return e.apply(this,arguments)||this}return n()(t,e),t.prototype.render=function(){var e=this.props.data,t=e.site.siteMetadata.title,a=e.allMarkdownRemark.edges;return o.a.createElement(c.a,{location:this.props.location,title:t},o.a.createElement(d,{title:"comedy",keywords:["blog","gatsby","javascript","react"]}),a.map(function(e){var t=e.node,a=t.frontmatter.title||t.fields.slug;return o.a.createElement("div",{key:t.fields.slug},o.a.createElement("h3",{style:{marginBottom:Object(f.a)(.25)}},o.a.createElement(l.Link,{style:{boxShadow:"none"},to:t.fields.slug},a)),o.a.createElement("small",null,t.frontmatter.date),o.a.createElement("p",{dangerouslySetInnerHTML:{__html:t.excerpt}}))}))},t}(o.a.Component),h=(t.default=p,"1623555389")},148:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return f}),a.d(t,"StaticQueryContext",function(){return u}),a.d(t,"StaticQuery",function(){return d});var r=a(0),n=a.n(r),i=a(4),o=a.n(i),l=a(147),c=a.n(l);a.d(t,"Link",function(){return c.a}),a.d(t,"withPrefix",function(){return l.withPrefix}),a.d(t,"navigate",function(){return l.navigate}),a.d(t,"push",function(){return l.push}),a.d(t,"replace",function(){return l.replace}),a.d(t,"navigateTo",function(){return l.navigateTo});var m=a(151),s=a.n(m);a.d(t,"PageRenderer",function(){return s.a});var g=a(33);a.d(t,"parsePath",function(){return g.a});var u=n.a.createContext({}),d=function(e){return n.a.createElement(u.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):n.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}d.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},149:function(e,t,a){a(32);a(158)();var r={transparent:"transparent","blue-black":"#161719","blue-grey":"#23262b",black:"#222b2f","grey-darkest":"#273238","grey-darker":"#364349","grey-dark":"#70818a",grey:"#9babb4","grey-light":"#dae4e9","grey-lighter":"#f3f7f9","grey-lightest":"#fafcfc",white:"#ffffff","red-darkest":"#420806","red-darker":"#6a1b19","red-dark":"#cc1f1a",red:"#bf381a","red-light":"#ef5753","red-lighter":"#f9acaa","red-lightest":"#fcebea","orange-darkest":"#542605","orange-darker":"#7f4012","orange-dark":"#c1611f",orange:"#e07628","orange-light":"#ffa31b","orange-lighter":"#fcd9b6","orange-lightest":"#fff5eb","yellow-darkest":"#453411","yellow-darker":"#684f1d","yellow-dark":"#f2d024",yellow:"#e9af32","yellow-light":"#fff382","yellow-lighter":"#fff9c2","yellow-lightest":"#fcfbeb","green-darkest":"#032d19","green-darker":"#0b4228","green-dark":"#1f9d55",green:"#38c172","green-light":"#51d88a","green-lighter":"#a2f5bf","green-lightest":"#e3fcec","teal-darkest":"#0d3331","teal-darker":"#174e4b","teal-dark":"#38a89d",teal:"#4dc0b5","teal-light":"#64d5ca","teal-lighter":"#a0f0ed","teal-lightest":"#e8fffe","blue-darkest":"#0a224e","blue-darker":"#103d60","blue-dark":"#2779bd",blue:"#a0d8f1","blue-light":"#6cb2eb","blue-lighter":"#bcdefa","blue-lightest":"#eff8ff","indigo-darkest":"#191e38","indigo-darker":"#2f365f","indigo-dark":"#5661b3",indigo:"#6574cd","indigo-light":"#7886d7","indigo-lighter":"#b2b7ff","indigo-lightest":"#e6e8ff","purple-darkest":"#1f133f","purple-darker":"#352465","purple-dark":"#794acf",purple:"#9561e2","purple-light":"#a779e9","purple-lighter":"#d6bbfc","purple-lightest":"#f3ebff","pink-darkest":"#45051e","pink-darker":"#72173a","pink-dark":"#eb5286",pink:"#f66d9b","pink-light":"#fa7ea8","pink-lighter":"#ffbbca","pink-lightest":"#ffebef"};e.exports={colors:r,screens:{sm:"400px",md:"600px",lg:"900px",xl:"1200px",xxl:"1600px"},fonts:{sans:['"Open Sans"',"-apple-system","BlinkMacSystemFont","Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue","sans-serif"],serif:['"Cantata One"',"Constantia","Lucida Bright","Lucidabright","Lucida Serif","Lucida","DejaVu Serif","Bitstream Vera Serif","Liberation Serif","Georgia","serif"],mono:["Menlo","Monaco","Consolas","Liberation Mono","Courier New","monospace"]},textSizes:{xs:".75rem",sm:".875rem",base:"1rem",lg:"1.125rem",xl:"1.25rem","2xl":"1.5rem","3xl":"1.875rem","4xl":"2.25rem","5xl":"3rem","6xl":"5rem","7xl":"8rem"},fontWeights:{hairline:100,thin:200,light:300,normal:400,medium:500,semibold:600,bold:700,extrabold:800,black:900},leading:{none:1,tight:1.25,normal:1.5,loose:2},tracking:{tight:"-0.05em",normal:"0",wide:"0.05em"},textColors:r,backgroundColors:r,borderWidths:{default:"1px",0:"0",2:"2px",4:"4px",8:"8px"},borderColors:Object.assign({default:r["grey-light"]},r),borderRadius:{none:"0",sm:".125rem",default:".25rem",lg:".5rem",full:"9999px"},width:{auto:"auto",px:"1px",1:"0.25rem",2:"0.5rem",3:"0.75rem",4:"1rem",6:"1.5rem",8:"2rem",10:"2.5rem",12:"3rem",16:"4rem",24:"6rem",32:"8rem",48:"12rem",64:"16rem","1/2":"50%","1/3":"33.33333%","2/3":"66.66667%","1/4":"25%","3/4":"75%","1/5":"20%","2/5":"40%","3/5":"60%","4/5":"80%","1/6":"16.66667%","5/6":"83.33333%",full:"100%",screen:"100vw"},height:{auto:"auto",px:"1px",1:"0.25rem",2:"0.5rem",3:"0.75rem",4:"1rem",6:"1.5rem",8:"2rem",10:"2.5rem",12:"3rem",16:"4rem",24:"6rem",32:"8rem",48:"12rem",64:"16rem",full:"100%",screen:"100vh"},minWidth:{0:"0",full:"100%"},minHeight:{0:"0",full:"100%",screen:"100vh"},maxWidth:{xs:"20rem",sm:"30rem",md:"40rem",lg:"50rem",xl:"60rem","2xl":"70rem","3xl":"80rem","4xl":"90rem","5xl":"100rem",full:"100%"},maxHeight:{full:"100%",screen:"100vh"},padding:{px:"1px",0:"0",1:"0.25rem",2:"0.5rem",3:"0.75rem",4:"1rem",6:"1.5rem",8:"2rem",12:"3rem",16:"4rem",24:"6rem",32:"8rem"},margin:{auto:"auto",px:"1px",0:"0",1:"0.25rem",2:"0.5rem",3:"0.75rem",4:"1rem",6:"1.5rem",8:"2rem"},negativeMargin:{px:"1px",0:"0",1:"0.25rem",2:"0.5rem",3:"0.75rem",4:"1rem",6:"1.5rem",8:"2rem"},shadows:{default:"0 2px 4px 0 rgba(0,0,0,0.10)",md:"0 4px 8px 0 rgba(0,0,0,0.12), 0 2px 4px 0 rgba(0,0,0,0.08)",lg:"0 15px 30px 0 rgba(0,0,0,0.11), 0 5px 15px 0 rgba(0,0,0,0.08)",inner:"inset 0 2px 4px 0 rgba(0,0,0,0.06)",none:"none"},zIndex:{auto:"auto",0:0,10:10,20:20,30:30,40:40,50:50},opacity:{0:"0",25:".25",50:".5",75:".75",100:"1"},options:{prefix:"",important:!1}}},150:function(e,t,a){"use strict";a.d(t,"a",function(){return c}),a.d(t,"b",function(){return m});var r=a(161),n=a.n(r),i=a(162),o=a.n(i);o.a.overrideThemeStyles=function(){return{"a.gatsby-resp-image-link":{boxShadow:"none"},html:{overflowY:"none"}}},delete o.a.googleFonts;var l=new n.a(o.a);var c=l.rhythm,m=l.scale},151:function(e,t,a){var r;e.exports=(r=a(154))&&r.default||r},152:function(e,t,a){var r=a(149);e.exports={pathPrefix:"/",siteTitle:"Cara - Gatsby Starter Portfolio",siteTitleAlt:"Cara",siteUrl:"https://portfolio-cara.netlify.com",siteLanguage:"en",siteLogo:"/logos/logo-1024.png",siteDescription:"Playful & Colorful One-Page website with Parallax effect",userTwitter:"@cara",ogSiteName:"cara",ogLanguage:"en_US",themeColor:r.colors.orange,backgroundColor:r.colors.blue}},154:function(e,t,a){"use strict";a.r(t);a(32);var r=a(0),n=a.n(r),i=a(4),o=a.n(i),l=a(55),c=a(2),m=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return n.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json))};m.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=m},155:function(e,t,a){"use strict";a(32);var r=a(7),n=a.n(r),i=a(0),o=a.n(i),l=a(148),c=a(150),m=function(e){function t(){return e.apply(this,arguments)||this}return n()(t,e),t.prototype.render=function(){var e,t=this.props,a=t.location,r=t.title,n=t.children;return e="/"===a.pathname?o.a.createElement("h1",{style:Object.assign({},Object(c.b)(1.5),{marginBottom:Object(c.a)(1.5),marginTop:0})},o.a.createElement(l.Link,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},r)):o.a.createElement("h3",{style:{fontFamily:"Montserrat, sans-serif",marginTop:0,marginBottom:Object(c.a)(-1)}},o.a.createElement(l.Link,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},r)),o.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(c.a)(24),padding:Object(c.a)(1.5)+" "+Object(c.a)(.75)}},e,n,o.a.createElement("footer",null,"© ",(new Date).getFullYear(),", Built with"," ",o.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby")))},t}(o.a.Component);t.a=m}}]);
//# sourceMappingURL=component---src-pages-comedy-js-9263d952c0ccaf729fc9.js.map