import { createContext, ReactNode, useState } from 'react';
import { screens } from '../routes/screenRoutes';


type PageParams = {
    page: string;
    props?: any;
};

type AppRouteContextType = {
    activeScreen: ReactNode,
    goToScreen: (page: PageParams['page'], props?: PageParams['props']) => void,
}

const FallbackScreen = () => {
    return <div>Seems something went wrong </div>;
}

export const AppRouteContext = createContext<AppRouteContextType>({
    activeScreen: <FallbackScreen />,
    goToScreen: () => { },
});

export const AppRouteProvider = ({ children }: { children: ReactNode }) => {
  const [page, setPage] = useState<PageParams>({ page: 'intro', props: {} });
  const getPageWithData = ({ page, props }: { page: string; props?: any }) => {
    if (screens[page]) {
      if (props) {
        return screens[page](props);
      }
      return screens[page]();
    }
    return null;
  };

  const goToScreen = (page: PageParams['page'], props?: PageParams['props']) => {
    setPage({ page, props });
  };

  const activeScreen = getPageWithData(page);
  const value = { activeScreen, goToScreen };
  return <AppRouteContext.Provider value={value}>{children}</AppRouteContext.Provider>;
};
