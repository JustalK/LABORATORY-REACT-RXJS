/**
 * @module Experiences/Experience0
 */

import React, { Profiler } from 'react'
import { of, pipe } from 'rxjs'
import { map, first, filter } from 'rxjs/operators'

const onRender = (id, phase, actualDuration) => {
  console.log(id, phase, actualDuration)
}

const customOperator = () => {
  return pipe(
    filter((v) => !(v % 2)),
    map((n) => 3 * n + 1)
  )
}

/**
 * @function Experience
 * @return {Object} Return the dom of the Experience
 */
const Experience = () => {
  const handleClick = () => {
    of(1, 2, 3)
      .pipe(map((x) => x * x))
      .subscribe((v) => console.log(`value: ${v}`))
  }
  const handleClickFirst = () => {
    of(1, 2, 3)
      .pipe(first())
      .subscribe((v) => console.log(`value: ${v}`))
  }
  const handleClickMultiplePise = () => {
    of(1, 2, 3)
      .pipe(
        first(),
        map((x) => x * 2)
      )
      .subscribe((v) => console.log(`value: ${v}`))
  }
  const handleClickCustomOperator = () => {
    of(1, 2, 3)
      .pipe(customOperator())
      .subscribe((v) => console.log(`value: ${v}`))
  }
  return (
    <Profiler id="Experience" onRender={onRender}>
      <div>Look in the console</div>
      <div>
        <button onClick={handleClick}>Call the of</button>
      </div>
      <div>
        <button onClick={handleClickFirst}>Call the of with first</button>
      </div>
      <div>
        <button onClick={handleClickMultiplePise}>
          Call the of with multiple pipe chained
        </button>
      </div>
      <div>
        <button onClick={handleClickCustomOperator}>
          Call the of with custom operators
        </button>
      </div>
    </Profiler>
  )
}

export default Experience
