let cur_display = null;

function unhideLightbox(lightboxID) {

    // TODO: Remove the .hidden class from the div with the given id
    
    if(cur_display != null){
        document.getElementById(cur_display).classList.add('hidden');
    }

    document.getElementById(lightboxID).classList.remove('hidden');
    cur_display = lightboxID;

}


function unhideLightbox1() {
	unhideLightbox("kai");

}

document.getElementById("kaisa").onclick = unhideLightbox1;



function unhideLightbox2() {
	unhideLightbox("cait");

}

document.getElementById("caitlyn").onclick = unhideLightbox2;


function unhideLightbox3() {
	unhideLightbox("siv");

}

document.getElementById("sivir").onclick = unhideLightbox3;


