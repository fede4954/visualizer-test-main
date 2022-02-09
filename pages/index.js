import db from '../firebase/config'
import { collection, getDocs } from 'firebase/firestore/lite'
import { useState, useEffect } from 'react'
import Selector from '../components/Selector'


const Home = () => {
  const [points, setPoints] = useState('')
  const [materials, setMaterials] = useState('')
  const [floor, setFloor] = useState('')
  const [kitchen, setKitchen] = useState('')
  const [loading, setLoading] = useState(true)


  const getData = async (colName) => {
    const col = collection(db, colName)
    const snapshot = await getDocs(col)
    return snapshot.docs.map((doc) => doc.data())
  }


  useEffect(() => {
    const getAllData = async () => {
      const pnts = await getData('points')
      const mats = await getData('materials')
      setPoints(pnts)
      setMaterials(mats)
      setLoading(false)
    }

    getAllData()
  }, [])


  return <div className="flex flex-col items-center justify-center min-h-screen">
    {!loading && <>
      <Selector
        materials={materials[0].materials}
        setMaterial={setFloor}
      />

      <Selector
        materials={materials[1].materials}
        setMaterial={setKitchen}
      />

      <img
        src="https://firebasestorage.googleapis.com/v0/b/porcelanosa-partners-spaces.appspot.com/o/projects%2FdorptVQTHsbkYC60NSlt%2Fscenes%2F1567170849457-base?alt=media&token=cf8bcee2-bf89-4fd9-8bfd-9d4462348844"
        alt="Base image"
        width="500px"
        height="750px"
        className="absolute top-0 left-0"
      />

      {floor && <img
        src={floor}
        alt="Floor"
        width="500px"
        height="750px"
        className="absolute top-0 left-0 z-50"
      />}

      {kitchen && <img
        src={kitchen}
        alt="Kitchen"
        width="500px"
        height="750px"
        className="absolute top-0 left-0 z-50"
      />}
    </>}
  </div>
}

export default Home

