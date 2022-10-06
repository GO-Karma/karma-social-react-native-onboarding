import { useCallback, useEffect } from 'react'

export const Loader = () => {
  const init = useCallback(() => {
    // write your logic
  }, [])

  useEffect(() => {
    init()
  }, [])

  return null
}
