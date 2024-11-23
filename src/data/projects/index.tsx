import { dataAnalysisProjects } from './data_analysis';
import { webDevProjects } from './web_dev';
import { pythonUtilityProjects } from './python_utilities';
import { additionalProjects } from './projects_additional';
import { ProjectsData } from '../../types/project';

export const projectsData: ProjectsData = {
  "Data Analysis and Machine Learning": dataAnalysisProjects,
  "Web Development and Applications": webDevProjects,
  "Python Programming and Utilities": pythonUtilityProjects,
  "Additional Projects": additionalProjects
};