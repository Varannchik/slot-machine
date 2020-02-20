const slot_item = 12;
const radius = 150;

function createSlots (ring) {
	let slotAngle = 360 / slot_item;
	let seed = getSeed();
	for (let i = 0; i < slot_item; i ++) {
		let slot = document.createElement('div');
		slot.className = 'slot';
		let transform = 'rotateX(' + (slotAngle * i) + 'deg) translateZ(' + radius + 'px)';
		slot.style.transform = transform;
		let a=Math.round(Math.random()*(slot_item))
		let image = [
			"/img/M00_000.jpg",
			"/img/M01_000.jpg",
			"/img/M02_000.jpg",
			"img/M03_000.jpg",
			"img/M04_000.jpg",
			"img/M05_000.jpg",
			"img/M06_000.jpg",
			"img/M07_000.jpg",
			"img/M08_000.jpg",
			"img/M09_000.jpg",
			"img/M10_000.jpg",
			"img/M11_000.jpg",
			"img/M12_000.jpg"

		];
		let content = $(slot).append('<p>' + '<img src="'+image[a]+'">'+ '</p>');
		ring.append(slot);
	}
}

function getSeed() {
    return Math.floor(Math.random()*(slot_item));
}

function spin(timer) {
	for(let i = 1; i < 6; i ++) {
		let oldSeed = '<img src="img/paw-solid.svg">';
		let oldClass = $('#ring'+i).attr('class');
		if(oldClass.length > 4) {
			oldSeed = parseInt(oldClass.slice(10));
			console.log(oldSeed);
		}
		let seed = getSeed();
		while(oldSeed == seed) {
			seed = getSeed();
		}
		$('#ring'+i)
			.css('animation','back-spin 1s, spin-' + seed + ' ' + (timer + i*0.5) + 's')
			.attr('class','ring spin-' + seed);
	}

	console.log('=====');
}

$(document).ready(function() {	
 	createSlots($('#ring1'));
 	createSlots($('#ring2'));
 	createSlots($('#ring3'));
 	createSlots($('#ring4'));
 	createSlots($('#ring5')); 	
 	$('.go').on('click',function(){
 		let timer = 2;
 		spin(timer);
 	})


});
