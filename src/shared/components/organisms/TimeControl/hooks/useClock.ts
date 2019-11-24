import { useState, useEffect } from 'react'

// unit-test this hook
export default (initHours = 0, initMinutes = 0) => {
  const [hours, updateHours] = useState(initHours)
  const [minutes, updateMinutes] = useState(initMinutes)

  useEffect(() => {
    setHours(initHours)
  }, [initHours])

  useEffect(() => {
    setMinutes(initMinutes)
  }, [initMinutes])

  function setHours(h = 0) {
    if (h > -1 && h < 25) {
      updateHours(h)
    }
  }

  function setMinutes(m = 0) {
    if (m < 0 && hours > 0) {
      updateHours(hours - 1)
      updateMinutes(59)
    } else if (m > 59 && hours < 24) {
      updateHours(hours + 1)
      updateMinutes(0)
    } else if (m > -1 && m < 60) {
      updateMinutes(m)
    }
  }

  return {
    hours,
    minutes,
    setHours,
    setMinutes,
  }
}
