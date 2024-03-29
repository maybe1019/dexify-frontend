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
  PayableOverrides,
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

export interface FundActionsWrapperInterface extends utils.Interface {
  functions: {
    'accountHasMaxWethAllowance(address)': FunctionFragment;
    'calcNetShareValueForFund(address)': FunctionFragment;
    'exchangeAndBuyShares(address,address,address,uint256,address,address,bytes,uint256)': FunctionFragment;
    'getContinuousFeesForFund(address)': FunctionFragment;
    'getFeeManager()': FunctionFragment;
    'getWethToken()': FunctionFragment;
    'invokeContinuousFeeHookAndPayoutSharesOutstandingForFund(address,address[])': FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | 'accountHasMaxWethAllowance'
      | 'calcNetShareValueForFund'
      | 'exchangeAndBuyShares'
      | 'getContinuousFeesForFund'
      | 'getFeeManager'
      | 'getWethToken'
      | 'invokeContinuousFeeHookAndPayoutSharesOutstandingForFund',
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: 'accountHasMaxWethAllowance',
    values: [PromiseOrValue<string>],
  ): string;
  encodeFunctionData(
    functionFragment: 'calcNetShareValueForFund',
    values: [PromiseOrValue<string>],
  ): string;
  encodeFunctionData(
    functionFragment: 'exchangeAndBuyShares',
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BigNumberish>,
    ],
  ): string;
  encodeFunctionData(
    functionFragment: 'getContinuousFeesForFund',
    values: [PromiseOrValue<string>],
  ): string;
  encodeFunctionData(
    functionFragment: 'getFeeManager',
    values?: undefined,
  ): string;
  encodeFunctionData(
    functionFragment: 'getWethToken',
    values?: undefined,
  ): string;
  encodeFunctionData(
    functionFragment: 'invokeContinuousFeeHookAndPayoutSharesOutstandingForFund',
    values: [PromiseOrValue<string>, PromiseOrValue<string>[]],
  ): string;

  decodeFunctionResult(
    functionFragment: 'accountHasMaxWethAllowance',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: 'calcNetShareValueForFund',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: 'exchangeAndBuyShares',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: 'getContinuousFeesForFund',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: 'getFeeManager',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: 'getWethToken',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: 'invokeContinuousFeeHookAndPayoutSharesOutstandingForFund',
    data: BytesLike,
  ): Result;

  events: {};
}

