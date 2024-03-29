/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from 'ethers';
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from '@ethersproject/abi';
import type { Listener, Provider } from '@ethersproject/providers';
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from './common';

export declare namespace ChainlinkPriceFeed {
  export type AggregatorInfoStruct = {
    aggregator: PromiseOrValue<string>;
    rateAsset: PromiseOrValue<BigNumberish>;
  };

  export type AggregatorInfoStructOutput = [string, number] & {
    aggregator: string;
    rateAsset: number;
  };
}

export interface ChainlinkPriceFeedInterface extends utils.Interface {
  functions: {
    'addPrimitives(address[],address[],uint8[])': FunctionFragment;
    'calcCanonicalValue(address,uint256,address)': FunctionFragment;
    'calcLiveValue(address,uint256,address)': FunctionFragment;
    'getAggregatorInfoForPrimitive(address)': FunctionFragment;
    'getEthUsdAggregator()': FunctionFragment;
    'getFundDeployer()': FunctionFragment;
    'getOwner()': FunctionFragment;
    'getRateAssetForPrimitive(address)': FunctionFragment;
    'getStaleRateThreshold()': FunctionFragment;
    'getUnitForPrimitive(address)': FunctionFragment;
    'getWethToken()': FunctionFragment;
    'isSupportedAsset(address)': FunctionFragment;
    'rateIsStale(address)': FunctionFragment;
    'removePrimitives(address[])': FunctionFragment;
    'removeStalePrimitives(address[])': FunctionFragment;
    'setEthUsdAggregator(address)': FunctionFragment;
    'setStaleRateThreshold(uint256)': FunctionFragment;
    'updatePrimitives(address[],address[])': FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | 'addPrimitives'
      | 'calcCanonicalValue'
      | 'calcLiveValue'
      | 'getAggregatorInfoForPrimitive'
      | 'getEthUsdAggregator'
      | 'getFundDeployer'
      | 'getOwner'
      | 'getRateAssetForPrimitive'
      | 'getStaleRateThreshold'
      | 'getUnitForPrimitive'
      | 'getWethToken'
      | 'isSupportedAsset'
      | 'rateIsStale'
      | 'removePrimitives'
      | 'removeStalePrimitives'
      | 'setEthUsdAggregator'
      | 'setStaleRateThreshold'
      | 'updatePrimitives',
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: 'addPrimitives',
    values: [
      PromiseOrValue<string>[],
      PromiseOrValue<string>[],
      PromiseOrValue<BigNumberish>[],
    ],
  ): string;
  encodeFunctionData(
    functionFragment: 'calcCanonicalValue',
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
    ],
  ): string;
  encodeFunctionData(
    functionFragment: 'calcLiveValue',
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
    ],
  ): string;
  encodeFunctionData(
    functionFragment: 'getAggregatorInfoForPrimitive',
    values: [PromiseOrValue<string>],
  ): string;
  encodeFunctionData(
    functionFragment: 'getEthUsdAggregator',
    values?: undefined,
  ): string;
  encodeFunctionData(
    functionFragment: 'getFundDeployer',
    values?: undefined,
  ): string;
  encodeFunctionData(functionFragment: 'getOwner', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'getRateAssetForPrimitive',
    values: [PromiseOrValue<string>],
  ): string;
  encodeFunctionData(
    functionFragment: 'getStaleRateThreshold',
    values?: undefined,
  ): string;
  encodeFunctionData(
    functionFragment: 'getUnitForPrimitive',
    values: [PromiseOrValue<string>],
  ): string;
  encodeFunctionData(
    functionFragment: 'getWethToken',
    values?: undefined,
  ): string;
  encodeFunctionData(
    functionFragment: 'isSupportedAsset',
    values: [PromiseOrValue<string>],
  ): string;
  encodeFunctionData(
    functionFragment: 'rateIsStale',
    values: [PromiseOrValue<string>],
  ): string;
  encodeFunctionData(
    functionFragment: 'removePrimitives',
    values: [PromiseOrValue<string>[]],
  ): string;
  encodeFunctionData(
    functionFragment: 'removeStalePrimitives',
    values: [PromiseOrValue<string>[]],
  ): string;
  encodeFunctionData(
    functionFragment: 'setEthUsdAggregator',
    values: [PromiseOrValue<string>],
  ): string;
  encodeFunctionData(
    functionFragment: 'setStaleRateThreshold',
    values: [PromiseOrValue<BigNumberish>],
  ): string;
  encodeFunctionData(
    functionFragment: 'updatePrimitives',
    values: [PromiseOrValue<string>[], PromiseOrValue<string>[]],
  ): string;

  decodeFunctionResult(
    functionFragment: 'addPrimitives',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: 'calcCanonicalValue',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: 'calcLiveValue',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: 'getAggregatorInfoForPrimitive',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: 'getEthUsdAggregator',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: 'getFundDeployer',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(functionFragment: 'getOwner', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'getRateAssetForPrimitive',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: 'getStaleRateThreshold',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: 'getUnitForPrimitive',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: 'getWethToken',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: 'isSupportedAsset',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: 'rateIsStale',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: 'removePrimitives',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: 'removeStalePrimitives',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: 'setEthUsdAggregator',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: 'setStaleRateThreshold',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: 'updatePrimitives',
    data: BytesLike,
  ): Result;

  events: {
    'EthUsdAggregatorSet(address,address)': EventFragment;
    'PrimitiveAdded(address,address,uint8,uint256)': EventFragment;
    'PrimitiveRemoved(address)': EventFragment;
    'PrimitiveUpdated(address,address,address)': EventFragment;
    'StalePrimitiveRemoved(address)': EventFragment;
    'StaleRateThresholdSet(uint256,uint256)': EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: 'EthUsdAggregatorSet'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'PrimitiveAdded'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'PrimitiveRemoved'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'PrimitiveUpdated'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'StalePrimitiveRemoved'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'StaleRateThresholdSet'): EventFragment;
}

