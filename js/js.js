//Functiones cambio idiomas
//Variables generales
const linkMenu1 = document.getElementById("linkMenu1");
const linkMenu2 = document.getElementById("linkMenu2");
const linkMenu3 = document.getElementById("linkMenu3");
const linkMenu4 = document.getElementById("linkMenu4");
const linkMenu5 = document.getElementById("linkMenu5");
const linkMenu6 = document.getElementById("linkMenu6");
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
    linkMenu6.innerHTML = "Interesos";
    txtSobreMi.innerHTML = "Soc Miquel Arrom, tècnic superior de programació web, multiplataforma i especialitzat en big data i intel·ligència artificial.. Actualment, em dedico a crear pàgines per a clients que cerquen solucions intuïtives. La meva idea, però, és continuar amb la meva formació professional a través del treball en grup, i sobretot, amb gent que ja tingui experiència en aquest camp. En aquesta pàgina web podreu veure els treballs que he dut a terme, els meus coneixements i aptituds i dades de contacte.";
    txtWeb.innerHTML = "CICLE FORMATIU DE GRAU SUPERIOR EN DESENVOLUPAMENT D'APLICACIONS WEB";
    txtMulti.innerHTML = "CICLE FORMATIU DE GRAU SUPERIOR EN DESENVOLUPAMENT D'APLICACIONS MULTIPLATAFORMA";
    txtBig.innerHTML = "CURS D'ESPECIALITZACIÓ EN INTEL·LIGÈNCIA ARTIFICIAL I BIG DATA"
    txtIdiom.innerHTML = "IDIOMES";
    txtNativCat.innerHTML = "Nivell Natiu";
    txtNativEsp.innerHTML = "Nivell Natiu";
    txtNativIng.innerHTML = "Nivell Mitjà";
    titleExp.innerHTML = "EXPERIÈNCIA LABORAL";
    txtExperiencia.innerHTML = "Desenvolupament de dues aplicacions web en solitari per a dues empreses petites";
    txtExp1.innerHTML = "Empresa petita de Fisioteràpia Holística";
    txtExp2.innerHTML = "Empresa petita de Construcció";
    titleAptitudes.innerHTML = "APTITUDS ADQUIRIDES";
    titleInteres.innerHTML = "INTERESOS ACTUALS"
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
    linkMenu6.innerHTML = "Intereses";
    txtSobreMi.innerHTML = "Soy Miquel Arrom, técnico superior de programación web, multiplataforma y especializado en big data e inteligencia artifical.. Actualmente me dedico a crear páginas para clientes que buscan soluciones intuitivas. Sin embargo, mi idea es continuar con mi formación profesional a través del trabajo en grupo, y sobre todo, con gente que ya tenga experiencia en este campo. En esta página web podrás ver los trabajos que he llevado a cabo, mis conocimientos y aptitudes y datos de contacto.";
    txtWeb.innerHTML = "CICLO FORMATIVO DE GRADO SUPERIOR EN DESARROLLO DE APLICACIONES WEB";
    txtMulti.innerHTML = "CICLO FORMATIVO DE GRADO SUPERIOR EN DESARROLLO DE APLICACIONES MULTIPLATAFORMA";
    txtBig.innerHTML = "CURSO DE ESPECIALIZACIÓN EN INTELIGENCIA ARTIFICIAL Y BIG DATA"
    txtIdiom.innerHTML = "IDIOMAS";
    txtNativCat.innerHTML = "Nivel Nativo";
    txtNativEsp.innerHTML = "Nivel Nativo";
    txtNativIng.innerHTML = "Nivel Medio";
    titleExp.innerHTML = "EXPERIENCIA LABORAL";
    txtExperiencia.innerHTML = "Desarrollo de dos aplicacions web en solitario para dos empresas pequeñas";
    txtExp1.innerHTML = "Empresa pequeña de Fisioterapia Holística";
    txtExp2.innerHTML = "Empresa pequeña de Contrucción";
    titleAptitudes.innerHTML = "APTITUDES ADQUIRIDAS";
    titleInteres.innerHTML = "INTERESES ACTUALES"
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
    linkMenu6.innerHTML = "Interests";
    txtSobreMi.innerHTML = "I'm Miquel Arrom, web programming technician, multi-platform and specialized in big data and artificial intelligence. Currently I am dedicated to create web pages for clients who are looking for intuitive solutions. However, my idea is to continue with my professional training through group work, and above all, with people who already have experience in this field. In this website you will be able to see the work I have done, my knowledge and skills and contact details.";
    txtWeb.innerHTML = "HIGHER LEVEL TRAINING CYCLE IN WEB APPLICATION DEVELOPMENT";
    txtMulti.innerHTML = "HIGHER LEVEL TRAINING CYCLE IN MULTIPLATFORM APPLICATION DEVELOPMENT";
    txtBig.innerHTML = "SPECIALIZATION COURSE IN ARTIFICIAL INTELLIGENCE AND BIG DATA"
    txtIdiom.innerHTML = "LANGUAGES";
    txtNativCat.innerHTML = "Native Level";
    txtNativEsp.innerHTML = "Native Level";
    txtNativIng.innerHTML = "Medium Level";
    titleExp.innerHTML = "WORK EXPERIENCE";
    txtExperiencia.innerHTML = "Development of two alone web applications for two small companies";
    txtExp1.innerHTML = "Small Holistic Physical Therapy Company";
    txtExp2.innerHTML = "Small Construction Company";
    titleAptitudes.innerHTML = "ACQUIRED SKILLS";
    titleInteres.innerHTML = "CURRENT INTERESTS"
    txtApt1.innerHTML = "Programming Languages";
    txtApt2.innerHTML = "Data Bases";
    txtApt3.innerHTML = "Frameworks and Libraries";
    txtApt4.innerHTML = "Operating Systems";
    txtApt5.innerHTML = "Tools";
}
/* Cambio boton borde inferior */
function setActiveButton(buttonId) {
    var buttons = document.querySelectorAll('button');
    buttons.forEach(function(button) {
        if (button.id === buttonId) {
            button.classList.add('active-button');
        } else {
            button.classList.remove('active-button');
        }
    });
}

function buttonClickCat(cat) {
    canviIdiomCat();
    setActiveButton(cat);
}

function buttonClickEsp(esp) {
    canviIdiomEsp();
    setActiveButton(esp);
}

function buttonClickIng(ing) {
    canviIdiomIng();
    setActiveButton(ing);
}

function changeLang(){
    var userLang = navigator.language || navigator.userLanguage;
    console.log(userLang)
    if (userLang === "es" || userLang === "es-ES") {
        document.documentElement.lang = "es";
        canviIdiomEsp()
        document.getElementById("esp").classList.add('active-button');
    } else if (userLang === "ca" || userLang === "ca-ES") {
        document.documentElement.lang = "ca";
        canviIdiomCat()
        document.getElementById("cat").classList.add('active-button');
    } else {
        document.documentElement.lang = "en";
        canviIdiomIng()
        document.getElementById("ing").classList.add('active-button');
}
}

function AnyActualitzat(){
    const d = new Date();
    document.getElementById("dataAny").innerHTML = d.getFullYear();
};

window.onload = function() {
    changeLang()
}