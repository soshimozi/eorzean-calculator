import authJson from "./auth.json";

const apiOrigin = "https://sherpadev1.pacdenx.com/sherpa/v2/api";

const audience =
authJson.audience && authJson.audience !== "YOUR_API_IDENTIFIER"
  ? authJson.audience
  : null;

export function getConfig() {
  return {
    domain: authJson.domain,
    clientId: authJson.clientId,
    apiOrigin: apiOrigin,
    ...(audience ? { audience } : null),
  };
}