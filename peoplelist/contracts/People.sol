pragma solidity ^0.4.19;

contract People {

	// define an array that will contain the Person structs
	Person[] public people;

	struct Person {
		bytes32 firstName;
		bytes32 lastName;
		uint age;
	}

	// using 'returns' is helpful 
	// a function can take a string and convert from bytecode for us, but we are going to specify bytes32
	function addPerson(bytes32 _firstName, bytes32 _lastName, uint _age) public returns (bool added) {

		// EVM has memory to store state variables
		// create struct in memory before adding to array
		// this stage does not change state, so it does not cost gas
		// you can create a constant function that does not change state
		Person memory newPerson;
		newPerson.firstName = _firstName;
		newPerson.lastName = _lastName;
		newPerson.age = _age;

		// push() changes state by adding to an array
		// costs gas
		people.push(newPerson);
		return true;

	}

	// accessor/getter from array
	// functions can not return a struct.
	// return an array of strings (firstName, lastName), and an array of ages.
	function getPeople() public constant returns (bytes32[],bytes32[],uint[]) {
		// creating an array of strings can be an issue if they are of different lengths.
		// change strings to a fixed length and pad with spaces => bytes32

		uint length = people.length;
		// initialize storage pointer
		bytes32[] memory firstNames = new bytes32[](length);
		bytes32[] memory lastNames = new bytes32[](length);
		uint[] memory ages = new uint[](length);

		for (uint i=0; i < people.length; i++) {
			// create a new Person structure in memory
			// populate it with the element of the array in focus
			// feed the properties of the structure from memory into an output array
			Person memory currentPerson;
			currentPerson = people[i];

			firstNames.push(currentPerson.firstName);
			lastNames.push(currentPerson.lastName);
			ages.push(currentPerson.age);

		}
 
		// tuple: multiple outputs
		return (firstNames, lastNames, ages);

	}

}