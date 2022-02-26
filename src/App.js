import './App.css';
import NavBar from './components/NavBar.js';
import TituloPrincipal from './components/TituloPrincipal';
import ItemListContainer from './container/ItemListContainer.js';


function App() {
  return (
      <>
      <NavBar></NavBar>

      <TituloPrincipal></TituloPrincipal>

      <ItemListContainer></ItemListContainer>
      </>
    
  );
}

export default App;
