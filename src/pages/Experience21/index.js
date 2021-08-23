/**
 * @module Experiences/Experience0
 */

import React, { Profiler } from 'react'
import { interval, firstValueFrom } from 'rxjs'

const onRender = (id, phase, actualDuration) => {
  console.log(id, phase, actualDuration)
}

const source$ = interval(1000)

/**
 * @function Experience
 * @return {Object} Return the dom of the Experience
 */
const Experience = () => {
  const handleClick = async () => {
    // firstValueFrom subscribe to the Observable
    const rsl = await firstValueFrom(source$)
    console.log(rsl)
  }
  return (
    <Profiler id="Experience" onRender={onRender}>
      <button onClick={handleClick}>
        Call the Observable and then look at the console
      </button>
    </Profiler>
  )
}

export default Experience
