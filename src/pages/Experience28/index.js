/**
 * @module Experiences/Experience28
 */

import React, { Profiler } from 'react'
import { interval } from 'rxjs'
import { take, finalize } from 'rxjs/operators'

const onRender = (id, phase, actualDuration) => {
  console.log(id, phase, actualDuration)
}

const obs1 = interval(1000)

const source$ = obs1.pipe(
  take(5),
  finalize(() => console.log('Sequence complete'))
)

const observer = {
  next: (v) => console.log(v),
  complete: () => console.log('Completed')
}

/**
 * @function Experience
 * @return {Object} Return the dom of the Experience
 */
const Experience = () => {
  const handleClick = () => {
    source$.subscribe(observer)
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
