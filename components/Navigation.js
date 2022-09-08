import * as prismicH from "@prismicio/helpers";
import { PrismicLink, PrismicText } from "@prismicio/react";

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
        {prismicH.isFilled.sliceZone(navigation.data.slices) &&
          navigation.data.slices.map((slice) => {
            return (
              <li key={slice.id}>
                <PrismicLink field={slice.primary.link}>
                  <PrismicText field={slice.primary.name} />
                </PrismicLink>

                {/* Renders child links, if present. */}
                {prismicH.isFilled.group(slice.items) && (
                  <ul>
                    {slice.items.map((item) => {
                      return (
                        <li key={prismicH.asText(item.name)}>
                          <PrismicLink field={item.link}>
                            <PrismicText field={item.name} />
                          </PrismicLink>
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
