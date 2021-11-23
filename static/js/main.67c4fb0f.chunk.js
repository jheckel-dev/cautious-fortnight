(this["webpackJsonpcautious-fortnight"]=this["webpackJsonpcautious-fortnight"]||[]).push([[0],{26:function(e,t,c){},32:function(e,t,c){},33:function(e,t,c){},35:function(e,t,c){},36:function(e,t,c){},37:function(e,t,c){},38:function(e,t,c){},39:function(e,t,c){},40:function(e,t,c){},41:function(e,t,c){},42:function(e,t,c){},44:function(e,t,c){"use strict";c.r(t);var n=c(9),s=c(3),a=c(1),i=c(0),r=Object(a.createContext)(),l=function(e){var t=e.children,c=Object(a.useState)("light"),n=Object(s.a)(c,2),l=n[0],o=n[1];Object(a.useEffect)((function(){var e=window.matchMedia("(prefers-color-scheme: dark)");o(e.matches?"dark":"light"),e.addEventListener("change",(function(e){o(e.matches?"dark":"light")}))}),[]);return Object(i.jsx)(r.Provider,{value:[{themeName:l,toggleTheme:function(){var e="dark"===l?"light":"dark";localStorage.setItem("themeName",e),o(e)}}],children:t})},o=(c.p,"https://jheckel-dev.github.io/cautious-fortnight/"),h="JH.",j="Jalen Heckel",d="Full Stack Developer",u="After many years in sales and customer service I have embarked on recent career change to pivot toward web and application development! Here you will find a few of my recent works as part of the 24 week UW Coding Bootcamp.",b="https://drive.google.com/file/d/1ro_udJCuXfk7neSWzQ2UWa01I2xkqdlK/view?usp=sharing",m={linkedin:"https://linkedin.com/in/jalen-heckel-20327b169",github:"https://github.com/jheckel-dev",twitter:"https://twitter.com/Velcro_Man"},p=[{name:"Day Planner",description:"An application that allows the user to save tasks for each hour of the work day.",stack:["momentjs","JavaScript",""],sourceCode:"https://github.com/jheckel-dev/daily-planner",livePreview:"https://jheckel-dev.github.io/daily-planner/"},{name:"Forget Me Nots",description:"A simple note taking application using express.js to persistently store notes on local storage.",stack:["JavaScript","Express.js",""],sourceCode:"https://https://github.com/jheckel-dev/forget-me-nots.com",livePreview:"https://note-taker-shmote-shmaker.herokuapp.com"},{name:"E-Commerce Back End",description:"The backend for an online shopping retailer where items can be added, removed, and updated using JSON input form the user.",stack:["SQL","JavaScript","Expressjs"],sourceCode:"https://https://github.com/jheckel-dev/E-Commerce-Back-End.com",livePreview:"https://githttps://github.com/jheckel-dev/E-Commerce-Back-End/blob/main/Screen-Recording-2021-11-18-at-3.04.50-PM.gifhub.com"},{name:"Password Generator",description:"A simple JavaScript application that generats a random password for users to use on another site.",stack:["JavaScript","HTML","CSS"],sourceCode:"https://github.com/jheckel-dev/password-generator",livePreview:"https://jheckel-dev.github.io/password-generator/"},{name:"Code Quiz!",description:"A Basic coding uiz with a timer and a method to track the users score.",stack:["HTML","CSS","JavaScript"],sourceCode:"https://github.com/jheckel-dev/code-quiz",livePreview:"https://jheckel-dev.github.io/code-quiz/"},{name:"Signs and Events",description:"An application where we take in the users DOB and uses third party APIs to return some world events and astrological information about the user.",stack:["SQL","JavaScript","API"],sourceCode:"https://github.com/jheckel-dev/signs-and-events",livePreview:"https://jheckel-dev.github.io/signs-and-events/"}],k=["HTML","CSS","JavaScript","React","SASS","Material UI","GitHub","Jest","APIs","NodeJS","Express","SQL","NoSQL","MERN"],v="jalen.heckel@icloud.com",O=c(14),x=c.n(O),f=c(12),g=c.n(f),N=c(16),_=c.n(N),w=c(15),S=c.n(w),C=(c(26),function(){var e=Object(a.useContext)(r),t=Object(s.a)(e,1)[0],c=t.themeName,n=t.toggleTheme,l=Object(a.useState)(!1),o=Object(s.a)(l,2),h=o[0],j=o[1],d=function(){return j(!h)};return Object(i.jsxs)("nav",{className:"center nav",children:[Object(i.jsxs)("ul",{style:{display:h?"flex":null},className:"nav__list",children:[p.length?Object(i.jsx)("li",{className:"nav__list-item",children:Object(i.jsx)("a",{href:"#projects",onClick:d,className:"link link--nav",children:"Projects"})}):null,k.length?Object(i.jsx)("li",{className:"nav__list-item",children:Object(i.jsx)("a",{href:"#skills",onClick:d,className:"link link--nav",children:"Skills"})}):null,v?Object(i.jsx)("li",{className:"nav__list-item",children:Object(i.jsx)("a",{href:"#contact",onClick:d,className:"link link--nav",children:"Contact"})}):null]}),Object(i.jsx)("button",{type:"button",onClick:n,className:"btn btn--icon nav__theme","aria-label":"toggle theme",children:"dark"===c?Object(i.jsx)(g.a,{}):Object(i.jsx)(x.a,{})}),Object(i.jsx)("button",{type:"button",onClick:d,className:"btn btn--icon nav__hamburger","aria-label":"toggle navigation",children:h?Object(i.jsx)(S.a,{}):Object(i.jsx)(_.a,{})})]})}),y=(c(32),function(){var e=o,t=h;return Object(i.jsxs)("header",{className:"header center",children:[Object(i.jsx)("h3",{children:e?Object(i.jsx)("a",{href:e,className:"link",children:t}):t}),Object(i.jsx)(C,{})]})}),E=c(10),J=c.n(E),P=c(17),A=c.n(P),L=(c(33),function(){var e=j,t=d,c=u,n=b,s=m;return Object(i.jsxs)("div",{className:"about center",children:[e&&Object(i.jsxs)("h1",{children:["Hi, I am ",Object(i.jsxs)("span",{className:"about__name",children:[e,"."]})]}),t&&Object(i.jsxs)("h2",{className:"about__role",children:["A ",t,"."]}),Object(i.jsx)("p",{className:"about__desc",children:c&&c}),Object(i.jsxs)("div",{className:"about__contact center",children:[n&&Object(i.jsx)("a",{href:n,children:Object(i.jsx)("span",{type:"button",className:"btn btn--outline",children:"Resume"})}),s&&Object(i.jsxs)(i.Fragment,{children:[s.github&&Object(i.jsx)("a",{href:s.github,"aria-label":"github",className:"link link--icon",children:Object(i.jsx)(J.a,{})}),s.linkedin&&Object(i.jsx)("a",{href:s.linkedin,"aria-label":"linkedin",className:"link link--icon",children:Object(i.jsx)(A.a,{})})]})]})]})}),H=c(7),I=c.n(H),M=c(18),B=c.n(M),z=(c(35),function(e){var t=e.project;return Object(i.jsxs)("div",{className:"project",children:[Object(i.jsx)("h3",{children:t.name}),Object(i.jsx)("p",{className:"project__description",children:t.description}),t.stack&&Object(i.jsx)("ul",{className:"project__stack",children:t.stack.map((function(e){return Object(i.jsx)("li",{className:"project__stack-item",children:e},I()())}))}),t.sourceCode&&Object(i.jsx)("a",{href:t.sourceCode,"aria-label":"source code",className:"link link--icon",children:Object(i.jsx)(J.a,{})}),t.livePreview&&Object(i.jsx)("a",{href:t.livePreview,"aria-label":"live preview",className:"link link--icon",children:Object(i.jsx)(B.a,{})})]})}),Q=(c(36),function(){return p.length?Object(i.jsxs)("section",{id:"projects",className:"section projects",children:[Object(i.jsx)("h2",{className:"section__title",children:"Projects"}),Object(i.jsx)("div",{className:"projects__grid",children:p.map((function(e){return Object(i.jsx)(z,{project:e},I()())}))})]}):null}),T=(c(37),function(){return k.length?Object(i.jsxs)("section",{className:"section skills",id:"skills",children:[Object(i.jsx)("h2",{className:"section__title",children:"Skills"}),Object(i.jsx)("ul",{className:"skills__list",children:k.map((function(e){return Object(i.jsx)("li",{className:"skills__list-item btn btn--plain",children:e},I()())}))})]}):null}),R=c(19),q=c.n(R),D=(c(38),function(){var e=Object(a.useState)(!1),t=Object(s.a)(e,2),c=t[0],n=t[1];return Object(a.useEffect)((function(){var e=function(){return window.pageYOffset>500?n(!0):n(!1)};return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}}),[]),c?Object(i.jsx)("div",{className:"scroll-top",children:Object(i.jsx)("a",{href:"#top",children:Object(i.jsx)(q.a,{fontSize:"large"})})}):null}),F=(c(39),function(){return v?Object(i.jsxs)("section",{className:"section contact center",id:"contact",children:[Object(i.jsx)("h2",{className:"section__title",children:"Contact"}),Object(i.jsx)("a",{href:"mailto:".concat(v),children:Object(i.jsx)("span",{type:"button",className:"btn btn--outline",children:"Email me"})})]}):null}),U=(c(40),function(){return Object(i.jsx)("footer",{className:"footer",children:Object(i.jsx)("a",{href:"https://github.com/https://jheckel-dev.github.io/cautious-fortnight/",className:"link footer__link",children:"Created By Jalen Heckel"})})}),W=(c(41),function(){var e=Object(a.useContext)(r),t=Object(s.a)(e,1)[0].themeName;return Object(i.jsxs)("div",{id:"top",className:"".concat(t," app"),children:[Object(i.jsx)(y,{}),Object(i.jsxs)("main",{children:[Object(i.jsx)(L,{}),Object(i.jsx)(Q,{}),Object(i.jsx)(T,{}),Object(i.jsx)(F,{})]}),Object(i.jsx)(D,{}),Object(i.jsx)(U,{})]})});c(42);Object(n.render)(Object(i.jsx)(l,{children:Object(i.jsx)(W,{})}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.67c4fb0f.chunk.js.map