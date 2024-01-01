export function getQuickSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array;
    // const n = array.length;
    quickSortHelper(array, 0, array.length - 1, animations);
    return animations;
  }
  

function quickSortHelper(array, low, high, animations)
{
    if (low < high) {
        let p = partition(array, low, high, animations);
        quickSortHelper(array, low, p - 1, animations);
        quickSortHelper(array, p + 1, high, animations);
    }
}


function partition(array, low, high, animations)
{
    let pivot = array[high];
    let i = (low - 1); 
  
    for (let j = low; j <= high - 1; j++) 
    {
        if (array[j] < pivot) 
        {
            i++;
            animations.push(i);
            animations.push(j);
            animations.push(array[i]);
            animations.push(array[j]);
            array[i]=[array[j], array[j]=array[i]][0];
        }
    }
    animations.push(1000);
    animations.push(i+1);
    animations.push(high);
    animations.push(array[i+1]);
    animations.push(array[high]);
    array[i+1]=[array[high], array[high]=array[i+1]][0];
    return (i + 1);
}