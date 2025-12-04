import { useEffect, useRef, useState } from "react";
import {
  DropdownButton,
  DropdownItem,
  DropdownList,
  DropdownWrapper,
} from "./App.styled";
import { LuChevronDown, LuChevronUp, LuEllipsis } from "react-icons/lu";

const Dropdown = ({ data }, setValue) => {
  const [isHidden, setIsHidden] = useState(true);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const closeDropdown = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target))
        setIsHidden(true);
    };
    const closeDropdownOnKeyDown = (e) => {
      if (e.key === "Escape") setIsHidden(true);
    };

    document.addEventListener("click", closeDropdown, true);
    document.addEventListener("keydown", closeDropdownOnKeyDown, true);
    return () => {
      document.removeEventListener("click", closeDropdown, true);
      document.removeEventListener("keydown", closeDropdownOnKeyDown, true);
    };
  }, []);

  const handleOnToggle = () => setIsHidden(!isHidden);

  const handleOnClick = (e) => {
    console.log(e.target.value);
  };

  const GenerateButton = (options) => {
    const { type, name } = options;

    if (type === "default")
      return (
        <DropdownButton onClick={handleOnToggle}>
          {name}
          {isHidden ? <LuChevronDown size={20} /> : <LuChevronUp size={20} />}
        </DropdownButton>
      );

    return (
      <DropdownButton onClick={handleOnToggle}>
        <LuEllipsis size={25} />
      </DropdownButton>
    );
  };

  return (
    <DropdownWrapper ref={dropdownRef}>
      {GenerateButton(data)}
      {!isHidden && (
        <DropdownList>
          {data.items.map(({ content, fn }, idx) => (
            <DropdownItem
              key={idx}
              onClick={(e) => {
                fn(e);
                handleOnToggle();
              }}
            >
              {content}
            </DropdownItem>
          ))}
        </DropdownList>
      )}
    </DropdownWrapper>
  );
};

export default Dropdown;
