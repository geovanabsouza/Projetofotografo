// MENU HAMBÚRGUER
function toggleMenu() {
    document
        .getElementById("menu")
        .classList.toggle("active");
}

//LOGIN FALSO

function login(event) {
    event.preventDefault();

    const senha = document.getElementById("senha").value;
    const erro = document.getElementById("erro");

    if (senha === "anaelucas") {

        // redireciona para a galeria
        window.location.href = "areadocliente.html";

    } else {

        erro.textContent = "Senha incorreta!";
        erro.style.color = "red";

    }
}

// BOTÃO VOLTAR AO TOPO
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {
        backToTop.classList.add("show");
    } else {
        backToTop.classList.remove("show");
    }

});

backToTop.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

// FILTROS DA GALERIA
document.addEventListener("DOMContentLoaded", () => {

    const buttons = document.querySelectorAll(".filters button");
    const items = document.querySelectorAll(".gallery .item");

    buttons.forEach(button => {

        button.addEventListener("click", () => {

            buttons.forEach(btn => {
                btn.classList.remove("active");
            });

            button.classList.add("active");

            const filter = button.dataset.filter;

            items.forEach(item => {

                if (
                    filter === "all" ||
                    item.classList.contains(filter)
                ) {
                    item.style.display = "block";
                } else {
                    item.style.display = "none";
                }

            });

        });

    });

});