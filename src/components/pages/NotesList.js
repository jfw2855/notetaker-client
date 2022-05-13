import React,{useState,useEffect} from 'react'
import { getNotes } from '../../api/notes'

export const NotesList = () => {
    let [notes,setNotes] = useState([])

    useEffect(()=> {
        fetchNotes()

    },[])

    let fetchNotes = async () => {
        let response = await getNotes()
        let data = await response.data
        console.log('data!!',data)
        setNotes(data)
    }

  return (
    <div>
        notes
    </div>
  )
}
