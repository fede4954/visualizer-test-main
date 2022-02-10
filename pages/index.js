import db from '../firebase/config'
import { collection, getDocs } from 'firebase/firestore/lite'
import { useState, useEffect } from 'react'
import Selector from '../components/Selector'
import Touch from '../components/Touch'


const Home = () => {
  const [materials, setMaterials] = useState('')
  const [floor, setFloor] = useState('')
  const [kitchen, setKitchen] = useState('')
  const [floorSelector, setFloorSelector] = useState(false)
  const [kitchenSelector, setKitchenSelector] = useState(false)
  const [touch, setTouch] = useState(true)
  const [loading, setLoading] = useState(true)


  const getMaterials = async () => {
    const col = collection(db, 'materials')
    const snapshot = await getDocs(col)
    return snapshot.docs.map((doc) => doc.data())
  }

  const checkMenus = () => {
    if (!touch) {
      setTouch(true)
      setFloorSelector(false)
      setKitchenSelector(false)
    }
  }


  useEffect(() => {
    const setData = async () => {
      const mats = await getMaterials()
      setMaterials(mats)
      setLoading(false)
    }

    setData()
  }, [])


  return <div className="container">
    {!loading && <>
      <img
        src="https://firebasestorage.googleapis.com/v0/b/porcelanosa-partners-spaces.appspot.com/o/projects%2FdorptVQTHsbkYC60NSlt%2Fscenes%2F1567170849457-base?alt=media&token=cf8bcee2-bf89-4fd9-8bfd-9d4462348844"
        alt="Base image"
        className="fixed top-0 left-0 w-full h-full object-contain"
        onClick={() => checkMenus()}
      />

      {floor && <img
        src={floor}
        alt="Floor"
        className="fixed top-0 left-0 w-full h-full object-contain"
        onClick={() => checkMenus()}
      />}

      {kitchen && <img
        src={kitchen}
        alt="Kitchen"
        className="fixed top-0 left-0 w-full h-full object-contain"
        onClick={() => checkMenus()}
      />}

      {touch && <Touch
        menu={floorSelector}
        setMenu={setFloorSelector}
        position={"absolute left-[25%] bottom-[35%] md:bottom-[27.5%] lg:left-[35%] lg:bottom-[5%]"}
        setTouch={setTouch}
      />}


      {touch && <Touch
        menu={kitchenSelector}
        setMenu={setKitchenSelector}
        position={"absolute left-[75%] bottom-[55%] lg:left-[70%] lg:bottom-[60%]"}
        setTouch={setTouch}
      />}

      {floorSelector && <Selector
        materials={materials[0].materials}
        setMaterial={setFloor}
      />}

      {kitchenSelector && <Selector
        materials={materials[1].materials}
        setMaterial={setKitchen}
      />}

    </>}
  </div>
}

export default Home



