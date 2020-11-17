import { useEffect, useReducer, useState } from 'react'
import { config } from '../../config'
import useWindowSize from '../useWindowSize'
import {log} from '../../utils/log'
import {initialState} from './initialObjects/projectsObject'
import { useExperienceSizing } from './useExperienceSizing'
import { useSectionsSizing } from '../../contexts/sectionsSizingContext'

export const useProjectsSizing = () => {
  const { lines, multiplier } = config.sizesInitComputing
  const { windowType } = useWindowSize()
  const [ experienceSizing ] = useExperienceSizing()
  const { setSizes } = useSectionsSizing()
  
  const [projectsSizing, setProjectsSizing] = useState(initialState)

  useEffect(() => {
    // document.addEventListener('DOMContentLoaded', () => {
    const section = document.querySelector('.projects-section')
    if (section) {
        const height = section.offsetHeight
        const projectsSizes = JSON.parse(JSON.stringify(projectsSizing))
        const selfAdd = parseFloat(((height / 240) * 0.03 *2).toFixed(2))
        const contactAdd = parseFloat((selfAdd * 1.25).toFixed(2))
        console.log(selfAdd)
        console.log(contactAdd)
  
        projectsSizes.selfOffset = selfAdd
        projectsSizes.contactOffset = contactAdd
        console.log(projectsSizes.resize)
  
  
        setProjectsSizing(projectsSizes)
        setSizes({action: 'init', value: { projectsAdd: selfAdd, contactAdd }})
      }
    // })
      
  }, [document])

 return [projectsSizing, setProjectsSizing]
  
}
