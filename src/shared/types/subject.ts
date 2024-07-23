export type SubjectName = 'GIT' | 'HTML' | 'CSS' | 'JavaScript';

export interface Subject {
  name: SubjectName,
  isReady: boolean,
};
