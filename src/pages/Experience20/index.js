/**
 * @module Experiences/Experience0
 */

import React, { Profiler } from 'react'
import { timer, interval } from 'rxjs'

const onRender = (id, phase, actualDuration) => {
  console.log(id, phase, actualDuration)
}

/**
 * @function Experience
 * @return {Object} Return the dom of the Experience
 */
const Experience = () => {
  const handleClick = () => {
    timer(0, 1000).subscribe((n) => console.log('timer', n))
  }
  const handleClick2 = () => {
    interval(1000).subscribe((n) => console.log('interval', n))
  }
  return (
    <Profiler id="Experience" onRender={onRender}>
      <button onClick={handleClick}>
        Call Observable with interval then look console
      </button>
      <button onClick={handleClick2}>
        Call Observable with timer then look console (start directly)
      </button>
    </Profiler>
  )
}

export default Experience
