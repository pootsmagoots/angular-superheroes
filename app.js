let SuperheroesApp = [
  { name: "Batman", phone: "555-555-555", affiliation: "DC", imag: "http://static.comicvine.com/uploads/original/11111/111112793/3031477-nealadamsbatman.jpg" },
  { name: "Superman", phone: "603-546-7897", affiliation: "DC", image_Url: "https://img.clipartfox.com/5771570e2b72db3691fa079327b3951a_download-superman-clipart-comic_328-421.png"},
  { name: "Deadpool", phone: "567-533-6433", affilitation: "Marvel", image_Url: "http://nerdist.com/wp-content/uploads/2016/04/deadpool-2-featured-image.jpg"}
]


angular
.module("SuperHeroesApp", [])
.controller("SuperheroesCtrl", [ SuperheroController ])


function SuperheroController () {
  this.heroes = HeroApp;
}
//  this.addHeroe = function () {
//    let hero = {name: this.newHero, phone_number: this.phone_number_hero}
//    this.heroes.push(hero);
//  }
// }
