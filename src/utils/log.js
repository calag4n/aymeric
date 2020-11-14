/**
 * calag4n's helping log function
 * https://gist.github.com/calag4n/8fad1e9a1437b72c659a36c4c95b8f20
 * 
 * @param {any} obj 
 * @param {boolean | undefined} clear 
 * @param {string} mapKey 
 */
export const log = (obj, clear = true, mapKey) => {
  const title = "font-size: 19px; color: #e65264"

  if (clear) {
    console.clear()
  }

  if (mapKey) {
    console.group(mapKey)
    obj.map(o => console.log(o))
    console.groupEnd(mapKey)
  } else if (Array.isArray(obj)) {
    console.log("%c Array 👇️", title)
    console.table(obj)
  } else if (typeof obj === "string") {
    console.log("%c String 👇️", title)
    console.log(`%c ${obj}`, "font-size: 14px; color: yellow")
  } else {
    console.log("%c Object 👇️", title)
    console.table(obj)
  }
}