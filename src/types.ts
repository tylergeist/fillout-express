type QuestionType =
  | 'LongAnswer'
  | 'ShortAnswer'
  | 'DatePicker'
  | 'NumberInput'
  | 'MultipleChoice'
  | 'EmailInput';

export interface Question {
  id: string;
  name: string;
  type: QuestionType;
  value: string | number | null;
}

export interface Submission {
  submissionId: string;
  submissionTime: string;
  lastUpdatedAt: string;
  questions: Question[];
}

export interface ResponseObject {
  responses: Submission[];
  totalResponses: number;
  pageCount: number;
}

type FilterCondition =
  | 'equals'
  | 'does_not_equal'
  | 'greater_than'
  | 'less_than';

export interface Filter {
  id: string;
  condition: FilterCondition;
  value: string | number;
}
