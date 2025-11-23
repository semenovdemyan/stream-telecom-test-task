import { NavLink, useLocation } from 'react-router-dom';
import './HeaderNav.css';

export default function HeaderNav() {
  const location = useLocation();

  if (!localStorage.getItem('activePath')) {
    localStorage.setItem('activePath', location.pathname);
  }

  const activePath = localStorage.getItem('activePath');

  const handleClick = (path) => {
    localStorage.setItem('activePath', path);
  };

  const getLinkClass = (path, isActive) => {
    const active = isActive || activePath === path;
    return `header-nav__link ${active ? 'header-nav__link--active' : ''}`;
  };

  return (
    <header className="header">
      <div className="container header-container">
        <nav className="header-nav__menu">
          <NavLink
            to="/"
            end
            className={({ isActive }) => getLinkClass('/', isActive)}
            onClick={() => handleClick('/')}
          >
            Начальная страница
          </NavLink>

          <NavLink
            to="/page-first"
            className={({ isActive }) => getLinkClass('/page-first', isActive)}
            onClick={() => handleClick('/page-first')}
          >
            Вопрос №1
          </NavLink>

          <NavLink
            to="/page-second"
            className={({ isActive }) => getLinkClass('/page-second', isActive)}
            onClick={() => handleClick('/page-second')}
          >
            Вопрос №2
          </NavLink>

          <NavLink
            to="/page-third"
            className={({ isActive }) => getLinkClass('/page-third', isActive)}
            onClick={() => handleClick('/page-third')}
          >
            Тестовая задача
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
