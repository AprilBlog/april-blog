import debug from "debug";

const debugNamespace = process.env.VUE_APP_DEVELOPER || "DEBUG";

if (typeof localStorage !== undefined) {
  localStorage.debug = `${debugNamespace}:*`;
}
export const log = (() => {
  const logger = debug(`${debugNamespace}:default`) as ReturnType<
    typeof debug
  > & {
    sub: (subNamespace: string) => ReturnType<typeof debug>;
  };
  logger.sub = (subNamespace) => {
    return debug(`${debugNamespace}:${subNamespace}`);
  };
  return logger;
})();
