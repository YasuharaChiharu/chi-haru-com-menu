import { useFrame } from '@react-three/fiber'
import { easing } from 'maath'
import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { useLocation, useRoute } from 'wouter'
import Frame from './Frame'

// type ImagesType = {
//   // position: [0, 0, 1.5], rotation: [0, 0, 0], url: pexel(1103970)
//     position: [number, number, number],
//     rotation: [number, number, number],
//     rul:string
// }

const Frames = ({
  images,
  q = new THREE.Quaternion(),
  p = new THREE.Vector3(),
}) => {
  const GOLDENRATIO = 1.61803398875

  const ref = useRef<any>()
  const clicked = useRef<any>()
  const [, params] = useRoute('/item/:id')
  const [, setLocation] = useLocation()
  useEffect(() => {
    clicked.current = ref.current.getObjectByName(params?.id)
    if (clicked.current) {
      clicked.current.parent.updateWorldMatrix(true, true)
      clicked.current.parent.localToWorld(p.set(0, GOLDENRATIO / 2, 1.25))
      clicked.current.parent.getWorldQuaternion(q)
    } else {
      p.set(0, 0, 5.5)
      q.identity()
    }
  })
  useFrame((state, dt) => {
    easing.damp3(state.camera.position, p, 0.4, dt)
    easing.dampQ(state.camera.quaternion, q, 0.4, dt)
  })
  return (
    <group
      ref={ref}
      onClick={(e) => (
        e.stopPropagation(),
        setLocation(
          clicked.current === e.object ? '/' : '/item/' + e.object.name,
        )
      )}
      onPointerMissed={() => setLocation('/')}
    >
      {images.map(
        (props:any) => <Frame key={props.url} {...props} /> /* prettier-ignore */,
      )}
    </group>
  )
}
export default Frames
