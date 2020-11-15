import { useReducer, createContext, useContext } from 'react'
import { config } from '../config'
import useWindowSize from '../hooks/useWindowSize'
import { arraysDiff } from '../utils'
import { initialState } from './skillSizingObject'

const sizingsContext = createContext({})

export const useSkillSizing = () => useContext(sizingsContext)

export const SizingsProvider = ({children}) => {
  const { lines, multiplier } = config.skillsViewComputing
  const { windowType } = useWindowSize()

  let screenOption = windowType === 'smallPhone' ? 0.02 : 0
  

  const reducer = (state, nodes) => {
    let newState = JSON.parse(JSON.stringify(state))
    const collapsed = arraysDiff(newState.activeView, nodes)
    let collapsedLines = 0

    collapsed.forEach(node => {
      collapsedLines += lines[node]
    })

    let factor = (multiplier - screenOption) * collapsedLines
    factor.toFixed(2)

    const action =
      nodes.length > state.activeView.length ? 'increase' : 'decrease'
    newState.activeView = [...nodes]

    switch (action) {
      case 'increase':
        newState.projectsOffset += factor
        newState.contactOffset += factor
        newState.pages += factor
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

        newState.projectsOffset -= factor
        newState.contactOffset -= factor
        newState.pages -= factor
        return newState

      default:
        break
    }
  }

  const [skillSizing, setSkillSizing] = useReducer(reducer, initialState)

  return (
    <sizingsContext.Provider
      value={{
        skillSizing,
        setSkillSizing,
      }}
    >
      {children}
    </sizingsContext.Provider>
  )
}
