import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import { translations } from '../i18n/translations';

const STORAGE_KEY = 'candela-language';
const FALLBACK_LANGUAGE = 'es';

const LanguageContext = createContext(null);

function getInitialLanguage() {
  if (typeof window === 'undefined') {
    return FALLBACK_LANGUAGE;
  }

  const storedLanguage = window.localStorage.getItem(STORAGE_KEY);
  if (storedLanguage && translations[storedLanguage]) {
    return storedLanguage;
  }

  const browserLanguage = window.navigator.language?.slice(0, 2);
  if (browserLanguage && translations[browserLanguage]) {
    return browserLanguage;
  }

  return FALLBACK_LANGUAGE;
}

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(getInitialLanguage);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, language);
  }, [language]);

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      copy: translations[language],
    }),
    [language]
  );

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

LanguageProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }

  return context;
}
