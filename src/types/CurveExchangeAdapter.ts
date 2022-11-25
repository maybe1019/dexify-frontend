/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from 'ethers';
import type { FunctionFragment, Result } from '@ethersproject/abi';
import type { Listener, Provider } from '@ethersproject/providers';
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from './common';

export interface CurveExchangeAdapterInterface extends utils.Interface {
  functions: {
    'ADD_TRACKED_ASSETS_SELECTOR()': FunctionFragment;
    'APPROVE_ASSETS_SELECTOR()': FunctionFragment;
    'CLAIM_REWARDS_AND_REINVEST_SELECTOR()': FunctionFragment;
    'CLAIM_REWARDS_AND_SWAP_SELECTOR()': FunctionFragment;
    'CLAIM_REWARDS_SELECTOR()': FunctionFragment;
    'LEND_AND_STAKE_SELECTOR()': FunctionFragment;
    'LEND_SELECTOR()': FunctionFragment;
    'REDEEM_SELECTOR()': FunctionFragment;
    'REMOVE_TRACKED_ASSETS_SELECTOR()': FunctionFragment;
    'STAKE_SELECTOR()': FunctionFragment;
    'TAKE_ORDER_SELECTOR()': FunctionFragment;
    'UNSTAKE_AND_REDEEM_SELECTOR()': FunctionFragment;
    'UNSTAKE_SELECTOR()': FunctionFragment;
    'getAddressProvider()': FunctionFragment;
    'getIntegrationManager()': FunctionFragment;
    'getWethToken()': FunctionFragment;
    'identifier()': FunctionFragment;
    'parseAssetsForMethod(bytes4,bytes)': FunctionFragment;
    'takeOrder(address,bytes,bytes)': FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | 'ADD_TRACKED_ASSETS_SELECTOR'
      | 'APPROVE_ASSETS_SELECTOR'
      | 'CLAIM_REWARDS_AND_REINVEST_SELECTOR'
      | 'CLAIM_REWARDS_AND_SWAP_SELECTOR'
      | 'CLAIM_REWARDS_SELECTOR'
      | 'LEND_AND_STAKE_SELECTOR'
      | 'LEND_SELECTOR'
      | 'REDEEM_SELECTOR'
      | 'REMOVE_TRACKED_ASSETS_SELECTOR'
      | 'STAKE_SELECTOR'
      | 'TAKE_ORDER_SELECTOR'
      | 'UNSTAKE_AND_REDEEM_SELECTOR'
      | 'UNSTAKE_SELECTOR'
      | 'getAddressProvider'
      | 'getIntegrationManager'
      | 'getWethToken'
      | 'identifier'
      | 'parseAssetsForMethod'
      | 'takeOrder',
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: 'ADD_TRACKED_ASSETS_SELECTOR',
    values?: undefined,
  ): string;
  encodeFunctionData(
    functionFragment: 'APPROVE_ASSETS_SELECTOR',
    values?: undefined,
  ): string;
  encodeFunctionData(
    functionFragment: 'CLAIM_REWARDS_AND_REINVEST_SELECTOR',
    values?: undefined,
  ): string;
  encodeFunctionData(
    functionFragment: 'CLAIM_REWARDS_AND_SWAP_SELECTOR',
    values?: undefined,
  ): string;
  encodeFunctionData(
    functionFragment: 'CLAIM_REWARDS_SELECTOR',
    values?: undefined,
  ): string;
  encodeFunctionData(
    functionFragment: 'LEND_AND_STAKE_SELECTOR',
    values?: undefined,
  ): string;
  encodeFunctionData(
    functionFragment: 'LEND_SELECTOR',
    values?: undefined,
  ): string;
  encodeFunctionData(
    functionFragment: 'REDEEM_SELECTOR',
    values?: undefined,
  ): string;
  encodeFunctionData(
    functionFragment: 'REMOVE_TRACKED_ASSETS_SELECTOR',
    values?: undefined,
  ): string;
  encodeFunctionData(
    functionFragment: 'STAKE_SELECTOR',
    values?: undefined,
  ): string;
  encodeFunctionData(
    functionFragment: 'TAKE_ORDER_SELECTOR',
    values?: undefined,
  ): string;
  encodeFunctionData(
    functionFragment: 'UNSTAKE_AND_REDEEM_SELECTOR',
    values?: undefined,
  ): string;
  encodeFunctionData(
    functionFragment: 'UNSTAKE_SELECTOR',
    values?: undefined,
  ): string;
  encodeFunctionData(
    functionFragment: 'getAddressProvider',
    values?: undefined,
  ): string;
  encodeFunctionData(
    functionFragment: 'getIntegrationManager',
    values?: undefined,
  ): string;
  encodeFunctionData(
    functionFragment: 'getWethToken',
    values?: undefined,
  ): string;
  encodeFunctionData(
    functionFragment: 'identifier',
    values?: undefined,
  ): string;
  encodeFunctionData(
    functionFragment: 'parseAssetsForMethod',
    values: [PromiseOrValue<BytesLike>, PromiseOrValue<BytesLike>],
  ): string;
  encodeFunctionData(
    functionFragment: 'takeOrder',
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BytesLike>,
    ],
  ): string;

  decodeFunctionResult(
    functionFragment: 'ADD_TRACKED_ASSETS_SELECTOR',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: 'APPROVE_ASSETS_SELECTOR',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: 'CLAIM_REWARDS_AND_REINVEST_SELECTOR',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: 'CLAIM_REWARDS_AND_SWAP_SELECTOR',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: 'CLAIM_REWARDS_SELECTOR',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: 'LEND_AND_STAKE_SELECTOR',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: 'LEND_SELECTOR',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: 'REDEEM_SELECTOR',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: 'REMOVE_TRACKED_ASSETS_SELECTOR',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: 'STAKE_SELECTOR',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: 'TAKE_ORDER_SELECTOR',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: 'UNSTAKE_AND_REDEEM_SELECTOR',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: 'UNSTAKE_SELECTOR',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: 'getAddressProvider',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: 'getIntegrationManager',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: 'getWethToken',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(functionFragment: 'identifier', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'parseAssetsForMethod',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(functionFragment: 'takeOrder', data: BytesLike): Result;

  events: {};
}

export interface CurveExchangeAdapter extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: CurveExchangeAdapterInterface;

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
    ADD_TRACKED_ASSETS_SELECTOR(overrides?: CallOverrides): Promise<[string]>;

    APPROVE_ASSETS_SELECTOR(overrides?: CallOverrides): Promise<[string]>;

    CLAIM_REWARDS_AND_REINVEST_SELECTOR(
      overrides?: CallOverrides,
    ): Promise<[string]>;

    CLAIM_REWARDS_AND_SWAP_SELECTOR(
      overrides?: CallOverrides,
    ): Promise<[string]>;

    CLAIM_REWARDS_SELECTOR(overrides?: CallOverrides): Promise<[string]>;

    LEND_AND_STAKE_SELECTOR(overrides?: CallOverrides): Promise<[string]>;

    LEND_SELECTOR(overrides?: CallOverrides): Promise<[string]>;

    REDEEM_SELECTOR(overrides?: CallOverrides): Promise<[string]>;

    REMOVE_TRACKED_ASSETS_SELECTOR(
      overrides?: CallOverrides,
    ): Promise<[string]>;

    STAKE_SELECTOR(overrides?: CallOverrides): Promise<[string]>;

    TAKE_ORDER_SELECTOR(overrides?: CallOverrides): Promise<[string]>;

    UNSTAKE_AND_REDEEM_SELECTOR(overrides?: CallOverrides): Promise<[string]>;

    UNSTAKE_SELECTOR(overrides?: CallOverrides): Promise<[string]>;

    /**
     * Gets the `ADDRESS_PROVIDER` variable
     */
    getAddressProvider(
      overrides?: CallOverrides,
    ): Promise<[string] & { addressProvider_: string }>;

    /**
     * Gets the `INTEGRATION_MANAGER` variable
     */
    getIntegrationManager(
      overrides?: CallOverrides,
    ): Promise<[string] & { integrationManager_: string }>;

    /**
     * Gets the `WETH_TOKEN` variable
     */
    getWethToken(
      overrides?: CallOverrides,
    ): Promise<[string] & { wethToken_: string }>;

    /**
     * Provides a constant string identifier for an adapter
     */
    identifier(
      overrides?: CallOverrides,
    ): Promise<[string] & { identifier_: string }>;

    /**
     * Parses the expected assets to receive from a call on integration
     * @param _encodedCallArgs The encoded parameters for the callOnIntegration
     * @param _selector The function selector for the callOnIntegration
     */
    parseAssetsForMethod(
      _selector: PromiseOrValue<BytesLike>,
      _encodedCallArgs: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides,
    ): Promise<
      [number, string[], BigNumber[], string[], BigNumber[]] & {
        spendAssetsHandleType_: number;
        spendAssets_: string[];
        spendAssetAmounts_: BigNumber[];
        incomingAssets_: string[];
        minIncomingAssetAmounts_: BigNumber[];
      }
    >;

    /**
     * Trades assets on Curve
     * @param _encodedCallArgs Encoded order parameters
     * @param _vaultProxy The VaultProxy of the calling fund
     */
    takeOrder(
      _vaultProxy: PromiseOrValue<string>,
      _encodedCallArgs: PromiseOrValue<BytesLike>,
      arg2: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;
  };

  ADD_TRACKED_ASSETS_SELECTOR(overrides?: CallOverrides): Promise<string>;

  APPROVE_ASSETS_SELECTOR(overrides?: CallOverrides): Promise<string>;

  CLAIM_REWARDS_AND_REINVEST_SELECTOR(
    overrides?: CallOverrides,
  ): Promise<string>;

  CLAIM_REWARDS_AND_SWAP_SELECTOR(overrides?: CallOverrides): Promise<string>;

  CLAIM_REWARDS_SELECTOR(overrides?: CallOverrides): Promise<string>;

  LEND_AND_STAKE_SELECTOR(overrides?: CallOverrides): Promise<string>;

  LEND_SELECTOR(overrides?: CallOverrides): Promise<string>;

  REDEEM_SELECTOR(overrides?: CallOverrides): Promise<string>;

  REMOVE_TRACKED_ASSETS_SELECTOR(overrides?: CallOverrides): Promise<string>;

  STAKE_SELECTOR(overrides?: CallOverrides): Promise<string>;

  TAKE_ORDER_SELECTOR(overrides?: CallOverrides): Promise<string>;

  UNSTAKE_AND_REDEEM_SELECTOR(overrides?: CallOverrides): Promise<string>;

  UNSTAKE_SELECTOR(overrides?: CallOverrides): Promise<string>;

  /**
   * Gets the `ADDRESS_PROVIDER` variable
   */
  getAddressProvider(overrides?: CallOverrides): Promise<string>;

  /**
   * Gets the `INTEGRATION_MANAGER` variable
   */
  getIntegrationManager(overrides?: CallOverrides): Promise<string>;

  /**
   * Gets the `WETH_TOKEN` variable
   */
  getWethToken(overrides?: CallOverrides): Promise<string>;

  /**
   * Provides a constant string identifier for an adapter
   */
  identifier(overrides?: CallOverrides): Promise<string>;

  /**
   * Parses the expected assets to receive from a call on integration
   * @param _encodedCallArgs The encoded parameters for the callOnIntegration
   * @param _selector The function selector for the callOnIntegration
   */
  parseAssetsForMethod(
    _selector: PromiseOrValue<BytesLike>,
    _encodedCallArgs: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides,
  ): Promise<
    [number, string[], BigNumber[], string[], BigNumber[]] & {
      spendAssetsHandleType_: number;
      spendAssets_: string[];
      spendAssetAmounts_: BigNumber[];
      incomingAssets_: string[];
      minIncomingAssetAmounts_: BigNumber[];
    }
  >;

  /**
   * Trades assets on Curve
   * @param _encodedCallArgs Encoded order parameters
   * @param _vaultProxy The VaultProxy of the calling fund
   */
  takeOrder(
    _vaultProxy: PromiseOrValue<string>,
    _encodedCallArgs: PromiseOrValue<BytesLike>,
    arg2: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  callStatic: {
    ADD_TRACKED_ASSETS_SELECTOR(overrides?: CallOverrides): Promise<string>;

    APPROVE_ASSETS_SELECTOR(overrides?: CallOverrides): Promise<string>;

    CLAIM_REWARDS_AND_REINVEST_SELECTOR(
      overrides?: CallOverrides,
    ): Promise<string>;

    CLAIM_REWARDS_AND_SWAP_SELECTOR(overrides?: CallOverrides): Promise<string>;

    CLAIM_REWARDS_SELECTOR(overrides?: CallOverrides): Promise<string>;

    LEND_AND_STAKE_SELECTOR(overrides?: CallOverrides): Promise<string>;

    LEND_SELECTOR(overrides?: CallOverrides): Promise<string>;

    REDEEM_SELECTOR(overrides?: CallOverrides): Promise<string>;

    REMOVE_TRACKED_ASSETS_SELECTOR(overrides?: CallOverrides): Promise<string>;

    STAKE_SELECTOR(overrides?: CallOverrides): Promise<string>;

    TAKE_ORDER_SELECTOR(overrides?: CallOverrides): Promise<string>;

    UNSTAKE_AND_REDEEM_SELECTOR(overrides?: CallOverrides): Promise<string>;

    UNSTAKE_SELECTOR(overrides?: CallOverrides): Promise<string>;

    /**
     * Gets the `ADDRESS_PROVIDER` variable
     */
    getAddressProvider(overrides?: CallOverrides): Promise<string>;

    /**
     * Gets the `INTEGRATION_MANAGER` variable
     */
    getIntegrationManager(overrides?: CallOverrides): Promise<string>;

    /**
     * Gets the `WETH_TOKEN` variable
     */
    getWethToken(overrides?: CallOverrides): Promise<string>;

    /**
     * Provides a constant string identifier for an adapter
     */
    identifier(overrides?: CallOverrides): Promise<string>;

    /**
     * Parses the expected assets to receive from a call on integration
     * @param _encodedCallArgs The encoded parameters for the callOnIntegration
     * @param _selector The function selector for the callOnIntegration
     */
    parseAssetsForMethod(
      _selector: PromiseOrValue<BytesLike>,
      _encodedCallArgs: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides,
    ): Promise<
      [number, string[], BigNumber[], string[], BigNumber[]] & {
        spendAssetsHandleType_: number;
        spendAssets_: string[];
        spendAssetAmounts_: BigNumber[];
        incomingAssets_: string[];
        minIncomingAssetAmounts_: BigNumber[];
      }
    >;

    /**
     * Trades assets on Curve
     * @param _encodedCallArgs Encoded order parameters
     * @param _vaultProxy The VaultProxy of the calling fund
     */
    takeOrder(
      _vaultProxy: PromiseOrValue<string>,
      _encodedCallArgs: PromiseOrValue<BytesLike>,
      arg2: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides,
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    ADD_TRACKED_ASSETS_SELECTOR(overrides?: CallOverrides): Promise<BigNumber>;

    APPROVE_ASSETS_SELECTOR(overrides?: CallOverrides): Promise<BigNumber>;

    CLAIM_REWARDS_AND_REINVEST_SELECTOR(
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    CLAIM_REWARDS_AND_SWAP_SELECTOR(
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    CLAIM_REWARDS_SELECTOR(overrides?: CallOverrides): Promise<BigNumber>;

    LEND_AND_STAKE_SELECTOR(overrides?: CallOverrides): Promise<BigNumber>;

    LEND_SELECTOR(overrides?: CallOverrides): Promise<BigNumber>;

    REDEEM_SELECTOR(overrides?: CallOverrides): Promise<BigNumber>;

    REMOVE_TRACKED_ASSETS_SELECTOR(
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    STAKE_SELECTOR(overrides?: CallOverrides): Promise<BigNumber>;

    TAKE_ORDER_SELECTOR(overrides?: CallOverrides): Promise<BigNumber>;

    UNSTAKE_AND_REDEEM_SELECTOR(overrides?: CallOverrides): Promise<BigNumber>;

    UNSTAKE_SELECTOR(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * Gets the `ADDRESS_PROVIDER` variable
     */
    getAddressProvider(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * Gets the `INTEGRATION_MANAGER` variable
     */
    getIntegrationManager(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * Gets the `WETH_TOKEN` variable
     */
    getWethToken(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * Provides a constant string identifier for an adapter
     */
    identifier(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * Parses the expected assets to receive from a call on integration
     * @param _encodedCallArgs The encoded parameters for the callOnIntegration
     * @param _selector The function selector for the callOnIntegration
     */
    parseAssetsForMethod(
      _selector: PromiseOrValue<BytesLike>,
      _encodedCallArgs: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    /**
     * Trades assets on Curve
     * @param _encodedCallArgs Encoded order parameters
     * @param _vaultProxy The VaultProxy of the calling fund
     */
    takeOrder(
      _vaultProxy: PromiseOrValue<string>,
      _encodedCallArgs: PromiseOrValue<BytesLike>,
      arg2: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    ADD_TRACKED_ASSETS_SELECTOR(
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    APPROVE_ASSETS_SELECTOR(
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    CLAIM_REWARDS_AND_REINVEST_SELECTOR(
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    CLAIM_REWARDS_AND_SWAP_SELECTOR(
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    CLAIM_REWARDS_SELECTOR(
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    LEND_AND_STAKE_SELECTOR(
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    LEND_SELECTOR(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    REDEEM_SELECTOR(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    REMOVE_TRACKED_ASSETS_SELECTOR(
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    STAKE_SELECTOR(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    TAKE_ORDER_SELECTOR(
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    UNSTAKE_AND_REDEEM_SELECTOR(
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    UNSTAKE_SELECTOR(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    /**
     * Gets the `ADDRESS_PROVIDER` variable
     */
    getAddressProvider(
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    /**
     * Gets the `INTEGRATION_MANAGER` variable
     */
    getIntegrationManager(
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    /**
     * Gets the `WETH_TOKEN` variable
     */
    getWethToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    /**
     * Provides a constant string identifier for an adapter
     */
    identifier(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    /**
     * Parses the expected assets to receive from a call on integration
     * @param _encodedCallArgs The encoded parameters for the callOnIntegration
     * @param _selector The function selector for the callOnIntegration
     */
    parseAssetsForMethod(
      _selector: PromiseOrValue<BytesLike>,
      _encodedCallArgs: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    /**
     * Trades assets on Curve
     * @param _encodedCallArgs Encoded order parameters
     * @param _vaultProxy The VaultProxy of the calling fund
     */
    takeOrder(
      _vaultProxy: PromiseOrValue<string>,
      _encodedCallArgs: PromiseOrValue<BytesLike>,
      arg2: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;
  };
}
