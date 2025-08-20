import { useState } from 'react';
import "./style.css";

const GridSelect = () => {

    const [noOfClick, setNoOfClick] = useState(0);
    const [gridArr, setGridArr] = useState(Array.from({ length: 9 }));

    const clickGrid = (i) => {
        try {
            if (noOfClick + 1 > gridArr?.length || gridArr[i] !== undefined) return;
            let tempGridArr = structuredClone(gridArr);
            let tempNoOfClick = noOfClick + 1;
            tempGridArr[i] = tempNoOfClick;
            setGridArr(tempGridArr);
            setNoOfClick(tempNoOfClick);
        } catch (error) {
            throw Error(`Grid error on click: ${error}`);
        }
    };

    const clearGrid = () => {
        setGridArr(Array.from({ length: 9 }));
        setNoOfClick(0);
    };

    return (
        <div>
            <div className="grid-main">
                {
                    gridArr?.map((item, index) => {
                        return (
                            <button className={`grid-btn${item !== undefined ? "-selected" : ""}`} key={`${item}_${index}`} onClick={() => clickGrid(index)}>{item ?? 1}</button>
                        );
                    })
                }
            </div>
            <button className="clear-btn" onClick={() => clearGrid()}>Clear</button>
        </div>
    );
};

export default GridSelect;