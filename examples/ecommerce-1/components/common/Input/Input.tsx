import React, { InputHTMLAttributes, PropsWithChildren } from 'react';

type InputHTMLAttributesWithIcon = InputHTMLAttributes<HTMLInputElement> &
  PropsWithChildren & {
    containerClassName?: string;
  };

const Input = ({
  containerClassName,
  children,
  ...rest
}: InputHTMLAttributesWithIcon) => {
  return (
    <div
      className={`border-[1px] p-2 pl-5 rounded-3xl flex-center-between transition-all duration-300 gap-4 font-[500] text-[#595959] bg-[#fafafa] border-[#e5e7eb] ${containerClassName}`}
    >
      <input
        {...rest}
        className="border-none outline-none bg-transparent w-[80%]"
      />
      {children}
    </div>
  );
};

export default Input;
