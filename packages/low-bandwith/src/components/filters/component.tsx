import { FunctionalComponent, h } from 'preact';
import Select from 'src/components/select';

type Filters = {
  zone: string;
  dataset: string;
  dayslookback: string;
  aoi: string;
}

interface FiltersProps {
  filters: Filters,
  onChangeFilters: (filters: Filters) => void;
}

const Filters: FunctionalComponent<FiltersProps> = ({
  filters,
  onChangeFilters,
}: FiltersProps) => {
  return (
    <div className="container max-w-6xl px-10 mx-auto text-2xl text-center md:leading-tight md:text-5xl text-mainblue">
    <span>
      Showing images of the {' '}
    </span>
    {
      <Select
        selected={filters.zone}
        options={[
          { value: 'antarctic', label: 'Antarctic' },
          { value: 'artic', label: 'Artic', disabled: true },
        ]}
        onChange={(v) => {
          onChangeFilters({
            ...filters,
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
        selected={filters.dataset}
        options={[
          { value: 'dataset-1', label: 'SAR High-res imagery' },
          { value: 'dataset-2', label: 'Sea ice concentration', disabled: true },
          { value: 'dataset-2', label: 'Stage of development', disabled: true },
        ]}
        onChange={(v) => {
          onChangeFilters({
            ...filters,
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
        selected={filters.dayslookback}
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
          onChangeFilters({
            ...filters,
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
        selected={filters.aoi}
        options={[
          { value: 'Antarctic Peninsula', label: 'Antarctic Peninsula' },
          { value: 'Weddell Sea', label: 'Weddell Sea' },
        ]}
        onChange={(v) => {
          onChangeFilters({
            ...filters,
            aoi: v
          })
        }}
      />
    }
  </div>
  )
}


export default Filters;
