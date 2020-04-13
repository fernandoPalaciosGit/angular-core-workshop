export interface Project {
  id: string;
  title: string;
  details: string;
  percentComplete: number;
  approved: boolean;
  customerId: string;
  completionDate: Date;
  startDate: Date;
  targetDate: Date;
}

export const getEmptyProject = (): Project => ({
  id: null,
  title: '',
  details: '',
  percentComplete: 0,
  approved: false,
  customerId: '',
  completionDate: new Date(),
  startDate: new Date(),
  targetDate: new Date()
});
