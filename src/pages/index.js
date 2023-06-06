import { createClient } from "@/prismicio";

import { Navigation } from "@/components/Navigation";

/** @param {import('next').InferGetStaticPropsType<typeof getStaticProps>} */
export default function Page({ header, footer }) {
  return (
    <div>
      <code>{header.uid}</code> navigation:
      <Navigation navigation={header} />
      <hr />
      <code>{footer.uid}</code> navigation:
      <Navigation navigation={footer} />
    </div>
  );
}

/** @param {import("next").GetStaticPropsContext} */
export async function getStaticProps() {
  const client = createClient();

  const [header, footer] = await Promise.all([
    client.getByUID("navigation", "header"),
    client.getByUID("navigation", "footer"),
  ]);

  return {
    props: {
      header,
      footer,
    },
  };
}
