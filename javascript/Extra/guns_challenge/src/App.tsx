import { useCallback, useState } from 'react'
import './App.css'

const debouncer = (fn: (...args: any[]) => void, delay: number) => {
  let timer: ReturnType<typeof setTimeout>;
  return function (...args: any[]) {
    clearTimeout(timer)
    timer = setTimeout(() => {
      fn(...args)
    }, delay);
  }
}
const throttler = (fn: (...args: any[]) => void, delay: number) => {
  let timer: ReturnType<typeof setTimeout> | null = null;
  return function (...args: any[]) {
    if (!timer) {
      fn(...args)
      timer = setTimeout(() => {
        timer = null;
      }, delay);
    }
  }
}
function App() {

  const [normal, setNormal] = useState(0)
  const [debounced, setDebounced] = useState(0)
  const [throttled, setThrottled] = useState(0)
  const handleNormal = () => {
    setNormal(prev => prev + 1)
  }

  const handleDebounce = useCallback(() => {
    setDebounced(prev => prev + 1)
  }, [])

  const handleThrottled = useCallback(() => {
    setThrottled(prev => prev + 1)
  }, [])

  const deb = useCallback(
    debouncer(handleDebounce, 1000),
    [handleDebounce]
  )
  const thr = useCallback(
    throttler(handleThrottled, 100),
    [handleThrottled]
  )

  return (
    <>
      <h1>3 Guns challenge</h1>
      <div>
        <div className="normal">
          <div className="count">
            Normal count: {normal}
          </div>
          <div className="box">
            <div className="guns">
              <button onClick={handleNormal}>shoot me</button>
            </div>
            <div className="bullet"></div>
          </div>
        </div>
        <div className="debounced">
          <div className="count">
            Debounced count: {debounced}
          </div>
          <div className="box">
            <div className="guns">
              <button onClick={deb}>shoot me</button>
            </div>
            <div className="bullet"></div>
          </div>
        </div>
        <div className="throttled">
          <div className="count">
            Throttled count: {throttled}
          </div>
          <div className="box">
            <div className="guns">
              <button onClick={thr}>shoot me</button>
            </div>
            <div className="bullet"></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
