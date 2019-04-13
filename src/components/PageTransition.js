import React from 'react'
import { useTransition, animated, config } from 'react-spring'

const PageTransitions = (props) => {
  const { children, location, ...restProps} = props
  const transitions = useTransition(location, (location) => location.pathname, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: config.molasses
  })
  console.log(transitions)
  return (transitions.map(
    ({ item, props, key }) => {
    console.log(`key=${key}`)
    return (
      <animated.div key={key} style={props} {...restProps} >
        {children}
      </animated.div>
    )
  }))
}
export default PageTransitions