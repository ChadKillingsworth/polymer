
/**
 * @fileoverview Closure types for Polymer mixins
 * @externs
 * This file is generated, do not edit manually
 */
/* eslint-disable no-unused-vars, strict */

/**
* @interface
*/
function Polymer_PropertyAccessorsExtern(){}

/**
 * @return {undefined}
*/
Polymer_PropertyAccessorsExtern.createPropertiesForAttributes = function(){};

/**
* @interface
*/
function Polymer_TemplateStampExtern(){}

/**
* @param {!HTMLTemplateElement} template Template to parse
* @param {TemplateInfo=} outerTemplateInfo Template metadata from the outer
  template, for parsing nested templates
* @return {!TemplateInfo}
*/
Polymer_TemplateStampExtern._parseTemplate = function(template, outerTemplateInfo){};
/**
* @param {*} template 
* @param {*} templateInfo 
* @param {*} nodeInfo 
*/
Polymer_TemplateStampExtern._parseTemplateContent = function(template, templateInfo, nodeInfo){};
/**
* @param {Node} node Node to parse
* @param {!TemplateInfo} templateInfo Template metadata for current template
* @param {!NodeInfo} nodeInfo Node metadata for current template.
* @return {boolean}
*/
Polymer_TemplateStampExtern._parseTemplateNode = function(node, templateInfo, nodeInfo){};
/**
* @param {Node} root Root node whose `childNodes` will be parsed
* @param {!TemplateInfo} templateInfo Template metadata for current template
* @param {!NodeInfo} nodeInfo Node metadata for current template.
*/
Polymer_TemplateStampExtern._parseTemplateChildNodes = function(root, templateInfo, nodeInfo){};
/**
* @param {HTMLTemplateElement} node Node to parse (a <template>)
* @param {TemplateInfo} outerTemplateInfo Template metadata for current template
  that includes the template `node`
* @param {!NodeInfo} nodeInfo Node metadata for current template.
* @return {boolean}
*/
Polymer_TemplateStampExtern._parseTemplateNestedTemplate = function(node, outerTemplateInfo, nodeInfo){};
/**
* @param {Element} node Node to parse
* @param {TemplateInfo} templateInfo Template metadata for current template
* @param {NodeInfo} nodeInfo Node metadata for current template.
* @return {boolean}
*/
Polymer_TemplateStampExtern._parseTemplateNodeAttributes = function(node, templateInfo, nodeInfo){};
/**
* @param {Element} node Node to parse
* @param {!TemplateInfo} templateInfo Template metadata for current template
* @param {!NodeInfo} nodeInfo Node metadata for current template.
* @param {string} name Attribute name
* @param {string} value Attribute value
* @return {boolean}
*/
Polymer_TemplateStampExtern._parseTemplateNodeAttribute = function(node, templateInfo, nodeInfo, name, value){};
/**
* @param {HTMLTemplateElement} template Template to retrieve `content` for
* @return {DocumentFragment}
*/
Polymer_TemplateStampExtern._contentForTemplate = function(template){};
/**
* @interface
* @extends {Polymer_TemplateStampExtern}
* @extends {Polymer_PropertyAccessorsExtern}
*/
function Polymer_PropertyEffectsExtern(){}

