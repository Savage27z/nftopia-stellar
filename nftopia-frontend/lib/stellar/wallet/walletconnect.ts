import { StellarNetwork } from "@/types/stellar";


export interface WalletConnectConfig {
  projectId: string;
  metadata: {
    name: string;
    description: string;
    url: string;
    icons: string[];
  };
}

const DEFAULT_CONFIG: WalletConnectConfig = {
  projectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID || "",
  metadata: {
    name: "NFTopia",
    description: "NFT marketplace on Stellar",
    url: typeof window !== "undefined" ? window.location.origin : "",
    icons: ["/nftopia-04.svg"],
  },
};

export async function initWalletConnect(config: WalletConnectConfig = DEFAULT_CONFIG) {
  if (!config.projectId) {
    throw new Error(
      "WalletConnect project ID not configured. Set NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID."
    );
  }

  
  const { SignClient } = await import("@walletconnect/sign-client");

  const client = await SignClient.init({
    projectId: config.projectId,
    metadata: config.metadata,
  });

  return client;
}

export async function connectWalletConnect(
  network: StellarNetwork
): Promise<string> {
  throw new Error(
    "WalletConnect integration is coming soon. Please use Freighter or Albedo."
  );
}

export async function signWithWalletConnect(
  transactionXdr: string,
  _network: StellarNetwork
): Promise<string> {
  throw new Error(
    "WalletConnect transaction signing is not yet implemented."
  );
}