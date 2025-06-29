import React, { useRef, useEffect } from "react";

function RefTest() {
  const testRef = useRef(null);

  useEffect(() => {
    console.log("testRef.current:", testRef.current);
  }, []);

  return <div ref={testRef}>Testing `useRef`</div>;
}

export default RefTest;