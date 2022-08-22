"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[918],{5296:(e,t,n)=>{n.r(t),n.d(t,{default:()=>Ge});var a=n(7294),l=n(1944),r=n(902);const o=a.createContext(null);function i(e){let{children:t,content:n}=e;const l=function(e){return(0,a.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(n);return a.createElement(o.Provider,{value:l},t)}function c(){const e=(0,a.useContext)(o);if(null===e)throw new r.i6("DocProvider");return e}function s(){var e;const{metadata:t,frontMatter:n,assets:r}=c();return a.createElement(l.d,{title:t.title,description:t.description,keywords:n.keywords,image:null!=(e=r.image)?e:n.image})}var d=n(6010),m=n(7524),u=n(7462),p=n(5999),h=n(9960);function E(e){const{permalink:t,title:n,subLabel:l,isNext:r}=e;return a.createElement(h.Z,{className:(0,d.Z)("pagination-nav__link",r?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t},l&&a.createElement("div",{className:"pagination-nav__sublabel"},l),a.createElement("div",{className:"pagination-nav__label"},n))}function v(e){const{previous:t,next:n}=e;return a.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,p.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},t&&a.createElement(E,(0,u.Z)({},t,{subLabel:a.createElement(p.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")})),n&&a.createElement(E,(0,u.Z)({},n,{subLabel:a.createElement(p.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next"),isNext:!0})))}function b(){const{metadata:e}=c();return a.createElement(v,{previous:e.previous,next:e.next})}var f=n(2263),g=n(143),N=n(5281),Z=n(373),_=n(4477);const k={unreleased:function(e){let{siteTitle:t,versionMetadata:n}=e;return a.createElement(p.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:a.createElement("b",null,n.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){let{siteTitle:t,versionMetadata:n}=e;return a.createElement(p.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:a.createElement("b",null,n.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function T(e){const t=k[e.versionMetadata.banner];return a.createElement(t,e)}function C(e){let{versionLabel:t,to:n,onClick:l}=e;return a.createElement(p.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:a.createElement("b",null,a.createElement(h.Z,{to:n,onClick:l},a.createElement(p.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function L(e){let{className:t,versionMetadata:n}=e;const{siteConfig:{title:l}}=(0,f.Z)(),{pluginId:r}=(0,g.gA)({failfast:!0}),{savePreferredVersionName:o}=(0,Z.J)(r),{latestDocSuggestion:i,latestVersionSuggestion:c}=(0,g.Jo)(r),s=null!=i?i:(m=c).docs.find((e=>e.id===m.mainDocId));var m;return a.createElement("div",{className:(0,d.Z)(t,N.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},a.createElement("div",null,a.createElement(T,{siteTitle:l,versionMetadata:n})),a.createElement("div",{className:"margin-top--md"},a.createElement(C,{versionLabel:c.label,to:s.path,onClick:()=>o(c.name)})))}function y(e){let{className:t}=e;const n=(0,_.E)();return n.banner?a.createElement(L,{className:t,versionMetadata:n}):null}function w(e){let{className:t}=e;const n=(0,_.E)();return n.badge?a.createElement("span",{className:(0,d.Z)(t,N.k.docs.docVersionBadge,"badge badge--secondary")},a.createElement(p.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:n.label}},"Version: {versionLabel}")):null}function x(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:n}=e;return a.createElement(p.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:a.createElement("b",null,a.createElement("time",{dateTime:new Date(1e3*t).toISOString()},n))}}," on {date}")}function U(e){let{lastUpdatedBy:t}=e;return a.createElement(p.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:a.createElement("b",null,t)}}," by {user}")}function A(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:n,lastUpdatedBy:l}=e;return a.createElement("span",{className:N.k.common.lastUpdated},a.createElement(p.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&n?a.createElement(x,{lastUpdatedAt:t,formattedLastUpdatedAt:n}):"",byUser:l?a.createElement(U,{lastUpdatedBy:l}):""}},"Last updated{atDate}{byUser}"),!1)}const M="iconEdit_Z9Sw";function B(e){let{className:t,...n}=e;return a.createElement("svg",(0,u.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,d.Z)(M,t),"aria-hidden":"true"},n),a.createElement("g",null,a.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}function V(e){let{editUrl:t}=e;return a.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:N.k.common.editThisPage},a.createElement(B,null),a.createElement(p.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}const z="tag_zVej",H="tagRegular_sFm0",I="tagWithCount_h2kH";function S(e){let{permalink:t,label:n,count:l}=e;return a.createElement(h.Z,{href:t,className:(0,d.Z)(z,l?I:H)},n,l&&a.createElement("span",null,l))}const D="tags_jXut",P="tag_QGVx";function R(e){let{tags:t}=e;return a.createElement(a.Fragment,null,a.createElement("b",null,a.createElement(p.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),a.createElement("ul",{className:(0,d.Z)(D,"padding--none","margin-left--sm")},t.map((e=>{let{label:t,permalink:n}=e;return a.createElement("li",{key:n,className:P},a.createElement(S,{label:t,permalink:n}))}))))}const O="lastUpdated_vwxv";function F(e){return a.createElement("div",{className:(0,d.Z)(N.k.docs.docFooterTagsRow,"row margin-bottom--sm")},a.createElement("div",{className:"col"},a.createElement(R,e)))}function q(e){let{editUrl:t,lastUpdatedAt:n,lastUpdatedBy:l,formattedLastUpdatedAt:r}=e;return a.createElement("div",{className:(0,d.Z)(N.k.docs.docFooterEditMetaRow,"row")},a.createElement("div",{className:"col"},t&&a.createElement(V,{editUrl:t})),a.createElement("div",{className:(0,d.Z)("col",O)},(n||l)&&a.createElement(A,{lastUpdatedAt:n,formattedLastUpdatedAt:r,lastUpdatedBy:l})))}function W(){const{metadata:e}=c(),{editUrl:t,lastUpdatedAt:n,formattedLastUpdatedAt:l,lastUpdatedBy:r,tags:o}=e,i=o.length>0,s=!!(t||n||r);return i||s?a.createElement("footer",{className:(0,d.Z)(N.k.docs.docFooter,"docusaurus-mt-lg")},i&&a.createElement(F,{tags:o}),s&&a.createElement(q,{editUrl:t,lastUpdatedAt:n,lastUpdatedBy:r,formattedLastUpdatedAt:l})):null}var j=n(6043),G=n(3743);const J="tocCollapsibleButton_TO0P",Q="tocCollapsibleButtonExpanded_MG3E";function Y(e){let{collapsed:t,...n}=e;return a.createElement("button",(0,u.Z)({type:"button"},n,{className:(0,d.Z)("clean-btn",J,!t&&Q,n.className)}),a.createElement(p.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page"))}const X="tocCollapsible_ETCw",K="tocCollapsibleContent_vkbj",$="tocCollapsibleExpanded_sAul";function ee(e){let{toc:t,className:n,minHeadingLevel:l,maxHeadingLevel:r}=e;const{collapsed:o,toggleCollapsed:i}=(0,j.u)({initialState:!0});return a.createElement("div",{className:(0,d.Z)(X,!o&&$,n)},a.createElement(Y,{collapsed:o,onClick:i}),a.createElement(j.z,{lazy:!0,className:K,collapsed:o},a.createElement(G.Z,{toc:t,minHeadingLevel:l,maxHeadingLevel:r})))}const te="tocMobile_ITEo";function ne(){const{toc:e,frontMatter:t}=c();return a.createElement(ee,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:(0,d.Z)(N.k.docs.docTocMobile,te)})}const ae="tableOfContents_bqdL";function le(e){let{className:t,...n}=e;return a.createElement("div",{className:(0,d.Z)(ae,"thin-scrollbar",t)},a.createElement(G.Z,(0,u.Z)({},n,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}function re(){const{toc:e,frontMatter:t}=c();return a.createElement(le,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:N.k.docs.docTocDesktop})}var oe=n(6668);const ie="anchorWithStickyNavbar_LWe7",ce="anchorWithHideOnScrollNavbar_WYt5";function se(e){let{as:t,id:n,...l}=e;const{navbar:{hideOnScroll:r}}=(0,oe.L)();return"h1"!==t&&n?a.createElement(t,(0,u.Z)({},l,{className:(0,d.Z)("anchor",r?ce:ie),id:n}),l.children,a.createElement("a",{className:"hash-link",href:"#"+n,title:(0,p.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):a.createElement(t,(0,u.Z)({},l,{id:void 0}))}var de=n(3905),me=n(5742);var ue=n(814);var pe=n(2389);const he="details_lb9f",Ee="isBrowser_bmU9",ve="collapsibleContent_i85q";function be(e){return!!e&&("SUMMARY"===e.tagName||be(e.parentElement))}function fe(e,t){return!!e&&(e===t||fe(e.parentElement,t))}function ge(e){let{summary:t,children:n,...l}=e;const r=(0,pe.Z)(),o=(0,a.useRef)(null),{collapsed:i,setCollapsed:c}=(0,j.u)({initialState:!l.open}),[s,m]=(0,a.useState)(l.open);return a.createElement("details",(0,u.Z)({},l,{ref:o,open:s,"data-collapsed":i,className:(0,d.Z)(he,r&&Ee,l.className),onMouseDown:e=>{be(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();const t=e.target;be(t)&&fe(t,o.current)&&(e.preventDefault(),i?(c(!1),m(!0)):c(!0))}}),null!=t?t:a.createElement("summary",null,"Details"),a.createElement(j.z,{lazy:!1,collapsed:i,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{c(e),m(!e)}},a.createElement("div",{className:ve},n)))}const Ne="details_b_Ee";function Ze(e){let{...t}=e;return a.createElement(ge,(0,u.Z)({},t,{className:(0,d.Z)("alert alert--info",Ne,t.className)}))}function _e(e){return a.createElement(se,e)}const ke="containsTaskList_mC6p";const Te="img_ev3q";const Ce="admonition_LlT9",Le="admonitionHeading_tbUL",ye="admonitionIcon_kALy",we="admonitionContent_S0QG";const xe={note:{infimaClassName:"secondary",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 14 16"},a.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))},label:a.createElement(p.Z,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)"},"note")},tip:{infimaClassName:"success",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 12 16"},a.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))},label:a.createElement(p.Z,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)"},"tip")},danger:{infimaClassName:"danger",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 12 16"},a.createElement("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))},label:a.createElement(p.Z,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)"},"danger")},info:{infimaClassName:"info",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 14 16"},a.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))},label:a.createElement(p.Z,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)"},"info")},caution:{infimaClassName:"warning",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 16 16"},a.createElement("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))},label:a.createElement(p.Z,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)"},"caution")}},Ue={secondary:"note",important:"info",success:"tip",warning:"danger"};function Ae(e){var t;const{mdxAdmonitionTitle:n,rest:l}=function(e){const t=a.Children.toArray(e),n=t.find((e=>{var t;return a.isValidElement(e)&&"mdxAdmonitionTitle"===(null==(t=e.props)?void 0:t.mdxType)})),l=a.createElement(a.Fragment,null,t.filter((e=>e!==n)));return{mdxAdmonitionTitle:n,rest:l}}(e.children);return{...e,title:null!=(t=e.title)?t:n,children:l}}const Me={head:function(e){const t=a.Children.map(e.children,(e=>a.isValidElement(e)?function(e){var t;if(null!=(t=e.props)&&t.mdxType&&e.props.originalType){const{mdxType:t,originalType:n,...l}=e.props;return a.createElement(e.props.originalType,l)}return e}(e):e));return a.createElement(me.Z,e,t)},code:function(e){const t=["a","b","big","i","span","em","strong","sup","sub","small"];return a.Children.toArray(e.children).every((e=>{var n;return"string"==typeof e&&!e.includes("\n")||(0,a.isValidElement)(e)&&t.includes(null==(n=e.props)?void 0:n.mdxType)}))?a.createElement("code",e):a.createElement(ue.Z,e)},a:function(e){return a.createElement(h.Z,e)},pre:function(e){var t;return a.createElement(ue.Z,(0,a.isValidElement)(e.children)&&"code"===(null==(t=e.children.props)?void 0:t.originalType)?e.children.props:{...e})},details:function(e){const t=a.Children.toArray(e.children),n=t.find((e=>{var t;return a.isValidElement(e)&&"summary"===(null==(t=e.props)?void 0:t.mdxType)})),l=a.createElement(a.Fragment,null,t.filter((e=>e!==n)));return a.createElement(Ze,(0,u.Z)({},e,{summary:n}),l)},ul:function(e){return a.createElement("ul",(0,u.Z)({},e,{className:(t=e.className,(0,d.Z)(t,(null==t?void 0:t.includes("contains-task-list"))&&ke))}));var t},img:function(e){return a.createElement("img",(0,u.Z)({loading:"lazy"},e,{className:(t=e.className,(0,d.Z)(t,Te))}));var t},h1:e=>a.createElement(_e,(0,u.Z)({as:"h1"},e)),h2:e=>a.createElement(_e,(0,u.Z)({as:"h2"},e)),h3:e=>a.createElement(_e,(0,u.Z)({as:"h3"},e)),h4:e=>a.createElement(_e,(0,u.Z)({as:"h4"},e)),h5:e=>a.createElement(_e,(0,u.Z)({as:"h5"},e)),h6:e=>a.createElement(_e,(0,u.Z)({as:"h6"},e)),admonition:function(e){const{children:t,type:n,title:l,icon:r}=Ae(e),o=function(e){var t;const n=null!=(t=Ue[e])?t:e;return xe[n]||(console.warn('No admonition config found for admonition type "'+n+'". Using Info as fallback.'),xe.info)}(n),i=null!=l?l:o.label,{iconComponent:c}=o,s=null!=r?r:a.createElement(c,null);return a.createElement("div",{className:(0,d.Z)(N.k.common.admonition,N.k.common.admonitionType(e.type),"alert","alert--"+o.infimaClassName,Ce)},a.createElement("div",{className:Le},a.createElement("span",{className:ye},s),i),a.createElement("div",{className:we},t))}};function Be(e){let{children:t}=e;return a.createElement(de.Zo,{components:Me},t)}function Ve(e){let{children:t}=e;const n=function(){const{metadata:e,frontMatter:t,contentTitle:n}=c();return t.hide_title||void 0!==n?null:e.title}();return a.createElement("div",{className:(0,d.Z)(N.k.docs.docMarkdown,"markdown")},n&&a.createElement("header",null,a.createElement(se,{as:"h1"},n)),a.createElement(Be,null,t))}var ze=n(3438),He=n(8596),Ie=n(4996);function Se(e){return a.createElement("svg",(0,u.Z)({viewBox:"0 0 24 24"},e),a.createElement("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"}))}const De={breadcrumbsContainer:"breadcrumbsContainer_Z_bl",breadcrumbHomeIcon:"breadcrumbHomeIcon_OVgt"};function Pe(e){let{children:t,href:n,isLast:l}=e;const r="breadcrumbs__link";return l?a.createElement("span",{className:r,itemProp:"name"},t):n?a.createElement(h.Z,{className:r,href:n,itemProp:"item"},a.createElement("span",{itemProp:"name"},t)):a.createElement("span",{className:r},t)}function Re(e){let{children:t,active:n,index:l,addMicrodata:r}=e;return a.createElement("li",(0,u.Z)({},r&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},{className:(0,d.Z)("breadcrumbs__item",{"breadcrumbs__item--active":n})}),t,a.createElement("meta",{itemProp:"position",content:String(l+1)}))}function Oe(){const e=(0,Ie.Z)("/");return a.createElement("li",{className:"breadcrumbs__item"},a.createElement(h.Z,{"aria-label":(0,p.I)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:(0,d.Z)("breadcrumbs__link",De.breadcrumbsItemLink),href:e},a.createElement(Se,{className:De.breadcrumbHomeIcon})))}function Fe(){const e=(0,ze.s1)(),t=(0,He.Ns)();return e?a.createElement("nav",{className:(0,d.Z)(N.k.docs.docBreadcrumbs,De.breadcrumbsContainer),"aria-label":(0,p.I)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"})},a.createElement("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList"},t&&a.createElement(Oe,null),e.map(((t,n)=>{const l=n===e.length-1;return a.createElement(Re,{key:n,active:l,index:n,addMicrodata:!!t.href},a.createElement(Pe,{href:t.href,isLast:l},t.label))})))):null}const qe="docItemContainer_Djhp",We="docItemCol_VOVn";function je(e){let{children:t}=e;const n=function(){const{frontMatter:e,toc:t}=c(),n=(0,m.i)(),l=e.hide_table_of_contents,r=!l&&t.length>0;return{hidden:l,mobile:r?a.createElement(ne,null):void 0,desktop:!r||"desktop"!==n&&"ssr"!==n?void 0:a.createElement(re,null)}}();return a.createElement("div",{className:"row"},a.createElement("div",{className:(0,d.Z)("col",!n.hidden&&We)},a.createElement(y,null),a.createElement("div",{className:qe},a.createElement("article",null,a.createElement(Fe,null),a.createElement(w,null),n.mobile,a.createElement(Ve,null,t),a.createElement(W,null)),a.createElement(b,null))),n.desktop&&a.createElement("div",{className:"col col--3"},n.desktop))}function Ge(e){const t="docs-doc-id-"+e.content.metadata.unversionedId,n=e.content;return a.createElement(i,{content:e.content},a.createElement(l.FG,{className:t},a.createElement(s,null),a.createElement(je,null,a.createElement(n,null))))}},4477:(e,t,n)=>{n.d(t,{E:()=>i,q:()=>o});var a=n(7294),l=n(902);const r=a.createContext(null);function o(e){let{children:t,version:n}=e;return a.createElement(r.Provider,{value:n},t)}function i(){const e=(0,a.useContext)(r);if(null===e)throw new l.i6("DocsVersionProvider");return e}}}]);