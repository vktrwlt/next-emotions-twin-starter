import { Button } from '@components/Button';
import type { NextPage } from 'next';

const Index: NextPage = () => {
  return (
    <Button variant='solid' onClick={() => alert('hello')}>
      Button
    </Button>
  );
};

export default Index;
