import React, { createContext, useReducer, useContext, Dispatch } from 'react';
import { IssueType } from '../types/issue';

type State = {
  loading: boolean;
  data: IssueType | [];
  error: any;
};

type InitialState = {
  issues: State;
  issue: { data: null };
};

export type Action =
  | { type: 'GET_ISSUES' }
  | { type: 'GET_ISSUES_SUCCESS'; data: IssueType }
  | { type: 'GET_ISSUES_ERROR'; error: any }
  | { type: 'GET_ISSUE_DETAIL'; data: IssueType };

const loadingState = (data: any) => ({
  loading: true,
  data,
  error: null,
});

const success = (data: any) => ({
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
    data: null,
  },
};

const issuesReducer = (state: InitialState, action: Action): any => {
  switch (action.type) {
    case 'GET_ISSUES':
      console.log(state);

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

    case 'GET_ISSUE_DETAIL':
      console.log(action);

      return {
        ...state,
        issue: success(action.data),
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
