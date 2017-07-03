
/**
 * @fileoverview Closure types for Polymer mixins
 *
 * This file is generated, do not edit manually
 */
/* eslint-disable no-unused-vars, strict */

/**
* @interface
* @extends {Polymer_PropertyAccessorsExtern}
*/
function Polymer_PropertyAccessors(){}
/**
* @param {string} name Name of attribute that changed
* @param {?string} old Old attribute value
* @param {?string} value New attribute value
*/
Polymer_PropertyAccessors.prototype.attributeChangedCallback = function(name, old, value){};
/**
 * @return {undefined}
*/
Polymer_PropertyAccessors.prototype._initializeProperties = function(){};
/**
* @param {Object} props Bag of property values that were overwritten
  when creating property accessors.
*/
Polymer_PropertyAccessors.prototype._initializeProtoProperties = function(props){};
/**
* @param {Object} props Bag of property values that were overwritten
  when creating property accessors.
*/
Polymer_PropertyAccessors.prototype._initializeInstanceProperties = function(props){};
/**
* @param {string} attribute Name of attribute to ensure is set.
* @param {string} value of the attribute.
*/
Polymer_PropertyAccessors.prototype._ensureAttribute = function(attribute, value){};
/**
* @param {string} attribute Name of attribute to deserialize.
* @param {?string} value of the attribute.
* @param {*=} type type to deserialize to.
*/
Polymer_PropertyAccessors.prototype._attributeToProperty = function(attribute, value, type){};
/**
* @param {string} property Property name to reflect.
* @param {string=} attribute Attribute name to reflect.
* @param {*=} value Property value to refect.
*/
Polymer_PropertyAccessors.prototype._propertyToAttribute = function(property, attribute, value){};
/**
* @param {Element} node Element to set attribute to.
* @param {*} value Value to serialize.
* @param {string} attribute Attribute name to serialize to.
*/
Polymer_PropertyAccessors.prototype._valueToNodeAttribute = function(node, value, attribute){};
/**
* @param {*} value Property value to serialize.
* @return {(string|undefined)}
*/
Polymer_PropertyAccessors.prototype._serializeValue = function(value){};
/**
* @param {?string} value Attribute value to deserialize.
* @param {*=} type Type to deserialize the string to.
* @return {*}
*/
Polymer_PropertyAccessors.prototype._deserializeValue = function(value, type){};
/**
* @param {string} property Name of the property
* @param {boolean=} readOnly When true, no setter is created; the
  protected `_setProperty` function must be used to set the property
*/
Polymer_PropertyAccessors.prototype._createPropertyAccessor = function(property, readOnly){};
/**
* @param {string} property Property name
* @return {boolean}
*/
Polymer_PropertyAccessors.prototype._hasAccessor = function(property){};
/**
* @param {string} property Name of the property
* @param {*} value Value to set
*/
Polymer_PropertyAccessors.prototype._setProperty = function(property, value){};
/**
* @param {string} property Name of the property
* @param {*} value Value to set
* @return {boolean}
*/
Polymer_PropertyAccessors.prototype._setPendingProperty = function(property, value){};
/**
* @param {string} prop Property name
* @return {boolean}
*/
Polymer_PropertyAccessors.prototype._isPropertyPending = function(prop){};
/**
*/
Polymer_PropertyAccessors.prototype._invalidateProperties = function(){};
/**
*/
Polymer_PropertyAccessors.prototype._enableProperties = function(){};
/**
*/
Polymer_PropertyAccessors.prototype._flushProperties = function(){};
/**
*/
Polymer_PropertyAccessors.prototype.ready = function(){};
/**
* @param {!Object} currentProps Bag of all current accessor values
* @param {!Object} changedProps Bag of properties changed since the last
  call to `_propertiesChanged`
* @param {!Object} oldProps Bag of previous values for each property
  in `changedProps`
*/
Polymer_PropertyAccessors.prototype._propertiesChanged = function(currentProps, changedProps, oldProps){};
/**
* @param {string} property Property name
* @param {*} value New property value
* @param {*} old Previous property value
* @return {boolean}
*/
Polymer_PropertyAccessors.prototype._shouldPropertyChange = function(property, value, old){};
/**
* @interface
* @extends {Polymer_TemplateStampExtern}
*/
function Polymer_TemplateStamp(){}
/**
* @param {!HTMLTemplateElement} template Template to stamp
* @return {!StampedTemplate}
*/
Polymer_TemplateStamp.prototype._stampTemplate = function(template){};
/**
* @param {Node} node Node to add listener on
* @param {string} eventName Name of event
* @param {string} methodName Name of method
* @param {*=} context Context the method will be called on (defaults
  to `node`)
* @return {Function}
*/
Polymer_TemplateStamp.prototype._addMethodEventListenerToNode = function(node, eventName, methodName, context){};
/**
* @param {Node} node Node to add event listener to
* @param {string} eventName Name of event
* @param {Function} handler Listener function to add
*/
Polymer_TemplateStamp.prototype._addEventListenerToNode = function(node, eventName, handler){};
/**
* @param {Node} node Node to remove event listener from
* @param {string} eventName Name of event
* @param {Function} handler Listener function to remove
*/
Polymer_TemplateStamp.prototype._removeEventListenerFromNode = function(node, eventName, handler){};

