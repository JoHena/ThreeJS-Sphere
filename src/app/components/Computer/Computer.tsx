'use client'
import React from 'react'
import { Suspense, useState, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'
import CanvasLoader from '../CanvasLoader/CanvasLoader'
// import CanvasLoader from './CanvasLoader' 

const Computer = () => {
    const computer = useGLTF('/desktop_pc/scene.gltf')
  return (
    <mesh>
        <hemisphereLight intensity = {0.15} 
        groundColor={"black"}
        />
        <spotLight 
        intensity = {1}
        angle = {0.12}
        penumbra = {1}
        position = {[-10,10,10]}
        castShadow
        shadow-mapSize = {1024}
        
        />
        <pointLight intensity={0.5} position={[0,20,0]}/>
        <primitive object={computer.scene} 
        scale={0.75}
        position={[0,-2.25, -1.5]}
        rotation={[-0.01,-0.2,-0.1]}
        />
        </mesh>
  )
}

const ComputerCanvas = () => {
    return (
        <Canvas frameloop='demand'
        shadows 
        camera={{position: [20,3,5], fov: 25 }}
        gl={{preserveDrawingBuffer: true}}>

            <Suspense fallback={<CanvasLoader />}>
                <OrbitControls enableZoom = {false} 
                maxPolarAngle={Math.PI / 2}
                minPolarAngle={Math.PI / 2} />
                
                <Computer />
            </Suspense>


            <Preload all />
        </Canvas>
    )
}

export default ComputerCanvas