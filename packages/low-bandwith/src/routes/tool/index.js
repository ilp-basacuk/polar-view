import { Link } from 'preact-router/match';
import { useState } from 'preact/hooks';
import Logo from 'src/components/logo';
import Menu from 'src/components/menu';

import Select from 'src/components/select';
import Table from 'src/components/table';

const Tool = () => {
  const [params, setParams] = useState({
    zone: 'antarctic',
    dataset: 'dataset-1',
    dayslookback: '1',
    aoi: 'Antarctic Peninsula',
  });

  return (
    <div className="relative w-full min-h-screen py-32 bg-navyblue">
      <Logo />
      <Menu />

      <main className="w-full">
        <div className="container max-w-5xl px-10 mx-auto text-5xl leading-tight text-center text-mainblue">
          <span>
            Showing images of the {' '}
          </span>
          {
            <Select
              selected={params.zone}
              options={[
                { value: 'antarctic', label: 'Antarctic' },
                { value: 'artic', label: 'Artic', disabled: true },
              ]}
              onChange={(v) => {
                setParams({
                  ...params,
                  zone: v
                })
              }}
            />
          }
          <span>
            {' '} using the dataset {' '}
          </span>
          {
            <Select
              selected={params.dataset}
              options={[
                { value: 'dataset-1', label: 'SAR High-res imagery' },
                { value: 'dataset-2', label: 'Sea ice concentration', disabled: true },
                { value: 'dataset-2', label: 'Stage of development', disabled: true },
              ]}
              onChange={(v) => {
                setParams({
                  ...params,
                  dataset: v
                })
              }}
            />
          }
          <span>
            {' '} from the {' '}
          </span>
          {
            <Select
              selected={params.dayslookback}
              options={[
                { value: '1', label: 'last 24 hours' },
                { value: '2', label: 'last 2 days' },
                { value: '3', label: 'last 3 days' },
                { value: '4', label: 'last 4 days' },
                { value: '5', label: 'last 5 days' },
                { value: '6', label: 'last 6 days' },
                { value: '7', label: 'last 7 days' },
              ]}
              onChange={(v) => {
                setParams({
                  ...params,
                  dayslookback: v
                })
              }}
            />
          }
          <span>
            {' '} in the area of the {' '}
          </span>
          {
            <Select
              selected={params.aoi}
              options={[
                { value: 'Antarctic Peninsula', label: 'Antarctic Peninsula' },
                { value: 'Weddell Sea', label: 'Weddell Sea' },
              ]}
              onChange={(v) => {
                setParams({
                  ...params,
                  aoi: v
                })
              }}
            />
          }
        </div>

        <div className='w-full max-w-5xl px-10 mx-auto mt-20'>
          <Table
            params={params}
          />
        </div>
      </main>

      <footer className="w-full max-w-5xl px-10 mx-auto mt-20">
        <p className="container p-6 border border-dotted text-mainblue border-mainblue">
          This page offers a simplified presentation of results designed for low bandwidth connections. If you prefer more sophisticated query options and result presentation, please select a pole in the homepage to use the{' '}
          <Link href="/" className="text-white underline">high-bandwidth tool</Link>
        </p>
      </footer>
    </div>
  )
};

export default Tool;
