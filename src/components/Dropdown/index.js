/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { DropdownButton, DropdownContainer, DropdownItem, DropdownMenu, FrameworkIcon } from "./styles";
import angularImg from '../../assets/angular.png'
import reactImg from '../../assets/react.png'
import vueImg from '../../assets/vue.png'


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

  const getFrameworkIcon = (framework) => {
    switch (framework) {
      case 'angular':
        return angularImg
      case 'reactjs':
        return reactImg
      case 'vuejs':
        return vueImg
      default:
        return reactImg
    }
  }

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
              <FrameworkIcon src={getFrameworkIcon(option.value)} alt={option.label} />{option.label}
            </DropdownItem>
          ))}
        </DropdownMenu>
      )}
    </DropdownContainer>
  );
};

export default Dropdown