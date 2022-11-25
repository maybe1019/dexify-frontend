/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers';
import type { Provider, TransactionRequest } from '@ethersproject/providers';
import type { PromiseOrValue } from '../common';
import type {
  AssetWhitelist,
  AssetWhitelistInterface,
} from '../AssetWhitelist';

const _abi = [
  {
    inputs: [
      {
        internalType: 'address',
        name: '_policyManager',
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
        name: 'comptrollerProxy',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address[]',
        name: 'items',
        type: 'address[]',
      },
    ],
    name: 'AddressesAdded',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'comptrollerProxy',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address[]',
        name: 'items',
        type: 'address[]',
      },
    ],
    name: 'AddressesRemoved',
    type: 'event',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_comptrollerProxy',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_vaultProxy',
        type: 'address',
      },
    ],
    name: 'activateForFund',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_comptrollerProxy',
        type: 'address',
      },
      {
        internalType: 'bytes',
        name: '_encodedSettings',
        type: 'bytes',
      },
    ],
    name: 'addFundSettings',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_comptrollerProxy',
        type: 'address',
      },
    ],
    name: 'getList',
    outputs: [
      {
        internalType: 'address[]',
        name: 'list_',
        type: 'address[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getPolicyManager',
    outputs: [
      {
        internalType: 'address',
        name: 'policyManager_',
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
    inputs: [],
    name: 'implementedHooks',
    outputs: [
      {
        internalType: 'enum IPolicyManager.PolicyHook[]',
        name: 'implementedHooks_',
        type: 'uint8[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_comptrollerProxy',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_item',
        type: 'address',
      },
    ],
    name: 'isInList',
    outputs: [
      {
        internalType: 'bool',
        name: 'isInList_',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_comptrollerProxy',
        type: 'address',
      },
      {
        internalType: 'address[]',
        name: '_assets',
        type: 'address[]',
      },
    ],
    name: 'passesRule',
    outputs: [
      {
        internalType: 'bool',
        name: 'isValid_',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
      {
        internalType: 'bytes',
        name: '',
        type: 'bytes',
      },
    ],
    name: 'updateFundSettings',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_comptrollerProxy',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
      {
        internalType: 'enum IPolicyManager.PolicyHook',
        name: '',
        type: 'uint8',
      },
      {
        internalType: 'bytes',
        name: '_encodedArgs',
        type: 'bytes',
      },
    ],
    name: 'validateRule',
    outputs: [
      {
        internalType: 'bool',
        name: 'isValid_',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
];

const _bytecode =
  '0x60a060405234801561001057600080fd5b506040516111e33803806111e38339818101604052602081101561003357600080fd5b5051606081901b6001600160601b0319166080526001600160a01b03166111726100716000398061048652806106dc5280610a0d52506111726000f3fe608060405234801561001057600080fd5b506004361061009e5760003560e01c80638945f190116100665780638945f190146102a1578063c18a633814610328578063cbf54bb2146103d9578063d44ad6cb14610431578063ef00e37a146104555761009e565b80630f5f6b4f146100a35780633146d0581461012357806335595704146101515780635b8f1c5a146101935780637998a1c414610224575b600080fd5b610121600480360360408110156100b957600080fd5b6001600160a01b038235169190810190604081016020820135600160201b8111156100e357600080fd5b8201836020820111156100f557600080fd5b803590602001918460018302840111600160201b8311171561011657600080fd5b50909250905061047b565b005b6101216004803603604081101561013957600080fd5b506001600160a01b03813581169160200135166106d1565b61017f6004803603604081101561016757600080fd5b506001600160a01b0381358116916020013516610880565b604080519115158252519081900360200190f35b61017f600480360360808110156101a957600080fd5b6001600160a01b03823581169260208101359091169160ff6040830135169190810190608081016060820135600160201b8111156101e657600080fd5b8201836020820111156101f857600080fd5b803590602001918460018302840111600160201b8311171561021957600080fd5b5090925090506108ab565b61022c61090a565b6040805160208082528351818301528351919283929083019185019080838360005b8381101561026657818101518382015260200161024e565b50505050905090810190601f1680156102935780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b610121600480360360608110156102b757600080fd5b6001600160a01b038235811692602081013590911691810190606081016040820135600160201b8111156102ea57600080fd5b8201836020820111156102fc57600080fd5b803590602001918460018302840111600160201b8311171561031d57600080fd5b509092509050610933565b61017f6004803603604081101561033e57600080fd5b6001600160a01b038235169190810190604081016020820135600160201b81111561036857600080fd5b82018360208201111561037a57600080fd5b803590602001918460208302840111600160201b8311171561039b57600080fd5b91908080602002602001604051908101604052809392919081815260200183836020028082843760009201919091525092955061096a945050505050565b6103e16109b4565b60408051602080825283518183015283519192839290830191858101910280838360005b8381101561041d578181015183820152602001610405565b505050509050019250505060405180910390f35b610439610a0b565b604080516001600160a01b039092168252519081900360200190f35b6103e16004803603602081101561046b57600080fd5b50356001600160a01b0316610a2f565b336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146104e25760405162461bcd60e51b81526004018080602001828103825260298152602001806110926029913960400191505060405180910390fd5b6060828260208110156104f457600080fd5b810190602081018135600160201b81111561050e57600080fd5b82018360208201111561052057600080fd5b803590602001918460208302840111600160201b8311171561054157600080fd5b9190808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152505060408051637134e1eb60e11b815290519397506105f196506001600160a01b038b16955063e269c3d6945060048082019460209450925090829003018186803b1580156105be57600080fd5b505afa1580156105d2573d6000803e3d6000fd5b505050506040513d60208110156105e857600080fd5b50518290610af6565b61062c5760405162461bcd60e51b81526004018080602001828103825260318152602001806110ea6031913960400191505060405180910390fd5b6106cb848484602081101561064057600080fd5b810190602081018135600160201b81111561065a57600080fd5b82018360208201111561066c57600080fd5b803590602001918460208302840111600160201b8311171561068d57600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600092019190915250929550610b4c945050505050565b50505050565b336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146107385760405162461bcd60e51b81526004018080602001828103825260298152602001806110926029913960400191505060405180910390fd5b61084182826001600160a01b031663c4b973706040518163ffffffff1660e01b815260040160006040518083038186803b15801561077557600080fd5b505afa158015610789573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405260208110156107b257600080fd5b8101908080516040519392919084600160201b8211156107d157600080fd5b9083019060208201858111156107e657600080fd5b82518660208202830111600160201b8211171561080257600080fd5b82525081516020918201928201910280838360005b8381101561082f578181015183820152602001610817565b5050505090500160405250505061096a565b61087c5760405162461bcd60e51b815260040180806020018281038252602f8152602001806110bb602f913960400191505060405180910390fd5b5050565b6001600160a01b03821660009081526020819052604081206108a29083610ca8565b90505b92915050565b600060606108ee84848080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250610cbd92505050565b505050925050506108ff878261096a565b979650505050505050565b60408051808201909152600f81526e1054d4d15517d5d2125511531254d5608a1b602082015290565b60405162461bcd60e51b81526004018080602001828103825260378152602001806110306037913960400191505060405180910390fd5b6000805b82518110156109aa576109948484838151811061098757fe5b6020026020010151610880565b6109a25760009150506108a5565b60010161096e565b5060019392505050565b604080516001808252818301909252606091602080830190803683370190505090506005816000815181106109e557fe5b602002602001019060058111156109f857fe5b90816005811115610a0557fe5b90525090565b7f000000000000000000000000000000000000000000000000000000000000000090565b6001600160a01b0381166000908152602081905260409020606090610a5390610f17565b67ffffffffffffffff81118015610a6957600080fd5b50604051908082528060200260200182016040528015610a93578160200160208202803683370190505b50905060005b8151811015610af0576001600160a01b0383166000908152602081905260409020610ac49082610f22565b828281518110610ad057fe5b6001600160a01b0390921660209283029190910190910152600101610a99565b50919050565b6000805b8351811015610b4257838181518110610b0f57fe5b60200260200101516001600160a01b0316836001600160a01b03161415610b3a5760019150506108a5565b600101610afa565b5060009392505050565b6000815111610b8c5760405162461bcd60e51b815260040180806020018281038252602281526020018061111b6022913960400191505060405180910390fd5b60005b8151811015610c2457610be1828281518110610ba757fe5b6020026020010151600080866001600160a01b03166001600160a01b03168152602001908152602001600020610f2e90919063ffffffff16565b610c1c5760405162461bcd60e51b815260040180806020018281038252602b815260200180611067602b913960400191505060405180910390fd5b600101610b8f565b50816001600160a01b03167fe3754690adb33d1fe0511f97e82086f6097babaea494124a0196a61a949ef2cf826040518080602001828103825283818151815260200191508051906020019060200280838360005b83811015610c91578181015183820152602001610c79565b505050509050019250505060405180910390a25050565b60006108a2836001600160a01b038416610f43565b6000806060806060808680602001905160c0811015610cdb57600080fd5b81516020830151604080850180519151939592948301929184600160201b821115610d0557600080fd5b908301906020820185811115610d1a57600080fd5b82518660208202830111600160201b82111715610d3657600080fd5b82525081516020918201928201910280838360005b83811015610d63578181015183820152602001610d4b565b5050505090500160405260200180516040519392919084600160201b821115610d8b57600080fd5b908301906020820185811115610da057600080fd5b82518660208202830111600160201b82111715610dbc57600080fd5b82525081516020918201928201910280838360005b83811015610de9578181015183820152602001610dd1565b5050505090500160405260200180516040519392919084600160201b821115610e1157600080fd5b908301906020820185811115610e2657600080fd5b82518660208202830111600160201b82111715610e4257600080fd5b82525081516020918201928201910280838360005b83811015610e6f578181015183820152602001610e57565b5050505090500160405260200180516040519392919084600160201b821115610e9757600080fd5b908301906020820185811115610eac57600080fd5b82518660208202830111600160201b82111715610ec857600080fd5b82525081516020918201928201910280838360005b83811015610ef5578181015183820152602001610edd565b5050505090500160405250505095509550955095509550955091939550919395565b60006108a582610f5b565b60006108a28383610f5f565b60006108a2836001600160a01b038416610fc3565b60009081526001919091016020526040902054151590565b5490565b81546000908210610fa15760405162461bcd60e51b815260040180806020018281038252602281526020018061100e6022913960400191505060405180910390fd5b826000018281548110610fb057fe5b9060005260206000200154905092915050565b6000610fcf8383610f43565b611005575081546001818101845560008481526020808220909301849055845484825282860190935260409020919091556108a5565b5060006108a556fe456e756d657261626c655365743a20696e646578206f7574206f6620626f756e647375706461746546756e6453657474696e67733a2055706461746573206e6f7420616c6c6f77656420666f72207468697320706f6c6963795f5f616464546f4c6973743a204164647265737320616c72656164792065786973747320696e206c6973744f6e6c792074686520506f6c6963794d616e616765722063616e206d616b6520746869732063616c6c6163746976617465466f7246756e643a204e6f6e2d77686974656c697374656420617373657420646574656374656461646446756e6453657474696e67733a204d7573742077686974656c6973742064656e6f6d696e6174696f6e41737365745f5f616464546f4c6973743a204e6f206164647265737365732070726f7669646564a26469706673582212200047706d14c41f177bdc4d2f48fa1a530f7dce3065899c63aba77a44c2ec7be764736f6c634300060c0033';

type AssetWhitelistConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: AssetWhitelistConstructorParams,
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class AssetWhitelist__factory extends ContractFactory {
  constructor(...args: AssetWhitelistConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _policyManager: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<AssetWhitelist> {
    return super.deploy(
      _policyManager,
      overrides || {},
    ) as Promise<AssetWhitelist>;
  }
  override getDeployTransaction(
    _policyManager: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): TransactionRequest {
    return super.getDeployTransaction(_policyManager, overrides || {});
  }
  override attach(address: string): AssetWhitelist {
    return super.attach(address) as AssetWhitelist;
  }
  override connect(signer: Signer): AssetWhitelist__factory {
    return super.connect(signer) as AssetWhitelist__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): AssetWhitelistInterface {
    return new utils.Interface(_abi) as AssetWhitelistInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider,
  ): AssetWhitelist {
    return new Contract(address, _abi, signerOrProvider) as AssetWhitelist;
  }
}