export interface EthUsdAggregatorSetEventObject {
  prevEthUsdAggregator: string;
  nextEthUsdAggregator: string;
}
export type EthUsdAggregatorSetEvent = TypedEvent<
  [string, string],
  EthUsdAggregatorSetEventObject
>;

export type EthUsdAggregatorSetEventFilter =
  TypedEventFilter<EthUsdAggregatorSetEvent>;

export interface PrimitiveAddedEventObject {
  primitive: string;
  aggregator: string;
  rateAsset: number;
  unit: BigNumber;
}
export type PrimitiveAddedEvent = TypedEvent<
  [string, string, number, BigNumber],
  PrimitiveAddedEventObject
>;

export type PrimitiveAddedEventFilter = TypedEventFilter<PrimitiveAddedEvent>;

export interface PrimitiveRemovedEventObject {
  primitive: string;
}
export type PrimitiveRemovedEvent = TypedEvent<
  [string],
  PrimitiveRemovedEventObject
>;

export type PrimitiveRemovedEventFilter =
  TypedEventFilter<PrimitiveRemovedEvent>;

export interface PrimitiveUpdatedEventObject {
  primitive: string;
  prevAggregator: string;
  nextAggregator: string;
}
export type PrimitiveUpdatedEvent = TypedEvent<
  [string, string, string],
  PrimitiveUpdatedEventObject
>;

export type PrimitiveUpdatedEventFilter =
  TypedEventFilter<PrimitiveUpdatedEvent>;

export interface StalePrimitiveRemovedEventObject {
  primitive: string;
}
export type StalePrimitiveRemovedEvent = TypedEvent<
  [string],
  StalePrimitiveRemovedEventObject
>;

export type StalePrimitiveRemovedEventFilter =
  TypedEventFilter<StalePrimitiveRemovedEvent>;

export interface StaleRateThresholdSetEventObject {
  prevStaleRateThreshold: BigNumber;
  nextStaleRateThreshold: BigNumber;
}
export type StaleRateThresholdSetEvent = TypedEvent<
  [BigNumber, BigNumber],
  StaleRateThresholdSetEventObject
>;

export type StaleRateThresholdSetEventFilter =
  TypedEventFilter<StaleRateThresholdSetEvent>;

