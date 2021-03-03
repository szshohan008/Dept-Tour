function checkteac() {
    if (document.getElementById("teacher").checked == true) {
        desiSec.style.display = "block";
        batchSection.style.display = "none";
        document.getElementById("payment").value = 8000;
    }
}


function checksub() {
    if (document.getElementById("agreement").checked == true) {
        document.getElementById("subbtn").disabled = false;
    } else {
        document.getElementById("subbtn").disabled = true;
    }
}

function checkstaf() {
    if (document.getElementById("stuff").checked == true) {
        desiSec.style.display = "none";
        batchSection.style.display = "none";
        document.getElementById("payment").value = 15000;
    }
}

function checkstud() {
    if (document.getElementById("student").checked == true) {
        batchSection.style.display = "block";
        desiSec.style.display = "none";
        document.getElementById("payment").value = 10000;
    }
}