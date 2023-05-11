//object
let output = document.querySelector(".output");


const book= {
    //properties
    title:'Donald Duck',
    author:'Disney',
    publisher:'jan',
    year:'2000',
    price:'€5', 
};
output.innerHTML = `
<p>${book.title}</p>
<p>${book.author}</p>
<p>${book.publisher}</p>
<p>${book.year}</p>
<p>${book.price}</p>


`
