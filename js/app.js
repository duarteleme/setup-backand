var app = angular.module('nutrica', ['ngRoute', 'backand']);

// Configuração das Rotas

app.config(function (BackandProvider) {
      BackandProvider.setAppName('nutrica');
      BackandProvider.setSignUpToken('0705f69b-7a9d-411e-9470-cdc5cd848900');
      BackandProvider.setAnonymousToken('b80348c6-3709-440b-ac49-5ad0a100c626');
});

app.config(['$routeProvider', function ($routeProvider) {

    $routeProvider

        .when("/", {templateUrl: "templates/home.html", controller: "HomeCtrl"})
        .when("/sobre", {templateUrl: "templates/sobre.html", controller: "SobreCtrl"})
        .when("/servicos", {templateUrl: "templates/servicos.html", controller: "ServicosCtrl"})
        .when("/precos", {templateUrl: "templates/precos.html", controller: "PrecosCtrl"})

        .when('/404', {templateUrl: "templates/404.html"})
        .otherwise("/404");
}]);