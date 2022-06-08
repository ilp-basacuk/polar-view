import { Link } from 'preact-router/match';
import Logo from 'src/components/logo';
import Menu from 'src/components/menu';

import Select from 'src/components/select';
import Table from 'src/components/table';

const Tool = () => {
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

        <div className='w-full max-w-5xl px-10 mx-auto mt-20'>
          <Table />
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
