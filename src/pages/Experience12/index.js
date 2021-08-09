/**
 * @module Experiences/Experience0
 */

import React, { Profiler } from 'react'
import { of, concat } from 'rxjs'

const serie1$ = of(1, 2, 3)
const serie2$ = of(4, 5, 6)
const result$ = concat(serie1$, serie2$)

const observer = {
  next: (v) => console.log(v),
  completed: () => 'Done'
}

const onRender = (id, phase, actualDuration) => {
  console.log(id, phase, actualDuration)
}

/**
 * @function Experience
 * @return {Object} Return the dom of the Experience
 */
const Experience = () => {
  const handleClick = () => {
    result$.subscribe(observer)
    return () => {
      result$.unsubscribe()
    }
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
