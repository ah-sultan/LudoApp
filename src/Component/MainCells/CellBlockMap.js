import CellBlock from "./CellBlock"

const CellBlockMap = ({cellsList = [], reverse}) => {
  return (
    <>
      {
        cellsList.map((item) => 
          <CellBlock reverse={reverse ? `${100 - item.id}` : null} key={item.id} data={{...item}}/>
        )
      }
    </>
  )
}

export default CellBlockMap