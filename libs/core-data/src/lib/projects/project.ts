export interface Project {
  id: string;
  title: string;
  details: string;
  percentComplete: number;
  approved: boolean;
  customerId: string;
}

export const getEmptyProject = (): Project => ({
  id: '',
  title: '',
  details: '',
  percentComplete: 0,
  approved: false,
  customerId: ''
});

export const initialProjectList: Project[] = [
  {
    id: '1',
    title: 'Project One',
    details: 'This is a sample project',
    percentComplete: 20,
    approved: false,
    customerId: ''
  },
  {
    id: '2',
    title: 'Project Two',
    details: 'This is a sample project',
    percentComplete: 40,
    approved: false,
    customerId: ''
  },
  {
    id: '3',
    title: 'Project Three',
    details: 'This is a sample project',
    percentComplete: 100,
    approved: true,
    customerId: ''
  }
];
