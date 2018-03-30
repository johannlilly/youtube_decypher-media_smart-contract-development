# youtube_decypher-media_smart-contract-development
Introduction to Ethereum Smart Contract Development with Solidity

## Syntax change for Truffle v.4

The video series uses a different version of truffle than the current release. The video calls for:

	People.deployed().addPerson("Jordan", "Leigh", 26)

In Truffle v.4, however, the format for getting requires a promise, hence the .then:

	People.deployed().then(function(instance){
		console.log(instance);
	});

If we use this new format, including .then(), we get:

	People.deployed().then(function(instance){
		ppl = instance;
		return ppl.addPerson("Jordan", "Leigh", 26);
	});

A more robust version of this, including error handling, can be written:

	People.deployed().then(function(instance){
		ppl = instance;
		return ppl.addPerson("Jordan", "Leigh", 26);
	}).then(function(result) {
  		console.log("Transaction successful!\n");
  		console.log(result);
	}).catch(function(e) {
		console.log("Error:\n");
		console.log(e);
	});

