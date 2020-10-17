import React from "react";
import Card from "./Card";
import Series from "./series";
const Home = () => {
  return (
    <>
      <div style={{ display: "flex" }}>
        <Card
          imgsrc={Series[1].imgsrc}
          sname={Series[1].sname}
          slink={Series[1].slink}
        />
        <Card
          imgsrc={Series[0].imgsrc}
          sname={Series[0].sname}
          slink={Series[0].slink}
        />
        <Card
          imgsrc={Series[2].imgsrc}
          sname={Series[2].sname}
          slink={Series[2].slink}
        />
      </div>
      <div style={{ display: "flex" }}>
        <Card
          imgsrc={Series[3].imgsrc}
          sname={Series[3].sname}
          slink={Series[3].slink}
        />
        <Card
          imgsrc={Series[4].imgsrc}
          sname={Series[4].sname}
          slink={Series[4].slink}
        />
      </div>
    </>
  );
};
export default Home;
