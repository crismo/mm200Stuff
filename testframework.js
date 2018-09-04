
const Tester = {};

Tester.runTests = function(testName, tests){
    
    let pas = 0;
    let fail = []

    tests.forEach(test => {
        
        try{
            test();
            pas++;
        } catch(err){
            fail.push(err);
        }

    });

    console.log(`Test summary: ${testName}\n\n${pas} tests parsed\n${fail.length} tests failed`);
    
    if(fail.length > 0){
        fail.forEach(err => {
            let stack = err.stack.split("at"); // Hackish.
            console.error(`Test failed at ${stack[stack.length-1]}`);
        })

    } 
        
    
}


Tester.isEqual = function(input, expexted){
	let res = input === expexted;
	if(!res){
		throw Error("is not equal");
	}
	return res;
}
