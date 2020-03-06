function newCategory(obj) {
    var keys = Object.keys(obj)
    return keys[ keys.length * Math.random() << 0];
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
              cities: ["bogota", "paris", "chicago", "lima", "berlin", "roma", "london", "toronto"],
              colors: ["yellow", "pink", "red", "blue", "green", "Brown", "gray", "orange" ],
              animals: ["pig", "horse", "cow", "cocodrile", "bird", "monkey", "rabbit", "fox"]}

function newSecret(th) {
  const palabra = th[Math.floor(Math.random()*th.length)]
  let length = palabra.length
  return palabra.split("");
}


export { newCategory, newSecret, themes }
