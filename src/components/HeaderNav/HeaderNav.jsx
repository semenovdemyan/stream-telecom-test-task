import { NavLink } from 'react-router-dom';
// import './HeaderNav.css';

export default function HeaderNav() {
  return (
    <header className="header">
      <div className="container header-container">
				<nav className="header-nav__menu">
        <NavLink to="/" className="header-nav__link">
          Начальная страница
        </NavLink>

        <NavLink to="/page-first" className="header-nav__link">
          Вопрос №1
        </NavLink>

        <NavLink to="/page-second" className="header-nav__link">
          Вопрос №2
        </NavLink>
        <NavLink to="/page-third" className="header-nav__link">
          Тестовая задача
        </NavLink>
      </nav>
			</div>
    </header>
  );
}
