/**
 * @module Experiences/Experience0
 */

import React, { Profiler, useEffect, useRef } from 'react'
import { fromEvent } from 'rxjs'

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

  const handleClick = () => {
    console.log('Click EventListener')
  }

  useEffect(() => {
    const clicks = fromEvent(document, 'click')
    clicks.subscribe(observer)
    const change = fromEvent(inputRef.current, 'keyup')
    change.subscribe(observer)
    document.addEventListener('click', handleClick)
    return () => {
      document.returnEventListener('click', handleClick)
    }
  }, [])

  return (
    <Profiler id="Experience" onRender={onRender}>
      <div>Click there on the document && look on the console</div>
      <input type="text" ref={inputRef} />
    </Profiler>
  )
}

export default Experience
