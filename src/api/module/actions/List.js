import { setResourceObjectsForModule } from './setResourceObjectsForModule'

/**
 * Get a resource list
 *
 * @param {ResourcefulApi} api
 * @param {String} moduleName
 */
export function list (api, moduleName) {
  return new Proxy(() => {}, {
    apply (target, thisArg, argArray) {
      let [vuexFns, query] = argArray

      if (typeof query === 'undefined') {
        query = { query: {}, group: null }
      }

      let group = (query.hasOwnProperty('group')) ? query.group : null

      vuexFns.commit('startLoading', group)

      return api[moduleName].list(query.query).then(({ data, meta }) => {

        for (let destinationModule in data) {
          if (data.hasOwnProperty(destinationModule)) {
            setResourceObjectsForModule(vuexFns, moduleName, destinationModule, data[destinationModule], group)
          }
        }

        if (meta.hasOwnProperty('pagination')) {
          vuexFns.commit('setPagination', { group: group, pagination: meta.pagination })
        }

      }).finally(
        vuexFns.commit('endLoading', group)
      )
    }
  })
}
