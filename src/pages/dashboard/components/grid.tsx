import ContentBase from "@/components/common/content-base";
import React from "react";
import styled from "styled-components";

const DashboardGrid = styled(ContentBase)`
  display: grid;
  grid-template-areas:
    "t1 t3 t4"
    "t2 t3 t4";
    grid-template-columns:25fr 50fr 25fr;
    grid-template-rows:1fr 1fr;
    grid-gap: 24px;

    @media (max-width: 600px) {
    grid-template-areas:
      "t1"
      "t2"
      "t3"
      "t4";
     
    grid-template-rows: 300px 300px 600px 900px ;
    grid-template-columns: 1fr;
  }
`;

export default DashboardGrid;
