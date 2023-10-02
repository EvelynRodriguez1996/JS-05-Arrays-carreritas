let participantes = ["Roberto", "Andrea", "Jorge", "Ramiro", "Sofia"];//Array de las lugares iniciales


let lugarFinal = participantes.slice();//Copia del arreglo 

/*
En una carrera se tienen los siguientes corredores con su respectiva posición:
0-roberto
1-andrea
2-jorge
3-ramiro
4-sofia

Ejercicio

1-Jorge adelanta a roberto
2-Ramiro adelanta a jorge
3-Roberto se lesiona y sale de la carrera
4-Andrea baja posicion
5-ramiro mantiene su lugar 4
6-jose es el quinto lugar 5 


0-ramiro -1er lugar
1-jorge -2do lugar
2-sofia -3er lugar
3-adrea -4to lugar
4-jose -5to lugar



*/

pos = lugarFinal.indexOf("Jorge");//Se obtien el lugar de Jorge
lugarFinal.splice(pos, 1);//Elimina a Jorge
lugarFinal.unshift("Jorge");//Se coloca al inicio

pos2 = lugarFinal.indexOf("Ramiro");//Se obtiene el lugar de Ramiro
lugarFinal.splice(pos2, 1);//Elimina ramiro de ese lugar
lugarFinal.unshift("Ramiro");//Se coloca al principio antes de jorge

pos3 = lugarFinal.indexOf("Roberto");//Se consigue el lugar de Roberto
lugarFinal.splice(pos3, 1);//Elimina porque se lesiona y sale de la carrera


pos4 = lugarFinal.indexOf("Andrea");//Se consigue la posicion de andrea
lugarFinal.splice(pos4, 1);//La elimina
lugarFinal.splice(pos4 + 1, 0, "Andrea");//Andrea baja una posicion


lugarFinal.push("Jose");//El quinto lugar es reemplazado por jose

console.log(participantes);//Se imprime los lugares iniciales
console.log(lugarFinal);//Seimprime los lugares de la 3ra vuelta

