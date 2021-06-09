
var zaklamp = 0;
var amulet = 0;
var curse = 0;
function enter() {
    document.getElementById("bgm").play();
    document.getElementById("div1").style.backgroundImage = "url(media/bg3.jpg)";
    document.querySelectorAll("#ingang, #labelingang, #h1").forEach(function (el) {
        el.style.display = 'none';
    });
    document.querySelectorAll("#stairup, #sdoor, #bdoor1, #return1").forEach(function (el) {
        el.style.display = 'block';
    });
    document.getElementById("textdiv1").innerHTML = "Leuk dat je ervoor hebt gekozen om te bezoeken...<br>Je komt binnen in een donkere hal. Je ziet een trapdie naar boven leidt, een grote en een kleine kamer. Wie weet wat je in dit huis te wachten zal staan?...<br>Als het je niet bevalt kun je altijd weer weggaan, toch ? ";

}
document.getElementById("div1").style.display = "block, none";
function change_entrance() {
    document.getElementById("textdiv1").innerHTML = "Je bent weer terug bij de ingang";
    document.getElementById("div1").style.backgroundImage = "url(media/bg3.jpg)";
    document.querySelectorAll("#bedroom1v1, #bedroom1v2, #bedroom2, #bathroom, #stairdown, #stairdown2, #entrance, #flashlight, #amulet, #exit, #escape").forEach(function (el) {
        el.style.display = 'none';
    });
    if (zaklamp === 0) {
        document.querySelectorAll("#stairup, #sdoor, #bdoor1, #return1").forEach(function (el) {
            el.style.display = 'block';
        });
    } else {
        document.querySelectorAll("#stairup, #sdoor, #bdoor2, #return1").forEach(function (el) {
            el.style.display = 'block';
        });
    }
}

function change_stairs() {
    document.getElementById("textdiv1").innerHTML = "Je loopt de trap op...";
    document.getElementById("div1").style.backgroundImage = "url(media/stairup.jpg)";
    document.querySelectorAll("#stairup, #sdoor, #bdoor1, #bdoor2, #return1").forEach(function (el) {
        el.style.display = 'none';
    });
    setTimeout(change_upper, 4000);
}
function change_upper() {
    document.getElementById("textdiv1").innerHTML = "Je ziet verschillende kamers, waar wil je naartoe gaan?";
    document.getElementById("div1").style.backgroundImage = "url(media/upper2.jpg)";
    document.querySelectorAll("#bedroom1v1, #bedroom1v2, #bedroom2, #bathroom, #stairdown, #stairdown2, #entrance, #return2, #flashlight, #amulet, #textdiv4").forEach(function (el) {
        el.style.display = 'none';
    });
    document.getElementById("div1").style.backgroundPosition = "";
    if (amulet === 0) {
        document.querySelectorAll("#bedroom1v1, #bedroom2, #bathroom, #entrance").forEach(function (el) {
            el.style.display = 'block';
        });
    } else {
        document.querySelectorAll("#bedroom1v2, #bedroom2, #bathroom, #entrance").forEach(function (el) {
            el.style.display = 'block';
        });
    }
}

