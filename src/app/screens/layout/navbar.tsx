'use client';

import { useUserContext } from '@/context/userContext';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import LogoutButton from './logout';
import Bootstrap from 'bootstrap/dist/js/bootstrap.bundle';
import { text } from 'stream/consumers';


export default function NavBar() {
  const { user } = useUserContext();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const checkAuth = () => {
      setIsAuthenticated(user?.logged || false);
      setUserName(user?.name || '');
    };
    checkAuth();
  }, [user]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      require('bootstrap/dist/js/bootstrap.bundle');
    }
  }, []);

  function closeDropdown(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    var dropdown = Bootstrap.Dropdown.getOrCreateInstance((event.target as Element).closest('.dropdown-menu'));
    dropdown.hide();
  }

  return (
    <section>
      <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#45A37E' }} data-bs-theme="dark">
        <div className="container-fluid">
          <Link className="navbar-brand" href="/">
            <img src="../favicon.ico" alt="logo" style={{ height: '4rem', width: 'auto' }} />
          </Link>

          
          <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <Link className="nav-link" href="/map">
                  Pontos de Coleta
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                  Materiais Descartáveis
                </a>
                <div className="dropdown-menu bg-success">
                  <a className="dropdown-item" href="/eletrodomesticos" onClick={closeDropdown}>Eletrodomésticos</a>
                  <a className="dropdown-item" href="/eletronicos" onClick={closeDropdown}>Eletrônicos</a>
                  <a className="dropdown-item" href="/entulhos" onClick={closeDropdown}>Entulhos</a>
                  <a className="dropdown-item" href="/gesso" onClick={closeDropdown}>Gesso</a>
                  <a className="dropdown-item" href="/moveis" onClick={closeDropdown}>Móveis</a>
                  <a className="dropdown-item" href="/remedios" onClick={closeDropdown}>Remédios</a>
                  <a className="dropdown-item" href="/hospitalar" onClick={closeDropdown}>Seringas e Agulhas</a>
                </div>
              </li>

            </ul>
            <form className="d-flex">
              <div className="collapse navbar-collapse">
                <ul className="navbar-nav">
                  {isAuthenticated ? (
                    <li className="nav-item d-flex align-items-center">
                      <span className="nav-link me-2">Olá, {userName}</span>
                      <LogoutButton />
                    </li>
                  ) : (
                    <li className="nav-item">
                      <Link className="nav-link" href="login">
                        Login
                      </Link>
                    </li>
                  )}
                </ul>
              </div>
            </form>
          </div>
        </div>
      </nav>
    </section>
  );
}

const styles = {
  text: {
    size: '1.5rem',
  }
}