export interface FundActionsWrapper extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: FundActionsWrapperInterface;

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
     * Checks whether an account has the max allowance for WETH
     * @param _who The account to check
     */
    accountHasMaxWethAllowance(
      _who: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<[boolean] & { hasMaxWethAllowance_: boolean }>;

    /**
     * Accounts for fees outstanding. This is a convenience function for external consumption that can be used to determine the cost of purchasing shares at any given point in time. It essentially just bundles settling all fees that implement the Continuous hook and then looking up the gross share value.
     * Calculates the net value of 1 unit of shares in the fund's denomination asset
     * @param _comptrollerProxy The ComptrollerProxy of the fund
     */
    calcNetShareValueForFund(
      _comptrollerProxy: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    /**
     * Use a reasonable _minInvestmentAmount always, in case the exchange does not perform as expected (low incoming asset amount, blend of assets, etc). If the fund's denomination asset is WETH, _exchange, _exchangeApproveTarget, _exchangeData, and _minInvestmentAmount will be ignored.
     * Exchanges ETH into a fund's denomination asset and then buys shares
     * @param _buyer The account for which to buy shares
     * @param _comptrollerProxy The ComptrollerProxy of the fund
     * @param _exchange The exchange on which to execute the swap to the denomination asset
     * @param _exchangeApproveTarget The address that should be given an allowance of WETH for the given _exchange
     * @param _exchangeData The data with which to call the exchange to execute the swap to the denomination asset
     * @param _minInvestmentAmount The minimum amount of the denomination asset to receive in the trade for investment (not necessary for WETH)
     * @param _minSharesQuantity The minimum quantity of shares to buy with the sent ETH
     */
    exchangeAndBuyShares(
      _comptrollerProxy: PromiseOrValue<string>,
      _denominationAsset: PromiseOrValue<string>,
      _buyer: PromiseOrValue<string>,
      _minSharesQuantity: PromiseOrValue<BigNumberish>,
      _exchange: PromiseOrValue<string>,
      _exchangeApproveTarget: PromiseOrValue<string>,
      _exchangeData: PromiseOrValue<BytesLike>,
      _minInvestmentAmount: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    /**
     * Gets all fees that implement the `Continuous` fee hook for a fund
     * @param _comptrollerProxy The ComptrollerProxy of the fund
     */
    getContinuousFeesForFund(
      _comptrollerProxy: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<[string[]] & { continuousFees_: string[] }>;

    /**
     * Gets the `FEE_MANAGER` variable
     */
    getFeeManager(
      overrides?: CallOverrides,
    ): Promise<[string] & { feeManager_: string }>;

    /**
     * Gets the `WETH_TOKEN` variable
     */
    getWethToken(
      overrides?: CallOverrides,
    ): Promise<[string] & { wethToken_: string }>;

    /**
     * This is just a wrapper to execute two callOnExtension() actions atomically, in sequence. The caller must pass in the fees that they want to run this logic on.
     * Invokes the Continuous fee hook on all specified fees, and then attempts to payout any shares outstanding on those fees
     * @param _comptrollerProxy The ComptrollerProxy of the fund
     * @param _fees The fees for which to run these actions
     */
    invokeContinuousFeeHookAndPayoutSharesOutstandingForFund(
      _comptrollerProxy: PromiseOrValue<string>,
      _fees: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;
  };

  /**
   * Checks whether an account has the max allowance for WETH
   * @param _who The account to check
   */
  accountHasMaxWethAllowance(
    _who: PromiseOrValue<string>,
    overrides?: CallOverrides,
  ): Promise<boolean>;

  /**
   * Accounts for fees outstanding. This is a convenience function for external consumption that can be used to determine the cost of purchasing shares at any given point in time. It essentially just bundles settling all fees that implement the Continuous hook and then looking up the gross share value.
   * Calculates the net value of 1 unit of shares in the fund's denomination asset
   * @param _comptrollerProxy The ComptrollerProxy of the fund
   */
  calcNetShareValueForFund(
    _comptrollerProxy: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  /**
   * Use a reasonable _minInvestmentAmount always, in case the exchange does not perform as expected (low incoming asset amount, blend of assets, etc). If the fund's denomination asset is WETH, _exchange, _exchangeApproveTarget, _exchangeData, and _minInvestmentAmount will be ignored.
   * Exchanges ETH into a fund's denomination asset and then buys shares
   * @param _buyer The account for which to buy shares
   * @param _comptrollerProxy The ComptrollerProxy of the fund
   * @param _exchange The exchange on which to execute the swap to the denomination asset
   * @param _exchangeApproveTarget The address that should be given an allowance of WETH for the given _exchange
   * @param _exchangeData The data with which to call the exchange to execute the swap to the denomination asset
   * @param _minInvestmentAmount The minimum amount of the denomination asset to receive in the trade for investment (not necessary for WETH)
   * @param _minSharesQuantity The minimum quantity of shares to buy with the sent ETH
   */
  exchangeAndBuyShares(
    _comptrollerProxy: PromiseOrValue<string>,
    _denominationAsset: PromiseOrValue<string>,
    _buyer: PromiseOrValue<string>,
    _minSharesQuantity: PromiseOrValue<BigNumberish>,
    _exchange: PromiseOrValue<string>,
    _exchangeApproveTarget: PromiseOrValue<string>,
    _exchangeData: PromiseOrValue<BytesLike>,
    _minInvestmentAmount: PromiseOrValue<BigNumberish>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  /**
   * Gets all fees that implement the `Continuous` fee hook for a fund
   * @param _comptrollerProxy The ComptrollerProxy of the fund
   */
  getContinuousFeesForFund(
    _comptrollerProxy: PromiseOrValue<string>,
    overrides?: CallOverrides,
  ): Promise<string[]>;

  /**
   * Gets the `FEE_MANAGER` variable
   */
  getFeeManager(overrides?: CallOverrides): Promise<string>;

  /**
   * Gets the `WETH_TOKEN` variable
   */
  getWethToken(overrides?: CallOverrides): Promise<string>;

  /**
   * This is just a wrapper to execute two callOnExtension() actions atomically, in sequence. The caller must pass in the fees that they want to run this logic on.
   * Invokes the Continuous fee hook on all specified fees, and then attempts to payout any shares outstanding on those fees
   * @param _comptrollerProxy The ComptrollerProxy of the fund
   * @param _fees The fees for which to run these actions
   */
  invokeContinuousFeeHookAndPayoutSharesOutstandingForFund(
    _comptrollerProxy: PromiseOrValue<string>,
    _fees: PromiseOrValue<string>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  callStatic: {
    /**
     * Checks whether an account has the max allowance for WETH
     * @param _who The account to check
     */
    accountHasMaxWethAllowance(
      _who: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<boolean>;

    /**
     * Accounts for fees outstanding. This is a convenience function for external consumption that can be used to determine the cost of purchasing shares at any given point in time. It essentially just bundles settling all fees that implement the Continuous hook and then looking up the gross share value.
     * Calculates the net value of 1 unit of shares in the fund's denomination asset
     * @param _comptrollerProxy The ComptrollerProxy of the fund
     */
    calcNetShareValueForFund(
      _comptrollerProxy: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<
      [BigNumber, boolean] & { netShareValue_: BigNumber; isValid_: boolean }
    >;

    /**
     * Use a reasonable _minInvestmentAmount always, in case the exchange does not perform as expected (low incoming asset amount, blend of assets, etc). If the fund's denomination asset is WETH, _exchange, _exchangeApproveTarget, _exchangeData, and _minInvestmentAmount will be ignored.
     * Exchanges ETH into a fund's denomination asset and then buys shares
     * @param _buyer The account for which to buy shares
     * @param _comptrollerProxy The ComptrollerProxy of the fund
     * @param _exchange The exchange on which to execute the swap to the denomination asset
     * @param _exchangeApproveTarget The address that should be given an allowance of WETH for the given _exchange
     * @param _exchangeData The data with which to call the exchange to execute the swap to the denomination asset
     * @param _minInvestmentAmount The minimum amount of the denomination asset to receive in the trade for investment (not necessary for WETH)
     * @param _minSharesQuantity The minimum quantity of shares to buy with the sent ETH
     */
    exchangeAndBuyShares(
      _comptrollerProxy: PromiseOrValue<string>,
      _denominationAsset: PromiseOrValue<string>,
      _buyer: PromiseOrValue<string>,
      _minSharesQuantity: PromiseOrValue<BigNumberish>,
      _exchange: PromiseOrValue<string>,
      _exchangeApproveTarget: PromiseOrValue<string>,
      _exchangeData: PromiseOrValue<BytesLike>,
      _minInvestmentAmount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    /**
     * Gets all fees that implement the `Continuous` fee hook for a fund
     * @param _comptrollerProxy The ComptrollerProxy of the fund
     */
    getContinuousFeesForFund(
      _comptrollerProxy: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<string[]>;

    /**
     * Gets the `FEE_MANAGER` variable
     */
    getFeeManager(overrides?: CallOverrides): Promise<string>;

    /**
     * Gets the `WETH_TOKEN` variable
     */
    getWethToken(overrides?: CallOverrides): Promise<string>;

    /**
     * This is just a wrapper to execute two callOnExtension() actions atomically, in sequence. The caller must pass in the fees that they want to run this logic on.
     * Invokes the Continuous fee hook on all specified fees, and then attempts to payout any shares outstanding on those fees
     * @param _comptrollerProxy The ComptrollerProxy of the fund
     * @param _fees The fees for which to run these actions
     */
    invokeContinuousFeeHookAndPayoutSharesOutstandingForFund(
      _comptrollerProxy: PromiseOrValue<string>,
      _fees: PromiseOrValue<string>[],
      overrides?: CallOverrides,
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    /**
     * Checks whether an account has the max allowance for WETH
     * @param _who The account to check
     */
    accountHasMaxWethAllowance(
      _who: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    /**
     * Accounts for fees outstanding. This is a convenience function for external consumption that can be used to determine the cost of purchasing shares at any given point in time. It essentially just bundles settling all fees that implement the Continuous hook and then looking up the gross share value.
     * Calculates the net value of 1 unit of shares in the fund's denomination asset
     * @param _comptrollerProxy The ComptrollerProxy of the fund
     */
    calcNetShareValueForFund(
      _comptrollerProxy: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    /**
     * Use a reasonable _minInvestmentAmount always, in case the exchange does not perform as expected (low incoming asset amount, blend of assets, etc). If the fund's denomination asset is WETH, _exchange, _exchangeApproveTarget, _exchangeData, and _minInvestmentAmount will be ignored.
     * Exchanges ETH into a fund's denomination asset and then buys shares
     * @param _buyer The account for which to buy shares
     * @param _comptrollerProxy The ComptrollerProxy of the fund
     * @param _exchange The exchange on which to execute the swap to the denomination asset
     * @param _exchangeApproveTarget The address that should be given an allowance of WETH for the given _exchange
     * @param _exchangeData The data with which to call the exchange to execute the swap to the denomination asset
     * @param _minInvestmentAmount The minimum amount of the denomination asset to receive in the trade for investment (not necessary for WETH)
     * @param _minSharesQuantity The minimum quantity of shares to buy with the sent ETH
     */
    exchangeAndBuyShares(
      _comptrollerProxy: PromiseOrValue<string>,
      _denominationAsset: PromiseOrValue<string>,
      _buyer: PromiseOrValue<string>,
      _minSharesQuantity: PromiseOrValue<BigNumberish>,
      _exchange: PromiseOrValue<string>,
      _exchangeApproveTarget: PromiseOrValue<string>,
      _exchangeData: PromiseOrValue<BytesLike>,
      _minInvestmentAmount: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    /**
     * Gets all fees that implement the `Continuous` fee hook for a fund
     * @param _comptrollerProxy The ComptrollerProxy of the fund
     */
    getContinuousFeesForFund(
      _comptrollerProxy: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    /**
     * Gets the `FEE_MANAGER` variable
     */
    getFeeManager(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * Gets the `WETH_TOKEN` variable
     */
    getWethToken(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * This is just a wrapper to execute two callOnExtension() actions atomically, in sequence. The caller must pass in the fees that they want to run this logic on.
     * Invokes the Continuous fee hook on all specified fees, and then attempts to payout any shares outstanding on those fees
     * @param _comptrollerProxy The ComptrollerProxy of the fund
     * @param _fees The fees for which to run these actions
     */
    invokeContinuousFeeHookAndPayoutSharesOutstandingForFund(
      _comptrollerProxy: PromiseOrValue<string>,
      _fees: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    /**
     * Checks whether an account has the max allowance for WETH
     * @param _who The account to check
     */
    accountHasMaxWethAllowance(
      _who: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    /**
     * Accounts for fees outstanding. This is a convenience function for external consumption that can be used to determine the cost of purchasing shares at any given point in time. It essentially just bundles settling all fees that implement the Continuous hook and then looking up the gross share value.
     * Calculates the net value of 1 unit of shares in the fund's denomination asset
     * @param _comptrollerProxy The ComptrollerProxy of the fund
     */
    calcNetShareValueForFund(
      _comptrollerProxy: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    /**
     * Use a reasonable _minInvestmentAmount always, in case the exchange does not perform as expected (low incoming asset amount, blend of assets, etc). If the fund's denomination asset is WETH, _exchange, _exchangeApproveTarget, _exchangeData, and _minInvestmentAmount will be ignored.
     * Exchanges ETH into a fund's denomination asset and then buys shares
     * @param _buyer The account for which to buy shares
     * @param _comptrollerProxy The ComptrollerProxy of the fund
     * @param _exchange The exchange on which to execute the swap to the denomination asset
     * @param _exchangeApproveTarget The address that should be given an allowance of WETH for the given _exchange
     * @param _exchangeData The data with which to call the exchange to execute the swap to the denomination asset
     * @param _minInvestmentAmount The minimum amount of the denomination asset to receive in the trade for investment (not necessary for WETH)
     * @param _minSharesQuantity The minimum quantity of shares to buy with the sent ETH
     */
    exchangeAndBuyShares(
      _comptrollerProxy: PromiseOrValue<string>,
      _denominationAsset: PromiseOrValue<string>,
      _buyer: PromiseOrValue<string>,
      _minSharesQuantity: PromiseOrValue<BigNumberish>,
      _exchange: PromiseOrValue<string>,
      _exchangeApproveTarget: PromiseOrValue<string>,
      _exchangeData: PromiseOrValue<BytesLike>,
      _minInvestmentAmount: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    /**
     * Gets all fees that implement the `Continuous` fee hook for a fund
     * @param _comptrollerProxy The ComptrollerProxy of the fund
     */
    getContinuousFeesForFund(
      _comptrollerProxy: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    /**
     * Gets the `FEE_MANAGER` variable
     */
    getFeeManager(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    /**
     * Gets the `WETH_TOKEN` variable
     */
    getWethToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    /**
     * This is just a wrapper to execute two callOnExtension() actions atomically, in sequence. The caller must pass in the fees that they want to run this logic on.
     * Invokes the Continuous fee hook on all specified fees, and then attempts to payout any shares outstanding on those fees
     * @param _comptrollerProxy The ComptrollerProxy of the fund
     * @param _fees The fees for which to run these actions
     */
    invokeContinuousFeeHookAndPayoutSharesOutstandingForFund(
      _comptrollerProxy: PromiseOrValue<string>,
      _fees: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;
  };
}
