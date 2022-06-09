import { Link } from "preact-router/match";
import { useState } from "preact/hooks";
import Filters from "src/components/filters";
import Logo from "src/components/logo";
import Menu from "src/components/menu";

import Table from "src/components/table";
import Url from "src/components/url";

const Tool = (props) => {
  const [filters, setFilters] = useState({
    zone: props.zone,
    dataset: props.dataset,
    dayslookback: props.dayslookback,
    aoi: props.aoi,
  });

  return (
    <div className="relative w-full min-h-screen py-32 bg-navyblue">
      <Logo />
      <Menu />

      <Url
        url="/tool"
        urlParams={filters}
      />

      <main className="w-full">
        <div className="w-full max-w-6xl px-10 mx-auto mt-20">
          <Filters
            filters={filters}
            onChangeFilters={(filters) => {
              setFilters(filters);
            }}
          />
        </div>
        <div className="w-full max-w-6xl px-10 mx-auto mt-20">
          <Table filters={filters} />
        </div>
      </main>

      <footer className="w-full max-w-6xl px-10 mx-auto mt-20">
        <p className="p-6 border border-dotted text-mainblue border-mainblue">
          This page offers a simplified presentation of results designed for low
          bandwidth connections. If you prefer more sophisticated query options
          and result presentation, please select a pole in the homepage to use
          the{" "}
          <Link href="/" className="text-white underline">
            high-bandwidth tool
          </Link>
        </p>
      </footer>
    </div>
  );
};

export default Tool;
