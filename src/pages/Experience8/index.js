/**
 * @module Experiences/Experience0
 */

import React, { Profiler, useRef } from 'react'
import { Subject, interval } from 'rxjs'
import { multicast, refCount } from 'rxjs/operators'

const onRender = (id, phase, actualDuration) => {
  console.log(id, phase, actualDuration)
}

const source = interval(500)
const subject = new Subject()
const refCounted = source.pipe(multicast(subject), refCount())

const observerA = {
  next: (v) => console.log(`observerA: ${v}`)
}
const observerB = {
  next: (v) => console.log(`observerB: ${v}`)
}

/**
 * @function Experience
 * @return {Object} Return the dom of the Experience
 */
const Experience = () => {
  const subscriptionA = useRef()
  const subscriptionB = useRef()
  const handleClick = () => {
    subscriptionA.current = refCounted.subscribe(observerA)
    setTimeout(() => {
      subscriptionB.current = refCounted.subscribe(observerB)
    }, 1100)
    setTimeout(() => {
      subscriptionA.current.unsubscribe()
    }, 1700)
    setTimeout(() => {
      subscriptionB.current.unsubscribe()
    }, 2500)
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
