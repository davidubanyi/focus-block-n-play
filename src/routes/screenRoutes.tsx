import { IntroScreen } from '../screens/Intro';

export type Screens = {
  [key: string]: (props?: JSX.IntrinsicAttributes & { [x: string]: any }) => React.ReactNode;
};

export const screens: Screens = {
  intro: (props) => <IntroScreen {...props} />,
};
