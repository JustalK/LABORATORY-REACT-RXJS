/**
 * @module Experiences/Experience27
 *
 * Use FromEventPattern when your event is of type EventHandler or the generic EventHandler<T>.
 * Use FromEvent when you're using a custom, non-generic event handler type.
 */

import React, { Profiler, useEffect } from 'react'
import { fromEventPattern } from 'rxjs'

const observer = {
  next: (v) => console.log(v),
  complete: () => console.log('Done')
}

const onRender = (id, phase, actualDuration) => {
  console.log(id, phase, actualDuration)
}

const addClickHandler = (handler) => {
  document.addEventListener('click', handler)
}

const removeClickHandler = (handler) => {
  document.removeEventListener('click', handler)
}

/**
 * @function Experience
 * @return {Object} Return the dom of the Experience
 */
const Experience = () => {
  useEffect(() => {
    const clicks = fromEventPattern(addClickHandler, removeClickHandler)
    clicks.subscribe(observer)
  }, [])

  return (
    <Profiler id="Experience" onRender={onRender}>
      <div>Click there on the document && look on the console</div>
    </Profiler>
  )
}

export default Experience
