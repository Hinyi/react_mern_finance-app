import DashboardBox from "@/components/DashboardBox";
import React from "react";

type Props = {};

const Row1 = (props: Props) => {
  return (
    <>
      <DashboardBox gridArea="a">aa</DashboardBox>
      <DashboardBox gridArea="b">aa</DashboardBox>
      <DashboardBox gridArea="c">aa</DashboardBox>
    </>
  );
};

export default Row1;
