import React from 'react';
import styled from 'styled-components';

import config from '../../config';
import media from '../../utils/mediaQueryTemplates';


// Styled components
const StyledFooter = styled.footer`
  background: #f1eee9;
  min-height: 5vh;
  color: #ababab;
  padding: 1em 1em;
  font-size: 0.9rem;

  ${media.xsmall`
    padding: 1em 4em;
  `}
`;

export default function Footer() {
  return (
    <StyledFooter>
      <div>
        &copy; {new Date().getFullYear()} {config.title}
      </div>
    </StyledFooter>
  );
}
