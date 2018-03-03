(function() {
  'use strict';


  angular.module('app')
    .component('pinkpages', {
      controller: PinkPagesController,
      templateUrl: '/js/pinkpages/pinkpages.template.html'
    });

    PinkPagesController.$inject = ['$http', '$state', '$stateParams'];

    function PinkPagesController($http, $state, $stateParams){
      const vm = this;

      vm.$onInit = onInit;
      vm.navigateLanding = navigateLanding;
      vm.navigateNovels = navigateNovels;
      vm.navigatePink = navigatePink;
      vm.navigatePinkEssay = navigatePinkEssay;
      vm.scrollPinkToTop = scrollPinkToTop;

      function scrollPinkToTop() {
        let pinkOpeningPagesContent = document.getElementById('pinkOpeningPagesContent');

        pinkOpeningPagesContent.scrollTop = 0;
      }

      function navigatePinkEssay() {
        $state.go('pinkessay');
      }

      function navigatePink() {
        $state.go('pinkerton');
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
