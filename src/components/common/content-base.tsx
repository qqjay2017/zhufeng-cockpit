import React from "react";
import styled from "styled-components";

const ContentBase = styled.div`
  width: 100%;
  height: calc(100vh - var(--space-header));
  padding: 24px;
  @media (max-width: 600px) {
    width: 100%;
    height: unset;
  }
`;

export default ContentBase;
