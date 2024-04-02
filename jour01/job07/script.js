function jourTravaille(currentDate) {

    const month = currentDate.getMonth() + 1;
    const day = currentDate.getDate();

    const holidays = {
        "1/1" : "Jour de l'an",
        "1/5" : "Fête du Travail",
        "8/5" : "Victoire de 1945",
        "14/7" : "Révolution française",
        "11/11" : "Armistice de 1918",
        "25/12" : "Noël"
    };

    const formattedDate = `${day}/${month}`;

    if (formattedDate in holidays) {
        console.log("La date entrée est un jour férié.")
    } else {
        console.log("La date entrée n'est pas un jour férié.")
    }
}

const currentDate = new Date(prompt('Entrez une date comme suit : MM JJ AAAA'));
const todayIsHoliday = jourTravaille(currentDate);