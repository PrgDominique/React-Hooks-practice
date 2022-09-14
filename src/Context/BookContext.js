import React, { createContext, useState} from 'react'


export const BookContext = createContext()

const BookContextProvider = (props) => {
   const  [books, setBooks] = useState([{title: 'aba', id:1}])
    return ( 
        <BookContext.Provider value={{books}}>
            {props.children}
        </BookContext.Provider>
     );
} 
 
export default BookContextProvider;