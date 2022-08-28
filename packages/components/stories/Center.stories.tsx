import { ComponentStory, ComponentMeta } from "@storybook/react";
import styled from "styled-components";

import Center, { ECenterUse, ECenterDirection } from "@/Center";

const BorderCenter = styled(Center)`
  border: 1px solid #333;
  height: 200px;
`;

const Item = styled.div`
  border: 1px solid green;
  width: 200px;
  background: #ccc;
`;

export default {
  title: "Example/Center",
  component: Center,
  argTypes: {
    direction: { control: "select", options: ["hv", "h", "v"] },
  },
} as ComponentMeta<typeof Center>;

export const FlexDemo: ComponentStory<typeof Center> = (args) => {
  return (
    <BorderCenter {...args}>
      <Item>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Item>
      <Item>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Item>
      <Item>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Item>
    </BorderCenter>
  );
};

FlexDemo.storyName = "默认Flex实现";
FlexDemo.args = {
  direction: ECenterDirection.all,
};

export const TextAlignDemo: ComponentStory<typeof Center> = (args) => {
  return (
    <BorderCenter use={ECenterUse.textAlign} {...args}>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis,
      repellendus.
      <p>
        Magni provident obcaecati sint tempora at totam deleniti fuga commodi?
      </p>
      <div> Beatae, dolor quaerat!</div>
    </BorderCenter>
  );
};

TextAlignDemo.storyName = "使用text-align实现";

export const MarginDemo: ComponentStory<typeof Center> = (args) => {
  return (
    <BorderCenter use={ECenterUse.margin} {...args}>
      <Item>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. In modi maxime
        consequatur molestiae aliquid voluptatem enim? Sed suscipit dolores
        dicta maiores? Perspiciatis beatae quae iusto numquam dolores
        asperiores, illum minus?
      </Item>
    </BorderCenter>
  );
};

MarginDemo.storyName = "使用margin实现";

export const InlineBlockDemo: ComponentStory<typeof Center> = (args) => {
  return (
    <BorderCenter use={ECenterUse.inlineBlock} {...args}>
      <Item>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Item>
      <Item>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Item>
      <Item>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Item>
    </BorderCenter>
  );
};

InlineBlockDemo.storyName = "使用inline-block实现";

export const positionDemo: ComponentStory<typeof Center> = (args) => {
  return (
    <BorderCenter use={ECenterUse.position} {...args}>
      <Item>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. In modi maxime
        consequatur molestiae aliquid voluptatem enim? Sed suscipit dolores
        dicta maiores? Perspiciatis beatae quae iusto numquam dolores
        asperiores, illum minus?
      </Item>
    </BorderCenter>
  );
};

positionDemo.storyName = "使用绝对定位实现";
positionDemo.args = {
  direction: ECenterDirection.all,
};

export const gridDemo: ComponentStory<typeof Center> = (args) => {
  return (
    <BorderCenter use={ECenterUse.grid} {...args}>
      <Item>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. In modi maxime
        consequatur molestiae aliquid voluptatem enim? Sed suscipit dolores
        dicta maiores? Perspiciatis beatae quae iusto numquam dolores
        asperiores, illum minus?
      </Item>
    </BorderCenter>
  );
};

gridDemo.storyName = "使用grid实现";
