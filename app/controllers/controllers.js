
$("#mbut").on("click touch", function(){$(".mnav").toggle()});

app.controller('Controller', function($rootScope, $location)
{
    if(window.innerWidth < 600){
        $("#content *").on("click touch", function(){$(".mnav").css("display", "none")});
    }
    
    //setTimeout('$("#content").css("opacity", 1)', 10);

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














