
const openMobileMenu =()=> {
    holder = document.getElementById("holder");
    holder.classList.add("active");
}

const closeMobileMenu=()=> {
    holder = document.getElementById("holder");
    holder.classList.remove("active");
}

document.getElementById("date").innerHTML = new Date().getFullYear();