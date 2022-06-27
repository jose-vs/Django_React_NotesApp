import React, {
    useState,
    useEffect
} from 'react'
import ListItem from '../components/ListItem'

const NotesListPage = () => {

    const [notes, setNotes] = useState([])

    useEffect(() => { 
        getNotes()
        
    }, [])

    let getNotes = async () => { 
        var response = await fetch('http://127.0.0.1:8000/api/notes/')
        var data = await response.json()
        setNotes(data)
    
    }

  return (
    <div>
       <div className="notes-list">
            {notes.map((note, index) => { 
                return <ListItem key={index} note={note}/>
            })}
       </div>
    </div>
  )
}

export default NotesListPage