let apples = 20; //0
let oranges = 30;
let areApplesAndOrangesTheSame = apples === oranges;
console.log({ areApplesAndOrangesTheSame }); //1

let areApplesAndOrangesNotTheSame = apples !== oranges;
console.log({ areApplesAndOrangesNotTheSame }); //2

let areApplesBiggerThanOranges = apples > oranges;
console.log({ areApplesBiggerThanOranges }); //3

let areApplesSmalerOrSameThanOranges = apples <= oranges;
console.log({ areApplesSmalerOrSameThanOranges }); //4

let areOrangesBiggerThanApples = oranges > apples;
console.log({ areOrangesBiggerThanApples }); //5

let mangos = 5;
let mangosMultipliedByApples = mangos * apples;
let mangosPlusOranges = mangos + oranges;
let areMangosMultipliedByApples_GraterThan_MangosPlusOranges =
    mangosMultipliedByApples > mangosPlusOranges;
console.log({ areMangosMultipliedByApples_GraterThan_MangosPlusOranges }); //6

let mangosMinusAples = mangos - apples;
let orangesDividedByMangos = oranges / mangos;
let areMangosMinusAples_smallerThen_orangesDividedByMangos =
    mangosMinusAples < orangesDividedByMangos;
console.log({ areMangosMinusAples_smallerThen_orangesDividedByMangos }); //7

let areMangosApplesOrangesTheSame = (mangos === apples) === oranges;
console.log({ areMangosApplesOrangesTheSame }); //8

let restOfApplesDividedByMangos = apples % mangos;

let restOrangesDividedByMangos = oranges % mangos;
let restOfApplesDividedByMangos_same_restOrangesDividedByMangos =
    restOfApplesDividedByMangos === restOrangesDividedByMangos;
console.log({ restOfApplesDividedByMangos_same_restOrangesDividedByMangos }); //9

let mangosPlusApples = mangos + apples;
let orangesMinusMangos = oranges - mangos;
let areMangosPlusApples_graterThan_orangesMinusMangos =
    mangosPlusApples > orangesMinusMangos;
console.log({ areMangosPlusApples_graterThan_orangesMinusMangos }); //10
