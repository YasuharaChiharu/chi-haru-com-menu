import { Environment, MeshReflectorMaterial } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import Frames from './Frames'

const MenuGallary = () => {
  const pexel = (id: number) =>
    `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260`
  const images = [
    // Front
    {
      position: [0, 0, 1.5],
      rotation: [0, 0, 0],
      url: '/cat_sake.jpeg',
      page: '/top',
    },
    // Back
    // {
    //   position: [-0.8, 0, -0.6],
    //   rotation: [0, 0, 0],
    //   url: pexel(416430),
    //   page: '/work',
    // },
    // {
    //   position: [0.8, 0, -0.6],
    //   rotation: [0, 0, 0],
    //   url: pexel(310452),
    //   page: '/top',
    // },
    // Left
    {
      position: [-1.75, 0, 0.25],
      rotation: [0, Math.PI / 2.5, 0],
      url: pexel(327482),
      page: '/work',
    },
    // {
    //   position: [-2.15, 0, 1.5],
    //   rotation: [0, Math.PI / 2.5, 0],
    //   url: pexel(325185),
    //   page: '/top',
    // },
    {
      position: [-2, 0, 2.75],
      rotation: [0, Math.PI / 2.5, 0],
      url: pexel(358574),
      page: '/top',
    },
    // Right
    {
      position: [1.75, 0, 0.25],
      rotation: [0, -Math.PI / 2.5, 0],
      url: pexel(227675),
      page: '/contact',
    },
    // {
    //   position: [2.15, 0, 1.5],
    //   rotation: [0, -Math.PI / 2.5, 0],
    //   url: pexel(911738),
    //   page: '/top',
    // },
    {
      position: [2, 0, 2.75],
      rotation: [0, -Math.PI / 2.5, 0],
      url: pexel(1738986),
      page: '/top',
    },
  ]

  return (
    <div style={{ width: '80vw', height: '80vh' }}>
      <Canvas dpr={[1, 1.5]} camera={{ fov: 70, position: [0, 2, 15] }}>
        <color attach="background" args={['#AA8']} />
        <fog attach="fog" args={['#AA8', 0, 15]} />
        <group position={[0, -0.5, 0]}>
          <Frames images={images} />
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
