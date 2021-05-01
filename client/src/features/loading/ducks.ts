import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Получаем глобальные настройки приложения
import { config } from '@common/config';

const initialState = {
  isLoading: false,
  isGlobal: false,
  isInitializationApp: false,
};

export type LoadingState = {
  isLoading: boolean,
  isGlobal: boolean,
  isInitializationApp?: boolean,
};

/**
 * Установка значения лоадера
 *
 * @param {LoadingState} state - Текущее состояние лоадера
 * @param {PayloadAction<LoadingState>} payload - Полезная нагрузка
 *
 * @returns {LoadingState} Новое значение состояние глобального лоадера
 */
const toSetLoading = (
  state: LoadingState,
  { payload }: PayloadAction<LoadingState>,
): LoadingState => ({
  ...state,
  ...payload,
});

const loadingSlice = createSlice({
  name: config.modules.loading,
  initialState,
  reducers: {
    //TODO
      //@ts-ignore
    setLoading: toSetLoading,
  },
});

export const loadingReducer = loadingSlice.reducer;

export const actions = {
  ...loadingSlice.actions,
};
