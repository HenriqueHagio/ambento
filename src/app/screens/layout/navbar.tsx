'use client'

import { useUserContext } from '@/context/userContext';
import Link from 'next/link'
import { useEffect, useState } from 'react';


export default function NavBar() {
  const {user} = useUserContext();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const checkAuth = () => {
      setIsAuthenticated(user?.logged || false);
      setUserName(user?.name || '');
    };
    checkAuth();
  }, [user]);

  return (
    <section>
      <nav className="navbar navbar-expand-lg bg-primary"  data-bs-theme="dark">
        <div className="container-fluid">
          <Link className="navbar-brand" href="/">
            Amb.ento
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarColor01"
            aria-controls="navbarColor01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <Link className="nav-link" href="/map">
                  Pontos de Coleta
                </Link>
              </li>
            </ul>
            <form className="d-flex">
              <div className="collapse navbar-collapse">
                <ul className="navbar-nav">
                  {isAuthenticated ? (
                    <li className="nav-item">
                      <span className="nav-link">Olá, {userName}</span>
                    </li>
                  ) : (
                    <li className="nav-item">
                      <Link className="nav-link" href="/login">
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
