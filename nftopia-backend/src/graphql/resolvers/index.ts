import { BaseResolver } from './base.resolver';
import { CollectionResolver } from './collection.resolver';
import { ListingResolver } from './listing.resolver';
import { NftResolver } from './nft.resolver';
import { JsonScalar } from '../types/nft.types';

export const graphqlResolvers = [
  BaseResolver,
  NftResolver,
  CollectionResolver,
  ListingResolver,
] as const;

export const graphqlScalarClasses = [JsonScalar] as const;

export { BaseResolver };
export { CollectionResolver };
export { ListingResolver };
export { NftResolver };
export { JsonScalar };
