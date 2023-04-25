export type HeaderLinkType = {
  url: string;
  text: string;
  target: "_blank" | "_self" | "_parent" | "_top";
};

export type ProjectType = {
  name: string;
  year: number;
};

export type ProjectInformationsType = {
  name: string;
  skills: string[];
  content: string;
};
