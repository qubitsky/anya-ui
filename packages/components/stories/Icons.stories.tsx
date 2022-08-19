import { ComponentStory } from "@storybook/react";

import {
  FolderFilledIcon,
  OpenEditorIcon,
  ReactLogoIcon,
  VueLogoIcon,
  StarAddIcon,
  ArrowUpIcon,
  ArrowBackIcon,
  StarIcon,
  CloseIcon,
  AttachFileIcon,
  CloudOffIcon,
  ComputerIcon,
  DarkModeIcon,
  DashboardConfigIcon,
  DashboardPlaginsIcon,
  DashboardProjectIcon,
  DashboardTasksIcon,
  DropDownIcon,
  EditPenIcon,
  FlashFilledIcon,
  FolderCreateFilledIcon,
  FolderIcon,
  HomeFilledIcon,
  LightModeIcon,
  LikeIcon,
  LinkIcon,
  MoreVertSettingsIcon,
  NavImportIcon,
  NavProjectsIcon,
  NavSelectFolderIcon,
  PlayIcon,
  RefreshIcon,
  RemoveIcon,
  RnkLoaderIcon,
  SearchIcon,
  TranslateIcon,
  UpdateIcon,
  VisibleFilledIcon,
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

const ONE_LINE_COUNT = 10;

export const Template: ComponentStory<typeof Icon> = (args) => {
  return (
    <>
      <p>全部图标</p>
      {[
        FolderFilledIcon,
        OpenEditorIcon,
        ReactLogoIcon,
        VueLogoIcon,
        StarAddIcon,
        ArrowUpIcon,
        ArrowBackIcon,
        StarIcon,
        CloseIcon,
        AttachFileIcon,
        CloudOffIcon,
        ComputerIcon,
        DarkModeIcon,
        DashboardConfigIcon,
        DashboardPlaginsIcon,
        DashboardProjectIcon,
        DashboardTasksIcon,
        DropDownIcon,
        EditPenIcon,
        FlashFilledIcon,
        FolderCreateFilledIcon,
        FolderIcon,
        HomeFilledIcon,
        LightModeIcon,
        LikeIcon,
        LinkIcon,
        MoreVertSettingsIcon,
        NavImportIcon,
        NavProjectsIcon,
        NavSelectFolderIcon,
        PlayIcon,
        RefreshIcon,
        RemoveIcon,
        RnkLoaderIcon,
        SearchIcon,
        TranslateIcon,
        UpdateIcon,
        VisibleFilledIcon,
      ].map((Comp, index) => {
        const item = [
          <Icon key={index} {...args}>
            <Comp />
          </Icon>,
        ];
        if (index % ONE_LINE_COUNT === ONE_LINE_COUNT - 1) {
          item.push(<br key={"br" + index} />);
        }
        return item;
      })}
    </>
  );
};

Template.storyName = "全部图标";

Template.args = {
  size: 40,
};
