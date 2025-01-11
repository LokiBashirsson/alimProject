import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import cls from './App.module.scss';
import { Main } from './components/main/page';
import { Doctors } from './components/doctors/page';
import { About } from './components/about/page';
import logo from './assets/logo.png';
import { DoctorPage } from './components/doctors/DoctorPage';

function App() {

  return (
    <BrowserRouter>
      <div className={cls.App}>
        <header className={cls.header}>
          <img src={logo} alt="" />
          <div>
            <Link to={'/'}>Главная</Link>
            <Link to={'/doctors'}>Доктора</Link>
            <Link to={'/about'}>О нас</Link>
          </div>
        </header>

        <main className={cls.main}>
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/doctors' element={<Doctors />} />
            <Route path='/about' element={<About />} />
            <Route path="/doctor/:id" element={<DoctorPage />} />
          </Routes>
        </main>

        <footer className={cls.footer}>
          <h1>Тех. служба</h1>
          <div>
            <p>Номер: +917096336561</p>
            <p>Майл: akbievalim0678@gmail.com</p>
            <p>Адрес: Агасиева 15е, Махачкала, РФ</p>
            <p>Хозяин сайта: Алим Акбиев</p>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  )
}

export default App
