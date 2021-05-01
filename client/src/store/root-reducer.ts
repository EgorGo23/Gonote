import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { createHashHistory } from 'history';

import { config } from '@common/config';
import { userReducer } from '@common/models/user';
import { routerFilterReducer } from '@common/models/routerFilter';

import { errorsReducer } from '@features/errors';
import { loadingReducer } from '@features/loading';
import { noticeReducer } from '@features/notices';
import { notesReducer } from '@features/notes';
import { tagsReducer } from '@features/tags';

export const history = createHashHistory();

const rootReducer = combineReducers({
  [config.modules.errors]: errorsReducer,
  [config.modules.loading]: loadingReducer,
  [config.modules.notices]: noticeReducer,
  [config.modules.router]: connectRouter(history),
  [config.modules.user]: userReducer,
  [config.modules.notes]: notesReducer,
  [config.modules.tags]: tagsReducer,
  [config.modules.routerFilter]: routerFilterReducer,
});

export default rootReducer;
