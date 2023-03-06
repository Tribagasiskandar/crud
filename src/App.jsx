import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Edit from './Edit'
import Form from './Form'

export default function App() {

  const [users, setUsers] = useState([])
  const [edit, setEdit] = useState({})

  


  const fetch = async() => {
    
    try {
      const respon = await axios.get('http://localhost:3000/sekolah')
      console.log(respon.data);
      setUsers(respon.data)
    } catch (error) {
      console.log(error);
    }
  }

  const deleteUsers = async userId =>{
    try {
      const response = await axios.delete(`http://localhost:3000/sekolah/${userId}`)
      fetch()
    } catch (error) {
      console.log(error);
    }
  }


  useEffect(()=>{
    fetch()
  },[])
  return (
    <div>
      {
       Object.keys(edit).length === 0 ?
       <Form fetch={fetch} /> :
       <Edit fetch={fetch} edit={edit} setEdit={setEdit}/>
      }
      {/* list */}
      <table className="w-full border-collapse text-center">
  <thead className=''>
    <tr>
      <th className="py-2 px-3 bg-gray-100 text-center">Name</th>
      <th className="py-2 px-3 bg-gray-100 text-center">nama Wali Kelas</th>
      <th className="py-2 px-3 bg-gray-100 text-center">Kelas</th>
      <th className='py-1 px-1 bg-gray-100 text-center'>opsi</th>
    </tr>
  </thead>
  <tbody>
 {
 users.map((user) => (

   <tr key={user.id} className="bg-white">
   <td className="py-2 px-3 border">{user.nama}</td>
   <td className="py-2 px-3 border">{user.guru}</td>
   <td className="py-2 px-3 border">{user.kelas}</td>
   <td className='py-1 px-1 border'>
   <button onClick={() => deleteUsers(user.id) } className=' border bg-blue-700 p-2 text-white rounded-md'>Hapus</button>
   <button onClick={()=> setEdit(user)} className=' border bg-red-700 p-2 text-white rounded-md'>Edit</button>
   </td>
  
   </tr>

  
 )) }
   
  </tbody>
</table>

    </div>
  )
}
