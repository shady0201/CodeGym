let i, j;
let table = "<table border=1 width=auto cellspacing=0 cellpadding=12>";

for (i = 1; i <= 10; i++) {
    table = table + "<tr>";
    for (j = 1; j <= 10; j++) {
        table = table + "<td>" + j + " x " + i + " = " + i * j + "</td>";
    }
    table = table + "</tr>";
}
table = table + "</table>";
document.write(table);
console.log(table);