import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "./styles/Top.css";
import AppRoutes from "./Routes";

function TopPage() {
  return (
    <Router>
      <div>
        <header>
          <nav>
            <ul className="navbar">
              <li className="nav-item">
                <Link to="/corporate-info">企業情報</Link>
                <ul className="submenu">
                  <li>
                    <Link to="/corporate-info/overview">会社概要</Link>
                  </li>
                  <li>
                    <Link to="/corporate-info/history">沿革</Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link to="/services">サービス</Link>
                <ul className="submenu">
                  <li>
                    <Link to="/services/consulting">コンサルティング</Link>
                  </li>
                  <li>
                    <Link to="/services/development">開発</Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link to="/contact">お問い合わせ</Link>
              </li>
              <li className="nav-item">
                <Link to="/access">アクセス</Link>
              </li>
              <li className="nav-item">
                <Link to="/recruitment">採用</Link>
              </li>
            </ul>
          </nav>
        </header>

        <main>
          <AppRoutes />
        </main>
      </div>
    </Router>
  );
}

export default TopPage;
