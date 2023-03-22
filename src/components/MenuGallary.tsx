import { Environment, MeshReflectorMaterial } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { useEffect, useState } from 'react'
import Frames from './Frames'

export type ImageType = {
  position: [number, number, number]
  rotation: [number, number, number]
  image: string
  page: string
}

const MenuGallary = () => {
  const [menuPanels, setMenuPanels] = useState<ImageType[]>([])
  useEffect(() => {
    setMenuPanels(images)
  }, [])

  const images: ImageType[] = [
    // Front
    {
      position: [0, 0, 1.5],
      rotation: [0, 0, 0],
      image: 'Images/Top.png',
      page: '/top',
    },
    // Left
    {
      position: [-1.0, 0, 2.0],
      rotation: [0, Math.PI / 4, 0],
      image: 'Images/Work.png',
      page: '/work',
    },
    {
      position: [-2, 0, 2.75],
      rotation: [0, Math.PI / 2.5, 0],
      image: 'Images/Bike.png',
      page: '/top',
    },
    // Right
    {
      position: [1.0, 0, 2],
      rotation: [0, -Math.PI / 4, 0],
      image: 'Images/App.png',
      page: '/iphoneApp',
    },
    {
      position: [2, 0, 2.75],
      rotation: [0, -Math.PI / 2.5, 0],
      image: 'Images/Skills.png',
      page: '/skills',
    },
  ]

  return (
    <div style={{ width: '80vw', height: '60vh' }}>
      <Canvas dpr={[1, 1.5]} camera={{ fov: 70, position: [0, 2, 15] }}>
        <color attach="background" args={['#AA8']} />
        <fog attach="fog" args={['#AA8', 0, 15]} />
        <group position={[0, -0.5, 0.5]}>
          <Frames images={menuPanels} />
          <mesh rotation={[-Math.PI / 2, 0, 0]}>
            <planeGeometry args={[50, 50]} />
            <MeshReflectorMaterial
              blur={[300, 100]}
              resolution={2048}
              mixBlur={1}
              mixStrength={50}
              roughness={1}
              depthScale={1.2}
              minDepthThreshold={0.4}
              maxDepthThreshold={1.4}
              color="#080804"
              metalness={0.5}
              mirror={0}
            />
          </mesh>
        </group>
        <Environment preset="city" />
      </Canvas>
    </div>
  )
}

export default MenuGallary