function change_bed1v1() {
    document.getElementById("textdiv1").innerHTML = "Je loopt de eerste slaapkamer binnen.<br>Je ziet iets liggen...<br><br>";
    document.getElementById("div1").style.backgroundImage = "url(media/b1.jpg)";
    document.querySelectorAll("#bedroom1v1, #bedroom2, #bathroom, #entrance").forEach(function (el) {
        el.style.display = 'none';
    });
    document.getElementById("return2").style.display = "block";
    document.getElementById("amulet").style.display = "block";
}
function get_amulet() {
    amulet = 1;
    document.getElementById("textdiv1").innerHTML += "Je hebt een amulet gevonden.<br>Hopelijk brengt het je geluk in dit vervloekte huis";
    document.getElementById("amulet").remove();
    document.getElementById("bed1").remove();
}
function change_bed1v2() {
    document.getElementById("textdiv1").innerHTML = "Je komt de eerste slaapkamer weer binnen";
    document.getElementById("div1").style.backgroundImage = "url(media/b1.jpg)";
    document.querySelectorAll("#bedroom1v2, #bedroom2, #bathroom, #entrance").forEach(function (el) {
        el.style.display = 'none';
    });
    document.getElementById("return2").style.display = "block";
}
function change_bed2() {
    document.getElementById("textdiv1").style.display = "none";
    document.getElementById("textdiv4").style.display = "block";
    document.getElementById("textdiv4").innerHTML = "Nietsvermoedend loop je de tweede slaapkamer bi-";
    document.getElementById("div1").style.backgroundImage = "url(media/bbg.jpg)";
    document.querySelectorAll("#bedroom1v1, #bedroom1v2, #bedroom2, #bathroom, #entrance, #return2").forEach(function (el) {
        el.style.display = 'none';
    });
    setTimeout(jeffed, 1000);
    function jeffed() {
        document.getElementById("jeff").style.display = "block";
        document.getElementById("jeff").play();
        document.getElementById("gameover").style.display = "block";
        document.getElementById("gameover").style.opacity = "0.3";
        window.setTimeout(gameovertext, 4850);

        function gameovertext() {
            document.getElementById("textdiv4").style.display = "none";
            document.getElementById("textdiv3").innerHTML = "GAME OVER<br><br>In een staat van grote verwarring en dolheid heeft Jeff the Killer je genadeloos neergestoken!<br><br> Nog een keer proberen?";
            document.getElementById("opnieuw").style.display = "block";
        }
    }
}
function change_bath() {
    document.getElementById("textdiv1").innerHTML = "";
    document.getElementById("div1").style.backgroundImage = "url(media/bathroom3.png), url(media/exorcist.png)";
    document.getElementById("div1").style.backgroundPosition = "0, 50% 0%";
    document.getElementById("textdiv4").style.display = "block";
    document.getElementById("textdiv4").innerHTML = "Je loopt de badkamer binnen en ziet dat je vanuit de spiegel wordt bekeken...<br>";
    document.querySelectorAll("#bedroom1v1, #bedroom1v2, #bedroom2, #bathroom, #entrance").forEach(function (el) {
        el.style.display = 'none';
    });
    setTimeout(bath_event, 3000);
    function bath_event() {
        curse = 1;
        document.getElementById("textdiv4").innerHTML += "Plotseling word je geconfronteerd met een gevoel van angst en machteloosheid.";
        document.getElementById("return2").style.display = "block";
    }
}

function change_sdoor() {
    document.getElementById("textdiv1").innerHTML = "Je komt de kleine kamer binnen en ziet een trap die naar beneden leidt...<br><br>Neem je de trap naar beneden of ga je weer terug naar de ingang?";
    document.getElementById("div1").style.backgroundImage = "url(media/creepystairs.jpg)";
    document.getElementById("entrance").style.display = "block";
    document.querySelectorAll("#stairup, #sdoor, #bdoor1, #bdoor2, #return1, #bedroom1v1, #bedroom1v2, #bedroom2, #bathroom").forEach(function (el) {
        el.style.display = 'none';
    });

    if (zaklamp === 0) {
        document.getElementById("stairdown").style.display = "block";
        document.getElementById("labelsd").hidden = false;
    } else {
        document.getElementById("stairdown2").style.display = "block";
        document.getElementById("labelsd2").hidden = false;
    }
}

function change_basement1() {
    document.getElementById("textdiv1").innerHTML = "Het is te donker om verder te gaan...";
    document.getElementById("div1").style.backgroundImage = "url(media/basementdark.jpg)";
    document.getElementById("entrance").style.display = "block";
    document.getElementById("stairdown").style.display = "none";
}
function change_basement2() {
    document.getElementById("textdiv1").innerHTML = "Met de zaklamp die je hebt gevonden is<br>de kelder is nu begaanbaar.";
    document.getElementById("div1").style.backgroundImage = "url(media/basement.jpg)";
    document.getElementById("entrance").style.display = "block";
    document.getElementById("exit").style.display = "block";
    document.getElementById("stairdown2").style.display = "none";
}

