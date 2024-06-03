"use strict";(self.webpackChunkreact_start_template=self.webpackChunkreact_start_template||[]).push([[579],{"./src/features/forms/ui/ProductForm/ui/ProductForm.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CreateMode:()=>CreateMode,EditMode:()=>EditMode,__namedExportsOrder:()=>__namedExportsOrder,default:()=>ProductForm_stories});var react=__webpack_require__("./node_modules/react/index.js"),es=__webpack_require__("./node_modules/react-i18next/dist/es/index.js");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,_toPropertyKey(descriptor.key),descriptor)}}function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}var ProductStore=function(){function ProductStore(){!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,ProductStore),function _defineProperty(obj,key,value){return(key=_toPropertyKey(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}(this,"products",new Map)}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}(ProductStore,[{key:"save",value:function save(product){this.products.set(product.id,product)}},{key:"getById",value:function getById(id){return this.products.get(id)}},{key:"list",value:function list(){return Array.from(this.products.values())}}]),ProductStore}();const model_ProductStore=new ProductStore;var Categories=__webpack_require__("./src/features/storeProduct/model/Categories.ts"),getOrInitProduct=function getOrInitProduct(productId){return productId?model_ProductStore.getById(productId):{name:"",photo:"",price:0,category:Categories.d}},useProductStore=function useProductStore(productId){return{initProduct:(0,react.useMemo)((function(){return getOrInitProduct(productId)}),[productId]),getProduct:function getProduct(productId){return getOrInitProduct(productId)},saveProduct:function saveProduct(product){return function updateProduct(product){var nowMs=Date.now().toString();product.id=product.id||"product_".concat(nowMs),product.createdAt=product.createdAt||nowMs,model_ProductStore.save(product)}(product)},findCategory:function findCategory(categoryId){return function getCategoryById(categoryId){return Categories.Z.findLast((function(cat){return cat.id===categoryId}))||Categories.d}(categoryId)},getCategoryOptions:(0,react.useMemo)((function(){return Categories.Z.map((function(cat){return{value:cat.id,text:cat.name}}))}),[])}},index_esm=__webpack_require__("./node_modules/react-hook-form/dist/index.esm.mjs"),ui_form=__webpack_require__("./src/shared/ui/form/index.ts"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),ProductForm_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/features/forms/ui/ProductForm/ui/ProductForm.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(ProductForm_module.Z,options);const ui_ProductForm_module=ProductForm_module.Z&&ProductForm_module.Z.locals?ProductForm_module.Z.locals:void 0;var PhotoPreview_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/features/forms/ui/ProductForm/ui/PhotoPreview/PhotoPreview.module.scss"),PhotoPreview_module_options={};PhotoPreview_module_options.styleTagTransform=styleTagTransform_default(),PhotoPreview_module_options.setAttributes=setAttributesWithoutAttributes_default(),PhotoPreview_module_options.insert=insertBySelector_default().bind(null,"head"),PhotoPreview_module_options.domAPI=styleDomAPI_default(),PhotoPreview_module_options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(PhotoPreview_module.Z,PhotoPreview_module_options);const PhotoPreview_PhotoPreview_module=PhotoPreview_module.Z&&PhotoPreview_module.Z.locals?PhotoPreview_module.Z.locals:void 0;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),PhotoPreview=function PhotoPreview(_ref){var control=_ref.control,photo_url=(0,index_esm.qo)({control,name:"photo"});return photo_url&&(0,jsx_runtime.jsx)("div",{className:PhotoPreview_PhotoPreview_module.root,children:(0,jsx_runtime.jsx)("img",{className:PhotoPreview_PhotoPreview_module.preview_image,src:photo_url,alt:"Фото товара"})})};const PhotoPreview_PhotoPreview=PhotoPreview;try{PhotoPreview.displayName="PhotoPreview",PhotoPreview.__docgenInfo={description:"",displayName:"PhotoPreview",props:{control:{defaultValue:null,description:"",name:"control",required:!0,type:{name:"Control<T>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/features/forms/ui/ProductForm/ui/PhotoPreview/PhotoPreview.tsx#PhotoPreview"]={docgenInfo:PhotoPreview.__docgenInfo,name:"PhotoPreview",path:"src/features/forms/ui/ProductForm/ui/PhotoPreview/PhotoPreview.tsx#PhotoPreview"})}catch(__react_docgen_typescript_loader_error){}function ProductForm_typeof(o){return ProductForm_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},ProductForm_typeof(o)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){ProductForm_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function ProductForm_defineProperty(obj,key,value){return(key=function ProductForm_toPropertyKey(arg){var key=function ProductForm_toPrimitive(input,hint){if("object"!==ProductForm_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==ProductForm_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===ProductForm_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var ProductForm=function ProductForm(_ref){var _errors$name,_errors$photo,_errors$price,t=_ref.t,productId=_ref.productId,_useProductFormMode=function useProductFormMode(t,productId){var isEditMode=!!productId;return{mode:(0,react.useMemo)((function(){return isEditMode?{labels:{title:t("product.edit.title","Редактирование карточки продукта"),submit:t("product.edit.submit","Обновить")},isEdit:!0}:{labels:{title:t("product.create.title","Создание карточки продукта"),submit:t("product.create.submit","Сохранить")},isEdit:!1}}),[t,isEditMode])}}(t,productId),mode=_useProductFormMode.mode,_useProductStore=useProductStore(productId),initProduct=_useProductStore.initProduct,getProduct=_useProductStore.getProduct,saveProduct=_useProductStore.saveProduct,findCategory=_useProductStore.findCategory,getCategoryOptions=_useProductStore.getCategoryOptions,_useForm=(0,index_esm.cI)({defaultValues:_objectSpread(_objectSpread({},initProduct),{},{categoryId:initProduct.category.id})}),register=_useForm.register,handleSubmit=_useForm.handleSubmit,reset=_useForm.reset,setValue=_useForm.setValue,control=_useForm.control,errors=_useForm.formState.errors;return(0,jsx_runtime.jsxs)(ui_form.Yb,{className:ui_ProductForm_module.root,onSubmit:handleSubmit((function handleClick(data){var currentProduct=getProduct(initProduct.id),newProduct=_objectSpread(_objectSpread(_objectSpread({},currentProduct),data),{},{oldPrice:currentProduct.price,category:findCategory(data.categoryId)});setValue("price",data.price),saveProduct(newProduct),reset(void 0,{keepDirtyValues:mode.isEdit})})),title:mode.labels.title,children:[(0,jsx_runtime.jsx)(ui_form.yt,_objectSpread({label:t("product.inputs.name.label","Наименование товара"),error:null===(_errors$name=errors.name)||void 0===_errors$name?void 0:_errors$name.message,inputType:ui_form.l5.simple,isRequired:!0,placeholder:t("product.inputs.name.placeholder","")},register("name",{required:t("forms.requiredField",{ns:"errors",defaultValue:"Поле является обязательным"})}))),(0,jsx_runtime.jsx)(ui_form.yt,_objectSpread({label:t("product.inputs.desc.label","Описание товара"),inputType:ui_form.l5.textarea,placeholder:t("product.inputs.desc.placeholder","укажите описание")},register("desc"))),(0,jsx_runtime.jsx)(ui_form.yt,_objectSpread({label:t("product.inputs.photo.label","Ссылка на фото товара"),error:null===(_errors$photo=errors.photo)||void 0===_errors$photo?void 0:_errors$photo.message,inputType:ui_form.l5.simple,isRequired:!0,placeholder:t("product.inputs.photo.placeholder","URL")},register("photo",{required:t("forms.requiredField",{ns:"errors",defaultValue:"Поле является обязательным"})}))),(0,jsx_runtime.jsx)(PhotoPreview_PhotoPreview,{control}),(0,jsx_runtime.jsx)(ui_form.yt,_objectSpread({label:t("product.inputs.price.label","Цена"),error:null===(_errors$price=errors.price)||void 0===_errors$price?void 0:_errors$price.message,inputType:ui_form.l5.number,isRequired:!0,placeholder:t("product.inputs.price.placeholder","укажите цену")},register("price",{valueAsNumber:!0,min:{value:.01,message:t("forms.positiveValue",{ns:"errors",defaultValue:"Значение должно быть положительным"})},required:t("forms.requiredField",{ns:"errors",defaultValue:"Поле является обязательным"})}))),(0,jsx_runtime.jsx)(ui_form.yt,_objectSpread({label:t("product.inputs.categoryId.label","Категория товара"),inputType:ui_form.l5.select,selectOptions:getCategoryOptions},register("categoryId"))),(0,jsx_runtime.jsx)(ui_form.OL,{type:"submit",children:mode.labels.submit})]})};ProductForm.displayName="ProductForm";const ui_ProductForm=(0,es.Zh)(["forms","errors"])(ProductForm);var api=__webpack_require__("./src/features/createRandomProduct/api.ts"),stub=__webpack_require__("./src/entities/product/ui/productCard/stub.png");!function addProductToStore(){var product=(0,api.q)(Date.now().toString());product.id="1",product.photo=stub,model_ProductStore.save(product)}();const ProductForm_stories={title:"UI Kit/Forms/Product form",component:ui_ProductForm};var EditMode=function EditMode(){return(0,jsx_runtime.jsx)(ui_ProductForm,{productId:"1"})};EditMode.displayName="EditMode";var CreateMode=function CreateMode(){return(0,jsx_runtime.jsx)(ui_ProductForm,{})};CreateMode.displayName="CreateMode",EditMode.parameters={...EditMode.parameters,docs:{...EditMode.parameters?.docs,source:{originalSource:"() => <ProductForm productId={PRODUCT_ID} />",...EditMode.parameters?.docs?.source}}},CreateMode.parameters={...CreateMode.parameters,docs:{...CreateMode.parameters?.docs,source:{originalSource:"() => <ProductForm />",...CreateMode.parameters?.docs?.source}}};const __namedExportsOrder=["EditMode","CreateMode"]},"./src/features/createRandomProduct/api.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{q:()=>createRandomProduct});var src_features_storeProduct_model_Categories__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/features/storeProduct/model/Categories.ts");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var PRODUCTS_BY_CATEGORY=new Map([["cat_1",["product_1_1","product_1_2","product_1_3"]],["cat_2",["product_2_1","product_2_2"]],["cat_3",["product_3_1","product_3_2","product_3_3","product_3_4"]],["cat_4",["product_4_1"]],["cat_5",["product_5_1","product_5_2","product_5_3"]],["cat_6",["product_6_1","product_6_2"]],["cat_7",["product_7_1"]],["cat_8",["product_8_1","product_8_2"]],["cat_9",["product_9_1","product_9_2","product_9_3"]],["cat_10",["product_10_1","product_10_2"]]]),createRandomProduct=function createRandomProduct(createdAt){var millis=Date.now().toString();return function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}({id:"product_".concat(millis),createdAt,price:Math.ceil(100*Math.random()),oldPrice:Math.random()>.5?Math.ceil(100*Math.random()):void 0},function getCategoryDependentValues(){var category=src_features_storeProduct_model_Categories__WEBPACK_IMPORTED_MODULE_0__.Z[Math.floor(Math.random()*src_features_storeProduct_model_Categories__WEBPACK_IMPORTED_MODULE_0__.Z.length)],categoryProducts=PRODUCTS_BY_CATEGORY.get(category.name),product=categoryProducts[Math.floor(Math.random()*categoryProducts.length)];return{category,name:product,photo:"file://photo_".concat(product,"_").concat(millis),desc:Math.random()<.3?'Description of a product "'.concat(product,'"...'):void 0}}())}},"./src/features/storeProduct/model/Categories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__,d:()=>defaultCategory});var defaultCategory={id:"1",name:"cat_1",photo:"file://photo_cat_1"};const __WEBPACK_DEFAULT_EXPORT__=[defaultCategory,{id:"2",name:"cat_2"},{id:"3",name:"cat_3",photo:"file://photo_cat_3"},{id:"4",name:"cat_4"},{id:"5",name:"cat_5",photo:"file://photo_cat_5"},{id:"6",name:"cat_6"},{id:"7",name:"cat_7"},{id:"8",name:"cat_8"},{id:"9",name:"cat_9"},{id:"10",name:"cat_10"}]},"./src/shared/ui/form/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{OL:()=>_FormButton_FormButton__WEBPACK_IMPORTED_MODULE_2__.Z,Yb:()=>_FormContainer_FormContainer__WEBPACK_IMPORTED_MODULE_1__.Z,l5:()=>_FormInput_FormInput__WEBPACK_IMPORTED_MODULE_0__.l,yt:()=>_FormInput_FormInput__WEBPACK_IMPORTED_MODULE_0__.Z});var _FormInput_FormInput__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/shared/ui/form/FormInput/FormInput.tsx"),_FormContainer_FormContainer__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/shared/ui/form/FormContainer/FormContainer.tsx"),_FormButton_FormButton__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/shared/ui/form/FormButton/FormButton.tsx")},"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/features/forms/ui/ProductForm/ui/PhotoPreview/PhotoPreview.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".vP5gJI6inrUGwetJKvNl{margin-bottom:10px}.e_1hKbsyfJ0jHVZf166r{width:80%;display:block;margin:0 auto;border-radius:5px}","",{version:3,sources:["webpack://./src/features/forms/ui/ProductForm/ui/PhotoPreview/PhotoPreview.module.scss"],names:[],mappings:"AAAA,sBACE,kBAAA,CAGF,sBACE,SAAA,CACA,aAAA,CACA,aAAA,CACA,iBAAA",sourcesContent:[".root {\n  margin-bottom: 10px;\n}\n\n.preview_image {\n  width: 80%;\n  display: block;\n  margin: 0 auto;\n  border-radius: 5px;\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={root:"vP5gJI6inrUGwetJKvNl",preview_image:"e_1hKbsyfJ0jHVZf166r"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/features/forms/ui/ProductForm/ui/ProductForm.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".b0i2lho3ou30QtOq61TH{width:500px}","",{version:3,sources:["webpack://./src/features/forms/ui/ProductForm/ui/ProductForm.module.scss"],names:[],mappings:"AAAA,sBACE,WAAA",sourcesContent:[".root {\n  width: 500px;\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={root:"b0i2lho3ou30QtOq61TH"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./src/entities/product/ui/productCard/stub.png":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__.p+"static/media/stub.6e7e7c30.png"}}]);