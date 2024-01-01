export function getBubbleSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array;
    // const n = array.length;
    bubbleSortHelper(array, array.length, animations);
    return animations;
  }


function bubbleSortHelper(array, n, animations)
{
    for (let i = 0; i < n-1; i++)
    {
        for (let j = 0; j < n - i -1 ; j++)
            {
                if (array[j] > array[j + 1])
                {
                    animations.push(j);
                    animations.push(j+1);
                    animations.push(array[j]);
                    animations.push(array[j+1]);
                    array[j]=[array[j+1], array[j+1]=array[j]][0];
                }
            }
    }
}