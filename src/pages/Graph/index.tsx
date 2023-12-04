import Chart from "pages/Chart";
import left from "assets/left.svg";
import right from "assets/right.svg";
import React, { useState } from "react";
import GraphData from "./GraphData";
import * as S from "./style";

function Graph() {
  const [page, setPage] = useState(0);

  return (
    <S.Container>
      <S.MainContainer />
      <S.ChartContainer>
        <Chart />
      </S.ChartContainer>
      <S.GraphBox>
        <S.Left
          src={left}
          alt="leftIcon"
          onClick={() => {
            if (page >= 1) setPage(page - 1);
          }}
        />
        <S.GraphContainer>
          <GraphData page={page} />
        </S.GraphContainer>
        <S.Right
          src={right}
          alt="rightIcon"
          onClick={() => {
            if (page <= 1) setPage(page + 1);
          }}
        />
      </S.GraphBox>
    </S.Container>
  );
}

export default Graph;
