/**
 * Manage observable sequentially with concat
 * Good for managing http request
 * @module Experiences/Experience0
 */

import React, { Profiler } from 'react'
import { interval, concat } from 'rxjs'
import { take } from 'rxjs/operators'

const serie1$ = interval(1000).pipe(take(10))
const serie2$ = interval(200).pipe(take(6))
const result$ = concat(serie1$, serie2$)

const observer = {
  next: (v) => console.log(v),
  complete: () => console.log('Done')
}

const onRender = (id, phase, actualDuration) => {
  console.log(id, phase, actualDuration)
}

/**
 * @function Experience
 * Manage observable sequentially with concat
 * Good for managing http request
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
