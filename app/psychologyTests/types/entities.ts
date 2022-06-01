export interface IChoice {
  label: string;
  value: number;
}
export interface IQuestion {
  question: string;
  choices: IChoice[];
}
export type tQuestionFields = Record<string, IQuestion>;
export interface ITest {
  id: string;
  title: {
    fa: string;
    en: string;
  };
  description: string;
  minutesToFill: number;
  shortName: string;
}

export interface IPsychologyTest extends ITest {
  fields: tQuestionFields;
}

export type tMbtiAnswers = Record<string, string> | undefined;
// export interface IMbtiResult {
//   mbtiResult: any;
// }

export interface ITestHistory {
  id: string;
  faName: string;
  enName: string;
  shortName: string;
  createdAt: string;
}

export interface ITestResult {
  type: string;
  faName: string;
  enName: string;
  variable: string;
  rawScore: number;
  baseRate: number;
  interpret: string;
}
