/**
 * @module Experiences/Experience0
 */

import React, { Profiler, useRef } from 'react'
import { BehaviorSubject, interval } from 'rxjs'

const onRender = (id, phase, actualDuration) => {
  console.log(id, phase, actualDuration)
}

const observable = interval(2000)
const subject = new BehaviorSubject(0)

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
    observable.subscribe(subject)
  }

  const handleSubscribeA = () => {
    subscriptionA.current = subject.subscribe(observerA)
  }

  const handleSubscribeB = () => {
    subscriptionB.current = subject.subscribe(observerB)
  }

  const handleUnsubscribe = () => {
    subscriptionA.current.unsubscribe()
    subscriptionB.current.unsubscribe()
  }

  return (
    <Profiler id="Experience" onRender={onRender}>
      <button onClick={handleClick}>
        Wait 5s, call the Observable and then look at the console
      </button>
      <div>
        Subscribe an observer to the subject and will return the curent value of
        observable
      </div>
      <button onClick={handleSubscribeA}>SubscribeA</button>
      <button onClick={handleSubscribeB}>SubscribeB</button>
      <button onClick={handleUnsubscribe}>
        SubscribeB and directly return the current value of the subject
      </button>
    </Profiler>
  )
}

export default Experience
