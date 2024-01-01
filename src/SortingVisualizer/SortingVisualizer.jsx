import React from 'react';
import {getMergeSortAnimations} from '../sortingAlgorithms/mergeSort.js';
import {getBubbleSortAnimations} from '../sortingAlgorithms/bubbleSort.js';
import {getInsertionSortAnimations} from '../sortingAlgorithms/insertionSort.js';
import {getSelectionSortAnimations} from '../sortingAlgorithms/selectionSort.js';
import {getQuickSortAnimations} from '../sortingAlgorithms/quickSort.js';
import './SortingVisualizer.css';

const ANIMATION_SPEED_MS = 4;

const NUMBER_OF_ARRAY_BARS = 160;

const PRIMARY_COLOR = 'turquoise';

const SECONDARY_COLOR = 'red';

export default class SortingVisualizer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      array: []
    };
  }


  componentDidMount() {
    this.resetArray();
  }

  resetArray() {
    const array = [];
    for (let i = 0; i < NUMBER_OF_ARRAY_BARS; i++) {
      array.push(randomDoubleFromInterval(1, 80));
    }
    this.setState({array});
  }
  
  mergeSort() {
    const animations = getMergeSortAnimations(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar');
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}vh`;
        }, i * ANIMATION_SPEED_MS);
      }
    }
  }
   
 
  bubbleSort() {
    const animations = getBubbleSortAnimations(this.state.array);
    for (let i = 0; i < animations.length; i=i+4) {
      const arrayBars = document.getElementsByClassName('array-bar');
  
        const barOne = animations[i];
        const barTwo = animations[i+1];
        const newHeight1 = animations[i+2];
        const newHeight2 = animations[i+3];
        const barOneStyle = arrayBars[barOne].style;
        const barTwoStyle = arrayBars[barTwo].style;
        
        setTimeout(() => {
          barOneStyle.backgroundColor = SECONDARY_COLOR;
        }, i * ANIMATION_SPEED_MS);  
        setTimeout(() => {
          barTwoStyle.backgroundColor = SECONDARY_COLOR;
        }, i * ANIMATION_SPEED_MS);  
        setTimeout(() => {
          barOneStyle.height = `${newHeight2}vh`;
        }, i * ANIMATION_SPEED_MS);  
        setTimeout(() => {
          barTwoStyle.height = `${newHeight1}vh`;
        }, i * ANIMATION_SPEED_MS);  
        setTimeout(() => {
          barOneStyle.backgroundColor = PRIMARY_COLOR;
        }, i * ANIMATION_SPEED_MS); 
        setTimeout(() => { 
          barTwoStyle.backgroundColor = PRIMARY_COLOR;
        }, i * ANIMATION_SPEED_MS);
      }
  }

  insertionSort() {
    const animations = getInsertionSortAnimations(this.state.array);
    for (let i = 0; i < animations.length; i=i+3) {
      const arrayBars = document.getElementsByClassName('array-bar');

      if(animations[i] !== 1000)
      {
        const barOne = animations[i];
        const barTwo = animations[i+1];
        const newHeight1 = animations[i+2];
        const barOneStyle = arrayBars[barOne].style;
        const barTwoStyle = arrayBars[barTwo].style;
        
        setTimeout(() => {
          barOneStyle.backgroundColor = SECONDARY_COLOR;
        }, i * ANIMATION_SPEED_MS); 
        setTimeout(() => {
          barTwoStyle.backgroundColor = SECONDARY_COLOR;
        }, i * ANIMATION_SPEED_MS);   
        setTimeout(() => {
          barTwoStyle.height = `${newHeight1}vh`;
        }, i * ANIMATION_SPEED_MS); 
        setTimeout(() => {  
          barOneStyle.backgroundColor = PRIMARY_COLOR;
        }, i * ANIMATION_SPEED_MS);
        setTimeout(() => {  
          barTwoStyle.backgroundColor = PRIMARY_COLOR;
        }, i * ANIMATION_SPEED_MS);
      }

      else
      {
        const keybar = animations[i+1];
        const newHeight2 = animations[i+2];
        const keybarStyle = arrayBars[keybar].style;
        setTimeout(() => {
          keybarStyle.backgroundColor = SECONDARY_COLOR;
        }, i * ANIMATION_SPEED_MS);  
        setTimeout(() => {
          keybarStyle.height = `${newHeight2}vh`;
        }, i * ANIMATION_SPEED_MS);
        setTimeout(() => {
          keybarStyle.backgroundColor = PRIMARY_COLOR;
        }, i * ANIMATION_SPEED_MS);
      }
      }
  }

  selectionSort() {

    const animations = getSelectionSortAnimations(this.state.array);
    for (let i = 0; i < animations.length;) {
      const arrayBars = document.getElementsByClassName('array-bar');

      if(animations[i] !== 1000)
      {
        const barOneIdx = animations[i];
        const barTwoIdx = animations[i+1];
        const OneStyle = arrayBars[barOneIdx].style;
        const TwoStyle = arrayBars[barTwoIdx].style;
        
        setTimeout(() => {
          OneStyle.backgroundColor = SECONDARY_COLOR;
        }, i * ANIMATION_SPEED_MS);   
        setTimeout(() => {  
          TwoStyle.backgroundColor = SECONDARY_COLOR;
        }, i * ANIMATION_SPEED_MS);   

        setTimeout(() => {  
          OneStyle.backgroundColor = PRIMARY_COLOR;
        }, i * ANIMATION_SPEED_MS);  
        setTimeout(() => {   
          TwoStyle.backgroundColor = PRIMARY_COLOR;
        }, i * ANIMATION_SPEED_MS);

        i=i+2;
      }

      else
      {
        const barOne = animations[i+1];
        const barTwo = animations[i+2];
        const newHeight1 = animations[i+3];
        const newHeight2 = animations[i+4];
        const barOneStyle = arrayBars[barOne].style;
        const barTwoStyle = arrayBars[barTwo].style;
        
        setTimeout(() => {
          barOneStyle.backgroundColor = SECONDARY_COLOR;
        }, i * ANIMATION_SPEED_MS); 
        setTimeout(() => {
          barTwoStyle.backgroundColor = SECONDARY_COLOR;
        }, i * ANIMATION_SPEED_MS);  
        setTimeout(() => {
          barOneStyle.height = `${newHeight2}vh`;
        }, i * ANIMATION_SPEED_MS); 
        setTimeout(() => {
          barTwoStyle.height = `${newHeight1}vh`;
        }, i * ANIMATION_SPEED_MS);  
        setTimeout(() => {
          barOneStyle.backgroundColor = PRIMARY_COLOR;
        }, i * ANIMATION_SPEED_MS); 
        setTimeout(() => {
          barTwoStyle.backgroundColor = PRIMARY_COLOR;
        }, i * ANIMATION_SPEED_MS);

        i=i+5;
      }
      }
  }

  quickSort() {
      const animations = getQuickSortAnimations(this.state.array);
      for (let i = 0; i < animations.length;) {
      const arrayBars = document.getElementsByClassName('array-bar');
  
      if(animations[i] !== 1000)
      {
        const barOne = animations[i];
        const barTwo = animations[i+1];
        const newHeight1 = animations[i+2];
        const newHeight2 = animations[i+3];
        const barOneStyle = arrayBars[barOne].style;
        const barTwoStyle = arrayBars[barTwo].style;
        
        setTimeout(() => {
          barOneStyle.backgroundColor = SECONDARY_COLOR;
          barTwoStyle.backgroundColor = SECONDARY_COLOR;
        }, i * ANIMATION_SPEED_MS);  
        setTimeout(() => { 
          barOneStyle.height = `${newHeight2}vh`;
          barTwoStyle.height = `${newHeight1}vh`;
        }, i * ANIMATION_SPEED_MS);  
        setTimeout(() => {
          barOneStyle.backgroundColor = PRIMARY_COLOR;
          barTwoStyle.backgroundColor = PRIMARY_COLOR;
        }, i * ANIMATION_SPEED_MS);

        i=i+4;
      }

      else
      {
        const barOne = animations[i+1];
        const barTwo = animations[i+2];
        const newHeight1 = animations[i+3];
        const newHeight2 = animations[i+4];
        const barOneStyle = arrayBars[barOne].style;
        const barTwoStyle = arrayBars[barTwo].style;
        
        setTimeout(() => {
          barOneStyle.backgroundColor = SECONDARY_COLOR;
          barTwoStyle.backgroundColor = SECONDARY_COLOR;
        }, i * ANIMATION_SPEED_MS); 
        setTimeout(() => {
          barOneStyle.height = `${newHeight2}vh`;
          barTwoStyle.height = `${newHeight1}vh`;
        }, i * ANIMATION_SPEED_MS);  
        setTimeout(() => {
          barOneStyle.backgroundColor = PRIMARY_COLOR;
          barTwoStyle.backgroundColor = PRIMARY_COLOR;
        }, i * ANIMATION_SPEED_MS);

        i=i+5;
      }
      }
  }
  
  
  render() {
    const {array} = this.state;
    return (
      <div className="array-container">
        {
          array.map((value, idx) => (
          <div
            className="array-bar"
            key={idx}
            style={{
              backgroundColor: PRIMARY_COLOR,
              height: `${value}vh`,
            }}></div>
        ))}
        
        <div className="sideBar">
        <ul>
        <button className="button" onClick={() => this.resetArray()}>New Array</button>
        <button className="button" onClick={() => this.mergeSort()}>Merge Sort</button>
        <button className="button" onClick={() => this.quickSort()}>Quick Sort</button>
        <button className="button" onClick={() => this.bubbleSort()}>Bubble Sort</button>
        <button className="button" onClick={() => this.insertionSort()}>Insertion Sort</button>
        <button className="button" onClick={() => this.selectionSort()}>Selection Sort</button>
        </ul>
       </div>
       <div 
          className = "navbar"> 
          <a>Algo Vision</a>
          <ul className="navbarCen">Sorting Algorithm Visualizer</ul>
        </div>
      </div>
    );
  }
}

function randomDoubleFromInterval(min, max) {
  // min and max included
  return (Math.random() * (max - min + 1) + min);
}

function arraysAreEqual(arrayOne, arrayTwo) {
  if (arrayOne.length !== arrayTwo.length) return false;
  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] !== arrayTwo[i]) {
      return false;
    }
  }
  return true;
}
