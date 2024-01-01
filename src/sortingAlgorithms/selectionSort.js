export function getSelectionSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array;
    // const n = array.length;
    selectionSortHelper(array, array.length, animations);
    return animations;
  }


  function selectionSortHelper(array, n, animations)
  {
      let i, j, min_idx;
   
      // One by one move boundary of
      // unsorted subarray
      for (i = 0; i < n-1; i++)
      {
         
          // Find the minimum element in
          // unsorted array
          min_idx = i;
          for (j = i+1; j < n; j++)
          {
            if (array[j] < array[min_idx])
            {
                animations.push(min_idx);
                animations.push(j);
                min_idx = j;
            }
          }
          // Swap the found minimum element
          // with the first element
          if(min_idx!=i)
          {
            animations.push(1000);
            animations.push(min_idx);
            animations.push(i);
            animations.push(array[min_idx]);
            animations.push(array[i]);
            array[min_idx]=[array[i], array[i]=array[min_idx]][0];
          }
      }
  }
