// Create variables for the welcome message
var greeting = 'Hello, ';
var name = 'welcome to Sunshine Photography';
var message = '! How can I help you today?';

// Concatenate the three variables above to create the welcome message
var welcome = greeting + name + message;

// Get the element that has id of greeting
var el = document.getElementById('greeting');
el.textContent = welcome;
