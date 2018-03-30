contract People {

	// define an array that will contain the Person structs
	Person[] public people;

	struct public Person {
		string firstName;
		string lastName;
		uint age;
	}

	// using 'returns' is helpful 
	function addPerson(string _firstName, string _lastName, uint _age) returns (bool added) {

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
	function getPeople() constant returns (string[],string[],uint[]) {
		// creating an array of strings can be an issue if they are of different lengths.
		// change strings to a fixed length and pad with spaces.
	}

}