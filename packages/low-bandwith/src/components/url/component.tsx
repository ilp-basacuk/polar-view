import { FunctionalComponent } from 'preact';
import { route } from 'preact-router';
import { useEffect } from 'preact/hooks';

type Url = {
  zone: string;
  dataset: string;
  dayslookback: string;
  aoi: string;
}

interface UrlProps {
  url: string;
  urlParams: Url,
}

const Url: FunctionalComponent<UrlProps> = ({
  url,
  urlParams,
}: UrlProps) => {

  useEffect(() => {
    const queryParams = Object.keys(urlParams).reduce((acc, key) => {
      if (urlParams[key]) {
        acc.push(`${key}=${encodeURIComponent(urlParams[key])}`);
      }
      return acc;
    }, []).join('&');

    route(`${url}?${queryParams}`);


  }, [urlParams]);

  return null;
}


export default Url;
