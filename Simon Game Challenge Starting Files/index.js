var round = 0;
var started = false;
var selected_colors = [];
var random_colors = [];

$("body").keydown(function(){
     if(!started){
        $("#level-title").text("Level " + round);
        random_color();
        started = true;
     }
});

$(".btn").click(function(){
    var color_s = $(this).attr("id");
    selected_colors.push(color_s);

    $("#" + color_s).fadeIn(100).fadeOut(100).fadeIn(100);
    play_sound(color_s);

    answer(selected_colors.length-1);
});

function random_color() {
    $("#level-title").text("Level " + round);
    selected_colors = [];
    round++;
    var ran_num = Math.floor(Math.random() * 4);
    var color_r = $(".btn").eq(ran_num).attr("id");
    random_colors.push(color_r);

    $("#" + color_r).fadeIn(100).fadeOut(100).fadeIn(100);
    play_sound(color_r);
}

function start_over() {
    round = 0;
    random_colors = [];
    started = false;
}

function play_sound(color) {
    var blink_sound = new Audio("./sounds/" + color + ".mp3");
    blink_sound.play();
}

function animation(color) {
    setTimeout(function(){
        $("#" + color).animate({opacity:0.5});
    }, 100);
}

function answer(currentLevel) {

    if (random_colors[currentLevel] === selected_colors[currentLevel]) {
      if (random_colors.length === selected_colors.length){
        setTimeout(function () {
          random_color();
        }, 1000);
      }
    } else {
      play_sound("wrong");
      $("#level-title").text("Game Over, Press Any Key to Restart");
      start_over();
    }
}