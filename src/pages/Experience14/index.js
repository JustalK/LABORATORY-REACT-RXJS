/**
 * @module Experiences/Experience0
 */

import React, { Profiler } from 'react'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'

const onRender = (id, phase, actualDuration) => {
  console.log(id, phase, actualDuration)
}

const data$ = Observable.create(async (observer) => {
  const call1 = await fetch('https://randomuser.me/api/')
  const firstUser = await call1.json()
  observer.next(firstUser)
  const call2 = await fetch('https://randomuser.me/api/')
  const secondUser = await call2.json()
  observer.next(secondUser)
  observer.complete()
})

const obs = data$.pipe(map((v) => v.results[0]))

const observer = {
  next: (v) => console.log(v),
  complete: () => console.log('Done')
}

/**
 * @function Experience
 * @return {Object} Return the dom of the Experience
 */
const Experience = () => {
  const handleClick = () => {
    obs.subscribe(observer)
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