/**
* @param {!HTMLTemplateElement} template Template to parse
* @param {TemplateInfo=} outerTemplateInfo Template metadata from the outer
  template, for parsing nested templates
* @return {!TemplateInfo}
*/
Polymer_PropertyEffectsExtern._parseTemplate = function(template, outerTemplateInfo){};
/**
* @param {*} template 
* @param {*} templateInfo 
* @param {*} nodeInfo 
*/
Polymer_PropertyEffectsExtern._parseTemplateContent = function(template, templateInfo, nodeInfo){};
/**
* @override
* @param {Node} node Node to parse
* @param {TemplateInfo} templateInfo Template metadata for current template
* @param {NodeInfo} nodeInfo Node metadata for current template node
* @return {boolean}
*/
Polymer_PropertyEffectsExtern._parseTemplateNode = function(node, templateInfo, nodeInfo){};
/**
* @param {Node} root Root node whose `childNodes` will be parsed
* @param {!TemplateInfo} templateInfo Template metadata for current template
* @param {!NodeInfo} nodeInfo Node metadata for current template.
*/
Polymer_PropertyEffectsExtern._parseTemplateChildNodes = function(root, templateInfo, nodeInfo){};
/**
* @override
* @param {Node} node Node to parse
* @param {TemplateInfo} templateInfo Template metadata for current template
* @param {NodeInfo} nodeInfo Node metadata for current template node
* @return {boolean}
*/
Polymer_PropertyEffectsExtern._parseTemplateNestedTemplate = function(node, templateInfo, nodeInfo){};
/**
* @param {Element} node Node to parse
* @param {TemplateInfo} templateInfo Template metadata for current template
* @param {NodeInfo} nodeInfo Node metadata for current template.
* @return {boolean}
*/
Polymer_PropertyEffectsExtern._parseTemplateNodeAttributes = function(node, templateInfo, nodeInfo){};
/**
* @override
* @param {Element} node Node to parse
* @param {TemplateInfo} templateInfo Template metadata for current template
* @param {NodeInfo} nodeInfo Node metadata for current template node
* @param {*} name 
* @param {*} value 
* @return {boolean}
*/
Polymer_PropertyEffectsExtern._parseTemplateNodeAttribute = function(node, templateInfo, nodeInfo, name, value){};
/**
* @param {HTMLTemplateElement} template Template to retrieve `content` for
* @return {DocumentFragment}
*/
Polymer_PropertyEffectsExtern._contentForTemplate = function(template){};
/**
*/
Polymer_PropertyEffectsExtern.createPropertiesForAttributes = function(){};
/**
* @param {string} property Property that should trigger the effect
* @param {string} type Effect type, from this.PROPERTY_EFFECT_TYPES
* @param {Object=} effect Effect metadata object
*/
Polymer_PropertyEffectsExtern.addPropertyEffect = function(property, type, effect){};
/**
* @param {string} property Property name
* @param {string} methodName Name of observer method to call
* @param {boolean=} dynamicFn Whether the method name should be included as
  a dependency to the effect.
*/
Polymer_PropertyEffectsExtern.createPropertyObserver = function(property, methodName, dynamicFn){};
/**
* @param {string} expression Method expression
* @param {(boolean|Object)=} dynamicFn Boolean or object map indicating
  whether method names should be included as a dependency to the effect.
*/
Polymer_PropertyEffectsExtern.createMethodObserver = function(expression, dynamicFn){};
/**
* @param {string} property Property name
*/
Polymer_PropertyEffectsExtern.createNotifyingProperty = function(property){};
/**
* @param {string} property Property name
* @param {boolean=} protectedSetter Creates a custom protected setter
  when `true`.
*/
Polymer_PropertyEffectsExtern.createReadOnlyProperty = function(property, protectedSetter){};
/**
* @param {string} property Property name
*/
Polymer_PropertyEffectsExtern.createReflectedProperty = function(property){};
/**
* @param {string} property Name of computed property to set
* @param {string} expression Method expression
* @param {(boolean|Object)=} dynamicFn Boolean or object map indicating whether
  method names should be included as a dependency to the effect.
*/
Polymer_PropertyEffectsExtern.createComputedProperty = function(property, expression, dynamicFn){};
/**
* @param {HTMLTemplateElement} template Template containing binding
  bindings
* @return {Object}
*/
Polymer_PropertyEffectsExtern.bindTemplate = function(template){};
/**
* @param {Object} templateInfo Template metadata to add effect to
* @param {string} prop Property that should trigger the effect
* @param {Object=} effect Effect metadata object
*/
Polymer_PropertyEffectsExtern._addTemplatePropertyEffect = function(templateInfo, prop, effect){};
/**
* @param {string} text Text to parse from attribute or textContent
* @param {Object} templateInfo Current template metadata
* @return {Array.<!BindingPart>}
*/
Polymer_PropertyEffectsExtern._parseBindings = function(text, templateInfo){};
/**
* @param {this} inst Element that should be used as scope for
  binding dependencies
* @param {BindingPart} part Binding part metadata
* @param {string} path Property/path that triggered this effect
* @param {Object} props Bag of current property changes
* @param {Object} oldProps Bag of previous values for changed properties
* @param {boolean} hasPaths True with `props` contains one or more paths
* @return {*}
*/
Polymer_PropertyEffectsExtern._evaluateBinding = function(inst, part, path, props, oldProps, hasPaths){};
/**
* @interface
* @extends {Polymer_PropertyEffectsExtern}
*/
function Polymer_ElementMixinExtern(){}

