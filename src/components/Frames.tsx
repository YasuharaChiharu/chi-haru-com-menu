import { ThreeEvent, useFrame } from '@react-three/fiber'
import { easing } from 'maath'
import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { useLocation, useRoute } from 'wouter'
import Frame from './Frame'

type ImageType = {
  position: [number, number, number]
  rotation: [number, number, number]
  url: string
  page: string
}

const Frames = (props: { images: [ImageType] }) => {
  const { images } = props
  const q = new THREE.Quaternion()
  const p = new THREE.Vector3()

  const GOLDENRATIO = 1.61803398875

  const ref = useRef<group>()
  const clicked = useRef<THREE.Object3D>()
  const [, params] = useRoute('/item/:id')

  const [, setLocation] = useLocation()
  useEffect(() => {
    clicked.current = ref.current?.getObjectByName(params?.id ?? 'no-id')
    if (clicked.current) {
      clicked.current.parent?.updateWorldMatrix(true, true)
      clicked.current.parent?.localToWorld(p.set(0, GOLDENRATIO / 2, 1.25))
      clicked.current.parent?.getWorldQuaternion(q)
    } else {
      p.set(0, 0, 5.5)
      q.identity()
    }
  })
  useFrame((state, dt) => {
    easing.damp3(state.camera.position, p, 0.4, dt)
    easing.dampQ(state.camera.quaternion, q, 0.4, dt)
  })

  const handleGroupClick = (e: ThreeEvent<MouseEvent>): void => {
    e.stopPropagation()
    if (clicked.current != e.object) {
      setLocation('/item/' + e.object.name)
      console.log(e.object.children[0].name)
    } else {
      // setLocation(e.object.children[0].name)
      window.location.href = e.object.children[0].name
    }
  }

  return (
    <group
      ref={ref}
      onClick={handleGroupClick}
      onPointerMissed={() => setLocation('/')}
    >
      {images.map((props: ImageType) => (
        <Frame key={props.url} {...props} />
      ))}
    </group>
  )
}
export default Frames
