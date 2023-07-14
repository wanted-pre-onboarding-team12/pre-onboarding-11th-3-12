import React, { createContext, useReducer, useContext, Dispatch } from 'react';
import { IssueType } from '../types/issue';

type State = {
  loading: boolean;
  data: IssueType | [] | null;
  error: Error | null;
};

type InitialState = {
  issues: State;
  issue: State;
};

export type Action =
  | { type: 'GET_ISSUES' }
  | { type: 'GET_ISSUES_SUCCESS'; data: IssueType }
  | { type: 'GET_ISSUES_ERROR'; error: Error | null }
  | { type: 'GET_ISSUE' }
  | { type: 'GET_ISSUE_SUCCESS'; data: IssueType }
  | { type: 'GET_ISSUE_ERROR'; error: Error | null };

const loadingState = (data: any = null) => ({
  loading: true,
  data,
  error: null,
});

const success = (data: IssueType) => ({
  loading: false,
  data,
  error: null,
});

// 실패했을 때의 상태 만들어주는 함수
const error = (error: any) => ({
  loading: false,
  data: null,
  error: error,
});

const initialState: InitialState = {
  issues: {
    loading: false,
    data: [],
    error: null,
  },
  issue: {
    loading: false,
    data: null,
    error: null,
  },
};

const issuesReducer = (state: InitialState, action: Action): any => {
  switch (action.type) {
    case 'GET_ISSUES':
      return {
        ...state,
        issues: loadingState(state.issues.data),
      };

    case 'GET_ISSUES_SUCCESS':
      return {
        ...state,
        //@ts-ignore
        issues: success([...state.issues.data, ...action.data]),
      };

    case 'GET_ISSUES_ERROR':
      return {
        ...state,
        issues: error(action.error),
      };

    case 'GET_ISSUE':
      return {
        ...state,
        issue: loadingState(),
      };

    case 'GET_ISSUE_SUCCESS':
      return {
        ...state,
        issue: success(action.data),
      };

    case 'GET_ISSUE_ERROR':
      return {
        ...state,
        issue: error(action.error),
      };

    default:
      throw new Error(`Unhanded action type`);
  }
};

type IssuesDispatch = Dispatch<Action>;

const IssuesStateContext = createContext<State | null>(null);
const IssuesDispatchContext = createContext<IssuesDispatch | null>(null);

export function IssuesProvider({ children }: { children: React.ReactNode }) {
  //@ts-ignore
  const [state, dispatch] = useReducer(issuesReducer, initialState);
  return (
    <IssuesStateContext.Provider value={state}>
      <IssuesDispatchContext.Provider value={dispatch}>
        {children}
      </IssuesDispatchContext.Provider>
    </IssuesStateContext.Provider>
  );
}

export function useIssuesState() {
  const state = useContext(IssuesStateContext);
  if (!state) {
    throw new Error('Cannot find UsersProvider');
  }
  return state;
}

export function useIssuesDispatch() {
  const dispatch = useContext(IssuesDispatchContext);
  if (!dispatch) {
    throw new Error('Cannot find UsersProvider');
  }
  return dispatch;
}
