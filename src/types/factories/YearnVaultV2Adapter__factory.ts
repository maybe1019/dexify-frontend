/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers';
import type { Provider, TransactionRequest } from '@ethersproject/providers';
import type { PromiseOrValue } from '../common';
import type {
  YearnVaultV2Adapter,
  YearnVaultV2AdapterInterface,
} from '../YearnVaultV2Adapter';

const _abi = [
  {
    inputs: [
      {
        internalType: 'address',
        name: '_integrationManager',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_yearnVaultV2PriceFeed',
        type: 'address',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    inputs: [],
    name: 'ADD_TRACKED_ASSETS_SELECTOR',
    outputs: [
      {
        internalType: 'bytes4',
        name: '',
        type: 'bytes4',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'APPROVE_ASSETS_SELECTOR',
    outputs: [
      {
        internalType: 'bytes4',
        name: '',
        type: 'bytes4',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'CLAIM_REWARDS_AND_REINVEST_SELECTOR',
    outputs: [
      {
        internalType: 'bytes4',
        name: '',
        type: 'bytes4',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'CLAIM_REWARDS_AND_SWAP_SELECTOR',
    outputs: [
      {
        internalType: 'bytes4',
        name: '',
        type: 'bytes4',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'CLAIM_REWARDS_SELECTOR',
    outputs: [
      {
        internalType: 'bytes4',
        name: '',
        type: 'bytes4',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'LEND_AND_STAKE_SELECTOR',
    outputs: [
      {
        internalType: 'bytes4',
        name: '',
        type: 'bytes4',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'LEND_SELECTOR',
    outputs: [
      {
        internalType: 'bytes4',
        name: '',
        type: 'bytes4',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'REDEEM_SELECTOR',
    outputs: [
      {
        internalType: 'bytes4',
        name: '',
        type: 'bytes4',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'REMOVE_TRACKED_ASSETS_SELECTOR',
    outputs: [
      {
        internalType: 'bytes4',
        name: '',
        type: 'bytes4',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'STAKE_SELECTOR',
    outputs: [
      {
        internalType: 'bytes4',
        name: '',
        type: 'bytes4',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'TAKE_ORDER_SELECTOR',
    outputs: [
      {
        internalType: 'bytes4',
        name: '',
        type: 'bytes4',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'UNSTAKE_AND_REDEEM_SELECTOR',
    outputs: [
      {
        internalType: 'bytes4',
        name: '',
        type: 'bytes4',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'UNSTAKE_SELECTOR',
    outputs: [
      {
        internalType: 'bytes4',
        name: '',
        type: 'bytes4',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getIntegrationManager',
    outputs: [
      {
        internalType: 'address',
        name: 'integrationManager_',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getYearnVaultV2PriceFeed',
    outputs: [
      {
        internalType: 'address',
        name: 'yearnVaultV2PriceFeed_',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'identifier',
    outputs: [
      {
        internalType: 'string',
        name: 'identifier_',
        type: 'string',
      },
    ],
    stateMutability: 'pure',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_vaultProxy',
        type: 'address',
      },
      {
        internalType: 'bytes',
        name: '',
        type: 'bytes',
      },
      {
        internalType: 'bytes',
        name: '_encodedAssetTransferArgs',
        type: 'bytes',
      },
    ],
    name: 'lend',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes4',
        name: '_selector',
        type: 'bytes4',
      },
      {
        internalType: 'bytes',
        name: '_encodedCallArgs',
        type: 'bytes',
      },
    ],
    name: 'parseAssetsForMethod',
    outputs: [
      {
        internalType: 'enum IIntegrationManager.SpendAssetsHandleType',
        name: 'spendAssetsHandleType_',
        type: 'uint8',
      },
      {
        internalType: 'address[]',
        name: 'spendAssets_',
        type: 'address[]',
      },
      {
        internalType: 'uint256[]',
        name: 'spendAssetAmounts_',
        type: 'uint256[]',
      },
      {
        internalType: 'address[]',
        name: 'incomingAssets_',
        type: 'address[]',
      },
      {
        internalType: 'uint256[]',
        name: 'minIncomingAssetAmounts_',
        type: 'uint256[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_vaultProxy',
        type: 'address',
      },
      {
        internalType: 'bytes',
        name: '_encodedCallArgs',
        type: 'bytes',
      },
      {
        internalType: 'bytes',
        name: '_encodedAssetTransferArgs',
        type: 'bytes',
      },
    ],
    name: 'redeem',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
];

const _bytecode =
  '0x60c060405234801561001057600080fd5b506040516119273803806119278339818101604052604081101561003357600080fd5b5080516020909101516001600160601b0319606092831b8116608052911b1660a05260805160601c60a05160601c61189f61008860003980610a8f5250806105d552806109145280610a47525061189f6000f3fe608060405234801561001057600080fd5b50600436106101215760003560e01c80637998a1c4116100ad578063e4d9047811610071578063e4d9047814610562578063e7c456901461056a578063f07539941461058e578063f702e0ea14610596578063f7d882b51461059e57610121565b80637998a1c4146103ff578063863e5ad01461047c578063b23228cf14610484578063c29fa9dd1461048c578063e27a06b51461055a57610121565b80633ffc1591116100f45780633ffc15911461022b57806340da225d1461023357806340f8cfcf1461023b5780635ca62b3c1461024357806376cc7ac61461024b57610121565b8063080456c114610126578063099f75151461014b578063131461c01461021b578063257cb1a314610223575b600080fd5b61012e6105a6565b604080516001600160e01b03199092168252519081900360200190f35b6102196004803603606081101561016157600080fd5b6001600160a01b038235169190810190604081016020820135600160201b81111561018b57600080fd5b82018360208201111561019d57600080fd5b803590602001918460018302840111600160201b831117156101be57600080fd5b919390929091602081019035600160201b8111156101db57600080fd5b8201836020820111156101ed57600080fd5b803590602001918460018302840111600160201b8311171561020e57600080fd5b5090925090506105ca565b005b61012e610723565b61012e610747565b61012e61076b565b61012e61078f565b61012e6107b3565b61012e6107d7565b6102ca6004803603604081101561026157600080fd5b6001600160e01b03198235169190810190604081016020820135600160201b81111561028c57600080fd5b82018360208201111561029e57600080fd5b803590602001918460018302840111600160201b831117156102bf57600080fd5b5090925090506107fb565b604051808660038111156102da57fe5b815260200180602001806020018060200180602001858103855289818151815260200191508051906020019060200280838360005b8381101561032757818101518382015260200161030f565b50505050905001858103845288818151815260200191508051906020019060200280838360005b8381101561036657818101518382015260200161034e565b50505050905001858103835287818151815260200191508051906020019060200280838360005b838110156103a557818101518382015260200161038d565b50505050905001858103825286818151815260200191508051906020019060200280838360005b838110156103e45781810151838201526020016103cc565b50505050905001995050505050505050505060405180910390f35b610407610899565b6040805160208082528351818301528351919283929083019185019080838360005b83811015610441578181015183820152602001610429565b50505050905090810190601f16801561046e5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b61012e6108c1565b61012e6108e5565b610219600480360360608110156104a257600080fd5b6001600160a01b038235169190810190604081016020820135600160201b8111156104cc57600080fd5b8201836020820111156104de57600080fd5b803590602001918460018302840111600160201b831117156104ff57600080fd5b919390929091602081019035600160201b81111561051c57600080fd5b82018360208201111561052e57600080fd5b803590602001918460018302840111600160201b8311171561054f57600080fd5b509092509050610909565b61012e6109fd565b61012e610a21565b610572610a45565b604080516001600160a01b039092168252519081900360200190f35b61012e610a69565b610572610a8d565b61012e610ab1565b7f8334eb99be0145865eba9889fca2ee920288090caefff4cc776038e20ad9259a81565b336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146106315760405162461bcd60e51b81526004018080602001828103825260328152602001806117b06032913960400191505060405180910390fd5b8482828080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525050604080516020601f88018190048102820181019092528681526060935083925082916106ad91908990899081908401838280828437600092019190915250610ad592505050565b935093509350506106fc8a826000815181106106c557fe5b6020026020010151856000815181106106da57fe5b6020026020010151856000815181106106ef57fe5b6020026020010151610c9d565b505050606061070a82610ad5565b50509150506107198382610d31565b5050505050505050565b7f29fa046e79524c3c5ac4c01df692c35e217802b2b13b21121b76cf0ef02b138c81565b7f099f75155f0e997bf83a7993a71d5e7e7540bd386fe1e84643a09ce6b412521981565b7ffa7dd04da627f433da73c4355ead9c75682a67a8fc84d3f6170ef0922f402d2481565b7fb9dfbaccbe5cd2a84fdcf1d15f23ef25d23086f5afbaa99516065ed4a5bbc7a381565b7ff658eb804cc1da8af5599b584aaf3d55407a3c721c42641a6a5270e963d782c381565b7fdfd5ee0f6067928bf85a7c4430811282840bc99332dda3dab462c02bf95b67cc81565b600060608080806001600160e01b0319881663099f751560e01b1415610834576108258787610e12565b9450945094509450945061088e565b6001600160e01b0319881663c29fa9dd60e01b1415610857576108258787610fc5565b60405162461bcd60e51b81526004018080602001828103825260278152602001806117636027913960400191505060405180910390fd5b939792965093509350565b60408051808201909152600e81526d2ca2a0a9272fab20aaa62a2fab1960911b602082015290565b7f03e38a2bd7063d45c897edeafc330e71657502dd86434d3c37a489caf116af6981565b7f68e30677f607df46e87da13e15b637784cfa62374b653f35ab43d10361a2f83081565b336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146109705760405162461bcd60e51b81526004018080602001828103825260328152602001806117b06032913960400191505060405180910390fd5b8482828080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920182905250604080516020601f8c018190048102820181019092528a81529194508493508392506109ea91908b908b908190840183828082843760009201919091525061111792505050565b935050925092506106fc8a848484611154565b7f848f3a590fb2f9795d1a275009c54c26c53833277c96b90e0ddd01753a1d590681565b7f3377e18acf9e83665eacd6af109261424fca32a298e2fc2e6095ba563fb8390e81565b7f000000000000000000000000000000000000000000000000000000000000000090565b7f1d51f49b5273d9ddbb643dc349fab8d36dbb470209c2ea71033bea49dd311c2781565b7f000000000000000000000000000000000000000000000000000000000000000090565b7fc29fa9dde84204c2908778afd0613d802d31cf046179b88f6d2b4a4e507ea2d581565b60006060806060848060200190516080811015610af157600080fd5b815160208301805160405192949293830192919084600160201b821115610b1757600080fd5b908301906020820185811115610b2c57600080fd5b82518660208202830111600160201b82111715610b4857600080fd5b82525081516020918201928201910280838360005b83811015610b75578181015183820152602001610b5d565b5050505090500160405260200180516040519392919084600160201b821115610b9d57600080fd5b908301906020820185811115610bb257600080fd5b82518660208202830111600160201b82111715610bce57600080fd5b82525081516020918201928201910280838360005b83811015610bfb578181015183820152602001610be3565b5050505090500160405260200180516040519392919084600160201b821115610c2357600080fd5b908301906020820185811115610c3857600080fd5b82518660208202830111600160201b82111715610c5457600080fd5b82525081516020918201928201910280838360005b83811015610c81578181015183820152602001610c69565b5050505090500160405250505093509350935093509193509193565b610ca88284836111b3565b826001600160a01b0316636e553f6582866040518363ffffffff1660e01b815260040180838152602001826001600160a01b0316815260200192505050602060405180830381600087803b158015610cff57600080fd5b505af1158015610d13573d6000803e3d6000fd5b505050506040513d6020811015610d2957600080fd5b505050505050565b60005b8151811015610e0d576000828281518110610d4b57fe5b60200260200101516001600160a01b03166370a08231306040518263ffffffff1660e01b815260040180826001600160a01b0316815260200191505060206040518083038186803b158015610d9f57600080fd5b505afa158015610db3573d6000803e3d6000fd5b505050506040513d6020811015610dc957600080fd5b505190508015610e0457610e048482858581518110610de457fe5b60200260200101516001600160a01b031661124b9092919063ffffffff16565b50600101610d34565b505050565b60006060806060806000806000610e5e8a8a8080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061129d92505050565b9250925092506000610e6f846112d1565b90506001600160a01b038116610eb65760405162461bcd60e51b81526004018080602001828103825260288152602001806117e26028913960400191505060405180910390fd5b60408051600180825281830190925290602080830190803683370190505097508088600081518110610ee457fe5b6001600160a01b03929092166020928302919091018201526040805160018082528183019092529182810190803683370190505096508287600081518110610f2857fe5b6020908102919091010152604080516001808252818301909252908160200160208202803683370190505095508386600081518110610f6357fe5b6001600160a01b03929092166020928302919091018201526040805160018082528183019092529182810190803683370190505094508185600081518110610fa757fe5b60200260200101818152505060029850505050509295509295909350565b600060608060608060008060006110118a8a8080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061111792505050565b509250925092506000611023846112d1565b90506001600160a01b03811661106a5760405162461bcd60e51b815260040180806020018281038252602a815260200180611739602a913960400191505060405180910390fd5b6040805160018082528183019092529060208083019080368337019050509750838860008151811061109857fe5b6001600160a01b039290921660209283029190910182015260408051600180825281830190925291828101908036833701905050965082876000815181106110dc57fe5b6020908102919091010152604080516001808252818301909252908160200160208202803683370190505095508086600081518110610f6357fe5b60008060008084806020019051608081101561113257600080fd5b5080516020820151604083015160609093015191989097509195509350915050565b826001600160a01b031663e63697c88386846040518463ffffffff1660e01b815260040180848152602001836001600160a01b031681526020018281526020019350505050602060405180830381600087803b158015610cff57600080fd5b60408051636eb1769f60e11b81523060048201526001600160a01b0384811660248301529151839286169163dd62ed3e916044808301926020929190829003018186803b15801561120357600080fd5b505afa158015611217573d6000803e3d6000fd5b505050506040513d602081101561122d57600080fd5b50511015610e0d57610e0d6001600160a01b03841683600019611359565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663a9059cbb60e01b179052610e0d908490611468565b60008060008380602001905160608110156112b757600080fd5b508051602082015160409092015190969195509350915050565b60006112db610a8d565b6001600160a01b03166366adb867836040518263ffffffff1660e01b815260040180826001600160a01b0316815260200191505060206040518083038186803b15801561132757600080fd5b505afa15801561133b573d6000803e3d6000fd5b505050506040513d602081101561135157600080fd5b505192915050565b8015806113df575060408051636eb1769f60e11b81523060048201526001600160a01b03848116602483015291519185169163dd62ed3e91604480820192602092909190829003018186803b1580156113b157600080fd5b505afa1580156113c5573d6000803e3d6000fd5b505050506040513d60208110156113db57600080fd5b5051155b61141a5760405162461bcd60e51b81526004018080602001828103825260368152602001806118346036913960400191505060405180910390fd5b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663095ea7b360e01b179052610e0d9084905b60606114bd826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166115199092919063ffffffff16565b805190915015610e0d578080602001905160208110156114dc57600080fd5b5051610e0d5760405162461bcd60e51b815260040180806020018281038252602a81526020018061180a602a913960400191505060405180910390fd5b60606115288484600085611532565b90505b9392505050565b6060824710156115735760405162461bcd60e51b815260040180806020018281038252602681526020018061178a6026913960400191505060405180910390fd5b61157c8561168e565b6115cd576040805162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015290519081900360640190fd5b60006060866001600160a01b031685876040518082805190602001908083835b6020831061160c5780518252601f1990920191602091820191016115ed565b6001836020036101000a03801982511681845116808217855250505050505090500191505060006040518083038185875af1925050503d806000811461166e576040519150601f19603f3d011682016040523d82523d6000602084013e611673565b606091505b5091509150611683828286611694565b979650505050505050565b3b151590565b606083156116a357508161152b565b8251156116b35782518084602001fd5b8160405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b838110156116fd5781810151838201526020016116e5565b50505050905090810190601f16801561172a5780820380516001836020036101000a031916815260200191505b509250505060405180910390fdfe5f5f7061727365417373657473466f7252656465656d3a20556e737570706f7274656420795661756c747061727365417373657473466f724d6574686f643a205f73656c6563746f7220696e76616c6964416464726573733a20696e73756666696369656e742062616c616e636520666f722063616c6c4f6e6c792074686520496e746567726174696f6e4d616e616765722063616e2063616c6c20746869732066756e6374696f6e5f5f7061727365417373657473466f724c656e643a20556e737570706f7274656420795661756c745361666545524332303a204552433230206f7065726174696f6e20646964206e6f7420737563636565645361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f20746f206e6f6e2d7a65726f20616c6c6f77616e6365a26469706673582212204eb60766624a4b27543f1324299a7a30af6b999337961bab4bb49bf0cceefd9264736f6c634300060c0033';

type YearnVaultV2AdapterConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: YearnVaultV2AdapterConstructorParams,
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class YearnVaultV2Adapter__factory extends ContractFactory {
  constructor(...args: YearnVaultV2AdapterConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _integrationManager: PromiseOrValue<string>,
    _yearnVaultV2PriceFeed: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<YearnVaultV2Adapter> {
    return super.deploy(
      _integrationManager,
      _yearnVaultV2PriceFeed,
      overrides || {},
    ) as Promise<YearnVaultV2Adapter>;
  }
  override getDeployTransaction(
    _integrationManager: PromiseOrValue<string>,
    _yearnVaultV2PriceFeed: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): TransactionRequest {
    return super.getDeployTransaction(
      _integrationManager,
      _yearnVaultV2PriceFeed,
      overrides || {},
    );
  }
  override attach(address: string): YearnVaultV2Adapter {
    return super.attach(address) as YearnVaultV2Adapter;
  }
  override connect(signer: Signer): YearnVaultV2Adapter__factory {
    return super.connect(signer) as YearnVaultV2Adapter__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): YearnVaultV2AdapterInterface {
    return new utils.Interface(_abi) as YearnVaultV2AdapterInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider,
  ): YearnVaultV2Adapter {
    return new Contract(address, _abi, signerOrProvider) as YearnVaultV2Adapter;
  }
}
