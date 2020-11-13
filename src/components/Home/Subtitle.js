import { useRef, useState, useEffect, useCallback } from 'react'
import { useTransition, animated } from 'react-spring'
import useWindowSize from '../../hooks/useWindowSize'
import { useAppTheme } from '../../styles/theme'

/**
 * Subtitle displayed on home section
 *
 * @component
 * @example
 * <Subtitle />
 */
const Subtitle = () => {
  const ref = useRef([])
  const [items, setItems] = useState([])

  const { colors, fonts, spacings } = useAppTheme()
  const { windowType } = useWindowSize()

  let margin = spacings.homeSubtitle[windowType]

  const transitions = useTransition(items, null, {
    from: {
      opacity: 0,
      height: 0,
      innerHeight: 0,
      transform: 'perspective(600px) rotateX(0deg)',
      color: colors.title,
    },

    enter: [
      { opacity: 1, height: margin, innerHeight: 80 },
      {
        transform: 'perspective(600px) rotateX(180deg)',
        color: colors.primary,
      },
      { transform: 'perspective(600px) rotateX(0deg)' },
      { transform: 'perspective(600px) rotateX(0deg)', color: colors.primary },
    ],

    leave: [
      { color: colors.primary },
      { innerHeight: 0 },
      { opacity: 0, height: 0 },
    ],
    update: { color: colors.primary },
  })

  const reset = useCallback(() => {
    ref.current.map(clearTimeout)
    ref.current = []
    setItems([])
    ref.current.push(
      setTimeout(
        () =>
          setItems([
            'Data Scientist',
            'Machine Learning Engineer',
            'AI Researcher',
          ]),
        2000
      )
    )
    ref.current.push(
      setTimeout(() => setItems(['Data Scientist', 'AI Researcher']), 5000)
    )
    ref.current.push(
      setTimeout(
        () =>
          setItems([
            'Data Scientist',
            'Machine Learning Engineer',
            'AI Researcher',
          ]),
        8000
      )
    )
    ref.current.push(setTimeout(() => setItems(['Data Scientist']), 11000))
  }, [])

  useEffect(() => reset(), [reset])

  return (
    <>
      {transitions.map(({ item, props: { innerHeight, ...rest }, key }) => (
        <animated.div
          className="transitions-item"
          key={key}
          style={rest}
          onClick={reset}
        >
          <animated.h2
            style={{
              overflow: 'hidden',
              height: innerHeight,
              fontSize: fonts.size.homeSubtitle,
              fontWeight: 'normal',
              margin: 0,
            }}
          >
            {item}
          </animated.h2>
        </animated.div>
      ))}
    </>
  )
}

export default Subtitle
