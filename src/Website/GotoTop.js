import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FaArrowUp } from "react-icons/fa";

const GotoTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const GoBTN = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const listenToScroll = () => {
    let heightToHidden = 300;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > heightToHidden) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  return (
    <Wrapper>
      {isVisible && (
        <div className="top-btn" onClick={GoBTN}>
          <FaArrowUp class="top-btn--icon" />
        </div>
      )}
    </Wrapper>
  );
};
const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-item: center;

  .top-btn {
    font-size: 2.4rem;
    width: 6rem;
    height: 6rem;
    color: #fff;
    background-color: red;
    box-shodow: 5px 5px 10px gray;
    border-radius: 50%;
    position: fixed;
    bottom: 5rem;
    right: 5rem;
    z-index: 222;
    display: flex;
    justify-content: center;
    align-item: center;
    cursor: pointer;
  }
`;
export default GotoTop;
