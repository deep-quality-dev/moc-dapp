pragma solidity ^0.5.1;

contract MOC {
    uint256[3] private items;

    constructor() public {
        for (uint256 i = 0; i < 3; i++) {
            items[i] = 0;
        }
    }

    function getItem(uint256 idx) public view returns(uint256) {
        return items[idx];
    }

    function vote(uint256 idx) public returns(uint256) {
        if (idx >= 0 && idx < 3) {
            items[idx]++;
            return 1;
        }
        return 0;
    }
}