import { useReducer, createContext, useContext, useState, useEffect } from 'react'
import { config } from '../config'
import useWindowSize from '../hooks/useWindowSize'
import { useSkillSizing } from '../hooks/sectionsSizing/useSkillSizing'
import { useExperienceSizing } from '../hooks/sectionsSizing/useExperienceSizing'
import { initialState } from './sectionsSizingObject'

const sizingsContext = createContext({})

export const useSectionsSizing = () => useContext(sizingsContext)

export const SizingsProvider = ({children}) => {

  const { windowType } = useWindowSize()
  const [ skillSizing, setSkillSizing ] = useSkillSizing()
  const [ experienceSizing, setExperienceSizing ] = useExperienceSizing()
  

  const reducer = (state, payload) => {
    const _state = JSON.parse(JSON.stringify(state))
    const { action, value } = payload

    switch (action) {
      case 'init':
        _state.experienceOffset = experienceSizing.selfOffset 
        _state.skillsOffset = experienceSizing.skillsOffset 
        _state.projectsOffset = experienceSizing.projectsOffset 
        _state.contactOffset = experienceSizing.contactOffset 
        _state.pagesValue = experienceSizing.pagesValue 
        
        console.log(_state)
        return _state

      case 'toggleSkills':
        setSkillSizing(value)
        console.log(skillSizing.resize)
        _state.pagesValue += skillSizing.resize
        _state.projectsOffset += skillSizing.resize 
        _state.contactOffset += skillSizing.resize

        for (const key in _state) {
            _state[key] = parseFloat(_state[key].toFixed(2))        
        }
        console.log(_state)
        return _state
    
      default:
        break;
    }
  }
  
  const [sizes, setSizes] = useReducer(reducer, initialState)
  let screenOption = windowType === 'smallPhone' ? 0.02 : 0
  
  useEffect(() => {
    setSizes({action: 'init', value: null})
  }, [experienceSizing])


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
    