import React, { useEffect, useState } from 'react'
import {v1 as uuid} from 'uuid'
import NewSong from './NewSong'

const SongList = () => {
   
  const [songs, setSongs] =  useState([])
    const addSong = (title) => {
        setSongs([...songs,{ title, id: uuid()}])
    }
    const [count, setCount] = useState(2)
    useEffect(() => {
        console.log(songs);
    },[songs])
    return ( 
        <div className='song-list'>
            <ul>
                {songs.map(songs => {
                    return ( <li key={songs.id}>{songs.title}</li>)
                })}
            </ul>
         <NewSong addSong={addSong}/>
         <h1>{count}</h1>
         <button onClick={() => setCount(count + 1) }>Let's Count</button>
        </div>
     );
}


 
export default SongList;