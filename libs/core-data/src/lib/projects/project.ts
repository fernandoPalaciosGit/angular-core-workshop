export interface Project {
  id: string,
  title: string,
  details: string,
  percentComplete: number,
  approved: boolean
  customerId: string,
}

export const getEmptyProject = (): Project => ({
  id: '',
  title: '',
  details: '',
  percentComplete: 0,
  approved: false,
  customerId: '',
});
