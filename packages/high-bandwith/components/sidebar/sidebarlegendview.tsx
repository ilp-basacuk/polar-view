import FilterCheck from 'components/filtercheck';
import Select from 'components/forms/select';
import React from 'react';
import { SideBarAction } from './sidebar.types';

interface DividerProps {
  label?: string;
}
const Divider: React.FC<DividerProps> = ({ label }) => (
  <div className="flex items-center">
    <div className="bg-softerblue h-[1px] flex-1" />
    {label && <div className="text-tiny text-mainblue font-bolder ml-2">{label}</div>}
  </div>
);

interface SideBarLegendViewProps {
  onChange?: (params: SideBarAction) => void;
}

const SidebarLegendView: React.FC<SideBarLegendViewProps> = () => (
  <div className="space-y-1 border border-b-0 border-mainblue p-3">
    <Divider label="SAR IMAGERY" />

    <FilterCheck bullet="orange" label="Sentinel-2" labelColor="mainblue" />
    <FilterCheck bullet="purple" label="Radarsat-2" labelColor="mainblue" />
    <FilterCheck bullet="green" label="Cosmos SkyMed" labelColor="mainblue" />
    <Divider />

    <div className="flex justify-between items-center p-2">
      <div className="flex-1 text-tiny text-mainblue font-bolder">INTERVAL</div>
      <div className="flex-1">
        <Select
          id="time"
          initialSelected="1"
          onChange={(selection) => {
            console.log(selection);
          }}
          options={[
            { label: 'LAST 24H.', value: '1' },
            { label: 'LAST 72H.', value: '2' },
            { label: 'LAST 7 DAYS.', value: '3' },
            { label: 'LAST 30 DAYS.', value: '4' },
          ]}
        />
      </div>
    </div>

    <Divider label="SEA ICE CONCENTRATION" />
    <FilterCheck bullet="gray" label="ASMR2 Sea ice edge (15%)" labelColor="mainblue" />
  </div>
);

export default SidebarLegendView;
