import React from "react";
import { Link } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaGoogle,
} from "react-icons/fa";
import { ImFilm } from "react-icons/im";
import { GiLoveSong } from "react-icons/gi";
import { BiLink } from "react-icons/bi";
import { RiFireLine } from "react-icons/ri";
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
} from "./FooterElements";
import Pigeon from "../../images/dove4.svg";

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Linki</FooterLinkTitle>
              <FooterLink to="/signin">
                <BiLink />
                &nbsp;Kontakt
              </FooterLink>
              <FooterLink
                to="//www.odnowa.org/i/organizacje-zwiazane-z-ruchem-odnowy-charyzmatycznej.html"
                rel="noopener noreferrer"
                target="_blank"
              >
                <BiLink />
                &nbsp;CHARIS
              </FooterLink>
              <FooterLink
                to="//radom.e-odnowa.pl"
                rel="noopener noreferrer"
                target="_blank"
              >
                <BiLink />
                &nbsp;Diecezja
              </FooterLink>
              <FooterLink
                to="//www.facebook.com/Wsp%C3%B3lnota-Odnowy-w-Duchu-%C5%9Awi%C4%99tym-Resurrexit-w-Radomiu-847816491908771"
                rel="noopener noreferrer"
                target="_blank"
              >
                <BiLink />
                &nbsp;Parafia
              </FooterLink>
              <FooterLink
                to="//pl.wikipedia.org/wiki/Ruch_Odnowy_w_Duchu_%C5%9Awi%C4%99tym"
                rel="noopener noreferrer"
                target="_blank"
              >
                <BiLink />
                &nbsp;Wikipedia
              </FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Wspólnoty</FooterLinkTitle>
              <FooterLink
                to="//radom.e-odnowa.pl/wspolnoty-odnowy/item/95-benedictus"
                rel="noopener noreferrer"
                target="_blank"
              >
                <RiFireLine />
                &nbsp;BENEDICTUS
              </FooterLink>
              <FooterLink
                to="//radom.e-odnowa.pl/wspolnoty-odnowy/item/11-effatha-radom"
                rel="noopener noreferrer"
                target="_blank"
              >
                <RiFireLine />
                &nbsp;EFFATHA
              </FooterLink>
              <FooterLink
                to="//radom.e-odnowa.pl/wspolnoty-odnowy/item/10-magnificat-radom"
                rel="noopener noreferrer"
                target="_blank"
              >
                <RiFireLine />
                &nbsp;MAGNIFICAT
              </FooterLink>
              <FooterLink
                to="//radom.e-odnowa.pl/wspolnoty-odnowy/item/17-maranatha-radom"
                rel="noopener noreferrer"
                target="_blank"
              >
                <RiFireLine />
                &nbsp;MARANATHA
              </FooterLink>
              <FooterLink
                to="//radom.e-odnowa.pl/wspolnoty-odnowy/item/126-miriam"
                rel="noopener noreferrer"
                target="_blank"
              >
                <RiFireLine />
                &nbsp;MIRIAM
              </FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>

          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Filmy</FooterLinkTitle>
              <FooterLink
                to="//www.youtube.com/watch?v=VVLeccoAqts"
                rel="noopener noreferrer"
                target="_blank"
              >
                <ImFilm />
                &nbsp;Pochodzenie...
              </FooterLink>
              <FooterLink
                to="//www.youtube.com/watch?v=3_BWITutJGU"
                rel="noopener noreferrer"
                target="_blank"
              >
                <ImFilm />
                &nbsp;Spoczynek...
              </FooterLink>
              <FooterLink
                to="//www.youtube.com/watch?v=1sevH9JiAKY"
                rel="noopener noreferrer"
                target="_blank"
              >
                <ImFilm />
                &nbsp;Słowo...
              </FooterLink>
              <FooterLink
                to="//www.youtube.com/watch?v=DbluN1MYR24"
                rel="noopener noreferrer"
                target="_blank"
              >
                <ImFilm />
                &nbsp;Modlitwa...
              </FooterLink>
              <FooterLink
                to="//www.youtube.com/watch?v=ShRI5B1EnSI"
                rel="noopener noreferrer"
                target="_blank"
              >
                <ImFilm />
                &nbsp;Grzechy...
              </FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Pieśni</FooterLinkTitle>
              <FooterLink
                to="//www.youtube.com/watch?v=4doRTwzx6hU&list=PLnPlkplSf-ga3VXlwp2oQhnP20quXdPAz"
                rel="noopener noreferrer"
                target="_blank"
              >
                <GiLoveSong />
                &nbsp;Przyjdź...
              </FooterLink>
              <FooterLink
                to="/www.youtube.com/watch?v=btX5HTjVZic&list=PLnPlkplSf-ga3VXlwp2oQhnP20quXdPAz&index=4"
                rel="noopener noreferrer"
                target="_blank"
              >
                <GiLoveSong />
                &nbsp;Ta&nbsp;Krew...
              </FooterLink>
              <FooterLink
                to="/www.youtube.com/watch?v=GkWN7dgd81E&list=PLnPlkplSf-ga3VXlwp2oQhnP20quXdPAz&index=5"
                rel="noopener noreferrer"
                target="_blank"
              >
                <GiLoveSong />
                &nbsp;Chrystus&nbsp;Pan...
              </FooterLink>
              <FooterLink
                to="//www.youtube.com/watch?v=EVxyru3-z3c&list=RDQMtqF-IZbN7lc&index=2"
                rel="noopener noreferrer"
                target="_blank"
              >
                <GiLoveSong />
                &nbsp;Powietrzem...
              </FooterLink>
              <FooterLink
                to="//www.youtube.com/watch?v=rKkkkDZ51ZY&list=RDQMtqF-IZbN7lc&index=9"
                rel="noopener noreferrer"
                target="_blank"
              >
                <GiLoveSong />
                &nbsp;Duchu...
              </FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/" onClick={toggleHome}>
              <img src={Pigeon} alt="gołąb" />
            </SocialLogo>
            <WebsiteRights>2020 - {new Date().getFullYear()}.</WebsiteRights>
            <SocialIcons>
              <SocialIconLink
                href="//www.facebook.com/beata.podymniak.96"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink
                href="//www.instagram.com"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink
                href="//youtube.com"
                aria-label="Youtube"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube />
              </SocialIconLink>
              <SocialIconLink
                href="//twitter.com"
                aria-label="Twitter"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter />
              </SocialIconLink>
              <SocialIconLink
                href="//google.com"
                aria-label="Google"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGoogle />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
