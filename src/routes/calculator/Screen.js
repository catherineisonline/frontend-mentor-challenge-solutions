import React from "react";
const Screen = React.forwardRef((props, ref) => (
  <section className="screen">
    <p ref={ref}>{props.calc || "0"}</p>
  </section>
));

export default Screen;
