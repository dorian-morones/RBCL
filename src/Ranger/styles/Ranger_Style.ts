import styled from "styled-components";

// interface CheckboxElementProps {
//   checked: boolean;
//   fill: string;
//   color: string;
// }

export const RangerContainer = styled.div.attrs({
  className: "RBCL_RangerContainer",
})`
  
`;

export const RangerTitle = styled.p.attrs({
  className: "RBCL_RangerTitle",
})`
  margin: 0;
  margin-bottom: 10px;
  font-weight: 500;
  color: #fff;
`;

export const RangerValueContainer = styled.div.attrs({
  className: "RBCL_RangerValueContainer",
})`
  display: flex;
`;

export const RangerValue = styled.p.attrs({
  className: "RBCL_RangerValue",
})`
  margin: 0;
  color: #fff;
  font-weight: 500;
`;
