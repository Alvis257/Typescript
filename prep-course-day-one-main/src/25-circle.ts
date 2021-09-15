export { };

function Circle(radius: number): void {
  this.radius = radius;
  this.area = function (a: number): number {
    return Math.PI * Math.pow(a, 2);
  };
  this.perimeter = function (a: number): number {
    return 2 * Math.PI * a;

  };
}

const c = new Circle(3);
console.log("Area =", c.area(3).toFixed(2)); // Expected output: Area = 28.27
console.log("Perimeter =", c.perimeter(3).toFixed(2)); // Expected output: Perimeter = 18.85
