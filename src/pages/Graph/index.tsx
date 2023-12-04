import Chart from "pages/Chart";
import GraphData from "./GraphData";
import * as S from "./style";

function Graph() {
  return (
    <S.Container>
      <S.MainContainer />
      <S.ChartContainer>
        <Chart />
      </S.ChartContainer>
      <S.GraphContainer>
        <GraphData />
      </S.GraphContainer>
    </S.Container>
  );
}

export default Graph;
