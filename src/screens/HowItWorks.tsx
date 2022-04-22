import { useContext } from "react";
import { Button } from "../components/base/Button";
import { AppRouteContext } from "../providers/AppRouteProvider";

export const HowItWorksScreen = () => {
    const {goToScreen} = useContext(AppRouteContext);
  return <div>This is the how it works screen
      <Button onClick={() => goToScreen('intro', {name: 'John'})}>Go to intro</Button>
  </div>;
};
