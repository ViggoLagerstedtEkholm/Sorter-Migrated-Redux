import React, {useState} from "react";
import {BubbleSort} from "./Algorithms/BubbleSort";

import {
    BUBBLE_SORT,
    COCKTAIL_SORT,
    GNOME_SORT, HEAP_SORT,
    INSERTION_SORT,
    MERGE_SORT,
    QUICK_SORT,
    SELECTION_SORT, SHELL_SHORT, STOOGE_SORT
} from "./Algorithms/Algorithms";
import {InsertionSort} from "./Algorithms/InsertionSort";
import {MergeSort} from "./Algorithms/MergeSort";
import {QuickSort} from "./Algorithms/QuickSort";
import {SelectionSort} from "./Algorithms/SelectionSort";
import {GnomeSort} from "./Algorithms/GnomeSort";
import {CocktailSort} from "./Algorithms/CocktailSort";
import {HeapSort} from "./Algorithms/HeapSort";
import {ShellSort} from "./Algorithms/ShellSort";
import {StoogeSort} from "./Algorithms/StoogeSort";
import {RootStateOrAny, useDispatch, useSelector} from "react-redux";
import {start, stop} from "../Actions";
import Nav from "./Nav";

const RUN_AFTER_SLEEP = 1;
const AMOUNT = 80;
const SHUFFLE_SLEEP = 10;
const RUN_SLEEP = 5;

export const Sorter: React.FC = () => {
    const [array, setArray] = useState<number[]>([]);
    const [colors, setColorArray] = useState<number[]>(Array.from({length: AMOUNT}, () => AMOUNT));
    const dispatch = useDispatch();
    const algorithm = useSelector((state: RootStateOrAny) => state.algorithm);

    function timeout(ms: number): Promise<unknown> {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    async function sort() {
        dispatch(start());

        const shuffleArray = Array.from({length: AMOUNT}, (_, i) => i + 1);
        const shuffled = shuffleValues(shuffleArray);
        await visualizeShuffle(shuffled);

        let animation: {index: number, newValue: number}[];
        switch(algorithm){
            case BUBBLE_SORT: animation = BubbleSort(shuffled);
                break;
            case COCKTAIL_SORT: animation = CocktailSort(shuffled);
                break;
            case GNOME_SORT: animation = GnomeSort(shuffled);
                break;
            case HEAP_SORT: animation = HeapSort(shuffled);
                break;
            case INSERTION_SORT: animation = InsertionSort(shuffled);
                break;
            case MERGE_SORT: animation = MergeSort(shuffled);
                break;
            case QUICK_SORT: animation = QuickSort(shuffled);
                break;
            case SELECTION_SORT: animation = SelectionSort(shuffled);
                break;
            case SHELL_SHORT: animation = ShellSort(shuffled);
                break;
            case STOOGE_SORT: animation = StoogeSort(shuffled);
                break;
            default:
                return;
        }
        await visualizeSorting(animation);
        await runWhenSorted();

        dispatch(stop());
    }

    async function visualizeShuffle(shuffleArray: number[]): Promise<void> {
        return new Promise<void>(async (resolve) => {
            for (let index = 0; index < shuffleArray.length; index++) {
                const randomVal = shuffleArray[Math.floor(Math.random() * shuffleArray.length)];
                update(index, randomVal);
                setColor(index);
                await timeout(SHUFFLE_SLEEP);
            }
            resolve();
        });
    }

    function shuffleValues(array: Array<number>): Array<number>{
        let currentIndex = array.length,  randomIndex;
        while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
        }
        return array;
    }

    async function visualizeSorting(steps: {index: number, newValue: number}[]): Promise<void>{
        return new Promise(async (resolve) => {
            for (let i = 0; i < steps.length; i++) {
                const change = steps[i];

                const {
                    index,
                    newValue
                } = change;

                update(index, newValue);
                setColor(index);

                await timeout(RUN_SLEEP);
            }
            resolve();
        });
    }

    function runWhenSorted() : Promise<void>{
        return new Promise(async (resolve)=>{
            for (let index = 0; index < array.length; index++) {
                setTimeout(() =>{
                    setColor(index);
                }, index * RUN_AFTER_SLEEP)
            }
            resolve();
        });
    }

    function update(index: number, newValue: number){
        setArray((prevArr) => {
            const newArr = [...prevArr];
            newArr[index] = newValue;
            return newArr;
        });
    }

    function setColor(index: number){
        setColorArray((prevArr) => {
            const newArr = [...prevArr];
            newArr[index] = 100;
            for (let i = 0; i < newArr.length; i++) {
                if(newArr[i] > 60){
                    newArr[i] -= 1;
                }
            }
            return newArr;
        });
    }

    return(
        <div>
            <Nav sort={sort}/>

            <div className="selected">
                {algorithm}
            </div>

            <div className="creator">
                Viggo Lagerstedt Ekholm
            </div>

            <div className="visualizer-container">
                <div className="array-container">
                    {array.map((barHeight, index) => (
                        <div
                            className="array-bar"
                            style={{
                                height: `${(barHeight / AMOUNT) * 64 + 10}vmin`,
                                width: `${100 / array.length}vw`,
                                backgroundColor: `${"rgb(" + colors[index] + ", " + colors[index] + ", " + colors[index] + " )"}`,
                            }}
                            key={index}>
                            <p>{barHeight}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    )
}

export default Sorter;
