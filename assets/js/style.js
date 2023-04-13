// var a=prompt("Dil seçin")
// switch (a) {
//     case "az":
//         alert("Azərbaycan dili seçildi");
//         break;
//     case "ru":
//         alert("Rus dili seçildi");
//         break;
//     case "en":
//         alert("Ingilis dili seçildi")
//         break
//     default:
//         alert("Yalnış sorğu!")
//         break;
// }

// var num=prompt("Ədəd daxil edin!");
// if(num>0 && num<100){
//     var teklik=num%10
// var onluq=(num-teklik)/10
// var sum=teklik+onluq
//     alert(sum)
// }
// else{
//     alert("Düzgün dəyər daxil edin!")
// }


// var num=prompt("Ədəd daxil edin!");
// if(num<2){
//     alert("Ədəd 1-dən böyük olmalıdır!")
// }
// else if(num==2) {
//     alert("Sadə ədəddir")
// }
// else{
//    a=num
//    i=2
//    m=true
//     while (i<=num) {
//         if(num%i==0){
//             alert("Mürəkkəb ədəddir")
//         }
        
//         m=false
//         break
//     }
// }


// num=prompt("Ədəd daxil edin!");
// if(num>0 && num<100)
// while(num) {
//     teklik=num%10
//     onluq=(num-teklik)/10
//     sum=teklik+onluq
//     alert(sum)
//   m=false
//   break
// }
// else{
//     alert("duzgun deyer daxil edin")
// }

var num=prompt("Ədəd daxil edin!");
var teklik=num%10
var onluq=(num-teklik)/10
if(num>9 && num<100){
if( teklik!=onluq){
    alert("beraber deyil")
} 
else if(teklik=onluq){
    alert("beraberdir")
}
}
else{
    alert("Düzgün dəyər daxil edin!")
}