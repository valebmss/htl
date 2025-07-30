type Locale = 'en' | 'es';

export const getDictionary = async (locale: Locale) => {
  const dict = await import(`@/dictionaries/${locale}.json`);
  return dict.default;
};
