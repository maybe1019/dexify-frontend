/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers';
import type { Provider, TransactionRequest } from '@ethersproject/providers';
import type { PromiseOrValue } from '../common';
import type { AavePriceFeed, AavePriceFeedInterface } from '../AavePriceFeed';

const _abi = [
  {
    inputs: [
      {
        internalType: 'address',
        name: '_fundDeployer',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_protocolDataProvider',
        type: 'address',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'derivative',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'underlying',
        type: 'address',
      },
    ],
    name: 'DerivativeAdded',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'derivative',
        type: 'address',
      },
    ],
    name: 'DerivativeRemoved',
    type: 'event',
  },
  {
    inputs: [
      {
        internalType: 'address[]',
        name: '_derivatives',
        type: 'address[]',
      },
      {
        internalType: 'address[]',
        name: '_underlyings',
        type: 'address[]',
      },
    ],
    name: 'addDerivatives',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_derivative',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_derivativeAmount',
        type: 'uint256',
      },
    ],
    name: 'calcUnderlyingValues',
    outputs: [
      {
        internalType: 'address[]',
        name: 'underlyings_',
        type: 'address[]',
      },
      {
        internalType: 'uint256[]',
        name: 'underlyingAmounts_',
        type: 'uint256[]',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getFundDeployer',
    outputs: [
      {
        internalType: 'address',
        name: 'fundDeployer_',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getOwner',
    outputs: [
      {
        internalType: 'address',
        name: 'owner_',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getProtocolDataProvider',
    outputs: [
      {
        internalType: 'address',
        name: 'protocolDataProvider_',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_derivative',
        type: 'address',
      },
    ],
    name: 'getUnderlyingForDerivative',
    outputs: [
      {
        internalType: 'address',
        name: 'underlying_',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_asset',
        type: 'address',
      },
    ],
    name: 'isSupportedAsset',
    outputs: [
      {
        internalType: 'bool',
        name: 'isSupported_',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address[]',
        name: '_derivatives',
        type: 'address[]',
      },
    ],
    name: 'removeDerivatives',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
];

const _bytecode =
  '0x60c060405234801561001057600080fd5b50604051610ec6380380610ec68339818101604052604081101561003357600080fd5b5080516020909101516001600160601b0319606092831b8116608052911b1660a05260805160601c60a05160601c610e3e6100886000398061073f5280610ad25250806108405280610a855250610e3e6000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c8063893d20e81161005b578063893d20e8146102c55780638f72b136146102cd57806397c0ac87146103705780639be918e61461037857610088565b806339cbb63c1461008d57806366adb867146101b65780636ec376c2146101f8578063727212f614610200575b600080fd5b6101b4600480360360408110156100a357600080fd5b8101906020810181356401000000008111156100be57600080fd5b8201836020820111156100d057600080fd5b803590602001918460208302840111640100000000831117156100f257600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600092019190915250929594936020810193503591505064010000000081111561014257600080fd5b82018360208201111561015457600080fd5b8035906020019184602083028401116401000000008311171561017657600080fd5b9190808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152509295506103b2945050505050565b005b6101dc600480360360208110156101cc57600080fd5b50356001600160a01b031661071f565b604080516001600160a01b039092168252519081900360200190f35b6101dc61073d565b61022c6004803603604081101561021657600080fd5b506001600160a01b038135169060200135610761565b604051808060200180602001838103835285818151815260200191508051906020019060200280838360005b83811015610270578181015183820152602001610258565b50505050905001838103825284818151815260200191508051906020019060200280838360005b838110156102af578181015183820152602001610297565b5050505090500194505050505060405180910390f35b6101dc61083c565b6101b4600480360360208110156102e357600080fd5b8101906020810181356401000000008111156102fe57600080fd5b82018360208201111561031057600080fd5b8035906020019184602083028401116401000000008311171561033257600080fd5b9190808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152509295506108c8945050505050565b6101dc610a83565b61039e6004803603602081101561038e57600080fd5b50356001600160a01b0316610aa7565b604080519115158252519081900360200190f35b6103ba61083c565b6001600160a01b0316336001600160a01b0316146104095760405162461bcd60e51b8152600401808060200182810382526049815260200180610d276049913960600191505060405180910390fd5b60008251116104495760405162461bcd60e51b8152600401808060200182810382526022815260200180610dc16022913960400191505060405180910390fd5b805182511461049f576040805162461bcd60e51b815260206004820152601e60248201527f61646444657269766174697665733a20556e657175616c206172726179730000604482015290519081900360640190fd5b60005b825181101561071a5760006001600160a01b03168382815181106104c257fe5b60200260200101516001600160a01b03161415610526576040805162461bcd60e51b815260206004820181905260248201527f61646444657269766174697665733a20456d7074792064657269766174697665604482015290519081900360640190fd5b60006001600160a01b031682828151811061053d57fe5b60200260200101516001600160a01b031614156105a1576040805162461bcd60e51b815260206004820181905260248201527f61646444657269766174697665733a20456d70747920756e6465726c79696e67604482015290519081900360640190fd5b60006001600160a01b03166105c88483815181106105bb57fe5b602002602001015161071f565b6001600160a01b03161461060d5760405162461bcd60e51b8152600401808060200182810382526021815260200180610d706021913960400191505060405180910390fd5b61063d83828151811061061c57fe5b602002602001015183838151811061063057fe5b6020026020010151610ac4565b81818151811061064957fe5b602002602001015160008085848151811061066057fe5b60200260200101516001600160a01b03166001600160a01b0316815260200190815260200160002060006101000a8154816001600160a01b0302191690836001600160a01b031602179055508181815181106106b857fe5b60200260200101516001600160a01b03168382815181106106d557fe5b60200260200101516001600160a01b03167faa4ae250fb435bb4b31ed0b95822bc179fc6c5dd0c727c3ffe08d444025efd9860405160405180910390a36001016104a2565b505050565b6001600160a01b039081166000908152602081905260409020541690565b7f000000000000000000000000000000000000000000000000000000000000000090565b606080600061076f8561071f565b90506001600160a01b0381166107b65760405162461bcd60e51b8152600401808060200182810382526030815260200180610d916030913960400191505060405180910390fd5b604080516001808252818301909252906020808301908036833701905050925080836000815181106107e457fe5b6001600160a01b0392909216602092830291909101820152604080516001808252818301909252918281019080368337019050509150838260008151811061082857fe5b602002602001018181525050509250929050565b60007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663893d20e86040518163ffffffff1660e01b815260040160206040518083038186803b15801561089757600080fd5b505afa1580156108ab573d6000803e3d6000fd5b505050506040513d60208110156108c157600080fd5b5051905090565b6108d061083c565b6001600160a01b0316336001600160a01b03161461091f5760405162461bcd60e51b8152600401808060200182810382526049815260200180610d276049913960600191505060405180910390fd5b600081511161095f5760405162461bcd60e51b8152600401808060200182810382526025815260200180610d026025913960400191505060405180910390fd5b60005b8151811015610a7f5760006001600160a01b03166109858383815181106105bb57fe5b6001600160a01b031614156109e1576040805162461bcd60e51b815260206004820181905260248201527f72656d6f766544657269766174697665733a2056616c7565206e6f7420736574604482015290519081900360640190fd5b6000808383815181106109f057fe5b60200260200101516001600160a01b03166001600160a01b0316815260200190815260200160002060006101000a8154906001600160a01b030219169055818181518110610a3a57fe5b60200260200101516001600160a01b03167fc15eb25d807b570f4567baf6e97c7b26d58a7d0512dc85e8db15375a056b860460405160405180910390a2600101610962565b5050565b7f000000000000000000000000000000000000000000000000000000000000000090565b600080610ab38361071f565b6001600160a01b0316141592915050565b610ace8282610bb5565b60007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663d2493b6c836040518263ffffffff1660e01b815260040180826001600160a01b0316815260200191505060606040518083038186803b158015610b3d57600080fd5b505afa158015610b51573d6000803e3d6000fd5b505050506040513d6060811015610b6757600080fd5b505190506001600160a01b038082169084161461071a5760405162461bcd60e51b8152600401808060200182810382526036815260200180610ccc6036913960400191505060405180910390fd5b806001600160a01b031663313ce5676040518163ffffffff1660e01b815260040160206040518083038186803b158015610bee57600080fd5b505afa158015610c02573d6000803e3d6000fd5b505050506040513d6020811015610c1857600080fd5b50516040805163313ce56760e01b8152905160ff909216916001600160a01b0385169163313ce567916004808301926020929190829003018186803b158015610c6057600080fd5b505afa158015610c74573d6000803e3d6000fd5b505050506040513d6020811015610c8a57600080fd5b505160ff1614610a7f5760405162461bcd60e51b8152600401808060200182810382526026815260200180610de36026913960400191505060405180910390fdfe5f5f76616c6964617465446572697661746976653a20496e76616c69642061546f6b656e206f7220746f6b656e2070726f766964656472656d6f766544657269766174697665733a20456d707479205f64657269766174697665736f6e6c7946756e644465706c6f7965724f776e65723a204f6e6c79207468652046756e644465706c6f796572206f776e65722063616e2063616c6c20746869732066756e6374696f6e61646444657269766174697665733a2056616c756520616c72656164792073657463616c63556e6465726c79696e6756616c7565733a204e6f74206120737570706f72746564206465726976617469766561646444657269766174697665733a20456d707479205f64657269766174697665735f5f76616c6964617465446572697661746976653a20556e657175616c20646563696d616c73a2646970667358221220df7904db5f0656fbddd04d0fbdd17f8e01cc37f8c12f1ccfc9f2ac3291cabcbf64736f6c634300060c0033';

type AavePriceFeedConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: AavePriceFeedConstructorParams,
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class AavePriceFeed__factory extends ContractFactory {
  constructor(...args: AavePriceFeedConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _fundDeployer: PromiseOrValue<string>,
    _protocolDataProvider: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<AavePriceFeed> {
    return super.deploy(
      _fundDeployer,
      _protocolDataProvider,
      overrides || {},
    ) as Promise<AavePriceFeed>;
  }
  override getDeployTransaction(
    _fundDeployer: PromiseOrValue<string>,
    _protocolDataProvider: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): TransactionRequest {
    return super.getDeployTransaction(
      _fundDeployer,
      _protocolDataProvider,
      overrides || {},
    );
  }
  override attach(address: string): AavePriceFeed {
    return super.attach(address) as AavePriceFeed;
  }
  override connect(signer: Signer): AavePriceFeed__factory {
    return super.connect(signer) as AavePriceFeed__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): AavePriceFeedInterface {
    return new utils.Interface(_abi) as AavePriceFeedInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider,
  ): AavePriceFeed {
    return new Contract(address, _abi, signerOrProvider) as AavePriceFeed;
  }
}
