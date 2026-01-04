import { useState } from "react";

import {
  AccordionButton,
  AccordionContainer,
  AccordionItem,
  AccordionList,
  AccordionWrapper,
  AccordionIconWrapper,
} from "./App.styled";

import { LuChevronDown, LuChevronRight, LuMinus, LuPlus } from "react-icons/lu";

const Accordion = ({
  datas,
  accIsOpen = {},
  startIcon,
  endIcon,
  containerStyling,
  wrapperStyling,
  listStyling,
}) => {
  const [isOpen, setIsOpen] = useState(accIsOpen);

  const handleOnClick = (key) => {
    setIsOpen((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <AccordionContainer $containerStyling={containerStyling}>
      {datas.map(({ title, items }, idx) => {
        return (
          <AccordionWrapper key={idx} $wrapperStyling={wrapperStyling}>
            <AccordionButton
              onClick={() => handleOnClick(idx)}
              $buttonStyling={title.styling}
              $textTransform="capitalize"
              $isOpen={isOpen[idx]}
            >
              {startIcon && (
                <AccordionIconWrapper>
                  {isOpen[idx] ? (
                    <LuChevronDown size={22} />
                  ) : (
                    <LuChevronRight size={22} />
                  )}
                </AccordionIconWrapper>
              )}
              {title.content}
              {endIcon && (
                <AccordionIconWrapper style={{ marginLeft: "auto" }}>
                  {isOpen[idx] ? <LuMinus size={22} /> : <LuPlus size={22} />}
                </AccordionIconWrapper>
              )}
            </AccordionButton>
            {isOpen[idx] && (
              <AccordionList $listStyling={listStyling}>
                {items.map((item, id) => (
                  <AccordionItem key={id}>{item}</AccordionItem>
                ))}
              </AccordionList>
            )}
          </AccordionWrapper>
        );
      })}
    </AccordionContainer>
  );
};

export default Accordion;
