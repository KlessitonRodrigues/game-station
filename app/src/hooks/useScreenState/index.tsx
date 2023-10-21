import { useState } from 'react';

const useScreenState = (): App.Hooks.UseScreenState => {
  const [active, setActive] = useState(false);
  const [focus, setFocus] = useState(0);
  const [option, setOption] = useState(0);
  const [loading, setLoading] = useState(false);

  return {
    focus,
    active,
    option,
    loading,
    setActive,
    setFocus,
    setOption,
    setLoading,
  };
};

export default useScreenState;
