import "./result.scss"
import cartable from "../../assets/cartable.png"
import { Link } from "react-scroll";
import { useEffect } from "react";
import { useState } from "react";
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import FormatListNumberedRtlIcon from '@material-ui/icons/FormatListNumberedRtl';
import LineWeightIcon from '@material-ui/icons/LineWeight';
import gsap, { TweenMax, Power3, TimelineLite } from "gsap";
import { useRef } from "react";
import EditIcon from '@material-ui/icons/Edit';
function Tpro() {
  let tl = gsap.timeline()
  let overlayRef = useRef();
  let result = useRef();
  const [capacity, setCapacity] = useState()
  const [weightInput, setWeightInput] = useState()
  const [maxWeight, setMaxWeight] = useState()
  const [resultsArray, setResultArray] = useState([])
  const [done, setDone] = useState(false)
  const [modify, setModify] = useState(false)
  const handleCapacity = () => {
    //setCapacity(weightInput)
    setDone(true)
    setWeightInput(0)
    setModify(false)
  }
  const handleModify = () => {
    setModify(true)

  }
  function knapsack(items, capacity) {
    // This implementation uses dynamic programming.
    // Variable 'memo' is a grid(2-dimentional array) to store optimal solution for sub-problems,
    // which will be later used as the code execution goes on.
    // This is called memoization in programming.
    // The cell will store best solution objects for different capacities and selectable items.
    var memo = [];

    // Filling the sub-problem solutions grid.
    for (var i = 0; i < items.length; i++) {
      // Variable 'cap' is the capacity for sub-problems. In this example, 'cap' ranges from 1 to 6.
      var row = [];
      for (var cap = 1; cap <= capacity; cap++) {
        row.push(getSolution(i, cap));
      }
      memo.push(row);
    }

    // The right-bottom-corner cell of the grid contains the final solution for the whole problem.
    return (getLast());

    function getLast() {
      var lastRow = memo[memo.length - 1];
      return lastRow[lastRow.length - 1];
    }

    function getSolution(row, cap) {
      const NO_SOLUTION = { maxValue: 0, subset: [] };
      // the column number starts from zero.
      var col = cap - 1;
      var lastItem = items[row];
      // The remaining capacity for the sub-problem to solve.
      var remaining = cap - parseInt(lastItem.weight);

      // Refer to the last solution for this capacity,
      // which is in the cell of the previous row with the same column
      var lastSolution = row > 0 ? memo[row - 1][col] || NO_SOLUTION : NO_SOLUTION;
      // Refer to the last solution for the remaining capacity,
      // which is in the cell of the previous row with the corresponding column
      var lastSubSolution = row > 0 ? memo[row - 1][remaining - 1] || NO_SOLUTION : NO_SOLUTION;

      // If any one of the items weights greater than the 'cap', return the last solution
      if (remaining < 0) {
        return lastSolution;
      }

      // Compare the current best solution for the sub-problem with a specific capacity
      // to a new solution trial with the lastItem(new item) added
      var lastValue = lastSolution.maxValue;
      var lastSubValue = lastSubSolution.maxValue;

      var newValue = lastSubValue + parseFloat(lastItem.value);
      if (newValue >= lastValue) {
        // copy the subset of the last sub-problem solution
        var _lastSubSet = lastSubSolution.subset.slice();
        _lastSubSet.push(lastItem);
        return { maxValue: newValue, subset: _lastSubSet };
      } else {
        return lastSolution;
      }
    }
  }
  const [itemsList, setItemsList] = useState([])
  const [item, setItem] = useState([])
  const [name, setName] = useState("")
  const [weight, setWeight] = useState()
  const [value, setValue] = useState()
  const addItem = (e) => {
    e.preventDefault()

    if (weight != 0 && value != 0 && name !== "") {
      let objet = {
        item: name, weight, value, id: itemsList.length
      }
      setItemsList(current => [...current, objet]);
      //setName("")
      setWeight(0)
      setValue(0)
    }
  }
  const getResult = () => {


    const resultat = knapsack(itemsList, capacity)
    console.log(resultat.subset)
    setResultArray(resultat.subset)
    setMaxWeight(resultat.maxValue)
  }


  useEffect(() => {
    tl
      .from(result.current, 1.2, { opacity: 0 }, .5)
      .fromTo(
        overlayRef, 2,
        { yPercent: -100, opacity: 0 },
        { yPercent: 0, opacity: 1, duration: 0.4, ease: "power2" }, 1.5,
      )
    //Trying addressing menu items


  }, []);


  useEffect(() => {
    console.log(itemsList.length)
  }, [itemsList])
  const columns: GridColDef[] = [
    {
      field: 'item', headerName: 'Item', width: 200, headerClassName: 'header', headerAlign: 'center',
      renderCell: (params) => {
        return (
          <div className="style--cell">
            {params.row.item}
          </div>
        );
      },
    },
    {
      field: 'weight', headerName: 'Weight', width: 230, headerClassName: 'header', headerAlign: 'center',
      renderCell: (params) => {
        return (
          <div className="style--cell">
            {params.row.weight}
          </div>
        );
      },
    },
    {
      field: 'value', headerName: 'Value', width: 230, headerClassName: 'header', headerAlign: 'center',
      renderCell: (params) => {
        return (
          <div className="style--cell">
            {params.row.value}
          </div>
        );
      },
    },

  ];
  let rows = []
  itemsList?.length > 0 &&
    itemsList?.forEach((item) => {
      rows.push({
        id: item.id,
        item: item.item,
        weight: item.weight,
        value: item.value,


      });
    });


  let filteredRows = []
  resultsArray?.length > 0 &&
    resultsArray?.forEach((item) => {
      filteredRows.push({
        id: item.id,
        item: item.item,
        weight: item.weight,
        value: item.value,
      });
    });
  return (
    <div name="result" className="tp">
      <div className="bigcontain">
        <div className="form-container">
          {(!done || modify) && <div style={{ width: "60%", height: "40px", marginBottom: "20px", display: "flex", alignItems: "center" }} >
            <input value={capacity} onChange={e => setCapacity(e.target.value)} style={{ width: "80%", height: "100%", paddingLeft: "20px" }} placeholder="Total capacity" />
            <button style={{ width: '20%', backgroundColor: "#01bf71", height: "100%" }} onClick={handleCapacity} >ok</button>
          </div> }
             {done && !modify && <div className="itemForm">
              <div>Capacity {capacity}</div>
              <EditIcon className="icon" onClick={handleModify} />
            </div>
          }
         
          <form onSubmit={addItem}>
           
            <div className="formBottom">
              <div className="contain-input">
                <input value={name} onChange={e => { setName(e.target.value) }} placeholder="Item name" />
                <LocalMallIcon className="icon" />
              </div>
              <div className="contain-input">
                <input onChange={e => { setWeight(e.target.value) }} value={weight} type="number" placeholder="Item weight" />
                <LineWeightIcon className="icon" />
              </div>
              <div className="contain-input">
                <input onChange={e => { setValue(e.target.value) }} value={value} type="number" placeholder="Item value" />
                <FormatListNumberedRtlIcon className="icon" />
              </div>
              <button onClick={addItem} type="submit" >add</button>
            </div>
          </form>
        </div>
        {itemsList.length > 0 && <div className="dataGrid_container"><DataGrid
          scrollbarSize={false}
          width="100%"
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          sx={{
            //backgroundColor:"black",
            color: '#fff',

          }}
        />
        </div>
        }


        {itemsList.length > 0 && <Link to="sacAdos" spy={true} smooth={true} offset={50} duration={800} className="style-getResult" onClick={getResult}>get results</Link>}
        {resultsArray.length > 0 && <div style={{ textAlign: "center", marginBottom: "20px", fontWeight: "600" }} ref={el => { result = el }} >Maximum used weight is {maxWeight} </div>}
        <div ref={el => { overlayRef = el }} className="dataGrid_containerr" name="sacAdos">
          {resultsArray?.length > 0 && resultsArray.map((e) =>
          (
            <div >
              <p>{e.item}</p>
              <p>{e.weight}</p>
              <p>{e.value}</p>

            </div>
          ))

          }
        </div>

      </div>
    </div>
  );
}

export default Tpro;
