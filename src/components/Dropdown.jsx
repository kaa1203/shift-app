import { useEffect, useRef, useState } from "react";
import {
  DropdownButton,
  DropdownItem,
  DropdownList,
  DropdownWrapper,
} from "./App.styled";
import { LuChevronDown, LuChevronUp } from "react-icons/lu";

const Dropdown = () => {
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

  const options = {
    name: "button",
    items: ["item 1", "item 2", "item 3"],
  };

  const handleOnClick = () => setIsHidden(!isHidden);

  return (
    <DropdownWrapper ref={dropdownRef}>
      <DropdownButton onClick={handleOnClick}>
        {options.name}
        {isHidden ? <LuChevronDown size={20} /> : <LuChevronUp size={20} />}
      </DropdownButton>
      {!isHidden && (
        <DropdownList>
          {options.items.map((item, idx) => (
            <DropdownItem key={idx} onClick={handleOnClick}>
              {item}
            </DropdownItem>
          ))}
        </DropdownList>
      )}
    </DropdownWrapper>
  );
};

export default Dropdown;
