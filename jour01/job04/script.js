// Programme pour vérifier si l'année est bissextile
function bissextile(year) {

    // getDate pour vérifier l'année entrée
    const leap = new Date(year, 1, 29).getDate() === 29;
    if (leap) {
        console.log(year + " est une année bissextile.")
    } else {
        console.log(year + " n'est pas une année bissextile.")
    }
}

// champ d'input
const year = prompt("Insérez une année : ");

bissextile(year);