import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap';

function App() {
  return (
    <div className="App">
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          <div>Aluno: kayo fernando </div>
        </div>
      </Navbar>
    </div>
  );
}

export default App;
