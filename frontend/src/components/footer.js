import React from "react";
import "./css/footer.css";

export const Footer = () => {
  return (
    <footer>
      <div className="inner">
        <div className="footer-message">
          합리적인 분들과 좋은 컨텐츠가 지속될 수 있는 선순환 시스템을
          지향합니다
        </div>
        <div className="footer-contact">컨택: dream@fun-coding.org</div>
        <div className="footer-copyright">
          Copyrigh 2020 All ⓒ rights reserved
        </div>
      </div>
    </footer>
  );
};
