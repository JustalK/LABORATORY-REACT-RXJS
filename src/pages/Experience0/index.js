/**
 * @module Experiences/Experience0
 */

import React, { Profiler } from 'react'

const onRender = (id, phase, actualDuration) => {
  console.log(id, phase, actualDuration)
}

/**
 * @function Experience
 * @return {Object} Return the dom of the Experience
 */
const Experience = () => {
  return (
    <Profiler id="Experience" onRender={onRender}>
      <div>Look at the console</div>
    </Profiler>
  )
}

export default Experience
