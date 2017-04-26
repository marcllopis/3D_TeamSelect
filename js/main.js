
var arrLeagues = [];
var teamImage = []
var leagueId;




function getTeamData() {

  $.ajax({
    headers: { 'X-Auth-Token': '04482a0749d1459da9c8f999eca709fc' },
    url: 'http://api.football-data.org/v1/competitions/'+ leagueId + '/teams',
    dataType: 'json',
    type: 'GET',
  }).done(function(response) {
    teamImage = response;

    console.log("THE DATA",teamImage);
    return  teamImage;

  })

  // let url = 'http://api.openweathermap.org/data/2.5/weather?appid=e42d32af9555a899db7106b67e9e5aae&units=metric&q=' + city;
  // var url = 'http://api.football-data.org/v1/competitions/'+ leagueId + '/teams';
  //
  // $.getJSON(url, data => {
  //   console.log(data.teams.length);
  //   for (var i = 0; i < data.teams.length; i++) {
  //     $("#images").append('<img class="img-size" src="' + data.teamImage[0].crestUrl + '" id="item-' + (i+1) + '"/>')
  //   }
  // });

}



function getLeague() {

  $.ajax({
    headers: { 'X-Auth-Token': '04482a0749d1459da9c8f999eca709fc' },
    url: 'http://api.football-data.org/v1/competitions/',
    dataType: 'json',
    type: 'GET',
  }).done(function(response) {
    arrLeagues = response;

    appendLeague()

    return  arrLeagues;

  })
}

getLeague()


$("#left-league").click(function (){

  console.log("CLICKED LEFT");
  showLeftLeague()
  appendLeague()
  getTeamData()
})

$("#right-league").click(function (){

  console.log("CLICKED RIGHT");
  showRightLeague()
  appendLeague()
  getTeamData()
})




$("#left-image").click(function (){

  $("#team-image").empty()
  appendTeam()
  showLeftTeam()

})

$("#right-image").click(function (){

  $("#team-image").empty()
  appendTeam()
  showRightTeam()

})


function appendLeague() {
  $("#league-name").empty();
  $("#league-name").append(arrLeagues[0].caption);
  leagueId = arrLeagues[0].id;
  console.log(leagueId);
}

function appendTeam() {
console.log("HEYYY",teamImage.teams);
  // $("#team-image").addClass("animated").addClass("fadeOutLeft")
  $("#team-image").empty();
  $("#team-image").append('<img class="img-size animated fadeInRight" src="' + teamImage.teams[0].crestUrl + '" /><br><h2 class="text-center">' + teamImage.teams[0].name + '</h2>');
}


function showRightLeague() {
  arrLeagues.push(arrLeagues.shift());
}


function showLeftLeague() {

  arrLeagues.unshift(arrLeagues[(arrLeagues.length-1)]);
  arrLeagues.splice(-1,1)

}

function showRightTeam() {
  teamImage.teams.push(teamImage.teams.shift());
}


function showLeftTeam() {

  teamImage.teams.unshift(teamImage.teams[(teamImage.teams.length-1)]);
  teamImage.teams.splice(-1,1)

}


// setTimeout(getLeague, 2000);
