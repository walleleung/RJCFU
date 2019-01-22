import {ResearchModel} from './research.model';

export interface UserTokenModel {
  userToken: string;
  currentResearch: ResearchModel;
}
