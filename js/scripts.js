/*!
* Start Bootstrap - Creative v7.0.6 (https://startbootstrap.com/theme/creative)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-creative/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // Activate SimpleLightbox plugin for portfolio items
    new SimpleLightbox({
        elements: '#portfolio a.portfolio-box'
    });

    $(function(){
        $('.selectpicker').selectpicker();
    });

});

//Toolpid (alt image)
$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip();
});

//Functions cambio idiomas
//Variables generales
const linkMenu1 = document.getElementById("linkMenu1");
const linkMenu2 = document.getElementById("linkMenu2");
const linkMenu3 = document.getElementById("linkMenu3");
const linkMenu4 = document.getElementById("linkMenu4");
const linkMenu5 = document.getElementById("linkMenu5");
const txtSobreMi = document.getElementById("txtSobreMi");
const txtWeb = document.getElementById("txtWeb");
const txtMulti = document.getElementById("txtMulti");
const txtIdiom = document.getElementById("txtIdiom");
const txtNativCat = document.getElementById("txtNativCat");
const txtNativEsp = document.getElementById("txtNativEsp");
const txtNativIng = document.getElementById("txtNativIng");
const titleExp = document.getElementById("titleExp");
const txtExperiencia = document.getElementById("txtExperiencia");
const txtExp1 = document.getElementById("txtExp1");
const txtExp2 = document.getElementById("txtExp2");
const titleAptitudes = document.getElementById("titleAptitudes");
const txtApt1 = document.getElementById("txtApt1");
const txtApt2 = document.getElementById("txtApt2");
const txtApt3 = document.getElementById("txtApt3");
const txtApt4 = document.getElementById("txtApt4");
const txtApt5 = document.getElementById("txtApt5");

function canviIdiomCat(){
    linkMenu1.innerText = "Presentació";
    linkMenu2.innerText = "Formació";
    linkMenu3.innerText = "Experiència";
    linkMenu4.innerText = "Aptituds";
    linkMenu5.innerText = "Presentació";
    txtSobreMi.innerHTML = "Soc Miquel Arrom, tècnic superior de programació web. Actualment, em dedico a crear pàgines per a clients que cerquen solucions intuïtives. La meva idea, però, és continuar amb la meva formació professional a través del treball en grup, i sobretot, amb gent que ja tingui experiència en aquest camp. En aquesta pàgina web podreu veure els treballs que he dut a terme, els meus coneixements i aptituds i dades de contacte.";
    txtWeb.innerHTML = "CICLE FORMATIU DE GRAU SUPERIOR EN DESENVOLUPAMENT D'APLICACIONS WEB";
    txtMulti.innerHTML = "CICLE FORMATIU DE GRAU SUPERIOR EN DESENVOLUPAMENT D'APLICACIONS MULTIPLATAFORMA";
    txtIdiom.innerHTML = "IDIOMES";
    txtNativCat.innerHTML = "Nivell Natiu";
    txtNativEsp.innerHTML = "Nivell Natiu";
    txtNativIng.innerHTML = "Nivell Mitjà";
    titleExp.innerHTML = "EXPERIÈNCIA LABORAL";
    txtExperiencia.innerHTML = "Desenvolupament de dues aplicacions web en solitari per a dues empreses petites";
    txtExp1.innerHTML = "Empresa petita de Fisioteràpia Holística";
    txtExp2.innerHTML = "Empresa petita de Construcció";
    titleAptitudes.innerHTML = "APTITUDS ADQUIRIDES";
    txtApt1.innerHTML = "Llenguatges de Programació";
    txtApt2.innerHTML = "Bases de Dades";
    txtApt3.innerHTML = "Frameworks i Llibreries";
    txtApt4.innerHTML = "Sistemes Operatius";
    txtApt5.innerHTML = "Eines";
}

function canviIdiomEsp(){
    linkMenu1.innerText = "Sobre mi";
    linkMenu2.innerText = "Formación";
    linkMenu3.innerText = "Experiencia";
    linkMenu4.innerText = "Aptitudes";
    linkMenu5.innerText = "Sobre mi";
    txtSobreMi.innerHTML = "Soy Miquel Arrom, técnico superior de programación web. Actualmente me dedico a crear páginas para clientes que buscan soluciones intuitivas. Sin embargo, mi idea es continuar con mi formación profesional a través del trabajo en grupo, y sobre todo, con gente que ya tenga experiencia en este campo. En esta página web podrás ver los trabajos que he llevado a cabo, mis conocimientos y aptitudes y datos de contacto.";
    txtWeb.innerHTML = "CICLO FORMATIVO DE GRADO SUPERIOR EN DESARROLLO DE APLICACIONES WEB";
    txtMulti.innerHTML = "CICLO FORMATIVO DE GRADO SUPERIOR EN DESARROLLO DE APLICACIONES MULTIPLATAFORMA";
    txtIdiom.innerHTML = "IDIOMAS";
    txtNativCat.innerHTML = "Nivel Nativo";
    txtNativEsp.innerHTML = "Nivel Nativo";
    txtNativIng.innerHTML = "Nivel Medio";
    titleExp.innerHTML = "EXPERIENCIA LABORAL";
    txtExperiencia.innerHTML = "Desarrollo de dos aplicacions web en solitario para dos empresas pequeñas";
    txtExp1.innerHTML = "Empresa pequeña de Fisioterapia Holística";
    txtExp2.innerHTML = "Empresa pequeña de Contrucción";
    titleAptitudes.innerHTML = "APTITUDES ADQUIRIDAS";
    txtApt1.innerHTML = "Lenguajes de Programación";
    txtApt2.innerHTML = "Bases de Datos";
    txtApt3.innerHTML = "Frameworks y Librerías";
    txtApt4.innerHTML = "Sistemas Operativos";
    txtApt5.innerHTML = "Herramientas";
}

function canviIdiomIng(){
    linkMenu1.innerText = "About me";
    linkMenu2.innerText = "Formation";
    linkMenu3.innerText = "Experience";
    linkMenu4.innerText = "Skills";
    linkMenu5.innerText = "About me";
    txtSobreMi.innerHTML = "I'm Miquel Arrom, web programming technician. Currently I am dedicated to create web pages for clients who are looking for intuitive solutions. However, my idea is to continue with my professional training through group work, and above all, with people who already have experience in this field. In this website you will be able to see the work I have done, my knowledge and skills and contact details.";
    txtWeb.innerHTML = "HIGHER LEVEL TRAINING CYCLE IN WEB APPLICATION DEVELOPMENT";
    txtMulti.innerHTML = "HIGHER LEVEL TRAINING CYCLE IN MULTIPLATFORM APPLICATION DEVELOPMENT";
    txtIdiom.innerHTML = "LANGUAGES";
    txtNativCat.innerHTML = "Native Level";
    txtNativEsp.innerHTML = "Native Level";
    txtNativIng.innerHTML = "Medium Level";
    titleExp.innerHTML = "WORK EXPERIENCE";
    txtExperiencia.innerHTML = "Development of two alone web applications for two small companies";
    txtExp1.innerHTML = "Small Holistic Physical Therapy Company";
    txtExp2.innerHTML = "Small Construction Company";
    titleAptitudes.innerHTML = "ACQUIRED SKILLS";
    txtApt1.innerHTML = "Programming Languages";
    txtApt2.innerHTML = "Data Bases";
    txtApt3.innerHTML = "Frameworks and Libraries";
    txtApt4.innerHTML = "Operating Systems";
    txtApt5.innerHTML = "Tools";
}