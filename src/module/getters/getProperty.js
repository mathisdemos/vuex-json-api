export function getProperty (state) {
  return new Proxy(() => {}, {
    apply (target, thisArg, argArray) {
      const [property] = argArray
      if (property.constructor === Array) {
        return property.reduce((obj, key) => obj[key], state)
      } else {
        return state[property]
      }
    }
  })
}
