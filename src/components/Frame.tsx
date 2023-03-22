import { useCursor, Image, Text } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { easing } from 'maath'
import { useRef, useState } from 'react'
import getUuid from 'uuid-by-string'
import { ImageType } from './MenuGallary'

export const GOLDENRATIO = 1.61803398875

const Frame = (props: ImageType) => {
  const { image, position, rotation } = props
  const imageRef = useRef<any>()
  const frame = useRef<any>()
  const id = localStorage.getItem('item_id') || ''
  const [hovered, hover] = useState(false)
  const [rnd] = useState(() => Math.random())
  const name = getUuid(image)
  const isActive = id === name
  useCursor(hovered)
  useFrame((state, dt) => {
    imageRef.current.material.zoom =
      2 + Math.sin(rnd * 10000 + state.clock.elapsedTime / 3)
    imageRef.current.material.opacity = hovered ? 0.7 : 1
    easing.damp3(
      imageRef.current.scale,
      [
        0.85 * (!isActive && hovered ? 0.85 : 1),
        0.9 * (!isActive && hovered ? 0.905 : 1),
        1,
      ],
      0.1,
      dt,
    )
    easing.dampC(
      frame.current?.material.color,
      hovered ? 'orange' : 'white',
      0.1,
      dt,
    )
  })
  return (
    <group position={position} rotation={rotation}>
      <mesh
        name={name}
        onPointerOver={(e) => (e.stopPropagation(), hover(true))}
        onPointerOut={() => hover(false)}
        scale={[1, GOLDENRATIO, 0.05]}
        position={[0, GOLDENRATIO / 2, 0]}
      >
        <boxGeometry />
        <meshStandardMaterial
          color="#151515"
          metalness={0.5}
          roughness={0.5}
          envMapIntensity={2}
        />
        <mesh
          ref={frame}
          raycast={() => null}
          scale={[0.9, 0.93, 0.9]}
          position={[0, 0, 0.2]}
          name={props.page}
        >
          <boxGeometry />
          <meshBasicMaterial toneMapped={false} fog={false} />
        </mesh>
        <Image
          raycast={() => null}
          ref={imageRef}
          position={[0, 0, 0.7]}
          url={image}
        />
      </mesh>
      <Text
        maxWidth={0.1}
        anchorX="left"
        anchorY="top"
        position={[0.55, GOLDENRATIO, 0]}
        fontSize={0.025}
      >
        {props.page}
      </Text>
    </group>
  )
}
export default Frame
