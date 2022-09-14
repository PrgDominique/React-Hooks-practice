import React, {useState} from 'react'

const AddBook = () => {
    const [addbooks, setAddbooks] = useState()
  
    const handleSubmit = (e) => {
        e.preventDefault()
        setAddbooks('')
    }
    return ( 
        <form onSubmit={handleSubmit}>
            <label>Books:</label>
            <input type="text" required />
            <input type="submit" onChange={(e) => addbooks(e.target.value)}/>
        </form>
     );
}
 
export default AddBook;