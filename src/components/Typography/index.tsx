import styled from "styled-components";
import {color, ColorProps, space, SpaceProps, typography, TypographyProps} from "styled-system";

export const H1 = styled.h1<SpaceProps & ColorProps>`
  font-size:${props => props.theme.fonSize.extraLarge};
  font-weight: 700;
  letter-spacing: -0.02em;
  ${color};
  ${space};
`


export const Text = styled.p<SpaceProps & ColorProps & TypographyProps>`
   ${color};
  ${space};
  ${typography};
`


export const LinkText = styled.span<SpaceProps>`
  font-weight: 700;
  font-size: ${(props) => props.theme.fontSize.medium};
  text-decoration: underline;
  color: ${(props) => props.theme.colors.secondary};
  letter-spacing: 0.03em;
  display: inline-block;
  ${space};
`

export const PreTitle = styled.span<SpaceProps>`
  font-weight: 700;
  font-size: ${(props) => props.theme.fontSizes.extraSmall};
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.text};
  letter-spacing: 0.03em;
  display: inline-block;
  ${space};
`;
