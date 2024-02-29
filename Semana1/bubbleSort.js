function BubbleSort(vetor){
    var i, j, aux;
    for(i = 0; i < vetor.length; i++){
        for(j = 0; j < vetor.length - i - 1; j++){
            if(vetor[j] > vetor[j + 1]){
                aux = vetor[j];
                vetor[j] = vetor[j + 1];
                vetor[j + 1] = aux;
            }
        }
    }
}
var vetor= [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
BubbleSort(vetor);
console.log(vetor);