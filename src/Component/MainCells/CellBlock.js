import CellBody from "./CellBody"

const CellBlock = ({ data, className, reverse }) => {




  if (data.id === 1) {
    return (
      <div className={`${className} border flex justify-center items-center start-cell player1 text-xs`} style={{ order: reverse }}>
        <CellBody data={data} isStartCell={true} />
      </div>
    )
  } else if (data.id === 14) {
    return (
      <div className={`${className} border flex justify-center items-center bg-primary start-cell player2 text-xs`} style={{ order: reverse }}>
        <CellBody data={data} isStartCell={true} />
      </div>
    )
  } else if (data.id === 27) {
    return (
      <div className={`${className} border flex justify-center items-center bg-primary start-cell player3 text-xs`} style={{ order: reverse }}>
        <CellBody data={data} isStartCell={true} />
      </div>
    )
  } else if (data.id === 40) {
    return (
      <div className={`${className} border flex justify-center items-center bg-primary start-cell player4 text-xs`} style={{ order: reverse }}>
        <CellBody data={data} isStartCell={true} />
      </div>
    )
  } else {
    return (
      <div className={`${className} border flex justify-center items-center text-xs`} style={{ order: reverse }}>
        <CellBody data={data} />
      </div>
    )
  }
}

export default CellBlock