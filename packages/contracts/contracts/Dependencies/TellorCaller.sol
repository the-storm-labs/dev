// SPDX-License-Identifier: MIT

pragma solidity 0.8.0;

import "usingtellor/contracts/UsingTellor.sol";

/*
* This contract has a single external function that calls Tellor: getTellorCurrentValue(). 
*
* The function is called by the Liquity contract PriceFeed.sol. If any of its inner calls to Tellor revert, 
* this function will revert, and PriceFeed will catch the failure and handle it accordingly.
*
* The function comes from Tellor's own wrapper contract, 'UsingTellor.sol':
* https://github.com/tellor-io/usingtellor/blob/master/contracts/UsingTellor.sol
*
*/
contract TellorCaller is UsingTellor {
       

    mapping (uint256 => bytes32 ) public queryId;

    constructor (address payable _tellorMasterAddress) UsingTellor(_tellorMasterAddress) {
      bytes memory _queryData = abi.encode("SpotPrice", abi.encode("eth", "usd"));
      bytes32 _queryId = keccak256(_queryData);
      queryId[1] =_queryId;

    }

     function getTellorCurrentValue(uint256 _requestId) external view returns ( bool, uint256, uint256)    {
      
      (bytes memory _value, uint256 _timestampRetrieved) = getDataBefore(queryId[_requestId], block.timestamp - 20 minutes);
      if (_timestampRetrieved == 0) return (false, 0, _timestampRetrieved);
      require(block.timestamp - _timestampRetrieved <= 17 days, "Stale data"); // 17 days is the maximum delay for Tellor data
      uint256 value = abi.decode(_value, (uint256));
      if (value > 0) return (true, value, _timestampRetrieved); 
      return (false, 0 , _timestampRetrieved);
    
    }
}
