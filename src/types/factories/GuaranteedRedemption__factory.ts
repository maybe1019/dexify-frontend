/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BigNumberish,
  Overrides,
} from 'ethers';
import type { Provider, TransactionRequest } from '@ethersproject/providers';
import type { PromiseOrValue } from '../common';
import type {
  GuaranteedRedemption,
  GuaranteedRedemptionInterface,
} from '../GuaranteedRedemption';

const _abi = [
  {
    inputs: [
      {
        internalType: 'address',
        name: '_policyManager',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_fundDeployer',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_redemptionWindowBuffer',
        type: 'uint256',
      },
      {
        internalType: 'address[]',
        name: '_redemptionBlockingAdapters',
        type: 'address[]',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'adapter',
        type: 'address',
      },
    ],
    name: 'AdapterAdded',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'adapter',
        type: 'address',
      },
    ],
    name: 'AdapterRemoved',
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
        internalType: 'uint256',
        name: 'startTimestamp',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'duration',
        type: 'uint256',
      },
    ],
    name: 'FundSettingsSet',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'prevBuffer',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'nextBuffer',
        type: 'uint256',
      },
    ],
    name: 'RedemptionWindowBufferSet',
    type: 'event',
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
        name: '_adapter',
        type: 'address',
      },
    ],
    name: 'adapterCanBlockRedemption',
    outputs: [
      {
        internalType: 'bool',
        name: 'canBlockRedemption_',
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
        internalType: 'address[]',
        name: '_adapters',
        type: 'address[]',
      },
    ],
    name: 'addRedemptionBlockingAdapters',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_startTimestamp',
        type: 'uint256',
      },
    ],
    name: 'calcLatestRedemptionWindowStart',
    outputs: [
      {
        internalType: 'uint256',
        name: 'latestRedemptionWindowStart_',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
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
    name: 'getRedemptionWindowBuffer',
    outputs: [
      {
        internalType: 'uint256',
        name: 'redemptionWindowBuffer_',
        type: 'uint256',
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
    ],
    name: 'getRedemptionWindowForFund',
    outputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'startTimestamp',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'duration',
            type: 'uint256',
          },
        ],
        internalType: 'struct GuaranteedRedemption.RedemptionWindow',
        name: 'redemptionWindow_',
        type: 'tuple',
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
        name: '_adapter',
        type: 'address',
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
        internalType: 'address[]',
        name: '_adapters',
        type: 'address[]',
      },
    ],
    name: 'removeRedemptionBlockingAdapters',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_nextRedemptionWindowBuffer',
        type: 'uint256',
      },
    ],
    name: 'setRedemptionWindowBuffer',
    outputs: [],
    stateMutability: 'nonpayable',
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
  '0x60c06040523480156200001157600080fd5b5060405162001b1b38038062001b1b83398101604081905262000034916200027f565b6001600160601b0319606085811b821660805284901b1660a05260028290556200005e8162000068565b5050505062000471565b60005b8151811015620001b45760006001600160a01b03168282815181106200008d57fe5b60200260200101516001600160a01b03161415620000c85760405162461bcd60e51b8152600401620000bf90620003c2565b60405180910390fd5b620000ed828281518110620000d957fe5b6020026020010151620001b860201b60201c565b156200010d5760405162461bcd60e51b8152600401620000bf90620003d4565b60016000808484815181106200011f57fe5b60200260200101516001600160a01b03166001600160a01b0316815260200190815260200160002060006101000a81548160ff0219169083151502179055507fcf9c2c7f9adbb156bd76affb04df84595f8f5e69cab2e61221b05b05a902fa268282815181106200018c57fe5b6020026020010151604051620001a39190620003b2565b60405180910390a16001016200006b565b5050565b6001600160a01b031660009081526020819052604090205460ff1690565b8051620001e3816200044c565b92915050565b600082601f830112620001fb57600080fd5b8151620002126200020c826200040d565b620003e6565b915081818352602084019350602081019050838560208402820111156200023857600080fd5b60005b83811015620002685781620002518882620001d6565b84525060209283019291909101906001016200023b565b5050505092915050565b8051620001e38162000466565b600080600080608085870312156200029657600080fd5b6000620002a48787620001d6565b9450506020620002b787828801620001d6565b9350506040620002ca8782880162000272565b92505060608501516001600160401b03811115620002e757600080fd5b620002f587828801620001e9565b91505092959194509250565b6200030c8162000437565b82525050565b6000620003216038836200042e565b60008051602062001afb83398151915281527f20616461707465722063616e6e6f7420626520656d7074790000000000000000602082015260400192915050565b6000620003716036836200042e565b60008051602062001afb83398151915281527f206164617074657220616c726561647920616464656400000000000000000000602082015260400192915050565b60208101620001e3828462000301565b60208082528101620001e38162000312565b60208082528101620001e38162000362565b6040518181016001600160401b03811182821017156200040557600080fd5b604052919050565b60006001600160401b038211156200042457600080fd5b5060209081020190565b90815260200190565b60006001600160a01b038216620001e3565b90565b620004578162000437565b81146200046357600080fd5b50565b620004578162000449565b60805160601c60a05160601c611656620004a560003980610482528061057152508061027552806107f752506116566000f3fe608060405234801561001057600080fd5b506004361061010b5760003560e01c80638945f190116100a2578063b67cb40c11610071578063b67cb40c14610214578063cbf54bb214610227578063d44ad6cb1461023c578063e0b9ae4014610244578063ef877c0f146102575761010b565b80638945f190146101d35780638e05b36a146101e657806397c0ac87146101f95780639c2f61d6146102015761010b565b806371030453116100de578063710304531461017657806374dc6b4b146101895780637998a1c4146101a9578063893d20e8146101be5761010b565b80630f5f6b4f146101105780632057e3b6146101255780633146d058146101435780635b8f1c5a14610156575b600080fd5b61012361011e366004610d83565b61026a565b005b61012d61038e565b60405161013a919061152d565b60405180910390f35b610123610151366004610c6d565b610394565b610169610164366004610d05565b610398565b60405161013a9190611420565b610169610184366004610bf7565b6103f2565b61019c610197366004610bf7565b610414565b60405161013a919061151f565b6101b161044f565b60405161013a919061142e565b6101c661047e565b60405161013a9190611401565b6101236101e1366004610c9d565b610516565b61012d6101f4366004610e1b565b61052e565b6101c661056f565b61012361020f366004610dd9565b610593565b610169610222366004610c6d565b6106e0565b61022f61079e565b60405161013a919061140f565b6101c66107f5565b610123610252366004610e1b565b610819565b610123610265366004610dd9565b6108b7565b336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146102bb5760405162461bcd60e51b81526004016102b2906114af565b60405180910390fd5b6000806102ca83850185610e39565b9150915081600014156102fc5780156102f55760405162461bcd60e51b81526004016102b29061147f565b5050610389565b60008111801561030f5750620143708111155b61032b5760405162461bcd60e51b81526004016102b29061150f565b6001600160a01b03851660008181526001602081905260409182902085815501839055517fed112d6c0e84b6900209ce5a4c04541bc63a517e0160888c447ee70be47ce60f9061037e908590859061153b565b60405180910390a250505b505050565b60025490565b5050565b6000806103da84848080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061094892505050565b5090506103e787826106e0565b979650505050505050565b6001600160a01b03811660009081526020819052604090205460ff165b919050565b61041c610b1b565b506001600160a01b0316600090815260016020818152604092839020835180850190945280548452909101549082015290565b60408051808201909152601581527423aaa0a920a72a22a2a22fa922a222a6a82a24a7a760591b602082015290565b60007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663893d20e86040518163ffffffff1660e01b815260040160206040518083038186803b1580156104d957600080fd5b505afa1580156104ed573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105119190610c15565b905090565b60405162461bcd60e51b81526004016102b29061146f565b600081421161053e57508061040f565b600061054a4284610968565b9050600061055b8262015180610990565b90506105674282610968565b949350505050565b7f000000000000000000000000000000000000000000000000000000000000000090565b61059b61047e565b6001600160a01b0316336001600160a01b0316146105cb5760405162461bcd60e51b81526004016102b29061144f565b806105e85760405162461bcd60e51b81526004016102b2906114ef565b60005b818110156103895761061783838381811061060257fe5b90506020020160208101906101849190610bf7565b6106335760405162461bcd60e51b81526004016102b2906114cf565b600080600085858581811061064457fe5b90506020020160208101906106599190610bf7565b6001600160a01b031681526020810191909152604001600020805460ff19169115159190911790557fdf980d21d8c7bb34800e668dbe003299093bac8e693614151d3c57f73f98a93d8383838181106106ae57fe5b90506020020160208101906106c39190610bf7565b6040516106d09190611401565b60405180910390a16001016105eb565b60006106eb826103f2565b6106f757506001610798565b6106ff610b1b565b506001600160a01b038316600090815260016020818152604092839020835180850190945280548085529201549083015261073e576000915050610798565b600061074d826000015161052e565b90506107668260200151826109c290919063ffffffff16565b42101580610781575060025461077d908290610968565b4211155b1561079157600192505050610798565b6000925050505b92915050565b604080516001808252818301909252606091602080830190803683370190505090506004816000815181106107cf57fe5b602002602001019060058111156107e257fe5b908160058111156107ef57fe5b90525090565b7f000000000000000000000000000000000000000000000000000000000000000090565b61082161047e565b6001600160a01b0316336001600160a01b0316146108515760405162461bcd60e51b81526004016102b29061144f565b600254818114156108745760405162461bcd60e51b81526004016102b2906114ff565b60028290556040517f72325148df4fbe9f28de10305dd97d6bf5531327e3db352c17dd75f123a90751906108ab908390859061153b565b60405180910390a15050565b6108bf61047e565b6001600160a01b0316336001600160a01b0316146108ef5760405162461bcd60e51b81526004016102b29061144f565b8061090c5760405162461bcd60e51b81526004016102b2906114bf565b6103948282808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152506109ee92505050565b6000808280602001905181019061095f9190610c33565b91509150915091565b60008282111561098a5760405162461bcd60e51b81526004016102b29061148f565b50900390565b60008082116109b15760405162461bcd60e51b81526004016102b29061149f565b8183816109ba57fe5b069392505050565b6000828201838110156109e75760405162461bcd60e51b81526004016102b29061145f565b9392505050565b60005b81518110156103945760006001600160a01b0316828281518110610a1157fe5b60200260200101516001600160a01b03161415610a405760405162461bcd60e51b81526004016102b29061143f565b610a5c828281518110610a4f57fe5b60200260200101516103f2565b15610a795760405162461bcd60e51b81526004016102b2906114df565b6001600080848481518110610a8a57fe5b60200260200101516001600160a01b03166001600160a01b0316815260200190815260200160002060006101000a81548160ff0219169083151502179055507fcf9c2c7f9adbb156bd76affb04df84595f8f5e69cab2e61221b05b05a902fa26828281518110610af657fe5b6020026020010151604051610b0b9190611401565b60405180910390a16001016109f1565b604051806040016040528060008152602001600081525090565b8035610798816115ed565b8051610798816115ed565b60008083601f840112610b5d57600080fd5b50813567ffffffffffffffff811115610b7557600080fd5b602083019150836020820283011115610b8d57600080fd5b9250929050565b805161079881611601565b60008083601f840112610bb157600080fd5b50813567ffffffffffffffff811115610bc957600080fd5b602083019150836001820283011115610b8d57600080fd5b80356107988161160a565b803561079881611617565b600060208284031215610c0957600080fd5b60006105678484610b35565b600060208284031215610c2757600080fd5b60006105678484610b40565b60008060408385031215610c4657600080fd5b6000610c528585610b40565b9250506020610c6385828601610b94565b9150509250929050565b60008060408385031215610c8057600080fd5b6000610c8c8585610b35565b9250506020610c6385828601610b35565b60008060008060608587031215610cb357600080fd5b6000610cbf8787610b35565b9450506020610cd087828801610b35565b935050604085013567ffffffffffffffff811115610ced57600080fd5b610cf987828801610b9f565b95989497509550505050565b600080600080600060808688031215610d1d57600080fd5b6000610d298888610b35565b9550506020610d3a88828901610b35565b9450506040610d4b88828901610be1565b935050606086013567ffffffffffffffff811115610d6857600080fd5b610d7488828901610b9f565b92509250509295509295909350565b600080600060408486031215610d9857600080fd5b6000610da48686610b35565b935050602084013567ffffffffffffffff811115610dc157600080fd5b610dcd86828701610b9f565b92509250509250925092565b60008060208385031215610dec57600080fd5b823567ffffffffffffffff811115610e0357600080fd5b610e0f85828601610b4b565b92509250509250929050565b600060208284031215610e2d57600080fd5b60006105678484610bec565b60008060408385031215610e4c57600080fd5b6000610e588585610bec565b9250506020610c6385828601610bec565b6000610e758383610eee565b505060200190565b610e8681611569565b82525050565b6000610e978261155c565b610ea18185611560565b9350610eac83611556565b8060005b83811015610eda578151610ec48882610e69565b9750610ecf83611556565b925050600101610eb0565b509495945050505050565b610e8681611574565b610e868161159f565b6000610f028261155c565b610f0c8185611560565b9350610f1c8185602086016115aa565b610f25816115d6565b9093019392505050565b6000610f3c603883611560565b7f5f5f616464526564656d7074696f6e426c6f636b696e6741646170746572733a81527f20616461707465722063616e6e6f7420626520656d7074790000000000000000602082015260400192915050565b6000610f9b604983611560565b7f6f6e6c7946756e644465706c6f7965724f776e65723a204f6e6c79207468652081527f46756e644465706c6f796572206f776e65722063616e2063616c6c207468697360208201526810333ab731ba34b7b760b91b604082015260600192915050565b600061100c601b83611560565b7f536166654d6174683a206164646974696f6e206f766572666c6f770000000000815260200192915050565b6000611045603783611560565b7f75706461746546756e6453657474696e67733a2055706461746573206e6f742081527f616c6c6f77656420666f72207468697320706f6c696379000000000000000000602082015260400192915050565b60006110a4603a83611560565b7f61646446756e6453657474696e67733a206475726174696f6e206d757374206281527f65203020696620737461727454696d657374616d702069732030000000000000602082015260400192915050565b6000611103601e83611560565b7f536166654d6174683a207375627472616374696f6e206f766572666c6f770000815260200192915050565b600061113c601883611560565b7f536166654d6174683a206d6f64756c6f206279207a65726f0000000000000000815260200192915050565b6000611175602983611560565b7f4f6e6c792074686520506f6c6963794d616e616765722063616e206d616b65208152681d1a1a5cc818d85b1b60ba1b602082015260400192915050565b60006111c0603a83611560565b7f5f5f616464526564656d7074696f6e426c6f636b696e6741646170746572733a81527f205f61646170746572732063616e6e6f7420626520656d707479000000000000602082015260400192915050565b600061121f603683611560565b7f72656d6f7665526564656d7074696f6e426c6f636b696e6741646170746572738152750e881859185c1d195c881a5cc81b9bdd08185919195960521b602082015260400192915050565b6000611277603683611560565b7f5f5f616464526564656d7074696f6e426c6f636b696e6741646170746572733a815275081859185c1d195c88185b1c9958591e48185919195960521b602082015260400192915050565b60006112cf603b83611560565b7f72656d6f7665526564656d7074696f6e426c6f636b696e67416461707465727381527f3a205f61646170746572732063616e6e6f7420626520656d7074790000000000602082015260400192915050565b600061132e602c83611560565b7f736574526564656d7074696f6e57696e646f774275666665723a2056616c756581526b08185b1c9958591e481cd95d60a21b602082015260400192915050565b600061137c603f83611560565b7f61646446756e6453657474696e67733a206475726174696f6e206d757374206281527f65206265747765656e2031207365636f6e6420616e6420323320686f75727300602082015260400192915050565b805160408301906113df84826113f8565b5060208201516113f260208501826113f8565b50505050565b610e868161159c565b602081016107988284610e7d565b602080825281016109e78184610e8c565b602081016107988284610ee5565b602080825281016109e78184610ef7565b6020808252810161079881610f2f565b6020808252810161079881610f8e565b6020808252810161079881610fff565b6020808252810161079881611038565b6020808252810161079881611097565b60208082528101610798816110f6565b602080825281016107988161112f565b6020808252810161079881611168565b60208082528101610798816111b3565b6020808252810161079881611212565b602080825281016107988161126a565b60208082528101610798816112c2565b6020808252810161079881611321565b602080825281016107988161136f565b6040810161079882846113ce565b6020810161079882846113f8565b6040810161154982856113f8565b6109e760208301846113f8565b60200190565b5190565b90815260200190565b600061079882611590565b151590565b6001600160e01b03191690565b8061040f816115e0565b6001600160a01b031690565b90565b600061079882611586565b60005b838110156115c55781810151838201526020016115ad565b838111156113f25750506000910152565b601f01601f191690565b600681106115ea57fe5b50565b6115f681611569565b81146115ea57600080fd5b6115f681611579565b600681106115ea57600080fd5b6115f68161159c56fea26469706673582212200e421e287e0a0b452b677925e1607295679c7a2b0916878c8716102d526b1da964736f6c634300060c00335f5f616464526564656d7074696f6e426c6f636b696e6741646170746572733a';

type GuaranteedRedemptionConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: GuaranteedRedemptionConstructorParams,
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class GuaranteedRedemption__factory extends ContractFactory {
  constructor(...args: GuaranteedRedemptionConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _policyManager: PromiseOrValue<string>,
    _fundDeployer: PromiseOrValue<string>,
    _redemptionWindowBuffer: PromiseOrValue<BigNumberish>,
    _redemptionBlockingAdapters: PromiseOrValue<string>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<GuaranteedRedemption> {
    return super.deploy(
      _policyManager,
      _fundDeployer,
      _redemptionWindowBuffer,
      _redemptionBlockingAdapters,
      overrides || {},
    ) as Promise<GuaranteedRedemption>;
  }
  override getDeployTransaction(
    _policyManager: PromiseOrValue<string>,
    _fundDeployer: PromiseOrValue<string>,
    _redemptionWindowBuffer: PromiseOrValue<BigNumberish>,
    _redemptionBlockingAdapters: PromiseOrValue<string>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): TransactionRequest {
    return super.getDeployTransaction(
      _policyManager,
      _fundDeployer,
      _redemptionWindowBuffer,
      _redemptionBlockingAdapters,
      overrides || {},
    );
  }
  override attach(address: string): GuaranteedRedemption {
    return super.attach(address) as GuaranteedRedemption;
  }
  override connect(signer: Signer): GuaranteedRedemption__factory {
    return super.connect(signer) as GuaranteedRedemption__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): GuaranteedRedemptionInterface {
    return new utils.Interface(_abi) as GuaranteedRedemptionInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider,
  ): GuaranteedRedemption {
    return new Contract(
      address,
      _abi,
      signerOrProvider,
    ) as GuaranteedRedemption;
  }
}
