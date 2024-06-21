import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { InputHTMLAttributes } from 'react';

type InputHTMLAttributesWithIcon = InputHTMLAttributes<HTMLInputElement> & {
  icon?: IconProp;
  containerClassName?: string;
};

const Input = ({
  icon,
  containerClassName,
  ...rest
}: InputHTMLAttributesWithIcon) => {
  return (
    <div
      className={`border-[1px] p-3 px-[5px] pl-5 h-12 rounded-full flex-center-between
        text-[#595959] transition-all duration-300 bg-[#fafafa] gap-4 font-[500] ${containerClassName}`}
    >
      <input
        {...rest}
        className="border-none outline-none bg-transparent w-[80%]"
      />
      {icon && (
        <button
          className="h-9 w-9 rounded-full bg-[#ededed] flex-center hover:invert 
            transition-all duration-300"
        >
          <FontAwesomeIcon icon={icon} />
        </button>
      )}
    </div>
  );
};

export default Input;
