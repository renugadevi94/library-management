import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'



const books=[
  {
    id: 1,
    title: "Java Programming",
    image:
      "https://m.media-amazon.com/images/I/81BROimNPvL._AC_UF1000,1000_QL80_.jpg",
    author: "Wiley",
    edition:1,
    pages:"300"
},
{
  id: 3,
  title: "Fundamentals of Data Engineering",
  image:
    "https://image.ebooks.com/cover/210595152.jpg?width=332&height=500&quality=85",
  author: "Joe Reis, Matt Housley",
  edition:2,
  pages:"500"
}
]



ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
    <App books={books} />
  </React.StrictMode>
  
);
