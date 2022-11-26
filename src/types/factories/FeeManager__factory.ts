/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers';
import type { Provider, TransactionRequest } from '@ethersproject/providers';
import type { PromiseOrValue } from '../common';
import type { FeeManager, FeeManagerInterface } from '../FeeManager';

const _abi = [
  {
    inputs: [
      {
        internalType: 'address',
        name: '_fundDeployer',
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
        internalType: 'address',
        name: 'payee',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'sharesDue',
        type: 'uint256',
      },
    ],
    name: 'AllSharesOutstandingForcePaidForFund',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'fee',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'string',
        name: 'identifier',
        type: 'string',
      },
    ],
    name: 'FeeDeregistered',
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
        indexed: true,
        internalType: 'address',
        name: 'fee',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'bytes',
        name: 'settingsData',
        type: 'bytes',
      },
    ],
    name: 'FeeEnabledForFund',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'fee',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'string',
        name: 'identifier',
        type: 'string',
      },
      {
        indexed: false,
        internalType: 'enum IFeeManager.FeeHook[]',
        name: 'implementedHooksForSettle',
        type: 'uint8[]',
      },
      {
        indexed: false,
        internalType: 'enum IFeeManager.FeeHook[]',
        name: 'implementedHooksForUpdate',
        type: 'uint8[]',
      },
      {
        indexed: false,
        internalType: 'bool',
        name: 'usesGavOnSettle',
        type: 'bool',
      },
      {
        indexed: false,
        internalType: 'bool',
        name: 'usesGavOnUpdate',
        type: 'bool',
      },
    ],
    name: 'FeeRegistered',
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
        indexed: true,
        internalType: 'address',
        name: 'fee',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'enum IFeeManager.SettlementType',
        name: 'settlementType',
        type: 'uint8',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'payer',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'payee',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'sharesDue',
        type: 'uint256',
      },
    ],
    name: 'FeeSettledForFund',
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
        internalType: 'address',
        name: 'prevFeesRecipient',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'nextFeesRecipient',
        type: 'address',
      },
    ],
    name: 'FeesRecipientSetForFund',
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
        indexed: true,
        internalType: 'address',
        name: 'fee',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'sharesDue',
        type: 'uint256',
      },
    ],
    name: 'SharesOutstandingPaidForFund',
    type: 'event',
  },
  {
    inputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    name: 'activateForFund',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'deactivateForFund',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address[]',
        name: '_fees',
        type: 'address[]',
      },
    ],
    name: 'deregisterFees',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_fee',
        type: 'address',
      },
      {
        internalType: 'enum IFeeManager.FeeHook',
        name: '_hook',
        type: 'uint8',
      },
    ],
    name: 'feeSettlesOnHook',
    outputs: [
      {
        internalType: 'bool',
        name: 'settlesOnHook_',
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
        name: '_fee',
        type: 'address',
      },
      {
        internalType: 'enum IFeeManager.FeeHook',
        name: '_hook',
        type: 'uint8',
      },
    ],
    name: 'feeUpdatesOnHook',
    outputs: [
      {
        internalType: 'bool',
        name: 'updatesOnHook_',
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
        name: '_fee',
        type: 'address',
      },
    ],
    name: 'feeUsesGavOnSettle',
    outputs: [
      {
        internalType: 'bool',
        name: 'usesGav_',
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
        name: '_fee',
        type: 'address',
      },
    ],
    name: 'feeUsesGavOnUpdate',
    outputs: [
      {
        internalType: 'bool',
        name: 'usesGav_',
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
    ],
    name: 'getEnabledFeesForFund',
    outputs: [
      {
        internalType: 'address[]',
        name: 'enabledFees_',
        type: 'address[]',
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
        name: '_fee',
        type: 'address',
      },
    ],
    name: 'getFeeSharesOutstandingForFund',
    outputs: [
      {
        internalType: 'uint256',
        name: 'sharesOutstanding_',
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
    name: 'getRegisteredFees',
    outputs: [
      {
        internalType: 'address[]',
        name: 'registeredFees_',
        type: 'address[]',
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
    name: 'getVaultProxyForFund',
    outputs: [
      {
        internalType: 'address',
        name: 'vaultProxy_',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'enum IFeeManager.FeeHook',
        name: '_hook',
        type: 'uint8',
      },
      {
        internalType: 'bytes',
        name: '_settlementData',
        type: 'bytes',
      },
      {
        internalType: 'uint256',
        name: '_gav',
        type: 'uint256',
      },
    ],
    name: 'invokeHook',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_fee',
        type: 'address',
      },
    ],
    name: 'isRegisteredFee',
    outputs: [
      {
        internalType: 'bool',
        name: 'isRegisteredFee_',
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
        internalType: 'uint256',
        name: '_actionId',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: '_callArgs',
        type: 'bytes',
      },
    ],
    name: 'receiveCallFromComptroller',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address[]',
        name: '_fees',
        type: 'address[]',
      },
    ],
    name: 'registerFees',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes',
        name: '_configData',
        type: 'bytes',
      },
    ],
    name: 'setConfigForFund',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
];