/**
* @param {!HTMLTemplateElement} template Template to parse
* @param {TemplateInfo=} outerTemplateInfo Template metadata from the outer
  template, for parsing nested templates
* @return {!TemplateInfo}
*/
Polymer_ElementMixinExtern._parseTemplate = function(template, outerTemplateInfo){};
/**
* @override
*/
Polymer_ElementMixinExtern._parseTemplateContent = function(template, templateInfo, nodeInfo){};
/**
* @override
* @param {Node} node Node to parse
* @param {TemplateInfo} templateInfo Template metadata for current template
* @param {NodeInfo} nodeInfo Node metadata for current template node
* @return {boolean}
*/
Polymer_ElementMixinExtern._parseTemplateNode = function(node, templateInfo, nodeInfo){};
/**
* @param {Node} root Root node whose `childNodes` will be parsed
* @param {!TemplateInfo} templateInfo Template metadata for current template
* @param {!NodeInfo} nodeInfo Node metadata for current template.
*/
Polymer_ElementMixinExtern._parseTemplateChildNodes = function(root, templateInfo, nodeInfo){};
/**
* @override
* @param {Node} node Node to parse
* @param {TemplateInfo} templateInfo Template metadata for current template
* @param {NodeInfo} nodeInfo Node metadata for current template node
* @return {boolean}
*/
Polymer_ElementMixinExtern._parseTemplateNestedTemplate = function(node, templateInfo, nodeInfo){};
/**
* @param {Element} node Node to parse
* @param {TemplateInfo} templateInfo Template metadata for current template
* @param {NodeInfo} nodeInfo Node metadata for current template.
* @return {boolean}
*/
Polymer_ElementMixinExtern._parseTemplateNodeAttributes = function(node, templateInfo, nodeInfo){};
/**
* @override
* @param {Element} node Node to parse
* @param {TemplateInfo} templateInfo Template metadata for current template
* @param {NodeInfo} nodeInfo Node metadata for current template node
* @param {*} name 
* @param {*} value 
* @return {boolean}
*/
Polymer_ElementMixinExtern._parseTemplateNodeAttribute = function(node, templateInfo, nodeInfo, name, value){};
/**
* @param {HTMLTemplateElement} template Template to retrieve `content` for
* @return {DocumentFragment}
*/
Polymer_ElementMixinExtern._contentForTemplate = function(template){};
/**
*/
Polymer_ElementMixinExtern.createPropertiesForAttributes = function(){};
/**
* @param {string} property Property that should trigger the effect
* @param {string} type Effect type, from this.PROPERTY_EFFECT_TYPES
* @param {Object=} effect Effect metadata object
*/
Polymer_ElementMixinExtern.addPropertyEffect = function(property, type, effect){};
/**
* @param {string} property Property name
* @param {string} methodName Name of observer method to call
* @param {boolean=} dynamicFn Whether the method name should be included as
  a dependency to the effect.
*/
Polymer_ElementMixinExtern.createPropertyObserver = function(property, methodName, dynamicFn){};
/**
* @param {string} expression Method expression
* @param {(boolean|Object)=} dynamicFn Boolean or object map indicating
  whether method names should be included as a dependency to the effect.
*/
Polymer_ElementMixinExtern.createMethodObserver = function(expression, dynamicFn){};
/**
* @param {string} property Property name
*/
Polymer_ElementMixinExtern.createNotifyingProperty = function(property){};
/**
* @param {string} property Property name
* @param {boolean=} protectedSetter Creates a custom protected setter
  when `true`.
*/
Polymer_ElementMixinExtern.createReadOnlyProperty = function(property, protectedSetter){};
/**
* @param {string} property Property name
*/
Polymer_ElementMixinExtern.createReflectedProperty = function(property){};
/**
* @param {string} property Name of computed property to set
* @param {string} expression Method expression
* @param {(boolean|Object)=} dynamicFn Boolean or object map indicating whether
  method names should be included as a dependency to the effect.
*/
Polymer_ElementMixinExtern.createComputedProperty = function(property, expression, dynamicFn){};
/**
* @param {HTMLTemplateElement} template Template containing binding
  bindings
* @return {Object}
*/
Polymer_ElementMixinExtern.bindTemplate = function(template){};
/**
* @param {Object} templateInfo Template metadata to add effect to
* @param {string} prop Property that should trigger the effect
* @param {Object=} effect Effect metadata object
*/
Polymer_ElementMixinExtern._addTemplatePropertyEffect = function(templateInfo, prop, effect){};
/**
* @param {string} text Text to parse from attribute or textContent
* @param {Object} templateInfo Current template metadata
* @return {Array.<!BindingPart>}
*/
Polymer_ElementMixinExtern._parseBindings = function(text, templateInfo){};
/**
* @param {this} inst Element that should be used as scope for
  binding dependencies
* @param {BindingPart} part Binding part metadata
* @param {string} path Property/path that triggered this effect
* @param {Object} props Bag of current property changes
* @param {Object} oldProps Bag of previous values for changed properties
* @param {boolean} hasPaths True with `props` contains one or more paths
* @return {*}
*/
Polymer_ElementMixinExtern._evaluateBinding = function(inst, part, path, props, oldProps, hasPaths){};
/**
*/
Polymer_ElementMixinExtern.finalize = function(){};
/**
* @interface
* @extends {Polymer_ElementMixinExtern}
*/
function Polymer_LegacyElementMixinExtern(){}
/**
* @param {!HTMLTemplateElement} template Template to parse
* @param {TemplateInfo=} outerTemplateInfo Template metadata from the outer
  template, for parsing nested templates
* @return {!TemplateInfo}
*/
Polymer_LegacyElementMixinExtern._parseTemplate = function(template, outerTemplateInfo){};
/**
* @override
*/
Polymer_LegacyElementMixinExtern._parseTemplateContent = function(template, templateInfo, nodeInfo){};
/**
* @override
* @param {Node} node Node to parse
* @param {TemplateInfo} templateInfo Template metadata for current template
* @param {NodeInfo} nodeInfo Node metadata for current template node
* @return {boolean}
*/
Polymer_LegacyElementMixinExtern._parseTemplateNode = function(node, templateInfo, nodeInfo){};
/**
* @param {Node} root Root node whose `childNodes` will be parsed
* @param {!TemplateInfo} templateInfo Template metadata for current template
* @param {!NodeInfo} nodeInfo Node metadata for current template.
*/
Polymer_LegacyElementMixinExtern._parseTemplateChildNodes = function(root, templateInfo, nodeInfo){};
/**
* @param {HTMLTemplateElement} node Node to parse (a <template>)
* @param {TemplateInfo} outerTemplateInfo Template metadata for current template
  that includes the template `node`
* @param {!NodeInfo} nodeInfo Node metadata for current template.
* @return {boolean}
*/
Polymer_LegacyElementMixinExtern._parseTemplateNestedTemplate = function(node, outerTemplateInfo, nodeInfo){};
/**
* @param {Element} node Node to parse
* @param {TemplateInfo} templateInfo Template metadata for current template
* @param {NodeInfo} nodeInfo Node metadata for current template.
* @return {boolean}
*/
Polymer_LegacyElementMixinExtern._parseTemplateNodeAttributes = function(node, templateInfo, nodeInfo){};
/**
* @override
* @param {Element} node Node to parse
* @param {TemplateInfo} templateInfo Template metadata for current template
* @param {NodeInfo} nodeInfo Node metadata for current template node
* @param {*} name 
* @param {*} value 
* @return {boolean}
*/
Polymer_LegacyElementMixinExtern._parseTemplateNodeAttribute = function(node, templateInfo, nodeInfo, name, value){};
/**
* @param {HTMLTemplateElement} template Template to retrieve `content` for
* @return {DocumentFragment}
*/
Polymer_LegacyElementMixinExtern._contentForTemplate = function(template){};
/**
*/
Polymer_LegacyElementMixinExtern.createPropertiesForAttributes = function(){};
/**
* @param {string} property Property that should trigger the effect
* @param {string} type Effect type, from this.PROPERTY_EFFECT_TYPES
* @param {Object=} effect Effect metadata object
*/
Polymer_LegacyElementMixinExtern.addPropertyEffect = function(property, type, effect){};
/**
* @param {string} property Property name
* @param {string} methodName Name of observer method to call
* @param {boolean=} dynamicFn Whether the method name should be included as
  a dependency to the effect.
*/
Polymer_LegacyElementMixinExtern.createPropertyObserver = function(property, methodName, dynamicFn){};
/**
* @param {string} expression Method expression
* @param {(boolean|Object)=} dynamicFn Boolean or object map indicating
  whether method names should be included as a dependency to the effect.
*/
Polymer_LegacyElementMixinExtern.createMethodObserver = function(expression, dynamicFn){};
/**
* @param {string} property Property name
*/
Polymer_LegacyElementMixinExtern.createNotifyingProperty = function(property){};
/**
* @param {string} property Property name
* @param {boolean=} protectedSetter Creates a custom protected setter
  when `true`.
*/
Polymer_LegacyElementMixinExtern.createReadOnlyProperty = function(property, protectedSetter){};
/**
* @param {string} property Property name
*/
Polymer_LegacyElementMixinExtern.createReflectedProperty = function(property){};
/**
* @param {string} property Name of computed property to set
* @param {string} expression Method expression
* @param {(boolean|Object)=} dynamicFn Boolean or object map indicating whether
  method names should be included as a dependency to the effect.
*/
Polymer_LegacyElementMixinExtern.createComputedProperty = function(property, expression, dynamicFn){};
/**
* @param {HTMLTemplateElement} template Template containing binding
  bindings
* @return {Object}
*/
Polymer_LegacyElementMixinExtern.bindTemplate = function(template){};
/**
* @param {Object} templateInfo Template metadata to add effect to
* @param {string} prop Property that should trigger the effect
* @param {Object=} effect Effect metadata object
*/
Polymer_LegacyElementMixinExtern._addTemplatePropertyEffect = function(templateInfo, prop, effect){};
/**
* @param {string} text Text to parse from attribute or textContent
* @param {Object} templateInfo Current template metadata
* @return {Array.<!BindingPart>}
*/
Polymer_LegacyElementMixinExtern._parseBindings = function(text, templateInfo){};
/**
* @param {this} inst Element that should be used as scope for
  binding dependencies
* @param {BindingPart} part Binding part metadata
* @param {string} path Property/path that triggered this effect
* @param {Object} props Bag of current property changes
* @param {Object} oldProps Bag of previous values for changed properties
* @param {boolean} hasPaths True with `props` contains one or more paths
* @return {*}
*/
Polymer_LegacyElementMixinExtern._evaluateBinding = function(inst, part, path, props, oldProps, hasPaths){};
/**
*/
Polymer_LegacyElementMixinExtern.finalize = function(){};