function change_bdoor1() {
    document.getElementById("textdiv1").innerHTML = "Je loopt de woonkamer binnen<br>Ligt daar iets?<br><br>";
    document.getElementById("div1").style.backgroundImage = "url(media/1.webp)";
    document.querySelectorAll("#stairup, #sdoor, #bdoor1, #return1").forEach(function (el) {
        el.style.display = 'none';
    });
    document.getElementById("entrance").style.display = "block";
    document.getElementById("flashlight").style.display = "block";
}
function get_flashlight() {
    zaklamp = 1;
    document.getElementById("textdiv1").innerHTML += "Je hebt een zaklamp gevonden.";
    document.getElementById("flashlight").remove();
    document.getElementById("bdoor1").remove();
}
function change_bdoor2() {
    document.getElementById("textdiv1").innerHTML = "Je loopt de woonkamer nogmaals binnen";
    document.getElementById("div1").style.backgroundImage = "url(media/1.webp)";
    document.querySelectorAll("#stairup, #sdoor, #bdoor2, #return1").forEach(function (el) {
        el.style.display = 'none';
    });
    document.getElementById("entrance").style.display = "block";
}
function change_exit() {
    document.getElementById("textdiv1").innerHTML = "Je ziet kans om te ontsnappen!";
    document.getElementById("div1").style.backgroundImage = "url(media/exit.jpg)";
    document.getElementById("entrance").style.display = "block";
    document.getElementById("escape").style.display = "block";
    document.getElementById("exit").style.display = "none";
}

function detect() {
    document.getElementById("textdiv2").innerHTML = "Wie is dat?!";
}
function ghouled() {
    document.getElementById("textdiv1").style.display = "none";
    document.getElementById("textdiv2").innerHTML = "OH NEE NEE NEE NEE HEEEELP!!!";
    document.getElementById("ghoulout").style.display = "none";
    document.getElementById("ghoul").style.display = "block";
    document.getElementById("scream").play();
    document.getElementById("gameover").style.display = "block";
}
function gameover() {
    document.getElementById("gameover").style.opacity = "0.3";
}
function gameovertext() {
    document.getElementById("textdiv2").style.display = "none";
    document.getElementById("textdiv3").innerHTML = "GAME OVER<br><br>Je bent opgegeten door de lokale zombie. Wees goed voorbereid voordat je weer naar buiten gaat!";
    document.getElementById("opnieuw").style.display = "block";
}

function change_ret1() {
    document.getElementById("textdiv1").style.left = "75%";
    document.getElementById("textdiv1").innerHTML = "Je doet de voordeur open en komt<br>weer buiten.<br><br>Wacht even...";
    document.getElementById("div1").style.backgroundImage = "url(media/nightsky.jpg)";
    document.querySelectorAll("#stairup, #sdoor, #bdoor1, #bdoor2, #return1").forEach(function (el) {
        el.style.display = 'none';
    });
    document.getElementById("ghoulout").style.display = "block";
    setTimeout(detect, 2000);
    setTimeout(ghouled, 4000);
    setTimeout(gameover, 4300);
    setTimeout(gameovertext, 5500);
}

function change_escape() {
    document.getElementById("textdiv1").style.left = "75%";
    document.getElementById("textdiv1").innerHTML = "Je bent eindelijk weer buiten.<br><br>";
    document.getElementById("div1").style.backgroundImage = "url(media/nightsky.jpg)";
    document.getElementById("escape").style.display = "none";
    document.getElementById("entrance").style.display = "none";
    if (amulet === 0 || curse === 1) {
        document.getElementById("textdiv1").innerHTML += "Je voelt je echter niet veilig...";
        document.getElementById("ghoulout").style.display = "block";
        setTimeout(detect, 2000);
        setTimeout(ghouled, 4000);
        setTimeout(gameover, 4300);
        setTimeout(gameovertext, 5500);
    } else {
        document.getElementById("textdiv1").innerHTML += "Je hebt helaas geen hulp kunnen vinden<br>voor het repareren van je fiets, maar<br>je bent blij weer buiten te zijn.<br>Het had allemaal minder goed kunnen aflopen.";
        setTimeout(succes, 5000);
        function succes() {
            document.getElementById("textdiv3").innerHTML = "Gefeliciteerd, je bent uit het vervloekte spookhuis ontsnapt!<br>Bedankt voor het spelen van deze demo,<br>ik hoop dat je het leuk hebt gevonden!";
        }
    }
}