import { ThreeEvent, useFrame } from '@react-three/fiber'
import { easing } from 'maath'
import { useRouter } from 'next/router'
import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import Frame from './Frame'

type ImageType = {
  position: [number, number, number]
  rotation: [number, number, number]
  url: string
  page: string
}

const Frames = (props: { images: ImageType[] }) => {
  const { images } = props
  const q = new THREE.Quaternion()
  const p = new THREE.Vector3()
  const GOLDENRATIO = 1.61803398875

  const ref = useRef<any>()
  const clicked = useRef<THREE.Object3D>()
  const id = localStorage.getItem('item_id') || undefined

  const [itemSelect, setItemSelect] = useState(false)
  const router = useRouter()

  useEffect(() => {
    clicked.current = ref.current?.getObjectByName(id)
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

    console.log('itemSelect:', itemSelect)
    // if (!itemSelect && localStorage.getItem('item_id')) {
    //   localStorage.removeItem('item_id')
    //   setItemSelect(false)
    // }

    if (clicked.current != e.object) {
      localStorage.setItem('item_id', e.object.name)
      setItemSelect(!itemSelect) //true状態で、隣の枠を選んだときに更新が発生しないので取り合えず...
    } else {
      localStorage.removeItem('item_id')
      // setItemSelect(false)
      router.push(e.object.children[0].name)
    }
  }

  const handlePointerMissed = () => {
    localStorage.removeItem('item_id')
    setItemSelect(false)
  }

  return (
    <group
      ref={ref}
      onClick={handleGroupClick}
      onPointerMissed={handlePointerMissed}
    >
      {images.map((props: ImageType) => (
        <Frame key={props.url} {...props} />
      ))}
    </group>
  )
}
export default Frames
