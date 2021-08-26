/**
 * @module Experiences/Experience0
 */

import React, { Profiler, useRef } from 'react'
import { interval } from 'rxjs'
import { mapTo, raceWith } from 'rxjs/operators'

const onRender = (id, phase, actualDuration) => {
  console.log(id, phase, actualDuration)
}

const obs1 = interval(1000).pipe(mapTo('fast one'))
const obs2 = interval(3000).pipe(mapTo('medium one'))
const obs3 = interval(5000).pipe(mapTo('slow one'))

const source$ = obs2.pipe(raceWith(obs1, obs3))

const observer = {
  next: (v) => console.log(v),
  complete: () => console.log('Completed')
}

/**
 * @function Experience
 * @return {Object} Return the dom of the Experience
 */
const Experience = () => {
  const subscription = useRef(null)
  const handleClick = () => {
    subscription.current = source$.subscribe(observer)
  }
  const handleStop = () => {
    subscription.current.unsubscribe()
  }
  return (
    <Profiler id="Experience" onRender={onRender}>
      <button onClick={handleClick}>
        Call the race and then look at the console
      </button>
      <button onClick={handleStop}>Stop everything</button>
    </Profiler>
  )
}

export default Experience
