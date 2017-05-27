var title_li=document.getElementById("title-li");
var lis=title_li.getElementsByTagName("li");
var myli=document.getElementById("myli");
var team=document.getElementById("team");
var vipfood=document.getElementById("vip-food");

myli.style.left=lis[0].offsetWidth/2+"px";
myli.style.top=lis[0].offsetHeight-myli.offsetHeight+"px";
lis[0].className="active";
function clear() {
	for (var i = 0; i < lis.length; i++) {
		lis[i].className="";
	}
}
window.onscroll=function (e) {
	if (document.body.scrollTop>300&&document.body.scrollTop<team.offsetTop) {
		myli.style.left=lis[0].offsetWidth/2+"px";
		// moveli(lis[0].offsetWidth/2);
		clear();
		lis[0].className="active";
	}
	if (document.body.scrollTop>team.offsetTop-lis[0].offsetHeight&&document.body.scrollTop<vipfood.offsetTop-lis[0].offsetHeight) {
		myli.style.left=lis[0].offsetWidth+lis[0].offsetWidth/2+"px";
		// moveli(lis[0].offsetWidth*1.5);
		clear();
		lis[1].className="active";
	}
	if (document.body.scrollTop>vipfood.offsetTop-lis[0].offsetHeight) {
		myli.style.left=lis[0].offsetWidth*2+lis[0].offsetWidth/2+"px";
		// moveli(lis[0].offsetWidth*2.5)
		clear();
		lis[2].className="active";
	}
}
for (var i = 0; i < lis.length; i++) {
	lis[i].index=i;
	lis[i].onclick=function () {
		if (this.index==0) {
			move(300);
			myli.style.left=this.offsetWidth/2+"px";
			// moveli(this.offsetWidth/2);
			clear();
			this.className="active";
		}
		if (this.index==1) {
			move(team.offsetTop-this.offsetHeight+2);
			myli.style.left=this.offsetWidth*1.5+"px";
			// moveli(this.offsetWidth*1.5)
			clear();
			this.className="active";
		}
		if (this.index==2) {
			move(vipfood.offsetTop-this.offsetHeight+2);
			myli.style.left=this.offsetWidth*2.5+"px";
			// moveli(this.offsetWidth*2.5)
			clear();
			this.className="active";
		}
	}
}
function move(h) {
	var t=0;
	var maxT=50;
	var start=document.body.scrollTop;
	var end=h;
	var change=end-start;
	var time=setInterval(function () {
		t++;
		if (t>=maxT) {
			clearInterval(time);
		}
		document.body.scrollTop=Tween.Linear(t,start,change,maxT);
	}, 10);
}
function moveli(w) {
	var t=0;
	var maxT=50;
	var start=myli.offsetLeft;
	var end=w;
	var change=end-start;
	clearInterval(time);
	var time=setInterval(function () {
		t++;
		if (t>=maxT) {
			clearInterval(time);
		}
		myli.style.left=Tween.Linear(t,start,change,maxT)+"px";
		console.log(myli.offsetLeft);
	}, 10);
}