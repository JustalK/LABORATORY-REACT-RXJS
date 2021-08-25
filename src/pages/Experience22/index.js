/**
 * @module Experiences/Experience0
 */

import React, { Profiler, useState } from 'react'
import { iif, of } from 'rxjs'

const onRender = (id, phase, actualDuration) => {
  console.log(id, phase, actualDuration)
}

/**
 * @function Experience
 * @return {Object} Return the dom of the Experience
 */
const Experience = () => {
  const [change, setChange] = useState(false)
  const changeFunction = () => {
    setChange((c) => !c)
  }
  const source$ = iif(() => change, of('first'), of('second'))

  const handleClick = () => {
    source$.subscribe((value) => console.log(value))
  }
  return (
    <Profiler id="Experience" onRender={onRender}>
      <button onClick={handleClick}>Call the observable with iff</button>
      <button onClick={changeFunction}>Change iif</button>
      <div>Click on the change and again on the hdandle click</div>
    </Profiler>
  )
}

export default Experience
