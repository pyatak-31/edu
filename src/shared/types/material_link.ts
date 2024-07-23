export type MaterialLinkType = 'Book' | 'Video' | 'Course';

export interface MaterialLink {
  label: string,
  url: string,
  type: MaterialLinkType,
};
