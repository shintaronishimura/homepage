import React from "react";
import "./styles/Top.css";
import { HeaderMenuItem } from "./Component/MenuItem/HeaderItem";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./Routes";
import { CorporateName } from "./Component/MenuItem/CorporateName";

function TopPage() {
  const corporateMenuItems = ["会社概要", "沿革"];
  const serviceMenuItems = ["コンサルティング", "開発"];
  const corporateMenuLinks = [
    "/corporate-info/overview",
    "/corporate-info/history",
  ];
  const serviceMenuLinks = ["/services/consulting", "/services/development"];
  const corporateButtonLink = "/corporate-info";
  const serviceButtonLink = "/services";
  const contactButtonLink = "/contact";
  const accessButtonLink = "/access";
  const recruitmentButtonLink = "/recruitment";
  return (
    <Router>
      <div>
        <header>
          <nav>
            <ul className="navbar">
              <CorporateName />
              <HeaderMenuItem
                buttonName={"企業情報"}
                items={corporateMenuItems}
                links={corporateMenuLinks}
                buttonNameLink={corporateButtonLink}
                has-submenu={true}
              />
              <HeaderMenuItem
                buttonName={"サービス"}
                items={serviceMenuItems}
                links={serviceMenuLinks}
                buttonNameLink={serviceButtonLink}
              />
              <HeaderMenuItem
                buttonName={"お問い合わせ"}
                items=""
                links=""
                buttonNameLink={contactButtonLink}
              />
              <HeaderMenuItem
                buttonName={"アクセス"}
                items=""
                links=""
                buttonNameLink={accessButtonLink}
              />
              <HeaderMenuItem
                buttonName={"採用"}
                items=""
                links=""
                buttonNameLink={recruitmentButtonLink}
              />
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
