import db from '../firebase/config'
import { collection, getDocs } from 'firebase/firestore/lite'
import { useState, useEffect } from 'react'
import Selector from '../components/Selector'
import Touch from '../components/Touch'


const Home = () => {
  const [materials, setMaterials] = useState('')
  const [floor, setFloor] = useState('')
  const [kitchen, setKitchen] = useState('')
  const [floorMenu, setFloorMenu] = useState(false)
  const [kitchenMenu, setKitchenMenu] = useState(false)
  const [loading, setLoading] = useState(true)


  const getData = async (colName) => {
    const col = collection(db, colName)
    const snapshot = await getDocs(col)
    return snapshot.docs.map((doc) => doc.data())
  }


  useEffect(() => {
    const getAllData = async () => {
      const mats = await getData('materials')
      setMaterials(mats)
      setLoading(false)
    }

    getAllData()
  }, [])


  return <div>
    {!loading && <div className="relative h-screen w-screen">
      <img
        src="https://firebasestorage.googleapis.com/v0/b/porcelanosa-partners-spaces.appspot.com/o/projects%2FdorptVQTHsbkYC60NSlt%2Fscenes%2F1567170849457-base?alt=media&token=cf8bcee2-bf89-4fd9-8bfd-9d4462348844"
        alt="Base image"
        className="fixed top-0 left-0 w-full h-full object-contain"
      />

      {floor && <img
        src={floor}
        alt="Floor"
        className="fixed top-0 left-0 w-full h-full object-contain"
      />}

      {kitchen && <img
        src={kitchen}
        alt="Kitchen"
        className="fixed top-0 left-0 w-full h-full object-contain"
      />}

      <Touch
        menu={floorMenu}
        setMenu={setFloorMenu}
        position={"absolute left-[25%] bottom-[35%] md:bottom-[27.5%] lg:left-[35%] lg:bottom-[5%]"}
      />

      {floorMenu && <Selector
        materials={materials[0].materials}
        setMaterial={setFloor}
      />}

      <Touch
        menu={kitchenMenu}
        setMenu={setKitchenMenu}
        position={"absolute left-[75%] bottom-[55%] lg:left-[70%] lg:bottom-[60%]"}
      />

      {kitchenMenu && <Selector
        materials={materials[1].materials}
        setMaterial={setKitchen}
      />}
    </div>}
  </div>
}

export default Home



