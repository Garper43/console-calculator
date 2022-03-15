class Vector {
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;

        this.length = sqrt(x*x+y*y);
    }

    setByAngle(angle, length) {
        this.angle = angle;
        this.length = length;

        this.x = cos(angle)*length;
        this.y = sin(angle)*length;
    }


    multiply(v) {
        return this.x * v.x + this.y * v.y;
    }

    findAngle(v) {
        return acos((this.multiply(v))/(this.length * v.length));
    }

    getNormal() {
        return 1;
    }
}