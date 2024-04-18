import { Landing } from "./Landing";
import { WhyUs } from "./WhyUs";
import { Services } from "./Services";
import { Value } from "./Value";
import { Teams } from "./Teams";
import { Newsletter } from "./NewsLetter";

export const HomePage = () => {

  return (
    <div>
        <Landing />
        <WhyUs />
        <Services />
        <Value />
        <Teams />
        <Newsletter label="Subscribe to our NewLetter" button="Join Us"/>
    </div>
  );
};
