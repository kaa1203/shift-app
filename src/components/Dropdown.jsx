import { useEffect, useRef, useState } from "react";
import {
  DropdownButton,
  DropdownItem,
  DropdownList,
  DropdownWrapper,
} from "./App.styled";
import {
  LuChevronDown,
  LuChevronUp,
  LuEllipsis,
  LuEllipsisVertical,
} from "react-icons/lu";

const Dropdown = ({ data, iconSize = 20 }, setValue) => {
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
    const { type, name, icon } = options;
    const CustomIcon = icon;

    switch (type) {
      case "ellipsis":
        return (
          <DropdownButton onClick={handleOnToggle}>
            <LuEllipsis size={iconSize} />
          </DropdownButton>
        );
      case "ellipsis-vertical":
        return (
          <DropdownButton onClick={handleOnToggle}>
            <LuEllipsisVertical size={iconSize} />
          </DropdownButton>
        );
      case "custom":
        return (
          <DropdownButton onClick={handleOnToggle}>
            {name}
            {icon}
          </DropdownButton>
        );
      default:
        return (
          <DropdownButton onClick={handleOnToggle}>
            {name}
            {isHidden ? (
              <LuChevronDown size={iconSize} />
            ) : (
              <LuChevronUp size={iconSize} />
            )}
          </DropdownButton>
        );
    }
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
