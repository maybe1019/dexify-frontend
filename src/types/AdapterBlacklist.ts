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

export interface AdapterBlacklistInterface extends utils.Interface {
  functions: {
    'activateForFund(address,address)': FunctionFragment;
    'addFundSettings(address,bytes)': FunctionFragment;
    'getList(address)': FunctionFragment;
    'getPolicyManager()': FunctionFragment;
    'identifier()': FunctionFragment;
    'implementedHooks()': FunctionFragment;
    'isInList(address,address)': FunctionFragment;
    'passesRule(address,address)': FunctionFragment;
    'updateFundSettings(address,address,bytes)': FunctionFragment;
    'validateRule(address,address,uint8,bytes)': FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | 'activateForFund'
      | 'addFundSettings'
      | 'getList'
      | 'getPolicyManager'
      | 'identifier'
      | 'implementedHooks'
      | 'isInList'
      | 'passesRule'
      | 'updateFundSettings'
      | 'validateRule',
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: 'activateForFund',
    values: [PromiseOrValue<string>, PromiseOrValue<string>],
  ): string;
  encodeFunctionData(
    functionFragment: 'addFundSettings',
    values: [PromiseOrValue<string>, PromiseOrValue<BytesLike>],
  ): string;
  encodeFunctionData(
    functionFragment: 'getList',
    values: [PromiseOrValue<string>],
  ): string;
  encodeFunctionData(
    functionFragment: 'getPolicyManager',
    values?: undefined,
  ): string;
  encodeFunctionData(
    functionFragment: 'identifier',
    values?: undefined,
  ): string;
  encodeFunctionData(
    functionFragment: 'implementedHooks',
    values?: undefined,
  ): string;
  encodeFunctionData(
    functionFragment: 'isInList',
    values: [PromiseOrValue<string>, PromiseOrValue<string>],
  ): string;
  encodeFunctionData(
    functionFragment: 'passesRule',
    values: [PromiseOrValue<string>, PromiseOrValue<string>],
  ): string;
  encodeFunctionData(
    functionFragment: 'updateFundSettings',
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BytesLike>,
    ],
  ): string;
  encodeFunctionData(
    functionFragment: 'validateRule',
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>,
    ],
  ): string;

  decodeFunctionResult(
    functionFragment: 'activateForFund',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: 'addFundSettings',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(functionFragment: 'getList', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'getPolicyManager',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(functionFragment: 'identifier', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'implementedHooks',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(functionFragment: 'isInList', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'passesRule', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'updateFundSettings',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: 'validateRule',
    data: BytesLike,
  ): Result;

  events: {
    'AddressesAdded(address,address[])': EventFragment;
    'AddressesRemoved(address,address[])': EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: 'AddressesAdded'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'AddressesRemoved'): EventFragment;
}

export interface AddressesAddedEventObject {
  comptrollerProxy: string;
  items: string[];
}
export type AddressesAddedEvent = TypedEvent<
  [string, string[]],
  AddressesAddedEventObject
>;

export type AddressesAddedEventFilter = TypedEventFilter<AddressesAddedEvent>;

export interface AddressesRemovedEventObject {
  comptrollerProxy: string;
  items: string[];
}
export type AddressesRemovedEvent = TypedEvent<
  [string, string[]],
  AddressesRemovedEventObject
>;

export type AddressesRemovedEventFilter =
  TypedEventFilter<AddressesRemovedEvent>;

export interface AdapterBlacklist extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: AdapterBlacklistInterface;

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
     * Unimplemented by default, can be overridden by the policy
     * Validates and initializes a policy as necessary prior to fund activation
     */
    activateForFund(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    /**
     * Add the initial policy settings for a fund
     * @param _comptrollerProxy The fund's ComptrollerProxy address
     * @param _encodedSettings Encoded settings to apply to a fund
     */
    addFundSettings(
      _comptrollerProxy: PromiseOrValue<string>,
      _encodedSettings: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    /**
     * Get all addresses in a fund's list
     * @param _comptrollerProxy The fund's ComptrollerProxy address
     */
    getList(
      _comptrollerProxy: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<[string[]] & { list_: string[] }>;

    /**
     * Gets the `POLICY_MANAGER` variable value
     */
    getPolicyManager(
      overrides?: CallOverrides,
    ): Promise<[string] & { policyManager_: string }>;

    /**
     * Provides a constant string identifier for a policy
     */
    identifier(
      overrides?: CallOverrides,
    ): Promise<[string] & { identifier_: string }>;

    /**
     * Gets the implemented PolicyHooks for a policy
     */
    implementedHooks(
      overrides?: CallOverrides,
    ): Promise<[number[]] & { implementedHooks_: number[] }>;

    /**
     * Check if an address is in a fund's list
     * @param _comptrollerProxy The fund's ComptrollerProxy address
     * @param _item The address to check against the list
     */
    isInList(
      _comptrollerProxy: PromiseOrValue<string>,
      _item: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<[boolean] & { isInList_: boolean }>;

    /**
     * Checks whether a particular condition passes the rule for a particular fund
     * @param _adapter The adapter with which to check the rule
     * @param _comptrollerProxy The fund's ComptrollerProxy address
     */
    passesRule(
      _comptrollerProxy: PromiseOrValue<string>,
      _adapter: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<[boolean] & { isValid_: boolean }>;

    /**
     * Disallowed by default, can be overridden by the policy
     * Updates the policy settings for a fund
     */
    updateFundSettings(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    /**
     * Apply the rule with the specified parameters of a PolicyHook
     * @param _comptrollerProxy The fund's ComptrollerProxy address
     * @param _encodedArgs Encoded args with which to validate the rule
     */
    validateRule(
      _comptrollerProxy: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<BigNumberish>,
      _encodedArgs: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;
  };

  /**
   * Unimplemented by default, can be overridden by the policy
   * Validates and initializes a policy as necessary prior to fund activation
   */
  activateForFund(
    arg0: PromiseOrValue<string>,
    arg1: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  /**
   * Add the initial policy settings for a fund
   * @param _comptrollerProxy The fund's ComptrollerProxy address
   * @param _encodedSettings Encoded settings to apply to a fund
   */
  addFundSettings(
    _comptrollerProxy: PromiseOrValue<string>,
    _encodedSettings: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  /**
   * Get all addresses in a fund's list
   * @param _comptrollerProxy The fund's ComptrollerProxy address
   */
  getList(
    _comptrollerProxy: PromiseOrValue<string>,
    overrides?: CallOverrides,
  ): Promise<string[]>;

  /**
   * Gets the `POLICY_MANAGER` variable value
   */
  getPolicyManager(overrides?: CallOverrides): Promise<string>;

  /**
   * Provides a constant string identifier for a policy
   */
  identifier(overrides?: CallOverrides): Promise<string>;

  /**
   * Gets the implemented PolicyHooks for a policy
   */
  implementedHooks(overrides?: CallOverrides): Promise<number[]>;

  /**
   * Check if an address is in a fund's list
   * @param _comptrollerProxy The fund's ComptrollerProxy address
   * @param _item The address to check against the list
   */
  isInList(
    _comptrollerProxy: PromiseOrValue<string>,
    _item: PromiseOrValue<string>,
    overrides?: CallOverrides,
  ): Promise<boolean>;

  /**
   * Checks whether a particular condition passes the rule for a particular fund
   * @param _adapter The adapter with which to check the rule
   * @param _comptrollerProxy The fund's ComptrollerProxy address
   */
  passesRule(
    _comptrollerProxy: PromiseOrValue<string>,
    _adapter: PromiseOrValue<string>,
    overrides?: CallOverrides,
  ): Promise<boolean>;

  /**
   * Disallowed by default, can be overridden by the policy
   * Updates the policy settings for a fund
   */
  updateFundSettings(
    arg0: PromiseOrValue<string>,
    arg1: PromiseOrValue<string>,
    arg2: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  /**
   * Apply the rule with the specified parameters of a PolicyHook
   * @param _comptrollerProxy The fund's ComptrollerProxy address
   * @param _encodedArgs Encoded args with which to validate the rule
   */
  validateRule(
    _comptrollerProxy: PromiseOrValue<string>,
    arg1: PromiseOrValue<string>,
    arg2: PromiseOrValue<BigNumberish>,
    _encodedArgs: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  callStatic: {
    /**
     * Unimplemented by default, can be overridden by the policy
     * Validates and initializes a policy as necessary prior to fund activation
     */
    activateForFund(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<void>;

    /**
     * Add the initial policy settings for a fund
     * @param _comptrollerProxy The fund's ComptrollerProxy address
     * @param _encodedSettings Encoded settings to apply to a fund
     */
    addFundSettings(
      _comptrollerProxy: PromiseOrValue<string>,
      _encodedSettings: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides,
    ): Promise<void>;

    /**
     * Get all addresses in a fund's list
     * @param _comptrollerProxy The fund's ComptrollerProxy address
     */
    getList(
      _comptrollerProxy: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<string[]>;

    /**
     * Gets the `POLICY_MANAGER` variable value
     */
    getPolicyManager(overrides?: CallOverrides): Promise<string>;

    /**
     * Provides a constant string identifier for a policy
     */
    identifier(overrides?: CallOverrides): Promise<string>;

    /**
     * Gets the implemented PolicyHooks for a policy
     */
    implementedHooks(overrides?: CallOverrides): Promise<number[]>;

    /**
     * Check if an address is in a fund's list
     * @param _comptrollerProxy The fund's ComptrollerProxy address
     * @param _item The address to check against the list
     */
    isInList(
      _comptrollerProxy: PromiseOrValue<string>,
      _item: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<boolean>;

    /**
     * Checks whether a particular condition passes the rule for a particular fund
     * @param _adapter The adapter with which to check the rule
     * @param _comptrollerProxy The fund's ComptrollerProxy address
     */
    passesRule(
      _comptrollerProxy: PromiseOrValue<string>,
      _adapter: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<boolean>;

    /**
     * Disallowed by default, can be overridden by the policy
     * Updates the policy settings for a fund
     */
    updateFundSettings(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides,
    ): Promise<void>;

    /**
     * Apply the rule with the specified parameters of a PolicyHook
     * @param _comptrollerProxy The fund's ComptrollerProxy address
     * @param _encodedArgs Encoded args with which to validate the rule
     */
    validateRule(
      _comptrollerProxy: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<BigNumberish>,
      _encodedArgs: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides,
    ): Promise<boolean>;
  };

  filters: {
    'AddressesAdded(address,address[])'(
      comptrollerProxy?: PromiseOrValue<string> | null,
      items?: null,
    ): AddressesAddedEventFilter;
    AddressesAdded(
      comptrollerProxy?: PromiseOrValue<string> | null,
      items?: null,
    ): AddressesAddedEventFilter;

    'AddressesRemoved(address,address[])'(
      comptrollerProxy?: PromiseOrValue<string> | null,
      items?: null,
    ): AddressesRemovedEventFilter;
    AddressesRemoved(
      comptrollerProxy?: PromiseOrValue<string> | null,
      items?: null,
    ): AddressesRemovedEventFilter;
  };

  estimateGas: {
    /**
     * Unimplemented by default, can be overridden by the policy
     * Validates and initializes a policy as necessary prior to fund activation
     */
    activateForFund(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    /**
     * Add the initial policy settings for a fund
     * @param _comptrollerProxy The fund's ComptrollerProxy address
     * @param _encodedSettings Encoded settings to apply to a fund
     */
    addFundSettings(
      _comptrollerProxy: PromiseOrValue<string>,
      _encodedSettings: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    /**
     * Get all addresses in a fund's list
     * @param _comptrollerProxy The fund's ComptrollerProxy address
     */
    getList(
      _comptrollerProxy: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    /**
     * Gets the `POLICY_MANAGER` variable value
     */
    getPolicyManager(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * Provides a constant string identifier for a policy
     */
    identifier(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * Gets the implemented PolicyHooks for a policy
     */
    implementedHooks(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * Check if an address is in a fund's list
     * @param _comptrollerProxy The fund's ComptrollerProxy address
     * @param _item The address to check against the list
     */
    isInList(
      _comptrollerProxy: PromiseOrValue<string>,
      _item: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    /**
     * Checks whether a particular condition passes the rule for a particular fund
     * @param _adapter The adapter with which to check the rule
     * @param _comptrollerProxy The fund's ComptrollerProxy address
     */
    passesRule(
      _comptrollerProxy: PromiseOrValue<string>,
      _adapter: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    /**
     * Disallowed by default, can be overridden by the policy
     * Updates the policy settings for a fund
     */
    updateFundSettings(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    /**
     * Apply the rule with the specified parameters of a PolicyHook
     * @param _comptrollerProxy The fund's ComptrollerProxy address
     * @param _encodedArgs Encoded args with which to validate the rule
     */
    validateRule(
      _comptrollerProxy: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<BigNumberish>,
      _encodedArgs: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    /**
     * Unimplemented by default, can be overridden by the policy
     * Validates and initializes a policy as necessary prior to fund activation
     */
    activateForFund(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    /**
     * Add the initial policy settings for a fund
     * @param _comptrollerProxy The fund's ComptrollerProxy address
     * @param _encodedSettings Encoded settings to apply to a fund
     */
    addFundSettings(
      _comptrollerProxy: PromiseOrValue<string>,
      _encodedSettings: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    /**
     * Get all addresses in a fund's list
     * @param _comptrollerProxy The fund's ComptrollerProxy address
     */
    getList(
      _comptrollerProxy: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    /**
     * Gets the `POLICY_MANAGER` variable value
     */
    getPolicyManager(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    /**
     * Provides a constant string identifier for a policy
     */
    identifier(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    /**
     * Gets the implemented PolicyHooks for a policy
     */
    implementedHooks(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    /**
     * Check if an address is in a fund's list
     * @param _comptrollerProxy The fund's ComptrollerProxy address
     * @param _item The address to check against the list
     */
    isInList(
      _comptrollerProxy: PromiseOrValue<string>,
      _item: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    /**
     * Checks whether a particular condition passes the rule for a particular fund
     * @param _adapter The adapter with which to check the rule
     * @param _comptrollerProxy The fund's ComptrollerProxy address
     */
    passesRule(
      _comptrollerProxy: PromiseOrValue<string>,
      _adapter: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    /**
     * Disallowed by default, can be overridden by the policy
     * Updates the policy settings for a fund
     */
    updateFundSettings(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    /**
     * Apply the rule with the specified parameters of a PolicyHook
     * @param _comptrollerProxy The fund's ComptrollerProxy address
     * @param _encodedArgs Encoded args with which to validate the rule
     */
    validateRule(
      _comptrollerProxy: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<BigNumberish>,
      _encodedArgs: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;
  };
}