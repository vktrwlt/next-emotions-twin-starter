import { ReactNode } from 'react';

type MainProps = {
  children: ReactNode;
};

const Main = (props: MainProps) => (
  <div className='w-full antialiased text-gray-700'>{props.children}</div>
);

export { Main };
