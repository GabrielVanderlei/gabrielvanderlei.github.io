
var app = angular.module('app',['ngRoute']);

app.config(function($routeProvider, $locationProvider)
{
   $locationProvider.html5Mode(false);

   $routeProvider

   // para a rota '/', carregaremos o template home.html e o controller 'HomeCtrl'
   .when('/', {
      templateUrl : 'app/views/home.html',
      controller     : 'Controller',
   })

   // para a rota '/sobre', carregaremos o template sobre.html e o controller 'SobreCtrl'
   .when('/quem-sou-eu', {
      templateUrl : 'app/views/quem-sou-eu.html',
      controller  : 'Controller',
   })

   .when('/meus-trabalhos', {
      templateUrl : 'app/views/meus-trabalhos.html',
      controller  : 'Controller',
   })

   .when('/contato', {
      templateUrl : 'app/views/contato.html',
      controller  : 'Controller',
   })

   // caso não seja nenhum desses, redirecione para a rota '/'
   .otherwise ({ redirectTo: '/' });
});
