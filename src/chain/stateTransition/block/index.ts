/**
 * @module chain/stateTransition/block
 */

import {
  BeaconBlock,
  BeaconState,
} from "../../../types";

import processEth1Data from "./eth1Data";
import processBlockHeader from "./blockHeader";
import processRandao from "./randao";
import processOperations from "./operations";


// SPEC 0.7.1
// def process_block(state: BeaconState, block: BeaconBlock) -> None:
//   process_block_header(state, block)
// process_randao(state, block.body)
// process_eth1_data(state, block.body)
// process_operations(state, block.body)

export function processBlock(state: BeaconState, block: BeaconBlock): void {
  // block header
  processBlockHeader(state, block);

  // RANDAO
  processRandao(state, block.body);

  // Eth1 Data
  processEth1Data(state, block.body);

  // Operations

  processOperations(state,block.body);

}
