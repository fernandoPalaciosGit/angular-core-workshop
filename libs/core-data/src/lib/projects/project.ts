export interface Project {
  id: string;
  title: string;
  details: string;
  percentComplete: number;
  approved: boolean;
  customerId: string;
  completionDate: Date | null;
  startDate: Date | null;
  targetDate: Date | null;
}

export const getEmptyProject = (): Project => ({
  id: '',
  title: '',
  details: '',
  percentComplete: 0,
  approved: false,
  customerId: '',
  completionDate: new Date(),
  startDate: new Date(),
  targetDate: new Date()
});
