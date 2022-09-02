import './App.css';
import Book from './components/Book';
import FormBook from './pages/FormBook';

export default function App() {

  let livros = [
    { id: 1, title: "O senhor dos aneis" },
    { id: 2, title: 'O poderoso chefão' },
    { id: 3, title: 'Carrie, A estranha' },
    { id: 4, title: 'Carrie, A estranha' },
    { id: 5, title: 'Platoon' }
  ]

  return (
    <div>
      <FormBook />
      <h1>Livros</h1>

      {
        livros.map(element => {
          console.log(element.title)
          return <Book key={element.id} title={element.title} />
        })
      }
    </div>
  )
};


