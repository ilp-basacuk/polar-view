import Button from 'components/button';

const LOW_BANDWITH_URL = process.env.NEXT_PUBLIC_LOW_BANDWITH_URL;

const Menu = () => (
  <div className="flex z-50">
    <Button className="border-r-0 mr-0.5 text-tiny px-4" theme="primary" cut="left-top" href={LOW_BANDWITH_URL}>
      HOMEPAGE
    </Button>
    <Button className="border-l-0 px-4" theme="primary" cut="right-bottom" href={`${LOW_BANDWITH_URL}/about`}>
      ABOUT
    </Button>
  </div>
);

export default Menu;
