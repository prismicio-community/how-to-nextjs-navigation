import * as prismic from "@prismicio/client";

import config from "../slicemachine.config.json";

/**
 * The project's Prismic repository name.
 */
export const { repositoryName } = config;

/**
 * Creates a Prismic client for the project's repository. The client is used to
 * query content from the Prismic API.
 *
 * @param config {prismicNext.CreateClientConfig} - Configuration for the Prismic client.
 */
export const createClient = ({ previewData, req, ...config } = {}) => {
  return prismic.createClient(repositoryName, config);
};
