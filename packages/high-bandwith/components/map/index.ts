import dynamic from 'next/dynamic';

export default dynamic(import('./map-component'), { ssr: false });
