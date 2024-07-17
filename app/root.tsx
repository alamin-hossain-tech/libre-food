// root.tsx
import { ChakraProvider, Container } from "@chakra-ui/react";
import { withEmotionCache } from "@emotion/react";
import { LinksFunction } from "@remix-run/node"; // Depends on the runtime you choose
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import React, { useContext, useEffect } from "react";

import { ClientStyleContext, ServerStyleContext } from "./context";
import ThemeConfig from "./theme/themeConfig";
import HeaderSection from "./components/shared/heeader/Header";
import FooterSection from "./components/shared/Footer/Footer";

export const links: LinksFunction = () => {
  return [
    { rel: "preconnect", href: "https://fonts.googleapis.com" },
    { rel: "preconnect", href: "https://fonts.gstatic.com" },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Miniver&display=swap",
    },
  ];
};

interface DocumentProps {
  children: React.ReactNode;
}

const Document = withEmotionCache(
  ({ children }: DocumentProps, emotionCache) => {
    const serverStyleData = useContext(ServerStyleContext);
    const clientStyleData = useContext(ClientStyleContext);

    // Only executed on client
    useEffect(() => {
      // re-link sheet container
      emotionCache.sheet.container = document.head;
      // re-inject tags
      const tags = emotionCache.sheet.tags;
      emotionCache.sheet.flush();
      tags.forEach((tag) => {
        (emotionCache.sheet as any)._insertTag(tag);
      });
      // reset cache to reapply global styles
      clientStyleData?.reset();
    }, []);

    return (
      <html lang="en">
        <head>
          <Meta />
          <Links />
          {serverStyleData?.map(({ key, ids, css }) => (
            <style
              key={key}
              data-emotion={`${key} ${ids.join(" ")}`}
              dangerouslySetInnerHTML={{ __html: css }}
            />
          ))}
        </head>
        <body>
          {children}
          <ScrollRestoration />
          <Scripts />
        </body>
      </html>
    );
  }
);

export default function App() {
  return (
    <Document>
      <ChakraProvider theme={ThemeConfig}>
        <Container maxW={"container.xl"}>
          <HeaderSection />
        </Container>
        <Outlet />
        <FooterSection />
      </ChakraProvider>
    </Document>
  );
}
