interface IPersona{
    name : string
    edad : number
    sexo: string
    dni: string
    amigos : object[]

}

const persona1 : IPersona = {
    name: "Juan",
    edad: 29,
    sexo: "Hombre",
    dni: "52131678J",
    amigos : [
        {
            name: "Nacho",
            edad : 23,
        },
        {
            name : "Paloma",
            edad : 27,
        },
        {
            name: "Pilar",
            edad: 45
        }
    ]

}

const persona2 :IPersona = {
    name: "Pepa",
    edad: 25,
    sexo: "Mujer",
    dni: "56781234L",
    amigos : [
        {
            name: "Nacho",
            edad : 23,
        },
        {
            name : "Paloma",
            edad : 27,
        },
        {
            name: "Pilar",
            edad: 45
        }
    ]
}

const persona3 :IPersona = {
    name: "Jordi Hurtado",
    edad: 132,
    sexo: "Hombre",
    dni: "00000003H",
    amigos : [
        {
            name: "Juan Carlos",
            edad : 82,
        },
        {
            name : "Felipe Gonzalez",
            edad : 78,
        },

    ]
}



function deepClones(obj:object):object {
    if (typeof obj === 'object') {
        let cloned_obj:any = Array.isArray(obj) ? [] : {};
        for (let key:number = 0; key < Object.keys(obj).length; key++){
            cloned_obj[Object.keys(obj)[key]] = deepClones(Object.values(obj)[key]);
        }
        return cloned_obj;
    } else {
        return obj;
    }
};

function print(obj:object):void {
    for (let i:number = 0; i< Object.keys(obj).length; i++){
        if (Array.isArray(Object.values(obj)[i])){
            console.log(`${Object.keys(obj)[i]}:`)
            print(Object.values(obj)[i]);
        }else{
            console.log(`${Object.keys(obj)[i]}:`, Object.values(obj)[i]);
        }
    }
};

const prueba = print(persona1);
const prueba1 = deepClones(persona2);
print(prueba1);
const prueba2 = deepClones(persona3);
print(prueba2);