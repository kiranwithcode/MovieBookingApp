// Store the wallet amount to your local storage with key "amount"
let arr = localStorage.getItem("amount");
document.querySelector("#wallet").innerText = arr;
document.querySelector("#add_to_wallet").addEventListener("click",function(){
    arr = JSON.parse(localStorage.getItem("amount")) || 0;
    let Amount = document.querySelector("#amount").value;

    arr+=Number(Amount)
    localStorage.setItem("amount" ,JSON.stringify(arr));
    document.querySelector.innerText = arr;
    window.location.reload()
    
});


document.querySelector("#book_movies").addEventListener("click" , function(){
    window.location.href =  "movies.html";
});
