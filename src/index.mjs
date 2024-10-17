import * as core from './core/core.mjs'

/**
 * Function returns value or undefined if there is no such property in the given object.
 * @param jsonObj some object with nested fields
 * @param key key-path to the field, (supports dot-notation)'name' or 'email.email_address'
 * @returns value property of object or undefined
 * @example
 * getValue(jsonObj, 'id') or getValue(jsonObj, 'data.onlineStatus.active')
 */
export const getValue = (jsonObj, key) => core.getJSONValue(jsonObj, key)
