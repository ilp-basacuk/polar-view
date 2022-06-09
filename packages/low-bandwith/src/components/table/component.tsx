import { FunctionalComponent, h } from 'preact';
import { useTableData } from 'src/hooks/data';
import Button from '../button';
import Loading from '../loading';

interface TableProps {
  params: {
    aoi: string;
    dayslookback: 1 | 2 | 3 | 4 | 5 | 6 | 7;
    limit: number;
    offset: number;
  }
}

const Table: FunctionalComponent<TableProps> = ({
  params
}: TableProps) => {
  const { data, isFetching } = useTableData({
    params: {
      aoi: params.aoi,
      dayslookback: params.dayslookback,
      limit: 100,
      offset: 0,
    }
  });

  console.log(data);

  return (
    <div className='relative'>
      <Loading
        visible={isFetching}
        className="absolute z-10 flex justify-center w-full h-full bg-navyblue"
        iconClassName="w-5 h-5"
      />
      <table className="w-full text-sm text-white">
        <thead>
          <tr>
            <th className="text-right uppercase">Date</th>
            <th className="text-right uppercase">SAR footprint</th>
            <th className="text-right uppercase">Preview</th>
            <th className="text-right uppercase">Download</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id} className='w-full border-b border-dotted last-of-type:border-none border-mainblue'>
              <td className='py-5 align-top'>
                <div className='w-full text-right text-mainblue'>
                  {item.acqtime}
                </div>
              </td>
              <td className='py-5 align-top'>
                <div className="flex justify-end w-full">
                  <img
                    key={item.urlfootprint}
                    src={item.urlfootprint}
                    alt={item.productname}
                  />
                </div>
              </td>
              <td className='py-5 align-top'>
                <div className="flex justify-end w-full">
                  <img
                    key={item.urlpreview}
                    src={item.urlpreview}
                    alt={item.productname}
                  />
                </div>
              </td>
              <td className='py-5 align-top'>
                <div className='space-y-2'>
                  <div className='flex flex-col items-end w-full space-y-2'>
                    {item.p1 && (
                      <Button
                        size="none"
                        cut="right-top"
                        href={item.p1}
                        download={`${item.productname}-JPEGsmall.jpg`}
                      >
                        <div className='flex items-center py-1 space-x-5'>
                          <div className='space-y-2'>
                            <span className='block text-left text-white'>JPEG small</span>
                            <span className='block text-left text-mainblue'>(reduced resolution)</span>
                          </div>
                          <div>0.4MB</div>
                        </div>
                      </Button>
                    )}

                    {item.p2 && (
                      <Button
                        size="none"
                        cut="right-top"
                        href={item.p2}
                        download={`${item.productname}-JPEGfull.jpg`}
                      >
                        <div className='flex items-center py-1 space-x-5'>
                          <div className='space-y-2'>
                            <span className='block text-left text-white'>JPEG full</span>
                            <span className='block text-left text-mainblue'>(reduced resolution)</span>
                          </div>
                          <div>0.4MB</div>
                        </div>
                      </Button>
                    )}

                    {item.p3 && (
                      <Button
                        size="none"
                        cut="right-top"
                        href={item.p3}
                        download={`${item.productname}-JPEGfull.jpg`}
                      >
                        <div className='flex items-center py-1 space-x-5'>
                          <div className='space-y-2'>
                            <span className='block text-left text-white'>JPEG small 8 bit</span>
                            <span className='block text-left text-mainblue'>(reduced resolution)</span>
                          </div>
                          <div>0.4MB</div>
                        </div>
                      </Button>
                    )}

                    {item.p4 && (
                      <Button
                        size="none"
                        cut="right-top"
                        href={item.p4}
                        download={`${item.productname}-JPEGfull.jpg`}
                      >
                        <div className='flex items-center py-1 space-x-5'>
                          <div className='space-y-2'>
                            <span className='block text-left text-white'>JPEG 2000</span>
                            <span className='block text-left text-mainblue'>(reduced resolution)</span>
                          </div>
                          <div>0.4MB</div>
                        </div>
                      </Button>
                    )}

                    {item.p5 && (
                      <Button
                        size="none"
                        cut="right-top"
                        href={item.p5}
                        download={`${item.productname}-JPEGfull.jpg`}
                      >
                        <div className='flex items-center py-1 space-x-5'>
                          <div className='space-y-2'>
                            <span className='block text-left text-white'>JPEG 2000</span>
                            <span className='block text-left text-mainblue'>(reduced resolution)</span>
                          </div>
                          <div>0.4MB</div>
                        </div>
                      </Button>
                    )}


                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}


export default Table;
