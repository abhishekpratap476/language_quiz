import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BookStore from './components/Book/book';
import Trance from './components/Translator/translator';
import  MainPage from './components/Home/web';
import QuizApp from './components/quiz/Eng-Hin';
import CourseCatalog from './components/quiz/main';
import Login from './components/Login/login'; // Corrected import
import Register from './components/Register/register'; // Corrected import

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Set the Dashboard as the default route */}
        <Route path='/home' element={< MainPage/>} />
        <Route path='/corce' element={<CourseCatalog />} />
        <Route path='/quiz' element={<QuizApp />} />
        <Route path='/' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/book' element={<BookStore />} />
        <Route path='/translator' element={<Trance />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;