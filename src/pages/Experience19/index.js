/**
 * @module Experiences/Experience0
 */

import React, { Profiler } from 'react'
import { interval, timer } from 'rxjs'
import { takeUntil } from 'rxjs/operators'

const onRender = (id, phase, actualDuration) => {
  console.log(id, phase, actualDuration)
}

const source = interval(1000)

/**
 * @function Experience
 * @return {Object} Return the dom of the Experience
 */
const Experience = () => {
  const handleClick = () => {
    const currentDate = new Date()
    const startOfNextMinute = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      currentDate.getDate(),
      currentDate.getHours(),
      currentDate.getMinutes(),
      currentDate.getSeconds() + 3
    )
    const result = source.pipe(takeUntil(timer(startOfNextMinute)))
    result.subscribe(console.log)
  }
  return (
    <Profiler id="Experience" onRender={onRender}>
      <button onClick={handleClick}>
        Call the Observable and console log for only 3s
      </button>
    </Profiler>
  )
}

export default Experience
