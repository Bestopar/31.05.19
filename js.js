﻿$(document).ready(function(){
	$(".img1").mouseenter(function(){
		$(".btn").css({"background":"#ad1f2c"})
	})
	$(".btn").mouseenter(function(){
		$(".btn").css({"background":"#ad1f2c"})
	})
	$(".img8").mouseenter(function(){
		$(".btn2").css({"background":"#004b88"})
	})
	$(".btn2").mouseenter(function(){
		$(".btn2").css({"background":"#004b88"})
	})
})
$(document).ready(function(){
	$(".img1").mouseout(function(){
		$(".btn").css({"background":"#cb1a2b"})
	})
	$(".btn").mouseout(function(){
		$(".btn").css({"background":"#cb1a2b"})
	})
	$(".img8").mouseout(function(){
		$(".btn2").css({"background":"#0083ca"})
	})
	$(".btn2").mouseout(function(){
		$(".btn2").css({"background":"#0083ca"})
	})
})

$(document).ready(function(){
	$(".btn2").click(function(){
		$(".okno").css({"display":"block"})
	})
	$(".close").click(function(){
		$(".okno").css({"display":"none"})
	})
})