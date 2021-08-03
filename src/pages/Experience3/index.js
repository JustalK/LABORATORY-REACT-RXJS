/**
 * @module Experiences/Experience0
 */

import React, { Profiler, useRef } from 'react'
import { Observable } from 'rxjs'

const onRender = (id, phase, actualDuration) => {
  console.log(id, phase, actualDuration)
}

const observable = new Observable((subscriber) => {
  setInterval(() => {
    subscriber.next('NEW CALL')
  }, 1000)
})

/**
 * @function Experience
 * @return {Object} Return the dom of the Experience
 */
const Experience = () => {
  const subscription = useRef()
  const handleClick = () => {
    subscription.current = observable.subscribe({
      next(x) {
        console.log(`${x}`)
      }
    })
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
