function InsertionSort(vetor){
    let i, j, atual;
    for(i = 1; i < vetor.length; i++){
        atual = vetor[i];
        j = i - 1;
        while(j >= 0 && vetor[j] > atual){
            vetor[j + 1] = vetor[j];
            j--;
        }
        vetor[j + 1] = atual;
    }
}

var vetor = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
InsertionSort(vetor);
console.log(vetor);