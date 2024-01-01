export function getInsertionSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array;
    // const n = array.length;
    insertionSortHelper(array, array.length, animations);
    return animations;
  }


function insertionSortHelper(array, n, animations)
{
    let i, key, j;
    for (i = 1; i < n; i++)
    {
        key = array[i];
        j = i - 1;
        while (j >= 0 && array[j] > key)
        {
            animations.push(j);
            animations.push(j+1);
            animations.push(array[j]);
            array[j + 1] = array[j];
            j = j - 1;
        }
        animations.push(1000);
        animations.push(j+1);
        animations.push(key);
        array[j + 1] = key;
    }
}