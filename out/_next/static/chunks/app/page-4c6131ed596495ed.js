(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{7666:(e,t,r)=>{Promise.resolve().then(r.bind(r,5031))},5031:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>N});var a=r(5155),s=r(2115);function l(){return(0,a.jsx)("div",{className:"fixed inset-0 bg-black bg-opacity-70 z-50",children:(0,a.jsx)("div",{className:"absolute inset-0 flex items-center justify-center",children:(0,a.jsxs)("h2",{className:"text-6xl font-bold text-white animate-pulse",children:["Happy New Year ",new Date().getFullYear()+1,"!"]})})})}var n=r(3463),i=r(9795);function d(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,i.QP)((0,n.$)(t))}let c=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)("div",{ref:t,className:d("rounded-xl border bg-card text-card-foreground shadow",r),...s})});c.displayName="Card";let o=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)("div",{ref:t,className:d("flex flex-col space-y-1.5 p-6",r),...s})});o.displayName="CardHeader";let u=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)("div",{ref:t,className:d("font-semibold leading-none tracking-tight",r),...s})});u.displayName="CardTitle";let f=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)("div",{ref:t,className:d("text-sm text-muted-foreground",r),...s})});f.displayName="CardDescription";let m=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)("div",{ref:t,className:d("p-6 pt-0",r),...s})});function x(e){let t=new Date,r=e.getTime()-t.getTime(),a=Math.floor(r/864e5);return{days:a,hours:Math.floor(r%864e5/36e5),minutes:Math.floor(r%36e5/6e4),seconds:Math.floor(r%6e4/1e3)}}function h(e){let{targetDate:t=function(){let e=new Date().getFullYear();return new Date("".concat(e+1,"-01-01T00:00:00"))}(),onCountdownEnd:r}=e,[l,n]=(0,s.useState)(x(t));return(0,s.useEffect)(()=>{let e=setInterval(()=>{let a=x(t);n(a),0===a.days&&0===a.hours&&0===a.minutes&&0===a.seconds&&(r(),clearInterval(e))},1e3);return()=>clearInterval(e)},[t,r]),(0,a.jsx)("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-4 text-center",children:Object.entries(l).map(e=>{let[t,r]=e;return(0,a.jsxs)("div",{className:"bg-primary text-primary-foreground rounded-lg p-4",children:[(0,a.jsx)("div",{className:"text-4xl font-bold",children:r}),(0,a.jsx)("div",{className:"text-sm capitalize",children:t})]},t)})})}function N(){let[e,t]=(0,s.useState)(!1);return(0,s.useEffect)(()=>{console.log("isFireworkActive:",e)},[e]),(0,a.jsx)("div",{className:"min-h-screen bg-background",children:e?(0,a.jsx)(l,{}):(0,a.jsx)("div",{className:"flex items-center justify-center p-4 h-screen",children:(0,a.jsxs)(c,{className:"w-full max-w-3xl",children:[(0,a.jsxs)(o,{children:[(0,a.jsxs)(u,{className:"text-3xl text-center",children:["Countdown to New Year ",new Date().getFullYear()+1]}),(0,a.jsxs)(f,{className:"text-center",children:["Time remaining until we welcome"," ",new Date().getFullYear()+1,"!"]})]}),(0,a.jsx)(m,{className:"space-y-6",children:(0,a.jsx)(h,{onCountdownEnd:()=>{t(!0)}})})]})})})}m.displayName="CardContent",s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)("div",{ref:t,className:d("flex items-center p-6 pt-0",r),...s})}).displayName="CardFooter"}},e=>{var t=t=>e(e.s=t);e.O(0,[181,441,517,358],()=>t(7666)),_N_E=e.O()}]);