/**
 * @module Experiences/Experience0
 */

import React, { Profiler } from 'react'
import { iif, interval, of, EMPTY } from 'rxjs'
import { mergeMap } from 'rxjs/operators'

const onRender = (id, phase, actualDuration) => {
  console.log(id, phase, actualDuration)
}

const source$ = interval(1000).pipe(
  mergeMap((v) => iif(() => v % 2, of(v), EMPTY))
)

const observer = {
  next: (v) => console.log(v),
  complete: () => console.log('Complete')
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
