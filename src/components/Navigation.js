import * as prismic from "@prismicio/client";
import { PrismicText } from "@prismicio/react";
import { PrismicNextLink } from "@prismicio/next";

/**
 * @typedef {object} NavigationProps
 * @property {import("@prismicio/client").Content.NavigationDocument} navigation
 *
 * @param {NavigationProps}
 */
export function Navigation({ navigation }) {
  return (
    <nav>
      <ul>
        {/* Renders top-level links. */}
        {prismic.isFilled.sliceZone(navigation.data.slices) &&
          navigation.data.slices.map((slice) => {
            return (
              <li key={slice.id}>
                <PrismicNextLink field={slice.primary.link}>
                  <PrismicText field={slice.primary.name} />
                </PrismicNextLink>

                {/* Renders child links, if present. */}
                {prismic.isFilled.group(slice.items) && (
                  <ul>
                    {slice.items.map((item) => {
                      return (
                        <li key={prismic.asText(item.name)}>
                          <PrismicNextLink field={item.link}>
                            <PrismicText field={item.name} />
                          </PrismicNextLink>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </li>
            );
          })}
      </ul>
    </nav>
  );
}
