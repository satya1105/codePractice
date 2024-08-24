let s = "s,a,t,y,a";
let t = "s,a,t,a,y";

function anagram(s, t) {
    if (s.length !== t.length) {
        return false;
    }

    let a = s.split("").sort().join("");
    let b = t.split("").sort().join("");

    if (a === b) {
        return true;
    } else {
        return false;
    }
}

console.log(anagram(s, t));
