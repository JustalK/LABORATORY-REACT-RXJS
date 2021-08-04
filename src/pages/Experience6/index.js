/**
 * @module Experiences/Experience0
 */

import React, { Profiler, useRef } from 'react'
import { interval } from 'rxjs'

const onRender = (id, phase, actualDuration) => {
  console.log(id, phase, actualDuration)
}

const observable1 = interval(400)
const observable2 = interval(300)

/**
 * @function Experience
 * @return {Object} Return the dom of the Experience
 */
const Experience = () => {
  const subscription = useRef()

  const handleClick = () => {
    subscription.current = observable1.subscribe((x) =>
      console.log(`first: ${x}`)
    )
    const childSubscription = observable2.subscribe((x) =>
      console.log(`second: ${x}`)
    )
    subscription.current.add(childSubscription)
  }

  const handleUnsubscribe = () => {
    subscription.current.unsubscribe()
  }

  return (
    <Profiler id="Experience" onRender={onRender}>
      <button onClick={handleClick}>
        Call the Observable and then look at the console
      </button>
      <button onClick={handleUnsubscribe}>Unsubscribe</button>
    </Profiler>
  )
}

export default Experience
