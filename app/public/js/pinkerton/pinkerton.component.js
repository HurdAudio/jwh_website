(function() {
  'use strict';


  angular.module('app')
    .component('pinkerton', {
      controller: PinkertonController,
      templateUrl: '/js/pinkerton/pinkerton.template.html'
    });

    PinkertonController.$inject = ['$http', '$state', '$stateParams'];

    function PinkertonController($http, $state, $stateParams){
      const vm = this;

      vm.$onInit = onInit;
      vm.navigateLanding = navigateLanding;
      vm.navigateNovels = navigateNovels;
      vm.navigatePinkOpeningPages = navigatePinkOpeningPages;
      vm.navigatePinkEssay = navigatePinkEssay;
      vm.navigateMemoir = navigateMemoir;
      vm.navigageShortStories = navigageShortStories;

      function navigageShortStories() {
        $state.go('shortstories');
      }

      function navigateMemoir() {
        $state.go('memoir');
      }

      function navigatePinkEssay() {
        $state.go('pinkessay');
      }

      function navigatePinkOpeningPages() {
        $state.go('pinkpages');
      }

      function navigateNovels() {
        $state.go('novels');
      }

      function navigateLanding() {
        $state.go('landing');
      }

      function onInit() {
        console.log("Novels is lit");
        let pinkertonContent = document.getElementById('pinkertonContent');
        pinkertonContent.setAttribute("style", "opacity: 0.7; filter: hue-rotate(180deg) sepia(0%);");
        setTimeout(()=>{
          pinkertonContent.setAttribute("style", "opacity: 1; filter: hue-rotate(0deg) sepia(70%); transition: all 1.4s linear;");
        }, 600);

      }

    }

}());
