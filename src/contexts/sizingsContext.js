import { useReducer, createContext, useContext } from 'react'
import { config } from '../config'
import { arraysDiff } from '../utils'
import { initialState } from './sizingObject'

const sizingsContext = createContext({})

export const useSizings = () => useContext(sizingsContext)

export const SizingsProvider = ({ children }) => {
  const { lines, multiplier } = config.skillsViewComputing

  const reducer = (state, nodes) => {
    let newState = JSON.parse(JSON.stringify(state))
    console.log(newState.activeView)
    console.log(nodes)
    let collapsed = arraysDiff(newState.activeView, nodes)

    let factor = multiplier * lines[collapsed]
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
