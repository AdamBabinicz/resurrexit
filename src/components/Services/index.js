import React from "react";
import Icon1 from "../../images/mon.jpg";
import Icon2 from "../../images/religion.svg";
import Icon3 from "../../images/alfa.png";
import {
  ServicesContainer,
  ServicesH1,
  ServicesH2,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesP,
} from "./ServicesElements";

const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1>Tajemnica</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} alt="monstrancja" />
          <ServicesH2>Ciało</ServicesH2>
          <ServicesP>
            Ja jestem chlebem żywym, który zstąpił z&nbsp;nieba. Jeśli kto
            spożywa ten chleb, będzie żył na wieki. Chlebem, który Ja dam, jest
            moje ciało za&nbsp;życie świata.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} alt="serce" />
          <ServicesH2>Krew</ServicesH2>
          <ServicesP>
            To jest moja Krew Przymierza, która za&nbsp;wielu będzie wylana.
            Zaprawdę, powiadam wam: Odtąd nie będę już pił z&nbsp;owocu winnego
            krzewu aż&nbsp;do owego dnia, kiedy pić go będę nowy
            w&nbsp;królestwie Bożym.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} alt="JHS" />
          <ServicesH2>Zmartwychwstanie</ServicesH2>
          <ServicesP>
            Zmartwychwstałem i zawsze jestem z Tobą; położyłeś na mnie swą rękę.
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
