import LocaleToggle from 'containers/LocaleToggle';
import * as React from 'react';

import Wrapper from './Wrapper';

function Footer() {
  return (
    <Wrapper>
      <section>© Avinash 2020</section>
      <section>
        <LocaleToggle />
      </section>
    </Wrapper>
  );
}

export default Footer;
