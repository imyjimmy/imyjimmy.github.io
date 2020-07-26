import "lazysizes";
import styled from 'styled-components'

const CustomImage = styled.img`
  max-width: 30%;
`;

function Image({ alt, src, previewSrc, className }) {
  return (
    <CustomImage
      className={`lazyload blur-up ${className}`}
      alt={alt}
      src={previewSrc}
      data-srcset={src}
    />
  );
}

export default Image
