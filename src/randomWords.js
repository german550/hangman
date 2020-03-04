function randomTheme(obj) {
    var keys = Object.keys(obj)
    return obj[keys[ keys.length * Math.random() << 0]];
};

function getKey(object, value) {
            for (var prop in object) {
                if (object.hasOwnProperty(prop)) {
                    if (object[prop] === value)
                    return prop;
                }
            }
        }

const themes = {fruits: ["apple", "orange", "kiwi", "watermelon", "pineapple", "strawberry"],
              cities: ["bogota", "paris", "chicago", "lima", "Berlin", "Roma", "london", "toronto"],
              colors: ["yellow", "pink", "red", "blue", "green", "Brown", "gray", "orange" ],
              animals: ["pig", "horse", "cow", "cocodrile", "bird", "monkey", "rabbit", "fox"]}

let th = randomTheme(themes)
let s = th[Math.floor(Math.random()*th.length)]
let category = getKey(themes,th)

const palabra = s
let length = palabra.length
let secret = palabra.split("");

export { category, secret }
