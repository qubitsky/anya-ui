import { ComponentStory, ComponentMeta } from "@storybook/react";

import {
  CreateFolderIcon,
  FolderFilledIcon,
  OpenEditorIcon,
  ReactLogoIcon,
  VueLogoIcon,
  StarAddIcon,
  ArrowUpIcon,
  RefrechIcon,
  EditIcon,
  StarIcon,
  CloseIcon,
} from "@anya-ui/icons";
import Icon from "@/Icon";

export default {
  title: "Example/Icon",
  component: Icon,
  argTypes: {
    size: {
      type: "number",
    },
  },
};

export const Template: ComponentStory<typeof Icon> = (args) => {
  return (
    <>
      <p>全部图标</p>
      {[
        CreateFolderIcon,
        FolderFilledIcon,
        OpenEditorIcon,
        ReactLogoIcon,
        VueLogoIcon,
        StarAddIcon,
        ArrowUpIcon,
        RefrechIcon,
        EditIcon,
        StarIcon,
        CloseIcon,
      ].map((Comp, index) => {
        return (
          <Icon key={index} {...args}>
            <Comp />
          </Icon>
        );
      })}
    </>
  );
};

Template.storyName = "全部图标";

Template.args = {
  size: 40,
};