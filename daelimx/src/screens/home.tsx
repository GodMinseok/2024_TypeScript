import { useState } from "react";
import styled from "styled-components";
import InputPost from "../components/InputPost";
import Timeline from "../components/Timeline";

const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 28px;
  font-weight: bold;
  text-align: center;
  color: #005662;
  margin-bottom: 20px;
  padding: 10px;
  border-radius: 5px;
`;

const Button = styled.button`
  margin-top: 20px;
  padding: 12px 24px;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  background-color: #1379ff;
  color: white;
  border: none;
  border-radius: 8px;
  &:hover {
    background-color: #0e5bcc;
  }
`;

const SliderContainer = styled.section`
  width: 100%;
  position: relative;
  margin-bottom: 20px;
  aspect-ratio: 16 / 9; /* 반응형 비율 유지 */
  overflow: hidden;
  @media (max-width: 768px) {
    aspect-ratio: 4 / 3; /* 작은 화면에서 비율 조정 */
  }
`;

const SliderWrap = styled.div`
  display: flex;
  transition: transform 0.3s ease-in-out;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const SliderImage = styled.div`
  min-width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SliderImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  cursor: pointer;

  @media (max-width: 768px) {
    object-fit: contain; /* 작은 화면에서는 비율을 유지하면서 여백 허용 */
  }
`;

interface SliderButtonProps {
  direction: "prev" | "next";
}

const SliderButton = styled.a<SliderButtonProps>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 18px;
  color: white;
  text-decoration: none;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 12px;
  cursor: pointer;
  z-index: 10;
  ${(props) => (props.direction === "prev" ? "left: 10px;" : "right: 10px;")}

  &:hover {
    background-color: rgba(0, 0, 0, 0.7);
  }
`;

const DotContainer = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: 10px;
  width: 100%;
  z-index: 10;
`;

const Dot = styled.div<{ active: boolean }>`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${(props) => (props.active ? "white" : "gray")};
  margin: 0 6px;
  cursor: pointer;
`;

export default () => {
  const [showBoard, setShowBoard] = useState(false); // 게시판 보이기 상태
  const [currentSlide, setCurrentSlide] = useState(0); // 현재 슬라이드 인덱스

  const images = ["/main1.png", "/main2.png", "/main3.png"];

  // 슬라이드 이동 함수
  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <Container>
      <Title>
        {showBoard ? "롯데 자이언츠 게시판" : "롯데 자이언츠 홈페이지"}
      </Title>
      <Button onClick={() => setShowBoard(!showBoard)}>
        {showBoard ? "홈으로 돌아가기" : "롯데 자이언츠 게시판 확인하러 가기"}
      </Button>
      {!showBoard ? (
        <>
          <SliderContainer>
            <SliderWrap
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {images.map((src, index) => (
                <SliderImage key={index}>
                  <SliderImg
                    src={src}
                    alt={`슬라이드 이미지 ${index + 1}`}
                    onClick={() => goToSlide(index)}
                  />
                </SliderImage>
              ))}
            </SliderWrap>

            <SliderButton direction="prev" onClick={goToPrevSlide}>
              Prev
            </SliderButton>

            <SliderButton direction="next" onClick={goToNextSlide}>
              Next
            </SliderButton>

            <DotContainer>
              {images.map((_, index) => (
                <Dot
                  key={index}
                  active={currentSlide === index}
                  onClick={() => goToSlide(index)}
                />
              ))}
            </DotContainer>
          </SliderContainer>
        </>
      ) : (
        <>
          <InputPost />
          <Timeline />
        </>
      )}
    </Container>
  );
};
