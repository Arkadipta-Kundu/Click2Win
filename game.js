var buttonColours = ["red", "blue", "green", "yellow"], gamePattern = [], userClickedPattern = [], level = 0, started = !1; function nextSequence() { level++, $("#level-title").text("Level " + level); var e = buttonColours[Math.floor(4 * Math.random())]; gamePattern.push(e), $("#" + e).fadeIn(100).fadeOut(100).fadeIn(100), playSound(e) } function playSound(e) { new Audio("sounds/" + e + ".mp3").play() } function animatePress(e) { $("#" + e).addClass("pressed"), setTimeout(function () { $("#" + e).removeClass("pressed") }, 100) } function startButtonAnimation(e) { $(e).addClass("pressed"), setTimeout(function () { $(e).removeClass("pressed") }, 200) } function checkAnswer(e) { gamePattern[e] === userClickedPattern[e] ? userClickedPattern.length === gamePattern.length && (setTimeout(function () { nextSequence() }, 1500), userClickedPattern.length = 0) : (playSound("wrong"), $("body").addClass("game-over"), setTimeout(function () { $("body").removeClass("game-over") }, 400), afterGameOverEffect("button"), $("#level-title").text("Game Over ❗"), startOver()) } function afterStartEffect(e) { $(e).text("started"), $(e).css("background-color", "#011F3F"), $(e).css("border", "0px"), $(e).css("color", "#FEF2BF") } function afterGameOverEffect(e) { $(e).text("Restart"), $(e).css("background-color", "rgba(54,149,223,255)"), $(e).css("border", "5px solid black"), $(e).css("color", "black") } function startOver() { gamePattern = [], userClickedPattern = [], level = 0, started = !1 } $(".btn").click(function e() { var t = $(this).attr("id"); userClickedPattern.push(t), playSound(t), animatePress(t), checkAnswer(userClickedPattern.length - 1) }), $("button").click(function () { startButtonAnimation("button"), !1 == started && (nextSequence(), started = !0, afterStartEffect("button")) });