import { Dispatch } from 'react';
import instance from './config';
import { Action } from '../contexts/IssuesContext';

export const getIssues = async (dispatch: Dispatch<Action>, page: number) => {
  //dispatch({ type: 'GET_ISSUES' });

  try {
    const response = await instance.get(
      `/issues?state=open&sort=comments&page=${page}&per_page=15`,
    );

    dispatch({ type: 'GET_ISSUES_SUCCESS', data: response.data });
  } catch (error) {
    dispatch({ type: 'GET_ISSUES_ERROR', error: error });
  }
};

export const getIssue = async (dispatch: Dispatch<Action>, id: number) => {
  //dispatch({ type: 'GET_ISSUES' });

  try {
    const response = await instance.get(`/issues/${id}`);

    dispatch({ type: 'GET_ISSUES_SUCCESS', data: response.data });
  } catch (error) {
    dispatch({ type: 'GET_ISSUES_ERROR', error: error });
  }
};
