import { useCallback, useState } from 'react';

export default (): App.Hooks.UseUIState => {
  const [active, setActive] = useState(false);
  const [focus, setFocus] = useState(0);
  const [option, setOption] = useState(0);
  const [loading, setLoading] = useState(false);

  const setUI: App.Hooks.UseUIState['setUI'] = (key, value) => {
    if (key === 'active' && typeof value === 'boolean') setActive(value);
    if (key === 'focus' && typeof value === 'number') !active && value >= 0 && setFocus(value);
    if (key === 'option' && typeof value === 'number') value >= 0 && setOption(value);
    if (key === 'loading' && typeof value === 'boolean') setLoading(value);
  };

  const setUIHook = useCallback(setUI, [active, focus, option, loading]);

  return { focus, active, option, loading, setUI: setUIHook };
};
