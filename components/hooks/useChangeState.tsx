import React from 'react';

const useChangeEffect = (onChange: React.EffectCallback, dependencies: ReadonlyArray<any>) => {
  const [firstRender, setFirstRender] = React.useState(true);
  React.useEffect(() => {
    if (firstRender) {
      setFirstRender(false);
    } else {
      onChange();
    }
  }, dependencies);
};

export default useChangeEffect;