/**
* @interface
* @extends {Polymer_TemplateStamp}
* @extends {Polymer_TemplateStampExtern}
* @extends {Polymer_PropertyAccessors}
* @extends {Polymer_PropertyAccessorsExtern}
*/
function Polymer_PropertyEffects(){}
/**
* @param {!HTMLTemplateElement} template Template to stamp
* @return {!StampedTemplate}
*/
Polymer_PropertyEffects.prototype._stampTemplate = function(template){};
/**
* @param {Node} node Node to add listener on
* @param {string} eventName Name of event
* @param {string} methodName Name of method
* @param {*=} context Context the method will be called on (defaults
  to `node`)
* @return {Function}
*/
Polymer_PropertyEffects.prototype._addMethodEventListenerToNode = function(node, eventName, methodName, context){};
/**
* @param {Node} node Node to add event listener to
* @param {string} eventName Name of event
* @param {Function} handler Listener function to add
*/
Polymer_PropertyEffects.prototype._addEventListenerToNode = function(node, eventName, handler){};
/**
* @param {Node} node Node to remove event listener from
* @param {string} eventName Name of event
* @param {Function} handler Listener function to remove
*/
Polymer_PropertyEffects.prototype._removeEventListenerFromNode = function(node, eventName, handler){};
/**
* @param {string} name Name of attribute that changed
* @param {?string} old Old attribute value
* @param {?string} value New attribute value
*/
Polymer_PropertyEffects.prototype.attributeChangedCallback = function(name, old, value){};
/**
*/
Polymer_PropertyEffects.prototype._initializeProperties = function(){};
/**
* @override
* @param {Object} props Properties to initialize on the prototype
*/
Polymer_PropertyEffects.prototype._initializeProtoProperties = function(props){};
/**
* @override
* @param {Object} props Properties to initialize on the instance
*/
Polymer_PropertyEffects.prototype._initializeInstanceProperties = function(props){};
/**
* @param {string} attribute Name of attribute to ensure is set.
* @param {string} value of the attribute.
*/
Polymer_PropertyEffects.prototype._ensureAttribute = function(attribute, value){};
/**
* @param {string} attribute Name of attribute to deserialize.
* @param {?string} value of the attribute.
* @param {*=} type type to deserialize to.
*/
Polymer_PropertyEffects.prototype._attributeToProperty = function(attribute, value, type){};
/**
* @param {string} property Property name to reflect.
* @param {string=} attribute Attribute name to reflect.
* @param {*=} value Property value to refect.
*/
Polymer_PropertyEffects.prototype._propertyToAttribute = function(property, attribute, value){};
/**
* @param {Element} node Element to set attribute to.
* @param {*} value Value to serialize.
* @param {string} attribute Attribute name to serialize to.
*/
Polymer_PropertyEffects.prototype._valueToNodeAttribute = function(node, value, attribute){};
/**
* @param {*} value Property value to serialize.
* @return {(string|undefined)}
*/
Polymer_PropertyEffects.prototype._serializeValue = function(value){};
/**
* @param {?string} value Attribute value to deserialize.
* @param {*=} type Type to deserialize the string to.
* @return {*}
*/
Polymer_PropertyEffects.prototype._deserializeValue = function(value, type){};
/**
* @param {string} property Name of the property
* @param {boolean=} readOnly When true, no setter is created; the
  protected `_setProperty` function must be used to set the property
*/
Polymer_PropertyEffects.prototype._createPropertyAccessor = function(property, readOnly){};
/**
* @param {string} property Property name
* @return {boolean}
*/
Polymer_PropertyEffects.prototype._hasAccessor = function(property){};
/**
* @override
*/
Polymer_PropertyEffects.prototype._setProperty = function(property, value){};
/**
* @override
* @param {string} property Name of the property
* @param {*} value Value to set
* @param {boolean=} shouldNotify True if property should fire notification
  event (applies only for `notify: true` properties)
* @return {boolean}
*/
Polymer_PropertyEffects.prototype._setPendingProperty = function(property, value, shouldNotify){};
/**
* @param {string} prop Property name
* @return {boolean}
*/
Polymer_PropertyEffects.prototype._isPropertyPending = function(prop){};
/**
* @override
*/
Polymer_PropertyEffects.prototype._invalidateProperties = function(){};
/**
*/
Polymer_PropertyEffects.prototype._enableProperties = function(){};
/**
*/
Polymer_PropertyEffects.prototype._flushProperties = function(){};
/**
* @override
*/
Polymer_PropertyEffects.prototype.ready = function(){};
/**
* @override
*/
Polymer_PropertyEffects.prototype._propertiesChanged = function(currentProps, changedProps, oldProps){};
/**
* @param {string} property Property name
* @param {*} value New property value
* @param {*} old Previous property value
* @return {boolean}
*/
Polymer_PropertyEffects.prototype._shouldPropertyChange = function(property, value, old){};
/**
* @param {string} property Property that should trigger the effect
* @param {string} type Effect type, from this.PROPERTY_EFFECT_TYPES
* @param {Object=} effect Effect metadata object
*/
Polymer_PropertyEffects.prototype._addPropertyEffect = function(property, type, effect){};
/**
* @param {string} property Property the effect was associated with
* @param {string} type Effect type, from this.PROPERTY_EFFECT_TYPES
* @param {Object=} effect Effect metadata object to remove
*/
Polymer_PropertyEffects.prototype._removePropertyEffect = function(property, type, effect){};
/**
* @param {string} property Property name
* @param {string=} type Effect type, from this.PROPERTY_EFFECT_TYPES
* @return {boolean}
*/
Polymer_PropertyEffects.prototype._hasPropertyEffect = function(property, type){};
/**
* @param {string} property Property name
* @return {boolean}
*/
Polymer_PropertyEffects.prototype._hasReadOnlyEffect = function(property){};
/**
* @param {string} property Property name
* @return {boolean}
*/
Polymer_PropertyEffects.prototype._hasNotifyEffect = function(property){};
/**
* @param {string} property Property name
* @return {boolean}
*/
Polymer_PropertyEffects.prototype._hasReflectEffect = function(property){};
/**
* @param {string} property Property name
* @return {boolean}
*/
Polymer_PropertyEffects.prototype._hasComputedEffect = function(property){};
/**
* @param {(string|!Array.<(number|string)>)} path Path to set
* @param {*} value Value to set
* @param {boolean=} shouldNotify Set to true if this change should
 cause a property notification event dispatch
* @param {boolean=} isPathNotification If the path being set is a path
  notification of an already changed value, as opposed to a request
  to set and notify the change.  In the latter `false` case, a dirty
  check is performed and then the value is set to the path before
  enqueuing the pending property change.
* @return {boolean}
*/
Polymer_PropertyEffects.prototype._setPendingPropertyOrPath = function(path, value, shouldNotify, isPathNotification){};
/**
* @param {Node} node The node to set a property on
* @param {string} prop The property to set
* @param {*} value The value to set
*/
Polymer_PropertyEffects.prototype._setUnmanagedPropertyToNode = function(node, prop, value){};
/**
* @param {Object} client PropertyEffects client to enqueue
*/
Polymer_PropertyEffects.prototype._enqueueClient = function(client){};
/**
*/
Polymer_PropertyEffects.prototype._flushClients = function(){};
/**
*/
Polymer_PropertyEffects.prototype._readyClients = function(){};
/**
* @param {Object} props Bag of one or more key-value pairs whose key is
  a property and value is the new value to set for that property.
* @param {boolean=} setReadOnly When true, any private values set in
  `props` will be set. By default, `setProperties` will not set
  `readOnly: true` root properties.
*/
Polymer_PropertyEffects.prototype.setProperties = function(props, setReadOnly){};
/**
* @param {Object} changedProps Bag of changed properties
* @param {Object} oldProps Bag of previous values for changed properties
* @param {boolean} hasPaths True with `props` contains one or more paths
*/
Polymer_PropertyEffects.prototype._propagatePropertyChanges = function(changedProps, oldProps, hasPaths){};
/**
* @param {(string|!Array.<(string|number)>)} to Target path to link.
* @param {(string|!Array.<(string|number)>)} from Source path to link.
*/
Polymer_PropertyEffects.prototype.linkPaths = function(to, from){};
/**
* @param {(string|!Array.<(string|number)>)} path Target path to unlink.
*/
Polymer_PropertyEffects.prototype.unlinkPaths = function(path){};
/**
* @param {string} path Path that should be notified.
* @param {Array} splices Array of splice records indicating ordered
  changes that occurred to the array. Each record should have the
  following fields:
   * index: index at which the change occurred
   * removed: array of items that were removed from this index
   * addedCount: number of new items added at this index
   * object: a reference to the array in question
   * type: the string literal 'splice'

  Note that splice records _must_ be normalized such that they are
  reported in index order (raw results from `Object.observe` are not
  ordered and must be normalized/merged before notifying).
*/
Polymer_PropertyEffects.prototype.notifySplices = function(path, splices){};
/**
* @param {(string|!Array.<(string|number)>)} path Path to the value
  to read.  The path may be specified as a string (e.g. `foo.bar.baz`)
  or an array of path parts (e.g. `['foo.bar', 'baz']`).  Note that
  bracketed expressions are not supported; string-based path parts
  *must* be separated by dots.  Note that when dereferencing array
  indices, the index may be used as a dotted part directly
  (e.g. `users.12.name` or `['users', 12, 'name']`).
* @param {Object=} root Root object from which the path is evaluated.
* @return {*}
*/
Polymer_PropertyEffects.prototype.get = function(path, root){};
/**
* @param {(string|!Array.<(string|number)>)} path Path to the value
  to write.  The path may be specified as a string (e.g. `'foo.bar.baz'`)
  or an array of path parts (e.g. `['foo.bar', 'baz']`).  Note that
  bracketed expressions are not supported; string-based path parts
  *must* be separated by dots.  Note that when dereferencing array
  indices, the index may be used as a dotted part directly
  (e.g. `'users.12.name'` or `['users', 12, 'name']`).
* @param {*} value Value to set at the specified path.
* @param {Object=} root Root object from which the path is evaluated.
  When specified, no notification will occur.
*/
Polymer_PropertyEffects.prototype.set = function(path, value, root){};
/**
* @param {string} path Path to array.
* @param {...*} items 
* @return {number}
*/
Polymer_PropertyEffects.prototype.push = function(path, items){};
/**
* @param {string} path Path to array.
* @return {*}
*/
Polymer_PropertyEffects.prototype.pop = function(path){};
/**
* @param {string} path Path to array.
* @param {number} start Index from which to start removing/inserting.
* @param {number} deleteCount Number of items to remove.
* @param {...*} items 
* @return {Array}
*/
Polymer_PropertyEffects.prototype.splice = function(path, start, deleteCount, items){};
/**
* @param {string} path Path to array.
* @return {*}
*/
Polymer_PropertyEffects.prototype.shift = function(path){};
/**
* @param {string} path Path to array.
* @param {...*} items 
* @return {number}
*/
Polymer_PropertyEffects.prototype.unshift = function(path, items){};
/**
* @param {string} path Path that should be notified.
* @param {*=} value Value at the path (optional).
*/
Polymer_PropertyEffects.prototype.notifyPath = function(path, value){};
/**
* @param {string} property Property name
* @param {boolean=} protectedSetter Creates a custom protected setter
  when `true`.
*/
Polymer_PropertyEffects.prototype._createReadOnlyProperty = function(property, protectedSetter){};
/**
* @param {string} property Property name
* @param {string} methodName Name of observer method to call
* @param {boolean=} dynamicFn Whether the method name should be included as
  a dependency to the effect.
*/
Polymer_PropertyEffects.prototype._createPropertyObserver = function(property, methodName, dynamicFn){};
/**
* @param {string} expression Method expression
* @param {(boolean|Object)=} dynamicFn Boolean or object map indicating
  whether method names should be included as a dependency to the effect.
*/
Polymer_PropertyEffects.prototype._createMethodObserver = function(expression, dynamicFn){};
/**
* @param {string} property Property name
*/
Polymer_PropertyEffects.prototype._createNotifyingProperty = function(property){};
/**
* @param {string} property Property name
*/
Polymer_PropertyEffects.prototype._createReflectedProperty = function(property){};
/**
* @param {string} property Name of computed property to set
* @param {string} expression Method expression
* @param {(boolean|Object)=} dynamicFn Boolean or object map indicating
  whether method names should be included as a dependency to the effect.
*/
Polymer_PropertyEffects.prototype._createComputedProperty = function(property, expression, dynamicFn){};
/**
* @param {HTMLTemplateElement} template Template containing binding
  bindings
* @param {boolean=} instanceBinding When false (default), performs
  "prototypical" binding of the template and overwrites any previously
  bound template for the class. When true (as passed from
  `_stampTemplate`), the template info is instanced and linked into
  the list of bound templates.
* @return {!TemplateInfo}
*/
Polymer_PropertyEffects.prototype._bindTemplate = function(template, instanceBinding){};
/**
* @param {!StampedTemplate} dom DocumentFragment previously returned
  from `_stampTemplate` associated with the nodes to be removed
*/
Polymer_PropertyEffects.prototype._removeBoundDom = function(dom){};
/**
* @interface
* @extends {Polymer_PropertyEffects}
* @extends {Polymer_TemplateStamp}
* @extends {Polymer_TemplateStampExtern}
*/
function Polymer_ElementMixin(){}
/**
* @override
* @param {!HTMLTemplateElement} template Template to stamp
* @return {!StampedTemplate}
*/
Polymer_ElementMixin.prototype._stampTemplate = function(template){};
/**
* @param {Node} node Node to add listener on
* @param {string} eventName Name of event
* @param {string} methodName Name of method
* @param {*=} context Context the method will be called on (defaults
  to `node`)
* @return {Function}
*/
Polymer_ElementMixin.prototype._addMethodEventListenerToNode = function(node, eventName, methodName, context){};
/**
* @param {Node} node Node to add event listener to
* @param {string} eventName Name of event
* @param {Function} handler Listener function to add
*/
Polymer_ElementMixin.prototype._addEventListenerToNode = function(node, eventName, handler){};
/**
* @param {Node} node Node to remove event listener from
* @param {string} eventName Name of event
* @param {Function} handler Listener function to remove
*/
Polymer_ElementMixin.prototype._removeEventListenerFromNode = function(node, eventName, handler){};
/**
* @override
* @param {string} name Name of attribute.
* @param {?string} old Old value of attribute.
* @param {?string} value Current value of attribute.
*/
Polymer_ElementMixin.prototype.attributeChangedCallback = function(name, old, value){};
/**
* @override
*/
Polymer_ElementMixin.prototype._initializeProperties = function(){};
/**
* @override
* @param {Object} props Properties to initialize on the prototype
*/
Polymer_ElementMixin.prototype._initializeProtoProperties = function(props){};
/**
* @override
* @param {Object} props Properties to initialize on the instance
*/
Polymer_ElementMixin.prototype._initializeInstanceProperties = function(props){};
/**
* @param {string} attribute Name of attribute to ensure is set.
* @param {string} value of the attribute.
*/
Polymer_ElementMixin.prototype._ensureAttribute = function(attribute, value){};
/**
* @param {string} attribute Name of attribute to deserialize.
* @param {?string} value of the attribute.
* @param {*=} type type to deserialize to.
*/
Polymer_ElementMixin.prototype._attributeToProperty = function(attribute, value, type){};
/**
* @param {string} property Property name to reflect.
* @param {string=} attribute Attribute name to reflect.
* @param {*=} value Property value to refect.
*/
Polymer_ElementMixin.prototype._propertyToAttribute = function(property, attribute, value){};
/**
* @param {Element} node Element to set attribute to.
* @param {*} value Value to serialize.
* @param {string} attribute Attribute name to serialize to.
*/
Polymer_ElementMixin.prototype._valueToNodeAttribute = function(node, value, attribute){};
/**
* @param {*} value Property value to serialize.
* @return {(string|undefined)}
*/
Polymer_ElementMixin.prototype._serializeValue = function(value){};
/**
* @param {?string} value Attribute value to deserialize.
* @param {*=} type Type to deserialize the string to.
* @return {*}
*/
Polymer_ElementMixin.prototype._deserializeValue = function(value, type){};
/**
* @param {string} property Name of the property
* @param {boolean=} readOnly When true, no setter is created; the
  protected `_setProperty` function must be used to set the property
*/
Polymer_ElementMixin.prototype._createPropertyAccessor = function(property, readOnly){};
/**
* @param {string} property Property name
* @return {boolean}
*/
Polymer_ElementMixin.prototype._hasAccessor = function(property){};
/**
* @override
*/
Polymer_ElementMixin.prototype._setProperty = function(property, value){};
/**
* @override
* @param {string} property Name of the property
* @param {*} value Value to set
* @param {boolean=} shouldNotify True if property should fire notification
  event (applies only for `notify: true` properties)
* @return {boolean}
*/
Polymer_ElementMixin.prototype._setPendingProperty = function(property, value, shouldNotify){};
/**
* @param {string} prop Property name
* @return {boolean}
*/
Polymer_ElementMixin.prototype._isPropertyPending = function(prop){};
/**
* @override
*/
Polymer_ElementMixin.prototype._invalidateProperties = function(){};
/**
*/
Polymer_ElementMixin.prototype._enableProperties = function(){};
/**
*/
Polymer_ElementMixin.prototype._flushProperties = function(){};
/**
* @override
*/
Polymer_ElementMixin.prototype.ready = function(){};
/**
* @override
*/
Polymer_ElementMixin.prototype._propertiesChanged = function(currentProps, changedProps, oldProps){};
/**
* @param {string} property Property name
* @param {*} value New property value
* @param {*} old Previous property value
* @return {boolean}
*/
Polymer_ElementMixin.prototype._shouldPropertyChange = function(property, value, old){};
/**
* @param {string} property Property that should trigger the effect
* @param {string} type Effect type, from this.PROPERTY_EFFECT_TYPES
* @param {Object=} effect Effect metadata object
*/
Polymer_ElementMixin.prototype._addPropertyEffect = function(property, type, effect){};
/**
* @param {string} property Property the effect was associated with
* @param {string} type Effect type, from this.PROPERTY_EFFECT_TYPES
* @param {Object=} effect Effect metadata object to remove
*/
Polymer_ElementMixin.prototype._removePropertyEffect = function(property, type, effect){};
/**
* @param {string} property Property name
* @param {string=} type Effect type, from this.PROPERTY_EFFECT_TYPES
* @return {boolean}
*/
Polymer_ElementMixin.prototype._hasPropertyEffect = function(property, type){};
/**
* @param {string} property Property name
* @return {boolean}
*/
Polymer_ElementMixin.prototype._hasReadOnlyEffect = function(property){};
/**
* @param {string} property Property name
* @return {boolean}
*/
Polymer_ElementMixin.prototype._hasNotifyEffect = function(property){};
/**
* @param {string} property Property name
* @return {boolean}
*/
Polymer_ElementMixin.prototype._hasReflectEffect = function(property){};
/**
* @param {string} property Property name
* @return {boolean}
*/
Polymer_ElementMixin.prototype._hasComputedEffect = function(property){};
/**
* @param {(string|!Array.<(number|string)>)} path Path to set
* @param {*} value Value to set
* @param {boolean=} shouldNotify Set to true if this change should
 cause a property notification event dispatch
* @param {boolean=} isPathNotification If the path being set is a path
  notification of an already changed value, as opposed to a request
  to set and notify the change.  In the latter `false` case, a dirty
  check is performed and then the value is set to the path before
  enqueuing the pending property change.
* @return {boolean}
*/
Polymer_ElementMixin.prototype._setPendingPropertyOrPath = function(path, value, shouldNotify, isPathNotification){};
/**
* @param {Node} node The node to set a property on
* @param {string} prop The property to set
* @param {*} value The value to set
*/
Polymer_ElementMixin.prototype._setUnmanagedPropertyToNode = function(node, prop, value){};
/**
* @param {Object} client PropertyEffects client to enqueue
*/
Polymer_ElementMixin.prototype._enqueueClient = function(client){};
/**
*/
Polymer_ElementMixin.prototype._flushClients = function(){};
/**
* @override
*/
Polymer_ElementMixin.prototype._readyClients = function(){};
/**
* @param {Object} props Bag of one or more key-value pairs whose key is
  a property and value is the new value to set for that property.
* @param {boolean=} setReadOnly When true, any private values set in
  `props` will be set. By default, `setProperties` will not set
  `readOnly: true` root properties.
*/
Polymer_ElementMixin.prototype.setProperties = function(props, setReadOnly){};
/**
* @param {Object} changedProps Bag of changed properties
* @param {Object} oldProps Bag of previous values for changed properties
* @param {boolean} hasPaths True with `props` contains one or more paths
*/
Polymer_ElementMixin.prototype._propagatePropertyChanges = function(changedProps, oldProps, hasPaths){};
/**
* @param {(string|!Array.<(string|number)>)} to Target path to link.
* @param {(string|!Array.<(string|number)>)} from Source path to link.
*/
Polymer_ElementMixin.prototype.linkPaths = function(to, from){};
/**
* @param {(string|!Array.<(string|number)>)} path Target path to unlink.
*/
Polymer_ElementMixin.prototype.unlinkPaths = function(path){};
/**
* @param {string} path Path that should be notified.
* @param {Array} splices Array of splice records indicating ordered
  changes that occurred to the array. Each record should have the
  following fields:
   * index: index at which the change occurred
   * removed: array of items that were removed from this index
   * addedCount: number of new items added at this index
   * object: a reference to the array in question
   * type: the string literal 'splice'

  Note that splice records _must_ be normalized such that they are
  reported in index order (raw results from `Object.observe` are not
  ordered and must be normalized/merged before notifying).
*/
Polymer_ElementMixin.prototype.notifySplices = function(path, splices){};
/**
* @param {(string|!Array.<(string|number)>)} path Path to the value
  to read.  The path may be specified as a string (e.g. `foo.bar.baz`)
  or an array of path parts (e.g. `['foo.bar', 'baz']`).  Note that
  bracketed expressions are not supported; string-based path parts
  *must* be separated by dots.  Note that when dereferencing array
  indices, the index may be used as a dotted part directly
  (e.g. `users.12.name` or `['users', 12, 'name']`).
* @param {Object=} root Root object from which the path is evaluated.
* @return {*}
*/
Polymer_ElementMixin.prototype.get = function(path, root){};
/**
* @param {(string|!Array.<(string|number)>)} path Path to the value
  to write.  The path may be specified as a string (e.g. `'foo.bar.baz'`)
  or an array of path parts (e.g. `['foo.bar', 'baz']`).  Note that
  bracketed expressions are not supported; string-based path parts
  *must* be separated by dots.  Note that when dereferencing array
  indices, the index may be used as a dotted part directly
  (e.g. `'users.12.name'` or `['users', 12, 'name']`).
* @param {*} value Value to set at the specified path.
* @param {Object=} root Root object from which the path is evaluated.
  When specified, no notification will occur.
*/
Polymer_ElementMixin.prototype.set = function(path, value, root){};
/**
* @param {string} path Path to array.
* @param {...*} items 
* @return {number}
*/
Polymer_ElementMixin.prototype.push = function(path, items){};
/**
* @param {string} path Path to array.
* @return {*}
*/
Polymer_ElementMixin.prototype.pop = function(path){};
/**
* @param {string} path Path to array.
* @param {number} start Index from which to start removing/inserting.
* @param {number} deleteCount Number of items to remove.
* @param {...*} items 
* @return {Array}
*/
Polymer_ElementMixin.prototype.splice = function(path, start, deleteCount, items){};
/**
* @param {string} path Path to array.
* @return {*}
*/
Polymer_ElementMixin.prototype.shift = function(path){};
/**
* @param {string} path Path to array.
* @param {...*} items 
* @return {number}
*/
Polymer_ElementMixin.prototype.unshift = function(path, items){};
/**
* @param {string} path Path that should be notified.
* @param {*=} value Value at the path (optional).
*/
Polymer_ElementMixin.prototype.notifyPath = function(path, value){};
/**
* @param {string} property Property name
* @param {boolean=} protectedSetter Creates a custom protected setter
  when `true`.
*/
Polymer_ElementMixin.prototype._createReadOnlyProperty = function(property, protectedSetter){};
/**
* @param {string} property Property name
* @param {string} methodName Name of observer method to call
* @param {boolean=} dynamicFn Whether the method name should be included as
  a dependency to the effect.
*/
Polymer_ElementMixin.prototype._createPropertyObserver = function(property, methodName, dynamicFn){};
/**
* @param {string} expression Method expression
* @param {(boolean|Object)=} dynamicFn Boolean or object map indicating
  whether method names should be included as a dependency to the effect.
*/
Polymer_ElementMixin.prototype._createMethodObserver = function(expression, dynamicFn){};
/**
* @param {string} property Property name
*/
Polymer_ElementMixin.prototype._createNotifyingProperty = function(property){};
/**
* @param {string} property Property name
*/
Polymer_ElementMixin.prototype._createReflectedProperty = function(property){};
/**
* @param {string} property Name of computed property to set
* @param {string} expression Method expression
* @param {(boolean|Object)=} dynamicFn Boolean or object map indicating
  whether method names should be included as a dependency to the effect.
*/
Polymer_ElementMixin.prototype._createComputedProperty = function(property, expression, dynamicFn){};
/**
* @param {HTMLTemplateElement} template Template containing binding
  bindings
* @param {boolean=} instanceBinding When false (default), performs
  "prototypical" binding of the template and overwrites any previously
  bound template for the class. When true (as passed from
  `_stampTemplate`), the template info is instanced and linked into
  the list of bound templates.
* @return {!TemplateInfo}
*/
Polymer_ElementMixin.prototype._bindTemplate = function(template, instanceBinding){};
/**
* @param {!StampedTemplate} dom DocumentFragment previously returned
  from `_stampTemplate` associated with the nodes to be removed
*/
Polymer_ElementMixin.prototype._removeBoundDom = function(dom){};
/**
*/
Polymer_ElementMixin.prototype.connectedCallback = function(){};
/**
*/
Polymer_ElementMixin.prototype.disconnectedCallback = function(){};
/**
* @param {NodeList} dom to attach to the element.
* @return {Node}
*/
Polymer_ElementMixin.prototype._attachDom = function(dom){};
/**
* @param {Object=} properties Bag of custom property key/values to
  apply to this element.
*/
Polymer_ElementMixin.prototype.updateStyles = function(properties){};
/**
* @param {string} url URL to resolve.
* @param {string=} base Optional base URL to resolve against, defaults
to the element's `importPath`
* @return {string}
*/
Polymer_ElementMixin.prototype.resolveUrl = function(url, base){};
/**
* @interface
*/
function Polymer_GestureEventListeners(){}
/**
* @param {*} node 
* @param {*} eventName 
* @param {*} handler 
*/
Polymer_GestureEventListeners.prototype._addEventListenerToNode = function(node, eventName, handler){};
/**
* @param {*} node 
* @param {*} eventName 
* @param {*} handler 
*/
Polymer_GestureEventListeners.prototype._removeEventListenerFromNode = function(node, eventName, handler){};
/**
* @interface
* @extends {Polymer_ElementMixin}
* @extends {Polymer_ElementMixinExtern}
* @extends {Polymer_GestureEventListeners}
*/
function Polymer_LegacyElementMixin(){}
/**
* @override
* @param {!HTMLTemplateElement} template Template to stamp
* @return {!StampedTemplate}
*/
Polymer_LegacyElementMixin.prototype._stampTemplate = function(template){};
/**
* @param {Node} node Node to add listener on
* @param {string} eventName Name of event
* @param {string} methodName Name of method
* @param {*=} context Context the method will be called on (defaults
  to `node`)
* @return {Function}
*/
Polymer_LegacyElementMixin.prototype._addMethodEventListenerToNode = function(node, eventName, methodName, context){};
/**
* @param {*} node 
* @param {*} eventName 
* @param {*} handler 
*/
Polymer_LegacyElementMixin.prototype._addEventListenerToNode = function(node, eventName, handler){};
/**
* @param {*} node 
* @param {*} eventName 
* @param {*} handler 
*/
Polymer_LegacyElementMixin.prototype._removeEventListenerFromNode = function(node, eventName, handler){};
/**
* @override
* @param {string} name Name of attribute.
* @param {?string} old Old value of attribute.
* @param {?string} value Current value of attribute.
*/
Polymer_LegacyElementMixin.prototype.attributeChangedCallback = function(name, old, value){};
/**
* @override
*/
Polymer_LegacyElementMixin.prototype._initializeProperties = function(){};
/**
* @override
* @param {Object} props Properties to initialize on the prototype
*/
Polymer_LegacyElementMixin.prototype._initializeProtoProperties = function(props){};
/**
* @override
* @param {Object} props Properties to initialize on the instance
*/
Polymer_LegacyElementMixin.prototype._initializeInstanceProperties = function(props){};
/**
* @param {string} attribute Name of attribute to ensure is set.
* @param {string} value of the attribute.
*/
Polymer_LegacyElementMixin.prototype._ensureAttribute = function(attribute, value){};
/**
* @param {string} attribute Name of attribute to deserialize.
* @param {?string} value of the attribute.
* @param {*=} type type to deserialize to.
*/
Polymer_LegacyElementMixin.prototype._attributeToProperty = function(attribute, value, type){};
/**
* @param {string} property Property name to reflect.
* @param {string=} attribute Attribute name to reflect.
* @param {*=} value Property value to refect.
*/
Polymer_LegacyElementMixin.prototype._propertyToAttribute = function(property, attribute, value){};
/**
* @param {Element} node Element to set attribute to.
* @param {*} value Value to serialize.
* @param {string} attribute Attribute name to serialize to.
*/
Polymer_LegacyElementMixin.prototype._valueToNodeAttribute = function(node, value, attribute){};
/**
* @param {*} value Property value to serialize.
* @return {(string|undefined)}
*/
Polymer_LegacyElementMixin.prototype._serializeValue = function(value){};
/**
* @param {?string} value Attribute value to deserialize.
* @param {*=} type Type to deserialize the string to.
* @return {*}
*/
Polymer_LegacyElementMixin.prototype._deserializeValue = function(value, type){};
/**
* @param {string} property Name of the property
* @param {boolean=} readOnly When true, no setter is created; the
  protected `_setProperty` function must be used to set the property
*/
Polymer_LegacyElementMixin.prototype._createPropertyAccessor = function(property, readOnly){};
/**
* @param {string} property Property name
* @return {boolean}
*/
Polymer_LegacyElementMixin.prototype._hasAccessor = function(property){};
/**
* @override
*/
Polymer_LegacyElementMixin.prototype._setProperty = function(property, value){};
/**
* @override
* @param {string} property Name of the property
* @param {*} value Value to set
* @param {boolean=} shouldNotify True if property should fire notification
  event (applies only for `notify: true` properties)
* @return {boolean}
*/
Polymer_LegacyElementMixin.prototype._setPendingProperty = function(property, value, shouldNotify){};
/**
* @param {string} prop Property name
* @return {boolean}
*/
Polymer_LegacyElementMixin.prototype._isPropertyPending = function(prop){};
/**
* @override
*/
Polymer_LegacyElementMixin.prototype._invalidateProperties = function(){};
/**
*/
Polymer_LegacyElementMixin.prototype._enableProperties = function(){};
/**
*/
Polymer_LegacyElementMixin.prototype._flushProperties = function(){};
/**
* @override
*/
Polymer_LegacyElementMixin.prototype.ready = function(){};
/**
* @override
*/
Polymer_LegacyElementMixin.prototype._propertiesChanged = function(currentProps, changedProps, oldProps){};
/**
* @param {string} property Property name
* @param {*} value New property value
* @param {*} old Previous property value
* @return {boolean}
*/
Polymer_LegacyElementMixin.prototype._shouldPropertyChange = function(property, value, old){};
/**
* @param {string} property Property that should trigger the effect
* @param {string} type Effect type, from this.PROPERTY_EFFECT_TYPES
* @param {Object=} effect Effect metadata object
*/
Polymer_LegacyElementMixin.prototype._addPropertyEffect = function(property, type, effect){};
/**
* @param {string} property Property the effect was associated with
* @param {string} type Effect type, from this.PROPERTY_EFFECT_TYPES
* @param {Object=} effect Effect metadata object to remove
*/
Polymer_LegacyElementMixin.prototype._removePropertyEffect = function(property, type, effect){};
/**
* @param {string} property Property name
* @param {string=} type Effect type, from this.PROPERTY_EFFECT_TYPES
* @return {boolean}
*/
Polymer_LegacyElementMixin.prototype._hasPropertyEffect = function(property, type){};
/**
* @param {string} property Property name
* @return {boolean}
*/
Polymer_LegacyElementMixin.prototype._hasReadOnlyEffect = function(property){};
/**
* @param {string} property Property name
* @return {boolean}
*/
Polymer_LegacyElementMixin.prototype._hasNotifyEffect = function(property){};
/**
* @param {string} property Property name
* @return {boolean}
*/
Polymer_LegacyElementMixin.prototype._hasReflectEffect = function(property){};
/**
* @param {string} property Property name
* @return {boolean}
*/
Polymer_LegacyElementMixin.prototype._hasComputedEffect = function(property){};
/**
* @param {(string|!Array.<(number|string)>)} path Path to set
* @param {*} value Value to set
* @param {boolean=} shouldNotify Set to true if this change should
 cause a property notification event dispatch
* @param {boolean=} isPathNotification If the path being set is a path
  notification of an already changed value, as opposed to a request
  to set and notify the change.  In the latter `false` case, a dirty
  check is performed and then the value is set to the path before
  enqueuing the pending property change.
* @return {boolean}
*/
Polymer_LegacyElementMixin.prototype._setPendingPropertyOrPath = function(path, value, shouldNotify, isPathNotification){};
/**
* @param {Node} node The node to set a property on
* @param {string} prop The property to set
* @param {*} value The value to set
*/
Polymer_LegacyElementMixin.prototype._setUnmanagedPropertyToNode = function(node, prop, value){};
/**
* @param {Object} client PropertyEffects client to enqueue
*/
Polymer_LegacyElementMixin.prototype._enqueueClient = function(client){};
/**
*/
Polymer_LegacyElementMixin.prototype._flushClients = function(){};
/**
* @override
*/
Polymer_LegacyElementMixin.prototype._readyClients = function(){};
/**
* @param {Object} props Bag of one or more key-value pairs whose key is
  a property and value is the new value to set for that property.
* @param {boolean=} setReadOnly When true, any private values set in
  `props` will be set. By default, `setProperties` will not set
  `readOnly: true` root properties.
*/
Polymer_LegacyElementMixin.prototype.setProperties = function(props, setReadOnly){};
/**
* @param {Object} changedProps Bag of changed properties
* @param {Object} oldProps Bag of previous values for changed properties
* @param {boolean} hasPaths True with `props` contains one or more paths
*/
Polymer_LegacyElementMixin.prototype._propagatePropertyChanges = function(changedProps, oldProps, hasPaths){};
/**
* @param {(string|!Array.<(string|number)>)} to Target path to link.
* @param {(string|!Array.<(string|number)>)} from Source path to link.
*/
Polymer_LegacyElementMixin.prototype.linkPaths = function(to, from){};
/**
* @param {(string|!Array.<(string|number)>)} path Target path to unlink.
*/
Polymer_LegacyElementMixin.prototype.unlinkPaths = function(path){};
/**
* @param {string} path Path that should be notified.
* @param {Array} splices Array of splice records indicating ordered
  changes that occurred to the array. Each record should have the
  following fields:
   * index: index at which the change occurred
   * removed: array of items that were removed from this index
   * addedCount: number of new items added at this index
   * object: a reference to the array in question
   * type: the string literal 'splice'

  Note that splice records _must_ be normalized such that they are
  reported in index order (raw results from `Object.observe` are not
  ordered and must be normalized/merged before notifying).
*/
Polymer_LegacyElementMixin.prototype.notifySplices = function(path, splices){};
/**
* @param {(string|!Array.<(string|number)>)} path Path to the value
  to read.  The path may be specified as a string (e.g. `foo.bar.baz`)
  or an array of path parts (e.g. `['foo.bar', 'baz']`).  Note that
  bracketed expressions are not supported; string-based path parts
  *must* be separated by dots.  Note that when dereferencing array
  indices, the index may be used as a dotted part directly
  (e.g. `users.12.name` or `['users', 12, 'name']`).
* @param {Object=} root Root object from which the path is evaluated.
* @return {*}
*/
Polymer_LegacyElementMixin.prototype.get = function(path, root){};
/**
* @param {(string|!Array.<(string|number)>)} path Path to the value
  to write.  The path may be specified as a string (e.g. `'foo.bar.baz'`)
  or an array of path parts (e.g. `['foo.bar', 'baz']`).  Note that
  bracketed expressions are not supported; string-based path parts
  *must* be separated by dots.  Note that when dereferencing array
  indices, the index may be used as a dotted part directly
  (e.g. `'users.12.name'` or `['users', 12, 'name']`).
* @param {*} value Value to set at the specified path.
* @param {Object=} root Root object from which the path is evaluated.
  When specified, no notification will occur.
*/
Polymer_LegacyElementMixin.prototype.set = function(path, value, root){};
/**
* @param {string} path Path to array.
* @param {...*} items 
* @return {number}
*/
Polymer_LegacyElementMixin.prototype.push = function(path, items){};
/**
* @param {string} path Path to array.
* @return {*}
*/
Polymer_LegacyElementMixin.prototype.pop = function(path){};
/**
* @param {string} path Path to array.
* @param {number} start Index from which to start removing/inserting.
* @param {number} deleteCount Number of items to remove.
* @param {...*} items 
* @return {Array}
*/
Polymer_LegacyElementMixin.prototype.splice = function(path, start, deleteCount, items){};
/**
* @param {string} path Path to array.
* @return {*}
*/
Polymer_LegacyElementMixin.prototype.shift = function(path){};
/**
* @param {string} path Path to array.
* @param {...*} items 
* @return {number}
*/
Polymer_LegacyElementMixin.prototype.unshift = function(path, items){};
/**
* @param {string} path Path that should be notified.
* @param {*=} value Value at the path (optional).
*/
Polymer_LegacyElementMixin.prototype.notifyPath = function(path, value){};
/**
* @param {string} property Property name
* @param {boolean=} protectedSetter Creates a custom protected setter
  when `true`.
*/
Polymer_LegacyElementMixin.prototype._createReadOnlyProperty = function(property, protectedSetter){};
/**
* @param {string} property Property name
* @param {string} methodName Name of observer method to call
* @param {boolean=} dynamicFn Whether the method name should be included as
  a dependency to the effect.
*/
Polymer_LegacyElementMixin.prototype._createPropertyObserver = function(property, methodName, dynamicFn){};
/**
* @param {string} expression Method expression
* @param {(boolean|Object)=} dynamicFn Boolean or object map indicating
  whether method names should be included as a dependency to the effect.
*/
Polymer_LegacyElementMixin.prototype._createMethodObserver = function(expression, dynamicFn){};
/**
* @param {string} property Property name
*/
Polymer_LegacyElementMixin.prototype._createNotifyingProperty = function(property){};
/**
* @param {string} property Property name
*/
Polymer_LegacyElementMixin.prototype._createReflectedProperty = function(property){};
/**
* @param {string} property Name of computed property to set
* @param {string} expression Method expression
* @param {(boolean|Object)=} dynamicFn Boolean or object map indicating
  whether method names should be included as a dependency to the effect.
*/
Polymer_LegacyElementMixin.prototype._createComputedProperty = function(property, expression, dynamicFn){};
/**
* @param {HTMLTemplateElement} template Template containing binding
  bindings
* @param {boolean=} instanceBinding When false (default), performs
  "prototypical" binding of the template and overwrites any previously
  bound template for the class. When true (as passed from
  `_stampTemplate`), the template info is instanced and linked into
  the list of bound templates.
* @return {!TemplateInfo}
*/
Polymer_LegacyElementMixin.prototype._bindTemplate = function(template, instanceBinding){};
/**
* @param {!StampedTemplate} dom DocumentFragment previously returned
  from `_stampTemplate` associated with the nodes to be removed
*/
Polymer_LegacyElementMixin.prototype._removeBoundDom = function(dom){};
/**
* @override
*/
Polymer_LegacyElementMixin.prototype.connectedCallback = function(){};
/**
* @override
*/
Polymer_LegacyElementMixin.prototype.disconnectedCallback = function(){};
/**
* @param {NodeList} dom to attach to the element.
* @return {Node}
*/
Polymer_LegacyElementMixin.prototype._attachDom = function(dom){};
/**
* @param {Object=} properties Bag of custom property key/values to
  apply to this element.
*/
Polymer_LegacyElementMixin.prototype.updateStyles = function(properties){};
/**
* @param {string} url URL to resolve.
* @param {string=} base Optional base URL to resolve against, defaults
to the element's `importPath`
* @return {string}
*/
Polymer_LegacyElementMixin.prototype.resolveUrl = function(url, base){};
/**
*/
Polymer_LegacyElementMixin.prototype.created = function(){};
/**
*/
Polymer_LegacyElementMixin.prototype.attached = function(){};
/**
*/
Polymer_LegacyElementMixin.prototype.detached = function(){};
/**
* @param {string} name Name of attribute.
* @param {?string} old Old value of attribute.
* @param {?string} value Current value of attribute.
*/
Polymer_LegacyElementMixin.prototype.attributeChanged = function(name, old, value){};
/**
*/
Polymer_LegacyElementMixin.prototype._registered = function(){};
/**
*/
Polymer_LegacyElementMixin.prototype._ensureAttributes = function(){};
/**
*/
Polymer_LegacyElementMixin.prototype._applyListeners = function(){};
/**
* @param {*} value Value to deserialize
* @return {(string|undefined)}
*/
Polymer_LegacyElementMixin.prototype.serialize = function(value){};
/**
* @param {string} value String to deserialize
* @param {*} type Type to deserialize the string to
* @return {*}
*/
Polymer_LegacyElementMixin.prototype.deserialize = function(value, type){};
/**
* @param {string} property Property name to reflect.
* @param {string=} attribute Attribute name to reflect.
* @param {*=} value Property value to refect.
*/
Polymer_LegacyElementMixin.prototype.reflectPropertyToAttribute = function(property, attribute, value){};
/**
* @param {*} value Value to serialize.
* @param {string} attribute Attribute name to serialize to.
* @param {Element} node Element to set attribute to.
*/
Polymer_LegacyElementMixin.prototype.serializeValueToAttribute = function(value, attribute, node){};
/**
* @param {Object} prototype Target object to copy properties to.
* @param {Object} api Source object to copy properties from.
* @return {Object}
*/
Polymer_LegacyElementMixin.prototype.extend = function(prototype, api){};
/**
* @param {Object} target Target object to copy properties to.
* @param {Object} source Source object to copy properties from.
* @return {Object}
*/
Polymer_LegacyElementMixin.prototype.mixin = function(target, source){};
/**
* @param {Object} object The object on which to set the prototype.
* @param {Object} prototype The prototype that will be set on the given
`object`.
* @return {Object}
*/
Polymer_LegacyElementMixin.prototype.chainObject = function(object, prototype){};
/**
* @param {HTMLTemplateElement} template HTML template element to instance.
* @return {DocumentFragment}
*/
Polymer_LegacyElementMixin.prototype.instanceTemplate = function(template){};
/**
* @param {string} type Name of event type.
* @param {*=} detail Detail value containing event-specific
  payload.
* @param {{bubbles: (boolean|undefined), cancelable: (boolean|undefined), composed: (boolean|undefined)}=} options Object specifying options.  These may include:
 `bubbles` (boolean, defaults to `true`),
 `cancelable` (boolean, defaults to false), and
 `node` on which to fire the event (HTMLElement, defaults to `this`).
* @return {Event}
*/
Polymer_LegacyElementMixin.prototype.fire = function(type, detail, options){};
/**
* @param {Element} node Element to add event listener to.
* @param {string} eventName Name of event to listen for.
* @param {string} methodName Name of handler method on `this` to call.
*/
Polymer_LegacyElementMixin.prototype.listen = function(node, eventName, methodName){};
/**
* @param {Element} node Element to remove event listener from.
* @param {string} eventName Name of event to stop listening to.
* @param {string} methodName Name of handler method on `this` to not call
       anymore.
*/
Polymer_LegacyElementMixin.prototype.unlisten = function(node, eventName, methodName){};
/**
* @param {string=} direction Direction to allow scrolling
Defaults to `all`.
* @param {Element=} node Element to apply scroll direction setting.
Defaults to `this`.
*/
Polymer_LegacyElementMixin.prototype.setScrollDirection = function(direction, node){};
/**
* @param {string} slctr Selector to run on this local DOM scope
* @return {Element}
*/
Polymer_LegacyElementMixin.prototype.$$ = function(slctr){};
/**
*/
Polymer_LegacyElementMixin.prototype.distributeContent = function(){};
/**
* @return {Array.<Node>}
*/
Polymer_LegacyElementMixin.prototype.getEffectiveChildNodes = function(){};
/**
* @param {string} selector Selector to run.
* @return {Array.<Node>}
*/
Polymer_LegacyElementMixin.prototype.queryDistributedElements = function(selector){};
/**
* @return {Array.<Node>}
*/
Polymer_LegacyElementMixin.prototype.getEffectiveChildren = function(){};
/**
* @return {string}
*/
Polymer_LegacyElementMixin.prototype.getEffectiveTextContent = function(){};
/**
* @param {string} selector Selector to run.
* @return {Object.<Node>}
*/
Polymer_LegacyElementMixin.prototype.queryEffectiveChildren = function(selector){};
/**
* @param {string} selector Selector to run.
* @return {Array.<Node>}
*/
Polymer_LegacyElementMixin.prototype.queryAllEffectiveChildren = function(selector){};
/**
* @param {string=} slctr CSS selector to choose the desired
  `<slot>`.  Defaults to `content`.
* @return {Array.<Node>}
*/
Polymer_LegacyElementMixin.prototype.getContentChildNodes = function(slctr){};
/**
* @param {string=} slctr CSS selector to choose the desired
  `<content>`.  Defaults to `content`.
* @return {Array.<HTMLElement>}
*/
Polymer_LegacyElementMixin.prototype.getContentChildren = function(slctr){};
/**
* @param {?Node} node The element to be checked.
* @return {boolean}
*/
Polymer_LegacyElementMixin.prototype.isLightDescendant = function(node){};
/**
* @param {Element=} node The element to be checked.
* @return {boolean}
*/
Polymer_LegacyElementMixin.prototype.isLocalDescendant = function(node){};
/**
* @param {*} container 
* @param {*} shouldObserve 
*/
Polymer_LegacyElementMixin.prototype.scopeSubtree = function(container, shouldObserve){};
/**
* @param {string} property The css property name.
* @return {string}
*/
Polymer_LegacyElementMixin.prototype.getComputedStyleValue = function(property){};
/**
* @param {string} jobName String to indentify the debounce job.
* @param {function ()} callback Function that is called (with `this`
  context) when the wait time elapses.
* @param {number} wait Optional wait time in milliseconds (ms) after the
  last signal that must elapse before invoking `callback`
* @return {Object}
*/
Polymer_LegacyElementMixin.prototype.debounce = function(jobName, callback, wait){};
/**
* @param {string} jobName The name of the debouncer started with `debounce`
* @return {boolean}
*/
Polymer_LegacyElementMixin.prototype.isDebouncerActive = function(jobName){};
/**
* @param {string} jobName The name of the debouncer started with `debounce`
*/
Polymer_LegacyElementMixin.prototype.flushDebouncer = function(jobName){};
/**
* @param {string} jobName The name of the debouncer started with `debounce`
*/
Polymer_LegacyElementMixin.prototype.cancelDebouncer = function(jobName){};
/**
* @param {Function} callback The callback function to run, bound to `this`.
* @param {number=} waitTime Time to wait before calling the
  `callback`.  If unspecified or 0, the callback will be run at microtask
  timing (before paint).
* @return {number}
*/
Polymer_LegacyElementMixin.prototype.async = function(callback, waitTime){};
/**
* @param {number} handle Handle returned from original `async` call to
  cancel.
*/
Polymer_LegacyElementMixin.prototype.cancelAsync = function(handle){};
/**
* @param {string} tag HTML element tag to create.
* @param {Object} props Object of properties to configure on the
   instance.
* @return {Element}
*/
Polymer_LegacyElementMixin.prototype.create = function(tag, props){};
/**
* @param {string} href URL to document to load.
* @param {Function} onload Callback to notify when an import successfully
  loaded.
* @param {Function} onerror Callback to notify when an import
  unsuccessfully loaded.
* @param {boolean} optAsync True if the import should be loaded `async`.
  Defaults to `false`.
* @return {HTMLLinkElement}
*/
Polymer_LegacyElementMixin.prototype.importHref = function(href, onload, onerror, optAsync){};
/**
* @param {string} selector Selector to test.
* @param {Element=} node Element to test the selector against.
* @return {boolean}
*/
Polymer_LegacyElementMixin.prototype.elementMatches = function(selector, node){};
/**
* @param {string} name HTML attribute name
* @param {boolean=} bool Boolean to force the attribute on or off.
   When unspecified, the state of the attribute will be reversed.
* @param {Element=} node Node to target.  Defaults to `this`.
*/
Polymer_LegacyElementMixin.prototype.toggleAttribute = function(name, bool, node){};
/**
* @param {string} name CSS class name
* @param {boolean=} bool Boolean to force the class on or off.
   When unspecified, the state of the class will be reversed.
* @param {Element=} node Node to target.  Defaults to `this`.
*/
Polymer_LegacyElementMixin.prototype.toggleClass = function(name, bool, node){};
/**
* @param {string} transformText Transform setting.
* @param {Element=} node Element to apply the transform to.
Defaults to `this`
*/
Polymer_LegacyElementMixin.prototype.transform = function(transformText, node){};
/**
* @param {number} x X offset.
* @param {number} y Y offset.
* @param {number} z Z offset.
* @param {Element=} node Element to apply the transform to.
Defaults to `this`.
*/
Polymer_LegacyElementMixin.prototype.translate3d = function(x, y, z, node){};
/**
* @param {(string|!Array.<(number|string)>)} arrayOrPath Path to array from which to remove the item
  (or the array itself).
* @param {*} item Item to remove.
* @return {Array}
*/
Polymer_LegacyElementMixin.prototype.arrayDelete = function(arrayOrPath, item){};
/**
* @param {string} level One of 'log', 'warn', 'error'
* @param {Array} args Array of strings or objects to log
*/
Polymer_LegacyElementMixin.prototype._logger = function(level, args){};
/**
* @param {...*} args 
*/
Polymer_LegacyElementMixin.prototype._log = function(args){};
/**
* @param {...*} args 
*/
Polymer_LegacyElementMixin.prototype._warn = function(args){};
/**
* @param {...*} args 
*/
Polymer_LegacyElementMixin.prototype._error = function(args){};
/**
* @param {string} methodName Method name to associate with message
* @param {...*} args 
* @return {Array}
*/
Polymer_LegacyElementMixin.prototype._logf = function(methodName, args){};
/**
* @interface
*/
function Polymer_MutableData(){}
/**
* @param {string} property Property name
* @param {*} value New property value
* @param {*} old Previous property value
* @return {boolean}
*/
Polymer_MutableData.prototype._shouldPropertyChange = function(property, value, old){};
/**
* @interface
*/
function Polymer_OptionalMutableData(){}
/** @type {boolean} */
Polymer_OptionalMutableData.prototype.mutableData;

