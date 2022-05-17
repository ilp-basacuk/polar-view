import { FunctionalComponent, h } from 'preact';
import logo from '../../assets/logo.png';

const Logo : FunctionalComponent = () => (
  <a className="absolute top-6 left-6 z-50 text-white" style={{ width: '144px', height: '24px' }} href="/" title="polar view logo">
    <img alt="Polar view logo" src={logo} className="w-full h-full" />
  </a>
);

export default Logo;
