(function() {
  'use strict';


  angular.module('app')
    .component('landing', {
      controller: LandingController,
      templateUrl: '/js/landing/landing.template.html'
    });

    LandingController.$inject = ['$http', '$state', '$stateParams'];

    function LandingController($http, $state, $stateParams){
      const vm = this;

      vm.$onInit = onInit;
      vm.navigateNovels = navigateNovels;

      function navigateNovels() {
        $state.go('novels');
      }

      function onInit() {
        console.log("Landing is lit");
        let landingPic = document.getElementById('landingPic');
        landingPic.setAttribute("style", "opacity: 0.2; filter: hue-rotate(60deg);");
        setTimeout(()=>{
          landingPic.setAttribute("style", "opacity: 1; filter: hue-rotate(0deg); transition: all 1s linear;");
        }, 200)



      }

    }

}());
