(function() {
  'use strict';

  var memoirDropdownToggle = false;
  var funStuffDropdownToggle = false;
  var overMemoirMenu = false;
  var overAuthorMenu = false;
  var overFunStuffMenu = false;
  var authorDropdownToggle = false;
  var bookImages = [ 'https://images.gr-assets.com/books/1401953526l/77699.jpg', 'https://images.gr-assets.com/books/1260470010l/4473.jpg', 'https://images.gr-assets.com/books/1322148274l/284066.jpg', 'https://images.gr-assets.com/books/1327124987l/9712.jpg', 'https://images.gr-assets.com/books/1329151576l/292408.jpg', 'https://images.gr-assets.com/books/1358615501l/9328.jpg', 'https://images.gr-assets.com/books/1385207977l/51019.jpg', 'https://images.gr-assets.com/books/1407710790l/3835.jpg', 'https://images.gr-assets.com/books/1388200586l/77156.jpg', 'https://images.gr-assets.com/books/1406383769l/49628.jpg', 'https://images.gr-assets.com/books/1451442186l/16243.jpg', 'https://images.gr-assets.com/books/1378573063l/256008.jpg', 'https://images.gr-assets.com/books/1358325366l/492532.jpg' ];
  var bookTitles = [ 'Dinner at the Homesick Restaurant', 'A Prayer for Owen Meany', 'The Wind-up Bird Chronicle', 'Love in the Time of Cholera', 'Angle of Repose', 'This House of Spirits', 'Cat\'s Eye', 'Don Quixote', 'Plainsong', 'Cloud Atlas', 'Case Histories', 'Lonesome Dove', 'Canopus in Argos: Archives' ];
  var bookAuthors = [ 'Anne Tyler', 'John Irving', 'Haruki Murakami', 'Gabriel García Márquez', 'Wallace Stegner', 'Isabel Allende', 'Margaret Atwood', 'Miguel de Cervantes Saavedra', 'Kent Haruf', 'David Mitchell', 'Kate Atkinson', 'Larry McMurtry', 'Doris Lessing - all books in the series' ];
  var bookLinks = [ 'https://www.goodreads.com/book/show/10592766-dinner-at-the-homesick-restaurant', 'https://www.goodreads.com/book/show/4473.A_Prayer_for_Owen_Meany', 'https://www.goodreads.com/book/show/8872524-the-wind-up-bird-chronicle', 'https://www.goodreads.com/book/show/9712.Love_in_the_Time_of_Cholera', 'https://www.goodreads.com/book/show/292408.Angle_of_Repose', 'https://www.goodreads.com/book/show/9328.The_House_of_the_Spirits', 'https://www.goodreads.com/book/show/51019.Cat_s_Eye', 'https://www.goodreads.com/book/show/3835.Don_Quixote', 'https://www.goodreads.com/book/show/77156.Plainsong', 'https://www.goodreads.com/book/show/49628.Cloud_Atlas?ac=1', 'https://www.goodreads.com/book/show/8168770-case-histories', 'https://www.goodreads.com/book/show/256008.Lonesome_Dove', 'https://www.goodreads.com/book/show/492532.Canopus_in_Argos' ];

  var retreatImages = [ './img/french.gif', './img/hedgebrook.jpg', './img/AnamCara.gif' ];
  var retreatLinks = [ 'http://www.oleandercottage.com/', 'http://www.hedgebrook.org/', 'http://www.anamcararetreat.com/' ];
  var retreatNames = [ 'Oleander Cottage', 'Hedgebrook', 'Anam Cara' ];
  var retreatLocations = [ 'Lomagne Region of France', 'Whidbey Island near Seattle, WA', 'Coulagh Bay, County Cork, Ireland' ];

  angular.module('app')
    .component('futureprojects', {
      controller: FutureProjectsController,
      templateUrl: '/js/futureprojects/futureprojects.template.html'
    });

    FutureProjectsController.$inject = ['$http', '$state', '$stateParams'];

    function FutureProjectsController($http, $state, $stateParams){
      const vm = this;

      vm.$onInit = onInit;
      vm.navigateNovels = navigateNovels;
      vm.navigateMemoir = navigateMemoir;
      vm.navigateShortStories = navigateShortStories;
      vm.surpisedbystory = surpisedbystory;
      vm.hoverOffMemoir = hoverOffMemoir;
      vm.memoirMenuActive = memoirMenuActive;
      vm.memoirMenueInactive = memoirMenueInactive;
      vm.authorMenuActive = authorMenuActive;
      vm.authorMenueInactive = authorMenueInactive;
      vm.hoverOffAuthor = hoverOffAuthor;
      vm.navigateAuthor = navigateAuthor;
      vm.funStuffMenuActive = funStuffMenuActive;
      vm.funStuffMenuInactive = funStuffMenuInactive;
      vm.hoverOffFunStuff = hoverOffFunStuff;
      vm.navigateFunStuff = navigateFunStuff;
      vm.navigateContact = navigateContact;
      vm.navigateWelome = navigateWelome;
      vm.navigageIntroduction = navigageIntroduction;
      vm.navigateFirstChapter = navigateFirstChapter;
      vm.navigateToSurprise = navigateToSurprise;
      vm.navigateShortBio = navigateShortBio;
      vm.navigatePublishedBooks = navigatePublishedBooks;
      vm.navigateLongBio = navigateLongBio;
      vm.navigateFunInfo = navigateFunInfo;

      function navigateFunInfo() {
        $state.go('funinfo');
      }

      function navigateLongBio() {
        $state.go('longbio');
      }

      function navigatePublishedBooks() {
        $state.go('publishedbooks');
      }


      function navigateShortBio() {
        $state.go('shortbio');
      }

      function navigateToSurprise() {
        $state.go('memoir');
      }

      function navigateFirstChapter() {
        $state.go('memoirfirstchapter');
      }

      function navigageIntroduction() {
        $state.go('memoirintroduction')
      }

      function navigateWelome() {
        $state.go('landing');
      }

      function navigateContact() {
        $state.go('contact');
      }

      function funStuffMenuInactive() {
        overFunStuffMenu = false;
        hoverOffFunStuff();
      }

      function authorMenueInactive() {
        overAuthorMenu = false;
        hoverOffAuthor();
      }

      function funStuffMenuActive() {
        overFunStuffMenu = true;
      }

      function authorMenuActive() {
        overAuthorMenu = true;
      }

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

      function navigateFunStuff() {
        let funStuffDropdownDiv = document.getElementById('funStuffDropdownDiv');

        if (funStuffDropdownToggle) {
          funStuffDropdownToggle = false;
          funStuffDropdownDiv.setAttribute("style", "visibility: hidden; opacity: 0; transition: opacity 0.3s linear; z-index: -10;");
        } else {
          funStuffDropdownToggle = true;
          funStuffDropdownDiv.setAttribute("style", "visibility: visible; opacity: 1; transition: opacity 0.3s linear; z-index: 10;");
        }
      }

      function navigateAuthor() {
        let authorDropdownDiv = document.getElementById('authorDropdownDiv');

        if (authorDropdownToggle) {
          authorDropdownToggle = false;
          authorDropdownDiv.setAttribute("style", "visibility: hidden; opacity: 0; transition: opacity 0.3s linear; z-index: -10;");
        } else {
          authorDropdownToggle = true;
          authorDropdownDiv.setAttribute("style", "visibility: visible; opacity: 1; transition: opacity 0.3s linear; z-index: 10;");
        }
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

      function hoverOffFunStuff() {
        let funStuffDropdownDiv = document.getElementById('funStuffDropdownDiv');

        if (funStuffDropdownToggle && !overFunStuffMenu) {
          setTimeout(()=>{
            if (funStuffDropdownToggle && !overFunStuffMenu) {
              funStuffDropdownToggle = false;
              funStuffDropdownDiv.setAttribute("style", "visibility: hidden; opacity: 0; transition: opacity 0.3s linear; z-index: -10;");
            }
          }, 500);
        }
      }

      function hoverOffAuthor() {
        let authorDropdownDiv = document.getElementById('authorDropdownDiv');

        if (authorDropdownToggle && !overAuthorMenu) {
          setTimeout(()=>{
            if (authorDropdownToggle && !overAuthorMenu) {
              authorDropdownToggle = false;
              authorDropdownDiv.setAttribute("style", "visibility: hidden; opacity: 0; transition: opacity 0.3s linear; z-index: -10;");
            }
          }, 500);
        }
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
        console.log("fun stuff is lit");
        vm.books = [];
        for (let i = 0; i < bookImages.length; i++) {
          vm.books[i] = {};
          vm.books[i].cover = bookImages[i];
          vm.books[i].title = bookTitles[i];
          vm.books[i].author = bookAuthors[i];
          vm.books[i].link = bookLinks[i];
        }

        vm.retreats = [];
        for (let j = 0; j < retreatImages.length; j++) {
          vm.retreats[j] = [];
          vm.retreats[j].image = retreatImages[j];
          vm.retreats[j].link = retreatLinks[j];
          vm.retreats[j].name = retreatNames[j];
          vm.retreats[j].location = retreatLocations[j];
        }





      }

    }

}());
