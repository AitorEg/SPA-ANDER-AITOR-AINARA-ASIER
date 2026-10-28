document.querySelectorAll("#events, #contact, #register").forEach(element => {
    element.hidden = true;
});

document.querySelector("#link-brand").addEventListener("click", (event) => {
    event.preventDefault();
    document.querySelectorAll("a.nav-link").forEach(link => {
        link.classList.remove("active", "bg-primary", "text-white", "rounded", "px-3", "fw-semibold");
    });
    document.querySelector("#link-main").classList.add("active", "bg-primary", "text-white", "rounded", "px-3", "fw-semibold");

    document.querySelector("#main").hidden = false;
    document.querySelectorAll("#events, #contact, #register").forEach(element => {
        element.hidden = true;
    });
});

document.querySelector("#link-main").addEventListener("click", (event) => {
    event.preventDefault();
    document.querySelectorAll("a.nav-link").forEach(link => {
        link.classList.remove("active", "bg-primary", "text-white", "rounded", "px-3", "fw-semibold");
    });
    document.querySelector("#link-main").classList.add("active", "bg-primary", "text-white", "rounded", "px-3", "fw-semibold");

    document.querySelector("#main").hidden = false;
    document.querySelectorAll("#events, #contact, #register").forEach(element => {
        element.hidden = true;
    });
});

document.querySelector("#link-events").addEventListener("click", (event) => {
    event.preventDefault();
    document.querySelectorAll("a.nav-link").forEach(link => {
        link.classList.remove("active", "bg-primary", "text-white", "rounded", "px-3", "fw-semibold");
    });
    document.querySelector("#link-events").classList.add("active", "bg-primary", "text-white", "rounded", "px-3", "fw-semibold");

    document.querySelector("#events").hidden = false;
    document.querySelectorAll("#main, #contact, #register").forEach(element => {
        element.hidden = true;
    });
});

document.querySelector("#link-contact").addEventListener("click", (event) => {
    event.preventDefault();
    document.querySelectorAll("a.nav-link").forEach(link => {
        link.classList.remove("active", "bg-primary", "text-white", "rounded", "px-3", "fw-semibold");
    });
    document.querySelector("#link-contact").classList.add("active", "bg-primary", "text-white", "rounded", "px-3", "fw-semibold");

    document.querySelector("#contact").hidden = false;
    document.querySelectorAll("#events, #main, #register").forEach(element => {
        element.hidden = true;
    });
});

document.querySelector("#link-register").addEventListener("click", (event) => {
    event.preventDefault();
    document.querySelectorAll("a.nav-link").forEach(link => {
        link.classList.remove("active", "bg-primary", "text-white", "rounded", "px-3", "fw-semibold");
    });
    document.querySelector("#link-register").classList.add("active", "bg-primary", "text-white", "rounded", "px-3", "fw-semibold");

    document.querySelector("#register").hidden = false;
    document.querySelectorAll("#events, #contact, #main").forEach(element => {
        element.hidden = true;
    });
});