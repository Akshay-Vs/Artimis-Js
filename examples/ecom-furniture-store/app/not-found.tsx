import { Button, Text } from '@artimisjs/ui';
import Link from 'next/link';
import React from 'react';

const page = () => {
  return (
    <main className="h-screen flex-center flex-col">
      <Text size="8x">404</Text>
      <Text size="5x">Page Not Found</Text>
      <Link href="/">
        <Button variant="outlined" className="mt-10 bg-transparent">
          Go Back To Home Page
        </Button>
      </Link>
    </main>
  );
};

export default page;
