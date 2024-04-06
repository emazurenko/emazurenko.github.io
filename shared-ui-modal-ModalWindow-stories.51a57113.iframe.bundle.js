/*! For license information please see shared-ui-modal-ModalWindow-stories.51a57113.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_start_template=self.webpackChunkreact_start_template||[]).push([[390],{"./src/shared/ui/modal/ModalWindow.stories.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>ModalWindow_stories});__webpack_require__("./node_modules/react/index.js");var clsx_m=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),CloseButton=__webpack_require__("./src/shared/ui/closeButton/CloseButton.jsx"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),ModalHeader_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/modal/modalHeader/ModalHeader.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(ModalHeader_module.Z,options);const modalHeader_ModalHeader_module=ModalHeader_module.Z&&ModalHeader_module.Z.locals?ModalHeader_module.Z.locals:void 0;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),ModalHeader=function ModalHeader(_ref){var title=_ref.title;return(0,jsx_runtime.jsxs)("div",{className:modalHeader_ModalHeader_module.root,children:[(0,jsx_runtime.jsx)("h3",{className:modalHeader_ModalHeader_module.title,children:title}),(0,jsx_runtime.jsx)(CloseButton.P,{size:"small",className:modalHeader_ModalHeader_module.close_button})]})};ModalHeader.displayName="ModalHeader",ModalHeader.__docgenInfo={description:"",methods:[],displayName:"ModalHeader"};var ModalContent_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/modal/modalContent/ModalContent.module.scss"),ModalContent_module_options={};ModalContent_module_options.styleTagTransform=styleTagTransform_default(),ModalContent_module_options.setAttributes=setAttributesWithoutAttributes_default(),ModalContent_module_options.insert=insertBySelector_default().bind(null,"head"),ModalContent_module_options.domAPI=styleDomAPI_default(),ModalContent_module_options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(ModalContent_module.Z,ModalContent_module_options);const modalContent_ModalContent_module=ModalContent_module.Z&&ModalContent_module.Z.locals?ModalContent_module.Z.locals:void 0;var ModalContent=function ModalContent(_ref){var children=_ref.children;return(0,jsx_runtime.jsx)("div",{className:modalContent_ModalContent_module.root,children})};ModalContent.displayName="ModalContent",ModalContent.__docgenInfo={description:"",methods:[],displayName:"ModalContent"};var ModalWindow_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/modal/ModalWindow.module.scss"),ModalWindow_module_options={};ModalWindow_module_options.styleTagTransform=styleTagTransform_default(),ModalWindow_module_options.setAttributes=setAttributesWithoutAttributes_default(),ModalWindow_module_options.insert=insertBySelector_default().bind(null,"head"),ModalWindow_module_options.domAPI=styleDomAPI_default(),ModalWindow_module_options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(ModalWindow_module.Z,ModalWindow_module_options);const modal_ModalWindow_module=ModalWindow_module.Z&&ModalWindow_module.Z.locals?ModalWindow_module.Z.locals:void 0;var ModalWindow=function ModalWindow(_ref){var title=_ref.title,visible=_ref.visible,children=_ref.children;return(0,jsx_runtime.jsx)("div",{className:(0,clsx_m.Z)(modal_ModalWindow_module.mask,!visible&&modal_ModalWindow_module.hidden),children:(0,jsx_runtime.jsxs)("div",{className:modal_ModalWindow_module.root,children:[(0,jsx_runtime.jsx)(ModalHeader,{title}),(0,jsx_runtime.jsx)(ModalContent,{children})]})})};function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}ModalWindow.displayName="ModalWindow",ModalWindow.__docgenInfo={description:"",methods:[],displayName:"ModalWindow"};const ModalWindow_stories={title:"UI/Modal window",component:ModalWindow,argTypes:{visible:{type:"boolean",description:"Признак видимости"},children:{type:"string",decription:"Содержимое модального окна",name:"content"},title:{type:"string",decription:"Заголовок модального окна"}}};var Template=function Template(args){return(0,jsx_runtime.jsx)(ModalWindow,function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}({},args))};Template.displayName="Template";var Default=Template.bind({});Default.args={visible:!0,title:"Modal window title",children:"Modal window content"},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => <ModalWindow {...args} />",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"./src/shared/ui/closeButton/CloseButton.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{P:()=>CloseButton});__webpack_require__("./node_modules/react/index.js");var clsx_m=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),CloseButton_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/closeButton/CloseButton.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(CloseButton_module.Z,options);const closeButton_CloseButton_module=CloseButton_module.Z&&CloseButton_module.Z.locals?CloseButton_module.Z.locals:void 0;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),CloseButton=function CloseButton(_ref){var _ref$size=_ref.size,size=void 0===_ref$size?"small":_ref$size,className=_ref.className,classNames=(0,clsx_m.Z)(closeButton_CloseButton_module.root,closeButton_CloseButton_module[size],className);return(0,jsx_runtime.jsx)("button",{className:classNames,onClick:function onCloseHandler(){return console.log("Cancel button click!")},children:(0,jsx_runtime.jsx)("div",{className:closeButton_CloseButton_module.symbol})})};CloseButton.displayName="CloseButton",CloseButton.__docgenInfo={description:"",methods:[],displayName:"CloseButton",props:{size:{defaultValue:{value:"'small'",computed:!1},required:!1}}}},"./node_modules/clsx/dist/clsx.m.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=function clsx(){for(var e,t,f=0,n="";f<arguments.length;)(e=arguments[f++])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}},"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/closeButton/CloseButton.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".lmxfU1z6Rc7NPHJWf0fr{padding:0;display:flex;align-items:center;justify-content:center;background-color:#fff;border-color:#a00;border-style:solid;border-width:2px;cursor:pointer;width:12px;height:12px;border-radius:2px}.lmxfU1z6Rc7NPHJWf0fr.YYVJgKFMK6oxmKgV3ghh{width:12px;height:12px;border-radius:2px}.lmxfU1z6Rc7NPHJWf0fr.HCP5dukc5twbiLGhjFVe{width:20px;height:20px;border-radius:5px}.lmxfU1z6Rc7NPHJWf0fr .tsS36K4yhxXzEfSQdm2A{border-width:2px;border-radius:50%;background-color:#a00;width:85%;height:85%}.lmxfU1z6Rc7NPHJWf0fr:hover{background-color:#fb8989}.lmxfU1z6Rc7NPHJWf0fr:hover .tsS36K4yhxXzEfSQdm2A{background-color:#fff}.lmxfU1z6Rc7NPHJWf0fr:active{background-color:#ce0101}.lmxfU1z6Rc7NPHJWf0fr:active .tsS36K4yhxXzEfSQdm2A{background-color:#fff}","",{version:3,sources:["webpack://./src/shared/ui/closeButton/CloseButton.module.scss","webpack://./src/shared/ui/variables.scss"],names:[],mappings:"AAWA,sBACI,SAAA,CACA,YAAA,CACA,kBAAA,CACA,sBAAA,CACA,qBAAA,CACA,iBAfQ,CAgBR,kBAAA,CACA,gBAAA,CACA,cAAA,CCfA,UDEqB,CCDrB,WDCqB,CACrB,iBAAA,CAiBA,2CCpBA,UDEqB,CCDrB,WDCqB,CACrB,iBAAA,CAqBA,2CCxBA,UDyByB,CCxBzB,WDwByB,CACrB,iBAAA,CAGJ,4CACI,gBAAA,CACA,iBAAA,CACA,qBAnCI,CCGR,SDiCyB,CChCzB,UDgCyB,CAGzB,4BACI,wBAvCU,CAyCV,kDACI,qBAAA,CAIR,6BACI,wBA9CW,CAgDX,mDACI,qBAAA",sourcesContent:["@import '../variables.scss';\n\n$close_red: #aa0000;\n$close_red_hover: rgb(251, 137, 137);\n$close_red_active: rgb(206, 1, 1);\n\n@mixin default_size() {\n    @include square_size(12px);\n    border-radius: 2px;\n}\n\n.root {\n    padding: 0;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background-color: white;\n    border-color: $close_red;\n    border-style: solid;\n    border-width: 2px;\n    cursor: pointer;\n\n    //default size\n    @include default_size();\n    \n    &.small {\n        @include default_size();\n    }\n\n    &.large {\n        @include square_size(20px);\n        border-radius: 5px;\n    }\n\n    .symbol {\n        border-width: 2px;\n        border-radius: 50%;\n        background-color: $close_red;\n        @include square_size(85%);\n    }\n\n    &:hover {\n        background-color: $close_red_hover;\n\n        .symbol {\n            background-color: white;\n        }\n    }\n\n    &:active {\n        background-color: $close_red_active;\n\n        .symbol {\n            background-color: white;\n        }\n    }\n}\n","$app_width: 700px;\n$main_color:  #a74e1b;\n$second_color: #7D2304;\n\n@mixin square_size($dimension) {\n    width: $dimension;\n    height: $dimension;\n}\n\n@mixin button_style() {\n    color: $second_color;\n    background-color: #F2EBDE;\n    border: 2px solid $main_color;\n    cursor: pointer;\n    padding-inline: 3px;\n    text-align: center;\n}\n\n@mixin button_style_hover() {\n    background-color: #f3efe9;\n}\n\n@mixin button_style_active() {\n    background-color: #f6f5f5;\n}"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={root:"lmxfU1z6Rc7NPHJWf0fr",small:"YYVJgKFMK6oxmKgV3ghh",large:"HCP5dukc5twbiLGhjFVe",symbol:"tsS36K4yhxXzEfSQdm2A"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/modal/ModalWindow.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".XaV1jNqOFG4NzOmsDPop{z-index:10;top:0;left:0;height:100%;width:100%;position:fixed;display:flex;align-items:center;justify-content:center;background-color:rgba(0,0,0,.5)}.XaV1jNqOFG4NzOmsDPop.lBUiayQOjE7uedBZ1Oqc{display:none}.vc7VypugqmVTJIMSlMsn{font-family:sans-serif;width:500px;background-color:#fff;border-radius:4px}","",{version:3,sources:["webpack://./src/shared/ui/modal/ModalWindow.module.scss"],names:[],mappings:"AAAA,sBACI,UAAA,CACA,KAAA,CACA,MAAA,CACA,WAAA,CACA,UAAA,CACA,cAAA,CACA,YAAA,CACA,kBAAA,CACA,sBAAA,CACA,+BAAA,CAEA,2CACI,YAAA,CAIR,sBACI,sBAAA,CACA,WAAA,CACA,qBAAA,CACA,iBAAA",sourcesContent:[".mask {\n    z-index: 10;\n    top: 0;\n    left: 0;\n    height: 100%;\n    width: 100%;\n    position: fixed;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background-color: rgba($color: #000000, $alpha: 0.5);\n\n    &.hidden {\n        display: none;\n    }\n}\n\n.root {\n    font-family: sans-serif;\n    width: 500px;\n    background-color: white;\n    border-radius: 4px;\n}\n\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={mask:"XaV1jNqOFG4NzOmsDPop",hidden:"lBUiayQOjE7uedBZ1Oqc",root:"vc7VypugqmVTJIMSlMsn"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/modal/modalContent/ModalContent.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".DmQ0omwbtuMZgVws7JXD{display:flex;justify-content:center;align-items:start;padding:0 8px 8px 8px}","",{version:3,sources:["webpack://./src/shared/ui/modal/modalContent/ModalContent.module.scss"],names:[],mappings:"AAEA,sBACI,YAAA,CACA,sBAAA,CACA,iBAAA,CACA,qBAAA",sourcesContent:["$padding_size: 8px;\n\n.root {\n    display: flex;\n    justify-content: center;\n    align-items: start;\n    padding: 0 $padding_size $padding_size $padding_size;\n}"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={root:"DmQ0omwbtuMZgVws7JXD"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/modal/modalHeader/ModalHeader.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".JrfGL0z08inulqhfsaB0{position:relative;display:flex;justify-content:center;padding:4px}.PGjf5UH8gKBiV8L45GpN{margin:8px}.YKbLMnAZW27dqtt2u37b{position:absolute;top:5px;right:5px}","",{version:3,sources:["webpack://./src/shared/ui/modal/modalHeader/ModalHeader.module.scss"],names:[],mappings:"AAEA,sBACI,iBAAA,CACA,YAAA,CACA,sBAAA,CACA,WANW,CASf,sBACI,UAAA,CAGJ,sBACI,iBAAA,CACA,OAAA,CACA,SAAA",sourcesContent:["$padding_size: 4px;\n\n.root {\n    position: relative;\n    display: flex;\n    justify-content: center;\n    padding: $padding_size;    \n}\n\n.title {\n    margin: 8px;\n}\n\n.close_button {\n    position: absolute;\n    top: 5px;\n    right: 5px;\n}\n\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={root:"JrfGL0z08inulqhfsaB0",title:"PGjf5UH8gKBiV8L45GpN",close_button:"YKbLMnAZW27dqtt2u37b"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/runtime/api.js":module=>{module.exports=function(cssWithMappingToString){var list=[];return list.toString=function toString(){return this.map((function(item){var content="",needLayer=void 0!==item[5];return item[4]&&(content+="@supports (".concat(item[4],") {")),item[2]&&(content+="@media ".concat(item[2]," {")),needLayer&&(content+="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {")),content+=cssWithMappingToString(item),needLayer&&(content+="}"),item[2]&&(content+="}"),item[4]&&(content+="}"),content})).join("")},list.i=function i(modules,media,dedupe,supports,layer){"string"==typeof modules&&(modules=[[null,modules,void 0]]);var alreadyImportedModules={};if(dedupe)for(var k=0;k<this.length;k++){var id=this[k][0];null!=id&&(alreadyImportedModules[id]=!0)}for(var _k=0;_k<modules.length;_k++){var item=[].concat(modules[_k]);dedupe&&alreadyImportedModules[item[0]]||(void 0!==layer&&(void 0===item[5]||(item[1]="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {").concat(item[1],"}")),item[5]=layer),media&&(item[2]?(item[1]="@media ".concat(item[2]," {").concat(item[1],"}"),item[2]=media):item[2]=media),supports&&(item[4]?(item[1]="@supports (".concat(item[4],") {").concat(item[1],"}"),item[4]=supports):item[4]="".concat(supports)),list.push(item))}},list}},"./node_modules/css-loader/dist/runtime/sourceMaps.js":module=>{module.exports=function(item){var content=item[1],cssMapping=item[3];if(!cssMapping)return content;if("function"==typeof btoa){var base64=btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping)))),data="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64),sourceMapping="/*# ".concat(data," */");return[content].concat([sourceMapping]).join("\n")}return[content].join("\n")}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":module=>{var stylesInDOM=[];function getIndexByIdentifier(identifier){for(var result=-1,i=0;i<stylesInDOM.length;i++)if(stylesInDOM[i].identifier===identifier){result=i;break}return result}function modulesToDom(list,options){for(var idCountMap={},identifiers=[],i=0;i<list.length;i++){var item=list[i],id=options.base?item[0]+options.base:item[0],count=idCountMap[id]||0,identifier="".concat(id," ").concat(count);idCountMap[id]=count+1;var indexByIdentifier=getIndexByIdentifier(identifier),obj={css:item[1],media:item[2],sourceMap:item[3],supports:item[4],layer:item[5]};if(-1!==indexByIdentifier)stylesInDOM[indexByIdentifier].references++,stylesInDOM[indexByIdentifier].updater(obj);else{var updater=addElementStyle(obj,options);options.byIndex=i,stylesInDOM.splice(i,0,{identifier,updater,references:1})}identifiers.push(identifier)}return identifiers}function addElementStyle(obj,options){var api=options.domAPI(options);api.update(obj);return function updater(newObj){if(newObj){if(newObj.css===obj.css&&newObj.media===obj.media&&newObj.sourceMap===obj.sourceMap&&newObj.supports===obj.supports&&newObj.layer===obj.layer)return;api.update(obj=newObj)}else api.remove()}}module.exports=function(list,options){var lastIdentifiers=modulesToDom(list=list||[],options=options||{});return function update(newList){newList=newList||[];for(var i=0;i<lastIdentifiers.length;i++){var index=getIndexByIdentifier(lastIdentifiers[i]);stylesInDOM[index].references--}for(var newLastIdentifiers=modulesToDom(newList,options),_i=0;_i<lastIdentifiers.length;_i++){var _index=getIndexByIdentifier(lastIdentifiers[_i]);0===stylesInDOM[_index].references&&(stylesInDOM[_index].updater(),stylesInDOM.splice(_index,1))}lastIdentifiers=newLastIdentifiers}}},"./node_modules/style-loader/dist/runtime/insertBySelector.js":module=>{var memo={};module.exports=function insertBySelector(insert,style){var target=function getTarget(target){if(void 0===memo[target]){var styleTarget=document.querySelector(target);if(window.HTMLIFrameElement&&styleTarget instanceof window.HTMLIFrameElement)try{styleTarget=styleTarget.contentDocument.head}catch(e){styleTarget=null}memo[target]=styleTarget}return memo[target]}(insert);if(!target)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");target.appendChild(style)}},"./node_modules/style-loader/dist/runtime/insertStyleElement.js":module=>{module.exports=function insertStyleElement(options){var element=document.createElement("style");return options.setAttributes(element,options.attributes),options.insert(element,options.options),element}},"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=function setAttributesWithoutAttributes(styleElement){var nonce=__webpack_require__.nc;nonce&&styleElement.setAttribute("nonce",nonce)}},"./node_modules/style-loader/dist/runtime/styleDomAPI.js":module=>{module.exports=function domAPI(options){if("undefined"==typeof document)return{update:function update(){},remove:function remove(){}};var styleElement=options.insertStyleElement(options);return{update:function update(obj){!function apply(styleElement,options,obj){var css="";obj.supports&&(css+="@supports (".concat(obj.supports,") {")),obj.media&&(css+="@media ".concat(obj.media," {"));var needLayer=void 0!==obj.layer;needLayer&&(css+="@layer".concat(obj.layer.length>0?" ".concat(obj.layer):""," {")),css+=obj.css,needLayer&&(css+="}"),obj.media&&(css+="}"),obj.supports&&(css+="}");var sourceMap=obj.sourceMap;sourceMap&&"undefined"!=typeof btoa&&(css+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))))," */")),options.styleTagTransform(css,styleElement,options.options)}(styleElement,options,obj)},remove:function remove(){!function removeStyleElement(styleElement){if(null===styleElement.parentNode)return!1;styleElement.parentNode.removeChild(styleElement)}(styleElement)}}}},"./node_modules/style-loader/dist/runtime/styleTagTransform.js":module=>{module.exports=function styleTagTransform(css,styleElement){if(styleElement.styleSheet)styleElement.styleSheet.cssText=css;else{for(;styleElement.firstChild;)styleElement.removeChild(styleElement.firstChild);styleElement.appendChild(document.createTextNode(css))}}}}]);