import './App.css';
import Book from './components/Book';

export default function App() {

  // let livros = [
  //   { id: 1, title: "O senhor dos aneis" },
  //   { id: 2, title: 'O poderoso chefão' },
  //   { id: 3, title: 'Carrie, A estranha' },
  //   { id: 4, title: 'Carrie, A estranha' },
  //   { id: 5, title: 'Platoon' }
  // ]

  // return (
  //   <>
  //     <h1>Livros</h1>
  //     {
  //       livros.map(element => {
  //         console.log(element.title)
  //           return <Book key = { element.id } title = { element.title } />
  // })
  //     }
  //   </>
  // )


let livros = ["O senhor dos aneis", 'O poderoso chefão','Carrie, A estranha', 'Platoon','Carrie, A estranha']


  return (
    <div>
      <h1>Livros</h1>
        {
          livros.map(element => <Book key={element} title={element}/>)
        }
    </div>
  );
}