document.getElementById("hamburger-nav").onclick = function(){
    
    
    document.getElementById("hamburger-close-btn").classList.toggle("menu-close-btn");
    document.getElementById("hamburger-open-btn").classList.toggle("menu-open-btn");
    document.getElementById("main-nav").classList.toggle("menu-showing");
};


document.getElementById("search-btn").onclick = function(){

    document.getElementById("search-box").classList.toggle("search-box-hidden");
    document.getElementById("search-box").focus();

};

document.getElementById("search-txt").onclick = function(){

    document.getElementById("search-box").classList.toggle("search-box-hidden");
    document.getElementById("search-box").focus();

};