const _bytecode =
  '0x60a06040523480156200001157600080fd5b50604051620033ad380380620033ad83398101604081905262000034916200005d565b60601b6001600160601b031916608052620000b2565b8051620000578162000098565b92915050565b6000602082840312156200007057600080fd5b60006200007e84846200004a565b949350505050565b60006001600160a01b03821662000057565b620000a38162000086565b8114620000af57600080fd5b50565b60805160601c6132d8620000d560003980610a205280610cb552506132d86000f3fe608060405234801561001057600080fd5b50600436106101165760003560e01c8063893d20e8116100a2578063a9f3b42f11610071578063a9f3b42f14610223578063aa051c2c14610236578063bd8e959a14610256578063e2a1b3981461025e578063ec7c39e91461027157610116565b8063893d20e8146101ed57806389cbe1d0146101f557806397c0ac871461020857806399c735831461021057610116565b80633c470297116100e95780633c47029714610181578063467903461461019457806353acffa0146101b45780637759c164146101c757806380d57063146101da57610116565b806306bbda641461011b5780631bee801e1461013957806324da4f191461014e5780633a687cf414610161575b600080fd5b610123610284565b6040516101309190612f84565b60405180910390f35b61014c61014736600461249b565b610319565b005b61014c61015c366004612502565b6103b2565b61017461016f3660046123ed565b610829565b6040516101309190612fdf565b61017461018f3660046123ed565b61084b565b6101a76101a23660046123ed565b610869565b6040516101309190612ea1565b6101746101c236600461246b565b610887565b61014c6101d53660046126d3565b6108d4565b61014c6101e8366004612662565b61091a565b6101a7610a1c565b61014c61020336600461269e565b610ab4565b6101a7610cb3565b61017461021e3660046123ed565b610cd7565b6101236102313660046123ed565b610ce4565b610249610244366004612431565b610d5a565b604051610130919061312c565b61014c610d85565b61014c61026c366004612502565b610db7565b61017461027f36600461246b565b610f77565b60606102906001610f9f565b6001600160401b03811180156102a557600080fd5b506040519080825280602002602001820160405280156102cf578160200160208202803683370190505b50905060005b8151811015610315576102e9600182610faa565b8282815181106102f557fe5b6001600160a01b03909216602092830291909101909101526001016102d5565b5090565b826103425761033d3360006040518060200160405280600081525060006001610fbd565b6103ac565b826001141561038b5761033d3383838080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152506110a192505050565b60405162461bcd60e51b81526004016103a39061306c565b60405180910390fd5b50505050565b6103ba610a1c565b6001600160a01b0316336001600160a01b0316146103ea5760405162461bcd60e51b81526004016103a39061303c565b806104075760405162461bcd60e51b81526004016103a39061310c565b60005b818110156108245761043683838381811061042157fe5b905060200201602081019061021e91906123ed565b156104535760405162461bcd60e51b81526004016103a3906130dc565b61047f83838381811061046257fe5b905060200201602081019061047791906123ed565b600190611329565b50600083838381811061048e57fe5b90506020020160208101906104a391906123ed565b9050606080600080846001600160a01b031663cbf54bb26040518163ffffffff1660e01b815260040160006040518083038186803b1580156104e457600080fd5b505afa1580156104f8573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261052091908101906125d4565b935093509350935060005b84518110156105ce576001600560008b8b8b81811061054657fe5b905060200201602081019061055b91906123ed565b6001600160a01b03166001600160a01b03168152602001908152602001600020600087848151811061058957fe5b6020026020010151600581111561059c57fe5b60058111156105a757fe5b81526020810191909152604001600020805460ff191691151591909117905560010161052b565b5060005b8351811015610675576001600660008b8b8b8181106105ed57fe5b905060200201602081019061060291906123ed565b6001600160a01b03166001600160a01b03168152602001908152602001600020600086848151811061063057fe5b6020026020010151600581111561064357fe5b600581111561064e57fe5b81526020810191909152604001600020805460ff19169115159190911790556001016105d2565b5081156106cc576001600360008a8a8a81811061068e57fe5b90506020020160208101906106a391906123ed565b6001600160a01b031681526020810191909152604001600020805460ff19169115159190911790555b8015610722576001600460008a8a8a8181106106e457fe5b90506020020160208101906106f991906123ed565b6001600160a01b031681526020810191909152604001600020805460ff19169115159190911790555b846001600160a01b0316637998a1c46040518163ffffffff1660e01b815260040160006040518083038186803b15801561075b57600080fd5b505afa15801561076f573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610797919081019061277d565b6040516107a49190612e95565b60405180910390208888888181106107b857fe5b90506020020160208101906107cd91906123ed565b6001600160a01b03167f0cc09421dfd6f16fe9f3e1329fe97c2c82bed949019621d503a1220831abb62e8686868660405161080b9493929190612f95565b60405180910390a350506001909301925061040a915050565b505050565b6001600160a01b03811660009081526003602052604090205460ff165b919050565b6001600160a01b031660009081526004602052604090205460ff1690565b6001600160a01b039081166000908152602081905260409020541690565b6001600160a01b0382166000908152600660205260408120818360058111156108ac57fe5b60058111156108b757fe5b815260208101919091526040016000205460ff1690505b92915050565b6103ac338585858080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525087925060019150610fbd9050565b60006109253361133e565b336000908152600760209081526040918290208054835181840281018401909452808452939450606093909183018282801561098a57602002820191906000526020600020905b81546001600160a01b0316815260019091019060200180831161096c575b5050505050905060005b81518110156103ac578181815181106109a957fe5b60200260200101516001600160a01b0316633146d05833856040518363ffffffff1660e01b81526004016109de929190612eaf565b600060405180830381600087803b1580156109f857600080fd5b505af1158015610a0c573d6000803e3d6000fd5b5050600190920191506109949050565b60007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663893d20e86040518163ffffffff1660e01b815260040160206040518083038186803b158015610a7757600080fd5b505afa158015610a8b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610aaf9190612413565b905090565b606080610ac383850185612577565b915091508051825114610ae85760405162461bcd60e51b81526004016103a39061308c565b610af1826114e4565b610b0d5760405162461bcd60e51b81526004016103a3906130bc565b60005b8251811015610cac57610b35838281518110610b2857fe5b6020026020010151610cd7565b610b515760405162461bcd60e51b81526004016103a39061302c565b828181518110610b5d57fe5b60200260200101516001600160a01b0316630f5f6b4f33848481518110610b8057fe5b60200260200101516040518363ffffffff1660e01b8152600401610ba5929190612eca565b600060405180830381600087803b158015610bbf57600080fd5b505af1158015610bd3573d6000803e3d6000fd5b5050336000908152600760205260409020855190925085915083908110610bf657fe5b60209081029190910181015182546001810184556000938452919092200180546001600160a01b0319166001600160a01b039092169190911790558251839082908110610c3f57fe5b60200260200101516001600160a01b0316336001600160a01b03167f62b7814f137868e44c7a83c2b0a340fc5dacef8f3e748867d0f5f879fc0ef6da848481518110610c8757fe5b6020026020010151604051610c9c9190612fed565b60405180910390a3600101610b10565b5050505050565b7f000000000000000000000000000000000000000000000000000000000000000090565b60006108ce600183611578565b6001600160a01b038116600090815260076020908152604091829020805483518184028101840190945280845260609392830182828015610d4e57602002820191906000526020600020905b81546001600160a01b03168152600190910190602001808311610d30575b50505050509050919050565b6001600160a01b03918216600090815260086020908152604080832093909416825291909152205490565b610da333600060405180602001604052806000815250600080610fbd565b610dac3361158d565b610db5336117c7565b565b610dbf610a1c565b6001600160a01b0316336001600160a01b031614610def5760405162461bcd60e51b81526004016103a39061303c565b80610e0c5760405162461bcd60e51b81526004016103a3906130cc565b60005b8181101561082457610e2683838381811061042157fe5b610e425760405162461bcd60e51b81526004016103a3906130ec565b610e6e838383818110610e5157fe5b9050602002016020810190610e6691906123ed565b60019061180f565b50828282818110610e7b57fe5b9050602002016020810190610e9091906123ed565b6001600160a01b0316637998a1c46040518163ffffffff1660e01b815260040160006040518083038186803b158015610ec857600080fd5b505afa158015610edc573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610f04919081019061277d565b604051610f119190612e95565b6040518091039020838383818110610f2557fe5b9050602002016020810190610f3a91906123ed565b6001600160a01b03167f3a9db4e30d2c448ca18bdd1a6c2e611b9f28cee12f4f6faf79722a0ea2d7242360405160405180910390a3600101610e0f565b6001600160a01b0382166000908152600560208190526040822090829084908111156108ac57fe5b60006108ce82611824565b6000610fb68383611828565b9392505050565b6001600160a01b03851660009081526007602090815260409182902080548351818402810184019094528084526060939283018282801561102757602002820191906000526020600020905b81546001600160a01b03168152600190910190602001808311611009575b5050505050905080516000141561103e5750610cac565b600061104987610869565b90506001600160a01b0381166110715760405162461bcd60e51b81526004016103a39061311c565b60006110818883858a8a8a61186d565b90508315611097576110978883858a8a866118f5565b5050505050505050565b6060818060200190518101906110b79190612543565b905060006110c433610869565b90506000805b83518110156112a6578381815181106110df57fe5b60200260200101516001600160a01b031663b78b481387856040518363ffffffff1660e01b8152600401611114929190612eea565b602060405180830381600087803b15801561112e57600080fd5b505af1158015611142573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111669190612680565b61116f5761129e565b6001600160a01b03861660009081526008602052604081208551829087908590811061119757fe5b60200260200101516001600160a01b03166001600160a01b0316815260200190815260200160002054905080600014156111d1575061129e565b6111db83826119bc565b9250600060086000896001600160a01b03166001600160a01b03168152602001908152602001600020600087858151811061121257fe5b60200260200101516001600160a01b03166001600160a01b031681526020019081526020016000208190555084828151811061124a57fe5b60200260200101516001600160a01b0316876001600160a01b03167fcda32f0422c94049db811f90e9e3e2537f709654eeb3e087d70a5e33916df9a583604051611294919061312c565b60405180910390a3505b6001016110ca565b508015610cac57610cac8583846001600160a01b031663893d20e86040518163ffffffff1660e01b815260040160206040518083038186803b1580156112eb57600080fd5b505afa1580156112ff573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113239190612413565b846119e1565b6000610fb6836001600160a01b038416611a61565b6001600160a01b03818116600090815260208190526040812054909116156113785760405162461bcd60e51b81526004016103a39061301c565b816001600160a01b031663c98091876040518163ffffffff1660e01b815260040160206040518083038186803b1580156113b157600080fd5b505afa1580156113c5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113e99190612413565b90506001600160a01b0381166114115760405162461bcd60e51b81526004016103a39061304c565b806001600160a01b0316635a53e3486040518163ffffffff1660e01b815260040160206040518083038186803b15801561144a57600080fd5b505afa15801561145e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114829190612413565b6001600160a01b0316826001600160a01b0316146114b25760405162461bcd60e51b81526004016103a3906130ac565b6001600160a01b03918216600090815260208190526040902080546001600160a01b0319169282169290921790915590565b600060018251116114f757506001610846565b815160005b8181101561156e57600181015b828110156115655784818151811061151d57fe5b60200260200101516001600160a01b031685838151811061153a57fe5b60200260200101516001600160a01b0316141561155d5760009350505050610846565b600101611509565b506001016114fc565b5060019392505050565b6000610fb6836001600160a01b038416611aab565b600061159882610869565b90506000816001600160a01b03166370a08231836040518263ffffffff1660e01b81526004016115c89190612ea1565b60206040518083038186803b1580156115e057600080fd5b505afa1580156115f4573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061161891906127b1565b9050806116265750506117c4565b6001600160a01b03831660009081526007602090815260409182902080548351818402810184019094528084526060939283018282801561169057602002820191906000526020600020905b81546001600160a01b03168152600190910190602001808311611672575b5050505050905060005b81518110156116fa576001600160a01b038516600090815260086020526040812083519091908490849081106116cc57fe5b6020908102919091018101516001600160a01b0316825281019190915260400160009081205560010161169a565b506000836001600160a01b031663893d20e86040518163ffffffff1660e01b815260040160206040518083038186803b15801561173657600080fd5b505afa15801561174a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061176e9190612413565b905061177c858583866119e1565b846001600160a01b03167fe1ddc13838bdb841a7c5c11b6f7c9bde7199c71756f2ba118de8cf3e036b91f682856040516117b7929190612f69565b60405180910390a2505050505b50565b6001600160a01b03811660009081526007602052604081206117e89161208d565b6001600160a01b0316600090815260208190526040902080546001600160a01b0319169055565b6000610fb6836001600160a01b038416611ac3565b5490565b8154600090821061184b5760405162461bcd60e51b81526004016103a39061300c565b82600001828154811061185a57fe5b9060005260206000200154905092915050565b8060005b85518110156118e95761189786828151811061188957fe5b602002602001015186610f77565b6118a0576118e1565b6118be888783815181106118b057fe5b602002602001015184611b89565b91506118e188888884815181106118d157fe5b6020026020010151888887611c52565b600101611871565b505b9695505050505050565b8060005b85518110156110975761191f86828151811061191157fe5b602002602001015186610887565b611928576119b4565b611938888783815181106118b057fe5b915085818151811061194657fe5b60200260200101516001600160a01b031663233faf5f89898888876040518663ffffffff1660e01b8152600401611981959493929190612ef8565b600060405180830381600087803b15801561199b57600080fd5b505af11580156119af573d6000803e3d6000fd5b505050505b6001016118f9565b600082820183811015610fb65760405162461bcd60e51b81526004016103a39061305c565b836001600160a01b03166310acd06d6003858585604051602001611a0793929190612f41565b6040516020818303038152906040526040518363ffffffff1660e01b8152600401611a33929190612ffe565b600060405180830381600087803b158015611a4d57600080fd5b505af1158015611097573d6000803e3d6000fd5b6000611a6d8383611aab565b611aa3575081546001818101845560008481526020808220909301849055845484825282860190935260409020919091556108ce565b5060006108ce565b60009081526001919091016020526040902054151590565b60008181526001830160205260408120548015611b7f5783546000198083019190810190600090879083908110611af657fe5b9060005260206000200154905080876000018481548110611b1357fe5b600091825260208083209091019290925582815260018981019092526040902090840190558654879080611b4357fe5b600190038181906000526020600020016000905590558660010160008781526020019081526020016000206000905560019450505050506108ce565b60009150506108ce565b600081158015611b9d5750611b9d8361084b565b15611c4b57604051637a89e49360e11b81526000906001600160a01b0386169063f513c92690611bd290600190600401612fdf565b6040805180830381600087803b158015611beb57600080fd5b505af1158015611bff573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611c2391906127cf565b909250905080611c455760405162461bcd60e51b81526004016103a39061309c565b50610fb6565b5092915050565b6000806000866001600160a01b03166341892d7e8a8a8989896040518663ffffffff1660e01b8152600401611c8b959493929190612ef8565b606060405180830381600087803b158015611ca557600080fd5b505af1158015611cb9573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611cdd9190612730565b919450925090506000836005811115611cf257fe5b1415611d0057505050611fb2565b60006001846005811115611d1057fe5b1415611d9a57886001600160a01b031663893d20e86040518163ffffffff1660e01b815260040160206040518083038186803b158015611d4f57600080fd5b505afa158015611d63573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611d879190612413565b9050611d958a8483856119e1565b611f52565b6002846005811115611da857fe5b1415611e2c57886001600160a01b031663893d20e86040518163ffffffff1660e01b815260040160206040518083038186803b158015611de757600080fd5b505afa158015611dfb573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611e1f9190612413565b9050611d958a8284611fba565b6003846005811115611e3a57fe5b1415611e4b57611d958a8484612041565b6004846005811115611e5957fe5b1415611ec2576001600160a01b03808b166000908152600860209081526040808320938c1683529290522054611e8f90836119bc565b6001600160a01b03808c166000908152600860209081526040808320938d16835292905220555087611d958a8284611fba565b6005846005811115611ed057fe5b1415611f3a576001600160a01b03808b166000908152600860209081526040808320938c1683529290522054611f069083612065565b6001600160a01b03808c166000908152600860209081526040808320938d1683529290522055889250611d958a8484612041565b60405162461bcd60e51b81526004016103a3906130fc565b836005811115611f5e57fe5b886001600160a01b03168b6001600160a01b03167fef7da7c40d1fc52df907f6fed0e539680d5fb491c3b8f94db234a360dafe1d62868587604051611fa593929190612f41565b60405180910390a4505050505b505050505050565b826001600160a01b03166310acd06d60028484604051602001611fde929190612f69565b6040516020818303038152906040526040518363ffffffff1660e01b815260040161200a929190612ffe565b600060405180830381600087803b15801561202457600080fd5b505af1158015612038573d6000803e3d6000fd5b50505050505050565b826001600160a01b03166310acd06d60018484604051602001611fde929190612f69565b6000828211156120875760405162461bcd60e51b81526004016103a39061307c565b50900390565b50805460008255906000526020600020908101906117c491905b8082111561031557600081556001016120a7565b80356108ce8161326f565b80516108ce8161326f565b60008083601f8401126120e357600080fd5b5081356001600160401b038111156120fa57600080fd5b60208301915083602082028301111561211257600080fd5b9250929050565b600082601f83011261212a57600080fd5b813561213d61213882613160565b61313a565b9150818183526020840193506020810190508385602084028201111561216257600080fd5b60005b8381101561218e578161217888826120bb565b8452506020928301929190910190600101612165565b5050505092915050565b600082601f8301126121a957600080fd5b81516121b761213882613160565b915081818352602084019350602081019050838560208402820111156121dc57600080fd5b60005b8381101561218e57816121f288826120c6565b84525060209283019291909101906001016121df565b600082601f83011261221957600080fd5b813561222761213882613160565b81815260209384019390925082018360005b8381101561218e578135860161224f888261232c565b8452506020928301929190910190600101612239565b600082601f83011261227657600080fd5b815161228461213882613160565b915081818352602084019350602081019050838560208402820111156122a957600080fd5b60005b8381101561218e57816122bf8882612386565b84525060209283019291909101906001016122ac565b80356108ce81613283565b80516108ce81613283565b60008083601f8401126122fd57600080fd5b5081356001600160401b0381111561231457600080fd5b60208301915083600182028301111561211257600080fd5b600082601f83011261233d57600080fd5b813561234b61213882613180565b9150808252602083016020830185838301111561236757600080fd5b612372838284613219565b50505092915050565b80356108ce8161328c565b80516108ce8161328c565b600082601f8301126123a257600080fd5b81516123b061213882613180565b915080825260208301602083018583830111156123cc57600080fd5b612372838284613225565b80356108ce81613299565b80516108ce81613299565b6000602082840312156123ff57600080fd5b600061240b84846120bb565b949350505050565b60006020828403121561242557600080fd5b600061240b84846120c6565b6000806040838503121561244457600080fd5b600061245085856120bb565b9250506020612461858286016120bb565b9150509250929050565b6000806040838503121561247e57600080fd5b600061248a85856120bb565b92505060206124618582860161237b565b600080600080606085870312156124b157600080fd5b60006124bd87876120bb565b94505060206124ce878288016123d7565b93505060408501356001600160401b038111156124ea57600080fd5b6124f6878288016122eb565b95989497509550505050565b6000806020838503121561251557600080fd5b82356001600160401b0381111561252b57600080fd5b612537858286016120d1565b92509250509250929050565b60006020828403121561255557600080fd5b81516001600160401b0381111561256b57600080fd5b61240b84828501612198565b6000806040838503121561258a57600080fd5b82356001600160401b038111156125a057600080fd5b6125ac85828601612119565b92505060208301356001600160401b038111156125c857600080fd5b61246185828601612208565b600080600080608085870312156125ea57600080fd5b84516001600160401b0381111561260057600080fd5b61260c87828801612265565b94505060208501516001600160401b0381111561262857600080fd5b61263487828801612265565b9350506040612645878288016122e0565b9250506060612656878288016122e0565b91505092959194509250565b60006020828403121561267457600080fd5b600061240b84846122d5565b60006020828403121561269257600080fd5b600061240b84846122e0565b600080602083850312156126b157600080fd5b82356001600160401b038111156126c757600080fd5b612537858286016122eb565b600080600080606085870312156126e957600080fd5b60006126f5878761237b565b94505060208501356001600160401b0381111561271157600080fd5b61271d878288016122eb565b93509350506040612656878288016123d7565b60008060006060848603121561274557600080fd5b60006127518686612386565b9350506020612762868287016120c6565b9250506040612773868287016123e2565b9150509250925092565b60006020828403121561278f57600080fd5b81516001600160401b038111156127a557600080fd5b61240b84828501612391565b6000602082840312156127c357600080fd5b600061240b84846123e2565b600080604083850312156127e257600080fd5b60006127ee85856123e2565b9250506020612461858286016122e0565b600061280b838361282e565b505060200190565b600061280b838361291f565b612828816131ed565b82525050565b612828816131ba565b6000612842826131ad565b61284c81856131b1565b9350612857836131a7565b8060005b8381101561288557815161286f88826127ff565b975061287a836131a7565b92505060010161285b565b509495945050505050565b600061289b826131ad565b6128a581856131b1565b93506128b0836131a7565b8060005b838110156128855781516128c88882612813565b97506128d3836131a7565b9250506001016128b4565b612828816131c5565b60006128f2826131ad565b6128fc81856131b1565b935061290c818560208601613225565b61291581613251565b9093019392505050565b612828816131f8565b61282881613203565b600061293c826131ad565b6129468185610846565b9350612956818560208601613225565b9290920192915050565b600061296d6022836131b1565b7f456e756d657261626c655365743a20696e646578206f7574206f6620626f756e815261647360f01b602082015260400192915050565b60006129b16025836131b1565b7f5f5f73657456616c6964617465645661756c7450726f78793a20416c726561648152641e481cd95d60da1b602082015260400192915050565b60006129f86027836131b1565b7f736574436f6e666967466f7246756e643a20466565206973206e6f74207265678152661a5cdd195c995960ca1b602082015260400192915050565b6000612a416049836131b1565b7f6f6e6c7946756e644465706c6f7965724f776e65723a204f6e6c79207468652081527f46756e644465706c6f796572206f776e65722063616e2063616c6c207468697360208201526810333ab731ba34b7b760b91b604082015260600192915050565b6000612ab2602c836131b1565b7f5f5f73657456616c6964617465645661756c7450726f78793a204d697373696e81526b67207661756c7450726f787960a01b602082015260400192915050565b6000612b00601b836131b1565b7f536166654d6174683a206164646974696f6e206f766572666c6f770000000000815260200192915050565b6000612b39602d836131b1565b7f7265636569766543616c6c46726f6d436f6d7074726f6c6c65723a20496e766181526c1b1a590817d858dd1a5bdb9259609a1b602082015260400192915050565b6000612b88601e836131b1565b7f536166654d6174683a207375627472616374696f6e206f766572666c6f770000815260200192915050565b6000612bc1603d836131b1565b7f736574436f6e666967466f7246756e643a206665657320616e6420736574746981527f6e677344617461206172726179206c656e6774687320756e657175616c000000602082015260400192915050565b6000612c206020836131b1565b7f5f5f67657447617641734e65636573736172793a20496e76616c696420474156815260200192915050565b6000612c596035836131b1565b7f5f5f73657456616c6964617465645661756c7450726f78793a204e6f7420746881527432902b30bab63a283937bc3c9030b1b1b2b9b9b7b960591b602082015260400192915050565b6000612cb06030836131b1565b7f736574436f6e666967466f7246756e643a20666565732063616e6e6f7420696e81526f636c756465206475706c69636174657360801b602082015260400192915050565b6000612d026025836131b1565b7f64657265676973746572466565733a205f666565732063616e6e6f7420626520815264656d70747960d81b602082015260400192915050565b6000612d496024836131b1565b7f7265676973746572466565733a2066656520616c726561647920726567697374815263195c995960e21b602082015260400192915050565b6000612d8f6025836131b1565b7f64657265676973746572466565733a20666565206973206e6f742072656769738152641d195c995960da1b602082015260400192915050565b6000612dd66023836131b1565b7f5f5f736574746c654665653a20496e76616c696420536574746c656d656e745481526279706560e81b602082015260400192915050565b6000612e1b6023836131b1565b7f7265676973746572466565733a205f666565732063616e6e6f7420626520656d81526270747960e81b602082015260400192915050565b6000612e606020836131b1565b7f5f5f696e766f6b65486f6f6b3a2046756e64206973206e6f7420616374697665815260200192915050565b612828816131ea565b6000610fb68284612931565b602081016108ce828461282e565b60408101612ebd828561281f565b610fb6602083018461282e565b60408101612ed8828561281f565b818103602083015261240b81846128e7565b60408101612ebd828561282e565b60a08101612f06828861282e565b612f13602083018761282e565b612f20604083018661291f565b8181036060830152612f3281856128e7565b90506118eb6080830184612e8c565b60608101612f4f828661282e565b612f5c602083018561282e565b61240b6040830184612e8c565b60408101612f77828561282e565b610fb66020830184612e8c565b60208082528101610fb68184612837565b60808082528101612fa68187612890565b90508181036020830152612fba8186612890565b9050612fc960408301856128de565b612fd660608301846128de565b95945050505050565b602081016108ce82846128de565b60208082528101610fb681846128e7565b60408101612ed88285612928565b602080825281016108ce81612960565b602080825281016108ce816129a4565b602080825281016108ce816129eb565b602080825281016108ce81612a34565b602080825281016108ce81612aa5565b602080825281016108ce81612af3565b602080825281016108ce81612b2c565b602080825281016108ce81612b7b565b602080825281016108ce81612bb4565b602080825281016108ce81612c13565b602080825281016108ce81612c4c565b602080825281016108ce81612ca3565b602080825281016108ce81612cf5565b602080825281016108ce81612d3c565b602080825281016108ce81612d82565b602080825281016108ce81612dc9565b602080825281016108ce81612e0e565b602080825281016108ce81612e53565b602081016108ce8284612e8c565b6040518181016001600160401b038111828210171561315857600080fd5b604052919050565b60006001600160401b0382111561317657600080fd5b5060209081020190565b60006001600160401b0382111561319657600080fd5b506020601f91909101601f19160190565b60200190565b5190565b90815260200190565b60006108ce826131de565b151590565b806108468161325b565b8061084681613265565b6001600160a01b031690565b90565b60006108ce8261320e565b60006108ce826131ca565b60006108ce826131d4565b60006108ce826131ba565b82818337506000910152565b60005b83811015613240578181015183820152602001613228565b838111156103ac5750506000910152565b601f01601f191690565b600681106117c457fe5b600881106117c457fe5b613278816131ba565b81146117c457600080fd5b613278816131c5565b600681106117c457600080fd5b613278816131ea56fea2646970667358221220799f438e92aa468cdc60bbdcb01bb7eb8e546990065faa6c24b7944d1914db6d64736f6c634300060c0033';

type FeeManagerConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: FeeManagerConstructorParams,
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class FeeManager__factory extends ContractFactory {
  constructor(...args: FeeManagerConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _fundDeployer: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<FeeManager> {
    return super.deploy(_fundDeployer, overrides || {}) as Promise<FeeManager>;
  }
  override getDeployTransaction(
    _fundDeployer: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): TransactionRequest {
    return super.getDeployTransaction(_fundDeployer, overrides || {});
  }
  override attach(address: string): FeeManager {
    return super.attach(address) as FeeManager;
  }
  override connect(signer: Signer): FeeManager__factory {
    return super.connect(signer) as FeeManager__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): FeeManagerInterface {
    return new utils.Interface(_abi) as FeeManagerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider,
  ): FeeManager {
    return new Contract(address, _abi, signerOrProvider) as FeeManager;
  }
}
