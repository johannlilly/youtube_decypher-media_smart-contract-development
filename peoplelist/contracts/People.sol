contract People {

	// define an array that will contain the Person structs
	Person[] public people;

	struct public Person {
		string firstName;
		string lastName;
		uint age;
	}

}