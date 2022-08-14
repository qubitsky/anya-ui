import styled from "styled-components";
import { Center } from "@anya-ui/components";
import { Page, Box } from "@/components";

const FullScreenCenter = styled(Center)`
  height: 100%;
`;

const StyledBox = styled(Box)`
  width: 200px;
`;

const CenterDemo = () => {
  return (
    <Page>
      <FullScreenCenter>
        <StyledBox>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In modi
          maxime consequatur molestiae aliquid voluptatem enim? Sed suscipit
          dolores dicta maiores? Perspiciatis beatae quae iusto numquam dolores
          asperiores, illum minus?
        </StyledBox>
      </FullScreenCenter>
    </Page>
  );
};

export default CenterDemo;
