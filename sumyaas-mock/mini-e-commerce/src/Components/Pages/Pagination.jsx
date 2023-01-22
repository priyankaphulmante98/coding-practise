import { Button } from "@chakra-ui/react";
import React from "react";

function Pagination({ current, total, onChange }) {
  const pages = new Array(Number(total)).fill(0);
  console.log(pages);
  console.log(current, total);
  return (
    <div>
      {pages.map((a, i) => (
        <Button onClick={() => onChange(i + 1)}>{i + 1}</Button>
      ))}
    </div>
  );
}

export default Pagination;
