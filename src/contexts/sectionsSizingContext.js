import { useReducer, createContext, useContext, useState, useEffect } from 'react'
import useWindowSize from '../hooks/useWindowSize'
import { useSkillSizing } from '../hooks/useSkillSizing'
import { initialState } from './sectionsSizingObject'
import { toFixed } from '../utils'

const sizingsContext = createContext({})

export const useSectionsSizing = () => useContext(sizingsContext)

export const SizingsProvider = ({children}) => {

  const { windowType } = useWindowSize()
  const [ skillSizing, setSkillSizing ] = useSkillSizing()
  

  console.log(initialState)
  

  const reducer = (state, payload) => {
    const _state = JSON.parse(JSON.stringify(state))
    const { action, value } = payload
    let fixed = {}

    switch (action) {
      case 'init':
        _state.experienceOffset *= value
        _state.skillsOffset *= value      
        _state.projectsOffset *= value * 1.06
        _state.contactOffset *= value * 1.1
        _state.pagesValue = _state.contactOffset + 1
        _state.starsFactor = _state.contactOffset

        fixed = toFixed(_state, 2)
        console.log(_state)
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
        break;
    }
  }
  
  const [sizes, setSizes] = useReducer(reducer, initialState)
  

  useEffect(() => {
    const screenOption = windowType === 'smallPhone' ? 1.2 : 1
    setSizes({action: 'init', value: screenOption })
  }, [windowType])

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
    