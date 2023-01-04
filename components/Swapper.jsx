// index.tsx

import dynamic from 'next/dynamic';

const LiFiWidgetDynamic = dynamic(
  () => import('@lifi/widget').then((module) => module.LiFiWidget),
  {
    ssr: false,
  },
);

const Home = () => {
  return (
    <LiFiWidgetDynamic
      config={{
        containerStyle: {
          width: 392,
          height: 640,
          border: `1px solid rgb(234, 234, 234)`,
          borderRadius: '16px',
          display: 'flex',
          maxWidth: 392,
        },
      }}
    />
  );
};

export default Home;
