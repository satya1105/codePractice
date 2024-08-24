let s = "s,a,t,y,a"
let t = "s,a,t,y,a"

function anagram(s,t){

    if(s.length !== t.length){ 

     a= s.split("").sort().join("")
     b= t.split("").sort().join("")
     if(a === b){
         return true
     }

    }else {
        return false
    }
}