/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers';
import type { Provider, TransactionRequest } from '@ethersproject/providers';
import type { PromiseOrValue } from '../common';
import type {
  UniswapV3Adapter,
  UniswapV3AdapterInterface,
} from '../UniswapV3Adapter';

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
        name: '_router',
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
    name: 'getUniswapV3Router',
    outputs: [
      {
        internalType: 'address',
        name: 'router_',
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
        name: '',
        type: 'bytes',
      },
    ],
    name: 'takeOrder',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
];

const _bytecode =
  '0x60c06040523480156200001157600080fd5b506040516200183938038062001839833981016040819052620000349162000066565b6001600160601b0319606092831b8116608052911b1660a052620000d1565b80516200006081620000b7565b92915050565b600080604083850312156200007a57600080fd5b600062000088858562000053565b92505060206200009b8582860162000053565b9150509250929050565b60006001600160a01b03821662000060565b620000c281620000a5565b8114620000ce57600080fd5b50565b60805160601c60a05160601c61172f6200010a600039806106295280610742528061085152508061020f5280610695525061172f6000f3fe608060405234801561001057600080fd5b50600436106101165760003560e01c80637998a1c4116100a2578063e27a06b511610071578063e27a06b5146101dc578063e4d90478146101e4578063e7c45690146101ec578063f0753994146101f4578063f7d882b5146101fc57610116565b80637998a1c4146101a2578063863e5ad0146101b7578063b23228cf146101bf578063b9e3de44146101c757610116565b80633ffc1591116100e95780633ffc15911461015e57806340da225d1461016657806340f8cfcf1461016e5780635ca62b3c1461017657806376cc7ac61461017e57610116565b806303e38a2b1461011b578063080456c114610130578063131461c01461014e578063257cb1a314610156575b600080fd5b61012e610129366004610df1565b610204565b005b6101386102ba565b60405161014591906114a2565b60405180910390f35b6101386102de565b610138610302565b610138610326565b61013861034a565b61013861036e565b610138610392565b61019161018c366004610f2e565b6103b6565b6040516101459594939291906114b0565b6101aa6105bb565b604051610145919061150c565b6101386105df565b610138610603565b6101cf610627565b604051610145919061145e565b61013861064b565b61013861066f565b6101cf610693565b6101386106b7565b6101386106db565b336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146102555760405162461bcd60e51b815260040161024c9061153d565b60405180910390fd5b60608060008061029a88888080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152506106ff92505050565b93509350935093506102af8985858585610728565b505050505050505050565b7f8334eb99be0145865eba9889fca2ee920288090caefff4cc776038e20ad9259a81565b7f29fa046e79524c3c5ac4c01df692c35e217802b2b13b21121b76cf0ef02b138c81565b7f099f75155f0e997bf83a7993a71d5e7e7540bd386fe1e84643a09ce6b412521981565b7ffa7dd04da627f433da73c4355ead9c75682a67a8fc84d3f6170ef0922f402d2481565b7fb9dfbaccbe5cd2a84fdcf1d15f23ef25d23086f5afbaa99516065ed4a5bbc7a381565b7ff658eb804cc1da8af5599b584aaf3d55407a3c721c42641a6a5270e963d782c381565b7fdfd5ee0f6067928bf85a7c4430811282840bc99332dda3dab462c02bf95b67cc81565b600060608080806001600160e01b031988166303e38a2b60e01b146103ed5760405162461bcd60e51b815260040161024c9061151d565b6060806000806104328b8b8080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152506106ff92505050565b935093509350935060028451101561045c5760405162461bcd60e51b815260040161024c9061154d565b82516001018451146104805760405162461bcd60e51b815260040161024c9061156d565b6040805160018082528183019092529060208083019080368337019050509750836000815181106104ad57fe5b6020026020010151886000815181106104c257fe5b6001600160a01b0392909216602092830291909101820152604080516001808252818301909252918281019080368337019050509650818760008151811061050657fe5b6020908102919091010152604080516001808252818301909252908160200160208202803683370190505095508360018551038151811061054357fe5b60200260200101518660008151811061055857fe5b6001600160a01b0392909216602092830291909101820152604080516001808252818301909252918281019080368337019050509450808560008151811061059c57fe5b6020026020010181815250506002985050505050939792965093509350565b60408051808201909152600a815269554e49535741505f563360b01b602082015290565b7f03e38a2bd7063d45c897edeafc330e71657502dd86434d3c37a489caf116af6981565b7f68e30677f607df46e87da13e15b637784cfa62374b653f35ab43d10361a2f83081565b7f000000000000000000000000000000000000000000000000000000000000000090565b7f848f3a590fb2f9795d1a275009c54c26c53833277c96b90e0ddd01753a1d590681565b7f3377e18acf9e83665eacd6af109261424fca32a298e2fc2e6095ba563fb8390e81565b7f000000000000000000000000000000000000000000000000000000000000000090565b7f1d51f49b5273d9ddbb643dc349fab8d36dbb470209c2ea71033bea49dd311c2781565b7fc29fa9dde84204c2908778afd0613d802d31cf046179b88f6d2b4a4e507ea2d581565b606080600080848060200190518101906107199190610e78565b93509350935093509193509193565b6107678460008151811061073857fe5b60200260200101517f0000000000000000000000000000000000000000000000000000000000000000846108f7565b606060005b855181101561081157600186510381146107d1578186828151811061078d57fe5b60200260200101518683815181106107a157fe5b60200260200101516040516020016107bb9392919061142b565b6040516020818303038152906040529150610809565b818682815181106107de57fe5b60200260200101516040516020016107f7929190611409565b60405160208183030381529060405291505b60010161076c565b5061081a610c39565b6040518060a00160405280838152602001886001600160a01b031681526020014260010181526020018581526020018481525090507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663c04b8d59826040518263ffffffff1660e01b815260040161089b919061159d565b602060405180830381600087803b1580156108b557600080fd5b505af11580156108c9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108ed9190610f84565b5050505050505050565b604051636eb1769f60e11b815281906001600160a01b0385169063dd62ed3e90610927903090879060040161146c565b60206040518083038186803b15801561093f57600080fd5b505afa158015610953573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109779190610f84565b1015610993576109936001600160a01b03841683600019610998565b505050565b801580610a205750604051636eb1769f60e11b81526001600160a01b0384169063dd62ed3e906109ce903090869060040161146c565b60206040518083038186803b1580156109e657600080fd5b505afa1580156109fa573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a1e9190610f84565b155b610a3c5760405162461bcd60e51b815260040161024c9061158d565b6109938363095ea7b360e01b8484604051602401610a5b929190611487565b60408051601f198184030181529190526020810180516001600160e01b03166001600160e01b0319909316929092179091526060610ae2826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b0316610b1c9092919063ffffffff16565b8051909150156109935780806020019051810190610b009190610f08565b6109935760405162461bcd60e51b815260040161024c9061157d565b6060610b2b8484600085610b35565b90505b9392505050565b606082471015610b575760405162461bcd60e51b815260040161024c9061152d565b610b6085610bf6565b610b7c5760405162461bcd60e51b815260040161024c9061155d565b60006060866001600160a01b03168587604051610b9991906113fd565b60006040518083038185875af1925050503d8060008114610bd6576040519150601f19603f3d011682016040523d82523d6000602084013e610bdb565b606091505b5091509150610beb828286610c00565b979650505050505050565b803b15155b919050565b60608315610c0f575081610b2e565b825115610c1f5782518084602001fd5b8160405162461bcd60e51b815260040161024c919061150c565b6040518060a001604052806060815260200160006001600160a01b031681526020016000815260200160008152602001600081525090565b8035610c7c816116c1565b92915050565b8051610c7c816116c1565b600082601f830112610c9e57600080fd5b8151610cb1610cac826115d5565b6115ae565b91508181835260208401935060208101905083856020840282011115610cd657600080fd5b60005b83811015610d025781610cec8882610c82565b8452506020928301929190910190600101610cd9565b5050505092915050565b600082601f830112610d1d57600080fd5b8151610d2b610cac826115d5565b91508181835260208401935060208101905083856020840282011115610d5057600080fd5b60005b83811015610d025781610d668882610ddb565b8452506020928301929190910190600101610d53565b8051610c7c816116d5565b8035610c7c816116de565b60008083601f840112610da457600080fd5b50813567ffffffffffffffff811115610dbc57600080fd5b602083019150836001820283011115610dd457600080fd5b9250929050565b8051610c7c816116e7565b8051610c7c816116f0565b600080600080600060608688031215610e0957600080fd5b6000610e158888610c71565b955050602086013567ffffffffffffffff811115610e3257600080fd5b610e3e88828901610d92565b9450945050604086013567ffffffffffffffff811115610e5d57600080fd5b610e6988828901610d92565b92509250509295509295909350565b60008060008060808587031215610e8e57600080fd5b845167ffffffffffffffff811115610ea557600080fd5b610eb187828801610c8d565b945050602085015167ffffffffffffffff811115610ece57600080fd5b610eda87828801610d0c565b9350506040610eeb87828801610de6565b9250506060610efc87828801610de6565b91505092959194509250565b600060208284031215610f1a57600080fd5b6000610f268484610d7c565b949350505050565b600080600060408486031215610f4357600080fd5b6000610f4f8686610d87565b935050602084013567ffffffffffffffff811115610f6c57600080fd5b610f7886828701610d92565b92509250509250925092565b600060208284031215610f9657600080fd5b6000610f268484610de6565b6000610fae8383610fc2565b505060200190565b6000610fae83836113f4565b610fcb81611609565b82525050565b610fcb610fdd82611609565b611682565b6000610fed826115fc565b610ff78185611600565b9350611002836115f6565b8060005b8381101561103057815161101a8882610fa2565b9750611025836115f6565b925050600101611006565b509495945050505050565b6000611046826115fc565b6110508185611600565b935061105b836115f6565b8060005b838110156110305781516110738882610fb6565b975061107e836115f6565b92505060010161105f565b610fcb81611619565b600061109d826115fc565b6110a78185611600565b93506110b7818560208601611652565b6110c08161169e565b9093019392505050565b60006110d5826115fc565b6110df8185610bfb565b93506110ef818560208601611652565b9290920192915050565b610fcb81611647565b600061110f602783611600565b7f7061727365417373657473466f724d6574686f643a205f73656c6563746f72208152661a5b9d985b1a5960ca1b602082015260400192915050565b6000611158602683611600565b7f416464726573733a20696e73756666696369656e742062616c616e636520666f8152651c8818d85b1b60d21b602082015260400192915050565b60006111a0603283611600565b7f4f6e6c792074686520496e746567726174696f6e4d616e616765722063616e2081527131b0b636103a3434b990333ab731ba34b7b760711b602082015260400192915050565b60006111f4603083611600565b7f7061727365417373657473466f724d6574686f643a207061746841646472657381526f39b2b99036bab9ba103132901f1e901960811b602082015260400192915050565b6000611246601d83611600565b7f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000815260200192915050565b600061127f604083611600565b7f7061727365417373657473466f724d6574686f643a20696e636f72726563742081527f70617468416464726573736573206f72207061746846656573206c656e677468602082015260400192915050565b60006112de602a83611600565b7f5361666545524332303a204552433230206f7065726174696f6e20646964206e8152691bdd081cdd58d8d9595960b21b602082015260400192915050565b600061132a603683611600565b7f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f81527520746f206e6f6e2d7a65726f20616c6c6f77616e636560501b602082015260400192915050565b805160a08084526000919084019061138d8282611092565b91505060208301516113a26020860182610fc2565b5060408301516113b560408601826113f4565b5060608301516113c860608601826113f4565b5060808301516113db60808601826113f4565b509392505050565b610fcb6113ef8261163c565b611693565b610fcb81611644565b6000610b2e82846110ca565b600061141582856110ca565b91506114218284610fd1565b5060140192915050565b600061143782866110ca565b91506114438285610fd1565b60148201915061145382846113e3565b506003019392505050565b60208101610c7c8284610fc2565b6040810161147a8285610fc2565b610b2e6020830184610fc2565b604081016114958285610fc2565b610b2e60208301846113f4565b60208101610c7c8284611089565b60a081016114be82886110f9565b81810360208301526114d08187610fe2565b905081810360408301526114e4818661103b565b905081810360608301526114f88185610fe2565b90508181036080830152610beb818461103b565b60208082528101610b2e8184611092565b60208082528101610c7c81611102565b60208082528101610c7c8161114b565b60208082528101610c7c81611193565b60208082528101610c7c816111e7565b60208082528101610c7c81611239565b60208082528101610c7c81611272565b60208082528101610c7c816112d1565b60208082528101610c7c8161131d565b60208082528101610b2e8184611375565b60405181810167ffffffffffffffff811182821017156115cd57600080fd5b604052919050565b600067ffffffffffffffff8211156115ec57600080fd5b5060209081020190565b60200190565b5190565b90815260200190565b6000610c7c82611630565b151590565b6001600160e01b03191690565b80610bfb816116b4565b6001600160a01b031690565b62ffffff1690565b90565b6000610c7c82611626565b60005b8381101561166d578181015183820152602001611655565b8381111561167c576000848401525b50505050565b6000610c7c826000610c7c826116ae565b6000610c7c826116a8565b601f01601f191690565b60e81b90565b60601b90565b600481106116be57fe5b50565b6116ca81611609565b81146116be57600080fd5b6116ca81611614565b6116ca81611619565b6116ca8161163c565b6116ca8161164456fea2646970667358221220a3a408108fe67a3ba4acac1ec49de0f6cf2ea149117eba04625fe8c413defe9e64736f6c634300060c0033';

type UniswapV3AdapterConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: UniswapV3AdapterConstructorParams,
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class UniswapV3Adapter__factory extends ContractFactory {
  constructor(...args: UniswapV3AdapterConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _integrationManager: PromiseOrValue<string>,
    _router: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<UniswapV3Adapter> {
    return super.deploy(
      _integrationManager,
      _router,
      overrides || {},
    ) as Promise<UniswapV3Adapter>;
  }
  override getDeployTransaction(
    _integrationManager: PromiseOrValue<string>,
    _router: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): TransactionRequest {
    return super.getDeployTransaction(
      _integrationManager,
      _router,
      overrides || {},
    );
  }
  override attach(address: string): UniswapV3Adapter {
    return super.attach(address) as UniswapV3Adapter;
  }
  override connect(signer: Signer): UniswapV3Adapter__factory {
    return super.connect(signer) as UniswapV3Adapter__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): UniswapV3AdapterInterface {
    return new utils.Interface(_abi) as UniswapV3AdapterInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider,
  ): UniswapV3Adapter {
    return new Contract(address, _abi, signerOrProvider) as UniswapV3Adapter;
  }
}
