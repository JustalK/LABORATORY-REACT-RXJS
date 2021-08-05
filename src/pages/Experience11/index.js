/**
 * @module Experiences/Experience0
 */

import React, { Profiler } from 'react'
import { Observable, asyncScheduler } from 'rxjs'
import { observeOn } from 'rxjs/operators'

const onRender = (id, phase, actualDuration) => {
  console.log(id, phase, actualDuration)
}

const observable = new Observable((subscriber) => {
  subscriber.next(1)
  subscriber.next(2)
  subscriber.next(3)
  subscriber.complete()
})

const observableWithScheduler = new Observable((subscriber) => {
  subscriber.next(1)
  subscriber.next(2)
  subscriber.next(3)
  subscriber.complete()
}).pipe(observeOn(asyncScheduler))

const observer = {
  next: (v) => console.log(`observerA: ${v}`),
  complete: () => console.log('Completed')
}

/**
 * @function Experience
 * @return {Object} Return the dom of the Experience
 */
const Experience = () => {
  const handleClick = () => {
    console.log('just before subscribe')
    const subscription = observable.subscribe(observer)
    console.log('just after subscribe')
    subscription.unsubscribe()
  }

  const handleClickScheduler = () => {
    console.log('just before subscribe')
    observableWithScheduler.subscribe(observer)
    console.log('just after subscribe')
  }

  return (
    <Profiler id="Experience" onRender={onRender}>
      <div>Look at the console</div>
      <button onClick={handleClick}>Call the Observable</button>
      <button onClick={handleClickScheduler}>
        Call the Observable with scheduler
      </button>
    </Profiler>
  )
}

export default Experience
