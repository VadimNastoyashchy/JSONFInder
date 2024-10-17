export const getJSONValue = (jsonObj, key) => {
  return key.split('.').reduce((obj, prop) => obj?.[prop], jsonObj)
}
