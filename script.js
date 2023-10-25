const jmeno =prompt("Zadejte sve jmeno bez diakritiky.").trim()
const prijmeni =prompt("Zadejte sve prijmeni bez diakritiky.").trim()
const domena = "fit.cvut.cz"

const email = prijmeni.slice (0, 5) + jmeno.slice (0, 3) + "@" + domena

document.body.innerHTML = "<p>Tento email vám byl přidělen: " + email.toLowerCase() + "</p>"