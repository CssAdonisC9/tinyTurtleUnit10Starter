TinyTurtle.apply(window, [undefined, 400, 400]);

function square(){
forward(50);
right(90);
forward(50);
right(90);
forward(50);
right(90);
forward(50);
right(90);
forward(50);
}

function triangle(sideLength){
right(45);
forward(sideLength);
right(90);
forward(sideLength);
right(135);
forward(sideLength*(7/5));  
}

function rectangle(len){
forward(len);
right(90);
forward(len*(1/2));
right(90);
forward(len);
right(90);
forward(len*(1/2));  
}
function trapezoid(size){
right(45);
forward(size);
right(45);
forward(size*(13/10));
right(45);
forward(size);
right(135);
forward(size*(67/25));
}

function house(){
square();
triangle(36);
}
// Type your function call below
 rectangle(100);
 triangle(71);
 trapezoid(65);

stamp();
