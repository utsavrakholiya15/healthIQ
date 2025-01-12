import logo from './logo.svg';
import './App.css';
import Header from './shared/components/header';
import Home from './modules/home';
import Footer from './shared/components/footer';
import LoginPage from './modules/loginPage';
import Temp from './modules/temp';

function App() {
  return (
    <div>
       <Header/> 
      <Home/> 
      {/* <LoginPage/> */}
      <Footer/>
      {/* <Temp/> */}
    </div>
  );
}

export default App;
