import React, { useRef, useState, useEffect, useCallback } from 'react'
import { useTransition, animated } from 'react-spring'


/**
 * Subtitle displayed on home section
 * 
 * @component
 * @example
 * <Subtitle />
 */
const  Subtitle = () => {
  const ref = useRef([])
  const [items, set] = useState([])
  const transitions = useTransition(items, null, {
    from: { opacity: 0, height: 0, innerHeight: 0, transform: 'perspective(600px) rotateX(0deg)', color: 'white' },
    enter: [
      { opacity: 1, height: 80, innerHeight: 80 },
      { transform: 'perspective(600px) rotateX(180deg)', color: '#f50057' },
      { transform: 'perspective(600px) rotateX(0deg)' },
      { transform: 'perspective(600px) rotateX(0deg)', color: '#f50057' },
    ],
    leave: [{ color: '#f50057' }, { innerHeight: 0 }, { opacity: 0, height: 0 }],
    update: { color: '#f50057' },
  })

  const reset = useCallback(() => {
    ref.current.map(clearTimeout)
    ref.current = []
    set([])
    ref.current.push(setTimeout(() => set(['Data Scientist', 'Machine Learning Engineer', 'AI Researcher']), 2000))
    ref.current.push(setTimeout(() => set(['Data Scientist', 'AI Researcher']), 5000))
    ref.current.push(setTimeout(() => set(['Data Scientist', 'Machine Learning Engineer', 'AI Researcher']), 8000))
    ref.current.push(setTimeout(() => set(['Data Scientist']), 11000))
  }, [])

  useEffect(() => void reset(), [])

  return (
    <div>
        
      {transitions.map(({ item, props: { innerHeight, ...rest }, key }) => (
        <animated.div className="transitions-item" key={key} style={rest} onClick={reset}>
          <animated.div style={{ overflow: 'hidden', height: innerHeight, fontSize: "2rem" }}>{item}</animated.div>
        </animated.div>
      ))}
    </div>
  )
}

export default Subtitle