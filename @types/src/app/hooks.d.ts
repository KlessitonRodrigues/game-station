declare namespace App {
  namespace Hooks {
    type UseRoutesContext = {
      path: string;
      lang: string;
      setPath: React.Dispatch<App.Utils.Paths>;
      setLang: React.Dispatch<string>;
    };

    type UseAppContext = {
      firstRun: boolean;
      bgImage: string;
      bgColor: App.Utils.BgColors;
      setFirstRun: React.Dispatch<boolean>;
      setBgImage: React.Dispatch<string>;
      setBgColor: React.Dispatch<App.Utils.BgColors>;
    };

    type UseScreenState = {
      active: boolean;
      focus: number;
      option: number;
      loading: boolean;
      setActive: React.Dispatch<boolean>;
      setFocus: React.Dispatch<number>;
      setOption: React.Dispatch<number>;
      setLoading: React.Dispatch<boolean>;
    };
  }
}
