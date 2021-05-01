export const buildEndpointCreator = (prefix: string, url: string) => (
  ...resources: Array<string | number>
): string => [prefix, url, resources].join('/');
