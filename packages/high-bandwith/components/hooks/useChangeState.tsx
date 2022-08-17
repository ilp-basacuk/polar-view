import React from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const useChangeEffect = (onChange: React.EffectCallback, dependencies: ReadonlyArray<any>) => {
  const [firstRender, setFirstRender] = React.useState(true);
  React.useEffect(() => {
    if (firstRender) {
      setFirstRender(false);
    } else {
      onChange();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies);
};

export default useChangeEffect;
