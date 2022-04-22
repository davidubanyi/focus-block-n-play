import { Button } from '../components/base/Button';
import { H2Thin, H2Med } from '../components/base/Typography';

export const IntroScreen = ({ ...props }) => {
  console.log(props);
  return (
    <div className="flex items-center flex-col p-4">
      <H2Med className="my-4">Welcome to FocusBlockNPlay</H2Med>
      <div className="my-4">
        The idea behind this app is simple, it helps you block out certain website so you can focus
        on your work , you can block websites for some time and unblock them when you want.
      </div>
      <div className="my-4">
        If you really mean business, you should connect your wallet get FBNPTokens to gain rewards
        and pay penalties for breaking the your set time.
      </div>
      <Button>Use without wallet</Button>
      <Button>Connect wallet</Button>
    </div>
  );
};
