function sayHello(){
	alert("It's working.");
}

var friend = {
	firstName: "Ryan",
	lastName: "O'Hern",
	age: 29 
};

document.getElementById("demo").innerHTML = friend.firstName + " " + friend.lastName + " " + friend.age;

document.getElementById("name").innerHTML = friend.firstName;



var show = {
	showName: "House of Cards", 
	episode: 1,
	episodeDescription: "We are introduced to the nefarious ways of Frank Underwood."
}

document.getElementById("show-name").innerHTML = show.showName;
document.getElementById("episode-number").innerHTML = show.episode;
document.getElementById("episode-description").innerHTML = show.episodeDescription;



var netflixShow = {
	//Properties
	showName: "",
	epNumber: 1,
	epDescription: "",
	
	//Methods
	watchNow: function(){
		alert("You are now watching " + this.showName + " - " + this.epNumber);
	}
}

var drWho = Object.create(netflixShow);
drWho.showName = "Dr. Who";
drWho.epNumber = 1;
drWho.epDescription = "Plastic comes alive.";

document.getElementById("show-name2").innerHTML = drWho.showName;
document.getElementById("episode-number2").innerHTML = drWho.epNumber;
document.getElementById("episode-description2").innerHTML = drWho.epDescription;

/*****************More complex object literals*********************/

var amazonPrimeShow = {
	//Properties
	showID  	: 1,
	name 		: "Paul's Happiest Times",
	description : "This is the happiest show on the planet",
	seasonInfo 	: {
		// seasonNumber: 1,

		// //Methods
		// printDetails: function(){
		// 	document.write(description);
		// },

		episodes 	: [
			{episodeNumber: 1, episodeName: "Happy Stuff"},
			{episodeNumber: 2, episodeName: "The Real Happy Story of Paul"},
			{episodeNumber: 3, episodeName: "Even Happier than Before"}
		]
	}
};

	for (info in amazonPrimeShow.seasonInfo.episodes){
		document.write((parseInt(info) + 1) + " - " + amazonPrimeShow.seasonInfo.episodes[info].episodeName + "<br>");
	}

















// var Show2(showName, episode, showDescription) = {
// 	this.showName = showName,
// 	this.episode = episode,
// 	this.showDescription = showDescription
// }

// var arrestedDevelopment = new Show2("Arrested Development", 1, "The Bluth family...");

// document.getElementById("show2Name").innerHTML = arrestedDevelopment.showName;
// document.getElementById("show2EpisodeNumber").innerHTML = arrestedDevelopment.episode;
// document.getElementById("show2EpisodeDescription").innerHTML = arrestedDevelopment.showDescription;

// console.log(arrestedDevelopment);

