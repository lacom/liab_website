import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Img from 'gatsby-image';

import media from '../../utils/mediaQueryTemplates';


// Styled components
const Container = styled.div`
  background: #f1eee9;
  padding: 1em;
  color: #ababab;
`;
const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
const CoverImage = styled(Img)`
  width: 100px;
  vertical-align: middle;
  margin: 0 1em 0 0;

  ${media.small`
    margin-right: 2em;
  `}
`;

export default function ArticleCoverAbout({ text, img }) {
  return (
    <Container>
      <h3>About the Cover</h3>
      <ContentContainer>
        <div>
          {img ? (<CoverImage fluid={img.childImageSharp.fluid} />) : null}
        </div>
        <div>
          <p>{text}</p>
        </div>
      </ContentContainer>
    </Container>
  );
}

ArticleCoverAbout.propTypes = {
  img: PropTypes.object.isRequired,
  text: PropTypes.string.isRequired,
};
