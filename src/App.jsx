import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Main from './components/Main';
import Nav from './components/Nav';
import ListBook from './components/ListBook';
import NewBook from './components/NewBook';
import BookEdit from './components/BookEdit';
import Foot from './components/Foot';


const App = ({ books }) => {
  const [book, setBook] = useState(books)

  const [editid, setEditid] = useState("");

  const [tempbook, setTempbook] = useState([...book])

  const [search, setSearch] = useState("");

  useEffect(() => {
    let filteredBooks = book.filter((b) => b.title.toLowerCase().includes(search.toLowerCase()) || b.author.toLowerCase().includes(search.toLowerCase()))
    setTempbook(filteredBooks);
  }, [search, book])



  return (

    <div className="container-fluid">
      <Router>
        <Nav
         search={search} setSearch={setSearch} />
        <Routes>
          <Route path='/' element={<Main />} />

          <Route path='/Book-List' element={<ListBook book={book} setBook={setBook} setEditid={setEditid} tempbook={tempbook} />} />


           <Route path='/Addbook' element={<NewBook book={book} setBook={setBook} />} />

           <Route path="/EditBook/:id" element={<BookEdit book={book} setBook={setBook} />} />
       
        </Routes>


      </Router>

      <Foot />

    </div>
  )
}

export default App