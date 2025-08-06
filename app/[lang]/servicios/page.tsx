import { getDictionary } from '../../../utils/getDictionary';
import ServiciosPage from '../../../components/pages/ServiciosPage';

type PageProps = {
  readonly params: Promise<{ lang: string | string[] | undefined }>;
};

export default async function Page({ params }: PageProps) {
  const resolvedParams = await params;
  const rawLang = resolvedParams.lang;
  const lang = Array.isArray(rawLang) ? rawLang[0] : 'es';
  const safeLang = lang === 'es' || lang === 'en' ? lang : 'es';

  const dict = await getDictionary(safeLang);
  const serviciosSection = (dict as any)['servicios-section'] ?? dict;

  return <ServiciosPage dict={serviciosSection} />;
}
