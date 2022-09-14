import styled, { css } from 'styled-components';

// const Text = styled.p`
//   font-family: ${props => props.fontFamily || 'sans-serif'};
//   font-size: ${props => props.fontSize};
//   text-transform: ${props => props.textTransform || 'none'};
//   margin: ${props => props.margin || 0};
//   font-weight: ${props => props.fontWeight || 500};
//   color: ${props => props.color || '#000'};
//   line-height: ${props => props.lineHeight || 'normal'};
// `;

export const StandardTextStyle = css`
  font-family: 'Roboto', sans-serif;
  font-size: 1rem;
  font-weight: 100;
  line-height: 1.6;
`;

export const Header = styled.h1`
  font-family: 'Abril Fatface', cursive;
  font-size: 3rem;
  font-weight: 700;
`;

export const Standard = styled.p`
  ${StandardTextStyle};
`;

export const Label = styled.p`
  ${StandardTextStyle};
  font-size: 0.75rem
`;
