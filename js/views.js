require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"views":[function(require,module,exports){
var views={"aboutme":"<div class=\"resume\"><h1>My Resume</h1>\n<p>More Text</p>\n<p>More Text</p>\n<p>More Text</p>\n<p>More Text</p>\n<p>More Text</p>\n<p>More Text</p>\n</div>\n\n\n<div class = \"container-fluid\">\n\n  <div class = \"row\">\n    <div class = \"col-md-4\">\n      <img class = \"img-responsive down\" src=\"images/elizpic.png\">\n    </div>\n    <div class = \"col-md-2\"></div>\n    <div class = \"col-md-6 about-me-paragraph\">\n      <h1>Hi, I'm Elizabeth.</h1>\n      <br>\n      <p>Urbanite. Animal lover. Explorer.</p>\n      <br>\n      <p>Born in Charlottte, and after seeing the world, I've made it back home. Alumna of Appalachian State University\n      and recent graduate of the Iron Yard's Front End Engineering Program.</p>\n      </br>\n      <p>I strive to create simple, intuitive, and useful web applications. I'm adaptable, always learning,\n      and constantly challenging myself to be better.</p>\n      <br>\n      <a href=\"https://www.dropbox.com/s/5icdondwti8k2tj/Resume%20August%202015.pdf?dl=0\">View Resume</a>\n      <br>\n      </div>\n  </div>\n\n</div>\n\n<script type=\"text/javascript\">\n\n$(document).ready(function()\n{\n  $('.nav-resume').click(function(){\n  $('.resume').fadeIn();\n  console.log(\"you clicked this shit!\");\n});\n\n$('.close-button').click(function(){\n  $('.resume').fadeOut();\n});\n\n});\n\n</script>\n","appts":"<div class = \"container-fluid\">\n  <div class = \"row\">\n    <div class = \"col-md-12\">\n      <h1 class = \"float-left\"> Appointments App </h1>\n      <a class = \"float-left-low\" href=\"http://elizabethshealy.github.io/events/\">View Site |</a>\n      <a class = \"float-left-low\" href=\"https://github.com/elizabethshealy/events/tree/master\">Repo</a>\n    </div>\n  </div>\n  <!-- <div class = \"row\">\n    <div class = \"col-md-2\"></div>\n    <div class = \"col-md-8\">\n      <p> The appointments app was created as an assignment for my Front End Engineering class at The Iron Yard. <p>\n    </div>\n    <div class = \"col-md-2\"></div>\n  </div> -->\n\n  <div class = \"row\">\n    <div class = \"col-md-7\">\n      <img class=\"img-responsive down\" src=\"images/events-new.png\"/>\n    </div>\n    <div class = \"col-md-1\"></div>\n    <div class = \"col-md-4 text-style\">\n      <p class = \"appt-text\"> An appointment management system built in jQuery. Users can add, save, edit, and delete appointments. <p>\n      <br>\n      <ul class = \"text-style\">Languages:\n        <li>HTML</li>\n        <li>CSS</li>\n        <li>Javascript</li>\n      </ul>\n      <br>\n      <ul class = \"text-style\">Frameworks:\n        <li>jQuery</li>\n        <li>Backbone.js</li>\n        <li>Underscore.js</li>\n        <li>Parsley.js</li>\n        <li>Ajax</li>\n      </ul>\n      <br>\n      <br>\n      <br>\n      <br>\n      <br>\n      <!-- <a class = \"float-right\" href=\"http://elizabethshealy.github.io/events/\">View Site |</a>\n      <a class = \"float-right\" href=\"https://github.com/elizabethshealy/events/tree/master\">Repo</a> -->\n    </div>\n  </div>\n\n  <div class = \"row space-row\">\n  </div>\n\n  <div class = \"row\">\n    <div class = \"col-md-12\">\n      <a class = \"nav-back\" href=\"# \">Back to Portfolio</a>\n    </div>\n  </div>\n\n\n\n</div>\n","chatti":"<div class = \"container-fluid\">\n  <div class = \"row\">\n    <div class = \"col-md-12\">\n      <h1 class = \"float-left\"> Chatti </h1>\n      <a class = \"float-left-low\" href=\"http://elizabethshealy.github.io/chatti/\">View Site |</a>\n      <a class = \"float-left-low\" href=\"https://github.com/elizabethshealy/chatti\">Repo</a>\n    </div>\n  </div>\n  <!-- <div class = \"row\">\n    <div class = \"col-md-2\"></div>\n    <div class = \"col-md-8\">\n      <p> The appointments app was created as an assignment for my Front End Engineering class at The Iron Yard. <p>\n    </div>\n    <div class = \"col-md-2\"></div>\n  </div> -->\n\n  <div class = \"row\">\n    <div class = \"col-md-7\">\n      <img class=\"img-responsive down\" src=\"images/chatti.png\"/>\n    </div>\n    <div class = \"col-md-1\"></div>\n    <div class = \"col-md-4 text-style\">\n      <p class = \"appt-text\"> A chat application built using AJAX calls. <p>\n      <br>\n      <ul class = \"text-style\">Languages:\n        <li>HTML</li>\n        <li>CSS</li>\n        <li>Javascript</li>\n      </ul>\n      <br>\n      <ul class = \"text-style\">Frameworks:\n        <li>jQuery</li>\n        <li>Underscore.js</li>\n        <li>Ajax</li>\n      </ul>\n      <br>\n      <br>\n      <br>\n      <br>\n      <br>\n      <!-- <a class = \"float-right\" href=\"http://elizabethshealy.github.io/events/\">View Site |</a>\n      <a class = \"float-right\" href=\"https://github.com/elizabethshealy/events/tree/master\">Repo</a> -->\n    </div>\n  </div>\n\n  <div class = \"row space-row\">\n  </div>\n\n  <div class = \"row\">\n    <div class = \"col-md-12\">\n      <a class = \"nav-back\" href=\"# \">Back to Portfolio</a>\n    </div>\n  </div>\n</div>\n","contactme":"\n","forge":"<div class = \"container-fluid\">\n  <div class = \"row\">\n    <div class = \"col-md-12\">\n      <h1 class = \"float-left\"> The Forge </h1>\n      <a class = \"float-left-low\" href=\"http://tiy-forge.herokuapp.com/users/sign_in\">View Site |</a>\n      <a class = \"float-left-low\" href=\"https://github.com/The-Iron-Planet/forge\">Repo</a>\n    </div>\n  </div>\n  <!-- <div class = \"row\">\n    <div class = \"col-md-2\"></div>\n    <div class = \"col-md-8\">\n      <p> The appointments app was created as an assignment for my Front End Engineering class at The Iron Yard. <p>\n    </div>\n    <div class = \"col-md-2\"></div>\n  </div> -->\n\n  <div class = \"row\">\n    <div class = \"col-md-7\">\n      <img class=\"img-responsive down\" src=\"images/forge-new.png\"/>\n    </div>\n    <div class = \"col-md-1\"></div>\n    <div class = \"col-md-4 text-style\">\n      <p class = \"appt-text\"> A social application for Iron Yard graduates to network, find jobs, and share resources. Built in Ruby on Rails. <p>\n      <br>\n      <ul class = \"text-style\">Languages:\n        <li>HTML</li>\n        <li>CSS</li>\n        <li>Javascript</li>\n        <li>Ruby on Rails</li>\n      </ul>\n      <br>\n      <ul class = \"text-style\">Frameworks & Technologies:\n        <li>jQuery</li>\n        <li>Bootstrap</li>\n        <li>SASS</li>\n        <li>PostgreSQL</li>\n        <li>Rails 12 Factor</li>\n        <li>Devise</li>\n        <li>Paperclip</li>\n        <li>AWS-SDK</li>\n        <li>AutoHTML</li>\n        <br>\n      </ul>\n      <!-- <a class = \"float-right\" href=\"http://tiy-forge.herokuapp.com/users/sign_in\">View Site |</a>\n      <a class = \"float-right\" href=\"https://github.com/The-Iron-Planet/forge\">Repo</a> -->\n    </div>\n  </div>\n\n  <div class = \"row space-row\">\n  </div>\n\n  <div class = \"row\">\n    <div class = \"col-md-12\">\n      <a class = \"nav-back\" href=\"# \">Back to Portfolio</a>\n    </div>\n  </div>\n\n</div>\n","home":"<div class = \"container-fluid\">\n\n  <div class=\"row\">\n    <div class=\"col col-md-4\">\n      <div class = \"space\">\n        <a href=\"#appts\">\n          <img class=\"img-responsive styling\" src=\"images/events-new.png\"/>\n        </a>\n        <h3>HTML, CSS, jQuery</h3>\n      </div>\n    </div>\n\n    <div class=\"col col-md-4\">\n      <div class = \"space\">\n        <a href=\"#forge\">\n          <img class=\"img-responsive styling\" src=\"images/forge-new.png\"/>\n        </a>\n        <h3>HTML, CSS, jQuery</h3>\n      </div>\n\n      <div class = \"space\">\n        <a href=\"#chatti\">\n          <img class=\"img-responsive styling space\" src=\"images/chatti.png\"/>\n        </a>\n        <h3>HTML, CSS, jQuery</h3>\n      </div>\n    </div>\n\n    <div class=\"col col-md-4\">\n      <div class = \"space\">\n        <a href=\"#smashingboxes\">\n          <img class=\"img-responsive styling space\" src=\"images/smashing.png\"/>\n        </a>\n        <h3>HTML, CSS</h3>\n      </div>\n    </div>\n\n</div>\n","not-found":"<h1>404 Not found!</h1>","smashingboxes":"<div class = \"container-fluid\">\n  <div class = \"row\">\n    <div class = \"col-md-12\">\n      <h1 class = \"float-left\"> Smashing Boxes Website </h1>\n      <a class = \"float-left-low\" href=\"http://elizabethshealy.github.io/smashingboxes/\">View Site |</a>\n      <a class = \"float-left-low\" href=\"https://github.com/elizabethshealy/smashingboxes\">Repo</a>\n    </div>\n  </div>\n  <!-- <div class = \"row\">\n    <div class = \"col-md-2\"></div>\n    <div class = \"col-md-8\">\n      <p> The appointments app was created as an assignment for my Front End Engineering class at The Iron Yard. <p>\n    </div>\n    <div class = \"col-md-2\"></div>\n  </div> -->\n\n  <div class = \"row\">\n    <div class = \"col-md-7\">\n      <img class=\"img-responsive down\" src=\"images/smashing2.png\"/>\n    </div>\n    <div class = \"col-md-1\"></div>\n    <div class = \"col-md-4 text-style\">\n      <p class = \"appt-text\"> A remake of the Academy at Smashing Boxes website. This was the first project that I completed for the Iron Yard. <p>\n      <br>\n      <ul class = \"text-style\">Languages:\n        <li>HTML</li>\n        <li>CSS</li>\n        <li>jQuery</li>\n      </ul>\n      <br>\n      <ul class = \"text-style\">Other Technologies:\n        <li>Gulp</li>\n      </ul>\n      <br>\n      <br>\n      <br>\n      <br>\n      <br>\n      <br>\n      <br>\n      <br>\n      <br>\n      <!-- <a class = \"float-right\" href=\"https://github.com/elizabethshealy/smashingboxes\">View Site |</a>\n      <a class = \"float-right\" href=\"https://github.com/elizabethshealy/smashingboxes\">Repo</a> -->\n    </div>\n  </div>\n\n  <div class = \"row space-row\">\n  </div>\n\n  <div class = \"row\">\n    <div class = \"col-md-12\">\n      <a class = \"nav-back\" href=\"# \">Back to Portfolio</a>\n    </div>\n  </div>\n\n\n\n</div>\n"};
if (typeof module !== "undefined" && module.exports) { module.exports = views; }
},{}]},{},[]);
