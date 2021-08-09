/**
 * @module Experiences/Experience0
 */

import React, { Profiler } from 'react'
import { interval, merge } from 'rxjs'
import { take } from 'rxjs/operators'

const serie1$ = interval(1000).pipe(take(10))
const serie2$ = interval(200).pipe(take(6))
const concurrent = 2
const result$ = merge(serie1$, serie2$, concurrent)

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
