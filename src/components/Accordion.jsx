import { useState } from "react";

import {
  AccordionButton,
  AccordionContainer,
  AccordionItem,
  AccordionList,
  AccordionWrapper,
  AccordionIconWrapper,
} from "./App.styled";

import convertNumberToWords from "../utils/convertNumberToWords";

import { LuChevronDown, LuChevronRight, LuPlus } from "react-icons/lu";

const Accordion = ({ datas }) => {
  const [isOpen, setIsOpen] = useState({});

  const handleOnClick = (key) => {
    setIsOpen((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <AccordionContainer>
      {datas.map(({ title, key, items }, idx) => {
        return (
          <AccordionWrapper key={idx}>
            <AccordionButton
              onClick={() => handleOnClick(key)}
              $fontSize="23px"
              $textTransform="capitalize"
            >
              <AccordionIconWrapper>
                {isOpen[key] ? (
                  <LuChevronDown size={26} />
                ) : (
                  <LuChevronRight size={26} />
                )}
              </AccordionIconWrapper>
              {title}
            </AccordionButton>
            {isOpen[key] && (
              <AccordionList>
                {items.map((item, id) => (
                  <AccordionItem key={id}>{item.note}</AccordionItem>
                ))}
                <AccordionItem>
                  <AccordionButton>
                    <AccordionIconWrapper>
                      <LuPlus size={18} />
                    </AccordionIconWrapper>
                    Add log for day {convertNumberToWords(key)}
                  </AccordionButton>
                </AccordionItem>
              </AccordionList>
            )}
          </AccordionWrapper>
        );
      })}
    </AccordionContainer>
  );
};

export default Accordion;