/**
* @param {string} property Property name
* @param {*} value New property value
* @param {*} old Previous property value
* @return {boolean}
*/
Polymer_OptionalMutableData.prototype._shouldPropertyChange = function(property, value, old){};
/**
* @interface
* @extends {Polymer_ElementMixin}
* @extends {Polymer_ElementMixinExtern}
*/
function Polymer_ArraySelectorMixin(){}
/** @type {Array} */
Polymer_ArraySelectorMixin.prototype.items;

/** @type {boolean} */
Polymer_ArraySelectorMixin.prototype.multi;

/** @type {?(Object|Array.<!Object>)} */
Polymer_ArraySelectorMixin.prototype.selected;

/** @type {?Object} */
Polymer_ArraySelectorMixin.prototype.selectedItem;

/** @type {boolean} */
Polymer_ArraySelectorMixin.prototype.toggle;

/**
* @override
* @param {!HTMLTemplateElement} template Template to stamp
* @return {!StampedTemplate}
*/
Polymer_ArraySelectorMixin.prototype._stampTemplate = function(template){};
/**
* @param {Node} node Node to add listener on
* @param {string} eventName Name of event
* @param {string} methodName Name of method
* @param {*=} context Context the method will be called on (defaults
  to `node`)
* @return {Function}
*/
Polymer_ArraySelectorMixin.prototype._addMethodEventListenerToNode = function(node, eventName, methodName, context){};
/**
* @param {Node} node Node to add event listener to
* @param {string} eventName Name of event
* @param {Function} handler Listener function to add
*/
Polymer_ArraySelectorMixin.prototype._addEventListenerToNode = function(node, eventName, handler){};
/**
* @param {Node} node Node to remove event listener from
* @param {string} eventName Name of event
* @param {Function} handler Listener function to remove
*/
Polymer_ArraySelectorMixin.prototype._removeEventListenerFromNode = function(node, eventName, handler){};
/**
* @override
* @param {string} name Name of attribute.
* @param {?string} old Old value of attribute.
* @param {?string} value Current value of attribute.
*/
Polymer_ArraySelectorMixin.prototype.attributeChangedCallback = function(name, old, value){};
/**
* @override
*/
Polymer_ArraySelectorMixin.prototype._initializeProperties = function(){};
/**
* @override
* @param {Object} props Properties to initialize on the prototype
*/
Polymer_ArraySelectorMixin.prototype._initializeProtoProperties = function(props){};
/**
* @override
* @param {Object} props Properties to initialize on the instance
*/
Polymer_ArraySelectorMixin.prototype._initializeInstanceProperties = function(props){};
/**
* @param {string} attribute Name of attribute to ensure is set.
* @param {string} value of the attribute.
*/
Polymer_ArraySelectorMixin.prototype._ensureAttribute = function(attribute, value){};
/**
* @param {string} attribute Name of attribute to deserialize.
* @param {?string} value of the attribute.
* @param {*=} type type to deserialize to.
*/
Polymer_ArraySelectorMixin.prototype._attributeToProperty = function(attribute, value, type){};
/**
* @param {string} property Property name to reflect.
* @param {string=} attribute Attribute name to reflect.
* @param {*=} value Property value to refect.
*/
Polymer_ArraySelectorMixin.prototype._propertyToAttribute = function(property, attribute, value){};
/**
* @param {Element} node Element to set attribute to.
* @param {*} value Value to serialize.
* @param {string} attribute Attribute name to serialize to.
*/
Polymer_ArraySelectorMixin.prototype._valueToNodeAttribute = function(node, value, attribute){};
/**
* @param {*} value Property value to serialize.
* @return {(string|undefined)}
*/
Polymer_ArraySelectorMixin.prototype._serializeValue = function(value){};
/**
* @param {?string} value Attribute value to deserialize.
* @param {*=} type Type to deserialize the string to.
* @return {*}
*/
Polymer_ArraySelectorMixin.prototype._deserializeValue = function(value, type){};
/**
* @param {string} property Name of the property
* @param {boolean=} readOnly When true, no setter is created; the
  protected `_setProperty` function must be used to set the property
*/
Polymer_ArraySelectorMixin.prototype._createPropertyAccessor = function(property, readOnly){};
/**
* @param {string} property Property name
* @return {boolean}
*/
Polymer_ArraySelectorMixin.prototype._hasAccessor = function(property){};
/**
* @override
*/
Polymer_ArraySelectorMixin.prototype._setProperty = function(property, value){};
/**
* @override
* @param {string} property Name of the property
* @param {*} value Value to set
* @param {boolean=} shouldNotify True if property should fire notification
  event (applies only for `notify: true` properties)
* @return {boolean}
*/
Polymer_ArraySelectorMixin.prototype._setPendingProperty = function(property, value, shouldNotify){};
/**
* @param {string} prop Property name
* @return {boolean}
*/
Polymer_ArraySelectorMixin.prototype._isPropertyPending = function(prop){};
/**
* @override
*/
Polymer_ArraySelectorMixin.prototype._invalidateProperties = function(){};
/**
*/
Polymer_ArraySelectorMixin.prototype._enableProperties = function(){};
/**
*/
Polymer_ArraySelectorMixin.prototype._flushProperties = function(){};
/**
* @override
*/
Polymer_ArraySelectorMixin.prototype.ready = function(){};
/**
* @override
*/
Polymer_ArraySelectorMixin.prototype._propertiesChanged = function(currentProps, changedProps, oldProps){};
/**
* @param {string} property Property name
* @param {*} value New property value
* @param {*} old Previous property value
* @return {boolean}
*/
Polymer_ArraySelectorMixin.prototype._shouldPropertyChange = function(property, value, old){};
/**
* @param {string} property Property that should trigger the effect
* @param {string} type Effect type, from this.PROPERTY_EFFECT_TYPES
* @param {Object=} effect Effect metadata object
*/
Polymer_ArraySelectorMixin.prototype._addPropertyEffect = function(property, type, effect){};
/**
* @param {string} property Property the effect was associated with
* @param {string} type Effect type, from this.PROPERTY_EFFECT_TYPES
* @param {Object=} effect Effect metadata object to remove
*/
Polymer_ArraySelectorMixin.prototype._removePropertyEffect = function(property, type, effect){};
/**
* @param {string} property Property name
* @param {string=} type Effect type, from this.PROPERTY_EFFECT_TYPES
* @return {boolean}
*/
Polymer_ArraySelectorMixin.prototype._hasPropertyEffect = function(property, type){};
/**
* @param {string} property Property name
* @return {boolean}
*/
Polymer_ArraySelectorMixin.prototype._hasReadOnlyEffect = function(property){};
/**
* @param {string} property Property name
* @return {boolean}
*/
Polymer_ArraySelectorMixin.prototype._hasNotifyEffect = function(property){};
/**
* @param {string} property Property name
* @return {boolean}
*/
Polymer_ArraySelectorMixin.prototype._hasReflectEffect = function(property){};
/**
* @param {string} property Property name
* @return {boolean}
*/
Polymer_ArraySelectorMixin.prototype._hasComputedEffect = function(property){};
/**
* @param {(string|!Array.<(number|string)>)} path Path to set
* @param {*} value Value to set
* @param {boolean=} shouldNotify Set to true if this change should
 cause a property notification event dispatch
* @param {boolean=} isPathNotification If the path being set is a path
  notification of an already changed value, as opposed to a request
  to set and notify the change.  In the latter `false` case, a dirty
  check is performed and then the value is set to the path before
  enqueuing the pending property change.
* @return {boolean}
*/
Polymer_ArraySelectorMixin.prototype._setPendingPropertyOrPath = function(path, value, shouldNotify, isPathNotification){};
/**
* @param {Node} node The node to set a property on
* @param {string} prop The property to set
* @param {*} value The value to set
*/
Polymer_ArraySelectorMixin.prototype._setUnmanagedPropertyToNode = function(node, prop, value){};
/**
* @param {Object} client PropertyEffects client to enqueue
*/
Polymer_ArraySelectorMixin.prototype._enqueueClient = function(client){};
/**
*/
Polymer_ArraySelectorMixin.prototype._flushClients = function(){};
/**
* @override
*/
Polymer_ArraySelectorMixin.prototype._readyClients = function(){};
/**
* @param {Object} props Bag of one or more key-value pairs whose key is
  a property and value is the new value to set for that property.
* @param {boolean=} setReadOnly When true, any private values set in
  `props` will be set. By default, `setProperties` will not set
  `readOnly: true` root properties.
*/
Polymer_ArraySelectorMixin.prototype.setProperties = function(props, setReadOnly){};
/**
* @param {Object} changedProps Bag of changed properties
* @param {Object} oldProps Bag of previous values for changed properties
* @param {boolean} hasPaths True with `props` contains one or more paths
*/
Polymer_ArraySelectorMixin.prototype._propagatePropertyChanges = function(changedProps, oldProps, hasPaths){};
/**
* @param {(string|!Array.<(string|number)>)} to Target path to link.
* @param {(string|!Array.<(string|number)>)} from Source path to link.
*/
Polymer_ArraySelectorMixin.prototype.linkPaths = function(to, from){};
/**
* @param {(string|!Array.<(string|number)>)} path Target path to unlink.
*/
Polymer_ArraySelectorMixin.prototype.unlinkPaths = function(path){};
/**
* @param {string} path Path that should be notified.
* @param {Array} splices Array of splice records indicating ordered
  changes that occurred to the array. Each record should have the
  following fields:
   * index: index at which the change occurred
   * removed: array of items that were removed from this index
   * addedCount: number of new items added at this index
   * object: a reference to the array in question
   * type: the string literal 'splice'

  Note that splice records _must_ be normalized such that they are
  reported in index order (raw results from `Object.observe` are not
  ordered and must be normalized/merged before notifying).
*/
Polymer_ArraySelectorMixin.prototype.notifySplices = function(path, splices){};
/**
* @param {(string|!Array.<(string|number)>)} path Path to the value
  to read.  The path may be specified as a string (e.g. `foo.bar.baz`)
  or an array of path parts (e.g. `['foo.bar', 'baz']`).  Note that
  bracketed expressions are not supported; string-based path parts
  *must* be separated by dots.  Note that when dereferencing array
  indices, the index may be used as a dotted part directly
  (e.g. `users.12.name` or `['users', 12, 'name']`).
* @param {Object=} root Root object from which the path is evaluated.
* @return {*}
*/
Polymer_ArraySelectorMixin.prototype.get = function(path, root){};
/**
* @param {(string|!Array.<(string|number)>)} path Path to the value
  to write.  The path may be specified as a string (e.g. `'foo.bar.baz'`)
  or an array of path parts (e.g. `['foo.bar', 'baz']`).  Note that
  bracketed expressions are not supported; string-based path parts
  *must* be separated by dots.  Note that when dereferencing array
  indices, the index may be used as a dotted part directly
  (e.g. `'users.12.name'` or `['users', 12, 'name']`).
* @param {*} value Value to set at the specified path.
* @param {Object=} root Root object from which the path is evaluated.
  When specified, no notification will occur.
*/
Polymer_ArraySelectorMixin.prototype.set = function(path, value, root){};
/**
* @param {string} path Path to array.
* @param {...*} items 
* @return {number}
*/
Polymer_ArraySelectorMixin.prototype.push = function(path, items){};
/**
* @param {string} path Path to array.
* @return {*}
*/
Polymer_ArraySelectorMixin.prototype.pop = function(path){};
/**
* @param {string} path Path to array.
* @param {number} start Index from which to start removing/inserting.
* @param {number} deleteCount Number of items to remove.
* @param {...*} items 
* @return {Array}
*/
Polymer_ArraySelectorMixin.prototype.splice = function(path, start, deleteCount, items){};
/**
* @param {string} path Path to array.
* @return {*}
*/
Polymer_ArraySelectorMixin.prototype.shift = function(path){};
/**
* @param {string} path Path to array.
* @param {...*} items 
* @return {number}
*/
Polymer_ArraySelectorMixin.prototype.unshift = function(path, items){};
/**
* @param {string} path Path that should be notified.
* @param {*=} value Value at the path (optional).
*/
Polymer_ArraySelectorMixin.prototype.notifyPath = function(path, value){};
/**
* @param {string} property Property name
* @param {boolean=} protectedSetter Creates a custom protected setter
  when `true`.
*/
Polymer_ArraySelectorMixin.prototype._createReadOnlyProperty = function(property, protectedSetter){};
/**
* @param {string} property Property name
* @param {string} methodName Name of observer method to call
* @param {boolean=} dynamicFn Whether the method name should be included as
  a dependency to the effect.
*/
Polymer_ArraySelectorMixin.prototype._createPropertyObserver = function(property, methodName, dynamicFn){};
/**
* @param {string} expression Method expression
* @param {(boolean|Object)=} dynamicFn Boolean or object map indicating
  whether method names should be included as a dependency to the effect.
*/
Polymer_ArraySelectorMixin.prototype._createMethodObserver = function(expression, dynamicFn){};
/**
* @param {string} property Property name
*/
Polymer_ArraySelectorMixin.prototype._createNotifyingProperty = function(property){};
/**
* @param {string} property Property name
*/
Polymer_ArraySelectorMixin.prototype._createReflectedProperty = function(property){};
/**
* @param {string} property Name of computed property to set
* @param {string} expression Method expression
* @param {(boolean|Object)=} dynamicFn Boolean or object map indicating
  whether method names should be included as a dependency to the effect.
*/
Polymer_ArraySelectorMixin.prototype._createComputedProperty = function(property, expression, dynamicFn){};
/**
* @param {HTMLTemplateElement} template Template containing binding
  bindings
* @param {boolean=} instanceBinding When false (default), performs
  "prototypical" binding of the template and overwrites any previously
  bound template for the class. When true (as passed from
  `_stampTemplate`), the template info is instanced and linked into
  the list of bound templates.
* @return {!TemplateInfo}
*/
Polymer_ArraySelectorMixin.prototype._bindTemplate = function(template, instanceBinding){};
/**
* @param {!StampedTemplate} dom DocumentFragment previously returned
  from `_stampTemplate` associated with the nodes to be removed
*/
Polymer_ArraySelectorMixin.prototype._removeBoundDom = function(dom){};
/**
*/
Polymer_ArraySelectorMixin.prototype.connectedCallback = function(){};
/**
*/
Polymer_ArraySelectorMixin.prototype.disconnectedCallback = function(){};
/**
* @param {NodeList} dom to attach to the element.
* @return {Node}
*/
Polymer_ArraySelectorMixin.prototype._attachDom = function(dom){};
/**
* @param {Object=} properties Bag of custom property key/values to
  apply to this element.
*/
Polymer_ArraySelectorMixin.prototype.updateStyles = function(properties){};
/**
* @param {string} url URL to resolve.
* @param {string=} base Optional base URL to resolve against, defaults
to the element's `importPath`
* @return {string}
*/
Polymer_ArraySelectorMixin.prototype.resolveUrl = function(url, base){};
/**
*/
Polymer_ArraySelectorMixin.prototype.clearSelection = function(){};
/**
* @param {*} item Item from `items` array to test
* @return {boolean}
*/
Polymer_ArraySelectorMixin.prototype.isSelected = function(item){};
/**
* @param {number} idx Index from `items` array to test
* @return {boolean}
*/
Polymer_ArraySelectorMixin.prototype.isIndexSelected = function(idx){};
/**
* @param {*} item Item from `items` array to deselect
*/
Polymer_ArraySelectorMixin.prototype.deselect = function(item){};
/**
* @param {number} idx Index from `items` array to deselect
*/
Polymer_ArraySelectorMixin.prototype.deselectIndex = function(idx){};
/**
* @param {*} item Item from `items` array to select
*/
Polymer_ArraySelectorMixin.prototype.select = function(item){};
/**
* @param {number} idx Index from `items` array to select
*/
Polymer_ArraySelectorMixin.prototype.selectIndex = function(idx){};
