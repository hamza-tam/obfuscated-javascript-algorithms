function partition(arr, low, high) {
    let pivot = arr[high];
    let i = low - 1;

    for (let j = low; j <= high - 1; j++) {
        if (arr[j] < pivot) {
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]]; 
        }
    }
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]]; 
    return i + 1; 
}

function sort(arr, low, high) {
    if (low >= high){
        return;
    }
    let pi = partition(arr, low, high);

    sort(arr, low, pi - 1);
    sort(arr, pi + 1, high);
}

