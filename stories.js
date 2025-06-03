const geschichten = {
    odyssee: `
    <h2>Die Odyssee</h2>
    <p>Die Odyssee erzählt die abenteuerliche Heimreise des Odysseus nach dem Trojanischen Krieg. 
    Er begegnet Zyklopen, Sirenen und Göttern, bevor er endlich seine Heimat Ithaka erreicht.</p>
  `,
    medusa: `
    <h2>Medusa</h2>
    <p>Medusa war einst eine schöne Frau, wurde aber von Athene in ein Monster mit Schlangenhaaren verwandelt. 
    Jeder, der sie ansah, wurde zu Stein. Perseus konnte sie mithilfe eines Spiegels bezwingen.</p>
  `,
    ikarus: `
    <h2>Ikarus</h2>
    <p>Ikarus und sein Vater Daedalus flohen mit selbstgebauten Flügeln aus dem Labyrinth. 
    Trotz Warnung flog Ikarus zu nah an die Sonne – das Wachs schmolz, und er stürzte ins Meer.</p>
  `
};

function zeigeGeschichte(name) {
    const content = document.getElementById('content');
    content.innerHTML = geschichten[name];
}
