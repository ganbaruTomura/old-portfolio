window.addEventListener('load', function () {
	viewSlide('.top-image img');
});
function viewSlide(className, slideNo = -1)
{
	let imgArray = document.querySelectorAll(className);
	if (slideNo >= 0) {
		//初回以外は現在のスライドを透過
		imgArray[slideNo].style.opacity = 0;
	}
	slideNo++;
	if (slideNo >= imgArray.length) {
		slideNo = 0; //次のスライドがなければ最初のスライドへ戻る
	}
	imgArray[slideNo].style.opacity = 1;
	let msec = 3000;
	setTimeout(function(){viewSlide(className, slideNo);}, msec);
}

// $('a[href^="#"]').click(function() {
//   // スクロールの速度
//   let speed = 1000; // ミリ秒で記述
//   let href = $(this).attr("href");
//   let target = $(href == "#" || href == "" ? 'html' : href);
//   let position = target.offset().top;
//   $('body,html').animate({
//     scrollTop: position
//   }, speed, 'swing');
//   return false;
// });

window.onload=function(){
    var count =3000;//表示までの時間（ミリ秒）
    setTimeout("document.getElementById('timeout').style.display='none'",count);
}

/**
 * 到達したら要素を表示させる
 */
 function showElementAnimation() {

	var element = document.getElementsByClassName('js-animation');
	if(!element) return; // 要素がなかったら処理をキャンセル

	var showTiming = window.innerHeight > 768 ? 200 : 40; // 要素が出てくるタイミングはここで調整
	var scrollY = window.pageYOffset;
	var windowH = window.innerHeight;

	for(var i=0;i<element.length;i++) { var elemClientRect = element[i].getBoundingClientRect(); var elemY = scrollY + elemClientRect.top; if(scrollY + windowH - showTiming > elemY) {
		element[i].classList.add('is-show');
	  } else if(scrollY + windowH < elemY) {
		// 上にスクロールして再度非表示にする場合はこちらを記述
		element[i].classList.remove('is-show');
	  }
	}
  }
  showElementAnimation();
  window.addEventListener('scroll', showElementAnimation);