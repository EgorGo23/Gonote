import { useContext } from 'react';
import {
  __RouterContext as RouterContext,
  RouteComponentProps,
} from 'react-router';

export const useRouter = <T>(): RouteComponentProps<T> =>
  useContext(RouterContext) as RouteComponentProps<T>;
