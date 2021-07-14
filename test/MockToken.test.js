const { expectRevert, time, ether } = require('@openzeppelin/test-helpers');
const { accounts, contract } = require('@openzeppelin/test-environment');
const { expect, assert } = require('chai');

// Load compiled artifacts
const MockToken = contract.fromArtifact('MockToken');

describe('MockToken', function () {
  const [minter, alice, bob, carol] = accounts;
  
  beforeEach(async () => {
    this.mock = await MockToken.new(ether('123456'), { from: minter });

    await this.mock.transfer(bob, ether('10'), { from: minter });
    await this.mock.transfer(alice, ether('10'), { from: minter });
    await this.mock.transfer(carol, ether('10'), { from: minter });
  });

  it('should have accurate supply', async () => {
    assert.equal((await this.mock.totalSupply()).toString(), ether('123456').toString());
  });

  it('should not transfer more than balance', async () => {
    await expectRevert(
      this.mock.transfer(bob, ether('11'), { from: alice }), 'ERC20: transfer amount exceeds balance'
    );
  });
});
