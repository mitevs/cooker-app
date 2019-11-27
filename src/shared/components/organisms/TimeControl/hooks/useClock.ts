import { useState, useEffect } from 'react'

interface Clock {
  hours: number
  minutes: number
  setHours: (number) => void
  setMinutes: (number) => void
}

// unit-test this hook
export const useClock = (initHours = 0, initMinutes = 0): Clock => {
  const [hours, updateHours] = useState(initHours)
  const [minutes, updateMinutes] = useState(initMinutes)

  function setHours(h = 0): void {
    if (h > -1 && h < 25) {
      updateHours(h)
    }
  }

  function setMinutes(m = 0): void {
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

  useEffect(() => {
    setHours(initHours)
  }, [initHours])

  useEffect(() => {
    setMinutes(initMinutes)
  }, [initMinutes])

  return {
    hours,
    minutes,
    setHours,
    setMinutes,
  }
}
