import { ComponentStory, ComponentMeta } from "@storybook/react";
import styled from "styled-components";

import Stack from "@/Stack";

const BorderStack = styled(Stack)`
  border: 1px solid #333;
`;

export default {
  title: "Example/Stack",
  component: Stack,
} as ComponentMeta<typeof Stack>;

export const Demo: ComponentStory<typeof Stack> = (args) => (
  <BorderStack {...args}>
    <div>
      <a href="https://every-layout.dev/layouts/stack/">
        https://every-layout.dev/layouts/stack/
      </a>
    </div>
    <div>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque, atque,
      commodi nostrum nemo accusamus ipsa voluptatem ex dolor fuga sit ducimus
      excepturi magni optio itaque necessitatibus quam, rerum ipsum
      perspiciatis?
    </div>
    <div>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque, atque,
      commodi nostrum nemo accusamus ipsa voluptatem ex dolor fuga sit ducimus
      excepturi magni optio itaque necessitatibus quam, rerum ipsum
      perspiciatis?
    </div>
    <div>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque, atque,
      commodi nostrum nemo accusamus ipsa voluptatem ex dolor fuga sit ducimus
      excepturi magni optio itaque necessitatibus quam, rerum ipsum
      perspiciatis?
    </div>
  </BorderStack>
);

Demo.storyName = "默认";
