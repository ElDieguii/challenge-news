/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { DropdownButton, DropdownContainer, DropdownItem, DropdownMenu } from "./styles";

const Dropdown = ({ handleGetNews, setOption, preselectedOption }) => {
  const options = [
    { label: 'Angular', value: 'angular' },
    { label: 'React', value: 'reactjs' },
    { label: 'Vue', value: 'vuejs' },
  ];

  const getPreselectedOption = (optionValue) => {
    return options.find((option) => option.value === optionValue)
  }
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  useEffect(() => {
    setSelectedOption(getPreselectedOption(preselectedOption))
  }, [preselectedOption])

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setOption(option.value)
    setIsOpen(false);
    handleGetNews(option.value)
  };

  return (
    <DropdownContainer>
      <DropdownButton onClick={() => setIsOpen(!isOpen)}>
        {
          selectedOption ?
            selectedOption.label :
            'Select your news'
        }
      </DropdownButton>
      {isOpen && (
        <DropdownMenu>
          {options.map((option) => (
            <DropdownItem
              key={option.value}
              onClick={() => handleOptionClick(option)}
            >
              {option.label}
            </DropdownItem>
          ))}
        </DropdownMenu>
      )}
    </DropdownContainer>
  );
};

export default Dropdown