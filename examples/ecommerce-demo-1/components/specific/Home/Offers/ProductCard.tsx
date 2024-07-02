import { Button, Card, Text } from '@artimisjs/ui';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import React from 'react';

const ProductCard = () => {
  return (
    <Card
      height="fit"
      width="full"
      radius="xxxl"
      className="bg-[#fcfcfc] border-[1px] flex flex-col gap-4 p-3 cursor-pointer"
    >
      <div className="h-[44vh] w-full rounded-3xl overflow-hidden">
        <Image
          src="https://img.freepik.com/foto-gratis/mujer-feliz-gafas-sol-sombrero-trinchera-sonrie-sobre-fondo-aislado-senora-alegre-sueter-rayas-abrigo-beige-posando_197531-18697.jpg?t=st=1719849557~exp=1719853157~hmac=b0f2f03260bb9810cffaf391bb5e95fefc969313fdaba58a935a90d72a5c1b96&w=1080"
          alt="Offers"
          height={720}
          className="w-full h-full object-center object-cover"
          width={720}
        />
      </div>
      <div className="flex flex-col gap-4 h-[40%] px-2">
        <div className="flex flex-col gap-2">
          <Text size="xl" className="font-[600] text-[#404040]">
            {`Mistery of the moon`.toUpperCase()}
          </Text>
          <Text className="font-[400] text-[#717171]" size="md">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. At
            delectus itaque cupiditate
          </Text>
        </div>

        <div className="flex-center-between w-full">
          <div className="opacity-60">
            <Text className="font-[500]" size="xs">
              Sizes:
            </Text>
            <Text className="font-[500]" size="md">
              S / M / L / XL
            </Text>
          </div>
          <div className="mr-10">
            <Text className="font-[500] opacity-60" size="xs">
              Colors:
            </Text>
            <div className="flex-center">
              <div className="h-4 w-4 bg-red-400 rounded-full" />
              <div className="h-4 w-4 bg-fuchsia-400 rounded-full" />
              <div className="h-4 w-4 bg-emerald-400 rounded-full" />
            </div>
          </div>
        </div>

        <div className="flex-center-between">
          <Text size="xl" className="font-[600] text-[#404040]">
            Price: $99
          </Text>
          <Text className="font-[500]" size="lg">
            <Button size="xl" radius="full" className="px-10">
              <span className="flex-center gap-4">
                Shop Now
                <FontAwesomeIcon icon={faShoppingBag} />
              </span>
            </Button>
          </Text>
        </div>
      </div>
    </Card>
  );
};

export default ProductCard;
