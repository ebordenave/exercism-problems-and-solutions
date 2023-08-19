// @ts-check

/**
 * Implement the classes etc. that are needed to solve the
 * exercise in this file. Do not forget to export the entities
 * you defined so they are available for the tests.
 */
export function Size(width=80, height=60){
  this.width = width;
  this.height = height;
}

Size.prototype.resize = function(newWidth, newHeight) {
  this.width = newWidth;
  this.height = newHeight;
}


// defined a class called Position
// make the default values 0
// create
export function Position(x=0,y=0) {
  this.x = x;
  this.y = y;
}
// Create an instance method that moves the x and y positions to new x and new y positions
// this keyword provides new fields for new objects to have
Position.prototype.move = function(x,y) {
  this.x = x;
  this.y = y; 
}