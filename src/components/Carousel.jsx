import { useEffect, useRef, useState } from "react";

import {
  CarouselContainer,
  CarouselLegend,
  CarouselLegendWrapper,
  CarouselNext,
  CarouselPrev,
  CarouselWrapper,
} from "./App.styled";

import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
import throttle from "../utils/throttle";

const Carousel = ({
  items,
  isRotating = true,
  isClickable = false,
  hasControl = true,
  duration = null,
}) => {
  const [current, setCurrent] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const intervalRef = useRef(null);

  const total = items.length;

  const generateSlides = (items) => {
    return items.map((item, idx) => {
      return current === idx ? (
        <CarouselWrapper key={idx}>{item}</CarouselWrapper>
      ) : null;
    });
  };

  const generateLegends = (items) => {
    return (
      <CarouselLegendWrapper>
        {items.map((_, idx) => (
          <CarouselLegend
            key={idx}
            $current={current === idx}
            onClick={() => setCurrent(idx)}
          />
        ))}
      </CarouselLegendWrapper>
    );
  };

  const handleOnClick = (e, items) => {
    e.preventDefault();
    const name = e.target.closest("div").dataset.name;

    if (name === "prev")
      return setCurrent((prev) => (prev - 1 + total) % total);

    return setCurrent((prev) => (prev + 1) % total);
  };

  const startAutoRotate = () => {
    if (!isRotating) return;

    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % total);
    }, duration);
  };

  useEffect(() => {
    const modifyPage = (e) => {
      const key = e.key;

      if (key === "ArrowLeft") {
        startAutoRotate();
        setCurrent((prev) => (prev - 1 + total) % total);
      }

      if (key === "ArrowRight") {
        startAutoRotate();
        setCurrent((prev) => (prev + 1) % total);
      }
    };

    document.addEventListener("keydown", throttle(modifyPage));

    return () => {
      document.removeEventListener("keydown", throttle(modifyPage));
    };
  }, []);

  useEffect(() => {
    if (!duration || isHovering) return;
    startAutoRotate();
    return () => clearInterval(intervalRef.current);
  }, [duration, total, isHovering]);

  return (
    <CarouselContainer
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => {
        setIsHovering(false);
      }}
    >
      {hasControl && (
        <>
          <CarouselPrev
            data-name="prev"
            onClick={(e) => handleOnClick(e, items)}
          >
            <LuChevronLeft size={50} />
          </CarouselPrev>
          <CarouselNext
            data-name="next"
            onClick={(e) => handleOnClick(e, items)}
          >
            <LuChevronRight size={50} />
          </CarouselNext>
        </>
      )}
      {generateSlides(items)}
      {generateLegends(items)}
    </CarouselContainer>
  );
};

export default Carousel;
