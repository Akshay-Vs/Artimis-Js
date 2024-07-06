import React from 'react';
import { Card, Text, Row } from '@artimisjs/ui';

const Exclusive = () => {
  return (
    <section className="flex flex-col gap-8">
      <Text size="xxhuge">Fashion For Everybody</Text>
      <Row align="center">
        <Card height="lg" width="full" radius="xxxl"></Card>
        <Card height="lg" width="full" radius="xxxl"></Card>
      </Row>
    </section>
  );
};

export default Exclusive;
