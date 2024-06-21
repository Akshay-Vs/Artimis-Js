import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import Text from '../Typography/Text';

type DropDownSelectProps = {
  className?: string;
  title: string;
  options: Array<string>;
};

const DropDownSelect = ({ className, title, options }: DropDownSelectProps) => {
  const [selected, setSelected] = useState(title);
  const [showOptions, setShowOptions] = useState(false);

  return (
    <div
      className={`border-[1px] p-3 px-[5px] h-12 rounded-full flex-center flex-col
        text-[#595959] transition-all duration-300 bg-[#fafafa] gap-4 font-[500] 
        relative ${className}`}
    >
      <div className="flex-center-between pl-5 gap-4 w-full">
        {selected}
        <button
          className="h-9 w-9 rounded-full bg-[#ededed] flex-center hover:invert 
            transition-all duration-300"
          onClick={() => setShowOptions((prev) => !prev)}
        >
          <FontAwesomeIcon icon={showOptions ? faChevronUp : faChevronDown} />
        </button>
      </div>

      {showOptions ? (
        <div className="w-full min-h-16 bg-[#fafafa] absolute top-[100%] translate-y-2 -translate-x-2 rounded-3xl flex-center-start flex-col p-2 z-50">
          {options.map((option) => (
            <div
              key={option}
              className="w-full hover:bg-[#f0f0f0] px-4 p-2 rounded-3xl"
              onClick={() => {
                setSelected(option);
                setShowOptions(false);
              }}
            >
              <Text>{option}</Text>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default DropDownSelect;
