// export const address = "0xD05e51C54decE71D82d0feb7Ea1456fFeE69Cc4C"
export const address = "TE43ModJ1frz3T9uv4bfaARGsTETuPzFnn"

export const abi = [
  { inputs: [], stateMutability: "nonpayable", type: "constructor" },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "oldOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnerSet",
    type: "event",
  },
  {
    inputs: [
      { internalType: "string", name: "hash", type: "string" },
      { internalType: "string", name: "cid", type: "string" },
    ],
    name: "add",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "string", name: "hash", type: "string" },
      { internalType: "string", name: "cid", type: "string" },
    ],
    name: "addOverride",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "string[]", name: "hashes", type: "string[]" },
      { internalType: "string", name: "cid", type: "string" },
    ],
    name: "adds",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "newOwner", type: "address" }],
    name: "changeOwner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "string", name: "hash", type: "string" }],
    name: "find",
    outputs: [
      {
        components: [
          { internalType: "string", name: "id", type: "string" },
          { internalType: "uint256", name: "timestamp", type: "uint256" },
        ],
        internalType: "struct SolidityDatabaseRegistry.ContractInfo",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getOwner",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
]
