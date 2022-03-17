
var countingTrigger=0;

var scrollPos = 0;
var secondaryVisualPos = $('.footer_nation_list').offset().top;

var sectionPos = new Array;

var nations = 0;
var cities = 0;
var maxnations = $('.nation_block').length;
var maxcities = $('.cities > li').length;


$('.header__btn--homeward').on('click',function(){
   $('html,body').animate({'scrollTop':0},1000);
   return false;
});

$(".header__btn--sec01").on('click',function(){$('html,body').animate({'scrollTop':sectionPos[0]},1000);return false;});
$(".header__btn--sec02").on('click',function(){$('html,body').animate({'scrollTop':sectionPos[1]},1000);return false;});
$(".header__btn--sec03").on('click',function(){$('html,body').animate({'scrollTop':sectionPos[2]},1000);return false;});
$(".header__btn--sec04").on('click',function(){$('html,body').animate({'scrollTop':sectionPos[3]},1000);return false;});
$(".header__btn--sec05").on('click',function(){$('html,body').animate({'scrollTop':sectionPos[4]},1000);return false;});
$(".header__btn--sec06").on('click',function(){$('html,body').animate({'scrollTop':sectionPos[5]},1000);return false;});

$('.header__spmenu').on('click',function(){
   $('.header nav').toggleClass('expanded');
   return false;
});

jQuery(function($){
	$(document).ready(function(){
          redefineSectionPos();

          setInterval(function(){
          if(countingTrigger===0){
               if($('html,body').scrollTop() >= secondaryVisualPos - $(window).height() / 2){
                     countingTrigger=1;
               }
          if(countingTrigger===1){
             countingTrigger=2;
             $('.footer_nation_list__masked_text').animate({'marginTop':'0px'},400);
             setTimeout(function(){
                 countingTrigger=3;
             },500);}
          }else if(countingTrigger===3){
             nations += Math.ceil((maxnations - nations) / 16);
             cities += Math.ceil((maxcities - cities) / 16);
             $('.no_of_nations span').text(nations);
             $('.no_of_cities span').text(cities);
          }
        },36);

        $(window).on('scroll resize',function(){
              redefineSectionPos();
        });
	});
   
});

function redefineSectionPos(){
        secondaryVisualPos = $('.footer_nation_list').offset().top;

        for(var a = 0; a < $('.continent_block').length ; a++){
           var b = $('.continent_block');
           sectionPos[a] = ($(b[a])).offset().top + 'px';
        }
}