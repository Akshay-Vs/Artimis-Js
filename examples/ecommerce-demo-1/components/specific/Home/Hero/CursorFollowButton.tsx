'use client';
import { Column, Text } from '@artimisjs/ui';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import React, { useRef, useEffect } from 'react';

const CursorFollowButton = ({ href }: { href: string }) => {
  const buttonRef = useRef<typeof Column & HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (buttonRef.current) {
        const buttonWidth = buttonRef.current.offsetWidth;
        const buttonHeight = buttonRef.current.offsetHeight;

        // Adjust these values to fine-tune the position
        const offsetX = -0.74 * buttonWidth;
        const offsetY = -1.35 * buttonHeight;

        // Calculate the position relative to the viewport
        const x = event.clientX + offsetX + window.scrollX;
        const y = event.clientY + offsetY + window.scrollY;

        buttonRef.current.style.top = `${y}px`;
        buttonRef.current.style.left = `${x}px`;
      }
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <Column
      ref={buttonRef}
      className="h-44 w-44 bg-[#ffffff7c] backdrop-blur-[8px] rounded-full absolute z-[8] cursor-pointer select-none"
    >
      <Link href={href} className="h-full w-full flex-center flex-col gap-4">
        <FontAwesomeIcon
          size="lg"
          icon={faShoppingBag}
          className="text-[#545454]"
        />
        <Text size="xl" className="font-[600] text-[#545454] text-center">
          Shop Now
        </Text>
      </Link>
    </Column>
  );
};

export default CursorFollowButton;
