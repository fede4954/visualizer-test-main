import db from '../firebase/config'
import { collection, getDocs } from 'firebase/firestore/lite'
import { useState, useEffect } from 'react'

const Home = () => {
  const getList = async (colName) => {
    const col = collection(db, colName)
    const snapshot = await getDocs(col)
    const list = snapshot.docs.map((doc) => doc.data())
    return list
  }


  useEffect(() => {
    console.log('points', getList('points'))
    console.log('materials', getList('materials'))
  }, [])


  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2'>
      ESTUDIO CACTUS VISUALIZER TEST
    </div>
  )
}

export default Home
