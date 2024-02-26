import Header from './components/Header';
import Footer from './components/Footer';
import Popup from './components/Popup';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Popup/>
      <Footer />
    </div>
  );
}

export default App;
