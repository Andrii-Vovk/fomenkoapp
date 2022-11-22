export type NavItem = {
  icon?: As<any>;
  tooltip?: string;
  link?: string;
  onClick?(): void;
};
