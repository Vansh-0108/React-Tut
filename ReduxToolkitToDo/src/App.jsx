import './App.css'
import AddTodo from './components/AddTodo'
import ToDos from './components/ToDos'

function App() {

  return (
    <>
      <h1 className='font-bold text-gray-100'>Demo for ReduxToolkit</h1>
      <AddTodo />
      <ToDos />
    </>
  )
}

export default App
