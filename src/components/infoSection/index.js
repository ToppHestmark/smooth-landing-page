import { Button1 } from "../../shared/Button/Button1";
import {
  BtnWrap,
  Column1,
  Column2,
  Heading,
  Image,
  ImgWrap,
  InfoContainer,
  InfoRow,
  InfoWrapper,
  Subtitle,
  TextWrapper,
  TopLine,
} from "./styles/infoSection";

export default function InfoSection({
  lightBg,
  id,
  imgStart,
  topLine,
  lightText,
  headLine,
  darkText,
  description,
  buttonLabel,
  image,
  alt,
  primary,
  dark,
  dark2,
}) {
  return (
    <InfoContainer lightBg={lightBg} id={id}>
      <InfoWrapper>
        <InfoRow imgStart={imgStart}>
          <Column1>
            <TextWrapper>
              <TopLine> {topLine} </TopLine>
              <Heading lightText={lightText}> {headLine} </Heading>
              <Subtitle darkText={darkText}> {description} </Subtitle>
              <BtnWrap>
                <Button1
                  to="home"
                  duration={500}
                  spy={true}
                  smooth={true}
                  primary={primary ? 1 : 0}
                  dark={dark ? 1 : 0}
                  dark2={dark2 ? 1 : 0}
                  exact="true"
                  offset={-10}
                >
                  {" "}
                  {buttonLabel}{" "}
                </Button1>
              </BtnWrap>
            </TextWrapper>
          </Column1>
          <Column2>
            <ImgWrap>
              <Image src={image} alt={alt} />
            </ImgWrap>
          </Column2>
        </InfoRow>
      </InfoWrapper>
    </InfoContainer>
  );
}
