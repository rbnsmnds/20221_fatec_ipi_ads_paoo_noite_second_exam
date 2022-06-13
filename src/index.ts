/* 
Prova 2 -  Mario L - 25 de maio de 2022

Você deverá resolver o seguinte problema.

1. Suponha que uma fábrica produza peças.
2. Há dois tipos de peças, as simples e as compostas.
3. Cada peça simples possui um name e um valor, além de 
   outras características que para o nosso problema não 
   são relevantes.
4. Cada peça composta c é constituída de uma lista de 
   pares (p, m), onde p é uma peça e m é o número de 
   cópias de p necessárias para se obter c.
5. O valor de uma peça composta é a soma do valor de 
   suas peças constituintes, levando-se em conta a 
   multiplicidade de cada uma de tais peças.
6. O seu sistema, além de evidentemente representar 
   computacionalmente a descrição acima, deverá 
   satisfazer os requisitos que seguem.

(i) Dada uma peça composta, 
    deve ser possível determinar o seu valor.

(ii) Para cada peça composta deve ser possível obter 
     uma lista com as peças simples que fazem parte da 
     peça composta.

(iii) Dado um valor v deve ser possível obter 
      uma lista com as peças cujo valor é no máximo a v.

(iv) Deve ser possível obter 
     uma lista das peças em ordem não-decrescente de valor.

(v) Dado um predicado p deve ser possível obter 
    uma lista com as peças que satisfazem p.

(vi) Dada uma peça simples s deve ser possível obter 
     uma lista com todas as peças compostas que 
     possuem s com uma de suas subpeças.
 */

     interface Unit {
        getValue(): number;
    }

    type PosInt = number;

    class Single implements Unit {
        private superParts: Array<Unit>
        constructor(readonly name: string, readonly value: number) {}
        getValue() { return this.value; }
        addSuperPart(part: Part)
    }

    class Compound implements Unit {
        private name: string;
        private parts: Array<[Unit, number]>
        private superParts: Array<Unit>
        addSuperPart(part: Part)
        addPart(part: Part, qty: PosInt) {}
        getValue(): number {
        }
    }
    
    class Factory {
        private singleUnits: Map<string, Single>
        private compoundUnits: Map<string, Compound>
        createSingle(name: string, value: number) {}
        createCompound(name: string){}
        addPart(compoundName: string, partName: string, qty: PosInt) {}
        orderByValue(): Array<string>
    }
    