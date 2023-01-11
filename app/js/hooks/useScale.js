import { extent } from "d3-array";
import { scaleBand, scaleLinear } from "d3";
import { useMemo } from "react";

const useScale = ({ data, aes, size, absolute = false }) => {
  const values = data.map((d) => d[aes]);
  return useMemo(() => {
    if (absolute) values.unshift(0);
    const isNumeric = typeof values[0] === "number";
    const domain = isNumeric ? extent(values) : [...new Set(values)];
    const range = aes === "y" ? [size, 0] : [0, size];
    const scaleFunction = isNumeric ? scaleLinear : scaleBand;
    return scaleFunction(domain, range);
  }, [absolute, aes, size, ...values]); // eslint-disable-line
};

export default useScale;
