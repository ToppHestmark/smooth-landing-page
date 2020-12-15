import Image1 from "../../images/svg-4.svg";
import Image2 from "../../images/svg-5.svg";
import Image3 from "../../images/svg-7.svg";

import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
} from "./styles/services";

export default function Services() {
  return (
    <ServicesContainer id="services">
      <ServicesH1>Our Services</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Image1} />
          <ServicesH2>Reduce Expenses</ServicesH2>
          <ServicesP>
            We help you to reduce the fees and avoid the unwanted costs.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Image2} />
          <ServicesH2>Virtual Offices</ServicesH2>
          <ServicesP>
            You can access our platform online anywhere in the world.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Image3} />
          <ServicesH2>Premium Benefits</ServicesH2>
          <ServicesP>
            Unlock our special membership card that returns more into your
            account.
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
}
