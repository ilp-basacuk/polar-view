import { Link } from 'preact-router/match';
import sarMock from 'src/assets/sar_mock.png'
import previewMock from 'src/assets/preview_mock.png'
import Logo from 'src/components/logo';
import Menu from 'src/components/menu';

import Button from 'src/components/button';
import Select from 'src/components/select';
import { useToolData } from 'src/hooks/data';

const Tool = () => {
  const { data } = useToolData({
    params: {
      aoi: 'Antarctic Peninsula',
      dayslookback: 1,
      limit: 5,
      offset: 0,
    }
  });

  console.log(data);

  return (
  <div className="relative w-full h-screen bg-navyblue">
    <Logo />
		<Menu />
    <main className="flex flex-col items-center justify-center w-full h-4/5">
      <div className="container max-w-5xl px-10 mx-auto text-5xl leading-tight text-center text-mainblue">
        <span>
          Showing images of the {' '}
        </span>
        {
          <Select
            options={[
              { value: 'artic', label: 'Artic' },
              { value: 'antarctic', label: 'Antarctic' },
            ]}
          />
        }
        <span>
          {' '} using the dataset {' '}
        </span>
        {
          <Select
            options={[
              { value: 'dataset-1', label: 'Dataset-1' },
              { value: 'dataset-2', label: 'Dataset-2' },
            ]}
          />
        }
        <span>
          {' '} from the {' '}
        </span>
        {
          <Select
            options={[
              { value: 'last-24-hours', label: 'last 24 hours' },
              { value: 'last-23-hours', label: 'last 23 hours' },
            ]}
          />
        }
        <span>
          {' '} in the area of the {' '}
        </span>
        {
          <Select
            options={[
              { value: 'artic', label: 'Artic' },
              { value: 'antarctic', label: 'Antarctic' },
            ]}
          />
        }
      </div>
      <div className="container grid grid-cols-4 mt-10 text-sm text-white">
        <div>
          <div className="mb-2 text-right uppercase">Date</div>
          <div className="h-24 text-right uppercase text-mainblue">2022-03-01 11:18:50.943089</div>
        </div>
        <div>
          <div className="mb-2 text-right uppercase">SAR footprint</div>
          <div className="flex justify-end h-24">
            <img src={sarMock} />
          </div>
        </div>
        <div>
          <div className="mb-2 text-right uppercase">Preview</div>
          <div className="flex justify-end h-24">
            <img src={previewMock} />
          </div>
        </div>
        <div>
          <div className="mb-2 text-right uppercase">Download</div>
          <div className="flex flex-col justify-end h-24">
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
    <footer className="flex items-center justify-center w-full">
      <p className="container p-6 border border-dotted text-mainblue border-mainblue">
        This page offers a simplified presentation of results designed for low bandwidth connections. If you prefer more sophisticated query options and result presentation, please select a pole in the homepage to use the{' '}
        <Link href="/" className="text-white underline">high-bandwidth tool</Link>
      </p>
    </footer>
  </div>
)};

export default Tool;
