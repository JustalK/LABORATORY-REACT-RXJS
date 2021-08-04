/**
 * @module Experiences/Experience0
 */

import React, { Profiler } from 'react'
import { Observable } from 'rxjs'

const onRender = (id, phase, actualDuration) => {
  console.log(id, phase, actualDuration)
}

const observer = {
  next: (x) => console.log(`Observer got a next value: ${x}`),
  error: (err) => console.error(`Observer got an error: ${err}`),
  complete: () => console.log('Observer got a complete notification')
}

const observable = new Observable((subscriber) => {
  subscriber.next(1)
  setTimeout(() => {
    subscriber.next(2)
    subscriber.complete()
  }, 1000)
})

/**
 * @function Experience
 * @return {Object} Return the dom of the Experience
 */
const Experience = () => {
  const handleClick = () => {
    const subscription = observable.subscribe(observer)
    return () => {
      subscription.unsubscribe()
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
