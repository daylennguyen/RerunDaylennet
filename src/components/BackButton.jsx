import React from 'react'
export default () => {
  return (
    <a
      onClick={() => {
        console.log(window.location.href)
        window.history.go(-1)
      }}
      className='button back-margbot'
    >
      Back
    </a>
  )
}
