import React from 'react';

export const useChangeEffect = (onChange: React.EffectCallback, dependencies: ReadonlyArray<any>) => {
  const [firstRender, setFirstRender] = React.useState(true);
  React.useEffect(() => {
    if (firstRender) {
      setFirstRender(false);
    } else {
      onChange();
    }
  }, dependencies);
};
