import { getDictionary } from '../../../utils/getDictionary';
import NosotrosPage, { type NosotrosDict } from '../../../components/pages/SobreNosotrosPage';

type PageProps = {
  readonly params: Promise<{ lang: string | string[] | undefined }>;
};

export default async function Page({ params }: PageProps) {
  const resolvedParams = await params;
  const rawLang = resolvedParams.lang;
  const lang = Array.isArray(rawLang) ? rawLang[0] : rawLang;
  const safeLang = lang === 'es' || lang === 'en' ? lang : 'es';

  const dict = await getDictionary(safeLang);
  const nosotrosSection = (dict as any)['nosotros-section'] ?? dict;

  return <NosotrosPage dict={nosotrosSection as NosotrosDict} />;
}
