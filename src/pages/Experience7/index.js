/**
 * @module Experiences/Experience0
 */

import React, { Profiler } from 'react'
import { Observable, Subject } from 'rxjs'

const onRender = (id, phase, actualDuration) => {
  console.log(id, phase, actualDuration)
}

const subject = new Subject()
subject.subscribe({
  next: (v) => console.log(`observerA: ${v}`)
})
subject.subscribe({
  next: (v) => console.log(`observerB: ${v}`)
})

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
    observable.subscribe(subject)
  }
  return (
    <Profiler id="Experience" onRender={onRender}>
      <button onClick={handleClick}>
        Call the subject next and then look at the console
      </button>
    </Profiler>
  )
}

export default Experience
