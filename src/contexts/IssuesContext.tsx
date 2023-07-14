import React, { createContext, useReducer, useContext, Dispatch } from 'react';

type State = {
  loading: boolean;
  data: any;
  error: any;
};

export type Action =
  | { type: 'GET_ISSUES' }
  | { type: 'GET_ISSUES_SUCCESS'; data: any }
  | { type: 'GET_ISSUES_ERROR'; error: any }
  | { type: 'GET_ISSUE_DETAIL'; payload: string };

const initialState: State = {
  loading: false,
  data: [],
  error: null,
};

const issuesReducer = (state: State, action: Action): State | undefined => {
  switch (action.type) {
    case 'GET_ISSUES':
      return {
        ...state,
        loading: true,
      };

    case 'GET_ISSUES_SUCCESS':
      return {
        loading: false,
        data: [...state.data, ...action.data],
        error: null,
      };

    case 'GET_ISSUES_ERROR':
      return {
        loading: false,
        data: null,
        error: action.error,
      };

    case 'GET_ISSUE_DETAIL':
      const filteredData = state.data.filter(
        (issue: any) => issue.id === action.payload,
      );
      localStorage.setItem('data', JSON.stringify(filteredData[0]));
      return;

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
