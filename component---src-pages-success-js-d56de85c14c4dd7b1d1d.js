(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{158:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),i=n(167),o=n.n(i),l=n(36),c=n(161),m=n(169),s=n(163),u=n(164),p=n.n(u),g=Object(c.c)("div",{target:"e1kn8a7w0"})("grid-column:2;box-shadow:0 4px 120px rgba(0,0,0,0.1);border-radius:1rem;padding:2rem 4rem;background-color:",function(e){return e.theme.colors.bg},";z-index:9000;margin-top:-3rem;@media ",s.a.tablet,"{padding:3rem 3rem;}@media ",s.a.phone,"{padding:2rem 1.5rem;}form{p{label,input{display:block;}input{min-width:275px;}textarea{resize:vertical;min-height:150px;width:100%;}}}");t.default=function(){return a.a.createElement(m.d,null,a.a.createElement(m.i,null,a.a.createElement(o.a,{title:"Contact | "+p.a.siteTitle}),a.a.createElement(m.c,null,a.a.createElement(l.Link,{to:"/"},p.a.siteTitle)),a.a.createElement(g,null,a.a.createElement("h1",null,"Your message was sent!"),a.a.createElement("p",null,"I'll answer your request as quick as possible."))))}},162:function(e,t,n){"use strict";var r=n(0),a=n.n(r),i=n(1),o=n.n(i),l=n(167),c=n.n(l),m=n(164),s=n.n(m),u=function(e){var t,n,r,i,o=e.postNode,l=e.postPath,m=e.postSEO,u="/"===s.a.pathPrefix?"":s.a.pathPrefix;m?(t=o.frontmatter.title,n=o.excerpt,r=s.a.siteBanner,i=s.a.siteUrl+u+l):(t=s.a.siteTitle,n=s.a.siteDescription,r=s.a.siteBanner);r=s.a.siteUrl+u+r;var p=s.a.siteUrl+s.a.pathPrefix,g=[{"@context":"http://schema.org","@type":"WebSite","@id":p,url:p,name:t,alternateName:s.a.siteTitleAlt?s.a.siteTitleAlt:""}];return m&&(g=[{"@context":"http://schema.org","@type":"BlogPosting","@id":i,url:i,name:t,alternateName:s.a.siteTitleAlt?s.a.siteTitleAlt:"",headline:t,image:{"@type":"ImageObject",url:r},description:n,datePublished:o.frontmatter.date,dateModified:o.frontmatter.date,author:{"@type":"Person",name:s.a.author},publisher:{"@type":"Organization",name:s.a.author,logo:{"@type":"ImageObject",url:s.a.siteUrl+u+s.a.siteLogo}},isPartOf:p,mainEntityOfPage:{"@type":"WebSite","@id":p}}]),a.a.createElement(c.a,null,a.a.createElement("html",{lang:s.a.siteLanguage}),a.a.createElement("title",null,s.a.siteTitle),a.a.createElement("meta",{name:"description",content:n}),a.a.createElement("meta",{name:"image",content:r}),a.a.createElement("script",{type:"application/ld+json"},JSON.stringify(g)),a.a.createElement("meta",{property:"og:locale",content:s.a.ogLanguage}),a.a.createElement("meta",{property:"og:site_name",content:s.a.ogSiteName?s.a.ogSiteName:""}),a.a.createElement("meta",{property:"og:url",content:m?i:p}),m?a.a.createElement("meta",{property:"og:type",content:"article"}):null,a.a.createElement("meta",{property:"og:title",content:t}),a.a.createElement("meta",{property:"og:description",content:n}),a.a.createElement("meta",{property:"og:image",content:r}),a.a.createElement("meta",{property:"fb:app_id",content:s.a.siteFBAppID?s.a.siteFBAppID:""}),a.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),a.a.createElement("meta",{name:"twitter:creator",content:s.a.userTwitter?s.a.userTwitter:""}),a.a.createElement("meta",{name:"twitter:title",content:t}),a.a.createElement("meta",{name:"twitter:url",content:s.a.siteUrl}),a.a.createElement("meta",{name:"twitter:description",content:n}),a.a.createElement("meta",{name:"twitter:image",content:r}))};t.a=u,u.propTypes={postNode:o.a.object,postPath:o.a.string,postSEO:o.a.bool}},163:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var r={tablet:"(max-width: "+"1200px"+")",phone:"(max-width: "+"600px"+")"}},164:function(e,t){e.exports={pathPrefix:"/",siteTitle:"imyjimmy - Code & Comedy",siteTitleAlt:"imyjimmy",siteUrl:"https://imyjimmy.com",siteLanguage:"en",siteBanner:"/social/banner.jpg",favicon:"src/favicon.png",siteDescription:"imyjimmy Code & Comedy",author:"@imyjimmy",siteLogo:"/social/logo.png",userTwitter:"@minimal",ogSiteName:"minimal",ogLanguage:"en_US",themeColor:"#3498DB",backgroundColor:"#2b2e3c",headerFontFamily:"Bitter",bodyFontFamily:"Open Sans",baseFontSize:"18px"}},168:function(e){e.exports={data:{site:{buildTime:"02.17.2019"}}}},169:function(e,t,n){"use strict";var r=n(0),a=n.n(r),i=n(1),o=n.n(i),l=n(161),c=n(36),m=n(170),s=n.n(m),u=Object(l.c)("article",{target:"e15pm2850"})("display:flex;flex-direction:column;margin-top:3.5rem;margin-bottom:3.5rem;"),p=Object(l.c)("h2",{target:"e15pm2851"})("position:relative;text-shadow:0 12px 30px rgba(0,0,0,0.15);margin-bottom:0.75rem;"),g=Object(l.c)("span",{target:"e15pm2852"})("position:absolute;font-size:7rem;transform:translate(-50%,-50%);opacity:0.08;user-select:none;z-index:-1;"),d=Object(l.c)("p",{target:"e15pm2853"})("grid-column:-1 / 1;margin-top:1rem;margin-bottom:1rem;"),f=function(e){var t=e.title,n=e.date,r=e.excerpt,i=e.slug,o=e.timeToRead,l=e.category,m=t.charAt(0);return a.a.createElement(u,null,a.a.createElement(p,null,a.a.createElement(g,null,m),a.a.createElement(c.Link,{to:i},t)),a.a.createElement(I,null,n," — ",o," Min Read — In"," ",a.a.createElement(c.Link,{to:"/categories/"+s()(l)},l)),a.a.createElement(d,null,r))},b=f;f.propTypes={title:o.a.string.isRequired,date:o.a.string.isRequired,excerpt:o.a.string.isRequired,slug:o.a.string.isRequired,timeToRead:o.a.number.isRequired,category:o.a.string.isRequired};n(171);var h=n(166),y=Object(l.c)("button",{target:"e5usfch0"})("background:",function(e){return e.theme.colors.primary},";border:none;display:inline-flex;align-items:center;border-radius:",function(e){return e.big?"1.5rem":"1rem"},";font-size:",function(e){return e.big?"1.2rem":"1rem"},";color:white;padding:",function(e){return e.big?"0.35rem 1.6rem":"0.25rem 1.5rem"},";transition:all ",function(e){return e.theme.transitions.normal},";box-shadow:0 4px 6px rgba(50,50,93,0.11),0 1px 3px rgba(0,0,0,0.08);&:hover{background:",function(e){return Object(h.b)(.05,e.theme.colors.primary)},";cursor:pointer;transform:translateY(-2px);}&:focus{outline:none;}svg{width:20px;height:20px;margin-right:0.75rem;fill:white;}"),x=Object(l.c)("header",{target:"e1j636js0"})("background:linear-gradient( 45deg,",function(e){return Object(h.a)(.1,e.theme.colors.primary)},",",function(e){return Object(h.b)(.1,e.theme.colors.primary)}," );grid-column:1 / -1;margin-left:-1rem;margin-right:-1rem;padding:2rem 2rem 5rem 2rem;box-shadow:inset 0px -10px 30px 0px rgba(0,0,0,0.1);"),E=Object(l.c)("div",{target:"e1j636js1"})("max-width:1000px;margin:0 auto;a{color:white;&:hover{opacity:0.85;color:white;}}"),w=function(e){var t=e.children;return a.a.createElement(x,null,a.a.createElement(E,null,t))},v=w;w.propTypes={children:o.a.oneOfType([o.a.array,o.a.node]).isRequired};var j=n(172),k=n.n(j),O=n(168),T={colors:{primary:"#d02e77",bg:"black",grey:{dark:"rgba(0, 0, 0, 0.9)",default:"rgba(0, 0, 0, 0.7)",light:"rgba(0, 0, 0, 0.5)",ultraLight:"rgba(0, 0, 0, 0.25)"}},transitions:{normal:"0.5s"},fontSize:{small:"0.9rem"}},z=n(163);function S(){var e=k()(["\n  ::selection {\n    color: ",";\n    background: ",";\n  }\n  body {\n    background: ",";\n    color: ",";\n    font-display: swap;\n    @media "," {\n      font-size: 14px;\n    }\n  }\n  a {\n    color: ",";\n    text-decoration: none;\n    transition: all ",";\n  }\n  a:hover {\n    color: ",";\n  }\n  h1, h2, h3, h4 {\n    color: ",';\n  }\n  blockquote {\n    font-style: italic;\n    position: relative;\n  }\n\n  blockquote:before {\n    content: "";\n    position: absolute;\n    background: ',";\n    height: 100%;\n    width: 6px;\n    margin-left: -1.6rem;\n  }\n  label {\n    margin-bottom: .5rem;\n    color: ",";\n  }\n  input, textarea {\n    border-radius: .5rem;\n    border: none;\n    background: rgba(0, 0, 0, 0.05);\n    padding: .25rem 1rem;\n    &:focus {\n      outline: none;\n    }\n  }\n"]);return S=function(){return e},e}var q=Object(l.b)(S(),T.colors.bg,T.colors.primary,T.colors.bg,T.default,z.a.phone,T.colors.grey.dark,T.transitions.normal,T.colors.primary,T.colors.grey.dark,T.colors.primary,T.colors.grey.dark),L=function(e){var t=e.children;return a.a.createElement(c.StaticQuery,{query:"721337291",render:function(e){return a.a.createElement(l.a,{theme:T},a.a.createElement(a.a.Fragment,null,a.a.createElement(U.a,null),a.a.createElement(q,null),t))},data:O})},P=L;L.propTypes={children:o.a.oneOfType([o.a.array,o.a.node]).isRequired};var R=Object(l.c)("div",{target:"ezwpher0"})("display:flex;margin:6rem auto 0 auto;a{color:",function(e){return e.theme.colors.primary},";display:flex;align-items:center;}justify-items:center;"),N=Object(l.c)("div",{target:"ezwpher1"})("span{text-transform:uppercase;font-size:0.8rem;color:",function(e){return e.theme.colors.grey.light},";}"),A=Object(l.c)("div",{target:"ezwpher2"})("margin-left:auto;text-align:right;span{text-transform:uppercase;font-size:0.8rem;color:",function(e){return e.theme.colors.grey.light},";}"),B=function(e){var t=e.next,n=e.prev;return a.a.createElement(R,null,n&&a.a.createElement(N,null,a.a.createElement("span",null,"Previous"),a.a.createElement(c.Link,{to:n.fields.slug},n.frontmatter.title)),t&&a.a.createElement(A,null,a.a.createElement("span",null,"Next"),a.a.createElement(c.Link,{to:t.fields.slug},t.frontmatter.title)))},F=B;B.propTypes={next:o.a.object,prev:o.a.object},B.defaultProps={next:null,prev:null};n(165);var C=Object(l.c)("div",{target:"e82ew800"})("font-size:",function(e){return e.theme.fontSize.small},";text-transform:uppercase;font-weight:bold;text-align:center;color:",function(e){return e.theme.colors.grey.dark},";position:relative;padding-bottom:1rem;margin-bottom:4rem;&:after{content:'';height:1px;width:50px;position:absolute;bottom:0;left:50%;margin-left:-25px;background:",function(e){return e.theme.colors.grey.ultraLight},";}"),U=n(162),I=Object(l.c)("div",{target:"e1ptr0dk0"})("font-size:",function(e){return e.theme.fontSize.small},";color:",function(e){return e.theme.colors.grey.light},";",function(e){return e.sectionTitle&&"margin-top: -3rem"},";",function(e){return e.sectionTitle&&"margin-bottom: 4rem"},";",function(e){return e.sectionTitle&&"text-align: center"},";"),D=Object(l.c)("div",{target:"e1ssssqv0"})("display:grid;grid-template-columns:1fr minmax(320px,1000px) 1fr;padding:0 1rem;");n.d(t,"a",function(){return b}),n.d(t,"b",function(){return y}),n.d(t,"c",function(){return v}),n.d(t,"d",function(){return P}),n.d(t,"e",function(){return F}),n.d(t,"g",function(){return C}),n.d(t,"f",function(){return U.a}),n.d(t,"h",function(){return I}),n.d(t,"i",function(){return D})}}]);
//# sourceMappingURL=component---src-pages-success-js-d56de85c14c4dd7b1d1d.js.map