'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'

export default function NavBar() {
  const pathname = usePathname()

  return (
    <section>
      <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
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
              {/* <li className="nav-item">
                <a className="nav-link" href="#">
                  Lista de Materiais
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li> */}
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-sm-2 bg-light"
                type="search"
                placeholder="Search"
              />
              <button className="btn btn-secondary my-2 my-sm-0" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </section>
  );
}
