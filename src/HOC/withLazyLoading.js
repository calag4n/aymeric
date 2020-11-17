import { Suspense } from 'react'
import PropTypes from 'prop-types'

/**
 * High Order Component wich wraps with a Suspense component 
 * for lazy loading purpose
 * 
 * @component
 * @param {JSX.Element} WrappedComponent
 * @example
 * withLazyLoading(SectionComponent)
 */
const withLazyLoading = WrappedComponent => ({...props}) => {
  return (
    <Suspense fallback={<span hidden>.</span>}>
      <WrappedComponent {...props}/>
    </Suspense>
  )
}

withLazyLoading.propTypes = {
  WrappedComponent: PropTypes.element.isRequired,
}

export default withLazyLoading
