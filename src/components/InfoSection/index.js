import React, { useState } from "react";
import { Button } from "../ButtonElements";
import { AiFillPhone } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
// import { Link } from "react-router-dom";
import Modal from "../modal/Modal";

import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  BotLine,
  Heading,
  Subtitle,
  BtnWrap,
  ImgWrap,
  Img,
} from "./InfoElements";

const InfoSection = ({
  lightBg,
  id,
  imgStart,
  topLine,
  botLine,
  lightText,
  headLine,
  darkText,
  description,
  buttonLabel,
  img,
  alt,
  primary,
  dark,
  dark2,
}) => {
  const [modalActive, setModalActive] = useState(false);
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headLine}</Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>
                <BtnWrap>
                  <Button
                    onClick={() => setModalActive(true)}
                    // to="home"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                    primary={primary ? 1 : 0}
                    dark={dark ? 1 : 0}
                    dark2={dark2 ? 1 : 0}
                  >
                    {buttonLabel}
                  </Button>
                </BtnWrap>
              </TextWrapper>
              <BotLine>{botLine}</BotLine>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt} />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
      <Modal
        active={modalActive}
        setActive={setModalActive}
        style={{ height: "300px", background: "green", color: "red" }}
      >
        <h2>Katolicka Odnowa w&nbsp;Duchu Świętym RESURREXIT</h2>
        <h3>Parafia Rzymsko-Katolicka bł. Annuarity w&nbsp;Radomiu</h3>
        <h4>26-600 Radom, ul. Królowej Jadwigi 13&nbsp;a</h4>
        <h4 style={{ display: "flex", alignItems: "center" }}>
          <AiFillPhone />
          <a
            href="tel:+4834598"
            style={{ textDecoration: "none", color: "#333" }}
          >
            &nbsp;+48&nbsp;345&nbsp;98&nbsp;24
          </a>
        </h4>
        <h4
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <MdEmail />
          <a
            href="mailto:parafia@annuarita.pl"
            style={{ textDecoration: "none", color: "#333" }}
          >
            &nbsp;parafia@annuarita.pl
          </a>
        </h4>
        <p style={{ marginTop: "2rem" }}>
          Spotkania odbywają się w&nbsp;środy po Mszy św. (godz. 18.00)
          w&nbsp;kościele.
        </p>
      </Modal>
    </>
  );
};

export default InfoSection;
