// @ts-check

/**
 * Implement the classes etc. that are needed to solve the
 * exercise in this file. Do not forget to export the entities
 * you defined so they are available for the tests.
 */
export function Size(width = 80, height = 60) {
  this.width = width;
  this.height = height;
}

Size.prototype.resize = function (newWidth, newHeight) {
  this.width = newWidth;
  this.height = newHeight;
};

// defined a class called Position
// make the default values 0
// create
export function Position(x = 0, y = 0) {
  this.x = x;
  this.y = y;
}
// Create an instance method that moves the x and y positions to new x and new y positions
// this keyword provides new fields for new objects to have
Position.prototype.move = function (x, y) {
  this.x = x;
  this.y = y;
};

/**
 * Define a ProgramWindow class with the following fields:
 * screenSize: holds a fixed value of type Size with width 800 and height 600
 * size : holds a value of type Size, the initial value is the default value of the Size instance
 * position : holds a value of type Position, the initial value is the default value of the Position instance
 * When the window is opened (created), it always has the default size and position in the beginning.
 */
export class ProgramWindow {
  constructor() {
    this.screenSize = new Size(800, 600);
    this.size = new Size();
    this.position = new Position();
  }

  /* valueLimit is a utility function that constrains a given value with a specified range. valueLimit ensures that certain values stay within valid bounds. min parameter is the lower bound of the acceptable range while max is the acceptable upper bound */
  valueLimit(val, min, max) {
    return val < min ? min : val > max ? max : val;
  }

  /**
   * Task 4 - The ProgramWindow class should include a method resize. It should accept a parameter of type Size as input and attempts to resize the window to the specified size.
   * However, the new size cannot exceed certain bounds.
   * The minimum allowed height or width is 1. Requested heights or widths less than 1 will be clipped to 1.
   * The maximum height and width depend on the current position of the window, the edges of the window cannot move past the edges of the screen. Values larger than these bounds * will be clipped to the largest size they can take. E.g. if the window's position is at x = 400, y = 300 and a resize to height = 400, width = 300 is requested, then the window * * would be *resized to height = 300, width = 300 as the screen is not large enough in the y direction to fully accommodate the request
   */

  resize(newSize) {
    let newWidth = this.valueLimit(
      newSize.width,
      1,
      this.screenSize.width - this.position.x
    );
    let newHeight = this.valueLimit(
      newSize.height,
      1,
      this.screenSize.height - this.position.y
    );
    this.size.resize(newWidth, newHeight);
  }

  move(newPosition) {
    let newPositionX = this.valueLimit(
      newPosition.x,
      0,
      this.screenSize.width - this.size.width
    );
    let newPositionY = this.valueLimit(
      newPosition.y,
      0,
      this.screenSize.height - this.size.height
    );
    this.position.move(newPositionX, newPositionY);
  }
}

export function changeWindow(programWindow) {
  programWindow.move(new Position());
  programWindow.resize(new Size(400, 300));
  programWindow.move(new Position(100, 150));
  return programWindow;
}
