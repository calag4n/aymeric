import { useEffect, useState } from "react"
import { breakpoints } from "../styles/theme"

const useWindowSize = () => {
  const [windowWidth, setWidth] = useState(undefined)
  const [windowHeight, setHeight] = useState(undefined)
  const [windowType, setWindowType] = useState(undefined)

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
        setWindowType('tabet')
      }else {
        setWindowType('desktop')
      }

    }
    window.addEventListener('resize', getSize)
    getSize()

    return () => {
      window.removeEventListener('resize', getSize)
    }
  }, [])

  return { windowWidth, windowHeight, windowType }
}

export default useWindowSize