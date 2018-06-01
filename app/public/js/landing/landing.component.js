(function() {
  'use strict';

  var memoirDropdownToggle = false;
  var overMemoirMenu = false;


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
      vm.navigateMemoir = navigateMemoir;
      vm.navigateShortStories = navigateShortStories;
      vm.surpisedbystory = surpisedbystory;
      vm.hoverOffMemoir = hoverOffMemoir;
      vm.memoirMenuActive = memoirMenuActive;
      vm.memoirMenueInactive = memoirMenueInactive;

      function memoirMenuActive() {
        overMemoirMenu = true;
      }

      function memoirMenueInactive() {
        overMemoirMenu = false;
        hoverOffMemoir();
      }


      function surpisedbystory() {
        $state.go('memoir');
      }

      function navigateShortStories() {
        $state.go('shortstories');
      }

      function navigateMemoir() {
        let memoirDropdownDiv = document.getElementById('memoirDropdownDiv');

        if (memoirDropdownToggle) {
          memoirDropdownToggle = false;
          memoirDropdownDiv.setAttribute("style", "visibility: hidden; opacity: 0; transition: opacity 0.3s linear; z-index: -10;");
        } else {
          memoirDropdownToggle = true;
          memoirDropdownDiv.setAttribute("style", "visibility: visible; opacity: 1; transition: opacity 0.3s linear; z-index: 10;");
        }
        // $state.go('memoir');
      }

      function hoverOffMemoir() {
        let memoirDropdownDiv = document.getElementById('memoirDropdownDiv');

        if (memoirDropdownToggle && !overMemoirMenu) {
          setTimeout(()=>{
            if (memoirDropdownToggle && !overMemoirMenu) {
              memoirDropdownToggle = false;
              memoirDropdownDiv.setAttribute("style", "visibility: hidden; opacity: 0; transition: opacity 0.3s linear; z-index: -10;");
            }
          }, 500);
        }
      }

      function navigateNovels() {
        $state.go('novels');
      }

      function onInit() {
        console.log("Landing is lit");
        let landingPic = document.getElementById('contentImg');
        landingPic.setAttribute("style", "opacity: 0.2; filter: hue-rotate(60deg);");
        setTimeout(()=>{
          landingPic.setAttribute("style", "opacity: 1; filter: hue-rotate(0deg); transition: all 1s linear;");
        }, 200)



      }

    }

}());
