import React from 'react';
import * as L from 'korus-ui';

import { useLoaderSelector } from '../selectors';

/**
 * Компонент глобального лоадера
 *
 * @reactProps {React.Element}
 * @returns {React.FC} - компонент глобального лоадера
 */
export const GlobalLoader: React.FC = ({ children }) => {
  const { isLoading, isGlobal } = useLoaderSelector();

  return (
    <L.Loader isLoading={isLoading} isGlobal={isGlobal} _global-loader>
      {children}
    </L.Loader>
  );
};
