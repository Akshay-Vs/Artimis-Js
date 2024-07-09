import React from 'react';
import { Card, Text, Row, Button } from '@artimisjs/ui';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Footer from '../Footer/Footer';

const AboutUs = () => {
  return (
    <section className="flex flex-col gap-8">
      <Text size="xxhuge">About Us</Text>
      <Row align="center" className="gap-4">
        <Card height="lg" width="full" radius="xxxl" className="flex-1">
          <Card.Backdrop className="h-full w-full">
            <Image
              src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=1974"
              height={720}
              width={720}
              alt="about us"
              className="h-full w-full object-cover items-center"
            />
          </Card.Backdrop>
          <Card.Footer className="w-full px-8">
            <Row align="end" className="w-full gap-4">
              <Button buttonType="icon">
                <FontAwesomeIcon icon={faChevronLeft} />
              </Button>
              <Button buttonType="icon">
                <FontAwesomeIcon icon={faChevronRight} />
              </Button>
            </Row>
          </Card.Footer>
        </Card>

        <Card
          height="lg"
          width="full"
          radius="xxxl"
          className="flex-1 bg-transparent px-8"
        >
          <Text size="xhuge" className="w-full text-center">
            Fashion For Everybody
          </Text>
          <h2 className="text-[1.4rem] flex-1 mt-6 font-[500] text-[#414141]">
            At Vita.Chic, we believe that fashion is more than just clothing
            it&apos;s a way of life. Founded by a team of passionate fashion
            enthusiasts, our brand is dedicated to bringing you the latest
            trends, timeless styles, and unparalleled quality. Our journey began
            with a simple idea: to create a fashion destination that empowers
            individuals to express their unique style and confidence.
          </h2>
          <h2 className="text-[1.4rem] flex-1 mt-6 font-[500] text-[#414141]">
            Fashion is more than what you wear it&apos;s about how it makes you
            feel. At Vita.Chic, we celebrate individuality, confidence, and the
            joy of dressing well. Join our community of fashion-forward
            individuals who are making a statement with their style.
          </h2>
        </Card>
      </Row>

      <Footer />
    </section>
  );
};

export default AboutUs;
