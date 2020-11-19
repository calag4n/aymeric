import { useReducer } from 'react'
import { config } from '../config/sizes'
import useWindowSize from './useWindowSize'
import { arraysDiff } from '../utils'


/**
 * Makes a resizing of the sections below Skills and 
 * the whole page when skills are expand or collapsed
 */
export const useSkillSizing = () => {
  const { lines, multiplier } = config
  const { deviceType } = useWindowSize()

  let screenOption = deviceType === 'smallPhone' ? 0.02 : 0

  const reducer = (state, nodes) => {
    let newState = JSON.parse(JSON.stringify(state))
    const collapsed = arraysDiff(newState.activeView, nodes)
    let collapsedLines = 0

    collapsed.forEach(node => {
      collapsedLines += lines[node]
    })

    let factor = multiplier  * collapsedLines
    factor.toFixed(2)

    const action =
      nodes.length > state.activeView.length ? 'increase' : 'decrease'
    newState.activeView = [...nodes]

    switch (action) {

      case 'increase':
        newState.resize = parseFloat(factor.toFixed(2))
        return newState

      case 'decrease':
        if (collapsed[0] === 1) {
          collapsedLines = 0
          nodes.forEach(node => {
            collapsedLines += lines[Number(node)]
          })
          factor = (multiplier - screenOption) * collapsedLines
          factor.toFixed(2)
          newState.activeView = []
        }
        newState.resize = -parseFloat(factor.toFixed(2))
        return newState

      default:
        break
    }
  }

  const initialState = {
    activeView: [],
    resize: 0,
  }

  const [skillSizing, setSkillSizing] = useReducer(reducer, initialState)

  return [ skillSizing, setSkillSizing ]
}
