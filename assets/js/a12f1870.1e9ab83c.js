"use strict";(self.webpackChunk_electron_react_boilerplate_site=self.webpackChunk_electron_react_boilerplate_site||[]).push([[380],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(n),d=l,g=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(g,a(a({ref:t},p),{},{components:n})):r.createElement(g,a({ref:t},p))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,a=new Array(o);a[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:l,a[1]=i;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2134:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return m}});var r=n(7462),l=n(3366),o=(n(7294),n(3905)),a=["components"],i={id:"styling",title:"Styling",sidebar_label:"Styling"},s=void 0,c={unversionedId:"styling",id:"styling",title:"Styling",description:"Electron React Boilerplate supports CSS, SCSS, CSS and modules out of the box.",source:"@site/docs/styling.md",sourceDirName:".",slug:"/styling",permalink:"/docs/styling",editUrl:"https://github.com/electron-react-boilerplate/site/edit/main/docs/styling.md",tags:[],version:"current",frontMatter:{id:"styling",title:"Styling",sidebar_label:"Styling"},sidebar:"docs",previous:{title:"Native Modules",permalink:"/docs/native-modules"},next:{title:"Auto Update",permalink:"/docs/auto-update"}},p=[{value:"CSS",id:"css",children:[{value:"Importing CSS",id:"importing-css",children:[],level:3}],level:2},{value:"CSS Modules",id:"css-modules",children:[],level:2},{value:"SASS",id:"sass",children:[],level:2},{value:"Tailwind Integration",id:"tailwind-integration",children:[{value:"Without Custom Tailwind Config",id:"without-custom-tailwind-config",children:[],level:3},{value:"Custom Tailwind Config",id:"custom-tailwind-config",children:[],level:3}],level:2},{value:"Using SCSS",id:"using-scss",children:[],level:2},{value:"Images",id:"images",children:[],level:2}],u={toc:p};function m(e){var t=e.components,n=(0,l.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Electron React Boilerplate supports CSS, SCSS, CSS and modules out of the box."),(0,o.kt)("h2",{id:"css"},"CSS"),(0,o.kt)("p",null,"To import css you can import it like a regular module:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'import "./syle.css";\n// ...\n')),(0,o.kt)("h3",{id:"importing-css"},"Importing CSS"),(0,o.kt)("p",null,"Say you want to import css file from font-awesome module. Use following syntax:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-css"},'@import "~font-awesome/css/font-awesome.css";\n')),(0,o.kt)("p",null,"Note the tilde ",(0,o.kt)("inlineCode",{parentName:"p"},"~")," placed before module name."),(0,o.kt)("p",null,"The import css from all your modules will be concatenated into a single css file that will be injected into the header at build time."),(0,o.kt)("h2",{id:"css-modules"},"CSS Modules"),(0,o.kt)("p",null,"CSS modules allow you to scope styles. Files must be end with ",(0,o.kt)("inlineCode",{parentName:"p"},"*.module.{css,sass,scss}")," if they are to be recognized as a css module. Here is an example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'import styles from "./Button.module.css";\n\nconst Button = () => <button className={style.myButton} />;\n')),(0,o.kt)("p",null,"Read more about css modules here:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://css-tricks.com/css-modules-part-1-need/"},"why css modules?"))),(0,o.kt)("h2",{id:"sass"},"SASS"),(0,o.kt)("p",null,"Importing SASS is identical except for the extension:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'import styles from "./style.scss";\n// ...\n')),(0,o.kt)("h2",{id:"tailwind-integration"},"Tailwind Integration"),(0,o.kt)("p",null,"electron-react-boilerplate doesn't come with tailwind integration out of the box. There are two ways of configuring tailwind which depend whether you want to customize your tailwind config or not."),(0,o.kt)("h3",{id:"without-custom-tailwind-config"},"Without Custom Tailwind Config"),(0,o.kt)("p",null,"See this ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/amilajack/erb-tailwind-example"},"full working example of electron-react-boilerplate with tailwind")," for reference."),(0,o.kt)("p",null,"If you ",(0,o.kt)("strong",{parentName:"p"},"do not want to customize tailwind"),", you can simply run ",(0,o.kt)("inlineCode",{parentName:"p"},"npm install tailwindcss")," and import it:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/renderer/App.tsx"',title:'"src/renderer/App.tsx"'},'import "tailwindcss/tailwind.css";\n')),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"custom-tailwind-config"},"Custom Tailwind Config"),(0,o.kt)("p",null,"If you ",(0,o.kt)("strong",{parentName:"p"},"do want to customize tailwind"),", install the necessary dependencies:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save-dev tailwindcss postcss postcss-loader autoprefixer\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Add the following snippet after the ",(0,o.kt)("inlineCode",{parentName:"li"},"sass-loader")," entry in your webpack configs:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="webpack.config.renderer.dev.ts, webpack.config.renderer.prod.ts"',title:'"webpack.config.renderer.dev.ts,','webpack.config.renderer.prod.ts"':!0},"{\n  // ...\n  module: {\n    rules: {\n      // style, css, sass loaders...\n      loader: 'postcss-loader',\n      options: {\n        postcssOptions: {\n          plugins:\n            [\n              require('tailwindcss'),\n              require('autoprefixer'),\n            ]\n        }\n      }\n    }\n  }\n}\n")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Create ",(0,o.kt)("strong",{parentName:"li"},"postcss.config.js")," in the ",(0,o.kt)("strong",{parentName:"li"},".erb/configs")," folder with the following config:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title=".erb/configs/postcss.config.js"',title:'".erb/configs/postcss.config.js"'},'const tailwindcss = require("tailwindcss");\nconst autoprefixer = require("autoprefixer");\n\nmodule.exports = {\n  plugins: [tailwindcss, autoprefixer],\n};\n')),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"Import it:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/renderer/App.tsx"',title:'"src/renderer/App.tsx"'},'import "tailwindcss/tailwind.css";\n')),(0,o.kt)("p",null,"Create a ",(0,o.kt)("strong",{parentName:"p"},"tailwind.config.js")," file in the ",(0,o.kt)("strong",{parentName:"p"},"root folder of your project")," with the following config:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="tailwind.config.js"',title:'"tailwind.config.js"'},"import colors from \"tailwindcss/colors\";\n\nmodule.exports = {\n  content: ['./src/renderer/**/*.{js,jsx,ts,tsx,ejs}'],\n  darkMode: false, // or 'media' or 'class'\n  theme: {\n    extend: {\n      colors: {\n        sky: colors.sky,\n        cyan: colors.cyan,\n      },\n    },\n  },\n  variants: {\n    extend: {},\n  },\n  plugins: [],\n};\n")),(0,o.kt)("h2",{id:"using-scss"},"Using SCSS"),(0,o.kt)("p",null,"Use following example project to learn how to migrate from CSS to SCSS"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/amilajack/popcorn-time-desktop"},"Popcorn Time Desktop")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/amilajack/erb-bootstrap-example"},"ERB Bootstrap Example"))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Further Readings")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/electron-react-boilerplate/electron-react-boilerplate/issues/984"},"How to remove css-modules ? #984"))),(0,o.kt)("h2",{id:"images"},"Images"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"./src/img")," is the recommended folder for images."),(0,o.kt)("p",null,"Do not use ",(0,o.kt)("inlineCode",{parentName:"p"},"resources")," folder. It is actually intended for build assets."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/amilajack/popcorn-time-desktop/tree/master/app/images"},"Example of ",(0,o.kt)("inlineCode",{parentName:"a"},"./src/img")," folder")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/amilajack/popcorn-time-desktop/blob/master/app/components/card/Card.js#L10-L11"},"Usage of image in ",(0,o.kt)("inlineCode",{parentName:"a"},"./src/img")," folder"))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Further Readings")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/electron-react-boilerplate/electron-react-boilerplate/issues/951"},"[background-image from resources #951]"))))}m.isMDXComponent=!0}}]);