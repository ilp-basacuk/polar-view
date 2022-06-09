import { useMemo } from 'preact/hooks';
import { useQuery } from 'react-query';

export const useTableData = ({
  params,
}) => {
  const query = useQuery(["tool", JSON.stringify(params)], () => {
    const paramsParsed = Object.keys(params).reduce((acc, key) => {
      acc = [
        ...acc,
        `${key}:${encodeURIComponent(params[key])}`,
      ]
      return acc;
    }, []).join(';');
    // aoi:Antarctic%20Peninsula;dayslookback:7;limit:5;offset:10
    return fetch(
      `https://geos.polarview.aq/geoserver/polarview/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=polarview:vw_lowbw_s1&outputFormat=application%2Fjson&viewparams=${paramsParsed}`
    ).then(res => res.json())
  }, {
    keepPreviousData: true,
    refetchOnWindowFocus: false,
  });

  const { data } = query;

  const parsedData = useMemo(() => {
    if (!data?.features) return [];

    return data.features.map(feature => {
      return {
        ...feature.properties,
        id: feature.id,
      }
    })
  }, [data]);

  return {
    ...query,
    data: parsedData,
  };
};