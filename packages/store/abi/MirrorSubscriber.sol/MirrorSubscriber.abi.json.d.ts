declare const abi: [
  {
    inputs: [
      {
        internalType: "bytes32";
        name: "table";
        type: "bytes32";
      },
      {
        internalType: "Schema";
        name: "keySchema";
        type: "bytes32";
      },
      {
        internalType: "Schema";
        name: "valueSchema";
        type: "bytes32";
      },
      {
        internalType: "string[]";
        name: "keyNames";
        type: "string[]";
      },
      {
        internalType: "string[]";
        name: "fieldNames";
        type: "string[]";
      }
    ];
    stateMutability: "nonpayable";
    type: "constructor";
  },
  {
    inputs: [
      {
        internalType: "uint256";
        name: "length";
        type: "uint256";
      }
    ];
    name: "PackedCounter_InvalidLength";
    type: "error";
  },
  {
    inputs: [
      {
        internalType: "uint256";
        name: "length";
        type: "uint256";
      }
    ];
    name: "SchemaLib_InvalidLength";
    type: "error";
  },
  {
    inputs: [];
    name: "SchemaLib_StaticTypeAfterDynamicType";
    type: "error";
  },
  {
    inputs: [
      {
        internalType: "bytes";
        name: "data";
        type: "bytes";
      },
      {
        internalType: "uint256";
        name: "start";
        type: "uint256";
      },
      {
        internalType: "uint256";
        name: "end";
        type: "uint256";
      }
    ];
    name: "Slice_OutOfBounds";
    type: "error";
  },
  {
    inputs: [
      {
        internalType: "uint256";
        name: "expected";
        type: "uint256";
      },
      {
        internalType: "uint256";
        name: "received";
        type: "uint256";
      }
    ];
    name: "StoreCore_InvalidDataLength";
    type: "error";
  },
  {
    inputs: [
      {
        internalType: "bytes32";
        name: "";
        type: "bytes32";
      },
      {
        internalType: "bytes32[]";
        name: "";
        type: "bytes32[]";
      },
      {
        internalType: "uint8";
        name: "";
        type: "uint8";
      },
      {
        internalType: "bytes";
        name: "";
        type: "bytes";
      },
      {
        internalType: "Schema";
        name: "";
        type: "bytes32";
      }
    ];
    name: "onAfterSetField";
    outputs: [];
    stateMutability: "nonpayable";
    type: "function";
  },
  {
    inputs: [
      {
        internalType: "bytes32";
        name: "table";
        type: "bytes32";
      },
      {
        internalType: "bytes32[]";
        name: "key";
        type: "bytes32[]";
      },
      {
        internalType: "uint8";
        name: "schemaIndex";
        type: "uint8";
      },
      {
        internalType: "bytes";
        name: "data";
        type: "bytes";
      },
      {
        internalType: "Schema";
        name: "valueSchema";
        type: "bytes32";
      }
    ];
    name: "onBeforeSetField";
    outputs: [];
    stateMutability: "nonpayable";
    type: "function";
  },
  {
    inputs: [
      {
        internalType: "bytes32";
        name: "table";
        type: "bytes32";
      },
      {
        internalType: "bytes32[]";
        name: "key";
        type: "bytes32[]";
      },
      {
        internalType: "Schema";
        name: "valueSchema";
        type: "bytes32";
      }
    ];
    name: "onDeleteRecord";
    outputs: [];
    stateMutability: "nonpayable";
    type: "function";
  },
  {
    inputs: [
      {
        internalType: "bytes32";
        name: "table";
        type: "bytes32";
      },
      {
        internalType: "bytes32[]";
        name: "key";
        type: "bytes32[]";
      },
      {
        internalType: "bytes";
        name: "data";
        type: "bytes";
      },
      {
        internalType: "Schema";
        name: "valueSchema";
        type: "bytes32";
      }
    ];
    name: "onSetRecord";
    outputs: [];
    stateMutability: "nonpayable";
    type: "function";
  }
];
export default abi;