export interface ChainlinkPriceFeed extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ChainlinkPriceFeedInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined,
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>,
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>,
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    /**
     * Adds a list of primitives with the given aggregator and rateAsset values
     * @param _aggregators The ordered aggregators corresponding to the list of _primitives
     * @param _primitives The primitives to add
     * @param _rateAssets The ordered rate assets corresponding to the list of _primitives
     */
    addPrimitives(
      _primitives: PromiseOrValue<string>[],
      _aggregators: PromiseOrValue<string>[],
      _rateAssets: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    /**
     * Calculates the value of a base asset in terms of a quote asset (using a canonical rate)
     * @param _baseAsset The base asset
     * @param _baseAssetAmount The base asset amount to convert
     * @param _quoteAsset The quote asset
     */
    calcCanonicalValue(
      _baseAsset: PromiseOrValue<string>,
      _baseAssetAmount: PromiseOrValue<BigNumberish>,
      _quoteAsset: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<
      [BigNumber, boolean] & { quoteAssetAmount_: BigNumber; isValid_: boolean }
    >;

    /**
     * Live and canonical values are the same for Chainlink
     * Calculates the value of a base asset in terms of a quote asset (using a live rate)
     * @param _baseAsset The base asset
     * @param _baseAssetAmount The base asset amount to convert
     * @param _quoteAsset The quote asset
     */
    calcLiveValue(
      _baseAsset: PromiseOrValue<string>,
      _baseAssetAmount: PromiseOrValue<BigNumberish>,
      _quoteAsset: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<
      [BigNumber, boolean] & { quoteAssetAmount_: BigNumber; isValid_: boolean }
    >;

    /**
     * Gets the aggregatorInfo variable value for a primitive
     * @param _primitive The primitive asset for which to get the aggregatorInfo value
     */
    getAggregatorInfoForPrimitive(
      _primitive: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<
      [ChainlinkPriceFeed.AggregatorInfoStructOutput] & {
        aggregatorInfo_: ChainlinkPriceFeed.AggregatorInfoStructOutput;
      }
    >;

    /**
     * Gets the `ethUsdAggregator` variable value
     */
    getEthUsdAggregator(
      overrides?: CallOverrides,
    ): Promise<[string] & { ethUsdAggregator_: string }>;

    /**
     * Gets the `FUND_DEPLOYER` variable
     */
    getFundDeployer(
      overrides?: CallOverrides,
    ): Promise<[string] & { fundDeployer_: string }>;

    /**
     * Ownership is deferred to the owner of the FundDeployer contract
     * Gets the owner of this contract
     */
    getOwner(overrides?: CallOverrides): Promise<[string] & { owner_: string }>;

    /**
     * This isn't strictly necessary as WETH_TOKEN will be undefined and thus the RateAsset will be the 0-position of the enum (i.e. ETH), but it makes the behavior more explicit
     * Gets the rateAsset variable value for a primitive
     */
    getRateAssetForPrimitive(
      _primitive: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<[number] & { rateAsset_: number }>;

    /**
     * Gets the `staleRateThreshold` variable value
     */
    getStaleRateThreshold(
      overrides?: CallOverrides,
    ): Promise<[BigNumber] & { staleRateThreshold_: BigNumber }>;

    /**
     * Gets the unit variable value for a primitive
     */
    getUnitForPrimitive(
      _primitive: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<[BigNumber] & { unit_: BigNumber }>;

    /**
     * Gets the `WETH_TOKEN` variable value
     */
    getWethToken(
      overrides?: CallOverrides,
    ): Promise<[string] & { wethToken_: string }>;

    /**
     * Checks whether an asset is a supported primitive of the price feed
     * @param _asset The asset to check
     */
    isSupportedAsset(
      _asset: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<[boolean] & { isSupported_: boolean }>;

    /**
     * Checks whether the current rate is considered stale for the specified aggregator
     * @param _aggregator The Chainlink aggregator of which to check staleness
     */
    rateIsStale(
      _aggregator: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<[boolean] & { rateIsStale_: boolean }>;

    /**
     * Removes a list of primitives from the feed
     * @param _primitives The primitives to remove
     */
    removePrimitives(
      _primitives: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    /**
     * Callable by anybody
     * Removes stale primitives from the feed
     * @param _primitives The stale primitives to remove
     */
    removeStalePrimitives(
      _primitives: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    /**
     * Sets the `ehUsdAggregator` variable value
     * @param _nextEthUsdAggregator The `ehUsdAggregator` value to set
     */
    setEthUsdAggregator(
      _nextEthUsdAggregator: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    /**
     * Sets the `staleRateThreshold` variable
     * @param _nextStaleRateThreshold The next `staleRateThreshold` value
     */
    setStaleRateThreshold(
      _nextStaleRateThreshold: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    /**
     * Updates the aggregators for given primitives
     * @param _aggregators The ordered aggregators corresponding to the list of _primitives
     * @param _primitives The primitives to update
     */
    updatePrimitives(
      _primitives: PromiseOrValue<string>[],
      _aggregators: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;
  };

  /**
   * Adds a list of primitives with the given aggregator and rateAsset values
   * @param _aggregators The ordered aggregators corresponding to the list of _primitives
   * @param _primitives The primitives to add
   * @param _rateAssets The ordered rate assets corresponding to the list of _primitives
   */
  addPrimitives(
    _primitives: PromiseOrValue<string>[],
    _aggregators: PromiseOrValue<string>[],
    _rateAssets: PromiseOrValue<BigNumberish>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  /**
   * Calculates the value of a base asset in terms of a quote asset (using a canonical rate)
   * @param _baseAsset The base asset
   * @param _baseAssetAmount The base asset amount to convert
   * @param _quoteAsset The quote asset
   */
  calcCanonicalValue(
    _baseAsset: PromiseOrValue<string>,
    _baseAssetAmount: PromiseOrValue<BigNumberish>,
    _quoteAsset: PromiseOrValue<string>,
    overrides?: CallOverrides,
  ): Promise<
    [BigNumber, boolean] & { quoteAssetAmount_: BigNumber; isValid_: boolean }
  >;

  /**
   * Live and canonical values are the same for Chainlink
   * Calculates the value of a base asset in terms of a quote asset (using a live rate)
   * @param _baseAsset The base asset
   * @param _baseAssetAmount The base asset amount to convert
   * @param _quoteAsset The quote asset
   */
  calcLiveValue(
    _baseAsset: PromiseOrValue<string>,
    _baseAssetAmount: PromiseOrValue<BigNumberish>,
    _quoteAsset: PromiseOrValue<string>,
    overrides?: CallOverrides,
  ): Promise<
    [BigNumber, boolean] & { quoteAssetAmount_: BigNumber; isValid_: boolean }
  >;

  /**
   * Gets the aggregatorInfo variable value for a primitive
   * @param _primitive The primitive asset for which to get the aggregatorInfo value
   */
  getAggregatorInfoForPrimitive(
    _primitive: PromiseOrValue<string>,
    overrides?: CallOverrides,
  ): Promise<ChainlinkPriceFeed.AggregatorInfoStructOutput>;

  /**
   * Gets the `ethUsdAggregator` variable value
   */
  getEthUsdAggregator(overrides?: CallOverrides): Promise<string>;

  /**
   * Gets the `FUND_DEPLOYER` variable
   */
  getFundDeployer(overrides?: CallOverrides): Promise<string>;

  /**
   * Ownership is deferred to the owner of the FundDeployer contract
   * Gets the owner of this contract
   */
  getOwner(overrides?: CallOverrides): Promise<string>;

  /**
   * This isn't strictly necessary as WETH_TOKEN will be undefined and thus the RateAsset will be the 0-position of the enum (i.e. ETH), but it makes the behavior more explicit
   * Gets the rateAsset variable value for a primitive
   */
  getRateAssetForPrimitive(
    _primitive: PromiseOrValue<string>,
    overrides?: CallOverrides,
  ): Promise<number>;

  /**
   * Gets the `staleRateThreshold` variable value
   */
  getStaleRateThreshold(overrides?: CallOverrides): Promise<BigNumber>;

  /**
   * Gets the unit variable value for a primitive
   */
  getUnitForPrimitive(
    _primitive: PromiseOrValue<string>,
    overrides?: CallOverrides,
  ): Promise<BigNumber>;

  /**
   * Gets the `WETH_TOKEN` variable value
   */
  getWethToken(overrides?: CallOverrides): Promise<string>;

  /**
   * Checks whether an asset is a supported primitive of the price feed
   * @param _asset The asset to check
   */
  isSupportedAsset(
    _asset: PromiseOrValue<string>,
    overrides?: CallOverrides,
  ): Promise<boolean>;

  /**
   * Checks whether the current rate is considered stale for the specified aggregator
   * @param _aggregator The Chainlink aggregator of which to check staleness
   */
  rateIsStale(
    _aggregator: PromiseOrValue<string>,
    overrides?: CallOverrides,
  ): Promise<boolean>;

  /**
   * Removes a list of primitives from the feed
   * @param _primitives The primitives to remove
   */
  removePrimitives(
    _primitives: PromiseOrValue<string>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  /**
   * Callable by anybody
   * Removes stale primitives from the feed
   * @param _primitives The stale primitives to remove
   */
  removeStalePrimitives(
    _primitives: PromiseOrValue<string>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  /**
   * Sets the `ehUsdAggregator` variable value
   * @param _nextEthUsdAggregator The `ehUsdAggregator` value to set
   */
  setEthUsdAggregator(
    _nextEthUsdAggregator: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  /**
   * Sets the `staleRateThreshold` variable
   * @param _nextStaleRateThreshold The next `staleRateThreshold` value
   */
  setStaleRateThreshold(
    _nextStaleRateThreshold: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  /**
   * Updates the aggregators for given primitives
   * @param _aggregators The ordered aggregators corresponding to the list of _primitives
   * @param _primitives The primitives to update
   */
  updatePrimitives(
    _primitives: PromiseOrValue<string>[],
    _aggregators: PromiseOrValue<string>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  callStatic: {
    /**
     * Adds a list of primitives with the given aggregator and rateAsset values
     * @param _aggregators The ordered aggregators corresponding to the list of _primitives
     * @param _primitives The primitives to add
     * @param _rateAssets The ordered rate assets corresponding to the list of _primitives
     */
    addPrimitives(
      _primitives: PromiseOrValue<string>[],
      _aggregators: PromiseOrValue<string>[],
      _rateAssets: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides,
    ): Promise<void>;

    /**
     * Calculates the value of a base asset in terms of a quote asset (using a canonical rate)
     * @param _baseAsset The base asset
     * @param _baseAssetAmount The base asset amount to convert
     * @param _quoteAsset The quote asset
     */
    calcCanonicalValue(
      _baseAsset: PromiseOrValue<string>,
      _baseAssetAmount: PromiseOrValue<BigNumberish>,
      _quoteAsset: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<
      [BigNumber, boolean] & { quoteAssetAmount_: BigNumber; isValid_: boolean }
    >;

    /**
     * Live and canonical values are the same for Chainlink
     * Calculates the value of a base asset in terms of a quote asset (using a live rate)
     * @param _baseAsset The base asset
     * @param _baseAssetAmount The base asset amount to convert
     * @param _quoteAsset The quote asset
     */
    calcLiveValue(
      _baseAsset: PromiseOrValue<string>,
      _baseAssetAmount: PromiseOrValue<BigNumberish>,
      _quoteAsset: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<
      [BigNumber, boolean] & { quoteAssetAmount_: BigNumber; isValid_: boolean }
    >;

    /**
     * Gets the aggregatorInfo variable value for a primitive
     * @param _primitive The primitive asset for which to get the aggregatorInfo value
     */
    getAggregatorInfoForPrimitive(
      _primitive: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<ChainlinkPriceFeed.AggregatorInfoStructOutput>;

    /**
     * Gets the `ethUsdAggregator` variable value
     */
    getEthUsdAggregator(overrides?: CallOverrides): Promise<string>;

    /**
     * Gets the `FUND_DEPLOYER` variable
     */
    getFundDeployer(overrides?: CallOverrides): Promise<string>;

    /**
     * Ownership is deferred to the owner of the FundDeployer contract
     * Gets the owner of this contract
     */
    getOwner(overrides?: CallOverrides): Promise<string>;

    /**
     * This isn't strictly necessary as WETH_TOKEN will be undefined and thus the RateAsset will be the 0-position of the enum (i.e. ETH), but it makes the behavior more explicit
     * Gets the rateAsset variable value for a primitive
     */
    getRateAssetForPrimitive(
      _primitive: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<number>;

    /**
     * Gets the `staleRateThreshold` variable value
     */
    getStaleRateThreshold(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * Gets the unit variable value for a primitive
     */
    getUnitForPrimitive(
      _primitive: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    /**
     * Gets the `WETH_TOKEN` variable value
     */
    getWethToken(overrides?: CallOverrides): Promise<string>;

    /**
     * Checks whether an asset is a supported primitive of the price feed
     * @param _asset The asset to check
     */
    isSupportedAsset(
      _asset: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<boolean>;

    /**
     * Checks whether the current rate is considered stale for the specified aggregator
     * @param _aggregator The Chainlink aggregator of which to check staleness
     */
    rateIsStale(
      _aggregator: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<boolean>;

    /**
     * Removes a list of primitives from the feed
     * @param _primitives The primitives to remove
     */
    removePrimitives(
      _primitives: PromiseOrValue<string>[],
      overrides?: CallOverrides,
    ): Promise<void>;

    /**
     * Callable by anybody
     * Removes stale primitives from the feed
     * @param _primitives The stale primitives to remove
     */
    removeStalePrimitives(
      _primitives: PromiseOrValue<string>[],
      overrides?: CallOverrides,
    ): Promise<void>;

    /**
     * Sets the `ehUsdAggregator` variable value
     * @param _nextEthUsdAggregator The `ehUsdAggregator` value to set
     */
    setEthUsdAggregator(
      _nextEthUsdAggregator: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<void>;

    /**
     * Sets the `staleRateThreshold` variable
     * @param _nextStaleRateThreshold The next `staleRateThreshold` value
     */
    setStaleRateThreshold(
      _nextStaleRateThreshold: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<void>;

    /**
     * Updates the aggregators for given primitives
     * @param _aggregators The ordered aggregators corresponding to the list of _primitives
     * @param _primitives The primitives to update
     */
    updatePrimitives(
      _primitives: PromiseOrValue<string>[],
      _aggregators: PromiseOrValue<string>[],
      overrides?: CallOverrides,
    ): Promise<void>;
  };

  filters: {
    'EthUsdAggregatorSet(address,address)'(
      prevEthUsdAggregator?: null,
      nextEthUsdAggregator?: null,
    ): EthUsdAggregatorSetEventFilter;
    EthUsdAggregatorSet(
      prevEthUsdAggregator?: null,
      nextEthUsdAggregator?: null,
    ): EthUsdAggregatorSetEventFilter;

    'PrimitiveAdded(address,address,uint8,uint256)'(
      primitive?: PromiseOrValue<string> | null,
      aggregator?: null,
      rateAsset?: null,
      unit?: null,
    ): PrimitiveAddedEventFilter;
    PrimitiveAdded(
      primitive?: PromiseOrValue<string> | null,
      aggregator?: null,
      rateAsset?: null,
      unit?: null,
    ): PrimitiveAddedEventFilter;

    'PrimitiveRemoved(address)'(
      primitive?: PromiseOrValue<string> | null,
    ): PrimitiveRemovedEventFilter;
    PrimitiveRemoved(
      primitive?: PromiseOrValue<string> | null,
    ): PrimitiveRemovedEventFilter;

    'PrimitiveUpdated(address,address,address)'(
      primitive?: PromiseOrValue<string> | null,
      prevAggregator?: null,
      nextAggregator?: null,
    ): PrimitiveUpdatedEventFilter;
    PrimitiveUpdated(
      primitive?: PromiseOrValue<string> | null,
      prevAggregator?: null,
      nextAggregator?: null,
    ): PrimitiveUpdatedEventFilter;

    'StalePrimitiveRemoved(address)'(
      primitive?: PromiseOrValue<string> | null,
    ): StalePrimitiveRemovedEventFilter;
    StalePrimitiveRemoved(
      primitive?: PromiseOrValue<string> | null,
    ): StalePrimitiveRemovedEventFilter;

    'StaleRateThresholdSet(uint256,uint256)'(
      prevStaleRateThreshold?: null,
      nextStaleRateThreshold?: null,
    ): StaleRateThresholdSetEventFilter;
    StaleRateThresholdSet(
      prevStaleRateThreshold?: null,
      nextStaleRateThreshold?: null,
    ): StaleRateThresholdSetEventFilter;
  };

  estimateGas: {
    /**
     * Adds a list of primitives with the given aggregator and rateAsset values
     * @param _aggregators The ordered aggregators corresponding to the list of _primitives
     * @param _primitives The primitives to add
     * @param _rateAssets The ordered rate assets corresponding to the list of _primitives
     */
    addPrimitives(
      _primitives: PromiseOrValue<string>[],
      _aggregators: PromiseOrValue<string>[],
      _rateAssets: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    /**
     * Calculates the value of a base asset in terms of a quote asset (using a canonical rate)
     * @param _baseAsset The base asset
     * @param _baseAssetAmount The base asset amount to convert
     * @param _quoteAsset The quote asset
     */
    calcCanonicalValue(
      _baseAsset: PromiseOrValue<string>,
      _baseAssetAmount: PromiseOrValue<BigNumberish>,
      _quoteAsset: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    /**
     * Live and canonical values are the same for Chainlink
     * Calculates the value of a base asset in terms of a quote asset (using a live rate)
     * @param _baseAsset The base asset
     * @param _baseAssetAmount The base asset amount to convert
     * @param _quoteAsset The quote asset
     */
    calcLiveValue(
      _baseAsset: PromiseOrValue<string>,
      _baseAssetAmount: PromiseOrValue<BigNumberish>,
      _quoteAsset: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    /**
     * Gets the aggregatorInfo variable value for a primitive
     * @param _primitive The primitive asset for which to get the aggregatorInfo value
     */
    getAggregatorInfoForPrimitive(
      _primitive: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    /**
     * Gets the `ethUsdAggregator` variable value
     */
    getEthUsdAggregator(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * Gets the `FUND_DEPLOYER` variable
     */
    getFundDeployer(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * Ownership is deferred to the owner of the FundDeployer contract
     * Gets the owner of this contract
     */
    getOwner(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * This isn't strictly necessary as WETH_TOKEN will be undefined and thus the RateAsset will be the 0-position of the enum (i.e. ETH), but it makes the behavior more explicit
     * Gets the rateAsset variable value for a primitive
     */
    getRateAssetForPrimitive(
      _primitive: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    /**
     * Gets the `staleRateThreshold` variable value
     */
    getStaleRateThreshold(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * Gets the unit variable value for a primitive
     */
    getUnitForPrimitive(
      _primitive: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    /**
     * Gets the `WETH_TOKEN` variable value
     */
    getWethToken(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * Checks whether an asset is a supported primitive of the price feed
     * @param _asset The asset to check
     */
    isSupportedAsset(
      _asset: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    /**
     * Checks whether the current rate is considered stale for the specified aggregator
     * @param _aggregator The Chainlink aggregator of which to check staleness
     */
    rateIsStale(
      _aggregator: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    /**
     * Removes a list of primitives from the feed
     * @param _primitives The primitives to remove
     */
    removePrimitives(
      _primitives: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    /**
     * Callable by anybody
     * Removes stale primitives from the feed
     * @param _primitives The stale primitives to remove
     */
    removeStalePrimitives(
      _primitives: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    /**
     * Sets the `ehUsdAggregator` variable value
     * @param _nextEthUsdAggregator The `ehUsdAggregator` value to set
     */
    setEthUsdAggregator(
      _nextEthUsdAggregator: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    /**
     * Sets the `staleRateThreshold` variable
     * @param _nextStaleRateThreshold The next `staleRateThreshold` value
     */
    setStaleRateThreshold(
      _nextStaleRateThreshold: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    /**
     * Updates the aggregators for given primitives
     * @param _aggregators The ordered aggregators corresponding to the list of _primitives
     * @param _primitives The primitives to update
     */
    updatePrimitives(
      _primitives: PromiseOrValue<string>[],
      _aggregators: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    /**
     * Adds a list of primitives with the given aggregator and rateAsset values
     * @param _aggregators The ordered aggregators corresponding to the list of _primitives
     * @param _primitives The primitives to add
     * @param _rateAssets The ordered rate assets corresponding to the list of _primitives
     */
    addPrimitives(
      _primitives: PromiseOrValue<string>[],
      _aggregators: PromiseOrValue<string>[],
      _rateAssets: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    /**
     * Calculates the value of a base asset in terms of a quote asset (using a canonical rate)
     * @param _baseAsset The base asset
     * @param _baseAssetAmount The base asset amount to convert
     * @param _quoteAsset The quote asset
     */
    calcCanonicalValue(
      _baseAsset: PromiseOrValue<string>,
      _baseAssetAmount: PromiseOrValue<BigNumberish>,
      _quoteAsset: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    /**
     * Live and canonical values are the same for Chainlink
     * Calculates the value of a base asset in terms of a quote asset (using a live rate)
     * @param _baseAsset The base asset
     * @param _baseAssetAmount The base asset amount to convert
     * @param _quoteAsset The quote asset
     */
    calcLiveValue(
      _baseAsset: PromiseOrValue<string>,
      _baseAssetAmount: PromiseOrValue<BigNumberish>,
      _quoteAsset: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    /**
     * Gets the aggregatorInfo variable value for a primitive
     * @param _primitive The primitive asset for which to get the aggregatorInfo value
     */
    getAggregatorInfoForPrimitive(
      _primitive: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    /**
     * Gets the `ethUsdAggregator` variable value
     */
    getEthUsdAggregator(
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    /**
     * Gets the `FUND_DEPLOYER` variable
     */
    getFundDeployer(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    /**
     * Ownership is deferred to the owner of the FundDeployer contract
     * Gets the owner of this contract
     */
    getOwner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    /**
     * This isn't strictly necessary as WETH_TOKEN will be undefined and thus the RateAsset will be the 0-position of the enum (i.e. ETH), but it makes the behavior more explicit
     * Gets the rateAsset variable value for a primitive
     */
    getRateAssetForPrimitive(
      _primitive: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    /**
     * Gets the `staleRateThreshold` variable value
     */
    getStaleRateThreshold(
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    /**
     * Gets the unit variable value for a primitive
     */
    getUnitForPrimitive(
      _primitive: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    /**
     * Gets the `WETH_TOKEN` variable value
     */
    getWethToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    /**
     * Checks whether an asset is a supported primitive of the price feed
     * @param _asset The asset to check
     */
    isSupportedAsset(
      _asset: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    /**
     * Checks whether the current rate is considered stale for the specified aggregator
     * @param _aggregator The Chainlink aggregator of which to check staleness
     */
    rateIsStale(
      _aggregator: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    /**
     * Removes a list of primitives from the feed
     * @param _primitives The primitives to remove
     */
    removePrimitives(
      _primitives: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    /**
     * Callable by anybody
     * Removes stale primitives from the feed
     * @param _primitives The stale primitives to remove
     */
    removeStalePrimitives(
      _primitives: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    /**
     * Sets the `ehUsdAggregator` variable value
     * @param _nextEthUsdAggregator The `ehUsdAggregator` value to set
     */
    setEthUsdAggregator(
      _nextEthUsdAggregator: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    /**
     * Sets the `staleRateThreshold` variable
     * @param _nextStaleRateThreshold The next `staleRateThreshold` value
     */
    setStaleRateThreshold(
      _nextStaleRateThreshold: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    /**
     * Updates the aggregators for given primitives
     * @param _aggregators The ordered aggregators corresponding to the list of _primitives
     * @param _primitives The primitives to update
     */
    updatePrimitives(
      _primitives: PromiseOrValue<string>[],
      _aggregators: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;
  };
}
