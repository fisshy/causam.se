import React from "react";
import "./Portfolio.css";
export const Portfolio = () => {
  return (
    <div className="portfolio">
      <a href="https://www.cloudbuz.com">
        <div className="portfolio-logo">
          <img src="/img/portfolio/cb.png" />
        </div>
      </a>
      <a href="https://www.betalkontroll.se">
        <div className="portfolio-logo">
          <img
            
            src="https://betalkontroll.se/wp-content/uploads/2019/09/logo_large_3.svg"
          />
        </div>
      </a>
      <div className="portfolio-logo">
        <a href="https://www.swegon.com">
          <img src="https://www.swegon.com/Static/img/logo.svg?v=3" />
        </a>
      </div>
    </div>
  );
};
