import axios from 'axios'
import React from 'react'
import { useState } from 'react'

export default function Edit({fetch, edit, setEdit}) {
    const [input, setInput] = useStatee({
        nama : '',
        guru : '',
        kelas :''
      })
 

    // handleChange
    const handleChange = (e) =>{
        if(e.target.name === "nama") {
          setInput({...input, nama: e.target.value})
        }else if(e.target.name === "guru") {
          setInput({...input, guru: e.target.value})
        }else if(e.target.name === "kelas") {
          setInput({...input, kelas: e.target.value})
        }
      }
     

    // handle submit
    const handleSubmit = async(e)=>{
        e.preventDefault()
        try {
          const respons = await axioss.post('http://localhost:3000/sekolah', {
            nama : input.nama,
            guru : input.guru,
            kelas :input.kelas
          })
          fetch()

        //   code ini membuat untuk refresh
          setInput({
            nama : '',
            guru : '',
            kelas :''
          })
          
          console.log("berhasil");
        }
         catch (error) {
          console.log(error);
        }
      }
  return (
    <div>
        <div className="form">
            <h2>Edit Form</h2>
            <form className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
            <div className="mb-4">
          <h1 className='mt-3 text-xl font-semibold'>Create Form</h1>
        <label
          className="block text-gray-700 font-bold mb-2"
          htmlFor="username"
        >
          Masukan Nama siswa
        </label>
        <input
          className="shadow appearance-none border rounded w-[300px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="username"
          type="text"
          placeholder="masukan nama siswa"
          name='nama'
          onChange={handleChange}
          value={input.nama}
        />
      </div>
      <div className="mb-6">
        <label
          className="block text-gray-700 font-bold mb-2"
        
        >
        masukan wali
        </label>
        <input
          className="shadow appearance-none border rounded w-[300px] py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          id="password"
          type="text"
          placeholder="masukan nama wali kelas"
          name='guru'
          onChange={handleChange}
          value={input.guru}
        />
      </div>
      <div className="mb-6">
        <label
          className="block text-gray-700 font-bold mb-2"
     
        >
          masukan Kelas
        </label>
        <input
          className="shadow appearance-none border rounded w-[300px] py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          id="password"
          type="text"
          placeholder="masukan kelas"
          name='kelas'
          onChange={handleChange}
          value={input.kelas}
        />
      </div>
      <div className="flex items-center justify-between">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
          onClick={handleSubmit}
        >
          Save
        </button>
      
      </div>
            </form>
        </div>
    </div>
  )
}
