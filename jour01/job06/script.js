function fizzbuzz() {

    const num1 = 3;
    const num2 = 5;

    for (let a = 1; a < 152; a++) {
        console.log(a);
        if (a % num1 === 0 && a % num2 === 0)
        {console.log("Fizzbuzz"); continue
        }
        if (a % num1 === 0)
        {console.log("Fizz")
        }
        if (a % num2 === 0)
        {console.log("Buzz")
        }
        
    }

}

fizzbuzz()