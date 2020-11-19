import React from "react";
import { useTranslation } from "react-i18next";

function App() {
  const { t: translate } = useTranslation('translations')

  return <h2>{translate('COMMON.TITLE')}</h2>;
}

export { App };
