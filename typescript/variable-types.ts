let x = 6,
    y = 0.19,
    lang = "Typescript",
    truth =  true;

let a: number,
    b: number = -4.3,
    framework: string = "Angular",
    lie: boolean = false;

// a = "32";

let cartoons: string[] = ["Aladdin", "Peter Pan", "Lion King"],
    years: Array<number> = [1998, 1987, 1972],
    everything: Array<any> = ["Disney", 2018, true];

let tuple: [string, boolean] = ["English subtitles", true];

console.log(tuple[0] + ":" + tuple[1]);

enum Lang {Eng, Fra, Ita};
let language: Lang = Lang.Eng;

console.log(language);

let whatever: any;

whatever = 5.5;
whatever = "Oh, whatever...";
whatever = false;

console.log(whatever);
