export const breakpoints = {
  sm: 350,
  md: 768,
  lg: 1024,
  xl: 1920,
}

/**
 *
 * @param {string} minMax - min or max
 * @param key - using the breakpoints export from mediaQueries.js
 */
export const mediaQueries = (minMax, key) => {
  return style => `@media (${minMax}-width: ${breakpoints[key]}px) { ${style} }`
}
