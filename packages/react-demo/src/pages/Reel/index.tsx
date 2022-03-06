import styled from "styled-components";
import { Reel } from "@qubi-ui/components";
import { Page, Box } from "@/components";

const SquareBox = styled(Box)`
  width: 250px;
  margin-right: 10px;
`;

const ReelDemo = () => {
  return (
    <Page>
      <Reel>
        {Array.from({ length: 3 }, (a, i) => {
          return (
            <SquareBox key={i}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Repellendus obcaecati quod quasi consequatur, mollitia alias
              dolorum magni omnis exercitationem! Rerum, maxime! Sunt cum
              incidunt fugit! Quam reiciendis vitae rem consequatur.
            </SquareBox>
          );
        })}
      </Reel>
    </Page>
  );
};

export default ReelDemo;
