
$("#mbut").on("click touch", function(){$(".mnav").toggle()});

app.controller('Controller', function($rootScope, $location)
{
    if(window.innerWidth < 900){
        $("#content *").on("click touch", function(){$(".mnav").css("display", "none")});
    }
    
    /** 
    Email.send({
        SecureToken : "f44bcba5-502a-419e-b4be-3ad7fabb8bd5",
        To : 'contato@vanderlei.ga',
        From : "contato@vanderlei.ga",
        Subject : "Contato",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );**/

    //setTimeout('$("#content").css("opacity", 1)', 10);

    var titleVar = {
        "/": "Por que ter um site? | vanderlei.ga",
        "/index.html": "Gabriel Vanderlei | vanderlei.ga",
        "/quem-sou-eu": "Quem sou eu? | vanderlei.ga",
        "/meus-trabalhos": "Portfólio | vanderlei.ga",
        "/contato": "Contato | vanderlei.ga",
    };

    document.title = titleVar[$location.path()];

    gtag('config', 'UA-132888969-1',  {
        'page_title' : titleVar[$location.path()],
        'page_path': $location.path()
    });

    $rootScope.activetab = $location.path();
    $rootScope.products = [];
    $rootScope.socials = [];

    $rootScope.products.push({
        "image": "assets/img/portfolio/institutoidv.png",
        "url": "institutoidv.org",
        "title": "Site do Instituto Internacional Despertando Vocações"
    });
    
    $rootScope.products.push({
        "image": "assets/img/portfolio/pdv.png",
        "url": "programadespertandovocacoes.com.br",
        "title": "Site do Programa Despertando Vocações"
    });
    
    $rootScope.products.push({
        "image": "assets/img/portfolio/cointer-pdvagro.png",
        "url": "cointer-pdvagro.com.br",
        "title": "Site do Congresso Internacional do PDVAgro"
    });
    
    $rootScope.products.push({
        "image": "assets/img/portfolio/cointer-pdvl.png",
        "url": "cointer-pdvl.com.br",
        "title": "Site do Congresso Internacional do PDVL"
    });
    
    $rootScope.products.push({
        "image": "assets/img/portfolio/cointer-pdvg.png",
        "url": "cointer-pdvg.com",
        "title": "Site do Congresso Internacional do PDVG"
    });

    $rootScope.products.push({
        "image": "assets/img/portfolio/smart-pdvagro.png",
        "url": "cointer-pdvg.com",
        "title": "SMART PDVAgro"
    });

    $rootScope.products.push({
        "image": "assets/img/portfolio/smart-pdvg.png",
        "url": "cointer-pdvg.com",
        "title": "SMART PDVG"
    });

    $rootScope.products.push({
        "image": "assets/img/portfolio/smart-pdvl.png",
        "url": "cointer-pdvg.com",
        "title": "SMART PDVL"
    });

    $rootScope.products.push({
        "image": "assets/img/portfolio/roleta-atomica.png",
        "url": "https://play.google.com/store/apps/details?id=com.iidv.roleta_atomica",
        "title": "Aplicativo educacional Roleta Atômica"
    });

    // #
    $rootScope.socials.push({
        "image": "assets/img/social/instagram.png",
        "url":"http://www.instagram.com/vanderlei.ga",
        "user": "@vanderlei.ga"
    });
    
    $rootScope.socials.push({
        "image": "assets/img/social/email.png",
        "url":"mailto:contato@vanderlei.ga",
        "user": "contato@vanderlei.ga"
    });

});














