import React from 'react'
import clamp from 'lodash-es/clamp'
import { useSpring, animated } from 'react-spring'
import { useGesture } from 'react-with-gesture'

function Pull(props) {
  const { children, ...restProps } = props
  const [{ xy }, set] = useSpring(() => ({ xy: [0, 0] }))
  const bind = useGesture(({ down, delta, velocity }) => {
    velocity = clamp(velocity, 1, 8)
    set({
      xy: down ? delta : [0, 0],
      config: { mass: velocity, tension: 500 * velocity, friction: 50 },
    })
  })
  return (
    <animated.div
      className="me"
      {...bind()}
      {...restProps}
      style={{
        transform: xy.interpolate((x, y) => `translate3d(${x}px,${y}px,0)`),
      }}
    >
      {children}
    </animated.div>
  )
}

export default class Avatar extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Pull>
        <div className="avatar avatar-fit">
          <div className="color" />
          <div className="eyes"> </div>
          <div className="mouth"> </div>
        </div>
      </Pull>
    )
  }
}
