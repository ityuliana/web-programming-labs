let names = ["Bill", "John", "Jen", "Jason", "Paul", "Frank", "Steven", "Larry", "Paula", "Laura", "Jim"];

for (let i = 0; i < names.length; i++){
    if(names[i].charAt(0).toLowerCase() == 'j'){
        a(names[i]);
    }else{
        b(names[i]);
    }
    
       let last = names[i].charAt(names[i].length - 1).toLowerCase();
       if(last === 'a' || last === 'e' || last === 'i' || last === 'o' || last === 'u' || last === 'y'){
        console.log('Так, є голосна в останньому літері')
    }else{
        console.log('Ні, нема голосної в останній літері')
    }
}  
 
