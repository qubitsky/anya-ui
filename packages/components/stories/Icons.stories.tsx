import React from "react";
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

export default {
  title: "Example/Icon",
  // component: Icon,
};

export const Template = () => {
  return (
    <>
      <CreateFolderIcon />
      <FolderFilledIcon />
      <OpenEditorIcon />
      <ReactLogoIcon />
      <VueLogoIcon />
      <StarAddIcon />
      <ArrowUpIcon />
      <RefrechIcon />
      <EditIcon />
      <StarIcon />
      <CloseIcon />
    </>
  );
};

Template.storyName = "全部图标";
