/**
 * @module Experiences/Experience26
 */

import React, { Profiler, useEffect } from 'react'
import { fromEvent, interval } from 'rxjs'
import { withLatestFrom } from 'rxjs/operators'

const observer = {
  next: (v) => console.log(v),
  complete: () => console.log('Done')
}

const onRender = (id, phase, actualDuration) => {
  console.log(id, phase, actualDuration)
}

const timer = interval(1000)

/**
 * @function Experience
 * @return {Object} Return the dom of the Experience
 */
const Experience = () => {
  useEffect(() => {
    const clicks = fromEvent(document, 'click')
    const result = clicks.pipe(withLatestFrom(timer))
    result.subscribe(observer)
  }, [])

  return (
    <Profiler id="Experience" onRender={onRender}>
      <div>Click there on the document && look on the console</div>
    </Profiler>
  )
}

export default Experience
