export enum ECenterDirection {
  horizontal = "h",
  vertical = "v",
  all = "hv",
}

export enum ECenterUse {
  flex = "flex",
  grid = "grid",
  textAlign = "text-align",
  inlineBlock = "inline-block",
  margin = "margin",
  position = "position",
}

export interface ICenter {
  className?: string;
  /** 方向 */
  direction?: ECenterDirection;
  /** 使用什么方式实现 */
  use?: ECenterUse;
  height?: string;
}
