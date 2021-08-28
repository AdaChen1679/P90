function glogin()
{
    var p1name = document.getElementById("player1_name").value;
    localStorage.setItem("P1n", p1name);

    var p2name = document.getElementById("player2_name").value;
    localStorage.setItem("P2n", p2name);

    window.location = "game_page.html";
}