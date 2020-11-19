import { useEffect, useState } from "react"
import { breakpoints } from "../styles/theme"


/**
 * Get the window height and width even when those sizes are changing
 */
const useWindowSize = () => {
  const [windowWidth, setWidth] = useState(undefined)
  const [windowHeight, setHeight] = useState(undefined)
  const [deviceType, setWindowType] = useState('desktop')

  useEffect(() => {
    const getSize = () => {
      const [width, height] = [window.innerWidth, window.innerHeight]
      const { startBigPhone, startTablet, startDesktop} = breakpoints
      
      setWidth(width)
      setHeight(height)

      if (width < startBigPhone) {
        setWindowType('smallPhone')
      }else if (width < startTablet) {
        setWindowType('bigPhone')
      }else if (width < startDesktop) {
        setWindowType('tablet')
      }
      

    }
    window.addEventListener('resize', getSize)
    getSize()

    return () => {
      window.removeEventListener('resize', getSize)
    }
  }, [])

  return { windowWidth, windowHeight, deviceType }
}

export default useWindowSize