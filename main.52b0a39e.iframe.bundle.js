(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{477:function(module,exports,__webpack_require__){__webpack_require__(478),__webpack_require__(638),__webpack_require__(639),__webpack_require__(840),__webpack_require__(841),__webpack_require__(848),__webpack_require__(845),__webpack_require__(842),__webpack_require__(849),__webpack_require__(843),__webpack_require__(844),__webpack_require__(850),module.exports=__webpack_require__(836)},545:function(module,exports){},639:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(342)},836:function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__(342).configure)([__webpack_require__(837),__webpack_require__(839)],module,!1)}).call(this,__webpack_require__(191)(module))},837:function(module,exports,__webpack_require__){var map={"./Button/stories/Button.stories.tsx":846,"./Spinner/stories/Spinner.stories.tsx":847};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=837},839:function(module,exports){function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=function(){return[]},webpackEmptyContext.resolve=webpackEmptyContext,module.exports=webpackEmptyContext,webpackEmptyContext.id=839},846:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default}));__webpack_require__(432);var _templateObject,objectSpread2=__webpack_require__(216),react=__webpack_require__(0),react_default=__webpack_require__.n(react),taggedTemplateLiteral=(__webpack_require__(197),__webpack_require__(214)),StyledButton=__webpack_require__(215).a.button.attrs((function(){return{className:"RBC__Button"}}))(_templateObject||(_templateObject=Object(taggedTemplateLiteral.a)(["\n  border-radius: 5px;\n  width: ",";\n  padding: 8px;\n  font-size: 14px;\n  border: none;\n  background-color: ",";\n  color: ",";\n  padding: ",";\n  margin: ",";\n  \n  &:hover {\n    filter: brightness(120%);\n  }\n"])),(function(_ref){var width=_ref.width;return width?"".concat(width,"px"):"100%"}),(function(_ref2){var fill=_ref2.fill;return fill?"".concat(fill):"#1464ff"}),(function(_ref3){var color=_ref3.color;return color?"".concat(color):"#fff"}),(function(_ref4){var padding=_ref4.padding;return padding?"".concat(padding,"px"):"10px"}),(function(_ref5){var margin=_ref5.margin;return margin?"".concat(margin,"px"):"10px"})),Button_Button=function Button(_ref){var _ref$content=_ref.content,content=void 0===_ref$content?"click me":_ref$content,handleClick=_ref.handleClick,fill=_ref.fill,color=_ref.color,width=_ref.width,padding=_ref.padding,margin=_ref.margin;return react_default.a.createElement(StyledButton,{"data-testid":"Button_Test",type:"button",onClick:function onClick(){return handleClick()},color:color,width:width,padding:padding,margin:margin,fill:fill},content)},src_Button_Button=Button_Button;try{Button_Button.displayName="Button",Button_Button.__docgenInfo={description:"",displayName:"Button",props:{content:{defaultValue:{value:"click me"},description:"",name:"content",required:!1,type:{name:"string"}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"string"}},fill:{defaultValue:null,description:"",name:"fill",required:!1,type:{name:"string"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"number"}},handleClick:{defaultValue:null,description:"",name:"handleClick",required:!0,type:{name:"any"}},padding:{defaultValue:null,description:"",name:"padding",required:!1,type:{name:"number"}},margin:{defaultValue:null,description:"",name:"margin",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Button/Button.tsx#Button"]={docgenInfo:Button_Button.__docgenInfo,name:"Button",path:"src/Button/Button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}__webpack_exports__.default={parameters:{storySource:{source:"import React from \"react\";\nimport { Meta } from '@storybook/react/types-6-0';\n\nimport Button from \"../Button\";\n\nexport default {\n  title: \"UI/Button\",\n  component: Button,\n  argTypes: {\n    content: { control: 'text' },\n    width: { control: 'number' },\n    margin: { control: 'number' },\n    padding: { control: 'number' },\n    color: { control: 'color' },\n    fill: { control: 'color' },\n  },\n} as Meta;\n\nconst Template = (args) => <Button {...args} />;\n\n// Each story then reuses that template\nexport const Default = Template.bind({});\n\nDefault.args = {\n  content: \"Click Me!\",\n  width: 200,\n  fill: '#1464ff',\n  color: '#fff432'\n};\n",locationsMap:{default:{startLoc:{col:17,line:19},endLoc:{col:47,line:19},startBody:{col:17,line:19},endBody:{col:47,line:19}}}}},title:"UI/Button",component:src_Button_Button,argTypes:{content:{control:"text"},width:{control:"number"},margin:{control:"number"},padding:{control:"number"},color:{control:"color"},fill:{control:"color"}}};var Default=function Template(args){return react_default.a.createElement(src_Button_Button,args)}.bind({});Default.args={content:"Click Me!",width:200,fill:"#1464ff",color:"#fff432"},Default.parameters=Object(objectSpread2.a)({storySource:{source:"(args) => <Button {...args} />"}},Default.parameters)},847:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default}));__webpack_require__(432);var _templateObject,objectSpread2=__webpack_require__(216),react=__webpack_require__(0),react_default=__webpack_require__.n(react),taggedTemplateLiteral=(__webpack_require__(197),__webpack_require__(214)),SpinnerContainer=__webpack_require__(215).a.div.attrs((function(){return{className:"RBC__Spinner"}}))(_templateObject||(_templateObject=Object(taggedTemplateLiteral.a)(["\n  border: 5px solid ",";\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  border-left-color: ",";\n  margin: 0 auto;\n  margin-top: 20px;\n  animation: spin 1s ease infinite;\n}\n\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n\n  100% {\n    transform: rotate(360deg);\n  }\n"])),(function(_ref){var color=_ref.color;return color||"#fff"}),(function(_ref2){var fill=_ref2.fill;return fill||"#1464ff"})),Spinner_Spinner=function Spinner(_ref){var color=_ref.color,fill=_ref.fill;return react_default.a.createElement(SpinnerContainer,{"data-testid":"Spinner_Test",fill:fill,color:color})},src_Spinner_Spinner=Spinner_Spinner;try{Spinner_Spinner.displayName="Spinner",Spinner_Spinner.__docgenInfo={description:"",displayName:"Spinner",props:{fill:{defaultValue:null,description:"",name:"fill",required:!1,type:{name:"string"}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Spinner/Spinner.tsx#Spinner"]={docgenInfo:Spinner_Spinner.__docgenInfo,name:"Spinner",path:"src/Spinner/Spinner.tsx#Spinner"})}catch(__react_docgen_typescript_loader_error){}__webpack_exports__.default={parameters:{storySource:{source:"import React from \"react\";\nimport { Meta } from '@storybook/react/types-6-0';\n\nimport Spinner from \"../Spinner\";\n\nexport default {\n  title: \"UI/Spinner\",\n  component: Spinner,\n  argTypes: {\n    color: { control: 'color' },\n    fill: { control: 'color' },\n  }\n} as Meta;\n\nconst Template = (args) => <Spinner {...args} />;\n\nexport const Default = Template.bind({});\n\nDefault.args = {\n  fill: '#1464ff',\n  color: '#fff',\n};\n",locationsMap:{default:{startLoc:{col:17,line:15},endLoc:{col:48,line:15},startBody:{col:17,line:15},endBody:{col:48,line:15}}}}},title:"UI/Spinner",component:src_Spinner_Spinner,argTypes:{color:{control:"color"},fill:{control:"color"}}};var Default=function Template(args){return react_default.a.createElement(src_Spinner_Spinner,args)}.bind({});Default.args={fill:"#1464ff",color:"#fff"},Default.parameters=Object(objectSpread2.a)({storySource:{source:"(args) => <Spinner {...args} />"}},Default.parameters)},850:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,"parameters",(function(){return parameters}));__webpack_require__(21),__webpack_require__(5),__webpack_require__(48),__webpack_require__(424),__webpack_require__(833),__webpack_require__(45),__webpack_require__(834),__webpack_require__(835),__webpack_require__(423);var client_api=__webpack_require__(856),esm=__webpack_require__(4),parameters={docs:{theme:__webpack_require__(135).a.dark}};function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":case"argTypes":return esm.a.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify(value));case"decorators":return value.forEach((function(decorator){return Object(client_api.c)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return Object(client_api.d)(loader,!1)}));case"parameters":return Object(client_api.e)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return Object(client_api.a)(enhancer)}));case"argsEnhancers":return value.forEach((function(enhancer){return Object(client_api.b)(enhancer)}));case"render":return Object(client_api.g)(value);case"globals":case"globalTypes":var v={};return v[key]=value,Object(client_api.e)(v,!1);default:return console.log(key+" was not supported :( !")}}))}},[[477,2,3]]]);