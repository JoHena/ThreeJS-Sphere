import {Html, useProgress } from '@react-three/drei'

const CanvasLoader = () => {
    const { progress } = useProgress()
    console.log(progress)
  
    return (
        <Html>
            <h1 
                style={{color: 'white'}}
                className='text-white font-bold text-2xl'>{progress.toFixed(2)}%</h1>
        </Html>
  )
}

export default CanvasLoader