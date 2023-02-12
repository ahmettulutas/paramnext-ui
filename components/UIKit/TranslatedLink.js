import { pathTranslations } from "@/lib/routePaths";
import { useRouter } from "next/router";
import Link from "next/link";

const TranslatedLink = ({ href, children }) => {
  const { locale } = useRouter(),
    translatedPath = pathTranslations[locale][href];
  return (
    <Link
      href={translatedPath}
      locale={locale}
      as={translatedPath}
    >
      {children}
    </Link>

  );
};
export default TranslatedLink;
