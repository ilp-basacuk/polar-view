import { Link } from 'preact-router/match';
import sarMock from '../../assets/sar_mock.png'
import previewMock from '../../assets/preview_mock.png'
import Logo from '../../components/logo';
import Menu from '../../components/menu';
import Button from '../../components/button';

const renderSelect = () => (
  <select className="align-middle">
    <option value="artic">Artic</option>
    <option value="antarctic">Antarctic</option>
  </select>
);

const Tool = () => (
  <div className="bg-navyblue h-screen w-full relative">
    <Logo />
		<Menu />
    <main className="w-full h-4/5 flex flex-col justify-center items-center">
      <div className="container text-mainblue text-center text-5xl">
        <span>
          Showing images of the {' '}
        </span>
        {renderSelect()}
        <span>
          {' '} using the dataset {' '}
        </span>
        {renderSelect()}
        <span>
          {' '} from the {' '}
        </span>
        {renderSelect()}
        <span>
          {' '} in the area of the {' '}
        </span>
        {renderSelect()}
      </div>
      <div className="container mt-10 grid grid-cols-4 text-white text-sm">
        <div>
          <div className="uppercase text-right mb-2">Date</div>
          <div className="uppercase text-right text-mainblue h-24">2022-03-01 11:18:50.943089</div>
        </div>
        <div>
          <div className="uppercase text-right mb-2">SAR footprint</div>
          <div className="h-24 flex justify-end">
            <img src={sarMock} />
          </div>
        </div>
        <div>
          <div className="uppercase text-right mb-2">Preview</div>
          <div className="h-24 flex justify-end">
            <img src={previewMock} />
          </div>
        </div>
        <div>
          <div className="uppercase text-right mb-2">Download</div>
          <div className="h-24 flex flex-col justify-end">
            <Button containerClassName="flex justify-end">
              JPEG2000 (reduced resolution)
              0.4MB
            </Button>
            <Button containerClassName="flex justify-end">
              JPEG2000 (reduced resolution)
              5.2MB
            </Button>
            <Button containerClassName="flex justify-end">
              JPEG2000 (reduced resolution)
              5.2MB
            </Button>
          </div>
        </div>
      </div>
    </main>
    <footer className="w-full flex justify-center items-center">
      <p className="container text-mainblue border border-mainblue border-dotted p-6">
        This page offers a simplified presentation of results designed for low bandwidth connections. If you prefer more sophisticated query options and result presentation, please select a pole in the homepage to use the{' '}
        <Link href="/" className="text-white underline">high-bandwidth tool</Link>
      </p>
    </footer>
  </div>
);

export default Tool;
