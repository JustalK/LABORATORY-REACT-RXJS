/**
 * @module Experiences/Experience0
 */

import React, { Profiler } from 'react'
import { Observable } from 'rxjs'

const onRender = (id, phase, actualDuration) => {
  console.log(id, phase, actualDuration)
}

const observable = new Observable((subscriber) => {
  subscriber.next(1)
  subscriber.next(2)
  subscriber.next(3)
  setTimeout(() => {
    subscriber.next(4)
    subscriber.complete()
  }, 1000)
})

/**
 * @function Experience
 * @return {Object} Return the dom of the Experience
 */
const Experience = () => {
  const handleClick = () => {
    observable.subscribe({
      next(x) {
        console.log(`got value ${x}`)
      },
      error(err) {
        console.error(`something wrong occurred: ${err}`)
      },
      complete() {
        console.log('done')
      }
    })
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
