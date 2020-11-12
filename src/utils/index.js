/**
 * Return an svg's url
 *
 * @param {string} name
 * @param {Boolean} [wrap]
 * @return {string}
 *
 * @example
 * url('stars', true)
 */
export const getSvgUrl = (name, wrap = false) =>
`${
  wrap ? 'url(' : ''
}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${
  wrap ? ')' : ''
}`