(function() {
  'use strict';


  angular.module('app')
    .component('kateopeningpages', {
      controller: KateOpeningPagesController,
      templateUrl: '/js/kateopeningpages/kateopeningpages.template.html'
    });

    KateOpeningPagesController.$inject = ['$http', '$state', '$stateParams'];

    function KateOpeningPagesController($http, $state, $stateParams){
      const vm = this;

      vm.$onInit = onInit;
      vm.navigateLanding = navigateLanding;
      vm.navigateNovels = navigateNovels;
      vm.navigateKate = navigateKate;
      vm.navigateKateEssay = navigateKateEssay;
      vm.scrollKateToTop = scrollKateToTop;
      vm.navigateMemoir = navigateMemoir;
      vm.navigateShortStories = navigateShortStories;

      function navigateShortStories() {
        $state.go('shortstories');
      }

      function navigateMemoir() {
        $state.go('memoir');
      }

      function scrollKateToTop() {
        let kateOpeningPagesContent = document.getElementById('kateOpeningPagesContent');

        kateOpeningPagesContent.scrollTop = 0;
      }

      function navigateKateEssay() {
        $state.go('kateessay');
      }

      function navigateKate() {
        $state.go('kate');
      }

      function navigateNovels() {
        $state.go('novels');
      }

      function navigateLanding() {
        $state.go('landing');
      }

      function onInit() {
        console.log("Opening Pages is lit");


      }

    }

}());
