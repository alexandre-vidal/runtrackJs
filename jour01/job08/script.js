function sommeNombresPremiers(num1, num2) {

    let flag1 = true, flag2 = true;
    const sum = +num1 + +num2;

    for (i = 2; i <= num1 - 1; i++) {
        if (num1 % i == 0) {
            flag1 = false;
            console.log("Le premier nombre n'est pas un nombre premier");
            break;
        }
    }

    for (i = 2; i <= num2 - 1; i++) {
        if (num2 % i == 0) {
            flag2 = false;
            console.log("Le deuxième nombre n'est pas un nombre premier");
            break;
        }
    }

    if (flag1 == true && flag2 == true)
        console.log(sum)
}

sommeNombresPremiers(prompt("Entrez un premier nombre :"), prompt("Entrez un deuxième nombre :"))