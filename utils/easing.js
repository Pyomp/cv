
export const easing = {
    linear: {
        none: function (amount) {
            return amount;
        },
    },
    quadratic: {
        in: function (amount) {
            return amount * amount;
        },
        out: function (amount) {
            return amount * (2 - amount);
        },
        inOut: function (amount) {
            if ((amount *= 2) < 1) {
                return 0.5 * amount * amount;
            }
            return -0.5 * (--amount * (amount - 2) - 1);
        },
    },
    cubic: {
        in: function (amount) {
            return amount * amount * amount;
        },
        out: function (amount) {
            return --amount * amount * amount + 1;
        },
        inOut: function (amount) {
            if ((amount *= 2) < 1) {
                return 0.5 * amount * amount * amount;
            }
            return 0.5 * ((amount -= 2) * amount * amount + 2);
        },
    },
    quartic: {
        in: function (amount) {
            return amount * amount * amount * amount;
        },
        out: function (amount) {
            return 1 - --amount * amount * amount * amount;
        },
        inOut: function (amount) {
            if ((amount *= 2) < 1) {
                return 0.5 * amount * amount * amount * amount;
            }
            return -0.5 * ((amount -= 2) * amount * amount * amount - 2);
        },
    },
    quintic: {
        in: function (amount) {
            return amount * amount * amount * amount * amount;
        },
        out: function (amount) {
            return --amount * amount * amount * amount * amount + 1;
        },
        inOut: function (amount) {
            if ((amount *= 2) < 1) {
                return 0.5 * amount * amount * amount * amount * amount;
            }
            return 0.5 * ((amount -= 2) * amount * amount * amount * amount + 2);
        },
    },
    sinusoidal: {
        in: function (amount) {
            return 1 - Math.cos((amount * Math.PI) / 2);
        },
        out: function (amount) {
            return Math.sin((amount * Math.PI) / 2);
        },
        inOut: function (amount) {
            return 0.5 * (1 - Math.cos(Math.PI * amount));
        },
    },
    exponential: {
        in: function (amount) {
            return amount === 0 ? 0 : Math.pow(1024, amount - 1);
        },
        out: function (amount) {
            return amount === 1 ? 1 : 1 - Math.pow(2, -10 * amount);
        },
        inOut: function (amount) {
            if (amount === 0) {
                return 0;
            }
            if (amount === 1) {
                return 1;
            }
            if ((amount *= 2) < 1) {
                return 0.5 * Math.pow(1024, amount - 1);
            }
            return 0.5 * (-Math.pow(2, -10 * (amount - 1)) + 2);
        },
    },
    circular: {
        in: function (amount) {
            return 1 - Math.sqrt(1 - amount * amount);
        },
        out: function (amount) {
            return Math.sqrt(1 - --amount * amount);
        },
        inOut: function (amount) {
            if ((amount *= 2) < 1) {
                return -0.5 * (Math.sqrt(1 - amount * amount) - 1);
            }
            return 0.5 * (Math.sqrt(1 - (amount -= 2) * amount) + 1);
        },
    },
    elastic: {
        in: function (amount) {
            if (amount === 0) {
                return 0;
            }
            if (amount === 1) {
                return 1;
            }
            return -Math.pow(2, 10 * (amount - 1)) * Math.sin((amount - 1.1) * 5 * Math.PI);
        },
        out: function (amount) {
            if (amount === 0) {
                return 0;
            }
            if (amount === 1) {
                return 1;
            }
            return Math.pow(2, -10 * amount) * Math.sin((amount - 0.1) * 5 * Math.PI) + 1;
        },
        inOut: function (amount) {
            if (amount === 0) {
                return 0;
            }
            if (amount === 1) {
                return 1;
            }
            amount *= 2;
            if (amount < 1) {
                return -0.5 * Math.pow(2, 10 * (amount - 1)) * Math.sin((amount - 1.1) * 5 * Math.PI);
            }
            return 0.5 * Math.pow(2, -10 * (amount - 1)) * Math.sin((amount - 1.1) * 5 * Math.PI) + 1;
        },
    },
    back: {
        in: function (amount, s = 1.70158) {
            return amount * amount * ((s + 1) * amount - s);
        },
        out: function (amount, s = 1.70158) {
            return --amount * amount * ((s + 1) * amount + s) + 1;
        },
        inOut: function (amount, s = 2.5949095) {
            if ((amount *= 2) < 1) {
                return 0.5 * (amount * amount * ((s + 1) * amount - s));
            }
            return 0.5 * ((amount -= 2) * amount * ((s + 1) * amount + s) + 2);
        },
    },
    bounce: {
        in: function (amount) {
            return 1 - Easing.Bounce.out(1 - amount);
        },
        out: function (amount) {
            if (amount < 1 / 2.75) {
                return 7.5625 * amount * amount;
            }
            else if (amount < 2 / 2.75) {
                return 7.5625 * (amount -= 1.5 / 2.75) * amount + 0.75;
            }
            else if (amount < 2.5 / 2.75) {
                return 7.5625 * (amount -= 2.25 / 2.75) * amount + 0.9375;
            }
            else {
                return 7.5625 * (amount -= 2.625 / 2.75) * amount + 0.984375;
            }
        },
        inOut: function (amount) {
            if (amount < 0.5) {
                return Easing.Bounce.in(amount * 2) * 0.5;
            }
            return Easing.Bounce.out(amount * 2 - 1) * 0.5 + 0.5;
        },
    },
};
