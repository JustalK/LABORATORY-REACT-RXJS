/**
 * @module Experiences/Experience0
 */

import React, { Profiler, useRef, useEffect } from 'react'
import { fromEvent, interval } from 'rxjs'
import { debounce, startWith, endWith, take } from 'rxjs/operators'

const observer = {
  next: (v) => console.log(v),
  complete: () => console.log('Done')
}

const onRender = (id, phase, actualDuration) => {
  console.log(id, phase, actualDuration)
}

/**
 * @function Experience
 * @return {Object} Return the dom of the Experience
 */
const Experience = () => {
  const inputRef = useRef()
  const changeRef = useRef()
  const subscriptionRef = useRef()

  useEffect(() => {
    changeRef.current = fromEvent(inputRef.current, 'keyup').pipe(
      debounce(() => interval(500)),
      take(2),
      startWith('Start Sub'),
      endWith('End Sub')
    )
  })

  const handleSubscribe = () => {
    subscriptionRef.current = changeRef.current.subscribe(observer)
  }

  const handleUnsubscribe = () => {
    subscriptionRef.current.unsubscribe()
  }

  return (
    <Profiler id="Experience" onRender={onRender}>
      <button onClick={handleSubscribe}>handleSubscribe</button>
      <button onClick={handleUnsubscribe}>handleUnsubscribe</button>
      <input type="text" ref={inputRef} />
    </Profiler>
  )
}

export default Experience
