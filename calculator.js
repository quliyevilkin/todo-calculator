let string= ""; // bir string yaradirig
let buttons=document.querySelectorAll('.button'); // button duymesini buttons deyisenine tanidiriq
Array.from(buttons).forEach((button)=>{ // buttons deyiskenlerini bir array a aktarir ve bir bir deyerlerin altda ki funksiyaya tetbiq edir foreach vasites ile;
    button.addEventListener('click',(e)=>{ // button duymesine basdigda asagidaki funksiyani edir
        if(e.target.innerHTML == "="){ // stringde ne vaxt deyer = oldu bu funksiyani ise salir 
            string= eval(string); // bu funksiya stringi oxuyur ve orda yazilan funksiyani yerine yetirir. 
            document.querySelector('input').value = string; // neticeni inputa yeni netice setrine verir

        }
        else if(e.target.innerHTML == 'AC'){ // AC ni basanda silsin deye 
            string= "";
            document.querySelector('input').value = string; // yuxaridakini ekrana yazdirir

        }
        else if(e.target.innerHTML == 'CE'){ // CE ni basanda bu olur
            string= string.substring(0, string.length - 1); // CE ni basanda en sondaki qiymet silinir 
            document.querySelector('input').value = string; // yuxaridakini ekrana yazdirir

        }
        else{ // eger "=" button'u sixilmayibsa bunu edir
            console.log(e.target); // yoxlamah ucun yazilib 
            string = string + e.target.innerHTML; // deyisen de beraber qoyulmadan evvelki ededleri ve "+" "-" "/ " "*" isarelerini stringe elave edir
            document.querySelector('input').value = string; // yuxaridakini ekrana yazdirir
        }

    })
})