import {
  useReducer,
  createContext,
  useContext,
  useEffect,
} from 'react'
import useWindowSize from '../hooks/useWindowSize'
import { useSkillSizing } from '../hooks/useSkillSizing'
import { initialState } from './sectionsSizingObject'
import { toFixed } from '../utils'
import { config } from '../config/sizes'

const sizingsContext = createContext({})

export const useSectionsSizing = () => useContext(sizingsContext)

export const SizingsProvider = ({ children }) => {
  const { deviceType } = useWindowSize()
  const [skillSizing, setSkillSizing] = useSkillSizing()

  console.log(deviceType)

  const reducer = (state, payload) => {
    const _state = JSON.parse(JSON.stringify(state))
    const { action, value } = payload
    let fixed = {}

    switch (action) {
      case 'init':
        console.log(value)
        let init = {
          pagesValue: config[value].pagesValue || config[value].contactOffset + 1,
          homeOffset: config[value].homeOffset,
          aboutOffset: config[value].aboutOffset,
          experienceOffset: config[value].experienceOffset,
          skillsOffset: config[value].skillsOffset,
          projectsOffset: config[value].projectsOffset,
          contactOffset: config[value].contactOffset,
          starsFactor: config[value].starsFactor || config[value].contactOffset,
        }

        fixed = toFixed(init, 2)
        console.log(fixed)
        return fixed

      case 'toggleSkills':
        setSkillSizing(value)
        _state.pagesValue += skillSizing.resize
        _state.projectsOffset += skillSizing.resize
        _state.contactOffset += skillSizing.resize

        fixed = toFixed(_state, 2)
        console.log(_state)
        return fixed

      default:
        break
    }
  }

  const [sizes, setSizes] = useReducer(reducer, initialState)

  useEffect(() => {
    setSizes({ action: 'init', value: deviceType })
  }, [deviceType])

  return (
    <sizingsContext.Provider
      value={{
        sizes,
        setSizes,
      }}
    >
      {children}
    </sizingsContext.Provider>
  )
}
