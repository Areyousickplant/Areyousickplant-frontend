import Chart from "pages/Chart";
import left from "assets/left.svg";
import right from "assets/right.svg";
import { IData, IIdealData } from "interfaces/IData";
import React, { useState, useLayoutEffect } from "react";
import { plantIdeal, userPlantStatusInfo } from "apis/allGets";
import * as S from "./style";
import GraphData from "./GraphData";

function Graph() {
  const [page, setPage] = useState(0);
  const [data, setData] = useState<IData[]>([]);
  const [idealData, setIdealData] = useState<IIdealData>();

  useLayoutEffect(() => {
    const fetchGraphData = async () => {
      try {
        const res = await userPlantStatusInfo();
        const res2 = await plantIdeal();

        setData(res.data);
        setIdealData(res2);
      } catch {
        console.log("에러");
      }
    };
    fetchGraphData();
  }, []);

  return (
    <S.Container>
      <S.MainContainer />
      <S.ChartContainer>
        <Chart />
        <S.Text>
          <S.Green>
            {page === 0 && "조도"}
            {page === 1 && "습도"}
            {page === 2 && "온도"}
          </S.Green>{" "}
          그래프
        </S.Text>
        <S.GraphBox>
          <S.Left
            src={left}
            alt="leftIcon"
            onClick={() => {
              if (page >= 1) setPage(page - 1);
            }}
            page={page}
          />
          <S.GraphContainer>
            <GraphData page={page} data={data} idealData={idealData} />
          </S.GraphContainer>
          <S.Right
            src={right}
            alt="rightIcon"
            onClick={() => {
              if (page <= 1) setPage(page + 1);
            }}
            page={page}
          />
        </S.GraphBox>
      </S.ChartContainer>
    </S.Container>
  );
}

export default Graph;
