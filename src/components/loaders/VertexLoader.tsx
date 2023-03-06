import React from "react";
import { Vortex } from "react-loader-spinner";

const VertexLoader = ({}) => {
  return (
    <Vortex
      visible={true}
      height="100"
      width="100"
      ariaLabel="vortex-loading"
      wrapperStyle={{}}
      wrapperClass="vortex-wrapper"
      colors={["red", "green", "blue", "yellow", "orange", "purple"]}
    />
  );
};

export default VertexLoader;
