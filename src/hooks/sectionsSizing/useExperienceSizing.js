import { useEffect, useReducer, useState } from 'react'
import { config } from '../../config'
import useWindowSize from '../useWindowSize'
import { arraysDiff } from '../../utils'
import {log} from '../../utils/log'
import {initialState} from './initialObjects/experienceObject'

export const useExperienceSizing = () => {
  const { lines, multiplier } = config.sizesInitComputing
  const { windowType } = useWindowSize()
  const [experienceSizing, setExperienceSizing] = useState(initialState)

  useEffect(() => {
    document.addEventListener('DOMContentLoaded', () => {
      const section = document.querySelector('.experience-section')
      const height = section.offsetHeight
      const _xpSizes = JSON.parse(JSON.stringify(experienceSizing))

      _xpSizes.selfOffset = parseFloat(((height / 70) * 0.1).toFixed(2))

      _xpSizes.skillsOffset = parseFloat((_xpSizes.selfOffset * 1.55).toFixed(2))

      _xpSizes.projectsOffset = parseFloat((_xpSizes.skillsOffset * 1.15).toFixed(2))
      
      _xpSizes.contactOffset = parseFloat((_xpSizes.projectsOffset * 1.25).toFixed(2))

      _xpSizes.pagesValue = _xpSizes.contactOffset + 1

      setExperienceSizing(_xpSizes)
      
    })
  }, [experienceSizing])

 return [experienceSizing, setExperienceSizing]
  
}
