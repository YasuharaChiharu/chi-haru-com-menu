import { Environment, MeshReflectorMaterial } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import type { NextPage } from 'next'
import Head from 'next/head'
import Frames from '../../components/Frames'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>-- C.H.I --</title>
        <meta name='description' content='C.H.I WebPage' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <Screen />
      </main>

      <footer className={styles.footer}>
        <p>&copy; C.H.I All Right Reserved. 2023</p>
      </footer>
    </div>
  )
}

const Screen = () => {
  const pexel = (id: number) =>
    `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260`
  const images = [
    // Front
    { position: [0, 0, 1.5], rotation: [0, 0, 0], url: pexel(1103970) },
    // Back
    { position: [-0.8, 0, -0.6], rotation: [0, 0, 0], url: pexel(416430) },
    { position: [0.8, 0, -0.6], rotation: [0, 0, 0], url: pexel(310452) },
    // Left
    {
      position: [-1.75, 0, 0.25],
      rotation: [0, Math.PI / 2.5, 0],
      url: pexel(327482),
    },
    {
      position: [-2.15, 0, 1.5],
      rotation: [0, Math.PI / 2.5, 0],
      url: pexel(325185),
    },
    {
      position: [-2, 0, 2.75],
      rotation: [0, Math.PI / 2.5, 0],
      url: pexel(358574),
    },
    // Right
    {
      position: [1.75, 0, 0.25],
      rotation: [0, -Math.PI / 2.5, 0],
      url: pexel(227675),
    },
    {
      position: [2.15, 0, 1.5],
      rotation: [0, -Math.PI / 2.5, 0],
      url: pexel(911738),
    },
    {
      position: [2, 0, 2.75],
      rotation: [0, -Math.PI / 2.5, 0],
      url: pexel(1738986),
    },
  ]

  return (
    <div style={{ width: '80vw', height: '80vh' }}>
      <Canvas dpr={[1, 1.5]} camera={{ fov: 70, position: [0, 2, 15] }}>
        {/* <color attach='background' args={['#191920']} /> */}
        {/* <fog attach='fog' args={['#191920', 0, 15]} /> */}
        <color attach='background' args={['#AA8']} />
        <fog attach='fog' args={['#AA8', 0, 15]} />
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
              color='#080804'
              metalness={0.5}
              mirror={0}
            />
          </mesh>
        </group>
        <Environment preset='city' />
      </Canvas>
    </div>
  )
}

export default Home
