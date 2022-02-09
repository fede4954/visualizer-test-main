import db from '../firebase/config'
import { collection, getDocs } from 'firebase/firestore/lite'
import { useState, useEffect } from 'react'


const Home = () => {
  const [points, setPoints] = useState('')
  const [materials, setMaterials] = useState('')
  const [loading, setLoading] = useState(true)


  const getList = async (colName) => {
    const col = collection(db, colName)
    const snapshot = await getDocs(col)
    const list = snapshot.docs.map((doc) => doc.data())
    return list
  }


  useEffect(() => {
    const getAllData = async () => {
      const pnts = await getList('points')
      const mats = await getList('materials')
      setPoints(pnts)
      setMaterials(mats)
      setLoading(false)
    }

    getAllData()
  }, [])

  useEffect(() => {
    console.log(points)
    console.log(materials)
  }, [materials, points])


  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2'>
      ESTUDIO CACTUS VISUALIZER TEST
    </div>
  )
}

export default Home
