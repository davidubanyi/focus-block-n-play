import { Button } from '../components/base/Button';
import { H2Thin } from '../components/base/Typography';

export const IntroScreen = () => {
  return (
    <div className="flex items-center flex-col">
      <H2Thin>Welcome to FocusAndBlock</H2Thin>
      <div>
        The idea behind this app is simple, it helps you block out certain website so you can focus
        on your work , you can block websites for some time and unblock them when you want.
      </div>
      <div>
        If you really mean business, you should connect your wallet get FABTokens to gain rewards
        and pay penalties for breaking the your set time.
      </div>
      <Button>Use without wallet</Button>
      <Button>Connect wallet</Button>
    </div>
  );
};
