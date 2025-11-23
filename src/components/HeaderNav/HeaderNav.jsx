import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import './HeaderNav.css';

export default function HeaderNav() {
  const location = useLocation();
  const navigate = useNavigate();

  // При первой загрузке проверяем localStorage
  useEffect(() => {
    const savedPath = localStorage.getItem('activePath');
    if (savedPath && savedPath !== location.pathname) {
      navigate(savedPath, { replace: true }); // Перенаправляем на сохранённый путь
    }
  }, []);

  const handleClick = (path) => {
    localStorage.setItem('activePath', path);
  };

  const getLinkClass = (path) => {
    return `header-nav__link ${
      location.pathname === path ? 'header-nav__link--active' : ''
    }`;
  };

  return (
    <header className="header">
      <div className="container header-container">
        <nav className="header-nav__menu">
          <NavLink
            to="/"
            end
            className={() => getLinkClass('/')}
            onClick={() => handleClick('/')}
          >
            Начальная страница
          </NavLink>

          <NavLink
            to="/page-first"
            className={() => getLinkClass('/page-first')}
            onClick={() => handleClick('/page-first')}
          >
            Вопрос №1
          </NavLink>

          <NavLink
            to="/page-second"
            className={() => getLinkClass('/page-second')}
            onClick={() => handleClick('/page-second')}
          >
            Вопрос №2
          </NavLink>

          <NavLink
            to="/page-third"
            className={() => getLinkClass('/page-third')}
            onClick={() => handleClick('/page-third')}
          >
            Тестовая задача
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
