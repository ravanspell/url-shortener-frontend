import React from 'react';
import IconButton from '../../atoms/IconButton';
import { faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  // social media links not added
  return (
    <footer className="mt-auto text-white-50">
      <div className="d-flex justify-content-between">
        <div>
          © 2023 - Accenture
        </div>

        <div className='d-flex gap-3'>
          <IconButton
            icon={faTwitter}
            color="white"
            hint="Our twitter page (not added)"
            onClick={() => { }}
            size="xl"
          />
          <IconButton
            icon={faFacebook}
            color="white"
            hint="Our facebook page (not added)"
            onClick={() => { }}
            size="xl"
          />
        </div>

      </div>
    </footer>
  );
};
export default Footer;
