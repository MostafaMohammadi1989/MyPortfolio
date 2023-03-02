import styled from "styled-components";
import { Theme } from "./Theme";

export default function Typography({ variant, component, children }) {
  return (
    <TypographyRoot
      as={component || Theme.typography.component[variant]}
      variant={variant}
    >
      {children}
    </TypographyRoot>
  );
}

const TypographyRoot = styled.span`
  font-size: ${({ variant }) => Theme.typography.fontSize[variant]};
  line-height: ${({ variant }) => Theme.typography.lineHeight[variant]};
  font-weight: ${({ variant }) => Theme.typography.fontWeights[variant]};
`;
//
// as styled component
// export const H1 = styled.h1`
//   font-size: ${Theme.typography.fontSize.h1};
//   line-height: ${Theme.typography.lineHeight.h1};
//   font-weight: ${Theme.typography.fontWeights.light};
// `;
// export const H2 = styled.h2`
//   font-size: ${Theme.typography.fontSize.h2};
//   line-height: ${Theme.typography.lineHeight.h2};
//   font-weight: ${Theme.typography.fontWeights.light};
// `;
// export const H3 = styled.h3`
//   font-size: ${Theme.typography.fontSize.h3};
//   line-height: ${Theme.typography.lineHeight.h3};
//   font-weight: ${Theme.typography.fontWeights.regular};
// `;
// export const H4 = styled.h4`
//   font-size: ${Theme.typography.fontSize.h4};
//   line-height: ${Theme.typography.lineHeight.h4};
//   font-weight: ${Theme.typography.fontWeights.regular};
// `;
// export const H5 = styled.h5`
//   font-size: ${Theme.typography.fontSize.h5};
//   line-height: ${Theme.typography.lineHeight.h5};
//   font-weight: ${Theme.typography.fontWeights.regular};
// `;
// export const H6 = styled.h6`
//   font-size: ${Theme.typography.fontSize.h6};
//   line-height: ${Theme.typography.lineHeight.h6};
//   font-weight: ${Theme.typography.fontWeights.regular};
// `;

// export const Subline1 = styled.p`
//   font-size: ${Theme.typography.fontSize.subline1};
//   line-height: ${Theme.typography.lineHeight.subline1};
//   font-weight: ${Theme.typography.fontWeights.regular};
// `;
// export const Subline2 = styled.p`
//   font-size: ${Theme.typography.fontSize.subline2};
//   line-height: ${Theme.typography.lineHeight.subline2};
//   font-weight: ${Theme.typography.fontWeights.medium};
// `;

// export const Body1 = styled.p`
//   font-size: ${Theme.typography.fontSize.body1};
//   line-height: ${Theme.typography.lineHeight.body1};
//   font-weight: ${Theme.typography.fontWeights.regular};
// `;
// export const Body2 = styled.p`
//   font-size: ${Theme.typography.fontSize.body2};
//   line-height: ${Theme.typography.lineHeight.body2};
//   font-weight: ${Theme.typography.fontWeights.regular};
// `;

// export const ButtonText = styled.span`
//   font-size: ${Theme.typography.fontSize.button};
//   line-height: ${Theme.typography.lineHeight.button};
//   font-weight: ${Theme.typography.fontWeights.medium};
// `;

// export const Caption = styled.span`
//   font-size: ${Theme.typography.fontSize.caption};
//   line-height: ${Theme.typography.lineHeight.caption};
//   font-weight: ${Theme.typography.fontWeights.regular};
// `;

// export const OverLine = styled.span`
//   font-size: ${Theme.typography.fontSize.overLine};
//   line-height: ${Theme.typography.lineHeight.overLine};
//   font-weight: ${Theme.typography.fontWeights.regular};
// `;
// export const H1 = styled.h1`
//   font-size: ${({ Theme }) => Theme.typography.fontSize.h1};
//   line-height: ${({ Theme }) => Theme.typography.lineHeight.h1};
//   font-weight: ${({ Theme }) => Theme.typography.fontWeights.light};
// `;

// export const H2 = styled.h2`
//   font-size: ${({ Theme }) => Theme.typography.fontSize.h2};
//   line-height: ${({ Theme }) => Theme.typography.lineHeight.h2};
//   font-weight: ${({ Theme }) => Theme.typography.fontWeights.light};
// `;

// export const H3 = styled.h3`
//   font-size: ${({ Theme }) => Theme.typography.fontSize.h3};
//   line-height: ${({ Theme }) => Theme.typography.lineHeight.h3};
//   font-weight: ${({ Theme }) => Theme.typography.fontWeights.light};
// `;

// export const H4 = styled.h4`
//   font-size: ${({ Theme }) => Theme.typography.fontSize.h4};
//   line-height: ${({ Theme }) => Theme.typography.lineHeight.h4};
//   font-weight: ${({ Theme }) => Theme.typography.fontWeights.regular};
// `;

// export const H5 = styled.h5`
//   font-size: ${({ Theme }) => Theme.typography.fontSize.h5};
//   line-height: ${({ Theme }) => Theme.typography.lineHeight.h5};
//   font-weight: ${({ Theme }) => Theme.typography.fontWeights.regular};
// `;

// export const H6 = styled.h6`
//   font-size: ${({ Theme }) => Theme.typography.fontSize.h6};
//   line-height: ${({ Theme }) => Theme.typography.lineHeight.h6};
//   font-weight: ${({ Theme }) => Theme.typography.fontWeights.regular};
// `;

// export const subtitle1 = styled.p`
//   font-size: ${({ Theme }) => Theme.typography.fontSize.subtitle1};
//   line-height: ${({ Theme }) => Theme.typography.fontSize.subtitle1};
//   font-weight: ${({Theme}) => };
// `;