/**
* @interface
* @extends {Polymer_ElementMixinExtern}
*/
function Polymer_ArraySelectorMixinExtern(){}
/**
* @param {!HTMLTemplateElement} template Template to parse
* @param {TemplateInfo=} outerTemplateInfo Template metadata from the outer
  template, for parsing nested templates
* @return {!TemplateInfo}
*/
Polymer_ArraySelectorMixinExtern._parseTemplate = function(template, outerTemplateInfo){};
/**
* @override
*/
Polymer_ArraySelectorMixinExtern._parseTemplateContent = function(template, templateInfo, nodeInfo){};
/**
* @override
* @param {Node} node Node to parse
* @param {TemplateInfo} templateInfo Template metadata for current template
* @param {NodeInfo} nodeInfo Node metadata for current template node
* @return {boolean}
*/
Polymer_ArraySelectorMixinExtern._parseTemplateNode = function(node, templateInfo, nodeInfo){};
/**
* @param {Node} root Root node whose `childNodes` will be parsed
* @param {!TemplateInfo} templateInfo Template metadata for current template
* @param {!NodeInfo} nodeInfo Node metadata for current template.
*/
Polymer_ArraySelectorMixinExtern._parseTemplateChildNodes = function(root, templateInfo, nodeInfo){};
/**
* @override
* @param {Node} node Node to parse
* @param {TemplateInfo} templateInfo Template metadata for current template
* @param {NodeInfo} nodeInfo Node metadata for current template node
* @return {boolean}
*/
Polymer_ArraySelectorMixinExtern._parseTemplateNestedTemplate = function(node, templateInfo, nodeInfo){};
/**
* @param {Element} node Node to parse
* @param {TemplateInfo} templateInfo Template metadata for current template
* @param {NodeInfo} nodeInfo Node metadata for current template.
* @return {boolean}
*/
Polymer_ArraySelectorMixinExtern._parseTemplateNodeAttributes = function(node, templateInfo, nodeInfo){};
/**
* @override
* @param {Element} node Node to parse
* @param {TemplateInfo} templateInfo Template metadata for current template
* @param {NodeInfo} nodeInfo Node metadata for current template node
* @param {*} name 
* @param {*} value 
* @return {boolean}
*/
Polymer_ArraySelectorMixinExtern._parseTemplateNodeAttribute = function(node, templateInfo, nodeInfo, name, value){};
/**
* @param {HTMLTemplateElement} template Template to retrieve `content` for
* @return {DocumentFragment}
*/
Polymer_ArraySelectorMixinExtern._contentForTemplate = function(template){};
/**
*/
Polymer_ArraySelectorMixinExtern.createPropertiesForAttributes = function(){};
/**
* @param {string} property Property that should trigger the effect
* @param {string} type Effect type, from this.PROPERTY_EFFECT_TYPES
* @param {Object=} effect Effect metadata object
*/
Polymer_ArraySelectorMixinExtern.addPropertyEffect = function(property, type, effect){};
/**
* @param {string} property Property name
* @param {string} methodName Name of observer method to call
* @param {boolean=} dynamicFn Whether the method name should be included as
  a dependency to the effect.
*/
Polymer_ArraySelectorMixinExtern.createPropertyObserver = function(property, methodName, dynamicFn){};
/**
* @param {string} expression Method expression
* @param {(boolean|Object)=} dynamicFn Boolean or object map indicating
  whether method names should be included as a dependency to the effect.
*/
Polymer_ArraySelectorMixinExtern.createMethodObserver = function(expression, dynamicFn){};
/**
* @param {string} property Property name
*/
Polymer_ArraySelectorMixinExtern.createNotifyingProperty = function(property){};
/**
* @param {string} property Property name
* @param {boolean=} protectedSetter Creates a custom protected setter
  when `true`.
*/
Polymer_ArraySelectorMixinExtern.createReadOnlyProperty = function(property, protectedSetter){};
/**
* @param {string} property Property name
*/
Polymer_ArraySelectorMixinExtern.createReflectedProperty = function(property){};
/**
* @param {string} property Name of computed property to set
* @param {string} expression Method expression
* @param {(boolean|Object)=} dynamicFn Boolean or object map indicating whether
  method names should be included as a dependency to the effect.
*/
Polymer_ArraySelectorMixinExtern.createComputedProperty = function(property, expression, dynamicFn){};
/**
* @param {HTMLTemplateElement} template Template containing binding
  bindings
* @return {Object}
*/
Polymer_ArraySelectorMixinExtern.bindTemplate = function(template){};
/**
* @param {Object} templateInfo Template metadata to add effect to
* @param {string} prop Property that should trigger the effect
* @param {Object=} effect Effect metadata object
*/
Polymer_ArraySelectorMixinExtern._addTemplatePropertyEffect = function(templateInfo, prop, effect){};
/**
* @param {string} text Text to parse from attribute or textContent
* @param {Object} templateInfo Current template metadata
* @return {Array.<!BindingPart>}
*/
Polymer_ArraySelectorMixinExtern._parseBindings = function(text, templateInfo){};
/**
* @param {this} inst Element that should be used as scope for
  binding dependencies
* @param {BindingPart} part Binding part metadata
* @param {string} path Property/path that triggered this effect
* @param {Object} props Bag of current property changes
* @param {Object} oldProps Bag of previous values for changed properties
* @param {boolean} hasPaths True with `props` contains one or more paths
* @return {*}
*/
Polymer_ArraySelectorMixinExtern._evaluateBinding = function(inst, part, path, props, oldProps, hasPaths){};
/**
*/
Polymer_ArraySelectorMixinExtern.finalize = function(){};