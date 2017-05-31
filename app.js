    
    //JSON - Javascript Object Notation
    var employee = [
		{'name' : 'acadgild','age':'25','salary':23423,'city':'Bangalore','state':'Karnataka','pin':560051}, 	/* employee details in json notation */
		{'name' : 'masthan','age':'28','salary':23423,'city':'Bendhakaluru','state':'Karnataka','pin':560021},  /* employee details in json notation */
		{'name' : 'swati','age':'30','salary':38564,'city':'Banglore','state':'Karnataka','pin':560061},    	/* employee details in json notation */
		{'name' : 'guru','age':'32','salary':54756,'city':'Bengaluru','state':'Karnataka','pin':560027},		/* employee details in json notation */
                     ];
   
    /* for loop with elements of json to display on console as array of objects*/
    for (ele in employee) {
        console.log(employee[ele]); /* display objects on console */
    }
	/* for loop with variable i and continue the array objects length */
	for(i=0;i<employee.length;i++) {
		console.log("name of the employee is : " + employee[i].name);		/* display on console about each employee name*/
		console.log("age of the employee is : " + employee[i].age);			/* display on console about each employee age*/
		console.log("salary of the employee is : " + employee[i].salary);	/* display on console about each employee salary*/
		console.log("city of the employee is : " + employee[i].city);		/* display on console about each employee city */
		console.log("state of the employee is : " + employee[i].state);		/* display on console about each employee state */
		console.log("pin of the employee is : " + employee[i].pin);			/* display on console about each employee pin*/
		console.log("================================================")
	  }
		