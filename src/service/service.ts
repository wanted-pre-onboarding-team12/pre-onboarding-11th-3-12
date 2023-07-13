import instance from './config';

export const getIssues = async (dispatch: any, page: number) => {
  dispatch({ type: 'GET_ISSUES' });

  try {
    const response = await instance.get(
      `/issues?state=open&sort=comments&page=${page}&per_page=15`,
    );

    dispatch({ type: 'GET_ISSUES_SUCCESS', data: response.data });
  } catch (error) {
    dispatch({ type: 'GET_ISSUES_ERROR', error: error });
  }
};
