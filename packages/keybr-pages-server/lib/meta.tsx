import { type FavIconLink } from "@keybr/assets";
import { type PageInfo, Pages, usePageData } from "@keybr/pages-shared";
import { type ReactNode } from "react";
import { useIntl } from "react-intl";

export function Metas({ page }: { readonly page: PageInfo }): ReactNode {
  const { formatMessage } = useIntl();
  const { base, locale } = usePageData();
  const ogUrl = String(new URL(Pages.intlPath(page.path, locale), base));
  return (
    <>
      <meta property="og:url" content={ogUrl} />
      {page.meta.map(({ name, property, content }, index) => {
        if (content != null && typeof content === "object") {
          content = formatMessage(content);
        }
        return (
          <meta key={index} name={name} property={property} content={content} />
        );
      })}
    </>
  );
}

export function AltLangLinks({ page }: { readonly page: PageInfo }): ReactNode {
  const { base, locale } = usePageData();
  const canonicalHref = String(
    new URL(Pages.intlPath(page.path, locale), base),
  );
  return <link rel="canonical" href={canonicalHref} />;
}

export function StructuredData(): ReactNode {
  const { base } = usePageData();
  const { formatMessage } = useIntl();
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        "name": "Typer",
        "url": base,
        "description": formatMessage({
          id: "page.practice.description",
          defaultMessage:
            "Free online typing trainer with adaptive lessons. Practice touch typing, improve your speed and accuracy.",
        }),
        "applicationCategory": "EducationalApplication",
        "operatingSystem": "Web",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD",
        },
      },
      {
        "@type": "Organization",
        "name": "typer.top",
        "url": base,
        "logo": `${base}assets/favicon-96x96.png`,
      },
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export const favIcons: readonly FavIconLink[] = [
  {
    href: "/assets/favicon-16x16.png",
    rel: "icon",
    type: "image/png",
    sizes: "16x16",
  },
  {
    href: "/assets/favicon-32x32.png",
    rel: "icon",
    type: "image/png",
    sizes: "32x32",
  },
  {
    href: "/assets/favicon-96x96.png",
    rel: "icon",
    type: "image/png",
    sizes: "96x96",
  },
];
