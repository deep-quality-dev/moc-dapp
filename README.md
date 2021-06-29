# moc-dapp, simple dapp
## at the beginning

Code from following url:
https://medium.com/coinmonks/creating-your-first-dapp-beginners-guide-a320d0e4897d

## steps

### step 1
- npm install -g truffle
- mkdir moc
- cd moc
- truffle init .

### step 2
write smart contract and html

### step 3

how to migrate
> truffle develop

This will open up truffle development console and will provide you 10 free accounts like this.

```
Accounts:
(0) 0x91303716d4306ea792b42bf0696422244c0a5428
(1) 0x0818ad18c79ef073768bfafb6403ee5cc78c3285
(2) 0xf007f4591ca0b6bfbef4317282d26a78ca6d4254
(3) 0xea1a44c3871c4dc6e3bd2d38a73429fe060ee95d
(4) 0xbccfe0e946d686594bc410b9b0e79fd4fe4cf7c4
(5) 0x4fc915393675044f2bc1ce2aa37b74993cee2eda
(6) 0xc6ac451a8e9a3248e5e37c1bb38e2eb9e4149e36
(7) 0xd358d15af8ea2943885f02446458080822a20d1b
(8) 0x6696d991530dc8b292ecd03e139b69785795944b
(9) 0x41e4efcb4a84c7536a87adc118e4da632c4c2437

Private Keys:
(0) 6eccc91e8418011315113030c25699d93b9fc00cbfe4296f67b944974c3d54de
(1) 72e8351a8825769ecf132bb4c26865e85da57275e58b4c72adc5f93ba1dca085
(2) 99077afe90349b297d1915af920dfa5b4455a9f2839a1572710999a9b3c08034
(3) d41cfbb0867b6c1f5288dbe7ab89182f4b1aeea43b883fb1592ccae28d04ae60
(4) 03bf1e2064608b0e917c7aa12f650c31c24b8408bfabc300115380b7f932aaef
(5) b49949986596432d144fa06f40322417a4ef4abd10ab0f29c792f397b14f49a7
(6) eb4519832851d163897bb534488f456f87435432b7c4655133e0a3859b5f90dd
(7) 213ce425a009885e47e76421a9255613b4f27a72a6631a6b40c5118f04ab8c69
(8) abe29b002968699b4aabd9da5f54b060a62c27b7792e1249ad29953685f72bb1
(9) 17941b2aea95a9442ab471bb8d4de246a698fda5a2ee4ad9f6dc6c7271e67d17
```

Compile and deploy smart contract using migrate
> truffle(develop)> migrate --reset

## step 4
You should configure contract address and account: contract address from migrate result, account from one of free account

Remember: in truffle develop, default port is 9545

Don't exit from truffle development console and open index.html