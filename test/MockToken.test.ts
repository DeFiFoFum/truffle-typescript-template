// @ts-ignore
import { expectRevert, time, ether } from '@openzeppelin/test-helpers';
import { accounts, contract } from '@openzeppelin/test-environment';
import { expect, assert } from 'chai';

// Load compiled artifacts
const MockToken = contract.fromArtifact('MockToken');

describe('MockToken', function () {
  const [minter, alice, bob, carol] = accounts;

  let mock: any;

  beforeEach(async () => {
    mock = await MockToken.new(ether('123456'), { from: minter });

    await mock.transfer(bob, ether('10'), { from: minter });
    await mock.transfer(alice, ether('10'), { from: minter });
    await mock.transfer(carol, ether('10'), { from: minter });
  });

  it('should have accurate supply', async () => {
    assert.equal((await mock.totalSupply()).toString(), ether('123456').toString());
  });

  it('should not transfer more than balance', async () => {
    await expectRevert(
      mock.transfer(bob, ether('11'), { from: alice }), 'ERC20: transfer amount exceeds balance'
    );
  });
});
